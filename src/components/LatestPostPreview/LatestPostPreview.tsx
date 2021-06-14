import React, {FC} from 'react';
import './LatestPostPreview.scss';
import TextButton from "../TextButton";
import {LatestPostPreviewProps} from "./LatestPostPreview.props";
import Img from "gatsby-image"

const LatestPostPreview: FC<LatestPostPreviewProps> = ({post}) => {
    return (
        <div className={"latest-post-preview"}>
            <Img className={"latest-post-preview__image"} fluid={post.image.fluid} />
            <div className={"latest-post-preview__categories"}>
                {post.categories.map((category, index) => {
                    return (
                        <div key={index} className={"latest-post-preview__category"}>
                            <span>{category}</span>
                        </div>
                    )
                })}
            </div>
            <div className={"latest-post-preview__title"}>{post.title}</div>
            <div className={"latest-post-preview__subtitle"}>{post.subtitle}</div>
            <div className={"latest-post-preview__info"}>
                <div className={"latest-post-preview__date"}>{post.publishDate}</div>
                <span>-</span>
                <TextButton label={"Skaityti daugiau"} className={"latest-post-preview__read-more"} />
            </div>
        </div>
    )
}

export default LatestPostPreview;