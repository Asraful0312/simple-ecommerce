import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-16">
      <h2 className="text-5xl text-center text-gray-900 font-bold">404</h2>
      <h2 className="text-center my-3 text-2xl text-gray-900">
        UH OH! You're lost
      </h2>
      <p className="text-center text-lg">
        The page you are looking for doesn't exist.Click the button below to go
        back to the homepage.
      </p>
      <div className="flex justify-center mt-3">
        <Link className={buttonVariants()} to="/">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;
