import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AutoContext } from "../contexts/AutoContexts";
import axios from "axios";


const LoginPage = () => {
    const history=useHistory();

   const {loginAxios}=useContext(AutoContext)

    const {register,handleSubmit}=useForm({
        defaultValues:{
            username:"workintech",
            password:"wecandoit" 
        }
    });
    

    const submitHandle=(data)=>{
           console.log("data:",data);
           history.push("/friends")
        loginAxios(data);
    }
  return (
    <form onSubmit={handleSubmit(submitHandle)} className=" flex items-center flex-col justify-center w-auto">
      <h1 className=" font-extrabold text-[90px]">LOGIN</h1>
      <div className="sm:col-span-4 w-auto mx-4">
        <label
          htmlFor="username"
          className="block  font-extrabold text-[40px] leading-6 text-black"
        >
          Username
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              {...register("userName")}
              className=" text-white flex-1 border-0 bg-black py-1.5 pl-1  focus:ring-0 w-[720px] h-[90px]"
            />
          </div>
        </div>
      </div>
      <div className="sm:col-span-4 m-4">
        <label
          htmlFor="username"
          className="block font-extrabold text-[40px] leading-6 text-black"
        >
          PASSWORD
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="PASSWORD"
              name="username"
              id="username"
              autoComplete="username"
              {...register("password")}
              className=" flex-1 border-0 bg-black py-1.5 pl-1  focus:ring-0 w-[900px] h-[90px] text-white"
            />
          </div>
        </div>
      </div>
      <button type="submit" className=" bg-black text-white text-[25px] px-2 font-extrabold py-4 w-[450px] h-[90px]">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
