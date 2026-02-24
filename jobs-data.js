const JOBS = [
  {
    id: 'head-of-data-ai',
    title: 'Head of Data & AI',
    sector: 'Technology',
    company: 'Leading Fintech — Abu Dhabi',
    location: 'Abu Dhabi',
    exp: '8+ years',
    type: 'Full-time',
    salary: 'AED 45,000 – 60,000/mo',
    posted: '5 days ago',
    about: 'We are seeking a visionary Head of Data & AI to lead the data strategy for one of the UAE\'s most innovative fintech companies. This role oversees a team of data scientists and ML engineers, setting the direction for how data drives product decisions, risk modeling, and customer personalisation across the platform. You will report directly to the CTO and work closely with the CEO to shape the company\'s AI roadmap for the next 3–5 years.',
    responsibilities: [
      'Define and execute the enterprise data & AI strategy aligned with business goals',
      'Build, mentor, and lead a high-performing team of 15+ data scientists and ML engineers',
      'Design and deploy production-grade ML models for credit scoring, fraud detection, and personalisation',
      'Establish data governance frameworks and ensure compliance with UAE data protection regulations',
      'Partner with C-suite to translate data insights into commercial opportunities',
      'Manage vendor relationships and evaluate emerging AI technologies',
      'Present data strategy and results to the board on a quarterly basis'
    ],
    requirements: [
      '8+ years in data science/AI, with 3+ years in a leadership role',
      'Deep expertise in Python, TensorFlow/PyTorch, and cloud ML platforms (AWS SageMaker, GCP Vertex)',
      'Experience in fintech, banking, or payments strongly preferred',
      'Strong understanding of UAE/GCC regulatory landscape',
      'MBA or advanced degree in Computer Science, Statistics, or related field',
      'Track record of deploying ML models at scale in production environments'
    ],
    benefits: [
      'Competitive salary + annual performance bonus',
      'Equity participation in a high-growth fintech',
      'Premium medical insurance for the whole family',
      'Flexible hybrid working model',
      'Relocation support for international candidates',
      'Annual learning & development budget of AED 15,000'
    ]
  },
  {
    id: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    sector: 'Technology',
    company: 'Global E-Commerce Platform — Dubai Internet City',
    location: 'Dubai Internet City',
    exp: '5+ years',
    type: 'Full-time',
    salary: 'AED 28,000 – 38,000/mo',
    posted: '3 days ago',
    about: 'Join a fast-growing e-commerce platform as a Senior Software Engineer building high-performance backend services that handle millions of transactions daily. You\'ll work in a modern tech stack and collaborate with product teams across three continents. This is a hands-on role for someone who loves writing clean, scalable code and mentoring the next generation of engineers.',
    responsibilities: [
      'Design and build scalable microservices using Java/Kotlin and Spring Boot',
      'Architect event-driven systems handling 10M+ daily transactions',
      'Mentor junior engineers and conduct thorough code reviews',
      'Collaborate with product managers to translate requirements into technical solutions',
      'Improve CI/CD pipelines and deployment automation using GitHub Actions and ArgoCD',
      'Participate in on-call rotation for production systems',
      'Contribute to engineering standards and best practices documentation'
    ],
    requirements: [
      '5+ years professional experience with Java, Kotlin, or Python',
      'Strong understanding of distributed systems and microservice architecture',
      'Experience with Kubernetes, Docker, and cloud platforms (AWS/GCP)',
      'Proficiency in SQL and NoSQL databases (PostgreSQL, MongoDB, Redis)',
      'Excellent communication skills in English',
      'Bachelor\'s degree in Computer Science or equivalent practical experience'
    ],
    benefits: [
      'Competitive base salary + annual bonus',
      'Premium medical insurance for family',
      'Flexible working hours & remote Fridays',
      'Annual flight tickets home',
      'Professional development budget of AED 10,000/year',
      'Modern office in Dubai Internet City with free parking'
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    sector: 'Technology',
    company: 'Multinational Financial Services — DIFC, Dubai',
    location: 'DIFC, Dubai',
    exp: '4+ years',
    type: 'Full-time',
    salary: 'AED 22,000 – 32,000/mo',
    posted: '1 week ago',
    about: 'Protect critical financial infrastructure as a Cybersecurity Analyst for a leading multinational financial services firm. You\'ll monitor threats, respond to incidents, and strengthen our security posture across the MENA region. This is a high-visibility role with direct exposure to senior leadership and external regulators.',
    responsibilities: [
      'Monitor and analyze security events using SIEM tools (Splunk, QRadar)',
      'Conduct vulnerability assessments and penetration testing on internal systems',
      'Lead incident response and post-incident root cause analysis',
      'Develop security policies aligned with DFSA and UAE regulations',
      'Manage endpoint protection and network security solutions',
      'Deliver security awareness training programmes to staff across the region'
    ],
    requirements: [
      '4+ years in cybersecurity or information security roles',
      'CISSP, CISM, or CEH certification required',
      'Hands-on experience with SIEM platforms (Splunk, QRadar, or similar)',
      'Knowledge of financial regulatory compliance (DFSA, NESA)',
      'Strong analytical and problem-solving skills',
      'Bachelor\'s degree in Cybersecurity, IT, or related field'
    ],
    benefits: [
      'Tax-free competitive salary',
      'Medical insurance for the whole family',
      'Annual performance bonus',
      'Professional certification support and exam fees covered',
      '30 days annual leave',
      'Prime DIFC office location'
    ]
  },
  {
    id: 'senior-financial-analyst',
    title: 'Senior Financial Analyst',
    sector: 'Finance',
    company: 'Confidential — Multinational Bank, DIFC',
    location: 'DIFC, Dubai',
    exp: '5+ years',
    type: 'Full-time',
    salary: 'AED 25,000 – 35,000/mo',
    posted: '2 days ago',
    about: 'A leading multinational bank is seeking a Senior Financial Analyst to join their regional planning & analysis team at DIFC. This role involves financial modeling, variance analysis, and strategic reporting to support C-level decision-making across the MENA region. You will be the key analytical partner for the CFO\'s office on regional performance.',
    responsibilities: [
      'Build and maintain complex financial models for forecasting and budgeting',
      'Prepare monthly management reports and board presentations',
      'Conduct variance analysis and provide actionable insights to senior leadership',
      'Support M&A due diligence and valuation exercises as needed',
      'Collaborate with business heads to develop annual budgets across 5 country offices',
      'Identify process improvements and automation opportunities in financial reporting'
    ],
    requirements: [
      '5+ years of financial analysis experience in banking or financial services',
      'CFA or ACCA qualification preferred',
      'Advanced Excel and financial modeling skills (3-statement models, DCF)',
      'Experience with SAP, Oracle, or Hyperion planning systems',
      'Strong presentation and stakeholder management skills',
      'Bachelor\'s degree in Finance, Accounting, or Economics'
    ],
    benefits: [
      'Competitive salary + discretionary bonus',
      'Premium medical and dental insurance for family',
      'DIFC-based office with market-leading benefits',
      'Annual flight allowance',
      'Education support for children',
      '30 days annual leave + UAE public holidays'
    ]
  },
  {
    id: 'vp-investment-banking',
    title: 'VP — Investment Banking',
    sector: 'Finance',
    company: 'Tier 1 Investment Bank — DIFC',
    location: 'DIFC, Dubai',
    exp: '10+ years',
    type: 'Full-time',
    salary: 'AED 55,000 – 80,000/mo',
    posted: '1 week ago',
    about: 'A Tier 1 global investment bank is recruiting a VP for their MENA advisory team. This is a client-facing role leading M&A and capital markets transactions across the GCC region, with direct exposure to senior executives and sovereign wealth funds. The role offers a clear pathway to Director within 18–24 months for top performers.',
    responsibilities: [
      'Lead and execute M&A advisory and capital markets transactions',
      'Manage client relationships with C-suite executives and sovereign entities',
      'Prepare and present pitch materials, financial models, and valuation analyses',
      'Supervise and mentor a team of analysts and associates',
      'Coordinate with global sector teams on cross-border transactions',
      'Drive business development and origination efforts across MENA'
    ],
    requirements: [
      '10+ years in investment banking (M&A or ECM/DCM)',
      'Proven track record of closed transactions in the MENA region',
      'Strong financial modeling and valuation expertise',
      'Excellent client relationship management and business development skills',
      'MBA from a top-tier institution preferred',
      'Fluency in English; Arabic is a strong advantage'
    ],
    benefits: [
      'Highly competitive base + performance bonus',
      'Carried interest on select deals',
      'Premium international health coverage',
      'Housing allowance',
      'Annual flight allowance for the whole family',
      'Club and gym membership'
    ]
  },
  {
    id: 'aml-compliance-officer',
    title: 'AML Compliance Officer',
    sector: 'Finance',
    company: 'Regional Bank — Abu Dhabi',
    location: 'Abu Dhabi',
    exp: '6+ years',
    type: 'Full-time',
    salary: 'AED 28,000 – 40,000/mo',
    posted: '4 days ago',
    about: 'A leading regional bank seeks an experienced AML Compliance Officer to strengthen their financial crime prevention framework. You\'ll ensure compliance with UAE Central Bank regulations and international AML standards while managing a team of 6 compliance analysts.',
    responsibilities: [
      'Oversee AML/CFT compliance program, policies, and procedures',
      'Conduct enhanced due diligence on high-risk customers and transactions',
      'Investigate suspicious activity reports and escalate as required',
      'Liaise with UAE Central Bank and other regulatory authorities',
      'Deliver AML training programmes across the organisation',
      'Monitor regulatory changes and update internal procedures accordingly'
    ],
    requirements: [
      '6+ years in AML/compliance within banking or financial services',
      'ACAMS or ICA certification required',
      'Deep knowledge of UAE Central Bank regulations and FATF standards',
      'Experience with AML screening and transaction monitoring systems',
      'Strong analytical and investigative skills',
      'Bachelor\'s degree in Law, Finance, or related field'
    ],
    benefits: [
      'Competitive salary + annual bonus',
      'Medical insurance for the whole family',
      'Housing allowance',
      'Transportation allowance',
      '30 days annual leave',
      'Professional development and certification support'
    ]
  },
  {
    id: 'hse-manager-offshore',
    title: 'HSE Manager — Offshore',
    sector: 'Oil & Gas',
    company: 'International EPC — Abu Dhabi (Offshore)',
    location: 'Abu Dhabi (Offshore)',
    exp: '8+ years',
    type: 'Rotation (28/28)',
    salary: 'AED 30,000 – 42,000/mo',
    posted: '6 days ago',
    about: 'A major international EPC contractor is recruiting an HSE Manager for their offshore operations in Abu Dhabi. This critical leadership role ensures the safety of 500+ personnel across multiple offshore platforms and vessels. You will report to the Project Director and be the most senior HSE authority on-site.',
    responsibilities: [
      'Develop and implement HSE management systems for offshore operations',
      'Lead incident investigations and root cause analysis (TapRoot methodology)',
      'Conduct HSE audits and inspections across all offshore assets',
      'Ensure compliance with ADNOC HSE requirements and international standards',
      'Manage a team of 12 HSE officers and advisors',
      'Chair weekly safety meetings and deliver toolbox talks to all crews'
    ],
    requirements: [
      '8+ years HSE experience in oil & gas, with 4+ years offshore',
      'NEBOSH International Diploma or equivalent',
      'IOSH Chartered membership preferred',
      'Experience working under ADNOC or major IOC frameworks',
      'Strong leadership and communication skills across multicultural teams',
      'Valid offshore medical and survival certificates (BOSIET/HUET)'
    ],
    benefits: [
      'Tax-free competitive salary',
      '28/28 rotation schedule with flights provided',
      'Premium medical insurance for family',
      'Annual flight tickets home',
      'End-of-service gratuity as per UAE law',
      'Career progression to Regional HSE Director'
    ]
  },
  {
    id: 'senior-petroleum-engineer',
    title: 'Senior Petroleum Engineer',
    sector: 'Oil & Gas',
    company: 'Major National Oil Company — Abu Dhabi',
    location: 'Abu Dhabi',
    exp: '10+ years',
    type: 'Full-time',
    salary: 'AED 35,000 – 50,000/mo',
    posted: '1 week ago',
    about: 'Join one of the world\'s leading national oil companies as a Senior Petroleum Engineer. You\'ll work on reservoir management and field development planning for some of the largest hydrocarbon reserves globally. This is a technically challenging role with significant impact on production strategy.',
    responsibilities: [
      'Conduct reservoir simulation and history matching studies',
      'Develop field development plans and well placement strategies',
      'Optimize production from mature and new fields using advanced techniques',
      'Evaluate enhanced oil recovery (EOR) methods including chemical and thermal',
      'Collaborate with drilling and completions teams on well design and execution',
      'Prepare technical reports and present findings to senior management'
    ],
    requirements: [
      '10+ years petroleum engineering experience in upstream E&P',
      'Proficiency in Eclipse, Petrel, and PROSPER/GAP',
      'Experience with carbonate reservoir systems (Middle East preferred)',
      'Strong knowledge of production optimization and artificial lift techniques',
      'MSc or PhD in Petroleum Engineering preferred',
      'Previous experience in GCC oil & gas operations'
    ],
    benefits: [
      'Highly competitive tax-free package',
      'Housing provided or generous housing allowance',
      'Children\'s education allowance up to university',
      'Premium medical coverage for the whole family',
      'Annual leave with return flight tickets',
      'Long-term career development and succession planning'
    ]
  },
  {
    id: 'project-engineer-mechanical',
    title: 'Project Engineer — Mechanical',
    sector: 'Oil & Gas',
    company: 'Leading EPC Contractor — Ruwais, Abu Dhabi',
    location: 'Ruwais, Abu Dhabi',
    exp: '6+ years',
    type: 'Full-time',
    salary: 'AED 25,000 – 35,000/mo',
    posted: '3 days ago',
    about: 'A major EPC contractor is hiring a Project Engineer (Mechanical) for their mega-project in Ruwais Industrial Complex. You\'ll oversee mechanical engineering deliverables across FEED and detailed design phases for a $2B+ refinery expansion project.',
    responsibilities: [
      'Manage mechanical engineering scope and deliverables for EPC projects',
      'Review and approve equipment specifications and vendor drawings',
      'Coordinate with procurement and construction teams on material readiness',
      'Ensure design compliance with ASME, API, and client-specific standards',
      'Track project milestones and report on progress to the Project Manager',
      'Support commissioning and handover activities during project closeout'
    ],
    requirements: [
      '6+ years mechanical engineering experience in oil & gas EPC projects',
      'PMP certification preferred',
      'Experience with rotating and static equipment (pumps, compressors, vessels)',
      'Proficiency in engineering software (Caesar II, PV Elite, or similar)',
      'Knowledge of ADNOC design standards and specifications',
      'Bachelor\'s degree in Mechanical Engineering from an accredited institution'
    ],
    benefits: [
      'Tax-free salary + project completion bonus',
      'Furnished accommodation provided in Ruwais',
      'Transportation to and from site provided',
      'Medical insurance for family',
      '30 days leave + R&R rotation schedule',
      'R&R flight allowance'
    ]
  },
  {
    id: 'hr-business-partner',
    title: 'HR Business Partner',
    sector: 'HR',
    company: 'Global Consulting Firm — Business Bay, Dubai',
    location: 'Business Bay, Dubai',
    exp: '5+ years',
    type: 'Full-time',
    salary: 'AED 22,000 – 30,000/mo',
    posted: '2 days ago',
    about: 'A global consulting firm seeks a strategic HR Business Partner to support their rapidly growing Dubai operations. You\'ll partner with senior leaders to drive people strategy, talent development, and organizational effectiveness for a 300+ employee population across the UAE.',
    responsibilities: [
      'Act as strategic HR advisor to business leaders across two practice areas',
      'Drive talent management, succession planning, and workforce analytics',
      'Lead employee engagement initiatives and action planning from survey data',
      'Manage performance management cycles, calibration, and talent reviews',
      'Support organizational design and change management projects',
      'Ensure HR policies comply with UAE Labour Law and MOHRE regulations'
    ],
    requirements: [
      '5+ years as an HRBP in professional services or consulting environments',
      'CIPD or SHRM certification preferred',
      'Strong knowledge of UAE Labour Law and MOHRE regulations',
      'Experience with HRIS systems (SuccessFactors, Workday, or similar)',
      'Excellent stakeholder management and influencing skills',
      'Bachelor\'s degree in HR, Business, or related field'
    ],
    benefits: [
      'Competitive salary + annual performance bonus',
      'Premium medical insurance',
      'Flexible working arrangements (hybrid model)',
      'Learning & development budget',
      'Annual return flight tickets',
      'Modern office in Business Bay'
    ]
  },
  {
    id: 'talent-acquisition-manager',
    title: 'Talent Acquisition Manager',
    sector: 'HR',
    company: 'Technology Company — Dubai',
    location: 'Dubai',
    exp: '6+ years',
    type: 'Full-time',
    salary: 'AED 20,000 – 28,000/mo',
    posted: '5 days ago',
    about: 'Lead the talent acquisition function for a high-growth technology company scaling rapidly across the UAE. You\'ll build recruitment strategies, manage the TA team, and own the candidate experience from application through onboarding.',
    responsibilities: [
      'Develop and execute talent acquisition strategy across all levels and functions',
      'Manage and mentor a team of 4 recruiters with clear KPIs',
      'Build employer brand through events, partnerships, and content marketing',
      'Implement ATS and recruitment analytics dashboards for data-driven decisions',
      'Manage agency relationships and optimise direct sourcing channels',
      'Drive diversity and Emiratisation hiring initiatives aligned with NAFIS'
    ],
    requirements: [
      '6+ years in talent acquisition, with 2+ years managing a TA team',
      'Experience recruiting in technology or fast-growth environments',
      'Proficiency with ATS platforms (Greenhouse, Lever, or similar)',
      'Strong sourcing skills across LinkedIn, job boards, and social media',
      'Knowledge of UAE employment regulations and WPS',
      'Excellent English communication and presentation skills'
    ],
    benefits: [
      'Competitive salary + quarterly performance bonus',
      'Medical insurance',
      'Flexible work-from-home policy (2 days/week)',
      'Professional development budget',
      'Annual flight allowance',
      'Dynamic startup culture with rapid career growth'
    ]
  },
  {
    id: 'compensation-benefits-specialist',
    title: 'Compensation & Benefits Specialist',
    sector: 'HR',
    company: 'Multinational Corporation — Abu Dhabi',
    location: 'Abu Dhabi',
    exp: '4+ years',
    type: 'Full-time',
    salary: 'AED 18,000 – 25,000/mo',
    posted: '1 week ago',
    about: 'Design and manage competitive compensation programmes for a multinational corporation with 2,000+ employees across the GCC. This role is key to attracting and retaining top talent through market-aligned rewards strategies and robust benefits administration.',
    responsibilities: [
      'Administer compensation structures, salary bands, and job grading frameworks',
      'Conduct annual salary benchmarking using Mercer, Radford, and Korn Ferry data',
      'Manage employee benefits programmes including medical, life, and retirement',
      'Support annual salary review and bonus allocation processes',
      'Analyze compensation data and prepare reports for senior leadership',
      'Ensure compliance with UAE Labour Law regarding end-of-service benefits'
    ],
    requirements: [
      '4+ years in compensation & benefits or total rewards',
      'Experience with job evaluation methodologies (Hay, Mercer IPE, or similar)',
      'Proficiency in Excel, HRIS, and compensation survey tools',
      'Knowledge of GCC benefits practices and employment regulations',
      'CCP or GRP certification is a strong plus',
      'Bachelor\'s degree in HR, Finance, or Business'
    ],
    benefits: [
      'Competitive salary',
      'Housing allowance',
      'Premium medical for the whole family',
      'Annual return flight tickets',
      'Education assistance for children',
      'Gym membership'
    ]
  },
  {
    id: 'head-of-compliance',
    title: 'Head of Compliance',
    sector: 'Legal',
    company: 'Regional Insurance Group — Dubai',
    location: 'Dubai',
    exp: '10+ years',
    type: 'Full-time',
    salary: 'AED 40,000 – 55,000/mo',
    posted: '4 days ago',
    about: 'Lead the compliance function for a regional insurance group operating across the UAE, Saudi Arabia, and Bahrain. Reporting directly to the Group CEO, you\'ll ensure regulatory compliance across three jurisdictions and build the governance framework for a planned IPO within the next 18 months.',
    responsibilities: [
      'Establish and lead the group compliance framework across 3 jurisdictions',
      'Ensure compliance with IA, CBUAE, SAMA, and CBB insurance regulations',
      'Build IPO-readiness governance, controls, and reporting structures',
      'Manage regulatory relationships and license renewal applications',
      'Conduct compliance risk assessments and internal audits',
      'Chair the Compliance Committee and present quarterly reports to the Board'
    ],
    requirements: [
      '10+ years compliance experience in insurance or financial services',
      'Deep knowledge of UAE (CBUAE/IA), Saudi (SAMA), and Bahrain (CBB) regulations',
      'Experience preparing organisations for IPO or major regulatory milestones',
      'Compliance certifications (ICA Diploma, ACAMS) required',
      'Strong leadership and board-level communication skills',
      'LLB or Master\'s degree in Law, Compliance, or Finance preferred'
    ],
    benefits: [
      'Highly competitive package with performance bonus',
      'Annual performance bonus up to 30% of base',
      'Direct C-suite reporting line',
      'Premium medical for the whole family',
      'Company vehicle or car allowance',
      '30 days leave + UAE public holidays'
    ]
  },
  {
    id: 'data-protection-officer',
    title: 'Data Protection Officer',
    sector: 'Legal',
    company: 'Technology Group — Dubai',
    location: 'Dubai',
    exp: '5+ years',
    type: 'Full-time',
    salary: 'AED 25,000 – 38,000/mo',
    posted: '6 days ago',
    about: 'A leading technology group requires a Data Protection Officer to manage compliance with UAE Federal Data Protection Law (PDPL), DIFC Data Protection Law, and international standards including GDPR. This role is critical as the group expands its digital products and data-driven services across the MENA region.',
    responsibilities: [
      'Develop and maintain the group\'s data protection framework and policies',
      'Ensure compliance with UAE PDPL, DIFC DPL, and GDPR where applicable',
      'Conduct Data Protection Impact Assessments (DPIAs) for new products and features',
      'Manage data subject access requests and breach notification processes',
      'Train employees across all departments on data protection obligations',
      'Act as the primary point of contact for the UAE Data Office'
    ],
    requirements: [
      '5+ years in data protection, privacy law, or regulatory compliance',
      'CIPP/E, CIPM, or equivalent privacy certification required',
      'Thorough knowledge of UAE PDPL and DIFC Data Protection Law',
      'Experience in technology, e-commerce, or digital services sectors',
      'Strong legal drafting and advisory skills',
      'Bachelor\'s degree in Law, Information Security, or related field'
    ],
    benefits: [
      'Competitive salary + annual bonus',
      'Medical insurance',
      'Flexible working policy (hybrid)',
      'Professional certification support and annual renewal fees',
      'Annual learning & conference budget',
      'Modern Dubai office'
    ]
  },
  {
    id: 'corporate-counsel-in-house',
    title: 'Corporate Counsel — In-House',
    sector: 'Legal',
    company: 'Energy Holding Group — Abu Dhabi',
    location: 'Abu Dhabi',
    exp: '7+ years',
    type: 'Full-time',
    salary: 'AED 30,000 – 45,000/mo',
    posted: '1 week ago',
    about: 'A major energy holding group seeks an experienced Corporate Counsel to provide legal support across M&A, joint ventures, and commercial contracts. You\'ll work on high-value transactions shaping the UAE\'s energy landscape, with exposure to both upstream and downstream operations.',
    responsibilities: [
      'Draft, review, and negotiate commercial contracts and JV agreements',
      'Provide legal advice on M&A transactions and corporate restructurings',
      'Support board governance and corporate secretarial functions',
      'Manage external counsel relationships and optimise legal spend',
      'Advise on regulatory compliance across energy sector regulations',
      'Handle dispute resolution strategy and manage active litigation matters'
    ],
    requirements: [
      '7+ years post-qualification experience in corporate/commercial law',
      'Sector experience in energy, infrastructure, or natural resources',
      'Qualified in a common law jurisdiction (UK, Australia, or similar)',
      'Strong contract drafting and negotiation skills',
      'Experience managing relationships with external law firms',
      'Fluency in English; Arabic is a strong advantage'
    ],
    benefits: [
      'Competitive tax-free salary',
      'Annual performance bonus',
      'Premium family medical coverage',
      'Housing allowance',
      'Children\'s education assistance',
      'Annual return flights for the whole family'
    ]
  },
  {
    id: 'commercial-director-mena',
    title: 'Commercial Director — MENA',
    sector: 'Sales',
    company: 'SaaS Platform — Dubai / Remote',
    location: 'Dubai / Remote',
    exp: '8+ years',
    type: 'Full-time',
    salary: 'AED 38,000 – 50,000/mo',
    posted: '3 days ago',
    about: 'Lead commercial strategy and revenue growth across the MENA region for a fast-growing SaaS platform backed by Tier 1 VCs. You\'ll build and lead a high-performance sales team, develop enterprise accounts, and drive the go-to-market strategy for a region with $20M+ revenue targets.',
    responsibilities: [
      'Develop and execute the MENA commercial strategy and go-to-market plans',
      'Build and lead a regional sales team of 10+ across UAE and KSA',
      'Own the P&L for the MENA region with full revenue accountability',
      'Establish strategic partnerships with enterprise clients and channel partners',
      'Drive go-to-market strategy for new product launches in the region',
      'Report to the Global CRO with full regional autonomy'
    ],
    requirements: [
      '8+ years in B2B SaaS sales, with 3+ years in regional leadership',
      'Proven track record of building and scaling sales teams in MENA',
      'Experience selling to enterprise clients in financial services or government',
      'Strong CRM and sales analytics expertise (Salesforce, HubSpot)',
      'Excellent negotiation and C-level engagement skills',
      'Fluent in English; Arabic is a strong advantage'
    ],
    benefits: [
      'Base salary + uncapped commission (OTE AED 80,000+)',
      'Equity / stock options in a high-growth company',
      'Remote-first with Dubai HQ for team days',
      'Premium medical for the whole family',
      'Annual leadership retreat (international)',
      'Home office setup budget of AED 5,000'
    ]
  },
  {
    id: 'regional-sales-manager-b2b',
    title: 'Regional Sales Manager — B2B',
    sector: 'Sales',
    company: 'Industrial Solutions — Dubai',
    location: 'Dubai',
    exp: '5+ years',
    type: 'Full-time',
    salary: 'AED 20,000 – 30,000/mo',
    posted: '5 days ago',
    about: 'Drive B2B sales growth across the UAE for a leading industrial solutions provider. You\'ll manage key accounts, develop new business, and exceed revenue targets in a fast-paced environment with strong commission structures and clear career progression.',
    responsibilities: [
      'Manage a portfolio of 50+ B2B accounts across the UAE',
      'Develop new business through prospecting, cold outreach, and networking',
      'Prepare and deliver compelling sales presentations and technical proposals',
      'Negotiate contracts and close deals with procurement teams',
      'Achieve quarterly and annual revenue targets consistently',
      'Maintain CRM data accurately and provide reliable forecasting'
    ],
    requirements: [
      '5+ years B2B sales experience in the UAE market',
      'Proven track record of meeting or exceeding sales targets',
      'Experience in industrial, manufacturing, or technical sales preferred',
      'Strong networking and relationship-building skills',
      'Valid UAE driving license',
      'Bachelor\'s degree in Business, Engineering, or related field'
    ],
    benefits: [
      'Base salary + attractive commission structure',
      'Company car + fuel card',
      'Medical insurance',
      'Mobile phone allowance',
      'Annual sales incentive trips (international)',
      'Clear career progression to Sales Director'
    ]
  },
  {
    id: 'head-of-marketing',
    title: 'Head of Marketing',
    sector: 'Sales',
    company: 'Consumer Brand — Dubai',
    location: 'Dubai',
    exp: '7+ years',
    type: 'Full-time',
    salary: 'AED 28,000 – 40,000/mo',
    posted: '4 days ago',
    about: 'Lead the marketing function for a premium consumer brand expanding aggressively across the GCC. You\'ll own brand strategy, digital marketing, and creative execution to drive awareness and customer acquisition. This role manages a team of 8 and a marketing budget of AED 5M+.',
    responsibilities: [
      'Develop and execute the regional brand and marketing strategy',
      'Lead a team of 8 across brand, digital, content, and PR functions',
      'Manage annual marketing budget of AED 5M+ with clear ROI tracking',
      'Drive digital acquisition through performance marketing, SEO, and SEM',
      'Oversee creative campaigns, events, and influencer partnerships',
      'Analyze marketing ROI and present insights to the executive team monthly'
    ],
    requirements: [
      '7+ years in marketing, with 3+ years in leadership roles',
      'Experience with premium or luxury consumer brands in the GCC',
      'Strong digital marketing expertise (paid social, SEM, programmatic)',
      'Creative portfolio demonstrating successful integrated campaigns',
      'Data-driven approach with proficiency in Google Analytics, HubSpot',
      'Bachelor\'s degree in Marketing; MBA preferred'
    ],
    benefits: [
      'Competitive salary + annual bonus',
      'Premium medical insurance',
      'Flexible working arrangements',
      'Annual learning and conference budget',
      'Staff discount on products',
      'Modern Dubai office with creative workspace'
    ]
  }
];

// Utility: find job by ID
function getJobById(id) {
  return JOBS.find(j => j.id === id);
}

// Utility: get jobs by sector
function getJobsBySector(sector) {
  return JOBS.filter(j => j.sector === sector);
}
