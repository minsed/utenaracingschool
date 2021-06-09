import React, {FC} from 'react';
import './TopPostPreview.scss';

const TopPostPreview: FC = () => {
    return (
        <div className={"top-post-preview"}>
            <div className={"top-post-preview-container"}>
                <div className={"top-post-preview__title"}>Utena Racing School antrajame LT taures etape - antra</div>
                <div className={"top-post-preview__categories"}>
                    <div className={"top-post-preview__category"}>
                        <span>LT</span>
                    </div>
                </div>
                <div className={"top-post-preview__info"}>
                    <div className={"top-post-preview__date"}>Birželio 6, 2021</div>
                    <span>-</span>
                    <div className={"top-post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
            <img className={"top-post-preview__image"} src={"https://www.mxlarge.com/imager/images/featured/41609/Simpson-2021-corner_4d5a97d4c1515dfb6bcf494ff5de83a2.jpg"}></img>
        </div>
    )
}

export default TopPostPreview;