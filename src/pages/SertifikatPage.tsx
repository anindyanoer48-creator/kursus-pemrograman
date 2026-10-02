import React, { useState, useEffect } from 'react';
import type { StudentProfile, CourseProgress } from '../data/student';
import { getCourseProgress } from '../data/student';
import type { ModuleData } from '../data/curriculum';
import { MODULES } from '../data/curriculum';
import type { CourseInfo, CourseId } from '../data/courses';
import { COURSES } from '../data/courses';
import {
  Award,
  Lock,
  Printer,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SertifikatPageProps {
  profile: StudentProfile;
  onUpdateName: (name: string) => void;
  onNavigate: (page: string) => void;
  totalModules: number;
  modules?: ModuleData[];
  courseInfo?: CourseInfo;
  activeCourseId?: CourseId;
  courseProgress?: CourseProgress;
}

export const SertifikatPage: React.FC<SertifikatPageProps> = ({
  profile,
  onUpdateName,
  onNavigate,
  totalModules,
  modules = MODULES,
  courseInfo = COURSES.kompleksitas,
  activeCourseId = 'kompleksitas',
  courseProgress
}) => {
  const [editingName, setEditingName] = useState<string>(profile.name);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    setEditingName(profile.name);
  }, [profile.name]);

  const currentProgress =
    courseProgress || getCourseProgress(profile, activeCourseId);
  const moduleList = modules && modules.length > 0 ? modules : MODULES;
  const passedCount = currentProgress.passedModules.length;
  const isAllPassed = passedCount === moduleList.length;

  const courseCredentials: Record<CourseId, { en: string; id: string; prefix: string }> = {
    kompleksitas: {
      en: 'Algorithm Complexity Examiner',
      id: 'Dewan Penguji Kompleksitas Algoritma',
      prefix: 'CERT-ALG-2026'
    },
    dasar_pemrograman: {
      en: 'Foundations of Programming Examiner',
      id: 'Dewan Penguji Dasar Pemrograman',
      prefix: 'CERT-PRG-2026'
    },
    algoritma_pemrograman: {
      en: 'Algorithms & Coding Fundamentals Examiner',
      id: 'Dewan Penguji Algoritma & Pemrograman',
      prefix: 'CERT-ALP-2026'
    },
    kalkulus: {
      en: 'Computational Calculus Examiner',
      id: 'Dewan Penguji Kalkulus Komputasional',
      prefix: 'CERT-CALC-2026'
    },
    aljabar_linier: {
      en: 'Linear Algebra & Matrices Examiner',
      id: 'Dewan Penguji Aljabar Linier',
      prefix: 'CERT-ALIN-2026'
    },
    matematika_diskrit: {
      en: 'Discrete Mathematics Structure Examiner',
      id: 'Dewan Penguji Matematika Diskrit',
      prefix: 'CERT-MDIS-2026'
    },
    web_framework: {
      en: 'Modern Web Frameworks Examiner',
      id: 'Dewan Penguji Pemrograman Web Framework',
      prefix: 'CERT-PWF-2026'
    },
    rekayasa_perangkat_lunak: {
      en: 'Software Engineering & Architecture Examiner',
      id: 'Dewan Penguji Rekayasa Perangkat Lunak',
      prefix: 'CERT-RPL-2026'
    },
    sistem_operasi: {
      en: 'Operating Systems & Concurrency Examiner',
      id: 'Dewan Penguji Sistem Operasi',
      prefix: 'CERT-OS-2026'
    },
    pemrograman_berorientasi_objek: {
      en: 'Object-Oriented Programming Examiner',
      id: 'Dewan Penguji Pemrograman Berorientasi Objek',
      prefix: 'CERT-OOP-2026'
    }
  };

  const cred = courseCredentials[activeCourseId] || courseCredentials.kompleksitas;
  const certificateCode = `${cred.prefix}-${profile.studentId.replace(/\D/g, '').slice(-4) || '8892'}-PASS`;

  const handlePrint = () => {
    if (!isAllPassed) return;
    window.print();
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

    const confirmed = window.confirm(
      `Perhatian: Mengganti nama peserta menjadi "${trimmed}" akan mereset seluruh pencapaian/kelulusan modul dan membuat ID baru (sertifikat akan terkunci kembali hingga modul dituntaskan).\n\nApakah Anda yakin ingin mengganti nama dan mereset progres?`
    );
    if (!confirmed) {
      setEditingName(profile.name);
      return;
    }

    onUpdateName(trimmed);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Page Title & Status Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5" /> Sertifikat Kompetensi Digital • {courseInfo.shortTitle}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {courseInfo.certificateTitle}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {courseInfo.tagline}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {isAllPassed ? (
            <>
              <button
                onClick={triggerConfetti}
                className="p-2 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-xl transition-colors border border-amber-200 dark:border-amber-800"
                title="Rayakan!"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4" /> Cetak / Simpan PDF
              </button>
            </>
          ) : (
            <button
              disabled
              className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-xl text-xs font-semibold cursor-not-allowed flex items-center gap-2"
              title="Luluskan semua kuis terlebih dahulu untuk mencetak"
            >
              <Lock className="w-4 h-4" /> Cetak Terkunci
            </button>
          )}
        </div>
      </div>

      {/* Lock Warning Notice if not all completed */}
      {!isAllPassed && (
        <div className="p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-400 rounded-xl flex-shrink-0 mt-0.5">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                Sertifikat Belum Dapat Dicetak
              </h3>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5 leading-relaxed">
                Anda baru menyelesaikan <strong>{passedCount} dari {totalModules} modul</strong>. Selesaikan sisa {totalModules - passedCount} kuis modul untuk membuka sertifikat resmi Anda.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('kuis')}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Buka Halaman Kuis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Student Name Editor before Printing */}
      <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-auto">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
            Nama Peserta pada Sertifikat
          </span>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium block">
            ⚠️ Mengubah nama akan mereset kelulusan modul & ID Peserta otomatis berganti baru.
          </span>
        </div>

        <form onSubmit={handleSaveName} className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-64"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold transition-colors flex-shrink-0"
          >
            {isSaved ? 'Tersimpan ✓' : 'Update'}
          </button>
        </form>
      </div>

      {/* Printable Certificate Canvas */}
      <div className="relative">
        {/* Subtle blur overlay if locked */}
        {!isAllPassed && (
          <div className="absolute inset-0 z-10 bg-slate-900/40 backdrop-blur-[2px] rounded-3xl flex flex-col items-center justify-center p-6 text-center print:hidden">
            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-md w-full space-y-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/80 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Sertifikat Masih Terkunci
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Harus lulus seluruh {totalModules} kuis modul untuk membuka dan mencetak sertifikat resmi ini.
                </p>
              </div>

              {/* Checklist */}
              <div className="text-left space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                {moduleList.map((m, idx) => {
                  const passed = currentProgress.passedModules.includes(m.id);
                  return (
                    <div key={m.id} className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-400">
                        {idx + 1}. {m.title}
                      </span>
                      {passed ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Lulus
                        </span>
                      ) : (
                        <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                          <XCircle className="w-3.5 h-3.5" /> Belum
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => onNavigate('kuis')}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Kerjakan Kuis Sekarang
              </button>
            </div>
          </div>
        )}

        {/* Certificate Paper */}
        <div
          id="printable-certificate"
          className="w-full bg-white dark:bg-slate-900 border-8 border-double border-indigo-200 dark:border-indigo-900/60 p-8 sm:p-12 rounded-3xl shadow-lg relative text-center print:shadow-none print:border-indigo-600 print:bg-white print:text-slate-900"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-indigo-400" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-indigo-400" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-indigo-400" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-indigo-400" />

          {/* Top Badge */}
          <div className="inline-flex p-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-full mb-3">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            {courseInfo.certificateTitle}
          </h2>
          <p className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
            {courseInfo.tagline}
          </p>

          <div className="my-6">
            <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
              Diberikan dengan hormat kepada:
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white border-b-2 border-indigo-300 dark:border-indigo-700 pb-1 max-w-md mx-auto">
              {profile.name}
            </h3>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mt-2">
              <span>ID Peserta: <strong>{profile.studentId}</strong></span>
              <span>•</span>
              <span>Kredensial: <strong>{certificateCode}</strong></span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Telah menyelesaikan seluruh kurikulum pembelajaran kursus <strong>{courseInfo.title}</strong> secara tuntas: {courseInfo.description}
          </p>

          {/* Pillars of Knowledge / Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px]">
            {courseInfo.certificateCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium flex items-center justify-center gap-1.5 text-center"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="line-clamp-2">{comp}</span>
              </div>
            ))}
          </div>

          {/* Signatures & Verification Footer */}
          <div className="flex justify-between items-end text-xs text-slate-500 dark:text-slate-400 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-left space-y-0.5">
              <span className="block font-semibold text-slate-700 dark:text-slate-300">
                Tanggal Terbit:
              </span>
              <span>{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="block text-[10px] text-slate-400 font-mono">
                Status Verifikasi: {isAllPassed ? 'RESMI LULUS 100%' : 'TERTUNDA'}
              </span>
            </div>

            <div className="text-right">
              <div className="font-serif italic text-slate-700 dark:text-slate-300 text-sm mb-1">
                {cred.en}
              </div>
              <div className="w-40 h-0.5 bg-slate-300 dark:bg-slate-700 ml-auto" />
              <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-semibold">
                {cred.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
