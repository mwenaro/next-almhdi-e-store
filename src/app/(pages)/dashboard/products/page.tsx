export const revalidate = 0;
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { ProductClient } from "@/components/tables/products-tables/client";

import axios from "axios";
import { headers } from "next/headers";
const getProducts = async () => {
  const url = headers().get("x-url");
  const formatedUrl = `${url}/api/product`;
  console.log({ url, formatedUrl });
  // const res = axios.get('')
  // const url = process.env.__NEXT_PRIVATE_ORIGIN;

  const res = await axios.get(`${url}/api/product`);
  // const res = await axios.get(`${process.env.NEXTAUTH_URL!}/api/product`)
  // console.log(res.data.data)
  // if(!res?.data?.length) return []
  return await res?.data?.data || [];
};

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Products", link: "/dashboard/products" },
];
export default async function page() {
  const myData = await getProducts();

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductClient data={myData} />
      </div>
    </PageContainer>
  );
}
