import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgHeader from '../assets/bg-header.jpg'

function Header() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.to(".bg-title", {
            duration: 1.5,
            delay: .7,
            height: "90%"
        })
        gsap.to(".text-trans", {
            delay: 0.3,
            duration: .8,
            x: 0
        })
        gsap.to(".animated-trans", {
            delay: 1.8,
            duration: .5,
            y: 0,
            opacity: 1
        })

        gsap.to(".text-animated", {
            x: "-10%",
            duration: 20,
            scrollTrigger: {
                trigger: ".header",
                start: "top",
                scrub: 15,
                toggleActions: "play none none reserve"
            }
        })
    })


    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="text-header">
                    <div className="text-title">
                        <div className="text-trans">
                            MENGHARAPKAN SESUATU?
                        </div>
                    </div>
                    <div className="text-animated">
                        <div className="animated-trans">
                            APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU. APA ITU
                        </div>
                    </div>
                </div>
                <div className="bg-home">
                    <img className='bg-title' src={bgHeader} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
