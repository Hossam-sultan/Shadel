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

export default function Projects() {
  return (
    <h1>
      <div className=" projectsx bg-white w-full h-full ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-5 ">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-gray-500">
              Discover the artistry of shade with Shadel Industry at our
              exclusive showroom located within the prestigious Cairo
              International Convention Exhibition. Immerse yourself in a world
              of innovative and stylish shading solutions that redefine outdoor
              spaces.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 ">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Project Overview:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Provide a concise summary of each project, outlining its
                  scope, objectives, and key features.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Challenges and Solutions:{" "}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Highlight any challenges faced during the project and how your
                  team addressed them with innovative solutions.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Technologies and Tools:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  List the technologies, tools, and frameworks used in the
                  project's development, demonstrating your expertise in
                  relevant technologies.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Results and Impact:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Showcase the measurable outcomes and impact of each project,
                  such as improved efficiency, cost savings, or positive
                  feedback from clients.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Success Metrics: </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Highlight any measurable outcomes or achievements resulting
                  from the project, such as increased efficiency, cost savings,
                  or improved user satisfaction.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">industry Focus:</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  If your projects span multiple industries, highlight the
                  diversity of your experience and expertise in catering to
                  various client needs and sectors.
                </dd>
              </div>
            </dl>
          </div>
          <div className="pro-img">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="show"
              className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-2"
            >
              <motion.img
                src="/p-3.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />
              <motion.img
                src="/p-3.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />
              <motion.img
                src="/p-2.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />{" "}
              <motion.img
                src="/p-2.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />{" "}
              <motion.img
                src="/p-1.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />{" "}
              <motion.img
                src="/p-1.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100 "
                variants={images}
              />{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </h1>
  )
}
