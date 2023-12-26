import { useContext } from "react";
import { AutoContext } from "../contexts/AutoContexts";

const Header = () => {
const {logout}=useContext(AutoContext)
  return (
    <div className=" items-center border-solid border-black border-b-[5px] p-[25px] flex justify-between">
      <h2 className=" text-black font-extrabold text-[50px]">FRIENDS DATABASE</h2>
      <nav >
        <a href="/login" className=" cursor-pointer mr-2.5 bg-black text-white p-[20px] text-2xl font-bold">LOGIN.</a>
        <a href="/friends" className=" cursor-pointer mr-2.5 bg-black text-white p-[20px] text-2xl font-bold">FRENDLIST.</a>
        <a href="/friends/add" className=" cursor-pointer mr-2.5 bg-black text-white p-[20px] text-2xl font-bold">ADDFRIEND.</a>
        <a onClick={()=>logout()} className=" cursor-pointer mr-2.5 bg-black text-white p-[20px] text-2xl font-bold">LOGOUT.</a>
      </nav>
    </div>
  );
};

export default Header;
