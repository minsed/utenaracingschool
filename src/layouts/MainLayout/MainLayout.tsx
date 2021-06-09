import React, {FC, ReactNode} from 'react';
import './MainLayout.scss'
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';

const MainLayout: FC<MainLayoutProps> = ({children}: MainLayoutProps) => {

    return <div className={"main-layout"}>
        <div className={"main-layout__header"}>
            <HeaderContainer />
        </div>
        <div className={"main-layout__body"}>
            <div className={"main-layout__content-container"}>
                <div className={"main-layout__content"}>{children}</div>
            </div>
        </div>
        <div className={"main-layout__footer"}>Footer</div>
    </div>
}

interface MainLayoutProps {
    children?: ReactNode;
}

export default MainLayout;