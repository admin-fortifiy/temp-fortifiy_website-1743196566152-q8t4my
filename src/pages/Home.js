import React, { useState } from "react";
import HeroArea from "../components/home/HeroArea";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Faq from "../components/home/Faq";
import Header from "../components/common/Header";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [bEmail, setBEmail] = useState("");
  const toggleModal = () => setIsOpenConnectModal(!isOpenConnectModal);
  const [isOpenConnectModal, setIsOpenConnectModal] = useState(false);

  return (
    <>
      <Header
        toggleModal={toggleModal}
        isOpenConnectModal={isOpenConnectModal}
        bEmail={bEmail}
        setBEmail={setBEmail}
      />
      <HeroArea
        bEmail={bEmail}
        toggleModal={toggleModal}
        setBEmail={setBEmail}
      />
      <About />
      <Features />
      <Faq />
      <Analytics />
    </>
  );
}
