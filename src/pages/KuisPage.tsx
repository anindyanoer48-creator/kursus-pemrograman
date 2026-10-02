import React from 'react';
import type { ModuleData } from '../data/curriculum';
import { MODULES } from '../data/curriculum';
import type { CourseInfo, CourseId } from '../data/courses';
import { QuizSection } from '../components/QuizSection';
import type { StudentProfile } from '../data/student';
import { isQuizUnlocked, isMaterialUnlocked } from '../data/student';
import {
  HelpCircle,
  CheckCircle2,
  Award,
  ArrowRight,
  Lock,
  BookOpen
} from 'lucide-react';

interface KuisPageProps {
  profile: StudentProfile;
  selectedModuleId: string;
  onSelectModuleId: (moduleId: string) => void;
  onPassQuiz: (moduleId: string) => void;
  onNavigate: (page: string) => void;
  onSelectModuleForMateri: (moduleId: string) => void;
  modules?: ModuleData[];
  courseInfo?: CourseInfo;
  activeCourseId?: CourseId;
}

export const KuisPage: React.FC<KuisPageProps> = ({
  profile,
  selectedModuleId,
  onSelectModuleId,
  onPassQuiz,
  onNavigate,
  onSelectModuleForMateri,
  modules = MODULES,
  courseInfo,
  activeCourseId: _activeCourseId = 'kompleksitas'
}) => {
  const moduleList = modules && modules.length > 0 ? modules : MODULES;
  const selectedModuleIndex = moduleList.findIndex((m) => m.id === selectedModuleId);
  const selectedModule =
    selectedModuleIndex >= 0 ? moduleList[selectedModuleIndex] : moduleList[0];

  const prevModule =
    selectedModuleIndex > 0 ? moduleList[selectedModuleIndex - 1] : null;
  const nextModule =
    selectedModuleIndex < moduleList.length - 1
      ? moduleList[selectedModuleIndex + 1]
      : null;

  const passedCount = profile.passedModules.length;
  const isAllPassed = passedCount === moduleList.length;

  const isSelectedQuizUnlocked = isQuizUnlocked(
    selectedModule.id,
    moduleList,
    profile.completedMaterials,
    profile.passedModules
  );

  const isSelectedMaterialUnlocked = isMaterialUnlocked(
    selectedModule.id,
    moduleList,
    profile.passedModules
  );

  const isSelectedQuizPassed = profile.passedModules.includes(selectedModule.id);

  const courseTitle = courseInfo ? courseInfo.title : 'Kompleksitas Algoritma';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" /> Pusat Evaluasi Pemahaman • {courseTitle}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Kuis {courseTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Uji pemahaman Anda pada setiap modul (20 soal per kuis, total 100 soal). Dapatkan skor minimal 65% di kelima modul untuk membuka hak cetak sertifikat resmi.
          </p>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-right">
          <span className="text-[11px] text-slate-400 block">Status Kelulusan</span>
          <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">
            {passedCount} / {moduleList.length} Kuis Lulus
          </span>
        </div>
      </div>

      {/* Congratulatory Banner when All Passed */}
      {isAllPassed && (
        <div className="p-5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Selamat! Anda Telah Lulus Seluruh Kuis (5/5)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Sertifikat resmi kelulusan kompetensi Anda sekarang telah terbuka dan siap untuk dicetak dalam format landscape bersih.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('sertifikat')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Buka Sertifikat Anda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Module Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar touch-pan-x">
        {moduleList.map((mod, idx) => {
          const isPassed = profile.passedModules.includes(mod.id);
          const isSelected = mod.id === selectedModuleId;
          const unlocked = isQuizUnlocked(
            mod.id,
            moduleList,
            profile.completedMaterials,
            profile.passedModules
          );

          return (
            <button
              key={mod.id}
              onClick={() => onSelectModuleId(mod.id)}
              className={`min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : !unlocked
                  ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-200/70 dark:border-slate-800/70 text-slate-400 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>Modul {idx + 1}: {mod.title}</span>
              {isPassed ? (
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    isSelected ? 'text-white' : 'text-emerald-500'
                  }`}
                />
              ) : !unlocked ? (
                <Lock
                  className={`w-3.5 h-3.5 ${
                    isSelected ? 'text-white/80' : 'text-slate-400'
                  }`}
                />
              ) : (
                <span
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-indigo-300' : 'bg-amber-400'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Module Quiz Component OR Guided Lock Views */}
      {isSelectedQuizUnlocked ? (
        <div className="space-y-6">
          <QuizSection
            className="mt-0"
            moduleId={selectedModule.id}
            moduleTitle={selectedModule.title}
            questions={selectedModule.quiz}
            isPassed={isSelectedQuizPassed}
            onPassQuiz={onPassQuiz}
          />

          {/* Next Step Transition Banner when this Quiz is Passed */}
          {isSelectedQuizPassed && (
            <div className="p-6 bg-gradient-to-r from-indigo-50/80 via-white to-emerald-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Modul Selesai & Lulus
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {nextModule
                    ? `Langkah Berikutnya: Pelajari Materi Modul ${selectedModuleIndex + 2}`
                    : 'Seluruh Rangkaian Modul Berhasil Dituntaskan!'}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-lg leading-relaxed">
                  {nextModule
                    ? `Materi ${nextModule.title} sekarang telah TERBUKA untuk Anda pelajari. Lanjutkan langkah pembelajaran Anda.`
                    : `Anda telah menguasai seluruh materi dan lulus 100 soal kuis pada kursus ${courseTitle}. Cetak sertifikat kelulusan Anda sekarang.`}
                </p>
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto">
                {nextModule ? (
                  <button
                    onClick={() => onSelectModuleForMateri(nextModule.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-colors"
                  >
                    <span>Lanjut ke Materi Modul {selectedModuleIndex + 2}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('sertifikat')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    <span>Cetak Sertifikat Kelulusan</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : !isSelectedMaterialUnlocked ? (
        /* Lock Case 1: Previous module quiz not passed yet */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Kuis Modul {selectedModuleIndex + 1} Terkunci
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
              Anda harus terlebih dahulu menyelesaikan dan lulus kuis pada{' '}
              <strong>{prevModule ? prevModule.title : 'modul sebelumnya'}</strong> sebelum dapat mengakses kuis modul ini.
            </p>
          </div>
          {prevModule && (
            <button
              onClick={() => onSelectModuleId(prevModule.id)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-2"
            >
              <span>Buka Kuis {prevModule.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      ) : (
        /* Lock Case 2: Material unlocked but not yet completed */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Pelajari Materi {selectedModule.title} Terlebih Dahulu
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto leading-relaxed">
              Kuis evaluasi modul ini berisi 20 soal analisis mendalam. Untuk memastikan Anda dapat menjawab dengan baik, silakan pelajari materi pada modul ini dan tandai selesai di halaman materi.
            </p>
          </div>
          <button
            onClick={() => onSelectModuleForMateri(selectedModule.id)}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Pelajari Materi {selectedModule.title} Sekarang</span>
          </button>
        </div>
      )}
    </div>
  );
};
