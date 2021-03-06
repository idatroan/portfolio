export function mapEdgesToNodes(data) {
    if (!data.edges) return [];
    return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
    return (slug || {}).current;
}