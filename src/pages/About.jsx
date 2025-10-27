import React from 'react'
import { useLang } from '../i18n'

export default function About(){
  const { t, lang } = useLang()
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">{t('aboutTitle')}</h2>
      <div className="bg-white p-6 rounded shadow-sm">
        <p className="mb-2">{lang === 'en' ? "Hi, I'm Lai. I build automation solutions for SMEs in Malaysia." : '你好，我是Lai。我为马来西亚的中小企业构建自动化解决方案。'}</p>
        <p className="text-sm text-gray-600">{lang === 'en' ? 'Combine Automation tools and AI to automate routine tasks.' : '通过自动化工具与 AI，自动化日常工作。'}</p>
      </div>
    </section>
  )
}
