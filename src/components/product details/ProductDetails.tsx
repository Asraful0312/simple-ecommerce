import { ProductType } from "@/utils/types";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import formatNumber from "@/utils/formatNumber";
import { Shield, Truck } from "lucide-react";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = ({ product }: { product?: ProductType }) => {
  const {
    title,
    thumbnail,
    images,
    rating,
    price,
    description,
    shippingInformation,
    warrantyInformation,
    returnPolicy,
    stock,
    availabilityStatus,
    brand,
    sku,
    id,
    category,
  } = product || {};

  return (
    <div>
      <div className="flex flex-wrap items-center gap-20 my-20">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col gap-5">
            {images?.map((image) => (
              <img
                className="max-w-44 border"
                src={image}
                alt="product image"
              />
            ))}
          </div>
          <img className="border" src={thumbnail} alt="product thumbnail" />
        </div>

        <div className="space-y-2 flex-1">
          <h2 className="text-2xl font-medium text-gray-900">{title}</h2>

          <div className="flex items-center gap-3 ">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400 flex-shrink-0  size-4" />
              <FaStar className="text-yellow-400 flex-shrink-0  size-4" />
              <FaStarHalfAlt className="text-yellow-400 flex-shrink-0 size-4" />
              <FaRegStar className="text-yellow-400 flex-shrink-0 size-4" />
            </div>
            <span className="text-gray-500 text-sm">({rating})</span>
          </div>

          <h2 className="font-medium text-gray-600">
            MPR:{" "}
            <span className="text-black font-semibold">
              {formatNumber(Number(price))}
            </span>
          </h2>

          <h2 className="font-medium text-gray-600">
            Stock: <span className="text-black font-semibold">{stock}</span>
          </h2>

          <p className="text-muted-foreground pb-4">{description}</p>

          <div className="flex items-center gap-8 bg-gray-50 p-5">
            <div className="flex flex-col items-center">
              <Truck className="size-7" />
              <span className="font-bold text-sm text-gray-600">
                {shippingInformation}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="size-7" />
              <span className="font-bold text-sm text-gray-600">
                {warrantyInformation}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <GiReturnArrow className="size-7" />
              <span className="font-bold text-sm text-gray-600">
                {returnPolicy}
              </span>
            </div>
          </div>

          <h2 className={`font-medium text-gray-600 `}>
            Available:{" "}
            <span
              className={`font-semibold ${
                availabilityStatus === "In Stock"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {availabilityStatus}
            </span>
          </h2>

          <h2 className="font-medium text-gray-600">
            Brand: <span className="text-black font-semibold">{brand}</span>
          </h2>

          <h2 className="font-medium text-gray-600 pb-3">
            Sku: <span className="text-black font-semibold">{sku}</span>
          </h2>

          <Link
            className={buttonVariants({ className: "font-semibold" })}
            to="/cart"
          >
            ADD TO CART
          </Link>
        </div>
      </div>

      <RelatedProducts category={category} id={id} />
    </div>
  );
};

export default ProductDetails;
