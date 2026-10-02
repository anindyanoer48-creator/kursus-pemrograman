import React, { useState, useEffect } from 'react';
import type { StudentProfile } from '../data/student';
import { isMaterialUnlocked, getCourseProgress, isCourseUnlocked } from '../data/student';
import type { ModuleData } from '../data/curriculum';
import { MODULES } from '../data/curriculum';
import type { CourseId, CourseInfo } from '../data/courses';
import { COURSES } from '../data/courses';
import {
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle2,
  Lock,
  User,
  Hash,
  Sparkles,
  HelpCircle,
  FileText,
  TrendingUp,
  Code2,
  Check,
  Terminal,
  Activity,
  Grid,
  Network,
  Crown,
  QrCode,
  Flame,
  ShieldCheck,
  Globe,
  GitBranch,
  Cpu,
  Box
} from 'lucide-react';

interface HomePageProps {
  profile: StudentProfile;
  onUpdateName: (newName: string) => void;
  onNavigate: (page: string) => void;
  totalModules: number;
  activeCourseId: CourseId;
  onSelectCourse: (courseId: CourseId) => void;
  modules: ModuleData[];
  courseInfo: CourseInfo;
  onOpenPayment: (courseId?: CourseId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  profile,
  onUpdateName,
  onNavigate,
  totalModules,
  activeCourseId,
  onSelectCourse,
  modules = MODULES,
  courseInfo,
  onOpenPayment
}) => {
  const [editingName, setEditingName] = useState<string>(profile.name);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    setEditingName(profile.name);
  }, [profile.name]);

  const activeProgress = getCourseProgress(profile, activeCourseId);
  const passedCount = activeProgress.passedModules.length;
  const progressPercent = Math.round((passedCount / totalModules) * 100);
  const isAllPassed = passedCount === totalModules;

  const allCourseIds: CourseId[] = [
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

  const getCourseIcon = (id: CourseId) => {
    switch (id) {
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
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getCardStyle = (id: CourseId, isSelected: boolean) => {
    switch (id) {
      case 'dasar_pemrograman':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-emerald-600 shadow-md ring-4 ring-emerald-50 dark:ring-emerald-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400',
          badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800',
          activePill: 'bg-emerald-600',
          linkHover: 'hover:text-emerald-600 dark:hover:text-emerald-400',
          progressText: 'text-emerald-600 dark:text-emerald-400',
          btnActive: 'bg-emerald-600 text-white hover:bg-emerald-700'
        };
      case 'algoritma_pemrograman':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-amber-500 shadow-md ring-4 ring-amber-50 dark:ring-amber-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400',
          badgeBg: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800',
          activePill: 'bg-amber-600',
          linkHover: 'hover:text-amber-600 dark:hover:text-amber-400',
          progressText: 'text-amber-600 dark:text-amber-400',
          btnActive: 'bg-amber-600 text-white hover:bg-amber-700'
        };
      case 'kalkulus':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-rose-600 shadow-md ring-4 ring-rose-50 dark:ring-rose-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400',
          badgeBg: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200/60 dark:border-rose-800',
          activePill: 'bg-rose-600',
          linkHover: 'hover:text-rose-600 dark:hover:text-rose-400',
          progressText: 'text-rose-600 dark:text-rose-400',
          btnActive: 'bg-rose-600 text-white hover:bg-rose-700'
        };
      case 'aljabar_linier':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-cyan-600 shadow-md ring-4 ring-cyan-50 dark:ring-cyan-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-cyan-50 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400',
          badgeBg: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800',
          activePill: 'bg-cyan-600',
          linkHover: 'hover:text-cyan-600 dark:hover:text-cyan-400',
          progressText: 'text-cyan-600 dark:text-cyan-400',
          btnActive: 'bg-cyan-600 text-white hover:bg-cyan-700'
        };
      case 'matematika_diskrit':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-violet-600 shadow-md ring-4 ring-violet-50 dark:ring-violet-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-violet-50 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400',
          badgeBg: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200/60 dark:border-violet-800',
          activePill: 'bg-violet-600',
          linkHover: 'hover:text-violet-600 dark:hover:text-violet-400',
          progressText: 'text-violet-600 dark:text-violet-400',
          btnActive: 'bg-violet-600 text-white hover:bg-violet-700'
        };
      case 'web_framework':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-teal-600 shadow-md ring-4 ring-teal-50 dark:ring-teal-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-teal-50 dark:bg-teal-950/70 text-teal-600 dark:text-teal-400',
          badgeBg: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-800',
          activePill: 'bg-teal-600',
          linkHover: 'hover:text-teal-600 dark:hover:text-teal-400',
          progressText: 'text-teal-600 dark:text-teal-400',
          btnActive: 'bg-teal-600 text-white hover:bg-teal-700'
        };
      case 'rekayasa_perangkat_lunak':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-blue-600 shadow-md ring-4 ring-blue-50 dark:ring-blue-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400',
          badgeBg: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800',
          activePill: 'bg-blue-600',
          linkHover: 'hover:text-blue-600 dark:hover:text-blue-400',
          progressText: 'text-blue-600 dark:text-blue-400',
          btnActive: 'bg-blue-600 text-white hover:bg-blue-700'
        };
      case 'sistem_operasi':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-amber-600 shadow-md ring-4 ring-amber-50 dark:ring-amber-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400',
          badgeBg: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800',
          activePill: 'bg-amber-600',
          linkHover: 'hover:text-amber-600 dark:hover:text-amber-400',
          progressText: 'text-amber-600 dark:text-amber-400',
          btnActive: 'bg-amber-600 text-white hover:bg-amber-700'
        };
      case 'pemrograman_berorientasi_objek':
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-purple-600 shadow-md ring-4 ring-purple-50 dark:ring-purple-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400',
          badgeBg: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800',
          activePill: 'bg-purple-600',
          linkHover: 'hover:text-purple-600 dark:hover:text-purple-400',
          progressText: 'text-purple-600 dark:text-purple-400',
          btnActive: 'bg-purple-600 text-white hover:bg-purple-700'
        };
      default:
        return {
          cardBorder: isSelected
            ? 'bg-white dark:bg-slate-900 border-indigo-600 shadow-md ring-4 ring-indigo-50 dark:ring-indigo-950/40'
            : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm',
          iconBg: 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400',
          badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800',
          activePill: 'bg-indigo-600',
          linkHover: 'hover:text-indigo-600 dark:hover:text-indigo-400',
          progressText: 'text-indigo-600 dark:text-indigo-400',
          btnActive: 'bg-indigo-600 text-white hover:bg-indigo-700'
        };
    }
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = editingName.trim();
    if (!trimmed) return;

    if (trimmed === profile.name.trim()) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
      return;
    }

    const hasAnyProgress = Object.values(profile.courses || {}).some(
      (cp) => cp.passedModules.length > 0 || cp.completedMaterials.length > 0
    );

    if (hasAnyProgress) {
      const confirmed = window.confirm(
        `Perhatian: Mengganti nama menjadi "${trimmed}" akan mereset seluruh pencapaian/kelulusan di semua (${allCourseIds.length}) kursus dan membuat ID Peserta baru yang berbeda.\n\nApakah Anda yakin ingin mengganti nama dan mereset progres?`
      );
      if (!confirmed) {
        setEditingName(profile.name);
        return;
      }
    }

    onUpdateName(trimmed);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-200/60 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5" /> Platform Belajar Komputer & Matematika Mandiri
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pondasi Komputasi & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400">
            Matematika Algoritmik Presisi
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Pilih jalur pembelajaran yang Anda butuhkan. Setiap kursus dirancang dengan 5 modul silabus berurutan, 100 soal kuis evaluasi mendalam, buku rumus referensi cepat, dan sertifikat resmi kompetensi.
        </p>
      </section>

      {/* Monetization / All-Access Saweria QRIS Banner */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-indigo-500/30 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-amber-500/10 dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-amber-950/30 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-300 dark:border-amber-700">
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Akses Premium • QRIS Otomatis Saweria</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Buka Semua Kursus (10 Bidang Studi) Hanya Rp 50.000
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dapatkan akses permanen ke materi lengkap, 100 soal kuis evaluasi, cheatsheet, dan sertifikat resmi tanpa batas. 
              Tersedia juga opsi buka satuan seharga <strong>Rp 10.000 / kursus</strong>. Kursus <strong>Algoritma & Pemrograman</strong> tetap 100% GRATIS untuk semua peserta!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            {profile.isAllAccess ? (
              <div className="px-5 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
                <Crown className="w-4 h-4 text-amber-300" />
                <span>Status: All-Access Aktif (Semua Kursus Terbuka)</span>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenPayment()}
                  className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <QrCode className="w-4 h-4" />
                  <span>Buka Semua Akses (Rp 50.000)</span>
                </button>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>QRIS Nasional Terverifikasi</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Course Switcher Selection Section (Clean 6-Course Grid) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
              Pilihan Kursus Pembelajaran
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              Pilih Bidang Studi Aktif Anda
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Klik kartu di bawah untuk beralih kursus
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allCourseIds.map((cId) => {
            const info = COURSES[cId];
            const cProgress = getCourseProgress(profile, cId);
            const isSelected = activeCourseId === cId;
            const style = getCardStyle(cId, isSelected);
            const unlocked = isCourseUnlocked(profile, cId);
            const isFreeCourse = cId === 'algoritma_pemrograman';

            return (
              <div
                key={cId}
                onClick={() => {
                  if (unlocked) {
                    onSelectCourse(cId);
                  } else {
                    onOpenPayment(cId);
                  }
                }}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all flex flex-col justify-between relative overflow-hidden ${style.cardBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.iconBg}`}>
                        {getCourseIcon(cId)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${style.badgeBg}`}>
                          {info.badge}
                        </span>
                        {isFreeCourse ? (
                          <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 w-fit">
                            GRATIS
                          </span>
                        ) : unlocked ? (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 flex items-center gap-0.5 w-fit">
                            <Check className="w-2.5 h-2.5" /> Terbuka
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700 flex items-center gap-0.5 w-fit">
                            <Lock className="w-2.5 h-2.5" /> Rp 10.000
                          </span>
                        )}
                      </div>
                    </div>

                    {isSelected ? (
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-xs font-semibold shadow-sm ${style.activePill}`}>
                        <Check className="w-3.5 h-3.5" /> Sedang Dipelajari
                      </span>
                    ) : unlocked ? (
                      <span className={`text-xs font-semibold text-slate-400 ${style.linkHover}`}>
                        Beralih ke Kursus Ini →
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                        <Lock className="w-3.5 h-3.5" /> Butuh Akses
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span>{info.title}</span>
                    {!unlocked && <Lock className="w-4 h-4 text-amber-500 inline-block flex-shrink-0" />}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {info.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span>📚 5 Modul Silabus</span>
                    <span>•</span>
                    <span>🎯 100 Soal Kuis</span>
                    <span>•</span>
                    <span>📜 Sertifikat Resmi</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Progres: <strong className={`font-mono ${style.progressText}`}>{cProgress.passedModules.length}/5 Lulus</strong>
                  </div>
                  {unlocked ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCourse(cId);
                        onNavigate('materi');
                      }}
                      className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                        isSelected
                          ? `${style.btnActive} shadow-sm`
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>Buka Materi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPayment(cId);
                      }}
                      className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all bg-amber-500 hover:bg-amber-600 active:scale-95 text-white shadow-sm"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Buka (Rp 10.000)</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student Identity & Active Course Progress Widget */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Student Name Input */}
          <div className="w-full md:w-auto flex-1">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
              Profil Peserta Belajar
            </span>
            <form onSubmit={handleSaveName} className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  placeholder="Ketik Nama Anda..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                {isSaved ? 'Tersimpan ✓' : 'Simpan Nama'}
              </button>
            </form>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Hash className="w-3.5 h-3.5 text-indigo-500" />
                ID Otomatis: <strong className="text-slate-800 dark:text-slate-200">{profile.studentId}</strong>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-sans font-medium">
                ⚠️ Mengganti nama akan mereset pencapaian di seluruh kursus & ID otomatis berganti baru.
              </span>
            </div>
          </div>

          {/* Right: Progress Tracker for Active Course */}
          <div className="w-full md:w-80 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-slate-600 dark:text-slate-300 truncate max-w-[150px]">
                Progres {courseInfo.shortTitle}
              </span>
              <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                {passedCount} / {totalModules} Modul ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  activeCourseId === 'algoritma_pemrograman'
                    ? 'bg-amber-500'
                    : activeCourseId === 'dasar_pemrograman'
                    ? 'bg-emerald-600'
                    : 'bg-indigo-600'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-400 block mt-2">
              {isAllPassed ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sertifikat {courseInfo.shortTitle} siap dicetak!
                </span>
              ) : (
                `Selesaikan ${totalModules - passedCount} kuis lagi untuk membuka sertifikat kursus ini.`
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Feature Navigation Cards Grid */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Navigasi Halaman Pembelajaran ({courseInfo.title})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Materi */}
          <div
            onClick={() => onNavigate('materi')}
            className="group cursor-pointer p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 rounded-2xl shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
                Materi Belajar
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                5 modul komprehensif terstruktur khusus untuk {courseInfo.shortTitle}.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 gap-1">
              <span>Buka Materi</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Kuis */}
          <div
            onClick={() => onNavigate('kuis')}
            className="group cursor-pointer p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600 rounded-2xl shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 transition-colors">
                Kuis Evaluasi (100 Soal)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                20 soal per modul dengan pembahasan lengkap. ({passedCount}/5 Kuis Lulus).
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-amber-600 dark:text-amber-400 gap-1">
              <span>Mulai Kuis ({passedCount}/5 Lulus)</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Cheatsheet */}
          <div
            onClick={() => onNavigate('cheatsheet')}
            className="group cursor-pointer p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-600 rounded-2xl shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 transition-colors">
                Buku Rumus & Cheatsheet
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Referensi cepat rumus, tabel, dan konsep kunci {courseInfo.shortTitle}.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-semibold text-sky-600 dark:text-sky-400 gap-1">
              <span>Buka Cheatsheet</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Sertifikat */}
          <div
            onClick={() => onNavigate('sertifikat')}
            className={`group cursor-pointer p-6 bg-white dark:bg-slate-900 border rounded-2xl shadow-sm transition-all flex flex-col justify-between ${
              isAllPassed
                ? 'border-emerald-300 dark:border-emerald-700 hover:border-emerald-500'
                : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div>
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${
                  isAllPassed
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}
              >
                {isAllPassed ? <Award className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                <span>Sertifikat</span>
                {!isAllPassed && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                    Terkunci
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {isAllPassed
                  ? `Selamat! 5 modul ${courseInfo.shortTitle} tuntas dan sertifikat resmi siap dicetak.`
                  : `Luluskan seluruh 5 kuis modul ${courseInfo.shortTitle} untuk membuka sertifikat.`}
              </p>
            </div>
            <div
              className={`mt-6 flex items-center text-xs font-semibold gap-1 ${
                isAllPassed
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-400'
              }`}
            >
              <span>{isAllPassed ? 'Cetak Sertifikat' : 'Lihat Syarat Cetak'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap Overview for Active Course */}
      <section className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
            Silabus Berurutan • {courseInfo.title}
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            5 Tahap Penguasaan Materi
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Modul disusun berurutan. Selesaikan materi untuk membuka kuis, dan luluskan kuis untuk membuka modul berikutnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {modules.map((mod, idx) => {
            const isPassed = activeProgress.passedModules.includes(mod.id);
            const unlocked = isMaterialUnlocked(mod.id, modules, activeProgress.passedModules);
            return (
              <div
                key={mod.id}
                onClick={() => {
                  if (unlocked) onNavigate('materi');
                }}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  !unlocked
                    ? 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800/60 opacity-60 cursor-not-allowed'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 cursor-pointer'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center justify-center text-slate-700 dark:text-slate-300">
                      {idx + 1}
                    </span>
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : !unlocked ? (
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {mod.shortDesc}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-semibold mt-3 block ${
                    !unlocked
                      ? 'text-slate-400'
                      : 'text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  {!unlocked ? 'Terkunci' : `${mod.sections.length} Materi Pembelajaran`}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
