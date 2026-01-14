import { useLanguage } from '@/contexts/LanguageContext';

export function TermsOfService() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 2025',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          heading: '2. Use License',
          content: 'Permission is granted to temporarily download one copy of the materials (information or software) on IQHouse\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or "mirror" the materials on any other server'
        },
        {
          heading: '3. Disclaimer',
          content: 'The materials on IQHouse\'s website are provided on an \'as is\' basis. IQHouse makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
          heading: '4. Limitations',
          content: 'In no event shall IQHouse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IQHouse\'s website, even if IQHouse or an authorized representative has been notified orally or in writing of the possibility of such damage.'
        },
        {
          heading: '5. Accuracy of Materials',
          content: 'The materials appearing on IQHouse\'s website could include technical, typographical, or photographic errors. IQHouse does not warrant that any of the materials on its website are accurate, complete, or current. IQHouse may make changes to the materials contained on its website at any time without notice.'
        },
        {
          heading: '6. Links',
          content: 'IQHouse has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by IQHouse of the site. Use of any such linked website is at the user\'s own risk.'
        },
        {
          heading: '7. Modifications',
          content: 'IQHouse may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
        },
        {
          heading: '8. Governing Law',
          content: 'These terms and conditions are governed by and construed in accordance with the laws of China, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
        },
        {
          heading: '9. Contact Information',
          content: 'If you have any questions about these Terms of Service, please contact us at:\n\nLEARNING AGE INTERNATIONAL CO., LTD.\nRoom 304, Building B1, Phase II, Auto Parts City\nXinqiao Street, Baoan District\nShenzhen City\n\nWhatsApp: +44 7925 192549'
        }
      ]
    },
    zh: {
      title: '服务条例',
      lastUpdated: '最后更新：2025年1月',
      sections: [
        {
          heading: '1. 条款接受',
          content: '通过访问和使用本网站，您接受并同意受本协议的条款和条款的约束。如果您不同意上述条款，请不要使用本服务。'
        },
        {
          heading: '2. 使用许可',
          content: '允许您临时下载IQHouse网站上的材料（信息或软件）的一份副本，仅供个人、非商业性的临时查看之用。这是许可证的授予，而不是所有权的转让，在此许可证下，您不得：\n\n• 修改或复制材料\n• 将材料用于任何商业目的或任何公开展示\n• 尝试反编译或逆向工程网站上包含的任何软件\n• 从材料中删除任何版权或其他专有标记\n• 将材料转移给他人或在任何其他服务器上"镜像"材料'
        },
        {
          heading: '3. 免责声明',
          content: 'IQHouse网站上的材料按"原样"提供。IQHouse不提供任何明示或暗示的保证，并在此否认和否定所有其他保证，包括但不限于对适销性、特定用途的适用性或不侵犯知识产权或其他权利侵犯的暗示保证或条件。'
        },
        {
          heading: '4. 限制',
          content: '在任何情况下，IQHouse或其供应商均不对因使用或无法使用IQHouse网站上的材料而引起的任何损害（包括但不限于数据或利润损失的损害，或由于业务中断而引起的损害）负责，即使IQHouse或授权代表已口头或书面通知了此类损害的可能性。'
        },
        {
          heading: '5. 材料的准确性',
          content: 'IQHouse网站上出现的材料可能包含技术、排版或摄影错误。IQHouse不保证其网站上的任何材料都是准确、完整或最新的。IQHouse可能随时更改其网站上包含的材料，恕不另行通知。'
        },
        {
          heading: '6. 链接',
          content: 'IQHouse尚未审查链接到其网站的所有网站，对任何此类链接网站的内容不负责。包含任何链接并不意味着IQHouse对该网站的认可。使用任何此类链接网站的风险由用户自己承担。'
        },
        {
          heading: '7. 修改',
          content: 'IQHouse可能随时修改其网站的这些服务条款，恕不另行通知。通过使用本网站，您同意受当时现行版本的这些服务条款的约束。'
        },
        {
          heading: '8. 管辖法律',
          content: '这些条款和条件受中国法律的管辖和解释，您不可撤销地服从该地点法院的专属管辖权。'
        },
        {
          heading: '9. 联系信息',
          content: '如果您对这些服务条款有任何疑问，请通过以下方式与我们联系：\n\nLEARNING AGE INTERNATIONAL CO., LTD.\n深圳市宝安区新桥街道汽车配件城二期B1栋304室\n\nWhatsApp: +44 7925 192549'
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
