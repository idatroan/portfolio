import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                }
              }
            }
        `
    )
    // console.log(data);
    return site.siteMetadata;
}