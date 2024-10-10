export const revalidate = 0
import React from "react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "@/models/Product";
import { getData } from "@/libs/get-data";
import { ProductList } from "./ProductList";

export default async function ProductsSection() {
  const fetchedProducts = await getData("/product");

  const products = [
    {
      _id:1,
      name: "Brake Pads",
      description: "High-performance brake pads for improved stopping power.",
      imgUrl: "/assets/TEXTAR BRAKE DISC.jpg",
      price: Math.random() * 1000,
      category:{name:'textar'}
    },
    {
      _id:2,
      name: "Air Filter",
      description:
        "High-performance air filter for improved engine efficiency.",
      imgUrl: "/assets/TEXTAR BRAKE LINNINGS.jpg",
      price: Math.random() * 1000,
      category:{name:'super-textar'}
    },
    {
      _id:3,
      name: "Oil Filter",
      description: "Premium oil filter for improved engine protection.",
      imgUrl: "/assets/TEXTAR BRAKE DISC.jpg",
      price: Math.random() * 1000,
      category:{name:'textar'}
    },
    {
      _id:4,
      name: "Spark Plugs",
      description: "High-quality spark plugs for improved engine performance.",
      imgUrl: "/assets/TEXTAR BRAKE PADS.jpg",
      price: Math.random() * 1000,
      category:{name:'textar-2'}
    },
  ];

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <a className="text-primary hover:underline" href="#">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(fetchedProducts?.length ? fetchedProducts : products).map(
          (prod: IProduct, index: number) => (
            <ProductCard
              key={index}
              image={prod.imgUrl}
              name={prod.name}
              price={prod.price}
              description={prod.description!}
            />
          )
        )}
      </div>

      <ProductList defaultProducts={products as any} />
    </div>
  );
}
