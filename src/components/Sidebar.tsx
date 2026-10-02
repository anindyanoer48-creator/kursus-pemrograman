import React from 'react';
import type { ModuleData } from '../data/curriculum';
import { MODULES } from '../data/curriculum';
import { isMaterialUnlocked } from '../data/student';
import {
  Compass,
  TrendingUp,
  Calculator,
  Repeat,
  GitFork,
  CheckCircle2,
  ChevronRight,
  Lock,
  Cpu,
  Split,
  Code2,
  Database,
  Terminal,
  Zap,
  Layers,
  Activity,
  Grid,
  Boxes,
  Network
} from 'lucide-react';

interface SidebarProps {
  currentModuleId: string;
  currentSectionId: string;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  passedModules: string[];
  modules?: ModuleData[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModuleId,
  currentSectionId,
  onSelectSection,
  passedModules,
  modules = MODULES
}) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  const currentMod = modules.find((m) => m.id === currentModuleId) || modules[0];
  const currentModIndex = modules.findIndex((m) => m.id === currentModuleId);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Repeat':
        return <Repeat className="w-4 h-4" />;
      case 'GitFork':
        return <GitFork className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Split':
        return <Split className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Grid':
        return <Grid className="w-4 h-4" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4" />;
      case 'Network':
        return <Network className="w-4 h-4" />;
      default:
        return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 lg:border-r lg:border-t-0 lg:border-l-0 lg:border-b-0 p-3 sm:p-4 overflow-y-auto max-h-[calc(100vh-4rem)] rounded-2xl lg:rounded-none shadow-xs lg:shadow-none">
      {/* Mobile Collapsible Header Banner */}
      <div className="lg:hidden flex items-center justify-between pb-1">
        <div className="flex items-center gap-2 min-w-0 pr-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
            {currentModIndex + 1}
          </span>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Silabus ({passedModules.length}/{modules.length} Lulus)
            </span>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
              {currentMod?.title}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="min-h-[40px] px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold flex items-center gap-1.5 flex-shrink-0 border border-indigo-200/60 dark:border-indigo-800 active:scale-95 transition-all"
        >
          <span>{isMobileOpen ? 'Tutup Silabus' : 'Pilih Modul'}</span>
          <span className="text-[10px]">{isMobileOpen ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
            Daftar Modul Belajar
          </span>
          <h2 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
            5 Tahap Silabus
          </h2>
        </div>
        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg">
          {passedModules.length}/{modules.length} Lulus
        </span>
      </div>

      {/* Modules List: Always visible on lg, toggled on mobile */}
      <div className={`space-y-2.5 mt-2 lg:mt-0 ${isMobileOpen ? 'block pt-2 border-t border-slate-100 dark:border-slate-800' : 'hidden lg:block'}`}>
        {modules.map((mod, modIdx) => {
          const isCurrentModule = mod.id === currentModuleId;
          const isPassed = passedModules.includes(mod.id);
          const unlocked = isMaterialUnlocked(mod.id, modules, passedModules);

          return (
            <div
              key={mod.id}
              className={`rounded-xl border transition-all ${
                !unlocked
                  ? 'border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40 opacity-70'
                  : isCurrentModule
                  ? 'border-indigo-300 dark:border-indigo-700 bg-indigo-50/20 dark:bg-indigo-950/20 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Module Header */}
              <div
                onClick={() => {
                  if (unlocked) {
                    onSelectSection(mod.id, mod.sections[0].id);
                  }
                }}
                className={`p-3 flex items-center justify-between gap-2 ${
                  unlocked ? 'cursor-pointer' : 'cursor-not-allowed select-none'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                      !unlocked
                        ? 'bg-slate-200/70 dark:bg-slate-800 text-slate-400'
                        : isPassed
                        ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400'
                        : isCurrentModule
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {!unlocked ? (
                      <Lock className="w-3.5 h-3.5" />
                    ) : isPassed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      getIcon(mod.iconName)
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className={`text-xs font-bold truncate ${
                        !unlocked
                          ? 'text-slate-400 dark:text-slate-500'
                          : isCurrentModule
                          ? 'text-indigo-600 dark:text-indigo-400'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {mod.title}
                    </h3>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                      {!unlocked
                        ? `Terkunci • Luluskan Kuis ${modIdx}`
                        : `${mod.sections.length} Materi • 1 Kuis`}
                    </span>
                  </div>
                </div>

                {unlocked ? (
                  <ChevronRight
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                      isCurrentModule ? 'rotate-90 text-indigo-500' : ''
                    }`}
                  >
                  </ChevronRight>
                ) : (
                  <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-500 flex-shrink-0">
                    Kunci
                  </span>
                )}
              </div>

              {/* Sub-sections list */}
              {isCurrentModule && (
                <div className="px-3 pb-3 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  {mod.sections.map((sec) => {
                    const isCurrentSection = sec.id === currentSectionId;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => {
                          onSelectSection(mod.id, sec.id);
                          setIsMobileOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs transition-colors flex items-center justify-between min-h-[38px] active:scale-[0.99] ${
                          isCurrentSection
                            ? 'bg-indigo-600 text-white font-semibold'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-1">{sec.title}</span>
                        <span
                          className={`text-[10px] flex-shrink-0 font-mono ${
                            isCurrentSection ? 'text-indigo-200' : 'text-slate-400'
                          }`}
                        >
                          {sec.readTime}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
