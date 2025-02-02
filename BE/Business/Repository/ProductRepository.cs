using Helper;
using System.Net.Http;
using Models;
using System.Text.Json;

namespace Repository;
public static class ProductRepository{

    public static async Task<Product[]?> GetWithQuery(string query){
        HttpResponseMessage? res = await Helper.Client.GetAsync("products.json" + query);
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        ProductsArray? temp = JsonSerializer.Deserialize<ProductsArray>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.products;
    }

    public static async Task<ProductResponse?> GetById(string id)
    {
        string endUri = $"products/{id}.json";
        HttpResponseMessage? res = await Helper.Client.GetAsync(endUri);
        if (res == null || !res.IsSuccessStatusCode)
            return null;
        string responseData = await res.Content.ReadAsStringAsync();
        ProductResponse? productResponse = JsonSerializer.Deserialize<ProductResponse>(responseData);
        return productResponse;
    }

    public static async Task<Product[]?> GetByLimit( int amount ){
        List<Product> result = new List<Product>{};
        int page = 1;
        while( amount > 0 ) {
            HttpResponseMessage? res = await Helper.Client.GetAsync($"products.json?limit={amount}&page={page}");
            if( res == null || (int) res.StatusCode != 200 )
                return null;
            ProductsArray? temp = JsonSerializer.Deserialize<ProductsArray>( await res.Content.ReadAsStringAsync());
            if( temp == null || temp.products == null )
                return null;
            result.AddRange(temp.products);
            amount -= 50;
        }
        return result.ToArray();
    }
}
