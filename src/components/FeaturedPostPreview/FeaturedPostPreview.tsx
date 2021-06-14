import React, {FC} from 'react';
import './FeaturedPostPreview.scss'
import {FeaturedPostPreviewProps} from "./FeaturedPostPreview.props";

const FeaturedPostPreview: FC<FeaturedPostPreviewProps> = ({post}) => {
    return (
        <div className={"featured-post-preview"}>
            <div className={"featured-post-preview-container"}>
                <div className={"featured-post-preview__title"}>{post.title}</div>
                <div className={"featured-post-preview__categories"}>
                    {post.categories.map((category, index) => {
                        return (
                            <div key={index} className={"featured-post-preview__category"}>
                                <span>{category}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={"featured-post-preview__info"}>
                    <div className={"featured-post-preview__date"}>{post.publishDate}</div>
                    <span>-</span>
                    <div className={"featured-post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPostPreview