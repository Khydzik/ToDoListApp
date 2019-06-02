using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoListAppBackend.Data.Models;

namespace ToDoListAppBackend.Application
{
    public interface ITaskService
    {
        Task<List<TaskModel>> GetTasksAsync();
        Task<TaskModel> DeleteTaskAsync(Guid id);
        Task<TaskModel> CreateTaskAsync(string nameOfTask, bool isDone);
        Task<TaskModel> UpdateTaskAsync(Guid id);
    }
}
