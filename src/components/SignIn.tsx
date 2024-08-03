import { Link } from "react-router-dom";
import Button from "./Reusable-Code/Button";
import InputField from "./Reusable-Code/InputField";
import ShowPassword from "./Reusable-Code/ShowPassword";

function SignIn() {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top when component mounts
  // }, []); // Empty dependency array to ensure it only runs once

  return (
    <div className="lg:overflow-hidden font-pop lg:h-screen text-gray-500">
      {/* Container */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between lg:w-full text-gray-900">
        {/* Side Image */}
        <div className="image lg:w-1/2 xl:w-2/3 hidden lg:block h-screen bg-cover bg-center lg:overflow-hidden"></div>
        {/* The Signup page */}
        <div className="lg:w-1/2 xl:w-1/3 p-10 lg:p-20 flex flex-col justify-center ">
          <div className="flex justify-end mb-4">
            <caption className="text-sm">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-[#a1812e]">
                Sign Up!
              </Link>
            </caption>
          </div>
          <div className="pt-20 flex flex-col">
            <h1 className="pb-2 font-bold text-gray-700 text-4xl">Sign In</h1>
            <caption className="flex">Fill in your details to sign in</caption>
            <form action="">
              <div className="pt-5">
                <div className="mb-10">
                  <InputField
                    labelText="User ID:"
                    id="userID"
                    type="text"
                    divClassName="my-4"
                    className="inputField"
                  />
                  <ShowPassword
                    labelText="Password:"
                    id="password"
                    className="inputField"
                  />
                </div>

                <div onClick={()=>{}} className="mb-6">
                  <Button  label="Sign In" className="group btn" arrow={true}  />
                </div>

                <div className="pt-4 flex">
                  <caption className="">
                    Forget your password?{" "}
                    <Link to={"/forget"} className="text-[#a1812e]">
                      Reset Now!
                    </Link>
                  </caption>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
