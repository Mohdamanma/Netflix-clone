import React, { useEffect, useState } from 'react'
import Movierow from '../Component/Movierow';
import { orginal, action, crime, war, animation } from "../Url"
import AdminHero from '../Component/AdminHero'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Adminpage() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  console.log("user is : " + JSON.stringify(user));

  if (loading) {
    <div className='text-white'>loading.....</div>
  }

  if (!user) {
    navigate('/login');
  }

  else {
    return (
      <div className='w-full h-full'>
        <AdminHero />
        <div className='flex flex-col mb-16 mt-11 '>
          <Movierow url={orginal} title="Netflix Orginal" />
          <Movierow url={action} title="Action" />
          <Movierow url={crime} title="crime" />
          <Movierow url={war} title="Action" />
          <Movierow url={animation} title="Animation" />



        </div>

      </div>

    )
  }
}

export default Adminpage