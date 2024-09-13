import React from 'react'
import Header from "../components/Header";
import { Core } from "../components/Core";
import { AboutUs } from "../components/AboutUs";
import { Requirements } from "../components/Requirements";
import { Contacts } from "../components/Contacts";
import { Footer } from "../components/Footer";
import { Testemonials } from "../components/Testemonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Core />
      <AboutUs />
      <Requirements />
      <Testemonials />
      <Contacts />
      <Footer />
    </div>
  )
}

export { Home };