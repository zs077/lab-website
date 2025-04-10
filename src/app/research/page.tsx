'use client';

import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResearchAreaCard from '@/components/ResearchAreaCard';

// 客户端组件不能导出metadata
// export const metadata: Metadata = {
//   title: '科研实验室 | 研究方向',
//   description: '了解我们在智能交通、多传感器融合和低可见场景感知等领域的前沿研究。',
// };

// 详细研究方向数据
const researchAreas = [
  {
    id: 1,
    title: '智能交通',
    description: '我们的智能交通研究结合计算机视觉、深度学习和大数据分析，致力于提高交通系统的安全性、效率和可持续性。主要研究内容包括：交通场景理解、交通流预测、异常事件检测、智能信号控制等。',
    image: '/images/research-1.jpg',
    projects: [
      '基于深度学习的全天候交通场景分析系统',
      '城市交通流优化与拥堵预测',
      '自动驾驶环境下的协同感知技术'
    ],
    slug: 'intelligent-transportation',
  },
  {
    id: 2,
    title: '多传感器融合',
    description: '多传感器融合研究通过集成来自不同传感器（如激光雷达、毫米波雷达、相机、GPS等）的数据，提高感知系统的准确性和稳健性。我们开发创新算法实现传感器数据的时空同步和融合，特别关注异质传感器之间的互补性。',
    image: '/images/research-2.jpg',
    projects: [
      '异构传感器校准与融合框架',
      '基于注意力机制的多模态特征融合',
      '面向边缘设备的轻量化传感器融合算法'
    ],
    slug: 'multi-sensor-fusion',
  },
  {
    id: 3,
    title: '低可见场景感知',
    description: '我们在恶劣天气（如雨、雾、雪、夜间）等低可见条件下的环境感知方面进行研究，解决这些挑战性场景下的物体检测、跟踪和场景理解问题。研究内容涵盖图像增强、域适应、对抗训练等技术。',
    image: '/images/research-3.jpg',
    projects: [
      '基于物理模型的恶劣天气图像增强与场景重建',
      '全天候目标检测与跟踪算法',
      '夜间与低光照条件下的视觉感知'
    ],
    slug: 'low-visibility-perception',
  },
  {
    id: 4,
    title: '自动驾驶系统',
    description: '我们的自动驾驶研究涵盖感知、预测、规划和控制领域，旨在开发可靠、安全的自动驾驶技术。研究侧重于提高自动驾驶系统在复杂环境和极端情况下的稳定性和决策能力。',
    image: '/images/research-4.jpg',
    projects: [
      '端到端自动驾驶模型设计',
      '行为预测与轨迹规划',
      '自动驾驶安全评估与验证方法'
    ],
    slug: 'autonomous-driving',
  },
  {
    id: 5,
    title: '计算摄像学',
    description: '计算摄像学研究将光学设计、数字图像处理和机器学习相结合，开发新型成像技术和算法。我们致力于突破传统相机的物理限制，提高图像捕捉能力和质量。',
    image: '/images/research-5.jpg',
    projects: [
      '基于神经网络的超分辨率成像',
      '光场相机设计与深度估计',
      '多光谱与偏振成像技术'
    ],
    slug: 'computational-imaging',
  },
];

export default function Research() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">研究方向</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            我们的实验室在计算机视觉、深度学习和智能交通领域进行尖端研究，
            旨在解决实际问题并推动科技创新
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {researchAreas.map((area) => (
            <ResearchAreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 