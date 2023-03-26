import Navbar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import CarouselSlider from "../carousel_slider/carousel_slider";
import About from "../About/About";
import Footer from "../Footer/footer";

export default function Home() {
  const handleClick = (event) => {
    event.preventDefault();
    const { target } = event;
    const href = target.getAttribute("target");
    if (href == null || !href.startsWith("#")) {
      return;
    }
    const id = href.substring(1);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <CarouselSlider></CarouselSlider>
      <About></About>
      <Footer></Footer>
    </div>
  );
}
