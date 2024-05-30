import { fetchRelatedProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useProducts";
import React, { useCallback, useEffect } from "react";
import SingleProduct from "../SingleProduct";
import { Loader2 } from "lucide-react";
import { ProductType } from "@/utils/types";

const RelatedProducts = ({
  category,
  id,
}: {
  category?: string;
  id?: number;
}) => {
  const dispatch = useAppDispatch();
  const { relatedProducts, isLoading, isError, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchRelatedProducts(category));
  }, [category, dispatch]);

  // const validateData = useCallback(() => {
  //   if (!isError && isLoading) {
  //     return (
  //       <div className="flex items-center justify-center absolute inset-x-1/2 top-16">
  //         <Loader2 className="size-7 animate-spin flex-shrink-0" />
  //       </div>
  //     );
  //   }
  //   if (!isLoading && isError) {
  //     return (
  //       <div className="absolute left-[44%] whitespace-nowrap text-xl text-red-500">
  //         {error}
  //       </div>
  //     );
  //   }
  //   if (!isLoading && !isError && relatedProducts?.products?.length === 0) {
  //     return (
  //       <div className="absolute left-[44%] whitespace-nowrap text-xl text-center">
  //         No Products Found!
  //       </div>
  //     );
  //   }
  //   if (!isLoading && !isError && relatedProducts?.products?.length > 0) {
  //     const filteredProducts = relatedProducts.products.filter(
  //       (p: ProductType) => p.id !== id
  //     );

  //     const displayedProducts =
  //       filteredProducts.length > 4
  //         ? filteredProducts.slice(0, 4)
  //         : filteredProducts;

  //     return displayedProducts.map((product: ProductType) => (
  //       <SingleProduct product={product} />
  //     ));
  //   }
  // }, [error, id, isError, isLoading, relatedProducts.products]);

  let content;
  if (!isError && isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <Loader2 className="size-7 animate-spin flex-shrink-0" />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = (
      <div className="absolute left-[44%] whitespace-nowrap text-xl text-red-500">
        {error}
      </div>
    );
  }
  if (!isLoading && !isError && relatedProducts?.products?.length === 0) {
    content = (
      <div className="absolute left-[44%] whitespace-nowrap text-xl text-center">
        No Products Found!
      </div>
    );
  }
  if (!isLoading && !isError && relatedProducts?.products?.length > 0) {
    const filteredProducts = relatedProducts.products.filter(
      (p: ProductType) => p.id !== id
    );

    const displayedProducts =
      filteredProducts.length > 4
        ? filteredProducts.slice(0, 4)
        : filteredProducts;

    content = displayedProducts.map((product: ProductType) => (
      <SingleProduct product={product} />
    ));
  }

  return (
    <div className="pt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Related Products
      </h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {content}
      </div>
    </div>
  );
};

export default RelatedProducts;
