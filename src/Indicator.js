import * as React from "react"
import Svg, { Path } from "react-native-svg"

/*export function Indicator(props) {
    return (
        <Svg height={100} viewBox="0 0 501.173 501.173" width={100} {...props}>
            <Path
                d="M250.003 380.866l130.026-179.255a3.431 3.431 0 10-5.075-4.619L201.839
                333.108a7.816 7.816 0 00-.711 11.724l36.998 36.947a7.815 7.815 0
                0011.052.046c.302-.297.578-.617.825-.959z"
                fill="#e1e6e9"
            />
        </Svg>
    )
}*/


/*export function Indicator(props) {
    return (
        <Svg height={512} viewBox="0 0 501.173 501.173" width={512} {...props}>
            <Path
                d="M250.003 380.866l130.026-179.255a3.431 3.431 0 10-5.075-4.619L201.839 333.108a7.816 7.816 0 00-.711 11.724l36.998 36.947a7.815 7.815 0 0011.052.046c.302-.297.578-.617.825-.959z"
                fill="#e1e6e9"
            />
        </Svg>
    )
}*/

export function Indicator(props) {
    return (
        <Svg
            height={180}
            viewBox="0 0 512 512"
            width={180}
            data-name="Layer 1"
            {...props}
        >
            <Path
                d="M256 153.31l24.02 117.45a25.266 25.266 0 00-48.04 0z"
                fill="#6d7486"
            />
            <Path
                d="M280.02 270.76A25.266 25.266 0 11256 253.33a25.093 25.093 0 0124.02 17.43z"
                fill="#d4e1f4"
            />
        </Svg>
    )
}
//"#6d7486"
//"#d4e1f4"
