import React, { useEffect, useCallback } from "react";
import ProductDetailSkeleton from "@/components/product details/ProductDetailSkeleton";
import ProductDetails from "@/components/product details/ProductDetails";
import Wrapper from "@/components/shared/Wrapper";
import { fetchSingleProduct } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import RelatedProducts from "@/components/product details/RelatedProducts";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { product, isLoading, isError, error } = useAppSelector(
    (state) => state.products
  );

  console.count(product);

  useEffect(() => {
    dispatch(fetchSingleProduct(Number(id)));
  }, [dispatch, id]);

  const validateData = () => {
    if (isLoading) {
      return <ProductDetailSkeleton />;
    }
    if (isError) {
      return (
        <div className="text-center w-full mt-10 text-xl text-red-500">
          {error}
        </div>
      );
    }
    if (product) {
      return <ProductDetails product={product} />;
    }
  };

  console.count("SingleProduct rendered");

  return (
    <Wrapper>
      <div className="flex items-center gap-3 w-full bg-gray-50 p-5">
        <Link to="/">Home</Link>
        <h2>/</h2>
        <h2>{product.title}</h2>
      </div>
      {validateData()}
      <RelatedProducts category={product?.category} id={id} />
    </Wrapper>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default ProductDetailsPage;
