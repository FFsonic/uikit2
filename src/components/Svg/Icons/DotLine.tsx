
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="850 0 300 200" {...props}>
    
    <line x1="0" x2="3000" y1="100" y2="100" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeDasharray="1, 45"/>
</Svg>
);

export default Icon;
