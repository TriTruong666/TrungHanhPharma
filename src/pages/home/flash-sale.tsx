import Section from "@/components/section";
import { ProductDefaultCard } from "@/components/product-card";
import productImg from "@/static/product.webp";
export default function FlashSales() {
  const products = [
    {
      id: 1,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 90000,
      discount: 10,
    },
    {
      id: 2,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 20,
    },
    {
      id: 3,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 20,
    },
    {
      id: 4,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 20,
    },
    {
      id: 5,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 20,
    },
  ];
  return (
    <Section title="Flash Sale" viewMoreTo="/flash-sales">
      <div className="grid grid-cols-2 px-4 py-2 gap-2">
        {products.map((product) => (
          <ProductDefaultCard
            key={product.id}
            category={product.category}
            defaultPrice={product.price}
            image={product.image}
            title={product.title}
            salePercent={product.discount}
            id={product.id}
          />
        ))}
      </div>
    </Section>
  );
}
