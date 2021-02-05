import React from "react"
import { graphql } from "gatsby"

import useSiteMetadata from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagsList from "../components/ui-elements/tags/tags-list"
import MinutesDate from "../components/ui-elements/minutes-date"
import ButtonBack from '../components/ui-elements/button-back'

import twitterLogo from '../images/social-networks/twitter.svg'
import facebookLogo from '../images/social-networks/facebook.svg'
import emailLogo from '../images/social-networks/email.svg'
import linkedinLogo from '../images/social-networks/linkedin.svg'

const PostTemplate = ({ data, location }) => {
  const { siteUrl } = useSiteMetadata()
  const { title, tags, excerp, image, body, readTime, publishedAt } = data.contentfulPost
  
  return (
    <Layout>
      <SEO
        title={title + " | Thomas Le Naour"}
        description={excerp}
        ogType="article"
        ogTitle={title}
        ogImage={`${siteUrl}${image.localFile.publicURL}`}
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

        <section className="max-w-4xl mx-auto pb-5">
          <div className="main-container">
            <h2 className="main-title mb-6 text-underline">Partagez cet article</h2>
            <ul className={`flex items-center space-x-10`}>
              <li>
                <a href={`https://twitter.com/intent/tweet?url=${siteUrl}${location.pathname}`} target="_blank" title="Partager sur Twitter" rel="noreferrer" className="focus:outline-none">
                  <img
                    src={twitterLogo}
                    alt="Logo Twitter"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}${location.pathname}`} target="_blank" title="Partager sur Facebook" rel="noreferrer" className="focus:outline-none">
                  <img
                    src={facebookLogo}
                    alt="Logo Facebook"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}${location.pathname}`} target="_blank" rel="noreferrer" title="Partager sur LinkedIn" className="focus:outline-none">
                  <img
                    src={linkedinLogo}
                    alt="Logo LinkedIn"
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href={`mailto:?&subject=&body=${siteUrl}${location.pathname}`} target="_blank" rel="noreferrer" title="Partager par email" className="focus:outline-none">
                  <img
                    src={emailLogo}
                    alt="Logo Email"
                    className="w-10"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
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
