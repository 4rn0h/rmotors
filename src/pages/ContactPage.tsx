// src/pages/ContactPage.tsx
import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | RoyaMotorsUK';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-primary text-white py-12 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We're here to answer any questions you may have about our luxury vehicles and services.
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-6 text-primary">Get in Touch</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-cta w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting us. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary ${ // Corrected: Removed inline comment
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary ${ // Corrected: Removed inline comment
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary ${ // Corrected: Removed inline comment
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary" // Corrected: Removed inline comment
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cta/50 text-primary ${ // Corrected: Removed inline comment
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-medium mb-6 text-primary">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-accent mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <p className="text-primary mb-1">UK Office:</p>
                    <a href="tel:+441234567890" className="text-cta hover:underline">
                      +44 7964 595923
                    </a>
                    <p className="text-primary mt-2 mb-1">East Africa Office:</p>
                    <a href="tel:+254123456789" className="text-cta hover:underline">
                      +254 710 966523
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-accent mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <a href="mailto:info@royamotorsuk.com" className="text-cta hover:underline">
                      info@royamotorsuk.com
                    </a>
                    <p className="text-primary mt-2 mb-1">For inquiries:</p>
                    <a href="mailto:sales@royamotorsuk.com" className="text-cta hover:underline">
                      sales@royamotorsuk.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-primary">Address</p>
                    <p className="text-primary mb-1">UK Headquarters:</p>
                    <p className="text-primary">
                      123 Luxury Lane,<br />
                      London, UK<br />
                      SW1A 1AA
                    </p>
                    <p className="text-primary mt-2 mb-1">East Africa Office:</p>
                    <p className="text-primary">
                      456 Upscale Avenue,<br />
                      Nairobi, Kenya<br />
                      00100
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-accent mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-primary">Business Hours</p>
                    <p className="text-primary mb-1">Monday - Friday:</p>
                    <p className="text-primary">9:00 AM - 6:00 PM</p>
                    <p className="text-primary mt-2 mb-1">Saturday:</p>
                    <p className="text-primary">10:00 AM - 4:00 PM</p>
                    <p className="text-primary mt-2 mb-1">Sunday:</p>
                    <p className="text-primary">By Appointment Only</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-6 text-primary">Connect With Us</h2>
              <div className="flex space-x-4 mb-6">
                <a
                  href="RoyaMotorsUK"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="RoyaMotorsUK"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="RoyaMotorsUK"
                  className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="RoyaMotorsUK"
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M21.15 2.768a1.397 1.397 0 0 0-1.16-.658 27.699 27.699 0 0 0-11.092.828c-3.262 1.05-5.806 2.843-7.47 5.566a11.133 11.133 0 0 0-1.423 8.059l.125.5-1.005 4.836a.698.698 0 0 0 .107.53.7.7 0 0 0 .462.267.686.686 0 0 0 .09.006.7.7 0 0 0 .138-.014l4.83-1 .504.123a11.129 11.129 0 0 0 2.667.32c1.87 0 3.67-.433 5.374-1.286 2.736-1.376 4.733-3.582 5.632-6.32 1.196-3.646.819-8.065-.779-10.757zm-1.331 10.298c-.755 2.307-2.412 4.148-4.675 5.28-1.993 1.004-4.128 1.268-6.2.778L8.26 19l-3.67.76.764-3.667-.124-.686c-.52-2.875-.222-5.27 1.206-7.263 1.384-1.93 3.6-3.416 6.243-4.214a26.632 26.632 0 0 1 6.593-1.165 24.2 24.2 0 0 1 2.712.05c1.346 2.256 1.545 5.96.504 9.25z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M17.183 14.059c-.473-.255-2.458-1.283-2.837-1.423-.189-.069-.327-.103-.466.106-.138.21-.534.675-.655.811-.12.137-.241.154-.448.052-.206-.103-.874-.341-1.665-1.096-.616-.578-1.032-1.29-1.153-1.507-.12-.215-.013-.332.09-.44.094-.098.206-.252.31-.379.103-.126.138-.216.207-.358.069-.142.034-.266-.018-.373-.052-.106-.466-1.182-.64-1.617-.16-.419-.34-.378-.466-.385a8.271 8.271 0 0 0-.396-.007.752.752 0 0 0-.551.258c-.19.206-.724.708-.724 1.724s.742 2 .845 2.137c.103.137 1.462 2.35 3.612 3.2 2.15.85 2.15.567 2.54.531.389-.034 1.254-.539 1.432-1.06.178-.521.178-.967.126-1.06-.053-.095-.193-.152-.396-.253z" clipRule="evenodd" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-medium mb-6 text-primary">Our Locations</h2>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-primary">Interactive Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;