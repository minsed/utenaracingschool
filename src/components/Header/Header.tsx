import React, {FC} from 'react';
import TextButton from '../TextButton';
import './Header.scss';
// @ts-ignore
import HeaderLogo from '../../assets/images/header-logo.png'
// @ts-ignore
import FacebookIcon from '../../assets/icons/logo-facebook.svg';
// @ts-ignore
import InstagramIcon from '../../assets/icons/logo-instagram.svg';

const Header: FC = () => {
    return (
        <header className={"header"}>
            <div className={"header__notification-container"}>
                <div className={"header__notification-text-container"}>
                    <div className={"header__notification-text"}>Trasa atidaryta treniruotėms nuo Gegužės 1 dienos</div>
                </div>
            </div>
            <div className={"header__items-container"}>
                <div className={"header__logo-container"}>
                    <img
                        className={"header__logo"}
                        src={HeaderLogo}
                        alt={"UtenaRacingSchool.lt logo"}/>
                </div>
                <div className={"header__actions-container"}>
                    <TextButton
                        label={"Naujienos"}
                        className={"header__action-button"}
                    />
                    <TextButton
                        label={"Komanda"}
                        className={"header__action-button"}
                    />
                    <TextButton
                        label={"Trasa"}
                        className={"header__action-button"}
                    />
                    <TextButton
                        label={"Treniruotės"}
                        className={"header__action-button"}
                    />
                    <TextButton
                        label={"Pramogos"}
                        className={"header__action-button"}
                    />
                    <TextButton
                        label={"Kontaktai"}
                        className={"header__action-button"}
                    />

                    <div className={"header__socials-container"}>
                        <a
                            href={"https://www.facebook.com/utenaracingschool"}
                            target={"_blank"}
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href={"https://www.instagram.com/utenaracingschool"}
                            target={"_blank"}
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
            <hr className={"header__separator"} />
        </header>
    )
}

export default Header;
