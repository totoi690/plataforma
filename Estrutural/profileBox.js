import { useUser } from "@auth0/nextjs-auth0";
import React from 'react'

const GetUserInfo = () => {
  const { user } = useUser()

    if (user) {
      return(
    <div className="profileBoxDiv" onClick={() => {}}>
      <div className="profileIconDiv">
        <img className="profileIcon" src={user.picture} alt={user.name} />
      </div>
      <div className="profileBoxInfo">
        {user.name !== user.email ? <><strong>Nome:</strong> {user.name} <br/></> : null}
        <strong>Email:</strong> {user.email}
        </div>
    </div>
      )
    } else return null

};

export default GetUserInfo;