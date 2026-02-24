import { Helmet } from "react-helmet-async";

interface BaseSchemaProps {
    type: "Organization" | "FinancialService" | "LocalBusiness" | "WebPage" | "BreadcrumbList";
    data: Record<string, any>;
}

/**
 * Injects Google JSON-LD Rich Snippets into the document head safely.
 */
export const StructuredData = ({ type, data }: BaseSchemaProps) => {
    // We attach the @context dynamically before stringifying.
    const schemaData = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        </Helmet>
    );
};
