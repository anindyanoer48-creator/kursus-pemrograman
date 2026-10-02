import React from 'react';
import type { ModuleData, SectionContent } from '../data/curriculum';
import { MathBlock, MathInline } from './Math';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Activity,
  GitFork,
  Calculator,
  Code2,
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface ModuleViewerProps {
  module: ModuleData;
  section: SectionContent;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  passedModules: string[];
  completedMaterials: string[];
  onCompleteMaterial: (moduleId: string, navigateToQuiz?: boolean) => void;
  onNavigateToQuiz: (moduleId: string) => void;
  onSwitchTab: (tab: string) => void;
}

export const ModuleViewer: React.FC<ModuleViewerProps> = ({
  module,
  section,
  onSelectSection,
  passedModules,
  completedMaterials,
  onCompleteMaterial,
  onNavigateToQuiz,
  onSwitchTab
}) => {
  const sectionIdx = module.sections.findIndex((s) => s.id === section.id);
  const prevSection = sectionIdx > 0 ? module.sections[sectionIdx - 1] : null;
  const nextSection =
    sectionIdx < module.sections.length - 1
      ? module.sections[sectionIdx + 1]
      : null;

  // Custom text renderer that handles $$display math$$ and $inline math$
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split('\n');
    const elements: React.ReactNode[] = [];

    let inTable = false;
    let tableRows: string[] = [];

    const flushTable = (keyPrefix: string) => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${keyPrefix}`} className="my-5 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="min-w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  {tableRows[0]
                    .split('|')
                    .filter((c) => c.trim().length > 0)
                    .map((col, cIdx) => (
                      <th key={cIdx} className="p-3 font-semibold">
                        {renderInlineMathText(col.trim())}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {tableRows.slice(2).map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300">
                    {row
                      .split('|')
                      .filter((c) => c.trim().length > 0)
                      .map((cell, cIdx) => (
                        <td key={cIdx} className="p-3">
                          {renderInlineMathText(cell.trim())}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    let idx = 0;
    while (idx < lines.length) {
      const line = lines[idx];

      // Check if table line
      if (line.trim().startsWith('|')) {
        inTable = true;
        tableRows.push(line);
        idx++;
        continue;
      } else if (inTable) {
        flushTable(`block-${idx}`);
      }

      // Check for display math $$ ... $$
      if (line.trim().startsWith('$$') && line.trim().endsWith('$$') && line.trim().length > 4) {
        const formula = line.trim().slice(2, -2).trim();
        elements.push(<MathBlock key={`math-${idx}`} math={formula} />);
        idx++;
        continue;
      }

      // Headings
      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={`h3-${idx}`}
            className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-8 mb-2.5 border-l-4 border-indigo-500 pl-3"
          >
            {renderInlineMathText(line.replace('### ', ''))}
          </h3>
        );
        idx++;
        continue;
      }

      if (line.startsWith('#### ')) {
        elements.push(
          <h4
            key={`h4-${idx}`}
            className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-5 mb-1.5"
          >
            {renderInlineMathText(line.replace('#### ', ''))}
          </h4>
        );
        idx++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === '---') {
        elements.push(
          <hr key={`hr-${idx}`} className="my-6 border-slate-200 dark:border-slate-800" />
        );
        idx++;
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        const quoteLines: string[] = [line.slice(2)];
        let nextIdx = idx + 1;
        while (nextIdx < lines.length && lines[nextIdx].startsWith('> ')) {
          quoteLines.push(lines[nextIdx].slice(2));
          nextIdx++;
        }
        idx = nextIdx;
        elements.push(
          <blockquote
            key={`quote-${idx}`}
            className="my-4 p-4 border-l-4 border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/30 rounded-r-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic"
          >
            {quoteLines.map((ql, qIdx) => (
              <p key={qIdx} className="mb-1 last:mb-0">
                {renderInlineMathText(ql)}
              </p>
            ))}
          </blockquote>
        );
        continue;
      }

      // Bullet lists
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const itemText = line.trim().slice(2);
        elements.push(
          <li
            key={`li-${idx}`}
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 ml-4 list-disc leading-relaxed my-1"
          >
            {renderInlineMathText(itemText)}
          </li>
        );
        idx++;
        continue;
      }

      // Numbered lists
      const numMatch = line.trim().match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        elements.push(
          <div key={`num-${idx}`} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2 my-1.5 leading-relaxed">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 min-w-5">
              {numMatch[1]}.
            </span>
            <div>{renderInlineMathText(numMatch[2])}</div>
          </div>
        );
        idx++;
        continue;
      }

      // Standard Paragraph
      if (line.trim().length > 0) {
        elements.push(
          <p
            key={`p-${idx}`}
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-2.5 font-normal"
          >
            {renderInlineMathText(line)}
          </p>
        );
      }

      idx++;
    }

    if (inTable) {
      flushTable('end');
    }

    return elements;
  };

  const renderInlineMathText = (text: string): React.ReactNode => {
    const parts = text.split(/(\$[^$]+\$|\*\*[^*]+\*\*|`[^`]+`)/g);

    return parts.map((part, i) => {
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const math = part.slice(1, -1);
        return <MathInline key={i} math={math} />;
      }
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        const bold = part.slice(2, -2);
        return (
          <strong key={i} className="font-bold text-slate-900 dark:text-white">
            {bold}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        const code = part.slice(1, -1);
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-mono text-[11px]"
          >
            {code}
          </code>
        );
      }
      return part;
    });
  };

  const isModulePassed = passedModules.includes(module.id);

  return (
    <article className="flex-1 max-w-4xl mx-auto p-4 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
        <span>MODUL {module.number}</span>
        <span>•</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{module.title}</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
        {section.title}
      </h1>

      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pb-5 mb-6 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-1.5 font-medium">
          <Clock className="w-3.5 h-3.5 text-indigo-500" /> {section.readTime}
        </span>
        <span>•</span>
        <span>{section.summary}</span>
      </div>

      {/* Interactive Tool Banner Shortcuts */}
      {module.id === 'iteratif' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600 text-white rounded-lg">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Simulator Loop Counter Tersedia
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Hitung frekuensi perulangan kode nyata dan buktikan kecocokan rumus Sigma.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSwitchTab('loop-sim')}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex-shrink-0"
          >
            Buka Simulator
          </button>
        </div>
      )}

      {module.id === 'rekursif' && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-purple-600 text-white rounded-lg">
                <GitFork className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  Pohon Rekursi
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Visual cabang & level cost.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSwitchTab('rec-tree')}
              className="text-xs px-2.5 py-1 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Lihat
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-sky-600 text-white rounded-lg">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  Kalkulator Master
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Hitung Kasus 1, 2, 3 seketika.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSwitchTab('master-calc')}
              className="text-xs px-2.5 py-1 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
            >
              Hitung
            </button>
          </div>
        </div>
      )}

      {/* Key Takeaways Minimalist Card */}
      <div className="mb-8 p-5 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-purple-950/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
        <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider mb-2.5">
          <Lightbulb className="w-4 h-4" /> Poin Kunci Pembelajaran (Key Takeaways)
        </div>
        <ul className="space-y-1.5">
          {section.keyTakeaways.map((point, pIdx) => (
            <li
              key={pIdx}
              className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
            >
              <span className="text-emerald-500 font-bold">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Code Snippet */}
      {section.codeSnippet && (
        <div className="mb-8 bg-slate-900 rounded-2xl border border-slate-800 text-white overflow-hidden shadow-md">
          <div className="p-3 px-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <Code2 className="w-4 h-4 text-emerald-400" /> Contoh Kode & Analisis Operasi
            </span>
            <span className="uppercase font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800">
              {section.codeSnippet.language}
            </span>
          </div>

          <pre className="p-4 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
            {section.codeSnippet.code}
          </pre>

          <div className="p-3 px-4 bg-slate-800/60 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-emerald-400">Analisis Operasi: </strong>
            {section.codeSnippet.explanation}
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
        {renderFormattedContent(section.content)}
      </div>

      {/* Section Navigation Buttons */}
      <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        {prevSection ? (
          <button
            onClick={() => onSelectSection(module.id, prevSection.id)}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya: {prevSection.title}</span>
            <span className="sm:hidden">Sebelumnya</span>
          </button>
        ) : (
          <div />
        )}

        {nextSection ? (
          <button
            onClick={() => onSelectSection(module.id, nextSection.id)}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
          >
            <span className="hidden sm:inline">Lanjut: {nextSection.title}</span>
            <span className="sm:hidden">Lanjut</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => onCompleteMaterial(module.id, true)}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
          >
            <span>Selesaikan Materi & Buka Kuis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Material Completion & Transition to Quiz Banner */}
      <div className="mt-8 bg-gradient-to-br from-indigo-50/70 via-purple-50/40 to-slate-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-slate-900 border border-indigo-200/80 dark:border-indigo-800/80 rounded-2xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-mono font-semibold text-[11px] rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              EVALUASI KOMPETENSI (20 SOAL)
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {isModulePassed
                ? `Kuis ${module.title} Telah Lulus ✓`
                : completedMaterials.includes(module.id)
                ? `Materi ${module.title} Telah Selesai`
                : `Selesai Mempelajari ${module.title}?`}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {isModulePassed
                ? 'Anda telah berhasil lulus kuis 20 soal untuk modul ini. Anda dapat mengulang kuis kapan saja di menu Kuis atau melanjutkan ke materi berikutnya.'
                : completedMaterials.includes(module.id)
                ? 'Kuis evaluasi (20 soal) sudah terbuka di menu Kuis. Kerjakan kuis untuk membuka materi modul berikutnya.'
                : 'Setelah memahami seluruh materi dan sub-bab pada modul ini, tandai materi selesai untuk membuka kuis evaluasi 20 soal.'}
            </p>
          </div>

          <div className="w-full sm:w-auto flex-shrink-0">
            {isModulePassed ? (
              <button
                onClick={() => onNavigateToQuiz(module.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                Lihat / Ulangi Kuis
              </button>
            ) : completedMaterials.includes(module.id) ? (
              <button
                onClick={() => onNavigateToQuiz(module.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <span>Kerjakan Kuis Sekarang (20 Soal)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onCompleteMaterial(module.id, true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Tandai Selesai & Buka Kuis</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
