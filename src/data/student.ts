import type { CourseId } from './courses';

export interface CourseProgress {
  passedModules: string[];
  completedMaterials: string[];
  quizScores: Record<string, number>;
  certificateIssued: boolean;
  completedAt?: string;
}

export interface StudentProfile {
  name: string;
  studentId: string;
  activeCourseId: CourseId;
  courses: Record<CourseId, CourseProgress>;
  unlockedCourses: CourseId[];
  isAllAccess: boolean;
  saweriaUsername: string;
  // Backwards compatibility properties (mirrors active course)
  passedModules: string[];
  completedMaterials: string[];
  quizScores: Record<string, number>;
  certificateIssued: boolean;
  completedAt?: string;
}

const STORAGE_KEY = 'algo_student_profile';

export const generateUniqueStudentId = (): string => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const randomChars = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `ID-${randomNum}-${randomChars}`;
};

export const defaultCourseProgress = (): CourseProgress => ({
  passedModules: [],
  completedMaterials: [],
  quizScores: {},
  certificateIssued: false
});

export const getCourseProgress = (
  profile: StudentProfile,
  courseId: CourseId
): CourseProgress => {
  if (profile.courses && profile.courses[courseId]) {
    return profile.courses[courseId];
  }
  return defaultCourseProgress();
};

export const getStudentProfile = (): StudentProfile => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);

      const courses: Record<CourseId, CourseProgress> = {
        kompleksitas: parsed.courses?.kompleksitas || {
          passedModules: parsed.passedModules || [],
          completedMaterials: parsed.completedMaterials || [],
          quizScores: parsed.quizScores || {},
          certificateIssued: parsed.certificateIssued || false,
          completedAt: parsed.completedAt
        },
        dasar_pemrograman:
          parsed.courses?.dasar_pemrograman || defaultCourseProgress(),
        algoritma_pemrograman:
          parsed.courses?.algoritma_pemrograman || defaultCourseProgress(),
        kalkulus: parsed.courses?.kalkulus || defaultCourseProgress(),
        aljabar_linier: parsed.courses?.aljabar_linier || defaultCourseProgress(),
        matematika_diskrit: parsed.courses?.matematika_diskrit || defaultCourseProgress(),
        web_framework: parsed.courses?.web_framework || defaultCourseProgress(),
        rekayasa_perangkat_lunak:
          parsed.courses?.rekayasa_perangkat_lunak || defaultCourseProgress(),
        sistem_operasi: parsed.courses?.sistem_operasi || defaultCourseProgress(),
        pemrograman_berorientasi_objek:
          parsed.courses?.pemrograman_berorientasi_objek || defaultCourseProgress()
      };

      const validCourseIds: CourseId[] = [
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
      const activeCourseId: CourseId = validCourseIds.includes(parsed.activeCourseId)
        ? parsed.activeCourseId
        : 'algoritma_pemrograman'; // Default to free course

      const currentProgress = courses[activeCourseId] || defaultCourseProgress();

      // Only algoritma_pemrograman is free by default per user command
      const defaultUnlocked: CourseId[] = ['algoritma_pemrograman'];

      // Sanitize stored unlocked courses: if not all-access, strip the 4 review courses that were auto-unlocked temporarily
      let existingUnlocked: CourseId[] = defaultUnlocked;
      if (Array.isArray(parsed.unlockedCourses)) {
        if (parsed.isAllAccess) {
          existingUnlocked = parsed.unlockedCourses;
        } else {
          // Remove temporary auto-unlocked courses from previous review step
          const tempReviewCourses: CourseId[] = [
            'web_framework',
            'rekayasa_perangkat_lunak',
            'sistem_operasi',
            'pemrograman_berorientasi_objek'
          ];
          const filtered = parsed.unlockedCourses.filter(
            (c: CourseId) => !tempReviewCourses.includes(c)
          );
          existingUnlocked = Array.from(new Set([...filtered, ...defaultUnlocked]));
        }
      }

      const rawSaweria = parsed.saweriaUsername;
      const saweriaUsername =
        !rawSaweria || rawSaweria === 'algoritma' ? 'HasyhiRama' : rawSaweria;

      return {
        name: parsed.name || 'Pelajar Mandiri',
        studentId: parsed.studentId || generateUniqueStudentId(),
        activeCourseId,
        courses,
        unlockedCourses: existingUnlocked,
        isAllAccess: Boolean(parsed.isAllAccess),
        saweriaUsername,
        passedModules: currentProgress.passedModules || [],
        completedMaterials: currentProgress.completedMaterials || [],
        quizScores: currentProgress.quizScores || {},
        certificateIssued: currentProgress.certificateIssued || false,
        completedAt: currentProgress.completedAt
      };
    }
  } catch (e) {
    console.error(e);
  }

  // Generate new default profile with automatic unique ID
  const newProfile: StudentProfile = {
    name: 'Pelajar Mandiri',
    studentId: generateUniqueStudentId(),
    activeCourseId: 'algoritma_pemrograman', // Free course by default
    courses: {
      kompleksitas: defaultCourseProgress(),
      dasar_pemrograman: defaultCourseProgress(),
      algoritma_pemrograman: defaultCourseProgress(),
      kalkulus: defaultCourseProgress(),
      aljabar_linier: defaultCourseProgress(),
      matematika_diskrit: defaultCourseProgress(),
      web_framework: defaultCourseProgress(),
      rekayasa_perangkat_lunak: defaultCourseProgress(),
      sistem_operasi: defaultCourseProgress(),
      pemrograman_berorientasi_objek: defaultCourseProgress()
    },
    unlockedCourses: ['algoritma_pemrograman'], // ONLY algoritma_pemrograman is free
    isAllAccess: false,
    saweriaUsername: 'HasyhiRama',
    passedModules: [],
    completedMaterials: [],
    quizScores: {},
    certificateIssued: false
  };

  saveStudentProfile(newProfile);
  return newProfile;
};

