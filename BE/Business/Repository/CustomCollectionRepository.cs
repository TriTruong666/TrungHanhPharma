using Helper;
using System.Net.Http;
using Models;
using System.Text.Json;

namespace Repository;
public static class CustomCollectionRepository{
    public static async Task<CustomCollection[]?> GetAll(){
        HttpResponseMessage? res = await Helper.Client.GetAsync("custom_collections.json");
        if( res == null )
            return null;
        string? json = await res.Content.ReadAsStringAsync();
        if( json == null || json.Length == 0 )
            return null;
        CustomCollectionsArray? temp = JsonSerializer.Deserialize<CustomCollectionsArray>( json );
        if( temp == null )
            return null!;
        return temp.custom_collections;
    }
}
