"use client";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import {ReactLenis} from "@studio-freight/react-lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const Card = ({ title, copy, index }) => {
  return(
    <div className="card relative lg:h-auto h-[300px]" id={`card-${index + 1}`}>
      <div className="card-inner relative will-change-transform w-full h-full p-8 flex gap-16">
        <div className="card-content flex-[3]">
          <h1 className="text-6xl font-semibold lg:mb-10 mb-16">{title}</h1>
          <p className="text-xl font-medium lg:block hidden">{copy}</p>
        </div>
        <div className="card-img flex-[1] aspect-[16/9] rounded-xl overflow-hidden lg:block hidden">
          <img src={`/assets/card-${index + 1}.webp`} alt={title} />
        </div>
      </div>
    </div>
  )
}
export default function Home() {
  const cards = [
    {
      title: "Brand Foundation",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque assumenda quam ex consequatur asperiores reprehenderit labore repudiandae aliquid rem?"
    },
    {
      title: "Design Identity",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque assumenda quam ex consequatur asperiores reprehenderit labore repudiandae aliquid rem?"
    },
    {
      title: "Digital Presence",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque assumenda quam ex consequatur asperiores reprehenderit labore repudiandae aliquid rem?"
    },
    {
      title: "Brand Foundation 2",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque assumenda quam ex consequatur asperiores reprehenderit labore repudiandae aliquid rem?"
    }    
  ];

  const container = useRef();
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 35%",
      endTrigger: cards[cards.length - 1],
      end: "top 30%",
      pin: ".intro",
      pinSpacing: false,
    });

    cards.forEach((card, index) => {
      const isLastCard = index == cards.length - 1;
      const cardInner = card.querySelector(".card-inner");

      if(!isLastCard){
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: ".outro",
          end: "top 35%",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(cardInner, {
          y: `-${(cards.length - index) * 14}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 35%",
            scrub: true,
          },
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, {scope: container });

  return (
    <ReactLenis root>
    <div className="app overflow-x-hidden" ref={container}>
      <section className="hero relative w-screen h-screen">
        <img src="/assets/hero.webp" alt="" width={1000} height={1000}/>
      </section>
      <section className="intro relative w-screen h-screen p-8 bg-white flex items-center">
        <h1 className="text-6xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis deleniti nihil soluta.</h1>
      </section>
      <section className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
      <section className="outro relative w-screen h-screen p-8 bg-white flex items-center">
        <h1 className="text-6xl font-semibold">Lorem ipsum dolor sit amet consectetur.</h1>        
      </section>
    </div>
    </ReactLenis>
  );
}
