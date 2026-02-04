const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const langSwitch = document.querySelector('.lang-switch');

const translations = {
  zh: {
    meta_title: '开源私董会',
    meta_description:
      '开源私董会由 CCF 开源发展技术委员会、天工开物开源基金会、CSDN、开源社联合发起，面向开源项目创始人与商业化团队，提供战略诊断、商业赋能与资源对接，助推项目从“好用”走向“商用”。',
    lang_label: '语言',
    lang_zh: '中文',
    lang_en: 'English',
    nav_toggle_label: '打开导航菜单',
    nav_label: '主导航',
    logo: '开源私董会',
    nav_about: '项目介绍',
    nav_experts: '专家阵容',
    nav_objects: '目标对象',
    nav_principles: '赋能内容',
    nav_programs: '运作机制',
    nav_opensource: '首站与区域',
    nav_join: '如何加入',
    nav_contact: '联系方式',
    hero_eyebrow: '开源私董会 · 正式启动',
    hero_title: '助推项目从“好用”走向“商用”',
    hero_lead:
      '开源，正在成为全球技术创新的核心驱动力。在国内，许多开发者和创始团队仍面临“重代码、轻运营”“商业化落地难”的瓶颈。我们发起开源私董会，打造中国开源项目的“成长加速器”，汇聚顶尖专家资源，为有潜力的开源项目提供战略指导与商业赋能，助力跨越技术成熟、社区成熟到商业成熟的关键门槛。',
    hero_cta: '申请参与',
    hero_card_title: '我们寻找谁',
    hero_card_item1: '开源项目创始人 / 核心贡献者',
    hero_card_item2: '初创阶段的开源商业化团队',
    hero_card_item3: '已有积累、寻求突破的负责人',
    hero_stat1_label: '期 / 年',
    hero_stat2_label: '人 / 期',
    hero_stat3_label: '项目 / 期',
    about_label: '项目介绍',
    about_title: '打造中国开源项目的成长加速器',
    about_text:
      '开源私董会由 CCF 开源发展技术委员会、天工开物开源基金会、CSDN、开源社联合发起，聚焦开源项目从“好用”走向“商用”的关键阶段。我们以“少而精、深而实”的方式组织闭门交流，围绕技术路径、社区建设与商业化落地提供系统支持，帮助项目实现可持续成长。',
    about_card1_title: '真实问题',
    about_card1_text: '只讨论项目在技术、社区与商业化中的关键瓶颈，输出可落地的改进路径。',
    about_card2_title: '结构化机制',
    about_card2_text: '采用小规模邀请机制与输出导向流程，确保每次交流形成可执行方案。',
    about_card3_title: '持续成长',
    about_card3_text: '加入校友网络，获得长期导师跟进与资源对接支持。',
    experts_label: '专家阵容',
    expert1_alt: '章文嵩 博士',
    expert1_name: '章文嵩 博士',
    expert1_roles: 'CCF会士 <br />LVS（Linux Virtual Server）创始人 <br />CCF开源发展技术委员会副主任',
    expert1_bio:
      '现从事云原生与 AI Infra 创业孵化与投资，曾任高瓴运营合伙人、滴滴出行高级副总裁、阿里云 CTO 等职位。1998 年创立 LVS 开源项目，长期推动国内开源生态建设，拥有大规模系统设计与软件研发管理经验。',
    expert2_alt: '蒋涛',
    expert2_name: '蒋涛',
    expert2_roles: 'CSDN 创始人、董事长<br />中国开源联盟副主席<br />开放原子开源基金会理事',
    expert2_bio:
      '三十余年软件与互联网创业者，持续建设 CSDN、程序员杂志、GitCode 等开发者平台，覆盖 5100 万用户。发起 GOSIM 全球开源创新汇、“1024 中国程序员节”等活动，并投资 90 余家科技企业，推动开源产业化。',
    expert3_alt: '田广礼',
    expert3_name: '田广礼',
    expert3_roles: '天工开物开源基金会理事长兼秘书长<br />CCF开源发展技术委员会执行委员',
    expert3_bio:
      '专注于具有中国特色的 AI 开源治理与运营研究，曾任职中海油、中国信科集团、中国船舶集团等机构。研究方向为工业大数据与 AI 机器人融合技术，推动开源合规治理实践落地。',
    expert4_alt: '程勇',
    expert4_name: '程勇',
    expert4_roles: 'CCF开源发展技术委员会执行委员',
    expert4_bio:
      '资深连续创业者与开源社区贡献者，曾共同发起开源中间件社区 huihoo.org，主导 JFox 应用服务器。持续推动国际开源活动在中国落地，并促进中欧开源创新与创业合作。',
    expert5_alt: '陶建辉',
    expert5_name: '陶建辉',
    expert5_roles: '涛思数据创始人 · CEO<br />TDengine 主要作者',
    expert5_bio:
      '2024 年 CCF 杰出工程师奖获得者，拥有海外移动互联网研发背景。2017 年创办涛思数据，打造 AI 原生工业数据管理平台，推动 TDengine 在全球开源社区的影响力。',
    expert6_alt: '崔宝秋 博士',
    expert6_name: '崔宝秋 博士',
    expert6_roles: '若伴科技创始人、CEO<br />CCF开源发展技术委员会常务委员<br />中关村数智人工智能产业联盟理事长',
    expert6_bio:
      '曾任小米集团副总裁，先后在 IBM、雅虎、LinkedIn 等企业任职，拥有超过三十年的开源实践经验。在小米推动“云计算-大数据-人工智能”技术路线，培养大量开源人才。',
    expert7_alt: '庄表伟',
    expert7_name: '庄表伟',
    expert7_roles: '天工开物开源基金会副秘书长<br />开源社理事',
    expert7_bio:
      '开源布道者与资深软件架构师，曾长期任职华为，负责 DevOps 及开发者生态建设。致力于开源经济学、生态与供应链安全研究，多次获得中国开源优秀人物荣誉。',
    objects_label: '目标对象',
    objects_card1_title: '开源项目创始人 / 核心贡献者',
    objects_card1_roles: '技术判断力 + 社区领导力',
    objects_card1_text:
      '如果你是知名开源项目发起人或核心维护者，我们期待你把项目带入更广阔生态。无论是开发者工具、AI 框架还是基础设施组件，我们提供资源、曝光与商业化支持，助你从“被使用”走向“被信赖”。',
    objects_card2_title: '初创阶段的开源商业化团队',
    objects_card2_roles: '产品定位 + 商业模式',
    objects_card2_text:
      '你已验证技术可行性，也有早期用户，但仍在探索可持续变现？我们提供产品定位、商业模式设计、种子用户对接与融资辅导，帮助团队把“开源获客引擎”转化为增长动力。',
    objects_card3_title: '已有积累、寻求突破的负责人',
    objects_card3_roles: '商业化乏力 + 生态建设',
    objects_card3_text:
      '项目在 GitHub 获得数千星标、社区活跃、技术扎实，但面临商业化乏力、团队扩张难或生态停滞？我们提供深度运营支持、企业客户对接、分层授权方案与品牌升级路径。',
    objects_card4_title: '从代码到商业的转折期',
    objects_card4_roles: '关键阶段 + 关键资源',
    objects_card4_text:
      '处在技术成熟与商业成熟之间的项目，最需要高质量连接与系统化辅导。我们把你与专家、资源方和同类项目连接起来，缩短验证周期。',
    principles_label: '赋能内容',
    principles_title: '全生命周期赋能，直达商业化',
    principle1_title: '战略诊断',
    principle1_text: '专家团围绕技术成熟度、社区活跃度与商业潜力进行深度剖析，输出“诊断报告”。',
    principle2_title: '商业赋能',
    principle2_text: '提供商业模式设计、融资对接、早期投资撮合及法律咨询支持。',
    principle3_title: '资源矩阵',
    principle3_text: '对接各地孵化器与创新创业园资源，协助招募清华、北大等名校优秀实习生。',
    principle4_title: '持续成长',
    principle4_text: '加入校友群，享受长期导师跟进与资源对接。',
    programs_label: '运作机制',
    programs_title: '精细筛选，深度参与',
    program1_title: '季度与深度',
    program1_text: '每季度举办一次线下闭门会议，全年共四期，坚持“少而精、深而实”。',
    program1_item1: '技术路径校准',
    program1_item2: '商业模式打磨',
    program1_item3: '关键资源对接',
    program2_title: '小规模邀请',
    program2_text: '每期严格控制 20–30 人，定向邀请开源项目创始人、核心维护者或早期商业化团队负责人。',
    program2_item1: '高浓度场域',
    program2_item2: '输出导向流程',
    program2_item3: '行动闭环跟进',
    program3_title: '结果驱动',
    program3_text: '拒绝空泛讨论，强调可落地进展与阶段性验证，确保每次聚会有明确产出。',
    program3_item1: '关键决策清单',
    program3_item2: '执行计划',
    program3_item3: '复盘迭代',
    opensource_label: '首站与区域',
    opensource_title: '首站启幕，区域联动',
    os_card1_title: '首站预告',
    os_card1_text: '首期活动将于 2026 年一季度末（或 4 月）启幕，落地 CSDN 办公室，开启“从代码到商业”的深度对话。',
    os_card2_title: '席位机制',
    os_card2_text: '席位有限，仅对通过审核的开源项目开放，确保高价值连接与输出质量。',
    os_card3_title: '区域覆盖',
    os_card3_text: '模式验证后，将在杭州、武汉、北京、上海等地建立区域中心，形成全国协作网络。',
    cta_title: '一起推动开源项目走向商业市场',
    cta_text: '无论身处长三角 AI 集群，还是中部数字新城，都能就近接入高质量开源协作网络，获得持续陪伴与系统支持。',
    join_label: '如何加入',
    join_title: '双向选择，只为寻找有潜力的开源火种',
    join_card1_title: '提交申请',
    join_card1_item1: '通过官网或合作平台提交项目介绍',
    join_card1_item2: '提供技术文档与社区活跃度说明',
    join_card1_item3: '明确核心场景与商业方向',
    join_card2_title: '专家初选',
    join_card2_item1: '专家小组进行初步评估',
    join_card2_item2: '每期选出 5–8 个潜力项目',
    join_card2_item3: '进入私董会闭门环节',
    join_card3_title: '深度参与',
    join_card3_item1: '进入闭门会议与长期辅导',
    join_card3_item2: '获取资源对接与商业化支持',
    join_card3_item3: '加入校友网络持续成长',
    join_cta: '立即加入',
    contact_title: '联系我们',
    contact_text: '如果你愿意一起共建开放的私董会生态，欢迎联系我们。',
    contact_email_label: '邮箱：',
    contact_group_label: '社群：',
    contact_group_text: '微信群（申请后邀请）',
    footer_title: '开源私董会',
    footer_text: '聚焦开源项目商业化关键阶段，提供诊断、赋能与资源对接。',
    footer_follow: '关注我们',
    footer_wechat: '公众号：Open-Board',
    footer_github: 'GitHub：open-board',
    footer_group: '社群：审核后邀请',
    footer_copyright: '© 2026 Open-Board. Build together in public.'
  },
  en: {
    meta_title: 'Open-Board Private Council',
    meta_description:
      'Open-Board is jointly launched by the CCF Open Source Development Committee, the Tiangong Kaiwu Open Source Foundation, CSDN, and Open Source Society. It serves open-source founders and commercialization teams with strategic diagnosis, business enablement, and resource connections, helping projects move from “usable” to “commercial.”',
    lang_label: 'Language',
    lang_zh: '中文',
    lang_en: 'English',
    nav_toggle_label: 'Open navigation menu',
    nav_label: 'Primary navigation',
    logo: 'Open-Board Private Council',
    nav_about: 'About',
    nav_experts: 'Experts',
    nav_objects: 'Who It’s For',
    nav_principles: 'Enablement',
    nav_programs: 'Operating Model',
    nav_opensource: 'Launch & Regions',
    nav_join: 'How to Join',
    nav_contact: 'Contact',
    hero_eyebrow: 'Open-Board Private Council · Official Launch',
    hero_title: 'Accelerate projects from “usable” to “commercial”',
    hero_lead:
      'Open source is becoming a core driver of global tech innovation. In China, many developers and founding teams still face bottlenecks like “code-heavy, operations-light” and “hard to commercialize.” We launched the Open-Board Private Council to build a growth accelerator for open-source projects, gathering top experts to provide strategic guidance and business enablement, helping projects cross the key thresholds from technical maturity to community maturity to commercial maturity.',
    hero_cta: 'Apply to Join',
    hero_card_title: 'Who We’re Looking For',
    hero_card_item1: 'Open-source founders / core contributors',
    hero_card_item2: 'Early-stage open-source commercialization teams',
    hero_card_item3: 'Leads of projects with traction seeking breakthroughs',
    hero_stat1_label: 'sessions / year',
    hero_stat2_label: 'people / session',
    hero_stat3_label: 'projects / session',
    about_label: 'About',
    about_title: 'Accelerating the Growth of Open-Source Projects in China',
    about_text:
      'Open-Board Private Council is co-initiated by the CCF Open Source Development Committee, the Tiangong Kaiwu Open Source Foundation, CSDN, and Open Source Society. We focus on the critical stage where projects move from “usable” to “commercial.” With a “small but elite, deep and practical” approach, we organize closed-door exchanges and provide systematic support across technical paths, community building, and commercialization, helping projects grow sustainably.',
    about_card1_title: 'Real Problems',
    about_card1_text: 'We focus on the key bottlenecks across tech, community, and commercialization and output practical improvement paths.',
    about_card2_title: 'Structured Process',
    about_card2_text: 'Small, invitation-only cohorts with an output-driven process ensure actionable outcomes each session.',
    about_card3_title: 'Sustained Growth',
    about_card3_text: 'Join the alumni network for long-term mentorship and resource connections.',
    experts_label: 'Expert Panel',
    expert1_alt: 'Zhang Wensong, PhD',
    expert1_name: 'Zhang Wensong, PhD',
    expert1_roles: 'CCF Fellow <br />Founder of LVS (Linux Virtual Server) <br />Vice Chair, CCF Open Source Development Committee',
    expert1_bio:
      'Focuses on cloud-native and AI infrastructure incubation and investment. Former Operating Partner at Hillhouse, Senior VP at Didi, and CTO of Alibaba Cloud. Founded the LVS open-source project in 1998 and has long advanced China’s open-source ecosystem with deep experience in large-scale system design and R&D management.',
    expert2_alt: 'Jiang Tao',
    expert2_name: 'Jiang Tao',
    expert2_roles: 'Founder & Chairman, CSDN<br />Vice Chair, China Open Source Alliance<br />Board Member, OpenAtom Foundation',
    expert2_bio:
      'Entrepreneur in software and the internet for over 30 years. Built developer platforms including CSDN, Programmer Magazine, and GitCode, reaching 51 million users. Initiated the GOSIM Global Open Source Innovation Summit and “1024 China Programmer Festival,” and has invested in 90+ tech companies to drive open-source industrialization.',
    expert3_alt: 'Tian Guangli',
    expert3_name: 'Tian Guangli',
    expert3_roles: 'Chair & Secretary-General, Tiangong Kaiwu Open Source Foundation<br />Executive Member, CCF Open Source Development Committee',
    expert3_bio:
      'Researches open-source governance and operations with Chinese characteristics. Formerly with CNOOC, China Information & Communication Technologies Group, and CSSC. Focuses on industrial big data and AI robotics integration, promoting compliant open-source governance in practice.',
    expert4_alt: 'Cheng Yong',
    expert4_name: 'Cheng Yong',
    expert4_roles: 'Executive Member, CCF Open Source Development Committee',
    expert4_bio:
      'Serial entrepreneur and open-source community contributor. Co-founded the open-source middleware community huihoo.org and led the JFox application server. Continues to promote international open-source events in China and collaboration between China and Europe.',
    expert5_alt: 'Tao Jianhui',
    expert5_name: 'Tao Jianhui',
    expert5_roles: 'Founder & CEO, TDengine (Taos Data)<br />Lead Author of TDengine',
    expert5_bio:
      'Winner of the 2024 CCF Outstanding Engineer Award with overseas mobile internet R&D experience. Founded Taos Data in 2017 to build an AI-native industrial data platform, expanding TDengine’s global open-source impact.',
    expert6_alt: 'Cui Baoqiu, PhD',
    expert6_name: 'Cui Baoqiu, PhD',
    expert6_roles: 'Founder & CEO, Ruoban Tech<br />Standing Member, CCF Open Source Development Committee<br />Chair, ZGC Digital Intelligence & AI Industry Alliance',
    expert6_bio:
      'Former Vice President at Xiaomi; previously worked at IBM, Yahoo, and LinkedIn. Brings 30+ years of open-source practice, and at Xiaomi drove the “cloud computing–big data–AI” tech roadmap, nurturing large numbers of open-source talents.',
    expert7_alt: 'Zhuang Biaowei',
    expert7_name: 'Zhuang Biaowei',
    expert7_roles: 'Deputy Secretary-General, Tiangong Kaiwu Open Source Foundation<br />Board Member, Open Source Society',
    expert7_bio:
      'Open-source advocate and senior software architect. Long-time Huawei leader responsible for DevOps and developer ecosystem building. Focused on open-source economics, ecosystems, and supply-chain security, and has received multiple national honors.',
    objects_label: 'Who This Is For',
    objects_card1_title: 'Open-source founders / core contributors',
    objects_card1_roles: 'Technical judgment + community leadership',
    objects_card1_text:
      'If you are a well-known project initiator or core maintainer, we hope to help you bring the project into a broader ecosystem. Whether developer tools, AI frameworks, or infrastructure components, we provide resources, exposure, and commercialization support to move you from “used” to “trusted.”',
    objects_card2_title: 'Early-stage open-source commercialization teams',
    objects_card2_roles: 'Product positioning + business model',
    objects_card2_text:
      'You’ve proven technical feasibility and gained early users, but are still exploring sustainable monetization. We help with product positioning, business model design, seed-user matching, and fundraising guidance to turn an “open-source acquisition engine” into growth momentum.',
    objects_card3_title: 'Projects with traction seeking a breakthrough',
    objects_card3_roles: 'Commercialization bottlenecks + ecosystem building',
    objects_card3_text:
      'Your project has thousands of GitHub stars, an active community, and solid technology, yet faces weak commercialization, hard team scaling, or stalled ecosystems. We provide deep operations support, enterprise customer matching, tiered licensing, and brand upgrade paths.',
    objects_card4_title: 'The inflection from code to business',
    objects_card4_roles: 'Critical stage + key resources',
    objects_card4_text:
      'Projects between technical maturity and business maturity need high-quality connections and systematic coaching. We connect you with experts, resource partners, and peer projects to shorten validation cycles.',
    principles_label: 'Enablement',
    principles_title: 'Full-lifecycle enablement, straight to commercialization',
    principle1_title: 'Strategic Diagnosis',
    principle1_text: 'Experts analyze technical maturity, community activity, and commercial potential to deliver a “diagnosis report.”',
    principle2_title: 'Business Enablement',
    principle2_text: 'Business model design, financing connections, early-stage investment matching, and legal support.',
    principle3_title: 'Resource Matrix',
    principle3_text: 'Connects to incubators and innovation hubs nationwide, and helps recruit top interns from leading universities.',
    principle4_title: 'Sustained Growth',
    principle4_text: 'Join the alumni group for long-term mentoring and resource connections.',
    programs_label: 'Operating Model',
    programs_title: 'Careful selection, deep participation',
    program1_title: 'Quarterly Deep Dives',
    program1_text: 'One closed-door offline meeting each quarter, four cohorts per year, adhering to “small, elite, deep, practical.”',
    program1_item1: 'Technical roadmap calibration',
    program1_item2: 'Business model refinement',
    program1_item3: 'Key resource connections',
    program2_title: 'Small-Scale Invitations',
    program2_text: 'Each cohort is capped at 20–30, inviting founders, core maintainers, or early-stage commercialization leads.',
    program2_item1: 'High-density setting',
    program2_item2: 'Output-driven process',
    program2_item3: 'Closed-loop follow-up',
    program3_title: 'Outcome Driven',
    program3_text: 'No empty talk — we emphasize tangible progress and staged validation to ensure clear outputs every session.',
    program3_item1: 'Key decision checklist',
    program3_item2: 'Execution plan',
    program3_item3: 'Review & iteration',
    opensource_label: 'Launch & Regions',
    opensource_title: 'Launch first, expand by region',
    os_card1_title: 'Launch Preview',
    os_card1_text:
      'The first session will open at the end of Q1 2026 (around April) at the CSDN office, launching deep dialogues on “from code to business.”',
    os_card2_title: 'Seat Mechanism',
    os_card2_text: 'Seats are limited and open only to vetted open-source projects, ensuring high-value connections and outputs.',
    os_card3_title: 'Regional Coverage',
    os_card3_text: 'After validation, regional centers will be established in Hangzhou, Wuhan, Beijing, Shanghai, and more.',
    cta_title: 'Let’s move open-source projects to the commercial market',
    cta_text:
      'Whether in the Yangtze River Delta AI cluster or a central digital hub, you can connect locally to a high-quality open-source collaboration network and gain sustained companionship and systematic support.',
    join_label: 'How to Join',
    join_title: 'Two-way selection, for the most promising open-source sparks',
    join_card1_title: 'Submit Application',
    join_card1_item1: 'Submit a project introduction via the website or partner platforms',
    join_card1_item2: 'Provide technical documentation and community activity notes',
    join_card1_item3: 'Clarify core scenarios and commercial direction',
    join_card2_title: 'Expert Screening',
    join_card2_item1: 'Experts conduct an initial evaluation',
    join_card2_item2: 'Select 5–8 promising projects per cohort',
    join_card2_item3: 'Enter the closed-door roundtable',
    join_card3_title: 'Deep Participation',
    join_card3_item1: 'Join closed-door meetings and long-term coaching',
    join_card3_item2: 'Access resource connections and commercialization support',
    join_card3_item3: 'Join the alumni network for continued growth',
    join_cta: 'Join Now',
    contact_title: 'Contact Us',
    contact_text: 'If you’d like to co-build an open private council ecosystem, reach out.',
    contact_email_label: 'Email:',
    contact_group_label: 'Community:',
    contact_group_text: 'WeChat group (invitation after application)',
    footer_title: 'Open-Board Private Council',
    footer_text: 'Focused on the commercialization stage of open-source projects, providing diagnosis, enablement, and resource connections.',
    footer_follow: 'Follow Us',
    footer_wechat: 'WeChat Official Account: Open-Board',
    footer_github: 'GitHub: open-board',
    footer_group: 'Community: invitation after review',
    footer_copyright: '© 2026 Open-Board. Build together in public.'
  }
};

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.zh;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  if (dictionary.meta_title) {
    document.title = dictionary.meta_title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dictionary.meta_description) {
    metaDescription.setAttribute('content', dictionary.meta_description);
  }

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dictionary[key];
    if (value) {
      node.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const key = node.getAttribute('data-i18n-html');
    const value = dictionary[key];
    if (value) {
      node.innerHTML = value;
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    const key = node.getAttribute('data-i18n-alt');
    const value = dictionary[key];
    if (value) {
      node.setAttribute('alt', value);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const key = node.getAttribute('data-i18n-aria');
    const value = dictionary[key];
    if (value) {
      node.setAttribute('aria-label', value);
    }
  });
};

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

if (langSwitch) {
  const storedLang = localStorage.getItem('site_lang');
  const initialLang = storedLang === 'en' ? 'en' : 'zh';
  langSwitch.value = initialLang;
  applyLanguage(initialLang);

  langSwitch.addEventListener('change', (event) => {
    const nextLang = event.target.value === 'en' ? 'en' : 'zh';
    localStorage.setItem('site_lang', nextLang);
    applyLanguage(nextLang);
  });
} else {
  applyLanguage('zh');
}
