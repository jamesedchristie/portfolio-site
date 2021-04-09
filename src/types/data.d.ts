import { RichTextBlock } from 'prismic-reactjs';

export interface PrismicBlogPostData {
  allPrismicBlogPost: {
    edges: {
      node: {
        id: string;
        data: {
          title: {
            raw: RichTextBlock[];
          };
          content: {
            text: string;
          };
          datetime: string;
          image: {
            fluid: {
              src: string;
            };
          };
        };
        uid: string;
      };
    }[];
  };
}

export interface BlogPost {
  title: {
    raw: RichTextBlock[];
  };
  content: {
    raw: RichTextBlock[];
  };
  datetime: string;
  image: {
    fluid: {
      src: string;
    };
  };
}

export interface BlogPostQuery {
  prismicBlogPost: {
    data: BlogPost
  };
}

export interface GithubRepoData {
  allGithubRepo: {
    edges: {
      node: {
        data: {
          repository: GithubRepo;
        };
        childReadme: {
          childMarkdownRemark: {
            html: string;
          };
        };
      };
    }[];
  };
}

export interface GithubRepo {
  createdAt: string;
  name: string;
  url: string;
  description: string;
  openGraphImageUrl: string;
}

export interface ReadmeQuery {
    markdownRemark: {
      html: string
    }
}
