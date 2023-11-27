import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&display=swap"

        />
       
      </Head>
      <body className="font-league-spartan ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
