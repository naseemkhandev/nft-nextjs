import Image from "next/image";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";

const TopCreators = () => {
  return (
    <section id="marketplace" className="container flex flex-col items-center gap-16 sm:gap-20 md:gap-24 pt-5 sm:pt-16 p-10 md:p-16 mx-auto">
      <div className="mx-auto">
        <CommonTitle title="top creators" />
      </div>

      <div className="relative mx-auto">
        <Image
          src="/map.png"
          width={800}
          height={500}
          alt="gradients"
          className="z-[1] mx-auto"
        />
        <Image
          src="/map-overlay.png"
          width={800}
          height={500}
          alt="gradients"
          className="absolute top-0 left-0 mix-blend-hue w-full"
        />
        <Image
          src="/collectors.png"
          width={800}
          height={500}
          alt="gradients"
          className="absolute top-0 left-0 w-full"
        />
      </div>
      <div className="mx-auto">
        <CommonButton btnText="view all collectors" />
      </div>
    </section>
  );
};

export default TopCreators;
