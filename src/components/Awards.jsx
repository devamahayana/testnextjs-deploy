'use client';
import { useEffect } from "react";
import gsap from "gsap";
// import "../app/award.css";

const Award = () => {
    useEffect(() => {
        const imageSources = [
            "./assets/img1.webp",
            "./assets/img2.webp",
            "./assets/img3.webp",
            "./assets/img4.webp",
            "./assets/img5.webp",
        ];
    
        const awardsItems = document.querySelectorAll(".awards-item");
    
        awardsItems.forEach((item) => {
            const copyElements = item.querySelectorAll(".awards-info, .awards-name, .awards-tag");
    
            copyElements.forEach((div) => {
                const copy = div.querySelector("p");
    
                if (copy) {
                    const duplicateCopy = document.createElement("p");
                    duplicateCopy.textContent = copy.textContent;
                    div.appendChild(duplicateCopy);
                }
            });
        });
    
        const appendImages = (src) => {
            const preview1 = document.querySelector(".awards-preview-img-1");
            const preview2 = document.querySelector(".awards-preview-img-2");
    
            const img1 = document.createElement("img");
            const img2 = document.createElement("img");
    
            img1.src = src;
            img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
            img2.src = src;
            img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    
            preview1.appendChild(img1);
            preview2.appendChild(img2);
    
            gsap.to([img1, img2], {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power3.out",
                onComplete: function () {
                    removeExtraImages(preview1);
                    removeExtraImages(preview2);
                },
            });
        };
    
        function removeExtraImages(container){
            while (container.children.length > 10) {
                container.removeChild(container.firstChild);
            }
        }
    
        document.querySelectorAll(".awards-item").forEach((item, index) => {
            item.addEventListener("mouseover", () => {
                mouseOverAnimation(item);
                appendImages(imageSources[index]);
            });
    
            item.addEventListener("mouseout", () => {
                mouseOutAnimation(item);
            });
        });
    
        const mouseOverAnimation = (elem) => {
            gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
                top: "-100%",
                duration: 0.3,
            });
            gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
                top: "0%",
                duration: 0.3,
            });
        };
    
        const mouseOutAnimation = (elem) => {
            gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
                top: "0%",
                duration: 0.3,
            });
            gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
                top: "100%",
                duration: 0.3,
            });
        };
    
        document.querySelector(".awards").addEventListener("mouseout", function (){
            gsap.to(".awards-preview-img img", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "power3.out",
            });
        });
    
        document.addEventListener("mousemove", function(e) {
            const preview = document.querySelector(".awards-preview");
    
            gsap.to(preview, {
                x: e.clientX + 300,
                y: e.clientY,
                duration: 1,
                ease: "power3.out",
            });
        });
    });


  return (
    <div className="w-screen h-screen flex items-center relative">
        <div className="awards-preview">
            <div className="awards-preview-img awards-preview-img-1"></div>
            <div className="awards-preview-img awards-preview-img-2"></div>
        </div>

        <div className="awards">
            <div className="awards-item">
                <div className="awards-info">
                    <p>Puma POV</p>
                </div>
                <div className="awards-name">
                    <p>Breathing Video Experience</p>
                </div>
                <div className="awards-tag">
                    <p>Creative Design</p>
                </div>
            </div>
            <div className="awards-item">
                <div className="awards-info">
                    <p>lOREM</p>
                </div>
                <div className="awards-name">
                    <p>Breathing Video Experience</p>
                </div>
                <div className="awards-tag">
                    <p>Creative Design</p>
                </div>
            </div>
            <div className="awards-item">
                <div className="awards-info">
                    <p>Puma POV</p>
                </div>
                <div className="awards-name">
                    <p>Breathing Video Experience</p>
                </div>
                <div className="awards-tag">
                    <p>Creative Design</p>
                </div>
            </div>
            <div className="awards-item">
                <div className="awards-info">
                    <p>Puma POV</p>
                </div>
                <div className="awards-name">
                    <p>Breathing Video Experience</p>
                </div>
                <div className="awards-tag">
                    <p>Creative Design</p>
                </div>
            </div>
            <div className="awards-item">
                <div className="awards-info">
                    <p>Puma POV</p>
                </div>
                <div className="awards-name">
                    <p>Breathing Video Experience</p>
                </div>
                <div className="awards-tag">
                    <p>Creative Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Award