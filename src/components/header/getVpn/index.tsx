import { GetVpnStyled } from "./styled"
import Link from "next/link";

export const GetVpnHeader = () => {
    return (
        <GetVpnStyled>
            <Link href="#getVpnId">
                <p>Get VPN</p>
            </Link>

        </GetVpnStyled>
    )
}
