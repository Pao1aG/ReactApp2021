import React from 'react';
import Searchform from "../components/Searchform";
import EventCard from "../components/EventCard";

import Auth from '../utils/auth';



//FUNCTION TO CREATE SAVED CONCERTS CARDS ..................
const Profile = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    if (!token) {
      return false;
    }

    return (
        <>
        <Searchform />
        <EventCard />
        </>
    );

}

export default Profile;
