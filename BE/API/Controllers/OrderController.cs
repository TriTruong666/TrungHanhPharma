using Microsoft.AspNetCore.Mvc;
using Repository;
using Helper;

namespace API.Controllers;

[Route("api/order")]
[ApiController]
public class OrderController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"]!;

    [HttpPost]
    public async Task<ActionResult> GetById(OrderRequest id){
        try{
            string temp = await OrderRepository.PlaceOrder( id );
            if( temp == null )
                return StatusCode(StatusCodes.Status500InternalServerError);
            if( temp.Equals("OK") )
                return StatusCode(StatusCodes.Status200OK, temp);
            return StatusCode(StatusCodes.Status400BadRequest, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
}


