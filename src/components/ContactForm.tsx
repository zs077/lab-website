'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error message for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate API call
    try {
      // In a real project, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Successful submission
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };
  
  return (
    <div className="glassmorphism p-8 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-primary'
            }`}
            placeholder="Your name"
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-primary'
            }`}
            placeholder="Your email address"
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-white mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-primary'
            }`}
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          >
            <option value="">Please select a subject</option>
            <option value="Collaboration">Collaboration Inquiry</option>
            <option value="Project">Project Discussion</option>
            <option value="Admission">Admission Information</option>
            <option value="Other">Other Question</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-primary'
            }`}
            placeholder="Please describe your question or request in detail..."
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        
        <div>
          <button
            type="submit"
            disabled={formStatus === 'submitting' || formStatus === 'success'}
            className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              formStatus === 'submitting' ? 'bg-gray-600 cursor-wait' : 
              formStatus === 'success' ? 'bg-green-600 cursor-default' : 
              'bg-primary hover:bg-blue-600'
            }`}
          >
            {formStatus === 'submitting' ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </>
            ) : formStatus === 'success' ? (
              <>
                <FiCheck size={20} />
                <span>Submitted Successfully!</span>
              </>
            ) : (
              <>
                <FiSend size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
      
      {formStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-900/40 border border-red-800 rounded-lg flex items-start gap-3"
        >
          <FiAlertCircle className="text-red-500 mt-0.5" size={20} />
          <div>
            <p className="text-white font-medium">Submission Failed</p>
            <p className="text-gray-300 text-sm">
              Sorry, an error occurred during submission. Please try again later or contact us directly via email.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
} 