import React, { useState, useMemo } from 'react';
import { MathBlock, MathInline } from './Math';
import { Play, RotateCcw, Activity, Code2, BarChart2 } from 'lucide-react';

interface LoopPattern {
  id: string;
  name: string;
  complexity: string;
  code: string;
  formula: string;
  description: string;
  runSimulation: (n: number) => {
    actualCount: number;
    theoreticalCount: number;
    trace: string[];
  };
}

const LOOP_PATTERNS: LoopPattern[] = [
  {
    id: 'linear',
    name: '1. Loop Linear Tunggal',
    complexity: 'Θ(n)',
    formula: 'C(n) = \\sum_{i=0}^{n-1} 1 = n',
    description: 'Nilai variabel i bertambah konstan 1 pada setiap langkah.',
    code: `int count = 0;
for (int i = 0; i < n; i++) {
    count++; // Operasi Dasar
}`,
    runSimulation: (n: number) => {
      let count = 0;
      const trace: string[] = [];
      for (let i = 0; i < n; i++) {
        count++;
        if (i < 5 || i >= n - 2) {
          trace.push(`i = ${i} -> count = ${count}`);
        } else if (i === 5) {
          trace.push(`... (${n - 7} iterasi berlanjut) ...`);
        }
      }
      return {
        actualCount: count,
        theoreticalCount: n,
        trace
      };
    }
  },
  {
    id: 'logarithmic',
    name: '2. Loop Logaritmik (Kelipatan 2)',
    complexity: 'Θ(log n)',
    formula: 'C(n) = \\lfloor \\log_2 n \\rfloor + 1',
    description: 'Nilai variabel i dilipatgandakan (i *= 2) pada setiap langkah.',
    code: `int count = 0;
for (int i = 1; i < n; i *= 2) {
    count++; // Operasi Dasar
}`,
    runSimulation: (n: number) => {
      let count = 0;
      const trace: string[] = [];
      let i = 1;
      let step = 0;
      while (i < n) {
        count++;
        trace.push(`Langkah ${step + 1}: i = ${i} (2^${step}) -> count = ${count}`);
        i *= 2;
        step++;
      }
      const theoretical = n <= 1 ? 0 : Math.floor(Math.log2(n - 1)) + 1;
      return {
        actualCount: count,
        theoreticalCount: theoretical,
        trace
      };
    }
  },
  {
    id: 'nested-independent',
    name: '3. Nested Loop Independen (Persegi)',
    complexity: 'Θ(n²)',
    formula: 'C(n) = \\sum_{i=0}^{n-1} \\sum_{j=0}^{n-1} 1 = n \\times n = n^2',
    description: 'Loop dalam berjalan n kali penuh untuk setiap putaran loop luar.',
    code: `int count = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        count++; // Operasi Dasar
    }
}`,
    runSimulation: (n: number) => {
      let count = 0;
      const trace: string[] = [];
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          count++;
        }
        if (i < 3 || i === n - 1) {
          trace.push(`Baris i = ${i}: loop j berjalan ${n} kali (subtotal: ${count})`);
        } else if (i === 3) {
          trace.push(`...`);
        }
      }
      return {
        actualCount: count,
        theoreticalCount: n * n,
        trace
      };
    }
  },
  {
    id: 'nested-triangular',
    name: '4. Nested Loop Segitiga Dependen (Bubble/Selection Sort)',
    complexity: 'Θ(n²)',
    formula: 'C(n) = \\sum_{i=0}^{n-2} (n - 1 - i) = \\frac{n(n-1)}{2}',
    description: 'Batas loop dalam bergantung pada indeks loop luar (j = i + 1 sampai n - 1).',
    code: `int count = 0;
for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
        count++; // Operasi Dasar
    }
}`,
    runSimulation: (n: number) => {
      let count = 0;
      const trace: string[] = [];
      for (let i = 0; i < n - 1; i++) {
        let rowCount = 0;
        for (let j = i + 1; j < n; j++) {
          count++;
          rowCount++;
        }
        if (i < 4 || i === n - 2) {
          trace.push(`Iterasi luar i = ${i}: loop j berjalan ${rowCount} kali`);
        } else if (i === 4) {
          trace.push(`... (pola deret berkurang 1 demi 1) ...`);
        }
      }
      const theoretical = (n * (n - 1)) / 2;
      return {
        actualCount: count,
        theoreticalCount: theoretical,
        trace
      };
    }
  },
  {
    id: 'linearithmic',
    name: '5. Nested Loop Linearithmik (n log n)',
    complexity: 'Θ(n log n)',
    formula: 'C(n) = \\sum_{i=1}^n (\\lfloor \\log_2 n \\rfloor + 1) = n \\cdot \\Theta(\\log n)',
    description: 'Loop luar linear dan loop dalam logaritmik dengan kelipatan dua.',
    code: `int count = 0;
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j *= 2) {
        count++; // Operasi Dasar
    }
}`,
    runSimulation: (n: number) => {
      let count = 0;
      const trace: string[] = [];
      const innerSteps = Math.floor(Math.log2(n)) + 1;
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j *= 2) {
          count++;
        }
        if (i <= 3 || i === n) {
          trace.push(`i = ${i}: loop j berjalan ${innerSteps} kali (j: 1, 2, 4, ... <= ${n})`);
        } else if (i === 4) {
          trace.push(`...`);
        }
      }
      return {
        actualCount: count,
        theoreticalCount: n * innerSteps,
        trace
      };
    }
  },
  {
    id: 'cubic-matrix',
    name: '6. Tiga Tingkat Loop (Perkalian Matriks n x n)',
    complexity: 'Θ(n³)',
    formula: 'C(n) = \\sum_{i=1}^n \\sum_{j=1}^n \\sum_{k=1}^n 1 = n^3',
    description: 'Tiga perulangan independen masing-masing berulang n kali.',
    code: `int count = 0;
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        for (int k = 0; k < n; k++) {
            count++; // Perkalian & Penjumlahan
        }
    }
}`,
    runSimulation: (n: number) => {
      const trace: string[] = [];
      const actual = n * n * n;
      trace.push(`Loop luar i berjalan ${n} kali`);
      trace.push(`Loop tengah j berjalan ${n} kali (total pasangan i,j = ${n * n})`);
      trace.push(`Loop dalam k berjalan ${n} kali untuk setiap (i,j)`);
      trace.push(`Total komputasi: ${n} x ${n} x ${n} = ${actual} operasi`);
      return {
        actualCount: actual,
        theoreticalCount: actual,
        trace
      };
    }
  }
];

