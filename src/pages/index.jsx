import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProjectGrid from "../components/ProjectGrid";

import '../styles/globals.css';
import About from "../components/About";

// markup
const HomePage = (
  //error
) => {
  const data = useStaticQuery(graphql`
        query {
            allSanityProject {
              nodes {
                _id
                name
                description
                categories {
                  title
                }
                github
                live
                image {
                  asset {
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 300, height: 225)
                  }
                }
                slug {
                  current
                }
              }
            }
            allSanityAuthor {
              nodes {
                _id
                bio
                email
                github
                image {
                  asset {
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 200, height: 450)
                  }
                }
                linkedin
                name
                imageAlt
              }
            }
          }
        `
    )
  // if (error) {
  //   return (
  //     <div>
  //       <h1>Error 404</h1>
  //     </div>
  //   );
  // }
  
  const project = data.allSanityProject.nodes;
  const aboutMe = data.allSanityAuthor.nodes[0];

  return (
    <Layout pageTitle='Home'>
      <ProjectGrid nodes={project} />
      <About details={aboutMe} />
    </Layout>
  )
}

export default HomePage;
