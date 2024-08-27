import React from "react";

const Booking = () => {
  return (
    <div className="flex">
      <div className="hidden md:flex h-[75vh] md:h-[82.25vh] w-full md:w-[40vw] ml-0 flex-shrink-0">
        <img
          src="./HomeImage.png"
          alt="Home"
          className="h-full w-full object-cover p-4 md:p-0"
        />
      </div>
      <div className="w-full h-auto md:h-[82.25vh] flex justify-center items-center mt-[0px]">
  <form className="text-[15px] font-[Klee One] justify-center items-center w-full max-w-lg px-6">
    <h2 className="text-xl mt-3 mb-4 font-semibold">Book Model</h2>
    <div className="space-y-4 md:space-y-1">
      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Select Date*</label>
        <input
          type="date"
          required
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Select Time*</label>
        <input
          type="time"
          required
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Photographer's Name</label>
        <input
          type="text"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Email Address</label>
        <input
          type="email"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Phone Number</label>
        <input
          type="tel"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Shooting Place*</label>
        <input
          type="text"
          required
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Shooting Location*</label>
        <input
          type="text"
          required
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Meeting Point*</label>
        <input
          type="text"
          required
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Shooting Concept</label>
        <input
          type="text"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Clothing Type</label>
        <input
          type="text"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Shoes Type</label>
        <textarea
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Items Type</label>
        <input
          type="text"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Make Up Type</label>
        <input
          type="text"
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center">
        <label className="sm:w-1/3 w-full text-gray-700">Others</label>
        <textarea
          className="sm:w-2/3 w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex md:ml-[9.5vw] pt-2 sm:mb-4 ">
        <button
          type="submit"
          className="w-[50vw]  py-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit Request
        </button>
      </div>
    </div>
  </form>
</div>


    </div>
  );
};

export default Booking;
