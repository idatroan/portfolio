import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Project from '../components/Project';

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      categories {
        _id
        title
      }
      image {
        asset {
          _id
          gatsbyImageData
        }
      }
      name
      description
      imageAlt
      report
      github
      live
      slug {
        current
      }
    }
  }
`;

const ProjectTemplate = props => {
    const { data } = props;
    const projectData = data && data.project;

    return (
        <Layout pageTitle={projectData.name}>
            <Project {...projectData} />
        </Layout>
    )
}

export default ProjectTemplate;