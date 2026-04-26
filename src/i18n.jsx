import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    siteTitle: 'PoetreeX Automate Studio',
    tagline: 'Smart Workflow Automation for Malaysian SMEs',
    servicesTitle: 'Our Services',
    services: [
      'Invoice / Receipt OCR + Auto-entry',
      'CRM / Email Automation',
      'Automated chat reminders, receipts & store location',
      'AI FAQ Chatbot',
      'Custom AI Workflows (n8n / Make)',
      'Automation Training & Deployment Support'
    ],
    worksTitle: 'Our Works',
    worksDesc: 'A collection of tools and products we have built.',
    worksVisit: 'Visit',
    works: [
      {
        title: 'Poetask',
        desc: 'AI-powered WhatsApp assistant that converts casual messages into Google Calendar events automatically.',
        url: 'https://poetask.poetreex.com',
      },
      {
        title: 'Berapa Nak Bagi',
        desc: 'Malaysia-specific calculator for culturally appropriate gift money and ang pow amounts across different states.',
        url: 'https://bagi.poetreex.com',
      },
    ],
    aboutTitle: 'About Me',
    contactTitle: 'Contact',
    contactText: 'Email me at admin@poetreex.com or start a WhatsApp chat.',
    whatsapp: 'Chat on WhatsApp'
  },
  zh: {
    siteTitle: 'PoetreeX 自动化工作室',
    tagline: '面向马来西亚中小企业的智能自动化服务',
    servicesTitle: '我们的服务',
    services: [
      '发票 / 票据 OCR 并自动录入系统',
      'CRM / 邮件自动化',
      '自动化聊天提醒、发送收据与店铺定位',
      'AI 问答机器人 (FAQ)',
      '定制 AI 工作流程 (n8n / Make)',
      '自动化培训与部署支持'
    ],
    worksTitle: '作品',
    worksDesc: '我们构建的工具与产品合集。',
    worksVisit: '访问',
    works: [
      {
        title: 'Poetask',
        desc: 'AI 驱动的 WhatsApp 助手，自动将消息转换为 Google 日历事件。',
        url: 'https://poetask.poetreex.com',
      },
      {
        title: '给多少好',
        desc: '马来西亚各州婚礼红包金额文化参考计算器。',
        url: 'https://bagi.poetreex.com',
      },
    ],
    aboutTitle: '关于我',
    contactTitle: '联系',
    contactText: '通过电子邮件或 WhatsApp 联系我（请在此处替换为你的邮箱）。',
    whatsapp: '通过 WhatsApp 聊天'
  }
}

const LangContext = createContext()

export function LangProvider({ children }){
  const [lang, setLang] = useState('en')
  const t = (key) => translations[lang][key]
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}
export function useLang(){ return useContext(LangContext) }