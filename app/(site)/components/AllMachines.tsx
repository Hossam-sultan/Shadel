"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

function AllMachines() {
  const servicesData = [
    {
      name: "Governmental projects",
      content:
        "Provide specialized solutions and services tailored for government projects, ensuring seamless execution and adherence to regulatory requirements. Our team is dedicated to building strong relationships with governmental clients and assisting them in maximizing the value derived from Wadi El Nile's offerings.",
    },
    {
      name: "Machinery solution",
      content:
        "Deliver comprehensive machinery solutions customized to meet the unique needs and objectives of our clients. Our Customer Success team collaborates closely with customers to gain insights into their machinery requirements, enabling us to offer tailored solutions that drive operational efficiency and productivity.",
    },
    {
      name: "Electric Panel",
      content:
        "Offer a wide range of electrical panel solutions designed to meet the diverse needs of industrial and commercial clients. Our Customer Success department is committed to ensuring that customers achieve their desired outcomes with our electric panel products and services, providing expert guidance and support every step of the way.",
    },
  ]
  return (
    <div className="bg-gray-100">
      <LazyMotion features={domAnimation}>
        <section
          id="allMachines"
          className="container mx-auto py-[40px] flex flex-col gap-10 px-4"
        >
          <m.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-gray-300">Machines</h1>
          </m.div>
          <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
            {
              <m.div
                initial={{ y: 250 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.15,
                }}
                className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden w-[70%]"
              >
                <div className="overflow-hidden md:h-[300px]">
                  <Image
                    src={"/pro.png"}
                    alt="image"
                    width={1200}
                    height={150}
                    className=""
                  />
                </div>
                <div className="flex flex-col gap-6 px-6 pb-8">
                  <h2 className="text-2xl font-bold">Machines</h2>
                  <p>
                    Discover cutting-edge machinery solutions—innovative,
                    efficient, and customizable, <br /> designed for precision
                    and reliability, transforming industries with advanced
                    technology and durability.
                  </p>
                  <Link
                    href={"/machine"}
                    className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
                  >
                    See More
                  </Link>
                </div>
              </m.div>
            }
          </div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="row"
          >
            {servicesData.map((service, i) => (
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.5 }}
                key={i}
                className="column"
              >
                <div className="card">
                  <div className="icon-wrapper">
                    <Image
                      src={`/icon-${i + 1}.png`}
                      width={60}
                      height={60}
                      alt="services"
                    />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.content}</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </section>
      </LazyMotion>
    </div>
  )
}

export default AllMachines
