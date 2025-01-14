'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import "../app/menu.css";

const Menu = () => {
    useEffect(() => {
        const menuOpen = document.querySelector(".menu-open");
        const menuClose = document.querySelector(".menu-close");
    
        let isOpen = false;
        const defaultEase = "power4.inOut";
    
        gsap.set(".menu-logo img", { y: 50 });
        gsap.set(".menu-link p", { y: 40 });
        gsap.set(".menu-sub-item p", { y: 24 });
        gsap.set(["#img-2, #img-3, #img-4"], { top: "150%" });
    
        menuOpen.addEventListener("click", function () {
            if(isOpen) return;
            openMenu();
        });
    
        menuClose.addEventListener("click", function () {
            if(!isOpen) return;
            closeMenu();
        });
    
        const openMenu = () => {
            gsap.to(".menu", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                pointerEvents: "all",
                duration: 1.25,
                ease: defaultEase,
            });
    
            gsap.to(".hero", {
                top: "-50%",
                opacity: 0,
                duartion: 1.25,
                ease: defaultEase,
            });
    
            gsap.to(".menu-logo img", {
                y: 0,
                duration: 1,
                delay: 0.75,
                ease: "power3.out",
            });
    
            gsap.to(".menu-link p", {
                y: 0,
                duration: 1,
                stagger: 0.075,
                delay: 1,
                ease: "power3.out",
            });
    
            gsap.to(".menu-sub-item p", {
                y: 0,
                duration: 0.075,
                stagger: 0.05,
                delay: 1,
                ease: "power3.out",
            });
    
            gsap.to(["#img-2, #img-3, #img-4"], {
                top: "50%",
                duartion: 1.25,
                ease: defaultEase,
                stagger: 0.1,
                delay: 0.25,
                onComplete: () => {
                    gsap.set(".hero", { top: "50%" });
                    isOpen = !isOpen;
                },
            });
        };
    
        const closeMenu = () => {
            gsap.to(".menu", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                pointerEvents: "none",
                duration: 1.25,
                ease: defaultEase,
            });
    
            gsap.to("menu-items", {
                top: "-300px",
                opacity: 0,
                duarion: 1.25,
                ease: defaultEase,
            });
    
            gsap.to(".hero", {
                top: "0%",
                opacity: 1,
                duartion: 1.25,
                ease: defaultEase,
                onComplete: () => {
                    gsap.to(".menu", {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    });
                    gsap.set(".menu-logo img", { y: 50 });
                    gsap.set(".menu-link p", { y: 40 });
                    gsap.set(".menu-sub-item p", { y: 24 });
                    gsap.set(".menu-items", { opacity: 1, top: "0px" });
                    gsap.set(["#img-2, #img-3, #img-4"], { top: "150%" });
    
                    isOpen = !isOpen;
                },
            });
        };

        const menuImgContainer = document.querySelector(".menu-img");
        const images = document.querySelectorAll(".menu-img img");

        let mouse = { x: 0, y: 0};
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;

        const scales = [0.81, 0.84, 0.87, 0.9];

        function update() {
            let dx = mouse.x - cx;
            let dy = mouse.y - cy;

            let tiltx = (dy / cy) * 2;
            let tilty = (dx / cx) * 2;

            gsap.to(menuImgContainer, {
                duratin: 2,
                transform: `rotate3d(${tiltx}, ${tilty}, 0, 15deg)`,
                ease: "power3.out",
            });

            gsap.to(".nav-menu",
                {
                    y: 0,
                    duration: 3,
                    ease: "hop2",
                    stagger: 0.1,
                    delay: 4.25,
                });

            images.forEach((img, index) => {
                let parallaxX = -(dx * (index + 1)) / 100;
                let parallaxY = -(dy * (index + 1)) / 100;

                let transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;

                gsap.to(img, {
                    duration: 2,
                    transform: transformStyles,
                    ease: "power3.out",
                });                
            });
        }

        document.body.addEventListener('mousemove', function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            update();
        });
    }, []);

  return (
    <div className="">
        <nav className='nav-menu'>
            <div className="logo"><img src="./assets/logo.png" width="50px" alt="" /></div>
            <p className="menu-open">Menu</p>
        </nav>

        <div className="menu">
            <div className="menu-nav"><p className="menu-close">Close</p></div>

            <div className="menu-col menu-img">
                <img src="./assets/img1.webp" alt="" id="img-1" />
                <img src="./assets/img1.webp" alt="" id="img-2" />
                <img src="./assets/img1.webp" alt="" id="img-3" />
                <img src="./assets/img1.webp" alt="" id="img-4" />
            </div>

            <div className="menu-col menu-items">
                <div className="menu-logo">
                    <img src="./logo.png" width="50px" alt="" />
                </div>

                <div className="menu-links">
                    <div className="menu-link">
                        <p><a href="#">About</a></p>
                    </div>
                    <div className="menu-link">
                        <p><a href="#">Story</a></p>
                    </div>
                    <div className="menu-link">
                        <p><a href="#">Projects</a></p>
                    </div>
                    <div className="menu-link">
                        <p><a href="#">Releases</a></p>
                    </div>
                </div>

                <div className="menu-footer">
                    <div className="menu-sub-col">
                        <div className="menu-sub-item"><p>Connect</p></div>
                        <div className="menu-sub-item"><p>Break</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Explore</p></div>
                        <div className="menu-sub-item"><p>Break</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Contact Us</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Ocean City</p></div>
                        <div className="menu-sub-item"><p>Rhytmic Sound</p></div>
                        <div className="menu-sub-item"><p>200 Coastal Hwy</p></div>
                        <div className="menu-sub-item"><p>Ocean City, MD 12842</p></div>
                        <br />
                    </div>
                    <div className="menu-sub-col">
                        <div className="menu-sub-item"><p>Instagram</p></div>
                        <div className="menu-sub-item"><p>Youtube</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Spotify</p></div>
                        <div className="menu-sub-item"><p>Mixcloud</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Email</p></div>
                        <br />
                        <div className="menu-sub-item"><p>Vice City</p></div>
                        <div className="menu-sub-item"><p>Echo Beats</p></div>
                        <div className="menu-sub-item"><p>933 South View Ave</p></div>
                        <div className="menu-sub-item"><p>Vice City, VC 3270</p></div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu