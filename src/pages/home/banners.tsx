import Carousel from "@/components/carousel";
import { useAtomValue } from "jotai";
import { bannersState } from "@/state";
import banner1 from "@/static/bannerbg1.webp";
import banner2 from "@/static/bannerbg2.webp";
import banner3 from "@/static/bannerbg3.webp";
import banner4 from "@/static/bannerbg4.webp";
export default function Banners() {
  const banners = useAtomValue(bannersState);
  return (
    <Carousel
      slides={banners.map((banner) => (
        <img className="w-full rounded" src={banner} />
      ))}
    />
  );
}
