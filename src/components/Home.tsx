import ProfileCard from "./ProfileCard";
import { CgProfile } from "react-icons/cg";
import { MdDriveFileRenameOutline, MdOutlinePassword } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5 ">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden flex flex-col gap-2 justify-center items-center min-h-[70vh]"
        style={{ maxWidth: "1000px" }}
      >
        <ProfileCard
          profilePic="https://avatars.githubusercontent.com/u/113108193?s=400&u=eaf0cc5bc65ca5ae400a648859b3aa9f7800ca3d&v=4"
          userName="Puskar Roy"
          email="puskarroy600@gmail.com"
        />
        <input
          className="w-full max-w-sm px-4 py-3 rounded-xl"
          placeholder="Enter Room Id"
        />
        <button className="w-full max-w-sm px-4 py-3 text-white rounded-xl bg-indigo-500 hover:bg-indigo-700">
          Join Room
        </button>
        <p className="mt-[20px] sm:mt-[30px]">
          Dont have an room id?{" "}
          <span className="text-indigo-500">New Room</span>
        </p>
      </div>
      <div className="absolute bottom-0 sm:top-0 py-4 w-screen ">
        <ul className="flex justify-between items-center w-[80%] sm:w-[25%] mx-auto  flex-row">
            <li className="text-3xl cursor-pointer"><CgProfile/></li>
            <li className="text-3xl cursor-pointer"><MdDriveFileRenameOutline/></li>
            <li className="text-3xl cursor-pointer"><MdOutlinePassword/></li>
            <li className="text-3xl cursor-pointer"><IoMdLogOut/></li>
        </ul>
      </div>
    </div>
  );
}

export default Home
