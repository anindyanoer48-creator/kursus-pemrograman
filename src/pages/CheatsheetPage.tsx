import React, { useState, useMemo } from 'react';
import type { CourseId, CourseInfo } from '../data/courses';
import { getCheatsheetForCourse } from '../data/curriculum';
import { MathBlock } from '../components/Math';
import { BookOpen, Search, Copy, Check } from 'lucide-react';

interface CheatsheetPageProps {
  activeCourseId?: CourseId;
  courseInfo?: CourseInfo;
}

export const CheatsheetPage: React.FC<CheatsheetPageProps> = ({
  activeCourseId = 'kompleksitas',
  courseInfo
}) => {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const cheatsheetItems = useMemo(
    () => getCheatsheetForCourse(activeCourseId),
    [activeCourseId]
  );

  const categories = useMemo(() => {
    const cats = Array.from(new Set(cheatsheetItems.map((item) => item.category)));
    return ['Semua', ...cats];
  }, [cheatsheetItems]);

  const filteredItems = useMemo(() => {
    return cheatsheetItems.filter((item) => {
      const matchCat =
        selectedCategory === 'Semua' || item.category === selectedCategory;
      const matchSearch =
        search === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.notes.toLowerCase().includes(search.toLowerCase()) ||
        item.formula.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [cheatsheetItems, selectedCategory, search]);

  const copyToClipboard = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => {
      setCopiedFormula(null);
    }, 2000);
  };

  const isDasarPemrograman = activeCourseId === 'dasar_pemrograman';
  const pageTitle = courseInfo
    ? `Buku Rumus & Cheatsheet ${courseInfo.shortTitle}`
    : isDasarPemrograman
    ? 'Cheatsheet Dasar Pemrograman'
    : 'Buku Rumus Kompleksitas Algoritma';
  const pageTagline = courseInfo
    ? `Referensi • ${courseInfo.badge}`
    : isDasarPemrograman
    ? 'Referensi Sintaks, Tipe Data & Algoritma Elementer'
    : 'Referensi Rumus Matematika';
  const pageDesc = courseInfo
    ? `Ringkasan referensi cepat, representasi memori, rumus, tabel, dan konsep kunci untuk kursus ${courseInfo.title}.`
    : isDasarPemrograman
    ? 'Ringkasan representasi memori tipe data, pemetaan memori array 1D/2D, logika De Morgan, komparasi floating point aman, dan ringkasan algoritma pencarian & pengurutan.'
    : 'Ringkasan lengkap definisi asimptotik, aljabar notasi sigma, sifat logaritma, aturan Master Theorem, dan tabel kompleksitas standar.';

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 rounded-full text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" /> {pageTagline}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {pageTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {pageDesc}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari rumus atau kata kunci..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-2 rounded-xl whitespace-nowrap font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Formulas */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          Tidak ada rumus yang cocok dengan kata kunci pencarian Anda.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    {item.category}
                  </span>

                  <button
                    onClick={() => copyToClipboard(item.formula)}
                    title="Salin kode LaTeX"
                    className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {copiedFormula === item.formula ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {item.name}
                </h3>

                <div className="my-2">
                  <MathBlock math={item.formula} className="my-1 py-3 text-xs sm:text-sm" />
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 leading-relaxed">
                {item.notes}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
