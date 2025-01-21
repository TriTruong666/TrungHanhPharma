import Section from "@/components/section";
<<<<<<< HEAD
import { ProductDefaultCard } from "@/components/product-card";
import productImg from "@/static/product.webp";
=======
import { ProductCard } from "@/components/product-card";
import productImg from "@/static/product2.webp";
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
export default function MedicineSection() {
  const products = [
    {
      id: 1,
<<<<<<< HEAD
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
=======
      image: productImg,
      title:
        "Thuốc Re-Doo 10mg Reliv điều trị rối loạn chức năng cương dương (2 vỉ x 2 viên)",
      category: "Thuốc",
      defaultPrice: 80000,
      salePercent: 20,
    },
    {
      id: 2,
      image: productImg,
      title: "Viên đặt âm đạo Metronizol Neo trị viêm âm đạo (1 vỉ x 10 viên)",
      category: "Thuốc",
      defaultPrice: 120000,
      salePercent: 0,
    },
    {
      id: 3,
      image: productImg,
      title: "Siro Deslotid OPV điều trị viêm mũi dị ứng, mày đay (60ml)",
      category: "Thuốc",
      defaultPrice: 12000,
      salePercent: 0,
    },
    {
      id: 4,
      image: productImg,
      title: "Viên đặt âm đạo Papil Off  (2 vỉ x 5 viên)",
      category: "Thuốc",
      defaultPrice: 180000,
      salePercent: 0,
    },
  ];
  const limitProducts = products.slice(0, 8);
  return (
    <Section title="Thuốc" viewMoreTo="/category/14">
      <div className="grid grid-cols-2 px-4 py-2 gap-1">
        {limitProducts.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            image={product.image}
            defaultPrice={product.defaultPrice}
            title={product.title}
            id={product.id}
            salePercent={product.salePercent}
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
          />
        ))}
      </div>
    </Section>
  );
}
