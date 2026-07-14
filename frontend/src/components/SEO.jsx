import { Helmet } from "react-helmet-async";

const BRAND = "SpiceRoot";
const DOMAIN = "https://spiceroot.co";
const OG_IMAGE = "/uploads/07.jpg";

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  ld,
}) {
  const fullTitle = title ? `${title} | ${BRAND}` : BRAND;
  const canonical = url ? `${DOMAIN}${url}` : DOMAIN;
  const ogImage = image || OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {ld && (
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      )}
    </Helmet>
  );
}
