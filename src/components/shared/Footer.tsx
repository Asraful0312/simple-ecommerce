import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <section className="mt-20 relative">
      <div className="w-full max-w-4xl bg-gray-100 border rounded-lg py-8 px-10 flex flex-wrap gap-5 justify-between mx-auto -mb-14 z-10 relative">
        <div>
          <h2>Ready to get started?</h2>
          <h2>Talk to us today</h2>
        </div>
        <Link className={buttonVariants()} to="/contact">
          GET STARTED
        </Link>
      </div>

      {/* main footer */}
      <footer className="bg-slate-900 pt-20 pb-16">
        <div className="grid gap-16 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl mx-auto w-full px-5 pb-6">
          <div className="">
            <h2 className="text-white text-lg mb-4">Simple Ecommarce</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, sequi.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white text-lg mb-4">
              Subscribe to get important updates
            </h2>
            <Input placeholder="example@gmail.com" />
            <Button>Subscribe</Button>
          </div>

          <div>
            <h2 className="text-white text-lg mb-4">Follow us</h2>
            <div className="flex items-center gap-5">
              <a className="flex items-center justify-center border-2 border-white p-2 transition-all duration-300 rounded-full hover:bg-white group">
                <Facebook className="size-3 text-white flex-shrink-0 group-hover:text-black transition-all duration-300" />
              </a>

              <a className="flex items-center justify-center border-2 border-white p-2 transition-all duration-300 rounded-full hover:bg-white group">
                <Youtube className="size-3 text-white flex-shrink-0 group-hover:text-black transition-all duration-300" />
              </a>

              <a className="flex items-center justify-center border-2 border-white p-2 transition-all duration-300 rounded-full hover:bg-white group">
                <Instagram className="size-3 text-white flex-shrink-0 group-hover:text-black transition-all duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white text-lg mb-4">Call Us</h2>
            <p className="text-white">+99 123456789</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200" />

        <div className="max-w-5xl mx-auto w-full px-5 flex items-center justify-between pt-6">
          <p className="text-white">
            @{new Date().getFullYear()} Asraful islam. All right Reserved
          </p>
          <div>
            <h2 className="text-white">PRIVACY POLICY</h2>
            <h2 className="text-white">TERMS & CONDITIONS</h2>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
