import React, { useState, useMemo } from 'react';
import { MathBlock, MathInline } from './Math';
import { GitFork, Layers, HelpCircle } from 'lucide-react';

interface RecursiveAlgorithmConfig {
  id: string;
  name: string;
  relation: string;
  complexity: string;
  defaultN: number;
  minN: number;
  maxN: number;
  stepN: number;
  description: string;
  generateTree: (n: number) => TreeNode;
  getLevelCosts: (n: number) => { level: number; costStr: string; subproblems: number }[];
  totalCostFormula: string;
}

interface TreeNode {
  id: string;
  label: string;
  subCost: string;
  children?: TreeNode[];
}

const RECURSIVE_ALGORITHMS: RecursiveAlgorithmConfig[] = [
  {
    id: 'merge-sort',
    name: 'Merge Sort',
    relation: 'T(n) = 2T(n/2) + cn',
    complexity: 'Θ(n log n)',
    defaultN: 8,
    minN: 2,
    maxN: 16,
    stepN: 2,
    description: 'Masalah dibagi 2 sama besar dengan biaya merge linear cn di setiap simpul.',
    totalCostFormula: 'T(n) = \\sum_{i=0}^{\\log_2 n} cn = cn(\\log_2 n + 1) = \\Theta(n \\log n)',
    getLevelCosts: (n: number) => {
      const levels = Math.floor(Math.log2(n)) + 1;
      const result = [];
      for (let i = 0; i < levels; i++) {
        const subproblems = Math.pow(2, i);
        const subSize = n / subproblems;
        result.push({
          level: i,
          costStr: `${subproblems} \\times c(${subSize}) = cn`,
          subproblems
        });
      }
      return result;
    },
    generateTree: (n: number) => {
      const build = (size: number, depth: number, prefix: string): TreeNode => {
        if (size <= 1) {
          return {
            id: prefix,
            label: `T(1)`,
            subCost: `c`
          };
        }
        return {
          id: prefix,
          label: `T(${size})`,
          subCost: `c(${size})`,
          children: [
            build(Math.floor(size / 2), depth + 1, `${prefix}-L`),
            build(Math.ceil(size / 2), depth + 1, `${prefix}-R`)
          ]
        };
      };
      return build(n, 0, 'root');
    }
  },
  {
    id: 'binary-search',
    name: 'Binary Search (Rekursif)',
    relation: 'T(n) = T(n/2) + 1',
    complexity: 'Θ(log n)',
    defaultN: 8,
    minN: 2,
    maxN: 16,
    stepN: 2,
    description: 'Hanya 1 cabang sub-masalah yang dieksekusi di setiap level dengan biaya perbandingan 1.',
    totalCostFormula: 'T(n) = \\sum_{i=0}^{\\log_2 n} 1 = \\log_2 n + 1 = \\Theta(\\log n)',
    getLevelCosts: (n: number) => {
      const levels = Math.floor(Math.log2(n)) + 1;
      const result = [];
      for (let i = 0; i < levels; i++) {
        result.push({
          level: i,
          costStr: `1 \\text{ perbandingan}`,
          subproblems: 1
        });
      }
      return result;
    },
    generateTree: (n: number) => {
      const build = (size: number, prefix: string): TreeNode => {
        if (size <= 1) {
          return {
            id: prefix,
            label: `T(1)`,
            subCost: `1`
          };
        }
        return {
          id: prefix,
          label: `T(${size})`,
          subCost: `1`,
          children: [build(Math.floor(size / 2), `${prefix}-next`)]
        };
      };
      return build(n, 'root');
    }
  },
  {
    id: 'hanoi',
    name: 'Menara Hanoi',
    relation: 'T(n) = 2T(n-1) + 1',
    complexity: 'Θ(2^n)',
    defaultN: 3,
    minN: 1,
    maxN: 4,
    stepN: 1,
    description: 'Setiap level memanggil 2 pemindahan sub-menara n-1 ditambah 1 langkah pindah.',
    totalCostFormula: 'T(n) = 2^n - 1 = \\Theta(2^n)',
    getLevelCosts: (n: number) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        const nodes = Math.pow(2, i);
        result.push({
          level: i,
          costStr: `${nodes} \\times 1 = 2^${i}`,
          subproblems: nodes
        });
      }
      return result;
    },
    generateTree: (n: number) => {
      const build = (val: number, prefix: string): TreeNode => {
        if (val <= 1) {
          return {
            id: prefix,
            label: `H(1)`,
            subCost: `1`
          };
        }
        return {
          id: prefix,
          label: `H(${val})`,
          subCost: `1`,
          children: [
            build(val - 1, `${prefix}-L`),
            build(val - 1, `${prefix}-R`)
          ]
        };
      };
      return build(n, 'root');
    }
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci Naif',
    relation: 'T(n) = T(n-1) + T(n-2) + 1',
    complexity: 'Θ(2^n)',
    defaultN: 4,
    minN: 1,
    maxN: 5,
    stepN: 1,
    description: 'Pohon rekursi meledak secara eksponensial karena tumpang tindih sub-masalah identik.',
    totalCostFormula: 'T(n) > 2^{n/2} \\implies \\Theta(1.618^n) \\approx O(2^n)',
    getLevelCosts: (n: number) => {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push({
          level: i,
          costStr: `\\approx 2^${i} \\text{ panggil}`,
          subproblems: Math.pow(2, i)
        });
      }
      return result;
    },
    generateTree: (n: number) => {
      const build = (val: number, prefix: string): TreeNode => {
        if (val <= 1) {
          return {
            id: prefix,
            label: `Fib(${val})`,
            subCost: `1`
          };
        }
        return {
          id: prefix,
          label: `Fib(${val})`,
          subCost: `1`,
          children: [
            build(val - 1, `${prefix}-L`),
            build(val - 2, `${prefix}-R`)
          ]
        };
      };
      return build(n, 'root');
    }
  }
];

