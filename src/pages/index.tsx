import React from "react";
import {FC} from "react";
import MainLayout from "../layouts/MainLayout";
import './Index.scss';
import LatestPostPreview from "../components/LatestPostPreview";
import TopPostPreview from "../components/TopPostPreview";
// @ts-ignore
import BiuroMasinosLogo from '../assets/images/biuro-masinos.png'
// @ts-ignore
import GitanaLogo from '../assets/images/gitana.jpg'
// @ts-ignore
import UtenaLogo from '../assets/images/utenos-savivaldybe.png'
import PostPreview from "../components/PostPreview";
import FeaturedPostPreview from "../components/FeaturedPostPreview/FeaturedPostPreview";

const Index: FC = () => {
    return (
        <MainLayout>
            <div className={"index"}>
                <div className={"index__top-posts-container"}>
                    <div className={"index__latest-posts"}>
                        <LatestPostPreview />
                        <div className={"index__top-posts"}>
                            <TopPostPreview />
                            <TopPostPreview />
                            <TopPostPreview />
                            <TopPostPreview />
                        </div>
                    </div>
                    <div className={"index__vertical-separator"}></div>
                    <div className={"index__calendar"}>
                        <div className={"index__title"}>TUSCIA VIETA:</div>
                        <div className={"index__title"}>GALIMA IDETI CEMPIONATO/TAURES EINAMUOSIUS REZULTATUS, KOMANDU TOP3?</div>
                        <div className={"index__title"}>GALIMA IDETI VARZYBU/TRENIRUOCIU TVARKARASTI?</div>
                        <div className={"index__title"}>GALIMA IDETI DAUGIAU REMEJU?</div>
                    </div>
                </div>
                <div className={"index__separator"}></div>
                <div className={"index__marketing-container"}>
                    <div className={"index__title"}>PARTNERIAI:</div>
                    <div className={"index__ads"}>
                        <img className={"index__ad index__ad--utena"} src={UtenaLogo} />
                        <img className={"index__ad index__ad--gitana"} src={GitanaLogo} />
                        <img className={"index__ad index__ad--biuro"} src={BiuroMasinosLogo} />
                    </div>
                </div>
                <div className={"index__separator"}></div>
                <div className={"index__news-container"}>
                    <div className={"index__posts"}>
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                        <PostPreview />
                    </div>
                    <div className={"index__featured-posts"}>
                        <div className={"index__title"}>TOP NAUJIENOS:</div>
                        <div className={"index__featured-posts-container"}>
                            <FeaturedPostPreview />
                            <FeaturedPostPreview />
                            <FeaturedPostPreview />
                            <FeaturedPostPreview />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Index;