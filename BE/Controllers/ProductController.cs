#nullable disable
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"];

    [HttpGet]
    public async Task<ActionResult> GetAll(){
        try{
            Console.WriteLine(apiKey);
            return StatusCode(StatusCodes.Status501NotImplemented, apiKey);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}

