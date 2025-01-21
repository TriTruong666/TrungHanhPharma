using System.Text.Json;

namespace Repository;
public static class DistrictRepository{

    public static async Task<District[]?> GetWithProvinceId(Int64 id){
        HttpResponseMessage? res = await Helper.Client.GetAsync( "provinces/" + id + "/districts.json" );
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        DistrictResponse? temp = JsonSerializer.Deserialize<DistrictResponse>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.districts;
    }

}
