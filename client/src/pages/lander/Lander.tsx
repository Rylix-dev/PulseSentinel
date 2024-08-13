import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";

const Lander = () => {
  return (
    <div className="">
      <div className="flex justify-between py-5 px-10 items-center">
        <div className="flex gap-5 items-center">
          <img
            src="/logo-icon.png"
            className="w-[30px] cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          />
          <p className="text-xl font-gloock">Pulse Sentinel</p>
          <p className="ml-5 text-sm hover:opacity-80 cursor-pointer transition-all duration-200">
            Pricing
          </p>
        </div>

        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              onClick={() => {
                window.location.href = "/sign-in";
              }}
            >
              Sign In
            </Button>
          </SignedOut>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col h-[85vh]">
        <h1 className="text-7xl w-[50vw] text-center font-bold font-gloock">
          Get notified when your website goes down
        </h1>
        <p className="mt-5 opacity-50">
          Reduce downtime, increase uptime, and improve your website's
          performance.
        </p>

        <Button
          className="mt-10"
          onClick={() => {
            window.location.href = "/sign-in";
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Lander;
