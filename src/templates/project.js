import React from "react"
import { graphql } from "gatsby"

import useSiteMetadata from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonBack from "../components/ui-elements/button-back"

const ProjectTemplate = ({ data }) => {
  const { siteUrl } = useSiteMetadata()
  const { name, type, body, image } = data.contentfulProject
  const typeClass = type === 'professionnel' ? 'bg-green-500' : type === 'personnel' ? 'bg-purple-500' : 'bg-blue-500'
  
  return (
    <Layout>
      <SEO
        title={name + " | Thomas Le Naour"}
        description={`Présentation du projet ${name}`}
        ogImage={`${siteUrl}${image.localFile.publicURL}`}
      />
      <div className="main-container py-5">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          <div>
            <ButtonBack link="/projects" content="Retour aux projets" />
            <h1 className="main-title mb-3">
              {name}
            </h1>
            <div className="block mb-5">
              <span className={`shadow-sm rounded-lg px-2 py-1 font-medium text-white text-xs ${typeClass}`}>projet {type}</span>
            </div>
            <div className="text-justify md:text-lg">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
            </div>
          </div>
          <img src={image.localFile.publicURL} alt={image.description} className="rounded-md" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      type
      image {
        localFile {
          publicURL
        }
        description
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default ProjectTemplate
