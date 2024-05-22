import { Avatar } from "@mui/material";
import React from "react";

import SchoolIcon from '@mui/icons-material/School';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import UsbIcon from '@mui/icons-material/Usb';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';

function Suggestions() {
  const handleTechSupportClick = () => {
    window.location.href = 'https://www.bates.edu/accessible-education-student-support/assistive-technology/technical-support/';
  };

  const handleRideshareClick = () => {
    window.location.href = 'https://www.bates.edu/campus-safety/crime-preventionsafety-programs/personal-safety-programs/student-safety-program/';
  };

  const handleBestClassesClick = () => {
    window.location.href = 'https://www.ratemyprofessors.com/school/87';
  };

  const handleEventsClick = () => {
    window.location.href = 'https://www.bates.edu/about/calendars-and-key-dates/';
  };

  const handleAthleticsClick = () => {
    window.location.href = 'https://gobatesbobcats.com/';
  };

  const handleTutoringClick = () => {
    window.location.href = 'https://www.bates.edu/student-academic-support-center/';
  };

  const handleReadingClick = () => {
    window.location.href = 'https://www.nytimes.com/books/best-sellers/';
  };

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/marketplace/114128585264618/';
  };

  
  return (
<div className="mt-8 mr-5 py-4 px-6 bg-red-800 rounded-lg">
  <div className="text-black font-bold text-lg mb-5">Popular Forums</div>
  <div className="flex flex-col justify-between items-center mt-6 pb-2 border-b border-gray-300">
        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <SchoolIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Best Classes @ Bates</span>
              <span className="text-sm text-black">Last Updated 23 min ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleBestClassesClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <StorefrontIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Marketplace</span>
              <span className="text-sm text-black">Last Updated 4 hrs ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleFacebookClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <DirectionsCarIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Rideshares</span>
              <span className="text-sm text-black">Last Updated 1 wk ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleRideshareClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <UsbIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Tech Support</span>
              <span className="text-sm text-black">Last Updated 6 days ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleTechSupportClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <EventAvailableIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Events</span>
              <span className="text-sm text-black">Last Updated 2 min ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleEventsClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <SportsFootballIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Athletics</span>
              <span className="text-sm text-black">Last Updated 2 days ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleAthleticsClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center mt-6 pb-2 border-b border-gray-300">
          <div className="inline-flex items-center">
            <span className="avatar">
              <AutoStoriesIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Good Reads</span>
              <span className="text-sm text-black">Last Updated 3 wks ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleReadingClick}>Enter Forum</button>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="inline-flex items-center">
            <span className="avatar">
              <PeopleIcon/>
            </span>
            <div className="flex flex-col ml-3">
              <span className="font-semibold text-base text-black">Tutoring</span>
              <span className="text-sm text-black">Last Updated 5 days ago</span>
            </div>
          </div>
          <button className="text-black font-bold bg-red-800 border border-white py-1 px-3 rounded transition duration-300 hover:bg-white hover:text-red-800" onClick={handleTutoringClick}>Enter Forum</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
