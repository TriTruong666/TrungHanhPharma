import ProductFilter from "./product-filter";
import HorizontalDivider from "@/components/horizontal-divider";
import { ProductCard } from "@/components/product-card";
import productImg from "@/static/product.webp";

export default function ProductListPage() {
  const products = [
    {
      id: 1,
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
      salePercent: 20,
    },
    {
      id: 3,
      image: productImg,
      title: "Siro Deslotid OPV điều trị viêm mũi dị ứng, mày đay (60ml)",
      category: "Thuốc",
      defaultPrice: 12000,
      salePercent: 5,
    },
    {
      id: 4,
      image: productImg,
      title: "Viên đặt âm đạo Papil Off  (2 vỉ x 5 viên)",
      category: "Thuốc",
      defaultPrice: 180000,
      salePercent: 10,
    },
  ];
  return (
    <>
      <ProductFilter />
      <HorizontalDivider />
      <div className="grid grid-cols-2 px-4 py-2 gap-1">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            image={product.image}
            defaultPrice={product.defaultPrice}
            title={product.title}
            id={product.id}
            salePercent={product.salePercent}
          />
        ))}
      </div>
    </>
  );
}
