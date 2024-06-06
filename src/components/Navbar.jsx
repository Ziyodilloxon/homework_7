// react router dom imports
import { Link } from "react-router-dom";

// react icons
import { IoMdSunny, IoMdMoon } from "react-icons/io";

// components
import NavLinks from "./NavLinks";

// react hooks

import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage);

  function themeFromLocalStorage() {
    return localStorage.getItem("theme") || "emerland";
  }

  const handleTheme = () => {
    const newTheme = theme == "emerald" ? "dim" : "emerald";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="bg-base-200 mb-8">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            MyStore
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dim"}
              readOnly
            />

            {/* sun icon */}
            <IoMdSunny className="swap-on fill-current w-10 h-10" />

            {/* moon icon */}
            <IoMdMoon className="swap-off fill-current w-10 h-10" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
