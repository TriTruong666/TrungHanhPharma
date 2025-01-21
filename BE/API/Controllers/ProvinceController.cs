using Microsoft.AspNetCore.Mvc;
using Repository;

namespace API.Controllers;

[Route("api/province")]
[ApiController]
public class ProvinceController : ControllerBase {

    [HttpGet("{id}")]
    public async Task<ActionResult> Get(Int64 id){
        try{
            Province[]? temp = await ProvinceRepository.GetWithCountryId( id );
            if( temp == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}

