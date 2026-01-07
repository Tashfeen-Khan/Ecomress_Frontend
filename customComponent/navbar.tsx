"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Heart, ShoppingBag, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

/* =======================
   TYPES
======================= */
type NavChild = {
  label: string
  href: string
}

type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

/* =======================
   NAV DATA
======================= */
const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "SHOP",
    href: "/shop",
    children: [
      { label: "Men", href: "/shop/men" },
      { label: "Women", href: "/shop/women" },
      { label: "Accessories", href: "/shop/accessories" },
    ],
  },
  { label: "BLOG", href: "/blog" },
  {
    label: "PAGES",
    href: "/pages",
    children: [
      { label: "About Us", href: "/pages/about" },
      { label: "FAQ", href: "/pages/faq" },
    ],
  },
  { label: "CONTACT", href: "/contact" },
]

/* =======================
   NAVBAR
======================= */
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label)
  }

  return (
    <header className="h-16 border-b border-gray-400 bg-white px-12  flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-xl font-bold tracking-widest">KAIRA</h1>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden sm:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="relative group">

            {!item.children ? (
              <Link
                href={item.href}
                className="text-sm font-normal hover:text-gray-600"
              >
                {item.label}
              </Link>
            ) : (
              <>
                <button className="flex items-center gap-1 text-sm font-normal">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full z-50  hidden group-hover:block bg-white shadow-md rounded-md p-3 min-w-45">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-2 py-1 text-sm rounded hover:bg-gray-100"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>

      {/* ================= RIGHT ICONS ================= */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
  {/* Icon → only mobile */}
  <Heart className="h-5 w-5 md:hidden" />

  {/* Text → md and above */}
  <span className="hidden md:inline text-sm">
    WISHLIST (0)
  </span>
</div>


        <div className="flex items-center gap-2 cursor-pointer">
          <ShoppingBag className="h-5 w-5 md:hidden" />
          <span className="hidden md:inline text-sm">CART (0)</span>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left" className="w-70">
            <nav className="flex flex-col gap-4 mt-6 ml-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>

                  {/* Single */}
                  {!item.children && (
                    <Link
                      href={item.href}
                      className="text-lg font-normal block"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Nested */}
                  {item.children && (
                    <>
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="flex items-center gap-2 w-full text-lg font-normal"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openMenu === item.label && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="text-sm text-gray-600 hover:text-black"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="flex items-center gap-2 mt-6">
                <Heart className="h-5 w-5" />
                <span className="text-sm">WISHLIST (0)</span>
              </div>

              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <span className="text-sm">CART (0)</span>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