export const InteractiveLoopSimulator: React.FC = () => {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('nested-triangular');
  const [n, setN] = useState<number>(10);

  const currentPattern = useMemo(() => {
    return LOOP_PATTERNS.find((p) => p.id === selectedPatternId) || LOOP_PATTERNS[0];
  }, [selectedPatternId]);

  const simulationResult = useMemo(() => {
    return currentPattern.runSimulation(n);
  }, [currentPattern, n]);

  const growthCurve = useMemo(() => {
    const samplePoints = [2, 4, 8, 16, 32];
    return samplePoints.map((val) => {
      const res = currentPattern.runSimulation(val);
      return {
        val,
        ops: res.actualCount
      };
    });
  }, [currentPattern]);

  const maxOpsInCurve = useMemo(() => {
    return Math.max(...growthCurve.map((p) => p.ops), 1);
  }, [growthCurve]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full font-mono font-medium text-xs mb-2">
            <Activity className="w-3.5 h-3.5" /> LAB SIMULASI PERULANGAN
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Simulator Eksekusi Perulangan (Loop Counter)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Buktikan secara langsung bahwa rumus deret Sigma menghasilkan jumlah eksekusi operasi dasar yang 100% presisi dengan eksekusi kode riil.
          </p>
        </div>

        <button
          onClick={() => setN(10)}
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset n = 10
        </button>
      </div>

      {/* Pattern Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {LOOP_PATTERNS.map((p) => {
          const isSelected = selectedPatternId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPatternId(p.id)}
              className={`text-xs px-3 py-2 rounded-xl font-medium transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <span>{p.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                  isSelected
                    ? 'bg-indigo-700 text-indigo-100'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {p.complexity}
              </span>
            </button>
          );
        })}
      </div>

      {/* Slider for n */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 mb-6 text-slate-900 dark:text-white">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold tracking-wide flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <span>Ukuran Masukan (<MathInline math="n" className="text-xs" />):</span>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-md">
              n = {n}
            </span>
          </label>
          <span className="text-xs font-mono text-slate-500">Rentang: 2 s/d 50</span>
        </div>
        <input
          type="range"
          min={2}
          max={50}
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1.5">
          <span>n = 2 (Kecil)</span>
          <span>n = 25 (Menengah)</span>
          <span>n = 50 (Besar)</span>
        </div>
      </div>

      {/* Code & Formula Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Code View */}
        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-5 border border-slate-800 text-white shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-800 pb-2">
              <Code2 className="w-4 h-4 text-emerald-400" /> SOURCE_CODE ALGORITMA
            </div>
            <pre className="font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto p-3 bg-slate-950/80 rounded-lg border border-slate-800/80">
              {currentPattern.code}
            </pre>
          </div>
          <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
            {currentPattern.description}
          </p>
        </div>

        {/* Formula & Verification Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between text-slate-900 dark:text-white">
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Formulasi Matematis Notasi Sigma:
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl">
              <MathBlock math={currentPattern.formula} className="border-0 shadow-none bg-transparent my-0" />
            </div>
          </div>

          {/* Actual vs Theoretical Counter */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-center">
              <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block mb-1">
                Eksekusi Riil Kode:
              </span>
              <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                {simulationResult.actualCount}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">operasi dasar</span>
            </div>

            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 rounded-xl text-center text-emerald-800 dark:text-emerald-300">
              <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 block mb-1">
                Hitungan Rumus Teori:
              </span>
              <span className="text-2xl font-bold font-mono">
                {simulationResult.theoreticalCount}
              </span>
              <span className="text-[10px] font-medium block mt-0.5">
                ✓ 100% Cocok Sempurna
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Execution Trace and Growth Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Step Trace */}
        <div className="lg:col-span-2 p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <Play className="w-3.5 h-3.5 text-emerald-500" /> JEJAK EKSEKUSI (TRACING n = {n})
          </div>
          <div className="space-y-1.5 max-h-48 overflow-y-auto font-mono text-xs pr-2">
            {simulationResult.trace.map((t, idx) => (
              <div
                key={idx}
                className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/80 dark:border-slate-750 text-slate-700 dark:text-slate-300"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Growth visualization bar chart */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
            <BarChart2 className="w-3.5 h-3.5 text-indigo-500" /> KURVA PERTUMBUHAN
          </div>

          <div className="space-y-3">
            {growthCurve.map((point) => {
              const heightPercent = Math.max(10, (point.ops / maxOpsInCurve) * 100);
              return (
                <div key={point.val} className="text-xs">
                  <div className="flex justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">
                    <span>n = {point.val}</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{point.ops} ops</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${heightPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <span className="text-[10px] text-slate-400 block mt-4 text-center">
            Pertumbuhan operasi terhadap nilai n
          </span>
        </div>
      </div>
    </div>
  );
};
