import type { QuizQuestion } from './curriculum';

export const RPL_QUIZZES: Record<string, QuizQuestion[]> = {
  // =========================================================================
  // MODUL 1: SIKLUS HIDUP PERANGKAT LUNAK (SDLC), WATERFALL VS AGILE & SCRUM (20 Soal)
  // =========================================================================
  rpl_sdlc_agile: [
    {
      id: 'rpl-1-1',
      question: 'Apa karakteristik fundamental model Waterfall dalam rekayasa perangkat lunak?',
      options: [
        'Setiap fase berjalan linier sekuensial dan fase berikutnya baru dimulai setelah fase sebelumnya tuntas diverifikasi',
        'Rilis produk dilakukan setiap minggu tanpa dokumentasi formal',
        'Kebutuhan sistem boleh berubah kapan saja secara bebas di tengah tahap pengodean',
        'Pengujian perangkat lunak dilakukan sebelum tahap analisis kebutuhan'
      ],
      correctAnswer: 0,
      explanation: 'Waterfall adalah model proses linier sekuensial klasik di mana setiap fase (Requirements, Design, Implementation, Verification, Maintenance) harus selesai dan ditandatangani sebelum melangkah ke fase berikutnya.'
    },
    {
      id: 'rpl-1-2',
      question: 'Kapan model Waterfall paling ideal dan tepat untuk diterapkan pada proyek perangkat lunak?',
      options: [
        'Pada startup teknologi baru dengan produk yang belum tervalidasi pasar',
        'Ketika persyaratan kebutuhan sistem sudah sangat jelas, stabil, terdefinisi matang, dan teknologi sudah dipahami sepenuhnya',
        'Ketika klien menginginkan perubahan UI setiap 3 hari',
        'Ketika tim tidak memiliki arsitek perangkat lunak atau dokumentasi'
      ],
      correctAnswer: 1,
      explanation: 'Waterfall sangat efektif pada sistem dengan regulasi ketat (seperti sistem avionik, alat medis, perbankan inti) di mana persyaratan tidak boleh berubah-ubah dan keandalan formal adalah prioritas mutlak.'
    },
    {
      id: 'rpl-1-3',
      question: 'Dalam Agile Manifesto (2001), manakah nilai komparasi yang dinyatakan lebih diutamakan?',
      options: [
        'Proses dan alat bantu di atas individu dan interaksi',
        'Dokumentasi komprehensif di atas perangkat lunak yang berfungsi',
        'Perangkat lunak yang berfungsi (Working Software) di atas dokumentasi komprehensif',
        'Mengikuti rencana yang kaku di atas menanggapi perubahan'
      ],
      correctAnswer: 2,
      explanation: 'Agile Manifesto menyatakan: "Working software over comprehensive documentation", "Individuals and interactions over processes and tools", "Customer collaboration over contract negotiation", dan "Responding to change over following a plan".'
    },
    {
      id: 'rpl-1-4',
      question: 'Berapa durasi standar untuk satu siklus Sprint dalam kerangka kerja Scrum modern?',
      options: [
        '6 bulan hingga 1 tahun',
        '1 hingga 4 minggu (umumnya 2 minggu)',
        'Tepat 24 jam',
        'Tidak memiliki batas waktu (berjalan sampai seluruh fitur selesai)'
      ],
      correctAnswer: 1,
      explanation: 'Sprint dalam Scrum adalah wadah waktu (time-box) berulang berdurasi tetap antara 1 hingga 4 minggu, dengan 2 minggu sebagai standar industri paling populer untuk menghasilkan Incremental Product Increment.'
    },
    {
      id: 'rpl-1-5',
      question: 'Siapakah anggota tim Scrum yang bertanggung jawab memaksimalkan nilai bisnis produk dan mengelola Product Backlog?',
      options: ['Scrum Master', 'Product Owner', 'Lead QA Engineer', 'DevOps Specialist'],
      correctAnswer: 1,
      explanation: 'Product Owner (PO) bertanggung jawab tunggal atas isi, ketersediaan, dan urutan prioritas Product Backlog guna memaksimalkan nilai produk bisnis yang dihasilkan tim pengembang.'
    },
    {
      id: 'rpl-1-6',
      question: 'Apa fungsi utama dari peran Scrum Master dalam sebuah tim pengembang?',
      options: [
        'Menjadi manajer proyek otoriter yang membagi-bagikan tugas harian kepada programmer',
        'Sebagai servant-leader yang memfasilitasi proses Scrum, menghapus hambatan (impediments), dan melindungi tim dari gangguan luar',
        'Menulis seluruh baris kode backend aplikasi',
        'Menentukan besaran gaji anggota tim engineering'
      ],
      correctAnswer: 1,
      explanation: 'Scrum Master bertindak sebagai servant-leader dan pelatih proses, memastikan prinsip Scrum dijalankan dengan baik serta membersihkan hambatan teknis maupun organisasi yang memperlambat laju tim.'
    },
    {
      id: 'rpl-1-7',
      question: 'Tiga pertanyaan wajib yang dijawab oleh setiap anggota pengembang dalam Daily Standup Meeting (15 menit) adalah:',
      options: [
        'Apa yang dikerjakan kemarin? Apa yang akan dikerjakan hari ini? Adakah kendala/blocker yang dihadapi?',
        'Berapa jam saya bekerja? Berapa baris kode yang dibuat? Siapa yang berbuat kesalahan?',
        'Kapan proyek selesai? Mengapa fitur ini lambat? Berapa biaya server?',
        'Apakah bos senang? Jam berapa istirahat? Apa menu makan siang?'
      ],
      correctAnswer: 0,
      explanation: 'Daily Standup dirancang padat (timebox 15 menit) untuk sinkronisasi tim: progres kemarin, target hari ini, dan pengangkatan blocker/hambatan.'
    },
    {
      id: 'rpl-1-8',
      question: 'Apa perbedaan mendasar antara Sprint Review dan Sprint Retrospective?',
      options: [
        'Sprint Review meninjau produk/fitur bersama stakeholder, sedangkan Retrospective mengevaluasi proses kerja internal dan relasi tim',
        'Sprint Review mengevaluasi emosi tim, sedangkan Retrospective adalah demo fitur ke pengguna',
        'Keduanya adalah istilah yang sama tanpa perbedaan',
        'Sprint Review dilakukan sebelum Sprint dimulai, Retrospective setelah rilis tahunan'
      ],
      correctAnswer: 0,
      explanation: 'Sprint Review berfokus pada inspeksi "Apa yang dibangun" (demo kenaikan produk kepada stakeholder), sedangkan Sprint Retrospective berfokus pada "Bagaimana cara kita bekerja" (proses internal, alat, dan dinamika tim).'
    },
    {
      id: 'rpl-1-9',
      question: 'Artefak Scrum yang mendefinisikan kriteria formal bahwa suatu fitur telah selesai secara mutlak disebut:',
      options: ['Acceptance Criteria', 'Definition of Done (DoD)', 'User Story', 'Sprint Goal'],
      correctAnswer: 1,
      explanation: 'Definition of Done (DoD) adalah kesepakatan formal bersama tentang checklist mutu yang harus dipenuhi sebelum sebuah backlog item dianggap siap rilis (misal: lolos unit test, code review disetujui, lolos staging).'
    },
    {
      id: 'rpl-1-10',
      question: 'Grafik burndown chart dalam metodologi Scrum digunakan untuk memvisualisasikan:',
      options: [
        'Sisa estimasi pekerjaan (story points) terhadap sisa waktu yang tersedia dalam sprint',
        'Kenaikan suhu CPU server selama pengujian beban',
        'Jumlah bug yang ditemukan pengguna di lingkungan produksi',
        'Biaya finansial yang dihabiskan untuk membeli lisensi cloud'
      ],
      correctAnswer: 0,
      explanation: 'Burndown chart menampilkan tren sisa pekerjaan dari hari ke hari dalam sprint. Garis ideal menurun menuju titik nol pada hari terakhir sprint.'
    },
    {
      id: 'rpl-1-11',
      question: 'Apa itu model spiral (Spiral Model) yang diperkenalkan oleh Barry Boehm?',
      options: [
        'Model SDLC yang berputar secara iteratif dengan penekanan utama pada analisis risiko (risk analysis) di setiap putarannya',
        'Model pemrograman yang melarang penggunaan struktur perulangan while',
        'Teknik menggambar UI melingkar',
        'Pola database non-relasional'
      ],
      correctAnswer: 0,
      explanation: 'Spiral Model menggabungkan sifat iteratif prototyping dengan aspek terkontrol Waterfall, didorong oleh analisis risiko formal pada setiap kuadran putaran spiral.'
    },
    {
      id: 'rpl-1-12',
      question: 'Dalam penulisan User Story Agile, formula standar yang umum digunakan adalah:',
      options: [
        'As a [Role], I want [Feature], so that [Business Benefit]',
        'System shall execute [Command] when [Condition] happens',
        'Developer must write [Class] using [Framework]',
        'Fix [Bug] immediately before [Deadline]'
      ],
      correctAnswer: 0,
      explanation: 'Formula standar: "Sebagai [pengguna/peran], saya ingin [kemampuan/fitur], agar [manfaat bisnis tercapai]" berfokus pada perspektif nilai bagi pengguna.'
    },
    {
      id: 'rpl-1-13',
      question: 'Apa kepanjangan dari akronim INVEST dalam kriteria kualitas User Story yang baik?',
      options: [
        'Independent, Negotiable, Valuable, Estimable, Small, Testable',
        'Integrated, Normalized, Valid, Efficient, Scalable, Tested',
        'Important, Numeric, Variable, Exact, Secure, Timely',
        'Immediate, Necessary, Verified, Encrypted, Standard, Trackable'
      ],
      correctAnswer: 0,
      explanation: 'Kriteria INVEST (Bill Wake): Independent, Negotiable, Valuable, Estimable, Small, dan Testable.'
    },
    {
      id: 'rpl-1-14',
      question: 'Dalam estimasi Story Points menggunakan teknik Planning Poker, tim biasanya menggunakan deret angka:',
      options: ['Fibonacci yang dimodifikasi (1, 2, 3, 5, 8, 13, 20, 40...)', 'Kelipatan 10 murni (10, 20, 30, 40)', 'Angka biner murni (1, 2, 4, 8, 16)', 'Angka desimal bebas (1.5, 2.7, 3.14)'],
      correctAnswer: 0,
      explanation: 'Deret Fibonacci modifikasi digunakan karena semakin besar estimasi ketidakpastian suatu pekerjaan, semakin sulit membedakan angka yang terlalu dekat (misal: membedakan tugas skala 20 vs 21 tidak bermakna).'
    },
    {
      id: 'rpl-1-15',
      question: 'Apa perbedaan utama antara metodologi Kanban dan Scrum?',
      options: [
        'Kanban tidak memiliki sprint dengan durasi tetap (timebox) dan berfokus pada pembatasan Work In Progress (WIP limits), sedangkan Scrum bekerja dalam sprint terstruktur',
        'Kanban hanya untuk desainer, Scrum untuk programmer',
        'Kanban mengharuskan tim bekerja 24 jam nonstop',
        'Scrum melarang penggunaan papan visual kartu'
      ],
      correctAnswer: 0,
      explanation: 'Kanban adalah sistem aliran kontinu (flow) tanpa timebox sprint tetap yang berfokus pada membatasi WIP (Work In Progress limits) untuk mencegah bottleneck.'
    },
    {
      id: 'rpl-1-16',
      question: 'Istilah "Technical Debt" (Hutang Teknis) dalam rekayasa perangkat lunak mengacu pada:',
      options: [
        'Hutang moneter perusahaan kepada penyedia layanan server cloud',
        'Konsekuensi jangka panjang dari memilih solusi cepat dan berantakan saat ini daripada pendekatan arsitektur bersih yang membutuhkan waktu lebih lama',
        'Denda hukum jika software terlambat dirilis ke publik',
        'Gaji programmer yang belum dibayarkan tepat waktu'
      ],
      correctAnswer: 1,
      explanation: 'Hutang teknis (Ward Cunningham) adalah metafora biaya pemeliharaan ekstra dan perlambatan pengembangan di masa depan akibat kompromi arsitektur dan kualitas kode saat ini.'
    },
    {
      id: 'rpl-1-17',
      question: 'Model V-Model dalam SDLC memetakan setiap fase pengembangan secara simetris dengan:',
      options: [
        'Fase pengujian (testing) yang bersesuaian',
        'Jumlah biaya keuangan proyek',
        'Gaji pengembang senior',
        'Tingkat kecepatan koneksi internet'
      ],
      correctAnswer: 0,
      explanation: 'V-Model adalah perluasan Waterfall yang mengaitkan setiap fase perancangan di sisi kiri (Requirement, Design) secara langsung dengan fase pengujian yang sepadan di sisi kanan (Acceptance Testing, Integration, Unit Testing).'
    },
    {
      id: 'rpl-1-18',
      question: 'Apa yang dimaksud dengan konsep "Velocity" dalam metrik tim Agile?',
      options: [
        'Kecepatan rata-rata story points yang berhasil diselesaikan dan lolos DoD oleh tim dalam satu sprint',
        'Kecepatan mengetik keyboard anggota tim per menit',
        'Berapa kilobyte kode yang dipush ke git per hari',
        'Tingkat kecepatan kompilasi compiler Rust'
      ],
      correctAnswer: 0,
      explanation: 'Velocity adalah ukuran kapasitas historis tim: jumlah rata-rata Story Points yang tuntas diselesaikan (lolos DoD) per sprint, digunakan untuk memprediksi tanggal rilis proyek.'
    },
    {
      id: 'rpl-1-19',
      question: 'Dalam rekayasa kebutuhan (Requirements Engineering), apa perbedaan kebutuhan fungsional dan non-fungsional?',
      options: [
        'Fungsional mendeskripsikan perilaku/layanan apa yang harus disediakan sistem; non-fungsional mendeskripsikan atribut kualitas/batasan sistem (keamanan, performa, ketersediaan)',
        'Fungsional dibuat oleh programmer; non-fungsional dibuat oleh manajer HRD',
        'Non-fungsional berarti fitur yang rusak dan tidak berfungsi',
        'Fungsional tidak perlu diuji dalam tahap QA'
      ],
      correctAnswer: 0,
      explanation: 'Functional Requirements menjawab "Apa yang sistem kerjakan" (misal: pengguna dapat mentransfer uang). Non-Functional Requirements menjawab "Seberapa baik sistem bekerja" (misal: transaksi selesai dalam < 500ms, enkripsi AES-256).'
    },
    {
      id: 'rpl-1-20',
      question: 'Manakah dari pernyataan berikut yang merupakan prinsip penting dari Continuous Improvement (Kaizen) dalam Scrum?',
      options: [
        'Tim harus mempertahankan cara kerja yang sama persis selama 5 tahun berturut-turut',
        'Sprint Retrospective digunakan untuk merefleksikan kegagalan dan secara aktif menyepakati tindakan perbaikan terukur di sprint berikutnya',
        'Scrum Master berhak memecat anggota tim yang membuat bug',
        'Penyempurnaan hanya boleh dilakukan oleh konsultan eksternal'
      ],
      correctAnswer: 1,
      explanation: 'Continuous Improvement dijalankan melalui Sprint Retrospective reguler di mana tim mengidentifikasi peluang perbaikan dan menetapkan rencana aksi konkrit untuk dieksekusi pada sprint berikutnya.'
    }
  ],

  // =========================================================================
  // MODUL 2: PEMODELAN KEBUTUHAN SISTEM & DIAGRAM UML STANDAR (20 Soal)
  // =========================================================================
  rpl_pemodelan_uml: [
    {
      id: 'rpl-2-1',
      question: 'Apa fungsi utama dari Use Case Diagram dalam perancangan perangkat lunak berorientasi objek?',
      options: [
        'Menampilkan alokasi memori heap variabel sistem',
        'Memodelkan interaksi antara aktor eksternal (manusia atau sistem lain) dengan fungsi-fungsi utama (use cases) yang disediakan oleh sistem',
        'Menjelaskan konfigurasi kabel fisik server',
        'Menampilkan instruksi perakitan prosesor'
      ],
      correctAnswer: 1,
      explanation: 'Use Case Diagram menggambarkan batasan sistem, aktor yang berinteraksi, dan kasus penggunaan tingkat tinggi untuk menangkap kebutuhan fungsional sistem.'
    },
    {
      id: 'rpl-2-2',
      question: 'Dalam Use Case Diagram, relasi `<<include>>` antara Use Case A dan Use Case B bermakna bahwa:',
      options: [
        'Eksekusi Use Case A SELALU secara wajib memicu atau menyertakan eksekusi Use Case B',
        'Eksekusi Use Case B hanya terjadi pada kondisi opsional tertentu',
        'Aktor tidak boleh menjalankan Use Case B',
        'Use Case A dan B saling bertentangan dan tidak boleh dijalankan bersamaan'
      ],
      correctAnswer: 0,
      explanation: 'Relasi `<<include>>` menandakan ketergantungan wajib: alur dasar Use Case A tidak akan lengkap atau tidak dapat berjalan tanpa mengeksekusi sub-alur dari Use Case B (misal: "Checkout Belanja" `<<include>>` "Validasi Saldo").'
    },
    {
      id: 'rpl-2-3',
      question: 'Sebaliknya, kapan relasi `<<extend>>` digunakan dalam Use Case Diagram?',
      options: [
        'Ketika Use Case tambahan bersifat opsional atau hanya dieksekusi di bawah kondisi tertentu (extension point)',
        'Ketika dua use case wajib berjalan bersamaan setiap detik',
        'Ketika aktor dihapus dari sistem',
        'Ketika database di-backup secara otomatis'
      ],
      correctAnswer: 0,
      explanation: 'Relasi `<<extend>>` memodelkan perilaku kondisional/opsional yang dapat disisipkan ke use case dasar pada titik perluasan (extension point) tertentu (misal: "Beri Diskon Promo" `<<extend>>` "Pembayaran").'
    },
    {
      id: 'rpl-2-4',
      question: 'Pada Class Diagram UML, simbol tanda visibilitas `-`, `+`, dan `#` secara berurutan merepresentasikan hak akses:',
      options: [
        'Private, Public, Protected',
        'Public, Private, Package',
        'Protected, Public, Private',
        'Private, Package, Constant'
      ],
      correctAnswer: 0,
      explanation: 'Dalam standar UML formal: tanda minus `-` berarti private, tanda plus `+` berarti public, dan tanda pagar `#` berarti protected (tanda tilde `~` berarti package/internal).'
    },
    {
      id: 'rpl-2-5',
      question: 'Perbedaan mendasar antara relasi Aggregation (Agregasi) dan Composition (Komposisi) pada Class Diagram adalah:',
      options: [
        'Pada Komposisi (wajik hitam), siklus hidup bagian terikat mutlak pada induknya; pada Agregasi (wajik putih), bagian dapat tetap eksis independen meski induknya dihancurkan',
        'Agregasi bersifat permanen seumur hidup, Komposisi bersifat sementara',
        'Agregasi menggunakan garis putus-putus, Komposisi tanpa garis',
        'Keduanya identik secara logika dan hanya berbeda warna'
      ],
      correctAnswer: 0,
      explanation: 'Komposisi (filled diamond) adalah bentuk kepemilikan kuat: jika objek House dihancurkan, objek Room di dalamnya ikut musnah. Agregasi (hollow diamond) adalah kepemilikan lemah: jika Department dibubarkan, objek Professor masih tetap eksis.'
    },
    {
      id: 'rpl-2-6',
      question: 'Tipe diagram UML manakah yang berfokus pada pertukaran pesan (messages) antar objek yang disusun berdasarkan urutan waktu (time sequence)?',
      options: ['Sequence Diagram', 'Activity Diagram', 'Deployment Diagram', 'Package Diagram'],
      correctAnswer: 0,
      explanation: 'Sequence Diagram adalah diagram interaksi yang menampilkan objek di sepanjang garis hidup (lifeline) vertikal dan pesan horizontal yang dikirim secara kronologis berurutan dari atas ke bawah.'
    },
    {
      id: 'rpl-2-7',
      question: 'Pada Sequence Diagram, garis vertikal putus-putus yang berada di bawah kotak nama objek disebut:',
      options: ['Lifeline (Garis Hidup)', 'Message Pointer', 'Execution Arrow', 'State Boundary'],
      correctAnswer: 0,
      explanation: 'Lifeline melambangkan eksistensi objek selama periode interaksi berlangsung dari waktu ke waktu.'
    },
    {
      id: 'rpl-2-8',
      question: 'Pada Sequence Diagram, kotak persegi panjang sempit yang menempel di atas garis lifeline menunjukkan:',
      options: [
        'Activation Bar / Execution Occurrence (periode di mana objek sedang aktif memproses instruksi)',
        'Objek sedang dalam keadaan crash/rusak',
        'Objek sedang dihapus oleh garbage collector',
        'Data tersimpan di harddisk'
      ],
      correctAnswer: 0,
      explanation: 'Activation bar (focus of control) menunjukkan durasi waktu di mana objek tersebut sedang memegang kendali eksekusi atau menjalankan metode.'
    },
    {
      id: 'rpl-2-9',
      question: 'Diagram UML yang paling menyerupai flowchart logika pemrograman tingkat lanjut (mendukung percabangan, perulangan, dan eksekusi paralel/fork-join) adalah:',
      options: ['Activity Diagram', 'Component Diagram', 'Class Diagram', 'Object Diagram'],
      correctAnswer: 0,
      explanation: 'Activity Diagram memodelkan aliran kerja (workflow) operasional langkah-demi-langkah dari suatu proses bisnis atau algoritma sistem, lengkap dengan percabangan (decision) dan sinkronisasi paralel (fork/join).'
    },
    {
      id: 'rpl-2-10',
      question: 'Simbol garis tebal horizontal/vertikal dalam Activity Diagram yang memecah satu aliran eksekusi menjadi beberapa aliran yang berjalan paralel disebut:',
      options: ['Fork Node', 'Join Node', 'Decision Merge', 'Terminal State'],
      correctAnswer: 0,
      explanation: 'Fork node menerima satu aliran input dan memecahnya menjadi dua atau lebih aliran paralel yang berjalan bersamaan secara simultan.'
    },
    {
      id: 'rpl-2-11',
      question: 'Diagram UML yang digunakan untuk memodelkan siklus hidup transisi status suatu objek dari satu keadaan ke keadaan lain akibat suatu event pemicu adalah:',
      options: ['State Machine / Statechart Diagram', 'Sequence Diagram', 'Deployment Diagram', 'Use Case Diagram'],
      correctAnswer: 0,
      explanation: 'State Machine Diagram mendokumentasikan transisi state (misal: Pesanan: Dibuat -> Dibayar -> Dikirim -> Selesai / Dibatalkan) berdasarkan pemicu (trigger) dan kondisi penjaga (guard condition).'
    },
    {
      id: 'rpl-2-12',
      question: 'Dalam State Machine Diagram, ekspresi boolean dalam tanda kurung siku `[kondisi]` yang harus bernilai True agar transisi state dapat dieksekusi disebut:',
      options: ['Guard Condition', 'Trigger Event', 'Entry Action', 'State Invariant'],
      correctAnswer: 0,
      explanation: 'Guard condition adalah prasyarat boolean formal: jika dan hanya jika ekspresi tersebut bernilai True saat trigger tiba, maka transisi status diizinkan terjadi.'
    },
    {
      id: 'rpl-2-13',
      question: 'Diagram arsitektur fisik yang memetakan artefak perangkat lunak (eksekusi berkas, database, container) ke dalam node perangkat keras (server fisik, virtual machine, cloud instance) adalah:',
      options: ['Deployment Diagram', 'Class Diagram', 'Activity Diagram', 'Sequence Diagram'],
      correctAnswer: 0,
      explanation: 'Deployment Diagram menggambarkan topologi perangkat keras dan infrastruktur fisik jaringan tempat artefak perangkat lunak dijalankan (misal: Web Server Node terhubung ke Database Node via protokol TCP/IP port 5432).'
    },
    {
      id: 'rpl-2-14',
      question: 'Notasi panah dengan kepala segitiga berongga tertutup (hollow closed triangle arrow) pada Class Diagram melambangkan relasi:',
      options: ['Generalization / Inheritance (Pewarisan)', 'Association', 'Dependency', 'Aggregation'],
      correctAnswer: 0,
      explanation: 'Segitiga berongga menunjuk dari kelas anak (subclass) ke kelas induk (superclass), menandakan hubungan pewarisan (inheritance / IS-A relationship).'
    },
    {
      id: 'rpl-2-15',
      question: 'Jika panah segitiga berongga tersebut digambar dengan garis putus-putus (dashed line), relasi tersebut merepresentasikan:',
      options: ['Realization / Implementation (Implementasi Interface)', 'Aggregation', 'Komposisi', 'Association'],
      correctAnswer: 0,
      explanation: 'Garis putus-putus berujung segitiga berongga melambangkan bahwa sebuah kelas konkret merealisasikan (mengimplementasikan kontrak metode dari) suatu interface atau abstract class.'
    },
    {
      id: 'rpl-2-16',
      question: 'Apa arti kardinalitas `1..*` (satu ke banyak) di ujung suatu asosiasi Class Diagram?',
      options: [
        'Objek tersebut harus memiliki minimal 1 relasi dan dapat memiliki banyak relasi tanpa batas',
        'Tepat satu objek saja yang boleh ada',
        'Boleh bernilai 0 (opsional) hingga tak terbatas',
        'Maksimal 1 objek'
      ],
      correctAnswer: 0,
      explanation: 'Notasi `1..*` mendefinisikan batas bawah 1 (wajib ada) dan batas atas tak terbatas (bintang), menandakan relasi one-to-many wajib.'
    },
    {
      id: 'rpl-2-17',
      question: 'Dalam Activity Diagram, pembagian kolom vertikal atau horizontal yang mengelompokkan aktivitas berdasarkan departemen atau aktor penanggung jawab disebut:',
      options: ['Swimlanes (Partition)', 'Thread Pool', 'Action Barrier', 'Responsibility Gate'],
      correctAnswer: 0,
      explanation: 'Swimlanes (jalur renang) mempartisi diagram aktivitas menjadi kolom-kolom yang secara visual memisahkan siapa (aktor atau subsistem mana) yang melakukan aktivitas tertentu.'
    },
    {
      id: 'rpl-2-18',
      question: 'Pada Component Diagram UML, simbol lingkaran kecil bertangkai ("lollipop") dan soket setengah lingkaran ("socket") melambangkan:',
      options: [
        'Provided Interface (antarmuka yang disediakan) dan Required Interface (antarmuka yang dibutuhkan)',
        'Kabel power listrik dan baterai cadangan',
        'Port input suara mikrofon dan speaker output',
        'Kunci publik dan kunci privat RSA'
      ],
      correctAnswer: 0,
      explanation: 'Lollipop merepresentasikan Provided Interface (layanan API yang diekspos komponen), sedangkan Socket merepresentasikan Required Interface (layanan eksternal yang dibutuhkan komponen agar dapat bekerja).'
    },
    {
      id: 'rpl-2-19',
      question: 'Dalam Sequence Diagram, pesan asynchronous (di mana pengirim tidak memblokir diri menunggu balasan) digambarkan dengan:',
      options: [
        'Garis panah dengan ujung garis terbuka (open stick arrowhead)',
        'Garis panah dengan ujung segitiga solid terisi penuh',
        'Garis putus-putus merah',
        'Garis bergelombang ganda'
      ],
      correctAnswer: 0,
      explanation: 'Standar UML: Pesan synchronous digambarkan dengan panah segitiga penuh (filled solid triangle), sedangkan pesan asynchronous digambarkan dengan panah terbuka (open arrowhead / stick arrow).'
    },
    {
      id: 'rpl-2-20',
      question: 'Manakah dari pernyataan berikut yang paling tepat mengenai tujuan utama pemodelan UML dalam rekayasa perangkat lunak modern?',
      options: [
        'UML berfungsi sebagai bahasa visual standar untuk menspesifikasikan, memvisualisasikan, membangun, dan mendokumentasikan artefak sistem perangkat lunak agar dipahami bersama oleh seluruh tim',
        'UML dibuat agar kode program tidak perlu ditulis lagi sama sekali',
        'UML wajib dibuat ratusan halaman untuk setiap fungsi sederhana',
        'UML hanya dapat digunakan jika aplikasi ditulis dalam bahasa C++'
      ],
      correctAnswer: 0,
      explanation: 'UML menyediakan notasi visual universal lintas bahasa pemrograman untuk merancang cetak biru sistem, memfasilitasi komunikasi tim, dan mendokumentasikan keputusan arsitektural.'
    }
  ],

  // =========================================================================
  // MODUL 3: PRINSIP SOLID & DESIGN PATTERNS GOF ESENSIAL (20 Soal)
  // =========================================================================
  rpl_prinsip_pola_desain: [
    {
      id: 'rpl-3-1',
      question: 'Apa definisi inti dari Single Responsibility Principle (SRP) dalam prinsip SOLID?',
      options: [
        'Sebuah modul atau kelas harus hanya memiliki satu dan hanya satu alasan untuk berubah (hanya memiliki satu tanggung jawab bisnis)',
        'Sebuah program hanya boleh memiliki satu file fungsi saja',
        'Setiap programmer hanya boleh mengerjakan satu modul selama masa kerjanya',
        'Setiap fungsi hanya boleh menerima tepat satu parameter'
      ],
      correctAnswer: 0,
      explanation: 'SRP (Robert C. Martin): "A class should have one, and only one, reason to change." Tanggung jawab didefinisikan sebagai satu aktor/aktor bisnis yang memerlukan perubahan pada perilaku kelas tersebut.'
    },
    {
      id: 'rpl-3-2',
      question: 'Prinsip Open/Closed Principle (OCP) menyatakan bahwa entitas perangkat lunak (kelas, modul, fungsi) harus:',
      options: [
        'Terbuka untuk perluasan (open for extension), tetapi tertutup untuk modifikasi (closed for modification)',
        'Boleh dibuka siapa saja di internet (open-source), tetapi dilarang dimodifikasi',
        'Tertutup rapat dari pengguna luar dan tidak boleh memiliki fungsi inheritance',
        'Hanya boleh diedit saat program sedang ditutup (offline)'
      ],
      correctAnswer: 0,
      explanation: 'OCP: Anda harus dapat menambahkan perilaku baru ke dalam sistem tanpa perlu membongkar dan mengubah kode sumber yang sudah stabil dan teruji, biasanya dicapai melalui polimorfisme dan interface.'
    },
    {
      id: 'rpl-3-3',
      question: 'Pelanggaran terhadap Liskov Substitution Principle (LSP) terjadi jika:',
      options: [
        'Subclass tidak dapat menggantikan superclass-nya tanpa merusak kebenaran program atau memicu exception tak terduga',
        'Sebuah kelas memiliki lebih dari dua konstruktor',
        'Dua kelas turunan memiliki nama metode yang sama',
        'Kelas turunan mengeksekusi kode lebih cepat dari superclass-nya'
      ],
      correctAnswer: 0,
      explanation: 'LSP (Barbara Liskov): Subtipe harus dapat disubstitusikan ke tipe dasarnya tanpa mengubah perilaku program yang diharapkan (contoh klasik pelanggaran: kelas `Square` mewarisi `Rectangle` lalu mengubah logika independen panjang dan lebar).'
    },
    {
      id: 'rpl-3-4',
      question: 'Interface Segregation Principle (ISP) menyarankan para arsitek perangkat lunak untuk:',
      options: [
        'Membuat banyak antarmuka (interface) kecil dan spesifik untuk kebutuhan klien tertentu daripada satu antarmuka raksasa (fat interface)',
        'Melarang penggunaan interface dalam proyek berorientasi objek',
        'Menggabungkan semua metode sistem ke dalam satu antarmuka global raksasa',
        'Mengenkripsi file interface agar tidak terbaca hacker'
      ],
      correctAnswer: 0,
      explanation: 'ISP: "Clients should not be forced to depend upon interfaces that they do not use." Hindari interface gemuk (fat interface) yang memaksa kelas mengimplementasikan metode kosong/throw exception untuk fungsi yang tidak dibutuhkannya.'
    },
    {
      id: 'rpl-3-5',
      question: 'Dua aturan kunci dari Dependency Inversion Principle (DIP) adalah:',
      options: [
        'Modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah (keduanya harus bergantung pada abstraksi); dan Abstraksi tidak boleh bergantung pada detail (detail bergantung pada abstraksi)',
        'Semua variabel harus di-declare secara terbalik dari Z ke A',
        'Database harus mengakses antarmuka UI secara langsung',
        'Fungsi utama harus memanggil fungsi privat tanpa parameter'
      ],
      correctAnswer: 0,
      explanation: 'DIP membalikkan ketergantungan konvensional: logika bisnis inti (tingkat tinggi) tidak boleh diikat langsung dengan implementasi teknis tingkat rendah (seperti vendor database spesifik), melainkan diikat melalui kontrak abstraksi.'
    },
    {
      id: 'rpl-3-6',
      question: 'Tiga kategori klasifikasi pola desain menurut buku "Gang of Four" (GoF) adalah:',
      options: [
        'Creational, Structural, dan Behavioral Patterns',
        'Front-end, Back-end, dan Database Patterns',
        'Imperative, Functional, dan Declarative Patterns',
        'Synchronous, Asynchronous, dan Distributed Patterns'
      ],
      correctAnswer: 0,
      explanation: 'GoF mengklasifikasikan 23 pola desain menjadi 3 kelompok: Creational (pembentukan objek), Structural (komposisi kelas/objek), dan Behavioral (interaksi dan distribusi tanggung jawab).'
    },
    {
      id: 'rpl-3-7',
      question: 'Pola desain Singleton bertujuan untuk:',
      options: [
        'Menjamin suatu kelas hanya memiliki tepat satu instance di memori dan menyediakan titik akses global ke instance tersebut',
        'Menduplikasi instance sebanyak mungkin untuk load balancing',
        'Membatasi agar program hanya bisa dijalankan oleh satu pengguna tunggal di dunia',
        'Mengubah objek menjadi tipe data integer tunggal'
      ],
      correctAnswer: 0,
      explanation: 'Singleton menjamin hanya ada 1 instance dari suatu kelas (misal: DatabaseConnectionPool, AppConfig, Logger) dengan cara menyembunyikan konstruktor (private) dan menyediakan metode static getInstance().'
    },
    {
      id: 'rpl-3-8',
      question: 'Masalah utama yang sering muncul akibat penggunaan pola Singleton secara berlebihan (anti-pattern) adalah:',
      options: [
        'Menciptakan kopling ketat (tight coupling), menyembunyikan ketergantungan, dan mempersulit unit testing karena status global yang sulit di-mock',
        'Membuat aplikasi memakan kuota internet 10 kali lipat',
        'Menghapus kode program secara acak saat runtime',
        'Memperlambat penulisan file HTML'
      ],
      correctAnswer: 0,
      explanation: 'Singleton pada dasarnya adalah variabel global terselubung. Hal ini membuat unit test sulit diisolasi (state leak antar test suite) dan melanggar prinsip Dependency Injection.'
    },
    {
      id: 'rpl-3-9',
      question: 'Pola desain Factory Method mendelegasikan tanggung jawab pembentukan objek kepada:',
      options: [
        'Subclass turunan melalui metode virtual/override',
        'Sistem operasi Windows',
        'File konfigurasi XML eksternal',
        'Pengguna akhir melalui input prompt terminal'
      ],
      correctAnswer: 0,
      explanation: 'Factory Method mendefinisikan sebuah interface/metode untuk membuat objek, tetapi membiarkan subclass memutuskan kelas konkret mana yang akan diinstansiasi.'
    },
    {
      id: 'rpl-3-10',
      question: 'Kapan pola desain Builder (Creational) paling tepat digunakan?',
      options: [
        'Ketika suatu objek memiliki proses konstruksi yang sangat kompleks dengan banyak parameter opsional (menghindari "telescoping constructor")',
        'Ketika objek hanya memiliki 1 atribut integer',
        'Ketika kita ingin menghapus objek dari memori seketika',
        'Ketika kita ingin menjalankan SQL query secara langsung'
      ],
      correctAnswer: 0,
      explanation: 'Builder memisahkan konstruksi objek kompleks dari representasinya, memungkinkan langkah-langkah pembuatan bertahap yang fleksibel dan menghindari konstruktor panjang berantai (telescoping constructor antipattern).'
    },
    {
      id: 'rpl-3-11',
      question: 'Pola desain Adapter (Structural Pattern) berfungsi untuk:',
      options: [
        'Menjembatani dua antarmuka (interface) yang tidak kompatibel agar dapat bekerja bersama tanpa mengubah kode sumber kelas aslinya',
        'Menstabilkan arus tegangan listrik pada charger laptop',
        'Mengubah database relasional menjadi file teks biasa',
        'Menggandakan bandwidth internet pengembang'
      ],
      correctAnswer: 0,
      explanation: 'Adapter bertindak sebagai pembungkus (wrapper) yang menerjemahkan panggilan dari interface yang diharapkan klien ke interface yang dimiliki oleh kelas pihak ketiga yang sudah ada.'
    },
    {
      id: 'rpl-3-12',
      question: 'Pola desain Decorator memungkinkan pengembang untuk:',
      options: [
        'Menambahkan tanggung jawab atau perilaku baru ke objek individual secara dinamis pada saat runtime tanpa memodifikasi kelas aslinya',
        'Menghias tampilan warna tombol aplikasi menjadi gradasi',
        'Menghapus semua komentar di dalam berkas kode',
        'Mengunci file dari akses sistem operasi'
      ],
      correctAnswer: 0,
      explanation: 'Decorator membungkus objek asli dalam objek dekorator yang memiliki antarmuka yang sama, memberikan alternatif yang fleksibel terhadap subclassing untuk perluasan fungsionalitas secara runtime.'
    },
    {
      id: 'rpl-3-13',
      question: 'Pola desain Facade berguna untuk:',
      options: [
        'Menyediakan satu antarmuka tingkat tinggi yang sederhana dan terpadu untuk menyembunyikan kompleksitas dari suatu subsistem yang rumit',
        'Membongkar seluruh kode internal agar dapat diakses publik',
        'Membuat arsitektur berlapis menjadi lebih rumit',
        'Mengganti framework frontend setiap bulan'
      ],
      correctAnswer: 0,
      explanation: 'Facade menyediakan fasad/gerbang sederhana (contoh: fungsi `videoConverter.convert("file.mp4")` yang di baliknya mengorkestrasi codec, audio mixer, bitrate compressor, dan parser rumit).'
    },
    {
      id: 'rpl-3-14',
      question: 'Pola desain Observer (Behavioral Pattern) mendefinisikan relasi ketergantungan:',
      options: [
        'Satu-ke-banyak (one-to-many) di mana saat satu objek (Subject) berubah status, seluruh dependennya (Observers) otomatis diberitahu dan diperbarui',
        'Satu-ke-satu statis yang dikunci saat waktu kompilasi',
        'Banyak-ke-banyak acak tanpa ada notifikasi',
        'Hanya antar server di benua yang berbeda'
      ],
      correctAnswer: 0,
      explanation: 'Observer adalah fondasi event handling dan arsitektur reaktif (Pub/Sub): subjek memelihara daftar pengamat dan menyiarkan notifikasi setiap kali terjadi perubahan state internal.'
    },
    {
      id: 'rpl-3-15',
      question: 'Pola desain Strategy memungkinkan pengembang untuk:',
      options: [
        'Mendefinisikan sekelompok algoritma, mengenkapsulasi masing-masing algoritma, dan membuat mereka dapat saling dipertukarkan (interchangeable) pada saat runtime',
        'Menentukan strategi bisnis perusahaan dalam menjual saham',
        'Mencegah programmer menggunakan struktur percabangan switch-case selamanya',
        'Menjalankan program tanpa sistem operasi'
      ],
      correctAnswer: 0,
      explanation: 'Strategy memisahkan algoritma dari konteks klien yang menggunakannya (misal: algoritma rute perjalanan: DrivingStrategy, WalkingStrategy, TransitStrategy di dalam aplikasi peta).'
    },
    {
      id: 'rpl-3-16',
      question: 'Perbedaan mendasar antara pola Strategy dan State adalah:',
      options: [
        'Strategy dipilih secara independen oleh klien dari luar; sedangkan pada State, transisi keadaan dipicu secara internal oleh objek konteks seiring perubahan statusnya',
        'Strategy tidak memiliki kelas, State hanya memiliki kelas',
        'Strategy hanya untuk matematika, State untuk grafis',
        'Keduanya identik dan tidak memiliki perbedaan konseptual'
      ],
      correctAnswer: 0,
      explanation: 'Pada Strategy, klien biasanya memilih algoritma yang diinginkan sejak awal. Pada State, objek mengubah perilakunya sendiri secara otomatis ketika status internalnya berganti (menyerupai Finite State Machine terenkapsulasi).'
    },
    {
      id: 'rpl-3-17',
      question: 'Pola Command mengubah sebuah permintaan (request) menjadi:',
      options: [
        'Sebuah objek tersendiri yang berdiri sendiri (stand-alone object), sehingga mendukung operasi queue, logging, dan undo/redo',
        'Perintah terminal shell Linux seperti bash',
        'Sebuah sinyal audio speaker',
        'File gambar berformat PNG'
      ],
      correctAnswer: 0,
      explanation: 'Pola Command mengenkapsulasi seluruh informasi yang diperlukan untuk mengeksekusi suatu aksi ke dalam objek tersendiri (memiliki metode `execute()` dan `undo()`), sangat esensial untuk fitur riwayat Undo/Redo.'
    },
    {
      id: 'rpl-3-18',
      question: 'Prinsip "Favor Composition over Inheritance" dalam rekayasa perangkat lunak modern diajukan karena:',
      options: [
        'Pewarisan (inheritance) menciptakan kopling ketat (white-box reuse) yang melanggar enkapsulasi dan rentan terhadap masalah "fragile base class"',
        'Komposisi selalu membutuhkan baris kode yang lebih sedikit',
        'Pewarisan sudah dihapus dari semua bahasa pemrograman modern',
        'Compiler melarang pembuatan kelas turunan'
      ],
      correctAnswer: 0,
      explanation: 'Inheritance mengekspos detail implementasi kelas induk ke anak (white-box), membuat modifikasi induk berisiko merusak seluruh hierarki anak. Komposisi (HAS-A) menjaga batas enkapsulasi (black-box) dan lebih mudah diubah saat runtime.'
    },
    {
      id: 'rpl-3-19',
      question: 'Pola desain Proxy berguna untuk:',
      options: [
        'Menyediakan objek pengganti atau penahan (placeholder) untuk mengontrol akses ke objek asli (misal: Lazy Loading, Access Control, Caching)',
        'Membeli tiket bioskop secara otomatis',
        'Mengganti harddisk yang rusak di data center',
        'Mengonversi kode Python menjadi bahasa C'
      ],
      correctAnswer: 0,
      explanation: 'Proxy mengontrol akses ke objek asli, memungkinkan operasi tambahan sebelum atau sesudah permintaan diteruskan ke target nyata (contoh: Virtual Proxy untuk lazy loading gambar raksasa, Protection Proxy untuk otorisasi).'
    },
    {
      id: 'rpl-3-20',
      question: 'Dalam Dependency Injection (DI), penyuntikan ketergantungan melalui konstruktor kelas disebut:',
      options: ['Constructor Injection', 'Setter Injection', 'Interface Injection', 'Ambient Context Injection'],
      correctAnswer: 0,
      explanation: 'Constructor Injection adalah pendekatan DI yang paling disukai dan aman karena menjamin objek berada dalam kondisi valid secara penuh sejak pertama kali diinstansiasi dan mendukung prinsip immutability.'
    }
  ],

  // =========================================================================
  // MODUL 4: PENGUJIAN PERANGKAT LUNAK, TDD & METRIK KUALITAS KODE (20 Soal)
  // =========================================================================
  rpl_pengujian_kualitas: [
    {
      id: 'rpl-4-1',
      question: 'Dalam Piramida Pengujian (Testing Pyramid) karya Mike Cohn, distribusi jumlah pengujian yang ideal dari bawah ke atas adalah:',
      options: [
        'Banyak Unit Tests di dasar, sejumlah menengah Integration Tests di tengah, dan sedikit UI/E2E Tests di puncak',
        'Hanya E2E Tests saja di seluruh lapisan',
        'Banyak UI Tests di dasar dan sedikit Unit Tests di puncak (ice cream cone anti-pattern)',
        'Tidak memerlukan unit test jika sudah ada penguji manual'
      ],
      correctAnswer: 0,
      explanation: 'Testing Pyramid merekomendasikan mayoritas pengujian berupa Unit Test (cepat, murah, deterministik), diikuti Integration Test dalam jumlah moderat, dan sedikit End-to-End Test di puncak (lambat, mahal, rentan flaky).'
    },
    {
      id: 'rpl-4-2',
      question: 'Apa definisi dari Unit Testing dalam pengujian perangkat lunak?',
      options: [
        'Pengujian unit terkecil kode sumber (biasanya fungsi atau metode terisolasi) secara independen dari komponen luar',
        'Pengujian seluruh server saat terjadi pemadaman listrik',
        'Pengujian kecepatan internet di ruangan kantor',
        'Pengujian kepuasan pengguna menggunakan kuesioner kertas'
      ],
      correctAnswer: 0,
      explanation: 'Unit testing menguji unit komputasi terkecil secara terisolasi penuh dengan memutus dependensi eksternal (database, network, file system) menggunakan mock/stub.'
    },
    {
      id: 'rpl-4-3',
      question: 'Siklus inti dari metodologi Test-Driven Development (TDD) adalah:',
      options: [
        'Red (Tulis tes yang gagal) -> Green (Tulis kode minimal agar tes lolos) -> Refactor (Bersihkan struktur kode)',
        'Write Code -> Test Once -> Ship to Production',
        'Tulis dokumentasi -> Tunggu bug dilaporkan -> Tulis unit test',
        'Compile -> Debug -> Delete Test'
      ],
      correctAnswer: 0,
      explanation: 'Siklus TDD "Red-Green-Refactor": 1) Buat unit test yang mendefinisikan ekspektasi fitur (pasti gagal karena kode belum ada), 2) Tulis kode sesederhana mungkin agar test lulus, 3) Perbaiki rancangan kode tanpa mengubah fungsionalitas.'
    },
    {
      id: 'rpl-4-4',
      question: 'Dalam pembuatan test double, apa perbedaan antara Stub dan Mock?',
      options: [
        'Stub menyediakan data respons terprogram yang sudah disiapkan sebelumnya (state verification); sedangkan Mock memverifikasi perilaku interaksi seperti jumlah panggilan metode dan argumennya (behavior verification)',
        'Stub adalah programmer magang, Mock adalah programmer senior',
        'Stub hanya untuk bahasa Java, Mock untuk bahasa C',
        'Keduanya adalah objek asli tanpa rekayasa'
      ],
      correctAnswer: 0,
      explanation: 'Stub menjawab panggilan dengan jawaban siap saji tanpa memvalidasi alur (State Verification). Mock memiliki ekspektasi interaksi: memverifikasi apakah metode tertentu dipanggil dengan parameter yang benar (Behavior Verification).'
    },
    {
      id: 'rpl-4-5',
      question: 'Pengujian Black-Box (Black-Box Testing) dilakukan dengan karakteristik:',
      options: [
        'Penguji mengevaluasi fungsionalitas berdasarkan input dan output spesifikasi tanpa mengetahui struktur internal kode sumber',
        'Penguji membaca baris kode compiler secara langsung',
        'Pengujian dilakukan di dalam ruangan tanpa lampu',
        'Pengujian dilakukan saat server dalam kondisi mati total'
      ],
      correctAnswer: 0,
      explanation: 'Black-box testing berfokus pada persyaratan input/output eksternal sistem tanpa mempedulikan bagaimana kode internal diimplementasikan.'
    },
    {
      id: 'rpl-4-6',
      question: 'Sebaliknya, White-Box Testing (Glass-Box Testing) melibatkan:',
      options: [
        'Pemeriksaan struktur internal, logika alur kontrol cabang (branches), dan jalur eksekusi kode sumber secara transparan',
        'Hanya melihat warna antarmuka pengguna monitor',
        'Pengujian yang dilakukan khusus oleh pihak luar yang tidak paham coding',
        'Pengujian fisik casing komputer di pabrik'
      ],
      correctAnswer: 0,
      explanation: 'White-box testing memanfaatkan pengetahuan internal kode sumber untuk merancang test case yang menguji jalur logika percabangan, loop, dan kondisi batas.'
    },
    {
      id: 'rpl-4-7',
      question: 'Teknik Boundary Value Analysis (BVA) dalam black-box testing menyarankan pembuatan kasus uji pada:',
      options: [
        'Nilai-nilai di batas ambang ekstrem (batas bawah, tepat di atas/bawah batas, dan batas atas) dari rentang input',
        'Hanya angka nol di semua kondisi',
        'Angka acak apa saja di tengah domain',
        'Teks acak yang tidak bermakna'
      ],
      correctAnswer: 0,
      explanation: 'Sebagian besar bug pemrograman terjadi pada titik transisi kondisi batas (off-by-one errors, misal: `<` vs `<=`). BVA menargetkan nilai tepat di batas, satu di bawah, dan satu di atas ambang batas.'
    },
    {
      id: 'rpl-4-8',
      question: 'Metrik Code Coverage (Cakupan Kode) mengukur:',
      options: [
        'Persentase baris atau cabang kode sumber yang dieksekusi selama rangkaian uji coba otomatis dijalankan',
        'Berapa lembar kertas dokumen manual yang dicetak',
        'Berapa persen kapasitas harddisk yang terpakai oleh kode program',
        'Kecepatan rata-rata prosesor saat menjalankan aplikasi'
      ],
      correctAnswer: 0,
      explanation: 'Code coverage (Statement Coverage, Branch Coverage) menunjukkan proporsi kode sumber yang pernah dieksekusi oleh test suite. Perhatian: 100% coverage tidak menjamin kode bebas dari bug logika bisnis!'
    },
    {
      id: 'rpl-4-9',
      question: 'Kompleksitas Siklomatis (Cyclomatic Complexity) yang diperkenalkan oleh Thomas McCabe mengukur:',
      options: [
        'Jumlah jalur independen linier yang melewati kode sumber, dihitung dari formula M = E - N + 2P',
        'Jumlah siklus clock prosesor yang dihabiskan untuk menghitung nilai sinus',
        'Berat file zip hasil kompresi kode sumber',
        'Berapa kali programmer memutar kursi saat bekerja'
      ],
      correctAnswer: 0,
      explanation: 'Cyclomatic complexity mengukur kompleksitas struktural program berdasarkan graf alur kontrol ($M = E - N + 2P$). Nilai di atas 10 menunjukkan fungsi yang rumit, sulit dipelihara, dan membutuhkan banyak unit test.'
    },
    {
      id: 'rpl-4-10',
      question: 'Pengujian Regresi (Regression Testing) bertujuan esensial untuk:',
      options: [
        'Memastikan bahwa penambahan fitur baru atau perbaikan bug tidak merusak fitur-fitur lama yang sebelumnya sudah berfungsi normal',
        'Menurunkan versi aplikasi kembali ke versi 10 tahun lalu',
        'Menguji kemampuan sistem bekerja di komputer kuno',
        'Mengurangi gaji karyawan tim tester'
      ],
      correctAnswer: 0,
      explanation: 'Regression testing dijalankan setelah modifikasi kode untuk menjamin stabilitas bahwa fungsionalitas yang ada sebelumnya tidak mengalami regresi (kerusakan).'
    },
    {
      id: 'rpl-4-11',
      question: 'Apa perbedaan antara Verification dan Validation dalam jaminan kualitas perangkat lunak?',
      options: [
        'Verification: "Apakah kita membangun produk secara benar?" (sesuai spesifikasi rancangan); Validation: "Apakah kita membangun produk yang benar?" (sesuai kebutuhan nyata pengguna)',
        'Verification dilakukan oleh pengguna, Validation oleh compiler',
        'Keduanya adalah kata yang identik dalam kamus ISO',
        'Validation dilakukan saat proyek dibatalkan'
      ],
      correctAnswer: 0,
      explanation: 'Verification mengevaluasi kepatuhan artefak terhadap spesifikasi dokumen teknis (Are we building the product right?). Validation memastikan software memenuhi tujuan operasional pengguna di dunia nyata (Are we building the right product?).'
    },
    {
      id: 'rpl-4-12',
      question: 'Pengujian Integrasi (Integration Testing) secara spesifik menguji:',
      options: [
        'Interaksi dan antarmuka komunikasi antar modul atau layanan yang digabungkan bersama (misal: Service memanggil Database)',
        'Satu baris operator aritmatika saja',
        'Kekuatan fisik kabel LAN di dinding gedung',
        'Warna font pada dokumen proposal'
      ],
      correctAnswer: 0,
      explanation: 'Integration test memastikan bahwa komponen-komponen terpisah yang sudah lolos unit test dapat bekerja sama dengan benar ketika dihubungkan melalui interface atau protokol komunikasi.'
    },
    {
      id: 'rpl-4-13',
      question: 'Pola pengorganisasian kode unit test yang populer dengan struktur "Arrange, Act, Assert" (AAA) berarti:',
      options: [
        '1) Persiapkan kondisi & data input; 2) Jalankan fungsi yang diuji; 3) Verifikasi hasil keluaran dengan ekspektasi',
        '1) Ajak teman berdiskusi; 2) Ambil tindakan acak; 3) Akui kesalahan',
        '1) Analisis kebutuhan; 2) Alokasi memori; 3) Akhiri program',
        '1) Amankan password; 2) Akses database; 3) Atur koneksi'
      ],
      correctAnswer: 0,
      explanation: 'Pattern AAA (Arrange-Act-Assert) adalah standar de-facto penulisan test yang bersih dan terbaca: siapkan state/mock -> picu operasi -> uji assertion.'
    },
    {
      id: 'rpl-4-14',
      question: 'Apa yang dimaksud dengan "Flaky Test" dalam ekosistem otomasi pengujian?',
      options: [
        'Tes yang memberikan hasil berbeda-beda (kadang pass, kadang fail) pada commit kode yang sama tanpa ada perubahan apapun',
        'Tes yang sengaja dibuat gagal oleh manajer',
        'Tes yang berjalan terlalu cepat kurang dari 1 milidetik',
        'Tes yang ditulis dalam format Markdown'
      ],
      correctAnswer: 0,
      explanation: 'Flaky test adalah tes non-deterministik yang merusak kepercayaan tim terhadap CI/CD, umumnya dipicu oleh race conditions, latensi jaringan yang tidak stabil, atau urutan eksekusi acak.'
    },
    {
      id: 'rpl-4-15',
      question: 'Mutation Testing adalah teknik pengujian mutakhir yang bertujuan untuk:',
      options: [
        'Menguji kualitas dari rangkaian test suite itu sendiri dengan cara menyuntikkan kesalahan buatan (mutants) ke dalam kode sumber',
        'Mengubah kode menjadi virus komputer',
        'Menghapus database secara permanen',
        'Menguji ketahanan komputer terhadap radiasi sinar UV'
      ],
      correctAnswer: 0,
      explanation: 'Mutation testing mengevaluasi efektivitas test suite: jika kode sengaja dirusak (mutant) tetapi semua test tetap lolos (pass), berarti test suite tersebut berkualitas buruk karena gagal mendeteksi kerusakan!'
    },
    {
      id: 'rpl-4-16',
      question: 'Pengujian Beban (Load Testing) dan Pengujian Stres (Stress Testing) dibedakan berdasarkan:',
      options: [
        'Load testing menguji perilaku sistem di bawah beban volume normal yang diharapkan; Stress testing menguji sistem di luar batas kapasitas normal hingga mencapai titik kegagalan (breaking point)',
        'Load testing untuk hardware, Stress testing untuk psikologi pengembang',
        'Load testing tidak memerlukan software, Stress testing wajib manual',
        'Keduanya sama persis tanpa perbedaan teknis'
      ],
      correctAnswer: 0,
      explanation: 'Load test memverifikasi SLA performa di bawah volume traffic puncak yang diantisipasi. Stress test menekan sistem melampaui batas rancangan untuk melihat bagaimana sistem merespons kegagalan (apakah graceful degradation atau crash fatal).'
    },
    {
      id: 'rpl-4-17',
      question: 'Uji Penerimaan Pengguna (User Acceptance Testing / UAT) dilakukan pada fase:',
      options: [
        'Akhir sebelum rilis produksi, dilakukan oleh klien atau pengguna akhir untuk memastikan sistem memenuhi kebutuhan bisnis mereka',
        'Hari pertama sebelum arsitektur dirancang',
        'Saat programmer sedang menginstal IDE di komputernya',
        'Setelah software ditarik dari pasaran'
      ],
      correctAnswer: 0,
      explanation: 'UAT adalah gerbang verifikasi terakhir sebelum rilis produksi, di mana pemilik bisnis memverifikasi bahwa solusi perangkat lunak benar-benar menyelesaikan masalah nyata mereka.'
    },
    {
      id: 'rpl-4-18',
      question: 'Metrik "Code Smells" dalam analisis statis kode merujuk pada:',
      options: [
        'Indikasi atau gejala permukaan pada kode yang mengindikasikan adanya masalah rancangan atau arsitektur yang lebih dalam (misal: Long Method, God Object)',
        'Bau fisik keyboard programmer',
        'Kesalahan sintaksis yang membuat program tidak bisa dikompilasi',
        'Tanda tangan digital sertifikat SSL yang kedaluwarsa'
      ],
      correctAnswer: 0,
      explanation: 'Code smell (Kent Beck) bukan bug (kode tetap berjalan), melainkan kelemahan desain struktural yang memperlambat pemeliharaan dan meningkatkan risiko bug di masa depan.'
    },
    {
      id: 'rpl-4-19',
      question: 'Pengujian Keamanan (Security Testing) yang memeriksa kerentanan umum seperti SQL Injection dan XSS didasarkan pada standar:',
      options: ['OWASP Top 10', 'IEEE 754', 'ISO 9001', 'RFC 2616'],
      correctAnswer: 0,
      explanation: 'OWASP (Open Web Application Security Project) Top 10 adalah standar konsensus global yang mendokumentasikan risiko keamanan aplikasi web paling kritis (Injection, Broken Authentication, XSS, dll).'
    },
    {
      id: 'rpl-4-20',
      question: 'Pola "Equivalence Partitioning" dalam perancangan test case bertujuan untuk:',
      options: [
        'Membagi domain data masukan ke dalam kelas-kelas data yang valid dan tidak valid, di mana satu nilai uji dianggap mewakili seluruh kelas tersebut',
        'Menduplikasi test case sebanyak mungkin hingga satu juta kali',
        'Menyamakan nilai integer dengan string kosong',
        'Menghapus partisi harddisk server testing'
      ],
      correctAnswer: 0,
      explanation: 'Equivalence Partitioning membagi data masukan menjadi partisi ekuivalen. Menguji satu sampel dari setiap partisi diasumsikan mewakili seluruh anggota partisi, mereduksi jumlah tes tanpa mengorbankan kualitas.'
    }
  ],

  // =========================================================================
  // MODUL 5: ARSITEKTUR MONOLITH VS MICROSERVICES, CI/CD & DEVOPS (20 Soal)
  // =========================================================================
  rpl_arsitektur_devops: [
    {
      id: 'rpl-5-1',
      question: 'Karakteristik utama dari arsitektur Monolithic (Monolit) adalah:',
      options: [
        'Seluruh komponen sistem (UI, logika bisnis, dan akses data) dibangun dan dipaketkan sebagai satu kesatuan unit eksekusi tunggal',
        'Setiap fungsi dijalankan di satelit luar angkasa yang berbeda',
        'Aplikasi tidak memiliki database sama sekali',
        'Aplikasi hanya boleh ditulis menggunakan satu baris kode'
      ],
      correctAnswer: 0,
      explanation: 'Arsitektur Monolit menyatukan seluruh basis kode dan fungsionalitas ke dalam satu artefak deployable tunggal yang berbagi satu basis data terpusat.'
    },
    {
      id: 'rpl-5-2',
      question: 'Kelebihan utama arsitektur Monolit dibandingkan Microservices pada tahap awal proyek (MVP) adalah:',
      options: [
        'Kesederhanaan pengembangan lokal, deployment mudah, pengujian end-to-end terintegrasi, dan tidak ada latensi jaringan antar layanan internal',
        'Memerlukan 50 server Kubernetes terpisah sejak hari pertama',
        'Mengurangi kebutuhan programmer backend',
        'Secara otomatis memperbaiki semua bug logika'
      ],
      correctAnswer: 0,
      explanation: 'Monolit jauh lebih sederhana untuk di-debug, diuji, dan di-deploy pada fase awal karena tidak menghadapi kompleksitas terdistribusi (network partition, latency, distributed transactions).'
    },
    {
      id: 'rpl-5-3',
      question: 'Sebaliknya, apa prinsip dasar dari arsitektur Microservices?',
      options: [
        'Aplikasi dipecah menjadi kumpulan layanan-layanan kecil yang independen, terfokus pada domain bisnis spesifik, memiliki database sendiri, dan berkomunikasi via protokol jaringan ringan (REST/gRPC)',
        'Semua programmer bekerja di komputer mikro',
        'Aplikasi yang hanya bisa diakses menggunakan layar smartphone kecil',
        'Penggunaan database relasional tunggal raksasa yang dipakai bersama oleh 100 tim'
      ],
      correctAnswer: 0,
      explanation: 'Microservices mengorganisir aplikasi sebagai sekumpulan layanan otonom terdistribusi dengan prinsip "Database per Service" dan batas domain bisnis yang jelas (Bounded Context).'
    },
    {
      id: 'rpl-5-4',
      question: 'Hukum Conway (Conway\'s Law) dalam rekayasa perangkat lunak menyatakan bahwa:',
      options: [
        '"Organisasi yang merancang sistem pasti menghasilkan arsitektur yang meniru struktur komunikasi dari organisasi tersebut"',
        '"Programmer yang baik selalu menulis kode dalam kegelapan"',
        '"Semua software akan usang dalam 18 bulan"',
        '"Kecepatan internet menentukan jumlah bug"'
      ],
      correctAnswer: 0,
      explanation: 'Melvin Conway (1967): "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." Tim silo menghasilkan arsitektur berlapis kaku; tim otonom lintas-fungsi menghasilkan layanan independen.'
    },
    {
      id: 'rpl-5-5',
      question: 'Teorema CAP (Brewer\'s Theorem) dalam sistem terdistribusi menyatakan bahwa tidak mungkin suatu sistem menyediakan secara bersamaan lebih dari dua dari tiga jaminan berikut:',
      options: [
        'Consistency, Availability, dan Partition Tolerance',
        'Concurrency, Accuracy, dan Performance',
        'Complexity, Agility, dan Portability',
        'Cost, Automation, dan Protection'
      ],
      correctAnswer: 0,
      explanation: 'Teorema CAP: Dalam kehadiran partisi jaringan fisik (Partition Tolerance, P) yang tak terhindarkan pada sistem terdistribusi, sistem harus memilih antara Konsistensi data mutlak (C) ATAU Ketersediaan respons (A).'
    },
    {
      id: 'rpl-5-6',
      question: 'Untuk menangani transaksi terdistribusi melintasi beberapa microservices tanpa menggunakan two-phase commit yang lambat, pola yang paling sering digunakan adalah:',
      options: ['Saga Pattern (Orchestration atau Choreography)', 'Singleton Pattern', 'God Object Pattern', 'Waterfall Commit'],
      correctAnswer: 0,
      explanation: 'Pola Saga mengelola transaksi lintas layanan sebagai urutan transaksi lokal. Jika salah satu langkah gagal, Saga mengeksekusi serangkaian transaksi kompensasi (compensating transactions) untuk membatalkan perubahan sebelumnya.'
    },
    {
      id: 'rpl-5-7',
      question: 'Dalam ekosistem microservices, komponen yang bertindak sebagai gerbang pintu masuk tunggal bagi klien luar untuk routing, autentikasi, rate limiting, dan SSL termination disebut:',
      options: ['API Gateway', 'Load Balancer layer 2', 'Message Broker', 'Database Proxy'],
      correctAnswer: 0,
      explanation: 'API Gateway menyediakan fasad terpusat bagi klien eksternal, mengisolasi topologi microservices internal, serta menangani cross-cutting concerns seperti autentikasi JWT dan pembatasan laju request.'
    },
    {
      id: 'rpl-5-8',
      question: 'Pola Circuit Breaker (misal: Netflix Hystrix / Resilience4j) dirancang untuk:',
      options: [
        'Mencegah kegagalan beruntun (cascading failure) dengan cara memutus panggilan sementara ke layanan hilir yang sedang lambat atau down',
        'Mematikan sekring listrik gedung server saat badai petir',
        'Menghapus rute jaringan hacker secara fisik',
        'Menghentikan eksekusi kode ketika memori 100% penuh'
      ],
      correctAnswer: 0,
      explanation: 'Sama seperti sekring listrik rumah, Circuit Breaker mendeteksi jika layanan eksternal gagal terus-menerus dan langsung mengembalikan respons fallback instan (Open State) tanpa membiarkan thread caller menumpuk dan kehabisan memori.'
    },
    {
      id: 'rpl-5-9',
      question: 'Apa definisi dari Continuous Integration (CI) dalam praktik rekayasa modern?',
      options: [
        'Praktik di mana pengembang secara rutin menggabungkan (merge) perubahan kode mereka ke repositori pusat beberapa kali sehari, di mana setiap integrasi otomatis diverifikasi oleh build dan automated testing',
        'Menulis kode tanpa henti selama 24 jam sehari',
        'Menggabungkan server fisik menjadi satu rak besar',
        'Menyewa konsultan eksternal setiap minggu'
      ],
      correctAnswer: 0,
      explanation: 'CI berfokus pada integrasi harian kontinu yang divalidasi oleh pipeline otomatis (linter, unit test, build compile) untuk mendeteksi konflik dan kerusakan sedini mungkin.'
    },
    {
      id: 'rpl-5-10',
      question: 'Perbedaan utama antara Continuous Delivery (CD) dan Continuous Deployment adalah:',
      options: [
        'Continuous Delivery menyiapkan build siap rilis yang membutuhkan persetujuan manual (human trigger) untuk masuk ke produksi; Continuous Deployment merilis setiap perubahan yang lolos uji langsung ke produksi secara otomatis tanpa intervensi manual',
        'Continuous Delivery hanya untuk aplikasi desktop, Continuous Deployment untuk web',
        'Continuous Deployment dilakukan manual sebulan sekali',
        'Continuous Delivery melarang penggunaan unit testing'
      ],
      correctAnswer: 0,
      explanation: 'Pada Continuous Delivery, setiap commit yang lolos pipeline otomatis siap di-deploy, namun peluncuran akhir ke produksi membutuhkan tombol persetujuan bisnis manual. Continuous Deployment melangkah lebih jauh: jika pipeline hijau, kode langsung tayang ke produksi otomatis.'
    },
    {
      id: 'rpl-5-11',
      question: 'Teknologi Containerization (seperti Docker) berbeda dari Mesin Virtual (Virtual Machine) konvensional karena:',
      options: [
        'Container berbagi kernel sistem operasi host dan mengisolasi proses di level user space (jauh lebih ringan dan cepat startup-nya); VM memvirtualisasikan perangkat keras penuh dan menjalankan OS tamu (Guest OS) lengkap',
        'Container membutuhkan perangkat keras khusus dari IBM',
        'VM tidak membutuhkan harddisk sama sekali',
        'Container hanya bisa digunakan untuk bahasa Python'
      ],
      correctAnswer: 0,
      explanation: 'Container mengisolasi aplikasi menggunakan cgroups dan namespaces Linux tanpa overhead Guest OS penuh, sehingga berukuran megabyte (bukan gigabyte) dan menyala dalam hitungan milidetik.'
    },
    {
      id: 'rpl-5-12',
      question: 'Kubernetes (K8s) dalam arsitektur sistem modern berfungsi sebagai:',
      options: [
        'Platform orkestrasi container open-source untuk mengotomatiskan deployment, penskalaan (scaling), dan pengelolaan container aplikasi',
        'Bahasa pemrograman backend baru pengganti Java',
        'Sistem manajemen database SQL relasional',
        'Protokol transfer file pengganti FTP'
      ],
      correctAnswer: 0,
      explanation: 'Kubernetes mengotomatiskan pengelolaan container berskala besar: penempatan pod pada node worker, service discovery, self-healing (restart container mati), dan horizontal autoscaling.'
    },
    {
      id: 'rpl-5-13',
      question: 'Strategi rilis "Blue-Green Deployment" dijalankan dengan cara:',
      options: [
        'Menyiapkan dua lingkungan identik: lingkungan aktif (Blue) melayani lalu lintas pengguna, sementara versi baru di-deploy ke lingkungan cadangan (Green); setelah verifikasi lolos, router mengalihkan lalu lintas seketika ke Green',
        'Mengecat server dengan warna biru dan hijau bergantian',
        'Membagi user berdasarkan warna kulit atau negara',
        'Menjalankan rilis hanya di siang hari'
      ],
      correctAnswer: 0,
      explanation: 'Blue-Green deployment meminimalkan downtime menjadi nol dan memberikan mekanisme rollback instan: cukup alihkan pointer router kembali ke lingkungan Blue jika lingkungan Green mengalami anomali.'
    },
    {
      id: 'rpl-5-14',
      question: 'Strategi rilis "Canary Deployment" menguji versi aplikasi baru dengan cara:',
      options: [
        'Mengalirkan sebagian kecil persentase lalu lintas pengguna nyata (misal: 5%) ke versi baru terlebih dahulu untuk memantau metrik stabilitas sebelum peluncuran 100%',
        'Mengirimkan aplikasi ke peternakan burung kenari',
        'Menyebarkan kode baru hanya ke server offline',
        'Menghentikan seluruh server selama 2 jam'
      ],
      correctAnswer: 0,
      explanation: 'Terinspirasi dari kenari di tambang batu bara, Canary release menyalurkan sedikit traffic ke versi baru untuk mendeteksi error rate dan degradasi performa sebelum berdampak ke seluruh basis pengguna.'
    },
    {
      id: 'rpl-5-15',
      question: 'Prinsip "Infrastructure as Code" (IaC) yang diwujudkan oleh alat seperti Terraform dan Ansible bermakna bahwa:',
      options: [
        'Infrastruktur komputasi, jaringan, dan server didefinisikan menggunakan berkas konfigurasi deklaratif yang dapat dikontrol versinya (git version-controlled)',
        'Server harus dirakit manual menggunakan obeng oleh programmer',
        'Semua server fisik harus diletakkan di bawah meja kerja',
        'Kabel jaringan harus diberi label nama fungsi kode'
      ],
      correctAnswer: 0,
      explanation: 'IaC memperlakukan provisi server, firewall, dan routing jaringan layaknya kode perangkat lunak: terdefinisi deklaratif, dapat di-review via pull request, dan dapat direproduksi identik kapan saja.'
    },
    {
      id: 'rpl-5-16',
      question: 'Dalam pilar Observabilitas (Observability) sistem modern, tiga pilar utama data telemetri adalah:',
      options: [
        'Metrics, Logs, dan Traces',
        'HTML, CSS, dan JavaScript',
        'RAM, CPU, dan Harddisk',
        'Users, Passwords, dan Tokens'
      ],
      correctAnswer: 0,
      explanation: 'Tiga pilar observabilitas: Metrics (agregasi numerik tren kesehatan), Logs (catatan peristiwa berwaktu), dan Distributed Traces (perjalanan pelacakan satu request melintasi puluhan microservices).'
    },
    {
      id: 'rpl-5-17',
      question: 'Distributed Tracing (seperti OpenTelemetry / Jaeger) menggunakan pengidentifikasi unik yang disebut:',
      options: ['Trace ID dan Span ID', 'Cookie Session', 'User ID', 'Port TCP'],
      correctAnswer: 0,
      explanation: 'Trace ID disebarkan (propagated) melalui HTTP headers ke setiap layanan hilir, menghubungkan segmen kerja individual (Span ID) ke dalam satu grafik riwayat panggilan terpadu.'
    },
    {
      id: 'rpl-5-18',
      question: 'Konsep "DevOps" pada intinya adalah gerakan budaya dan praktik teknis yang bertujuan untuk:',
      options: [
        'Meruntuhkan sekat pemisah (silo) antara tim Pengembang (Development) dan tim Operasional (Operations) guna mempercepat siklus rilis dengan keandalan tinggi',
        'Menghapus tim pengembang dan menggantinya dengan robot',
        'Memaksa programmer bekerja shift malam di data center',
        'Menghilangkan penggunaan sistem kontrol versi Git'
      ],
      correctAnswer: 0,
      explanation: 'DevOps menggabungkan filosofi budaya, praktik otomatisasi, dan alat kolaboratif untuk meningkatkan kemampuan organisasi merilis aplikasi dengan kecepatan tinggi dan stabilitas kualitas produksi.'
    },
    {
      id: 'rpl-5-19',
      question: 'Tiga metrik Service Level yang paling fundamental dalam keandalan sistem (SRE) adalah:',
      options: [
        'SLA (Agreement / Kontrak Bisnis), SLO (Objective / Target Internal), dan SLI (Indicator / Realitas Terukur)',
        'SQL, SSL, dan SSH',
        'CPU, RAM, dan ROM',
        'Git, SVN, dan Mercurial'
      ],
      correctAnswer: 0,
      explanation: 'SLI adalah metrik aktual (misal: 99.85% request sukses). SLO adalah target internal tim engineering (misal: 99.9% sukses). SLA adalah perjanjian hukum berkonsekuensi penalti finansial dengan pelanggan (misal: jaminan 99.5% uptime).'
    },
    {
      id: 'rpl-5-20',
      question: 'Prinsip "Chaos Engineering" (seperti Chaos Monkey dari Netflix) mempraktikkan:',
      options: [
        'Penyuntikan kegagalan acak yang disengaja ke dalam sistem produksi (seperti mematikan server secara tiba-tiba) untuk memvalidasi ketahanan (resilience) arsitektur',
        'Penulisan kode tanpa aturan format dan indentasi',
        'Pemberian akses root kepada semua orang tanpa autentikasi',
        'Menghapus backup database setiap akhir pekan'
      ],
      correctAnswer: 0,
      explanation: 'Chaos Engineering bereksperimen dengan mematikan pod atau memutus jaringan di lingkungan nyata untuk membuktikan bahwa sistem dapat bertahan dan pulih otomatis dari kegagalan tak terduga sebelum insiden nyata terjadi.'
    }
  ]
};
