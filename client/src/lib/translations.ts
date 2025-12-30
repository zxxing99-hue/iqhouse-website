/**
 * Design Philosophy: Swiss Modernism meets Scandinavian Minimalism
 * Translations for IQHouse B2B website
 * Supports: English (default), Chinese Simplified
 */

export type Language = 'en' | 'zh';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    oemOdm: string;
    classroom: string;
    capabilities: string;
    about: string;
    contact: string;
  };
  
  // Home page
  home: {
    hero: {
      headline: string;
      subheadline: string;
      cta1: string;
      cta2: string;
    };
    whoWeAre: {
      title: string;
      description: string;
      point1: string;
      point2: string;
      point3: string;
    };
    whatWeOffer: {
      title: string;
      service1Title: string;
      service1Desc: string;
      service2Title: string;
      service2Desc: string;
      service3Title: string;
      service3Desc: string;
    };
    designApproach: {
      title: string;
      subtitle: string;
      principle1: string;
      principle2: string;
      principle3: string;
    };
    capabilities: {
      title: string;
      description: string;
      cta: string;
    };
    finalCta: {
      title: string;
      button: string;
    };
  };
  
  // Classroom page
  classroom: {
    hero: {
      title: string;
      subtitle: string;
    };
    section1: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
      point1: string;
      point2: string;
      point3: string;
      p4: string;
    };
    section2: {
      title: string;
      p1: string;
      p2: string;
      point1: string;
      point2: string;
      point3: string;
      p3: string;
    };
    section3: {
      title: string;
      p1: string;
      p2: string;
      point1: string;
      point2: string;
      point3: string;
      point4: string;
      p3: string;
      result1: string;
      result2: string;
      result3: string;
    };
    section4: {
      title: string;
      p1: string;
      p2: string;
      point1: string;
      point2: string;
      point3: string;
      point4: string;
      p3: string;
    };
    section5: {
      title: string;
      p1: string;
      p2: string;
      point1: string;
      point2: string;
      point3: string;
      p3: string;
    };
  };
  
  // Capabilities page
  capabilities: {
    hero: {
      title: string;
      subtitle: string;
    };
    cap1: {
      title: string;
      desc: string;
    };
    cap2: {
      title: string;
      desc: string;
    };
    cap3: {
      title: string;
      desc: string;
    };
    cap4: {
      title: string;
      desc: string;
    };
    cap5: {
      title: string;
      desc: string;
    };
    cap6: {
      title: string;
      desc: string;
    };
    cap7: {
      title: string;
      desc: string;
    };
    cap8: {
      title: string;
      desc: string;
    };
    cap9: {
      title: string;
      desc: string;
    };
    cap10: {
      title: string;
      desc: string;
    };
    cap11: {
      title: string;
      desc: string;
    };
    cap12: {
      title: string;
      desc: string;
    };
  };
  
  // OEM & ODM page
  oemOdm: {
    hero: {
      title: string;
      subtitle: string;
    };
    difference: {
      title: string;
      oemTitle: string;
      oemDesc: string;
      odmTitle: string;
      odmDesc: string;
    };
    process: {
      title: string;
      step1: string;
      step1Desc: string;
      step2: string;
      step2Desc: string;
      step3: string;
      step3Desc: string;
      step4: string;
      step4Desc: string;
    };
    advantages: {
      title: string;
      adv1: string;
      adv1Desc: string;
      adv2: string;
      adv2Desc: string;
      adv3: string;
      adv3Desc: string;
    };
    cta: string;
  };
  
  // About page
  about: {
    hero: {
      title: string;
      subtitle: string;
    };
    journey: {
      title: string;
      description: string;
    };
    difference: {
      title: string;
      point1: string;
      point2: string;
      point3: string;
      point4: string;
    };
    vision: {
      title: string;
      description: string;
    };
  };
  
  // Contact page
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      country: string;
      countryPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
    };
    info: {
      title: string;
      emailLabel: string;
      followLabel: string;
    };
  };
  
  // Footer
  footer: {
    tagline: string;
    quickLinks: string;
    connect: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      oemOdm: 'OEM & ODM',
      classroom: 'From Classroom to Toy Design',
      capabilities: 'Learning Capabilities',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        headline: 'Design-Driven Educational Toys for Growing Minds',
        subheadline: 'We partner with educational brands and distributors to develop original, high-quality learning toys based on real classroom observation.',
        cta1: 'OEM & ODM Cooperation',
        cta2: 'Our Design Approach',
      },
      whoWeAre: {
        title: 'Who We Are',
        description: 'IQHouse designs educational toys based on how children actually learn. Our approach begins with observation in real kindergartens and early learning classrooms.',
        point1: 'Design methodology rooted in classroom observation',
        point2: 'Original gameplay concepts with design copyrights',
        point3: 'Stable OEM/ODM manufacturing for educational brands',
      },
      whatWeOffer: {
        title: 'What We Offer',
        service1Title: 'Original Gameplay & Educational Toy Design',
        service1Desc: 'We create unique toy concepts with proprietary design copyrights, recognized by international brands for OEM partnerships.',
        service2Title: 'OEM / ODM Manufacturing',
        service2Desc: 'Reliable production with backup suppliers for all key materials, ensuring consistent quality and on-time delivery.',
        service3Title: 'Design Partnership',
        service3Desc: 'We work as design and development partners, helping brands create learning experiences that truly matter.',
      },
      designApproach: {
        title: 'Our Design Approach',
        subtitle: 'From classroom observation to hands-on learning',
        principle1: 'Children learn by touching, trying, and discovering patterns through play',
        principle2: 'Physical interaction transforms abstract concepts into real understanding',
        principle3: 'Toys designed for specific developmental stages, not one-size-fits-all',
      },
      capabilities: {
        title: 'Learning Capabilities Framework',
        description: 'Every toy we design targets one or more foundational learning capabilities that screens and automation cannot replicate.',
        cta: 'View All 12 Capabilities',
      },
      finalCta: {
        title: "Let's Create Educational Toys That Truly Matter",
        button: 'Start a Conversation',
      },
    },
    classroom: {
      hero: {
        title: 'From Classroom to Toy Design',
        subtitle: 'Our design methodology based on real learning behavior',
      },
      section1: {
        title: 'Our Design Starting Point',
        p1: 'Children do not learn through explanation alone. They learn by touching, trying, repeating, and discovering patterns through play.',
        p2: 'At IQHouse, our toy designs begin with real classroom observation, not assumptions.',
        p3: 'We work closely with kindergartens and early learning environments to understand:',
        point1: 'How children at different ages respond to learning tasks',
        point2: 'Where misunderstandings occur',
        point3: 'How physical interaction helps transform abstract concepts into real understanding',
        p4: 'Our role is to translate these observations into simple, intuitive, and engaging toy experiences.',
      },
      section2: {
        title: 'Designing for Development Stages',
        p1: 'Children at different ages have different learning goals.',
        p2: 'Instead of designing "one-size-fits-all" toys, we focus on:',
        point1: 'What a child needs to understand at a specific developmental stage',
        point2: 'How complexity should evolve naturally through play',
        point3: 'How rules remain simple while learning depth increases',
        p3: 'A concept that is difficult to explain verbally can often be understood instantly when experienced through hands-on interaction.',
      },
      section3: {
        title: 'A Method, Not a Trend',
        p1: 'Our approach is not driven by trends or visual appeal alone.',
        p2: 'Every toy is developed through a structured process:',
        point1: 'Observation of real learning behavior',
        point2: 'Identification of learning barriers',
        point3: 'Translation into physical interaction and gameplay',
        point4: 'Iterative refinement based on usability and engagement',
        p3: 'This methodology allows us to create toys that are:',
        result1: 'Intuitive to play',
        result2: 'Meaningful to learn from',
        result3: 'Sustainable in long-term educational value',
      },
      section4: {
        title: 'Why Physical Play Still Matters',
        p1: 'In a digital-first world, physical play offers something irreplaceable.',
        p2: 'Hands-on toys help children develop:',
        point1: 'Focus and patience',
        point2: 'Logical thinking',
        point3: 'Confidence through problem-solving',
        point4: 'Social interaction through shared play',
        p3: 'These are foundational abilities that screens and automation cannot replicate.',
      },
      section5: {
        title: 'Our Role as a Design Partner',
        p1: 'IQHouse works as a design and development partner for educational brands.',
        p2: 'We support our partners by:',
        point1: 'Developing original gameplay concepts',
        point2: 'Adapting designs to different markets',
        point3: 'Supporting OEM and ODM cooperation with stable manufacturing',
        p3: 'Our goal is not to sell products, but to help brands create learning experiences that truly matter.',
      },
    },
    capabilities: {
      hero: {
        title: 'Learning Capabilities We Design For',
        subtitle: 'A structured framework for foundational skills that screens cannot replicate',
      },
      cap1: {
        title: 'Eye–Hand Coordination',
        desc: 'Supports fine motor development through precise physical interaction.',
      },
      cap2: {
        title: 'Concentration',
        desc: 'Encourages sustained attention through goal-oriented play.',
      },
      cap3: {
        title: 'Imagination',
        desc: 'Creates space for open-ended exploration and creative thinking.',
      },
      cap4: {
        title: 'Observation & Visual Tracking',
        desc: 'Develops attention to detail and the ability to follow visual movement.',
      },
      cap5: {
        title: 'Knowledge Transfer',
        desc: 'Helps children apply learned concepts across different contexts.',
      },
      cap6: {
        title: 'Language Ability',
        desc: 'Supports expression, comprehension, and communication through interaction.',
      },
      cap7: {
        title: 'Math Ability',
        desc: 'Builds number sense, pattern recognition, and logical sequencing.',
      },
      cap8: {
        title: 'Space Capabilities',
        desc: 'Enhances spatial awareness and three-dimensional thinking.',
      },
      cap9: {
        title: 'Reasoning',
        desc: 'Encourages analysis, prediction, and problem-solving.',
      },
      cap10: {
        title: 'Classification',
        desc: 'Develops foundational cognitive sorting and categorization skills.',
      },
      cap11: {
        title: 'Aesthetic Education & Art',
        desc: 'Cultivates creativity, visual sensitivity, and artistic expression.',
      },
      cap12: {
        title: 'Interpersonal Skills',
        desc: 'Supports cooperation, turn-taking, and social interaction.',
      },
    },
    oemOdm: {
      hero: {
        title: 'OEM & ODM Cooperation',
        subtitle: 'Design partnership for educational brands and distributors',
      },
      difference: {
        title: 'OEM & ODM Services',
        oemTitle: 'OEM (Original Equipment Manufacturing)',
        oemDesc: 'We manufacture your designs with our production capabilities and quality control systems.',
        odmTitle: 'ODM (Original Design Manufacturing)',
        odmDesc: 'We develop original toy concepts and gameplay designs that you can customize for your brand.',
      },
      process: {
        title: 'Cooperation Process',
        step1: 'Initial Consultation',
        step1Desc: 'Understand your brand positioning, target market, and learning objectives.',
        step2: 'Design Development',
        step2Desc: 'Create or adapt toy concepts based on your requirements and our classroom research.',
        step3: 'Prototyping & Testing',
        step3Desc: 'Develop samples and refine based on usability and educational effectiveness.',
        step4: 'Production & Delivery',
        step4Desc: 'Stable manufacturing with quality control and on-time delivery.',
      },
      advantages: {
        title: 'Why Work With IQHouse',
        adv1: 'Design Methodology',
        adv1Desc: 'Toys developed from real classroom observation, not assumptions.',
        adv2: 'Original Concepts',
        adv2Desc: 'Proprietary gameplay designs with design copyrights.',
        adv3: 'Stable Manufacturing',
        adv3Desc: 'Reliable production with backup suppliers for all key materials.',
      },
      cta: 'Ready to Discuss Your Project?',
    },
    about: {
      hero: {
        title: 'About IQHouse',
        subtitle: 'A design-driven educational toy developer',
      },
      journey: {
        title: 'Our Background',
        description: 'IQHouse has experience rooted in children\'s education and learning products. We transitioned from children\'s publishing to educational toy design after recognizing that children learn most effectively through hands-on exploration, not explanation alone.',
      },
      difference: {
        title: 'Our Approach',
        point1: 'Design methodology based on real classroom observation',
        point2: 'Structured learning capability framework (12 capabilities)',
        point3: 'Original gameplay concepts with design copyrights',
        point4: 'Stable OEM/ODM manufacturing for educational brands',
      },
      vision: {
        title: 'Our Role',
        description: 'IQHouse works as a design and development partner for educational brands. Our goal is to help brands create learning experiences that truly matter.',
      },
    },
    contact: {
      hero: {
        title: "Let's Work Together",
        subtitle: 'Start a conversation about OEM & ODM cooperation',
      },
      form: {
        name: 'Your Name',
        namePlaceholder: 'John Smith',
        email: 'Email Address',
        emailPlaceholder: 'john@company.com',
        company: 'Company Name',
        companyPlaceholder: 'Your Company',
        country: 'Country / Region',
        countryPlaceholder: 'United States',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project, target market, and cooperation needs...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! We will get back to you soon.',
      },
      info: {
        title: 'Get in Touch',
        emailLabel: 'Email',
        followLabel: 'Follow Us',
      },
    },
    footer: {
      tagline: 'A design partner who understands how children learn',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: '© 2025 IQHouse. All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      oemOdm: 'OEM & ODM',
      classroom: '从课堂到玩具设计',
      capabilities: '学习能力体系',
      about: '关于我们',
      contact: '联系我们',
    },
    home: {
      hero: {
        headline: '设计驱动的儿童益智教具',
        subheadline: '我们与教育品牌和经销商合作,基于真实课堂观察,开发原创、高品质的学习玩具。',
        cta1: 'OEM & ODM 合作',
        cta2: '我们的设计方法',
      },
      whoWeAre: {
        title: '我们是谁',
        description: 'IQHouse 基于儿童真实的学习方式设计教具。我们的方法始于对真实幼儿园和早教课堂的观察。',
        point1: '源于课堂观察的设计方法论',
        point2: '拥有设计版权的原创玩法',
        point3: '为教育品牌提供稳定的OEM/ODM制造',
      },
      whatWeOffer: {
        title: '我们提供什么',
        service1Title: '原创玩法与教具设计',
        service1Desc: '我们创造独特的玩具概念,拥有自主设计版权,获得国际品牌的认可和OEM合作。',
        service2Title: 'OEM / ODM 制造',
        service2Desc: '可靠的生产能力,所有关键材料均有备选供应商,确保质量稳定和准时交付。',
        service3Title: '设计合作伙伴',
        service3Desc: '我们作为设计与研发合作伙伴,帮助品牌创造真正有意义的学习体验。',
      },
      designApproach: {
        title: '我们的设计方法',
        subtitle: '从课堂观察到动手学习',
        principle1: '孩子通过触摸、尝试和在游戏中发现规律来学习',
        principle2: '实体互动将抽象概念转化为真实理解',
        principle3: '针对特定发展阶段设计的玩具,而非通用型',
      },
      capabilities: {
        title: '学习能力框架',
        description: '我们设计的每一款玩具都针对一种或多种基础学习能力,这些能力是屏幕和自动化无法复制的。',
        cta: '查看全部12个能力',
      },
      finalCta: {
        title: '让我们共同创造真正有意义的教具',
        button: '开始对话',
      },
    },
    classroom: {
      hero: {
        title: '从真实课堂到玩具设计',
        subtitle: '基于真实学习行为的设计方法论',
      },
      section1: {
        title: '我们的设计起点',
        p1: '孩子并不是通过"被讲明白"来学习世界的。真正有效的学习,来自触摸、尝试、重复与探索。',
        p2: 'IQHouse 的玩具设计,起点不是想象,而是真实课堂中的观察。',
        p3: '我们长期与幼儿园及早教课堂保持联系,持续关注:',
        point1: '不同年龄段孩子的学习反应',
        point2: '理解过程中容易出现的障碍',
        point3: '动手操作如何帮助孩子建立真实认知',
        p4: '我们的工作,是将这些观察转化为直观、可操作、易理解的玩具体验。',
      },
      section2: {
        title: '围绕成长阶段进行设计',
        p1: '不同年龄段的孩子,学习目标并不相同。',
        p2: '我们不做"所有人都能玩"的通用玩具,而是关注:',
        point1: '某一阶段孩子真正需要理解的核心概念',
        point2: '学习难度如何通过游戏自然递进',
        point3: '如何在规则简单的前提下,提供足够的学习深度',
        p3: '很多抽象概念,无法通过语言讲清楚,却可以通过玩具被"瞬间理解"。',
      },
      section3: {
        title: '这是一种方法,而不是潮流',
        p1: 'IQHouse 的设计并非跟随流行趋势,也不以外观为导向。',
        p2: '每一款产品,都会经历清晰的设计逻辑:',
        point1: '真实学习行为观察',
        point2: '学习障碍识别',
        point3: '转化为实体互动与玩法',
        point4: '根据体验持续优化',
        p3: '这让我们的玩具不仅"好玩",更具长期教育价值:',
        result1: '直观易玩',
        result2: '有意义的学习',
        result3: '可持续的教育价值',
      },
      section4: {
        title: '为什么实体玩具仍然重要',
        p1: '在高度数字化的环境中,实体玩具依然不可替代。',
        p2: '通过动手操作,孩子可以逐步建立:',
        point1: '专注力',
        point2: '逻辑与推理能力',
        point3: '解决问题的自信',
        point4: '与他人互动的社交能力',
        p3: '这些能力,无法被屏幕或 AI 所替代。',
      },
      section5: {
        title: '我们作为设计合作伙伴的角色',
        p1: 'IQHouse 不是单纯的供应商,而是设计与研发合作伙伴。',
        p2: '我们帮助品牌:',
        point1: '开发原创玩法',
        point2: '根据不同市场进行设计调整',
        point3: '在 OEM / ODM 合作中提供稳定支持',
        p3: '我们的目标,是与品牌共同打造真正有意义的学习体验。',
      },
    },
    capabilities: {
      hero: {
        title: '我们所关注的学习能力',
        subtitle: '屏幕无法复制的基础能力结构化框架',
      },
      cap1: {
        title: '手眼协调',
        desc: '通过精细操作,促进动作控制与协调能力的发展。',
      },
      cap2: {
        title: '专注力',
        desc: '在目标导向的游戏中,帮助孩子建立持续专注。',
      },
      cap3: {
        title: '想象力',
        desc: '鼓励开放式探索与创造性思维。',
      },
      cap4: {
        title: '观察与视觉追踪',
        desc: '培养对细节的关注及视觉追踪能力。',
      },
      cap5: {
        title: '知识迁移',
        desc: '帮助孩子将所学知识应用到不同情境中。',
      },
      cap6: {
        title: '语言能力',
        desc: '在互动中提升表达、理解与沟通能力。',
      },
      cap7: {
        title: '数学能力',
        desc: '建立数感、逻辑关系与基础运算认知。',
      },
      cap8: {
        title: '空间能力',
        desc: '增强三维思维与空间结构理解。',
      },
      cap9: {
        title: '推理能力',
        desc: '培养分析问题与解决问题的能力。',
      },
      cap10: {
        title: '分类能力',
        desc: '发展基础认知、比较与分类能力。',
      },
      cap11: {
        title: '美育与艺术',
        desc: '培养审美感受力与艺术创造力。',
      },
      cap12: {
        title: '人际交往能力',
        desc: '在共同游戏中学习合作与互动。',
      },
    },
    oemOdm: {
      hero: {
        title: 'OEM & ODM 合作',
        subtitle: '为教育品牌和经销商提供设计合作',
      },
      difference: {
        title: 'OEM & ODM 服务',
        oemTitle: 'OEM (原始设备制造)',
        oemDesc: '我们使用生产能力和质量控制系统制造您的设计。',
        odmTitle: 'ODM (原始设计制造)',
        odmDesc: '我们开发原创玩具概念和玩法设计,您可以为您的品牌定制。',
      },
      process: {
        title: '合作流程',
        step1: '初步咨询',
        step1Desc: '了解您的品牌定位、目标市场和学习目标。',
        step2: '设计开发',
        step2Desc: '基于您的需求和我们的课堂研究创建或调整玩具概念。',
        step3: '原型与测试',
        step3Desc: '开发样品并根据可用性和教育效果进行优化。',
        step4: '生产与交付',
        step4Desc: '稳定的制造,质量控制和准时交付。',
      },
      advantages: {
        title: '为什么选择IQHouse',
        adv1: '设计方法论',
        adv1Desc: '基于真实课堂观察开发的玩具,而非假设。',
        adv2: '原创概念',
        adv2Desc: '拥有设计版权的专有玩法设计。',
        adv3: '稳定制造',
        adv3Desc: '所有关键材料均有备选供应商的可靠生产。',
      },
      cta: '准备讨论您的项目了吗?',
    },
    about: {
      hero: {
        title: '关于 IQHouse',
        subtitle: '设计驱动的教具研发商',
      },
      journey: {
        title: '我们的背景',
        description: 'IQHouse 拥有儿童教育和学习产品方面的经验。在认识到儿童通过动手探索而非单纯解释学习最有效后,我们从儿童出版转型到教具设计。',
      },
      difference: {
        title: '我们的方法',
        point1: '基于真实课堂观察的设计方法论',
        point2: '结构化的学习能力框架(12个能力)',
        point3: '拥有设计版权的原创玩法概念',
        point4: '为教育品牌提供稳定的OEM/ODM制造',
      },
      vision: {
        title: '我们的角色',
        description: 'IQHouse 作为教育品牌的设计与研发合作伙伴。我们的目标是帮助品牌创造真正有意义的学习体验。',
      },
    },
    contact: {
      hero: {
        title: '让我们携手合作',
        subtitle: '开始关于 OEM & ODM 合作的对话',
      },
      form: {
        name: '您的姓名',
        namePlaceholder: '张三',
        email: '电子邮箱',
        emailPlaceholder: 'zhangsan@company.com',
        company: '公司名称',
        companyPlaceholder: '您的公司',
        country: '国家/地区',
        countryPlaceholder: '中国',
        message: '留言',
        messagePlaceholder: '告诉我们您的项目、目标市场和合作需求...',
        submit: '发送消息',
        sending: '发送中...',
        success: '感谢您!我们会尽快回复您。',
      },
      info: {
        title: '联系方式',
        emailLabel: '邮箱',
        followLabel: '关注我们',
      },
    },
    footer: {
      tagline: '理解儿童如何学习的设计合作伙伴',
      quickLinks: '快速链接',
      connect: '联系',
      copyright: '© 2025 IQHouse. 保留所有权利。',
    },
  },
};
