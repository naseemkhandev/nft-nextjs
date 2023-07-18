import Image from "next/image";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";

const Collections = () => {
  return (
    <section id="about" className="container md:px-10 px-5 flex md:flex-row flex-col items-center gap-10 lg:gap-16 pt-5 sm:pt-16 p-10 md:p-16 mx-auto">
      <div>
        <Image
          src="/collections.png"
          width={1000}
          height={500}
          alt="collections"
          className="w-full mx-auto md:w-[1000px]"
        />
      </div>

      <div className="flex flex-col gap-10 lg:gap-20">
        <CommonTitle title="latest NFT's Collections" />
        <p className="text-xs sm:text-sm lg:text-base leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
          lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus
          eget vulputate rhoncus.
        </p>
        <div className="mr-auto">
          <CommonButton btnText="view all collectors" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
