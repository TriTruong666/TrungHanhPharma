import ProductItem from "@/components/product-item";
import SearchBar from "@/components/search-bar";
import Section from "@/components/section";
import { ProductItemSkeleton } from "@/components/skeleton";
import { SearchIconLarge } from "@/components/vectors";
import { useAtom, useAtomValue } from "jotai";
import { Suspense, useEffect, useRef, useState } from "react";
import { keywordState, searchResultState } from "@/state";
import productImg from "@/static/product.webp";
import { ProductCard } from "@/components/product-card";
export function SearchResult() {
  const searchResult = useAtomValue(searchResultState);

  return (
    <div className="w-full space-y-2 bg-section">
      <Section title={`Kết quả (${searchResult.length})`}>
        {searchResult.length ? (
          <div className="py-2 px-4 grid grid-cols-2 gap-4">
            {searchResult.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptySearchResult />
        )}
      </Section>
      {searchResult.length === 0 && <RecommendedProducts />}
    </div>
  );
}

export function EmptySearchResult() {
  return (
    <div className="p-6 space-y-4 flex flex-col items-center">
      <SearchIconLarge />
      <div className="text-inactive text-center text-2xs">
        Không có sản phẩm bạn tìm kiếm
      </div>
    </div>
  );
}

export function SearchResultSkeleton() {
  return (
    <Section title={`Kết quả`}>
      <div className="py-2 px-4 grid grid-cols-2 gap-4">
        <ProductItemSkeleton />
        <ProductItemSkeleton />
        <ProductItemSkeleton />
        <ProductItemSkeleton />
      </div>
    </Section>
  );
}

export function RecommendedProducts() {
  const recommendedProducts = [
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
  return (
    <Section title="Gợi ý sản phẩm">
      <div className="py-2 px-4 flex space-x-2 overflow-x-auto">
        {recommendedProducts.map((product) => (
          <div
            className="flex-none"
            style={{ flexBasis: "calc((100vw - 48px) / 2)" }}
          >
            <ProductCard
              key={product.id}
              category={product.category}
              image={product.image}
              defaultPrice={product.defaultPrice}
              title={product.title}
              id={product.id}
              salePercent={product.salePercent}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localKeyword, setLocalKeyword] = useState("");
  const [keyword, setKeyword] = useAtom(keywordState);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    return () => {
      setKeyword("");
    };
  }, []);

  return (
    <>
      <div className="py-2">
        <SearchBar
          ref={inputRef}
          value={localKeyword}
          onChange={(e) => setLocalKeyword(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setKeyword(localKeyword);
            }
          }}
          onBlur={() => setKeyword(localKeyword)}
        />
      </div>
      {keyword ? (
        <Suspense fallback={<SearchResultSkeleton />}>
          <SearchResult />
        </Suspense>
      ) : (
        <RecommendedProducts />
      )}
    </>
  );
}
