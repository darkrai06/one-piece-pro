import React from "react";
import Slider from "./Slider";
import Experience from "./Experience";
import { Helmet } from "react-helmet-async";
import AnimatedComponent from "./AnimatedComponent";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home |One Piece</title>
      </Helmet>
      <Slider></Slider>
      <AnimatedComponent></AnimatedComponent>
      <Experience></Experience>
      <div className="text-white font-extrabold text-4xl my-8 text-center">Our Esteemed Partners</div>
      <div className="bg-gray-100 p-2 flex gap-4">
      <Marquee pauseOnHover={true} className="space-x-6">
        <img src="https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png" 
             alt="Google" className="h-12 mx-6" />
        <img src="https://www.designerpeople.com/wp-content/uploads/2018/10/inspiring-fashion-beauty-industry-logo-design-1.png" 
             alt="Microsoft" className="h-12 mx-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
             alt="Amazon" className="h-12 mx-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" 
             alt="Apple" className="h-12 mx-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" 
             alt="Netflix" className="h-12 mx-6" />
        <img src="https://www.nicepng.com/png/detail/28-283120_logos-of-different-brands.png" 
             alt="Instagram" className="h-12 mx-6" />
        <img src="https://purepng.com/public/uploads/thumbnail//purepng.com-car-logologocar-brand-logoscars-1701527429081pccft.png" 
             alt="Google" className="h-12 mx-6" />
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png" 
             alt="Microsoft" className="h-12 mx-6" />
        <img src="https://purepng.com/public/uploads/large/purepng.com-ebay-logologobrand-logoiconslogos-251519938326w1a5t.png" 
             alt="Amazon" className="h-12 mx-6" />
        <img src="https://brandlogos.net/wp-content/uploads/2025/03/playtika-logo_brandlogos.net_2beqf.png" 
             alt="Apple" className="h-12 mx-6" />
        <img src="https://purepng.com/public/uploads/large/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png" 
             alt="Netflix" className="h-12 mx-6" />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/504/086/small/natural-theme-sign-logo-free-png.png" 
             alt="Instagram" className="h-12 mx-6" />
      </Marquee>
    </div>
      <div className="lg:h-[650px] lg:w-[1140px] bg-gradient-to-r from-cyan-400 to-blue-600 p-4 my-6 md:p-8 md:my-40 lg:p-[40px] lg:my-[130px] rounded-[10px] mx-auto flex sm:flex-col lg:flex-row w-3/4 items-center align-middle gap-8">
                <div className="flex flex-col w-[440px] h-[341px] justify-between ml-[70px]">
                <h1 className="text-3xl md:text-[45px] text-white font-extrabold">Meet Our Super Clients</h1>
                <p className="font-lg text-white">Most of our clients are happy with their services as they have written in their reviews. Find out the best services One Piece Pro is providing from our past client reviews. </p>
                <Link to={'/review'} className="btn w-[139px] h-14 px-5 py-4 rounded-xl text-xl font-bold bg-white">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Show All</span>
                </Link>
                </div>
                <div className="hidden md:block w-[433px] h-[233]  pl-12 pr-10 py-10 bg-white rounded-xl z-10">
                    <p className="text-lg font-light text-gray-600">All the sites are awesome and naturally pleasant. Specially water 7 and sabaody archipelago are some of the best places for sightseeing.</p>
                    <p className="font-lg text-blue-800 font-extrabold mt-[20px] mb-[10px]">Ilham Yuda</p>
                    <p className="font-lg font-medium text-stone-500">Businessman</p>
                </div>
            </div>
    </div>
  );
};

export default Home;
