import React from 'react';
import Document, {DocumentContext, Html, Head, NextScript, Main, DocumentInitialProps} from 'next/document';
// import { Container } from './styles';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
          ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
          })

       const initialProps = await Document.getInitialProps(ctx)
      return {
          ...initialProps,
          styles: (
              <> 
               {initialProps.styles}
               {sheet.getStyleElement()}
              </>
          )
      }     
      } finally{
          sheet.seal();
      } 
    }
  
    render() {
      return (
        <Html lang="pt-br">
          <Head>
          <meta charSet="utf-8" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument