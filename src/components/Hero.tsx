import Image from "next/image";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Hero = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 h-full md:h-screen lg:pt-8 md:pt-24 sm:pt-32 pt-28">
      <div className="flex items-center relative md:flex-row flex-col gap-10 md:gap-0">
        <div className="flex-1 flex flex-col gap-5 sm:gap-8 md:gap-10 z-[1]">
          <h1
            className={`bg-clip-text text-transparent bg-gradient-to-b from-[#E6B9FF] to-[#9E89FF] capitalize text-5xl sm:text-6xl lg:text-7xl font-light ${jura.className}`}
          >
            keep calm & collect your NFTs
          </h1>
          <p className="text-xs sm:text-sm font-[300] leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            explicabo eius modi sunt quam nisi ea obcaecati beatae, iusto eaque
            dolorum, qui, molestias vitae laboriosam.
          </p>
          <button type="button" className="flex items-center -ml-7">
            <Image
              src="/play.png"
              width={80}
              height={80}
              alt="play button"
              className="mb-0 w-[80px] h-[50px] object-top object-cover"
            />
            <div className="text-left mt-2">
              <p className="font-semibold capitalize text-sm">
                let's get started!
              </p>
              <p className="text-xs mt-1">Watch quick demo video</p>
            </div>
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/hero.png"
            width={450}
            height={450}
            alt="NFT"
            className="object-contain mx-auto max-w-[350px] lg:max-w-[450px]"
          />
        </div>
      </div>
      <Image
        src="/pink-gradients.png"
        width={500}
        height={500}
        alt="gradients"
        className="absolute top-0 left-0 -z-10"
      />
      <Image
        src="/blue-gradients.png"
        width={500}
        height={500}
        alt="gradients"
        className="absolute top-0 left-0 -z-20"
      />
      <Image
        src="/bg.png"
        width={500}
        height={500}
        alt="gradients"
        className="absolute top-0 left-0 -z-50 w-full h-[135%] xs:h-[130%] sm:h-[140%] md:h-screen"
      />
    </section>
  );
};

export default Hero;
