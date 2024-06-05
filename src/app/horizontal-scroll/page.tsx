'use client';
import LocomotiveScroll from 'locomotive-scroll';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import "../hs.css";
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const pageContainer = useRef(document.querySelector(".container"));

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }

  useGSAP(
    () => {
        const scroller = new LocomotiveScroll({
        el: pageContainer.current,
        smooth: true
      });
      //on(eventName, function)
      scroller.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(".container", {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
    });
        pinType: pageContainer.current?.style.transform ? "transform" : "fixed"

        window.addEventListener("load", function () {
            let pinBoxes = document.querySelectorAll(".pin-wrap > *");
            let pinWrap = document.querySelector(".pin-wrap");
            let pinWrapWidth = pinWrap?.offsetWidth;
            let horizontalScrollLength = pinWrapWidth - window.innerWidth;
          
            // Pinning and horizontal scrolling
          
            gsap.to(".pin-wrap", {
              scrollTrigger: {
                scroller: pageContainer, //locomotive-scroll
                scrub: true,
                trigger: "#sectionPin",
                pin: true,
                // anticipatePin: 1,
                start: "top top",
                end: pinWrapWidth
              },
              x: -horizontalScrollLength,
              ease: "none"
            });
          
            ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
          
            ScrollTrigger.refresh();
          });
          
    },
    {scope: pageContainer.current}
  )

  return (
    <div className="container" ref={pageContainer}>
        <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
            <div>
                <h1 data-scroll data-scroll-speed="1"><span>Horizontal</span> <span>scroll</span> <span>section</span></h1>
                <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">with GSAP ScrollTrigger & Locomotive Scroll</p>
            </div>

        </section>

        <section id="sectionPin">
            <div className="pin-wrap">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <Image width={900} height={900} src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
                <Image width={900} height={900} src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>
                <Image width={900} height={900} src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt=""/>

            </div>
        </section>
        <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
            <Image width={900} height={900} src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            
        </section>
    </div>
     
  );
}
