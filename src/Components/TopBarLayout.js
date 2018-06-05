import React from "react";

import TopBar from "./TopBar";

const TopBarLayout = props => (
  <div className="top-bar-layout">
    <TopBar />
    {props.children}
  </div>
);

export default TopBarLayout;
