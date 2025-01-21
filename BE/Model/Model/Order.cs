#nullable disable

namespace Models
{
    // DiscountCode model (assuming you have this already)
    public class DiscountCode
    {
        public string Code { get; set; }
        public double Amount { get; set; }
    }

    // ItemInCart model
    public class ItemInCart
    {
        public Int64 VariantId { get; set; }
        public int Quantity { get; set; }
        public string Sku { get; set; }
        public string Name { get; set; }
    }

    // NoteAttribute model
    public class NoteAttribute
    {
        public string Name { get; set; }
        public string Value { get; set; }
    }

    // ShippingAddress model
    public class ShippingAddress
    {
        public string Address1 { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Country { get; set; }
        public string CountryCode { get; set; }
        public string Province { get; set; }
        public string ProvinceCode { get; set; }
        public string DistrictCode { get; set; }
        public string District { get; set; }
        public string WardCode { get; set; }
        public string Ward { get; set; }
    }

    // Order model
    public class Order
    {
        public List<ItemInCart> LineItems { get; set; }
        public double TotalDiscounts { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public List<DiscountCode> DiscountCodes { get; set; }
        public string Gateway { get; set; }
    }
}
