import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { useState } from "react";
import { RegisterParams } from "../types";

const Registration = () => {
  const data: RegisterParams = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  const [inputvalue, setinputvalue] = useState(data);
  const [isempty, setisempty] = useState<boolean>(true);
  const [isvalid, setisvalid] = useState<boolean>(true);
  const [isloading, setisloading] = useState<boolean>(false);
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const onclik = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      emailRegex.test(inputvalue.email) &&
      inputvalue.password.length > 8 
     
    ) {
      setisvalid(true);
      setisloading(true);
    } else {
      setisvalid(false);
      if( inputvalue.firstname.length != 0 &&
        inputvalue.password.length != 0 && inputvalue.email.length!=0 &&inputvalue.lastname.length!=0){
          setisempty(false)
        }
        else{
          setisempty(true)
        }
      
    }
  };
  return (
    <>
      {isloading ? (
        <Loading></Loading>
      ) : (
        <>
          <div
            id="body"
            className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
          >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="mx-auto h-10 w-auto text-center">
                <i className="fas fa-comment-dots fa-3x text-indigo-600"></i>
                <h2 className="text-gray-800 font-semibold text-2xl">
                  B-tech-Store
                </h2>
              </div>
              <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                Set up your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" id="login-form">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    firstname
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="firstname"
                      type="text"
                      value={inputvalue.firstname}
                      onChange={onchange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      lastname
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={inputvalue.lastname}
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
                      className="block text-sm font-medium leading-6 text-gray-900"
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
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={inputvalue.password}
                      onChange={onchange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {isvalid ? (
                  <div> </div>
                ) : (
                  <div
                    id="error"
                    role="alert"
                    className="alert alert-error mt-3 h-11 flex items-center justify-center bg-red-600 text-white  rounded-md"
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
                    {isempty? <span id="contenterror" className="text-sm font-medium">
                     
                     fill out the field inputs
                   </span>: <span id="contenterror" className="text-sm font-medium">
                     
                     invalid email or password
                   </span>}
                   
                  </div>
                )}

                <div>
                  <button
                    onClick={onclik}
                    id="signin"
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link
                  to={"/Registration"}
                  className="text-md font-semibold text-muted-foreground text-blue-600 hover:text-black"
                >
                  sign up
                </Link>
              </p>
            </div>
          </div>

          <div id="loader" className="text-indigo-700"></div>
          <div id="divider" className="divider mt-28"></div>
        </>
      )}
    </>
  );
};
export default Registration;
