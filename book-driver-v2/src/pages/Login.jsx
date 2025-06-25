import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { loginDriver } from "../features/auth/authThunk";

const Login = () => {
  const { loginParam } = useParams();
  const [isLogin, setIsLogin] = useState(parseInt(loginParam) === 1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 1;
  const validateConfirmPassword = () => password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mô phỏng cuộc gọi API
    if (isLogin) {
      try {
        const payload = {
          email: email,
          password: password,
        };
        console.log(payload);
        dispatch(loginDriver(payload));
        setTimeout(() => {
          setLoading(false);
          alert("Logged in successfully!");
        }, 1500);
      } catch (error) {
        console.error("Error occured:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset các trường khi chuyển đổi form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  // Logic vô hiệu hóa nút
  const isButtonDisabled =
    loading ||
    (email && !validateEmail(email)) ||
    (password && !validatePassword(password)) ||
    (!isLogin &&
      (name === "" || password !== confirmPassword || confirmPassword === ""));

  return (
    <div
      className="min-h-screen bg-gray-100 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/85/f7/c2/85f7c209bab584be52438cba92e9c799.jpg')",
      }}
    >
      <div className="min-h-screen flex items-center justify-center">
        {/* Bên Trái - Form Xác thực */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
          <Navbar />
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={isLogin ? faSignInAlt : faUserPlus}
                    className="text-green-600 fa-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  <span>{isLogin ? "Welcome Back!" : "Tạo tài khoản"}</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  <span>
                    {isLogin
                      ? "Đăng nhập để tiếp tục"
                      : "Bắt đầu tài khoản mới của bạn"}
                  </span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Trường Tên (Chỉ đăng ký) */}
                {!isLogin && (
                  <div className="mb-6 transition-all duration-300 ease-out">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và Tên
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                        placeholder="Chai To"
                      />
                    </div>
                  </div>
                )}

                {/* Trường Email */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Địa chỉ email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="chaito@example.com"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute right-4 top-4 text-gray-400"
                    />
                  </div>
                  {email && !validateEmail(email) && (
                    <p className="mt-2 text-sm text-red-600">
                      Please enter a valid email address
                    </p>
                  )}
                </div>

                {/* Trường Phone */}
                {!isLogin && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <div className="relative">
                      <input
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                        placeholder="0812345678"
                      />
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="absolute right-4 top-4 text-gray-400"
                      />
                    </div>
                    {email && !validateEmail(email) && (
                      <p className="mt-2 text-sm text-red-600">
                        Please enter a valid email address
                      </p>
                    )}
                  </div>
                )}

                {/* Trường Mật khẩu */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                  {password && !validatePassword(password) && (
                    <p className="mt-2 text-sm text-red-600">
                      Mật khẩu phải có ít nhất 8 ký tự
                    </p>
                  )}
                </div>

                {/* Trường Xác nhận Mật khẩu (Chỉ đăng ký) */}
                {!isLogin && (
                  <div className="mb-6 transition-all duration-300 ease-out">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Xác nhận mật khẩu
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        <FontAwesomeIcon
                          icon={showConfirmPassword ? faEyeSlash : faEye}
                          className="w-6 h-6"
                        />
                      </button>
                    </div>
                    {confirmPassword && !validateConfirmPassword() && (
                      <p className="mt-2 text-sm text-red-600">
                        Mật khẩu không khớp
                      </p>
                    )}
                  </div>
                )}

                {/* Nút Gửi */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isButtonDisabled}
                >
                  {loading ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Đang tải...
                    </span>
                  ) : (
                    <span>{isLogin ? "Đăng nhập" : "Đăng ký"}</span>
                  )}
                </button>

                {/* Chuyển đổi Form */}
                <p className="mt-6 text-center text-gray-600">
                  <span>
                    {isLogin ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
                  </span>
                  <button
                    type="button"
                    className="ml-1 text-green-600 hover:text-green-700 font-semibold focus:outline-none"
                    onClick={toggleForm}
                  >
                    <span>{isLogin ? "Đăng ký" : "Đăng nhập"}</span>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
