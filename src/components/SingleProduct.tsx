import { ProductType } from "@/utils/types";
import { Link } from "react-router-dom";
import formatNumber from "@/utils/formatNumber";
import React from "react";

const SingleProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="border p-5">
      <div className="flex items-center justify-center mb-6 relative">
        <figure>
          <Link to={`/product/${product.id}`}>
            <img
              className="size-40 object-cover hover:scale-110 transition-all duration-300"
              src={product.thumbnail}
              alt="product thumbnail"
            />
          </Link>
          <figcaption className="rounded-3xl bg-primary py-2 px-5 absolute -right-2 top-0 text-white">
            {product.category}
          </figcaption>
        </figure>
      </div>
      <div>
        <Link
          to={`/product/${product.id}`}
          className="font-medium line-clamp-1"
        >
          {product.title}
        </Link>
        <h2 className="font-bold mt-1">Price: {formatNumber(product.price)}</h2>
      </div>
    </div>
  );
};

export default React.memo(SingleProduct);
