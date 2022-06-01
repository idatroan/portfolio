import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ pageTitle }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                }
              }
            }
        `
    );

    return (
        <head>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <meta name='viewport' content='initial-scale=1, width=device-width' />
            <meta name='description' content='Ida Trøan er en nyutdannet fullstack webutvikler' />
            <meta name='keywords' content='portfolio, webdevelopment, development, fullstack, frontend, backend' />
            <link rel='shortcut icon' type='image/ico' href='../images/favicon.png' />
        </head>
    )
}

export default Head;