import React, { Children, useEffect, useState } from "react";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { MdDarkMode, MdLogout, MdOutlineLightMode } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  //   set the theme in localstorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // side bar nav links
  const mainNavItems = [
    {
      icon: <IoMdHome size={18} />,
      label: "Homepage",
      tip: "Homepage",
      link: "/",
    },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ── Drawer Content ── */}
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-center items-center sticky top-0 z-30 shadow-sm border-b border-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <BsLayoutSidebarInset size={20} />
          </label>

          {/* Logo visible on mobile */}
          <div className="flex items-center gap-2 w-full px-2 lg:hidden">
            <div className="bg-primary text-primary-content p-2 rounded-lg font-bold text-sm">
              F
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              Finova
            </span>
          </div>
        </nav>

        {/* Page Content */}
        <Outlet />
      </div>

      {/* ── Sidebar ── */}
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col bg-base-200 w-64 border-r border-base-300">
          {/* Sidebar Logo */}
          <div className="flex items-center gap-3 px-4 py-[14px] border-b border-base-300">
            <div className="bg-primary text-primary-content px-2 py-1.5 rounded-lg font-bold text-sm">
              F
            </div>
            <div>
              <p className="font-bold text-base text-primary leading-none">
                Finova
              </p>
              <p className="text-xs text-base-content/40 mt-0.5">
                Editorial Dashboard
              </p>
            </div>
          </div>

          {/* Main Nav */}
          <ul className="menu w-full grow px-2 pt-3 pb-0 gap-0.5">
            <li className="menu-title px-3 py-1 text-xs tracking-widest opacity-80">
              MAIN MENU
            </li>

            {mainNavItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.link || "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-primary text-primary-content shadow-lg shadow-primary/30 font-semibold"
                        : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
                    }`
                  }
                  data-tip={item.tip}
                >
                  {item.icon}
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`badge badge-xs ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Bottom: Settings + Logout + User */}
          <div className="border-t border-base-300 px-2 pt-2 pb-3 space-y-0.5">
            {/* bottom header */}
            <li className="menu-title px-3 py-1 text-xs tracking-widest opacity-80">
              System
            </li>{" "}
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm">
              {/* setting buttton */}
              <IoMdSettings size={18} />
              <span>Settings</span>
            </button>
            {/* Toggle theme */}
            {theme === "light" ? (
              <button
                onClick={() => setTheme("dark")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm"
              >
                <MdDarkMode size={18} />
                <span>Dark Mode</span>
              </button>
            ) : (
              <button
                onClick={() => setTheme("light")}
                className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm"
              >
                <MdOutlineLightMode size={18} />
                <span>Light Mode</span>
              </button>
            )}
            {/* Logout button */}
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-base-300 transition-colors text-sm text-error">
              <MdLogout size={18} />
              <span>Logout</span>
            </button>
            {/* User Card */}
            <div className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl bg-base-300">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-200 ring-offset-1">
                  <img
                    src="https://i.ibb.co.com/rfsbtFGg/IMG-20220810-162239-857.jpg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate leading-none">
                  Abdullah Shamim
                </p>
                <p className="text-xs text-base-content/40 truncate mt-0.5">
                  abdullahshamim884@gmail.com
                </p>
              </div>
              <span className="badge badge-xs badge-success shrink-0">Pro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
