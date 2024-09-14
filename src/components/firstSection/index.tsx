import Image from "next/image"
import { FirstSectionStyled, ButtonStyled, VpnHeaderStyled, VpnLocationStyled, VpnIconStyled } from "./styled"

export const FirstSection = () => {

    return (
        <FirstSectionStyled>
            <h2>Access <span>everything securely</span> with VPN</h2>
                    <Image
                        src='/images/man.png'
                        alt='webPage'
                        width={428}
                        height={209}
                        sizes="100vh"
                        priority
                    />
            <ButtonStyled>Get VPN</ButtonStyled>
            <Image
                src='/images/30m.png'
                alt='webPage'
                width={136}
                height={42}
                sizes="100vh"
            />
                <VpnHeaderStyled>
                    <VpnLocationStyled>
                        <VpnIconStyled>
                            <Image
                            src='/images/location.png'
                            alt='webPage'
                            width={24}
                            height={24}
                            sizes="100vh"
                        />
                        </VpnIconStyled> 50+ Locations
                    </VpnLocationStyled>
                    <Image
                        src='/images/separator.png'
                        alt='webPage'
                        width={2}
                        height={32}
                        sizes="100vh"
                    />
                    <VpnLocationStyled>
                        <VpnIconStyled>
                            <Image
                                src='/images/shared.png'
                                alt='webPage'
                                width={24}
                                height={24}
                                sizes="100vh"
                            />
                            ️</VpnIconStyled> 1000+ Servers
                    </VpnLocationStyled>
                </VpnHeaderStyled>
                <p> VPN-your <span>ultimate</span> solution for a private and secure online experience!</p>
        </FirstSectionStyled>
    )
}
