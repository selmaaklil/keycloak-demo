import React from "react";
import { isLoggedIn, hasRole } from "../services/KeyCloak";

const Private = () => {
  const LoggedIn = () => {
    return(
      <>
        <div>Logged In</div>
        {hasRole(['admin']) && (<div>Is an admin</div>)}
      </>
    )
  }
  if (isLoggedIn()) {
    return (
      <LoggedIn />
    );
  } else {
    return <>Not authorised</>;
  }
};

export default Private;
