import React, { useState, useMemo } from 'react';
import { MathBlock, MathInline } from './Math';
import { Calculator, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface Preset {
  name: string;
  a: number;
  b: number;
  d: number;
  k: number;
  fDesc: string;
  notes: string;
}

const PRESETS: Preset[] = [
  {
    name: 'Merge Sort',
    a: 2,
    b: 2,
    d: 1,
    k: 0,
    fDesc: 'n',
    notes: 'T(n) = 2T(n/2) + n. Membagi array jadi 2 dan merge memakan waktu linear.'
  },
  {
    name: 'Binary Search',
    a: 1,
    b: 2,
    d: 0,
    k: 0,
    fDesc: '1',
    notes: 'T(n) = T(n/2) + 1. Memeriksa nilai tengah dalam waktu konstan O(1).'
  },
  {
    name: 'Strassen Matriks',
    a: 7,
    b: 2,
    d: 2,
    k: 0,
    fDesc: 'n²',
    notes: 'T(n) = 7T(n/2) + O(n²). Perkalian matriks cepat dengan 7 sub-perkalian.'
  },
  {
    name: 'Karatsuba Perkalian',
    a: 3,
    b: 2,
    d: 1,
    k: 0,
    fDesc: 'n',
    notes: 'T(n) = 3T(n/2) + O(n). Perkalian integer cepat.'
  },
  {
    name: 'Kasus 1 Standar',
    a: 8,
    b: 2,
    d: 2,
    k: 0,
    fDesc: 'n²',
    notes: 'T(n) = 8T(n/2) + 1000n². Pekerjaan di tingkat daun mendominasi.'
  },
  {
    name: 'Kasus 3 Standar',
    a: 3,
    b: 4,
    d: 2,
    k: 0,
    fDesc: 'n²',
    notes: 'T(n) = 3T(n/4) + n². Pekerjaan di akar mendominasi.'
  }
];

export const InteractiveMasterTheorem: React.FC = () => {
  const [a, setA] = useState<number>(2);
  const [b, setB] = useState<number>(2);
  const [d, setD] = useState<number>(1);
  const [k, setK] = useState<number>(0);

  const applyPreset = (preset: Preset) => {
    setA(preset.a);
    setB(preset.b);
    setD(preset.d);
    setK(preset.k);
  };

  const solution = useMemo(() => {
    if (a < 1 || b <= 1) {
      return {
        valid: false,
        error: 'Syarat Teorema Master tidak terpenuhi: nilai a harus >= 1 dan b harus > 1.'
      };
    }

    const logba = Math.log(a) / Math.log(b);
    const epsilon = 0.0001;
    const diff = d - logba;

    let caseNum = 0;
    let complexityStr = '';
    let explanation = '';
    let formulaLaTeX = '';

    const logbaDisplay = Number.isInteger(logba)
      ? logba.toString()
      : logba.toFixed(3);

    if (Math.abs(diff) < epsilon) {
      // Kasus 2: d == log_b(a)
      caseNum = 2;
      const kPlusOne = k + 1;
      let logPart = '';
      if (kPlusOne === 1) {
        logPart = '\\log n';
      } else if (kPlusOne > 1) {
        logPart = `\\log^{${kPlusOne}} n`;
      }

      if (d === 0) {
        complexityStr = `\\Theta(${logPart})`;
      } else if (d === 1) {
        complexityStr = `\\Theta(n ${logPart})`;
      } else {
        complexityStr = `\\Theta(n^{${logbaDisplay}} ${logPart})`;
      }

      explanation = `Karena nilai d (${d}) sama dengan log_b(a) (${logbaDisplay}), beban kerja terbagi rata di setiap kedalaman pohon rekursi. Berdasarkan Kasus 2 Teorema Master, kita mengalikan dengan log(n).`;
      formulaLaTeX = `T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n) = ${complexityStr}`;
    } else if (diff < -epsilon) {
      // Kasus 1: d < log_b(a) -> f(n) = O(n^(log_b(a) - ε))
      caseNum = 1;
      if (logbaDisplay === '0') {
        complexityStr = `\\Theta(1)`;
      } else if (logbaDisplay === '1') {
        complexityStr = `\\Theta(n)`;
      } else {
        complexityStr = `\\Theta(n^{\\log_{${b}} ${a}}) \\approx \\Theta(n^{${logbaDisplay}})`;
      }

      explanation = `Karena d (${d}) < log_b(a) (${logbaDisplay}), total pekerjaan pada tingkat daun pohon rekursi jauh mendominasi pekerjaan di akar. Berdasarkan Kasus 1, efisiensi ditentukan oleh n^(log_b a).`;
      formulaLaTeX = `T(n) = \\Theta(n^{\\log_b a}) = ${complexityStr}`;
    } else {
      // Kasus 3: d > log_b(a) -> f(n) = Ω(n^(log_b(a) + ε))
      caseNum = 3;
      let fTerm = '';
      if (d === 0) fTerm = '1';
      else if (d === 1) fTerm = 'n';
      else fTerm = `n^{${d}}`;

      if (k === 1) fTerm += ' \\log n';
      else if (k > 1) fTerm += ` \\log^{${k}} n`;

      complexityStr = `\\Theta(${fTerm})`;
      explanation = `Karena d (${d}) > log_b(a) (${logbaDisplay}), pekerjaan membagi dan menggabungkan di akar jauh mendominasi daun rekursi. Kondisi regularitas terpenuhi karena f(n) adalah polinomial, sehingga berlaku Kasus 3.`;
      formulaLaTeX = `T(n) = \\Theta(f(n)) = ${complexityStr}`;
    }

    return {
      valid: true,
      logba,
      logbaDisplay,
      caseNum,
      complexityStr,
      explanation,
      formulaLaTeX
    };
  }, [a, b, d, k]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 rounded-full font-mono font-medium text-xs mb-2">
            <Calculator className="w-3.5 h-3.5" /> LAB MASTER THEOREM SOLVER
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Kalkulator Otomatis Teorema Master
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pecahkan relasi divide-and-conquer <MathInline math="T(n) = a T(n/b) + f(n)" /> seketika dengan pembuktian matematis formal.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase mr-1">PRESET:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors shadow-sm"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Input Parameters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
          <label className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 mb-1.5">
            Cabang Rekursif (<MathInline math="a" />)
          </label>
          <input
            type="number"
            min={1}
            max={64}
            value={a}
            onChange={(e) => setA(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-sm font-semibold rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
          />
          <span className="text-[10px] text-slate-500 mt-1 block">
            Jumlah sub-masalah (<MathInline math="a \ge 1" />)
          </span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
          <label className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 mb-1.5">
            Faktor Pembagi (<MathInline math="b" />)
          </label>
          <input
            type="number"
            min={2}
            max={16}
            value={b}
            onChange={(e) => setB(Math.max(2, parseInt(e.target.value) || 2))}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-sm font-semibold rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
          />
          <span className="text-[10px] text-slate-500 mt-1 block">
            Ukuran pecahan (<MathInline math="b > 1" />)
          </span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
          <label className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 mb-1.5">
            Derajat Polinomial (<MathInline math="d" />)
          </label>
          <input
            type="number"
            min={0}
            max={6}
            step={0.5}
            value={d}
            onChange={(e) => setD(Math.max(0, parseFloat(e.target.value) || 0))}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-sm font-semibold rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
          />
          <span className="text-[10px] text-slate-500 mt-1 block">
            Pangkat pada <MathInline math="n^d" />
          </span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
          <label className="block text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300 mb-1.5">
            Pangkat Log (<MathInline math="k" />)
          </label>
          <input
            type="number"
            min={0}
            max={3}
            value={k}
            onChange={(e) => setK(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-sm font-semibold rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm"
          />
          <span className="text-[10px] text-slate-500 mt-1 block">
            Pangkat pada <MathInline math="\log^k n" />
          </span>
        </div>
      </div>

      {/* Formula Preview Header */}
      <div className="mb-6 p-5 rounded-xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
            PERSAMAAN REKURSI DIUJI:
          </span>
          <MathInline
            math={`T(n) = ${a} T\\left(\\frac{n}{${b}}\\right) + \\Theta\\left(n^{${d}}${k > 0 ? ` \\log^{${k}} n` : ''}\\right)`}
            className="text-lg text-emerald-400 font-bold"
          />
        </div>

        {solution.valid && (
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              NILAI KRITIS (<MathInline math="\log_b a" className="text-slate-300 text-xs" />):
            </span>
            <span className="font-mono text-2xl font-bold text-amber-400">
              {solution.logbaDisplay}
            </span>
          </div>
        )}
      </div>

      {/* Solution Analysis Section */}
      {!solution.valid ? (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl flex items-center gap-3 text-rose-700 dark:text-rose-300">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-xs font-medium">{solution.error}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Result Card */}
          <div className="p-5 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-xl border border-indigo-200 dark:border-indigo-800/70 shadow-sm text-slate-900 dark:text-white">
            <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-indigo-900 dark:text-indigo-200">
              <span className="p-1 bg-indigo-600 text-white rounded">
                <Sparkles className="w-4 h-4" />
              </span>
              <span>Hasil Analisis: Kasus {solution.caseNum} Teorema Master</span>
            </div>

            <div className="my-2 p-3 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800/70 rounded-xl">
              <MathBlock math={solution.formulaLaTeX || ''} className="border-0 shadow-none bg-transparent my-0" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {solution.explanation}
            </p>
          </div>

          {/* Step-by-Step Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white">
              <div className="flex items-center gap-1.5 font-semibold text-[11px] mb-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                1. Pekerjaan di Daun (<MathInline math="n^{\log_b a}" className="text-xs" />)
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <MathInline math={`\\log_{${b}}(${a}) = ${solution.logbaDisplay}`} />. Menghasilkan <MathInline math={`n^{${solution.logbaDisplay}}`} /> daun.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white">
              <div className="flex items-center gap-1.5 font-semibold text-[11px] mb-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                2. Pekerjaan di Akar (<MathInline math="f(n)" className="text-xs" />)
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Biaya divide/combine: <MathInline math={`\\Theta(n^{${d}}${k > 0 ? ` \\log^{${k}} n` : ''})`} />.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white">
              <div className="flex items-center gap-1.5 font-semibold text-[11px] mb-1.5 text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                3. Relasi Dominasi
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {solution.caseNum === 1 && `d (${d}) < log_b a (${solution.logbaDisplay}) -> Daun mendominasi.`}
                {solution.caseNum === 2 && `d (${d}) == log_b a (${solution.logbaDisplay}) -> Beban terdistribusi rata.`}
                {solution.caseNum === 3 && `d (${d}) > log_b a (${solution.logbaDisplay}) -> Akar mendominasi.`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
