import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html>
          <Head>
          <link rel="apple-touch-icon" href="/flashcards.png" />
          <link rel="icon" href="/flashcards.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;1,600;1,700&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,300;1,600&display=swap" rel="stylesheet"></link>
          </Head>
          <body>
            <Main />
            <NextScript />
            <script data-ad-client="ca-pub-7491489288772829" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument