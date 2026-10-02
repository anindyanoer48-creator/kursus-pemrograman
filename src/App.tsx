import React, { useState, useEffect } from 'react';
import type { CourseId } from './data/courses';
import { COURSES } from './data/courses';
import { getModulesForCourse } from './data/curriculum';
import type { StudentProfile } from './data/student';
import {
  getStudentProfile,
  saveStudentProfile,
  resetStudentWithNewName,
  getCourseProgress,
  isCourseUnlocked,
  updateSaweriaUsername
} from './data/student';
import { Navbar } from './components/Navbar';
import { PaymentModal } from './components/PaymentModal';
import { HomePage } from './pages/HomePage';
import { MateriPage } from './pages/MateriPage';
import { KuisPage } from './pages/KuisPage';
import { CheatsheetPage } from './pages/CheatsheetPage';
import { SertifikatPage } from './pages/SertifikatPage';
import {
  BrainCircuit,
  Code2,
  Terminal,
  Activity,
  Grid,
  Network,
  Lock,
  Crown,
  Sparkles,
  ArrowRight,
  Globe,
  GitBranch,
  Cpu,
  Box
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  // Navigation Page State
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Student Profile (auto-generated ID and persisted name & course progress)
  const [profile, setProfile] = useState<StudentProfile>(() => getStudentProfile());

  // Active Course State (defaults to free starter course: 'algoritma_pemrograman')
  const [activeCourseId, setActiveCourseId] = useState<CourseId>(
    () => profile.activeCourseId || 'algoritma_pemrograman'
  );

  // Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [paymentTargetCourseId, setPaymentTargetCourseId] = useState<CourseId>('kompleksitas');

  const currentModules = getModulesForCourse(activeCourseId);
  const currentCourseInfo = COURSES[activeCourseId];
  const currentCourseProgress = getCourseProgress(profile, activeCourseId);

  // Selected Module/Section for Materi
  const [currentModuleId, setCurrentModuleId] = useState<string>(
    () => currentModules[0]?.id || 'fondasi'
  );
  const [currentSectionId, setCurrentSectionId] = useState<string>(
    () => currentModules[0]?.sections[0]?.id || '1-1-pengantar'
  );

  // Selected Module for Kuis
  const [quizModuleId, setQuizModuleId] = useState<string>(
    () => currentModules[0]?.id || 'fondasi'
  );

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('algo_dark_mode_clean');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('algo_dark_mode_clean', JSON.stringify(darkMode));
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error(e);
    }
  }, [darkMode]);

  const handleSelectCourse = (courseId: CourseId) => {
    setActiveCourseId(courseId);
    const newModules = getModulesForCourse(courseId);
    setCurrentModuleId(newModules[0].id);
    setCurrentSectionId(newModules[0].sections[0].id);
    setQuizModuleId(newModules[0].id);

    const updatedProfile: StudentProfile = {
      ...profile,
      activeCourseId: courseId
    };
    saveStudentProfile(updatedProfile);
    setProfile(updatedProfile);
  };

  const handleUpdateName = (newName: string) => {
    const trimmed = newName.trim();
    if (!trimmed || trimmed === profile.name.trim()) return;

    // Reset achievements across all courses and generate a fresh student ID
    const newProfile = resetStudentWithNewName(trimmed, activeCourseId);
    setProfile(newProfile);

    // Reset module selections back to initial state
    const mods = getModulesForCourse(activeCourseId);
    setQuizModuleId(mods[0].id);
    setCurrentModuleId(mods[0].id);
    setCurrentSectionId(mods[0].sections[0].id);
  };

  const handleCompleteMaterial = (moduleId: string, navigateToQuiz = false) => {
    const courseProg = getCourseProgress(profile, activeCourseId);
    const currentCompleted = courseProg.completedMaterials || [];
    let updatedCompleted = currentCompleted;

    if (!currentCompleted.includes(moduleId)) {
      updatedCompleted = [...currentCompleted, moduleId];
      const updatedCourseProg = {
        ...courseProg,
        completedMaterials: updatedCompleted
      };
      const updatedProfile: StudentProfile = {
        ...profile,
        courses: {
          ...profile.courses,
          [activeCourseId]: updatedCourseProg
        },
        completedMaterials: updatedCompleted
      };
      saveStudentProfile(updatedProfile);
      setProfile(updatedProfile);
    }

    if (navigateToQuiz) {
      setQuizModuleId(moduleId);
      setCurrentPage('kuis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToQuiz = (moduleId: string) => {
    setQuizModuleId(moduleId);
    setCurrentPage('kuis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePassQuiz = (moduleId: string) => {
    const courseProg = getCourseProgress(profile, activeCourseId);
    const currentPassed = courseProg.passedModules || [];

    if (!currentPassed.includes(moduleId)) {
      const updatedPassed = [...currentPassed, moduleId];
      const isAllPassed = updatedPassed.length === currentModules.length;

      const updatedCourseProg = {
        ...courseProg,
        passedModules: updatedPassed,
        certificateIssued: isAllPassed,
        completedAt: isAllPassed ? new Date().toISOString() : courseProg.completedAt
      };

      const updatedProfile: StudentProfile = {
        ...profile,
        courses: {
          ...profile.courses,
          [activeCourseId]: updatedCourseProg
        },
        passedModules: updatedPassed,
        certificateIssued: isAllPassed,
        completedAt: updatedCourseProg.completedAt
      };

      saveStudentProfile(updatedProfile);
      setProfile(updatedProfile);

      if (isAllPassed) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      }
    }
  };

  const handleSelectSection = (moduleId: string, sectionId: string) => {
    setCurrentModuleId(moduleId);
    setCurrentSectionId(sectionId);
    setCurrentPage('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPayment = (courseId?: CourseId) => {
    setPaymentTargetCourseId(courseId || activeCourseId);
    setPaymentModalOpen(true);
  };

  const handleUnlockSuccess = (
    updatedProfile: StudentProfile,
    courseId: CourseId,
    isAll: boolean
  ) => {
    setProfile(updatedProfile);
    if (!isAll && courseId !== activeCourseId && currentPage !== 'home') {
      setActiveCourseId(courseId);
    }
  };

  const handleUpdateSaweria = (newUsername: string) => {
    const updated = updateSaweriaUsername(profile, newUsername);
    setProfile(updated);
  };

  const isCurrentCourseLocked = currentPage !== 'home' && !isCourseUnlocked(profile, activeCourseId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        profile={profile}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        totalModules={currentModules.length}
        activeCourseId={activeCourseId}
        onSelectCourse={handleSelectCourse}
        onOpenPayment={handleOpenPayment}
      />

      {/* Main Page Routing */}
      <main className="flex-1 pb-24 md:pb-8">
        {isCurrentCourseLocked ? (
          /* Paywall Gate for Locked Courses */
          <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16 text-center">
            <div className="bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-amber-700/80 rounded-3xl p-5 sm:p-10 shadow-lg space-y-6 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-inner">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                  Kursus Premium Terkunci
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Akses {currentCourseInfo.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Halaman <strong>{currentPage === 'materi' ? 'Materi Silabus' : currentPage === 'kuis' ? 'Kuis Evaluasi (100 Soal)' : currentPage === 'cheatsheet' ? 'Buku Rumus' : 'Sertifikat Resmi'}</strong> untuk bidang studi ini dikhususkan bagi peserta premium. Buka satuan atau hemat dengan paket semua kursus via QRIS Otomatis Saweria.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-2 text-left">
                <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span>Yang Anda Dapatkan Setelah Buka Akses:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                  <div>✓ 5 Modul Silabus Komprehensif</div>
                  <div>✓ 100 Soal Kuis & Pembahasan</div>
                  <div>✓ Buku Rumus Referensi Cepat</div>
                  <div>✓ Sertifikat Resmi Terverifikasi</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenPayment(activeCourseId)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
                >
                  <Lock className="w-4 h-4" />
                  <span>Buka Kursus Ini (Rp 10.000)</span>
                </button>

                <button
                  onClick={() => handleOpenPayment()}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
                >
                  <Crown className="w-4 h-4 text-amber-300" />
                  <span>Buka Semua 10 Kursus (Rp 50.000)</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-4 text-xs">
                <button
                  onClick={() => {
                    handleSelectCourse('algoritma_pemrograman');
                    setCurrentPage('materi');
                  }}
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Beralih ke Kursus Gratis (Algoritma & Pemrograman)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {currentPage === 'home' && (
              <HomePage
                profile={profile}
                onUpdateName={handleUpdateName}
                onNavigate={handleNavigate}
                totalModules={currentModules.length}
                activeCourseId={activeCourseId}
                onSelectCourse={handleSelectCourse}
                modules={currentModules}
                courseInfo={currentCourseInfo}
                onOpenPayment={handleOpenPayment}
              />
            )}

            {currentPage === 'materi' && (
              <MateriPage
                currentModuleId={currentModuleId}
                currentSectionId={currentSectionId}
                onSelectSection={handleSelectSection}
                passedModules={currentCourseProgress.passedModules}
                completedMaterials={currentCourseProgress.completedMaterials || []}
                onCompleteMaterial={handleCompleteMaterial}
                onNavigateToQuiz={handleNavigateToQuiz}
                modules={currentModules}
                activeCourseId={activeCourseId}
              />
            )}

            {currentPage === 'kuis' && (
              <KuisPage
                profile={{
                  ...profile,
                  passedModules: currentCourseProgress.passedModules,
                  completedMaterials: currentCourseProgress.completedMaterials || []
                }}
                selectedModuleId={quizModuleId}
                onSelectModuleId={setQuizModuleId}
                onPassQuiz={handlePassQuiz}
                onNavigate={handleNavigate}
                onSelectModuleForMateri={(modId) => {
                  const targetMod =
                    currentModules.find((m) => m.id === modId) || currentModules[0];
                  handleSelectSection(modId, targetMod.sections[0].id);
                }}
                modules={currentModules}
                courseInfo={currentCourseInfo}
                activeCourseId={activeCourseId}
              />
            )}

            {currentPage === 'cheatsheet' && (
              <CheatsheetPage
                activeCourseId={activeCourseId}
                courseInfo={currentCourseInfo}
              />
            )}

            {currentPage === 'sertifikat' && (
              <SertifikatPage
                profile={profile}
                onUpdateName={handleUpdateName}
                onNavigate={handleNavigate}
                totalModules={currentModules.length}
                modules={currentModules}
                courseInfo={currentCourseInfo}
                activeCourseId={activeCourseId}
                courseProgress={currentCourseProgress}
              />
            )}
          </>
        )}
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 sm:px-8 mt-16 mb-16 md:mb-0 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            {activeCourseId === 'dasar_pemrograman' ? (
              <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            ) : activeCourseId === 'algoritma_pemrograman' ? (
              <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            ) : activeCourseId === 'kalkulus' ? (
              <Activity className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            ) : activeCourseId === 'aljabar_linier' ? (
              <Grid className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            ) : activeCourseId === 'matematika_diskrit' ? (
              <Network className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            ) : activeCourseId === 'web_framework' ? (
              <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            ) : activeCourseId === 'rekayasa_perangkat_lunak' ? (
              <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            ) : activeCourseId === 'sistem_operasi' ? (
              <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            ) : activeCourseId === 'pemrograman_berorientasi_objek' ? (
              <Box className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            ) : (
              <BrainCircuit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            )}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {currentCourseInfo.title}
            </span>
            <span>•</span>
            <span>{currentCourseInfo.tagline}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigate('cheatsheet')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Buku Rumus
            </button>
            <button
              onClick={() => handleNavigate('sertifikat')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Sertifikat
            </button>
            <button
              onClick={() => handleNavigate('materi')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Materi
            </button>
            <button
              onClick={() => handleNavigate('kuis')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Kuis (100 Soal)
            </button>
          </div>
        </div>
      </footer>

      {/* Global Automated QRIS Saweria Payment Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        targetCourseId={paymentTargetCourseId}
        profile={profile}
        onUnlockSuccess={handleUnlockSuccess}
        onUpdateSaweriaUsername={handleUpdateSaweria}
      />
    </div>
  );
};

export default App;
