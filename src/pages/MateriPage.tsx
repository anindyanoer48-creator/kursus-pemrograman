import React, { useState } from 'react';
import type { ModuleData } from '../data/curriculum';
import { MODULES } from '../data/curriculum';
import type { CourseId } from '../data/courses';
import { isMaterialUnlocked } from '../data/student';
import { Sidebar } from '../components/Sidebar';
import { ModuleViewer } from '../components/ModuleViewer';
import { InteractiveLoopSimulator } from '../components/InteractiveLoopSimulator';
import { InteractiveRecursionTree } from '../components/InteractiveRecursionTree';
import { InteractiveMasterTheorem } from '../components/InteractiveMasterTheorem';
import { StepByStepSolver } from '../components/StepByStepSolver';
import { BookOpen, Activity, GitFork, Calculator, Sparkles, Lock } from 'lucide-react';

interface MateriPageProps {
  currentModuleId: string;
  currentSectionId: string;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  passedModules: string[];
  completedMaterials: string[];
  onCompleteMaterial: (moduleId: string, navigateToQuiz?: boolean) => void;
  onNavigateToQuiz: (moduleId: string) => void;
  modules?: ModuleData[];
  activeCourseId?: CourseId;
}

export const MateriPage: React.FC<MateriPageProps> = ({
  currentModuleId,
  currentSectionId,
  onSelectSection,
  passedModules,
  completedMaterials,
  onCompleteMaterial,
  onNavigateToQuiz,
  modules = MODULES,
  activeCourseId = 'kompleksitas'
}) => {
  const [subTab, setSubTab] = useState<'reader' | 'loop' | 'tree' | 'master' | 'cases'>('reader');

  const moduleList = modules && modules.length > 0 ? modules : MODULES;
  const currentModule =
    moduleList.find((m) => m.id === currentModuleId) || moduleList[0];
  const currentSection =
    currentModule.sections.find((s) => s.id === currentSectionId) ||
    currentModule.sections[0];

  const isCurrentModuleUnlocked = isMaterialUnlocked(
    currentModule.id,
    moduleList,
    passedModules
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Sub-tab Tool Switcher */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setSubTab('reader')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            subTab === 'reader'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Baca Modul (1 - 5)
        </button>

        <button
          onClick={() => setSubTab('loop')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            subTab === 'loop'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Activity className="w-3.5 h-3.5" /> Simulator Loop Counter
        </button>

        {activeCourseId === 'kompleksitas' && (
          <>
            <button
              onClick={() => setSubTab('tree')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                subTab === 'tree'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <GitFork className="w-3.5 h-3.5" /> Pohon Rekursi
            </button>

            <button
              onClick={() => setSubTab('master')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                subTab === 'master'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" /> Solver Teorema Master
            </button>
          </>
        )}

        <button
          onClick={() => setSubTab('cases')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            subTab === 'cases'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" /> Studi Kasus Terpandu
        </button>
      </div>

      {/* Main View Area */}
      {subTab === 'reader' && (
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar
            currentModuleId={currentModuleId}
            currentSectionId={currentSectionId}
            onSelectSection={onSelectSection}
            passedModules={passedModules}
            modules={moduleList}
          />
          {isCurrentModuleUnlocked ? (
            <ModuleViewer
              module={currentModule}
              section={currentSection}
              onSelectSection={onSelectSection}
              passedModules={passedModules}
              completedMaterials={completedMaterials}
              onCompleteMaterial={onCompleteMaterial}
              onNavigateToQuiz={onNavigateToQuiz}
              onSwitchTab={(target) => {
                if (target === 'loop-sim') setSubTab('loop');
                else if (target === 'rec-tree') setSubTab('tree');
                else if (target === 'master-calc') setSubTab('master');
                else if (target === 'case-studies') setSubTab('cases');
              }}
            />
          ) : (
            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Modul Masih Terkunci
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
                Untuk mempelajari materi pada <strong>{currentModule.title}</strong>, Anda harus terlebih dahulu menyelesaikan materi dan lulus kuis pada modul sebelumnya.
              </p>
              <button
                onClick={() => {
                  const lastUnlocked =
                    [...MODULES]
                      .reverse()
                      .find((m) => isMaterialUnlocked(m.id, MODULES, passedModules)) ||
                    MODULES[0];
                  onSelectSection(lastUnlocked.id, lastUnlocked.sections[0].id);
                }}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                Kembali ke Modul yang Sedang Terbuka
              </button>
            </div>
          )}
        </div>
      )}

      {subTab === 'loop' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Simulator Iteratif & Loop Counter
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Uji 6 pola perulangan kode dan buktikan kecocokan rumus Sigma secara langsung.
              </p>
            </div>
            <button
              onClick={() => setSubTab('reader')}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Kembali ke Modul
            </button>
          </div>
          <InteractiveLoopSimulator />
        </div>
      )}

      {subTab === 'tree' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Visualizer Pohon Rekursi
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pahami pohon pemanggilan rekursif, pembagian masalah, dan biaya per level kedalaman.
              </p>
            </div>
            <button
              onClick={() => setSubTab('reader')}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Kembali ke Modul
            </button>
          </div>
          <InteractiveRecursionTree />
        </div>
      )}

      {subTab === 'master' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Kalkulator Teorema Master (Divide and Conquer)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hitung kasus 1, 2, atau 3 dan buktikan kompleksitas asimptotik secara instan.
              </p>
            </div>
            <button
              onClick={() => setSubTab('reader')}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Kembali ke Modul
            </button>
          </div>
          <InteractiveMasterTheorem />
        </div>
      )}

      {subTab === 'cases' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Penyelesaian Studi Kasus Langkah demi Langkah
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Uji keterampilan analisis mandiri dengan membuka kunci solusi bertahap.
              </p>
            </div>
            <button
              onClick={() => setSubTab('reader')}
              className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Kembali ke Modul
            </button>
          </div>
          <StepByStepSolver />
        </div>
      )}
    </div>
  );
};
