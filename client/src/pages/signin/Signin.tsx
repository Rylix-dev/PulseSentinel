import { SignIn as SignInComp } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignInComp forceRedirectUrl={import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
    </div>
  );
};

export default Signin;
