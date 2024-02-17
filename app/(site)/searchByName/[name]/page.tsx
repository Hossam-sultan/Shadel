import { getByName } from "@/sanity/sanity-utils"
import React from "react"
import Products from "../../components/ProductsMachinesPage"
type props = {
  params: { name: string }
}
async function page({ params }: props) {
  const name = decodeURIComponent(params.name)
  console.log(name)
  const products = await getByName(name)
  console.log("products", products)

  return (
    <div>
      <Products items={products} name="products" />
    </div>
  )
}

export default page
