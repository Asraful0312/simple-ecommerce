import { Shield, Truck } from "lucide-react";
import Wrapper from "../shared/Wrapper";

const Services = () => {
  return (
    <Wrapper className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* item 1 */}
        <div className="px-5 py-10 flex flex-col items-center bg-primary/5 rounded-md h-full">
          <Truck className="size-16 text-primary" />
          <h1 className="font-medium text-xl text-primary text-center">
            Super Fast Delivery
          </h1>
        </div>
        {/* item 2 */}
        <div className="row-span-2 flex flex-col gap-5 h-full">
          <div className="p-5 flex gap-6 justify-center items-center bg-primary/5 rounded-md mb-2">
            <Shield className="size-10 text-primary" />
            <h1 className="font-medium text-xl text-primary">
              Non-contact Shipping
            </h1>
          </div>
          <div className="p-5 flex gap-5 justify-center items-center bg-primary/5 rounded-md ">
            <Shield className="size-10 text-primary" />
            <h1 className="font-medium text-xl text-primary">
              Money-back Guaranteed
            </h1>
          </div>
        </div>
        {/* item 3 */}
        <div className="px-5 py-12 flex flex-col items-center bg-primary/5 rounded-md h-full">
          <Truck className="size-16 text-primary" />
          <h1 className="font-medium text-xl text-primary text-center">
            Super Secure Payment System
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
