/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AutoContext =createContext();
const baseUrl = "http://localhost:9000/api/";
export default function AutoContextProvider({children}){
   
    const [loginUser,setLoginUser]=useLocalStorage({},"friendsProject");
    const instance = axios.create({
        baseURL:baseUrl ,
        timeout: 1000,
        headers: {authorization: loginUser.token,}
      });

    const loginAxios=(data)=>{
         axios
         .post(`${baseUrl}login`,data)
         .then((res)=>{
             console.log("data22",res.data);
            setLoginUser(res.data)
         })
         .catch((err)=>{
             console.log(err.message);
         })

    }
    const logout=()=>{
        setLoginUser({});
        instance
        .post("logout")
        .then((res)=>{
            console.log("çıkış yapıldı",res);
        })
        .catch((err)=>{
            console.log("bir sorun oluştu",err);
        })
    }
    return<AutoContext.Provider value={{logout,loginUser,loginAxios,instance}}>
           {children}
    </AutoContext.Provider>
}

