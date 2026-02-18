import type { Experience, Project, Contribution, SkillCategory, ServiceCard, Article } from '../types'

export const experiences: Experience[] = [
  {
    company: 'Intellector',
    role: 'Software Engineer',
    location: 'Remote',
    period: 'Mar 2025 - Present',
    description: 'Engineering an AI-powered tutoring platform with real-time voice streaming supporting thousands of concurrent learners.',
    highlights: [
      'Built 1:1 interactive AI tutoring system with <400ms latency using WebRTC streaming for LLM responses',
      'Designed RAG pipeline using Qdrant vector indexing for source-based lectures and Q&A',
      'Optimized AI tutoring prompts to emulate adaptive teacher behavior, improving engagement and accuracy',
      'Deployed system supporting 5,000+ concurrent learners with real-time voice interaction'
    ],
    metrics: [
      { value: '5K+', label: 'Concurrent', sublabel: 'learners' },
      { value: '<400ms', label: 'Latency', sublabel: 'WebRTC streaming' },
      { value: 'RAG', label: 'Pipeline', sublabel: 'Qdrant vector' },
      { value: '1:1', label: 'Interactive', sublabel: 'AI tutoring' }
    ],
    techStack: ['FastAPI', 'PostgreSQL', 'Qdrant', 'LangChain', 'WebRTC', 'Grafana']
  },
  {
    company: 'IVA AI',
    role: 'AI Engineer',
    location: 'Remote • Tallinn, Estonia',
    period: 'Jan 2024 - Oct 2024',
    description: 'Built LLM-powered customer support and sales agents in a multi-tenant microservice architecture.',
    highlights: [
      'Developed customer support agent integrated with Zoho Bot, automating ~60% of manual support',
      'Implemented scalable RAG system with metadata filtering, saving ~$300 per-tenant in fine-tuning costs',
      'Integrated Redis-based conversation caching to reduce latency and infrastructure load',
      'Built auto-parsing for tenant-specific knowledge and tools, reducing onboarding time to <30 mins',
      'Engineered AI-driven sales agent automating ~90% of sales lifecycle—from lead qualification to demo scheduling'
    ],
    metrics: [
      { value: '60%', label: 'Automated', sublabel: 'manual support' },
      { value: '90%', label: 'Sales', sublabel: 'lifecycle automated' },
      { value: '$300', label: 'Saved', sublabel: 'per tenant' },
      { value: '<30min', label: 'Onboarding', sublabel: 'time' }
    ],
    techStack: ['FastAPI', 'Spring Framework', 'MongoDB', 'Redis', 'Docker']
  }
]

export const projects: Project[] = [
  {
    title: 'IWouldArgue',
    techStack: 'Java • Rust • Spring Framework • Cassandra • Redis • WebRTC • Kubernetes',
    description: 'Horizontally scalable real-time platform for live discussions with voice, text, and comment synchronization.',
    highlights: [
      'Built event-driven messaging system supporting 10K+ concurrent sessions with <500ms audio latency using WebRTC',
      'Implemented live comments using Redis Pub/Sub and Rust concurrency, delivering up to 50,000+ comments/sec',
      'Designed ephemeral JWT-based authentication and RBAC enforcement for secure session-based access control',
      'Built persistent recording and synchronized playback backed by Cassandra with automated retention and fault-tolerant replication'
    ],
    metrics: [
      { value: '10K+', label: 'concurrent sessions' },
      { value: '<500ms', label: 'audio latency' },
      { value: '50K+', label: 'comments/sec' },
      { value: 'JWT', label: 'auth + RBAC' }
    ]
  },
  {
    title: 'JDTR',
    techStack: 'Python • RocksDB • FastAPI',
    description: 'Crash-resilient workflow engine for long-running backend and AI tasks with durable progress saving.',
    highlights: [
      'Built persistent execution state using RocksDB, guaranteeing at-least-once execution semantics',
      'Implemented automatic crash recovery—workflows resume from exact failure point without manual intervention',
      'Exposed workflows as REST APIs using FastAPI for distributed microservice integration and async job coordination'
    ],
    metrics: [
      { value: '✓', label: 'crash-resilient' },
      { value: 'RocksDB', label: 'persistent state' },
      { value: '≥1x', label: 'execution guarantee' },
      { value: 'REST', label: 'API exposed' }
    ]
  }
]

