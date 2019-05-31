using Microsoft.AspNetCore.Mvc.Formatters;
using System.Buffers;
using System.Text;
using System.Threading.Tasks;
using ToDoListAppBackend.Extensions.GraduateWork.Server.AspNetCore.Extensions;
using ToDoListAppBackend.Models;

namespace ToDoListAppBackend.Formatters
{

    public class CustomJsonOutputFormatter : JsonOutputFormatter
    {
        public CustomJsonOutputFormatter() : base(JsonSerializerSettingsProvider.CreateSerializerSettings(), ArrayPool<char>.Shared)
        {
        }

        public override async Task WriteResponseBodyAsync(OutputFormatterWriteContext context, Encoding selectedEncoding)
        {
            JsonOutputWrapper<object> apiResponse = new JsonOutputWrapper<object> { Result = context.Object };

            await context.HttpContext.Response.WriteJson(apiResponse);
        }

    }
}
