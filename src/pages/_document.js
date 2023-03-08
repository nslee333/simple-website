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
        <Head></Head>
        <body>
          <form name="newsletter" netlify='true' netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
          </form>
          <form name="contact" netlify='true' netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea className="contact__message" type="text" name='message' />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
