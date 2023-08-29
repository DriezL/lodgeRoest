import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"


const hetHuis = ({serverData}) => (
    <Layout>
        <div className={styles.textCenter}>
            <h1>
                Prijzen
            </h1>
            <h2>Prijzen arrangementen/verhuur</h2>
            <p>U verblijft met: {serverData?.results[0].name.first} {serverData?.results[0].name.last}</p>
            <p>Verblijf per nacht incl*: 85 euro.</p>
            <p>Casa Event Arrangement : Culinair, Natuurtracking, Stadsrondleiding: Programma Kosten in overleg. Programmasamenstelling in overleg. max. vier personen/ eigen vervoer. 2 nachten. Optioneel bij verhuur: schoonmaakkosten: 65 euro extra</p>
            <p>Incl* betekent: gebruik van WiFi, Televisie, Gas, Elektriciteit, Water : in de huurprijs verrekend.</p>
            <p>Annulering te allen tijde kosteloos uiterlijk een week voor aankomst.</p>
        </div>
    </Layout>
)

export default hetHuis

export async function getServerData() {
    try {
      const res = await fetch(`https://randomuser.me/api/`)
      if (!res.ok) {
        throw new Error(`Response failed`)
      }
      return {
        props: await res.json(),
      }
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {},
      }
    }
  }
  