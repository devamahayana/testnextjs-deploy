'use client';
import { useEffect } from "react";
import gsap from "gsap";
import "../app/product.css";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";

const Product = () => {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".pinned",
            start: "top top",
            endTrigger: ".whitespace",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: ".header-info",
            start: "top top",
            endTrigger: ".whitespace",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: ".pinned",
            start: "top top",
            endTrigger: ".header-info",
            end: "bottom bottom",
            onUpdate: (self) => {
                const rotation = self.progress * 360;
                gsap.to(".revealer", { rotation });
            },
        });

        ScrollTrigger.create({
            trigger: ".pinned",
            start: "top top",
            endTrigger: ".header-info",
            end: "bottom bottom",
            onUpdate: (self) => {
                const progress = self.progress;
                const clipPath = `polygon(
                    ${45 - 45 * progress}% ${0 + 0 * progress}%,
                    ${55 + 45 * progress}% ${0 + 0 * progress}%,
                    ${55 + 45 * progress}% ${100 - 0 * progress}%,
                    ${45 - 45 * progress}% ${100 - 0 * progress}%
                )`;
                gsap.to(".revealer-1, .revealer-2", {
                    clipPath: clipPath,
                    ease: "none",
                    duration: 0,
                });
            },
        });

        ScrollTrigger.create({
            trigger: ".header-info",
            start: "top top",
            end: "bottom 50%",
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const left = 35 + 15 * progress;
                gsap.to(".revealer", {
                    left: `${left}%`,
                    ease: "none",
                    duration: 0,
                });
            },
        });

        ScrollTrigger.create({
            trigger: ".whitespace",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                const scale = 1 + 15 * self.progress;
                gsap.to(".revealer", {
                    scale: scale,
                    ease: "none",
                    duration: 0,
                });
            },
        });
    });
  return (
    <div className="">
        <section className="hero">
            <h1>Balimmo</h1>
        </section>

        <section className="info">
            <div className="header-rows">
                <div className="header-row"><h1>Motion</h1></div>
                <div className="header-row"><h1>Stills</h1></div>
            </div>
        </section>

        <section className="header-info">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate necessitatibus, assumenda alias modi atque quis qui natus quisquam quos minima quibusdam vel, nulla veniam harum!
            </p>

            <div className="header-images">
                <div className="img"><img src="./assets/img1.webp" alt="" /></div>
                <div className="img"><img src="./assets/img2.webp" alt="" /></div>
                <div className="img"><img src="./assets/img3.webp" alt="" /></div>
                <div className="img"><img src="./assets/img4.webp" alt="" /></div>
            </div>
        </section>

        <section className="whitespace"></section>

        <section className="pinned">
            <div className="revealer">
                <div className="revealer-1"></div>
                <div className="revealer-2"></div>
            </div>
        </section>

        <section className="website-content">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum totam voluptas aliquam. Facilis, rem? Laborum atque fugiat saepe qui quidem.</h1>
        </section>
    </div>
  )
}

export default Product