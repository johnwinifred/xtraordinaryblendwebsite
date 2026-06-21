import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Vintage Shirt Series
// import vintageShirt1 from "./assets/Vintage shirt1.jpeg";
// import vintageShirt1_1 from "./assets/Vintage shirt 1.1.jpeg";
// import vintageShirt2 from "./assets/Vintage shirt 2.jpeg";
// import vintageShirt2_1 from "./assets/Vintage shirt2.1.jpeg";

// // VS Series (Casual Wear)
// import vs3Image from "./assets/VS 3.jpeg";
// import vs3_1Image from "./assets/VS3.1.jpeg";
// import vs4Image from "./assets/vs4.jpeg";
// import vs4_1Image from "./assets/vs4.1.jpeg";
// import vs5Image from "./assets/vs5.jpeg";
// import vs5_1Image from "./assets/vs5.1.jpeg";
// import vs6Image from "./assets/vs6.jpeg";
// import vs6_1Image from "./assets/vs6.1.jpeg";
// import vs7Image from "./assets/vs7.jpeg";
// import vs7_1Image from "./assets/vs7.1.jpeg";
// import vs8Image from "./assets/vs8.jpeg";
// import vs8_1Image from "./assets/vs8.1.jpeg";
// import vs9Image from "./assets/vs9.jpeg";
// import vs9_1Image from "./assets/vs9.1.jpeg";
// import vs10Image from "./assets/vs10.jpeg";
// import vs10_1Image from "./assets/vs10.1.jpeg";
// import vs11Image from "./assets/vs11.jpeg";
// import vs11_1Image from "./assets/vs11.1.jpeg";
// import vs12Image from "./assets/vs12.jpeg";
// import vs12_1Image from "./assets/vs12.1.jpeg";
// import vs13Image from "./assets/vs13.jpeg";
// import vs13_1Image from "./assets/vs13.1.jpeg";
// import vs14Image from "./assets/vs14.jpeg";
// import vs14_1Image from "./assets/vs14.1.jpeg";
// import vs15Image from "./assets/vs15.jpeg";
// import vs15_1Image from "./assets/vs15.1.jpeg";
// import vs16Image from "./assets/vs16.jpeg";
// import vs16_1Image from "./assets/vs16.1.jpeg";
// import vs17Image from "./assets/vs 17.jpeg";
// import vs17_1Image from "./assets/vs 17.1.jpeg";
// import vs18Image from "./assets/vs 18.jpeg";
// import vs18_1Image from "./assets/vs 18.1.jpeg";
// import vs19Image from "./assets/vs19.jpeg";
// import vs19_1Image from "./assets/vs19.1.jpeg";
// import vs20Image from "./assets/vs20.jpeg";
// import vs20_1Image from "./assets/vs20.1.jpeg";

// // Accessories
// import abiaCap1Image from "./assets/abia cap1.jpeg";
// import abiaCap2Image from "./assets/abia cap2.jpeg";
// import redTonak from "./assets/red tonak.jpeg";
// import blackTonak from "./assets/black tonak.jpeg";

// ── Types ───────────────────────────────────────────────────────
type Category = "all" | "agbada" | "khaftan" | "traditional" | "accessories" | "casual";
type SortOption = "featured" | "low" | "high" | "new";
type Badge = "new" | "bestseller" | "sale" | null;
// type Price = string | number | null;

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  price: number | null;
  badge: Badge;
  img: string;
  detailImg?: string;
  description?: string;
}

// ── Constants ───────────────────────────────────────────────────
const SHOP_BASE_URL = "https://xblendix.com/shop/";

const CATEGORY_LABELS: Record<Exclude<Category, "all">, string> = {
  agbada: "Agbada",
  khaftan: "XKhaftan",
  traditional: "Heritage",
  accessories: "Accessories",
  casual: "Casual Wear",
};

const BADGE_STYLES: Record<NonNullable<Badge>, { bg: string; color: string; label: string }> = {
  new: { bg: "#ffad5b", color: "#000", label: "New In" },
  bestseller: { bg: "#111", color: "#fff", label: "Best Seller" },
  sale: { bg: "#e53e3e", color: "#fff", label: "Sale" },
};