export const contributions: Contribution[] = [
  {
    repo: 'spring-projects/spring-framework',
    title: 'Add support for Redis Streams in Spring Data',
    description: 'Implemented Redis Streams support for Spring Data Redis, enabling event-driven architectures with consumer groups and message acknowledgment.',
    status: 'merged',
    prNumber: 'PR #2847',
    prUrl: '#',
    changes: '+482 −127',
    date: 'Merged Jan 2025',
    icon: 'settings'
  },
  {
    repo: 'qdrant/qdrant',
    title: 'Optimize vector similarity search for large datasets',
    description: 'Performance optimization for HNSW index traversal, reducing search latency by ~30% for datasets over 10M vectors through improved graph navigation.',
    status: 'merged',
    prNumber: 'PR #1523',
    prUrl: '#',
    changes: '+215 −89',
    date: 'Merged Dec 2024',
    icon: 'zap'
  },
  {
    repo: 'fastapi/fastapi',
    title: 'Add WebSocket compression support',
    description: 'Implementing per-message deflate compression for WebSocket connections, reducing bandwidth usage by up to 60% for text-heavy real-time applications.',
    status: 'open',
    prNumber: 'PR #3421',
    prUrl: '#',
    changes: '+340 −52',
    date: 'Opened Jan 2025',
    icon: 'code'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'Rust']
  },
  {
    title: 'Backend',
    skills: ['Spring Framework', 'FastAPI', 'gRPC', 'REST', 'SSE', 'WebRTC']
  },
  {
    title: 'Data & Messaging',
    skills: ['PostgreSQL', 'Cassandra', 'MongoDB', 'Redis', 'Kafka', 'Qdrant']
  },
  {
    title: 'DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'OpenTelemetry', 'Grafana']
  },
  {
    title: 'AI Systems',
    skills: ['LLM Orchestration', 'Prompt Engineering', 'RAG', 'Evaluation Pipelines']
  }
]

export const services: ServiceCard[] = [
  {
    icon: 'user',
    title: 'Hire Me',
    description: 'Looking for a backend engineer with expertise in distributed systems, real-time applications, and AI infrastructure? Let\'s discuss full-time or contract opportunities.',
    buttonText: 'Share Role',
    modalType: 'employment'
  },
  {
    icon: 'briefcase',
    title: 'Project Inquiry',
    description: 'Have a specific project in mind? I take on select freelance projects for backend systems, performance optimization, and scaling challenges. Let\'s build something great.',
    buttonText: 'Request Project',
    modalType: 'project'
  },
  {
    icon: 'github',
    title: 'Open Source',
    description: 'Interested in collaborating on open source? I contribute to projects in distributed systems, backend infrastructure, and AI tooling. Let\'s build something impactful.',
    buttonText: 'Invite Me',
    modalType: 'collaboration'
  }
]

export const articles: Article[] = [
  {
    slug: 'event-sourcing',
    title: 'Building Fault-Tolerant Microservices with Event Sourcing',
    tag: 'Distributed Systems',
    date: 'December 15, 2024',
    readTime: '8 min read',
    excerpt: 'Deep dive into implementing event sourcing patterns for distributed systems. Learn how to handle failures gracefully, maintain consistency across services, and build systems that can recover from any state. Includes real-world examples from production deployments handling millions of events daily.'
  },
  {
    slug: 'webrtc-latency',
    title: 'Optimizing WebRTC Latency for Real-Time Applications',
    tag: 'Performance',
    date: 'November 28, 2024',
    readTime: '10 min read',
    excerpt: 'Achieving sub-500ms latency in WebRTC streaming requires careful attention to network optimization, codec selection, and connection management. This guide covers practical techniques for reducing latency, handling packet loss, and maintaining quality under varying network conditions.'
  },
  {
    slug: 'rag-production',
    title: 'RAG Architecture: From Prototype to Production',
    tag: 'AI Systems',
    date: 'October 22, 2024',
    readTime: '12 min read',
    excerpt: 'Lessons learned scaling Retrieval-Augmented Generation systems to production. Covers vector database selection and optimization, chunking strategies, caching patterns, and how to handle 40% latency reduction through architectural improvements. Real metrics from production RAG systems serving thousands of users.'
  },
  {
    slug: 'websocket-scaling',
    title: 'Scaling WebSocket Connections: Redis Pub/Sub vs Kafka',
    tag: 'Backend',
    date: 'September 10, 2024',
    readTime: '9 min read',
    excerpt: 'When you need to handle 50,000+ messages per second across distributed WebSocket servers, your message broker choice matters. A practical comparison of Redis Pub/Sub and Kafka for real-time messaging, including latency benchmarks, operational complexity, and when to choose each.'
  },
  {
    slug: 'concurrent-users',
    title: 'Designing for 10K Concurrent Users: Lessons from IWouldArgue',
    tag: 'System Design',
    date: 'August 5, 2024',
    readTime: '15 min read',
    excerpt: 'Building a platform that supports 10,000+ concurrent live discussions taught me hard lessons about horizontal scaling, state management, and WebRTC architecture. Here\'s how we achieved <500ms latency while handling massive concurrent load with Kubernetes, Cassandra, and careful system design.'
  }
]
