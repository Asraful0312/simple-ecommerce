import Wrapper from "../shared/Wrapper";

const Trusted = () => {
  return (
    <div className="bg-gray-100 py-16">
      <Wrapper>
        <h1 className="text-4xl font-bold text-center">
          Trusted By 100+ Companies
        </h1>
        <div className="flex flex-wrap gap-5 items-center justify-around mt-10">
          <img
            className="w-28 h-full grayscale hover:grayscale-0 transition-all decoration-neutral-300"
            src="/images/c1.png"
            alt="compagnie image"
          />
          <img
            className="w-28 h-full grayscale hover:grayscale-0 transition-all decoration-neutral-300"
            src="/images/c2.png"
            alt="compagnie image"
          />
          <img
            className="w-28 h-full grayscale hover:grayscale-0 transition-all decoration-neutral-300"
            src="/images/c3.png"
            alt="compagnie image"
          />
          <img
            className="w-28 h-full grayscale hover:grayscale-0 transition-all decoration-neutral-300"
            src="/images/c4.png"
            alt="compagnie image"
          />
          <img
            className="w-28 h-full grayscale hover:grayscale-0 transition-all decoration-neutral-300"
            src="/images/c5.png"
            alt="compagnie image"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Trusted;
