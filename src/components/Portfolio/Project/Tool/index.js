import React from "react";

// import styled components
import { ToolBubble } from "./styles";

const Tool = ({ info }) => {
	return <ToolBubble>{info.name}</ToolBubble>;
};

export default Tool;
