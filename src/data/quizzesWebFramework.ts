import type { QuizQuestion } from './curriculum';

export const WEB_FRAMEWORK_QUIZZES: Record<string, QuizQuestion[]> = {
  // =========================================================================
  // MODUL 1: FONDASI ARSITEKTUR WEB MODERN, DOM, VIRTUAL DOM & PARADIGMA REAKTIF (20 Soal)
  // =========================================================================
  web_fondasi_arsitektur: [
    {
      id: 'pwf-1-1',
      question: 'Apa perbedaan mendasar antara manipulasi Real DOM secara langsung dan konsep Virtual DOM pada framework modern?',
      options: [
        'Real DOM berjalan di server, sedangkan Virtual DOM berjalan di database',
        'Virtual DOM adalah representasi struktur pohon ringan dalam memori JavaScript yang menghitung selisih (diffing) sebelum menerapkan batch update ke Real DOM',
        'Real DOM selalu lebih cepat daripada Virtual DOM karena tidak memerlukan abstraksi memori tambahan',
        'Virtual DOM hanya dapat digunakan pada arsitektur website multi-page (MPA)'
      ],
      correctAnswer: 1,
      explanation: 'Virtual DOM adalah representasi struktur UI dalam memori JavaScript. Melalui proses diffing, framework menghitung perubahan minimal yang dibutuhkan dan menerapkannya secara batch ke Real DOM untuk meminimalkan reflow dan repaint browser yang mahal.'
    },
    {
      id: 'pwf-1-2',
      question: 'Mengapa operasi langsung pada Real DOM dianggap mahal secara komputasi bagi browser?',
      options: [
        'Karena Real DOM ditulis dalam bahasa assembly mesin',
        'Karena perubahan pada elemen Real DOM dapat memicu kalkulasi ulang tata letak (reflow/layout) dan penggambaran ulang piksel (repaint)',
        'Karena browser membatasi mutasi Real DOM maksimal 10 kali per detik',
        'Karena Real DOM tidak mendukung eksekusi asynchronous'
      ],
      correctAnswer: 1,
      explanation: 'Setiap kali node DOM dimutasi, browser harus menghitung ulang geometri elemen (reflow/layout) dan menggambar ulang piksel ke layar (repaint). Jika dilakukan berulang kali dalam satu frame, hal ini menyebabkan frame drop (jank).'
    },
    {
      id: 'pwf-1-3',
      question: 'Paradigma UI "Deklaratif" yang dianut framework modern bermakna bahwa pengembang:',
      options: [
        'Harus menuliskan setiap langkah imperatif bagaimana elemen dibuat, di-append, dan dihapus satu per satu',
        'Mendefinisikan tampilan UI sebagai fungsi dari state (UI = f(state)), membiarkan framework mengatur cara transisi DOM-nya',
        'Hanya mendeklarasikan variabel global tanpa komponen',
        'Wajib mendeklarasikan file HTML statis sebelum program dikompilasi'
      ],
      correctAnswer: 1,
      explanation: 'Dalam paradigma deklaratif, Anda mendeskripsikan "apa" yang harus ditampilkan berdasarkan state saat ini (UI = f(state)). Framework bertugas menangani "bagaimana" DOM diperbarui agar sesuai deskripsi tersebut.'
    },
    {
      id: 'pwf-1-4',
      question: 'Pada arsitektur Single Page Application (SPA), interaksi pergantian halaman pengguna terjadi dengan cara:',
      options: [
        'Browser meminta halaman HTML utuh baru dari web server setiap kali tautan diklik',
        'JavaScript memanipulasi DOM dan merender komponen baru secara dinamis di sisi klien tanpa me-reload dokumen HTML penuh',
        'Server memuat ulang seluruh berkas CSS dan JavaScript dari awal',
        'Hanya gambar yang diperbarui, teks halaman tetap permanen'
      ],
      correctAnswer: 1,
      explanation: 'SPA memuat satu dokumen HTML utama pada awal sesi. Navigasi selanjutnya dikelola di sisi klien menggunakan JavaScript yang mengganti komponen tampilan tanpa memuat ulang dokumen browser secara keseluruhan.'
    },
    {
      id: 'pwf-1-5',
      question: 'Algoritma rekonsiliasi (reconciliation / diffing) pada framework modern umumnya memiliki kompleksitas heuristik sebesar:',
      options: ['O(n^3)', 'O(n^2)', 'O(n)', 'O(log n)'],
      correctAnswer: 2,
      explanation: 'Algoritma diffing pohon umum membutuhkan waktu O(n^3). Framework modern menggunakan dua asumsi heuristik (dua elemen berbeda tipe akan menghasilkan pohon berbeda, dan elemen list dibedakan dengan key unik) sehingga kompleksitasnya tereduksi menjadi O(n).'
    },
    {
      id: 'pwf-1-6',
      question: 'Mengapa properti "key" yang stabil dan unik sangat krusial saat merender daftar elemen berulang (list rendering)?',
      options: [
        'Untuk mengatur urutan styling CSS flexbox',
        'Membantu algoritma rekonsiliasi mengidentifikasi elemen mana yang ditambah, dihapus, atau dipindahkan posisi antar render',
        'Wajib ada untuk keperluan SEO mesin pencari Google',
        'Menjamin bahwa array JavaScript tidak mengalami memory leak'
      ],
      correctAnswer: 1,
      explanation: 'Properti key berfungsi sebagai identitas unik bagi node. Dengan key yang stabil, framework dapat mencocokkan node lama dan baru secara presisi tanpa harus merusak dan membuat ulang elemen yang posisinya hanya bergeser.'
    },
    {
      id: 'pwf-1-7',
      question: 'Apa dampak buruk menggunakan indeks array (`index`) sebagai nilai properti "key" pada daftar yang elemennya dapat diurutkan ulang atau disaring?',
      options: [
        'Menyebabkan aplikasi langsung crash dengan error OutOfMemory',
        'Dapat menyebabkan bug rendering state internal komponen dan penurunan efisiensi diffing karena indeks elemen berubah',
        'Mengubah nilai tipe data array menjadi string',
        'Membuat HTTP request tambahan ke server'
      ],
      correctAnswer: 1,
      explanation: 'Jika urutan item berubah atau item dihapus di tengah, indeks array elemen akan bergeser. Komponen yang mempertahankan state lokal yang terkait dengan key lama akan salah menempelkan state ke item yang berbeda.'
    },
    {
      id: 'pwf-1-8',
      question: 'Proses "Hydration" pada arsitektur aplikasi web modern merujuk pada:',
      options: [
        'Pengunduhan gambar secara bertahap saat pengguna scroll halaman',
        'Proses di mana JavaScript di sisi klien mengambil alih HTML statis yang dikirim server dengan menempelkan event listener dan state reaktif',
        'Kompresi kode JavaScript menggunakan algoritma Brotli/Gzip',
        'Pembersihan cache browser lama secara periodik'
      ],
      correctAnswer: 1,
      explanation: 'Hydration adalah tahap di mana JavaScript sisi browser memeriksa HTML yang sebelumnya telah di-render oleh server, membangun pohon memori Virtual DOM, dan menempelkan handler interaktif (event listener) ke node DOM yang ada.'
    },
    {
      id: 'pwf-1-9',
      question: 'Siklus render browser terdiri dari urutan tahapan berikut secara berurutan:',
      options: [
        'Paint -> Layout -> Parse HTML -> Composite',
        'Parse HTML/CSS -> Render Tree -> Layout (Reflow) -> Paint -> Composite',
        'Composite -> Paint -> Layout -> Parse HTML',
        'Render Tree -> Parse HTML -> Paint -> Layout'
      ],
      correctAnswer: 1,
      explanation: 'Browser mem-parse HTML menjadi DOM dan CSS menjadi CSSOM, menggabungkannya menjadi Render Tree, menghitung koordinat ukuran setiap node (Layout/Reflow), mengisi piksel warna (Paint), lalu menumpuk layer grafis (Composite).'
    },
    {
      id: 'pwf-1-10',
      question: 'Bagaimana pendekatan "Fine-Grained Reactivity" (seperti pada SolidJS atau Svelte) berbeda dari pendekatan Virtual DOM (seperti React)?',
      options: [
        'Fine-grained reactivity tidak mengizinkan pengubahan state variabel',
        'Fine-grained reactivity mengikat subscriber langsung ke node DOM spesifik sehingga mutasi hanya memperbarui node tersebut tanpa menjalankan diffing seluruh pohon komponen',
        'Fine-grained reactivity mewajibkan render ulang seluruh halaman dari tag <html>',
        'Fine-grained reactivity hanya berjalan pada backend Node.js'
      ],
      correctAnswer: 1,
      explanation: 'Pendekatan reaktivitas murni (fine-grained) melacak dependensi secara atomik melalui sinyal/efek dan memutasi node DOM target secara langsung, mengeliminasi kebutuhan komparasi pohon Virtual DOM secara menyeluruh.'
    },
    {
      id: 'pwf-1-11',
      question: 'Apa fungsi utama dari JSX (JavaScript XML) dalam pengembangan antarmuka web modern?',
      options: [
        'Menggantikan bahasa pemrograman SQL di sisi frontend',
        'Menyediakan sintaks gula deklaratif mirip HTML yang dapat ditranspilasi menjadi panggilan fungsi JavaScript murni (seperti React.createElement)',
        'Mengizinkan penulisan instruksi biner langsung ke prosesor',
        'Menyimpan data pengguna secara terenkripsi di local storage'
      ],
      correctAnswer: 1,
      explanation: 'JSX adalah ekstensi sintaksis untuk JavaScript yang memungkinkan penulisan markup struktur UI yang elegan. Compiler (seperti Babel atau SWC) mengubah tag JSX menjadi pemanggilan fungsi pembuatan objek pohon elemen JavaScript.'
    },
    {
      id: 'pwf-1-12',
      question: 'Dalam konteks siklus event browser, apa peran dari Event Loop dan Microtask Queue dalam pembaruan UI framework?',
      options: [
        'Event loop hanya menangani transfer berkas FTP',
        'Microtask queue (seperti Promise dan queueMicrotask) diproses sebelum browser melakukan rendering dan repainting layar',
        'Browser selalu merender layar di setiap eksekusi sebuah baris kode JavaScript',
        'Microtask queue hanya dieksekusi saat pengguna menutup tab browser'
      ],
      correctAnswer: 1,
      explanation: 'JavaScript mengeksekusi call stack utama, lalu menguras antrean microtask (Promise callback) sampai habis, sebelum akhirnya browser memutuskan apakah frame saat ini perlu melakukan render/repaint.'
    },
    {
      id: 'pwf-1-13',
      question: 'Apa yang dimaksud dengan "Unidirectional Data Flow" (Aliran Data Satu Arah) pada framework web modern?',
      options: [
        'Data hanya boleh dikirim dari database langsung ke CSS',
        'State mengalir dari komponen induk (parent) turun ke komponen anak (child) melalui props, sedangkan anak mengirim event ke atas untuk meminta perubahan state',
        'Data tidak dapat dimodifikasi setelah halaman pertama kali dimuat',
        'Data mengalir secara acak ke seluruh komponen tanpa relasi hirarki'
      ],
      correctAnswer: 1,
      explanation: 'Aliran data satu arah memastikan bahwa komponen anak hanya menerima data dari atas (parent) sebagai props. Jika anak ingin memicu perubahan, ia memanggil callback event yang diteruskan oleh parent, menjaga prediktabilitas mutasi data.'
    },
    {
      id: 'pwf-1-14',
      question: 'Dalam Virtual DOM, istilah "Batching" merujuk pada mekanisme:',
      options: [
        'Mengirimkan 100 HTTP request sekaligus dalam satu waktu',
        'Mengelompokkan beberapa pembaruan state berturut-turut ke dalam satu siklus render tunggal untuk mencegah re-render berlebihan',
        'Membagi berkas JavaScript menjadi 50 file terpisah',
        'Menghapus seluruh cache memori browser setiap 5 detik'
      ],
      correctAnswer: 1,
      explanation: 'Batching menggabungkan beberapa pemanggilan perubahan state yang terjadi dalam satu konteks eksekusi menjadi satu kali evaluasi render dan commit ke Real DOM, menjaga kestabilan performa 60 FPS.'
    },
    {
      id: 'pwf-1-15',
      question: 'Konsep "Immutability" (Kekekalan Data) pada state framework modern sangat ditekankan karena:',
      options: [
        'Data yang kekal membutuhkan ruang RAM yang 100 kali lebih besar',
        'Pengecekan perubahan objek dapat dilakukan secara instan lewat perbandingan referensi memori (shallow equality check: objA !== objB)',
        'JavaScript tidak memiliki fitur untuk mengubah nilai array',
        'Immutability mencegah kode JavaScript dibaca oleh pengguna di inspect element'
      ],
      correctAnswer: 1,
      explanation: 'Dengan membuat salinan objek baru setiap kali ada mutasi state, framework dapat mendeteksi perubahan hanya dengan membandingkan referensi pointer (O(1)), tanpa perlu memindai seluruh properti objek secara mendalam (deep comparison).'
    },
    {
      id: 'pwf-1-16',
      question: 'Apa peran utama dari Webpack, Rollup, atau Vite dalam ekosistem pemrograman web modern?',
      options: [
        'Sebagai sistem operasi server web berbasis Linux',
        'Sebagai module bundler dan build tool yang mengompilasi, melakukan bundling modul, transpilasi, dan mengoptimasi aset web untuk produksi',
        'Sebagai basis data relasional di browser',
        'Sebagai pengganti protokol TCP/IP jaringan'
      ],
      correctAnswer: 1,
      explanation: 'Build tool dan bundler bertugas menyatukan modul-modul modular (ES Modules), mentranspilasi JSX/TypeScript, menghapus kode mati (tree-shaking), dan meminimasi berkas untuk menghasilkan bundel aset statis yang efisien.'
    },
    {
      id: 'pwf-1-17',
      question: 'Teknik "Tree Shaking" pada proses bundling framework bertujuan untuk:',
      options: [
        'Membuat struktur pohon direktori folder baru di server',
        'Mengeliminasi fungsi, kelas, atau modul yang tidak pernah dipanggil/digunakan (dead code elimination) dari bundel akhir',
        'Menyusun urutan animasi transisi halaman',
        'Memeriksa integritas kabel koneksi jaringan internet'
      ],
      correctAnswer: 1,
      explanation: 'Tree shaking memanfaatkan struktur statis dari ES Module (`import` dan `export`) untuk menganalisis kode yang tidak pernah diimpor atau dieksekusi, lalu mencoretnya dari bundel produksi demi memperkecil ukuran file.'
    },
    {
      id: 'pwf-1-18',
      question: 'Pada arsitektur React Fiber, tujuan utama perombakan internal mesin rekonsiliasi adalah:',
      options: [
        'Mengubah bahasa pemrograman JavaScript menjadi Python',
        'Memungkinkan proses rekonsiliasi dapat dijeda (pause), diaborsi, atau diprioritaskan berdasarkan urgensi interaksi pengguna (concurrency)',
        'Menghapus penggunaan Virtual DOM sepenuhnya',
        'Mewajibkan penulisan komponen dalam format XML murni'
      ],
      correctAnswer: 1,
      explanation: 'Fiber merepresentasikan unit kerja sebagai struktur data linked-list yang memungkinkan scheduler menjeda kalkulasi render berbobot berat untuk merespons input ketikan atau sentuhan pengguna terlebih dahulu agar UI tetap responsif.'
    },
    {
      id: 'pwf-1-19',
      question: 'Perbedaan mendasar antara "Hot Module Replacement" (HMR) dan "Live Reloading" konvensional saat development adalah:',
      options: [
        'HMR memuat ulang seluruh halaman tab browser secara penuh setiap kali ada kode berubah',
        'HMR menyuntikkan modul kode yang diperbarui langsung ke aplikasi yang sedang berjalan tanpa me-refresh halaman dan tanpa merusak state saat itu',
        'Live reloading hanya bekerja pada berkas gambar',
        'HMR hanya dapat dijalankan di lingkungan server staging'
      ],
      correctAnswer: 1,
      explanation: 'HMR mengganti modul yang diedit secara runtime via WebSocket server pengembang. State aplikasi tetap tersimpan tanpa reload penuh, mempercepat siklus feedback pengembangan secara drastis.'
    },
    {
      id: 'pwf-1-20',
      question: 'Apa fungsi dari atribut "Shadow DOM" dalam spesifikasi standar Web Components?',
      options: [
        'Memberikan efek bayangan visual kotak (box-shadow) menggunakan CSS',
        'Mengisolasi pohon DOM internal dan aturan CSS komponen agar tidak bocor keluar dan tidak terpengaruh oleh style global halaman luar',
        'Menyembunyikan kode JavaScript agar tidak dapat diakses oleh browser',
        'Mengalihkan rendering grafis ke GPU eksternal'
      ],
      correctAnswer: 1,
      explanation: 'Shadow DOM menyediakan enkapsulasi sejati pada level browser: elemen dan CSS di dalam shadow tree terisolasi sepenuhnya dari dokumen utama, mencegah tabrakan penamaan kelas CSS secara native.'
    }
  ],

  // =========================================================================
  // MODUL 2: ARSITEKTUR KOMPONEN, PROPS, REACTIVE STATE & EVENT HANDLING (20 Soal)
  // =========================================================================
  web_komponen_state: [
    {
      id: 'pwf-2-1',
      question: 'Perbedaan fundamental antara "Props" dan "State" dalam arsitektur komponen adalah:',
      options: [
        'Props bersifat dapat diubah secara bebas oleh komponen penerima, sedangkan State bersifat konstan selamanya',
        'Props adalah parameter masukan eksternal yang diwariskan dari parent (read-only), sedangkan State adalah data internal yang dikelola dan dapat dimutasi oleh komponen itu sendiri',
        'Props disimpan di local storage, sedangkan State disimpan di session storage',
        'Props hanya berisi angka numerik, sedangkan State hanya berisi string teks'
      ],
      correctAnswer: 1,
      explanation: 'Props bersifat immutable bagi komponen penerima (hanya boleh dibaca). Sebaliknya, State adalah keadaan internal milik komponen yang jika nilainya diperbarui melalui fungsi setter, akan memicu render ulang komponen.'
    },
    {
      id: 'pwf-2-2',
      question: 'Dalam React, mengapa mutasi state langsung seperti `this.state.count = 5` atau `state.count = 5` dianggap sebagai anti-pattern fatal?',
      options: [
        'Karena JavaScript akan melempar syntax error pada runtime',
        'Karena mutasi langsung tidak memicu siklus rekonsiliasi dan re-render framework, menyebabkan UI tidak sinkron dengan data',
        'Karena variabel count akan otomatis dihapus dari memori',
        'Karena browser akan otomatis menutup koneksi HTTPS'
      ],
      correctAnswer: 1,
      explanation: 'Framework reaktif mendeteksi kebutuhan render melalui pemanggilan fungsi dispatcher/setter (misalnya `setCount(5)`). Mengubah properti objek secara langsung tidak memicu sinyal pembaruan tampilan ke scheduler.'
    },
    {
      id: 'pwf-2-3',
      question: 'Apa yang dimaksud dengan "Pure Component" atau "Pure Function" dalam konteks UI komponen?',
      options: [
        'Komponen yang tidak memiliki baris kode lebih dari 10 baris',
        'Komponen yang selalu menghasilkan output render yang identik untuk input props/state yang sama tanpa efek samping (side effects) ke luar',
        'Komponen yang hanya ditulis menggunakan HTML tanpa JavaScript',
        'Komponen yang langsung berkomunikasi dengan database SQL'
      ],
      correctAnswer: 1,
      explanation: 'Komponen murni bersifat deterministik: output tampilan sepenuhnya ditentukan oleh props dan state yang masuk, serta tidak memodifikasi objek global atau memicu efek samping saat proses render berlangsung.'
    },
    {
      id: 'pwf-2-4',
      question: 'Pada React Hooks, apa aturan mutlak (Rules of Hooks) yang harus dipatuhi saat memanggil hook seperti `useState` atau `useEffect`?',
      options: [
        'Harus dipanggil di dalam blok loop `for` agar dieksekusi berulang',
        'Hanya boleh dipanggil pada level teratas komponen fungsi dan tidak boleh di dalam conditional statement (`if`), loop, atau nested function',
        'Wajib dipanggil setelah return statement',
        'Hanya boleh dipanggil jika komponen memiliki lebih dari 3 props'
      ],
      correctAnswer: 1,
      explanation: 'Framework melacak state hook berdasarkan urutan pemanggilan indeks array terurut pada setiap render. Menyimpan hook di dalam percabangan `if` atau loop dapat merusak urutan pendaftaran hook internal.'
    },
    {
      id: 'pwf-2-5',
      question: 'Apa kegunaan dari array dependensi pada hook `useEffect(callback, [depA, depB])`?',
      options: [
        'Membatasi jumlah memori yang digunakan oleh callback',
        'Menentukan kapan callback efek harus dijalankan ulang: efek hanya dieksekusi jika salah satu nilai dependensi mengalami perubahan nilai antar render',
        'Mengurutkan eksekusi animasi CSS',
        'Mengirimkan dependensi ke server backend via POST'
      ],
      correctAnswer: 1,
      explanation: 'Array dependensi bertindak sebagai penjaga (guard). Framework melakukan perbandingan nilai lama dan baru menggunakan `Object.is()`. Jika tidak ada dependensi yang berubah, callback efek dilewati untuk menghemat komputasi.'
    },
    {
      id: 'pwf-2-6',
      question: 'Fungsi pembersih (cleanup function) yang dikembalikan oleh `useEffect` berfungsi untuk:',
      options: [
        'Menghapus riwayat cache browser pengguna',
        'Membatalkan langganan (unsubscribe), membersihkan timer/interval, atau mencabut event listener sebelum komponen di-unmount atau sebelum efek dijalankan ulang',
        'Menghapus database IndexedDB lokal',
        'Me-restart server web pengembang'
      ],
      correctAnswer: 1,
      explanation: 'Cleanup function memastikan tidak terjadi kebocoran memori (memory leaks) atau eksekusi callback liar dari timer/listener yang tertinggal setelah komponen dilepas dari DOM.'
    },
    {
      id: 'pwf-2-7',
      question: 'Apa perbedaan antara "Controlled Component" dan "Uncontrolled Component" pada penanganan form input?',
      options: [
        'Controlled form menggunakan AJAX, uncontrolled form menggunakan form action POST bawaan HTML',
        'Pada controlled component, nilai input dikendalikan sepenuhnya oleh state framework via value dan onChange; pada uncontrolled component, nilai dipegang langsung oleh node DOM (diakses via ref)',
        'Uncontrolled component selalu memvalidasi data menggunakan Regex secara otomatis',
        'Controlled component tidak dapat digunakan untuk input tipe password'
      ],
      correctAnswer: 1,
      explanation: 'Controlled component menjadikan state aplikasi sebagai "single source of truth" bagi input. Uncontrolled component membiarkan elemen form browser menyimpan nilai internalnya sendiri yang sewaktu-waktu dibaca via `useRef`.'
    },
    {
      id: 'pwf-2-8',
      question: 'Hook `useMemo` digunakan untuk mengoptimasi performa aplikasi dengan cara:',
      options: [
        'Menyimpan seluruh halaman web ke dalam Local Storage',
        'Meng-cache (memoize) hasil kalkulasi fungsi komputasi berat dan hanya menghitung ulang ketika dependensinya berubah',
        'Mencegah komponen melakukan HTTP request',
        'Mengompresi gambar secara otomatis'
      ],
      correctAnswer: 1,
      explanation: '`useMemo` membungkus operasi komputasi berbobot tinggi. Jika props/state dalam array dependensi tidak berubah antar siklus render, nilai kalkulasi yang tersimpan di memori langsung dikembalikan tanpa kalkulasi ulang.'
    },
    {
      id: 'pwf-2-9',
      question: 'Kapan hook `useCallback(fn, deps)` paling tepat digunakan?',
      options: [
        'Untuk memanggil API backend setiap detik',
        'Untuk mempertahankan referensi fungsi yang sama antar render agar komponen anak yang dioptimasi dengan `React.memo` tidak mengalami re-render yang tidak perlu',
        'Untuk menggantikan fungsi return pada komponen',
        'Untuk mengubah fungsi sync menjadi async secara otomatis'
      ],
      correctAnswer: 1,
      explanation: 'Setiap kali komponen render ulang, fungsi baru dengan alamat referensi baru tercipta. `useCallback` menjaga alamat referensi fungsi tetap sama selama dependensinya tidak berubah, mencegah re-render komponen anak berbasis shallow comparison.'
    },
    {
      id: 'pwf-2-10',
      question: 'Bagaimana penanganan event ("Event Handling") pada framework modern seperti React mengelola event browser asli?',
      options: [
        'Framework menempelkan ribuan event listener asli langsung ke setiap node tombol di DOM',
        'Framework menggunakan sistem delegasi event terpusat (SyntheticEvent) yang membungkus event native browser dan mendengarkan event pada root container',
        'Framework menonaktifkan seluruh event mouse dan keyboard',
        'Framework mengubah event browser menjadi WebSocket message'
      ],
      correctAnswer: 1,
      explanation: 'Melalui event delegation, framework memasang listener terpusat di root aplikasi dan membungkus event asli browser dalam objek `SyntheticEvent` yang dinormalisasi agar konsisten di semua peramban (cross-browser consistency).'
    },
    {
      id: 'pwf-2-11',
      question: 'Apa fungsi utama dari hook `useRef` selain untuk mengakses elemen DOM secara langsung?',
      options: [
        'Menyimpan data persisten yang jika nilainya diubah TIDAK memicu re-render komponen',
        'Menggantikan fungsi `useState` untuk semua kasus',
        'Menghubungkan aplikasi ke server Redis',
        'Mereset form input secara otomatis setiap render'
      ],
      correctAnswer: 0,
      explanation: '`useRef` mengembalikan objek mutabel `{ current: initialValue }` yang bertahan sepanjang masa hidup komponen. Mengubah properti `.current` tidak memicu siklus render ulang, ideal untuk menyimpan timer ID atau nilai sebelumnya.'
    },
    {
      id: 'pwf-2-12',
      question: 'Pola "Lifting State Up" (Menaikkan State ke Parent) diaplikasikan ketika:',
      options: [
        'Dua atau lebih komponen saudara (sibling components) membutuhkan sinkronisasi data yang sama yang dikelola bersama oleh parent terdekat mereka',
        'Aplikasi ingin memindahkan database lokal ke cloud server',
        'Komponen memiliki lebih dari 100 baris kode',
        'State ingin diubah menjadi konstanta global window'
      ],
      correctAnswer: 0,
      explanation: 'Jika dua komponen saudara membutuhkan akses ke data yang sama, state dipindahkan ke komponen induk bersama (common ancestor) terdekat, lalu diteruskan ke bawah sebagai props dan fungsi callback pembaru.'
    },
    {
      id: 'pwf-2-13',
      question: 'Masalah "Prop Drilling" dalam arsitektur komponen bertingkat terjadi ketika:',
      options: [
        'Props mengalami overflow karena ukuran data terlalu besar',
        'Props harus diteruskan melalui banyak komponen perantara yang sebenarnya tidak memerlukan data tersebut, hanya demi mencapai komponen target di hierarki dalam',
        'Komponen menolak menerima props dari parent',
        'Props bocor dan terbaca oleh website lain di browser yang sama'
      ],
      correctAnswer: 1,
      explanation: 'Prop drilling adalah kondisi ketika data harus "dibor" melewati lapisan-lapisan komponen perantara yang tidak berkepentingan, membuat pemeliharaan kode menjadi rapuh dan rawan kesalahan saat restrukturisasi tree.'
    },
    {
      id: 'pwf-2-14',
      question: 'Apa peran dari `React.memo` (atau fungsi memoization komponen) pada framework modern?',
      options: [
        'Menghapus memori komponen yang tidak aktif secara paksa',
        'Membungkus komponen agar hanya me-render ulang jika terdapat perubahan nilai pada props-nya (shallow prop comparison)',
        'Mengizinkan komponen dijalankan di thread Web Worker',
        'Mengubah komponen fungsional menjadi class component'
      ],
      correctAnswer: 1,
      explanation: '`React.memo` adalah higher-order component yang membandingkan props baru dan lama. Jika props bernilai sama, framework melewatkan proses rendering komponen tersebut beserta seluruh sub-pohon di bawahnya.'
    },
    {
      id: 'pwf-2-15',
      question: 'Dalam penanganan state asynchronous, apa yang dimaksud dengan fenomena "Stale Closure" pada Hooks?',
      options: [
        'Kondisi di mana server database menutup koneksi jaringan',
        'Fungsi callback (seperti dalam setTimeout atau event listener) menangkap nilai variabel state versi lama karena closure terkunci saat render sebelumnya',
        'Kode CSS yang tidak diperbarui di browser',
        'Proses kompilasi Babel yang mengalami kegagalan'
      ],
      correctAnswer: 1,
      explanation: 'Stale closure terjadi ketika fungsi callback asynchronous mengacu pada variabel state di lingkup leksikal render masa lalu karena array dependensi tidak menyertakan variabel tersebut, sehingga nilai yang dibaca adalah nilai usang.'
    },
    {
      id: 'pwf-2-16',
      question: 'Bagaimana cara mencegah "Stale Closure" saat memperbarui state yang bergantung pada nilai state sebelumnya?',
      options: [
        'Menggunakan functional update form: `setCount(prevCount => prevCount + 1)`',
        'Menggunakan operator `delete state.count`',
        'Memanggil `window.location.reload()` di dalam fungsi',
        'Menonaktifkan strict mode framework'
      ],
      correctAnswer: 0,
      explanation: 'Dengan meneruskan fungsi mutator `(prevState) => newState` ke setter state, framework menjamin bahwa argumen yang diterima adalah nilai state paling mutakhir saat aksi dieksekusi di queue.'
    },
    {
      id: 'pwf-2-17',
      question: 'Pada arsitektur Vue.js, konsep `v-model` merupakan abstraksi sintaksis dari:',
      options: [
        'Penggabungan binding properti `:value` dan event listener `@input` / `@update:modelValue`',
        'Perintah query langsung ke database MongoDB',
        'Pengunduhan berkas model machine learning ke browser',
        'Eksekusi fungsi middleware di sisi server'
      ],
      correctAnswer: 0,
      explanation: '`v-model` adalah syntactic sugar untuk two-way data binding: di balik layar, ia mengikat nilai atribut input ke state (`:modelValue`) dan mendengarkan event emisi pembaruan (`@update:modelValue`).'
    },
    {
      id: 'pwf-2-18',
      question: 'Komposisi komponen menggunakan teknik "Render Props" atau "Slots" bertujuan untuk:',
      options: [
        'Mempercepat waktu booting server backend',
        'Mendelegasikan kendali bagaimana bagian UI tertentu dirender dari komponen pembungkus (wrapper) ke komponen pemanggil dengan fleksibilitas tinggi',
        'Mengurangi jumlah baris kode CSS sebesar 50%',
        'Mengenkripsi kode sumber komponen dari inspeksi browser'
      ],
      correctAnswer: 1,
      explanation: 'Teknik render props dan slots memungkinkan pemisahan logika kontainer dari representasi visual: kontainer mengelola data/state, sedangkan pemanggil menentukan representasi JSX/template yang ingin disuntikkan ke dalamnya.'
    },
    {
      id: 'pwf-2-19',
      question: 'Apa fungsi dari hook `useReducer` dibandingkan dengan `useState` sederhana?',
      options: [
        'Mengurangi ukuran file bundel JavaScript',
        'Mengelola transisi state yang kompleks dengan logika aksi terpusat (dispatch action) mengikuti pola Redux/state machine',
        'Menghubungkan komponen ke Web Worker secara paralel',
        'Hanya digunakan untuk operasi pengurangan matematika'
      ],
      correctAnswer: 1,
      explanation: '`useReducer` memisahkan logika pembaruan state ("bagaimana state berubah" dalam fungsi reducer murni) dari pemicu perubahan ("apa yang terjadi" via dispatch action), ideal untuk state yang memiliki banyak sub-nilai dependen.'
    },
    {
      id: 'pwf-2-20',
      question: 'Mengapa mutasi array pada state framework modern harus menggunakan metode seperti `.map()`, `.filter()`, atau spread operator `[...arr]` daripada `.push()` atau `.splice()`?',
      options: [
        'Karena `.push()` tidak didukung oleh browser modern',
        'Metode immutability mengembalikan instance array baru sehingga referensi memori berubah dan framework mendeteksi adanya mutasi untuk memicu re-render',
        'Karena metode mutatif akan mengubah tipe data elemen menjadi null',
        'Karena `.map()` berjalan langsung di hardware GPU'
      ],
      correctAnswer: 1,
      explanation: 'Metode `.push()` dan `.splice()` memodifikasi array di tempat (in-place) tanpa mengubah alamat referensinya di memori. Framework yang melakukan pengecekan dangkal (`prev !== next`) akan mengira array tidak berubah sehingga gagal merender ulang.'
    }
  ],

  // =========================================================================
  // MODUL 3: CLIENT-SIDE ROUTING SPA, ROUTE GUARDS & GLOBAL STATE MANAGEMENT (20 Soal)
  // =========================================================================
  web_routing_state_global: [
    {
      id: 'pwf-3-1',
      question: 'Bagaimana cara browser router di sisi klien (Client-Side Routing) mengubah URL di address bar tanpa memicu refresh halaman penuh?',
      options: [
        'Memanfaatkan HTML5 History API (`window.history.pushState` dan event `popstate`)',
        'Mengirimkan perintah reboot ke web server via SSH',
        'Memanipulasi berkas DNS lokal sistem operasi pengguna',
        'Menggunakan tag `<meta http-equiv="refresh">` berulang kali'
      ],
      correctAnswer: 0,
      explanation: 'HTML5 History API menyediakan metode `history.pushState()` dan `history.replaceState()` yang memungkinkan perubahan URL dan entri riwayat navigasi secara dinamis tanpa mengirimkan request HTTP baru ke server.'
    },
    {
      id: 'pwf-3-2',
      question: 'Masalah "404 Not Found saat Reload Halaman" pada deployment SPA statis di hosting umum diatasi dengan konfigurasi server:',
      options: [
        'Menghapus seluruh file JavaScript di server',
        'Mengarahkan seluruh rute permintaan yang tidak cocok dengan file fisik (fallback rewrite) kembali ke `index.html`',
        'Mengganti port server menjadi port 8080',
        'Mematikan firewall server web'
      ],
      correctAnswer: 1,
      explanation: 'Pada SPA, rute seperti `/dashboard/users` hanya ada dalam memori JavaScript klien. Web server fisik harus dikonfigurasi untuk mengalihkan semua permintaan rute (URL rewrite) ke `index.html` agar router JavaScript dapat mem-parse URL tersebut.'
    },
    {
      id: 'pwf-3-3',
      question: 'Apa fungsi dari "Route Guards" (atau Navigation Guards / Protected Routes) dalam router framework?',
      options: [
        'Mengenkripsi URL agar tidak dapat dibaca di address bar',
        'Mencegah akses navigasi ke rute tertentu (misalnya halaman admin) sebelum memenuhi syarat otentikasi atau hak akses pengguna',
        'Membatasi kecepatan koneksi internet pengguna',
        'Memblokir iklan banner pihak ketiga'
      ],
      correctAnswer: 1,
      explanation: 'Route guard adalah fungsi pemeriksa yang dieksekusi sebelum rute dituju. Jika pengguna belum login atau tidak memiliki role yang valid, guard dapat membatalkan navigasi atau mengalihkannya ke halaman login.'
    },
    {
      id: 'pwf-3-4',
      question: 'Fitur "Nested Routes" (Rute Bersarang) pada router modern sangat bermanfaat untuk membangun antarmuka yang memiliki:',
      options: [
        'Basis data relasional di sisi klien',
        'Tata letak bersama (persistent layout / shell) di mana hanya sub-bagian halaman yang berubah saat URL anak dikunjungi',
        'Lebih dari 10 tautan eksternal ke website lain',
        'Animasi partikel 3D menggunakan WebGL'
      ],
      correctAnswer: 1,
      explanation: 'Nested routes memungkinkan hierarki URL dipetakan ke hierarki layout komponen: parent layout (seperti sidebar dan header) tetap bertahan dan tidak re-mount, sementara komponen `<Outlet />` anak berubah sesuai rute sub-URL.'
    },
    {
      id: 'pwf-3-5',
      question: 'Pola arsitektur manajemen state "Flux" memecahkan masalah aliran data tidak teratur dengan cara menerapkan:',
      options: [
        'Two-way data binding tanpa batas antar semua komponen',
        'Arsitektur unidirectional: Action -> Dispatcher -> Store -> View, di mana View memicu Action untuk memodifikasi Store',
        'Penyimpanan seluruh data di cookie browser',
        'Pemanggilan fungsi SQL langsung dari dalam template'
      ],
      correctAnswer: 1,
      explanation: 'Pola Flux menetapkan aturan bahwa data hanya mengalir satu arah: View tidak boleh memutasi Store secara langsung, melainkan harus mendispatch Action terstruktur ke Dispatcher untuk diproses oleh Store.'
    },
    {
      id: 'pwf-3-6',
      question: 'Dalam Redux, fungsi "Reducer" wajib memiliki karakteristik utama sebagai:',
      options: [
        'Fungsi asynchronous yang melakukan request AJAX ke API',
        'Fungsi murni (Pure Function) yang menerima `(previousState, action)` dan mengembalikan `newState` tanpa efek samping',
        'Fungsi yang memanipulasi elemen DOM secara langsung',
        'Fungsi generator yang berjalan di latar belakang'
      ],
      correctAnswer: 1,
      explanation: 'Reducer murni menjamin bahwa pembaruan state dapat diprediksi secara matematis (deterministic), memungkinkan fitur time-travel debugging dan pembatalan state secara konsisten.'
    },
    {
      id: 'pwf-3-7',
      question: 'Apa fungsi dari "Middleware" (seperti Redux Thunk atau Redux Saga) dalam ekosistem global state?',
      options: [
        'Sebagai middleware keamanan SSL di sisi web server',
        'Menyediakan titik pencegat (interceptor) antara aksi yang didispatch dan reducer untuk menangani operasi asynchronous atau efek samping',
        'Mengonversi file TypeScript menjadi berkas binary',
        'Memperkecil ukuran gambar yang ditampilkan di browser'
      ],
      correctAnswer: 1,
      explanation: 'Karena reducer harus berupa fungsi murni yang synchronous, operasi async (seperti pemanggilan API jaringan atau timer) ditangani oleh middleware sebelum aksi final yang membawa data diteruskan ke reducer.'
    },
    {
      id: 'pwf-3-8',
      question: 'Kelemahan performa utama dari penggunaan React Context API murni untuk data yang frekuensi perubahannya sangat tinggi adalah:',
      options: [
        'Context API tidak mendukung tipe data array',
        'Semua komponen yang mengonsumsi Context (`useContext`) akan me-render ulang setiap kali nilai context berubah, meskipun komponen hanya memakai sebagian kecil field yang tidak berubah',
        'Context API membatasi penyimpanan memori maksimal 5 KB',
        'Context API hanya dapat digunakan pada satu halaman'
      ],
      correctAnswer: 1,
      explanation: 'Secara default, Context API tidak memiliki mekanisme selektor atomik bawaan. Jika sebuah objek di context diperbarui, seluruh komponen konsumen di pohon UI akan dipaksa me-render ulang.'
    },
    {
      id: 'pwf-3-9',
      question: 'Pustaka manajemen state berbasis selektor atomik (seperti Zustand atau Redux Toolkit dengan `useSelector`) mengoptimasi render dengan cara:',
      options: [
        'Menyimpan seluruh data di URL hash',
        'Mengizinkan komponen berlangganan hanya ke slice data spesifik dan hanya me-render ulang jika nilai selektor tersebut berubah',
        'Menjalankan kode di server backend tanpa melibatkan klien',
        'Menonaktifkan garbage collection browser'
      ],
      correctAnswer: 1,
      explanation: 'Dengan selektor atomik (`const userName = useStore(state => state.user.name)`), komponen hanya mendengarkan mutasi pada properti `name`. Pembaruan pada properti store lain tidak akan memicu re-render pada komponen tersebut.'
    },
    {
      id: 'pwf-3-10',
      question: 'Apa peran dari parameter URL dinamis (Path Parameters, contoh: `/users/:id`) pada router framework?',
      options: [
        'Sebagai query database rahasia yang dienkripsi',
        'Mendefinisikan segmen URL yang bervariasi nilainya dan dapat diekstrak oleh komponen melalui hook (misalnya `useParams`)',
        'Mengidentifikasi alamat IP server fisik',
        'Menentukan versi browser yang boleh mengakses halaman'
      ],
      correctAnswer: 1,
      explanation: 'Path parameters memungkinkan sebuah pola rute tunggal menangani banyak entitas data dinamis. Komponen dapat membaca nilai parameter `:id` untuk kemudian memicu pemanggilan data spesifik dari API.'
    },
    {
      id: 'pwf-3-11',
      question: 'Apa fungsi dari "Query Parameters" (contoh: `/search?keyword=react&page=2`) dibandingkan path parameters?',
      options: [
        'Hanya digunakan untuk mengirimkan password pengguna',
        'Menyimpan state opsional seperti filter, pencarian, pengurutan, atau pagination yang dapat dibagikan (shareable) via link URL',
        'Query parameters wajib bernilai bilangan bulat saja',
        'Query parameters tidak dapat dibaca oleh JavaScript klien'
      ],
      correctAnswer: 1,
      explanation: 'Query parameters sangat ideal untuk state yang mendeskripsikan kondisi tampilan (seperti pencarian, filter, dan pagination) sehingga pengguna dapat membagikan URL atau menyimpannya di bookmark dengan hasil yang identik.'
    },
    {
      id: 'pwf-3-12',
      question: 'Konsep "State Normalization" dalam manajemen global state bertingkat merekomendasikan struktur data yang:',
      options: [
        'Menyimpan objek bersarang sedalam mungkin (deeply nested array of objects)',
        'Menyusun entitas data seperti tabel database relasional (menggunakan kamus `byId` dan array `allIds`) untuk mencegah duplikasi dan memudahkan mutasi',
        'Mengonversi seluruh string menjadi huruf kapital',
        'Menyimpan seluruh data sebagai string JSON tunggal'
      ],
      correctAnswer: 1,
      explanation: 'Normalisasi memecah data relasional bersarang menjadi struktur flat berindeks ID (`byId: { 1: {...}, 2: {...} }`). Hal ini mengeliminasi duplikasi data dan membuat pembaruan entitas tunggal menjadi O(1) tanpa menyalin pohon dalam.'
    },
    {
      id: 'pwf-3-13',
      question: 'Apa yang dimaksud dengan "Code Splitting" berbasis rute (Route-based Code Splitting) menggunakan dynamic import (`import()`)?',
      options: [
        'Membelah kode program menjadi dua bahasa pemrograman yang berbeda',
        'Memecah bundel aplikasi menjadi potongan-potongan terpisah (chunks) dan hanya mengunduh kode rute tersebut ketika pengguna bernavigasi ke halamannya',
        'Menghapus kode JavaScript setelah dieksekusi satu kali',
        'Memisahkan kode HTML ke dalam file PDF'
      ],
      correctAnswer: 1,
      explanation: 'Alih-alih mengunduh satu berkas JavaScript raksasa di awal, route-based code splitting memuat kode halaman secara lazy-loading hanya saat pengguna mengakses rute tersebut, memangkas waktu First Contentful Paint secara dramatis.'
    },
    {
      id: 'pwf-3-14',
      question: 'Bagaimana penanganan rute liar (Wildcard / Catch-all Route, contoh: `path="*"`) dimanfaatkan dalam router?',
      options: [
        'Untuk mematikan koneksi pengguna yang mencurigakan',
        'Menangkap seluruh URL yang tidak cocok dengan definisi rute yang ada untuk menampilkan halaman khusus 404 Not Found',
        'Mengalihkan pengguna langsung ke halaman eksternal Google',
        'Menghapus history navigasi sebelumnya'
      ],
      correctAnswer: 1,
      explanation: 'Rute wildcard `*` diletakkan di akhir hierarki konfigurasi rute untuk menangkap semua URL yang tidak terdaftar dan menyajikan tampilan fallback yang ramah pengguna (halaman 404 kustom).'
    },
    {
      id: 'pwf-3-15',
      question: 'Pola "Finite State Machine" (FSM, seperti XState) dalam manajemen state antarmuka bertujuan untuk:',
      options: [
        'Menghilangkan kebutuhan akan backend server',
        'Mencegah aplikasi berada pada "impossible state" dengan mendefinisikan secara tegas status-status yang valid dan transisi yang diizinkan antar status',
        'Mempercepat kecepatan koneksi internet pengguna',
        'Mengenkripsi kode aplikasi menggunakan algoritma AES-256'
      ],
      correctAnswer: 1,
      explanation: 'FSM mencegah kondisi inkonsisten (seperti state `isLoading: true` bersamaan dengan `isSuccess: true`) dengan membatasi sistem hanya boleh berada di tepat satu status eksplisit pada suatu waktu dengan aturan transisi yang terverifikasi.'
    },
    {
      id: 'pwf-3-16',
      question: 'Pada Pinia (state management Vue 3), apa perbedaan utama dibandingkan arsitektur Vuex klasik?',
      options: [
        'Pinia tidak mendukung TypeScript',
        'Pinia menghapus konsep "Mutation" yang bertele-tele dan mendukung modular store secara langsung dengan inferensi TypeScript otomatis',
        'Pinia hanya boleh digunakan di terminal konsol',
        'Pinia memerlukan server backend Java untuk berjalan'
      ],
      correctAnswer: 1,
      explanation: 'Pinia membuang mutation yang sebelumnya memisahkan aksi sync dan async di Vuex. Di Pinia, aksi dapat langsung memodifikasi state secara reaktif dengan dukungan autocomplete TypeScript yang superior.'
    },
    {
      id: 'pwf-3-17',
      question: 'Apa fungsi dari komponen `<Suspense>` yang membungkus komponen rute lazy-loaded?',
      options: [
        'Menunda eksekusi aplikasi hingga browser mendapatkan izin kamera',
        'Menampilkan UI fallback (seperti skeleton loader atau spinner) secara deklaratif saat komponen anak sedang dalam proses pengunduhan kode atau data asinkron',
        'Mematikan rendering halaman jika terjadi error jaringan',
        'Menyimpan rekaman video layar pengguna'
      ],
      correctAnswer: 1,
      explanation: '`<Suspense fallback={<Spinner />}>` menangkap proses asynchronous (seperti lazy loading modul atau resource promise) di komponen anaknya dan secara otomatis merender UI cadangan sampai modul siap dipasang ke DOM.'
    },
    {
      id: 'pwf-3-18',
      question: 'Peristiwa "popstate" pada browser terpicu ketika:',
      options: [
        'Komponen mengalami crash runtime',
        'Pengguna menekan tombol "Back" atau "Forward" pada browser untuk berpindah riwayat navigasi aktif',
        'Pengguna menutup tab browser secara paksa',
        'Pengguna mengklik tombol refresh F5'
      ],
      correctAnswer: 1,
      explanation: 'Event `window.onpopstate` ditembakkan oleh browser saat entri riwayat aktif berubah akibat navigasi tombol kembali/maju, memungkinkan router SPA memperbarui komponen sesuai URL riwayat yang baru.'
    },
    {
      id: 'pwf-3-19',
      question: 'Dalam arsitektur micro-frontend, bagaimana state dan rute antar aplikasi mandiri biasanya dikoordinasikan?',
      options: [
        'Menggunakan satu variabel global window raksasa yang dibagikan tanpa proteksi',
        'Menggunakan Custom Events standar browser (`window.dispatchEvent`) atau pesan terisolasi (Event Bus / PostMessage) untuk menjaga decoupling aplikasi',
        'Menggabungkan seluruh kode sumber ke dalam satu file tunggal berukuran 100 MB',
        'Menonaktifkan navigasi rute di semua sub-aplikasi'
      ],
      correctAnswer: 1,
      explanation: 'Untuk menjaga decoupling antar aplikasi mikro independen, komunikasi rute dan state lintas aplikasi menggunakan kontrak event berbasis CustomEvent browser native atau library perantara lightweight tanpa keterikatan erat framework.'
    },
    {
      id: 'pwf-3-20',
      question: 'Mengapa memisahkan "Server Cache State" (data API remote) dari "Client UI State" (modal open, tab active) sangat direkomendasikan?',
      options: [
        'Karena server state memerlukan local storage sedangkan UI state tidak',
        'Server state memiliki siklus hidup unik: memerlukan deduplikasi, invalidasi cache otomatis, refetch saat fokus, dan penanganan status stale/error yang berbeda dari UI state lokal',
        'Supaya database tidak kehabisan memori',
        'Karena browser melarang penggabungan string dan number di state yang sama'
      ],
      correctAnswer: 1,
      explanation: 'Data server bukan milik klien melainkan salinan snapshot yang bisa basi (stale). Mengelolanya dengan pustaka khusus (seperti TanStack Query) mengotomasi caching, polling, dan garbage collection, sedangkan UI state lokal tetap ramping.'
    }
  ],

  // =========================================================================
  // MODUL 4: INTEGRASI REST/GRAPHQL, ASYNC DATA FETCHING & ERROR BOUNDARY (20 Soal)
  // =========================================================================
  web_api_asynchronous: [
    {
      id: 'pwf-4-1',
      question: 'Apa keunggulan utama menggunakan `AbortController` saat melakukan pemanggilan HTTP fetch di dalam hook komponen?',
      options: [
        'Mempercepat kecepatan transfer internet hingga 10 kali lipat',
        'Dapat membatalkan request jaringan yang masih berjalan ketika komponen di-unmount atau sebelum request baru dikirim, mencegah race condition dan memory leak',
        'Mengubah respons HTTP error 500 menjadi status 200 OK',
        'Menghapus header otentikasi Bearer Token secara otomatis'
      ],
      correctAnswer: 1,
      explanation: 'Dengan meneruskan `signal` dari `AbortController` ke `fetch()`, pemanggilan jaringan dapat dihentikan (aborted) di tengah jalan jika komponen sudah tidak ada lagi di layar, mencegah update state pada komponen unmounted dan race condition.'
    },
    {
      id: 'pwf-4-2',
      question: 'Masalah "Race Condition" pada pencarian live search (search-as-you-type) terjadi ketika:',
      options: [
        'Dua pengguna mencari kata kunci yang sama di waktu yang sama',
        'Request pencarian pertama yang lambat merespons setelah request pencarian kedua yang lebih baru, menimpa hasil pencarian terkini dengan data lama yang usang',
        'Database backend mengalami kelebihan beban koneksi',
        'Browser kehabisan memori RAM saat memfilter teks'
      ],
      correctAnswer: 1,
      explanation: 'Jaringan internet bersifat non-deterministik. Jika permintaan pertama memakan waktu 800ms dan permintaan kedua 200ms, data dari permintaan pertama akan tiba paling akhir dan menimpa tampilan dengan hasil lama jika tidak dibatalkan via cleanup.'
    },
    {
      id: 'pwf-4-3',
      question: 'Strategi caching "Stale-While-Revalidate" (SWR) yang dipopulerkan TanStack Query dan Vercel SWR bekerja dengan cara:',
      options: [
        'Menghapus seluruh cache segera setelah data tiba',
        'Mengembalikan data lama yang ada di cache seketika (stale), lalu mengirimkan request di latar belakang untuk memperbarui data (revalidate) dan memperbarui UI secara halus',
        'Menolak request baru jika cache sudah berumur lebih dari 1 menit',
        'Hanya meminta data baru saat browser di-restart'
      ],
      correctAnswer: 1,
      explanation: 'SWR memberikan respons instan kepada pengguna dengan menampilkan data cache yang tersedia terlebih dahulu, sembari mengunduh versi terbaru di latar belakang untuk menjaga kebaruan data tanpa membuat pengguna menunggu layar kosong.'
    },
    {
      id: 'pwf-4-4',
      question: 'Komponen "Error Boundary" dalam framework modern bertugas untuk:',
      options: [
        'Mencegah kode program mengalami syntax error saat diketik pengembang',
        'Menangkap error runtime JavaScript yang terjadi di sub-pohon komponen anak, mencatat log kesalahan, dan menampilkan UI fallback pengganti tanpa meruntuhkan seluruh aplikasi',
        'Memperbaiki bug logika bisnis secara otomatis menggunakan AI',
        'Mengalihkan pengguna ke halaman Google saat internet terputus'
      ],
      correctAnswer: 1,
      explanation: 'Error Boundary (diimplementasikan via `componentDidCatch` atau pustaka penangkap error) mengisolasi kerusakan runtime di area komponen tertentu, menjaga sisa aplikasi (seperti navbar dan footer) tetap berfungsi normal.'
    },
    {
      id: 'pwf-4-5',
      question: 'Jenis error apa yang TIDAK DAPAT ditangkap secara otomatis oleh komponen Error Boundary standar?',
      options: [
        'Error saat proses render pohon JSX komponen anak',
        'Error di dalam event handler (misal `onClick`), callback asynchronous (misal `setTimeout` atau Promise rejection), dan proses Server-Side Rendering',
        'Error saat komputasi fungsi child component',
        'Error akses properti undefined pada objek state render'
      ],
      correctAnswer: 1,
      explanation: 'Error Boundary hanya menangkap error yang dilempar selama fase render, lifecycle, dan konstruktor pohon di bawahnya. Error di event handler atau callback asinkron berada di luar alur render dan harus ditangani via `try/catch` biasa.'
    },
    {
      id: 'pwf-4-6',
      question: 'Pola "Optimistic UI Update" (Pembaruan UI Optimistis) diterapkan untuk meningkatkan pengalaman pengguna dengan cara:',
      options: [
        'Mengabaikan seluruh error dari server dan menganggap selalu berhasil',
        'Langsung memperbarui tampilan antarmuka seolah-olah mutasi berhasil sebelum server merespons, dan melakukan rollback (kembali ke state awal) jika server merespons kegagalan',
        'Mengirimkan 5 kali permintaan jaringan yang sama untuk memastikan sukses',
        'Menonaktifkan tombol submit secara permanen'
      ],
      correctAnswer: 1,
      explanation: 'Optimistic UI memberikan respons instan (misalnya tombol "Like" yang langsung berubah warna) tanpa menunggu jeda latensi jaringan server. Jika server menolak request, antarmuka otomatis memutar balik (rollback) state ke keadaan semula dengan pesan error.'
    },
    {
      id: 'pwf-4-7',
      question: 'Apa perbedaan mendasar antara konsumsi API berbasis REST dan GraphQL dari sudut pandang optimasi pengambilan data frontend?',
      options: [
        'REST hanya mendukung transfer file PDF, sedangkan GraphQL mendukung JSON',
        'REST mengembalikan struktur payload tetap per endpoint yang rawan over-fetching atau under-fetching; GraphQL mengizinkan klien meminta secara presisi field data yang dibutuhkan dalam satu request',
        'GraphQL tidak dapat berjalan di protokol HTTP',
        'REST selalu lebih aman daripada GraphQL'
      ],
      correctAnswer: 1,
      explanation: 'GraphQL memungkinkan klien mendeklarasikan bentuk data yang diperlukan secara tepat dalam satu query, mengatasi over-fetching (menerima field berlebihan yang tidak terpakai) dan under-fetching (harus memanggil banyak endpoint berulang).'
    },
    {
      id: 'pwf-4-8',
      question: 'Header otentikasi standar yang digunakan untuk mengirimkan JSON Web Token (JWT) pada permintaan API adalah:',
      options: [
        'Content-Type: application/jwt',
        'Authorization: Bearer <token>',
        'Accept-Encoding: jwt-secure',
        'X-User-Password: <token>'
      ],
      correctAnswer: 1,
      explanation: 'Standar otentikasi HTTP menggunakan header `Authorization` dengan skema `Bearer` yang diikuti oleh string token akses JWT pengguna.'
    },
    {
      id: 'pwf-4-9',
      question: 'Mekanisme "Debouncing" pada input live search bertujuan untuk:',
      options: [
        'Menghapus spasi ganda dari teks pengguna',
        'Menunda eksekusi pemanggilan fungsi pencarian hingga pengguna berhenti mengetik selama durasi waktu tertentu (misalnya 300ms)',
        'Mengirimkan setiap ketukan huruf langsung ke database tanpa jeda',
        'Menolak karakter angka pada kotak pencarian'
      ],
      correctAnswer: 1,
      explanation: 'Debounce menyetel ulang timer setiap kali ada input baru. Fungsi pencarian hanya akan dieksekusi setelah pengguna berhenti mengetik selama waktu jeda yang ditentukan, mencegah lonjakan puluhan request HTTP yang sia-sia.'
    },
    {
      id: 'pwf-4-10',
      question: 'Mekanisme "Throttling" berbeda dari "Debouncing" karena throttling:',
      options: [
        'Menjamin fungsi hanya dieksekusi maksimal satu kali dalam interval waktu yang ditentukan secara berkala (misal saat scroll atau resize)',
        'Hanya berjalan ketika pengguna berhenti melakukan aksi',
        'Menghapus fungsi dari memori jika dipanggil lebih dari 5 kali',
        'Membatalkan seluruh animasi CSS pada halaman'
      ],
      correctAnswer: 0,
      explanation: 'Throttling membatasi laju eksekusi berkala: fungsi dijamin berjalan maksimal sekali per jendela waktu (misalnya setiap 100ms), sangat cocok untuk event berkelanjutan seperti scrolling atau mousemove.'
    },
    {
      id: 'pwf-4-11',
      question: 'Masalah keamanan "Cross-Site Scripting" (XSS) pada aplikasi web berbasis framework umumnya terjadi jika pengembang:',
      options: [
        'Menggunakan font kustom dari Google Fonts',
        'Menyuntikkan string HTML mentah yang tidak disanitasi dari input pengguna menggunakan properti seperti `dangerouslySetInnerHTML` atau `v-html`',
        'Menulis kode JavaScript lebih dari 1000 baris',
        'Mengaktifkan fitur HTTPS pada domain website'
      ],
      correctAnswer: 1,
      explanation: 'Secara default, framework meng-escape teks dalam kurung kurawal JSX/template untuk mencegah injeksi script. Menggunakan API bypass seperti `dangerouslySetInnerHTML` tanpa sanitasi (misal DOMPurify) membuka celah serangan injeksi script berbahaya.'
    },
    {
      id: 'pwf-4-12',
      question: 'Strategi penanganan error jaringan "Exponential Backoff" bekerja dengan cara:',
      options: [
        'Mencoba ulang request secara terus-menerus setiap 1 milidetik hingga server down',
        'Mencoba ulang request yang gagal dengan melipatgandakan interval waktu jeda tunggu antar percobaan (misal 1s, 2s, 4s, 8s...) untuk memberi ruang server pulih',
        'Menutup koneksi internet pengguna secara permanen',
        'Mengirimkan komplain otomatis ke email pengembang'
      ],
      correctAnswer: 1,
      explanation: 'Exponential backoff mencegah "thundering herd problem" pada server yang sedang kelebihan beban dengan meningkatkan waktu jeda antar retry secara eksponensial disertai penambahan variasi acak (jitter).'
    },
    {
      id: 'pwf-4-13',
      question: 'Fitur "Interceptors" pada pustaka HTTP client (seperti Axios) paling sering dimanfaatkan untuk:',
      options: [
        'Memblokir browser agar tidak dapat membuka halaman inspeksi kode',
        'Menyisipkan header token otentikasi secara otomatis pada setiap request dan menyegarkan token (refresh token flow) secara terpusat saat menerima error 401',
        'Mengubah respons JSON menjadi berkas gambar PNG',
        'Menonaktifkan protokol keamanan HTTPS'
      ],
      correctAnswer: 1,
      explanation: 'Interceptor bekerja sebagai middleware HTTP: request interceptor menyematkan token terbaru, sedangkan response interceptor menangkap status 401 Unauthorized secara terpusat untuk memicu alur silent refresh token tanpa mengotori kode komponen.'
    },
    {
      id: 'pwf-4-14',
      question: 'Dalam manajemen cache data TanStack Query, status data "Fresh" vs "Stale" ditentukan oleh konfigurasi:',
      options: ['cacheTime (gcTime)', 'staleTime', 'retryDelay', 'refetchInterval'],
      correctAnswer: 1,
      explanation: '`staleTime` menentukan berapa lama data dianggap masih segar. Selama durasi `staleTime` belum terlewati, pemanggilan query yang sama tidak akan memicu refetch jaringan di latar belakang.'
    },
    {
      id: 'pwf-4-15',
      question: 'Penyimpanan token otentikasi (JWT) pada cookie dengan flag `HttpOnly` dan `SameSite=Strict` lebih aman dibandingkan `localStorage` karena:',
      options: [
        'Cookie HttpOnly memiliki kapasitas penyimpanan hingga 50 Gigabyte',
        'Cookie HttpOnly tidak dapat dibaca atau diakses oleh skrip JavaScript di browser, sehingga kebal terhadap pencurian token melalui serangan XSS',
        'Cookie HttpOnly otomatis mengenkripsi seluruh file CSS',
        'Cookie HttpOnly membuat website kebal terhadap serangan DDoS'
      ],
      correctAnswer: 1,
      explanation: 'Nilai di `localStorage` dapat diakses oleh kode JavaScript mana pun di halaman yang sama (termasuk skrip berbahaya dari serangan XSS). Flag `HttpOnly` melarang akses JavaScript ke cookie, hanya browser yang mengirimkannya ke server.'
    },
    {
      id: 'pwf-4-16',
      question: 'Apa fungsi utama dari protokol "Server-Sent Events" (SSE) dibandingkan WebSocket dalam pembaruan data real-time?',
      options: [
        'SSE hanya bekerja jika komputer terhubung ke printer',
        'SSE adalah komunikasi satu arah (server-to-client) yang berjalan di atas protokol HTTP biasa, ideal untuk streaming teks AI atau feed notifikasi tanpa overhead handshake WebSocket',
        'SSE memerlukan instalasi driver hardware khusus',
        'SSE tidak dapat berjalan di peramban seluler'
      ],
      correctAnswer: 1,
      explanation: 'SSE menggunakan koneksi HTTP persisten standar di mana server dapat mengalirkan data (streaming) ke klien secara searah. Ini jauh lebih ringan dan mudah dikelola melalui proxy/firewall dibanding protokol duplex WebSocket.'
    },
    {
      id: 'pwf-4-17',
      question: 'Teknik "Mutation" pada pustaka data fetching modern biasanya memicu proses "Cache Invalidation" dengan tujuan:',
      options: [
        'Menghapus database browser secara permanen',
        'Menandai data kueri terkait sebagai kadaluwarsa (stale) dan memicu penarikan data baru agar daftar di UI langsung sinkron dengan perubahan terbaru di server',
        'Mengganti alamat URL endpoint API',
        'Mematikan fungsi tombol browser'
      ],
      correctAnswer: 1,
      explanation: 'Setelah mutasi berhasil (misalnya menambah item baru via POST), menginvalidasi kunci kueri (`invalidateQueries([\'todos\'])`) memerintahkan framework untuk menarik kembali data daftar terbaru dari server secara otomatis.'
    },
    {
      id: 'pwf-4-18',
      question: 'Bagaimana penanganan pagination jenis "Infinite Scroll" mengelola penumpukan memori DOM (DOM nodes bloat)?',
      options: [
        'Menutup browser otomatis saat mencapai 1000 item',
        'Menerapkan teknik "Windowing" atau "Virtualization" yang hanya merender elemen yang sedang tampak di viewport pengguna dan mendaur ulang node yang berada di luar layar',
        'Mengonversi seluruh daftar menjadi gambar statis',
        'Menghapus item di awal daftar secara paksa tanpa jejak'
      ],
      correctAnswer: 1,
      explanation: 'Virtualisasi list (misalnya TanStack Virtual) hanya merender sejumlah kecil node DOM yang terlihat di layar ditambah sedikit buffer. Node di luar viewport diganti dengan elemen spacer transparan untuk menghemat konsumsi RAM.'
    },
    {
      id: 'pwf-4-19',
      question: 'Apa yang dimaksud dengan "Idempotency Key" pada permintaan mutasi API pembayaran atau transaksi penting?',
      options: [
        'Kunci lisensi pembelian framework',
        'Pengenal unik (UUID) yang dikirim dalam header request untuk menjamin bahwa permintaan yang terkirim berulang kali akibat gangguan jaringan hanya diproses tepat satu kali oleh server',
        'Password login admin database',
        'Kunci enkripsi file CSS'
      ],
      correctAnswer: 1,
      explanation: 'Idempotency key mencegah transaksi ganda: jika koneksi internet terputus dan klien mencoba mengirim ulang request yang sama, server mengenali UUID tersebut dan hanya mengembalikan hasil transaksi pertama tanpa mendebit ulang saldo.'
    },
    {
      id: 'pwf-4-20',
      question: 'Error HTTP dengan status kode `429 Too Many Requests` mengindikasikan bahwa frontend:',
      options: [
        'Mengirimkan data form dengan format yang tidak valid',
        'Telah melampaui batas kuota laju permintaan (Rate Limiting) yang ditetapkan oleh server dalam jendela waktu tertentu',
        'Tidak memiliki izin otentikasi login',
        'Server backend sedang dalam perbaikan hardware'
      ],
      correctAnswer: 1,
      explanation: 'Status 429 menandakan klien terkena rate limit. Klien harus membaca header `Retry-After` yang diberikan server untuk mengetahui berapa detik harus menunggu sebelum diperbolehkan mengirimkan request kembali.'
    }
  ],

  // =========================================================================
  // MODUL 5: RENDERING LANJUTAN SSR/SSG/ISR, OPTIMASI PERFORMA & DEPLOYMENT (20 Soal)
  // =========================================================================
  web_ssr_ssg_optimasi: [
    {
      id: 'pwf-5-1',
      question: 'Apa perbedaan mendasar antara Server-Side Rendering (SSR) dan Static Site Generation (SSG)?',
      options: [
        'SSR hanya untuk mobile, SSG hanya untuk desktop',
        'Pada SSR, HTML di-render secara dinamis di server pada setiap permintaan pengguna; pada SSG, seluruh halaman HTML dikompilasi satu kali saat proses build berlangsung',
        'SSG memerlukan database PostgreSQL yang selalu menyala di server',
        'SSR tidak dapat menggunakan kode JavaScript sama sekali'
      ],
      correctAnswer: 1,
      explanation: 'SSG menghasilkan file-file HTML statis pada build time yang dapat di-hosting murah di CDN global. SSR merender HTML secara on-demand di server pada setiap HTTP request masuk, cocok untuk halaman dengan data sangat dinamis dan personal.'
    },
    {
      id: 'pwf-5-2',
      question: 'Konsep "Incremental Static Regeneration" (ISR) pada framework seperti Next.js memecahkan kelemahan SSG dengan cara:',
      options: [
        'Mewajibkan pengguna me-refresh halaman 10 kali',
        'Mengizinkan halaman statis diperbarui di latar belakang (revalidated) secara berkala setelah durasi waktu tertentu tanpa perlu me-rebuild seluruh website dari awal',
        'Mengubah seluruh halaman statis menjadi video animasi',
        'Menolak request pengguna jika konten sedang diperbarui'
      ],
      correctAnswer: 1,
      explanation: 'ISR menggabungkan kecepatan CDN dari SSG dengan fleksibilitas SSR: halaman disajikan seketika dari cache statis, dan server secara cerdas me-revalidate halaman tersebut di latar belakang jika ada request yang datang setelah interval revalidate habis.'
    },
    {
      id: 'pwf-5-3',
      question: 'Metrik Core Web Vitals "Largest Contentful Paint" (LCP) mengukur:',
      options: [
        'Berapa banyak kuota internet yang dihabiskan untuk membuka halaman',
        'Waktu yang dibutuhkan browser untuk merender elemen visual terbesar (seperti gambar hero atau blok teks utama) yang tampak di viewport pengguna',
        'Jumlah error JavaScript di konsol browser',
        'Kecepatan server memproses query SQL'
      ],
      correctAnswer: 1,
      explanation: 'LCP mengukur performa pemuatan visual yang dirasakan pengguna. Standar Google menetapkan LCP yang baik harus terjadi dalam waktu kurang dari 2,5 detik sejak halaman mulai dimuat.'
    },
    {
      id: 'pwf-5-4',
      question: 'Metrik Core Web Vitals baru "Interaction to Next Paint" (INP) yang menggantikan FID berfokus pada:',
      options: [
        'Kecepatan loading gambar SVG',
        'Responsivitas interaksi halaman secara keseluruhan, mengukur latensi terburuk dari input pengguna (klik, ketuk, ketik) hingga browser memperbarui frame tampilan berikutnya',
        'Berapa kali pengguna membagikan link ke media sosial',
        'Waktu booting sistem operasi komputer pengguna'
      ],
      correctAnswer: 1,
      explanation: 'INP menilai responsivitas UI sepanjang siklus hidup halaman. Skor INP yang baik (di bawah 200 milidetik) menjamin bahwa antarmuka memberikan umpan balik visual instan saat pengguna berinteraksi.'
    },
    {
      id: 'pwf-5-5',
      question: 'Penyebab utama dari nilai "Cumulative Layout Shift" (CLS) yang buruk (skor tinggi) adalah:',
      options: [
        'Penggunaan background warna gelap pada CSS',
        'Elemen gambar atau iklan yang tidak memiliki atribut dimensi lebar dan tinggi (`width` dan `height`) pasti, sehingga saat dimuat menggeser posisi konten lain secara mendadak',
        'Server merespons request terlalu cepat',
        'Penggunaan jenis huruf font sans-serif standar'
      ],
      correctAnswer: 1,
      explanation: 'CLS mengukur stabilitas visual. Jika gambar atau banner iklan tidak dialokasikan ruang kotak geometrinya terlebih dahulu, kedatangan aset tersebut akan mendorong konten teks di bawahnya secara tiba-tiba, merusak pengalaman membaca.'
    },
    {
      id: 'pwf-5-6',
      question: 'Arsitektur "Islands Architecture" (seperti pada Astro atau Fresh) mengoptimasi performa web dengan prinsip:',
      options: [
        'Mengirimkan 100% halaman sebagai HTML murni secara default, dan hanya menghidrasi komponen interaktif kecil tertentu ("pulau-pulau") dengan JavaScript independen',
        'Menyimpan seluruh server web di pulau fisik terpencil',
        'Mengharuskan setiap komponen memiliki domain tersendiri',
        'Menghapus penggunaan file CSS'
      ],
      correctAnswer: 0,
      explanation: 'Islands Architecture menghilangkan hidrasi monolitik. Mayoritas halaman adalah HTML statis nol-JavaScript, dan hanya komponen interaktif spesifik (misalnya widget pencarian atau carousel) yang dihidrasi secara terisolasi.'
    },
    {
      id: 'pwf-5-7',
      question: 'Teknik "Dynamic Import" dengan komponen Lazy Loading (`React.lazy` atau `defineAsyncComponent`) bekerja dengan mekanisme:',
      options: [
        'Mengimpor seluruh dependensi npm saat server menyala',
        'Memisahkan kode komponen menjadi berkas terpisah dan menunda pengunduhannya hingga komponen tersebut benar-benar hendak dirender ke layar',
        'Menolak rendering komponen jika memori RAM pengguna di bawah 8 GB',
        'Mengompresi kode menjadi format ZIP'
      ],
      correctAnswer: 1,
      explanation: 'Lazy loading mencegah pengunduhan kode fitur yang belum tentu dibuka oleh pengguna (seperti modal dialog tersembunyi atau tab pengaturan sekunder), menghemat kuota dan mempercepat inisialisasi awal.'
    },
    {
      id: 'pwf-5-8',
      question: 'Mengapa format gambar modern seperti WebP dan AVIF sangat disarankan menggantikan JPEG/PNG konvensional pada aplikasi web?',
      options: [
        'Karena WebP tidak dapat dibuka oleh browser lama',
        'Karena WebP dan AVIF menawarkan rasio kompresi data yang jauh lebih superior dengan kualitas visual serupa, memperkecil ukuran berkas gambar hingga 30-50%',
        'Karena WebP dapat dieksekusi sebagai kode JavaScript',
        'Karena AVIF otomatis meningkatkan resolusi gambar menjadi 8K'
      ],
      correctAnswer: 1,
      explanation: 'WebP dan AVIF menggunakan algoritma kompresi canggih yang menghasilkan bobot file jauh lebih ringan tanpa kehilangan ketajaman visual yang terlihat oleh mata manusia, memangkas LCP secara signifikan.'
    },
    {
      id: 'pwf-5-9',
      question: 'Peran dari tag `<link rel="preload" as="font" ... crossorigin>` dalam optimasi web font adalah:',
      options: [
        'Menghapus font sistem bawaan operasi pengguna',
        'Memerintahkan browser untuk memprioritaskan pengunduhan file font penting lebih awal dalam waterfall jaringan sebelum parser CSS menemukannya',
        'Mengubah ukuran font menjadi 12 piksel secara otomatis',
        'Membatalkan proses rendering font di browser'
      ],
      correctAnswer: 1,
      explanation: 'Preload memberi sinyal prioritas tinggi ke resource loader browser untuk mengambil berkas font krusial seawal mungkin, meminimalkan fenomena teks tak terlihat (FOIT - Flash of Invisible Text) saat booting halaman.'
    },
    {
      id: 'pwf-5-10',
      question: 'Header keamanan HTTP "Content Security Policy" (CSP) dirancang untuk memitigasi serangan:',
      options: [
        'Pencurian kabel fisik server',
        'Serangan Cross-Site Scripting (XSS) dan injeksi data dengan membatasi domain asal sumber skrip, gambar, dan stylesheet yang diizinkan dieksekusi oleh browser',
        'Pemberian rating buruk di toko aplikasi',
        'Koneksi Wi-Fi yang lambat'
      ],
      correctAnswer: 1,
      explanation: 'CSP adalah mekanisme pertahanan berlapis: header ini mendeklarasikan whitelist sumber domain tepercaya bagi resource (skrip, font, koneksi API), sehingga skrip berbahaya yang disuntikkan penyerang akan ditolak eksekusinya oleh peramban.'
    },
    {
      id: 'pwf-5-11',
      question: 'Apa fungsi dari "Service Worker" dalam arsitektur Progressive Web App (PWA)?',
      options: [
        'Sebagai teknisi fisik perbaikan komputer pengguna',
        'Sebagai proxy jaringan di sisi klien yang berjalan di background thread terpisah, mampu mencegat permintaan HTTP dan mengelola offline caching',
        'Sebagai pengganti prosesor komputer klien',
        'Sebagai alat perekam suara mikrofon terus-menerus'
      ],
      correctAnswer: 1,
      explanation: 'Service Worker berjalan di luar thread utama antarmuka. Ia bertindak sebagai programmable network proxy yang dapat mencegat request keluar dan menyajikan respons langsung dari Cache Storage saat koneksi offline.'
    },
    {
      id: 'pwf-5-12',
      question: 'Dalam optimasi rendering, istilah "Critical Rendering Path" merujuk pada:',
      options: [
        'Jalan pintas kabel jaringan optik antar benua',
        'Rangkaian urutan langkah yang dilalui browser mulai dari penerimaan HTML, CSS, dan skrip hingga mengonversinya menjadi piksel pertama di layar',
        'Daftar rute rahasia pada router aplikasi',
        'Proses verifikasi login administrator sistem'
      ],
      correctAnswer: 1,
      explanation: 'Mengoptimasi Critical Rendering Path berarti memprioritaskan pemuatan dan eksekusi resource esensial (seperti critical inline CSS) dan menunda skrip non-esensial agar First Paint terjadi secepat mungkin.'
    },
    {
      id: 'pwf-5-13',
      question: 'Atribut HTML script `defer` berbeda dari `async` dalam hal:',
      options: [
        'Script defer tidak akan pernah dieksekusi oleh browser',
        'Script defer diunduh secara paralel dan dieksekusi secara berurutan sesuai urutan dokumen setelah parsing HTML selesai; script async dieksekusi seketika setelah selesai diunduh tanpa memedulikan urutan dokumen',
        'Script async hanya berlaku untuk file CSS',
        'Script defer hanya dapat digunakan untuk file audio'
      ],
      correctAnswer: 1,
      explanation: '`defer` menjamin urutan eksekusi skrip dependen tetap terjaga dan tidak memblokir parser HTML. `async` mengeksekusi skrip begitu unduhan kelar, menginterupsi parsing HTML dan tidak menjamin urutan eksekusi antar skrip.'
    },
    {
      id: 'pwf-5-14',
      question: 'Fitur "Edge Middleware" (seperti pada Vercel Edge Network atau Cloudflare Workers) memungkinkan pengembang untuk:',
      options: [
        'Menulis program grafis 3D di desktop',
        'Menjalankan logika kode ringan (seperti autentikasi, A/B testing, geolokasi, dan URL rewrite) di server CDN terdistribusi yang posisinya paling dekat secara geografis dengan pengguna',
        'Mengganti hardware server tanpa mematikan listrik',
        'Menghapus seluruh file backup database'
      ],
      correctAnswer: 1,
      explanation: 'Edge computing menjalankan kode pada V8 isolate ringan di edge node CDN global. Waktu respons pemrosesan header dan routing terpangkas hingga di bawah 10-20ms karena tidak perlu bolak-balik ke server origin sentral.'
    },
    {
      id: 'pwf-5-15',
      question: 'Kapan teknik "React Server Components" (RSC) paling unggul dibandingkan komponen client biasa?',
      options: [
        'Ketika komponen membutuhkan event listener tombol seperti `onClick` dan hook `useState`',
        'Ketika komponen hanya bertugas mengambil data langsung dari database/file sistem dan merender template tanpa mengirimkan bundle JavaScript komponen tersebut ke browser klien',
        'Saat ingin menampilkan animasi CSS berbasis pergerakan kursor mouse',
        'RSC hanya unggul saat aplikasi dijalankan di peramban Internet Explorer'
      ],
      correctAnswer: 1,
      explanation: 'RSC dieksekusi eksklusif di server. Dependensi modul besar (seperti library parsing markdown atau konektor database) tidak ikut dikemas ke dalam bundel JavaScript yang dikirim ke browser, menghasilkan zero-bundle-size impact bagi klien.'
    },
    {
      id: 'pwf-5-16',
      question: 'Tujuan dari penggunaan "Subresource Integrity" (SRI) pada tag `<script src="..." integrity="..." crossorigin>` dari CDN publik adalah:',
      options: [
        'Mempercepat kecepatan download file JavaScript',
        'Memverifikasi bahwa file yang diunduh dari CDN pihak ketiga tidak pernah dimanipulasi atau disisipi kode jahat dengan mencocokkan hash kriptografi (SHA-384/512)',
        'Menghilangkan batasan kuota download',
        'Mengonversi script menjadi bahasa Java'
      ],
      correctAnswer: 1,
      explanation: 'SRI adalah fitur keamanan peramban yang menghitung hash konten berkas yang diunduh. Jika CDN pihak ketiga diretas dan skrip disusupi malware, hash tidak cocok dan peramban otomatis memblokir eksekusi berkas tersebut.'
    },
    {
      id: 'pwf-5-17',
      question: 'Perbedaan mendasar antara "Gzip" dan "Brotli" dalam kompresi transfer aset web adalah:',
      options: [
        'Gzip hanya untuk teks, Brotli hanya untuk gambar',
        'Brotli menggunakan kamus statis terstandarisasi untuk web (HTML/CSS/JS) yang menghasilkan ukuran berkas 15-25% lebih ramping dibanding Gzip pada level kompresi serupa',
        'Gzip diciptakan oleh Google pada tahun 2024',
        'Brotli tidak didukung oleh browser modern'
      ],
      correctAnswer: 1,
      explanation: 'Brotli dirancang khusus untuk aset web dengan kamus bawaan berisi ribuan cuplikan string HTML/CSS/JS umum, menghasilkan rasio kompresi yang jauh lebih efisien daripada algoritma Deflate/Gzip tradisional.'
    },
    {
      id: 'pwf-5-18',
      question: 'Apa fungsi dari header respons HTTP `Cache-Control: public, max-age=31536000, immutable` pada berkas bundel statis?',
      options: [
        'Memberitahu browser untuk menghapus berkas tersebut setiap detik',
        'Menginstruksikan browser dan CDN untuk meng-cache berkas tersebut selama satu tahun penuh tanpa perlu melakukan revalidasi kondisional (karena nama berkas memiliki content-hash unik)',
        'Melarang penyimpanan berkas di disk drive',
        'Memaksa browser meminta password sebelum mengunduh berkas'
      ],
      correctAnswer: 1,
      explanation: 'Jika berkas aset memiliki hash unik pada namanya (misal `bundle.a8c1f9.js`), aset tersebut tidak akan pernah berubah (`immutable`). Cache dapat disimpan secara permanen di browser tanpa request 304 revalidation.'
    },
    {
      id: 'pwf-5-19',
      question: 'Dalam pipeline CI/CD aplikasi frontend, langkah "Bundle Analysis" (seperti webpack-bundle-analyzer) dijalankan untuk:',
      options: [
        'Menghitung jumlah baris komentar kode',
        'Memvisualisasikan komposisi ukuran paket dependensi di dalam bundel untuk mendeteksi dependensi raksasa atau duplikasi pustaka yang tidak sengaja terpasang',
        'Menghapus kode HTML secara acak',
        'Mengirimkan kode program ke GitHub secara otomatis'
      ],
      correctAnswer: 1,
      explanation: 'Bundle analyzer menghasilkan visualisasi treemap interaktif dari seluruh pustaka yang masuk ke bundel produksi, mempermudah identifikasi dependensi yang terlalu boros (seperti lodash penuh atau moment.js) untuk diganti alternatif yang lebih ramping.'
    },
    {
      id: 'pwf-5-20',
      question: 'Pada arsitektur Micro-Frontend atau Module Federation, modul kode dibagikan antar aplikasi independen menggunakan mekanisme:',
      options: [
        'Copy-paste kode secara manual setiap hari',
        'Webpack / Vite Module Federation yang mengekspos dan mengonsumsi modul secara dinamis saat runtime tanpa perlu me-rebuild aplikasi host',
        'Menggabungkan seluruh database ke dalam satu file Excel',
        'Mengharuskan semua aplikasi ditulis oleh satu programmer yang sama'
      ],
      correctAnswer: 1,
      explanation: 'Module Federation memungkinkan sebuah aplikasi web bertindak sebagai host yang memuat modul remote dari domain lain secara asynchronous saat runtime, memungkinkan tim berbeda mendeploy fitur secara independen tanpa koordinasi build monolitik.'
    }
  ]
};
