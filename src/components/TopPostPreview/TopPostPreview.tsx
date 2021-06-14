import React, {FC} from 'react';
import './TopPostPreview.scss';
import {TopPostPreviewProps} from "./TopPostPreview.props";
import Img from "gatsby-image";

const TopPostPreview: FC<TopPostPreviewProps> = ({post}) => {
    return (
        <div className={"top-post-preview"}>
            <div className={"top-post-preview-container"}>
                <div className={"top-post-preview__title"}>{post.title}</div>
                <div className={"top-post-preview__categories"}>
                    {post.categories.map((category, index) => {
                        return (
                            <div key={index} className={"top-post-preview__category"}>
                                <span>{category}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={"top-post-preview__info"}>
                    <div className={"top-post-preview__date"}>{post.publishDate}</div>
                    <span>-</span>
                    <div className={"top-post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
            <Img className={"top-post-preview__image"} fluid={post.image.fluid} />
        </div>
    )
}

export default TopPostPreview;