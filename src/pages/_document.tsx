import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from "../../node_modules/next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}
