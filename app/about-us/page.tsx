import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { ourGoals } from "@/components/data/ourGoals";

const Page = () => {
  const about = [
    { title: "Leadership", alt: "Leadership" },
    { title: "Education", alt: "Education" },
    { title: "Empowerment", alt: "Empowerment" },
    { title: "Advocacy", alt: "Advocacy" },
  ];

  return (
    <>
      <div className="px-8 md:px-20 bg-white mb-16">
        <Header />
        <div className="bg-white text-center mt-16">
          <h2 className="text-[48px] md:text-[64px] font-bold underlined-heading">ABOUT US</h2>
        </div>
        <p className="bg-white text-[#989898] text-center w-full md:max-w-5xl mx-auto mt-8">
          &lsquo;It is believed that if a Boy is neglected or fed a diet of hate
          and violence it is obvious he will develop into a teenager who is
          misguided and confused. And the next crucial transition into manhood
          will be even more difficult.&rsquo;
        </p>
        <div className="bg-white flex gap-2 md:gap-4 my-32">
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
        <p className="text-xl text-[#2F2F2F] leading-8 md:p-8">
          Boys Quarters Africa (Registered as Boy-Child Reformation Initiative
          CAC/IT/NO134867) is a volunteer driven Boy-child transformation
          movement, missioned with the core objective of Educating, Empowering
          and Advocating for the Boychild. Our vision is to be an inspiring
          bridge of transition for every African Boy Child, by redefining
          masculinity through Empowering and Educating Projects. This vision
          transcends mere social enterprise but a movement to raise a new tribe
          of Boys who will rise to the demands of life and masculinity in
          general. All our projects are delivered on a structured level of
          impact, as we operate within our 4 Strategic pillars of Impact,
          L.E.A.D which are;
        </p>
        <div className="py-16 w-full md:max-w-4xl m-auto flex flex-wrap md:flex-nowrap justify-between">
          {about?.map((about) => (
            <div className="flex flex-col items-center mt-3 md:mt-0">
              <div className="w-[71px] h-[71px] rounded-2xl bg-[#FFF7EC]"></div>
              <h3 className="text-2xl text-secondary font-medium mt-4">
                {about?.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="bg-white">
        <p className="text-xl text-[#2F2F2F] leading-8 mb-3">
          Through our Leadership pillar, we intend to detox the minds of every
          Boy of the &lsquo;Stereotyped Masculine Leadership&rsquo; and the
          damaging toxic masculinity that is subconsciously passed on from
          generation to generation. Our flagship project on Sexual Abuse of the
          Boy Child, offers up the opportunity to bring to fore the damaging
          reality of how much Boys are left behind in the conversation.
        </p>
        <p className="text-xl text-[#2F2F2F] leading-8 mb-3">
          Our activities range from providing information on Sexual Education
          and Sexual Abuse to the Boy-Child, provide psychosocial & legal
          support for abused boys, create platforms for learning the Skills of
          the future for disadvantages boys, reach out to the unreached boys in
          juvenile homes & special correctional centres, advocate for the
          Boy-Child on varying grounds, host boot-camps and programmes that
          reorient their minds off the inherited stance of toxic masculinity and
          teach on the unsaid truth around Leadership.
        </p>
        <p className="text-xl text-[#2F2F2F] leading-8 mb-3">
          With a growing number of over 100 Volunteers across the 6
          Geo-Political Zones in Nigeria and 5 other Africa Countries,
          we&apos;ve engaged 4,517 Boys, specifically through our Flagship
          Project called Boys Too (Bringing to fore the menace of Sexual Abuse
          of the Boy Child).
        </p>
        </div>
      </div>
      <div className="bg-lightOrange">
        <div className="px-8 md:px-20 py-20 mx-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:max-w-md flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-[38px] md:text-[48px] side-lined-heading pl-7">Our Story</h2>
              <p className="text-xl">
                To raise better Boys to become better Men.
              </p>
            </div>
            <div className="mt-5 md:mt-0">
              <h2 className="font-semibold text-[38px] md:text-[48px] side-lined-heading pl-7">Our Mission</h2>
              <p className="text-xl">
                Transforming the society by EMPOWERING, EDUCATING & ADVOCATING
                for one BOY at a time.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <h2 className="font-semibold text-[38px] md:text-[48px] side-lined-heading pl-7">Our Core Values</h2>
            <ul className="list-disc pl-10 text-secondary text-xl leading-9 mt-2">
              <li>Leadership by Service</li>
              <li>Empathy.</li>
              <li>Equality</li>
              <li>Accountability</li>
              <li>Integrity</li>
              <li>Love</li>
              <li>Ingenuity & Innovation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 px-8 md:px-20">
      <div className="flex flex-col items-center mb-10 md:mb-16">
            <h3 className="text-[48px] font-semibold text-center">
              Our Goals
            </h3>
            <div className="h-2 w-14 bg-primary"></div>
          </div>
        <p className="mt-10 w-full md:max-w-5xl text-xl mx-auto text-center">
          We are an operational NGO, meaning, we plan and carry out
          boots-on-the-ground projects to accomplish our objectives around our
          pillars of impact. This requires a great deal of careful planning,
          communication, volunteer&apos;s mobilization, community engagement and
          many more. Our goal as an organization is to accomplish amongst many,
          following.
        </p>
        <div className="flex justify-center items-stretch gap-4 flex-wrap my-24">
          {ourGoals?.map((goals) => (
            <div
              key={goals?.id}
              className="bg-[#2F2F2F] bg-opacity-[0.03] rounded-xl px-5 py-10 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white mb-4"></div>
              <p className="text-secondary text-xl flex-grow">{goals?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
