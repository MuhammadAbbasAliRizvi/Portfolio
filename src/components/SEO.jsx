import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Muhammad Abbas - Web Developer</title>
      <meta name="description" content="Muhammad Abbas - Web Developer based in Karachi, Pakistan. DAE in CIT student specializing in front-end development with React, JavaScript, and modern web technologies." />
      <meta name="keywords" content="web developer, react, javascript, frontend, karachi, pakistan, muhammad abbas" />
      <meta name="author" content="Muhammad Abbas" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Muhammad Abbas - Web Developer" />
      <meta property="og:description" content="Web Developer based in Karachi, Pakistan specializing in React, JavaScript, and modern web technologies." />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Muhammad Abbas - Web Developer" />
      <meta name="twitter:description" content="Web Developer based in Karachi, Pakistan specializing in React, JavaScript, and modern web technologies." />
    </Helmet>
  );
};

export default SEO;