export const saveStudentProfile = (profile: StudentProfile) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error(e);
  }
};

/**
 * Check whether a course is unlocked (Free or Purchased)
 */
export const isCourseUnlocked = (
  profile: StudentProfile,
  courseId: CourseId
): boolean => {
  // ONLY algoritma_pemrograman is free without payment:
  if (courseId === 'algoritma_pemrograman') {
    return true;
  }
  if (profile.isAllAccess) return true; // All-access bundle purchased
  return profile.unlockedCourses?.includes(courseId) ?? false;
};

/**
 * Unlock a single course after successful payment
 */
export const unlockSingleCourse = (
  profile: StudentProfile,
  courseId: CourseId
): StudentProfile => {
  const existing = profile.unlockedCourses || ['algoritma_pemrograman'];
  const updatedList = Array.from(new Set([...existing, courseId]));
  const updated: StudentProfile = {
    ...profile,
    unlockedCourses: updatedList
  };
  saveStudentProfile(updated);
  return updated;
};

/**
 * Unlock all courses after all-access bundle payment (Rp 50.000)
 */
export const unlockAllCourses = (profile: StudentProfile): StudentProfile => {
  const all: CourseId[] = [
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
  const updated: StudentProfile = {
    ...profile,
    isAllAccess: true,
    unlockedCourses: all
  };
  saveStudentProfile(updated);
  return updated;
};

/**
 * Update configured Saweria account username
 */
export const updateSaweriaUsername = (
  profile: StudentProfile,
  username: string
): StudentProfile => {
  const clean = username.trim().replace(/^https?:\/\/(www\.)?saweria\.co\//i, '').replace(/[^a-zA-Z0-9_-]/g, '');
  const updated: StudentProfile = {
    ...profile,
    saweriaUsername: clean || 'HasyhiRama'
  };
  saveStudentProfile(updated);
  return updated;
};

/**
 * Resets student profile achievements across all courses and generates a fresh unique ID when name is changed
 * NOTE: Preserves purchased courses (unlockedCourses & isAllAccess) so payments are never lost!
 */
export const resetStudentWithNewName = (
  newName: string,
  activeCourseId: CourseId = 'algoritma_pemrograman'
): StudentProfile => {
  // Preserve purchase history
  const current = getStudentProfile();

  const newProfile: StudentProfile = {
    name: newName,
    studentId: generateUniqueStudentId(),
    activeCourseId,
    courses: {
      kompleksitas: defaultCourseProgress(),
      dasar_pemrograman: defaultCourseProgress(),
      algoritma_pemrograman: defaultCourseProgress(),
      kalkulus: defaultCourseProgress(),
      aljabar_linier: defaultCourseProgress(),
      matematika_diskrit: defaultCourseProgress(),
      web_framework: defaultCourseProgress(),
      rekayasa_perangkat_lunak: defaultCourseProgress(),
      sistem_operasi: defaultCourseProgress(),
      pemrograman_berorientasi_objek: defaultCourseProgress()
    },
    unlockedCourses: current.unlockedCourses || ['algoritma_pemrograman'],
    isAllAccess: current.isAllAccess || false,
    saweriaUsername: current.saweriaUsername || 'HasyhiRama',
    passedModules: [],
    completedMaterials: [],
    quizScores: {},
    certificateIssued: false
  };

  saveStudentProfile(newProfile);
  return newProfile;
};

/**
 * Sequential unlock rule:
 * - Module 1 (index 0) Material is ALWAYS unlocked.
 * - Module i Material is unlocked only if Module (i - 1) Quiz is passed.
 */
export const isMaterialUnlocked = (
  moduleId: string,
  modules: { id: string }[],
  passedModules: string[] = []
): boolean => {
  const index = modules.findIndex((m) => m.id === moduleId);
  if (index <= 0) return true;
  const prevModuleId = modules[index - 1].id;
  return passedModules.includes(prevModuleId);
};

/**
 * Sequential unlock rule:
 * - Quiz i is unlocked only if Module i Material is unlocked AND
 *   user has completed studying Module i Material (or already passed Quiz i).
 */
export const isQuizUnlocked = (
  moduleId: string,
  modules: { id: string }[],
  completedMaterials: string[] = [],
  passedModules: string[] = []
): boolean => {
  const index = modules.findIndex((m) => m.id === moduleId);
  if (index < 0) return false;
  if (!isMaterialUnlocked(moduleId, modules, passedModules)) {
    return false;
  }
  return (
    (completedMaterials && completedMaterials.includes(moduleId)) ||
    (passedModules && passedModules.includes(moduleId))
  );
};
