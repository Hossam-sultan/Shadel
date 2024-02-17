"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Image from "next/image"

function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="hero">
        <div className="container mx-auto min-h-[80vh] px-4 py-[40px]">
          <div className="hellllo flex flex-col gap-10 items-center">
            <m.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 0.7,
              }}
              className="w-full flex justify-center gap-20 pt-5 items-center"
            >
              <Image
                src="/brand-1.png"
                width={400}
                height={400}
                alt="hero section image"
                loading="lazy"
                className="object-contain"
              />
              <Image
                src="/wady_logos.png"
                width={600}
                height={500}
                alt="hero section image"
                loading="lazy"
                className="object-contain hidden xl:block ml-20"
              />
            </m.div>
            <m.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 50,
                delay: 1,
              }}
              className="hero-text text-gray-900 font-bold  w-[100%] lg:w-[70%] text-justify justify-start sm:justify-end "
            >
              Shadel, born from dreams, officially crafted in 2017, is more than
              a company; it's an innovation forge. Pioneers since 2005 in sheet
              metal artistry, we redefine standards. Our stainless products,
              born from ambition, defy convention. Our machines are precision
              symphonies, crafting excellence with each cut and weld. Fueled by
              change winds - Lean, Kaizen, Six Sigma - Shadel is more than
              methodology; it's a commitment to progress. We're not just closing
              deals; we're building relationships. Our factory is a perfection
              dance of CNC-controlled machines. Shadel is a promise to redefine,
              where innovation meets craftsmanship. Join us in a narrative where
              every product tells a story, and every client is part of our tale.
              Welcome to the Shadel experience.
            </m.p>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default Hero
