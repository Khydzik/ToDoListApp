using System;

namespace ToDoListAppBackend.Data.Models
{
    public class EditTaskModel
    {
        public Guid IdTask { get; set; }
        public bool IsDone { get; set; }
    }
}
