import React from 'react'
import { useLang } from '../i18n'

export default function Contact(){
  const { t } = useLang()
  const whatsappNumber = '60123456789'
  const waLink = `https://wa.me/${whatsappNumber}`

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">{t('contactTitle')}</h2>
      <div className="bg-white p-6 rounded shadow-sm">
        <p className="mb-4">{t('contactText')}</p>
        <div className="flex gap-3">
          <a href={`mailto:gerrardhong8@gmail.com`} className="px-4 py-2 border rounded">Email</a>
          <a href={https://wa.me/60169326460} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-600 text-white rounded">{t('whatsapp')}</a>
        </div>
      </div>
    </section>
  )
}
