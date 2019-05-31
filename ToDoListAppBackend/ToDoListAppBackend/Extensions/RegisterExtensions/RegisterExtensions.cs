using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using ToDoListAppBackend.Data;
using ToDoListAppBackend.Application;

namespace ToDoListAppBackend.Extensions.RegisterExtensions
{
    public static class RegisterExtensions
    {
        public static void AddScopedExtensions(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<ApplicationContext, ApplicationContext>();
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        }
    }
}
