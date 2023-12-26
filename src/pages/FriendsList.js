import { useContext, useEffect, useState } from "react"
import { AutoContext } from "../contexts/AutoContexts"


const FriendsList=()=>{
    const {instance}=useContext(AutoContext)
    const [friend,setFriend]=useState([])
    useEffect(()=>{
        instance
        .get("friends")
        .then((res)=>{
           setFriend(res.data);
        }) 
    },[])
 return<>
    <h1>Friends List</h1>
    { friend.map((item,index)=>{
        return <div key={index}>
            {item.name}-{item.email}
        </div>
    })

    }
 </>
}

export default FriendsList 