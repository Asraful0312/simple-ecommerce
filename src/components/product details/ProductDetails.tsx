import { ProductType } from "@/utils/types";
import formatNumber from "@/utils/formatNumber";
import { MinusIcon, PlusIcon, Shield, Truck } from "lucide-react";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import Ratings from "../Ratings";

const ProductDetails = ({ product }: { product?: ProductType }) => {
  const {
    title,
    thumbnail,
    images = [""],
    rating,
    price,
    description,
    shippingInformation,
    warrantyInformation,
    returnPolicy,
    stock = 0,
    availabilityStatus,
    brand,
    sku,
    id,
    category,
  } = product || {};
  const [currentThumbnail, setCurrentThumbnail] = useState(
    images[0] || thumbnail
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCurrentThumbnail(thumbnail);
  }, [images]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-20 my-20">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col gap-5">
            {images?.map((image, idx) => (
              <img
                onClick={() => setCurrentThumbnail(image)}
                className="size-44 border bg-cover object-contain"
                src={image}
                alt="product image"
              />
            ))}
          </div>
          <img
            className="w-60 border"
            src={currentThumbnail}
            alt="product thumbnail"
          />
        </div>

        <div className="space-y-2 flex-1">
          <h2 className="text-2xl font-medium text-gray-900">{title}</h2>

          <Ratings rating={rating} />

          <h2 className="font-medium text-gray-600">
            Price:{" "}
            <span className="text-black font-semibold">
              {formatNumber(Number(price))}
            </span>
          </h2>

          <h2 className="font-medium text-gray-600">
            Stock: <span className="text-black font-semibold">{stock}</span>
          </h2>

          <p className="text-muted-foreground pb-4">{description}</p>

          <div className="flex flex-wrap items-center gap-8 bg-gray-50 p-5">
            <div className="flex  flex-col items-center">
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

          <div className="flex items-center gap-5">
            <MinusIcon
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="size-5 cursor-pointer flex-shrink-0"
            />
            <h2 className="text-lg font-semibold">{quantity}</h2>
            <PlusIcon
              onClick={() =>
                setQuantity((prev) => (prev < stock ? prev + 1 : prev))
              }
              className="size-5 cursor-pointer flex-shrink-0"
            />
          </div>

          <div>
            {stock && stock === 0 && (
              <p className="text-red-600 text-sm font-semibold mb-2">
                Out of Stock
              </p>
            )}
            {stock && stock > 0 ? (
              <Link
                className={buttonVariants({ className: "font-semibold" })}
                to="/cart"
              >
                ADD TO CART
              </Link>
            ) : (
              <Button disabled className="disabled:bg-primary/80">
                ADD TO CART
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
