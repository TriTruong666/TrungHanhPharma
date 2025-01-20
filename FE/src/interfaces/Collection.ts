export interface CustomCollection{
    body_html: string,
    handle: string,
    //image: null,                                                                
    id: number,
    published: boolean,                                                            
    published_at: string,                                   
    published_scope: string,                                // "global", "web"
    //template_suffix: "collection",                                              
    title: string,
    updated_at: string,
    products_count: number
}
