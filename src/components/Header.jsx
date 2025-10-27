import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export default function Header(){
  const { lang, setLang, t } = useLang()
  const switchLang = () => setLang(lang === 'en' ? 'zh' : 'en')

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="font-bold text-lg text-teal-700">PoetreeX Automate Studio</Link>
          <div className="text-xs text-gray-500">{t('tagline')}</div>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">{lang === 'en' ? 'Services' : '服务'}</Link>
          <Link to="/about" className="hover:underline">{lang === 'en' ? 'About' : '关于'}</Link>
          <Link to="/contact" className="hover:underline">{lang === 'en' ? 'Contact' : '联系'}</Link>
          <button onClick={switchLang} className="ml-2 px-3 py-1 border rounded">{lang === 'en' ? '中文' : 'EN'}</button>
        </nav>
      </div>
    </header>
  )
}