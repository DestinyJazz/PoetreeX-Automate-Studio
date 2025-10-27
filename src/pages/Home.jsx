import React from 'react'
import { useLang } from '../i18n'

export default function Home(){
  const { t } = useLang()
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">{t('siteTitle')}</h1>
          <p className="mb-6 text-lg text-gray-700">{t('tagline')}</p>
          <a href="/services" className="inline-block px-6 py-3 bg-teal-600 text-white rounded">{t('servicesTitle')}</a>
        </div>
        <div>
          <div className="w-full h-56 bg-gray-100 rounded flex items-center justify-center text-gray-400">Hero / Illustration</div>
        </div>
      </div>
    </section>
  )
}