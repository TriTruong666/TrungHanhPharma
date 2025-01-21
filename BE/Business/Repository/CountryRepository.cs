using System.Text.Json;

namespace Repository;
public static class CountryRepository{

    public static async Task<Country[]?> GetAll(){
        HttpResponseMessage? res = await Helper.Client.GetAsync( "countries.json");
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        CountryReponse? temp = JsonSerializer.Deserialize<CountryReponse>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.countries;
    }

    public static async Task<Country[]?> GetByCountryId(Int64 id){
        HttpResponseMessage? res = await Helper.Client.GetAsync( "countries/" + id + ".json");
        if( res == null || (int) res.StatusCode != 200 )
            return null;
        CountryReponse? temp = JsonSerializer.Deserialize<CountryReponse>( await res.Content.ReadAsStringAsync());
        if( temp == null )
            return null;
        return temp.countries;
    }

}


