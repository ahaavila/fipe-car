import Document, { Html, Head, Main, NextScript } from 'next/Document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Consulta Tabela Fipe</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}