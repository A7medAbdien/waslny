import React from "react";
// import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`group button-bg text-black text-lg tracking-tight min-w-30 rounded-full py-5 px-8 uppercase truncate font-semibold outline-none active:scale-105 transition`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <div className="flex">
            <div className="flex flex-col justify-start items-center overflow-hidden h-5">
              <div className="group-hover:-translate-y-full -translate-y-[10%] transition-all duration-500 ease-out">
                Submit{" "}
              </div>
              <div className="group-hover:-translate-y-[120%] transition-all duration-500 ease-out">
                Submit{" "}
              </div>
            </div>
            {/* <FaPaperPlane className="inline-block ml-2 text-lg opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
          </div>
        </>
      )}
    </button>
  );
}
