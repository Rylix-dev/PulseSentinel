import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp forceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL} />
    </div>
  );
};

export default Signup;
