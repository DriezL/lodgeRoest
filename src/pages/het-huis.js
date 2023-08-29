import React from 'react';
import Layout from "../components/layout"
import { Link, graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    <h2>{data.site.siteMetadata.title}</h2>
    <div>{data.site.siteMetadata.description}</div>
    <p>Welkom bij Casa Roest, ons vakantiehuis in Wallonië (provincie Luik). Ons huis ligt in de Belgische Ardennen in een klein dorpje, Burnontige (gemeente Ferrieres). Het ruime huis met drie slaapkamers is prachtig in het groen gelegen. U kunt zo het bos in voor een wandeling.</p>
    <p>Het huis is prettig ingericht en vanuit de woonkamer hebt u een prachtig uitzicht over het dal. ’s Avonds kunt u genieten van de vlammen in de open haard. Wij wensen u een fijn verblijf toe</p>
    <Link to="/">Back to home</Link>
  </Layout>
)

export const query = graphql `
  query {
    site {
      siteMetadata {
        author,
        description,
        title
      }
    }
  }
`