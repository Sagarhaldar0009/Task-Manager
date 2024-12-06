"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
// import { httpAxios } from '@/helper/httpHelper';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}) => {

    // user variable -> to store payload or User's full detail
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        async function load(){
            try {
                // Using API, to get the LoggedIn User's Detail
                const currentUserDetails = await currentUser();
                console.log("LoggedIn User's Data (Payload)-> ",currentUserDetails);
                setUser({ ...currentUserDetails });
            } catch (error) {
               console.log(error);
            //    toast.error("Error in Loading current user");
               setUser(undefined);
            }
        }
        load();
    },[]);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider