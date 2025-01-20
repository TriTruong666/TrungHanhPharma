#nullable disable
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"];

    [HttpGet]
    public async Task<ActionResult> GetAll(){
        try{
            HttpResponseMessage result = await Helper.Client.GetAsync("products.json");
            if( result == null )
                return StatusCode((int)result.StatusCode, result.Content.ReadAsStringAsync());
            return StatusCode(StatusCodes.Status200OK, await result.Content.ReadAsStringAsync());
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet]
    public async Task<ActionResult> GetLimit(int amount){
        try{
            HttpResponseMessage result = await Helper.Client.GetAsync("products.json");
            if( result == null )
                return StatusCode((int)result.StatusCode, result.Content.ReadAsStringAsync());
            return StatusCode(StatusCodes.Status200OK, await result.Content.ReadAsStringAsync());
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}

