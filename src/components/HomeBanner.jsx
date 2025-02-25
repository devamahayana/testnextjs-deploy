'use client';
// import "../app/homebanner.css";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(Flip, CustomEase);

const HomeBanner = () => {
    useEffect(() => {
        // Menambahkan custom ease setelah halaman selesai dimuat
        if (typeof window !== "undefined") {
          CustomEase.create(
            "hop",
            "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1 "
          );
    
          CustomEase.create(
            "hop2",
            "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1 "
          );
    
          // Split teks dengan SplitType
          const splitH2 = new SplitType(".site-info h2", {
            types: "lines",
          });
    
          splitH2.lines.forEach((line) => {
            const text = line.textContent;
            const wrapper = document.createElement("div");
            wrapper.className = "line";
            const span = document.createElement("span");
            span.textContent = text;
            wrapper.appendChild(span);
            line.parentNode.replaceChild(wrapper, line);
          });
    
          // Timeline utama
          const mainTl = gsap.timeline();
          const revealerTl = gsap.timeline();
          const scaleTl = gsap.timeline();
    
          // Animasi Revealer
          revealerTl.to(".r-1", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.5,
            ease: "hop",
          })
          .to(
            ".r-2",
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "hop",
            },
            "<"
          );
    
          // Animasi Scale
          scaleTl.to(".imgBanner:first-child", {
            scale: 1,
            duration: 2,
            ease: "power4.inOut",
          });
    
          const images = document.querySelectorAll(".imgBanner:not(:first-child)");
    
          images.forEach((imgBanner, index) => {
            scaleTl.to(
              imgBanner,
              {
                opacity: 1,
                scale: 1,
                duration: 1.25,
                ease: "power3.out",
              },
              ">-0.5"
            );
          });
    
          mainTl
            .add(revealerTl)
            .add(scaleTl, "-=1.25")
            .add(() => {
              // Menghapus gambar yang tidak digunakan lagi
              document
                .querySelectorAll(".imgBanner:not(.main)")
                .forEach((imgBanner) => imgBanner.remove());
    
              const state = Flip.getState(".main");
    
              const imagesContainer = document.querySelector(".images");
              imagesContainer.classList.add("stacked-container");
    
              document.querySelectorAll(".main").forEach((imgBanner, i) => {
                imgBanner.classList.add("stacked");
                imgBanner.computedStyleMap.order = i;
                gsap.set(".imgBanner.stacked", {
                  clearProps: "transform, top, left",
                });
              });
    
              return Flip.from(state, {
                duration: 2,
                ease: "hop",
                absolute: true,
                stagger: {
                  amount: -0.3,
                },
              });
            })
            .to(
              ".word h1, .nav-item p, .line p, .site-info h2 .line span",
              {
                y: 0,
                duration: 3,
                ease: "hop2",
                stagger: 0.1,
                delay: 1.25,
              }
            )
            .to(
              ".cover-img",
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 2,
                ease: "hop",
                delay: -4.75,
              }
            );
        }
      }, []);
      
  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <div className="revealers absolute top-0 left-0 w-screen h-screen flex flex-col z-[2]">
            <div className="revealer r-1"></div>
            <div className="revealer r-2"></div>
        </div>

        <div className="images absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full origin-center will-change-transform">
            {/* <div className="imgBanner"><img src="./assets/img1.webp" alt="" /></div>
            <div className="imgBanner"><img src="./assets/img2.webp" alt="" /></div> */}
            <div className="imgBanner main"><img src="./assets/asd.png" alt="" /></div>
            <div className="imgBanner main"><img src="./assets/img1.webp" alt="" /></div>
            <div className="imgBanner main"><img src="./assets/img2.webp" alt="" /></div>
        </div>

        {/* Hero Content */}
        <div className="relative w-full h-full">        

            <div className="cover-img">
                <img src="./assets/asd.png" alt="" />
            </div>

            <div className="site-info absolute bottom-8 left-8 w-1/2 h-1/2 flex flex-col justify-between">
                <div className="row flex gap-8">
                    <div className="col flex-1">
                        <div className="line"><p>Featured Works</p></div>
                    </div>
                    <div className="col flex-1">
                        <h2>Ciao, developer and designer and your partner. Currently available for freelance projects</h2>
                    </div>
                </div>
                <div className="row flex gap-8">
                    <div className="col flex-1"></div>
                    <div className="col flex-1">
                        <div className="address">
                            <div className="line"><p>Deva Mahayana</p></div>                            
                            <div className="line"><p>Bali - Indonesia</p></div>
                            <div className="line"><p>8°39′1″S 115°14′54″E</p></div>
                        </div>
                        <div className="socials">
                            <div className="line"><p>Hi@devamahayana.com</p></div>
                            <div className="line"><p>Instagram</p></div>
                            <div className="line"><p>LinkedIn</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner