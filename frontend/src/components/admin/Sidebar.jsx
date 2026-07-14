import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, Star, Menu, X, CookingPot } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Products", path: "/admin/products", icon: <Package size={18} /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={18} /> },
  { name: "Users", path: "/admin/users", icon: <Users size={18} /> },
  { name: "Coupons", path: "/admin/coupons", icon: <Tag size={18} /> },
  { name: "Reviews", path: "/admin/reviews", icon: <Star size={18} /> },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        className="lg:hidden fixed top-3 left-3 z-50 rounded-xl bg-forest p-2.5 text-cream shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen
        w-64 bg-forest text-cream flex flex-col shrink-0
        transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center gap-2.5 p-5 border-b border-cream/10">
          <CookingPot size={24} strokeWidth={1.5} />
          <span className="text-lg font-playfair font-semibold">SpiceRoot Admin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-5 py-3 mx-2 rounded-xl text-sm font-dm font-medium transition-all ${
                  isActive
                    ? "bg-cream/15 text-cream"
                    : "text-cream/80 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
