"use client";
import React, { useRef } from 'react';
import gsap, { Expo } from 'gsap';
import { useGSAP } from '@gsap/react';

function MagneticEffect({ children }) {
  const magneticRef = useRef(null);
  useGSAP(() => {
    const xPos = gsap.quickTo(magneticRef.current, "x", {
        duration: 2.2,
        ease: Expo.easeOut,
    })
    const yPos = gsap.quickTo(magneticRef.current, "y", {
        duration: 2.2,
        ease: Expo.easeOut,
    })
    const mouseMove = (e) => {
        const {clientX, clientY} = e;
        const {height, width, left, top} = magneticRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 1.5);
        const y = clientY - (top + height / 1.5);

        xPos(x)
        yPos(y)
    };
    const mouseLeave = (e) => {
        xPos(0)
        yPos(0)
    };
    magneticRef.current.addEventListener('mousemove', mouseMove);
    magneticRef.current.addEventListener('mouseleave', mouseLeave);
    return () => {
        magneticRef.current.removeEventListener('mousemove', mouseMove);
        magneticRef.current.removeEventListener('mouseleave', mouseLeave); 
    };
  }, []);
  return React.cloneElement(children, {ref: magneticRef}) ;
}

export default MagneticEffect