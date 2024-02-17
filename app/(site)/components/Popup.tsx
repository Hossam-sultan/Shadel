"use client"
import { getProduct } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import React, { SetStateAction, useEffect, useState } from "react"

type props = {
  productId: string
  setToggle: React.Dispatch<SetStateAction<boolean>>
  toggle: boolean
}
export function Popup({ productId, toggle, setToggle }: props) {
  const [product, setProduct] = useState<ProductMachineType | undefined>()

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProduct(productId)
      setProduct(fetchedProducts)
    }
    fetchData()
  }, [productId])
  return (
    <div
      className={` ${
        toggle ? "fixed" : "hidden"
      } inset-0 backdrop-blur-md flex justify-center items-center`}
    >
      <div className="z-[5]  ">
        <div className="">
          <div
            key={product?._id}
            className="bg-white rounded-3xl overflow-hidden flex flex-col gap-10 justify-between shadow-2xl "
            style={{
              width: "fit-content",
              maxWidth: "calc(100%  )", // Adjust padding
              height: "fit-content",
              maxHeight: "calc(80vh)", // Adjust padding
              padding: "10%", // 10% padding
            }} // Adjust width and height as needed
          >
            <div className="flex justify-center items-center max-h-[350px] overflow-hidden mx-auto pt-5">
              {product?.mainImage ? (
                <Image
                  src={product?.mainImage}
                  alt="image"
                  width={200}
                  height={300}
                  className=" bg-contain h-fit"
                />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col gap-6 px-5 pb-10 justify-between">
              <div>
                <div className="font-bold text-lg md:text-2xl ">
                  {product?.name}
                </div>
                <PortableText value={product?.content!} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setToggle(false)}
        className=" absolute top-0 left-0  w-screen h-screen bg-gray-400/50 z-[1] cursor-pointer"
      ></div>
    </div>
  )
}
