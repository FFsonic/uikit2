
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
<Svg viewBox="0 0 24 24" {...props}>
    
<g clipPath="url(#clip0_12510_20348)">
<path fillRule="evenodd" clipRule="evenodd" d="M4.99872 0H19.0003C21.7622 0 24 2.40768 24 5.37792V18.6221C24 21.5923 21.7622 24 19.0013 24H4.99872C2.23776 24 0 21.5923 0 18.6221V5.37792C0 2.40768 2.23776 0 4.99872 0Z" fill="#0052FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.9994 3.47656C16.7073 3.47656 20.5233 7.29256 20.5233 12.0004C20.5233 16.7082 16.7073 20.5242 11.9994 20.5242C7.29159 20.5242 3.47559 16.7082 3.47559 12.0004C3.47559 7.29256 7.29159 3.47656 11.9994 3.47656Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9.90035 9.27539H14.0984C14.444 9.27539 14.7234 9.57683 14.7234 9.94739V14.0514C14.7234 14.4229 14.4431 14.7234 14.0984 14.7234H9.90035C9.55475 14.7234 9.27539 14.422 9.27539 14.0514V9.94739C9.27539 9.57683 9.55571 9.27539 9.90035 9.27539Z" fill="#0052FF"/>
</g>
<defs>
<clipPath id="clip0_12510_20348">
<rect width="24" height="24" rx="8" fill="white"/>
</clipPath>
</defs>
</Svg>
);

export default Icon;
