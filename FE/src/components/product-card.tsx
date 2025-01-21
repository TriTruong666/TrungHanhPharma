import React, { FC } from "react";
import { Link } from "react-router-dom";

// import calculator
import { calculateSalePrice } from "@/utils/calculator";
// import formatter
import { formatPrice } from "@/utils/format";

interface ProductDefaultCardProps {
  image: string;
  title: string;
  category: string;
  defaultPrice: number;
  salePercent?: number | null;
  id?: number;
}

<<<<<<< HEAD
export const ProductDefaultCard: FC<ProductDefaultCardProps> = ({
=======
export const ProductCard: FC<ProductDefaultCardProps> = ({
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
  image,
  title,
  category,
  defaultPrice,
  salePercent = 0,
  id,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col justify-between px-[8px] py-[10px] relative bg-bgheader rounded-xl mr-[10px] shadow-md"
    >
      {/* Sale Percent */}
      {salePercent !== 0 && (
<<<<<<< HEAD
        <p className="absolute text-[9px] font-bold py-[4px] px-[5px] bg-[#FF6600] text-bgheader top-[3px] left-[3px] z-5 rounded-lg">
          -{salePercent}%
        </p>
      )}

      {/* Icons */}
      {/* <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full absolute right-[5px] top-[10px] z-5 bg-[#FF6600]">
        <BsCartPlus size={14} className="text-white" />
      </div> */}
=======
        <p className="absolute text-[9px] font-bold py-[5px] px-[5px] bg-[#FF6600] text-bgheader top-[3px] left-[3px] z-5 rounded-lg">
          -{salePercent}%
        </p>
      )}
      {/* Icons */}
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
      <img
        src={image}
        alt={title}
        className="w-[180px] h-[180px] object-cover"
        loading="lazy"
      />
      <p className="font-bold text-[11px]">{category}</p>
      <p className="text-[12px] font-semibold line-clamp-2 overflow-hidden text-ellipsis">
        {title}
      </p>
      <div className="flex items-center gap-x-[5px] my-[8px]">
        <p className="text-[#FF6600] font-bold text-[13px]">
          {calculateSalePrice(defaultPrice, salePercent)}
        </p>
        {salePercent !== 0 && (
          <del className="text-[11px] font-semibold text-gray-500">
            {formatPrice(defaultPrice)}
          </del>
        )}
      </div>
    </Link>
  );
};
