import Asher from "../assets/images/img1.jpg";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="flex-auto p-7 mb-7 sm:mb-20 sm:px-14">
      <div className="flex sm:mt-7 mb-24">
        <div className="font-black text-4xl sm:text-6xl">PROFILE</div>
        <div className="flex-auto border-b-4 mb-2 ml-2"></div>
      </div>
      <div className="border-2 border-[#E5245A] rounded-[20px] p-4 my-4 mx-4 h-auto w-auto">
          <div className="flex items-center justify-center">
          <div className="font-montserrat font-bold text-1xl p-4">Edit profile</div>
          </div>
          <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 w-full flex justify-center">
          <div className="relative h-48 w-auto p-3">
            <img
              className="w-auto h-full"
              src={Asher}
              alt="Profile"
            />
            <button className="absolute w-8 h-8 bg-[#E5245A] rounded-full transform translate-y-[-16px] translate-x-[-16px] flex justify-center items-center">
  <span className="text-white text-2xl">+</span>
</button>

        </div>
            </div>
            <div className="lg:w-3/4 w-full lg:flex-shrink-0 lg:pl-4">
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="number"
                >
                  Contact No.
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="number"
                  placeholder="+919778653198"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="text"
                  id="address"
                  placeholder="karicode kollam"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-lg font-bold text-gray-600"
                  htmlFor="study"
                >
                  Year of Study
                </label>
                <input
                  className="w-full bg-gray-800 border border-gray-300 rounded-md p-2"
                  type="year"
                  id="study"
                  placeholder="2025"
                />
              </div>
              <div className="flex justify-end mt-6 mb-4">
              <button className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg mr-4">Save</button>
              <button className="bg-black border-2 border-[#E5245A] text-white px-4 py-2 rounded-lg "><Link to='/profilepage' onClick={()=> setVisible(false)}>Cancel</Link></button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default EditProfile;