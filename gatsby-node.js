exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        allSanityProject(filter: { slug: { current: { ne: null }} }) {
            nodes {
                id
                name
                description
                categories {
                  title
                }
                github
                live
                image {
                  asset {
                    gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, width: 400, height: 300)
                  }
                }
                slug {
                  current
                }
            }
        }
    }
    `)

    if (result.errors) {
        throw result.errors
    }

    const projects = result.data.allSanityProject.nodes || []
    projects.forEach((node, index) => {
        const path = `/project/${node.slug.current}`;
        const id = node.id;

        createPage({
            path,
            component: require.resolve("./src/templates/project.js"),
            context: { slug: node.slug.current, id: id }
        })
    })
}