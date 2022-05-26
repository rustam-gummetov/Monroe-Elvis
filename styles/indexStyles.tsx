import Image from "next/image"
import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    background-color: rgb(42, 42, 42);
    height: 90px;
`

export const MonroeImgHolder = styled.span`
    float: left;
    padding-left: 50px;
    object-fit: cover;
    margin: 10px 0 10px 0;
`

export const MonroeImg = styled(Image)`
    height: 70px;
    padding: 20px 0px 20px 0px;
    object-fit: cover;
`

export const Menu = styled.nav`
    display: inline-block;
    height: 100%;
    padding: 10px 0 10px 50px;
`

export const MenuItem = styled.span`
    color: white;
    height: 100%;
    align-items: center;
    display: inline-flex;
    align-items: center;
`

export const MenuItemText = styled.p`
    color: white;
    cursor: pointer;
    padding: 10px;
    margin: 5px;
    border: 1px solid white;
    font-size: 20px;
    border-radius: 10px;

    :hover {
        background-color: black;
        color: yellow;
    }
`

export const Logo = styled.span`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 50px;
    padding: 20px 0px 20px 0px;
`

// export const LogoImg = styled(Image)`
//     height: 50px;
//     padding: 30px 0px 30px 0px;
// `

export const Data = styled.div`
    float: right;
    height: 90px;
`

export const PhoneNumber = styled.span`
    color: white;
    display: inline-flex;
    padding: 20px 10px 20px 10px;
    vertical-align: top;
    margin: 0 30px;
`

export const PhoneNumberText = styled.p`
    font-size: 21px;
    text-align: right;
`

export const MapsHolder = styled.span`
    display: inline-flex;
    object-fit: cover;
    cursor: pointer;
    /* padding: 20px 10px 0 0; */
    /* vertical-align: top; */
`

export const VkIconHolder = styled.span`
    display: inline-flex;
    padding: 25px 10px 25px 10px;
    object-fit: cover;

    margin: auto;
    cursor: pointer;
`

export const InstIconHolder = styled.span`
    display: inline-flex;
    padding: 25px 10px 25px 10px;
    object-fit: cover;

    margin: auto;
    cursor: pointer;
`

export const TelegramHolder = styled.span`
    display: inline-flex;
    padding: 25px 50px 25px 10px;
    object-fit: cover;
    margin-right: 50px;

    margin: auto;
    cursor: pointer;
`

export const ElvisImgHolder = styled.span`
    float: right;
    padding-right: 50px;
    /* object-fit: cover; */
    margin: 10px 0 10px 0;
`

export const ElvisImg = styled(Image)`
    height: 70px;
    /* padding: 20px 0px 20px 0px; */
`

export const Main = styled.main`
    position: relative;
    float: left;
    width: 100%;
    text-align: center;
`