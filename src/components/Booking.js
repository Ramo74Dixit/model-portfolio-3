import React from "react";

const Booking = () => {
  return (
    <div className="flex">
      <div className="mb-5 ml-0 mt-16">
        <img src="./HomeImage.png" alt="Home"></img>
      </div>
      <div className="ml-auto flex flex-col justify-center items-center w-full">
        <div className="text-xl  font-[Klee One] text-center pl-6">
          <h2 class="text-xl font-semibold mb-4">Book Model</h2>
          <form>
            <div class="space-y-4">
              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Select Date*
                </label>
                <input
                  type="date"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700 ">
                  Select Time*
                </label>
                <input
                  type="time"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Photographer's Name
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700 ">
                  Phone Number
                </label>
                <input
                  type="tel"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700 ">
                  Shooting Place*
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700 ">
                  Shooting Location*
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Meeting Point*
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Shooting Concept
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Clothing Type
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Shoes Type
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700 ">
                  Items Type
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">
                  Make Up Type
                </label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div class="flex items-center">
                <label class="w-1/3 text-gray-700">Others</label>
                <input
                  type="text"
                  class="w-2/3 px-4 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  class="w-[50%] py-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
