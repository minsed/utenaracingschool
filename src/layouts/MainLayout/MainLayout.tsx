import React, {createRef, FC, ReactNode, useEffect} from 'react';
import './MainLayout.scss'
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';

const MainLayout: FC<MainLayoutProps> = ({children}: MainLayoutProps) => {
    const contentRef = createRef<HTMLDivElement>();

    useEffect(() => {
        contentRef.current?.scrollTo(0, 0);
    }, [location, contentRef]);
    
    return <div className={"main-layout"}>
        <div className={"main-layout__header"}>
            <HeaderContainer />
        </div>
        <div className={"main-layout__body"}>
            <div className={"main-layout__content-container"} ref={contentRef}>
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