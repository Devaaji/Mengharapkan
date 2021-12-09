import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';


const Sidebar = props => {
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  const { menuState, setMenuState } = props;

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        x: '100%'
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: .3
        }
      }
    );
  }, []);

  useEffect(() => {
    menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menuState]);



  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={el => (sidebarMenuOverlay = el)}
        onClick={() => setMenuState(false)}
      ></div>
      <div className="menu-wrapper">
        <div className="menu-layer" ref={el => (menuLayer = el)}></div>
        <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <div className="menu-link" to="/" >
                Home
              </div>
              <div className="menu-link2" to="/about">
                Show me
              </div>
              <div className="menu-link3" to="/services">
                Services
              </div>
              <div className="menu-link4" to="/gallery">
                Contact
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
