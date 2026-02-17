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
                                <div className="bg-gray-50 p-6 md:p-8 rounded-lg h-full">
                                    <h3 className="text-xl md:text-2xl font-bold font-rubik_0b5097 mb-6 text-neutral-900">Our Locations</h3>

                                    <div className="space-y-6">
                                        {/* Head Office */}
                                        <div className="bg-white p-4 rounded border border-gray-100 shadow-sm relative pl-4 border-l-4 border-l-primary">
                                            <h4 className="font-bold text-lg mb-2 text-primary">Head Office</h4>
                                            <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                                                423/6, JK Complex,<br />
                                                Veeramudian Barathi Nagar,<br />
                                                Alagappan Nagar, Near Railway Gate,<br />
                                                Muthupatti, Madurai – 625003
                                            </p>
                                            <div className="space-y-1 pt-2 border-t border-gray-50">
                                                <p className="text-zinc-600 text-sm">
                                                    <span className="font-medium text-neutral-900 block text-xs uppercase tracking-wider mb-1">Mobile</span>
                                                    <a href="tel:+919677719848" className="hover:text-primary transition-colors block font-medium">+91 96777 19848</a>
                                                    <a href="tel:+917845837740" className="hover:text-primary transition-colors block font-medium">+91 78458 37740</a>
                                                </p>
                                                <p className="text-zinc-600 text-sm mt-2">
                                                    <span className="font-medium text-neutral-900 block text-xs uppercase tracking-wider mb-1">Office</span>
                                                    <a href="tel:+919360319848" className="hover:text-primary transition-colors block font-medium">+91 93603 19848</a>
                                                    <a href="tel:+919087407771" className="hover:text-primary transition-colors block font-medium">+91 90874 07771</a>
                                                </p>
                                            </div>
                                        </div>

                                        {/* Branch Office */}
                                        <div className="bg-white p-4 rounded border border-gray-100 shadow-sm relative pl-4 border-l-4 border-l-neutral-700">
                                            <h4 className="font-bold text-lg mb-2 text-neutral-800">Tenkasi Branch</h4>
                                            <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                                                36/ Byraha Complex,<br />
                                                Thavalapuram 2nd Street,<br />
                                                Tenkasi – 627811
                                            </p>
                                            <div className="space-y-1 pt-2 border-t border-gray-50">
                                                <p className="text-zinc-600 text-sm">
                                                    <span className="font-medium text-neutral-900 block text-xs uppercase tracking-wider mb-1">Contact</span>
                                                    <a href="tel:+916301581831" className="hover:text-primary transition-colors block font-medium">+91 63015 81831</a>
                                                    <a href="tel:+919677719848" className="hover:text-primary transition-colors block font-medium">+91 96777 19848</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="mb-4">
                                            <h4 className="font-bold text-base mb-1 text-primary">Email Support</h4>
                                            <p className="text-zinc-600">
                                                <a href="mailto:healthyhomeloanss@gmail.com" className="hover:text-primary transition-colors underline decoration-dotted underline-offset-4">healthyhomeloanss@gmail.com</a>
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-base mb-1 text-primary">Office Hours</h4>
                                            <p className="text-zinc-600 text-sm">Mon - Sat: 9:30 AM - 6:00 PM</p>
                                            <p className="text-zinc-600 text-sm">Sunday: By Appointment</p>
                                        </div>
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
