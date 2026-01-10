import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { Copyright } from "@/sections/Copyright";
import { ScrollToTop } from "@/components/ScrollToTop";

export const ContactPage = () => {
    return (
        <div className="text-neutral-800 font-roboto_68d44c">
            <Navbar />

            <div className="bg-neutral-900 py-[80px] text-center">
                <h1 className="text-white text-4xl font-bold font-rubik_0b5097 mb-2">Contact Us</h1>
                <p className="text-zinc-400">Home / Contact Us</p>
            </div>

            <div className="py-[100px] bg-white">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-wrap -mx-3">
                        {/* Contact Info */}
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <div className="bg-gray-50 p-8 rounded-lg h-full">
                                <h3 className="text-2xl font-bold font-rubik_0b5097 mb-6 text-neutral-900">Get in Touch</h3>

                                <div className="mb-6">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Office Address</h4>
                                    <p className="text-zinc-600 leading-relaxed">
                                        Healthy Home Loans<br />
                                        423/6, JK Complex<br />
                                        Veeramudian Barathi Nagar<br />
                                        Madurai - 625 003, Tamil Nadu
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
                                    <h4 className="font-bold text-lg mb-2 text-primary">Email</h4>
                                    <p className="text-zinc-600">
                                        <a href="mailto:healthyhomoloanss@gmail.com" className="hover:text-primary transition-colors">healthyhomoloanss@gmail.com</a>
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-primary">Office Hours</h4>
                                    <p className="text-zinc-600">Mon - Sat: 9:30 AM - 7:00 PM</p>
                                    <p className="text-zinc-600">Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-2/3 px-3">
                            <div className="bg-white p-8 rounded-lg border shadow-sm">
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
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.985657753994!2d78.1188!3d9.9391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnMjAuOCJOIDc4wrAwNycwNy43IkU!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-lg shadow-sm"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
            <Copyright />
            <ScrollToTop />
        </div>
    );
};
