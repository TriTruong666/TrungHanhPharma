using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Model
{
    public class CustomCollection
    {
        public string BodyHtml { get; set; }
        public string Handle { get; set; }
      
        public Int64 Id { get; set; }
        public bool Published { get; set; }
        public DateTime PublishedAt { get; set; }
        public string PublishedScope { get; set; }
      
        public string Title { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int ProductsCount { get; set; }
    }
}
