using Microsoft.EntityFrameworkCore;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        { }

        public DbSet<TaskModel> TaskModels{ get; set; }
    }
}