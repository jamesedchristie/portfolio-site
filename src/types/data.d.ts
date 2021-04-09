import { RichTextBlock } from 'prismic-reactjs';

interface PrismicBlogPostData {
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

interface BlogPost {
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

interface BlogPostQuery {
  prismicBlogPost: {
    data: BlogPost
  };
}

interface GithubRepoData {
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

interface GithubRepo {
  createdAt: string;
  name: string;
  url: string;
  description: string;
  openGraphImageUrl: string;
}

interface ReadmeQuery {
    markdownRemark: {
      html: string
    }
}
