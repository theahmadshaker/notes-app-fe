import { useState } from "react";

// Functions
import enterAccount from "../utils/enterAccount";
import isValidEmail from "../utils/isValidEmail";

const Authentication = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-1/4">
        <div className="flex flex-col items-center justify-center w-full h-auto space-y-16">
          <h1 className="text-7xl font-semibold text-black select-none">
            Noterize
          </h1>
          <div className="w-full flex flex-col items-end justify-start space-y-2">
            <div className="w-full ">
              <input
                type="email"
                className="h-10 w-full first:rounded-t-lg last:rounded-b-lg border border-gray-300 px-4 py-1 focus:outline-none shadow-xl placeholder:font-medium text-sm"
                placeholder="Email"
                value={emailValue}
                onChange={(event) => {
                  setEmailValue(event.target.value);
                }}
              />
              <input
                type="password"
                className="h-10 w-full first:rounded-t-lg last:rounded-b-lg border border-gray-300 px-4 py-1 focus:outline-none shadow-xl placeholder:font-medium text-sm"
                placeholder="Password"
                value={passwordValue}
                onChange={(event) => {
                  setPasswordValue(event.target.value);
                }}
              />
            </div>
            <p className="text-xs text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>
          <div className="flex flex-col items-end justify-start space-y-2 w-full">
            <button
              className="w-full h-10 rounded-lg bg-black text-white font-semibold hover:opacity-80 duration-300"
              onClick={() => {
                isValidEmail(emailValue) &&
                  enterAccount(emailValue, passwordValue);
              }}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
