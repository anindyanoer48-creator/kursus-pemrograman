import React from 'react';
import type { StudentProfile } from '../data/student';
import { getCourseProgress } from '../data/student';
import type { CourseId } from '../data/courses';
import { COURSES } from '../data/courses';
import {
  BrainCircuit,
  BookOpen,
  Award,
  Sun,
  Moon,
  HelpCircle,
  FileText,
  Home,
  CheckCircle2,
  Lock,
  Code2,
  Terminal,
  Activity,
  Grid,
  Network,
  Crown,
  Globe,
  GitBranch,
  Cpu,
  Box
} from 'lucide-react';
import { isCourseUnlocked } from '../data/student';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  profile: StudentProfile;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  totalModules: number;
  activeCourseId?: CourseId;
  onSelectCourse?: (courseId: CourseId) => void;
  onOpenPayment?: (courseId?: CourseId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  profile,
  darkMode,
  setDarkMode,
  totalModules,
  activeCourseId = 'kompleksitas',
  onSelectCourse,
  onOpenPayment
}) => {
  const currentProgress = getCourseProgress(profile, activeCourseId);
  const passedCount = currentProgress.passedModules.length;
  const isAllPassed = passedCount === totalModules;
  const currentCourse = COURSES[activeCourseId] || COURSES.kompleksitas;

  const renderBrandIcon = () => {
    switch (activeCourseId) {
      case 'dasar_pemrograman':
        return <Code2 className="w-5 h-5" />;
      case 'algoritma_pemrograman':
        return <Terminal className="w-5 h-5" />;
      case 'kalkulus':
        return <Activity className="w-5 h-5" />;
      case 'aljabar_linier':
        return <Grid className="w-5 h-5" />;
      case 'matematika_diskrit':
        return <Network className="w-5 h-5" />;
      case 'web_framework':
        return <Globe className="w-5 h-5" />;
      case 'rekayasa_perangkat_lunak':
        return <GitBranch className="w-5 h-5" />;
      case 'sistem_operasi':
        return <Cpu className="w-5 h-5" />;
      case 'pemrograman_berorientasi_objek':
        return <Box className="w-5 h-5" />;
      default:
        return <BrainCircuit className="w-5 h-5" />;
    }
  };

  const getBrandBg = () => {
    switch (activeCourseId) {
      case 'dasar_pemrograman':
        return 'bg-emerald-600 group-hover:bg-emerald-700';
      case 'algoritma_pemrograman':
        return 'bg-amber-600 group-hover:bg-amber-700';
      case 'kalkulus':
        return 'bg-rose-600 group-hover:bg-rose-700';
      case 'aljabar_linier':
        return 'bg-cyan-600 group-hover:bg-cyan-700';
      case 'matematika_diskrit':
        return 'bg-violet-600 group-hover:bg-violet-700';
      case 'web_framework':
        return 'bg-teal-600 group-hover:bg-teal-700';
      case 'rekayasa_perangkat_lunak':
        return 'bg-blue-600 group-hover:bg-blue-700';
      case 'sistem_operasi':
        return 'bg-amber-600 group-hover:bg-amber-700';
      case 'pemrograman_berorientasi_objek':
        return 'bg-purple-600 group-hover:bg-purple-700';
      default:
        return 'bg-indigo-600 group-hover:bg-indigo-700';
    }
  };

  const courseList: CourseId[] = [
    'kompleksitas',
    'dasar_pemrograman',
    'algoritma_pemrograman',
    'kalkulus',
    'aljabar_linier',
    'matematika_diskrit',
    'web_framework',
    'rekayasa_perangkat_lunak',
    'sistem_operasi',
    'pemrograman_berorientasi_objek'
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
        >
          <div
            className={`w-9 h-9 rounded-xl text-white flex items-center justify-center shadow-sm transition-colors ${getBrandBg()}`}
          >
            {renderBrandIcon()}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base">
                {currentCourse.shortTitle}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 block -mt-0.5 hidden sm:block">
              {currentCourse.tagline.split(',')[0]} • {currentCourse.badge}
            </span>
          </div>
        </div>

        {/* Quick Course Switcher Dropdown / Pills */}
        {onSelectCourse && (
          <div className="hidden xl:flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs gap-0.5 overflow-x-auto max-w-xl">
            {courseList.map((cId) => {
              const info = COURSES[cId];
              const isSelected = activeCourseId === cId;
              const unlocked = isCourseUnlocked(profile, cId);
              return (
                <button
                  key={cId}
                  onClick={() => onSelectCourse(cId)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {!unlocked && <Lock className="w-2.5 h-2.5 text-amber-500 flex-shrink-0" />}
                  <span>{info.shortTitle}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Dropdown for Medium Screens */}
        {onSelectCourse && (
          <div className="hidden lg:flex xl:hidden items-center">
            <select
              value={activeCourseId}
              onChange={(e) => onSelectCourse(e.target.value as CourseId)}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {courseList.map((cId) => {
                const unlocked = isCourseUnlocked(profile, cId);
                return (
                  <option key={cId} value={cId}>
                    {!unlocked ? '🔒 ' : ''}{COURSES[cId].title}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* Center Main Nav Links (Clean & Minimalist) */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentPage === 'home'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Home className="w-3.5 h-3.5" /> Beranda
          </button>

          <button
            onClick={() => onNavigate('materi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentPage === 'materi'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Materi
          </button>

          <button
            onClick={() => onNavigate('kuis')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentPage === 'kuis'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" /> Kuis
          </button>

          <button
            onClick={() => onNavigate('cheatsheet')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentPage === 'cheatsheet'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Cheatsheet
          </button>

          <button
            onClick={() => onNavigate('sertifikat')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentPage === 'sertifikat'
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {isAllPassed ? (
              <Award className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            )}
            <span>Sertifikat</span>
          </button>
        </nav>

        {/* Right Student ID & Settings */}
        <div className="flex items-center gap-2.5">
          {/* All-Access Status or Upgrade Button */}
          {profile.isAllAccess ? (
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 text-xs font-bold"
              title="Akses Premium All-Access Aktif ke Seluruh Kursus"
            >
              <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>All-Access</span>
            </div>
          ) : onOpenPayment ? (
            <button
              onClick={() => onOpenPayment()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 active:scale-95 text-white shadow-sm transition-all"
              title="Buka Semua Kursus (Rp 50.000) via QRIS Saweria"
            >
              <Crown className="w-3.5 h-3.5 text-amber-100" />
              <span className="hidden sm:inline">Upgrade (Rp 50k)</span>
              <span className="sm:hidden">Upgrade</span>
            </button>
          ) : null}

          {/* Student Auto-ID Badge */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs hover:border-indigo-400 transition-colors"
            title="Klik untuk ubah nama di Beranda"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-[10px]">
              {profile.name.charAt(0)}
            </div>
            <div className="text-left font-mono">
              <span className="font-bold text-slate-800 dark:text-slate-200 block truncate max-w-[120px]">
                {profile.name}
              </span>
              <span className="text-[10px] text-slate-400 block -mt-0.5">
                {profile.studentId}
              </span>
            </div>
          </div>

          {/* Quick Progress Badge */}
          <button
            onClick={() => onNavigate(isAllPassed ? 'sertifikat' : 'kuis')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              isAllPassed
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
            }`}
          >
            {isAllPassed ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
            )}
            <span>{passedCount}/{totalModules} Lulus</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Sub-bar */}
      <div className="md:hidden flex items-center justify-around px-2 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
        <button
          onClick={() => onNavigate('home')}
          className={`px-2 py-1 rounded-lg font-medium ${
            currentPage === 'home'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500'
          }`}
        >
          Beranda
        </button>
        <button
          onClick={() => onNavigate('materi')}
          className={`px-2 py-1 rounded-lg font-medium ${
            currentPage === 'materi'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500'
          }`}
        >
          Materi
        </button>
        <button
          onClick={() => onNavigate('kuis')}
          className={`px-2 py-1 rounded-lg font-medium ${
            currentPage === 'kuis'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500'
          }`}
        >
          Kuis
        </button>
        <button
          onClick={() => onNavigate('cheatsheet')}
          className={`px-2 py-1 rounded-lg font-medium ${
            currentPage === 'cheatsheet'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500'
          }`}
        >
          Buku Rumus
        </button>
        <button
          onClick={() => onNavigate('sertifikat')}
          className={`px-2 py-1 rounded-lg font-medium ${
            currentPage === 'sertifikat'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500'
          }`}
        >
          Sertifikat
        </button>
      </div>
    </header>
  );
};
