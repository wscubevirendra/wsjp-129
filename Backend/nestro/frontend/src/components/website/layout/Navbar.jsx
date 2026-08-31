"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { client } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { lsToCart } from "@/redux/features/cartSlice";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Checkout", href: "/checkout" },
];

const iconBtn =
  "w-9 h-9 rounded-full flex items-center justify-center text-[#444444] hover:bg-[#F0EBE3] transition-all";

export default function Navbar() {
  const dispacher = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log(cart)
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await client.get("/auth/profile");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      }
    };

    getUser();
    dispacher(lsToCart())
  }, []);

  return (
    <header className="sticky top-0 z-[300] bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E8E0D5] h-[58px] flex items-center justify-between px-4 md:px-8">
      {/* Logo */}
      <Link
        href="/"
        className="text-[16px] font-medium tracking-[0.12em] uppercase text-[#1E1E1E] flex-shrink-0"
      >
        NESTRO<span className="text-[#8B5E3C]">.</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[11px] tracking-[0.06em] rounded-md px-3 py-1.5 transition-colors ${pathname === link.href
              ? "bg-[#F0EBE3] text-[#8B5E3C]"
              : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
              }`}
          >
            {link.label}
          </Link>
        ))}

        {!user ? (
          <Link
            href="/signin"
            className={`text-[11px] tracking-[0.06em] rounded-md px-3 py-1.5 transition-colors ${pathname === "/signin"
              ? "bg-[#F0EBE3] text-[#8B5E3C]"
              : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
              }`}
          >
            Sign In
          </Link>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/signin");
            }}
            className="text-[11px] tracking-[0.06em] rounded-md px-3 py-1.5 text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
          >
            Logout
          </button>
        )}
      </nav>

      {/* Desktop Right Icons */}
      <div className="hidden md:flex items-center gap-2">
        <button aria-label="Search" className={iconBtn}>
          <FiSearch size={18} />
        </button>

        <Link
          href="/cart"
          aria-label="Cart"
          className={`relative ${iconBtn}`}
        >
          <FiShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B5E3C] text-white text-[10px] rounded-full flex items-center justify-center">
            {cart?.items?.length || 0}
          </span>
        </Link>

        <Link
          href="/profile"
          aria-label="Profile"
          className="w-9 h-9 rounded-full border border-[#C6A27E] flex items-center justify-center text-[#8B5E3C] hover:bg-[#C6A27E] hover:text-white transition-all"
        >
          <FiUser size={18} />
        </Link>

        <span className="text-sm font-semibold text-gray-600">
          {user?.name || ""}
        </span>
      </div>

      {/* Mobile Icons */}
      <div className="flex md:hidden items-center gap-1">
        <button aria-label="Search" className={iconBtn}>
          <FiSearch size={18} />
        </button>

        <Link
          href="/cart"
          aria-label="Cart"
          className={`relative ${iconBtn}`}
        >
          <FiShoppingBag size={18} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8B5E3C] text-white text-[10px] rounded-full flex items-center justify-center">
            {cart?.items?.length || 0}

          </span>
        </Link>

        <Link
          href="/profile"
          aria-label="Profile"
          className="w-9 h-9 rounded-full border border-[#C6A27E] flex items-center justify-center text-[#8B5E3C] hover:bg-[#C6A27E] hover:text-white transition-all"
        >
          <FiUser size={18} />
        </Link>

        <button
          aria-label="Toggle Menu"
          className={`${iconBtn} ml-1`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[58px] left-0 right-0 bg-[#FAFAF9] border-b border-[#E8E0D5] flex flex-col px-4 py-3 gap-1 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[12px] tracking-[0.06em] rounded-md px-3 py-2 transition-colors ${pathname === link.href
                ? "bg-[#F0EBE3] text-[#8B5E3C]"
                : "text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {!user ? (
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[0.06em] rounded-md px-3 py-2 text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
            >
              Sign In
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setMenuOpen(false);
                router.push("/signin");
              }}
              className="text-left text-[12px] tracking-[0.06em] rounded-md px-3 py-2 text-[#6B7280] hover:bg-[#F0EBE3] hover:text-[#8B5E3C]"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}