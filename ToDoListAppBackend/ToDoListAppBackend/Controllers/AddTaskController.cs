using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoListAppBackend.Application;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddTaskController:ControllerBase
    {
        private readonly ITaskService _taskService;

        public AddTaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }


        [HttpPost]
        public async Task<TaskModel> AddTask([FromBody]AddNewTaskModel input)
        {
           return await _taskService.CreateTaskAsync(input.Name, input.IsDone);
        }
    }
}
