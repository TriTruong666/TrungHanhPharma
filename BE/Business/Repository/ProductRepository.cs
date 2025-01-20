using Helper;
using System.Net.Http;
using Models;
using System.Text.Json;

namespace Repository;
public static class ProductRepository{
    public static async Task<Product[]?> GetAll(){
        HttpResponseMessage? res = await Helper.Client.GetAsync("products.json");
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        ProductsArray? temp = JsonSerializer.Deserialize<ProductsArray>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.products;
    }
}