// Minimalist SVG Node renderer
interface RenderNodeProps {
  node: TreeNode;
  x: number;
  y: number;
  width: number;
}

const RenderNode: React.FC<RenderNodeProps> = ({ node, x, y, width }) => {
  const childCount = node.children ? node.children.length : 0;
  const childY = y + 70;

  return (
    <g>
      {/* Edges to children */}
      {node.children &&
        node.children.map((child, idx) => {
          let childX = x;
          if (childCount === 1) {
            childX = x;
          } else {
            const spread = width / 2;
            childX = x - spread / 2 + idx * spread;
          }
          return (
            <g key={`edge-${child.id}`}>
              <line
                x1={x}
                y1={y + 18}
                x2={childX}
                y2={childY - 18}
                stroke="#cbd5e1"
                strokeWidth={1.5}
                className="dark:stroke-slate-700"
              />
              <RenderNode
                node={child}
                x={childX}
                y={childY}
                width={width / (childCount === 1 ? 1 : 2)}
              />
            </g>
          );
        })}

      {/* Node Box */}
      <rect
        x={x - 40}
        y={y - 18}
        width={80}
        height={36}
        rx={8}
        fill="#f8fafc"
        stroke="#6366f1"
        strokeWidth={1.5}
        className="dark:fill-slate-800 dark:stroke-indigo-400"
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fill="#312e81"
        fontSize="11"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
        className="dark:fill-indigo-200"
      >
        {node.label}
      </text>
    </g>
  );
};

export const InteractiveRecursionTree: React.FC = () => {
  const [selectedAlgoId, setSelectedAlgoId] = useState<string>('merge-sort');
  const [n, setN] = useState<number>(8);

  const currentAlgo = useMemo(() => {
    return RECURSIVE_ALGORITHMS.find((a) => a.id === selectedAlgoId) || RECURSIVE_ALGORITHMS[0];
  }, [selectedAlgoId]);

  const tree = useMemo(() => {
    return currentAlgo.generateTree(n);
  }, [currentAlgo, n]);

  const levelCosts = useMemo(() => {
    return currentAlgo.getLevelCosts(n);
  }, [currentAlgo, n]);

  const handleSelectAlgo = (algo: RecursiveAlgorithmConfig) => {
    setSelectedAlgoId(algo.id);
    setN(algo.defaultN);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 rounded-full font-mono font-medium text-xs mb-2">
            <GitFork className="w-3.5 h-3.5" /> VISUAL RECURSION TREE LAB
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Visualizer Pohon Rekursi Interaktif
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Lihat struktur pohon pemanggilan fungsi rekursif, hitung biaya tiap kedalaman (level), dan pahami bagaimana total beban diakumulasikan.
          </p>
        </div>
      </div>

      {/* Algorithm selector pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {RECURSIVE_ALGORITHMS.map((algo) => {
          const isSelected = selectedAlgoId === algo.id;
          return (
            <button
              key={algo.id}
              onClick={() => handleSelectAlgo(algo)}
              className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                  : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <span>{algo.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                  isSelected ? 'bg-purple-700 text-purple-100' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {algo.complexity}
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
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 rounded-md">
              n = {n}
            </span>
          </label>
          <span className="text-xs font-mono text-slate-500">
            Rentang aman: {currentAlgo.minN} s/d {currentAlgo.maxN}
          </span>
        </div>
        <input
          type="range"
          min={currentAlgo.minN}
          max={currentAlgo.maxN}
          step={currentAlgo.stepN}
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      {/* Formula & Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-5 rounded-xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold block mb-1">
              RELASI REKURENSI:
            </span>
            <MathInline math={currentAlgo.relation} className="text-xl text-purple-200 font-bold" />
          </div>
          <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-800">{currentAlgo.description}</p>
        </div>

        <div className="p-5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/60 shadow-sm flex flex-col justify-between text-slate-900 dark:text-white">
          <span className="text-[10px] font-mono uppercase font-semibold text-purple-700 dark:text-purple-300 block mb-2">
            PENJUMLAHAN TOTAL BEBAN BIAYA:
          </span>
          <div className="p-3 bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 rounded-xl">
            <MathBlock math={currentAlgo.totalCostFormula} className="border-0 shadow-none bg-transparent my-0" />
          </div>
        </div>
      </div>

      {/* SVG Canvas Tree Representation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 overflow-x-auto min-h-[320px] flex items-center justify-center shadow-sm">
          <svg width="600" height="300" viewBox="0 0 600 300" className="w-full h-auto">
            <RenderNode node={tree} x={300} y={35} width={420} />
          </svg>
        </div>

        {/* Level Breakdown Costs */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between text-slate-900 dark:text-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-purple-600" /> BIAYA TIAP LEVEL POHON
            </div>
            <div className="space-y-2">
              {levelCosts.map((lvl) => (
                <div
                  key={lvl.level}
                  className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/80 text-xs"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Level {lvl.level}
                    </span>
                    <span className="font-mono text-[11px] bg-white dark:bg-slate-800 px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300">
                      {lvl.subproblems} {lvl.subproblems > 1 ? 'nodes' : 'node'}
                    </span>
                  </div>
                  <MathInline math={lvl.costStr} className="text-xs text-slate-700 dark:text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <span>
              Tinggi pohon adalah <MathInline math="h = \log_b n" className="text-xs" />. Total biaya adalah jumlahan dari Level 0 hingga daun.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
