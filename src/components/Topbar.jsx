import { useEffect } from "react";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Topbar = props => {

    gsap.registerPlugin(ScrollTrigger)

    const { menuState, setMenuState } = props;

    useEffect(() => {
        const showAnim = gsap.from('.topbar', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 9999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse()
            }
        });
    })



    return (
        <div className="topbar">
            <div className="wrapper-topbar">
                <div className="logobar">Depdep.</div>
                <div>
                    <button className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
                        onClick={() => setMenuState(!menuState)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topbar