import {
    Header, MonroeImgHolder, MonroeImg, Menu, MenuItem, MenuItemText,
    Logo, Data, PhoneNumber, PhoneNumberText, VkIconHolder, InstIconHolder,
    TelegramHolder, ElvisImgHolder, ElvisImg, Main, MapsHolder,
} from '../styles/indexStyles'
import Marilyn_Monroe from '../Pictures/marilyn-monroe.png'
import Elvis from '../Pictures/elvis.png'
import PictureLogo from '../Pictures/logo2.png'
import PictureVk from '../Pictures/vk500.png'
import PictureInst from '../Pictures/instagram500.png'
import PictureTelegram from '../Pictures/telegram500.png'
import Photo1 from '../Pictures/photo1.jpg'
import Photo2 from '../Pictures/photo2.png'
import Maps from '../Pictures/yandexMaps.png'

import Photos from './photos'
import Price from './price'
import SignUpOnline from './signUpOnline'
import Examples from './examples'

import Image from 'next/image';
import Link from 'next/link';

const HomePage = () =>
(
    <>
        <Header>
            <MonroeImgHolder>
                <MonroeImg
                    src={Marilyn_Monroe}
                    height='70px'
                    width='70px'
                // layout='fill'
                />
            </MonroeImgHolder>
            <Menu>
                <MenuItem>
                    <Link href="#SignUpOnline">
                        <MenuItemText>
                            Записаться онлайн
                        </MenuItemText>
                    </Link>
                    <Link href="#Price">
                        <MenuItemText>
                            Услуги и цены
                        </MenuItemText>
                    </Link>
                    <Link href="#Examples">
                        <MenuItemText>
                            Примеры работ
                        </MenuItemText>
                    </Link>
                </MenuItem>
            </Menu>
            <Logo>
                <Image
                    src={PictureLogo}
                />
            </Logo>
            <Data>
                <PhoneNumber>
                    <PhoneNumberText>
                        Ижевск, улица Авангардная, 6
                        <br></br>
                        +7 996 693-45-69
                    </PhoneNumberText>
                    <MapsHolder>
                        <a target={"_blank"} href={"https://yandex.ru/maps/44/izhevsk/house/avangardnaya_ulitsa_6/YUoYdAVoSEwHQFtsfXR3cHxkZg==/?indoorLevel=1&ll=53.228190%2C56.861072&z=17"}>
                            <Image
                                src={Maps}
                                height='50px'
                                width='50px'
                            />
                        </a>
                    </MapsHolder>
                </PhoneNumber>
                <VkIconHolder>
                    <a target={"_blank"} href={"https://vk.com/dora_hair"}>
                        <Image
                            src={PictureVk}
                            height='40px'
                            width='40px'
                        />
                    </a>
                </VkIconHolder>
                <InstIconHolder>
                    <a target={"_blank"} href={"https://instagram.com/cany_doy?igshid=YmMyMTA2M2Y="}>
                        <Image
                            src={PictureInst}
                            height='40px'
                            width='40px'
                        />
                    </a>
                </InstIconHolder>
                <TelegramHolder>
                    <a target={"_blank"} href={"https://t.me/dorasin"}>
                        <Image
                            src={"https://www.redwhite.ru/upload/iblock/229/qdq6pl4v3arkhirauqjm01869b4hj52r/tg.png"}
                            height='40px'
                            width='40px'
                        />
                    </a>
                </TelegramHolder>
                <ElvisImgHolder>
                    <ElvisImg
                        src={Elvis}
                        height='70px'
                        width='70px'
                        objectFit='contain'
                    />
                </ElvisImgHolder>
            </Data>
        </Header>
        <Main>
            <Photos />
            <Price />
            <SignUpOnline />
            <Examples />
        </Main>
    </>
)
export default HomePage;
