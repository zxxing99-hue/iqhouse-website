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
    philosophy: string;
    blog: string;
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
    designPhilosophy: {
      title: string;
      subtitle: string;
      principle1: string;
      principle2: string;
      principle3: string;
      principle4: string;
    };
    whoWeWorkWith: {
      title: string;
      client1: string;
      client2: string;
      client3: string;
    };
    finalCta: {
      title: string;
      button: string;
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
  
  // Philosophy page
  philosophy: {
    hero: {
      title: string;
      subtitle: string;
    };
    handsOn: {
      title: string;
      quote: string;
      description: string;
    };
    physicalToys: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      skill1: string;
      skill2: string;
      skill3: string;
      skill4: string;
      skill5: string;
      skill6: string;
    };
    designPrinciples: {
      title: string;
      principle1: string;
      principle1Desc: string;
      principle2: string;
      principle2Desc: string;
      principle3: string;
      principle3Desc: string;
    };
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
    partners: {
      title: string;
      description: string;
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
      error: string;
    };
    info: {
      title: string;
      emailLabel: string;
      followLabel: string;
    };
  };
  
  // Blog
  blog: {
    title: string;
    readMore: string;
    noArticles: string;
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
      philosophy: 'Philosophy',
      blog: 'Insights',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        headline: 'Design-Driven Educational Toys for Growing Minds',
        subheadline: 'We partner with educational brands and distributors to develop original, high-quality learning toys that support children\'s cognitive, creative, and hands-on development.',
        cta1: 'OEM & ODM Cooperation',
        cta2: 'View Our Design Philosophy',
      },
      whoWeAre: {
        title: 'Who We Are',
        description: 'IQHouse designs educational toys based on how children actually learn. We understand that meaningful development happens through:',
        point1: 'Language ability as the foundation of learning',
        point2: 'Hands-on exploration as the key to cognition',
        point3: 'Learning through play and interaction',
      },
      whatWeOffer: {
        title: 'What We Offer',
        service1Title: 'Original Gameplay & Educational Toy Design',
        service1Desc: 'We create unique toy concepts with proprietary design copyrights, recognized by international brands for OEM partnerships.',
        service2Title: 'OEM / ODM Manufacturing with Stable Supply Chain',
        service2Desc: 'Reliable production with backup suppliers for all key materials, ensuring consistent quality and on-time delivery.',
        service3Title: 'Private Label & Brand Customization',
        service3Desc: 'Flexible cooperation models to bring your brand vision to life with our design expertise and manufacturing capabilities.',
      },
      designPhilosophy: {
        title: 'Design & Play Philosophy',
        subtitle: 'Our approach to educational toy design',
        principle1: '"The hand is the second brain" — We design toys that children can touch, manipulate, and explore.',
        principle2: 'Simple rules lead to deeper learning — Easy to start, engaging to master.',
        principle3: 'Interaction and competition drive engagement — Multiple outcomes keep play fresh and exciting.',
        principle4: 'Building skills that AI cannot replace — Creativity, confidence, social ability, and logical thinking.',
      },
      whoWeWorkWith: {
        title: 'Who We Work With',
        client1: 'Independent educational toy brands',
        client2: 'Brand buyers & founders seeking differentiated products',
        client3: 'Mid-to-high-end distributors focused on quality',
      },
      finalCta: {
        title: 'Let\'s Create Educational Toys That Truly Matter',
        button: 'Contact Us for OEM & ODM Cooperation',
      },
    },
    oemOdm: {
      hero: {
        title: 'OEM & ODM Cooperation',
        subtitle: 'Partner with us to bring exceptional educational toys to market',
      },
      difference: {
        title: 'Understanding OEM & ODM',
        oemTitle: 'OEM (Original Equipment Manufacturer)',
        oemDesc: 'We manufacture products based on your designs and specifications, with your brand label. You control the design, we handle production.',
        odmTitle: 'ODM (Original Design Manufacturer)',
        odmDesc: 'We design and manufacture products that you can brand as your own. Leverage our design expertise and existing product portfolio.',
      },
      process: {
        title: 'Our Cooperation Process',
        step1: 'Initial Consultation',
        step1Desc: 'Discuss your brand vision, target market, educational goals, and product requirements.',
        step2: 'Design & Development',
        step2Desc: 'Our team creates prototypes, refines gameplay mechanics, and ensures educational value.',
        step3: 'Quality Manufacturing',
        step3Desc: 'Production with rigorous quality control, using our established supply chain and backup suppliers.',
        step4: 'Long-term Partnership',
        step4Desc: 'Ongoing support, product iterations, and collaborative development of new concepts.',
      },
      advantages: {
        title: 'Why Partner with IQHouse',
        adv1: 'Original Design Capability',
        adv1Desc: 'Proprietary designs with copyrights, trusted by Disney, Hello Kitty, Noddy, and other international brands.',
        adv2: 'Reliable Supply Chain',
        adv2Desc: 'Established relationships with key suppliers in China, with backup options for all critical materials.',
        adv3: 'Educational Expertise',
        adv3Desc: 'Deep understanding of child development, from our roots in children\'s publishing to toy design.',
      },
      cta: 'Start a Conversation',
    },
    philosophy: {
      hero: {
        title: 'Design & Play Philosophy',
        subtitle: 'How we think about educational toys and child development',
      },
      handsOn: {
        title: 'Hands-On Learning',
        quote: '"The hand is the second brain"',
        description: 'Children learn best when they can touch, manipulate, and explore. Our toys transform abstract concepts into tangible experiences through tactile design, interlocking structures, and physical problem-solving.',
      },
      physicalToys: {
        title: 'Why Physical Toys Matter in the AI Era',
        description: 'As screens dominate children\'s attention, parents increasingly seek alternatives that protect vision and encourage real-world interaction. Physical toys provide parent-child bonding opportunities and reduce screen time while building foundational skills.',
      },
      skills: {
        title: 'Skills That AI Cannot Replace',
        skill1: 'Creativity',
        skill2: 'Confidence',
        skill3: 'Social Ability',
        skill4: 'Mathematical Thinking',
        skill5: 'Focus & Concentration',
        skill6: 'Logical Reasoning',
      },
      designPrinciples: {
        title: 'Our Three Design Principles',
        principle1: 'Simple Rules',
        principle1Desc: 'Children can quickly understand how to play, enabling independent exploration and reducing frustration.',
        principle2: 'Interactive & Competitive',
        principle2Desc: 'Built-in interaction and friendly competition align with children\'s natural tendencies and keep them engaged.',
        principle3: 'Multiple Outcomes',
        principle3Desc: 'Diverse results and variations ensure high replayability—our companion series toys offer over 2,600 different gameplay possibilities.',
      },
    },
    about: {
      hero: {
        title: 'About IQHouse',
        subtitle: 'A supplier who truly understands child development',
      },
      journey: {
        title: 'Our Journey',
        description: 'IQHouse began in children\'s publishing, creating educational books for young learners. When the traditional Chinese character market became limited, we transitioned into educational toy design and manufacturing. This unique background gives us deep insight into language development, cognitive learning, and how children engage with educational content. Today, we focus on original toy gameplay design for the mid-to-high-end market, serving brands in Europe, North America, and beyond.',
      },
      difference: {
        title: 'What Makes Us Different',
        point1: 'Original design capability with product copyrights recognized internationally',
        point2: 'Long-term cooperation with major brands including Disney, Hello Kitty,巧虎, and Noddy',
        point3: 'Many brands approach us for private label partnerships based on our innovative designs',
        point4: 'Balanced pricing strategy: mid-to-high quality at competitive prices',
      },
      partners: {
        title: 'Trusted by Leading Brands',
        description: 'We\'ve built lasting partnerships with Disney, Hello Kitty, 巧虎 (Qiaohu), and Noddy. Many of our products originate from our original designs, which attract these brands for private label cooperation. Our quality, supply chain reliability, and design innovation make us a trusted long-term partner.',
      },
      vision: {
        title: 'Our Vision',
        description: 'We believe the best educational toys combine thoughtful design, hands-on engagement, and genuine understanding of child development. Our mission is to partner with brands and distributors who share this vision, creating products that truly matter for growing minds.',
      },
    },
    contact: {
      hero: {
        title: 'Let\'s Work Together',
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
        messagePlaceholder: 'Tell us about your project, target market, and cooperation interests...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! We\'ll be in touch soon.',
        error: 'Something went wrong. Please try again.',
      },
      info: {
        title: 'Get in Touch',
        emailLabel: 'Email',
        followLabel: 'Follow Us',
      },
    },
    blog: {
      title: 'Insights & Thinking',
      readMore: 'Read More',
      noArticles: 'Articles coming soon',
    },
    footer: {
      tagline: 'A supplier who truly understands child development',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: '© 2025 IQHouse. All rights reserved.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      oemOdm: 'OEM & ODM',
      philosophy: '设计理念',
      blog: '洞察',
      about: '关于我们',
      contact: '联系我们',
    },
    home: {
      hero: {
        headline: '设计驱动的儿童益智教具',
        subheadline: '我们与教育品牌和经销商合作,开发原创、高品质的学习玩具,支持儿童的认知、创造力和动手能力发展。',
        cta1: 'OEM & ODM 合作',
        cta2: '查看设计理念',
      },
      whoWeAre: {
        title: '我们是谁',
        description: 'IQHouse 基于儿童真实的学习方式设计教具。我们深知有意义的发展源于:',
        point1: '语言能力是学习的基础',
        point2: '动手探索是认知的关键',
        point3: '通过游戏和互动学习',
      },
      whatWeOffer: {
        title: '我们提供什么',
        service1Title: '原创玩法与教具设计',
        service1Desc: '我们创造独特的玩具概念,拥有自主设计版权,获得国际品牌的认可和OEM合作。',
        service2Title: 'OEM / ODM 制造与稳定供应链',
        service2Desc: '可靠的生产能力,所有关键材料均有备选供应商,确保质量稳定和准时交付。',
        service3Title: '贴牌与品牌定制',
        service3Desc: '灵活的合作模式,结合我们的设计专长和制造能力,实现您的品牌愿景。',
      },
      designPhilosophy: {
        title: '设计与游戏理念',
        subtitle: '我们的教具设计方法',
        principle1: '"手是人的第二大脑" — 我们设计儿童可以触摸、操作和探索的玩具。',
        principle2: '简单规则带来深度学习 — 易于上手,引人入胜。',
        principle3: '互动与竞争驱动参与 — 多样化的结果让游戏保持新鲜和刺激。',
        principle4: '培养AI无法取代的能力 — 创造力、自信心、社交能力和逻辑思维。',
      },
      whoWeWorkWith: {
        title: '我们的合作伙伴',
        client1: '独立教育玩具品牌',
        client2: '寻求差异化产品的品牌买手和创始人',
        client3: '注重品质的中高端经销商',
      },
      finalCta: {
        title: '让我们共同创造真正有意义的教具',
        button: '联系我们洽谈 OEM & ODM 合作',
      },
    },
    oemOdm: {
      hero: {
        title: 'OEM & ODM 合作',
        subtitle: '与我们合作,将卓越的教育玩具推向市场',
      },
      difference: {
        title: '理解 OEM 与 ODM',
        oemTitle: 'OEM (原始设备制造商)',
        oemDesc: '我们根据您的设计和规格制造产品,贴上您的品牌标签。您控制设计,我们负责生产。',
        odmTitle: 'ODM (原始设计制造商)',
        odmDesc: '我们设计并制造产品,您可以将其作为自己的品牌。利用我们的设计专长和现有产品组合。',
      },
      process: {
        title: '我们的合作流程',
        step1: '初步咨询',
        step1Desc: '讨论您的品牌愿景、目标市场、教育目标和产品需求。',
        step2: '设计与开发',
        step2Desc: '我们的团队创建原型,完善游戏机制,确保教育价值。',
        step3: '质量制造',
        step3Desc: '严格质量控制的生产,使用我们成熟的供应链和备用供应商。',
        step4: '长期合作',
        step4Desc: '持续支持、产品迭代和新概念的协作开发。',
      },
      advantages: {
        title: '为什么选择 IQHouse',
        adv1: '原创设计能力',
        adv1Desc: '拥有版权的专有设计,受到迪士尼、Hello Kitty、Noddy等国际品牌的信赖。',
        adv2: '可靠的供应链',
        adv2Desc: '与中国主要供应商建立稳固关系,所有关键材料均有备选方案。',
        adv3: '教育专业知识',
        adv3Desc: '对儿童发展有深刻理解,源于我们从儿童出版到玩具设计的背景。',
      },
      cta: '开始对话',
    },
    philosophy: {
      hero: {
        title: '设计与游戏理念',
        subtitle: '我们如何思考教育玩具和儿童发展',
      },
      handsOn: {
        title: '动手学习',
        quote: '"手是人的第二大脑"',
        description: '儿童在能够触摸、操作和探索时学习效果最佳。我们的玩具通过触觉设计、互锁结构和物理问题解决,将抽象概念转化为具体体验。',
      },
      physicalToys: {
        title: '为什么实体玩具在AI时代很重要',
        description: '随着屏幕主导儿童的注意力,家长越来越多地寻求能够保护视力和鼓励现实世界互动的替代方案。实体玩具提供亲子互动机会,减少屏幕时间,同时培养基础技能。',
      },
      skills: {
        title: 'AI 无法取代的技能',
        skill1: '创造力',
        skill2: '自信心',
        skill3: '社交能力',
        skill4: '数学思维',
        skill5: '专注力',
        skill6: '逻辑推理',
      },
      designPrinciples: {
        title: '我们的三大设计原则',
        principle1: '简单规则',
        principle1Desc: '儿童可以快速理解如何游戏,实现独立探索,减少挫败感。',
        principle2: '互动与竞争',
        principle2Desc: '内置互动和友好竞争符合儿童的天性,保持他们的参与度。',
        principle3: '多样结果',
        principle3Desc: '多样化的结果和变化确保高重玩性——我们的陪伴系列玩具提供超过2600种不同的玩法可能性。',
      },
    },
    about: {
      hero: {
        title: '关于 IQHouse',
        subtitle: '最懂孩子成长需求的供应商',
      },
      journey: {
        title: '我们的历程',
        description: 'IQHouse 起源于儿童出版,为年轻学习者创作教育书籍。当繁体字市场受限时,我们转向教育玩具设计和制造。这一独特背景使我们对语言发展、认知学习以及儿童如何与教育内容互动有深刻洞察。如今,我们专注于面向中高端市场的原创玩具玩法设计,服务于欧洲、北美及其他地区的品牌。',
      },
      difference: {
        title: '我们的与众不同',
        point1: '拥有国际认可的产品版权的原创设计能力',
        point2: '与迪士尼、Hello Kitty、巧虎、Noddy等主要品牌的长期合作',
        point3: '许多品牌基于我们的创新设计主动寻求贴牌合作',
        point4: '平衡的定价策略:具有竞争力的价格提供中高品质',
      },
      partners: {
        title: '受到领先品牌信赖',
        description: '我们与迪士尼、Hello Kitty、巧虎和Noddy建立了持久的合作关系。我们的许多产品源于原创设计,吸引这些品牌进行贴牌合作。我们的质量、供应链可靠性和设计创新使我们成为值得信赖的长期合作伙伴。',
      },
      vision: {
        title: '我们的愿景',
        description: '我们相信最好的教育玩具结合了深思熟虑的设计、动手参与和对儿童发展的真正理解。我们的使命是与分享这一愿景的品牌和经销商合作,创造对成长中的心灵真正重要的产品。',
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
        emailPlaceholder: 'zhang@company.com',
        company: '公司名称',
        companyPlaceholder: '您的公司',
        country: '国家/地区',
        countryPlaceholder: '中国',
        message: '留言',
        messagePlaceholder: '告诉我们您的项目、目标市场和合作意向...',
        submit: '发送消息',
        sending: '发送中...',
        success: '感谢您!我们会尽快与您联系。',
        error: '出现问题,请重试。',
      },
      info: {
        title: '联系方式',
        emailLabel: '邮箱',
        followLabel: '关注我们',
      },
    },
    blog: {
      title: '洞察与思考',
      readMore: '阅读更多',
      noArticles: '文章即将发布',
    },
    footer: {
      tagline: '最懂孩子成长需求的供应商',
      quickLinks: '快速链接',
      connect: '联系',
      copyright: '© 2025 IQHouse. 保留所有权利。',
    },
  },
};
