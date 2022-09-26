import Link from "next/link";
import { useRouter } from "next/router";

function Breadcrumb({ title, proCat }) {
  const Router = useRouter();
  const CatBreadCrumb = Router.query.id;

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
          <span className="text-gray-500 capitalize">{CatBreadCrumb}</span>
        ) : (
          <span className="text-black hover:text-gray-500 capitalize">
            <Link href={"/category/" + proCat}>
              <a>{proCat}</a>
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
