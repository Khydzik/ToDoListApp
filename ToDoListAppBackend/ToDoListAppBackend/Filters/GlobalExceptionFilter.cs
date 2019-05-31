using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;
using ToDoListAppBackend.Models;

namespace ToDoListAppBackend.Filters
{
    public class GlobalExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (!context.ExceptionHandled)
            {
                var (error, statuscode) = PrepareResponseForException(context.Exception);
                context.ExceptionHandled = true;
                context.Result = new ObjectResult(error)
                {
                    StatusCode = (int)statuscode
                };
            }
        }

        private (ResponseError<object>, HttpStatusCode) PrepareResponseForException(Exception ex)
        {
            ResponseError<object> error;
            HttpStatusCode statusCode;

            switch (ex)
            {
                case ArgumentException argumentException:
                    statusCode = HttpStatusCode.NotFound;
                    error = GetResponseError(argumentException);
                    break;
                case NullReferenceException nullReferenceException:
                    statusCode = HttpStatusCode.NoContent;
                    error = GetResponseError(nullReferenceException);
                    break;
                default:
                    statusCode = HttpStatusCode.InternalServerError;
                    error = GetResponseError(ex);
                    break;
            }

            return (error, statusCode);
        }

        private ResponseError<object> GetResponseError(Exception exception)
        {
            var error = new ResponseError<object>()
            {
                Result = null,
                Error = new Error()
                {
                    Id = Constants.Validation,
                    Message = exception.Message
                }
            };
            return error;
        }
    }
}

