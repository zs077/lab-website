'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

const FORMSPREE_URL = 'https://formspree.io/f/mojkeddd';

export default function ContactForm() {
  const { t } = useTranslation();
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
      newErrors.name = t('contact.form.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.invalidEmail');
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.subjectRequired');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageRequired');
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
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('提交表单时出错:', error);
      setFormStatus('error');
    }
  };
  
  return (
    <div className="glassmorphism p-8 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            {t('contact.form.name')} <span className="text-red-500">*</span>
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
            placeholder={t('contact.form.namePlaceholder')}
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            {t('contact.form.email')} <span className="text-red-500">*</span>
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
            placeholder={t('contact.form.emailPlaceholder')}
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-white mb-2">
            {t('contact.form.subject')} <span className="text-red-500">*</span>
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
            <option value="">{t('contact.form.subjectPlaceholder')}</option>
            <option value="cooperation">{t('contact.form.subjects.cooperation')}</option>
            <option value="project">{t('contact.form.subjects.project')}</option>
            <option value="admission">{t('contact.form.subjects.admission')}</option>
            <option value="other">{t('contact.form.subjects.other')}</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            {t('contact.form.message')} <span className="text-red-500">*</span>
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
            placeholder={t('contact.form.messagePlaceholder')}
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
                <span>{t('contact.form.sending')}</span>
              </>
            ) : formStatus === 'success' ? (
              <>
                <FiCheck size={20} />
                <span>{t('contact.form.success')}</span>
              </>
            ) : (
              <>
                <FiSend size={20} />
                <span>{t('contact.form.send')}</span>
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
            <p className="text-white font-medium">{t('contact.form.error')}</p>
            <p className="text-gray-300 text-sm">
              {t('contact.form.error')}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
