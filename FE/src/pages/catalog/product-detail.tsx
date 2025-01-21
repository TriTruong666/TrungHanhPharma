import Button from "@/components/button";
import HorizontalDivider from "@/components/horizontal-divider";
import { useAtomValue } from "jotai";
<<<<<<< HEAD
=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Description } from "@/components/description";
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
import {
  unstable_useViewTransitionState,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { productState } from "@/state";
import { formatPrice } from "@/utils/format";
import ShareButton from "./share-buttont";
<<<<<<< HEAD
import VariantPicker from "./variant-picker";
import { useEffect, useRef, useState } from "react";
=======
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
import Collapse from "@/components/collapse";
import RelatedProducts from "./related-products";
import { useAddToCart } from "@/hooks";
import toast from "react-hot-toast";
<<<<<<< HEAD
import { Color, Size } from "types";

=======
import productImg from "@/static/product.webp";
import productImg2 from "@/static/product2.webp";
import { ProductCard } from "@/components/product-card";
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useAtomValue(productState(Number(id)))!;
<<<<<<< HEAD
  const [selectedColor, setSelectedColor] = useState<Color>();
  const [selectedSize, setSelectedSize] = useState<Size>();

  useEffect(() => {
    setSelectedColor(product.colors?.[0]);
    setSelectedSize(product.sizes?.[0]);
  }, [id]);

  const { addToCart, setOptions } = useAddToCart(product);

  useEffect(() => {
    setOptions({
      size: selectedSize,
      color: selectedColor?.name,
    });
  }, [selectedSize, selectedColor]);

=======

  const { addToCart, setOptions } = useAddToCart(product);
  const images = [
    {
      src: productImg,
    },
    {
      src: productImg2,
    },
    {
      src: productImg,
    },
    {
      src: productImg2,
    },
  ];
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

  const description = `
  <section>
    <h1>Welcome to Your Personalized Dashboard</h1>
    <p>
      This is a <strong>dynamic application</strong> built to provide a seamless user experience. 
      Explore the <em>latest features</em>, track your progress, and stay informed.
    </p>
    
    <h2>Key Features:</h2>
    <ul>
      <li>Real-time analytics for <span style="color: #007BFF;">better insights</span>.</li>
      <li>Customizable themes to match your preferences.</li>
      <li>24/7 customer support with a response time of <strong>under 5 minutes</strong>.</li>
    </ul>
    
    <h3>Getting Started:</h3>
    <p>
      Follow the steps below to start using the platform:
    </p>
    <ol>
      <li>Log in using your credentials.</li>
      <li>Navigate to the <a href="/dashboard" target="_blank">dashboard</a> to view your data.</li>
      <li>Customize your settings under the <strong>Profile</strong> section.</li>
    </ol>

    <blockquote>
      "This platform has revolutionized the way I manage my daily tasks. Highly recommended!" 
      <br />
      <cite>- A Satisfied User</cite>
    </blockquote>

    <p style="margin-top: 20px;">
      Need help? Check out our <a href="/faq" style="color: #FF6347;">FAQ</a> or contact us via 
      <a href="mailto:support@example.com">support@example.com</a>.
    </p>

    <footer style="margin-top: 30px; font-size: 0.9em; color: #555;">
      &copy; 2025 Your Company. All rights reserved.
    </footer>
  </section>
`;
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-4">
          <div className="py-2">
<<<<<<< HEAD
            <img
              key={product.id}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
              style={{
                viewTransitionName: `product-image-${product.id}`,
              }}
            />
=======
            <Slider {...slickSettings}>
              {images.map((image, index) => (
                <img src={image.src} alt="" key={index + 1} />
              ))}
            </Slider>
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
          </div>
          <div className="text-xl font-medium text-primary">
            {formatPrice(product.price)}
          </div>
          {!!product.originalPrice && (
            <div className="text-2xs text-subtitle line-through">
              {formatPrice(product.price)}
            </div>
          )}
          <div className="text-sm mt-1">{product.name}</div>
          <div className="py-2">
            <ShareButton product={product} />
          </div>
<<<<<<< HEAD
          {product.colors && (
            <VariantPicker
              title="Color"
              variants={product.colors}
              value={selectedColor}
              onChange={(color) => setSelectedColor(color)}
              renderVariant={(variant, selected) => (
                <div
                  className={"w-full h-full rounded-full ".concat(
                    selected ? "border-2 border-primary p-0.5" : ""
                  )}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ backgroundColor: variant?.hex }}
                  />
                </div>
              )}
            />
          )}
          <HorizontalDivider />
          {product.sizes && (
            <VariantPicker
              title="Size"
              variants={product.sizes}
              value={selectedSize}
              onChange={(size) => setSelectedSize(size)}
              renderVariant={(variant, selected) => (
                <div
                  className={"w-full h-full flex justify-center items-center ".concat(
                    selected ? "bg-primary text-white" : ""
                  )}
                >
                  <div className="truncate">{variant}</div>
                </div>
              )}
            />
          )}
        </div>
        {product.details && (
          <>
            <div className="bg-section h-2 w-full"></div>
            <Collapse items={product.details} />
          </>
        )}
        <div className="bg-section h-2 w-full"></div>
        <div className="font-medium py-2 px-4">
          <div className="pt-2 pb-2.5">Sản phẩm khác</div>
          <HorizontalDivider />
        </div>
        <RelatedProducts currentProductId={product.id} />
=======
        </div>
        <div className="bg-section h-2 w-full"></div>
        <p className="px-[20px] my-[15px] font-bold">Mô tả sản phẩm</p>
        <Description htmlContent={description} />
        <p className="my-[20px]"></p>
        <div className="bg-section h-2 w-full"></div>
        <div className="font-medium py-2 px-4">
          <div className="pt-2 pb-2.5">Sản phẩm khác</div>
        </div>
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
            />
          ))}
        </div>
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
      </div>

      <HorizontalDivider />
      <div className="flex-none grid grid-cols-2 gap-2 py-3 px-4">
        <Button
          large
          onClick={() => {
            addToCart(1);
            toast.success("Đã thêm vào giỏ hàng");
          }}
        >
          Thêm vào giỏ
        </Button>
        <Button
          large
          primary
          onClick={() => {
            addToCart(1);
            navigate("/cart");
          }}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
}
