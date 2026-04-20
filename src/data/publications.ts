// ============================================================
// 📌 论文数据文件 — 如何添加新论文：
//
// 在下方 publications 数组末尾（最后一个 } 之前）按照
// 相同格式新增一个对象，例如：
//
// {
//   id: 8,                          // 递增 id（唯一，不可重复）
//   title: 'Your Paper Title',       // 论文标题（只需英文/原文即可）
//   authors: 'Zhang, Li, Wang',      // 作者列表
//   venue: 'CVPR 2024',              // 发表期刊/会议全名 + 年份
//   year: 2024,                      // 年份（用于排序和筛选）
//   category: 'conference',          // 'journal' 或 'conference'
//   abstract: {                      // 摘要支持中英文双语
//     en: 'English abstract...',
//     zh: '中文摘要……',
//   },
// },
//
// 保存文件后网站会自动更新，无需修改其他任何文件。
// ============================================================

export type Publication = {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: string; // 可填任意字符串，如 'journal'、'conference'、'book'、'patent' 等
  abstract: {
    en: string;
    zh: string;
  };
};

// ▼▼▼ 在此数组中维护所有论文数据 ▼▼▼
export const publications: Publication[] = [
  {
    id: 1,
    title: 'Dynamic Cumulative Human-Like Brake Control Modeling for Autonomous Vehicle Collision Analysis.',
    authors: 'Ci Liang, Mohamed. Ghazel, Wei. Zheng and Wei. Chen',
    venue: 'IEEE Transactions on Vehicular Technology, vol. 74, no. 3, pp. 3976-3990, 2025.',
    year: 2025,
    category: 'journal',
    abstract: {
      en: "Rear-end collision where a human-driven vehicle (HV) hits an autonomous vehicle (AV) from behind (called HV-AV collision) represents a critical scenario in the context of mixed traffic including both AVs and HVs. In the present paper, the Human-like Brake Initiation and Modulation (HLBIM) model is first proposed to emulate the driver brake control, and further employed to investigate HV-AV collision risk in the Stop-in-Lane (SiL) scenario where an HV follows an AV. The HLBIM model combines human driving intention, vision-based expectancy and certain inherent characteristics of human driving based on a novel dynamic accumulation of braking-needed evidence. Especially, the HLBIM model incorporates a high-level expectancy derived from practical driving expertise to ensure precise timing for braking initiation. Furthermore, the combined distribution of Off-Road-Glance and Time-Headway is originally proposed and integrated into the HLBIM model, to emulate drivers' diverted attention during their driving activities. Our approach addresses a main issue, which is often neglected in the existing studies on HV-AV collision, which corresponds to the coupling effect of human driving intention, vision-based expectancy and inherent characteristic of human driving on HV-AV collision risk. Moreover, we analyze HV-AV collision risk in two specified SiL cases, which has rarely been investigated in existing related studies. The model performance comparison shows that our HLBIM model outperforms the referred models. Furthermore, the case study comprehensively reveals how the HV-AV collision probability changes with respect to various collision speeds, initial speeds, decelerations of cars under test, percentages of overlap detection of the AV in front, and lane change durations. The HLBIM model can be used to simulate driver-in-the-loop car-following experiment. Moreover, it can be fitted in automatic braking systems within AVs to achieve human-like braking.",
      zh: '在包含自动驾驶车辆（AV）和人工驾驶车辆（HV）的混合交通环境中，由人工驾驶车辆（HV）从后方撞击自动驾驶车辆（AV）的追尾碰撞（简称 HV-AV 碰撞）是一种关键场景。本文首先提出了一种类人制动启动与调节（HLBIM）模型来模拟驾驶员的制动控制，并将其应用于车道内停车（SiL）场景下 HV 跟随 AV 的 HV-AV 碰撞风险研究。HLBIM 模型结合了人类驾驶意图、基于视觉的预期以及人类驾驶的某些固有特征，并基于一种新颖的制动需求证据动态累积方法。特别地，HLBIM 模型融入了源自实际驾驶经验的高级预期，以确保制动启动的精确时机。此外，本文首次提出并将非道路视线和车头时距的组合分布集成到 HLBIM 模型中，以模拟驾驶员在驾驶过程中注意力分散的情况。我们的方法解决了现有关于人车-自动驾驶汽车碰撞研究中经常被忽略的一个主要问题，即人类驾驶意图、基于视觉的预期以及人类驾驶固有特征对人车-自动驾驶汽车碰撞风险的耦合效应。此外，我们分析了两个特定 SiL 案例中的人车-自动驾驶汽车碰撞风险，而现有相关研究鲜有涉及。模型性能对比表明，我们的 HLBIM 模型优于其他参考模型。此外，案例研究全面揭示了人车-自动驾驶汽车碰撞概率如何随碰撞速度、初始速度、被测车辆减速度、前方自动驾驶汽车重叠检测率以及变道持续时间等因素而变化。 HLBIM 模型可用于模拟驾驶员在环汽车跟随实验。 而且，它可以安装在自动驾驶汽车的自动刹车系统中，以实现类似人类的刹车效果。',
    },
  },
  {
    id: 2,
    title: 'A dynamic synchronous interactive functional validation approach for electric vehicles.',
    authors: 'Ci Liang, Mohamed Ghazel, Chi Xie, Wei Zheng and Wei Chen',
    venue: 'IEEE Transactions on Intelligent Vehicles, 2024.',
    year: 2024,
    category: 'journal',
    abstract: {
      en: 'Functional safety is crucial for Electric Vehicles (EVs) as it ensures that the EV systems operate correctly and safely. This paper aims to propose an efficient and holistic approach to verify functionality and ensure the functional safety of EVs. A holistic closed-loop dynamic synchronous functional validation (CL-DSFV) methodology is proposed. The CL-DSFV methodology consists of a set of sequential analysis/modeling methods: use case analysis, functional concept analysis, functional state/transition modeling, simulation method of the user interaction based on dynamic synchronous interconnection between the FSM and the user behavior simulation platform, verification method of checking correctness and completeness of functions according to the user behavior cover list and test cases. Moreover, a novel transition engine with usage and functionality features is originally developed to constrain the switching between functional states of the FSM. UIG algorithm is originally proposed to generate functional validation configurations automatically and further achieve the automation of dynamic synchronous validation. Superiority of the CL-DSFV is verified through the comparison with several referred relevant existing methods. Furthermore, CL-DSFV is applied to functional validation of the product function “Electrical Energy Management” (EEM) of EVs. The outcomes attest that the CL-DSFV allows for effectively ensuring the completeness and correctness of the considered functions, and helps ensure the traceability of function decomposition.',
      zh: '功能安全对于电动汽车（EV）至关重要，因为它确保电动汽车系统能够正确、安全地运行。本文旨在提出一种高效、全面的方法，用于验证电动汽车的功能并确保其功能安全。本文提出了一种整体闭环动态同步功能验证（CL-DSFV）方法。CL-DSFV 方法包含一系列顺序分析/建模方法：用例分析、功能概念分析、功能状态/转换建模、基于有限状态机（FSM）与用户行为仿真平台之间动态同步互连的用户交互仿真方法，以及根据用户行为覆盖列表和测试用例检查功能正确性和完整性的验证方法。此外，本文还原创性地开发了一种具有使用和功能特性的新型转换引擎，用于约束 FSM 功能状态之间的切换。同时，本文还原创性地提出了 UIG 算法，用于自动生成功能验证配置，并进一步实现动态同步验证的自动化。通过与几种相关的现有方法进行比较，验证了 CL-DSFV 方法的优越性。此外，CL-DSFV 还应用于电动汽车“电能管理”（EEM）产品功能的功能验证。结果表明，CL-DSFV 能够有效确保所考虑功能的完整性和正确性，并有助于确保功能分解的可追溯性。',
    },
  },
  {
    id: 3,
    title: 'Automated test approach based on all paths covered optimal algorithm and sequence priority selected algorithm.',
    authors: 'Wei Zheng, Ci Liang, Rui Wang, Weijie Kong',
    venue: 'IEEE Transactions on Intelligent Transportation Systems 15(6), 2551-2560, 2014.',
    year: 2014,
    category: 'journal',
    abstract: {
      en: 'A timely and complete test is an important factor to assure the functionality and safety of a railway signal system before it is put into service. With the development of rail transportation in China, the traditional semiautomatic test methods cannot satisfy the timely and complete test requirements any longer. This paper proposes an automated model-based test method. First, colored Petri nets are used as a formal language to describe the system specification. Second, the all paths covered optimal algorithm and the sequence priority selected algorithm are proposed to generate the test cases and sequences automatically. Third, taking a typical radio block center (RBC) handover scenario as an example, the generated test cases and sequences are applied into the RBC functionality test platform. The testing result validated the feasibility and efficiency of the proposed automated test method. Compared with the random-walk-based test sequence generation algorithm, the repeatability rate of the generated test sequences is reduced by 46%. The test sequences can cover all the generated test cases, and the cases can cover all the related criteria in the function requirements specification of the Chinese Train Control System Level 3.',
      zh: '在铁路信号系统投入使用前，及时、全面的测试是确保其功能性和安全性的重要因素。随着中国轨道交通的发展，传统的半自动测试方法已无法满足及时、全面的测试需求。本文提出了一种基于模型的自动化测试方法。首先，采用着色 Petri 网作为形式化语言来描述系统规范。其次，提出了全路径覆盖最优算法和序列优先级选择算法来自动生成测试用例和测试序列。第三，以典型的无线电闭塞中心（RBC）切换场景为例，将生成的测试用例和测试序列应用于 RBC 功能测试平台。测试结果验证了所提出的自动化测试方法的可行性和有效性。与基于随机游走的测试序列生成算法相比，该方法生成的测试序列重复率降低了 46%。测试序列能够覆盖所有生成的测试用例，而这些测试用例又能够覆盖中国列车控制系统三级功能需求规范中的所有相关准则。',
    },
  },
  {
    id: 4,
    title: 'A novel extended social force model for studying the impact of the heterogeneity of pedestrian physical fitness on emergency evacuation efficiency.',
    authors: 'Mingyang Zhao, Ci Liang',
    venue: 'Physica A: Statistical Mechanics and its Applications, vol. 653, 130101, 2024.',
    year: 2024,
    category: 'journal',
    abstract: {
      en: 'Emergencies in public places, particularly confined crowded areas, will disrupt the stability of dense crowds and consequently lead to accidents. To promote public emergency safety, there is a pressing need for efficient modeling methods to investigate the evacuation mechanism in these places and improve the social public safety. This study proposes a Physical Fitness Heterogeneity based Social Force Model (PFH-SFM) that takes into account the heterogeneous desired evacuation velocity caused by the heterogeneity of pedestrian physical fitness, by means of developing the normalized desired velocity ratio. Then, we use PFH-SFM to investigate the relationships between the escape rate and the desired velocity, and between the evacuation duration and the desired velocity in terms of various group sizes with heterogeneous physical fitness, the relationship between the percentage of reduction in evacuation duration and desired velocity when including weak pedestrians, the pedestrian distribution in the evacuation process, the relationship between the total evacuation duration and the desired velocity in terms of various proportions of weak pedestrians and the relationship between the evacuation duration and the desired velocity in terms of various normalized starting and ending velocity ratios by considering various group sizes, respectively. The findings of this study show that the existence of a certain small proportion of pedestrians with weak physical fitness can promote global evacuation dynamics, especially in the case of high crowded density, and can reduce evacuation duration by up to 20% in our experiments. Additionally, when the percentage of pedestrians with weak physical fitness is relatively high, they tend to have a detrimental effect on the evacuation efficiency. Furthermore, there exists a moderate normalized desired starting velocity ratio that maximizes the overall evacuation efficiency; on the other hand, the lower the normalized desired ending velocity ratio is, the more efficient the evacuation is. To the best of the authors’ knowledge, this study is the first time to introduce the concepts of normalized desired starting and ending velocity ratios and innovatively analyzes the impact of the continuously changing desired velocity of pedestrians on the evacuation efficiency in multi-exit scenarios. The results offer valuable insights for relevant stakeholders to formulate effective evacuation plans, so as to enhance urban emergency capacity and minimize social and economic losses.',
      zh: 'Emergencies in public places, particularly confined crowded areas, will disrupt the stability of dense crowds and consequently lead to accidents. To promote public emergency safety, there is a pressing need for efficient modeling methods to investigate the evacuation mechanism in these places and improve the social public safety. This study proposes a Physical Fitness Heterogeneity based Social Force Model (PFH-SFM) that takes into account the heterogeneous desired evacuation velocity caused by the heterogeneity of pedestrian physical fitness, by means of developing the normalized desired velocity ratio. Then, we use PFH-SFM to investigate the relationships between the escape rate and the desired velocity, and between the evacuation duration and the desired velocity in terms of various group sizes with heterogeneous physical fitness, the relationship between the percentage of reduction in evacuation duration and desired velocity when including weak pedestrians, the pedestrian distribution in the evacuation process, the relationship between the total evacuation duration and the desired velocity in terms of various proportions of weak pedestrians and the relationship between the evacuation duration and the desired velocity in terms of various normalized starting and ending velocity ratios by considering various group sizes, respectively. The findings of this study show that the existence of a certain small proportion of pedestrians with weak physical fitness can promote global evacuation dynamics, especially in the case of high crowded density, and can reduce evacuation duration by up to 20% in our experiments. Additionally, when the percentage of pedestrians with weak physical fitness is relatively high, they tend to have a detrimental effect on the evacuation efficiency. Furthermore, there exists a moderate normalized desired starting velocity ratio that maximizes the overall evacuation efficiency; on the other hand, the lower the normalized desired ending velocity ratio is, the more efficient the evacuation is. To the best of the authors’ knowledge, this study is the first time to introduce the concepts of normalized desired starting and ending velocity ratios and innovatively analyzes the impact of the continuously changing desired velocity of pedestrians on the evacuation efficiency in multi-exit scenarios. The results offer valuable insights for relevant stakeholders to formulate effective evacuation plans, so as to enhance urban emergency capacity and minimize social and economic losses.',
    },
  },
  {
    id: 0,
    title: 'Analyzing rear-end collision risk relevant to autonomous vehicles by using a humanlike brake model.',
    authors: 'Ci Liang, Mohamed Ghazel, Yusheng Ci, Wei Zheng',
    venue: 'Journal of Transportation Engineering, Part A: Systems,150(7), 04024031, 2024.',
    year: 2024,
    category: 'journal',
    abstract: {
      en: 'Rear-end collisions between autonomous vehicles (AVs) and human-driven vehicles (HVs) represent critical scenarios in road networks. Few studies have focused on the scenarios where a HV hits an AV from behind (called a HV-AV collision). This paper aims to investigate the occurrence of HV-AV collisions in the stop-in-lane (SiL) scenario where a HV follows an AV. A humanlike brake control (HLBC) model is firstly proposed to simulate the driver brake control. The HLBC model considers human driving intention, vision-based expectancy, and certain inherent characteristics of human driving to achieve dynamic humanlike braking. Additionally, the joint distribution of off-road-glance and time-headway is originally introduced to simulate the glance distraction of drivers during their dynamic vehicle control. Sequentially, we apply the HLBC model to the SiL scenario to investigate how the HV-AV collision probability changes with respect to various dynamic driving parameters. The results of the case study provide a thorough understanding of the dynamic driving conditions that lead to HV-AV collisions and pave the way for identifying practical countermeasures to improve the road safety involving AVs.',
      zh: '自动驾驶车辆（AV）与人类驾驶车辆（HV）之间的追尾碰撞是道路网络中的关键场景。鲜有研究关注 HV 从后方撞击 AV 的场景（称为 HV-AV 碰撞）。本文旨在研究在车道内停车（SiL）场景下，HV 跟随 AV 时 HV-AV 碰撞的发生情况。首先，本文提出了一种类人制动控制（HLBC）模型来模拟驾驶员的制动控制。该 HLBC 模型考虑了人类驾驶意图、基于视觉的预期以及人类驾驶的某些固有特征，以实现动态类人制动。此外，本文首次引入了非道路视线和车头时距的联合分布，以模拟驾驶员在动态车辆控制过程中视线分散的情况。随后，我们将 HLBC 模型应用于 SiL 场景，以研究 HV-AV 碰撞概率如何随各种动态驾驶参数的变化而变化。该案例研究的结果可以深入了解导致 HV-AV 碰撞的动态驾驶条件，并为确定切实可行的对策以提高涉及自动驾驶汽车的道路安全铺平道路。',
    },
  },
  {
    id: 16,
    title: 'Ontology-Enhanced STPA Method of Scenario Safety Constraint Identification for Autonomous Driving.',
    authors: 'Ci Liang, Mingyang Zhao, Yusheng Ci',
    venue: 'Journal of Transportation Engineering, Part A: Systems, 151(10): 04025081, 2025.',
    year: 2025,
    category: 'journal',
    abstract: {
      en: 'Hazards from complex operational scenarios bring huge challenges for autonomous driving. This study proposes the External Operational Scenario-Systems Theoretic Process Analysis (EOS-STPA) approach, which extends the scope of traditional Systems Theoretic Process Analysis (STPA) to operational scenarios. By incorporating ontology-based knowledge representation and employing a hierarchical control structure that encompasses scenario control actions with feedback loops to ensure adaptive decision-making, EOS-STPA can formalize the interaction between systems and operational scenarios. Furthermore, EOS-STPA identifies and generates formalized scenario safety constraints comprehensively while enhancing safety of the intended functionality (SOTIF) for AD. Additionally, EOS-STPA’s hierarchical control modeling facilitates efficient scenario hazard identification through structured scenario decomposition. In the context of an autonomous vehicle car-following scenario, EOS-STPA demonstrates its strong capability in formalized safety analysis. This study is a pioneering effort to extend STPA to external operational scenarios while transforming technical system perspectives into operational scenario viewpoints.',
      zh: 'Hazards from complex operational scenarios bring huge challenges for autonomous driving. This study proposes the External Operational Scenario-Systems Theoretic Process Analysis (EOS-STPA) approach, which extends the scope of traditional Systems Theoretic Process Analysis (STPA) to operational scenarios. By incorporating ontology-based knowledge representation and employing a hierarchical control structure that encompasses scenario control actions with feedback loops to ensure adaptive decision-making, EOS-STPA can formalize the interaction between systems and operational scenarios. Furthermore, EOS-STPA identifies and generates formalized scenario safety constraints comprehensively while enhancing safety of the intended functionality (SOTIF) for AD. Additionally, EOS-STPA’s hierarchical control modeling facilitates efficient scenario hazard identification through structured scenario decomposition. In the context of an autonomous vehicle car-following scenario, EOS-STPA demonstrates its strong capability in formalized safety analysis. This study is a pioneering effort to extend STPA to external operational scenarios while transforming technical system perspectives into operational scenario viewpoints.',
    },
  },
  {
    id: 5,
    title: 'A new insight on the risky behavior of motorists at railway level crossings: An observational field study.',
    authors: 'Ci Liang, Mohamed Ghazel, Olivier Cazier, El-Miloudi El-Koursi',
    venue: 'Accident Analysis and Prevention 108, 181-188, 2017.',
    year: 2017,
    category: 'journal',
    abstract: {
      en: 'Accidents at railway level crossings (LXs) give rise to serious material and human damage. Particularly, collisions between trains and motorized vehicles are the most critical accidents occurring at LXs. It is worth noticing that violations committed by vehicle drivers are the primary cause of such accidents. The present study is a tentative to acquire a better understanding of risky behavior of vehicle drivers while crossing LXs during the closure cycle. Namely, risk analysis based on field measurement conducted at four automated LXs with two half barriers is performed. We focus on vehicle driver behavior during the LX closure cycle while distinguishing between different phases. In fact, the closure cycle is divided into three phases which are “Ph2 Red Flash and Siren”, “Ph3 Barriers Coming Down” and “Ph4 Barriers Down”; and vehicle driver behavior in each phase as time increases is scrutinized respectively. Particularly, zigzag scenarios are detected, using an original experimental setting that we have implemented, and analyzed in detail. The main findings based on the analysis demonstrate that the peak of violation rate in the morning is later than the actual rush hour in the morning; a distinct peak of the violation rate shows on Friday, while the violation rate on weekend is fairly low; the relative violation rate of vehicles with high speed decreases continuously as time advances from Ph2 to Ph3 in the daytime; the violation rate during Ph4 decreases as Ph4 duration is prolonged, which contradicts a general speculation that a higher rate of zigzag violations would appear as the duration of Ph4 is extended. These findings open the way towards determining the impacting factors which have an important contribution to the vehicle driver decision-making in this context (e.g., traffic density, time schedule and phase duration). In addition, the outputs of the present study are conducive to identifying potential interventions to improve safety at LXs.',
      zh: '铁路平交道口事故会造成严重的财产和人员伤亡。其中，火车与机动车相撞事故最为严重。值得注意的是，车辆驾驶员的违规行为是此类事故的主要原因。本研究旨在初步了解车辆驾驶员在平交道口封闭周期内通过时的危险行为。具体而言，本研究基于对四个配备两个半栏杆的自动化平交道口的现场测量数据，开展了风险分析。我们重点关注车辆驾驶员在平交道口封闭周期内的行为，并区分了不同阶段。实际上，封闭周期分为三个阶段：“第二阶段：红色闪光灯和警报器响起”、“第三阶段：栏杆放下”和“第四阶段：栏杆放下”；并分别考察了车辆驾驶员在每个阶段随时间推移的行为。特别地，我们利用自主设计的实验装置，检测并详细分析了车辆驾驶员的之字形行驶行为。基于分析的主要发现表明，早晨违章率高峰出现的时间晚于实际的早高峰时段；周五出现明显的违章率高峰，而周末的违章率则相当低；白天，随着时间从第二阶段（Ph2）到第三阶段（Ph3），高速车辆的相对违章率持续下降；第四阶段（Ph4）的违章率随着第四阶段持续时间的延长而下降，这与人们普遍认为随着第四阶段持续时间的延长，之字形违章率会上升的推测相矛盾。 这些发现为确定影响车辆驾驶员在此情境下决策的重要因素（例如，交通密度、时间表和阶段持续时间）奠定了基础。此外，本研究的成果有助于确定提高低速交叉路口安全性的潜在干预措施。',
    },
  },
  {
    id: 6,
    title: 'Analyzing risky behavior of motorists during the closure cycle of railway level crossings.',
    authors: 'Ci Liang, Mohamed Ghazel,Olivier Cazier,El-Miloudi El-Koursi',
    venue: 'Safety Science 110, Part B,115-126,2018.',
    year: 2018,
    category: 'journal',
    abstract: {
      en: 'Level Crossing (LX) safety is one of the most critical issues for railways. Collisions between trains and motorized vehicles contribute most to LX accidents, while the risky behavior of motorists is the primary cause of such accidents. Therefore, motorist behavior at LXs is a safety concern that requires special attention care. The present study is a tentative to acquire a better understanding of risky motorist behavior at LXs. Namely, risk analysis of motorist behavior is performed based on field observation conducted at 11 automatic LXs (10 equipped with two half barriers (SAL2) and 1 equipped with four half barriers (SAL4)). We particularly focus on motorist behavior during the LX closure cycle when the barriers are closed down completely. Based on recorded measurements, the zigzag violation rate is analyzed with regard to the prolonged LX closure duration and LX location (railway station nearby or not), respectively. Then, some other features characterizing risky behavior are determined, such as troop phenomenon. Besides, since our aim is to analyze motorist behavior at SAL2 LXs, one SAL4 LX was considered in our experiments to examine the distinction of motorist responses to SAL2 and SAL4 protection systems, so as to compare the efficiency of SAL2 and SAL4 LXs in terms of safety. In summary, the findings of our analysis offer a novel insight for interpreting significant aspects underlying motorist decision-making during the LX closure cycle and facilitate identifying technical solutions to improve LX safety.',
      zh: '铁路道口安全是铁路运营中最关键的问题之一。列车与机动车相撞是造成道口事故的主要原因，而机动车驾驶员的危险驾驶行为则是此类事故的根本原因。因此，道口处的机动车驾驶员行为是一个需要特别关注的安全问题。本研究旨在初步了解道口处的机动车驾驶员危险驾驶行为。具体而言，本研究基于对 11 个自动道口（10 个配备两道半栏杆（SAL2），1 个配备四道半栏杆（SAL4））的现场观察，对机动车驾驶员行为进行了风险分析。我们重点关注道口关闭期间（栏杆完全关闭时）的机动车驾驶员行为。基于记录的测量数据，我们分别分析了道口关闭时间延长和道口位置（靠近或远离火车站）与之字形行驶违规率之间的关系。此外，我们还确定了一些表征危险驾驶行为的其他特征，例如“车群效应”。此外，由于我们的目标是分析驾驶员在 SAL2 路障处的行为，因此我们在实验中考虑了一个 SAL4 路障，以检验驾驶员对 SAL2 和 SAL4 防护系统的不同反应，从而比较 SAL2 和 SAL4 路障在安全性方面的效率。总之，我们的分析结果为解读路障封闭周期中驾驶员决策的关键因素提供了新的视角，并有助于确定提高路障安全性的技术解决方案。',
    },
  },
  {
    id: 7,
    title: 'Advanced model-based risk reasoning on automatic railway level crossings.',
    authors: 'Ci Liang, Mohamed Ghazel, Olivier Cazier, Laurent Bouillaut',
    venue: 'Safety Science 124,104592, 2020.',
    year: 2020,
    category: 'journal',
    abstract: {
      en: 'Safety is a core issue in the railway operation. In particular, as witnessed by accident/incident statistics, railway level crossing (LX) safety is one of the most critical points in railways. In the present paper, a Bayesian network (BN) based framework for causal reasoning related to risk analysis is proposed. It consists of a set of integrated stages, namely risk scenario definition, real field data collection and processing, BN model establishment and model performance validation. In particular, causal structural constraints are introduced to the framework for the purpose of combining empirical knowledge with automatic learning approaches, thus to identify effective causalities and avoid inappropriate structural connections. Then, the proposed framework is applied to risk analysis of LX accidents in France. In details, the BN risk model is established on the basis of real field data and the model performance is validated. Moreover, forward and reverse inferences based on the BN risk model are performed to predict LX accident occurrence and quantify the contribution degree of various impacting factors respectively, so as to identify the riskiest factors. Besides, influence strength and sensitivity analyses are further carried out to scrutinize the influence strength of various causal factors on the LX accident occurrence likelihood and determine which factors the LX accident occurrence is most sensitive to. The main outputs of our study attest that the proposed framework is sound and effective in terms of risk reasoning analysis and offers significant insights on exploring practical recommendations to prevent LX accidents.',
      zh: '安全是铁路运营的核心问题。特别是，正如事故/事件统计数据所示，铁路平交道口（LX）安全是铁路运营中最关键的环节之一。本文提出了一种基于贝叶斯网络（BN）的风险分析因果推理框架。该框架包含一系列集成阶段，包括风险场景定义、现场数据采集与处理、BN 模型建立以及模型性能验证。特别地，该框架引入了因果结构约束，旨在将经验知识与自动学习方法相结合，从而识别有效的因果关系并避免不恰当的结构连接。随后，将该框架应用于法国平交道口事故的风险分析。具体而言，基于现场数据建立了 BN 风险模型，并验证了模型的性能。此外，基于 BN 风险模型进行了正向和反向推理，分别用于预测平交道口事故的发生并量化各种影响因素的贡献程度，从而识别出风险最高的因素。此外，我们还进行了影响强度和敏感性分析，以深入探究各种因果因素对轻型运输事故发生概率的影响强度，并确定轻型运输事故发生最敏感的因素。本研究的主要成果证明，所提出的框架在风险推理分析方面是合理有效的，并为探索预防轻型运输事故的实用建议提供了重要见解。',
    },
  },
  {
    id: 8,
    title: 'Developing accident prediction model for railway level crossings.',
    authors: 'Ci Liang, Mohamed Ghazel, Olivier Cazier, El-Miloudi El-Koursi',
    venue: 'Safety Science 101, 48-59, 2018.',
    year: 2018,
    category: 'journal',
    abstract: {
      en: 'Railway level crossing (LX) safety continues to be one of the most critical issues for railways, despite an ever-increasing focus on improving design and application practices. Accidents at European LXs account for about one-third of the entire railway accidents and result in more than 300 deaths every year in Europe. Due to the non-deterministic causes, the complex operation background and the lack of thorough statistical analysis based on accident/incident data, the risk assessment of LXs remains a challenging task. In the present paper, some LX accident prediction models are developed. Such models allow for highlighting the influence of the main impacting parameters, i.e., the average daily road traffic, the average daily railway traffic, the annual road accidents, the vertical road profile, the horizontal road alignment, the road width, the crossing length, the railway speed limit and the geographic region. The Ordinary Least-Squares (OLS) and Nonlinear Least-Squares (NLS) methods are employed to estimate the respective coefficients of variables in the prediction models, based on the LX accident/incident data. The validation and comparison process is performed through statistical means to examine how well the estimation of the models fits the reality. The outcomes of validation and comparison attest that the improved accident prediction model has statistic-based approbatory quality. Moreover, the improved accident prediction model combined with the NB distribution shows relatively high predictive accuracy of the probability of accident occurrence.',
      zh: '尽管人们越来越重视改进铁路平交道口的设计和应用实践，但铁路平交道口安全仍然是铁路面临的最关键问题之一。欧洲平交道口事故约占所有铁路事故的三分之一，每年造成欧洲 300 多人死亡。由于事故原因难以确定、运行环境复杂以及缺乏基于事故/事件数据的全面统计分析，平交道口的风险评估仍然是一项艰巨的任务。本文开发了一些平交道口事故预测模型。这些模型能够突出主要影响参数的影响，例如：日均公路交通量、日均铁路交通量、年度公路事故数量、道路纵断面、道路横断面、道路线形、道路宽度、道口长度、铁路限速以及地理区域。本文基于 LX 事故/事件数据，采用普通最小二乘法（OLS）和非线性最小二乘法（NLS）估计预测模型中各变量的系数。通过统计方法进行验证和比较，以检验模型估计结果与实际情况的吻合程度。验证和比较结果表明，改进后的事故预测模型具有统计学意义上的可靠性。此外，该改进后的事故预测模型结合 NB 分布，对事故发生概率的预测精度较高。',
    },
  },
  {
    id: 10,
    title: 'A risk assessment study on accidents at French level crossings using Bayesian belief networks.',
    authors: 'Ci Liang, Mohamed Ghazel',
    venue: 'International Journal of Injury Control and Safety Promotion 25(2), 162-172, 2018.',
    year: 2018,
    category: 'journal',
    abstract: {
      en: 'Level crossing (LX) safety continues to be one of the most critical issues for railways despite an ever increasing focus on improving design and practices. In the present paper, a framework of probabilistic risk assessment and improvement decision based on Bayesian belief networks (PRAID-BBN) is proposed. The developed framework aims to analyse various impacting factors which may cause LX accidents, and quantify the contribution of these factors so as to identify the crucial factors which contribute most to the LX accidents. A detailed statistical analysis is first carried out based on the accident/incident data. A BBN risk model is established according to the statistical results. Then, we apply the PRAID-BBN framework on the basis of the accident/incident data provided by SNCF, the French national railway operator. The main outputs of our study are conducive to efficiently focusing on the effort/budget to make LXs safer.',
      zh: '尽管铁路部门日益重视改进设计和操作规范，但平交道口安全仍然是铁路面临的最关键问题之一。本文提出了一种基于贝叶斯信念网络（BBN）的概率风险评估与改进决策框架（PRAID-BBN）。该框架旨在分析可能导致平交道口事故的各种影响因素，并量化这些因素的贡献，从而识别对平交道口事故贡献最大的关键因素。首先，基于事故/事件数据进行详细的统计分析。根据统计结果建立 BBN 风险模型。然后，我们利用法国国家铁路公司（SNCF）提供的事故/事件数据应用 PRAID-BBN 框架。本研究的主要成果有助于有效地将资源/预算集中用于提升平交道口安全。',
    },
  },
  {
    id: 11,
    title: 'Risk analysis on level crossings using a causal Bayesian network based approach.',
    authors: 'Ci Liang,Mohamed Ghazel, Olivier Cazier, El-Miloudi El-Koursi',
    venue: 'Transportation Research Procedia 25,2167-2181, 2017.',
    year: 2017,
    category: 'conference',
    abstract: {
      en: 'Safety is a core issue in railway operation. In particular, Level Crossing (LX) safety is one of the most critical issues that railway stakeholders need to deal with. Accidents at European LXs account for about one-third of the entire railway accidents. They result in more than 300 deaths every year in Europe. However, due to non-deterministic causes, complex operation background and the lack of thorough statistical analysis based on detailed accident/incident data, the risk assessment of LXs remains a challenging task. In this paper, a general approach of Causal Statistic Risk Assessment based on hierarchical Causal Bayesian Networks (CSRA-CBN) is developed to analyze the various impacting factors which may cause accidents, and identify the factors which contribute most to the accidents at LXs, thus allowing for risk quantification. The detailed statistical analysis is carried out firstly according to the accident/incident database, then the CBN risk model is established based on the statistical results. In order to validate the effectiveness of this approach, we apply the CSRA-CBN approach on the basis of the accident data from SNCF, the French national railway operator. The CBN model allows for quantifying the causal relationships between the risk of accident occurring and the impacting factors considered. Moreover, the hierarchical structured modeling offers interesting benefits in terms of clarity, which makes it possible to highlight the complex factors influenced by a mass of parameters and identify the factors that contribute most to LX accidents. In addition, the main output of such a modeling system is conducive to improving safety at LXs, meanwhile, allowing for efficiently focusing on the effort/budget to make LXs safer.',
      zh: '安全是铁路运营的核心问题。特别是平交道口（LX）安全，是铁路利益相关者需要应对的最关键问题之一。欧洲平交道口事故约占铁路事故总数的三分之一，每年造成欧洲 300 多人死亡。然而，由于事故原因的不确定性、复杂的运营背景以及缺乏基于详细事故/事件数据的全面统计分析，平交道口的风险评估仍然是一项具有挑战性的任务。本文提出了一种基于分层因果贝叶斯网络（CSRA-CBN）的因果统计风险评估通用方法，用于分析可能导致事故的各种影响因素，并识别对平交道口事故贡献最大的因素，从而实现风险量化。首先，根据事故/事件数据库进行详细的统计分析，然后基于统计结果建立 CBN 风险模型。为了验证该方法的有效性，我们基于法国国家铁路运营商 SNCF 的事故数据，应用了 CSRA-CBN 方法。CBN 模型能够量化事故发生风险与所考虑的影响因素之间的因果关系。此外，这种分层结构化的建模方法在清晰度方面具有显著优势，能够突出受众多参数影响的复杂因素，并识别出对轻轨事故贡献最大的因素。此外，该建模系统的主要输出结果有助于提高轻轨的安全性，同时能够有效地将资源/预算集中用于提升轻轨安全。',
    },
  },
  {
    id: 12,
    title: 'Accident prediction modeling approaches for European railway level crossing safety.',
    authors: 'Ci Liang, Mohamed Ghazel',
    venue: 'New Research on Railway Engineering and Transport, editor: Prof. Ali G.Hessami and Dr. Roderick Muttram FREng, 2023.',
    year: 2023,
    category: 'book',
    abstract: {
      en: 'Safety is a core concern in the railway operation. Particularly, in Europe, level crossing (LX) safety is one of the most critical issues for railways. LX accidents often lead to fatalities and weighted injuries and seriously hamper railway safety reputation. Moreover, according to statistics, collisions between trains and motorized vehicles contribute most to LX accidents. With this in mind, we will elaborate on accident prediction modeling for train-vehicle collisions at LXs in this chapter. The methods and findings discussed in this chapter will offer an in-depth insight for interpreting significant aspects underlying collision occurrence and facilitate identifying technical countermeasures to improve LX safety.',
      zh: '安全是铁路运营的核心考量。尤其在欧洲，平交道口安全是铁路面临的最关键问题之一。平交道口事故往往造成人员伤亡和严重伤害，严重损害铁路安全声誉。此外，统计数据显示，列车与机动车相撞是平交道口事故的主要原因。鉴于此，本章将详细阐述平交道口列车与机动车相撞事故的预测模型。本章讨论的方法和研究结果将有助于深入理解碰撞发生背后的重要因素，并有助于确定提高平交道口安全性的技术对策。',
    },
  },
  {
    id: 13,
    title: 'Rear-end collision risk analysis for autonomous driving.',
    authors: 'Ci Liang, Mohamed Ghazel, Yusheng Ci,Nour-Eddin El Faouzi, Rui Wang, Wei Zheng',
    venue: '42nd International Conference on Computer Safety, Reliabilityand Security (SafeComp2023), Toulouse, France, September, 2023.',
    year: 2023,
    category: 'conference',
    abstract: {
      en: 'Since there will be a mix of automated vehicles (AVs) and human-driven vehicles (HVs) on future roadways, in the literature, while many existing studies have investigated collisions where an AV hits an HV from behind, few studies have focused on the scenarios where an HV hits an AV from behind (called HV-AV collision). In this paper, we will investigate the HV-AV collision risk in the Stop-in-Lane (SiL) scenario. To achieve this aim, a Human-like Brake (HLB) model is proposed first to simulate the driver brake control. In particular, the joint distribution of Off-Road-Glance and Time-Headway is originally introduced to simulate the glance distraction of drivers during their dynamic vehicle control. Sequentially, a case study of HV-AV collisions in the SiL scenario of autonomous driving (AD) is conducted based on the HLB model, to reveal how the collision probability changes with respect to various parameters. The results of the case study provide us with an in-depth understanding of the dynamic driving conditions that lead to rear-end collisions in the SiL scenario.',
      zh: '鉴于未来道路上将混合存在自动驾驶车辆（AV）和人工驾驶车辆（HV），现有文献中，虽然许多研究探讨了 AV 追尾 HV 的碰撞事故，但鲜有研究关注 HV 追尾 AV 的场景（即 HV-AV 碰撞）。本文将研究车道内停车（SiL）场景下的 HV-AV 碰撞风险。为此，首先提出了一种类人制动（HLB）模型来模拟驾驶员的制动控制。特别地，该模型首次引入了非道路视线和车头时距的联合分布，以模拟驾驶员在动态车辆控制过程中视线分散的情况。随后，基于 HLB 模型，对自动驾驶（AD）车道内停车场景下的 HV-AV 碰撞案例进行了研究，以揭示碰撞概率如何随各种参数变化。该案例研究的结果使我们能够深入了解在 SiL 场景中导致追尾碰撞的动态驾驶条件。',
    },
  },
  {
    id: 15,
    title: 'Automated generation of test cases and sequences based on path optimization algorithm.',
    authors: 'Ci Liang , Wei Zheng',
    venue: 'ransportation Research Board 92nd Annual Meeting, Transportation ResearchBoard, Washington DC, US, January 2013.',
    year: 2013,
    category: 'conference',
    abstract: {
      en: 'Test is one of the key methodologies to guarantee the functionality correctness and safety of the railway signal system used in the operation line. The present test generation methods for the railway signal system in China are manual, which take too much time and are inefficient, so the automated test approach plays a more and more important role in the testing domain. This paper proposes an automated approach to generate a full set of the test cases and sequences. The all paths covered optimal algorithm (APCO) and the sequence priority algorithm (SPS) for automatically generating test cases and test sequences based on the CPN model are presented. Taking the scenario of Radio Blocking Center (RBC) handover as an example, the presented method is employed to generate the test cases and test sequences of this scenario. The results indicate that the test generation approaches fully achieved the goal of automation. Furthermore, the repeatability rate of the generated test sequences was reduced by 75% with the algorithm proposed in this paper compared with the available depth first search algorithm (DFS), and the test cases covered all the related criterions in CTCS-3 Train Control System Function Requirements Specification (FRS).',
      zh: '测试是保证铁路信号系统在运营线路中功能正确性和安全性的关键方法之一。目前我国铁路信号系统的测试用例生成方法主要依赖人工，耗时且效率低下，因此自动化测试方法在测试领域的重要性日益凸显。本文提出了一种自动化生成完整测试用例和测试序列的方法。该方法基于 CPN 模型，提出了全路径覆盖最优算法（APCO）和序列优先级算法（SPS），用于自动生成测试用例和测试序列。以无线电闭塞中心（RBC）切换场景为例，运用本文提出的方法生成了该场景的测试用例和测试序列。结果表明，该测试用例生成方法完全实现了自动化目标。此外，与现有的深度优先搜索算法（DFS）相比，本文提出的算法使生成的测试序列的重复率降低了 75%，并且测试用例覆盖了 CTCS-3 列车控制系统功能需求规范（FRS）中的所有相关准则。',
    },
  },
  // ▲▲▲ 在此行上方添加新论文 ▲▲▲
];
