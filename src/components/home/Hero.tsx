import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import Wrapper from "../shared/Wrapper";

const Hero = ({ title }: { title: string }) => {
  return (
    <Wrapper className="py-16 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20  items-center">
        <div>
          <span className="text-primary text-sm">WELCOME TO</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est
            non nam? Magni omnis sed ipsa quidem, sit dignissimos eveniet.
          </p>
          <Link
            className={buttonVariants({
              className: "mt-4",
            })}
            to="/products"
          >
            Shop now
          </Link>
        </div>

        <figure className="relative isolate after:bg-primary/70 after:w-[70%] after:h-full after:absolute after:-top-5 after:-right-5 sm:after:-top-10 sm:after:-right-10 after:-z-10 ">
          <img
            className=" mx-auto w-full"
            src="/images/hero.jpg"
            alt="hero image"
          />
        </figure>
      </div>
    </Wrapper>
  );
};

export default Hero;
