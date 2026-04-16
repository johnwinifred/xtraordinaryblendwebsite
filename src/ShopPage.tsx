import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import xhaftanImage from "./assets/xkhaftan.jfif";
import xhaftan2Image from "./assets/xhaftan2.jfif";
import regularImage from "./assets/regular.jfif";
// import capRedImage from "./assets/cap red.jfif";
// import capBlueImage from "./assets/capblue.jfif";
import VintageImage from "./assets/Vintage2piece.jfif";
import heritageImage from "./assets/heritage.jfif";
import heritageLineImage from "./assets/heritage line.jfif";
import agbadaImage from "./assets/agbada.jpg";

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
  { id: 1, name: "Royal Agbada", category: "agbada", price: 0.00, badge: "bestseller", img: agbadaImage },
  { id: 2, name: "Heritage Isi-agu", category: "traditional", price: 0.00, badge: "new", img: heritageLineImage },
  { id: 3, name: "Vintage 2-Piece", category: "casual", price: 0.00, badge: "sale", img: regularImage },
  { id: 4, name: "Vintage 2-Piece", category: "casual", price: 0.00, badge: null, img: VintageImage },
  // { id: 5, name: "Red Tonak", category: "accessories", price: 0.00, badge: null, img: capRedImage },
  { id: 6, name: "Khaftan 2-Piece", category: "khaftan", price: 0.00, badge: null, img: xhaftanImage },
  { id: 7, name: "Khaftan 2-Piece", category: "khaftan", price: 0.00, badge: "new", img: xhaftan2Image },
  { id: 8, name: "Heritage Isi-agu", category: "traditional", price: 0.00, badge: null, img: heritageImage }
];

const FILTERS: { label: string; value: Category }[] = [
  { label: "All Pieces", value: "all" },
  { label: "Agbada", value: "agbada" },
  { label: "XKhaftan", value: "khaftan" },
  { label: "Heritage", value: "traditional" },
  { label: "Accessories", value: "accessories" },
  { label: "Casual Wear", value: "casual" },
];

// ── Product Card ────────────────────────────────────────────────
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const shopUrl = `${SHOP_BASE_URL}${product.id}`;
  const badgeStyle = product.badge ? BADGE_STYLES[product.badge] : null;

  return (
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
      {/* Image */}
      <div className="relative overflow-hidden" style={{ background: "#f0ece4" }}>
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
            {product.price !== null ? `£${product.price.toLocaleString()}` : "Custom"}
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
