import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SignedIn>
        <div className="flex h-screen">
          <Sidebar />
          <Outlet />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Layout;
