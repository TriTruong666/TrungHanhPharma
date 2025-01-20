import ProductItem from "@/components/product-item";
import SearchBar from "@/components/search-bar";
import Section from "@/components/section";
import { ProductItemSkeleton } from "@/components/skeleton";
import { SearchIconLarge } from "@/components/vectors";
import { useAtom, useAtomValue } from "jotai";
import { Suspense, useEffect, useRef, useState } from "react";
import { keywordState, searchResultState } from "@/state";
import { ProductDefaultCard } from "@/components/product-card";
import productImg from "@/static/product2.webp";

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
  // const recommendedProducts = useAtomValue(recommendedProductsState);
  const recommendedProducts = [
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
    <Section title="Gợi ý sản phẩm">
      <div className="py-2 px-4 grid grid-cols-2 gap-4">
        {recommendedProducts.map((product) => (
          <div
            className="flex-none"
            style={{ flexBasis: "calc((100vw - 48px) / 2)" }}
          >
            <ProductDefaultCard
              key={product.id}
              category={product.category}
              defaultPrice={product.price}
              image={product.image}
              title={product.title}
              salePercent={product.discount}
              id={product.id}
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
