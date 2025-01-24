"use client"
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";

const HowToDonate = () => {
  const { isDesktop } = useMediaQuery('(min-width: 1400px)');

  return (
    <section className="bg-white flex justify-center items-center py-32 mt-32 relative">
      {isDesktop && (
        <>
          <div className="absolute top-10 left-10">
            <img
              src="/images/donate/donate1.png"
              alt="Empowering boys"
              className="w-40 h-50 object-cover rounded-md"
            />
          </div>
          <div className="absolute top-10 right-10">
            <img
              src="/images/donate/donate2.png"
              alt="Educating boys"
              className="w-40 h-50 object-cover rounded-md"
            />
          </div>
          <div className="absolute bottom-0 left-52">
            <img
              src="/images/donate/donate3.png"
              alt="Nurturing boys"
              className="w-40 h-50 object-cover rounded-md"
            />
          </div>
          <div className="absolute bottom-0 right-52">
            <img
              src="/images/donate/donate4.png"
              alt="Supporting boys"
              className="w-40 h-50 object-cover rounded-md"
            />
          </div>
        </>
      )}

      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl text-center leading-relaxed mb-5 max-w-3xl">
          Your contribution helps us nurture, educate, and empower boys across
          Africa to reach their full potential.
        </p>
        <Button
          className="bg-primary text-white hover:bg-primary hover:opacity-70"
          size="lg"
          asChild
        >
          <Link href="/donate">Donate</Link>
        </Button>
      </div>
    </section>
  );
};

export default HowToDonate;