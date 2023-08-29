import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Het huis",
    url: "het-huis",
    description:
      "Bed and breakfast in de Ardennen.",
  },
  {
    text: "Omgeving",
    url: "omgeving",
    description:
      "De Belgische Ardennen ...",
  },
  {
    text: "Prijzen",
    url: "prijzen",
    description:
      "...",
  },
  {
    text: "Beschikbaarheid",
    url: "beschikbaarheid",
    description:
      "...",
  },
]

const samplePageLinks = [
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?casa=roest`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        CASA-ROEST VAKANTIEHUIS BURNONTIGE
      </h1>
      <StaticImage
        src="../images/winter.jpg"
        loading="eager"
        width={524}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {samplePageLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== samplePageLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
