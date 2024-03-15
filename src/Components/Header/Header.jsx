/* eslint-disable react/no-unknown-property */
import { FaUserCircle } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* Nav content */}
      <div>
        <div className="text-2xl font-bold font-lexend mt-5 text-center block md:hidden lg:hidden">
          Recipe Calories
        </div>
        <nav class="w-full my-10">
          <div class=" flex justify-between lg:gap-10 font-rail w-full">
            <div class="flex justify-between">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class=" text-base menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a> Home</a>
                  </li>
                  <li>
                    <a>Recipes</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <div class=" flex justify-start">
                <a class="btn btn-ghost text-3xl font-lexend font-extrabold  hidden md:block lg:block lg:text-4xl">
                  Recipe Calories
                </a>
              </div>
            </div>
            <div class="navbar-center hidden md:block lg:block  ">
              <ul class="menu menu-horizontal px-1 text-base">
                <li>
                  <a> Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>

                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative ">
                <input
                  className="bg-gray-100 font-bold text-black py-3 pl-10 w-28 lg:w-60 rounded-2xl"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
                <span className="absolute top-4 left-5">
                  <FaMagnifyingGlass></FaMagnifyingGlass>
                </span>
              </div>
              <div>
                <button className=" btn bg-[#0BE58A] text-xl rounded-full">
                  <FaUserCircle></FaUserCircle>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="text-white font-lexend">
        <div className=" w-full rounded-3xl h-auto md:h-[450px] lg:h-[600px] bg-[url(https://i.ibb.co/FW2K9bh/Rectangle-1.png)]  image-full">
          <div className="flex w-full h-full text-center px-4 md:px-20 lg:px-40 flex-col justify-center pt-5 md:pt-10 items-center space-y-3 md:space-y-5 lg:space-y-10">
            <h2 className=" text-3xl md:text-4xl lg:text-6xl font-bold font-lexend">
              Discover an exceptional cooking class tailored for you!
            </h2>
            <p>
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row gap-5">
              <button className="rounded-3xl  btn w-30 md:w-40 lg:w-40 py-4 bg-[#0BE58A] text-black">
                Explore Now
              </button>
              <span className="border-2 w-40 md:w-40 lg:w-40 border-black rounded-3xl px-5 py-4 text-white">
                Our Feedback
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
