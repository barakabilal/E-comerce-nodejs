import { useState } from "react";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Contactparams } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuccessMessage from "../components/ui/SuccessMessage";

const Contactpage = () => {
  const data: Contactparams = {
    email: "",
    name: "",
    message: "",
  };
  const [inputvalue, setinputvalue] = useState(data);
  const [isempty, setisempty] = useState<boolean>(false);
  const [isvalid, setisvalid] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  //create a function that clear input after sending the message
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;
  const onchange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  let helpvar = true;
  const onclik = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    helpvar = false;
    if (
      inputvalue.name.length != 0 &&
      inputvalue.message.length != 0 &&
      inputvalue.email.length != 0
    ) {
      setisempty(false);
      if (emailRegex.test(inputvalue.email)) {setisvalid(true);
      setOpen(true);
  setTimeout(() => setOpen(false), 3000);}
      else {
        setisvalid(false);
      }
    } else {
      setisempty(true);
    }
  };

  return (
    <div className="h-screen w-full m-3 bg-slate-800">
      <div
        id="body"
        className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto h-10 w-auto text-center">
            <i className="fas fa-comment-dots fa-3x text-indigo-600"></i>
            <h2 className="text-white font-semibold text-2xl">
              B-tech-Store
            </h2>
            {open?<SuccessMessage open={open}></SuccessMessage>:<div></div>}
          </div>

          <h2 className="mt-10 text-center text-xl text-orange-300 font-bold leading-9 tracking-tigh">
            contact us <FontAwesomeIcon icon={faPhone} className="text-orange-300 " />

          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" id="login-form">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="name"
                  type="text"
                  value={inputvalue.name}
                  onChange={onchange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mohamed@234"
                  value={inputvalue.email}
                  onChange={onchange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  message
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="text"
                  name="message"
                  placeholder="write your message here"
                  value={inputvalue.message}
                  onChange={onchange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-36"
                />
              </div>
            </div>
            <div>
              {isempty ? (
                <div
                  id="error"
                  role="alert"
                  className="alert alert-error mt-3 mb-3 h-11 flex items-center justify-center bg-red-600 text-white  rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span id="contenterror" className="text-sm font-medium ">
                    fill out the field inputs
                  </span>
                </div>
              ) : isvalid && helpvar ? (
                <div></div>
              ) : (
                <div
                  id="error"
                  role="alert"
                  className="alert alert-error mt-3 mb-3 h-11 flex items-center justify-center bg-red-600 text-white  rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span id="contenterror" className="text-sm font-medium ">
                    incorrect email forme
                  </span>
                </div>
              )}
              <button
                onClick={onclik}
                id="signin"
                type="submit"
                className="flex w-full justify-center rounded-md border-bg-white/10 backdrop-blur-md border border-white/20  bg-white/20 rounded-2xl overflow-hidden px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-2xl hover:bg-orange-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div id="loader" className="text-indigo-700"></div>
      <div id="divider" className="divider mt-28"></div>
    </div>
  );
};
export default Contactpage;
