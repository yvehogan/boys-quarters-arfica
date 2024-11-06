import Image from "next/image";
import React from "react";

const AboutTeam = () => {
  return (
    <div className="bg-white md:px-28 px-4">
      <div className="mt-16 max-w-4xl">
        <h2 className="text-secondary font-bold text-4xl md:text-[50px]">
          The Boys Quarters Team
        </h2>
        <p className="text-xl text-secondary mt-5">
          Want to meet the brains behind this? Read our stories below or find us
          on your favorite social channel and say hello.
        </p>
      </div>
      <div className="flex justify-between flex-col gap-5 md:flex-row md:space-x-5 pt-10 pb-24">
        {/* <div className="relative w-full md:w-1/2 aspect-square"> */}
          <Image
            src="/images/team1.png"
            alt="team members"
            height={650}
            width={650}
            // layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        {/* </div> */}
        {/* <div className="relative w-full md:w-1/2 aspect-square"> */}
          <Image
            src="/images/team2.png"
            alt="team members"
            height={650}
            width={650}
            // layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        {/* </div> */}
      </div>
      <div className="space-y-6">
        <p className="text-secondary leading-relaxed text-lg">
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
          Impact,L.E.A.D:- Leadership, Education, Empowerment, and Advocacy.
        </p>

        <p className="text-secondary leading-relaxed text-lg">
          Through our Leadership pillar, we intend to detox the minds of every
          Boy of the &lsquo;Stereotyped Masculine Leadership&rsquo; and the damaging toxic
          masculinity that is subconsciously passed on from generation to
          generation. Our flagship project on Sexual Abuse of the Boy Child,
          offers up the opportunity to bring to fore the damaging reality of how
          much Boys are left behind in the conversation. Our activities range
          from providing information on Sexual Education and Sexual Abuse to the
          Boy-Child, provide psychosocial & legal support for abused boys,
          create platforms for learning the Skills of the future for
          disadvantages boys, reach out to the unreached boys in juvenile homes
          & special correctional centres, advocate for the Boy-Child on varying
          grounds, host boot-camps and programmes that reorient their minds off
          the inherited stance of toxic masculinity and teach on the unsaid
          truth around Leadership.
        </p>

        <p className="text-secondary leading-relaxed text-lg">
          With a growing number of over 100 Volunteers across the 6
          Geo-Political Zones in Nigeria and 5 other Africa Countries, we&rsquo;ve
          engaged 4,517 Boys, specifically through our Flagship Project called
          Boys Too (Bringing to fore the menace of Sexual Abuse of the Boy
          Child).
        </p>
      </div>
    </div>
  );
};

export default AboutTeam;
