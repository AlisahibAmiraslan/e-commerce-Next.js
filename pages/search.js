import { useRouter } from "next/router";
import React from "react";
import NoImage from "./../public/Images/no_image.png";
import Image from "next/image";
import Link from "next/link";

function Search({ Data }) {
  const Router = useRouter();

  let newData = Data.filter((item) =>
    item.title.toLowerCase().includes(Router.query.searchText)
  );

  return (
    <section className="bg-white md:max-w-7xl w-full m-auto md:py-10 py-5">
      <div>
        <h1 className="underline text-3xl text-center mb-10">
          {newData.length} Products
        </h1>
      </div>
      {newData.length == 0 && (
        <div className="md:max-w-xl mx-auto w-full bg-red-500 p-5 text-center md:text-lg text-sm rounded-lg text-white">
          No products found for your search criteria!
        </div>
      )}
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        {newData.map((searchData, index) => {
          return (
            <>
              <Link href={"/product/" + searchData.id}>
                <a>
                  <div key={index}>
                    <div className="search-image">
                      {searchData.images[0].includes("https") ? (
                        <img
                          src={searchData.images[0]}
                          alt={searchData.title}
                        />
                      ) : (
                        <div className="no_image">
                          <Image src={NoImage} />
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <p>{searchData.title}</p>
                      <span>{searchData.price}$</span>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/");
  const data = await res.json();

  return {
    props: {
      Data: data,
    },
  };
}

export default Search;
