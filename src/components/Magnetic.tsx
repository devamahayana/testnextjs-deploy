"use client";
import Image from "next/image";
import MagneticEffect from "./MagneticEffect";
import closeIcon from "../../public/close.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Magnetic = () => {
    let menuItems = ["About", "Services", "Articles", "Projects", "Contact Us"];
    // const logoText = useRef(null);
    // const closeIconRef = useRef(null);
    // const menuItemsRefs = useRef();
    // useGSAP(() => {
    //     gsap 
    //         .timeline()
    //         .from([logoText.current, closeIconRef.current], {
    //         y: 5,
    //         opacity: 0,
    //         duration: 1,
    //         delay: 0.5,
    //     })
    //     .from(menuItemsRefs.current.children, {
    //         y: 100,
    //         opacity: 0,
    //         duration: 2,
    //         stagger: {
    //             amount: 0.7,
    //         },
    //     });
    // }, []);
  return (
    <section className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <div className="absolute top-0 left-0 m-4">
            <h2 
                // ref={logoText}
                className="text-lg font-medium"
                style={{  
                    fontFamily: 'PP neue Montreal'
                }}>
                Balimmo - 2024
            </h2>
        </div>
        <div className="absolute top-0 right-0 m-4">
            {/* <div ref={closeIconRef}> */}
            <div>
                <MagneticEffect>
                <div className="bg-black p-14 rounded-full cursor-pointer">
                    <Image src={closeIcon} alt="close" className="w-10 object-contain invert" />
                </div>
                </MagneticEffect>
            </div>
        </div>
        {/* <div ref={menuItemsRefs} className="flex items-center justify-center flex-wrap max-w-3xl gap-14"> */}
        <div className="flex items-center justify-center flex-wrap max-w-3xl gap-14">
            {menuItems.map((item, index) => (
                <MagneticEffect>
                <h2 style={{fontFamily: 'PP Neue Montreal'}} className="text-8xl font-light cursor-pointer leading-none">
                    {item}
                    <span className="text-sm ml-2">(0{index + 1})</span>
                </h2>
                </MagneticEffect>
            ))}
        </div>
    </section>
  )
}

export default Magnetic