import React from "react";
import { useHistory } from "react-router-dom";

function SidebarArea({ title, id }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/home/${id}`);
    } else {
      history.push(title);
    }
  };

  return (
    <div className="sidebarArea" onClick={selectChannel}>
      {(title = <p>{title}</p>)}
    </div>
  );
}

export default SidebarArea;
