import React from 'react'
import { useLang } from '../i18n'

export default function Works() {
  const { lang, t } = useLang()
  const works = lang === 'zh'
    ? [
        { title: 'Poetask', desc: 'AI 驱动的 WhatsApp 助手，自动将消息转换为 Google 日历事件。', url: 'https://poetask.poetreex.com' },
        { title: '给多少好', desc: '马来西亚各州婚礼红包金额文化参考计算器。', url: 'https://bagi.poetreex.com' },
      ]
    : [
        { title: 'Poetask', desc: 'AI-powered WhatsApp assistant that converts casual messages into Google Calendar events automatically.', url: 'https://poetask.poetreex.com' },
        { title: 'Berapa Nak Bagi', desc: 'Malaysia-specific calculator for culturally appropriate gift money and ang pow amounts across different states.', url: 'https://bagi.poetreex.com' },
      ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-2">{t('worksTitle')}</h1>
      <p className="text-gray-600 mb-8">{t('worksDesc')}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {works.map((w) => (
          <div key={w.title} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">{w.title}</h2>
            <p className="text-gray-700 mb-4">{w.desc}</p>
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              {t('worksVisit')} →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
