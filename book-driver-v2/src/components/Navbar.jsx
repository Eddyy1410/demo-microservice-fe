import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
      <div className="text-white font-bold text-2xl">Grab</div>

      <div className="hidden md:flex space-x-10 text-white font-medium">
        <a href="/" className="hover:text-green-300 transition">Trang chủ</a>
        <a href="#" className="hover:text-green-300 transition">Giới thiệu</a>
        <a href="#" className="hover:text-green-300 transition">Liên hệ</a>
      </div>

      <div className="md:hidden relative">
        <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
          <i className="fa fa-bars text-2xl"></i>
        </button>

        {open && (
          <div className="absolute top-20 right-6 bg-white shadow-lg rounded-lg p-6 w-48">
            <div className="flex flex-col space-y-4 text-gray-800">
              <a href="#" className="hover:text-green-300 transition">Trang chủ</a>
        <a href="#" className="hover:text-green-300 transition">Giới thiệu</a>
        <a href="#" className="hover:text-green-300 transition">Liên hệ</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}