import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Juan Miguel Rashley Andrada | Information Technology Student Portfolio",
  description = "Portfolio of Juan Miguel Rashley Andrada, a 2nd year Information Technology student at West Visayas State University specializing in Java, Web Development, and Software Engineering.",
  keywords = "Juan Andrada, Information Technology, Portfolio, Java, Web Development, React, Software Engineering, Leon Iloilo, West Visayas State University, WVSU",
  canonical = "",
  ogImage = "/og-image.png"
}) => {
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${canonical}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
