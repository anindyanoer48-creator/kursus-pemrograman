import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/curriculum';
import { MathBlock } from './Math';
import { CheckCircle2, Eye, Code2, Award } from 'lucide-react';

export const StepByStepSolver: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'iteratif' | 'rekursif'>('all');
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({
    [CASE_STUDIES[0].id]: 1
  });

  const filteredCases = CASE_STUDIES.filter(
    (c) => filter === 'all' || c.type === filter
  );

  const activeCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];
  const currentRevealed = revealedSteps[activeCase.id] || 1;

  const revealNext = () => {
    if (currentRevealed < activeCase.steps.length) {
      setRevealedSteps((prev) => ({
        ...prev,
        [activeCase.id]: currentRevealed + 1
      }));
    }
  };

  const revealAll = () => {
    setRevealedSteps((prev) => ({
      ...prev,
      [activeCase.id]: activeCase.steps.length
    }));
  };

  const resetSteps = () => {
    setRevealedSteps((prev) => ({
      ...prev,
      [activeCase.id]: 1
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-full font-mono font-medium text-xs mb-2">
            <Award className="w-3.5 h-3.5" /> STUDI KASUS & BUKTI TERPANDU
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Penyelesaian Kasus Langkah demi Langkah
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pilih studi kasus iteratif atau rekursif, coba pikirkan langkah selanjutnya, lalu buka kunci jawaban tahap demi tahap.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter('iteratif')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'iteratif'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Iteratif
          </button>
          <button
            onClick={() => setFilter('rekursif')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filter === 'rekursif'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Rekursif
          </button>
        </div>
      </div>

      {/* Case Studies Horizontal Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filteredCases.map((cs) => {
          const isActive = activeCaseId === cs.id;
          return (
            <button
              key={cs.id}
              onClick={() => {
                setActiveCaseId(cs.id);
                if (!revealedSteps[cs.id]) {
                  setRevealedSteps((prev) => ({ ...prev, [cs.id]: 1 }));
                }
              }}
              className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-semibold'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <span>{cs.title}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isActive
                    ? 'bg-indigo-700 text-indigo-100'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cs.type}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Case Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Problem & Code */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
            <h4 className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase mb-1.5">
              Deskripsi Masalah
            </h4>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              {activeCase.problemDesc}
            </p>
          </div>

          <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-5 border border-slate-800 text-white shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-800 pb-2">
              <Code2 className="w-4 h-4 text-emerald-400" /> SOURCE_CODE ALGORITMA
            </div>
            <pre className="font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto p-3 bg-slate-950/80 rounded-lg border border-slate-800/80">
              {activeCase.code}
            </pre>
          </div>

          <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-center text-slate-900 dark:text-white">
            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-300 font-semibold block mb-1">
              Target Kelas Kompleksitas:
            </span>
            <span className="text-2xl font-bold font-mono text-indigo-900 dark:text-indigo-200">
              {activeCase.finalComplexity}
            </span>
          </div>
        </div>

        {/* Right Column: Progressive Steps */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Status Langkah: {currentRevealed} dari {activeCase.steps.length} terbuka
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={resetSteps}
                className="text-xs font-medium text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-sm"
              >
                Reset
              </button>
              <button
                onClick={revealAll}
                className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Buka Semua
              </button>
            </div>
          </div>

          {activeCase.steps.map((step, idx) => {
            const isRevealed = idx < currentRevealed;
            return (
              <div
                key={step.stepNumber}
                className={`rounded-xl border transition-all duration-200 ${
                  isRevealed
                    ? 'p-5 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                    : 'p-3.5 bg-slate-50/50 dark:bg-slate-800/20 border-dashed border-slate-200 dark:border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold ${
                        isRevealed
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <h5
                      className={`text-xs sm:text-sm font-semibold ${
                        isRevealed
                          ? 'text-slate-900 dark:text-white'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {step.title}
                    </h5>
                  </div>

                  {isRevealed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <span className="text-[10px] font-mono text-slate-400">Terkunci</span>
                  )}
                </div>

                {isRevealed && (
                  <div className="mt-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-9">
                    <p>{step.description}</p>
                    {step.mathFormula && (
                      <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-xl">
                        <MathBlock math={step.mathFormula} className="border-0 shadow-none bg-transparent my-0" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {currentRevealed < activeCase.steps.length && (
            <button
              onClick={revealNext}
              className="w-full mt-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold tracking-wide shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 transition-all"
            >
              <Eye className="w-4 h-4" /> Buka Langkah Berikutnya ({currentRevealed + 1} dari {activeCase.steps.length})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
