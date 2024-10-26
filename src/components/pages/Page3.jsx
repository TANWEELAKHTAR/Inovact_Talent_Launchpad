import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
    const textRef = useRef(null)
    useEffect(() => {
        const text = textRef.current.textContent
        const words = text.split(" ")
        textRef.current.innerHTML = words.map(word => `<span>${word}</span>`).join(" ")

        gsap.from(textRef.current.children, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.1,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 90%',
                end: 'bottom 30%',
                scrub: true,
            }
        })
    }, [])
    

  return (
    <div className='w-full p-6 mt-8'>
            <p ref={textRef} className='text-sm'>
                Inovact Talent Launchpad connects startups and companies with top talent through a data-driven approach. With a talent pool of over 10,000 candidates sourced from college partnerships and Inovact Social, we efficiently meet hiring needs across technical and non-technical domains. From Web Development, Data Analysis, and Blockchain to Graphic Design, Marketing, and Finance, we offer tailored solutions for internships, full-time roles, contract work, and freelance projects. Our mission is to bridge the talent gap and help businesses build high-performing teams that drive innovation and growth, all through a streamlined, intelligent hiring process.
            </p>
        </div>
    )
}

export default Page3
