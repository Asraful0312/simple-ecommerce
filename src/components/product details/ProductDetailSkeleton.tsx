import { Skeleton } from "../ui/skeleton";
import { SkeletonCard } from "../SkeletonCard";

const ProductDetailSkeleton = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-20 my-20">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col gap-5">
            <Skeleton className="size-44 rounded-xl" />
            <Skeleton className="size-44 rounded-xl" />
            <Skeleton className="size-44 rounded-xl" />
          </div>
          <Skeleton className="size-56 rounded-xl" />
        </div>

        <div className="space-y-2 flex-1">
          <Skeleton className="h-[30px] max-w-60 rounded-xl" />

          <div className="flex items-center gap-3 ">
            <div className="flex gap-1">
              <Skeleton className="size-6 rounded-xl" />
              <Skeleton className="size-6 rounded-xl" />
              <Skeleton className="size-6 rounded-xl" />
              <Skeleton className="size-6 rounded-xl" />
            </div>
            <Skeleton className="h-[20px] max-w-5 rounded-xl" />
          </div>

          <Skeleton className="h-[30px] max-w-24 rounded-xl" />

          <Skeleton className="h-[30px] max-w-20 rounded-xl" />

          <Skeleton className="h-[120px] w-full rounded-xl px-5" />

          <div className="flex flex-wrap items-center gap-8 bg-gray-50 p-5">
            <div className="flex flex-col items-center">
              <Skeleton className="size-10 mb-3" />

              <Skeleton className="h-5 w-20 " />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton className="size-10 mb-3" />

              <Skeleton className="h-5 w-20" />
            </div>

            <div className="flex flex-col items-center">
              <Skeleton className="size-10 mb-3" />

              <Skeleton className="h-5 w-20" />
            </div>
          </div>

          <Skeleton className="h-[30px] max-w-28 rounded-xl" />

          <Skeleton className="h-[30px] max-w-32 rounded-xl" />

          <Skeleton className="h-[30px] max-w-20 rounded-xl" />

          <Skeleton className="h-[35px] max-w-20 rounded-md" />
        </div>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
