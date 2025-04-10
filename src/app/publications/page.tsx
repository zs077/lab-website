import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PublicationList from '@/components/PublicationList';
import VideoList from '@/components/VideoList';

export const metadata: Metadata = {
  title: '科研实验室 | 科研成果',
  description: '查看我们团队在顶级期刊和会议发表的论文和研究成果。',
};

// 发表论文数据
const papers = [
  {
    id: 1,
    title: '基于深度学习的交通场景全天候感知方法',
    authors: '张教授, 李博士, 王博士',
    venue: 'IEEE Transactions on Intelligent Transportation Systems, 2023',
    abstract: '本文提出了一种基于深度学习的交通场景全天候感知方法，能够在各种天气条件和光照环境下保持高精度的目标检测和场景理解。通过设计新型网络结构和多模态融合策略，有效提高了系统在恶劣环境下的稳定性。',
    link: 'https://example.com/paper1',
    pdf: 'https://example.com/paper1.pdf',
    year: 2023,
    category: 'journal',
  },
  {
    id: 2,
    title: '多模态传感器融合框架在自动驾驶中的应用',
    authors: '李博士, 张教授',
    venue: 'Computer Vision and Pattern Recognition (CVPR), 2022',
    abstract: '提出了一种新型多模态传感器融合框架，用于自动驾驶环境感知。该框架能够有效集成摄像头、激光雷达和毫米波雷达数据，特别针对不同传感器在各种环境条件下的优缺点进行优化融合，提高了感知鲁棒性。',
    link: 'https://example.com/paper2',
    pdf: 'https://example.com/paper2.pdf',
    year: 2022,
    category: 'conference',
  },
  {
    id: 3,
    title: '基于注意力机制的低可见度场景目标检测',
    authors: '王博士, 刘同学, 张教授',
    venue: 'European Conference on Computer Vision (ECCV), 2022',
    abstract: '针对雾、雨、雪等低可见度场景，提出了基于注意力机制的目标检测方法。该方法通过学习场景中的关键区域和特征，有效提高了在恶劣天气条件下的检测准确率，并降低了计算复杂度。',
    link: 'https://example.com/paper3',
    pdf: 'https://example.com/paper3.pdf',
    year: 2022,
    category: 'conference',
  },
  {
    id: 4,
    title: '自监督对比学习在交通场景理解中的应用',
    authors: '陈研究员, 张教授',
    venue: 'International Conference on Machine Learning (ICML), 2022',
    abstract: '提出了一种新的自监督对比学习方法，专门用于交通场景理解。该方法不依赖大量标注数据，通过设计特定的数据增强和对比损失函数，实现了高效的特征学习，在下游任务中表现出色。',
    link: 'https://example.com/paper4',
    pdf: 'https://example.com/paper4.pdf',
    year: 2022,
    category: 'conference',
  },
  {
    id: 5,
    title: '轻量级神经网络设计在边缘设备中的视觉感知应用',
    authors: '李博士, 陈研究员, 黄研究员',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 2021',
    abstract: '研究了轻量级神经网络架构设计，专注于资源受限的边缘设备。通过创新的模型压缩和优化技术，实现了高效率的视觉感知应用，在保持准确率的同时显著降低了计算和存储需求。',
    link: 'https://example.com/paper5',
    pdf: 'https://example.com/paper5.pdf',
    year: 2021,
    category: 'journal',
  },
  {
    id: 6,
    title: '城市交通流预测：融合时空图神经网络的方法',
    authors: '张教授, 刘同学',
    venue: 'Transportation Research Part C: Emerging Technologies, 2021',
    abstract: '提出了一种基于时空图神经网络的城市交通流预测方法，该方法考虑了路网拓扑结构和时间动态特性，通过建模交通流的时空依赖关系，实现了高精度的短期和长期交通流预测。',
    link: 'https://example.com/paper6',
    pdf: 'https://example.com/paper6.pdf',
    year: 2021,
    category: 'journal',
  },
  {
    id: 7,
    title: '基于3D点云的道路场景分割与理解',
    authors: '赵同学, 王博士',
    venue: 'International Conference on 3D Vision (3DV), 2021',
    abstract: '开发了一种高效的3D点云处理方法，用于道路场景分割与理解。通过设计新型的点云特征提取模块和上下文感知分割网络，实现了对复杂道路环境的准确语义理解。',
    link: 'https://example.com/paper7',
    pdf: 'https://example.com/paper7.pdf',
    year: 2021,
    category: 'conference',
  },
];

// 视频演示数据
const videos = [
  {
    id: 1,
    title: '全天候自动驾驶感知系统演示',
    description: '展示我们实验室开发的全天候自动驾驶感知系统，该系统能够在各种恶劣天气条件下保持稳定的感知性能。视频包含雨天、雾天和夜间场景的实时检测结果。',
    thumbnail: '/images/video-thumbnail1.jpg',
    link: 'https://youtu.be/example1',
    year: 2023,
  },
  {
    id: 2,
    title: '多传感器融合平台及应用',
    description: '演示我们的多传感器融合平台如何整合摄像头、激光雷达和毫米波雷达数据，以提高环境感知能力。视频包含实验室测试和实际道路测试场景。',
    thumbnail: '/images/video-thumbnail2.jpg',
    link: 'https://youtu.be/example2',
    year: 2022,
  },
  {
    id: 3,
    title: '智能交通系统实时监控与分析演示',
    description: '展示我们开发的智能交通系统如何实时监控和分析城市交通流量，预测拥堵情况，并提供智能路线规划建议。',
    thumbnail: '/images/video-thumbnail3.jpg',
    link: 'https://youtu.be/example3',
    year: 2022,
  },
];

export default function Publications() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">科研成果</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            我们团队发表的学术论文、技术报告和研究项目展示
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* 论文部分 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">学术论文</h2>
          <PublicationList publications={papers} />
        </section>
        
        {/* 视频演示部分 */}
        <section>
          <h2 className="text-3xl font-bold mb-10">视频演示</h2>
          <VideoList videos={videos} />
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 