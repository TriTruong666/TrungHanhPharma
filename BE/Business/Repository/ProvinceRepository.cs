using System.Text.Json;

namespace Repository;
public static class ProvinceRepository{

    public static async Task<Province[]?> GetWithCountryId(Int64 id){
        HttpResponseMessage? res = await Helper.Client.GetAsync( "countries/" + id + "/provinces.json" );
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        ProvinceResponse? temp = JsonSerializer.Deserialize<ProvinceResponse>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.provinces;
    }

}

