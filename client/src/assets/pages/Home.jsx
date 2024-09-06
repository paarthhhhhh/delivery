import { useState } from "react";
import Items from "../components/Items";

const Home = () => {
  const [index, setIndex] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
      <section id="home" className="w-full  min-h-[100vh]">
        <section className="py-24 md:py-32 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans leading-tight">Elevate Your Grocery Experience</h2>
              <p className="text-xl text-gray-300 mb-8">Discover premium quality groceries delivered right to your doorstep.</p>
              <a href="#" className="inline-block bg-white text-black text-lg px-8 py-4 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Start Shopping</a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Featured Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
              {[
                { name: "Artisanal Produce", description: "Hand-picked, locally sourced fruits and vegetables" },
                { name: "Gourmet Delights", description: "Exquisite selections for the discerning palate" },
                { name: "Organic Essentials", description: "Pure, natural products for a healthier lifestyle" }
              ].map((collection, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-2xl transition duration-300 hover:shadow-3xl transform hover:-translate-y-1">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-md mb-6 flex items-center justify-center">
                    <span className="text-4xl">🛒</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{collection.name}</h4>
                  <p className="text-gray-400 mb-4">{collection.description}</p>
                  <a href="#" className="text-white font-semibold hover:underline">Explore Collection</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Items />

        <section className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-3xl font-bold mb-8">Why Choose GroceryApp?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
                  <p className="text-gray-400">Curated selection of top-tier products</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Express Delivery</h4>
                  <p className="text-gray-400">Swift, reliable same-day delivery</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Eco-Friendly</h4>
                  <p className="text-gray-400">Sustainable practices and packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
              <p className="text-xl text-gray-300 mb-8">Stay updated with our latest offers and gourmet tips.</p>
              <form className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
  );
};

export default Home;
