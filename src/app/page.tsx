'use client';
import LocomotiveScroll from 'locomotive-scroll';
import { useRef, useEffect, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  // const main = useRef<HTMLElement | any>();
  const pageContainer = useRef(document.querySelector(".container"));
  // const pageContainer = createRef();

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
      //ScrollTrigger.scrollerProxy( scroller:String | Element, vars:Object )
      //Allows you to hijack the scrollTop and/or scrollLeft getters/setters for a particular scroller element 
      //so that you can implement things like smooth scrolling or other custom effects.

      // An object containing scrollTop and/or scrollLeft functions that serve as proxied getters/setters, 
      //like: {scrollTop: function(value) {...}, scrollLeft: function(value) {...}}. 
      //It can also contain a method for getBoundingClientRect(), scrollWidth(), scrollHeight() 
      //as well as an optional pinType: "fixed" | "transform"
      // Function - A method that can serve as a getter AND setter; if it receives an argument, 
      // it should be treated as a setter. Otherwise, it should be treated as a getter, 
      // returning the current scrollTop value.
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
      ScrollTrigger.addEventListener("refresh", () => scroller.update());
      ScrollTrigger.refresh();

        window.addEventListener("load", function () {
        const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
        scrollColorElems.forEach((colorSection, i) => {
          const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
          const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

          ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".container",
            start: "top 50%",
            onEnter: () =>
              gsap.to("body", {
                backgroundColor: colorSection.dataset.bgcolor,
                color: colorSection.dataset.textcolor,
                overwrite: "auto"
              }),
            onLeaveBack: () =>
              gsap.to("body", {
                backgroundColor: prevBg,
                color: prevText,
                overwrite: "auto"
              })
          });
        });
      });

    },
    {scope: pageContainer.current}
  )

  return (
    
      <div className="container" ref={pageContainer} >
        <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
          <h1 data-scroll data-scroll-speed="3">Change background colour with GSAP ScrollTrigger</h1>
          <Image 
          width={500}
          height={500}
          src="https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          alt=""/>
        </section>
        <section data-bgcolor="#eacbd1" data-textcolor="#536fae">
          <Image 
           width={500}
          height={500}
          src="https://images.pexels.com/photos/4467879/pexels-photo-4467879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
        <section data-bgcolor="#536fae" data-textcolor="#eacbd1">
          <Image 
           width={500}
          height={500}
          src="https://images.pexels.com/photos/5604966/pexels-photo-5604966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
        <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
          <Image 
           width={500}
          height={500}
          src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <h2 data-scroll data-scroll-speed="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </section>
      </div>
     
  );
}
