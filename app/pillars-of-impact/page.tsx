import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-[url('/images/pillars-of-impact.png')] bg-cover bg-center h-screen relative mb-32">
        <div className="w-full px-8 md:px-20 h-full flex flex-col">
          <Header />
          <div className="w-full lg:w-[calc(100%-35rem)] bg-primary absolute -bottom-16 right-0">
            <div className="w-full lg:max-w-4xl px-4 py-10">
              <p className="font-bold text-[64px] leading-tight text-white py-4 max-w-[10ch]">
                PILLARS OF IMPACT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 md:py-16">
      <div className="flex flex-col items-center mb-8 md:mb-16">
            <h3 className="text-[48px] font-semibold text-center">
              Leadership
            </h3>
            <div className="h-2 w-12 bg-primary"></div>
          </div>
        <div className="w-full px-8 md:px-20 flex flex-col lg:flex-row gap-12 justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-secondary text-xl leading-9 md:pr-8">
              The principal objective of this Pillar of Impact is to detox the
              minds of every Boy of the&lsquo;Stereotyped Masculine
              Leadership&rsquo;and the damaging toxic masculinity that is
              subconsciously passed on. The sheer feeling that Men are made to
              lead and Women are made to follow birth the spiral disease called
              &lsquo;Misogyny&rsquo; in our society. On this Pillar of impact,
              we engage Boys by teaching them that Leadership is Service and not
              about the Sex or Gender. Leadership isn&apos;t synonymous to being
              a Boy or a Man. Leadership isn&apos;t about the innate aspiration
              for office. At Boys Quarters, we believe if our Boys are taught
              right, their perception of women and familyhood would take a
              positive turn. In our bid to change the narrative around Gender
              Equality & Human Right, there&apos;s a need to tweak the inherited
              understanding of what leadership means to our Boys.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/leadership.png"
              alt=""
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="py-16 bg-lightOrange">
        <div className="w-full px-8 md:px-20">
        <div className="flex flex-col items-center mb-16">
            <h3 className="text-[48px] font-semibold text-center">
              Education
            </h3>
            <div className="h-2 w-12 bg-primary"></div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 justify-between mb-28">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/education.png"
                alt=""
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-secondary text-xl leading-9 md:pr-8">
                Under the Pillar, Education, our goal is to empty the street of
                Africa of Young Boys who are subjected to several form of
                violence. (Domestic, Emotional and Sexual).
              </p>
              <p className="text-secondary text-xl leading-9 md:pr-8 mt-1">
                We are of the resolve that Every Child must Go to school. Boys
                aren&apos;t Men yet. Hence, they shouldn&apos;t be subjected to
                debasing realities that rid them off their Self Esteem and
                desired future. However, our definition of Education here
                isn&apos;t ABC or 123 only. It&apos;s Music, Drawing, Fashion,
                Dancing, etc. This is basically about transforming their Gifts
                to Skills and garnish it up with Values.
              </p>
              <p className="text-secondary text-xl leading-9 md:pr-8 mt-1">
                Through this pillar, we intend to reach out to disabled Boys-
                especially in the North.
              </p>
            </div>
          </div>
          <h3 className="text-[32px] font-semibold mb-2">Flagship Project</h3>
          <div className="h-1 w-12 bg-primary mt-2"></div>
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
              <p className="text-secondary text-xl leading-9">
                <span className="font-bold">The Digi-Street Hub:</span> This
                core objective of this project is combat the spike in internet
                fraud activities amongst Boys and skill them up with the Skill
                of the Future. This STEM project borders on our objective to
                skill up 2 Million under-privilege African Boys with skills that
                are in tandem with their Counterparts across the world.
              </p>
              <p className="text-secondary text-xl leading-9 mt-1">
                We&apos;d be running Mobile Digital Hubs, where we&apos;d take
                trainings on Artificial Intelligence, Data Science, BlockChain
                Technology, Solutions Development, etc to their areas.
              </p>
              <p className="text-secondary text-xl leading-9 mt-1">
                On this{" "}
                <span className="font-bold">Digi-Street Hub Project,</span>{" "}
                we&apos;d train Boys who are from below-humble backgrounds and
                skill them up to put our names on Global Lips. This Project
                would see us take Mobile Yahoo Hub to different suburb areas
                across Africa and they are also taught Critical Thinking &
                Problem Solving. Creativity & Innovation.
              </p>
            </div>
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0" style={{ height: "550px" }}>
              <div className="absolute left-0 top-10 bottom-0 w-[calc(50%-8px)]">
                <Image
                  src="/images/flagship-project1.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute right-0 -top-[10%] w-[calc(50%-8px)]"
                style={{ height: "500px" }}
              >
                <Image
                  src="/images/flagship-project2.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-16 px-8 lg:px-20">
        <div className="w-full md:px-16">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-[48px] font-semibold text-center">
              Empowerment
            </h3>
            <div className="h-2 w-12 bg-primary"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between mb-32">
            <div className="w-full lg:w-1/2">
              <p className="text-secondary text-xl leading-9">
                Under the Empowerment Pillar, we currently run a Year-Long at
                Special Correctional Centre for Boys called{" "}
                <span className="font-bold">&lsquo;THE EXCHANGE&rsquo;</span>.
                It&apos;s a Skill and Value Transference Programme for Boys in
                Correctional Centre and those behind bars. Our desire is to see
                them Exchange their Pains for Purpose, weakness for strength
                etc. We skill up and value Up those Boys and help them become
                amazing citizens.
              </p>
              <p className="text-secondary text-xl leading-9 mt-5">
                A lot of them got into remand him because of varying issues. At
                some point, we&apos;d provide Legal Aid for them and hope to get
                them integrated back into the Society, through our Boys Quarters
                Safe Home.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/empowerment.png"
                alt=""
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="bg-white w-full flex flex-col-reverse lg:flex-row items-center gap-5 justify-between">
            <div className="w-full mt-24 lg:mt-0 lg:w-1/2 relative" style={{ height: "550px" }}>
              <div className="absolute right-0 top-10 bottom-0 w-[calc(50%-8px)]">
                <Image
                  src="/images/empowerment2.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute left-0 -top-[10%] w-[calc(50%-8px)]"
                style={{ height: "500px" }}
              >
                <Image
                  src="/images/empowerment1.png"
                  alt=""
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-[32px] font-semibold">
                Flagship Project
              </h3>
          <div className="h-1 w-12 bg-primary mt-2 mb-4"></div>
              <p className="text-secondary text-xl leading-9">
                <span className="font-bold">Boys Quarters Safe Home: </span>
                This would be an end to end facility for the Transformation,
                Mind Re-Invention and Future-Skilling for African Boys. Our goal
                is to have these Homes across 100 Cities in Africa, before 12pm
                on 31 December, 2030.
              </p>
              <p className="text-secondary text-xl leading-9 mt-1">
                We had the maiden edition of the Exchange in December 2018 at
                the Special Correctional Centre Boys, Lagos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-lightOrange">
        <div className="w-full px-8 md:px-20">
        <div className="flex flex-col items-center mb-16">
            <h3 className="text-[48px] font-semibold text-center">
              Advocacy
            </h3>
            <div className="h-2 w-12 bg-primary"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between mb-20">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/advocacy.png"
                alt=""
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-secondary text-xl leading-9 lg:pr-8">
                The <span className="font-bold">#BoysToo </span>Campaign is one
                of our Flagship Project and this falls under the pillar of
                &lsquo;Advocacy&rsquo;. We intend to bring to fore the menace of
                Sexual Abuse of the Boy Child. Our intent is to take Sexual
                Education to the Boys, sensitize them on the Menace Of Sexual
                Abuse on their Minds and Reiterate the Power Of SPEAKING UP. We
                are working with Psychologists, Counselors and Psycho-Therapists
                on this cause.
              </p>
              <p className="text-secondary text-xl leading-9 lg:pr-8 mt-1">
                We aren&apos;t just talking to them. We are also working to help
                some of them find healing and closure.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-between mb-16">
            <div className="w-full lg:w-1/2 lg:pl-5">
              <p className="text-secondary text-xl leading-9 lg:pr-8">
                Apart from our engagement with the Boys, we also GATHER DATA.
                We&apos;ve met with over 1,000 Boys since we kicked off the
                Project and we&apos;ve been able to get reasonable value from
                the information gathered from those Boys. Apart from the
                Information and Psychological support, we also work on giving
                LEGAL aid to families who intend to take any abuse related
                issue. As part of Advocacy, we discovered that Rape is an
                offense, recognized by our laws but so emotionally segregated to
                favour the feminine gender. Right now, the criminal code and
                penal code defined Rape is against female. Only a single law
                which is violent against persons Act define rape to be either
                against male or female.That's the contradiction in our
                jurisprudence. We are looking forward to an ideal state where
                wrong will be wrong irrespective of who did it.
              </p>
              <p className="mt-5 text-secondary text-xl">
                Where Rape will be Rape, irrespective of the Gender
              </p>
              <ul className="list-disc pl-10 text-secondary text-xl leading-9 lg:pr-8 mt-2">
                <li className="">
                  Create a channel for pyscho-socio support. Engagement and
                  connection with Psychologists, Psychotherapists & Counsellors.
                  A pool of first responders.
                </li>
                <li>
                  The focus is healing for the abused-Closure and Healing.
                </li>
                <li>Legal Advocacy for abuse against the Male Rape gender.</li>
                <li>Toll free number</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/advocacy1.png"
                alt=""
                layout="responsive"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
