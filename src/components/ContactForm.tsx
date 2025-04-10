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
    
    // 清除该字段的错误信息
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
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '请输入主题';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入消息内容';
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
    
    // 模拟API调用
    try {
      // 实际项目中，这里应该是一个API调用
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 成功提交
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // 5秒后重置状态
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
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
            姓名 <span className="text-red-500">*</span>
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
            placeholder="您的姓名"
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            邮箱 <span className="text-red-500">*</span>
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
            placeholder="您的邮箱地址"
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-white mb-2">
            主题 <span className="text-red-500">*</span>
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
            <option value="">请选择主题</option>
            <option value="合作咨询">合作咨询</option>
            <option value="项目洽谈">项目洽谈</option>
            <option value="招生信息">招生信息</option>
            <option value="其他问题">其他问题</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">
            消息内容 <span className="text-red-500">*</span>
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
            placeholder="请详细描述您的问题或需求..."
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
                <span>提交中...</span>
              </>
            ) : formStatus === 'success' ? (
              <>
                <FiCheck size={20} />
                <span>提交成功!</span>
              </>
            ) : (
              <>
                <FiSend size={20} />
                <span>发送消息</span>
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
            <p className="text-white font-medium">提交失败</p>
            <p className="text-gray-300 text-sm">
              抱歉，提交时出现错误。请稍后再试或直接通过邮箱联系我们。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
} 