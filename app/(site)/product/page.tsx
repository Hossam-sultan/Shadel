"use client"
import React, { useState, useEffect } from "react"
import Products from "../components/ProductsMachinesPage"
import { getProducts } from "@/sanity/sanity-utils"
import ProductMachineType from "@/types/Product"
function Page() {
  const [products, setProducts] = useState<ProductMachineType[]>([])
  const [selectedType, setSelectedType] = useState("")

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts(selectedType)
      setProducts(fetchedProducts)
    }
    fetchData()
  }, [selectedType])

  return (
    <div className="bg-gray-200 flex flex-col gap-2 pt-[80px]">
      <div className="flex flex-wrap justify-center w-50 gap-2 px-4 mx-auto">
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("")}
        >
          Products
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("hot")}
        >
          Heating
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("cold")}
        >
          Refrigeration
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("kitchen")}
        >
          Kitchen
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("laundry")}
        >
          Laundry
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("castle")}
        >
          Castel
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("boiler")}
        >
          Boilers
        </button>
        <button
          className="bn632-hover bn18 mb-2"
          onClick={() => setSelectedType("others")}
        >
          Other equipment
        </button>
      </div>
      <Products items={products} name={"Products"} />
    </div>
  )
}
export default Page
