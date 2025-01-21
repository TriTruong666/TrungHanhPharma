using Microsoft.AspNetCore.Mvc;
using Repository;
using Models;

namespace API.Controllers;

[Route("api/district")]
[ApiController]
public class DistrictController : ControllerBase {

    [HttpGet("{id}")]
    public async Task<ActionResult> Get(Int64 id){
        try{
            District[]? temp = await DistrictRepository.GetWithProvinceId( id );
            if( temp == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, temp);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }

}
