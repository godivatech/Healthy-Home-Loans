import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import logo from "@/assets/images/healthy.png";

export const FooterContent = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
            <FooterColumn
                variant="logo"
                columnClass="md:w-3/12"
                logoUrl={logo}
                logoAlt="Healthy Home Loans"
                description="Your trusted partner for Home, Business, and Personal loans in Madurai. 15+ years of experience helping dreams come true."
                socialLinks={{
                    instagram: "https://www.instagram.com/healthy_home_loans/",
                    facebook: "https://www.facebook.com/p/Healthy-Home-Loans-61581746489107/",
                }}
            />
            <FooterColumn
                variant="links"
                columnClass="md:w-2/12"
                title="Quick Links"
                links={[
                    { text: "Home", url: "/" },
                    { text: "About Us", url: "/about" },
                    { text: "Services", url: "/services" },
                    { text: "Contact", url: "/contact" },
                    { text: "Privacy Policy", url: "/privacy-policy" },
                    { text: "Terms & Conditions", url: "/terms-and-conditions" },
                ]}
            />
            <FooterColumn
                variant="links"
                columnClass="md:w-2/12"
                title="Loan Products"
                links={[
                    { text: "Housing Loan", url: "/services" },
                    { text: "Personal Loan", url: "/services" },
                    { text: "Business Loan", url: "/services" },
                    { text: "Mortgage Loan", url: "/services" },
                    { text: "Car Loan", url: "/services" },
                ]}
            />
            <FooterColumn
                variant="contact"
                columnClass="md:w-5/12"
                title="Contact Us"
                addresses={[
                    {
                        label: "Head Office",
                        content: "423/6, JK Complex, Veeramudian Barathi Nagar, Alagappan Nagar, Near Railway Gate, Muthupatti, Madurai – 625003, Tamil Nadu, India",
                        phones: [
                            { text: "+91 96777 19848", url: "tel:+919677719848" },
                            { text: "+91 78458 37740", url: "tel:+917845837740" },
                            { text: "+91 93603 19848 (Office)", url: "tel:+919360319848" },
                            { text: "+91 90874 07771 (Office)", url: "tel:+919087407771" },
                        ]
                    },
                    {
                        label: "Branch Office",
                        content: "36/ Byraha Complex, Thavalapuram 2nd Street, Tenkasi – 627811",
                        phones: [
                            { text: "+91 63015 81831", url: "tel:+916301581831" },
                            { text: "+91 96777 19848", url: "tel:+919677719848" }
                        ]
                    }
                ]}
                emails={[
                    { text: "healthyhomeloanss@gmail.com", url: "mailto:healthyhomeloanss@gmail.com" },
                ]}
            />
        </div>
    );
};
