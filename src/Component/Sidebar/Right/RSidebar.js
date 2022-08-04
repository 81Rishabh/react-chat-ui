import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { users } from "../../../data/users";
import Avatar from "../../Avatar/Avatar";
import "./RSidebar.scss";

function RSidebar() {
  const [user, setuser] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    handleProfile();
  }, [userId]);

  function handleProfile() {
    //  useId -> coming from url  params
    let user = users.filter((user) => user.id === userId);
    setuser(user);
  }

  return (
    <aside className="right-sidebar">
      <h4 className="right-title">Profile</h4>
      <header>
        {user[0] && (
          <React.Fragment>
            <Avatar img_url={user[0].img_url} size="100" />
            <p className="name">{user[0].name}</p>
          </React.Fragment>
        )}
      </header>
    </aside>
  );
}

export default RSidebar;
