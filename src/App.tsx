import React from 'react';
import { useLiveAPI } from './hooks/useLiveAPI';
import { Phone, PhoneOff, Activity, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const { isConnected, isConnecting, error, connect, disconnect } = useLiveAPI();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-slate-900">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-teal-600 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,100 C30,50 70,50 100,100 L100,0 L0,0 Z" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2 relative z-10">عيادة الابتسامة المشرقة</h1>
          <p className="text-teal-100 text-sm relative z-10">المساعدة الصوتية الذكية - نورة</p>
        </div>

        <div className="p-8 flex flex-col items-center">
          
          <div className="relative mb-8 mt-4">
            {isConnected && (
              <motion.div 
                className="absolute inset-0 bg-teal-100 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            
            <button
              onClick={isConnected ? disconnect : connect}
              disabled={isConnecting}
              className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                isConnected 
                  ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/30' 
                  : 'bg-teal-500 hover:bg-teal-600 shadow-teal-500/30'
              } ${isConnecting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isConnecting ? (
                <Activity className="w-10 h-10 animate-pulse" />
              ) : isConnected ? (
                <PhoneOff className="w-10 h-10" />
              ) : (
                <Phone className="w-10 h-10" />
              )}
            </button>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-1">
              {isConnecting ? 'جاري الاتصال...' : isConnected ? 'المكالمة جارية' : 'اضغط للاتصال بنورة'}
            </h2>
            <p className="text-sm text-slate-500">
              {isConnected ? 'تحدث الآن، نورة تستمع إليك' : 'مساعدة طبية لحجز المواعيد والاستفسارات'}
            </p>
          </div>

          {error && (
            <div className="w-full bg-rose-50 text-rose-600 p-4 rounded-xl flex items-start gap-3 text-sm mb-4">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="mt-8 w-full border-t border-slate-100 pt-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center">
              نموذج توضيحي
            </h3>
            <ul className="text-sm text-slate-600 space-y-2 text-right" dir="rtl">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                <span>يمكنك الاستفسار عن الباقات والأسعار.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                <span>جرب الاتصال وتعامل مع نورة كأنك مريض يبي يحجز موعد.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="max-w-md w-full mt-8 text-center text-slate-600 text-sm" dir="rtl">
        <p className="mb-1 font-medium text-slate-800">
          تم بناء هذا المساعد الصوتي بواسطة منير علي
        </p>
        <p className="mb-2">
          متخصص في بناء AI Voice Agents لعيادات الأسنان والقطاع العقاري
        </p>
        <p className="mb-5 text-xs text-slate-500 leading-relaxed">
          لكل عيادة يتم بناء مساعد مخصص بالكامل حسب خدماتها وأسعارها وجدول أطبائها وغيرها من التفاصيل
        </p>
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=967771491931&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 transition-colors font-medium bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full"
          >
            <span>💬</span> واتساب
          </a>
          <a 
            href="https://www.linkedin.com/in/muneer-ali-347690269/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors font-medium bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full"
          >
            <span>🔗</span> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
