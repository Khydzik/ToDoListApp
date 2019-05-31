using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoListAppBackend.Data.Models
{
    public class TaskModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool IsDone { get; set; }
    }
}
