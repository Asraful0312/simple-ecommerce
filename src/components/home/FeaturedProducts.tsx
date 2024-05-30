import Wrapper from "@/components/shared/Wrapper";
import { fetchFeaturedProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useProducts";
import { SkeletonCard } from "../SkeletonCard";
import SingleProduct from "../SingleProduct";
import { useEffect } from "react";

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const { featuredProducts, isLoading, isError, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  const validateData = () => {
    if (isLoading) {
      return (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      );
    }
    if (isError) {
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
      return featuredProducts?.products?.map((product) => (
        <SingleProduct key={product.id} product={product} />
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
