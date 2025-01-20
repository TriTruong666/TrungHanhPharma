using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Text.Json;
using Models;

namespace Helper;

public static class Client{
    private static string? apiKey = Helper.Configuration.GetConfiguration()["Others:HaravanToken"];
    private static HttpClient client = new HttpClient();

    static Client(){
        client.BaseAddress = new Uri("https://apis.haravan.com/com/");
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add( new MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
    }

    private static bool isTokenNull(){
        if( string.IsNullOrEmpty(apiKey) )
            return true;
        return false;
    }

    public static async Task<string?> GetAsync(string endUri){
        if( isTokenNull() ){
            Console.WriteLine("Appsetting is missing haravan token");
            return null;
        }
        var res = await client.GetAsync(endUri);
        string json = await res.Content.ReadAsStringAsync();
        if( json == null )
            return null;
        return json;
    }
}
