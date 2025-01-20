import Section from "@/components/section";
import { ProductDefaultCard } from "@/components/product-card";
import productImg from "@/static/product.webp";
export default function MedicineSection() {
  const products = [
    {
      id: 1,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 90000,
      discount: 0,
    },
    {
      id: 2,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 0,
    },
    {
      id: 3,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 0,
    },
    {
      id: 4,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 0,
    },
    {
      id: 5,
      category: "Khac",
      title:
        "Chai xịt lạnh Voltogel cold spray giảm đau, chống viêm, thúc đẩy tuần hoàn máu (200ml)",
      image: productImg,
      price: 100000,
      discount: 0,
    },
  ];
  const limitProducts = products.slice(0, 6);
  return (
    <Section title="Thuốc" viewMoreTo="/">
      <div className="grid grid-cols-2 px-4 py-2 gap-2">
        {limitProducts.map((product) => (
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
