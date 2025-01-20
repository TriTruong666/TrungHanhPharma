namespace Models;

public class Option{                                                    //  ? nếu ko đụng thì có thể cân nhắc bỏ luôn 
    string name{ get; set; }                                                           //  ? chỉ có 1 cái số lượng và 1 cái là quy cách? 
    number id{ get; set; }
    number position{ get; set; }
    number product_id{ get; set; }
}

public class Inventory_advance{                                         //  ? Docs ko nois ro cai nay nen se can hoi lai 
    int qty_available{ get; set; }
    int qty_onhand{ get; set; }
    int qty_commited{ get; set; }
    int qty_incoming{ get; set; }
}

public class Variant {
    //barcode: string | null,
    int  compare_at_price{ get; set; } null, //cái này là giá chưa được giảm (nếu có)
    string created_at{ get; set; }
    //fulfillment_service: string | null,                                       
    int grams{ get; set; }
    int id{ get; set; }
    string inventory_management{ get; set; }                           //"haravan", null,  ?
    string inventory_policy{ get; set; } //'deny', 'continue'                              ? cái này có phải hết hàng vẫn đặt được ko ấy nhỉ?
    int inventory_quantity{ get; set; } 
    //old_inventory_quantity: int,                                           ?
    string  inventory_quantity_adjustment{ get; set; }
    //position: int,                                                         ? mặc định mình ko dùng variance nên chỉ có 1 position duy nhất à
    int price{ get; set; }
    int product_id{ get; set; }
    boolean requires_shipping{ get; set; } //                                              ? bộ có sản phầm ko cần giao hàng à?
    string  sku{ get; set; } //                                                      ? Chắc chắn cần nhưng có sản phẩm chưa có
    boolean taxable{ get; set; } //                                                        ? đang ko hiểu sao 91 cái thì chỉ có  1 cái là false
    string title{ get; set; }
    string updated_at{ get; set; }
    string  image_id{ get; set; } 
    string option1{ get; set; }
    //option2: string | null,
    //option3: string | null,
    Inventory_advance  inventory_advance{ get; set; } 
}

public class Image {
    string created_at{ get; set; }
    int id{ get; set; }
    int position{ get; set; }
    int product_id{ get; set; }
    string src{ get; set; }
    string updated_at{ get; set; }
    //attachment: string | null,
    string filename{ get; set; }
    //variant_ids: []
}

public class Product{
    string body_html{ get; set; }
    string handle{ get; set; }
    int id{ get; set; }
    Image images{ get; set; }
    string product_type{ get; set; }
    string published_at{ get; set; }
    string published_scope{ get; set; } //cái này sẽ có giá trị là "global", "pos", "web"
    string  tags{ get; set; } 
    string template_suffix{ get; set; } //"product" và "product.hoa_chat"
    string title{ get; set; }
    string updated_at{ get; set; }
    Variant variants{ get; set; }
    string vendor{ get; set; }
    Option options{ get; set; }
    boolean only_hide_from_list{ get; set; }
    boolean not_allow_promotion{ get; set; }
}

export default Product;
