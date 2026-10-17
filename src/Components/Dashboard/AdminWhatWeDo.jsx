import React from 'react'
import { motion } from "framer-motion";

function WhatWeDoPage() {
  return (
    <div>
      <PageHeading
        title="What we do ?"
        copy="Six community missions driven by Gram Panchayat Mashpur — built with villagers, for villagers."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {initiatives.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
            className="group overflow-hidden rounded-xl border border-emerald-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 shadow-sm">
                {item.tag}
              </span>
              <span className="font-brand absolute bottom-2 right-3 text-4xl font-extrabold text-white/80">
                {item.index}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-brand text-lg font-extrabold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs font-bold text-emerald-700">{item.detail}</span>
                <span className="h-2 w-2 rounded-full bg-amber-400" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default AdminWhatWeDo