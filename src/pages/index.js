import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroductionSection from "../components/home/introduction-section"
import AboutSection from "../components/home/about-section"
import CardsList from "../components/ui-elements/list/cards-list"
import ButtonSee from "../components/home/button-see"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProject(limit: 3, sort: {fields: createdAt, order: DESC}) {
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
        allContentfulPost(limit: 3, sort: {fields: publishedAt, order: DESC}) {
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
        title="Thomas Le Naour &bull; Développeur Web freelance"
      />
      <IntroductionSection />
      <AboutSection />
      <CardsList
        title="Derniers projets"
        description="Jetez un oeil à mes dernières réalisations"
        items={data.allContentfulProject.edges}
        type="project"
      />
      <div className="flex justify-center">
        <ButtonSee content="Voir les projets" link="/projects" />
      </div>
      <CardsList
        title="Derniers articles"
        description="Consultez mes derniers articles"
        items={data.allContentfulPost.edges}
        type="post"
      />
      <div className="flex justify-center">
        <ButtonSee content="Voir les articles" link="/posts" />
      </div>
    </Layout>
  )
}

export default IndexPage
