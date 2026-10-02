import React, { useMemo } from 'react';
import katex from 'katex';

interface MathProps {
  math: string;
  className?: string;
}

export const MathInline: React.FC<MathProps> = ({ math, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math]);

  return (
    <span
      className={`inline-math text-indigo-700 dark:text-indigo-300 font-semibold px-1 rounded ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const MathBlock: React.FC<MathProps> = ({ math, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: true,
        throwOnError: false,
      });
    } catch {
      return math;
    }
  }, [math]);

  return (
    <div
      className={`my-3 p-3 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl overflow-x-auto text-center shadow-inner ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
