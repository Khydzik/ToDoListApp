using System.Threading.Tasks;
using ToDoListAppBackend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ToDoListAppBackend.Data
{
    public class DataSeeder
    {
        private readonly IRepository<TaskModel> _taskRepository;

        public DataSeeder(IRepository<TaskModel> taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public async Task Seed()
        {
            var task = new TaskModel
            {
                Name = "Learn React Native",
                IsDone = false
            };

            if (await _taskRepository.Query().FirstOrDefaultAsync(item => item.Name == task.Name) == null)
            {
                var result = await _taskRepository.InsertAsync(task);
            }
        }
    }
}
