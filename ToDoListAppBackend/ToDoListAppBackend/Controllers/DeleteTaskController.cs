using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoListAppBackend.Application;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeleteTaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public DeleteTaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }


        [HttpDelete]
        public async Task<IActionResult> DeleteTask([FromBody]DeleteTaskModel input)
        {
            await _taskService.DeleteTaskAsync(input.IdTask);

            return Ok();
        }
    }
}
