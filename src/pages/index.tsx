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
import {graphql} from "gatsby";
import {IndexPageProps} from "../types/IndexPageProps";

const Index: FC = (props: IndexPageProps) => {

    const posts = props.data.allContentfulPost.edges;
    const latestPost = posts.shift();
    const topPosts = posts.slice(0, 3);

    return (
        <MainLayout>
            <div className={"index"}>
                <div className={"index__top-posts-container"}>
                    <div className={"index__latest-posts"}>
                        <LatestPostPreview post={latestPost.node} />
                        <div className={"index__top-posts"}>
                            {topPosts.map(post => {
                                return <TopPostPreview key={post.node.id} post={post.node} />
                            })}
                        </div>
                    </div>
                    <div className={"index__vertical-separator"}></div>
                    <div className={"index__calendar"}>
                        <div className={"index__title"}>TUSCIA VIETA:</div>
                        <div className={"index__title"}>GALIMA IDETI CEMPIONATO/TAURES EINAMUOSIUS REZULTATUS, KOMANDU
                            TOP3?
                        </div>
                        <div className={"index__title"}>GALIMA IDETI VARZYBU/TRENIRUOCIU TVARKARASTI?</div>
                        <div className={"index__title"}>GALIMA IDETI DAUGIAU REMEJU?</div>
                    </div>
                </div>
                <div className={"index__separator"}></div>
                <div className={"index__marketing-container"}>
                    <div className={"index__title"}>PARTNERIAI:</div>
                    <div className={"index__ads"}>
                        <img className={"index__ad index__ad--utena"} src={UtenaLogo}/>
                        <img className={"index__ad index__ad--gitana"} src={GitanaLogo}/>
                        <img className={"index__ad index__ad--biuro"} src={BiuroMasinosLogo}/>
                    </div>
                </div>
                <div className={"index__separator"}></div>
                <div className={"index__news-container"}>
                    <div className={"index__posts"}>
                        {posts.slice(3).map(post => {
                            return <PostPreview key={post.node.id} post={post.node}/>
                        })}
                    </div>
                    <div className={"index__featured-posts"}>
                        <div className={"index__title"}>TOP NAUJIENOS:</div>
                        <div className={"index__featured-posts-container"}>
                            {topPosts.map(post => {
                                return <FeaturedPostPreview key={post.node.id} post={post.node}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Index;

export const pageQuery = graphql`
  query Index {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          subtitle
          image {
            fluid(maxWidth: 304, maxHeight: 240, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
          categories
        }
      }
    }
  }
`