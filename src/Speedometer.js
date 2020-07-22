import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Speedometer(props) {
        return (
            <Svg height={150} viewBox="0 0 501.173 501.173" width={150} {...props}>
                    <Path
                        d="M482.039 232.011l-115.714 47.96a125.148 125.148 0 00-27.203-40.601l88.612-88.612a248.994 248.994 0 0154.305 81.253z"
                        fill="#f7be56"
                    />
                    <Path
                        d="M501.173 327.932H375.867a123.689 123.689 0 00-9.541-47.96l115.714-47.96a249.054 249.054 0 0119.133 95.92z"
                        fill="#e56353"
                    />
                    <Path
                        d="M501.173 327.932a249.593 249.593 0 01-19.134 95.92l-115.714-47.96c6.318-15.2 9.56-31.5 9.541-47.96z"
                        fill="#d15241"
                    />
                    <Path
                        d="M134.796 375.892L18.98 423.852A250.52 250.52 0 010 327.932h125.255a124.632 124.632 0 009.541 47.96z"
                        fill="#44c4a1"
                    />
                    <Path
                        d="M427.735 150.707l-88.612 88.612a125.766 125.766 0 00-40.601-27.203l47.96-115.765a251.666 251.666 0 0181.253 54.356z"
                        fill="#fcd462"
                    />
                    <Path
                        d="M250.561 77.321v125.306a124.552 124.552 0 0147.96 9.49l47.96-115.765a250.492 250.492 0 00-95.92-19.031z"
                        fill="#2d93ba"
                    />
                    <Path
                        d="M250.561 77.321v125.306a124.552 124.552 0 00-47.96 9.49l-47.96-115.765a250.309 250.309 0 0195.92-19.031z"
                        fill="#27a2db"
                    />
                    <Path
                        d="M202.601 212.117A124.027 124.027 0 00162 239.371l-88.612-88.612a251.222 251.222 0 0181.203-54.406z"
                        fill="#d5d6db"
                    />
                    <Path
                        d="M134.796 279.972a123.67 123.67 0 00-9.541 47.96H0a249.89 249.89 0 0118.981-95.92z"
                        fill="#3ea69b"
                    />
                    <Path
                        d="M162 239.371a124.98 124.98 0 00-27.203 40.601l-115.816-47.96a250.169 250.169 0 0154.406-81.203z"
                        fill="#e1e6e9"
                    />

            </Svg>
        )
}
