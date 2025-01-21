using Microsoft.AspNetCore.Mvc;
using Repository;

namespace API.Controllers;

[Route("api/country")]
[ApiController]
public class CountryController : ControllerBase {

    [HttpGet("{id}")]
    public async Task<ActionResult> ByCountryId(Int64 id){
        try{
            Country[]? temp = await CountryRepository.GetByCountryId( id );
            if( temp == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

    [HttpGet("all")]
    public async Task<ActionResult> GetAll(){
        try{
            Country[]? temp = await CountryRepository.GetAll();
            if( temp == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}


