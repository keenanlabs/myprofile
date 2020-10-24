import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'

import PostListing from '../components/PostListing'
import GitHubButton from 'react-github-btn'
import SEO from '../components/SEO'

import config from '../../data/SiteConfig'
import photo from '../../content/images/me.png'


import interviews from '../data/interviews'
import Guides from '../components/Guides'

import links from '../data/links'

import Linksguides from '../components/Linksguides'





export default class Index extends Component {
  render() {
    const popularPostEdges = this.props.data.popular.edges
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <a
              href="https://www.facebook.com/kennan.rajendra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo}
                className="lite-icon"
                title="Halo Saya Akhmad Ghofarudin Kurniawan"
                alt="Halo Saya Akhmad Ghofarudin Kurniawan"
              />
            </a>
            <h1>Hi, im Akhmad Ghofarudin Kurniawan</h1>
            
            { <p>

              Situs Yang Berisi Keluh Kesah Menjadi Seorang <strong> Publisher Mobile Apps </strong> Sekaligus Menjadi  Ceo 🧑 di <a href="https://justapp.id"
                  target="blank"
                >
                JustApp
                </a>
                </p>
           }

            
          
            <a
                  className="selengkapnya"
                  href="/me"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Selengkapnya Tentang Saya
                </a>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Tulisan</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
          {/* <h2>Links</h2>
            <section >
            <Linksguides data={links} />
              </section> */}
            <h2>Wawancara</h2>
            <section >
            <Guides data={interviews} />
              </section>
        </div>

      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
