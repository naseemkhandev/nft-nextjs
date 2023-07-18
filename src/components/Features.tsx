import Image from "next/image";
import CommonTitle from "./CommonTitle";

const Features = () => {
  return (
    <section id="resources" className="relative sm:my-10 md:my-16">
      <div className="container md:px-10 px-5 mx-auto md:flex-row flex-col flex items-center md:gap-10 lg:gap-36 pt-12 sm:pt-16 xl:pt-10">
        <div className="flex-1 flex flex-col gap-5 lg:gap-10 md:max-w-[440px]">
          <div className="lg:mb-0 mb-4">
            <CommonTitle title="why choose us?" />
          </div>
          <p className="text-xs sm:text-sm sm:leading-loose leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
            lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
            pulvinar.
          </p>
          <p className="text-xs sm:text-sm sm:leading-loose leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/features.png"
            width={500}
            height={500}
            alt="features"
            className="pb-10 sm:pb-16 md:pb-0"
          />
        </div>
      </div>
      <Image
        src="/bgfeatures.png"
        width={500}
        height={300}
        alt="features background"
        className="absolute top-0 left-0 sm:block hidden w-full lg:w-[90%] h-full md:h-[460px] -z-50"
      />
    </section>
  );
};

export default Features;
