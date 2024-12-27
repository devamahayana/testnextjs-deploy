"use client";
import gsap from "gsap";
import { useEffect } from "react";

import "../app/banners.css"

const Banners = () => {

    useEffect(() => {
        gsap.set(".img", { y: 500 });
        gsap.set(".loader-imgs", { x: 500 });
        gsap.set(".nav-item", { y: 25, opacity: 0 });
        gsap.set("h1, .item, footer", { y: 200});
    
        const tl = gsap.timeline({ delay: 1 });
    
        tl.to(".img", {
            y: 0,
            duartion: 1.5,
            stagger: 0.05,
            ease: "power3.inOut",
        })
        .to(
            ".loader-imgs",
            {
                x: 0,
                duration: 3,
                ease: "power3.inout"
            },
            "-=2.5"
        )
        .to(".img:not(#loader-logo", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut",
        }, "-=1")
        .to(".loader", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.inOut",
        }, "-=0.5")
        .to(".nav-item, h1, footer, .item", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut",
        }, "-=0.5");
    }, []);
    
  return (
    <div className="container">
        <div className="loader">
            <div className="loader-imgs">
                <div className="img">
                    <img src="./assets/img1.webp" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/img2.webp" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/img3.webp" alt="" />
                </div>
                <div className="img" id="loader-logo">
                    <img src="./assets/logo.png" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/img4.webp" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/img5.webp" alt="" />
                </div>
                <div className="img">
                    <img src="./assets/img6.webp" alt="" />
                </div>
            </div>
        </div>
        <div className="website-content">
            <nav>
                <div className="nav-item">
                    <a href="#">( menu )</a>
                </div>
                <div className="nav-item" id="logo">
                    <a href="#">EliteWebsites</a>
                </div>
                <div className="nav-item">
                    <a href="#">( work* )</a>
                </div>
            </nav>

            <div className="hero">
                <div className="h1">
                    <h1>we believe</h1>
                </div>
                <div className="h1">
                    <h1>website shape the</h1>
                </div>
                <div className="h1">
                    <h1><span>future</span></h1>
                </div>
            </div>

            <footer>
                <div className="item"><img src="./assets/img1.webp" alt="" /></div>
                <div className="item"><img src="./assets/img2.webp" alt="" /></div>
                <div className="item"><img src="./assets/img3.webp" alt="" /></div>
                <div className="item"><img src="./assets/img4.webp" alt="" /></div>
            </footer>
        </div>
    </div>
  )
}

export default Banners