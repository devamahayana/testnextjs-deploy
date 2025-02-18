'use client';

import { useEffect } from 'react';
import { data } from '../app/data.js'; // Pastikan data.js ada dalam struktur folder yang sesuai
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
// import "../app/portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis scroll library
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const pinnedSection = document.querySelector(".portfolio-pinned");
    const progressBar = document.querySelector(".portfolio-progress");
    const pinnedHeight = window.innerHeight * 10;
    const images = gsap.utils.toArray(".portfolio-img");

    // Functions for animating image entry and exit
    function animateImageEntry(img) {
      gsap.fromTo(
        img, {
          scale: 1.25,
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          opacity: 0
        }, {
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );

      gsap.fromTo(
        img.querySelector("img"),
        {
          filter: "contrast(2) brightness(10)"
        },
        {
          filter: "contrast(1) brightness(1)",
          duration: 1,
          ease: "power2.inOut",
        }
      );
    }

    function animateImageExitForward(img) {
      gsap.to(img, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }

    function animateImageExitReverse(img) {
      gsap.to(img, {
        scale: 1.25,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.to(img.querySelector("img"), {
        filter: "contrast(2) brightness(10)",
        duration: 1,
        ease: "power2.inOut",
      });
    }

    function updateInfoContent(index) {
      const infoItems = document.querySelectorAll(".portfolio-info > div p");
      const link = document.querySelector(".portfolio-info .portfolio-link a");

      infoItems.forEach((item) => (item.innerHTML = ""));
      link.setAttribute("href", "#");

      const item = data[index];
      const contentArray = [item.title, item.tagline, item.year, item.tag];

      infoItems.forEach((element, i) => {
        if (i < 4) {
          const letters = contentArray[i].split("");
          letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            element.appendChild(span);

            gsap.to(span, {
              opacity: 1,
              duration: 0.01,
              delay: 0.03 * index,
              ease: "power1.inOut",
            });
          });
        }
      });

      link.setAttribute("href", item.link);

      const linkText = link.textContent;
      link.innerHTML = "";
      linkText.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0;
        link.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          duration: 0.01,
          delay: 0.03 * index,
          ease: "power1.inOut",
        });
      });
    }

    updateInfoContent(0);
    animateImageEntry(images[0]);

    let lastCycle = 0;

    ScrollTrigger.create({
      trigger: pinnedSection,
      start: "top top",
      end: `+=${pinnedHeight} * 2`,
      pin: true,
      pinSpacing: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const totalProgress = self.progress * 5;
        const currentCycle = Math.floor(totalProgress);
        const cycleProgress = (totalProgress % 1) * 100;

        if (currentCycle < images.length) {
          const currentImage = images[currentCycle];
          const scale = 1 - (0.25 * cycleProgress) / 100;
          gsap.to(currentImage, {
            scale: scale,
            duration: 0.1,
            overwrite: "auto",
          });

          if (currentCycle !== lastCycle) {
            if (self.direction > 0) {
              if (lastCycle < images.length)
                animateImageExitForward(images[lastCycle]);
              if (currentCycle < images.length) {
                animateImageEntry(images[currentCycle]);
                gsap.delayedCall(0.5, () => updateInfoContent(currentCycle));
              }
            } else {
              if (currentCycle < images.length) {
                animateImageEntry(images[currentCycle]);
                gsap.delayedCall(0.5, () => updateInfoContent(currentCycle));
              }
              if (lastCycle < images.length)
                animateImageExitReverse(images[lastCycle]);
            }
            lastCycle = currentCycle;
          }
        }
        if (currentCycle < 5) {
          gsap.to(progressBar, {
            height: `${cycleProgress}%`,
            duration: 0.1,
            overwrite: true,
          });

          if (cycleProgress < 1 && self.direction > 0) {
            gsap.set(progressBar, { height: "0%" });
          } else if (cycleProgress > 99 && self.direction < 0) {
            gsap.set(progressBar, { height: "100%" });
          }
        } else {
          gsap.to(progressBar, {
            height: self.direction > 0 ? "100%" : `${cycleProgress}%`,
            duration: 0.1,
            overwrite: true,
          });
        }
      },
    });
  }, []);

  return (
    <div className="container portfolio">
        <section className="portfolio-pinned">
            <div className="portfolio-info">
                <div className="portfolio-title"><p>Title</p></div>
                <div className="portfolio-tagline"><p>Tagline</p></div>
                <div className="portfolio-year"><p>Year</p></div>
                <div className="portfolio-tag"><p>Tag</p></div>
                <div className="portfolio-link"><a href="">Explore</a></div>
            </div>

            <div className="portfolio-progress-bar">
                <div className="portfolio-progress"></div>
            </div>

            <div className="portfolio-img" id="portfolio-img-1"><img src="./assets/img1.webp" alt="" /></div>
            <div className="portfolio-img" id="portfolio-img-2"><img src="./assets/img2.webp" alt="" /></div>
            <div className="portfolio-img" id="portfolio-img-3"><img src="./assets/img3.webp" alt="" /></div>
            <div className="portfolio-img" id="portfolio-img-4"><img src="./assets/img4.webp" alt="" /></div>
            <div className="portfolio-img" id="portfolio-img-5"><img src="./assets/img5.webp" alt="" /></div>
        </section>

        {/* <section className="about">
            <p>Your next section goes here</p>
        </section> */}
    </div>
  );
};

export default Portfolio;
