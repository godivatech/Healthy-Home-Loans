import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import logo from "@/assets/images/healthy.png";

export const FooterContent = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
            <FooterColumn
                variant="logo"
                logoUrl={logo}
                logoAlt="Healthy Home Loans"
                description="Your trusted partner for Home, Business, and Personal loans in Madurai. 15+ years of experience helping dreams come true."
                socialLinks={{
                    twitter: "#",
                    instagram: "#",
                    facebook: "#",
                    linkedin: "#",
                }}
            />
            <FooterColumn
                variant="links"
                title="Quick Links"
                links={[
                    { text: "Home", url: "/" },
                    { text: "About Us", url: "/about" },
                    { text: "Services", url: "/services" },
                    { text: "Contact", url: "/contact" },
                ]}
            />
            <FooterColumn
                variant="links"
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
                title="Contact Us"
                address="423/6, JK Complex, Veeramudian Barathi Nagar, Madurai - 625 003"
                emails={[
                    { text: "healthyhomoloanss@gmail.com", url: "mailto:healthyhomoloanss@gmail.com" },
                ]}
                phones={[
                    { text: "+91 96777 19848", url: "tel:+919677719848" },
                    { text: "+91 78458 37740", url: "tel:+917845837740" },
                ]}
            />
        </div>
    );
};
