using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListAppBackend.Application;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpDelete]
        public async Task<TaskModel> DeleteTask([FromBody]DeleteTaskModel input)
        {
            return await _taskService.DeleteTaskAsync(input.IdTask);
        }

        [HttpPatch]
        public async Task<TaskModel> UpdateTask([FromBody]EditTaskModel input)
        {
            var result = await _taskService.UpdateTaskAsync(input.IdTask);

            if (result == null)
                throw new NullReferenceException("This task is not update!!!");

            return result;
        }

        [HttpGet]
        public async Task<List<TaskModel>> GetAllTasks()
        {
            var tasks = await _taskService.GetTasksAsync();

            if (tasks == null)
                throw new ArgumentException("There are no created tasks");

            return tasks;
        }

        [HttpPost]
        public async Task<TaskModel> AddTask([FromBody]AddNewTaskModel input)
        {
            return await _taskService.CreateTaskAsync(input.Name, input.IsDone);
        }
    }
}
