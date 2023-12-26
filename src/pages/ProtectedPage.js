import { useContext } from "react"
import { AutoContext } from "../contexts/AutoContexts"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"

const ProtectedPage=({children,...rest})=>{
   const {loginUser}=useContext(AutoContext)
  
   return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );

}
export default ProtectedPage;