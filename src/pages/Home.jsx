import React from 'react'
import Lottie from 'lottie-react'
import { useLang } from '../i18n'
import chatbotAnimation from '../assets/chatbot.json'

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
        <div className="flex justify-center">
          <Lottie animationData={chatbotAnimation} loop={true} style={{ width: 320, height: 320 }} />
        </div>
      </div>
    </section>
  )
}
