import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-sky-50 to-white">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images2.thanhnien.vn/Uploaded/nthanhluan/2023_01_10/grab-4144.jpg')",
            height: "85vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
