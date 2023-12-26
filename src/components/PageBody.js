
import AddFriend from "../pages/AddFriend";
import FriendsList from "../pages/FriendsList";
import LoginPage from "../pages/LoginPage";
import { Route,Switch } from "react-router-dom";
import ProtectedPage from "../pages/ProtectedPage";
const PageBody=()=>{
    return(
      
      <Switch>
        <Route path="/" exact>
        <LoginPage/>
        </Route>
        <Route path="/login" exact>
        <LoginPage/>
        </Route>
        <Route path="/friends" exact>
          <ProtectedPage>
             <FriendsList/>
          </ProtectedPage>
        </Route>
        <Route path="/friends/add" exact>
        <ProtectedPage>
             <AddFriend/>
          </ProtectedPage>
        </Route>
        <Route path="*">
          <h2>404 SAYFA BULUNAMADI</h2>
        </Route>
      </Switch>
    )
    

    
}
export default PageBody;