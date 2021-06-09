import React, {FC} from 'react';
import './LatestPostPreview.scss';
import TextButton from "../TextButton";

const LatestPostPreview: FC = () => {
    return (
        <div className={"latest-post-preview"}>
            <img className={"latest-post-preview__image"} src={"https://www.mxlarge.com/imager/images/featured/40056/Herlings-face-2021_4d5a97d4c1515dfb6bcf494ff5de83a2.jpg"} />
            <div className={"latest-post-preview__categories"}>
                <div className={"latest-post-preview__category"}>
                    <span>MXGP</span>
                </div>
            </div>
            <div className={"latest-post-preview__title"}>Jeffrey Herlings nugalėjo Prancūzijos cempionate</div>
            <div className={"latest-post-preview__subtitle"}>Priešsezoninės varžybos</div>
            <div className={"latest-post-preview__info"}>
                <div className={"latest-post-preview__date"}>Birželio 6, 2021</div>
                <span>-</span>
                <TextButton label={"Skaityti daugiau"} className={"latest-post-preview__read-more"} />
            </div>
        </div>
    )
}

export default LatestPostPreview;