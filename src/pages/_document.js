import Document, { Html, Head, Main, NextScript} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
  
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          })
  
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: [initialProps.styles, sheet.getStyleElement()],
        }
      } finally {
        sheet.seal()
      }
    }
  
  


  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <meta charset="UTF-8" />
          <link rel="apple-touch-icon" href="logo192.png" />
          {/* <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/* <!--
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.
  
            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
          --> */}
          <title>BendJS Website</title>
        </Head>
        <body>
          <form name="newsletter" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
