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

interface GithubRepoData {
  allGithubRepo: {
    edges: {
      node: {
        data: {
          repository: GithubRepo
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
    createdAt: string,
    name: string,
    url: string,
    description: string,
    openGraphImageUrl: string
}
