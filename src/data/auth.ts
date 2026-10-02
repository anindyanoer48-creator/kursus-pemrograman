export interface UserProfile {
  id: string;
  name: string;
  nim: string;
  email: string;
  institution: string;
  passedModules: string[];
  quizScores: Record<string, number>;
  certificateIssued: boolean;
  certificateId?: string;
  completedAt?: string;
}

const STORAGE_KEY_CURRENT_USER = 'brutalist_algo_current_user';
const STORAGE_KEY_ALL_USERS = 'brutalist_algo_all_users';

export const DEFAULT_USERS: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Anindita Pratama',
    nim: '2309106042',
    email: 'anindita@mhs.ac.id',
    institution: 'Fakultas Ilmu Komputer & Informatika',
    passedModules: ['fondasi', 'asimptotik'],
    quizScores: { fondasi: 3, asimptotik: 3 },
    certificateIssued: false
  },
  {
    id: 'user-2',
    name: 'Budi Santoso',
    nim: '2214020088',
    email: 'budi@student.ac.id',
    institution: 'Teknik Informatika Mandiri',
    passedModules: [],
    quizScores: {},
    certificateIssued: false
  }
];

export const getStoredUsers = (): UserProfile[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_USERS;
  }
};

export const saveUsers = (users: UserProfile[]) => {
  try {
    localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(users));
  } catch (e) {
    console.error('Failed to save users to localStorage', e);
  }
};

export const getCurrentUser = (): UserProfile | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (!raw) {
      // Default to first user so the experience is immediately ready, or return null for guest
      return DEFAULT_USERS[0];
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_USERS[0];
  }
};

export const setCurrentUser = (user: UserProfile | null) => {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
    }
  } catch (e) {
    console.error('Failed to set current user', e);
  }
};

export const generateCertificateId = (nim: string): string => {
  const cleanNim = nim.replace(/\D/g, '').slice(-4) || '9999';
  const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
  const year = new Date().getFullYear();
  return `CERT-ALG-${year}-${cleanNim}-${randomChars}`;
};
