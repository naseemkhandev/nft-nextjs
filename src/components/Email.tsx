"use client";

import { useState } from "react";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

const Email = () => {
  const [sendMail, setSetsendMail] = useState(false);
  return (
    <>
      {sendMail === false ? (
        <section className="container md:px-10 p-10 md:p-16 mx-auto flex flex-col gap-10 items-center justify-center">
          <div className="mx-auto w-fit ">
            <CommonTitle title="Ready for Next NFT Drop?" />
          </div>
          <div className="inputbox w-full xs:w-96 xs:mt-5 text-white">
            <input required type="email" placeholder="Your email" />
            <span>Your email</span>
            <i></i>
          </div>
          <div onClick={() => setSetsendMail(true)}>
            <CommonButton btnText="send email" />
          </div>
        </section>
      ) : (
        <section className="container md:px-10 p-10 md:p-16 mx-auto">
          <div className="relative bg-white bg-[url('/doodle.png')] bg-cover bg-center bg-fixed flex flex-col gap-5 items-center justify-center py-28 w-1/2 mx-auto">
            <div>
              <Image
                src="/Thankyou.png"
                width={300}
                height={300}
                alt="Thankyou"
                className="mx-auto"
              />
            </div>
            <p className="text-[#969696] text-center text-lg">
              If you liked this project, then give it a 👍 <br />
              Don&apos;t foget to share your reviews in comment section.
            </p>
            <RxCross2
              onClick={() => setSetsendMail(false)}
              className="absolute top-10 right-12 text-2xl text-[#969696] cursor-pointer"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Email;
