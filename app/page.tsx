import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import LongGrid from "@/components/LongGrid";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { carouselData } from "@/components/data/carouselData";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-[url('/images/hero.png')] bg-cover bg-center h-screen">
        <div className="w-full px-8 lg:px-20 h-full flex flex-col">
          <Header />
          <div className="flex-grow flex items-center">
            <div className="max-w-lg">
              <h1 className="text-white font-bold text-[53px] leading-tight mb-5">
                Empowering African Boys for a Brighter Future
              </h1>
              <p className="text-white mb-10 text-[20px]">
                We are a movement resolved to educate, empower & advocate for a
                new tribe of boys who will deliberately & purposefully
                transition from boyhood to manhood.
              </p>
              <div className="flex gap-5">
                <Button
                  className="bg-transparent border border-primary text-primary px-10 py-6"
                  size="lg"
                  variant="outlinePrimary"
                >
                  Get Involved
                </Button>
                <Button
                  className="bg-primary text-secondary px-10 py-6 hover:bg-primary hover:opacity-70"
                  size="lg"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full flex flex-col lg:flex-row justify-between py-10 lg:py-32 px-8 lg:px-20 gap-10">
        <div className="w-full lg:w-[45%] flex gap-4">
          <div className="w-full justify-between">
            <div className="flex items-center gap-5">
              <LongGrid />
              <div>
                <p className="text-[53px] font-medium text-secondary">5,850</p>
                <p className="text-lightGrey text-[20px]">Boys Engaged</p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-24">
              <LongGrid />
              <div>
                <p className="text-[53px] font-medium text-secondary ">82</p>
                <p className="text-lightGrey text-[20px]">
                  Successful Campaigns
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  justify-between">
            <div className="flex items-center gap-5">
              <LongGrid />
              <div>
                <p className="text-[53px] font-medium text-secondary">18</p>
                <p className="text-lightGrey text-[20px]">
                  Incredible Volunteer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-24">
              <LongGrid />
              <div>
                <p className="text-[53px] font-medium text-secondary ">$140k</p>
                <p className="text-lightGrey text-[20px]">Donated</p>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/donations.png"
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="bg-[#161616]">
        <div className="px-8 md:px-20 py-24">
          <h2 className="font-semibold text-[42px] md:text-[64px] text-white text-center mb-3">
            Our Initiatives
          </h2>
          <p className="text-white text-xl max-w-[800px] m-auto text-center mb-10">
            At Boys Quarters Africa, we are committed to driving positive change
            through a range of impactful initiatives tailored to the unique
            needs of African boys.{" "}
          </p>
          <Carousel className="w-full relative mb-12">
            <CarouselContent className="-ml-1">
              {carouselData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/4"
                >
                  <Card className="overflow-hidden">
                    <CardContent className="relative p-0 aspect-square">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h3 className="text-white text-[32px] font-semibold">
                          {item.title}
                        </h3>
                        <Link
                          href={item.link}
                          className="text-primary flex gap-2 items-center text-[16px] mt-2"
                        >
                          view more <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex">
              <CarouselPrevious className="h-8 w-8 rounded-md border border-white text-white" />
              <CarouselNext className="h-8 w-8 rounded-md border border-white text-white" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full py-10 lg:py-32 px-8 lg:px-20 flex flex-col lg:flex-row gap-24 justify-between">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/pillars.png"
            alt=""
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-[#BCB078] text-[16px] md:mt-16">
            PILLARS OF IMPACT
          </h4>
          <p className="text-secondary font-semibold text-[53px]">
            Our Pillars Of Impact
          </p>
          <p className="text-secondary text-xl leading-9 md:pr-20 mb-8">
            At Boys Quarters Africa, we believe in creating sustainable change
            through strategic initiatives that focus on four key pillars of
            impact. These pillars serve as the foundation of our projects,
            guiding us as we work towards our mission of transforming the lives
            of African boys.
          </p>
          <Button
            className="bg-transparent border border-primary text-primary px-10 py-6 flex items-center"
            size="lg"
            variant="outlinePrimary"
          >
            Read more <ChevronRight className="h-4 w-4"/>
          </Button>
        </div>
      </div>
      <div className="bg-lightOrange flex flex-col justify-center text-center">
        <div className="py-24 max-w-6xl mx-auto md:px-10">
        <h2 className="text-[32px] lg:text-[53px] font-semibold text-secondary">Join us on this transformative journey to redefine masculinity in Africa.</h2>
        <p className="text-secondary text-lg lg:px-28 mt-3">Together, we can empower boys to dream big, break barriers, and build a better tomorrow for themselves and their communities.</p>
        <div className="flex justify-center mt-14 gap-5">
                <Button
                  className="bg-transparent border border-primary text-primary px-10 py-6"
                  size="lg"
                  variant="outlinePrimary"
                >
                  Get Involved
                </Button>
                <Button
                  className="bg-primary text-white px-10 py-6 hover:bg-primary hover:opacity-70"
                  size="lg"
                >
                  Donate
                </Button>
              </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
