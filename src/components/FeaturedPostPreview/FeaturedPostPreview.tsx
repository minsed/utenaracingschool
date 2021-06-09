import React, {FC} from 'react';
import './FeaturedPostPreview.scss'

const FeaturedPostPreview: FC = () => {
    return (
        <div className={"featured-post-preview"}>
            <div className={"featured-post-preview-container"}>
                <div className={"featured-post-preview__title"}>Utena Racing School antrajame LT taures etape - antra</div>
                <div className={"featured-post-preview__categories"}>
                    <div className={"featured-post-preview__category"}>
                        <span>LT</span>
                    </div>
                </div>
                <div className={"featured-post-preview__info"}>
                    <div className={"featured-post-preview__date"}>Birželio 6, 2021</div>
                    <span>-</span>
                    <div className={"featured-post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPostPreview