import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
                    <img className='bg-title' src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