const PRODUCTS: Product[] = [
  // Existing products
  // { id: 1, name: "Royal Agbada", category: "agbada", price: 0.00, badge: "bestseller", img: agbadaImage },
  // { id: 2, name: "Heritage Isi-agu", category: "traditional", price: 0.00, badge: "new", img: heritageLineImage },
  // { id: 3, name: "Vintage 2-Piece", category: "casual", price: 0.00, badge: "sale", img: regularImage },
  // { id: 4, name: "Vintage 2-Piece Classic", category: "casual", price: 0.00, badge: null, img: VintageImage },
  // { id: 5, name: "Red Igbo Hat (Tonak)", category: "accessories", price: 37.99, badge: null, img: capRedImage, description: "Size - 55cm(21.65 inches) x 3\nSize - 56cm(22.05 inches) x 5\nSize - 57cm(22.44 inches) x 5" },
  // { id: 6, name: "Khaftan 2-Piece", category: "khaftan", price: 0.00, badge: null, img: xhaftanImage },
  // { id: 7, name: "Khaftan 2-Piece Premium", category: "khaftan", price: 0.00, badge: "new", img: xhaftan2Image },
  // { id: 8, name: "Heritage Isi-agu Classic", category: "traditional", price: 0.00, badge: null, img: heritageImage },
  // { id: 9, name: "Blue Igbo Hat (Tonak)", category: "accessories", price: 37.99, badge: null, img: capBlueImage },
  
  // Vintage Shirt Series
  // { id: 10, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vintageShirt1, detailImg: vintageShirt1_1, description: "LIMITED EDITIONS" },
  // { id: 11, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vintageShirt2, detailImg: vintageShirt2_1, description: "LIMITED EDITIONS" },
  
  // // VS Casual Wear Series - Vintage Shirt (Lapel)
  // { id: 12, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs3Image, detailImg: vs3_1Image, description: "LIMITED EDITIONS" },
  // { id: 13, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs4Image, detailImg: vs4_1Image, description: "LIMITED EDITIONS" },
  // { id: 14, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs5Image, detailImg: vs5_1Image, description: "LIMITED EDITIONS" },
  // { id: 15, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs6Image, detailImg: vs6_1Image, description: "LIMITED EDITIONS" },
  // { id: 16, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs7Image, detailImg: vs7_1Image, description: "LIMITED EDITIONS" },
  // { id: 17, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs8Image, detailImg: vs8_1Image, description: "LIMITED EDITIONS" },
  // { id: 18, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs9Image, detailImg: vs9_1Image, description: "LIMITED EDITIONS" },
  // { id: 19, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs10Image, detailImg: vs10_1Image, description: "LIMITED EDITIONS" },
  // { id: 20, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs11Image, detailImg: vs11_1Image, description: "LIMITED EDITIONS" },
  // { id: 21, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs12Image, detailImg: vs12_1Image, description: "LIMITED EDITIONS" },
  // { id: 22, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs13Image, detailImg: vs13_1Image, description: "LIMITED EDITIONS" },
  // { id: 23, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs14Image, detailImg: vs14_1Image, description: "LIMITED EDITIONS" },
  // { id: 24, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs15Image, detailImg: vs15_1Image, description: "LIMITED EDITIONS" },
  // { id: 25, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs16Image, detailImg: vs16_1Image, description: "LIMITED EDITIONS" },
  // { id: 26, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs17Image, detailImg: vs17_1Image, description: "LIMITED EDITIONS" },
  // { id: 27, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs18Image, detailImg: vs18_1Image, description: "LIMITED EDITIONS" },
  // { id: 28, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs19Image, detailImg: vs19_1Image, description: "LIMITED EDITIONS" },
  // { id: 29, name: "Vintage Shirt (Lapel)", category: "casual", price: 18.00, badge: null, img: vs20Image, detailImg: vs20_1Image, description: "LIMITED EDITIONS" },
  
  // // Accessories - Caps
  // { id: 30, name: "Traditional Abia Hat", category: "accessories", price: 12.00, badge: null, img: abiaCap1Image, description: "Mixed colors - One size" },
  // { id: 31, name: "Traditional Abia Hat", category: "accessories", price: 12.00, badge: null, img: abiaCap2Image, description: "Mixed colors - One size" },
  
  // // Accessories - Tonaks
  // { id: 32, name: "Black Igbo Hat (Tonak)", category: "accessories", price: 37.99, badge: null, img: redTonak, description: "Size - 55cm(21.65 inches) x 1\nSize - 56cm(22.05 inches) x 1\nSize - 57cm(22.44 inches) x 1" },
  // { id: 33, name: "Red Igbo Hat (Tonak) - Classic", category: "accessories", price: 37.99, badge: null, img: blackTonak, description: "Size - 55cm(21.65 inches) x 1\nSize - 56cm(22.05 inches) x 1\nSize - 57cm(22.44 inches) x 1" },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All Pieces", value: "all" },
  { label: "Agbada", value: "agbada" },
  { label: "XKhaftan", value: "khaftan" },
  { label: "Heritage", value: "traditional" },
  { label: "Accessories", value: "accessories" },
  { label: "Casual Wear", value: "casual" },
];

