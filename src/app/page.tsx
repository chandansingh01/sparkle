"use client";
import HeroBlur from "./components/HeroBlur";
import MainPage from "./components/MainPage";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "./components/HeroImage";
import EaseInText from "./components/EaseText";

import constant from "./core/constant";
import ScrollTextMotion from "./components/ScrollTextMotion";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
export default function Home() {
  return (
    <>
      <MainPage
        title={constant.MainPage.title}
        subText={constant.MainPage.description}
        textLinkLeft={constant.MainPage.textLinkLeft}
        textLinkRight={constant.MainPage.textLinkRight}
      />

      {constant.heroBlur.map((item) => {
        return (
          <HeroBlur
            key={item.title}
            imageSrc={item.imageSrc}
            title={item.title}
            year={item.year}
          />
        );
      })}

      <div className=" relative bg-black z-50">
        <HeroImage
          imageSrc={constant.heroImage.imageSrc}
          title={constant.heroImage.title}
          year={constant.heroImage.year}
        />
        <EaseInText paragraph={constant.EaseText} />
        <ScrollTextMotion words={constant.scrollTextMotionWords} />
        <ContactSection
          email={constant.contactSection.email}
          address={constant.contactSection.address}
          phone={constant.contactSection.phone}
        />
        <FooterSection
          title={constant.footerSection.title}
          subText={constant.footerSection.description}
          textLinkLeft={constant.footerSection.textLinkLeft}
          textLinkRight={constant.footerSection.textLinkRight}
        />
      </div>
    </>
  );
}
