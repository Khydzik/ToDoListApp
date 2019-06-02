using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoListAppBackend.Application;
using ToDoListAppBackend.Data.Models;
using System;

namespace ToDoListAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpdateTaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public UpdateTaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpPatch]
        public async Task<TaskModel> UpdateTask([FromBody]EditTaskModel input)
        {
            var result = await _taskService.UpdateTaskAsync(input.IdTask);

            if (result == null)
                throw new NullReferenceException("This task is not update!!!");

            return result;
        }
    }
}
