import Image from "next/image";
import CommonTitle from "./CommonTitle";

const NftCard = ({ imgSrc, imgAlt, title, desc }: any) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-5 text-center">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt={imgAlt}
        className="mx-auto"
      />
      <h2 className="text-lg capitalize">{title}</h2>
      <p className="text-xs sm:text-sm leading-loose">{desc}</p>
    </div>
  );
};

const SellNFT = () => {
  return (
    <section id="faq" className="container md:px-10 p-10 md:p-16 mx-auto">
      <div className="sm:mx-auto w-fit mb-12 sm:mb-20">
        <CommonTitle title="create & sell your NFT" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
        <NftCard
          imgSrc="/wallet.png"
          imgAlt="wallet"
          title="set up your wallet"
          desc="Once you've set up your wallet of choice, connect it to OpenSea by
        clicking the wallet icon in the top right corner. Learn about the
        wallets we support."
        />
        <NftCard
          imgSrc="/shapes.png"
          imgAlt="shapes"
          title="Create Your Collection"
          desc="Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
        />
        <NftCard
          imgSrc="/gallery.png"
          imgAlt="gallery"
          title="Add Your NFT's"
          desc="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
        />
        <NftCard
          imgSrc="/bag.png"
          imgAlt="shooping bag"
          title="List Them For Sale"
          desc="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
        />
      </div>
    </section>
  );
};

export default SellNFT;