// ── Product Detail Modal ────────────────────────────────────────────────
const ProductDetailModal: React.FC<{ product: Product; isOpen: boolean; onClose: () => void }> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "0.5rem",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "90vh",
          overflow: "auto",
          padding: "2rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#666",
          }}
        >
          ✕
        </button>

        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#111", marginBottom: "1rem" }}>{product.name}</h2>

        {/* Main Image */}
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", marginBottom: "1.5rem", borderRadius: "0.25rem" }}
        />

        {/* Detail Image (if available) */}
        {product.detailImg && (
          <>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>Detailed View</h3>
            <img
              src={product.detailImg}
              alt={`${product.name} - Detail`}
              style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", marginBottom: "1.5rem", borderRadius: "0.25rem" }}
            />
          </>
        )}

        {/* Description */}
        {product.description && (
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>Details</h3>
            <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, whiteSpace: "pre-line" }}>
              {product.description}
            </p>
          </div>
        )}

        {/* Price */}
        <div style={{ borderTop: "1px solid #ebebeb", paddingTop: "1rem" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#111", letterSpacing: "0.04em" }}>
            {product.price !== null ? `£${product.price.toFixed(2)}` : "Custom"}
          </span>
        </div>
      </div>
    </div>
  );
};

// ── Product Card ────────────────────────────────────────────────
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const shopUrl = `${SHOP_BASE_URL}${product.id}`;
  const badgeStyle = product.badge ? BADGE_STYLES[product.badge] : null;

  return (
    <>
      <div
        className="bg-white overflow-hidden relative"
        style={{
          border: "1px solid #ebebeb",
          transition: "transform 0.3s, box-shadow 0.3s",
          transform: hovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hovered ? "0 16px 48px rgba(0,0,0,0.1)" : "none",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Main Image */}
        <div
          className="relative overflow-hidden"
          style={{ background: "#f0ece4", cursor: product.detailImg ? "pointer" : "default" }}
          onClick={() => setShowModal(true)}
        >
          {badgeStyle && (
            <div
              className="absolute top-3 left-3 z-10 text-xs font-black tracking-widest uppercase"
              style={{ background: badgeStyle.bg, color: badgeStyle.color, padding: "0.25rem 0.6rem", fontSize: "0.5rem", letterSpacing: "0.2em" }}
            >
              {badgeStyle.label}
            </div>
          )}
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="w-full block"
            style={{
              aspectRatio: "3/4",
              objectFit: "cover",
              filter: hovered ? "grayscale(0%)" : "grayscale(15%)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "filter 0.4s, transform 0.4s",
            }}
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "rgba(0,0,0,0.45)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black tracking-widest uppercase no-underline"
              style={{ background: "#ffad5b", color: "#000", fontSize: "0.6rem", letterSpacing: "0.18em", padding: "0.7rem 1.4rem" }}
            >
              View &amp; Buy
            </a>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "1rem 1rem 1.2rem" }}>
          <p style={{ color: "#ffad5b", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
            {CATEGORY_LABELS[product.category]}
          </p>
          <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: "0.6rem" }}>{product.name}</p>
          <div className="flex items-center justify-between">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#111", letterSpacing: "0.04em" }}>
              {product.price !== null ? `£${product.price.toFixed(2)}` : "Custom"}
            </span>
            <a
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffad5b", textDecoration: "none" }}
            >
              Shop Now →
            </a>
          </div>
        </div>
      </div>

      <ProductDetailModal product={product} isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

