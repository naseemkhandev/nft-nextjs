import { footerLinks } from "../utils";
import { SiGithub, SiLinkedin, SiUpwork, SiFreelancer } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const SocialMedia = ({ icon, name, link }: any) => {
  return (
    <a href={link} className="relative social-icon">
      <span className="social-media-icon mt-8 sm:mt-0 p-3 xs:py-4 xs:px-4 sm:px-[1.03rem] text-black block rounded-full z-2 sm:absolute top-1/2 left-0 -translate-y-1/2">
        {icon}
      </span>
      <span className="hidden sm:block social-name text-base font-[500] capitalize bg-white text-black rounded-full transition-all py-[0.9rem] px-[1.6rem] hover:px-16 cursor-pointer z-1 overflow-hidden">
        {name}
      </span>
    </a>
  );
};

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative bg-[url('/footerbg.png')] bg-cover h-full py-16 pb-10 sm:pb-16 pt-20 mt-10">
      <div className="container mx-auto px-5 sm:px-10 flex items-start md:flex-row flex-col gap-10 md:gap-24">
        <div className="md:max-w-[470px]">
          <h2 className="text-3xl">Naseem.</h2>
          <p className="text-dimWhite leading-relaxed text-sm xs:text-base sm:text-lg mt-5">
            Amazing NFTs marketplace, Authentic and unique digital creation.{" "}
          </p>
        </div>
        <div className="w-full md:flex-1 flex items-start sm:justify-between gap-10 sm:gap-5 sm:flex-nowrap flex-wrap">
          {footerLinks.map((item: any, index: any) => (
            <div key={index} className="capitalize">
              <h3 className="font-semibold md:text-lg">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 text-dimWhite mt-5">
                {item.links.map((link: any, index: any) => (
                  <a key={index} href={link.link} target="_blank">
                    <li className="text-[.9rem] font-[500] hover:text-secondary">
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-10 flex items-center justify-between md:flex-row flex-col gap-5 pt-8 mt-16 md:mt-28 border-t">
        <p className="lg:text-base xs:text-sm text-xs">
          Copyright Ⓒ {date} Naseem Khan. All Rights Reserved.
        </p>
        <div>
          <div className="flex items-center gap-3 xs:gap-4 text-lg xs:text-xl">
            <SocialMedia
              icon={<SiGithub />}
              name="github"
              link="https://github.com/NaseemKhan005/"
            />
            <SocialMedia
              icon={<SiLinkedin />}
              name="linkedin"
              link="https://www.linkedin.com/in/naseem-khan-275275258/"
            />
            <SocialMedia
              icon={<TbBrandFiverr />}
              name="fiverr"
              link="https://www.fiverr.com/naseemsafay?up_rollout=true"
            />
            <SocialMedia
              icon={<SiUpwork />}
              name="upWork"
              link="https://www.upwork.com/freelancers/~01a320b86f9044dd91"
            />
            <SocialMedia
              icon={<SiFreelancer />}
              name="freelancer"
              link="https://www.freelancer.com/u/naseemsaffy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
