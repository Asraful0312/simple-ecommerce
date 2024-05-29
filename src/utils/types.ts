type reviews = {
  rating: number;
  comment: string;
  date: string;
  reviewerEmail: string;
  reviewerName: string;
};

export type ProductType = {
  title: string;
  id: number;
  rating: number;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  brand: string;
  discountPercentage: number;
  images: string[];
  reviews: reviews;
  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  stock: number;
  warrantyInformation: string;
  weight: string;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  tags: string[];
};
