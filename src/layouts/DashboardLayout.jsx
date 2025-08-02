import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import DashTopBar from '../components/DashTopBar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSideBar = () =>{ 
   setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="h-screen flex flex-col bg-deep-blue">
      <DashTopBar toggleSidebar={handleOpenSideBar} />
      <div className="flex-1 flex">
        <Sidebar isOpen={sidebarOpen} sideBarShown={handleOpenSideBar} />
        <main className="lg:ml-72 mt-24 w-full p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
