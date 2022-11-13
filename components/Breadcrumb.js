import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function Breadcrumb({ title, proCat }) {
  const Router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let CategoryBreadCrumb = data?.filter((item) => item.id == Router.query.id);

  return (
    <>
      <div className="breadcrumbs md:flex md:max-w-7xl w-full mx-auto my-10 hidden">
        <span>
          <Link href="/">
            <a className="text-black hover:text-gray-500 ">Anasayfa</a>
          </Link>
        </span>
        <span className="mx-2">/</span>

        {Router.pathname == "/category/[id]" ? (
          <span className="text-gray-500 capitalize">
            {CategoryBreadCrumb[0]?.name}
          </span>
        ) : (
          <span className="text-black hover:text-gray-500 capitalize">
            <Link href={"/category/" + proCat.id}>
              <a>{proCat.name}</a>
            </Link>
          </span>
        )}
        {Router.pathname == "/product/[id]" ? (
          <>
            <span className="mx-2">/</span>
            <span className="text-gray-500 capitalize">{title}</span>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Breadcrumb;
