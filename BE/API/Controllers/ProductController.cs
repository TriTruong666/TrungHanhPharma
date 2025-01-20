using System.Text.Json;
using Helper;
using Microsoft.AspNetCore.Mvc;
using Repository;
using Models;

namespace API.Controllers;

[Route("api/product")]
[ApiController]
public class ProductController : ControllerBase {

    [HttpGet]
    public async Task<ActionResult> GetAll(){
        try{
            Product[]? products = await ProductRepository.GetAll();
            if( products == null )
                return StatusCode(StatusCodes.Status400BadRequest);
            return StatusCode(StatusCodes.Status200OK, products);
        } catch ( Exception ex ) {
            Console.WriteLine(ex);
            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
        }
    }
//    
//    [HttpGet("{id}")]
//    public async Task<ActionResult> GetById(int id)
//    {
//        try
//        {
//            string url = $"products/{id}.json";
//            HttpResponseMessage result = await Helper.Client.GetAsync(url);
//            if (result == null || !result.IsSuccessStatusCode)
//            {
//                return StatusCode((int)result.StatusCode, await result.Content.ReadAsStringAsync());
//            }
//            return StatusCode(StatusCodes.Status200OK, await result.Content.ReadAsStringAsync());
//        }
//        catch (Exception ex)
//        {
//          
//            Console.WriteLine(ex);
//            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
//        }
//    }
//
//    [HttpGet("limit")]
//    public async Task<ActionResult> GetLimit(int page = 1, int limit = 50)
//    {
//        try
//        {
//            int haravanPageLimit = 50;
//            int offset = (page - 1) * limit;
//            int haravanPage = offset / haravanPageLimit + 1;
//            int haravanLimit = limit;
//
//            if (offset % haravanPageLimit != 0)
//            {
//                haravanLimit = haravanPageLimit - (offset % haravanPageLimit);
//            }
//
//            string url = $"products.json?limit={haravanLimit}&page={haravanPage}";
//
//            HttpResponseMessage result = await Helper.Client.GetAsync(url);
//
//            if (result == null || !result.IsSuccessStatusCode)
//            {
//                return StatusCode((int)result.StatusCode, await result.Content.ReadAsStringAsync());
//            }
//
//            return StatusCode(StatusCodes.Status200OK, await result.Content.ReadAsStringAsync());
//        }
//        catch (Exception ex)
//        {
//            Console.WriteLine(ex);
//            return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
//        }
//    }
//

}

