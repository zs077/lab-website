'use client';

import TeamMemberCard from '@/components/TeamMemberCard';

// Team member data
const teamMembers = [
  // Professors
  {
    id: 1,
    name: 'Prof. Zhang',
    title: 'Professor, PhD Supervisor',
    avatar: '/images/professor.jpg',
    email: 'professor@lab.edu',
    website: 'https://example.com/professor',
    education: 'PhD in Computer Science, MIT',
    research: 'Intelligent Transportation Systems, Computer Vision',
    bio: 'Prof. Zhang is a recipient of the National Science Fund for Distinguished Young Scholars and IEEE Fellow. He has published papers in multiple top international conferences and journals. He leads multiple projects funded by the National Natural Science Foundation and National Key R&D Program.',
    category: 'faculty',
  },
  {
    id: 2,
    name: 'Dr. Li',
    title: 'Associate Professor, PhD Supervisor',
    avatar: '/images/researcher1.jpg',
    email: 'researcher1@lab.edu',
    website: 'https://example.com/researcher1',
    education: 'PhD in Computer Science, Stanford University',
    research: 'Multi-sensor Fusion, Autonomous Driving Perception',
    bio: 'Dr. Li\'s main research areas are multi-sensor fusion and autonomous driving perception. He has published numerous high-level papers in computer vision and artificial intelligence. He has received the IEEE Best Paper Award and Young Scientist Award.',
    category: 'faculty',
  },
  {
    id: 3,
    name: 'Dr. Wang',
    title: 'Assistant Professor',
    avatar: '/images/researcher2.jpg',
    email: 'researcher2@lab.edu',
    website: 'https://example.com/researcher2',
    education: 'PhD in Electrical Engineering, UC Berkeley',
    research: 'Low-visibility Scene Perception, Computational Imaging',
    bio: 'Dr. Wang focuses on low-visibility scene perception and computational imaging research. He has extensive experience in visual perception in adverse environments and has participated in multiple international collaboration projects.',
    category: 'faculty',
  },
  
  // Researchers
  {
    id: 4,
    name: 'Dr. Chen',
    title: 'Postdoctoral Researcher',
    avatar: '/images/postdoc1.jpg',
    email: 'postdoc1@lab.edu',
    website: 'https://example.com/postdoc1',
    education: 'PhD in Computer Science, Tsinghua University',
    research: 'Neural Network Compression, Edge Computing',
    bio: 'Dr. Chen primarily works on neural network compression and edge computing research. He has developed multiple lightweight deep learning models suitable for resource-constrained devices.',
    category: 'researcher',
  },
  {
    id: 5,
    name: 'Dr. Huang',
    title: 'Postdoctoral Researcher',
    avatar: '/images/postdoc2.jpg',
    email: 'postdoc2@lab.edu',
    website: 'https://example.com/postdoc2',
    education: 'PhD in Artificial Intelligence, Peking University',
    research: 'Reinforcement Learning, Autonomous Driving Decision-making',
    bio: 'Dr. Huang focuses on reinforcement learning and autonomous driving decision systems research. He has designed multiple efficient decision-making algorithms and has won numerous awards in international competitions.',
    category: 'researcher',
  },
  
  // Students
  {
    id: 6,
    name: 'Liu',
    title: 'PhD Student',
    avatar: '/images/student1.jpg',
    email: 'student1@lab.edu',
    website: '',
    education: 'PhD Candidate in our laboratory',
    research: 'Deep Learning, Object Detection',
    bio: 'Liu is researching deep learning-based object detection algorithms, with a particular focus on optimizing detection performance for small objects and occlusion scenarios.',
    category: 'student',
  },
  {
    id: 7,
    name: 'Zhao',
    title: 'PhD Student',
    avatar: '/images/student2.jpg',
    email: 'student2@lab.edu',
    website: '',
    education: 'PhD Candidate in our laboratory',
    research: '3D Point Cloud Processing, Scene Understanding',
    bio: 'Zhao focuses on 3D point cloud processing and scene understanding research, developing efficient point cloud segmentation and recognition algorithms.',
    category: 'student',
  },
  {
    id: 8,
    name: 'Yang',
    title: 'Master\'s Student',
    avatar: '/images/student3.jpg',
    email: 'student3@lab.edu',
    website: '',
    education: 'Master\'s Student in our laboratory',
    research: 'Multi-modal Learning, Video Analysis',
    bio: 'Yang researches multi-modal learning and video analysis, designing video understanding models that combine visual and language information.',
    category: 'student',
  },
  {
    id: 9,
    name: 'Sun',
    title: 'Master\'s Student',
    avatar: '/images/student4.jpg',
    email: 'student4@lab.edu',
    website: '',
    education: 'Master\'s Student in our laboratory',
    research: 'Self-supervised Learning, Image Segmentation',
    bio: 'Sun mainly researches self-supervised learning methods applied to image segmentation tasks, reducing dependence on large amounts of annotated data.',
    category: 'student',
  },
];

export default function TeamSection() {
  // Group team members by category
  const faculty = teamMembers.filter(member => member.category === 'faculty');
  const researchers = teamMembers.filter(member => member.category === 'researcher');
  const students = teamMembers.filter(member => member.category === 'student');

  return (
    <>
      {/* Professors */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Professors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculty.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
      
      {/* Researchers */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Researchers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
      
      {/* Students */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </>
  );
} 