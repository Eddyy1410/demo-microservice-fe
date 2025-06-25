import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mx-auto px-6 pt-32 pb-48 relative z-10">
      <div
        className={`max-w-3xl transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Cùng nhau <br /> tiến về phía trước
        </h1>
        <p className="text-xl text-white mb-8 md:pr-12">
          Sứ mệnh của chúng tôi là đưa Đông Nam Á tiến về phía trước bằng cách
          tạo ra thêm nhiều cơ hội kinh tế cho tất cả mọi người
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            className="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition transform hover:-translate-y-1 inline-flex items-center justify-center"
            onClick={() => navigate("/login/1")}
          >
            <span>Đăng nhập</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <a
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition transform hover:-translate-y-1 inline-flex items-center justify-center"
            onClick={() => navigate("/login/0")}
          >
            <span>Tạo tài khoản</span>
          </a>
        </div>
      </div>
    </div>
  );
}
