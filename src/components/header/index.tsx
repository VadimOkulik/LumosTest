import Image from "next/image"
import {HeaderStyled, LogoStyled} from "./styled"
import {GetVpnHeader} from "@/components/header/getVpn";
import Link from "next/link";

export const Header = () => {


    return (
        <HeaderStyled>
            <LogoStyled>
                <Link href="#">
                <Image id="logo" src="/images/logo.png" alt="Lumos" width={0} height={0} sizes="100vh" />
                <p>VPN</p>
                </Link>
            </LogoStyled>

            <GetVpnHeader />
        </HeaderStyled>
    )
}
