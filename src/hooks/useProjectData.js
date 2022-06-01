import { useStaticQuery, graphql } from "gatsby";

export const useProjectData = () => {
    const project = useStaticQuery(graphql`
        query {
            allSanityProject {
              nodes {
                id
                name
                description
              }
            }
          }
        `
    )
    // console.log(project.allSanityProject.nodes);
    return project.allSanityProject.nodes;
}