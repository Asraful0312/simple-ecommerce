import ProductDetails from "@/components/product details/ProductDetails";
import Wrapper from "@/components/shared/Wrapper";
import { fetchSingleProduct } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useProducts";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { product, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(Number(id)));
  }, [dispatch, id]);
  return (
    <Wrapper>
      <div className="flex items-center gap-3 w-full bg-gray-50  p-5">
        <Link to="/">Home</Link>
        <h2>/</h2>
        <h2>{product.title}</h2>
      </div>
      <ProductDetails product={product} />
    </Wrapper>
  );
};

export default SingleProduct;
