using System;
using Moq;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ToDoListAppBackend.Application;
using ToDoListAppBackend.Data;
using ToDoListAppBackend.Data.Models;
using Xunit;

namespace ToDoListAppBackend.Test
{
    [ExcludeFromCodeCoverage]
    public class ToDoListAppBackend
    {

        [Fact]
        public async Task CreateTaskCheckReturnTaskExist_Test()
        {
            var mock = new Mock<IRepository<TaskModel>>();

            TaskModel task = new TaskModel
            {
                Id = new Guid(),
                Name = "do Task",
                IsDone = false
            };

            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async () => { return task; });

            var userService = new TaskService(mock.Object);

            Exception ex = await Assert.ThrowsAsync<Exception>(() => userService.CreateTaskAsync(task.Name, task.IsDone));

            Assert.Equal("Such task exist!", ex.Message);
        }

        [Fact]
        public async Task CreateTaskCheckReturnNewTask_Test()
        {
            AddNewTaskModel input = new AddNewTaskModel { Name = "Write it!!!", IsDone = false };
            TaskModel responce = new TaskModel { Name = "Write it!!!", IsDone = false };
            var mock = new Mock<IRepository<TaskModel>>();
            TaskModel task = null;

            mock.Setup(repo => repo.InsertAsync(It.IsAny<TaskModel>())).Returns(async () => { return responce; });
            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async () => { return task; });

            var taskService = new TaskService(mock.Object);

            var result = await taskService.CreateTaskAsync(input.Name, input.IsDone);

            Assert.IsType<TaskModel>(result);
        }

        [Fact]
        public async Task ChangeTaskDoneCheckIsNullTask_Test()
        {
            var taskId = new Guid();
            var isDone = false;
            TaskModel task = null;

            var mock = new Mock<IRepository<TaskModel>>();

            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async () => { return task; });

            var taskService = new TaskService(mock.Object);

            ArgumentException ex = await Assert.ThrowsAsync<ArgumentException>(() => taskService.UpdateTaskAsync(taskId, isDone));

            Assert.Equal("Such task isn`t exist", ex.Message);
        }

        [Fact]
        public async Task ChangeTaskDoneToTrueCheckReturnCorrectIsDone_Test()
        {
            var mock = new Mock<IRepository<TaskModel>>();

            Guid taskId = new Guid("a45d558e-3442-4613-943f-aac0a2a3c54e");
            bool isDone = true;
            var task = new TaskModel
            {
                Id = new Guid("a45d558e-3442-4613-943f-aac0a2a3c54e"),
                Name = "Love",
                IsDone = false
            };

            mock.Setup(repo => repo.UpdateAsync(task)).Returns(async () => { return task; });
            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async () => { return task; });

            var taskService = new TaskService(mock.Object);

            var result = await taskService.UpdateTaskAsync(taskId, isDone);

            Assert.True(result.IsDone);
        }

        [Fact]
        public async Task DeleteTaskCheckIsNullTask_Test()
        {
            var mock = new Mock<IRepository<TaskModel>>();

            Guid taskId = new Guid();

            TaskModel task = null;
            
            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async() => { return task; });

            var taskService = new TaskService(mock.Object);

            ArgumentException ex = await Assert.ThrowsAsync<ArgumentException>(async() => await taskService.DeleteTaskAsync(taskId));

            Assert.Equal("Such task isn`t exist", ex.Message);
        }

        [Fact]
        public async Task DeleteTaskCheckReturnTask_Test()
        {
            var mock = new Mock<IRepository<TaskModel>>();

            Guid taskId = new Guid("a45d558e-3442-4613-943f-aac0a2a3c54e");
            
            var task = new TaskModel
            {
                Id = new Guid("a45d558e-3442-4613-943f-aac0a2a3c54e"),
                Name = "Love",
                IsDone = false
            };

            mock.Setup(repo => repo.DeleteAsync(task)).Returns(async () => { return task; });
            mock.Setup(repo => repo.GetAsync(It.IsAny<System.Linq.Expressions.Expression<Func<TaskModel, bool>>>())).Returns(async () => { return task; });

            var taskService = new TaskService(mock.Object);

            var result = await taskService.DeleteTaskAsync(taskId);

            Assert.IsType<TaskModel>(result);
        }
    }
}
