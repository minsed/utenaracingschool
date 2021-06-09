import React, {FC} from 'react';
import './PostPreview.scss';

const PostPreview: FC = () => {
    return (
        <div className={"post-preview"}>
            <img className={"post-preview__image"} src={"https://www.mxlarge.com/imager/images/featured/42194/Thunder-Cianciarulo-2021_4d5a97d4c1515dfb6bcf494ff5de83a2.jpg"}></img>
            <div className={"post-preview__container"}>
                <div className={"post-preview__title"}>Adam Cianciarulo pratęs sutartį su Monster Energy Kawasaki komanda</div>
                <div className={"post-preview__subtitle"}>Priešsezoninės varžybos</div>
                <div className={"post-preview__categories"}>
                    <div className={"post-preview__category"}>
                        <span>AMA</span>
                    </div>
                    <div className={"post-preview__category"}>
                        <span>SX</span>
                    </div>
                </div>
                <div className={"post-preview__info"}>
                    <div className={"post-preview__date"}>Birželio 6, 2021</div>
                    <span>-</span>
                    <div className={"post-preview__read-more"}>Skaityti daugiau</div>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;