#nullable disable

public class Country{
    public string code{ get; set; }
    public Int64 id{ get; set; }
    public string name{ get; set; }

    public virtual Province provinces{ get; set; }
}

