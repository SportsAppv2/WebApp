import React, { useEffect } from "react";
import Header from "../../components/Home/Header/Header";
import LeftBar from "../../components/Profile/LeftBar.js";
import RightBar from "../../components/Profile/RightBar.js";
import FeedHeader from "../../components/Profile/FeedHeader.js";
import Feed from "../Room/Feed.js";
import EditProfile from "../../components/Profile/EditProfile";
import { BsFillPencilFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { userProfileActions } from "../../store/userProfileSlice";
import { fetchUserDataInitial } from "../../store/editProfileSlice";

const Profile = () => {
  const data = useSelector((state) => state.userProfile);
  const userProfileData = useSelector((state) => state.editProfile);
  const userName = useSelector((state) => state.editProfile.userName);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(userProfileActions.toggleEditProfile());
  };
  useEffect(() => {
    dispatch(fetchUserDataInitial());
  }, []);
  console.log(userProfileData);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow h-full bg-[#000000] overflow-y-scroll">
        <LeftBar />
        <div className="body w-[70%] h-fit p-4 border-gray-600 border-x-[1px]">
          <div className="content">
            <div className="relative">
              <div className="cover h-[200px]">
                <img
                  src="https://i.pinimg.com/originals/41/95/a7/4195a7a378a0677d4952320b056da6ee.jpg"
                  alt="cover-pic"
                  className="h-[100%] w-[100%] object-cover"
                />
              </div>
              <div className="dp rounded-full h-[150px] w-[150px] absolute top-[150px] left-[30px]">
                <img
                  src="https://www.whoa.in/download/cristiano-ronaldo-back-view-wallpaper"
                  alt="profile-pic"
                  className="h-[100%] w-[100%] object-cover rounded-full"
                />
              </div>
              <div className="flex items-center text-white-100 font-bold text-[20px] mt-[120px] mx-5">
                <div className="p-2">
                  {userProfileData.userOriginal.firstName}{" "}
                  {userProfileData.userOriginal.lastName}
                </div>
                <div className="p-2 text-gray-600">@{userName}</div>
              </div>
              <div className="flex items-center text-gray-400 text-[16px] font-medium mx-5">
                <GoLocation className="mx-2" />
                <div>
                  {userProfileData.userOriginal.region},{" "}
                  {userProfileData.userOriginal.country}
                </div>
              </div>
              <div className="text-white-100 text-[18px] mx-5 p-2 mt-2">
                {userProfileData.userOriginal.bio}
              </div>
              <div className="follow flex absolute top-[260px] right-[100px] text-[18px]">
                <div className="flex">
                  <div className="text-white-100 mx-2">
                    {userProfileData.follower.count}
                  </div>
                  <div className="text-gray-600 mr-2">Followers</div>
                </div>
                <div className="flex">
                  <div className="text-white-100 ml-2">
                    {userProfileData.following.count}
                  </div>
                  <div className="text-gray-600 mx-2">Following</div>
                </div>
              </div>
              <div
                className="absolute top-[330px] right-[30px] cursor-pointer text-gray-600 text-[18px] hover:text-blue-60"
                onClick={toggle}
              >
                <BsFillPencilFill />
              </div>
              {data.showEditProfile && <EditProfile />}
            </div>
            <FeedHeader />
            <Feed feedType="profileFeed" />
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Profile;
