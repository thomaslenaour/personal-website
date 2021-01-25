import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/ui-elements/button"

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Thomas Le Naour &bull; Page introuvable"
      description="Erreur 404, la page demandée n'existe pas ou n'existe peut-être plus"
    />
    <div className="main-container py-10">
      <h1 class="main-title text-center mb-3">Erreur 404</h1>
      <p class="mb-3 text-center">La page demandé n'existe pas ou n'existe peut-être plus...</p>
      <div className="flex justify-center">
        <Button link="/" classes="px-4 py-3 bg-yellow-400 hover:bg-yellow-500 focus:outline-none text-white rounded-md text-base md:text-xl">
          Retourner à la page d'accueil
        </Button>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
