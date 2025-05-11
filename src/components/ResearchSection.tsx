'use client';

import ResearchAreaCard from '@/components/ResearchAreaCard';

// Detailed research areas data
const researchAreas = [
  {
    id: 1,
    title: 'Intelligent Transportation',
    description: 'Our intelligent transportation research combines computer vision, deep learning, and big data analysis to improve the safety, efficiency, and sustainability of transportation systems. Key research areas include: traffic scene understanding, traffic flow prediction, anomaly detection, and intelligent signal control.',
    image: '/images/research-1.jpg',
    projects: [
      'Deep Learning-based All-weather Traffic Scene Analysis System',
      'Urban Traffic Flow Optimization and Congestion Prediction',
      'Collaborative Perception Technology for Autonomous Driving'
    ],
    slug: 'intelligent-transportation',
  },
  {
    id: 2,
    title: 'Multi-sensor Fusion',
    description: 'Multi-sensor fusion research integrates data from various sensors (such as LiDAR, millimeter-wave radar, cameras, GPS, etc.) to improve the accuracy and robustness of perception systems. We develop innovative algorithms for spatiotemporal synchronization and fusion of sensor data, with special focus on complementarity between heterogeneous sensors.',
    image: '/images/research-2.jpg',
    projects: [
      'Heterogeneous Sensor Calibration and Fusion Framework',
      'Attention-based Multi-modal Feature Fusion',
      'Lightweight Sensor Fusion Algorithms for Edge Devices'
    ],
    slug: 'multi-sensor-fusion',
  },
  {
    id: 3,
    title: 'Low-visibility Scene Perception',
    description: 'We conduct research on environmental perception under adverse weather conditions (such as rain, fog, snow, and nighttime), addressing challenges in object detection, tracking, and scene understanding in these challenging scenarios. Research covers image enhancement, domain adaptation, and adversarial training techniques.',
    image: '/images/research-3.jpg',
    projects: [
      'Physics-based Image Enhancement and Scene Reconstruction in Adverse Weather',
      'All-weather Object Detection and Tracking Algorithms',
      'Visual Perception in Nighttime and Low-light Conditions'
    ],
    slug: 'low-visibility-perception',
  },
  {
    id: 4,
    title: 'Autonomous Driving Systems',
    description: 'Our autonomous driving research covers perception, prediction, planning, and control, aiming to develop reliable and safe autonomous driving technologies. Research focuses on improving system stability and decision-making capabilities in complex environments and extreme conditions.',
    image: '/images/research-4.jpg',
    projects: [
      'End-to-end Autonomous Driving Model Design',
      'Behavior Prediction and Trajectory Planning',
      'Autonomous Driving Safety Assessment and Verification Methods'
    ],
    slug: 'autonomous-driving',
  },
  {
    id: 5,
    title: 'Computational Imaging',
    description: 'Computational imaging research combines optical design, digital image processing, and machine learning to develop new imaging technologies and algorithms. We aim to break through the physical limitations of traditional cameras and improve image capture capabilities and quality.',
    image: '/images/research-5.jpg',
    projects: [
      'Neural Network-based Super-resolution Imaging',
      'Light Field Camera Design and Depth Estimation',
      'Multi-spectral and Polarization Imaging Technology'
    ],
    slug: 'computational-imaging',
  },
];

export default function ResearchSection() {
  return (
    <div className="space-y-24">
      {researchAreas.map((area) => (
        <ResearchAreaCard key={area.id} area={area} />
      ))}
    </div>
  );
} 