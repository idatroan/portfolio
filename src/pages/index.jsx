import * as React from "react"
import { useProjectData } from '../hooks/useProjectData';
import Layout from '../components/Layout';

// markup
const HomePage = () => {
  const { name, description } = useProjectData();

  return (
    <main>
      <Layout pageTitle='Ida Trøan'>
        <p>{name} and description is {description}</p>
      </Layout>
    </main>
  )
}

export default HomePage;
