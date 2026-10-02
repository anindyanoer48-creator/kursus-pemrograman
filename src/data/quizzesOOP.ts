import type { QuizQuestion } from './curriculum';

export const OOP_QUIZZES: Record<string, QuizQuestion[]> = {
  // =========================================================================
  // MODUL 1: PARADIGMA OOP, KELAS, OBJEK, KONSTRUKTOR & LIFECYCLE (20 Soal)
  // =========================================================================
  oop_kelas_objek_konstruktor: [
    {
      id: 'oop-1-1',
      question: 'Apa perbedaan mendasar antara "Kelas" (Class) dan "Objek" (Object) dalam pemrograman berorientasi objek?',
      options: [
        'Kelas adalah cetak biru (blueprint/tipe data) abstrak yang mendefinisikan atribut dan metode; Objek adalah instansiasi konkret dari kelas yang menempati ruang memori saat runtime',
        'Kelas hanya ada di dalam file compiler, objek hanya ada di monitor',
        'Objek adalah fungsi matematika, kelas adalah variabel global',
        'Kelas diciptakan saat runtime, sedangkan objek diciptakan saat waktu kompilasi'
      ],
      correctAnswer: 0,
      explanation: 'Kelas adalah spesifikasi logis atau cetak biru tipe data bentukan pengembang. Objek adalah entitas nyata hasil instansiasi kelas yang dialokasikan di memori (heap atau stack) dengan status/state mandiri.'
    },
    {
      id: 'oop-1-2',
      question: 'Apa fungsi utama dari metode Konstruktor (Constructor) pada sebuah kelas?',
      options: [
        'Menginisialisasi status awal (atribut) objek yang baru saja dialokasikan di memori agar berada dalam kondisi yang valid',
        'Menghancurkan objek dari memori secara permanen',
        'Mengubah kode program menjadi bahasa biner',
        'Mempercepat kompilasi program'
      ],
      correctAnswer: 0,
      explanation: 'Konstruktor dipanggil secara otomatis saat pembuatan objek untuk mengalokasikan sumber daya, menetapkan nilai awal atribut, dan memastikan invarian kelas terpenuhi.'
    },
    {
      id: 'oop-1-3',
      question: 'Konsep "Constructor Overloading" memungkinkan suatu kelas untuk:',
      options: [
        'Memiliki lebih dari satu konstruktor dengan nama yang sama persis, asalkan jumlah, tipe, atau urutan parameternya berbeda (signature unik)',
        'Membeli RAM komputer tambahan secara otomatis',
        'Menjalankan dua konstruktor di dua thread berbeda pada objek yang sama',
        'Mengubah nama kelas saat program berjalan'
      ],
      correctAnswer: 0,
      explanation: 'Constructor overloading memberikan fleksibilitas instansiasi: objek dapat diciptakan dengan nilai default (parameter kosong) atau dengan data lengkap (berparameter) melalui polimorfisme statis.'
    },
    {
      id: 'oop-1-4',
      question: 'Kata kunci `this` (atau `self` di Python) di dalam sebuah metode kelas merujuk kepada:',
      options: [
        'Referensi ke objek instance spesifik yang saat itu sedang memanggil metode tersebut',
        'Referensi ke sistem operasi komputer host',
        'Referensi ke kelas induk teratas',
        'Referensi ke file compiler'
      ],
      correctAnswer: 0,
      explanation: 'Kata kunci `this` adalah pointer implisit yang menunjuk ke instance objek saat ini, digunakan untuk membedakan antara atribut kelas dan parameter metode yang memiliki nama sama (shadowing).'
    },
    {
      id: 'oop-1-5',
      question: 'Apa peran metode Destruktor (Destructor, seperti `~ClassName()` di C++) dalam siklus hidup objek?',
      options: [
        'Membersihkan sumber daya eksternal (seperti menutup handle berkas, soket jaringan, atau membebaskan memori dinamis) sebelum objek dihapus dari memori',
        'Membuat objek baru secara acak',
        'Menduplikasi objek ke database cloud',
        'Mengubah nilai variabel menjadi nol'
      ],
      correctAnswer: 0,
      explanation: 'Destruktor dipanggil otomatis saat objek keluar dari scope (di stack) atau saat operator `delete` dipanggil (di heap), menjadi pilar utama idiom RAII (Resource Acquisition Is Initialization).'
    },
    {
      id: 'oop-1-6',
      question: 'Apa perbedaan antara alokasi objek di Stack dan di Heap dalam bahasa seperti C++?',
      options: [
        'Objek di Stack dialokasikan sangat cepat dan otomatis dihancurkan saat fungsi keluar dari scope; Objek di Heap dialokasikan dinamis dengan kata kunci `new` dan siklus hidupnya harus dikelola manual atau via garbage collector',
        'Objek di Stack berukuran tak terbatas, Heap hanya 1 KB',
        'Objek di Heap tidak bisa memiliki metode fungsi',
        'Objek di Stack hanya untuk bilangan pecahan float'
      ],
      correctAnswer: 0,
      explanation: 'Stack memory sangat cepat (cukup menggeser stack pointer) dengan deallokasi otomatis LIFO. Heap memory lebih lambat dan fleksibel tetapi rentan terhadap memory leak jika tidak dibebaskan.'
    },
    {
      id: 'oop-1-7',
      question: 'Dalam bahasa dengan Garbage Collection (seperti Java atau C#), apa tugas utama Garbage Collector (GC)?',
      options: [
        'Mengidentifikasi dan secara otomatis membebaskan memori dari objek-objek di Heap yang sudah tidak lagi memiliki referensi aktif yang dapat dijangkau (unreachable objects)',
        'Menghapus kode sumber yang memiliki sintaks salah',
        'Membersihkan debu fisik dari motherboard komputer',
        'Memperbaiki logika perulangan tak terbatas secara mandiri'
      ],
      correctAnswer: 0,
      explanation: 'Garbage Collector melacak grafik referensi objek dari GC Roots (stack frame, global variables); objek yang terputus dari rantai keterjangkauan ditandai dan dibersihkan secara otomatis.'
    },
    {
      id: 'oop-1-8',
      question: 'Apa yang dimaksud dengan "Static Member" (atribut atau metode statis) pada sebuah kelas?',
      options: [
        'Member yang dimiliki oleh KELAS itu sendiri secara global, sehingga hanya ada SATU salinan di memori yang dibagi bersama oleh semua objek instance',
        'Member yang nilainya tidak boleh dibaca oleh siapapun',
        'Member yang nilainya berubah setiap 1 milidetik',
        'Member yang hanya bisa dijalankan di komputer tanpa internet'
      ],
      correctAnswer: 0,
      explanation: 'Atribut statis tidak digandakan per instance. Metode statis dapat dipanggil langsung melalui nama kelas (misal: `Math.sqrt()`) tanpa perlu menginstansiasi objek terlebih dahulu.'
    },
    {
      id: 'oop-1-9',
      question: 'Mengapa metode statis (static method) TIDAK DAPAT mengakses kata kunci `this` atau atribut non-statis secara langsung?',
      options: [
        'Karena metode statis dieksekusi di level kelas dan tidak terikat pada instance objek manapun yang spesifik',
        'Karena metode statis berjalan di kernel mode',
        'Karena compiler melarang penggunaan variabel di dalam metode',
        'Karena metode statis hanya membaca angka nol'
      ],
      correctAnswer: 0,
      explanation: 'Atribut non-statis hanya ada ketika sebuah objek diinstansiasi di memori. Karena metode statis dapat dipanggil tanpa objek sama sekali, tidak ada konteks instance (`this`) yang dapat dirujuk.'
    },
    {
      id: 'oop-1-10',
      question: 'Pola "Constructor Chaining" (atau Constructor Delegation) mengacu pada praktik:',
      options: [
        'Memanggil satu konstruktor dari konstruktor lain di dalam kelas yang sama (menggunakan `this(...)`) guna menghindari duplikasi kode inisialisasi',
        'Mengunci memori RAM secara berantai',
        'Membuat objek baru di dalam loop tak berhingga',
        'Menyambungkan komputer dengan rantai besi'
      ],
      correctAnswer: 0,
      explanation: 'Constructor delegation memungkinkan konstruktor sederhana dengan parameter sedikit meneruskan nilai default ke konstruktor master utama dengan parameter lengkap via pemanggilan `this(...)`.'
    },
    {
      id: 'oop-1-11',
      question: 'Apa bahaya utama dari kebocoran memori (Memory Leak) pada aplikasi berorientasi objek di lingkungan non-garbage-collected?',
      options: [
        'Penggunaan memori RAM aplikasi terus membengkak tanpa henti seiring waktu hingga akhirnya sistem kehabisan memori (Out-Of-Memory) dan crash',
        'Program akan mengirim data pribadi ke internet',
        'Layar monitor menampilkan gambar acak',
        'Kecepatan mouse menjadi sangat lambat'
      ],
      correctAnswer: 0,
      explanation: 'Memory leak terjadi ketika objek di heap dialokasikan dengan `new`/`malloc` tetapi pointer referensinya hilang sebelum dibebaskan (`delete`/`free`), menyisakan blok memori tak terpakai yang terkunci selamanya.'
    },
    {
      id: 'oop-1-12',
      question: 'Salinan Dangkal (Shallow Copy) berbeda dari Salinan Dalam (Deep Copy) pada saat menduplikasi objek karena:',
      options: [
        'Shallow copy hanya menyalin nilai field primitif dan ALAMAT POINTER dari objek rujukan (sehingga kedua objek merujuk ke data dalam yang sama); Deep copy menduplikasi seluruh hierarki objek hingga ke data terdalamnya',
        'Shallow copy memerlukan waktu 10 jam lebih lama',
        'Deep copy hanya menyalin nama kelas',
        'Shallow copy mengubah tipe data menjadi integer'
      ],
      correctAnswer: 0,
      explanation: 'Pada shallow copy, jika objek A dan B berbagi pointer objek anak yang sama, modifikasi objek anak oleh A akan secara tidak sengaja memengaruhi B (dan berisiko double-free bug saat destruksi).'
    },
    {
      id: 'oop-1-13',
      question: 'Dalam C++, "Rule of Three" menyatakan bahwa jika sebuah kelas membutuhkan destruktor kustom untuk mengelola memori dinamis, kelas tersebut kemungkinan besar juga membutuhkan kustomisasi:',
      options: [
        'Copy Constructor dan Copy Assignment Operator',
        'Main Function dan Print Function',
        'Dua variabel statis tambahan',
        'Metode getter dan setter'
      ],
      correctAnswer: 0,
      explanation: 'Rule of Three: Jika Anda mengalokasikan sumber daya manual di destruktor, Anda wajib menulis kustom Copy Constructor dan Copy Assignment Operator agar shallow copy default compiler tidak memicu pointer liar (dangling pointer) dan double free.'
    },
    {
      id: 'oop-1-14',
      question: 'Idiom RAII (Resource Acquisition Is Initialization) dalam C++ mengajarkan bahwa:',
      options: [
        'Akuisisi sumber daya (memori, mutex, file) dilakukan di dalam konstruktor, dan pelepasan sumber daya dijamin tuntas di dalam destruktor saat keluar dari scope',
        'Semua variabel harus bernilai integer nol di awal',
        'Setiap fungsi harus memiliki panjang 100 baris',
        'Pengujian unit harus dijalankan sebelum kompilasi'
      ],
      correctAnswer: 0,
      explanation: 'RAII memanfaatkan determinisme stack unwinding: saat fungsi keluar (bahkan karena exception dilempar), destruktor objek lokal di stack pasti dieksekusi, mencegah kebocoran memori atau lock yang terkunci selamanya.'
    },
    {
      id: 'oop-1-15',
      question: 'Konsep "Object State" (Keadaan Objek) didefinisikan oleh:',
      options: [
        'Kombinasi nilai-nilai yang saat itu tersimpan di seluruh atribut/variabel anggota (fields) dari objek tersebut',
        'Alamat IP komputer tempat objek berada',
        'Nama file tempat kode kelas disimpan',
        'Waktu saat laptop dinyalakan'
      ],
      correctAnswer: 0,
      explanation: 'State adalah kumpulan data saat ini dari objek. Metode (behavior) objek bertugas membaca atau memanipulasi transisi state tersebut secara terenkapsulasi.'
    },
    {
      id: 'oop-1-16',
      question: 'Apa fungsi dari kata kunci `final` (di Java) atau `sealed` (di C#) pada deklarasi kelas?',
      options: [
        'Mencegah kelas tersebut untuk diwarisi (subclassing) oleh kelas lain',
        'Membuat objek kelas tidak bisa dihapus dari memori selamanya',
        'Menyembunyikan kode sumber dari programmer lain',
        'Mengubah seluruh metode kelas menjadi privat'
      ],
      correctAnswer: 0,
      explanation: 'Mendeklarasikan kelas sebagai final/sealed melarang pewarisan lebih lanjut, penting untuk keamanan arsitektur (seperti kelas `java.lang.String` yang didesain immutable).'
    },
    {
      id: 'oop-1-17',
      question: 'Tipe objek "Value Object" (dalam Domain-Driven Design) dibedakan dari "Entity" karena:',
      options: [
        'Value Object diidentifikasi murni oleh nilai atribut-atributnya dan bersifat immutable tanpa identitas unik (ID); sedangkan Entity memiliki identitas ID unik yang bertahan melintasi waktu',
        'Value Object hanya bisa menyimpan nilai boolean',
        'Entity tidak boleh memiliki metode fungsi',
        'Value Object disimpan di cloud database'
      ],
      correctAnswer: 0,
      explanation: 'Dua objek `Uang(10000, "IDR")` dianggap ekuivalen mutlak (Value Object) meskipun berada di memori berbeda. Sebaliknya, dua objek `User` dengan nama sama adalah entitas berbeda jika User ID-nya berbeda.'
    },
    {
      id: 'oop-1-18',
      question: 'Apa yang dimaksud dengan "Default Constructor" yang disediakan oleh compiler secara implisit?',
      options: [
        'Konstruktor tanpa parameter yang otomatis dibuatkan jika dan hanya jika pengembang belum mendefinisikan konstruktor kustom apapun di dalam kelas',
        'Konstruktor yang menghapus semua data di harddisk',
        'Konstruktor yang berisi 100 baris instruksi perulangan',
        'Konstruktor yang hanya bekerja pada hari kerja'
      ],
      correctAnswer: 0,
      explanation: 'Jika Anda tidak menulis konstruktor apapun, compiler menyediakan default parameterless constructor. Namun jika Anda mendefinisikan 1 konstruktor berparameter kustom, compiler tidak lagi membuat default constructor otomatis.'
    },
    {
      id: 'oop-1-19',
      question: 'Dalam bahasa modern (seperti TypeScript, Kotlin, atau Scala), fitur "Primary Constructor" di deklarasi header kelas memungkinkan:',
      options: [
        'Deklarasi parameter konstruktor sekaligus menginisialisasi atribut kelas (property) secara ringkas dalam satu baris tanpa penulisan boilerplate berulang',
        'Membuat 10 objek sekaligus dalam 1 detik',
        'Menghapus kebutuhan akan metode getter',
        'Mengonversi kelas menjadi database SQL'
      ],
      correctAnswer: 0,
      explanation: 'Contoh di TypeScript: `constructor(public name: string, private age: number) {}` otomatis membuat atribut instance `name` dan `age` serta mengisinya dari argumen konstruktor.'
    },
    {
      id: 'oop-1-20',
      question: 'Apa yang dimaksud dengan "Invarian Kelas" (Class Invariant)?',
      options: [
        'Kondisi integritas status objek yang dijamin selalu bernilai Benar (Valid) sebelum dan sesudah eksekusi setiap metode publik',
        'Variabel yang nilainya terus bertambah',
        'Metode yang tidak boleh dipanggil lebih dari 2 kali',
        'Komentar kode yang ditulis oleh pembuat library'
      ],
      correctAnswer: 0,
      explanation: 'Invarian kelas adalah aturan integritas (misal: "Saldo rekening bank tidak boleh bernilai negatif"). Konstruktor menetapkan invarian awal, dan metode publik wajib mempertahankan keabsahan invarian tersebut.'
    }
  ],

  // =========================================================================
  // MODUL 2: ENKAPSULASI, INFORMATION HIDING & ACCESS MODIFIERS (20 Soal)
  // =========================================================================
  oop_enkapsulasi_hiding: [
    {
      id: 'oop-2-1',
      question: 'Apa prinsip fundamental dari konsep Enkapsulasi (Encapsulation)?',
      options: [
        'Menggabungkan data (atribut) dan perilaku (metode) yang memanipulasinya ke dalam satu unit mandiri, serta membatasi akses langsung ke komponen internal objek',
        'Menyebarkan variabel ke seluruh file kode agar mudah diakses siapa saja',
        'Menulis program menggunakan huruf kapital seluruhnya',
        'Mengganti semua fungsi dengan pointer global'
      ],
      correctAnswer: 0,
      explanation: 'Enkapsulasi membungkus data dan operasi menjadi satu kesatuan tertutup, melindungi integritas internal dari interferensi dan penyalahgunaan pihak luar.'
    },
    {
      id: 'oop-2-2',
      question: 'Konsep "Information Hiding" (David Parnas, 1972) berfokus pada:',
      options: [
        'Menyembunyikan keputusan perancangan internal dan struktur data di balik antarmuka publik yang stabil, sehingga perubahan internal tidak merusak modul lain',
        'Menyembunyikan virus dari scanner keamanan',
        'Menghapus nama variabel sebelum kompilasi',
        'Melarang pengguna mengetahui bahasa pemrograman yang digunakan'
      ],
      correctAnswer: 0,
      explanation: 'Information hiding melindungi arsitektur: klien hanya bergantung pada "apa yang dilakukan modul" (antarmuka), bukan "bagaimana modul melakukannya secara internal" (implementasi).'
    },
    {
      id: 'oop-2-3',
      question: 'Tiga penentu akses standar (Access Modifiers) `public`, `private`, dan `protected` memiliki aturan cakupan:',
      options: [
        '`public` dapat diakses dari mana saja; `private` hanya dari dalam kelas itu sendiri; `protected` dapat diakses dari dalam kelas dan kelas turunannya (subclass)',
        '`private` dapat diakses oleh semua pengguna internet',
        '`protected` hanya untuk sistem operasi Windows',
        'Semua modifier memiliki akses yang sama persis'
      ],
      correctAnswer: 0,
      explanation: 'Public = terbuka universal; Private = terisolasi ketat di kelas pendefinisi; Protected = dibuka untuk jalur hierarki pewarisan (dan package di Java).'
    },
    {
      id: 'oop-2-4',
      question: 'Mengapa mengekspos atribut secara `public` (misal: `public double saldo;`) dianggap sebagai bad practice / code smell dalam OOP?',
      options: [
        'Kode klien luar dapat memodifikasi nilai saldo secara semena-mena (seperti mengisi nilai negatif) tanpa validasi logika bisnis kelas',
        'Membuat memori RAM langsung habis',
        'Compiler akan menolak mengompilasi program',
        'Program akan berjalan 100 kali lebih lambat'
      ],
      correctAnswer: 0,
      explanation: 'Jika atribut berstatus public, kelas kehilangan kendali atas integritas statusnya sendiri. Siapapun dapat memasukkan data korup tanpa melewati pengecekan aturan bisnis.'
    },
    {
      id: 'oop-2-5',
      question: 'Apa tujuan utama dari penggunaan metode Aksesor (Getter) dan Mutator (Setter)?',
      options: [
        'Menyediakan akses terkontrol dengan validasi logika, konversi data, dan hak akses selektif (seperti atribut read-only tanpa setter)',
        'Membeli tiket bioskop otomatis',
        'Menduplikasi kode agar terlihat lebih panjang',
        'Menghindari penggunaan tipe data objek'
      ],
      correctAnswer: 0,
      explanation: 'Getter/Setter menyisipkan lapisan abstraksi: Anda dapat menambahkan validasi (misal: lempar error jika usia < 0), mencatat log akses audit, atau menghitung nilai secara dinamis tanpa mengubah antarmuka publik.'
    },
    {
      id: 'oop-2-6',
      question: 'Bagaimana cara merancang objek yang bersifat Immutable (tidak dapat dimutasi) secara sempurna?',
      options: [
        'Menjadikan semua field `private final/const`, tidak menyediakan metode setter, dan melakukan defensive copying pada tipe data mutable yang masuk atau keluar',
        'Menjadikan semua variabel `public static`',
        'Melarang pembuatan objek baru',
        'Menyimpan file di CD-ROM'
      ],
      correctAnswer: 0,
      explanation: 'Objek immutable (seperti kelas `String` atau `BigDecimal` di Java) menjamin status internalnya tidak pernah berubah setelah dibuat di konstruktor, menjadikannya sepenuhnya thread-safe tanpa perlu mutex.'
    },
    {
      id: 'oop-2-7',
      question: 'Apa bahaya dari kebocoran referensi (Reference Leak) pada metode getter yang mengembalikan objek internal mutable?',
      options: [
        'Pihak luar dapat memodifikasi status internal objek privat tersebut secara langsung melalui referensi yang dikembalikan tanpa sepengetahuan kelas induk',
        'Komputer akan mati lampu',
        'File kode terhapus secara permanen',
        'Nilai integer berubah menjadi string'
      ],
      correctAnswer: 0,
      explanation: 'Jika kelas memiliki field `private Date tanggalLahir;` dan getter mengembalikan `return this.tanggalLahir;`, pemanggil dapat memanggil `getTanggalLahir().setTime(...)`, merusak status internal secara tersembunyi. Solusinya: return clone (Defensive Copy).'
    },
    {
      id: 'oop-2-8',
      question: 'Dalam C++, fitur fungsi atau kelas "Friend" (`friend function` / `friend class`) memungkinkan:',
      options: [
        'Fungsi atau kelas luar yang dideklarasikan sebagai friend dapat mengakses atribut dan metode `private` serta `protected` dari kelas tersebut',
        'Pengguna mengirim pesan pertemanan di media sosial',
        'Compiler membagikan password user ke internet',
        'Semua kelas otomatis menjadi satu file'
      ],
      correctAnswer: 0,
      explanation: 'Kata kunci `friend` memberikan akses istimewa terkontrol kepada fungsi/kelas eksternal tertentu (misal: operator overload `<<` untuk streaming output) tanpa harus membuka atribut menjadi public.'
    },
    {
      id: 'oop-2-9',
      question: 'Prinsip "Tell, Don\'t Ask" dalam pemrograman berorientasi objek menyarankan agar:',
      options: [
        'Anda memberi tahu objek untuk melakukan suatu tindakan atas datanya sendiri, ketimbang meminta (ask) datanya keluar lalu memanipulasinya di luar objek',
        'Programmer tidak boleh bertanya kepada manajer proyek',
        'Aplikasi dilarang menampilkan kotak dialog prompt',
        'Semua input keyboard diabaikan'
      ],
      correctAnswer: 0,
      explanation: 'Alih-alih `if (akun.getSaldo() >= harga) { akun.setSaldo(akun.getSaldo() - harga); }`, pendekatan yang benar adalah `akun.debit(harga);` yang menjaga enkapsulasi penuh.'
    },
    {
      id: 'oop-2-10',
      question: 'Hukum Demeter (Law of Demeter / Principle of Least Knowledge) merekomendasikan sebuah metode untuk hanya memanggil metode dari:',
      options: [
        'Objek dirinya sendiri, parameter yang diterimanya, objek yang ia ciptakan sendiri, atau variabel anggotanya langsung (hindari pemanggilan berantai `a.getB().getC().doD()`)',
        'Semua objek yang ada di seluruh dunia',
        'Hanya kelas induk teratas di sistem',
        'Metode yang memiliki nama diawali huruf A'
      ],
      correctAnswer: 0,
      explanation: 'Law of Demeter melarang navigasi struktural berantai (train wreck code / `getA().getB().getC()`) karena menciptakan ketergantungan rapuh terhadap topologi internal modul lain.'
    },
    {
      id: 'oop-2-11',
      question: 'Apa fungsi dari modifier `package-private` (default tanpa kata kunci modifier di Java)?',
      options: [
        'Anggota hanya dapat diakses oleh kelas-kelas lain yang berada di dalam paket (package/namespace) yang sama',
        'Anggota hanya bisa dibaca oleh compiler',
        'Anggota terhapus saat program dipaketkan ke file zip',
        'Anggota dapat diakses oleh semua kelas di dunia'
      ],
      correctAnswer: 0,
      explanation: 'Package-private menyediakan modularitas internal: komponen dalam satu package saling berkolaborasi erat, tetapi tersembunyi dari package lain di luar modul.'
    },
    {
      id: 'oop-2-12',
      question: 'Dalam bahasa Python, konvensi penamaan atribut privat diawali dengan:',
      options: [
        'Dua garis bawah (double underscore / dunder, seperti `__atribut`) yang memicu name mangling',
        'Tanda pagar (seperti `#atribut`)',
        'Tanda seru (seperti `!atribut`)',
        'Huruf besar semua (seperti `ATRIBUT`)'
      ],
      correctAnswer: 0,
      explanation: 'Python tidak memiliki kata kunci `private` mutlak. Awalan single underscore `_` adalah konvensi internal, sedangkan double underscore `__` memicu name mangling (`_ClassName__attribute`) untuk mencegah benturan nama pada subclass.'
    },
    {
      id: 'oop-2-13',
      question: 'Dalam JavaScript/TypeScript modern (ES2022+), deklarasi field privat secara native pada level bahasa menggunakan simbol:',
      options: ['Tanda pagar (`#`), seperti `#saldo = 0;`', 'Tanda minus (`-saldo`)', 'Kata kunci `hidden saldo`', 'Tanda persen (`%saldo`)'],
      correctAnswer: 0,
      explanation: 'JavaScript modern memperkenalkan Private Class Fields dengan sintaks `#`. Field dengan awalan `#` dijamin sepenuhnya tidak dapat diakses di luar badan kelas oleh engine V8.'
    },
    {
      id: 'oop-2-14',
      question: 'Apa keuntungan dari atribut "Read-Only" (hanya memiliki getter tanpa setter)?',
      options: [
        'Menjamin bahwa nilai atribut tidak dapat diubah oleh kode luar setelah objek selesai diinisialisasi di konstruktor',
        'Menghemat kapasitas harddisk',
        'Membuat warna teks atribut menjadi abu-abu',
        'Mempercepat waktu booting komputer'
      ],
      correctAnswer: 0,
      explanation: 'Atribut read-only melindungi integritas data yang bersifat konstan selama masa hidup objek (seperti Nomor Induk Kependudukan atau Tanggal Dibuat).'
    },
    {
      id: 'oop-2-15',
      question: 'Apa yang dimaksud dengan "Anemic Domain Model" (Martin Fowler)?',
      options: [
        'Anti-pattern di mana kelas domain hanya berupa wadah data kosong (hanya atribut privat dengan getter dan setter murni) tanpa ada logika bisnis sama sekali di dalamnya',
        'Kelas yang kekurangan memori RAM',
        'Kelas yang dibuat oleh programmer pemula yang sakit',
        'Model database yang tidak memiliki primary key'
      ],
      correctAnswer: 0,
      explanation: 'Anemic Domain Model memecah data dan perilaku (data di entity dummy, logika di service prosedural terpisah), melanggar esensi dasar OOP yang seharusnya menggabungkan data dan perilakunya secara utuh (Rich Domain Model).'
    },
    {
      id: 'oop-2-16',
      question: 'Bagaimana enkapsulasi memfasilitasi kemudahan Refactoring di masa depan?',
      options: [
        'Pengembang dapat mengubah struktur data internal (misal dari array menjadi hash map) tanpa memutus atau mengubah kode klien luar yang memanggil metode publiknya',
        'Enkapsulasi membuat compiler menulis ulang kode secara otomatis',
        'Enkapsulasi menghapus keharusan menulis unit testing',
        'Enkapsulasi mengganti bahasa pemrograman lama ke baru'
      ],
      correctAnswer: 0,
      explanation: 'Karena kode luar hanya berinteraksi melalui antarmuka metode publik yang stabil, Anda bebas mengoptimalkan algoritma dan struktur data internal di dalam kelas kapan saja tanpa menimbulkan breaking change.'
    },
    {
      id: 'oop-2-17',
      question: 'Kapan hak akses `protected` sebaiknya dihindari dan diganti dengan `private`?',
      options: [
        'Ketika Anda tidak ingin subclass sembarangan bergantung pada detail implementasi internal, guna mencegah masalah "Fragile Base Class"',
        'Ketika aplikasi sudah selesai dikompilasi',
        'Ketika kelas tidak memiliki konstruktor',
        'Ketika memori RAM komputer di bawah 8 GB'
      ],
      correctAnswer: 0,
      explanation: 'Modifier protected melemahkan enkapsulasi karena mengekspos atribut ke seluruh hierarki turunan. Perubahan pada field protected di kelas induk berisiko merusak seluruh subclass yang bergantung padanya.'
    },
    {
      id: 'oop-2-18',
      question: 'Konsep "Property" dalam bahasa seperti C# atau Python memungkinkan pengembang untuk:',
      options: [
        'Mengakses metode getter dan setter dengan sintaksis akses field yang bersih dan alami (seperti `obj.usia = 25`) sambil tetap mempertahankan validasi di balik layar',
        'Membeli aset properti tanah secara online',
        'Mengunci file dari akses sistem operasi',
        'Mengubah nama variabel menjadi nomor baris'
      ],
      correctAnswer: 0,
      explanation: 'Property membungkus getter dan setter dengan sintaksis field yang elegan, memadukan kenyamanan pembacaan kode dengan ketatnya enkapsulasi validasi bisnis.'
    },
    {
      id: 'oop-2-19',
      question: 'Dalam prinsip enkapsulasi, sebuah metode pembantu internal yang hanya dipanggil oleh metode lain di dalam kelas yang sama harus diberi hak akses:',
      options: ['private', 'public', 'global', 'protected external'],
      correctAnswer: 0,
      explanation: 'Metode pembantu (helper/utility method) yang hanya relevan untuk algoritma internal harus privat agar tidak mengotori antarmuka publik yang terlihat oleh pengguna kelas.'
    },
    {
      id: 'oop-2-20',
      question: 'Bagaimana enkapsulasi berkontribusi terhadap keamanan sistem (Security)?',
      options: [
        'Mencegah manipulasi state ilegal, menjamin validasi batas masukan sebelum data disimpan, dan melindungi rahasia memori sensitif (seperti kunci privat atau hash sandi)',
        'Menyediakan firewall hardware otomatis',
        'Menghapus koneksi internet saat diserang hacker',
        'Mengubah kode menjadi tulisan rahasia'
      ],
      correctAnswer: 0,
      explanation: 'Enkapsulasi yang disiplin mencegah eksploitasi status objek internal: semua mutasi harus melewati gerbang otorisasi dan validasi kelas, mengeliminasi celah manipulasi data langsung.'
    }
  ],

  // =========================================================================
  // MODUL 3: PEWARISAN (INHERITANCE), HIERARKI KELAS & KOMPOSISI (20 Soal)
  // =========================================================================
  oop_pewarisan_komposisi: [
    {
      id: 'oop-3-1',
      question: 'Apa definisi dari Pewarisan (Inheritance) dalam pemrograman berorientasi objek?',
      options: [
        'Mekanisme di mana sebuah kelas baru (subclass/turunan) mewarisi atribut dan metode dari kelas yang sudah ada (superclass/induk) untuk memfasilitasi penggunaan ulang kode (code reuse)',
        'Menerima warisan uang dari keluarga setelah membuka aplikasi',
        'Menyalin file kode secara manual dari folder satu ke folder lain',
        'Mengubah tipe data integer menjadi float'
      ],
      correctAnswer: 0,
      explanation: 'Pewarisan memungkinkan pembentukan hierarki kelas "IS-A" (misal: `Sedan` IS-A `Mobil`), di mana kelas anak mewarisi seluruh kemampuan umum induk dan dapat menambahkan fitur spesifiknya sendiri.'
    },
    {
      id: 'oop-3-2',
      question: 'Hubungan antara kelas turunan dan kelas induk dalam pewarisan dimodelkan dengan relasi:',
      options: ['IS-A (Adalah sebuah)', 'HAS-A (Memiliki sebuah)', 'USES-A (Menggunakan sebuah)', 'BELONGS-TO (Milik)'],
      correctAnswer: 0,
      explanation: 'Pewarisan merepresentasikan relasi "IS-A" (Anjing adalah seekor Hewan). Relasi "HAS-A" (Mobil memiliki sebuah Mesin) dimodelkan menggunakan Komposisi atau Agregasi.'
    },
    {
      id: 'oop-3-3',
      question: 'Kata kunci `super` (di Java/JS) atau `base` (di C#) digunakan di dalam kelas anak untuk:',
      options: [
        'Merujuk atau memanggil konstruktor, metode, atau atribut dari kelas induk langsung',
        'Menaikkan kecepatan clock prosesor',
        'Menjadikan kelas sebagai administrator sistem',
        'Menghapus semua kelas turunan'
      ],
      correctAnswer: 0,
      explanation: '`super(...)` memungkinkan subclass memanggil konstruktor induk untuk menginisialisasi atribut warisan, atau memanggil versi metode induk yang telah di-override via `super.metode()`.'
    },
    {
      id: 'oop-3-4',
      question: 'Dalam urutan inisialisasi konstruktor saat objek kelas turunan dibuat, urutan eksekusi yang benar adalah:',
      options: [
        'Konstruktor kelas induk dieksekusi TERLEBIH DAHULU hingga selesai, baru kemudian konstruktor kelas anak dieksekusi',
        'Konstruktor anak dieksekusi terlebih dahulu, lalu induk',
        'Keduanya dieksekusi acak secara paralel di dua core berbeda',
        'Hanya konstruktor anak yang dieksekusi, konstruktor induk diabaikan'
      ],
      correctAnswer: 0,
      explanation: 'Fondasi kelas induk harus dibangun dan diinisialisasi valid terlebih dahulu sebelum kelas anak dapat menambahkan atau memanipulasi atribut tambahannya.'
    },
    {
      id: 'oop-3-5',
      question: 'Sebaliknya, pada bahasa seperti C++, urutan eksekusi Destruktor saat objek turunan dihancurkan adalah:',
      options: [
        'Destruktor kelas anak dieksekusi TERLEBIH DAHULU, baru kemudian destruktor kelas induk dieksekusi (urutan terbalik dari konstruktor)',
        'Destruktor induk dieksekusi terlebih dahulu',
        'Hanya destruktor induk yang berjalan',
        'Destruktor tidak dieksekusi sama sekali'
      ],
      correctAnswer: 0,
      explanation: 'Penghancuran objek mengikuti prinsip tumpukan LIFO (Last-In, First-Out): lapisan terluar (anak) dibersihkan terlebih dahulu sebelum fondasi inti (induk) dibongkar.'
    },
    {
      id: 'oop-3-6',
      question: 'Apa itu "Diamond Problem" pada Pewarisan Berganda (Multiple Inheritance) dalam bahasa seperti C++?',
      options: [
        'Ambiguitas yang muncul ketika kelas D mewarisi kelas B dan C, yang keduanya sama-sama merupakan turunan dari satu kelas induk A yang sama (D memiliki dua salinan ambigu dari atribut A)',
        'Masalah harga kartu grafis komputer yang terlalu mahal',
        'Kerusakan layar monitor berbentuk intan',
        'Kesalahan matematis saat menghitung luas belah ketupat'
      ],
      correctAnswer: 0,
      explanation: 'Diamond Problem: Jalur pewarisan membentuk belah ketupat A -> B, A -> C, lalu (B, C) -> D. Jika kelas A memiliki atribut `id`, pemanggilan `d.id` menjadi ambigu (apakah `id` milik jalur B atau jalur C?).'
    },
    {
      id: 'oop-3-7',
      question: 'Bagaimana bahasa C++ mengatasi masalah Diamond Problem pada pewarisan berganda?',
      options: [
        'Menggunakan Pewarisan Virtual (`virtual public BaseClass`) sehingga hanya ada satu instance tunggal dari kelas dasar yang dibagikan bersama',
        'Melarang pewarisan berganda selamanya',
        'Mengganti nama kelas menjadi angka biner',
        'Menghapus kelas A dari memori'
      ],
      correctAnswer: 0,
      explanation: 'Virtual Inheritance menjamin bahwa kelas turunan terdalam (D) hanya mengalokasikan satu sub-objek bersama dari kelas dasar leluhur (A), meniadakan duplikasi dan ambiguitas pointer.'
    },
    {
      id: 'oop-3-8',
      question: 'Mengapa bahasa modern seperti Java dan C# secara sengaja MELARANG Pewarisan Berganda antar kelas (Multiple Class Inheritance)?',
      options: [
        'Untuk menghindari kompleksitas tata letak memori, ambiguitas Diamond Problem, dan masalah keterikatan kode yang rumit',
        'Karena compiler Java tidak bisa membaca huruf kapital ganda',
        'Karena hak paten teknologi dipegang oleh perusahaan lain',
        'Agar programmer dipaksa menulis baris kode lebih banyak'
      ],
      correctAnswer: 0,
      explanation: 'Desainer Java (James Gosling) sengaja menyederhanakan bahasa: sebuah kelas hanya boleh mewarisi tepat satu kelas induk (Single Inheritance), tetapi diizinkan mengimplementasikan banyak antarmuka (Multiple Interface Realization).'
    },
    {
      id: 'oop-3-9',
      question: 'Apa yang dimaksud dengan masalah "Fragile Base Class" dalam hierarki pewarisan?',
      options: [
        'Modifikasi yang tampaknya sepele atau perbaikan internal pada kelas induk dapat secara tidak sengaja merusak fungsionalitas dan perilaku kelas-kelas turunannya',
        'Kelas induk yang berukuran file terlalu kecil di harddisk',
        'Kelas induk yang ditulis dalam bahasa pemrograman kuno',
        'Kelas yang tidak memiliki metode public'
      ],
      correctAnswer: 0,
      explanation: 'Fragile Base Class terjadi karena hubungan ketergantungan erat (white-box coupling) antara induk dan anak: jika induk mengubah urutan pemanggilan metode internal, subclass yang meng-override metode tersebut dapat mengalami kegagalan fatal.'
    },
    {
      id: 'oop-3-10',
      question: 'Prinsip desain "Favor Composition over Inheritance" menganjurkan agar pengembang:',
      options: [
        'Membangun fungsionalitas polimorfik dengan cara menyusun objek-objek kecil (HAS-A) ketimbang memperpanjang rantai pohon hierarki pewarisan kelas (IS-A)',
        'Menghapus semua kelas dan hanya menggunakan fungsi imperatif',
        'Membuat hierarki pewarisan sedalam minimal 10 tingkat',
        'Melarang penggunaan interface dalam proyek'
      ],
      correctAnswer: 0,
      explanation: 'Komposisi bersifat dinamis saat runtime (black-box reuse), tidak merusak enkapsulasi, dan memungkinkan perilaku objek diubah secara lentur tanpa risiko efek samping pohon hierarki yang kaku.'
    },
    {
      id: 'oop-3-11',
      question: 'Konsep "Method Overriding" terjadi ketika:',
      options: [
        'Kelas anak mendefinisikan ulang implementasi dari suatu metode yang sudah ada di kelas induknya dengan nama, tipe kembalian, dan daftar parameter yang identik',
        'Dua metode di kelas yang sama memiliki nama sama tetapi beda parameter',
        'Metode dipanggil 100 kali dalam satu detik',
        'Compiler menghapus metode yang tidak terpakai'
      ],
      correctAnswer: 0,
      explanation: 'Method Overriding memungkinkan kelas turunan memberikan perilaku spesifik yang berbeda dari perilaku standar yang diwariskan dari kelas induk.'
    },
    {
      id: 'oop-3-12',
      question: 'Anotasi `@Override` (di Java) atau kata kunci `override` (di C# / C++11) sangat bermanfaat karena:',
      options: [
        'Meminta compiler memverifikasi secara ketat bahwa metode tersebut benar-benar cocok dan menggantikan metode yang ada di kelas induk (mencegah typo nama metode)',
        'Menaikkan performa eksekusi metode sebesar 50%',
        'Membuat metode tidak bisa diakses dari luar kelas',
        'Mengenkripsi isi badan fungsi'
      ],
      correctAnswer: 0,
      explanation: 'Jika Anda salah ketik nama metode (misal: `hashcode()` alih-alih `hashCode()`), tanpa anotasi `@Override` compiler akan menganggapnya sebagai metode baru biasa, menimbulkan bug override tersembunyi yang sulit dilacak.'
    },
    {
      id: 'oop-3-13',
      question: 'Apa perbedaan antara Method Overriding dan Method Overloading?',
      options: [
        'Overriding melibatkan kelas turunan yang mengganti perilaku metode induk dengan signature yang sama persis (polimorfisme dinamis/runtime); Overloading terjadi di kelas yang sama dengan nama sama tapi parameter berbeda (polimorfisme statis/compile-time)',
        'Overriding hanya untuk tipe data integer, Overloading untuk string',
        'Overriding terjadi saat compile-time, Overloading saat runtime',
        'Keduanya adalah istilah yang sama persis'
      ],
      correctAnswer: 0,
      explanation: 'Overloading dibedakan oleh signature parameter saat waktu kompilasi di kelas yang sama. Overriding terjadi melintasi batas hierarki pewarisan dan dievaluasi saat waktu runtime.'
    },
    {
      id: 'oop-3-14',
      question: 'Di Python, urutan penelusuran pencarian metode pada pewarisan berganda diatur oleh algoritma:',
      options: ['Method Resolution Order (MRO) berbasis C3 Linearization', 'Depth-First Search murni', 'Breadth-First Search acak', 'Dijkstra Shortest Path'],
      correctAnswer: 0,
      explanation: 'Python menggunakan algoritma linearisasi C3 untuk menghasilkan urutan MRO yang deterministik, mempertahankan urutan presedensi lokal dan monotonicitas hierarki pewarisan.'
    },
    {
      id: 'oop-3-15',
      question: 'Apa konsekuensi arsitektural dari hierarki pewarisan yang terlalu dalam (misal lebih dari 5 tingkat subclass berantai)?',
      options: [
        'Kopling kode menjadi sangat kaku, pemahaman alur eksekusi sulit ditelusuri, dan setiap perubahan kecil di puncak pohon memicu efek samping tak terduga ke bawah',
        'Memori RAM laptop otomatis bertambah',
        'Ukuran file kompilasi menjadi nol kilobyte',
        'Semua variabel otomatis menjadi publik'
      ],
      correctAnswer: 0,
      explanation: 'Hierarki yang terlalu dalam adalah anti-pattern ("deep inheritance tree"). Sistem menjadi rapuh dan sulit dipelihara. Standar industri menyarankan kedalaman hierarki maksimal 2–3 tingkat.'
    },
    {
      id: 'oop-3-16',
      question: 'Dalam C++, mengapa destruktor pada kelas induk (base class) WAJIB dideklarasikan secara `virtual` jika kelas tersebut memiliki metode virtual dan dirancang untuk diwarisi?',
      options: [
        'Agar ketika objek kelas anak dihapus melalui pointer kelas induk (`Base* ptr = new Derived(); delete ptr;`), destruktor kelas anak dijamin dieksekusi dengan benar (mencegah memory leak)',
        'Agar kelas induk dapat diinstansiasi tanpa konstruktor',
        'Agar ukuran memori kelas induk menjadi 0 byte',
        'Agar fungsi main bisa memanggil destruktor secara manual'
      ],
      correctAnswer: 0,
      explanation: 'Jika destruktor base class tidak virtual, penghapusan objek via pointer base class hanya akan memanggil destruktor base class; destruktor derived class dilewati, memicu kebocoran memori (undefined behavior).'
    },
    {
      id: 'oop-3-17',
      question: 'Pola "Template Method Pattern" memanfaatkan pewarisan dengan cara:',
      options: [
        'Mendefinisikan kerangka (skelet) algoritma di dalam metode kelas induk, dan membiarkan subclass meng-override langkah-langkah spesifik tertentu tanpa mengubah struktur keseluruhan algoritma',
        'Mengganti file kode menjadi format template HTML',
        'Menduplikasi algoritma sebanyak 100 kali',
        'Menjalankan algoritma hanya saat template web diunduh'
      ],
      correctAnswer: 0,
      explanation: 'Template Method (GoF) mengatur alur kerja baku di kelas dasar, menyediakan "hook" atau metode abstrak yang diisi oleh subclass untuk memodifikasi variasi langkah individual.'
    },
    {
      id: 'oop-3-18',
      question: 'Apa perbedaan antara Agregasi (Aggregation) dan Komposisi (Composition)?',
      options: [
        'Pada Komposisi, siklus hidup objek bagian terikat mutlak pada objek induk (jika induk dihancurkan, anak ikut musnah); pada Agregasi, objek bagian dapat tetap eksis mandiri di luar objek induk',
        'Komposisi menggunakan tanda kurung siku, Agregasi menggunakan kurung kurawal',
        'Agregasi hanya ada di basis data SQL',
        'Keduanya identik dan tidak memiliki perbedaan semantik'
      ],
      correctAnswer: 0,
      explanation: 'Contoh Komposisi: Objek `Engine` di dalam `Car` (ownership ketat). Contoh Agregasi: Objek `Player` di dalam `Team` (jika klub bubar, pemain tetap hidup dan bisa pindah ke klub lain).'
    },
    {
      id: 'oop-3-19',
      question: 'Dalam TypeScript, kata kunci `extends` digunakan untuk mewarisi kelas, sedangkan kata kunci `implements` digunakan untuk:',
      options: [
        'Menyatakan bahwa suatu kelas berkomitmen memenuhi kontrak antarmuka (interface)',
        'Mengimpor pustaka dari npm',
        'Mengalokasikan memori heap secara manual',
        'Menjalankan unit test'
      ],
      correctAnswer: 0,
      explanation: '`extends` mewarisi struktur dan kode implementasi dari satu kelas induk. `implements` hanya mengambil kontrak tipe abstrak tanpa mewarisi baris kode implementasi nyata.'
    },
    {
      id: 'oop-3-20',
      question: 'Konsep "Covariant Return Type" pada method overriding memungkinkan metode di kelas anak untuk:',
      options: [
        'Mengembalikan tipe data yang merupakan subtipe (turunan) dari tipe data yang dikembalikan oleh metode kelas induk',
        'Mengembalikan dua nilai kembalian sekaligus',
        'Mengubah tipe kembalian integer menjadi void secara bebas',
        'Menghapus nilai kembalian saat runtime'
      ],
      correctAnswer: 0,
      explanation: 'Jika `Animal.reproduce()` mengembalikan `Animal`, maka `Dog.reproduce()` diizinkan secara sah mengembalikan tipe yang lebih spesifik yaitu `Dog`, mempermudah pemanggilan tanpa perlu type-casting manual.'
    }
  ],

  // =========================================================================
  // MODUL 4: POLIMORFISME STATIS VS DINAMIS & MEKANISME VTABLE (20 Soal)
  // =========================================================================
  oop_polimorfisme_vtable: [
    {
      id: 'oop-4-1',
      question: 'Secara etimologi dan konsep, apa makna dari "Polimorfisme" dalam OOP?',
      options: [
        '"Banyak Bentuk": Kemampuan entitas kode (seperti fungsi atau variabel acuan) untuk merujuk atau mengeksekusi perilaku yang berbeda-beda tergantung pada tipe objek nyata yang mendasarinya saat runtime',
        'Program yang memiliki banyak baris kode di atas 10.000 baris',
        'Penggunaan komputer oleh banyak orang sekaligus',
        'Sistem operasi yang mendukung banyak bahasa dunia'
      ],
      correctAnswer: 0,
      explanation: 'Polimorfisme memungkinkan pengembang menulis kode fleksibel yang memperlakukan objek dari berbagai kelas turunan melalui satu antarmuka umum seragam (misal: `hewan.bersuara()` menghasilkan suara berbeda untuk Anjing, Kucing, atau Burung).'
    },
    {
      id: 'oop-4-2',
      question: 'Apa perbedaan antara Polimorfisme Statis (Compile-Time) dan Polimorfisme Dinamis (Runtime)?',
      options: [
        'Polimorfisme statis diselesaikan saat kompilasi via Function Overloading dan Templates/Generics; Polimorfisme dinamis diselesaikan saat program berjalan via Method Overriding dan Virtual Functions',
        'Polimorfisme statis tidak memerlukan compiler, dinamis memerlukan dua compiler',
        'Polimorfisme dinamis hanya bekerja saat koneksi internet aktif',
        'Keduanya dievaluasi pada saat yang sama persis'
      ],
      correctAnswer: 0,
      explanation: 'Polimorfisme statis (Early Binding) mengikat alamat fungsi saat kompilasi tanpa runtime overhead. Polimorfisme dinamis (Late/Dynamic Binding) menentukan implementasi fungsi saat runtime berdasarkan tipe objek aktual.'
    },
    {
      id: 'oop-4-3',
      question: 'Dalam C++, kata kunci `virtual` pada deklarasi metode kelas induk berfungsi untuk:',
      options: [
        'Mengaktifkan dynamic dispatch (late binding), sehingga pemanggilan metode melalui pointer atau referensi base class akan mengeksekusi versi subclass yang sebenarnya',
        'Membuat metode berjalan di headset Virtual Reality (VR)',
        'Menyembunyikan metode dari compiler',
        'Menghapus kode fungsi dari file eksekusi biner'
      ],
      correctAnswer: 0,
      explanation: 'Tanpa kata kunci `virtual`, C++ menggunakan static binding (early binding) default: pemanggilan `basePtr->speak()` akan selalu mengeksekusi metode milik Base class terlepas dari objek nyata apa yang ditunjuk.'
    },
    {
      id: 'oop-4-4',
      question: 'Struktur internal tingkat rendah apa yang diciptakan oleh compiler C++ untuk mengimplementasikan dynamic dispatch pada kelas yang memiliki fungsi virtual?',
      options: [
        'VTable (Virtual Method Table) dan VPtr (Virtual Table Pointer)',
        'Stack Frame dan Base Pointer',
        'Heap Allocation Map',
        'Interrupt Vector Table'
      ],
      correctAnswer: 0,
      explanation: 'Compiler membuat VTable statis (larik function pointer) untuk setiap kelas yang memiliki metode virtual, dan menyisipkan pointer tersembunyi `vptr` ke dalam setiap instance objek yang menunjuk ke VTable kelas tersebut.'
    },
    {
      id: 'oop-4-5',
      question: 'Di manakah letak pointer tersembunyi `vptr` disimpan di memori komputer?',
      options: [
        'Di dalam struktur memori setiap instance objek individual (biasanya di offset byte pertama atau terakhir objek)',
        'Di dalam harddisk eksternal',
        'Di file konfigurasi teks sistem',
        'Di memori cache browser'
      ],
      correctAnswer: 0,
      explanation: 'Setiap objek dari kelas yang memiliki fungsi virtual memiliki overhead memori tambahan sebesar ukuran pointer (4 byte pada 32-bit, 8 byte pada 64-bit) untuk menyimpan `vptr` yang menunjuk ke VTable kelasnya.'
    },
    {
      id: 'oop-4-6',
      question: 'Berapa jumlah tabel VTable yang diciptakan oleh program di memori data jika ada 10.000 objek instance dari kelas `Dog`?',
      options: [
        'Tepat SATU tabel VTable saja untuk seluruh kelas Dog (seluruh 10.000 objek berbagi pointer vptr ke VTable yang sama)',
        'Tepat 10.000 tabel VTable terpisah untuk tiap objek',
        'Nol tabel VTable',
        'Bergantung pada ukuran kapasitas RAM'
      ],
      correctAnswer: 0,
      explanation: 'VTable adalah struktur data per-kelas (bukan per-objek) yang ditempatkan di segmen memori read-only (.rodata). Semua instance dari kelas yang sama menunjuk ke satu VTable bersama.'
    },
    {
      id: 'oop-4-7',
      question: 'Bagaimana langkah-langkah dereferensi yang dilakukan CPU saat mengeksekusi pemanggilan fungsi virtual `ptr->method()` saat runtime?',
      options: [
        '1) Ambil alamat vptr dari objek; 2) Indeks VTable untuk mengambil function pointer metode terkait; 3) Eksekusi instruksi CALL tidak langsung (indirect call) ke alamat fungsi tersebut',
        '1) Restart prosesor; 2) Kompilasi ulang kode; 3) Tampilkan output',
        '1) Baca dari file teks; 2) Kirim ke jaringan; 3) Cetak ke layar',
        '1) Lompat langsung ke alamat tetap kompilasi tanpa pencarian tabel'
      ],
      correctAnswer: 0,
      explanation: 'Dynamic dispatch melibatkan indirect call overhead: `*(ptr->vptr[index])()`. Meskipun ada penalti ekstra 1–2 siklus dereferensi memori dan hilangnya inlining kompilasi, teknik ini memberikan fleksibilitas arsitektur polimorfik.'
    },
    {
      id: 'oop-4-8',
      question: 'Dalam bahasa Java, apakah metode non-statis secara default bersifat virtual?',
      options: [
        'Ya, seluruh metode instance di Java secara bawaan bersifat virtual (late binding default), KECUALI jika ditandai dengan kata kunci `final`, `private`, atau `static`',
        'Tidak, di Java harus menuliskan kata kunci `virtual` secara manual',
        'Java tidak mendukung polimorfisme dinamis',
        'Hanya metode bertipe boolean yang virtual'
      ],
      correctAnswer: 0,
      explanation: 'Berbeda dari C++ yang menganut filosofi zero-overhead (non-virtual by default), Java menganut dynamic binding secara default untuk semua metode instance publik/protected.'
    },
    {
      id: 'oop-4-9',
      question: 'Apa yang dimaksud dengan fenomena "Object Slicing" dalam C++?',
      options: [
        'Kondisi di mana objek derived class di-assign ke variabel base class berdasarkan nilai (by value), sehingga atribut tambahan dan vtable milik derived class terpotong hilang',
        'Membagi file program menjadi 2 bagian secara fisik',
        'Menghapus baris komentar kode',
        'Memotong kabel motherboard prosesor'
      ],
      correctAnswer: 0,
      explanation: 'Jika Anda melakukan `Base b = derivedObj;`, hanya porsi sub-objek Base yang disalin ke memori `b`. Seluruh data derived dan identitas polimorfiknya terpotong (*sliced*). Untuk mempertahankan polimorfisme, selalu gunakan pointer (`Base*`) atau referensi (`Base&`).'
    },
    {
      id: 'oop-4-10',
      question: 'Apa fungsi dari operator `dynamic_cast` dalam C++?',
      options: [
        'Melakukan konversi tipe menurun (downcasting) yang aman pada pointer/referensi hierarki polimorfik, mengembalikan `nullptr` (atau melempar exception) jika tipe tidak cocok',
        'Mengubah nilai string menjadi integer secara paksa',
        'Mengonversi video menjadi file audio',
        'Menghapus objek dari memori secara dinamis'
      ],
      correctAnswer: 0,
      explanation: '`dynamic_cast` menggunakan informasi tipe saat runtime (RTTI - Run-Time Type Information) yang tersimpan di dekat VTable untuk memvalidasi apakah konversi ke derived class sah secara hierarki objek.'
    },
    {
      id: 'oop-4-11',
      question: 'Kapan teknik "Downcasting" (mengubah tipe pointer dari superclass ke subclass) dianggap sebagai bad practice / code smell?',
      options: [
        'Ketika digunakan secara masif dengan serangkaian blok `if (obj instanceof SubClass)` yang panjang, menandakan kegagalan abstraksi desain polimorfik yang melanggar Open/Closed Principle',
        'Ketika program dijalankan di komputer prosesor Intel',
        'Ketika memori RAM di atas 16 GB',
        'Downcasting tidak pernah dianggap bad practice'
      ],
      correctAnswer: 0,
      explanation: 'Jika Anda harus memeriksa tipe konkret objek satu per satu secara manual, Anda kehilangan esensi polimorfisme. Solusi yang benar adalah menambahkan metode virtual ke antarmuka induk dan membiarkan dynamic dispatch bekerja.'
    },
    {
      id: 'oop-4-12',
      question: 'Apa yang dimaksud dengan "Ad-hoc Polymorphism"?',
      options: [
        'Polimorfisme yang diwujudkan melalui Function Overloading atau Operator Overloading, di mana fungsi dengan nama sama mengeksekusi algoritma berbeda tergantung tipe argumennya',
        'Polimorfisme yang dibuat terburu-buru tanpa rencana',
        'Polimorfisme yang hanya berjalan 1 hari',
        'Penggunaan variabel acak'
      ],
      correctAnswer: 0,
      explanation: 'Christopher Strachey (1967) mengklasifikasikan polimorfisme: Ad-hoc (overloading fungsi/operator), Parametric (Generics/Templates), dan Subtyping (Inheritance/Dynamic Dispatch).'
    },
    {
      id: 'oop-4-13',
      question: 'Sebaliknya, "Parametric Polymorphism" dalam bahasa modern diimplementasikan melalui fitur:',
      options: ['Generics (di Java/C#) atau Templates (di C++)', 'Switch-case statement', 'Global pointer', 'Metode setter privat'],
      correctAnswer: 0,
      explanation: 'Parametric polymorphism mengeksekusi logika yang identik untuk tipe data yang bervariasi tanpa kehilangan jaminan pemeriksaan keamanan tipe kompilasi (compile-time type safety), seperti `List<T>` atau `std::vector<T>`.'
    },
    {
      id: 'oop-4-14',
      question: 'Dalam C++, fitur "Pure Virtual Function" dideklarasikan dengan sintaksis:',
      options: ['`virtual void doSomething() = 0;`', '`virtual void doSomething() = NULL;`', '`abstract method doSomething();`', '`empty void doSomething();`'],
      correctAnswer: 0,
      explanation: 'Sintaks `= 0` menandakan metode virtual murni: kelas tersebut tidak menyediakan implementasi default dan otomatis menjadikan kelas tersebut sebagai Abstract Class yang tidak dapat diinstansiasi secara langsung.'
    },
    {
      id: 'oop-4-15',
      question: 'Apa konsekuensi dari penggunaan kata kunci `final` pada deklarasi sebuah metode virtual di C++11 atau Java?',
      options: [
        'Metode tersebut dilarang keras untuk di-override lebih lanjut oleh subclass di bawahnya',
        'Metode tersebut akan dihapus setelah dieksekusi 1 kali',
        'Metode tersebut hanya boleh dipanggil di akhir fungsi main',
        'Metode tersebut otomatis menjadi metode statis'
      ],
      correctAnswer: 0,
      explanation: 'Mendeklarasikan metode sebagai final mengunci perilakunya dari pengubahan turunan, memungkinkan compiler melakukan devirtualization (mengubah indirect call VTable menjadi direct call inlining) demi efisiensi performa.'
    },
    {
      id: 'oop-4-16',
      question: 'Konsep "Devirtualization" pada compiler modern adalah teknik optimasi di mana:',
      options: [
        'Compiler dapat membuktikan pada waktu kompilasi tipe objek konkret yang dipanggil, sehingga pemanggilan virtual call via VTable diubah menjadi direct call biasa (atau di-inline)',
        'Compiler menghapus seluruh konsep OOP dari kode sumber',
        'Compiler mematikan koneksi internet pengguna',
        'Compiler mengubah file biner menjadi gambar'
      ],
      correctAnswer: 0,
      explanation: 'Jika compiler dapat menganalisis bahwa pointer tidak mungkin menunjuk kelas lain (misal objek dialokasikan lokal atau kelas ditandai final), ia memangkas lookup VTable dan langsung meng-inline kode fungsi demi performa maksimum.'
    },
    {
      id: 'oop-4-17',
      question: 'Apa fungsi dari fitur RTTI (Run-Time Type Information) pada bahasa seperti C++?',
      options: [
        'Menyediakan mekanisme untuk mengidentifikasi tipe data dinamis sebenarnya dari sebuah objek saat runtime (seperti operator `typeid` dan `dynamic_cast`)',
        'Menampilkan spesifikasi kartu grafis pengguna',
        'Menghitung kecepatan putaran kipas CPU',
        'Mencatat riwayat pengetikan keyboard'
      ],
      correctAnswer: 0,
      explanation: 'RTTI menanamkan metadata deskripsi tipe ke dalam VTable kelas, memungkinkan program menanyakan tipe polimorfik nyata suatu objek saat eksekusi berlangsung.'
    },
    {
      id: 'oop-4-18',
      question: 'Dalam arsitektur GUI (seperti tombol, form, kanvas), polimorfisme sangat esensial karena:',
      options: [
        'Memungkinkan sistem GUI mengiterasi daftar objek antarmuka `Component[]` dan memanggil `render()` atau `onClick()` seragam tanpa perlu tahu apakah elemen tersebut adalah Button, Slider, atau Checkbox',
        'Membuat warna tombol menjadi transparan',
        'Menghilangkan kebutuhan kartu grafis GPU',
        'Mempercepat instalasi sistem operasi'
      ],
      correctAnswer: 0,
      explanation: 'Loop render terpusat cukup mengeksekusi `for (Component c : components) c.draw();`. Setiap elemen menggambar visual dirinya sendiri secara otonom melalui polimorfisme dinamis.'
    },
    {
      id: 'oop-4-19',
      question: 'Dalam bahasa yang menganut paradigma "Duck Typing" (seperti Python atau Ruby), polimorfisme bekerja berdasarkan prinsip:',
      options: [
        '"Jika ia berjalan seperti bebek dan bersuara seperti bebek, maka ia adalah bebek": kesesuaian tipe ditentukan oleh keberadaan metode dan perilakunya, bukan oleh hierarki pewarisan formal',
        'Hanya objek yang memiliki nama unggas yang diizinkan dieksekusi',
        'Semua fungsi harus mengembalikan nilai string "kwek"',
        'Pewarisan kelas wajib dilakukan minimal 10 kali'
      ],
      correctAnswer: 0,
      explanation: 'Duck typing mengabaikan deklarasi tipe eksplisit: selama suatu objek memiliki metode `quack()`, fungsi pemanggil dapat mengeksekusinya tanpa peduli apakah objek tersebut mewarisi kelas `Duck` atau tidak.'
    },
    {
      id: 'oop-4-20',
      question: 'Kapan penggunaan polimorfisme dinamis (VTable) sebaiknya dihindari demi polimorfisme statis (Templates/CRTP) dalam C++ performa tinggi (Game Engine / HFT)?',
      options: [
        'Pada loop pemrosesan data ketat (tight inner loops) yang dieksekusi jutaan kali per frame di mana overhead indirect branch call dan cache miss VTable merusak performa throughput CPU',
        'Ketika program dijalankan di malam hari',
        'Ketika ukuran kode program melebihi 1 megabyte',
        'Ketika membuat aplikasi web statis'
      ],
      correctAnswer: 0,
      explanation: 'Dalam sistem ultra-rendah latensi (seperti High-Frequency Trading atau fisika game engine), indirect call VTable menggagalkan optimasi branch predictor dan inlining CPU. Teknik seperti CRTP (Curiously Recurring Template Pattern) digunakan untuk mencapai polimorfisme waktu kompilasi tanpa overhead VTable.'
    }
  ],

  // =========================================================================
  // MODUL 5: ABSTRAKSI TINGKAT TINGGI, ABSTRACT CLASS & INTERFACE (20 Soal)
  // =========================================================================
  oop_abstraksi_interface: [
    {
      id: 'oop-5-1',
      question: 'Apa definisi fundamental dari pilar "Abstraksi" dalam pemrograman berorientasi objek?',
      options: [
        'Menyaring kerumitan sistem dengan hanya menampilkan karakteristik dan operasi penting yang relevan bagi pengguna, serta menyembunyikan detail implementasi teknis di baliknya',
        'Menulis kode yang sangat abstrak hingga tidak bisa dibaca oleh siapapun',
        'Menghapus nama-nama fungsi dalam program',
        'Menjalankan program di awan tanpa server fisik'
      ],
      correctAnswer: 0,
      explanation: 'Abstraksi mengelola kompleksitas: pengemudi mobil hanya perlu memahami pedal gas, rem, dan setir (antarmuka abstraksi) tanpa perlu memikirkan proses pembakaran injeksi bahan bakar dan mekanika katup mesin.'
    },
    {
      id: 'oop-5-2',
      question: 'Apa karakteristik utama dari sebuah Kelas Abstrak (Abstract Class)?',
      options: [
        'Kelas yang tidak dapat diinstansiasi secara langsung menjadi objek mandiri dan berfungsi sebagai kerangka dasar tidak lengkap yang harus disempurnakan oleh subclass-nya',
        'Kelas yang tidak memiliki nama file di harddisk',
        'Kelas yang hanya boleh memiliki variabel statis',
        'Kelas yang otomatis terhapus saat dikompilasi'
      ],
      correctAnswer: 0,
      explanation: 'Mencoba membuat objek `new AbstractClass()` akan memicu compiler error. Abstract class dirancang khusus untuk menjadi fondasi pewarisan yang mendefinisikan kontrak metode yang belum diimplementasikan.'
    },
    {
      id: 'oop-5-3',
      question: 'Sebaliknya, apa definisi formal dari sebuah "Antarmuka" (Interface) dalam OOP murni?',
      options: [
        'Kontrak perilaku formal murni yang mendefinisikan sekumpulan tanda tangan metode (method signatures) tanpa memuat status data anggota (fields) dan implementasi kode',
        'Desain grafis tombol warna-warni di layar monitor',
        'Kabel koneksi USB port komputer',
        'Kaca pelindung layar smartphone'
      ],
      correctAnswer: 0,
      explanation: 'Interface adalah kontrak murni: kelas yang menandatangani kontrak (mengimplementasikan interface) berjanji kepada dunia luar bahwa ia akan menyediakan implementasi konkret untuk semua metode yang tertera di interface tersebut.'
    },
    {
      id: 'oop-5-4',
      question: 'Apa perbedaan kunci antara Abstract Class dan Interface dalam bahasa seperti Java tradisional (sebelum Java 8)?',
      options: [
        'Sebuah kelas hanya boleh mewarisi satu Abstract Class (single inheritance), tetapi dapat mengimplementasikan banyak Interface sekaligus (multiple interfaces); Abstract Class boleh memiliki atribut instance dan metode konkret, sedangkan Interface murni abstrak',
        'Abstract Class hanya untuk tipe data string, Interface untuk integer',
        'Interface tidak bisa digunakan dalam aplikasi Android',
        'Keduanya identik dan hanya berbeda kata kunci'
      ],
      correctAnswer: 0,
      explanation: 'Abstract class berbagi kode implementasi dan status anggota instance (IS-A sebagian). Interface mendefinisikan kemampuan atau peran fungsional (CAN-DO relasi) tanpa status state.'
    },
    {
      id: 'oop-5-5',
      question: 'Kapan seorang arsitek perangkat lunak sebaiknya memilih Abstract Class daripada Interface?',
      options: [
        'Ketika beberapa kelas yang berkerabat dekat memiliki banyak kode logika dan atribut status bersama yang ingin dibagikan untuk menghindari duplikasi kode (Code Reuse)',
        'Ketika ingin mendefinisikan peran yang sama sekali tidak berhubungan hierarkinya',
        'Ketika aplikasi tidak memiliki database',
        'Ketika menggunakan bahasa pemrograman Python'
      ],
      correctAnswer: 0,
      explanation: 'Abstract class ideal untuk hierarki taksonomi keluarga yang erat di mana ada logika dasar bawaan yang sama. Interface ideal untuk mendefinisikan kontrak kemampuan lepas yang dapat diterapkan pada kelas apa saja yang tidak sekeluarga.'
    },
    {
      id: 'oop-5-6',
      question: 'Mengapa dalam bahasa Java 8+ diperkenalkan fitur "Default Methods" di dalam Interface?',
      options: [
        'Untuk memungkinkan penambahan metode baru ke dalam antarmuka yang sudah ada tanpa merusak (breaking backward compatibility) kelas-kelas lama yang telah mengimplementasikannya',
        'Untuk mengganti total keberadaan kelas biasa',
        'Untuk membuat semua metode menjadi privat',
        'Untuk mempercepat kompilasi bytecode'
      ],
      correctAnswer: 0,
      explanation: 'Sebelum Java 8, menambahkan metode baru ke interface publik akan merusak jutaan implementasi pihak ketiga yang ada. Default method menyediakan implementasi cadangan bawaan di dalam interface secara kompatibel.'
    },
    {
      id: 'oop-5-7',
      question: 'Sebuah Interface yang hanya memiliki TEPAT SATU metode abstrak tunggal di Java disebut:',
      options: ['Functional Interface (atau Single Abstract Method / SAM)', 'Marker Interface', 'Empty Interface', 'Singleton Interface'],
      correctAnswer: 0,
      explanation: 'Functional Interface (seperti `Runnable`, `Comparator`, `Callable`) dianotasi `@FunctionalInterface` dan menjadi fondasi ekspresi Lambda dan pemrograman fungsional di Java modern.'
    },
    {
      id: 'oop-5-8',
      question: 'Apa fungsi dari "Marker Interface" (Antarmuka Penanda, seperti `Serializable` atau `Cloneable` di Java)?',
      options: [
        'Interface kosong tanpa metode sama sekali yang digunakan untuk memberi tanda (metadata) kepada JVM/framework bahwa kelas tersebut memiliki kapabilitas tertentu',
        'Interface untuk menggambar garis di layar',
        'Interface untuk menghapus virus komputer',
        'Interface yang mencetak kode ke kertas'
      ],
      correctAnswer: 0,
      explanation: 'Marker interface bertindak sebagai penanda tipe saat runtime (melalui operator `instanceof`) bahwa objek tersebut aman untuk diserialisasi ke aliran byte atau dikloning di heap.'
    },
    {
      id: 'oop-5-9',
      question: 'Prinsip "Program to an Interface, not an Implementation" (GoF) bermakna bahwa variabel acuan kode harus dideklarasikan menggunakan:',
      options: [
        'Tipe antarmuka abstrak tingkat tinggi (seperti `List<String> list = new ArrayList<>();`) ketimbang tipe kelas implementasi konkretnya',
        'Tipe data primitif murni saja',
        'Nama file tempat kode berada',
        'Pointer memori hexadesimal langsung'
      ],
      correctAnswer: 0,
      explanation: 'Dengan memprogram ke antarmuka, Anda dapat dengan mudah menukar implementasi di masa depan (misal: mengganti `ArrayList` menjadi `LinkedList`) tanpa perlu mengubah satu baris pun kode logika pemanggil yang menggunakan antarmuka `List`.'
    },
    {
      id: 'oop-5-10',
      question: 'Dalam C++, sebuah kelas murni abstrak (Pure Abstract Class / Interface) diwujudkan dengan cara:',
      options: [
        'Mendeklarasikan kelas di mana SELURUH metodenya merupakan Pure Virtual Function (`= 0`) tanpa ada variabel anggota data instance',
        'Menggunakan kata kunci `interface class`',
        'Menghapus konstruktor dan destruktor',
        'Menulis seluruh kode di dalam file header .h'
      ],
      correctAnswer: 0,
      explanation: 'C++ tidak memiliki kata kunci `interface` khusus; antarmuka dimodelkan secara elegan sebagai struct atau class yang hanya memuat pure virtual functions dan virtual destructor.'
    },
    {
      id: 'oop-5-11',
      question: 'Apa yang dimaksud dengan "Loose Coupling" (Kopling Longgar) yang dihasilkan dari pemanfaatan interface?',
      options: [
        'Komponen-komponen sistem saling berinteraksi hanya melalui kontrak abstraksi minimal, sehingga perubahan pada satu komponen tidak berimbas merusak komponen lainnya',
        'Komponen yang tidak terpasang kencang di casing komputer',
        'Kode program yang lupa disimpan di harddisk',
        'Aplikasi yang tidak memiliki struktur file'
      ],
      correctAnswer: 0,
      explanation: 'Kopling longgar adalah cawan suci arsitektur perangkat lunak: sistem modular di mana komponen dapat diganti, diuji secara terisolasi (mocking), dan dikembangkan secara paralel oleh tim yang berbeda.'
    },
    {
      id: 'oop-5-12',
      question: 'Bagaimana Interface sangat krusial dalam memfasilitasi Unit Testing yang efektif?',
      options: [
        'Memungkinkan pengembang membuat objek tiruan (Mock / Fake / Stub) yang mengimplementasikan interface yang sama, memutus ketergantungan pada database atau server nyata saat pengujian',
        'Interface otomatis menuliskan test case sendiri',
        'Interface menghapus seluruh bug dari program',
        'Interface membuat waktu eksekusi unit test menjadi 0 milidetik'
      ],
      correctAnswer: 0,
      explanation: 'Jika `OrderService` bergantung pada interface `IPaymentProcessor`, unit test dapat menyuntikkan `MockPaymentProcessor` tanpa perlu memotong kartu kredit sungguhan atau menyambung ke gateway bank.'
    },
    {
      id: 'oop-5-13',
      question: 'Dalam TypeScript, konsep "Structural Typing" (Pengecekan Tipe Struktural) pada interface berarti:',
      options: [
        'Dua tipe dianggap kompatibel jika mereka memiliki bentuk struktur anggota yang sama, tanpa perlu secara eksplisit mendeklarasikan `implements InterfaceName`',
        'Tipe data hanya boleh berbentuk persegi panjang',
        'Semua variabel harus disimpan di file JSON',
        'TypeScript tidak mendukung interface'
      ],
      correctAnswer: 0,
      explanation: 'TypeScript menganut sistem tipe struktural (berbeda dari nominal typing di Java/C#): jika objek memiliki properti `{ id: number, name: string }`, ia otomatis sah dianggap sebagai tipe yang meminta interface tersebut.'
    },
    {
      id: 'oop-5-14',
      question: 'Apa yang terjadi jika sebuah kelas turunan gagal mengimplementasikan salah satu metode abstrak yang diwarisinya dari Abstract Class induk?',
      options: [
        'Kelas turunan tersebut secara otomatis dianggap sebagai Abstract Class juga dan tidak akan dapat diinstansiasi',
        'Program akan meledak saat dijalankan',
        'Compiler mengisi metode tersebut dengan perulangan tak hingga',
        'Metode tersebut dihapus dari sistem'
      ],
      correctAnswer: 0,
      explanation: 'Jika subclass tidak mengimplementasikan seluruh kontrak abstrak leluhurnya, kelas tersebut belum lengkap secara fungsional sehingga compiler mewajibkan kelas turunan tersebut ditandai sebagai abstract juga.'
    },
    {
      id: 'oop-5-15',
      question: 'Pola arsitektur "Dependency Injection" (DI) bergantung mutlak pada pilar Abstraksi karena:',
      options: [
        'Dependensi disuntikkan ke dalam kelas melalui kontrak antarmuka (interface), bukan dengan cara kelas tersebut menginstansiasi objek konkret secara langsung (`new ConcreteClass()`)',
        'DI membutuhkan jarum suntik fisik ke motherboard',
        'DI melarang pembuatan fungsi',
        'DI hanya bekerja di aplikasi web'
      ],
      correctAnswer: 0,
      explanation: 'Dengan Dependency Injection berbasis antarmuka, kelas terbebas dari kontrol pembuatan dependensinya sendiri (Inversion of Control), memaksimalkan fleksibilitas konfigurasi dan pengujian.'
    },
    {
      id: 'oop-5-16',
      question: 'Kombinasi penggunaan Abstract Class bersama Interface yang sangat populer dalam perancangan pustaka perangkat lunak profesional (seperti di Java Collections Framework) disebut:',
      options: [
        'Skeletal Implementation Pattern (Pola Implementasi Kerangka, seperti `List` interface didampingi oleh `AbstractList` class)',
        'God Object Pattern',
        'Spaghetti Pattern',
        'Deadlock Pattern'
      ],
      correctAnswer: 0,
      explanation: 'Interface mendefinisikan tipe dan fleksibilitas multiple inheritance, sedangkan Abstract Class pendamping menyediakan implementasi default metode-metode bantuan umum, mempermudah programmer menulis kelas baru.'
    },
    {
      id: 'oop-5-17',
      question: 'Apa perbedaan semantik antara pewarisan perilaku (Behavior Subtyping) dan pewarisan implementasi (Implementation Inheritance)?',
      options: [
        'Behavior subtyping (Interface) menjamin kepatuhan terhadap kontrak spesifikasi perilaku yang diharapkan pengguna; Implementation inheritance (Class) sekadar menyalin baris kode untuk menghemat penulisan',
        'Behavior subtyping hanya ada di robot humanoid',
        'Implementation inheritance melarang penggunaan memori',
        'Keduanya identik dalam teori matematika'
      ],
      correctAnswer: 0,
      explanation: 'Subtyping murni adalah janji perilaku (Prinsip Substitusi Liskov). Menggunakan inheritance hanya untuk malas menulis ulang kode tanpa ada relasi makna semantik yang benar seringkali memicu bencana arsitektur.'
    },
    {
      id: 'oop-5-18',
      question: 'Dalam bahasa Go (Golang), interface diimplementasikan secara "Implisit". Ini berarti bahwa:',
      options: [
        'Sebuah tipe struct otomatis mengimplementasikan interface jika struct tersebut memiliki seluruh metode yang tertera di interface, tanpa ada kata kunci `implements` sama sekali',
        'Interface di Go tidak boleh memiliki metode',
        'Bahasa Go tidak mengenal konsep objek',
        'Programmer harus mendaftarkan interface di kantor pos'
      ],
      correctAnswer: 0,
      explanation: 'Go menerapkan implicit interfaces: menghilangkan deklarasi formal yang kaku. Hal ini memungkinkan paket klien mendefinisikan antarmukanya sendiri untuk mengonsumsi struct pihak ketiga tanpa persetujuan pembuat paket pihak ketiga.'
    },
    {
      id: 'oop-5-19',
      question: 'Apa bahaya dari pembuatan interface yang terlalu besar dan memiliki puluhan metode (Fat Interface)?',
      options: [
        'Melanggar Interface Segregation Principle (ISP), memaksa kelas klien mengimplementasikan metode dummy/kosong yang tidak relevan bagi kebutuhannya',
        'Menghabiskan bandwidth internet sebesar 100 GB',
        'Membuat warna editor kode menjadi gelap',
        'Komputer menolak menyala di pagi hari'
      ],
      correctAnswer: 0,
      explanation: 'Interface Segregation Principle (ISP) menyarankan memecah interface gemuk menjadi antarmuka-antarmuka kecil yang kohesif (misal: memecah `FatInterface` menjadi `Reader`, `Writer`, dan `Closer`).'
    },
    {
      id: 'oop-5-20',
      question: 'Mengapa pilar Abstraksi dianggap sebagai pondasi paling luhur dalam membangun sistem perangkat lunak berskala masif (Enterprise Software)?',
      options: [
        'Karena otak manusia memiliki batas kapasitas kognitif (kognisi terbatas), dan abstraksi memungkinkan kita bernalar tentang sistem raksasa pada tingkat arsitektural tinggi tanpa tersesat dalam triliunan baris rincian teknis mikro',
        'Karena abstraksi membuat harga software bisa dijual miliaran rupiah',
        'Karena abstraksi menghilangkan kebutuhan akan programmer',
        'Karena sistem operasi tidak bisa berjalan tanpa abstraksi'
      ],
      correctAnswer: 0,
      explanation: 'Abstraksi adalah senjata utama rekayasawan perangkat lunak untuk menaklukkan kompleksitas. Melalui lapisan-lapisan abstraksi yang kohesif, jutaan baris kode dapat diorkestrasi menjadi aplikasi handal yang dapat dipahami, dirawat, dan dikembangkan melintasi generasi.'
    }
  ]
};
