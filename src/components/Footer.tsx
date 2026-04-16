import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] pt-12 pb-0 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 pb-12 border-b border-[#1e1e1e]">
          {/* Contact */}
          <div>
            <p className="text-gray-500 text-xs mb-1">Registered in England and Wales (Company No. 17139653)</p>
            <p className="text-gray-500 text-xs mb-1">xblendix@xtraordinaryblend.com</p>
            <p className="text-gray-500 text-xs leading-relaxed mt-3">
              116 Worsley Road North,<br />
              Worsley, Manchester, M28 3QW,<br />
              United Kingdom.
            </p>
          </div>

          {/* Menu */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Menu</p>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "#" },
                { label: "About", to: "/legal" },
                { label: "Contact", to: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 text-xs hover:text-[#ffad5b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Get Help</p>
            <ul className="space-y-2">
              {[
                { label: "FAQ", to: "/services#section-4" },
                { label: "Size Guide", to: "/services#section-1" },
                { label: "Care Instructions", to: "/services#section-2" },
                { label: "Shipping", to: "/services#section-3" },
                { label: "Returns", to: "/services#section-3" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 text-xs hover:text-[#ffad5b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Shop</p>
            <ul className="space-y-2">
              {[
              { label: "Agbada", filter: "agbada" },
                { label: "Heritage", filter: "traditional" },
                { label: "Accessories", filter: "accessories" },
                { label: "Casual", filter: "casual" },
                { label: "Custom", filter: "all" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={`/shop?filter=${item.filter}`} className="text-gray-500 text-xs hover:text-[#ffad5b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

             {/* Legal */}
          <div>
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/legal" },
                { label: "Terms of Service", to: "/legal" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-gray-500 text-xs hover:text-[#ffad5b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

     

        {/* Large BLEND wordmark */}
        <div className="relative flex justify-end mt-0 -mr-4 overflow-hidden">
          <div className="flex items-end">
            <span
              className="font-white text-right"
              style={{
                fontSize: "clamp(4rem, 18vw, 14rem)",
                color: "transparent",
                WebkitTextStroke: "1px #403f3f",
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                userSelect: "none",
              }}
            >
              XTRAORDINARY
            </span>
            <span
              className="font-black writing-mode-vertical ml-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                color: "#ffad5b",
                letterSpacing: "0.1em",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                lineHeight: 1,
                paddingBottom: "0.5rem",
                userSelect: "none",
              }}
            >
              BLEND
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e1e1e] py-4 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Xtraordinary Blend Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
