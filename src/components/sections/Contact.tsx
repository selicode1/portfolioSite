import { useState, useRef, FormEvent } from 'react';
import { useInView } from '../../hooks/useInView';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after a delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-gray-500 dark:text-gray-400 font-semibold tracking-widest mb-3 uppercase" style={{ letterSpacing: '0.18em' }}>
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you! Fill out the form below or reach out through any of my contact channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white dark:bg-gray-950  border border-gray-200 dark:border-gray-800 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white dark:bg-white p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                    <a href="mailto:hello@example.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white dark:bg-white p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white dark:bg-white p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-gray-900 dark:text-white font-medium mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {['github', 'twitter', 'linkedin', 'dribbble'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      aria-label={`Visit ${social} profile`}
                    >
                      {/* We'd render the appropriate icon here */}
                      <span className="text-sm">{social.charAt(0).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-950  border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all ${
                  submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white hover:to-blue-700 text-black hover:bg-gray-500 hover:text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Failed to Send'
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}