<<<<<<< HEAD
=======
// import formater
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
import { formatPrice } from "./format";

export const calculateSalePrice = (
  originalPrice: number,
  salePercent: number | null
) => {
  if (!salePercent) {
    return formatPrice(originalPrice);
  }

  const discount = (originalPrice * salePercent) / 100;
  const lastPrice = originalPrice - discount;

  return formatPrice(lastPrice);
};
