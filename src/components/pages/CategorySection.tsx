"use client"

import { filterProducts } from "@/store/features/productSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


export default function CategorySection() {
  const dispatch = useDispatch();
  const { activeCategory,productCategories} = useSelector(
    (state: RootState) => state.products
  );
  const handleFilter = (category: string) => {
    dispatch(filterProducts(category));
  };
  const categories = productCategories
  console.log({ categories })
  

  return (
    <div className="container px-4 block">
        <h2 className="text-xl md:text-2xl font-bold py-4">Shop by Category</h2>

      <div className="p-5 gap-2 flex">
        {categories.map((category: string) => {
          // if (category === "all")
          //   return (
          //     <Button
          //       onClick={() => dispatch(resetFilter())}
          //       className={cn(
          //         activeCategory === category ? "bg-red-600 text-white" : "",
          //         "capitalize bg-slate-200"
          //       )}
          //     >
          //       All
          //     </Button>
          //   );
          return (
            <Button
              key={category}
              onClick={() => handleFilter(category)}
              className={cn(
                "capitalize bg-slate-200 text-blue-600",
                activeCategory == category ? "bg-red-600 text-white" : ""
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

    </div>
  );
}
