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
    public class GetAllTasksController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public GetAllTasksController(ITaskService taskService)
        {

            _taskService = taskService;
        }

        [HttpGet]
        public async Task<List<TaskModel>> GetAllTasks()
        {
            var tasks = await _taskService.GetTasksAsync();

            if (tasks == null)
                throw new ArgumentException("There are no created tasks");


            return tasks;
        }
    }
}