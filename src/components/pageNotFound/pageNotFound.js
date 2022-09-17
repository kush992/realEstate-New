import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { APP_URL } from "../../common/utility";

const PageNotFound = () => {

  const history = useHistory();  
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const seconds = 1000;

    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, seconds);

    return () => clearInterval(interval);
  }, [timer]);

  if(timer < 1) history.push(APP_URL.main);

  return (
    <div className="text-align__center">
      <p>Page that you have requested is not found.</p>
      <p>Taking you home in {timer}...</p>
    </div>
  );
}

export default PageNotFound;
