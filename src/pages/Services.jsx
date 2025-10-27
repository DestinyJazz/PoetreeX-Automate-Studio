import React from 'react'
import { useLang } from '../i18n'

export default function Services(){
  const { t, lang } = useLang()
  const services = t('services')
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">{t('servicesTitle')}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div key={i} className="p-4 bg-white rounded shadow-sm">
            <h3 className="font-semibold">{s}</h3>
            <p className="text-sm text-gray-600 mt-2">{lang === 'en' ? 'Customizable for your business' : '可根据您的业务定制'}</p>
          </div>
        ))}
      </div>
    </section>
  )
}