import { Helmet } from "react-helmet";

function SEO() {
  return (
    <Helmet>
      <title>Kholofelo | Web Developer Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Kholofelo, showcasing projects, certificates, and collaboration opportunities."
      />
      <meta property="og:title" content="Kholofelo | Web Developer Portfolio" />
      <meta
        property="og:description"
        content="Recruiter-friendly showcase built with React, Vite, TailwindCSS, and TypeScript."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="https://yourdomain.com/preview.png" />
    </Helmet>
  );
}

export default SEO;
