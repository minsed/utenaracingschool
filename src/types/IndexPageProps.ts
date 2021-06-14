import {PageProps} from "gatsby";
import {FluidObject} from "gatsby-image";

export interface IndexPageProps extends PageProps {
    data: {
        allContentfulPost: {
            edges: PostPreviewEdge[];
        }
    }
}

export interface PostPreviewEdge {
    node: PostPreviewNode;
}

export interface PostPreviewNode {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    publishDate: string;
    categories: string[];
    image: {
        fluid : FluidObject;
    }
}
