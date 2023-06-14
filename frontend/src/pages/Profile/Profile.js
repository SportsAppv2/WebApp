import React, { useEffect, useRef } from "react";
import Header from "../../components/Home/Header/Header";
import LeftBar from "../../components/Profile/LeftBar.js";
import RightBar from "../../components/Profile/RightBar.js";
import FeedHeader from "../../components/Profile/FeedHeader.js";
import Feed from "../Room/Feed.js";
import EditProfile from "../../components/Profile/EditProfile";
import { BsFillPencilFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFollowProfile,
  fetchUnfollowProfile,
  userProfileActions,
} from "../../store/userProfileSlice";
import {
  fetchUserDataInitial,
  fetchUserProfile,
} from "../../store/editProfileSlice";
import { roomPostsActions } from "../../store/roomPostsSlice";
import { useParams } from "react-router-dom";
import { modalActions } from "../../store/modalSlice";
import WarningModal from "../../components/Helpers/WarningModal";
import Follow from "../../components/Profile/Follow";

const Profile = () => {
  const data = useSelector((state) => state.userProfile); //login owner user profile
  const userProfileData = useSelector((state) => state.editProfile);
  const userName = useSelector((state) => state.editProfile.userName); //user name of the current Profile user
  const userId = useSelector((state) => state.editProfile.userId); //userId of the active Profile Page user
  const warningModalData = useSelector((state) => state.modal);
  const { user } = useParams(); //user name of the current Profile user
  console.log("User Name is ", data.user.userId, userProfileData);
  const dispatch = useDispatch();
  const scrollableDiv = useRef("");
  const toggle = () => {
    dispatch(userProfileActions.toggleEditProfile());
  };
  useEffect(() => {
    if (!user) {
      dispatch(fetchUserDataInitial());
    } else if (user) {
      dispatch(fetchUserProfile({ user }));
    }
  }, [user]);
  useEffect(() => {
    if (warningModalData.button.mainBtn) {
      modalActions.resetButtons();
      dispatch(fetchUnfollowProfile({ followedUserId: userId }));
    }
  }, [warningModalData.button.mainBtn]);
  const handleScroll2 = () => {
    const node = scrollableDiv.current;
    if (node) {
      const { scrollTop, clientHeight, scrollHeight } = node;
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        dispatch(roomPostsActions.togglePageEndReached(true));
      }
    }
  };
  console.log(userProfileData);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div
        className="flex flex-grow h-full bg-[#000000] overflow-y-scroll"
        onScroll={() => {
          handleScroll2();
        }}
        ref={scrollableDiv}
      >
        <LeftBar />
        <div className="body w-[70%] h-fit p-4 border-[#A5A6F6] min-h-[calc(100vh-70px)] border-x-[1px]">
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
              <div className="follow absolute top-[260px] right-[100px] text-[18px]">
                <div className="flex">
                  <div className="flex">
                    <div className="text-white-100 mx-2">
                      {userProfileData.follower.count}
                    </div>
                    <div className="text-gray-600 mr-2 hover:underline cursor-pointer"
                    onClick={() => {dispatch(userProfileActions.openShowFollow())}}>Followers</div>
                  </div>
                  <div className="flex">
                    <div className="text-white-100 ml-2">
                      {userProfileData.following.count}
                    </div>
                    <div className="text-gray-600 mx-2 hover:underline cursor-pointer"
                    onClick={() => {dispatch(userProfileActions.openShowFollow())}}>Following</div>
                  </div>
                </div>
                <div className="followBtn mt-5 text-center">
                  {data.user.userId == userId ? (
                    ""
                  ) : userProfileData.isFollowing ? (
                    <button
                      className="bg-[#5D5FEF] bg-opacity-20 hover:bg-opacity-50 border-2 border-blue-100 text-white-30 px-5 py-[2px] text-[18px] rounded-lg"
                      onClick={() => {
                        console.log("Should unfollow the user now");
                        dispatch(modalActions.toggleShowWarningModal(true));
                      }}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      className="bg-[#5D5FEF] bg-opacity-20 hover:bg-opacity-50 border-2 border-blue-100 text-white-30 px-5 py-[2px] text-[18px] rounded-lg"
                      onClick={() => {
                        dispatch(
                          fetchFollowProfile({ followedUserId: userId })
                        );
                      }}
                    >
                      Follow
                    </button>
                  )}
                  {warningModalData.warningModal.showModal && (
                    <WarningModal
                      heading="Do you want to unfollow this user?"
                      message="Once you unfollow this user, you won't be able to see their posts on your feed."
                      mainBtn="Unfollow"
                    />
                  )}
                </div>
              </div>

              {!user && (
                <div
                  className="absolute top-[330px] right-[30px] cursor-pointer text-gray-600 text-[18px] hover:text-blue-60"
                  onClick={toggle}
                >
                  <BsFillPencilFill />
                </div>
              )}
              {data.showEditProfile && <EditProfile />}
            </div>
            <FeedHeader />
            <Feed
              feedType="profileFeed"
              profileType={user ? "Visiting" : "Own"}
              userId={userProfileData.userOriginal.userId}
              userName={user}
            />
          </div>
        </div>
        <RightBar />
      </div>
      {data.showFollow && <Follow /> }
    </div>
  );
};

export default Profile;
