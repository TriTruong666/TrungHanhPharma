using Microsoft.AspNetCore.Mvc;
using Helper;
using System.Text.Json;

namespace API.Controllers;

[Route("api/custom_collection")]
[ApiController]
public class CustomCollectionController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"]!;

    [HttpGet]
    public async Task<ActionResult> GetAll(){
        try{
            return StatusCode(StatusCodes.Status500InternalServerError);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}

