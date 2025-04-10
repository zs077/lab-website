import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: '科研实验室 | 团队成员',
  description: '了解我们的研究团队成员，包括教授、研究人员和学生。',
};

// 团队成员数据
const teamMembers = [
  // 教授
  {
    id: 1,
    name: '张教授',
    title: '教授，博士生导师',
    avatar: '/images/professor.jpg',
    email: 'professor@lab.edu',
    website: 'https://example.com/professor',
    education: 'MIT博士，计算机科学',
    research: '智能交通系统，计算机视觉',
    bio: '张教授是国家杰出青年科学基金获得者，IEEE Fellow，曾在多个顶级国际会议和期刊发表论文。主持多项国家自然科学基金和国家重点研发计划项目。',
    category: 'faculty',
  },
  {
    id: 2,
    name: '李博士',
    title: '副教授，博士生导师',
    avatar: '/images/researcher1.jpg',
    email: 'researcher1@lab.edu',
    website: 'https://example.com/researcher1',
    education: 'Stanford大学博士，计算机科学',
    research: '多传感器融合，自动驾驶感知',
    bio: '李博士主要研究方向为多传感器融合和自动驾驶感知，在计算机视觉和人工智能领域发表多篇高水平论文。曾获得IEEE最佳论文奖和青年科学家奖。',
    category: 'faculty',
  },
  {
    id: 3,
    name: '王博士',
    title: '助理教授',
    avatar: '/images/researcher2.jpg',
    email: 'researcher2@lab.edu',
    website: 'https://example.com/researcher2',
    education: 'UCB博士，电子工程',
    research: '低可见场景感知，计算摄像学',
    bio: '王博士专注于低可见场景感知和计算摄像学研究，在恶劣环境下的视觉感知方面有丰富经验，曾参与多个国际合作项目。',
    category: 'faculty',
  },
  
  // 研究人员
  {
    id: 4,
    name: '陈研究员',
    title: '博士后研究员',
    avatar: '/images/postdoc1.jpg',
    email: 'postdoc1@lab.edu',
    website: 'https://example.com/postdoc1',
    education: '清华大学博士，计算机科学',
    research: '神经网络压缩，边缘计算',
    bio: '陈研究员主要从事神经网络压缩和边缘计算研究，开发了多个轻量级深度学习模型，适用于资源受限的设备。',
    category: 'researcher',
  },
  {
    id: 5,
    name: '黄研究员',
    title: '博士后研究员',
    avatar: '/images/postdoc2.jpg',
    email: 'postdoc2@lab.edu',
    website: 'https://example.com/postdoc2',
    education: '北京大学博士，人工智能',
    research: '强化学习，自动驾驶决策',
    bio: '黄研究员专注于强化学习和自动驾驶决策系统研究，设计了多个高效的决策算法，在国际比赛中获得多个奖项。',
    category: 'researcher',
  },
  
  // 学生
  {
    id: 6,
    name: '刘同学',
    title: '博士研究生',
    avatar: '/images/student1.jpg',
    email: 'student1@lab.edu',
    website: '',
    education: '本实验室在读博士生',
    research: '深度学习，目标检测',
    bio: '刘同学正在研究基于深度学习的目标检测算法，特别关注小目标和遮挡情况下的检测性能优化。',
    category: 'student',
  },
  {
    id: 7,
    name: '赵同学',
    title: '博士研究生',
    avatar: '/images/student2.jpg',
    email: 'student2@lab.edu',
    website: '',
    education: '本实验室在读博士生',
    research: '3D点云处理，场景理解',
    bio: '赵同学专注于3D点云处理和场景理解研究，开发了高效的点云分割和识别算法。',
    category: 'student',
  },
  {
    id: 8,
    name: '杨同学',
    title: '硕士研究生',
    avatar: '/images/student3.jpg',
    email: 'student3@lab.edu',
    website: '',
    education: '本实验室在读硕士生',
    research: '多模态学习，视频分析',
    bio: '杨同学研究多模态学习和视频分析，设计了结合视觉和语言信息的视频理解模型。',
    category: 'student',
  },
  {
    id: 9,
    name: '孙同学',
    title: '硕士研究生',
    avatar: '/images/student4.jpg',
    email: 'student4@lab.edu',
    website: '',
    education: '本实验室在读硕士生',
    research: '自监督学习，图像分割',
    bio: '孙同学主要研究自监督学习方法在图像分割任务中的应用，减少对大量标注数据的依赖。',
    category: 'student',
  },
];

export default function Team() {
  // 将团队成员按类别分组
  const faculty = teamMembers.filter(member => member.category === 'faculty');
  const researchers = teamMembers.filter(member => member.category === 'researcher');
  const students = teamMembers.filter(member => member.category === 'student');

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">团队成员</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            我们的团队由来自不同背景的杰出研究人员和学生组成，
            共同致力于推动前沿科学研究和技术创新
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* 教授 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">教授</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faculty.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        
        {/* 研究人员 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">研究人员</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        
        {/* 学生 */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">学生</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {students.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
} 