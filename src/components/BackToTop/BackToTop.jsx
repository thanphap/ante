import React, { useState } from 'react'
import { TfiLocationArrow } from "react-icons/tfi";

export default function BackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        }
        else {
            setShowTopBtn(false);
        }
    });
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <div className="top-to-btn">
            {showTopBtn && (
                <div className='icon-position icon-style' onClick={goToTop} >
                    <TfiLocationArrow/>
                </div>
            )}
    </div>
  )
}
