import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const DonateOnline = () => {
  return (
    <div className="bg-white mt-24 flex flex-col lg:flex-row gap-6 justify-between items-center">
      <div className="border border-[#16222E] bg-[#EBF1F8] rounded-[20px] p-5 w-full lg:max-w-2xl min-h-[250px]">
        <h3 className="text-[#16222E] mb-4 font-bold">HOW TO DONATE</h3>
        <p className="mt-5 leading-7">
          Donations can be made via bank transfer or cheque to the bank detailed
          outlined below:
        </p>
        <div className="mt-5">
          <p className="mb-2 text-[#0C102D]">
            Bank Name: <span className="text-[#16222E] font-bold">Stanbic IBTC Bank Plc</span>
          </p>
          <p className="mb-2 text-[#0C102D]">
            Account Number: <span className="text-[#16222E] font-bold">0034494786</span>
          </p>
          <p className="mb-2 text-[#0C102D]">
            Account Name: <span className="text-[#16222E] font-bold"> Boy Child Reformation Initiative</span>
          </p>
        </div>
      </div>
      <div className="border border-[#16222E] bg-[#EBF1F8] rounded-[20px] p-5 w-full lg:max-w-2xl min-h-[250px]">
        <h3 className="text-[#16222E] mb-4 font-bold">HOW TO HELP</h3>
        <p className="mt-5 text-[16px] leading-7">
          You can help us reach 1,000 Families in Nigeria, through our PROJECT
          SABI campaign. Support BOYS QUARTERS AFRICA with your donations as we
          embark on a street by street awareness and sensitization of Boys/Men,
          including Women and Girls. We can take the news and information beyond
          twitter handle and Instagram feeds.
        </p>
      </div>
    </div>
  );
};

export default DonateOnline;
