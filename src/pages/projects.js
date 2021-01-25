import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardsList from "../components/ui-elements/list/cards-list"

const ProjectsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProject(sort: {order: DESC, fields: createdAt}) {
          edges {
            node {
              id
              name
              slug
              image {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO
        title="Thomas Le Naour &bull; Projets"
        description="Consultez mes articles"
      />
      <CardsList
        title="Mes projets"
        description="Jetez un oeil à mes réalisations"
        items={data.allContentfulProject.edges}
        type="project"
      />
    </Layout>
  )
}

export default ProjectsPage
