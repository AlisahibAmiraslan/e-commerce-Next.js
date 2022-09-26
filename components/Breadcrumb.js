import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Breadcrumb() {
  const Router = useRouter();
  const CatBreadCrumb = Router.query.id;

  return (
    <>
      <div className="breadcrumbs flex">
        <span>
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
        </span>
        <span className="mx-2">/</span>
        <span className="text-gray-500 capitalize">{CatBreadCrumb}</span>
      </div>
    </>
  );
}

export default Breadcrumb;
