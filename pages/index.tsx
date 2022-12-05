/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Stream Kids Jumper",
      href: "#",
      price: 29.00,
      color: "Dark Blue",
      imageSrc:
        "https://imgur.com/7MUZwiI",
      imageAlt:
        "This Kids body with a nice front print is a must-have for every wardrobe. It fits great and feels comfortable.",
    },
    {
      id: 2,
      name: "Stream Pay Hoodie",
      href: "#",
      price: 45.0,
      color: "White",
      imageSrc:
        "https://i.imgur.com/mp7Qvqv.png",
      imageAlt:
        "Classic Hooded Sweatshirt In French Terry Cloth made with organic cotton, featuring The StreamPay logo Printed on the chest.",
    },
    {
      id: 3,
      name: "Stream Pay Street Wear Hoodie",
      href: "#",
      color: "White",
      price: 49.80,
      quantity: 1,
      imageSrc:
        "https://imgur.com/ixdE8Af",
      imageAlt:
        "The Basic Oversize Hoody is super comfortable and made from a soft cotton blend. The hood can be adjusted with a drawstring that has taped ends. The kangaroo pocket and wide ribbing on the sleeves and hem add even more comfort.",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Our latest eCommerce demo products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Pay with Solana, Stream Token or USDC</h1>
    </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="italic text-gray-500">{product.color}</p>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
