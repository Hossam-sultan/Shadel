"use client"
import Image from "next/image"
import React from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"

function Services() {
  const servicesData = [
    {
      name: "After-sales services",
      content:
        "We offer comprehensive after-sales services for central kitchen products, machines, and factories to ensure optimal performance and longevity.",
    },
    {
      name: "Aintenance contracts",
      content:
        "We provide maintenance contracts for factories and other products to keep them running smoothly and efficiently.",
    },
    {
      name: "Raw material supplys",
      content:
        "We supply all kinds of necessary raw materials to support your operations.",
    },
    {
      name: "Supply of utensils",
      content:
        "We offer a wide range of pots, basins, and hospital brushes to meet your specific needs.",
    },
    {
      name: "Complete study",
      content:
        "We provide comprehensive studies for central kitchens, governmental hospitals, ships, and large restaurants, covering all requirements including boilers, generators, steam lines, supporting tools, operations, and training.",
    },
    {
      name: "Factory study & design",
      content:
        "We offer complete studies and designs for factories, including production lines, products, human labor, infrastructure, machinery, and operation.",
    },
  ]

  return (
    <section
      id="services"
      className="container mx-auto min-h-screen pt-[70px] "
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="row flex flex-col pb-10 "
        >
          <h2 className="section-heading text-gray-300">Our Services</h2>
        </m.div>

        <div className="row">
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
        </div>
      </LazyMotion>
    </section>
  )
}

export default Services