// ── Main Shop Page ──────────────────────────────────────────────
const ShopPage: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    if (filter && FILTERS.some(f => f.value === filter)) {
      setActiveFilter(filter as Category);
    }
  }, [location.search]);

  const filteredProducts = useMemo(() => {
    let list = activeFilter === "all" ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === activeFilter);
    if (sortBy === "low") list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sortBy === "high") list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    if (sortBy === "new") list.sort((a, b) => (b.badge === "new" ? 1 : 0) - (a.badge === "new" ? 1 : 0));
    return list;
  }, [activeFilter, sortBy]);

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#F5F2EC", color: "#111" }}>

      
      
      {/* ── HERO ── */}
      <div className="relative flex text-center overflow-hidden" style={{ background: "#0000", padding: "3rem 2rem 2.5rem" }}/>
       


      {/* ── FILTER BAR ── */}
      <div
        className="flex items-center justify-center gap-2 overflow-x-auto"
        style={{ background: "#fff", borderBottom: "1px solid #e8e8e8", padding: "0.75rem 1.5rem", scrollbarWidth: "none" }}
      >
        <span style={{ fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginRight: "0.5rem", whiteSpace: "nowrap" }}>
          Filter:
        </span>
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            style={{
              fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "0.45rem 1rem", border: "1.5px solid", whiteSpace: "nowrap", cursor: "pointer", transition: "all 0.2s",
              background: activeFilter === f.value ? "#ffad5b" : "#fff",
              borderColor: activeFilter === f.value ? "#ffad5b" : "#e0e0e0",
              color: activeFilter === f.value ? "#000" : "#777",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── PRODUCTS ── */}
      <div className="mx-auto" style={{ maxWidth: "1200px", padding: "2.5rem 1.5rem 5rem" }}>
        {/* Results row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
          <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa" }}>
            {filteredProducts.length} Piece{filteredProducts.length !== 1 ? "s" : ""} Available
          </span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortOption)}
            style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.4rem 0.8rem", border: "1.5px solid #ddd", background: "#fff", color: "#555", cursor: "pointer", outline: "none" }}
          >
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="new">Newest First</option>
          </select>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#ccc", letterSpacing: "0.06em" }}>No pieces found</p>
            <p style={{ color: "#bbb", fontSize: "0.8rem", marginTop: "0.5rem" }}>Try a different filter.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA STRIP ── */}
      <div className="relative text-center overflow-hidden" style={{ background: "#111", padding: "3.5rem 2rem" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(-45deg,transparent,transparent 30px,rgba(201,168,76,.04) 30px,rgba(201,168,76,.04) 31px)" }} />
        <div className="relative z-10">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", color: "#fff", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>
            Need Something <span style={{ color: "#ffad5b" }}>Bespoke?</span>
          </h2>
          <p style={{ color: "#888", fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>
            Can't find exactly what you're looking for? Commission a fully custom piece — made to your measurements.
          </p>
          <a href="mailto:xblendix@xtraordinaryblend.com" style={{ background: "#ffad5b", color: "#000", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "0.85rem 2rem", textDecoration: "none", display: "inline-block" }}>
            Request a Commission
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
    

    </div>
  );
};

export default ShopPage;
