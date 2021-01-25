const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulProject.edges.forEach(project => {
    createPage({
      path: `/projects/${project.node.slug}`,
      component: path.resolve('./src/templates/project.js'),
      context: {
        slug: project.node.slug
      }
    })
  })
  response.data.allContentfulPost.edges.forEach(post => {
    createPage({
      path: `/posts/${post.node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.slug
      }
    })
  })
}