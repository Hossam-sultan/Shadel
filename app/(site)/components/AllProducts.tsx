"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LazyMotion, domAnimation, m } from "framer-motion"

function AllProducts() {
  const servicesData = [
    {
      name: "HOTEL SUPPLIES",
      content:
        " Provide a diverse catalog of supplies catering to the hospitality industry. Include items such as room amenities,linens, and other essentials. Highlight the quality and durability of your products to meet the rigorous demands of the hotel industry.",
    },
    {
      name: "KITCHEN EQUIPMENT",
      content:
        "Showcase a variety of commercial kitchen equipment for restaurants, hotels, and other food establishments. Highlight energy efficiency, ease of use, and compliance with hygiene standards. Provide maintenance and training support to ensure optimal performance. ",
    },
    {
      name: "Fire Fighting Solutions",
      content:
        "Offer a comprehensive range of fire fighting systems and solutions for various industrial, commercial, and residential applications. Prioritize safety features, reliability, and compliance with fire safety regulations and standards. Provide customizable options to suit different building layouts and fire risk levels. Highlight in your marketing materials:",
    },
  ]
  return (
    <div className="">
      <LazyMotion features={domAnimation}>
        <section
          id="allProduct"
          className="container mx-auto py-[40px] flex flex-col gap-10 px-4"
        >
          <m.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className=""
          >
            <h1 className="section-heading text-gray-300">Products</h1>
          </m.div>
          <m.div
            initial={{ y: 250 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 0.1,
            }}
            className="flex flex-col gap-10 rounded-2xl shadow-2xl overflow-hidden w-[58%]"
          >
            <div className="overflow-hidden md:h-[300px]">
              <Image
                src={"/proudct2.jpg"}
                alt="image"
                width={1200}
                height={150}
                className=""
              />
            </div>
            <div className="flex flex-col gap-6 px-6 pb-8">
              <h2 className="text-2xl font-bold">Products</h2>
              <p>
                Explore our innovative, high-quality products—precision
                machinery, durable sheet metal, and advanced fire-fighting
                systems—customizable for efficient solutions in diverse
                industries.
              </p>
              <Link
                href={"/product"}
                className="bg-red-600 w-full rounded-xl text-white font-bold text-center py-4 hover:bg-gray-500 transition-all"
              >
                See More
              </Link>
            </div>
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
                      src={`/pp-${i + 1}.png`}
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
        </section>
      </LazyMotion>
    </div>
  )
}

export default AllProducts
