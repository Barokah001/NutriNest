
import Button from "./Button";
import { NavLink } from "react-router-dom";


type NavbarProps = {
  className ?:string
}

const Navbar = (props: NavbarProps) => {
  // const showSidebar = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   const menuToggle = document.querySelector(".menu-toggle");
  //   sidebar.style.display = "flex";
  //   menuToggle.style.display = "none";
  // };

  // const hideSidebar = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   sidebar.style.display = "none";
  //   const menuToggle = document.querySelector(".menu-toggle");
  //   menuToggle.style.display = "block";
  // };
  return (
    <nav
      className={`flex justify-between items-center px-5 md:px-20 py-3 font-space ${props.className} w-full`}
    >
      <div className="flex gap-1 justify-center items-center">
        <img src="/images/Logo..png" />
        <h1 className="text-2xl font-bold text-blue-950">NutriNest</h1>
      </div>

      <div className="hidden md:flex justify-between gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/bmicalc"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          BMI
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#1C1E26] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Contact Us
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-3">
        <NavLink to="/login">
        <Button
          name="Login"
          className={
            "bg-white border-1 text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-[#ffffff]"
          }
        />
        </NavLink>

        <NavLink to="/signup">
          <Button
            name="SignUp"
            className={
              "bg-blue-950 text-[#ffffff] border-1 border-blue-950 hover:bg-white hover:text-blue-950"
            }
          />
        </NavLink>
      </div>

      {/* <div
        onClick={showSidebar}
        className="menu-toggle flex md:hidden text-xl justify-center items-center text-black font-bold"
      >
        <AlignJustify />
      </div>

      {/* Mobile View */}

      {/* <div className="sidebar fixed hidden flex-col gap-4 justify-start items-start w-full right-0 top-19 text-white backdrop-blur-[6px] px-5 pb-7">
        <div
          onClick={hideSidebar}
          className="flex py-5 text-2xl justify-center items-center text-black font-bold"
        >
          <X />
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-normal text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-xl text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-xl text-black"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-xl text-black"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#28D08A] font-semibold underline underline-offset-8"
              : "text-xl text-black"
          }
        >
          Contact Us
        </NavLink>

        <Button
          name="Request a Free Demo"
          style={"bg-black hover:bg-[#28D08A]"}
        />
      </div>  */}
    </nav>
  );
};

export default Navbar;
