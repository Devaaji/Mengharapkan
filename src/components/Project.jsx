import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import Img2 from '../assets/img_2.jpg'

function Project() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() =>{
        gsap.to(".pContent", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: ".pContent",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true
            }, 
          });

        gsap.to(".img-project", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-project",
                scrub: true
            }
        })
        gsap.to(".img-name-2", {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-name-2",
                scrub: true
            }
        })
        gsap.to(".img-name-2", {
            duration: 10,
            css:{
                filter: "grayscale(1)",
            },
            scrollTrigger: {
                start: "top 40%",
                trigger: ".img-name-2",
            }
        })
        gsap.to(".img-project-3", {
            xPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-project-3",
                scrub: true
            }
        })
        gsap.to(".img-project", {
            duration: 10,
            css:{
                filter: "grayscale(1)",
            },
            scrollTrigger: {
                start: "top 40%",
                trigger: ".img-project",
            }
        })
        gsap.to(".img-project-3", {
            duration: 10,
            css:{
                filter: "grayscale(1)",
            },
            scrollTrigger: {
                start: "top 40%",
                trigger: ".img-project-3",
            }
        })
        gsap.to(".text-slide", {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".text-slide",
                scrub: true
            }
        })
        gsap.to(".img-slide", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-slide",
                scrub: true
            }
        })
        gsap.to(".img-slide-2", {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-slide-2",
                scrub: true
            }
        })
        gsap.to(".img-slide-3", {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-slide-3",
                scrub: true
            }
        })
        gsap.to(".text-slide-3", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: ".text-slide-3",
                scrub: true
            }
        })
    })


    
    return (
        <>
        <div className="project">
            <div className="wrapper-project">
                <div className="pContent">
                    <p>Ketika mengharapkan sesuatu secara berlebihan,
                        yang ada di dalam pikiranmu hanyalah
                        sebuah keberhasilan.
                        Padahal hidup itu
                        tidak semudah apa yang kamu bayangkan.
                        Saat harapan tersebut gagal tercapai,
                        kamu pasti akan menderita kekecewaan
                        yang cukup mendalam.</p>
                </div>
                <div className="img-project">
                </div>
            </div>
        </div>
        <div className="project">
            <div className="wrapper-project">
                <div className="pContent">
                    <p>Terlalu Berharap Namun, Tak Pasti.</p>
                </div>
                <div className="img-project-2">
                    <img className="img-name-2" src={Img2} alt="" />
                </div>
                <div className="img-project-3">
                </div>
            </div>
        </div>
        <div className="project">
            <div className="wrapper-project-2">
                <div className="text-slide">
                    <span>Berserderhanalah...</span>
                </div>
                <div className="img-slide"></div>
                <div className="img-slide-2">
                </div>
            </div>
        </div>
        <div className="project">
            <div className="wrapper-project-3">
                <div className="img-slide-3">
                </div>
                <div className="text-slide-3">
                    <p>dalam mengharap sesuatu yang tak pasti</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project
