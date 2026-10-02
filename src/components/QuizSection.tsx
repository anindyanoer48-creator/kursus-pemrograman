import React, { useState } from 'react';
import type { QuizQuestion } from '../data/curriculum';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizSectionProps {
  moduleId: string;
  moduleTitle: string;
  questions: QuizQuestion[];
  isPassed: boolean;
  onPassQuiz: (moduleId: string) => void;
  className?: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  moduleId,
  moduleTitle,
  questions,
  isPassed,
  onPassQuiz,
  className = 'mt-12'
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Reset answer states whenever the user switches to a different module
  React.useEffect(() => {
    setSelectedAnswers({});
    setSubmitted(false);
  }, [moduleId]);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const passingThreshold = Math.ceil(questions.length * 0.65);

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    const passed = score >= passingThreshold;
    if (passed) {
      onPassQuiz(moduleId);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 }
      });
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const answeredCount = Object.keys(selectedAnswers).length;
  const allAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);
  const passed = score >= passingThreshold;

  return (
    <div className={`${className} bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-mono font-medium text-xs rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5" /> UJI KOMPETENSI MANDIRI (20 SOAL)
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Kuis Evaluasi: {moduleTitle}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Jawab {questions.length} soal analisis mendalam. Minimal {passingThreshold} jawaban benar ({Math.round(passingThreshold / questions.length * 100)}%) untuk dinyatakan lulus.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-medium">Progres Menjawab</span>
            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
              {answeredCount} / {questions.length} Soal
            </span>
          </div>

          {isPassed && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs rounded-full">
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" /> Modul Lulus
            </div>
          )}
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-5">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80'
                    : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800/80'
                  : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
              }`}
            >
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3.5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  {qIndex + 1}
                </span>
                <span className="whitespace-pre-line leading-relaxed">{q.question}</span>
              </h4>

              <div className="space-y-2 pl-9">
                {q.options.map((opt, optIdx) => {
                  let optStyle =
                    'bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200';

                  if (userAnswer === optIdx) {
                    optStyle =
                      'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-500 dark:border-indigo-500 text-indigo-900 dark:text-indigo-200 font-semibold ring-1 ring-indigo-500';
                  }

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      optStyle =
                        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 dark:border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    } else if (userAnswer === optIdx && !isCorrect) {
                      optStyle =
                        'bg-rose-50 dark:bg-rose-950/50 border-rose-400 dark:border-rose-600 text-rose-800 dark:text-rose-300 line-through opacity-80';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      disabled={submitted}
                      className={`w-full text-left p-3 rounded-lg text-xs leading-relaxed transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 stroke-[2.5] flex-shrink-0 ml-2" />
                      )}
                      {submitted && userAnswer === optIdx && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-500 stroke-[2.5] flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation upon submit */}
              {submitted && (
                <div className="mt-4 pl-9 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs">
                  <span className="font-mono font-semibold uppercase text-slate-600 dark:text-slate-400 block mb-1">
                    [PEMBAHASAN ILMIAH]:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/90 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Bar */}
      <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {submitted ? (
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                passed
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
              }`}
            >
              Skor: {score} / {questions.length} ({passed ? 'Lulus 🎉' : 'Belum Memenuhi Kriteria'})
            </span>

            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Ulangi Kuis
            </button>
          </div>
        ) : (
          <span className="text-xs text-slate-500 dark:text-slate-400">
            * Pilih jawaban untuk setiap soal sebelum menekan tombol kirim.
          </span>
        )}

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              allAnswered
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow active:scale-[0.99]'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            }`}
          >
            Kirim & Evaluasi Jawaban
          </button>
        )}
      </div>
    </div>
  );
};
