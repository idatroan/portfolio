import { useStaticQuery, graphql } from "gatsby";

export const useProjectData = () => {
    const project = useStaticQuery(graphql`
        query {
            allSanityProject {
              nodes {
                name
                description
              }
            }
          }
        `
    )
    console.log(project.allSanityProject.nodes[0]);
    return project.allSanityProject.nodes[0];
}