import { fetchFeaturedProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useProducts";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import Wrapper from "../shared/Wrapper";
import SingleProduct from "../SingleProduct";
import { ProductType } from "@/utils/types";

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const { featuredProducts, isLoading, isError, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  const validateData = () => {
    if (!isError && isLoading) {
      return (
        <div className="flex items-center justify-center absolute inset-x-1/2 top-16">
          <Loader2 className="size-7 animate-spin flex-shrink-0" />
        </div>
      );
    }
    if (!isLoading && isError) {
      return (
        <div className="absolute left-[44%] whitespace-nowrap text-xl text-red-500">
          {error}
        </div>
      );
    }
    if (!isLoading && !isError && featuredProducts?.products?.length === 0) {
      return (
        <div className="absolute left-[44%] whitespace-nowrap text-xl text-center">
          No Products Found!
        </div>
      );
    }
    if (!isLoading && !isError && featuredProducts?.products?.length > 0) {
      return featuredProducts?.products?.map((product: ProductType) => (
        <SingleProduct product={product} />
      ));
    }
  };

  return (
    <Wrapper className="mt-20 mb-10 relative">
      <h2 className="text-4xl text-center font-bold mb-8">Featured Products</h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {validateData()}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
