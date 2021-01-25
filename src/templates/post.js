import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagsList from "../components/ui-elements/tags/tags-list"
import MinutesDate from "../components/ui-elements/minutes-date"
import ButtonBack from '../components/ui-elements/button-back'

const PostTemplate = ({ data }) => {
  const { title, tags, excerp, image, body, readTime, publishedAt } = data.contentfulPost
  
  return (
    <Layout>
      <SEO
        title={title + " | Thomas Le Naour"}
        description={excerp}
        ogType="article"
        ogTitle={title}
        ogImage={image.localFile.publicURL}
      />
        <article className="max-w-4xl mx-auto py-5">
          <div className="main-container">
            <ButtonBack link="/posts" content="Retour aux articles" />
            <h1 className="main-title mb-3">
              {title}
            </h1>
            <TagsList tags={tags} />
            <MinutesDate time={readTime} date={publishedAt} classes="mt-1 mb-5" />
          </div>
          <div className="md:text-lg text-justify">
            <div className="main-container">
              <p className="italic">{excerp}</p>
            </div>
            <div className="md:px-4">
              <img src={image.localFile.publicURL} alt={image.description} className="my-5 md:rounded-md shadow-sm article-image" />
            </div>
            <div className="main-container">
              <div className="article-content" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
            </div>
          </div>
        </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      tags
      excerp
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
      readTime
      publishedAt(formatString: "dddd DD MMMM YYYY", locale: "fr_FR")
    }
  }
`

export default PostTemplate
