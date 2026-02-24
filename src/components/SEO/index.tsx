import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: "website" | "article" | "profile";
    keywords?: string[];
    noIndex?: boolean;
}

const DEFAULT_DESCRIPTION = "Healthy Home Loans offers easy, transparent, and hassle-free home financing solutions for your dream home or plot.";
const BASE_URL = "https://healthyhomeloans.in"; // User should update this domain
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/og-image-default.jpg`;

export const SEO = ({
    title,
    description = DEFAULT_DESCRIPTION,
    canonicalUrl,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    keywords = [],
    noIndex = false,
}: SEOProps) => {
    // ENFORCE STRICT LIMITS:
    // Title limit: ~60 chars
    // Description limit: ~160 chars
    const baseTitle = "Healthy Home Loans";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    const cleanDescription = description.substring(0, 160);

    // Normalize canonical URL (prevent trailing slash duplicate content)
    const activeCanonical = canonicalUrl
        ? `${BASE_URL}${canonicalUrl.startsWith("/") ? "" : "/"}${canonicalUrl}`.replace(/\/$/, "")
        : BASE_URL;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={cleanDescription} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}

            {/* Control Crawlers */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Canonical Link */}
            <link rel="canonical" href={activeCanonical} />

            {/* OpenGraph (Facebook / LinkedIn) */}
            <meta property="og:site_name" content={baseTitle} />
            <meta property="og:title" content={title || baseTitle} />
            <meta property="og:description" content={cleanDescription} />
            <meta property="og:url" content={activeCanonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage} />

            {/* Ensure Image sizing limits for rich cards */}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || baseTitle} />
            <meta name="twitter:description" content={cleanDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};
