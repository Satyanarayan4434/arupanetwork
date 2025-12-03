import productImage1 from "../assets/shoe_4.png";
import productImage2 from "../assets/shoe_2.png";
import productImage3 from "../assets/shoe_3.png";
import productImage4 from "../assets/shoe_1.png";
import { useState, useEffect } from "react";

// Hard Coded Data
const products = [
  {
    id: 1,
    image: productImage1,
    firstName: "Jump",
    lastName: "Man",
    firstNameColor: "a53579",
    lastNameColor: "white",
    price: "134$",
    priceDesc1: "Jordan",
    priceDesc2: "JUMPMAN 2021 PF",
    description: "Basketball shoe",
    year: "2021 PF",
  },
  {
    id: 2,
    image: productImage2,
    firstName: "Air",
    lastName: "Force",
    firstNameColor: "f9232c",
    lastNameColor: "white",
    price: "150$",
    priceDesc1: "Nike",
    priceDesc2: "AIR FORCE 1 '07 LV8",
    description: "Casual shoe",
    year: "'07 LV8",
  },
  {
    id: 3,
    image: productImage3,
    firstName: "Blazer",
    lastName: "Mid",
    firstNameColor: "214050",
    lastNameColor: "white",
    price: "120$",
    priceDesc1: "Nike",
    priceDesc2: "BLAZER MID '77 VINTAGE",
    description: "Casual shoe",
    year: "'77 VINTAGE",
  },
  {
    id: 4,
    image: productImage4,
    firstName: "Air",
    lastName: "Max",
    firstNameColor: "FF0000",
    lastNameColor: "text-white",
    price: "180$",
    priceDesc1: "Nike",
    priceDesc2: "AIR MAX 270",
    description: "Running shoe",
    year: "270",
  },
];

export default function Hero() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  // Infinete scroll logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedProduct((currentProduct) => {
        const currentIndex = products.findIndex(
          (item) => item.id === currentProduct.id
        );
        const nextIndex = (currentIndex + 1) % products.length;
        return products[nextIndex];
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white">
      <div className="relative w-full flex flex-col lg:flex-row items-center justify-center min-h-[60vh] lg:min-h-[80vh] overflow-hidden p-6">
        {/* Background Texts */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 opacity-90">
          <h1
            className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-none text-center transition-colors duration-500"
            style={{ color: `#${selectedProduct.firstNameColor}` }}
          >
            {selectedProduct.firstName}
          </h1>
          <h1
            className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tighter uppercase leading-none text-center transition-colors duration-500"
            style={{
              color:
                selectedProduct.lastNameColor === "white"
                  ? "white"
                  : `#${selectedProduct.lastNameColor}`,
            }}
          >
            {selectedProduct.lastName}
          </h1>
        </div>

        {/* Main Product Image */}
        <div className="z-10 relative w-full max-w-xs md:max-w-md lg:max-w-2xl transform transition-transform duration-500 hover:scale-105">
          <img
            key={selectedProduct.id}
            src={selectedProduct.image}
            alt={selectedProduct.priceDesc2}
            className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in-up"
          />
        </div>

        {/* Price & Year*/}
        <div className="z-20 mt-8 lg:mt-0 lg:absolute lg:bottom-20 lg:left-20 flex flex-col items-center lg:items-start gap-2">
          <div className="text-red-600 font-extrabold text-4xl">
            {selectedProduct.price}
          </div>
          <div className="text-center lg:text-left">
            <p className="font-bold text-lg">{selectedProduct.priceDesc1}</p>
            <p className="text-sm text-gray-300">
              {selectedProduct.priceDesc2}
            </p>
          </div>
        </div>
        <div className="z-20 hidden lg:block absolute top-1/2 right-10 transform -translate-y-1/2 text-red-600 font-bold text-2xl italic tracking-widest rotate-90">
          {selectedProduct.year}
        </div>
      </div>

      {/* Color selector and all products  */}
      <div className="bg-zinc-900 w-full px-6 py-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Color Selector */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto">
            <h3 className="font-bold tracking-widest text-gray-400 text-sm">
              CHOOSE COLOR
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`cursor-pointer border-2 rounded-lg p-2 transition-all duration-300 bg-black ${
                    selectedProduct.id === product.id
                      ? "border-red-600 scale-110"
                      : "border-gray-800 hover:border-gray-600"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.firstName}
                    className="w-16 h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto justify-center">
            <button className="bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-200 transition duration-300 w-full sm:w-auto">
              ADD TO CART
            </button>
            <button className="bg-transparent text-white border border-white font-bold px-8 py-3 rounded hover:bg-white hover:text-black transition duration-300 w-full sm:w-auto">
              BUY NOW
            </button>
          </div>

          {/* Inspiration Text*/}
          <div className="hidden md:block w-full lg:w-1/4 text-center lg:text-right">
            <h3 className="font-bold mb-2 text-gray-400 text-sm">
              INSPIRATION
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {selectedProduct.description} - Inspired by the design of the
              latest Air Jordan game shoe, helping players level up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
