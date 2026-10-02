import React, { useState, useEffect } from 'react';
import type { CourseId } from '../data/courses';
import { COURSES, PRICE_SINGLE_COURSE, PRICE_ALL_COURSES } from '../data/courses';
import type { StudentProfile } from '../data/student';
import { unlockSingleCourse, unlockAllCourses } from '../data/student';
import {
  generateOfficialSaweriaQris,
  checkDonationStatus,
  SAWERIA_USERNAME,
  SAWERIA_URL,
  type SaweriaQrisResponse
} from '../utils/saweria';
import {
  X,
  ShieldCheck,
  QrCode,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  Flame,
  Lock,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCourseId: CourseId;
  profile: StudentProfile;
  onUnlockSuccess: (updatedProfile: StudentProfile, courseId: CourseId, isAll: boolean) => void;
  onUpdateSaweriaUsername?: (username: string) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  targetCourseId,
  profile,
  onUnlockSuccess
}) => {
  // Plan mode: 'single' (Rp 10.000) | 'all' (Rp 50.000)
  const [planMode, setPlanMode] = useState<'single' | 'all'>('single');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [copiedNote, setCopiedNote] = useState<boolean>(false);

  // Dynamic QRIS State from Saweria Backend
  const [isLoadingQris, setIsLoadingQris] = useState<boolean>(true);
  const [qrisData, setQrisData] = useState<SaweriaQrisResponse | null>(null);
  const [qrisError, setQrisError] = useState<string | null>(null);
  const [showQrisDetail, setShowQrisDetail] = useState<boolean>(false);

  const targetCourse = COURSES[targetCourseId] || COURSES.kompleksitas;
  const baseNominal = planMode === 'all' ? PRICE_ALL_COURSES : PRICE_SINGLE_COURSE;

  const paymentNote =
    planMode === 'all'
      ? `Akses Semua Kursus - ${profile.studentId} - ${profile.name}`
      : `Beli Kursus ${targetCourse.shortTitle} - ${profile.studentId} - ${profile.name}`;

  // Fetch or regenerate official dynamic QRIS with locked amount from Saweria
  const loadDynamicQris = async (nominal: number) => {
    setIsLoadingQris(true);
    setQrisError(null);
    try {
      const result = await generateOfficialSaweriaQris(
        nominal,
        profile.name,
        paymentNote
      );
      setQrisData(result);
    } catch (err) {
      console.error('Failed to generate Saweria dynamic QRIS:', err);
      setQrisError('Gagal memuat QRIS otomatis. Klik muat ulang.');
    } finally {
      setIsLoadingQris(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsVerifying(false);
      setIsSuccess(false);
      setCopiedNote(false);
      loadDynamicQris(baseNominal);
    }
  }, [isOpen, planMode]);

  // Periodic polling for payment completion if QR is active
  useEffect(() => {
    if (!isOpen || !qrisData?.id || isSuccess) return;

    const interval = setInterval(async () => {
      const isPaid = await checkDonationStatus(qrisData.id);
      if (isPaid && !isSuccess) {
        handleConfirmUnlock();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isOpen, qrisData?.id, isSuccess]);

  if (!isOpen) return null;

  const displayAmount = qrisData?.amount || baseNominal;
  const formattedNominal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(displayAmount);

  const handleCopyNote = () => {
    navigator.clipboard.writeText(paymentNote);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2000);
  };

  const handleConfirmUnlock = () => {
    setIsVerifying(false);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      let updated: StudentProfile;
      if (planMode === 'all') {
        updated = unlockAllCourses(profile);
        onUnlockSuccess(updated, targetCourseId, true);
      } else {
        updated = unlockSingleCourse(profile, targetCourseId);
        onUnlockSuccess(updated, targetCourseId, false);
      }
      onClose();
    }, 1600);
  };

  const handleManualCheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      handleConfirmUnlock();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        {/* Top Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-indigo-600 to-emerald-600 h-2.5 w-full" />

        <div className="p-6 sm:p-7 space-y-5">
          {/* Header Title & Close Button */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold border border-emerald-200 dark:border-emerald-800 mb-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>QRIS Dinamis • Nominal Terkunci Otomatis</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Beli Akses Kursus
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Scan barcode langsung dengan m-Banking/E-Wallet. Harga otomatis terkunci pas.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Plan Selector: 1 Kursus (Rp 10.000) vs Semua Kursus (Rp 50.000) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Single Course */}
            <div
              onClick={() => setPlanMode('single')}
              className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between ${
                planMode === 'single'
                  ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block">1 Kursus</span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  {targetCourse.shortTitle}
                </h3>
              </div>
              <div className="mt-2">
                <div className="text-base font-black text-indigo-600 dark:text-indigo-400">
                  Rp 10.000
                </div>
                <span className="text-[9px] text-slate-400">Akses Penuh Permanen</span>
              </div>
            </div>

            {/* All Courses (All-Access Bundle) */}
            <div
              onClick={() => setPlanMode('all')}
              className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between relative overflow-hidden ${
                planMode === 'all'
                  ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 ring-2 ring-amber-500/20 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-bl-lg flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5 fill-white" /> HEMAT 10K
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase block">
                  Paket Lengkap
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Semua 6 Kursus
                </h3>
              </div>
              <div className="mt-2">
                <div className="text-base font-black text-amber-600 dark:text-amber-400">
                  Rp 50.000
                </div>
                <span className="text-[9px] text-slate-400">Hemat Rp 10.000</span>
              </div>
            </div>
          </div>

          {/* Genuine Dynamic QRIS Container */}
          <div className="bg-slate-50 dark:bg-slate-950/70 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
            {/* National QRIS Header */}
            <div className="flex items-center justify-between w-full max-w-xs pb-2.5 border-b border-slate-200 dark:border-slate-800 mb-3">
              <div className="flex items-center gap-1.5">
                <QrCode className="w-5 h-5 text-rose-600" />
                <span className="font-black tracking-tight text-xs text-slate-900 dark:text-white">
                  QRIS STANDAR PEMBAYARAN NASIONAL
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                GPN
              </span>
            </div>

            {/* QR Code Barcode Area */}
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 relative group flex items-center justify-center min-h-[220px] min-w-[220px]">
              {isLoadingQris ? (
                <div className="flex flex-col items-center justify-center p-6 space-y-2 text-slate-400">
                  <RefreshCw className="w-8 h-8 animate-spin text-indigo-600" />
                  <span className="text-xs font-semibold">Menghubungkan ke Saweria & Mengunci Nominal...</span>
                </div>
              ) : qrisError ? (
                <div className="flex flex-col items-center justify-center p-4 space-y-2 text-rose-600 text-xs text-center">
                  <span>{qrisError}</span>
                  <button
                    onClick={() => loadDynamicQris(baseNominal)}
                    className="px-3 py-1 bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 rounded-lg text-xs font-bold"
                  >
                    Coba Lagi
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={qrisData?.qrImageUrl}
                    alt="QRIS Dinamis Saweria Resmi"
                    className="w-52 h-52 sm:w-56 sm:h-56 object-contain rounded-lg"
                  />
                  <div className="absolute inset-x-0 bottom-0.5 flex justify-center">
                    <span className="text-[8px] font-mono font-bold text-slate-500 bg-white/95 px-2 py-0.5 rounded shadow-xs">
                      BCA • Mandiri • GoPay • Dana • ShopeePay
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Price & Locked Amount Guarantee Banner */}
            <div className="mt-3.5 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>Nominal Pas Terkunci Otomatis di HP:</span>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {formattedNominal}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-tight">
                Saat barcode di atas di-scan, nominal {formattedNominal} langsung terkunci otomatis di aplikasi bank Anda (tidak bisa bayar kurang).
              </p>
            </div>

            {/* Merchant Destination Info */}
            <div className="w-full max-w-sm mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 text-[11px]">
                <span>Tujuan Akun Saweria:</span>
                <a
                  href={SAWERIA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  saweria.co/{SAWERIA_USERNAME} <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Copyable Payment Note */}
              <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800 gap-2">
                <div className="truncate flex-1 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 block text-[9px] font-sans">Catatan Transaksi:</span>
                  {paymentNote}
                </div>
                <button
                  onClick={handleCopyNote}
                  className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-[10px] flex items-center gap-1 flex-shrink-0"
                >
                  {copiedNote ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" /> Disalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Salin
                    </>
                  )}
                </button>
              </div>

              {/* Refresh QR button */}
              <div className="flex items-center justify-between pt-1 text-[11px]">
                <button
                  onClick={() => setShowQrisDetail(!showQrisDetail)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 text-[10px]"
                >
                  <HelpCircle className="w-3 h-3" /> Detail Merchant QRIS
                </button>
                <button
                  onClick={() => loadDynamicQris(baseNominal)}
                  disabled={isLoadingQris}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-[10px] font-semibold"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingQris ? 'animate-spin' : ''}`} /> Muat Ulang QR
                </button>
              </div>

              {showQrisDetail && (
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-[10px] text-slate-500 dark:text-slate-400 space-y-1">
                  <div>Merchant: PT Harta Tahta Sukaria (Saweria)</div>
                  <div>NMID: ID2025378199850</div>
                  <div>Penerima: {SAWERIA_USERNAME}</div>
                  <div>Sistem: QRIS Dinamis Bank Indonesia (Xendit)</div>
                </div>
              )}
            </div>
          </div>

          {/* Action Confirmation Buttons */}
          <div className="space-y-2 pt-1">
            {isSuccess ? (
              <div className="w-full py-3.5 bg-emerald-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg animate-fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span>Pembayaran Berhasil! Membuka Pelajaran...</span>
              </div>
            ) : (
              <>
                <button
                  onClick={handleManualCheck}
                  disabled={isVerifying || isLoadingQris}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-75"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Memverifikasi Pembayaran...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Saya Sudah Bayar (Buka Akses Sekarang)</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href={SAWERIA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1"
                  >
                    <span>Buka Web Saweria HasyhiRama</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    Batal
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Guarantee Footer */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Akses permanen seumur hidup • Tanpa biaya langganan bulanan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
