import { useLanguage } from '@/contexts/LanguageContext';

export function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 2025',
      sections: [
        {
          heading: '1. Introduction',
          content: 'IQHouse ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.'
        },
        {
          heading: '2. Information We Collect',
          content: 'We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal Data: Name, email address, phone number, company name, country, and any other information you voluntarily provide through contact forms or inquiries.\n• Device Information: Browser type, IP address, operating system, and pages visited.\n• Cookies and Tracking Technologies: We use cookies to enhance your experience and analyze site usage.'
        },
        {
          heading: '3. Use of Your Information',
          content: 'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:\n\n• Generate a personal profile about you so that future visits to the site will be personalized as possible\n• Increase the efficiency and operation of the site\n• Monitor and analyze trends, usage, and activities for marketing and analytical purposes\n• Notify you of updates to the site\n• Respond to your inquiries and fulfill your requests'
        },
        {
          heading: '4. Disclosure of Your Information',
          content: 'We may share your information in the following situations:\n\n• By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law, enforce our site policies, or protect ours or others\' rights, property, and safety.\n• Third-Party Service Providers: We may share your information with third parties that perform services for us, including payment processing, data analysis, email delivery, hosting services, and customer service.\n• Business Transfers: If IQHouse is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.'
        },
        {
          heading: '5. Security of Your Information',
          content: 'We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.'
        },
        {
          heading: '6. Contact Forms and Communications',
          content: 'When you submit information through our contact forms, we collect your name, email, phone number, company, country, and message. This information is used to respond to your inquiry and may be stored for business purposes. We will not sell or share this information with third parties without your consent, except as required by law.'
        },
        {
          heading: '7. Cookies and Tracking',
          content: 'We use cookies and similar tracking technologies to track activity on our site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.'
        },
        {
          heading: '8. GDPR Compliance',
          content: 'For users in the European Union, we comply with the General Data Protection Regulation (GDPR). You have the right to:\n\n• Access your personal data\n• Correct inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Request restriction of processing\n• Data portability\n\nTo exercise these rights, please contact us using the information provided below.'
        },
        {
          heading: '9. Children\'s Privacy',
          content: 'Our site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information and terminate the child\'s account.'
        },
        {
          heading: '10. Changes to This Privacy Policy',
          content: 'We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy.'
        },
        {
          heading: '11. Contact Us',
          content: 'If you have questions or comments about this Privacy Policy, please contact us at:\n\nLEARNING AGE INTERNATIONAL CO., LTD.\nRoom 304, Building B1, Phase II, Auto Parts City\nXinqiao Street, Baoan District\nShenzhen City\n\nWhatsApp: +44 7925 192549\n\nFor GDPR-related inquiries, please include "GDPR Request" in your message.'
        }
      ]
    },
    zh: {
      title: '隐私条例',
      lastUpdated: '最后更新：2025年1月',
      sections: [
        {
          heading: '1. 介绍',
          content: 'IQHouse（"我们"、"本公司"）致力于保护您的隐私。本隐私政策说明了当您访问我们的网站时，我们如何收集、使用、披露和保护您的信息。'
        },
        {
          heading: '2. 我们收集的信息',
          content: '我们可能以多种方式收集有关您的信息。我们可能在网站上收集的信息包括：\n\n• 个人数据：姓名、电子邮件地址、电话号码、公司名称、国家以及您通过联系表格或查询自愿提供的任何其他信息。\n• 设备信息：浏览器类型、IP地址、操作系统和访问的页面。\n• Cookie和跟踪技术：我们使用Cookie来增强您的体验并分析网站使用情况。'
        },
        {
          heading: '3. 您信息的使用',
          content: '拥有关于您的准确信息使我们能够为您提供流畅、高效和定制的体验。具体来说，我们可能会使用通过网站收集的有关您的信息来：\n\n• 为您生成个人资料，以便将来对网站的访问尽可能地个性化\n• 提高网站的效率和运营\n• 监控和分析用于营销和分析目的的趋势、使用情况和活动\n• 通知您网站的更新\n• 回应您的询问并完成您的请求'
        },
        {
          heading: '4. 您信息的披露',
          content: '我们可能在以下情况下共享您的信息：\n\n• 法律要求或保护权利：如果我们认为信息的发布是遵守法律、执行我们的网站政策或保护我们或他人的权利、财产和安全所必需的。\n• 第三方服务提供商：我们可能与为我们执行服务的第三方共享您的信息，包括支付处理、数据分析、电子邮件传递、托管服务和客户服务。\n• 业务转移：如果IQHouse涉及合并、收购或资产出售，您的信息可能作为该交易的一部分被转移。'
        },
        {
          heading: '5. 您信息的安全',
          content: '我们使用行政、技术和物理安全措施来保护您的个人信息。但是，互联网上的任何传输方法或电子存储方法都不是100%安全的。虽然我们努力使用商业上可接受的方式来保护您的个人信息，但我们无法保证其绝对安全。'
        },
        {
          heading: '6. 联系表格和通信',
          content: '当您通过我们的联系表格提交信息时，我们会收集您的姓名、电子邮件、电话号码、公司、国家和消息。此信息用于回应您的询问，并可能出于业务目的而存储。未经您同意，我们不会向第三方出售或共享此信息，除非法律要求。'
        },
        {
          heading: '7. Cookie和跟踪',
          content: '我们使用Cookie和类似的跟踪技术来跟踪我们网站上的活动并保存某些信息。您可以指示您的浏览器拒绝所有Cookie或指示何时发送Cookie。但是，如果您不接受Cookie，您可能无法使用我们网站的某些部分。'
        },
        {
          heading: '8. GDPR合规',
          content: '对于欧盟的用户，我们遵守通用数据保护条例（GDPR）。您有权：\n\n• 访问您的个人数据\n• 更正不准确的数据\n• 请求删除您的数据\n• 反对处理您的数据\n• 请求限制处理\n• 数据可携带性\n\n要行使这些权利，请使用下面提供的信息与我们联系。'
        },
        {
          heading: '9. 儿童隐私',
          content: '我们的网站不针对13岁以下的儿童。我们不会故意从13岁以下的儿童收集个人信息。如果我们发现13岁以下的儿童向我们提供了个人信息，我们将采取措施删除此类信息并终止该儿童的账户。'
        },
        {
          heading: '10. 本隐私政策的更改',
          content: '我们可能会不时更新本隐私政策，以反映例如我们实践的变化或其他操作、法律或监管原因。我们将通过更新本隐私政策的"最后更新"日期来通知您任何更改。'
        },
        {
          heading: '11. 联系我们',
          content: '如果您对本隐私政策有任何疑问或意见，请通过以下方式与我们联系：\n\nLEARNING AGE INTERNATIONAL CO., LTD.\n深圳市宝安区新桥街道汽车配件城二期B1栋304室\n\nWhatsApp: +44 7925 192549\n\n对于GDPR相关的询问，请在您的消息中包含"GDPR请求"。'
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t.title}</h1>
          <p className="text-neutral-400">{t.lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="prose prose-neutral max-w-none">
          {t.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
