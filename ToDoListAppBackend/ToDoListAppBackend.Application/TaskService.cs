using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListAppBackend.Data;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Application
{
    public class TaskService:ITaskService
    {
        private readonly IRepository<TaskModel> _taskRepository;

        public TaskService(IRepository<TaskModel> taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public async Task<List<TaskModel>> GetTasksAsync()
        {
            return await _taskRepository.Query().ToListAsync();
        }

        public async Task<TaskModel> DeleteTaskAsync(Guid id)
        {
            var task = await _taskRepository.GetAsync(item => item.Id == id);

            if(task == null)
            {
                throw new ArgumentException("Such task isn`t exist");
            }

            return await _taskRepository.DeleteAsync(task);
        }

        public async Task<TaskModel> CreateTaskAsync(string nameOfTask, bool isDone)
        {
            TaskModel task = await _taskRepository.GetAsync(u => u.Name == nameOfTask);

            if (task != null)
            {
                throw new Exception("Such task exist!");
            }
            
            var newTask = new TaskModel
            {
                Name = nameOfTask,
                IsDone = isDone
            };
            
            return await _taskRepository.InsertAsync(newTask);
        }

        public async Task<TaskModel> UpdateTaskAsync(Guid id)
        {
            TaskModel task = await _taskRepository.GetAsync(u => u.Id == id);

            if (task == null)
            {
                throw new ArgumentException("Such task isn`t exist");
            }

            task.IsDone = true ? false : true;

            return await _taskRepository.UpdateAsync(task);
        }
    }
}
       

       

      

       