"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".contact-main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".contact-row").forEach((row, index) => {
      const cardLeft = row.querySelector(".contact-card-left");
      const cardRight = row.querySelector(".contact-card-right");
      
      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px translateY${progress * yValues[index]}px rotate(${progress * leftRotationValues[index]}deg)`; 
          },
        },
      });

      gsap.to(cardRight, {
        x: rightXValues[index],
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardRight.style.transform = `translateX(${progress * rightXValues[index]}px translateY${progress * yValues[index]}px rotate(${progress * rightRotationValues[index]}deg)`;          
          },
        },
      });
    });

    gsap.to(".contact-logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });
    gsap.to(".contact-line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });
    gsap.to(".contact-wrapper button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <=3; i++){
      rows.push(
        <div className="contact-row" key={i}>
          <div className="contact-card contact-card-left">
            <Image src={`/img-${2 * i - 1}.jpg`} alt="" width={1000} height={1000}/>
          </div>
          <div className="contact-card contact-card-right">
            <Image src={`/img-${2 * i}.jpg`} alt="" width={1000} height={1000}/>
          </div>
        </div>
      );
    }
    return rows;
  };
  return (
    <>
      <ReactLenis root >
        <div className="contact-wrapper">
        {/* <section className="contact-hero">
          <div className="contact-hero-img">
            <Image src="/pro-logo.png" alt="" width={1000} height={1000}/>
          </div>
        </section> */}
        <section className="contact-main">
          <div className="contact-main-content">
            <div className="contact-logo">
              <Image src="/logo.png" alt="" width={1000} height={1000}/>
            </div>

            <div className="contact-copy">
              <div className="contact-line">
                <p>Lorem ipsum dolor si amet</p>
              </div>
              <div className="contact-line">
                <p>Lorem ipsum dolor si amet</p>
              </div>
              <div className="contact-line">
                <p>Lorem ipsum dolor si amet</p>
              </div>
            </div>

            <div className="">
              <button>GET PRO</button>
            </div>
          </div>

          {generateRows()}
        </section>

        <section className="contact-footer">
          <Link href="#">Link in description</Link>
        </section>
        </div>
      </ReactLenis>
    </>
  );
}
