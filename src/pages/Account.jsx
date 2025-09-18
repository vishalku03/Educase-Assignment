import React from "react";
import profile from "../assets/profile.png";
import camera from "../assets/camera.png";

const Account = () => {
  return (
    <div className="aspect-[9/16] h-full flex flex-col items-start justify-start bg-[#f7f8f9]">
      <div className="w-full font-semibold text-xl py-6 shadow-xs bg-white p-4">
        Account Settings
      </div>
      <div className="account border-b text-sm border-b-gray-400 border-dashed p-4">
        {/* profile */}
        <div className="flex gap-2 py-4">
          <div className="relative">
            <img
              src={profile}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="absolute bottom-0 rounded-full p-1 bg-[#6c25ff] right-2">
              <img src={camera} alt="Camera" className="w-3 invert h-3" />
            </div>
          </div>
          <div>
            <p className="font-semibold">Marry Doe</p>
            <p className="text-gray-600 text-xs">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="font-semibold text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          possimus sit animi quaerat deleniti necessitatibus, neque nostrum iste
          quia tempora.
        </p>
      </div>
    </div>
  );
};

export default Account;
