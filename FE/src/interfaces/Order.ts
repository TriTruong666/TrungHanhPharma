import { DiscountCode } from "./Discount";

export interface ItemInCart{
    variant_id: number;
    quantity: number;
    sku: string | null;
    name: string;
}

export interface NoteAttribute{
    name: string,
    value: string
}

export interface ShippingAddress{
    address1: string,
    first_name: string,
    last_name: string,
    phone: string,
    country: string,
    country_code: string,
    province: string,
    province_code: string,
    district_code: string,
    district: string,
    ward_code: string,
    ward: string
}

export interface Order{
    line_items: ItemInCart[];
    total_discounts: number,
    shipping_address: ShippingAddress,
    discount_codes: DiscountCode[];
    gateway: string;
}
