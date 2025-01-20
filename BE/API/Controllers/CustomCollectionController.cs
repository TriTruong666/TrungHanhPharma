using Microsoft.AspNetCore.Mvc;
using Repository;
using Models;

namespace API.Controllers;

[Route("api/custom_collection")]
[ApiController]
public class CustomCollectionController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"]!;

    [HttpGet]
    public async Task<ActionResult> GetAll(){
        try{
            CustomCollection[]? temp = await CustomCollectionRepository.GetAll();
            if( temp == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}

