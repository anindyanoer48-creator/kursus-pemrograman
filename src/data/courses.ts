export type CourseId =
  | 'kompleksitas'
  | 'dasar_pemrograman'
  | 'algoritma_pemrograman'
  | 'kalkulus'
  | 'aljabar_linier'
  | 'matematika_diskrit'
  | 'web_framework'
  | 'rekayasa_perangkat_lunak'
  | 'sistem_operasi'
  | 'pemrograman_berorientasi_objek';

export interface CourseInfo {
  id: CourseId;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  accentColor: string;
  totalModules: number;
  totalQuestions: number;
  certificateTitle: string;
  certificateCompetencies: string[];
  isFree: boolean;
  price: number;
}

export const PRICE_SINGLE_COURSE = 10000;
export const PRICE_ALL_COURSES = 50000;
export const DEFAULT_SAWERIA_USERNAME = 'HasyhiRama';
export const DEFAULT_SAWERIA_URL = 'https://saweria.co/HasyhiRama';

export const COURSES: Record<CourseId, CourseInfo> = {
  kompleksitas: {
    id: 'kompleksitas',
    title: 'Kompleksitas Algoritma',
    shortTitle: 'Kompleksitas',
    tagline: 'Fondasi Asimptotik, Notasi Sigma, Algoritma Iteratif & Rekursif',
    description:
      'Pelajari cara mengukur efisiensi komputasi, notasi Big-O/Omega/Theta, manipulasi aljabar sigma, serta teknik matematis membedah loop iteratif dan relasi rekurensi.',
    badge: 'Analisis Algoritma',
    iconName: 'TrendingUp',
    accentColor: 'indigo',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Analisis Kompleksitas Algoritma',
    certificateCompetencies: [
      'Notasi Asimptotik Formal (Big-O, Big-Omega, Big-Theta)',
      'Manipulasi Aljabar Notasi Sigma (∑) & Deret Matematika',
      'Analisis Algoritma Iteratif (6 Langkah Levitin & Pola Loop)',
      'Penyelesaian Relasi Rekurensi (Substitusi Mundur & Teorema Master)',
      'Visualisasi Pohon Rekursi & Evaluasi Kompleksitas Ruang Call Stack'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  dasar_pemrograman: {
    id: 'dasar_pemrograman',
    title: 'Dasar Pemrograman',
    shortTitle: 'Dasar Pemrograman',
    tagline: 'Logika Komputasi, Struktur Kontrol, Fungsi & Struktur Data Dasar',
    description:
      'Kuasai fondasi utama ilmu komputer mulai dari representasi memori, variabel, operator, alur percabangan (if/switch), perulangan (for/while), modularitas fungsi, hingga array dan struct.',
    badge: 'Pemrograman Dasar',
    iconName: 'Code',
    accentColor: 'emerald',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Dasar Pemrograman Komputer',
    certificateCompetencies: [
      'Representasi Memori, Tipe Data Primitif, Overflow & Operator Precedence',
      'Struktur Kontrol Percabangan, Boolean Logic & Evaluasi Short-Circuit',
      'Struktur Perulangan (for, while, do-while) & Kontrol Eksekusi',
      'Modularitas Fungsi, Pass by Value vs Reference & Call Stack Scope',
      'Struktur Data Dasar (Array 1D/2D, String, Struct) & Algoritma Elementer'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  algoritma_pemrograman: {
    id: 'algoritma_pemrograman',
    title: 'Algoritma & Pemrograman',
    shortTitle: 'Alpro Pemula',
    tagline: 'Istilah Kunci, Pseudocode, Variabel, Logika AND/OR, if/else & while/do-while',
    description:
      'Kursus terpandu untuk pemula: memahami istilah penting (bug, sintaks, compiler), alur flowchart & pseudocode, deklarasi variabel, logika kondisi AND/OR & percabangan if/else, hingga loop while & do-while.',
    badge: 'Pemula & Fondasi',
    iconName: 'Terminal',
    accentColor: 'amber',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Fondasi Algoritma & Pemrograman',
    certificateCompetencies: [
      'Pemahaman Konseptual Istilah Pemrograman (Bug, Compiler, Sintaks & Semantik)',
      'Perancangan Logika Komputasi (Flowchart, Pseudocode & Alur Algoritma)',
      'Manajemen Variabel, Tipe Data Primitif & Operator Aritmatika Dasar',
      'Logika Boolean, Operator Relasional & Kondisi Majemuk (AND, OR, NOT)',
      'Struktur Kontrol Percabangan (if/else) & Perulangan Logis (while, do-while)'
    ],
    isFree: true,
    price: 0
  },
  kalkulus: {
    id: 'kalkulus',
    title: 'Kalkulus Komputasional',
    shortTitle: 'Kalkulus',
    tagline: 'Limit Asimptotik, Diferensial, Aturan L\'Hôpital, Integral & Gradient Descent',
    description:
      'Kalkulus esensial untuk ilmu komputer: menganalisis limit rasio pertumbuhan algoritma, teknik diferensiasi dan optimasi fungsi ekstremum, estimasi integral deret, hingga deret Taylor dan algoritma Gradient Descent.',
    badge: 'Matematika Komputasi',
    iconName: 'Activity',
    accentColor: 'rose',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Kalkulus Komputasional',
    certificateCompetencies: [
      'Limit Fungsi, Asimptot & Evaluasi Orde Pertumbuhan Algoritma',
      'Turunan, Aturan Rantai (Chain Rule) & Laju Perubahan Sesaat',
      'Aturan L\'Hôpital & Optimasi Fungsi Biaya / Titik Ekstremum',
      'Integral Tentu, Teorema Dasar Kalkulus & Pembatasan Jumlah Deret',
      'Deret Taylor, Aproksimasi Polinomial & Vektor Gradien (Gradient Descent)'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  aljabar_linier: {
    id: 'aljabar_linier',
    title: 'Aljabar Linier & Matriks',
    shortTitle: 'Aljabar Linier',
    tagline: 'Vektor di R^n, Matriks & SPL, Determinan, Ruang Vektor & Nilai Eigen',
    description:
      'Fondasi matematika untuk grafik komputer, kecerdasan buatan, dan optimasi data: operasi vektor & dot product, eliminasi Gauss-Jordan, determinan, ruang kolom dan baris, hingga dekomposisi nilai eigen.',
    badge: 'Aljabar Linier',
    iconName: 'Grid',
    accentColor: 'cyan',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Aljabar Linier & Matriks',
    certificateCompetencies: [
      'Aljabar Vektor, Norm (L1/L2), Dot Product & Cosine Similarity',
      'Operasi Matriks, Sistem Persamaan Linier & Eliminasi Gauss-Jordan',
      'Determinan, Matriks Invers, Adjoint & Aturan Cramer',
      'Ruang Vektor, Kebebasan Linier, Basis, Dimensi & Rank-Nullity Theorem',
      'Transformasi Linier, Nilai Eigen, Vektor Eigen & Diagonalisasi Matriks'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  matematika_diskrit: {
    id: 'matematika_diskrit',
    title: 'Matematika Diskrit',
    shortTitle: 'Matematika Diskrit',
    tagline: 'Logika Formal, Himpunan, Kombinatorika, Relasi Rekurensi & Teori Graf',
    description:
      'Bahasa resmi ilmu komputer: penalaran logika proposisi & predikat, metode pembuktian induksi matematika, teori himpunan & relasi biner, prinsip sarang merpati, relasi rekurensi, hingga struktur graf dan pohon.',
    badge: 'Struktur Diskrit',
    iconName: 'Network',
    accentColor: 'violet',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Matematika Diskrit',
    certificateCompetencies: [
      'Logika Proposisi & Predikat, Kuantor & Metode Pembuktian (Induksi Matematika)',
      'Teori Himpunan, Relasi Biner, Relasi Ekuivalensi & Fungsi Bijektif',
      'Kombinatorika (Permutasi/Kombinasi), Inklusi-Eksklusi & Pigeonhole Principle',
      'Pemodelan & Penyelesaian Relasi Rekurensi Homogen/Non-Homogen',
      'Teori Graf (Lintasan Euler/Hamilton, Matriks Adjacency) & Struktur Pohon (Tree)'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  web_framework: {
    id: 'web_framework',
    title: 'Pemrograman Web Berbasis Framework',
    shortTitle: 'Web Framework',
    tagline: 'Arsitektur Komponen, State Reaktif, Client Routing, API Caching & Rendering SSR/SSG',
    description:
      'Kuasai rekayasa frontend web modern: Virtual DOM & diffing heuristik, paradigma deklaratif UI = f(state), manajemen status lokal & global terisolasi, integrasi REST API dengan pembatalan AbortController, hingga strategi rendering SSR/SSG/ISR dan optimasi Core Web Vitals.',
    badge: 'Web Modern',
    iconName: 'Globe',
    accentColor: 'teal',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Pemrograman Web Berbasis Framework',
    certificateCompetencies: [
      'Fondasi Arsitektur Web Modern, DOM, Virtual DOM & Paradigma Reaktif O(n)',
      'Desain Komponen, Aliran Data Searah (Unidirectional Flow) & Immutability State',
      'Client-Side Routing (HTML5 History API) & Manajemen Global State (Redux/Zustand)',
      'Konsumsi Asynchronous API, Penanganan Race Condition & Optimistic UI Updates',
      'Strategi Rendering (CSR, SSR, SSG, ISR), Hidrasi VDOM & Optimasi Core Web Vitals'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  rekayasa_perangkat_lunak: {
    id: 'rekayasa_perangkat_lunak',
    title: 'Rekayasa Perangkat Lunak',
    shortTitle: 'Rekayasa Software',
    tagline: 'SDLC, Agile & Scrum, Pemodelan UML, Prinsip SOLID, Pengujian & Arsitektur DevOps',
    description:
      'Disiplin formal rekayasa sistem perangkat lunak industri: siklus hidup proses (Waterfall, V-Model, Spiral, Scrum), pemodelan visual UML lengkap, penerapan 5 prinsip desain SOLID & pola desain GoF, metodologi pengujian TDD, hingga orkestrasi microservices dan pipeline CI/CD.',
    badge: 'Software Engineering',
    iconName: 'GitBranch',
    accentColor: 'blue',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Rekayasa Perangkat Lunak',
    certificateCompetencies: [
      'Model Proses Rekayasa SDLC, Agile Manifesto, Kerangka Kerja Scrum & Estimasi Velocity',
      'Pemodelan Kebutuhan Formal: Use Case, Class Diagram Relasi & Diagram Interaksi UML',
      'Arsitektur Kode Bersih: 5 Prinsip SOLID (Robert C. Martin) & Pola Desain GoF Esensial',
      'Penjaminan Mutu: Piramida Pengujian, Siklus Red-Green-Refactor TDD & Analisis McCabe',
      'Arsitektur Sistem: Monolit vs Microservices, Teorema CAP, Kontainer Docker & CI/CD'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  sistem_operasi: {
    id: 'sistem_operasi',
    title: 'Sistem Operasi',
    shortTitle: 'Sistem Operasi',
    tagline: 'Arsitektur Kernel, Dual-Mode CPU, Penjadwalan Proses, Sinkronisasi & Virtual Memory',
    description:
      'Bedah cara kerja perangkat lunak pengontrol komputer: pemisahan hak akses User vs Kernel mode, abstraksi proses & threads, algoritma penjadwalan CPU, sinkronisasi konkurensi (Mutex/Semaphore), mitigasi Deadlock, penerjemahan alamat MMU/Paging, hingga arsitektur Inode dan RAID.',
    badge: 'Sistem Komputer',
    iconName: 'Cpu',
    accentColor: 'amber',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Sistem Operasi Komputer',
    certificateCompetencies: [
      'Arsitektur Kernel OS, Mode Dual CPU (Ring 0/Ring 3), System Call & Penanganan Interupsi',
      'Manajemen Proses, PCB, Threading, Context Switch & Algoritma Penjadwalan CPU',
      'Sinkronisasi Konkurensi: Critical Section, Mutex, Semaphor & Pencegahan Deadlock Banker',
      'Manajemen Memori: Hardware MMU, Paging, TLB, Page Fault & Algoritma Penggantian LRU',
      'Sistem Berkas Unix Inode, Transaksi Journaling, Penjadwalan I/O Disk & Toleransi RAID'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  },
  pemrograman_berorientasi_objek: {
    id: 'pemrograman_berorientasi_objek',
    title: 'Pemrograman Berorientasi Objek',
    shortTitle: 'Pemrograman OOP',
    tagline: 'Kelas & Objek, Enkapsulasi, Pewarisan, Polimorfisme Dinamis & Abstraksi Interface',
    description:
      'Kuasai paradigma OOP secara komprehensif: tata letak memori Stack vs Heap, siklus hidup objek (RAII & Garbage Collection), proteksi information hiding, hierarki pewarisan IS-A vs HAS-A, mekanisme internal dynamic dispatch VTable C++, hingga abstraksi kontrak interface dan Dependency Injection.',
    badge: 'Paradigma OOP',
    iconName: 'Box',
    accentColor: 'purple',
    totalModules: 5,
    totalQuestions: 100,
    certificateTitle: 'Sertifikat Kompetensi Pemrograman Berorientasi Objek',
    certificateCompetencies: [
      'Model Mental OOP, Kelas vs Objek, Alokasi Memori, Konstruktor Delegasi & Idiom RAII',
      'Enkapsulasi & Information Hiding: Access Modifiers, Defensive Copy & Objek Immutable',
      'Hierarki Pewarisan (IS-A), Virtual Destructor, Diamond Problem & Favor Composition',
      'Polimorfisme Dinamis (Late Binding), Mekanisme Tingkat Rendah VTable/VPtr & RTTI',
      'Abstraksi Arsitektural: Abstract Class vs Interface Kontrak & Pola Dependency Injection'
    ],
    isFree: false,
    price: PRICE_SINGLE_COURSE
  }
};
