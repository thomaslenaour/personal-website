import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Thomas Le Naour &bull; Page introuvable"
      description="Erreur 404, la page demandée n'existe pas ou n'existe peut-être plus"
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
