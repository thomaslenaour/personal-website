import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardsList from "../components/ui-elements/list/cards-list"

const PostsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPost(sort: {fields: publishedAt, order: DESC}) {
          edges {
            node {
              id
              title
              slug
              tags
              readTime
              publishedAt(formatString: "dddd DD MMMM YYYY", locale: "fr_FR")
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title="Thomas Le Naour &bull; Articles"
        description="Consultez mes articles"
      />
      <CardsList
        title="Mes articles"
        description="Consultez mes articles"
        items={data.allContentfulPost.edges}
        type="post"
      />
    </Layout>
  )
}

export default PostsPage
