import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageBanner } from "@/components/PageBanner";
import { FadeIn } from "@/components/animations/FadeIn";

export const ContactPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c overflow-x-hidden">
            <Navbar />

            <PageBanner title="Contact Us" />

            <div className="py-[100px] bg-white">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-wrap -mx-3">
                        {/* Contact Info */}
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
                                <div className="bg-gray-50 p-8 rounded-lg h-full">
                                    <h3 className="text-2xl font-bold font-rubik_0b5097 mb-6 text-neutral-900">Get in Touch</h3>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Office Address</h4>
                                        <p className="text-zinc-600 leading-relaxed">
                                            Healthy Home Loans<br />
                                            423/6, JK Complex, Veeramudian Barathi Nagar,<br />
                                            Alagappan Nagar, Near Railway Gate,<br />
                                            Muthupatti, Madurai – 625003, Tamil Nadu, India
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Phone</h4>
                                        <p className="text-zinc-600 mb-1">
                                            <a href="tel:+919677719848" className="hover:text-primary transition-colors">+91 96777 19848</a>
                                        </p>
                                        <p className="text-zinc-600">
                                            <a href="tel:+917845837740" className="hover:text-primary transition-colors">+91 78458 37740</a>
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Office Number</h4>
                                        <p className="text-zinc-600 mb-1">
                                            <a href="tel:+919360319848" className="hover:text-primary transition-colors">+91 93603 19848</a>
                                        </p>
                                        <p className="text-zinc-600">
                                            <a href="tel:+919087407771" className="hover:text-primary transition-colors">+91 90874 07771</a>
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-lg mb-2 text-primary">Email</h4>
                                        <p className="text-zinc-600">
                                            <a href="mailto:healthyhomeloanss@gmail.com" className="hover:text-primary transition-colors">healthyhomeloanss@gmail.com</a>
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2 text-primary">Office Hours</h4>
                                        <p className="text-zinc-600">Mon - Sat: 9:30 AM - 6:00 PM</p>
                                        <p className="text-zinc-600">Sunday: By Appointment</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3 px-3">
                            <FadeIn direction="left" delay={0.4} fullWidth className="h-full">
                                <div className="bg-white p-8 rounded-lg border shadow-sm h-full">
                                    <h3 className="text-2xl font-bold font-rubik_0b5097 mb-6 text-neutral-900">Send Us a Message</h3>
                                    <form>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                                <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                                                <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                                                <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-4">
                                            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                                <label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                                                <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary transition-colors" placeholder="Your Phone Number" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block text-sm font-medium text-zinc-700 mb-1">Subject</label>
                                                <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary transition-colors" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
                                            <textarea rows={5} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                                        </div>
                                        <button type="submit" className="bg-primary text-white font-medium py-3 px-8 rounded hover:bg-neutral-900 transition-colors">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Map Section */}
                    <FadeIn direction="up" delay={0.6} className="mt-12" fullWidth>
                        <iframe
                            src="https://maps.google.com/maps?q=9.899893787099797%2C%2078.09390045177312&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-lg shadow-sm"
                        ></iframe>
                    </FadeIn>
                </div>
            </div>

            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
