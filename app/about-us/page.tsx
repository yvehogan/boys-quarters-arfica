import React from "react";
import Header from "@/components/Header";
import Image from "next/image";

const Page = () => {
  const images = [
    { src: "/images/speaker.jpg", alt: "Speaker at event" },
    { src: "/images/woman-teaching.jpg", alt: "Woman teaching children" },
    { src: "/images/group-photo.jpg", alt: "Group photo with award" },
    { src: "/images/man-presenting.jpg", alt: "Man presenting to children" },
  ];

  return (
    <>
      <div className="px-20 bg-white">
        <Header />
        <h2 className="text-[64px] font-bold text-center mt-16">ABOUT US</h2>
        <p className="text-[#989898] text-center max-w-5xl mx-auto mt-8">
          &lsquo;It is believed that if a Boy is neglected or fed a diet of hate
          and violence it is obvious he will develop into a teenager who is
          misguided and confused. And the next crucial transition into manhood
          will be even more difficult.&rsquo;
        </p>
        <div className="flex gap-4 my-32">
          <div className="w-1/2 relative" style={{ height: "550px" }}>
            <div className="absolute right-0 top-10 bottom-0 w-[calc(50%-8px)]">
              <Image
                src="/images/about2.png"
                alt=""
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute left-0 -top-[10%] w-[calc(50%-8px)]"
              style={{ height: "500px" }}
            >
              <Image
                src="/images/about1.png"
                alt=""
                width={300}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-1/2 relative" style={{ height: "550px" }}>
            <div className="absolute right-0 top-10 bottom-0 w-[calc(50%-8px)]">
              <Image
                src="/images/about4.png"
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute left-0 -top-[10%] w-[calc(50%-8px)]"
              style={{ height: "500px" }}
            >
              <Image
                src="/images/about3.png"
                alt=""
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="text-xl text-[#2F2F2F] leading-8 p-8">
          Boys Quarters Africa (Registered as Boy-Child Reformation Initiative
          CAC/IT/NO134867) is a volunteer driven Boy-child transformation
          movement, missioned with the core objective of Educating, Empowering
          and Advocating for the Boychild. Our vision is to be an inspiring
          bridge of transition for every African Boy Child, by redefining
          masculinity through Empowering and Educating Projects. This vision
          transcends mere social enterprise but a movement to raise a new tribe
          of Boys who will rise to the demands of life and masculinity in
          general. All our projects are delivered on a structured level of
          impact, as we operate within our 4 Strategic pillars of
          Impact, L.E.A.D which are;
        </p>
      </div>
    </>
  );
};

export default Page;
