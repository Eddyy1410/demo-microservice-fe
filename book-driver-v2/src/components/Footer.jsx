const FooterLinkColumn = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition">{link.text}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const productLinks = [
        { href: "#", text: "Trang chủ" },
        { href: "#", text: "Tải ứng dụng" }
    ];
    const resourceLinks = [
        { href: "#", text: "Chính sách bảo mật" },
        { href: "#", text: "Điều khoản sử dụng" },
        { href: "#", text: "Trung tâm hỗ trợ" }
    ];

    return (
        <footer className="bg-gray-900 text-white py-30 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Grab</h3>
                        <p className="text-gray-400 mb-4">Hỗ trợ đặt xe an toàn – nhanh chóng – tiện lợi. Phục vụ 24/7.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>

                    <FooterLinkColumn title="Products" links={productLinks} />
                    <FooterLinkColumn title="Resources" links={resourceLinks} />

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 flex items-center">
                                <i className="fas fa-phone mr-2 text-yellow-500"></i>
                                <span>📍 Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="text-gray-400 flex items-center">
                                <i className="fas fa-envelope mr-2 text-yellow-500"></i>
                                <span>📞 909.777.9911 (hỗ trợ 24/7)</span>
                            </li>
                            <li className="text-gray-400 flex items-center">
                                <i className="fas fa-phone mr-2 text-yellow-500"></i>
                                <span>✉️ grab@gmail.com.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-500 text-center">© 2025 Demo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;