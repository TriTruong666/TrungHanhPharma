#nullable disable
using Microsoft.AspNetCore.Mvc;
using Models;

namespace API.Controllers;

[Route("api/custom_collection")]
[ApiController]
public class CustomCollectionController : ControllerBase {
    private string apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"];

}

