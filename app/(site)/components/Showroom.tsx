"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const images = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
    },
  },
}

export default function Aboutpage() {
  return (
    <h1>
      <div className=" bg-gray-100 w-full h-full">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-5">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Showrooms
            </h2>
            <p className="mt-4 text-gray-500">
              Discover the artistry of shade with Shadel Industry at our
              exclusive showroom located within the prestigious Cairo
              International Convention Exhibition. Immerse yourself in a world
              of innovative and stylish shading solutions that redefine outdoor
              spaces.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">About Us:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  At Shadel Industry, we blend craftsmanship and innovation in
                  shading. Trusted for top-quality solutions, we cater to
                  residential and commercial spaces.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Showcasing Our Works:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Explore our showroom, a curated space displaying innovative
                  shading solutions - from elegant pergolas to modern
                  retractable awnings.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Highlights:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  <li>
                    Innovative Designs: Explore the latest trends and
                    technologies in shading.
                  </li>
                  <li>
                    Quality Craftsmanship: Learn about our commitment to premium
                    materials and skilled craftsmanship.
                  </li>
                  <li>
                    Customization Options: Discover versatile products tailored
                    to individual preferences and project requirements.
                  </li>
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Visit Us:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Join us at CICE to witness the beauty and functionality of our
                  shading solutions. Our staff will guide you through our
                  products.{" "}
                </dd>
              </div>
            </dl>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8"
          >
            <motion.img
              src="/show-1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/show-5.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.img
              src="/show-3.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100 "
              variants={images}
            />
            <motion.img
              src="/show-4.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
              variants={images}
            />
            <motion.video
              autoPlay
              loop
              muted
              className="rounded-lg bg-gray-100 "
              variants={images}
            >
              <source src="/video-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
            <motion.video
              autoPlay
              loop
              muted
              className="rounded-lg bg-gray-100 "
              variants={images}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          </motion.div>
        </div>
      </div>
    </h1>
  )
}
