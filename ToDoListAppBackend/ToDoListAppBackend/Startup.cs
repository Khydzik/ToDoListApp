using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ToDoListAppBackend.Data;
using ToDoListAppBackend.Extensions.CorsExtensions;
using ToDoListAppBackend.Extensions.EnsureMigration;
using ToDoListAppBackend.Extensions.RegisterExtensions;
using ToDoListAppBackend.Extensions.SwaggerExtentions;
using ToDoListAppBackend.Filters;
using ToDoListAppBackend.Models;

namespace ToDoListAppBackend
{
    public class Startup
    {
        private IConfiguration _configuration { get; }

        public Startup(IConfiguration configuration, IHostingEnvironment hostingEnvironment)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScopedExtensions(_configuration);
            services.AddSwaggerService();
            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(
                _configuration.GetConnectionString(Constants.DefaultConnection),
                apt => apt.MigrationsAssembly(typeof(ApplicationContext).Namespace)));
            services.AddMvc(config =>
            {
                config.Filters.Add(typeof(GlobalExceptionFilter));
            });           
            services.AddTransient<DataSeeder>();
            services.AddCorsService();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, DataSeeder seeder)
        {
            app.MigrationOfContext().GetAwaiter().GetResult();
            seeder.Seed().GetAwaiter().GetResult();
            app.AddCorsConfig();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
            app.AddSwaggerConfig();
        }
    }
}

