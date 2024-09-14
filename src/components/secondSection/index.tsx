import Image from "next/image"
import { SecondSectionStyled, TopBlock, CardStyled, TitleStyled, SubTitleStyled, TextStyled  } from "./styled"
import {secondConfig1, secondConfig2 } from "@/components/secondSection/config";

export const SecondSection = () => {

    return (
        <SecondSectionStyled>
            <TopBlock>
            {
                secondConfig1.map(item => {
                    return (
                            <CardStyled key={item.id}>
                                <Image src={item.image} alt={item.title} width={102} height={50} />
                                <TitleStyled>{item.title}</TitleStyled>
                                <SubTitleStyled>{item.subTitle}</SubTitleStyled>
                                <TextStyled>{item.text}</TextStyled>
                            </CardStyled>
                    )
                })
            }
            </TopBlock>
            <TopBlock>
            {
                secondConfig2.map(item => {
                    return (
                            <CardStyled key={item.id}>
                                <Image src={item.image} alt={item.title} width={102} height={50} />
                                <TitleStyled>{item.title}</TitleStyled>
                                <SubTitleStyled>{item.subTitle}</SubTitleStyled>
                                <TextStyled>{item.text}</TextStyled>
                            </CardStyled>
                    )
                })
            }
            </TopBlock>
        </SecondSectionStyled>
    )
}
