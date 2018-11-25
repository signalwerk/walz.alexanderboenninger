import  React from 'react'
import { graphql } from 'gatsby'

import Index from "gatsby-theme-signalwerk/src/pages";



class BlogIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Index {...this.props} />
      </React.Fragment>
    )
  }
}

export default BlogIndex

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            tags
            description
          }
        }
      }
    }
  }
`
