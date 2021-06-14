import React, {FC} from 'react';
import './PostPreview.scss';
import {PostPreviewProps} from "./PostPreview.props";
import Img from "gatsby-image";

const PostPreview: FC<PostPreviewProps> = ({post}) => {
    return (
        <div className={"post-preview"}>
            <Img className={"post-preview__image"} fluid={post.image.fluid} />
            <div className={"post-preview__container"}>
                <div className={"post-preview__title"}>{post.title}</div>
                <div className={"post-preview__subtitle"}>{post.subtitle}</div>
                <div className={"post-preview__categories"}>
                    {post.categories.map((category, index) => {
                        return (
                            <div key={index} className={"post-preview__category"}>
                                <span>{category}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={"post-preview__info"}>
                    <div className={"post-preview__date"}>{post.publishDate}</div>
                    <span>-</span>
                    <div className={"post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;