import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { WEB_FRAMEWORK_QUIZZES } from './quizzesWebFramework';

export const WEB_FRAMEWORK_MODULES: ModuleData[] = [
  {
    id: 'web_fondasi_arsitektur',
    number: 1,
    title: 'Fondasi Arsitektur Web Modern, DOM & Paradigma Reaktif',
    shortDesc:
      'Pahami revolusi arsitektur web dari imperatif ke deklaratif: mekanisme internal Real DOM browser, heuristik diffing Virtual DOM O(n), model mental UI = f(state), serta tooling kompilasi modern.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-real-dom-vs-virtual-dom',
        title: '1.1 Anatomi Real DOM, Rendering Tree & Virtual DOM',
        summary:
          'Membedah mengapa manipulasi Real DOM memicu kalkulasi mahal (reflow & repaint) dan bagaimana Virtual DOM mengoptimalkannya melalui batch diffing di memori.',
        readTime: '8 menit',
        keyTakeaways: [
          'Real DOM adalah representasi pohon objek dari node HTML; perubahan atribut/posisi memaksa browser menghitung geometri (reflow/layout) dan meraster piksel (repaint).',
          'Virtual DOM adalah representasi pohon objek JavaScript ringan di dalam heap memori.',
          'Framework modern membandingkan (diffing) VDOM lama vs baru dan menghitung mutasi minimal, lalu menerapkannya secara batch ke Real DOM dalam 1 frame render (16.6ms @ 60FPS).',
          'Kompleksitas algoritma perbandingan pohon umum adalah O(n^3), namun heuristik VDOM menyederhanakannya menjadi O(n) dengan 2 asumsi: elemen tipe berbeda menghasilkan pohon berbeda, dan elemen list dibedakan oleh kunci stabil (`key`).'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Representasi VDOM Sederhana (Virtual Node)
interface VNode {
  type: string;
  props: Record<string, any>;
  children: Array<VNode | string>;
}

// Simulasi membuat VNode di memori (Sangat Murah: Operasi Objek JS murni)
const createVElement = (type: string, props = {}, children: Array<VNode | string> = []): VNode => ({
  type,
  props,
  children
});

// Contoh pohon VDOM:
const vdomTree = createVElement('div', { className: 'card' }, [
  createVElement('h2', {}, ['Arsitektur Modern']),
  createVElement('p', {}, ['Performa rendering optimal'])
]);`,
          explanation:
            'Virtual Node hanyalah plain JavaScript object. Membuat ribuan objek JS dalam hitungan milidetik jauh lebih murah daripada memicu mutasi C++ DOM engine browser.'
        },
        content: `### 1. Masalah dengan Arsitektur Tradisional (Imperatif)
Pada era awal web (seperti era jQuery atau vanilla JavaScript murni), pengembang memanipulasi elemen browser secara imperatif:
\`\`\`javascript
const heading = document.getElementById('title');
heading.textContent = 'Data Baru';
heading.style.color = 'red';
\`\`\`
Setiap kali baris di atas dieksekusi, browser berpotensi melakukan:
1. **Recalculate Style**: Menghitung ulang aturan CSS untuk elemen dan turunannya.
2. **Layout / Reflow**: Mengkalkulasi ulang koordinat $x, y$ serta dimensi lebar/tinggi di layar.
3. **Paint / Raster**: Menggambar piksel warna pada lapisan bitmap.
4. **Composite**: Menggabungkan layer bitmap ke layar monitor.

Jika dalam satu detik terjadi puluhan mutasi berurutan yang tidak terkoordinasi, browser akan mengalami **Layout Thrashing** (jank) yang merusak pengalaman pengguna.

---

### 2. Solusi: Virtual DOM & Rekonsiliasi O(n)
Alih-alih menyentuh DOM seketika, framework modern menyimpan dua representasi struktur UI di memori:
- Pohon VDOM saat ini (*current tree*).
- Pohon VDOM hasil pembaruan (*work-in-progress tree*).

Framework menjalankan proses **Rekonsiliasi (Reconciliation)**:
$$\\text{Perubahan Minimal} = \\text{Diff}(\\text{VDOM}_{\\text{lama}}, \\text{VDOM}_{\\text{baru}})$$

Secara teori ilmu komputer, perbandingan dua struktur pohon sembarang membutuhkan kompleksitas $\\mathcal{O}(n^3)$. Jika ada 1.000 elemen, algoritma umum butuh $1.000^3 = 10^9$ operasi (1 miliar langkah).

Namun, framework seperti React menerapkan **dua aturan heuristik** sehingga kompleksitas turun drastis menjadi $\\mathcal{O}(n)$:
1. Dua elemen dengan tipe HTML/komponen berbeda diasumsikan akan menghasilkan pohon yang sama sekali berbeda (komponen lama di-unmount, baru di-mount).
2. Pengembang menyediakan prop \`key\` unik dan stabil pada elemen berulang (array list), sehingga framework dapat melacak pemindahan tanpa menghancurkan node DOM.`
      },
      {
        id: '1-2-paradigma-deklaratif',
        title: '1.2 Paradigma Deklaratif: UI Sebagai Fungsi dari State',
        summary:
          'Memahami model mental fundamental frontend modern: UI = f(state), aliran data searah, dan prediktabilitas antarmuka.',
        readTime: '7 menit',
        keyTakeaways: [
          'Paradigma Deklaratif: kita mendeskripsikan "apa" yang harus terlihat berdasarkan data saat ini, bukan "bagaimana" langkah mengubah elemen demi elemen.',
          'Model matematis fundamental: UI = f(state). Setiap kali state berubah, fungsi f dievaluasi ulang menghasilkan snapshot UI baru.',
          'Eliminasi state desinkronisasi: UI tidak lagi memiliki status internal yang terpisah dari data sumber kebenaran (Single Source of Truth).'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `// Pendekatan Deklaratif: UI hanyalah fungsi dari state 'status'
function StatusBadge({ isOnline, unreadCount }: { isOnline: boolean; unreadCount: number }) {
  // UI = f(state)
  return (
    <div className="flex items-center gap-2">
      <span className={isOnline ? "badge-green" : "badge-gray"}>
        {isOnline ? "Aktif" : "Offline"}
      </span>
      {unreadCount > 0 && <span className="counter-pill">{unreadCount}</span>}
    </div>
  );
}`,
          explanation:
            'Tampilan komponen sepenuhnya ditentukan oleh kombinasi nilai isOnline dan unreadCount. Tidak ada logika manual show/hide DOM.'
        },
        content: `### 1. Mengapa Imperatif Rawan Bug?
Dalam aplikasi skala besar dengan puluhan interaksi pengguna (login, fetch data, klik notifikasi, filter tabel), pendekatan imperatif sering menghasilkan kondisi inkonsisten:
- Spinner loading lupa disembunyikan saat error terjadi.
- Label tombol lupa diganti kembali ke "Kirim" setelah submit gagal.
- Angka counter notifikasi di navbar tidak cocok dengan daftar pesan terbuka.

Penyebabnya adalah **State Desynchronization**: data di memori sudah berubah, tetapi pengembang lupa memanggil instruksi DOM untuk memperbarui salah satu elemen UI.

---

### 2. Rumus Inti: $\\text{UI} = f(\\text{state})$
Framework komponen membalik proses ini dengan deklaratif:
$$\\text{UI} = f(\\text{state})$$
- $\\text{state}$: Sumber data tunggal (*Single Source of Truth*).
- $f$: Komponen murni (*pure component / render function*).
- $\\text{UI}$: Hasil representasi visual yang selalu sinkron dengan state saat itu.

Ketika $\\text{state}$ bertransisi dari $S_1 \\to S_2$, framework otomatis menjalankan $f(S_2)$ dan memperbarui bagian layar yang relevan.`
      },
      {
        id: '1-3-build-tools-module-bundler',
        title: '1.3 Ekosistem Build Tools: Bundler, Transpiler & ESM Modern',
        summary:
          'Menelusuri peran esensial webpack, Vite, esbuild, Babel/SWC, transpilasi JSX/TSX, Hot Module Replacement (HMR), dan Tree Shaking.',
        readTime: '8 menit',
        keyTakeaways: [
          'Browser tidak memahami JSX atau TypeScript secara native; diperlukan transpiler (Babel, SWC, esbuild) untuk mengubahnya menjadi JavaScript standar (ES5/ES6+).',
          'Vite merevolusi local development dengan memanfaatkan native ES Modules (ESM) di browser dan pre-bundling dependensi dengan esbuild (Go-based) yang sangat cepat.',
          'Hot Module Replacement (HMR) memperbarui modul kode di browser seketika tanpa me-refresh seluruh halaman, mempertahankan state aplikasi yang sedang aktif.',
          'Tree shaking adalah teknik dead-code elimination yang membuang kode/fungsi yang tidak pernah diimpor dalam grafik dependensi produksi.'
        ],
        codeSnippet: {
          language: 'javascript',
          code: `// math.js - Modul dengan beberapa export fungsi
export const add = (a, b) => a + b;
export const unusedHeavyCalculation = (arr) => arr.map(x => x ** 3);

// main.js - Hanya mengimpor fungsi add
import { add } from './math.js';
console.log(add(5, 10));

// Hasil Bundle Produksi (Setelah Tree Shaking):
// unusedHeavyCalculation() OTOMATIS DIBUANG dari berkas akhir!`,
          explanation: 'Tree shaking membuang fungsi unusedHeavyCalculation dari bundel akhir karena tidak pernah dipanggil.'
        },
        content: `### 1. Mengapa Aplikasi Modern Memerlukan Build Pipeline?
Frontend modern menggunakan fitur canggih yang belum tentu didukung seluruh peramban web:
- **JSX/TSX**: Sintaks template mirip HTML di dalam JavaScript/TypeScript.
- **TypeScript**: Static typing untuk keandalan kode.
- **CSS Preprocessors & Tailwind**: Utility-first CSS yang membutuhkan purging kelas tak terpakai.

Build pipeline bertugas mengompilasi, memaketkan (*bundling*), dan mengompres (*minifying*) ratusan berkas modular menjadi aset statis yang ringan dan cepat dimuat.

---

### 2. Vite vs Tradisional Bundler (Webpack)
| Kategori | Webpack Tradisional | Vite Modern |
| :--- | :--- | :--- |
| **Dev Server Startup** | Mem-bundle seluruh aplikasi sebelum server siap ($\mathcal{O}(n)$ modul) | Instan; menyajikan modul via native browser ESM on-demand |
| **Kecepatan Transpilasi** | JS-based (Babel/Terser) | Native Go-based (esbuild) & Rust-based (SWC) |
| **HMR Speed** | Melambat seiring ukuran codebase bertambah | Konstan terlepas dari ukuran aplikasi |`
      }
    ],
    quiz: WEB_FRAMEWORK_QUIZZES['web_fondasi_arsitektur']
  },
  {
    id: 'web_komponen_state',
    number: 2,
    title: 'Desain Komponen, Props, Local State & Event Handling',
    shortDesc:
      'Kuasai modularitas komponen: aliran data searah (unidirectional data flow), imutabilitas state, prinsip Pure Functions, serta pengelolaan side effects dan siklus hidup komponen.',
    iconName: 'Code',
    sections: [
      {
        id: '2-1-dekomposisi-unidirectional',
        title: '2.1 Dekomposisi UI & Unidirectional Data Flow',
        summary:
          'Merancang arsitektur hirarki komponen yang modular, dapat dipakai ulang (reusable), dan mudah diuji dengan aliran data dari atas ke bawah.',
        readTime: '8 menit',
        keyTakeaways: [
          'Unidirectional Data Flow: Data mengalir dari parent ke child via props; child mengomunikasikan perubahan ke atas via event callbacks.',
          'Props bersifat read-only (immutable); komponen anak tidak boleh memutasi props yang diterimanya.',
          'Pemisahan komponen cerdas (Smart/Container) dan komponen penyaji (Dumb/Presentational) meningkatkan modularitas dan kemudahan pengujian.'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `// Parent Component (Mengelola State)
function UserManagement() {
  const [userRole, setUserRole] = useState<'admin' | 'guest'>('guest');

  return (
    <div>
      {/* Mengirim data via props dan handler via callback */}
      <UserProfileCard 
        role={userRole} 
        onPromote={() => setUserRole('admin')} 
      />
    </div>
  );
}

// Child Component (Presentational - Props Immutable)
function UserProfileCard({ role, onPromote }: { role: string; onPromote: () => void }) {
  return (
    <div className="card">
      <p>Hak Akses: {role}</p>
      {role === 'guest' && <button onClick={onPromote}>Tingkatkan ke Admin</button>}
    </div>
  );
}`,
          explanation:
            'Komponen anak (UserProfileCard) tidak memodifikasi role secara sepihak. Saat tombol diklik, ia memanggil callback onPromote sehingga parent memperbarui state sumber.'
        },
        content: `### 1. Prinsip Dekomposisi Komponen
Dalam membangun antarmuka pengguna yang kompleks, aturan emasnya adalah **Single Responsibility Principle**:
Sebuah komponen idealnya hanya melakukan satu hal dengan baik. Jika komponen bertambah besar, pecahlah menjadi sub-komponen yang lebih kecil.

Hierarki Komponen:
\`\`\`
App
├── Header (Navigasi & Branding)
└── DashboardPage
    ├── MetricsSummary (Presentational)
    └── TransactionTable (Container)
        ├── TableHeader
        └── TableRowItem (Reusable)
\`\`\`

---

### 2. Aliran Data Searah (*Unidirectional*)
Berbeda dengan beberapa framework lawas yang menggunakan *two-way binding* tanpa kontrol terpusat, pendekatan modern memberlakukan:
1. **State mengalir ke bawah**: Komponen induk mengirim data ke anak melalui \`props\`.
2. **Event mengalir ke atas**: Jika pengguna berinteraksi di komponen anak, sinyal perubahan dikirim ke atas memicu pemanggilan fungsi induk (*callback function*).`
      },
      {
        id: '2-2-state-immutability',
        title: '2.2 State Reaktif & Disiplin Immutability',
        summary:
          'Mengapa memodifikasi objek secara langsung (in-place mutation) merusak reaktivitas framework dan bagaimana menerapkan pola immutable updates.',
        readTime: '8 menit',
        keyTakeaways: [
          'Framework mendeteksi perubahan state menggunakan shallow equality comparison (Object.is) pada referensi memori.',
          'Mutasi langsung (seperti `arr.push()` atau `obj.count++`) tidak mengubah alamat referensi objek di memori, sehingga framework menganggap tidak ada perubahan dan melewatkan re-render.',
          'Pembaruan state harus selalu menghasilkan objek/array baru dengan spread operator (`...`) atau helper immutability.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// SALAH (In-Place Mutation - UI Gagal Render):
const handleAddItemWrong = (item: string) => {
  todos.push(item); // Alamat referensi array tetap sama!
  setTodos(todos);  // Framework menganggap state tidak berubah!
};

// BENAR (Immutable Update - Alamat Referensi Baru Dibuat):
const handleAddItemCorrect = (item: string) => {
  setTodos(prevTodos => [...prevTodos, item]); // Array baru dialokasikan di memori
};

// Update properti objek bersarang secara immutable:
const handleUpdateCity = (newCity: string) => {
  setUser(prev => ({
    ...prev,
    address: {
      ...prev.address,
      city: newCity
    }
  }));
};`,
          explanation:
            'Menggunakan spread operator membuat snapshot baru di heap memori, memicu perbandingan referensi yang valid sehingga re-render berjalan akurat.'
        },
        content: `### 1. Anatomi Perbandingan Referensi di JavaScript
Dalam JavaScript, tipe primitif (number, string, boolean) dibandingkan berdasarkan nilainya:
\`\`\`javascript
5 === 5 // true
\`\`\`
Namun, tipe non-primitif (Objek dan Array) dibandingkan berdasarkan **alamat memori (pointer)**:
\`\`\`javascript
const a = { skor: 10 };
const b = a;
b.skor = 20;
console.log(a === b); // TRUE! Karena merujuk ke blok memori yang sama persis
\`\`\`

Jika Anda mengubah \`b.skor\`, framework yang memeriksa \`oldState === newState\` akan melihat hasil \`true\` dan menyimpulkan: *"Tidak ada yang berubah, lewati re-render!"*. Akibatnya tampilan browser membeku tidak terbarui.

---

### 2. Aturan Emas Mutasi State:
1. Jangan pernah memanggil \`push\`, \`pop\`, \`splice\`, \`sort\` langsung pada state array.
2. Gunakan metode non-mutating: \`concat\`, \`filter\`, \`map\`, \`slice\`, atau spread operator \`[...array]\`.
3. Selalu pertahankan salinan bersih (*shallow copy*) saat memperbarui atribut objek bersarang.`
      },
      {
        id: '2-3-hooks-side-effects',
        title: '2.3 Hooks, Lifecycle & Penanganan Efek Samping (Side Effects)',
        summary:
          'Mengelola interaksi di luar siklus render murni: timer, subscription WebSocket, manipulasi event listener window, dan fungsi cleanup.',
        readTime: '9 menit',
        keyTakeaways: [
          'Render function harus murni (pure): menghitung UI berdasarkan props & state tanpa mengubah variabel global di luar.',
          'Efek samping (side effect) seperti HTTP request, timer, atau event listener global harus ditempatkan di dalam hook efek khusus (seperti useEffect).',
          'Array dependensi mengontrol kapan efek dieksekusi ulang; array kosong [] berarti efek hanya berjalan sekali setelah mount.',
          'Fungsi cleanup wajib disediakan untuk mencegah memory leak saat komponen di-unmount (misal: membersihkan timer setInterval atau unsubscribing socket).'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `import { useState, useEffect } from 'react';

function WindowWidthMonitor() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 1. Eksekusi Side Effect (Menempelkan listener)
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // 2. Fungsi Cleanup (Pembersihan memori saat unmount / efek ulang)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array kosong: hanya dijalankan saat mount

  return <div className="badge">Lebar Layar: {width}px</div>;
}`,
          explanation:
            'Jika fungsi cleanup tidak disediakan, setiap kali komponen ini di-mount dan di-unmount, listener akan terus menumpuk di memori browser dan memicu memory leak.'
        },
        content: `### 1. Apa itu "Efek Samping" (*Side Effect*)?
Dalam pemrograman fungsional murni, fungsi yang baik tidak memiliki efek samping: ia hanya menerima input dan mengembalikan output yang konsisten.
Namun, aplikasi web nyata membutuhkan interaksi dengan dunia luar:
- Mengambil data dari REST API / GraphQL.
- Menulis log ke analitik server.
- Mengatur interval timer (\`setInterval\`).
- Berlangganan pesan real-time WebSocket.

Tindakan-tindakan di atas disebut **Side Effects** karena memengaruhi sistem di luar proses rendering kalkulasi UI.

---

### 2. Bahaya Memory Leak & Pentingnya Cleanup
Bayangkan Anda membuat komponen modal obrolan (*ChatModal*) yang mendengarkan event socket real-time. Jika pengguna membuka dan menutup modal sebanyak 20 kali tanpa fungsi pembersihan (\`cleanup\`), maka ada **20 listener aktif** yang berjalan di background bersamaan!
Hal ini membuang siklus CPU, menguras RAM, dan memicu eksekusi ganda yang merusak state aplikasi.`
      }
    ],
    quiz: WEB_FRAMEWORK_QUIZZES['web_komponen_state']
  },
  {
    id: 'web_routing_state_global',
    number: 3,
    title: 'Routing SPA, Global State Management & Context API',
    shortDesc:
      'Arsitektur navigasi klien tanpa reload halaman menggunakan HTML5 History API, strategi manajemen status global terpusat (Redux/Zustand), dan pencegahan masalah prop-drilling.',
    iconName: 'Network',
    sections: [
      {
        id: '3-1-client-routing-history',
        title: '3.1 Client-Side Routing & HTML5 History API',
        summary:
          'Bagaimana browser mengubah URL dan merender rute yang berbeda tanpa meminta halaman HTML penuh dari server web.',
        readTime: '8 menit',
        keyTakeaways: [
          'Client-side routing memanfaatkan metode `history.pushState()` dan event `popstate` untuk mengubah URL tanpa memicu reload halaman penuh.',
          'Dynamic routing memungkinkan parsing parameter URL (contoh: `/produk/:id`) ke dalam komponen.',
          'Fallback server: Server web produksi (Nginx/Vercel) wajib dikonfigurasi untuk mengarahkan semua rute tidak dikenal ke `index.html` (rewrite rule) agar SPA tidak menghasilkan error 404 saat di-refresh.'
        ],
        codeSnippet: {
          language: 'javascript',
          code: `// Mekanisme internal client routing menggunakan History API:
function navigateTo(path) {
  // Mengubah URL di address bar tanpa reload halaman
  window.history.pushState({ page: path }, '', path);
  
  // Memicu re-render komponen yang cocok dengan rute baru
  renderRoute(path);
}

// Menangani tombol Back / Forward browser:
window.addEventListener('popstate', (event) => {
  const currentPath = window.location.pathname;
  renderRoute(currentPath);
});`,
          explanation:
            'History API memungkinkan pengembang memanipulasi riwayat navigasi peramban secara programatis tanpa memutus eksekusi JavaScript aplikasi.'
        },
        content: `### 1. Perbedaan Navigasi Multi-Page (MPA) vs SPA
Dalam arsitektur website tradisional:
\`\`\`
Pengguna klik /kontak -> Browser request ke web server -> Server kompilasi HTML penuh -> Browser render dari layar putih (Full Page Reload)
\`\`\`
Sedangkan pada Single Page Application (SPA):
\`\`\`
Pengguna klik /kontak -> Router tangkap event click -> history.pushState() ubah URL -> Komponen Kontak dimuat & dirender seketika
\`\`\`
Pengguna merasakan pengalaman yang mulus dan instan layaknya aplikasi desktop.

---

### 2. Tantangan Rute 404 pada Server Statis
Saat pengguna pertama kali membuka \`https://app.com\`, server menyajikan \`index.html\`.
Namun jika pengguna langsung mengetik \`https://app.com/laporan/2026\`, server fisik mencari berkas \`/laporan/2026/index.html\` yang sebenarnya tidak ada!
Oleh karena itu, server produksi wajib memiliki konfigurasi rewrite:
\`\`\`nginx
# Konfigurasi Nginx untuk SPA Routing
location / {
    try_files $uri $uri/ /index.html;
}
\`\`\``
      },
      {
        id: '3-2-prop-drilling-context',
        title: '3.2 Fenomena Prop Drilling & Context API',
        summary:
          'Mengatasi masalah passing props melintasi puluhan lapisan hierarki komponen dengan mekanisme penyedia data bersarang (Provider Pattern).',
        readTime: '8 menit',
        keyTakeaways: [
          'Prop drilling terjadi ketika data harus diteruskan melewati komponen-komponen perantara yang sebenarnya tidak memerlukan data tersebut.',
          'Context API menyediakan cara berbagi nilai (seperti tema gelap/terang, otentikasi pengguna, bahasa) ke seluruh sub-pohon komponen tanpa manual passing props.',
          'Kelemahan Context API: setiap kali nilai context berubah, seluruh komponen konsumen (consumers) akan di-re-render ulang; tidak cocok untuk state dengan frekuensi pembaruan sangat tinggi.'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Buat Objek Context
interface AuthContextType {
  token: string | null;
  login: (t: string) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Buat Provider Terpusat
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ token, login: (t) => setToken(t) }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Konsumsi di Komponen Cucu Terdalam tanpa melewati perantara
export function UserStatusBadge() {
  const auth = useContext(AuthContext);
  return <span>{auth?.token ? "Terotentikasi" : "Tamu"}</span>;
}`,
          explanation:
            'UserStatusBadge dapat langsung mengakses data token tanpa perlu dititipkan satu per satu melalui parent komponen di atasnya.'
        },
        content: `### 1. Kapan Prop Drilling Menjadi Anti-Pattern?
Jika Anda memiliki hierarki komponen setinggi 6 tingkat:
\`\`\`
App -> DashboardLayout -> Sidebar -> NavigationGroup -> NavItem -> UserAvatar
\`\`\`
Meneruskan prop \`currentUser\` dari \`App\` ke \`UserAvatar\` memaksa 4 komponen perantara mendeklarasikan dan meneruskan prop yang sama sekali tidak mereka gunakan. Ini menciptakan keterikatan ketat (*coupling*) dan memperumit refaktor.

---

### 2. Batasan Context API
Meskipun praktis, Context API bawaan tidak memiliki selektor reaktivitas halus (*granular re-rendering*). Jika objek context memiliki 10 properti, perubahan pada 1 properti saja akan memaksa seluruh komponen yang mengonsumsi context tersebut untuk re-render, meskipun komponen tersebut hanya memakai properti lainnya. Untuk kasus frekuensi tinggi, arsitektur store eksternal lebih unggul.`
      },
      {
        id: '3-3-global-state-architecture',
        title: '3.3 Arsitektur Global Store: Pola Redux, Zustand & Immutability',
        summary:
          'Arsitektur state terpusat berskala besar: aksi (actions), reducers/mutator, selektor terisolasi, dan aliran mutasi deterministik.',
        readTime: '9 menit',
        keyTakeaways: [
          'Pola Redux menerapkan aliran data searah yang ketat: View -> Action -> Dispatch -> Reducer -> Store Baru -> View.',
          'Reducer wajib berstatus Pure Function: tidak boleh memicu asynchronous request, mutasi in-place, atau nilai acak.',
          'Framework modern seperti Zustand atau Redux Toolkit menyederhanakan boilerplate menggunakan proxy mutasi (Immer) dan selektor granular untuk meminimalkan re-render berlebih.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Contoh Arsitektur Store Modern (Zustand Pattern)
import { create } from 'zustand';

interface CartStore {
  items: Array<{ id: string; name: string; price: number }>;
  total: number;
  addItem: (item: { id: string; name: string; price: number }) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
    total: state.total + item.price
  })),
  clearCart: () => set({ items: [], total: 0 })
}));

// Konsumsi Granular: Hanya re-render jika properti 'total' yang berubah!
function CartSummary() {
  const total = useCartStore((state) => state.total);
  return <div>Total Belanja: Rp {total.toLocaleString()}</div>;
}`,
          explanation:
            'Dengan selektor state.total, komponen CartSummary TIDAK AKAN di-re-render jika item lain bertambah selama nilai total tetap sama.'
        },
        content: `### 1. Tiga Prinsip Inti Arsitektur Redux
1. **Single Source of Truth**: Seluruh state global disimpan dalam satu pohon objek di dalam store tunggal.
2. **State bersifat Read-Only**: Satu-satunya cara mengubah state adalah dengan mendistribusikan (*dispatch*) sebuah aksi (*action*) yang mendeskripsikan apa yang terjadi.
3. **Perubahan dibuat dengan Pure Functions**: Reducer menerima state lama dan aksi, lalu mengembalikan state baru tanpa efek samping.

$$\\text{State}_{t+1} = \\text{Reducer}(\\text{State}_t, \\text{Action})$$

---

### 2. Kapan Harus Menggunakan Global Store?
Gunakan Global Store hanya untuk:
- Data sesi pengguna (autentikasi, hak akses, token).
- Data lintas halaman independen (keranjang belanja di e-commerce, preferensi tema aplikasi).
- Notifikasi global dan riwayat aktivitas.

Hindari menyimpan data input form lokal di global store jika data tersebut hanya digunakan oleh satu layar formulir!`
      }
    ],
    quiz: WEB_FRAMEWORK_QUIZZES['web_routing_state_global']
  },
  {
    id: 'web_api_asynchronous',
    number: 4,
    title: 'Integrasi REST API, GraphQL, Asynchronous Data & Error Handling',
    shortDesc:
      'Teknik mutakhir konsumsi data jaringan: siklus async/await, race condition, manajemen caching sisi klien (stale-while-revalidate), pembatalan request (AbortController), dan Optimistic UI.',
    iconName: 'Layers',
    sections: [
      {
        id: '4-1-lifecycle-fetching-race',
        title: '4.1 Siklus Pengambilan Data & Pencegahan Race Condition',
        summary:
          'Menghindari bug respons tertukar saat pengguna mengetik cepat dengan AbortController dan pembatalan request aktif.',
        readTime: '8 menit',
        keyTakeaways: [
          'Pengambilan data jaringan bersifat non-deterministik: request kedua bisa saja selesai lebih cepat daripada request pertama.',
          'Race Condition terjadi ketika respons request lama yang tertunda menimpa hasil request terbaru di antarmuka pengguna.',
          'Gunakan `AbortController` standar browser untuk membatalkan sinyal request HTTP yang sudah kedaluwarsa saat komponen berpindah atau parameter pencarian berubah.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Mengatasi Race Condition dengan AbortController
import { useState, useEffect } from 'react';

function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // 1. Buat instance controller baru untuk request ini
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, { signal });
        const data = await res.json();
        setResults(data);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error("Gagal memuat:", err);
        }
      }
    }

    fetchData();

    // 2. Batalkan request sebelumnya jika query berubah atau unmount!
    return () => controller.abort();
  }, [query]);

  return <ul>{results.map((item: any) => <li key={item.id}>{item.name}</li>)}</ul>;
}`,
          explanation:
            'Saat user mengetik "A" lalu cepat mengetik "AB", request untuk "A" otomatis dibatalkan di jaringan browser sehingga responsnya tidak akan menimpa hasil "AB".'
        },
        content: `### 1. Apa itu Jaringan Non-Deterministik?
Dalam protokol HTTP/TCP, latensi jaringan berfluktuasi:
1. $t=0$: Pengguna mencari kata *"Laptop"*. Server menerima Request 1.
2. $t=100\\text{ms}$: Pengguna mengoreksi menjadi *"Mouse"*. Server menerima Request 2.
3. $t=200\\text{ms}$: Database merespons Request 2 cepat. Tampilan menampilkan produk *"Mouse"*.
4. $t=500\\text{ms}$: Request 1 yang sempat terjebak antrian server akhirnya selesai. UI menimpa data menjadi *"Laptop"*, meskipun input kotak pencarian bertuliskan *"Mouse"*!

Ini adalah cacat fungsional fatal (**Race Condition**) yang merusak kredibilitas sistem.

---

### 2. Standar W3C: AbortController
Alih-alih mengabaikan respons secara manual dengan variabel flag boolean, \`AbortController\` memotong koneksi soket di level browser, menghemat kuota data seluler pengguna dan mengurangi beban pemrosesan server.`
      },
      {
        id: '4-2-swr-caching-query',
        title: '4.2 Paradigma Stale-While-Revalidate & Caching Klien',
        summary:
          'Mengapa fetching mentah (raw fetch) di useEffect adalah anti-pattern dan bagaimana pustaka cache modern (React Query / SWR) mengoptimalkan transfer data.',
        readTime: '9 menit',
        keyTakeaways: [
          'Pola Stale-While-Revalidate (RFC 5861): Menampilkan data basi (stale) dari cache instan, lalu mengambil data terbaru di background dan memperbarui UI secara mulus.',
          'Deduplikasi Request: Menghindari pemanggilan endpoint yang sama berkali-kali jika 5 komponen di layar meminta data profil pengguna secara bersamaan.',
          'Window Focus Refetching: Memperbarui data otomatis saat tab browser kembali aktif tanpa intervensi pengguna.'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `import { useQuery } from '@tanstack/react-query';

// Komponen mengonsumsi query terkelola
function UserProfileWidget({ userId }: { userId: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await fetch(\`/api/users/\${userId}\`);
      if (!res.ok) throw new Error('Pengguna tidak ditemukan');
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // Data dianggap segar selama 5 menit (tanpa network request ulang)
    gcTime: 1000 * 60 * 30    // Tersimpan di memori cache selama 30 menit
  });

  if (isLoading) return <div className="skeleton">Memuat profil...</div>;
  if (isError) return <div className="alert-error">{(error as Error).message}</div>;

  return <div>Halo, {data.name}!</div>;
}`,
          explanation:
            'React Query menangani loading state, retry otomatis jika server sempat down, deduping request, dan caching terstandarisasi.'
        },
        content: `### 1. Mengapa Mengelola Fetching Manual Itu Berat?
Untuk satu panggilan API sederhana, pengembang harus menulis:
- Variabel state \`data\`, \`loading\`, dan \`error\`.
- Penanganan \`try/catch/finally\`.
- Mekanisme retry jika jaringan seluler pengguna terputus sesaat.
- Mekanisme invalidasi cache saat data diperbarui.

Pustaka cache seperti React Query atau SWR memisahkan **Server State** (data milik database jarak jauh) dari **Client State** (status modal terbuka, input formulir lokal).`
      },
      {
        id: '4-3-optimistic-error-boundaries',
        title: '4.3 Optimistic UI Updates & Error Boundary Fallback',
        summary:
          'Menciptakan antarmuka yang terasa instan dengan Optimistic Updates dan mengamankan aplikasi dari crash total menggunakan Error Boundaries.',
        readTime: '8 menit',
        keyTakeaways: [
          'Optimistic UI: Memperbarui tampilan antarmuka seketika sebelum server mengonfirmasi keberhasilan; jika server gagal, batalkan (rollback) ke kondisi semula.',
          'Error Boundary menangkap error JavaScript yang tidak tertangani di pohon komponen anak dan merender fallback UI cadangan tanpa membuat seluruh website blank putih.',
          'Siklus Optimistic: Simpan Snapshot Lama -> Update UI Instan -> Kirim Request -> (Jika Gagal) Rollback ke Snapshot Lama.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Alur Logika Optimistic Update
async function handleLikePost(postId: string) {
  // 1. Ambil snapshot data saat ini untuk cadangan rollback
  const previousLikes = currentPost.likesCount;
  
  // 2. Perbarui tampilan UI seketika (Optimis bahwa request akan sukses!)
  setCurrentPost(prev => ({ ...prev, likesCount: prev.likesCount + 1, isLiked: true }));

  try {
    // 3. Kirim request ke backend di background
    await api.post(\`/posts/\${postId}/like\`);
  } catch (error) {
    // 4. Jika server menolak/error jaringan: Lakukan Rollback!
    setCurrentPost(prev => ({ ...prev, likesCount: previousLikes, isLiked: false }));
    alert("Koneksi gagal. Tindakan like dibatalkan.");
  }
}`,
          explanation:
            'Pengguna langsung melihat ikon like menyala seketika tanpa menunggu latensi jaringan 300ms, memberikan pengalaman layaknya aplikasi native.'
        },
        content: `### 1. Mengapa Error Boundary Sangat Penting?
Dalam JavaScript murni, unhandled error seperti:
\`\`\`javascript
TypeError: Cannot read properties of undefined (reading 'avatar')
\`\`\`
dapat merusak siklus rendering seluruh aplikasi, membuat layar browser berubah menjadi **Blank White Screen of Death**.

Dengan membungkus bagian aplikasi menggunakan **Error Boundary**, jika widget komentar mengalami error, bagian navbar, sidebar, dan konten utama tetap berfungsi normal dengan fallback ramah pengguna: *"Gagal memuat kolom komentar"*.`
      }
    ],
    quiz: WEB_FRAMEWORK_QUIZZES['web_api_asynchronous']
  },
  {
    id: 'web_ssr_ssg_optimasi',
    number: 5,
    title: 'Rendering Strategies (SSR, SSG, ISR) & Optimasi Performa Web',
    shortDesc:
      'Strategi rendering modern: Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), hidrasi VDOM, serta metrik Core Web Vitals.',
    iconName: 'Award',
    sections: [
      {
        id: '5-1-csr-ssr-ssg-isr',
        title: '5.1 Spektrum Strategi Rendering: CSR, SSR, SSG & ISR',
        summary:
          'Membandingkan kapan HTML harus dibuat: di peramban klien (CSR), saat permintaan tiba di server (SSR), saat build time (SSG), atau secara periodik (ISR).',
        readTime: '9 menit',
        keyTakeaways: [
          'CSR (Client-Side Rendering): HTML awal kosong (<div id="root"></div>), JavaScript mengunduh dan merender UI. Rentan lambat pada First Contentful Paint (FCP) dan SEO crawler lemah.',
          'SSR (Server-Side Rendering): Setiap request menghasilkan HTML utuh di server node.js secara real-time. Bagus untuk data dinamis dan SEO, namun meningkatkan Time To First Byte (TTFB) dan beban server.',
          'SSG (Static Site Generation): Seluruh halaman di-render menjadi berkas HTML statis saat proses kompilasi (`build time`). Waktu muat mendekati 0 milidetik via CDN, sangat hemat biaya.',
          'ISR (Incremental Static Regeneration): Menggabungkan kelebihan SSG dan SSR dengan memperbarui halaman statis di latar belakang saat request tiba setelah interval waktu revalidasi tercapai.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `| Pola Rendering | Waktu Kompilasi HTML | Beban Server | Kecepatan TTFB | Cocok Untuk |
| :--- | :--- | :--- | :--- | :--- |
| **CSR** | Di Browser Klien | Sangat Rendah | Sangat Cepat | Dashboard privat, Admin panel internal |
| **SSR** | Di Server per Request | Tinggi | Sedang - Lambat | Feed medsos dinamis, Halaman profil user |
| **SSG** | Build Time di Mesin CI | Nol (Statis CDN) | Ekstrem Cepat | Dokumentasi, Landing Page, Blog statis |
| **ISR** | Build Time + Background | Rendah | Ekstrem Cepat | E-Commerce dengan 100.000 katalog produk |`,
          explanation: 'Matriks perbandingan strategi rendering web modern dari CSR murni hingga SSG/ISR CDN.'
        },
        content: `### 1. Evolusi Paradigma Rendering
Pada awal arsitektur SPA, seluruh logika dipindahkan ke browser (CSR). Namun hal ini memicu dua masalah besar:
1. **Search Engine Optimization (SEO)**: Web crawler mesin pencari kesulitan mengeksekusi bundel JavaScript ratusan kilobyte sebelum mengindeks konten.
2. **First Contentful Paint (FCP) Lambat**: Pada koneksi seluler 3G/4G atau perangkat prosesor hemat daya, pengguna melihat layar putih kosong selama 3–5 detik pertama saat berkas JS diunduh dan diparse.

---

### 2. Solusi: Hybrid Frameworks (Next.js, Nuxt, Astro)
Framework modern tidak lagi memaksakan satu strategi tunggal. Pengembang dapat mencampur strategi per rute:
- Rute \`/\` (Beranda) $\\to$ **SSG** (Cepat dan murah).
- Rute \`/produk/[id]\` $\\to$ **ISR** (Statis di CDN, diperbarui tiap 60 detik).
- Rute \`/transaksi/status\` $\\to$ **SSR** (Harus akurat detik itu juga).
- Rute \`/admin/settings\` $\\to$ **CSR** (Tidak butuh SEO).`
      },
      {
        id: '5-2-hidrasi-islands',
        title: '5.2 Konsep Hidrasi (Hydration) & Arsitektur Islands',
        summary:
          'Memahami proses penyambungan event listener ke HTML statis (Hydration) dan revolusi Arsitektur Kepulauan (Islands Architecture) untuk zero-JS default.',
        readTime: '8 menit',
        keyTakeaways: [
          'Hidrasi adalah proses di mana JavaScript klien membaca pohon HTML statis yang dikirim dari SSR/SSG dan menyambungkan event listener (onClick, onChange) ke elemen DOM.',
          'Uncanny Valley of the Web: Kondisi di mana tombol sudah terlihat di layar (HTML siap) tetapi belum bisa diklik karena proses hidrasi JavaScript belum tuntas.',
          'Islands Architecture (Astro) hanya menghidrasi komponen interaktif tertentu secara independen, membiarkan 90% konten halaman berupa HTML murni tanpa muatan JavaScript.'
        ],
        codeSnippet: {
          language: 'html',
          code: `<!-- Konsep Islands Architecture: HTML Statis Tanpa JS -->
<header><h1>Blog Berita Sains</h1></header>
<article>
  <!-- Konten teks murni: 0 KB JavaScript -->
  <p>Penemuan terbaru di bidang komputasi kuantum...</p>
</article>

<!-- Pulau Interaktif (Island): Hanya komponen ini yang mengunduh JS! -->
<div class="island" data-component="KomikInteractive">
  <button id="next-frame">Lanjut Gambar</button>
</div>`,
          explanation:
            'Alih-alih memaketkan seluruh dokumen ke dalam JavaScript runtime, Islands Architecture mengisolasi widget interaktif sehingga ukuran bundel turun hingga 80%.'
        },
        content: `### 1. Beban Ganda Hidrasi Tradisional (*Double Data Cost*)
Pada SSR tradisional:
1. Server mengubah komponen menjadi string HTML dan menyertakan snapshot data JSON di tag \`<script id="__NEXT_DATA__">\`.
2. Browser mengunduh HTML (pengguna bisa melihat teks).
3. Browser kemudian mengunduh seluruh bundel JavaScript framework.
4. Browser mengeksekusi JavaScript dari awal, mencocokkan struktur DOM, dan menempelkan handler interaksi.

Ini berarti komponen dan data dikirim **dua kali**: satu kali sebagai HTML, dan satu kali lagi di dalam bundel JavaScript!`
      },
      {
        id: '5-3-core-web-vitals-optimasi',
        title: '5.3 Core Web Vitals & Teknik Optimasi Kinerja Frontend',
        summary:
          'Mengukur dan mengoptimalkan metrik resmi Google: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), dan Cumulative Layout Shift (CLS).',
        readTime: '9 menit',
        keyTakeaways: [
          'LCP (Largest Contentful Paint) mengukur kecepatan pemuatan elemen visual terbesar di layar (target: <= 2.5 detik).',
          'INP (Interaction to Next Paint) mengukur responsivitas antarmuka terhadap interaksi klik/ketik pengguna (target: <= 200 milidetik).',
          'CLS (Cumulative Layout Shift) mengukur stabilitas visual untuk mencegah elemen melompat saat gambar/iklan termuat (target: <= 0.1).',
          'Teknik optimasi utama: Code Splitting (Dynamic Import / Lazy Loading), Image Optimization (WebP/AVIF dengan atribut width/height eksplisit), dan Font Preloading.'
        ],
        codeSnippet: {
          language: 'tsx',
          code: `import { lazy, Suspense } from 'react';

// Code Splitting: Komponen berat hanya diunduh saat dibutuhkan!
const HeavyDataChart = lazy(() => import('./HeavyDataChart'));

function AnalyticsDashboard() {
  return (
    <div>
      <h1>Laporan Penjualan</h1>
      {/* Suspense menampilkan fallback saat file JS chart sedang diunduh */}
      <Suspense fallback={<div className="spinner">Memuat modul visualisasi...</div>}>
        <HeavyDataChart />
      </Suspense>
    </div>
  );
}`,
          explanation:
            'Dynamic import memecah bundle JavaScript menjadi beberapa chunk kecil. Halaman utama dapat dimuat seketika tanpa menanggung beban ratusan KB library grafik.'
        },
        content: `### 1. Tiga Pilar Metrik Core Web Vitals
Google menetapkan tiga metrik objektif penentu kualitas pengalaman pengguna (*User Experience*):
1. **LCP (Largest Contentful Paint)**: Kecepatan memuat konten utama (gambar hero atau blok heading utama).
2. **INP (Interaction to Next Paint)**: Kecepatan browser menyajikan frame berikutnya setelah pengguna menekan tombol atau mengetik. INP menggantikan FID (First Input Delay).
3. **CLS (Cumulative Layout Shift)**: Menghitung total skor pergeseran tata letak tak terduga yang menyebabkan pengguna salah mengklik tombol.

---

### 2. Rumus Pencegahan CLS pada Media
Layout shift sering dipicu oleh gambar yang tidak mendeklarasikan rasio aspek atau dimensi:
\`\`\`html
<!-- SALAH: Browser tidak tahu rasio gambar sebelum file selesai diunduh -->
<img src="/banner.jpg" />

<!-- BENAR: Browser langsung memesan ruang kosong sebelum gambar diunduh -->
<img src="/banner.jpg" width="1200" height="600" style="aspect-ratio: 2/1;" />
\`\`\``
      }
    ],
    quiz: WEB_FRAMEWORK_QUIZZES['web_ssr_ssg_optimasi']
  }
];

export const WEB_FRAMEWORK_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Arsitektur & Rendering',
    name: 'Paradigma Deklaratif UI',
    formula: '\\text{UI} = f(\\text{state}) \\implies \\text{Perubahan Tampilan} = f(\\text{state}_{t+1}) - f(\\text{state}_t)',
    notes: 'Tampilan visual selalu merupakan refleksi deterministik dari data state saat ini.'
  },
  {
    category: 'Arsitektur & Rendering',
    name: 'Kompleksitas Heuristik Diffing VDOM',
    formula: '\\mathcal{O}(n^3) \\; \\xrightarrow{\\text{Heuristik Tipe & Key}} \\; \\mathcal{O}(n)',
    notes: 'Dua asumsi: elemen beda tipe merombak total sub-tree; elemen berulang dilacak via key unik.'
  },
  {
    category: 'State & Mutasi',
    name: 'Aturan Immutability JavaScript',
    formula: '\\text{shallowCopy} = \\{ \\dots\\text{obj}, \\; \\text{prop}: \\text{val} \\}, \\qquad [\\dots\\text{arr}, \\; \\text{newElem}]',
    notes: 'Wajib mengalokasikan alamat memori baru agar Object.is shallow equality memicu re-render.'
  },
  {
    category: 'Manajemen Efek',
    name: 'Siklus Efek & Pencegahan Memory Leak',
    formula: '\\text{useEffect}(\\text{setup}, [\\text{deps}]) \\implies \\text{cleanup}() \\; \\text{dieksekusi saat unmount/re-run}',
    notes: 'Selalu bersihkan listener, socket, dan timer untuk mencegah akumulasi memori di browser.'
  },
  {
    category: 'Asynchronous & Jaringan',
    name: 'Pembatalan Request AbortController',
    formula: '\\text{const } c = \\text{new AbortController}(); \\; \\text{fetch}(url, \\{ signal: c.signal \\}); \\; c.\\text{abort}()',
    notes: 'Memotong koneksi soket HTTP lama guna menghindari Race Condition akibat latensi jaringan.'
  },
  {
    category: 'Strategi Rendering',
    name: 'Trade-off Spektrum CSR / SSR / SSG',
    formula: '\\text{SSG (Build Time)} \\ll \\text{ISR (Periodic)} < \\text{SSR (Per Request TTFB)} \\ll \\text{CSR (Client FCP)}',
    notes: 'SSG memberikan TTFB tercepat via CDN; SSR menghasilkan data paling segar; CSR termudah dihosting.'
  },
  {
    category: 'Kinerja & Vitals',
    name: 'Batas Ambang Core Web Vitals Resmi',
    formula: '\\text{LCP} \\le 2.5\\text{s}, \\qquad \\text{INP} \\le 200\\text{ms}, \\qquad \\text{CLS} \\le 0.1',
    notes: 'Standar minimum pengalaman pengguna yang baik menurut Google Web Vitals.'
  },
  {
    category: 'Arsitektur Store',
    name: 'Transisi Reducer Deterministik',
    formula: 'S_{t+1} = R(S_t, A), \\quad \\text{di mana } R \\text{ adalah Pure Function tanpa efek samping}',
    notes: 'Fondasi arsitektur Redux/Zustand: state masa depan hanya bergantung pada state lama dan aksi.'
  }
];
