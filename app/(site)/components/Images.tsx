"use client"
import ProductMachineType from "@/types/Product"
import React from "react"
import Image from "next/image"
import { builder } from "@/sanity.config"

type Props = {
  product: ProductMachineType
}
const Images: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {product.secImages &&
        product.secImages.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={builder.image(image.asset).url()}
              alt={`Product Image ${index + 1}`}
              width={400}
              height={400}
              className="rounded-lg shadow-md transition duration-300 transform group-hover:scale-105 flex-1"
            />
          </div>
        ))}
    </div>
  )
}

export default Images
