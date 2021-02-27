import "../App.css"
import "./hoje.css"
import "./menu.css"
import "./perguntas.css"
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
          <Head>
        <title>Flashcards</title>
      </Head>
  <Component {...pageProps} />
  </UserProvider>
  )
}

export default MyApp
