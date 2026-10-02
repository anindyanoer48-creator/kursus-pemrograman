import type { QuizQuestion } from './curriculum';

export const ALPRO_PEMULA_QUIZZES: Record<string, QuizQuestion[]> = {
  konsep_alpro: [
    {
      id: 'alpro-1-1',
      question: 'Manakah definisi yang paling tepat mengenai apa itu "Algoritma" dalam ilmu komputer?',
      options: [
        'Bahasa pemrograman tingkat tinggi yang digunakan untuk membuat aplikasi grafis.',
        'Urutan langkah-langkah logis dan terstruktur yang berhingga untuk menyelesaikan suatu masalah tertentu.',
        'Komponen perangkat keras komputer yang berfungsi melakukan perhitungan matematika.',
        'Program komputer biner yang sudah dikompilasi dan siap dieksekusi oleh sistem operasi.'
      ],
      correctAnswer: 1,
      explanation: 'Algoritma adalah serangkaian instruksi atau prosedur logis, terdefinisi dengan jelas (unambiguous), dan berhingga (finite) yang memproses input menjadi output yang diinginkan.'
    },
    {
      id: 'alpro-1-2',
      question: 'Menurut Donald Knuth, salah satu ciri penting algoritma adalah "Finiteness" (Keterhinggaan). Apa maksud dari sifat ini?',
      options: [
        'Algoritma harus dapat memproses jumlah data yang tidak terbatas.',
        'Algoritma harus memiliki langkah-langkah yang berhenti setelah sejumlah langkah terhingga.',
        'Setiap instruksi harus memiliki arti tunggal dan tidak menimbulkan tafsir ganda.',
        'Algoritma harus memiliki efektivitas memori tanpa menggunakan variabel sama sekali.'
      ],
      correctAnswer: 1,
      explanation: 'Finiteness berarti algoritma wajib memiliki kondisi berhenti (terminasi) setelah memproses sejumlah langkah yang berhingga, bukan berjalan selamanya tanpa akhir (infinite loop).'
    },
    {
      id: 'alpro-1-3',
      question: 'Apa perbedaan mendasar antara Algoritma dan Program Komputer?',
      options: [
        'Algoritma adalah konsep atau rancangan logis independen, sedangkan Program adalah implementasi algoritma dalam bahasa pemrograman tertentu.',
        'Algoritma hanya berupa gambar diagram, sedangkan Program hanya berupa kode bahasa assembly.',
        'Program tidak membutuhkan input dan output, sedangkan Algoritma selalu membutuhkan database.',
        'Tidak ada perbedaan, kedua istilah tersebut merupakan sinonim murni dalam ilmu komputer.'
      ],
      correctAnswer: 0,
      explanation: 'Algoritma adalah logika atau metode pemecahan masalah (bersifat independen dari bahasa apapun), sedangkan Program adalah perwujudan konkret algoritma yang ditulis menggunakan sintaks bahasa pemrograman spesifik.'
    },
    {
      id: 'alpro-1-4',
      question: 'Apa arti istilah "Source Code" (Kode Sumber) dalam dunia pemrograman?',
      options: [
        'Kabel listrik yang mengalirkan daya utama ke motherboard komputer.',
        'Teks instruksi program yang ditulis oleh programmer dalam bahasa pemrograman yang dapat dibaca manusia.',
        'Sinyal biner 0 dan 1 yang tersimpan di dalam sel memori cache prosesor.',
        'Dokumen panduan instalasi sistem operasi untuk pengguna awam.'
      ],
      correctAnswer: 1,
      explanation: 'Source code adalah baris-baris perintah yang ditulis oleh programmer menggunakan aturan tata bahasa pemrograman (seperti C++, Java, atau Python) sebelum diterjemahkan menjadi kode mesin.'
    },
    {
      id: 'alpro-1-5',
      question: 'Apa peran utama dari perangkat lunak "Compiler" (Penerjemah Bahasa)?',
      options: [
        'Menjalankan program game dengan grafis tinggi di komputer berspesifikasi rendah.',
        'Menerjemahkan seluruh kode sumber bahasa tingkat tinggi sekaligus menjadi kode biner mesin sebelum dieksekusi.',
        'Menghapus seluruh file sampah dan virus yang ada pada hard disk pengguna.',
        'Mengedit tata letak visual halaman web agar responsif di layar ponsel.'
      ],
      correctAnswer: 1,
      explanation: 'Compiler bertugas menganalisis seluruh teks kode sumber sekaligus, memeriksa kesalahan sintaks, dan menerjemahkannya ke dalam bahasa mesin (machine code/object code) sebelum program dapat dijalankan.'
    },
    {
      id: 'alpro-1-6',
      question: 'Bagaimana cara kerja "Interpreter" berbeda dari "Compiler"?',
      options: [
        'Interpreter menerjemahkan dan mengeksekusi instruksi baris demi baris secara langsung pada saat runtime.',
        'Interpreter selalu menghasilkan file executable (.exe) mandiri sebelum kode dijalankan.',
        'Interpreter tidak memeriksa adanya kesalahan sintaks pada kode sumber.',
        'Interpreter hanya dapat digunakan untuk bahasa pemrograman berbasis mikrokontroler.'
      ],
      correctAnswer: 0,
      explanation: 'Berbeda dengan compiler yang menerjemahkan keseluruhan kode di awal, interpreter membaca, menerjemahkan, dan mengeksekusi baris kode satu per satu saat program sedang berjalan.'
    },
    {
      id: 'alpro-1-7',
      question: 'Dalam pemrograman, apa yang dimaksud dengan istilah "Bug"?',
      options: [
        'Alat bantu untuk mempercepat proses kompilasi kode sumber.',
        'Kesalahan, kecacatan, atau kekeliruan dalam kode program yang menyebabkan hasil tidak sesuai atau program crash.',
        'Fitur keamanan otomatis yang mematikan program jika memori penuh.',
        'Format berkas kompresi arsip kode sumber.'
      ],
      correctAnswer: 1,
      explanation: 'Bug adalah istilah populer untuk galat atau kesalahan pada program, baik berupa salah sintaks, salah logika perhitungan, maupun kesalahan saat alokasi memori runtime.'
    },
    {
      id: 'alpro-1-8',
      question: 'Apa yang dimaksud dengan proses "Debugging"?',
      options: [
        'Menghapus seluruh file proyek dan mengetik ulang dari awal.',
        'Aktivitas melacak, menganalisis, dan memperbaiki kesalahan (bug) di dalam program.',
        'Proses mengunggah aplikasi ke toko aplikasi resmi.',
        'Mengubah kode program menjadi dokumen presentasi.'
      ],
      correctAnswer: 1,
      explanation: 'Debugging adalah proses sistematis yang dilakukan programmer untuk menemukan sumber penyebab galat pada kode dan memperbaikinya hingga program berjalan dengan benar.'
    },
    {
      id: 'alpro-1-9',
      question: 'Seorang programmer lupa menuliskan tanda titik koma (;) penutup baris kode pada C++. Jenis error apa yang akan terjadi?',
      options: [
        'Logic Error (Kesalahan Logika).',
        'Syntax Error (Kesalahan Sintaks / Tata Bahasa).',
        'Hardware Malfunction Error.',
        'User Error (Kesalahan Pengguna).'
      ],
      correctAnswer: 1,
      explanation: 'Syntax Error terjadi ketika kode melanggar aturan gramatikal bahasa pemrograman (seperti tanda baca hilang, kurung kurawal tidak berpasangan, atau salah eja kata kunci), sehingga compiler gagal memproses kode.'
    },
    {
      id: 'alpro-1-10',
      question: 'Program berhasil dikompilasi tanpa ada error sintaks, namun ketika menghitung luas persegi panjang dengan panjang 5 dan lebar 4, program malah menghasilkan output 9 bukannya 20. Jenis error apa ini?',
      options: [
        'Compilation Error.',
        'Logic Error (Kesalahan Logika).',
        'Syntax Error.',
        'Memory Overflow Exception.'
      ],
      correctAnswer: 1,
      explanation: 'Ini adalah Logic Error. Program berjalan normal tanpa crash, namun algoritma yang ditulis salah (kemungkinan programmer menulis rumus luas = panjang + lebar alih-alih panjang * lebar).'
    },
    {
      id: 'alpro-1-11',
      question: 'Apa yang dimaksud dengan "Runtime Error"?',
      options: [
        'Kesalahan penulisan kata kunci bahasa pemrograman yang terdeteksi sebelum kompilasi.',
        'Kesalahan yang terjadi saat program sedang dieksekusi (misal pembagian dengan angka nol atau mengakses indeks di luar batas).',
        'Keterlambatan pengguna dalam mengklik tombol di layar antarmuka.',
        'Kesalahan jaringan internet saat mengunduh compiler.'
      ],
      correctAnswer: 1,
      explanation: 'Runtime Error terjadi saat program sudah berjalan, disebabkan oleh operasi ilegal yang tidak diizinkan sistem operasi atau prosesor, seperti membagi angka dengan nol (division by zero) atau memori tidak mencukupi.'
    },
    {
      id: 'alpro-1-12',
      question: 'Apa fungsi utama dari "Pseudocode" dalam merancang algoritma?',
      options: [
        'Sebagai kode biner siap pakai yang langsung dipasang ke dalam chip CPU.',
        'Sebagai representasi teks informal menyerupai bahasa pemrograman untuk merancang logika program tanpa terikat sintaks kaku.',
        'Sebagai sistem pengaman untuk mengenkripsi password basis data.',
        'Sebagai perangkat lunak untuk menguji kecepatan koneksi internet.'
      ],
      correctAnswer: 1,
      explanation: 'Pseudocode (kode semu) adalah cara menuliskan algoritma menggunakan bahasa manusia sederhana yang terstruktur mirip kode program, bertujuan mempermudah perancangan logika sebelum implementasi ke bahasa nyata.'
    },
    {
      id: 'alpro-1-13',
      question: 'Dalam diagram alir (Flowchart) standar internasional (ANSI), simbol apakah yang digunakan untuk "Keputusan / Decision" (percabangan kondisi)?',
      options: [
        'Persegi Panjang (Rectangle).',
        'Belah Ketupat (Diamond / Rhombus).',
        'Lingkaran Kecil (Circle).',
        'Jajar Genjang (Parallelogram).'
      ],
      correctAnswer: 1,
      explanation: 'Belah ketupat (Diamond) merepresentasikan titik evaluasi kondisi logika yang memiliki minimal dua cabang alur keluar (biasanya "Ya/True" dan "Tidak/False").'
    },
    {
      id: 'alpro-1-14',
      question: 'Dalam diagram alir (Flowchart), simbol "Jajar Genjang" (Parallelogram) melambangkan aktivitas apa?',
      options: [
        'Mulai atau Berakhirnya program (Terminator).',
        'Operasi Input (pembacaan data) atau Output (penulisan data).',
        'Proses perhitungan aritmatika internal (Processing).',
        'Penghubung halaman dokumen (Off-page Connector).'
      ],
      correctAnswer: 1,
      explanation: 'Jajar genjang digunakan khusus untuk menyatakan operasi masukan (Input data dari pengguna/file) dan keluaran (Output data ke layar/printer).'
    },
    {
      id: 'alpro-1-15',
      question: 'Simbol berbentuk oval / lonjong (Kapsul / Oval) pada Flowchart memiliki fungsi sebagai apa?',
      options: [
        'Terminator (Menandai titik Awal / START atau Akhir / END alur program).',
        'Proses pemanggilan fungsi rekursif.',
        'Titik keputusan boolean bersyarat.',
        'Pengulangan loop bertingkat.'
      ],
      correctAnswer: 0,
      explanation: 'Simbol oval/kapsul disebut Terminator, diletakkan di awal untuk START/MULAI dan di akhir untuk END/SELESAI menandai batas eksekusi alur diagram alir.'
    },
    {
      id: 'alpro-1-16',
      question: 'Simbol "Persegi Panjang" (Rectangle) pada Flowchart melambangkan apa?',
      options: [
        'Proses pengolahan atau komputasi (misal penugasan nilai variabel atau perhitungan rumus).',
        'Pengambilan keputusan kondisi benar/salah.',
        'Penerimaan input teks dari keyboard pengguna.',
        'Penghentian darurat eksekusi program.'
      ],
      correctAnswer: 0,
      explanation: 'Persegi panjang (Process symbol) digunakan untuk instruksi komputasi internal, seperti penugasan nilai (misal: luas = p * l) atau inisialisasi data.'
    },
    {
      id: 'alpro-1-17',
      question: 'Mengapa programmer pemula disarankan menyusun algoritma (Flowchart / Pseudocode) terlebih dahulu sebelum langsung menulis kode program?',
      options: [
        'Karena compiler tidak akan mau memproses kode jika tidak dilampirkan gambar flowchart.',
        'Agar logika penyelesaian masalah matang terlebih dahulu, sehingga meminimalisir kesalahan rancang bangun dan logika saat koding.',
        'Agar komputer dapat otomatis menerjemahkan gambar diagram menjadi file biner tanpa koding.',
        'Karena flowchart membatasi ukuran memori RAM yang digunakan oleh sistem operasi.'
      ],
      correctAnswer: 1,
      explanation: 'Merancang algoritma terlebih dahulu memisahkan antara proses berpikir logis (problem solving) dengan kendala teknis sintaks bahasa pemrograman, membuat proses koding jauh lebih cepat dan terarah.'
    },
    {
      id: 'alpro-1-18',
      question: 'Apa arti kata "Keyword" (Kata Kunci yang Dilindungi / Reserved Word) dalam bahasa pemrograman?',
      options: [
        'Kata sandi rahasia yang wajib dimasukkan setiap kali program dijalankan.',
        'Kata khusus yang telah memiliki arti dan fungsi baku dalam tata bahasa pemrograman dan tidak boleh digunakan sebagai nama variabel.',
        'Komentar penjelas yang dibuat programmer agar kode mudah dibaca.',
        'Judul proyek yang didaftarkan ke sistem lisensi perangkat lunak.'
      ],
      correctAnswer: 1,
      explanation: 'Reserved words / keywords (seperti if, else, while, int, return) adalah kata-kata khusus yang telah dipesan oleh bahasa pemrograman untuk perintah internal dan tidak boleh dijadikan nama variabel atau fungsi.'
    },
    {
      id: 'alpro-1-19',
      question: 'Dalam penulisan kode, apa fungsi dari "Komentar" (Comments)?',
      options: [
        'Perintah rahasia yang hanya dipahami oleh prosesor untuk mempercepat eksekusi.',
        'Catatan penjelasan di dalam kode yang diabaikan oleh compiler dan ditujukan untuk memudahkan manusia memahami alur program.',
        'Baris kode yang sengaja dibuat rusak agar program tidak bisa disalin orang lain.',
        'Tempat penyimpanan variabel global dengan akses tercepat.'
      ],
      correctAnswer: 1,
      explanation: 'Komentar (misal // atau /* */) sama sekali tidak dieksekusi oleh mesin. Tujuannya murni dokumentasi bagi pemrogram agar kode mudah dirawat dan dipahami rekan tim.'
    },
    {
      id: 'alpro-1-20',
      question: 'Manakah urutan tahapan penyelesaian masalah komputasi yang paling ideal bagi seorang pemrogram pemula?',
      options: [
        'Kompilasi -> Koding -> Desain Algoritma -> Rilis.',
        'Analisis Masalah -> Desain Algoritma (Pseudocode/Flowchart) -> Implementasi Koding -> Pengujian & Debugging.',
        'Testing -> Koding Langsung -> Menentukan Masalah -> Desain.',
        'Membeli Hardware Baru -> Koding -> Analisis Masalah -> Dokumentasi.'
      ],
      correctAnswer: 1,
      explanation: 'Siklus hidup pemecahan masalah komputasi yang baku diawali dengan memahami masalah secara utuh, merancang langkah algoritma, mengimplementasikannya ke bahasa kode, lalu mengujinya secara cermat.'
    }
  ],

  variabel_tipe_data: [
    {
      id: 'alpro-2-1',
      question: 'Secara konseptual, apa analogi paling sederhana untuk memahami sebuah "Variabel" dalam pemrograman?',
      options: [
        'Sebuah tombol keyboard yang bisa ditekan berkali-kali.',
        'Sebuah wadah atau kotak penyimpanan berlabel di memori komputer yang dapat menampung nilai dan nilainya bisa berubah.',
        'Layar monitor yang menampilkan hasil grafis aplikasi.',
        'Kabel jaringan yang menghubungkan server dan client.'
      ],
      correctAnswer: 1,
      explanation: 'Variabel adalah lokasi penyimpanan bernama di RAM komputer yang diberi tipe data dan nilai, di mana isinya dapat dibaca dan dimodifikasi sepanjang program berjalan.'
    },
    {
      id: 'alpro-2-2',
      question: 'Apa perbedaan mendasar antara "Deklarasi Variabel" dan "Inisialisasi Variabel"?',
      options: [
        'Deklarasi memesan nama dan tipe data di memori; Inisialisasi memberikan nilai awal pada variabel tersebut.',
        'Deklarasi memberikan nilai akhir; Inisialisasi menghapus variabel dari memori.',
        'Deklarasi hanya bisa dilakukan untuk angka pecahan, sedangkan Inisialisasi hanya untuk teks.',
        'Kedua istilah tersebut memiliki fungsi yang persis sama tanpa perbedaan teknis.'
      ],
      correctAnswer: 0,
      explanation: 'Contoh: `int skor;` adalah Deklarasi (memesan ruang bernama skor bertipe integer). Sedangkan `skor = 100;` atau `int skor = 100;` adalah Inisialisasi (pemberian nilai awal).'
    },
    {
      id: 'alpro-2-3',
      question: 'Manakah nama identifier variabel berikut yang VALID sesuai aturan baku pemrograman (seperti C/C++/Java)?',
      options: [
        '2totalNilai (diawali angka)',
        'total-nilai (mengandung tanda minus aritmatika)',
        'total_nilai (menggunakan huruf dan garis bawah / underscore)',
        'total nilai (mengandung spasi kosong di tengah nama)'
      ],
      correctAnswer: 2,
      explanation: 'Nama variabel hanya boleh terdiri dari huruf alfabet (a-z, A-Z), angka (0-9), dan garis bawah (_). Nama tidak boleh diawali angka, tidak boleh mengandung spasi, dan tidak boleh memakai simbol operator matematika.'
    },
    {
      id: 'alpro-2-4',
      question: 'Tipe data primitif manakah yang paling tepat digunakan untuk menyimpan data jumlah siswa dalam satu kelas (misal: 35)?',
      options: [
        'Float (pecahan berkoma)',
        'Integer / int (bilangan bulat)',
        'Boolean (benar/salah)',
        'Char (satu karakter huruf)'
      ],
      correctAnswer: 1,
      explanation: 'Jumlah siswa adalah bilangan diskrit bulat yang tidak mungkin berupa pecahan, sehingga tipe data bilangan bulat (`int`) adalah pilihan yang paling tepat dan efisien.'
    },
    {
      id: 'alpro-2-5',
      question: 'Tipe data primitif manakah yang tepat digunakan untuk menyimpan nilai IPK mahasiswa (misal: 3.85)?',
      options: [
        'Float atau Double (bilangan real / pecahan berkoma).',
        'Integer (bilangan bulat).',
        'Boolean.',
        'Char.'
      ],
      correctAnswer: 0,
      explanation: 'Nilai dengan presisi desimal atau pecahan diwakili oleh tipe data floating point (`float` atau `double`).'
    },
    {
      id: 'alpro-2-6',
      question: 'Tipe data "char" digunakan untuk menyimpan apa dalam pemrograman standar?',
      options: [
        'Satu karakter tunggal (seperti huruf \'A\', angka \'7\', atau simbol \'#\') yang diapit tanda petik tunggal.',
        'Paragraf teks panjang yang memuat ribuan kata.',
        'Angka pecahan berkoma ganda.',
        'Daftar berkas media audio dan video.'
      ],
      correctAnswer: 0,
      explanation: 'Tipe data `char` berukuran 1 byte (8-bit) dan dirancang untuk menyimpan tepat satu simbol/karakter ASCII, ditulis dengan petik tunggal (\'a\').'
    },
    {
      id: 'alpro-2-7',
      question: 'Tipe data "boolean" (atau `bool`) hanya memiliki berapa kemungkinan nilai valid?',
      options: [
        'Tak terhingga (angka berapapun).',
        'Dua kemungkinan nilai: True (Benar / 1) atau False (Salah / 0).',
        'Tiga kemungkinan nilai: Positif, Negatif, dan Nol.',
        '256 kemungkinan nilai sesuai tabel ASCII.'
      ],
      correctAnswer: 1,
      explanation: 'Tipe data boolean murni melambangkan kebenaran logika biner, yang hanya dapat bernilai `true` (benar) atau `false` (salah).'
    },
    {
      id: 'alpro-2-8',
      question: 'Apa perbedaan antara tipe data "char" dan "string"?',
      options: [
        'char menyimpan angka bulat, sedangkan string menyimpan angka desimal.',
        'char hanya menyimpan satu karakter tunggal, sedangkan string merupakan untaian atau kumpulan karakter teks.',
        'string hanya bisa menampung angka, sedangkan char hanya huruf vokal.',
        'Tidak ada perbedaan, keduanya identik di semua bahasa pemrograman.'
      ],
      correctAnswer: 1,
      explanation: '`char` mewakili satu karakter tunggal (misal \'K\'), sedangkan `string` adalah urutan dari banyak karakter yang membentuk kata atau kalimat (misal "Komputer").'
    },
    {
      id: 'alpro-2-9',
      question: 'Apa yang dimaksud dengan "Konstanta" (Constant) dalam pemrograman?',
      options: [
        'Variabel yang nilainya selalu berubah secara acak setiap detik.',
        'Wadah penyimpanan bernama yang nilainya ditetapkan sekali saat inisialisasi dan tidak dapat diubah lagi sepanjang eksekusi program.',
        'Fungsi khusus untuk menghitung rumus matematika trigonometri.',
        'Nama file aplikasi utama yang tidak boleh diganti namanya.'
      ],
      correctAnswer: 1,
      explanation: 'Konstanta (dideklarasikan dengan kata kunci seperti `const`) menjamin bahwa nilai data (seperti nilai PI = 3.14159) bersifat tetap (*immutable*) untuk mencegah modifikasi tidak sengaja.'
    },
    {
      id: 'alpro-2-10',
      question: 'Perhatikan ekspresi matematika pada C++ berikut: `int hasil = 17 % 5;`. Berapakah nilai akhir dari variabel `hasil`?',
      options: [
        '3 (hasil pembagian bulat)',
        '2 (sisa hasil bagi / modulo)',
        '3.4 (hasil pecahan desimal)',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Operator modulo (`%`) mengembalikan sisa pembagian bilangan bulat. 17 dibagi 5 adalah 3 dengan sisa 2 ($5 \\times 3 + 2 = 17$). Maka hasilnya adalah 2.'
    },
    {
      id: 'alpro-2-11',
      question: 'Diberikan dua variabel bertipe integer: `int a = 10; int b = 4; float c = a / b;`. Jika dicetak pada bahasa C/C++, berapakah nilai `c`?',
      options: [
        '2.5 (karena tipe c adalah float)',
        '2 (karena operasi pembagian antara integer dan integer menghasilkan integer 2 sebelum diubah ke float 2.0)',
        '2.25',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Ini adalah jebakan klasik integer division! Karena operand `a` dan `b` keduanya bertipe integer, maka `10 / 4` menghasilkan integer `2`. Baru kemudian ditampung ke `c` menjadi `2.0`, bukan `2.5`. Untuk menghasilkan `2.5`, salah satu operand harus di-cast ke float: `(float)a / b`.'
    },
    {
      id: 'alpro-2-12',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint x = 5;\nx = x + 3;\nx = x * 2;\n```\nBerapakah nilai akhir variabel `x`?',
      options: [
        '16',
        '11',
        '13',
        '10'
      ],
      correctAnswer: 0,
      explanation: 'Mula-mula x = 5. Baris kedua: x = 5 + 3 = 8. Baris ketiga: x = 8 * 2 = 16. Maka nilai akhir x adalah 16.'
    },
    {
      id: 'alpro-2-13',
      question: 'Apa arti dari operator penugasan singkat (compound assignment) `x += 5;`?',
      options: [
        'Memeriksa apakah x bernilai sama dengan 5.',
        'Mengubah nilai x menjadi sama persis dengan 5.',
        'Ekuivalen dengan `x = x + 5;` (menambahkan 5 ke nilai x saat ini).',
        'Menghapus variabel x sebanyak 5 kali.'
      ],
      correctAnswer: 2,
      explanation: '`x += 5` adalah bentuk penulisan ringkas (syntactic sugar) dari ekspresi `x = x + 5`.'
    },
    {
      id: 'alpro-2-14',
      question: 'Apa arti dari operator unary increment `x++;`?',
      options: [
        'Menambahkan nilai x dengan 1 (ekuivalen dengan `x = x + 1;`).',
        'Mengalikan nilai x dengan angka 2.',
        'Mengubah nilai x menjadi bilangan positif.',
        'Menampilkan nilai x dua kali ke layar terminal.'
      ],
      correctAnswer: 0,
      explanation: 'Operator `++` disebut increment operator, yang berfungsi menaikkan nilai variabel bersangkutan sebesar tepat satu unit.'
    },
    {
      id: 'alpro-2-15',
      question: 'Manakah tanda kurung dan operator yang akan dieksekusi TERLEBIH DAHULU dalam ekspresi: `int hasil = 10 + 4 * 2 - 6;`?',
      options: [
        'Penjumlahan: 10 + 4',
        'Perkalian: 4 * 2 (karena memiliki presedensi lebih tinggi)',
        'Pengurangan: 2 - 6',
        'Dieksekusi acak sesuai urutan memori'
      ],
      correctAnswer: 1,
      explanation: 'Sesuai hierarki presedensi operator aritmatika (BODMAS/PEMDAS), perkalian (`*`) memiliki prioritas lebih tinggi daripada penjumlahan (`+`) dan pengurangan (`-`). Jadi dihitung `4 * 2 = 8`, lalu `10 + 8 - 6 = 12`.'
    },
    {
      id: 'alpro-2-16',
      question: 'Apa output dari operasi string concatenation (penggabungan teks) berikut dalam pemrograman tingkat tinggi: `"10" + "20"`?',
      options: [
        '30 (karena 10 + 20 = 30)',
        '"1020" (karena kedua operand berupa teks/string yang disambung)',
        'Error tipe data',
        '200'
      ],
      correctAnswer: 1,
      explanation: 'Karena kedua nilai berada dalam tanda petik dua (" "), keduanya diperlakukan sebagai string teks. Operator `+` pada string melakukan penggabungan (concatenation), bukan penjumlahan numerik.'
    },
    {
      id: 'alpro-2-17',
      question: 'Dalam bahasa C++, perintah manakah yang digunakan untuk membaca input data dari keyboard pengguna?',
      options: [
        'std::cout',
        'std::cin',
        'std::print',
        'std::write'
      ],
      correctAnswer: 1,
      explanation: '`std::cin` (Character Input) mengalirkan data yang diketikkan pengguna melalui console/terminal ke dalam variabel program menggunakan operator extraction (`>>`).'
    },
    {
      id: 'alpro-2-18',
      question: 'Apa fungsi dari karakter escape sequence `\\n` ketika dicetak ke layar monitor?',
      options: [
        'Mencetak simbol garis miring dan huruf n.',
        'Membuat baris baru (newline / enter) pada output teks.',
        'Menghapus karakter teks sebelumnya (backspace).',
        'Memberikan spasi tabulasi horizontal sepanjang 8 spasi.'
      ],
      correctAnswer: 1,
      explanation: '`\\n` adalah karakter escape universal untuk "newline", memindahkan kursor output ke baris berikutnya.'
    },
    {
      id: 'alpro-2-19',
      question: 'Perhatikan potongan kode C++:\n```cpp\nint a = 7;\nint b = a;\na = 12;\n```\nBerapakah nilai akhir dari variabel `b`?',
      options: [
        '12',
        '7',
        '19',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Pada baris kedua, nilai variabel `a` (yaitu 7) disalin ke variabel `b`. Ketika pada baris ketiga variabel `a` diubah menjadi 12, nilai pada variabel `b` tetap 7 karena tipe primitif melakukan copy by value.'
    },
    {
      id: 'alpro-2-20',
      question: 'Apa yang terjadi jika kita mendeklarasikan variabel lokal integer di C++ tanpa memberikan nilai awal (`int skor;`), lalu langsung mencetak nilainya ke layar?',
      options: [
        'Komputer akan otomatis mengisinya dengan angka 0 secara aman.',
        'Variabel akan berisi nilai acak tak terduga (garbage value) yang sebelumnya ada di memori RAM tersebut.',
        'Komputer akan langsung mengalami blue screen (BSOD).',
        'Compiler otomatis menghapus baris kode tersebut.'
      ],
      correctAnswer: 1,
      explanation: 'Di C/C++, variabel lokal yang tidak diinisialisasi akan menampung sisa bit acak yang sebelumnya ada di alamat RAM tersebut (garbage value). Praktik terbaik adalah selalu menginisialisasi variabel saat deklarasi (misal: `int skor = 0;`).'
    }
  ],

  logika_boolean: [
    {
      id: 'alpro-3-1',
      question: 'Manakah di bawah ini yang merupakan fungsi dari Operator Relasional (Relational Operator)?',
      options: [
        'Melakukan perhitungan matematika integral dan diferensial.',
        'Membandingkan dua buah nilai dan menghasilkan nilai kebenaran boolean (true atau false).',
        'Menggabungkan dua buah file menjadi satu berkas kompresi.',
        'Menggandakan kapasitas memori RAM komputer.'
      ],
      correctAnswer: 1,
      explanation: 'Operator relasional (seperti `==`, `!=`, `<`, `>`, `<=`, `>=`) bertugas membandingkan dua operand dan menghasilkan nilai boolean: `true` (benar) atau `false` (salah).'
    },
    {
      id: 'alpro-3-2',
      question: 'Apa perbedaan fatal yang sering menjebak pemula antara operator `=` dan operator `==`?',
      options: [
        '`=` adalah operator penugasan nilai (assignment); `==` adalah operator pembanding kesetaraan (equality comparison).',
        '`=` digunakan untuk teks, sedangkan `==` digunakan untuk angka.',
        '`=` hanya digunakan pada perulangan loop, sedangkan `==` pada fungsi.',
        'Tidak ada perbedaan, keduanya bisa saling menggantikan.'
      ],
      correctAnswer: 0,
      explanation: '`a = 5;` berarti "simpan nilai 5 ke dalam variabel a". Sedangkan `a == 5;` berarti "apakah isi variabel a sama dengan 5?". Menuliskan `if (a = 5)` akan menimpa nilai a menjadi 5 alih-alih mengecek nilainya!'
    },
    {
      id: 'alpro-3-3',
      question: 'Simbol operator manakah yang digunakan untuk memeriksa apakah dua nilai "TIDAK SAMA DENGAN" dalam bahasa C/C++/Java/Python?',
      options: [
        '<>',
        '!=',
        '==!',
        'NOT='
      ],
      correctAnswer: 1,
      explanation: 'Tanda seru (`!`) melambangkan negasi/not. Oleh karena itu, operator tidak sama dengan ditulis sebagai `!=`.'
    },
    {
      id: 'alpro-3-4',
      question: 'Berapakah hasil evaluasi dari ekspresi relasional berikut: `(15 <= 15)`?',
      options: [
        'true (karena 15 kurang dari ATAU sama dengan 15)',
        'false (karena 15 tidak lebih kecil dari 15)',
        'Error kompilasi',
        '0'
      ],
      correctAnswer: 0,
      explanation: 'Operator `<=` berarti "kurang dari atau sama dengan". Karena 15 sama dengan 15, maka kondisi terpenuhi dan bernilai `true`.'
    },
    {
      id: 'alpro-3-5',
      question: 'Bagaimana tabel kebenaran untuk Operator Logika "AND" (ditulis `&&`)?',
      options: [
        'Bernilai true HANYA JIKA KEDUA operand bernilai true.',
        'Bernilai true jika salah satu operand bernilai true.',
        'Selalu bernilai false di semua kondisi.',
        'Bernilai true hanya jika kedua operand bernilai false.'
      ],
      correctAnswer: 0,
      explanation: 'Operator logika AND (`&&`) menuntut seluruh syarat terpenuhi. Hasilnya hanya akan `true` jika kedua kondisi bernilai `true`.'
    },
    {
      id: 'alpro-3-6',
      question: 'Bagaimana tabel kebenaran untuk Operator Logika "OR" (ditulis `||`)?',
      options: [
        'Bernilai true JIKA SALAH SATU atau KEDUA operand bernilai true.',
        'Hanya bernilai true jika kedua operand bernilai false.',
        'Hanya bernilai true jika operand pertama bernilai false dan operand kedua true.',
        'Bernilai false jika kedua operand bernilai true.'
      ],
      correctAnswer: 0,
      explanation: 'Operator logika OR (`||`) membutuhkan minimal satu syarat terpenuhi. Selama ada minimal satu kondisi bernilai `true`, hasilnya adalah `true`. Hanya bernilai `false` jika kedua operand bernilai `false`.'
    },
    {
      id: 'alpro-3-7',
      question: 'Apa fungsi dari Operator Logika "NOT" (ditulis `!`)?',
      options: [
        'Mengalikan nilai logika dengan angka nol.',
        'Membalikkan (negasi) nilai kebenaran boolean: mengubah true menjadi false, dan sebaliknya.',
        'Menghapus variabel logika dari memori.',
        'Mengubah huruf kecil menjadi huruf kapital.'
      ],
      correctAnswer: 1,
      explanation: 'Operator `!` (NOT/negasi) membalikkan nilai: `!true` menghasilkan `false`, dan `!false` menghasilkan `true`.'
    },
    {
      id: 'alpro-3-8',
      question: 'Diberikan: `bool lulus = true; bool dapatBeasiswa = false;`. Berapakah hasil dari `lulus && dapatBeasiswa`?',
      options: [
        'true',
        'false',
        'null',
        'undefined'
      ],
      correctAnswer: 1,
      explanation: 'Karena menggunakan operator `&&` (AND) dan salah satu operand bernilai `false` (`dapatBeasiswa`), maka hasil akhirnya adalah `false`.'
    },
    {
      id: 'alpro-3-9',
      question: 'Dengan variabel yang sama: `bool lulus = true; bool dapatBeasiswa = false;`. Berapakah hasil dari `lulus || dapatBeasiswa`?',
      options: [
        'true',
        'false',
        'null',
        '0'
      ],
      correctAnswer: 0,
      explanation: 'Karena menggunakan operator `||` (OR) dan salah satu operand bernilai `true` (`lulus`), maka hasil akhirnya adalah `true`.'
    },
    {
      id: 'alpro-3-10',
      question: 'Berapakah hasil dari evaluasi ekspresi: `!(5 > 10)`?',
      options: [
        'false',
        'true',
        'Error sintaks',
        '-5'
      ],
      correctAnswer: 1,
      explanation: 'Evaluasi di dalam kurung: `5 > 10` bernilai `false`. Kemudian dinegasikan oleh operator `!` di luar kurung: `!false` menghasilkan `true`.'
    },
    {
      id: 'alpro-3-11',
      question: 'Seorang pemrogram ingin mengecek apakah variabel `umur` berada dalam rentang usia remaja (antara 13 sampai 19 tahun inklusif). Manakah ekspresi kode yang BENAR?',
      options: [
        '13 <= umur <= 19 (salah di C/C++)',
        'umur >= 13 && umur <= 19',
        'umur >= 13 || umur <= 19',
        'umur == 13 && 19'
      ],
      correctAnswer: 1,
      explanation: 'Di sebagian besar bahasa pemrograman (seperti C/C++/Java), perbandingan rentang tidak boleh ditulis beruntun `13 <= umur <= 19`. Harus dipecah menjadi dua relasi terpisah yang dihubungkan dengan operator AND: `umur >= 13 && umur <= 19`.'
    },
    {
      id: 'alpro-3-12',
      question: 'Apa akibatnya jika menulis ekspresi `umur >= 13 || umur <= 19` untuk rentang remaja?',
      options: [
        'Kondisi tersebut akan SELALU bernilai true untuk SEMUA kemungkinan umur manusia.',
        'Kondisi tersebut akan selalu bernilai false.',
        'Program akan berhenti dengan pesan crash.',
        'Hanya angka 13 dan 19 yang diterima.'
      ],
      correctAnswer: 0,
      explanation: 'Jika menggunakan OR (`||`): Jika umur = 50, maka `umur >= 13` bernilai true -> hasil true! Jika umur = 5, maka `umur <= 19` bernilai true -> hasil true! Akibatnya kondisi selalu bernilai true untuk semua angka, yang merupakan kesalahan logika (logic bug).'
    },
    {
      id: 'alpro-3-13',
      question: 'Berapakah hasil evaluasi dari: `(true && false) || (true && true)`?',
      options: [
        'false',
        'true',
        '0',
        'Error'
      ],
      correctAnswer: 1,
      explanation: 'Bagian kiri: `true && false` menghasilkan `false`. Bagian kanan: `true && true` menghasilkan `true`. Kemudian: `false || true` menghasilkan `true`.'
    },
    {
      id: 'alpro-3-14',
      question: 'Apa yang dimaksud dengan fitur "Short-Circuit Evaluation" pada operator logika komputer?',
      options: [
        'Prosesor mengalami kerusakan korsleting listrik saat menghitung boolean.',
        'Penghentian evaluasi kondisi lebih awal jika hasil akhir sudah dapat dipastikan dari operand pertama.',
        'Kabel monitor terputus saat program sedang berjalan.',
        'Pengurangan ukuran file program agar lebih hemat memori.'
      ],
      correctAnswer: 1,
      explanation: 'Short-circuit evaluation adalah optimasi di mana jika operand pertama pada `&&` sudah `false`, operand kedua tidak dievaluasi lagi (karena pasti false). Begitu juga pada `||`, jika operand pertama sudah `true`, operand kedua tidak dievaluasi lagi (karena pasti true).'
    },
    {
      id: 'alpro-3-15',
      question: 'Perhatikan ekspresi C++ berikut:\n```cpp\nint angka = 0;\nbool test = (angka != 0) && (100 / angka > 1);\n```\nApakah kode di atas akan menyebabkan crash pembagian dengan angka nol (division by zero)?',
      options: [
        'Ya, karena ada operasi 100 / angka di mana angka bernilai nol.',
        'Tidak, karena `(angka != 0)` bernilai false, sehingga melalui short-circuit evaluation, bagian kanan `(100 / angka > 1)` tidak pernah dieksekusi.',
        'Ya, compiler akan menolak mengompilasi kode tersebut.',
        'Tergantung kecepatan clock prosesor.'
      ],
      correctAnswer: 1,
      explanation: 'Inilah kegunaan luar biasa dari short-circuit evaluation: karena operand pertama `(angka != 0)` bernilai `false` pada operasi `&&`, compiler langsung menetapkan hasil akhir `false` tanpa menjalankan `100 / angka`, sehingga crash terlindungi secara aman!'
    },
    {
      id: 'alpro-3-16',
      question: 'Manakah urutan prioritas eksekusi (precedence) yang benar di antara ketiga operator logika jika tanpa tanda kurung?',
      options: [
        'OR (||) paling tinggi, lalu AND (&&), lalu NOT (!)',
        'NOT (!) paling tinggi, kemudian AND (&&), lalu OR (||)',
        'Semua operator logika memiliki prioritas yang setara dari kiri ke kanan',
        'AND (&&) paling tinggi, lalu OR (||), lalu NOT (!)'
      ],
      correctAnswer: 1,
      explanation: 'Secara standar, operator NOT (`!`) memiliki presedensi tertinggi (dieksekusi pertama), diikuti oleh AND (`&&`), dan terakhir adalah OR (`||`).'
    },
    {
      id: 'alpro-3-17',
      question: 'Diberikan: `bool hasil = !false && false;`. Berapakah nilai `hasil`?',
      options: [
        'true',
        'false',
        'Error',
        '1'
      ],
      correctAnswer: 1,
      explanation: 'Karena `!` memiliki prioritas lebih tinggi daripada `&&`, maka `!false` dihitung terlebih dahulu menjadi `true`. Selanjutnya `true && false` dievaluasi menghasilkan `false`.'
    },
    {
      id: 'alpro-3-18',
      question: 'Bagaimana bunyi Hukum De Morgan untuk menyederhanakan ekspresi negasi `!(A || B)`?',
      options: [
        '!A || !B',
        '!A && !B',
        'A && B',
        '!(A) || B'
      ],
      correctAnswer: 1,
      explanation: 'Hukum De Morgan menyatakan bahwa negasi dari disjungsi adalah konjungsi dari negasi: `!(A || B)` ekuivalen dengan `!A && !B`.'
    },
    {
      id: 'alpro-3-19',
      question: 'Bagaimana bunyi Hukum De Morgan untuk menyederhanakan ekspresi negasi `!(A && B)`?',
      options: [
        '!A || !B',
        '!A && !B',
        'A || B',
        'A && !B'
      ],
      correctAnswer: 0,
      explanation: 'Hukum De Morgan: `!(A && B)` ekuivalen dengan `!A || !B` ("Bukan (A dan B)" sama artinya dengan "Bukan A atau Bukan B").'
    },
    {
      id: 'alpro-3-20',
      question: 'Kapan sebaiknya programmer menambahkan tanda kurung `( )` pada ekspresi logika majemuk yang panjang?',
      options: [
        'Hanya jika compiler mengeluarkan pesan peringatan syntax error.',
        'Selalu disarankan menggunakan tanda kurung untuk memperjelas maksud logika dan menghindari salah interpretasi prioritas operator oleh pemrogram lain.',
        'Tanda kurung tidak boleh digunakan pada operator logika boolean.',
        'Hanya jika variabel bertipe integer.'
      ],
      correctAnswer: 1,
      explanation: 'Menambahkan tanda kurung `( )` secara eksplisit adalah praktik Clean Code terbaik untuk menjamin urutan eksekusi sesuai niat pembuat kode dan mencegah bug interpretasi precedence.'
    }
  ],

  percabangan_dasar: [
    {
      id: 'alpro-4-1',
      question: 'Apa tujuan utama dari struktur kontrol percabangan (Conditional Statement / Selection) dalam pemrograman?',
      options: [
        'Mengulang suatu blok instruksi ribuan kali secara otomatis.',
        'Mengatur alur eksekusi program agar dapat memilih blok perintah mana yang harus dijalankan berdasarkan terpenuhi atau tidaknya suatu kondisi tertentu.',
        'Menyimpan kumpulan data sejenis di dalam array memori.',
        'Mempercepat waktu booting komputer.'
      ],
      correctAnswer: 1,
      explanation: 'Percabangan memungkinkan program membuat keputusan dinamis: jika kondisi bernilai `true`, jalankan blok A; jika `false`, jalankan blok B atau lewati.'
    },
    {
      id: 'alpro-4-2',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint nilai = 75;\nif (nilai >= 70) {\n    std::cout << "Lulus";\n}\n```\nApa yang akan dicetak oleh program?',
      options: [
        'Tidak mencetak apapun',
        'Lulus',
        'Gagal',
        'Error kompilasi'
      ],
      correctAnswer: 1,
      explanation: 'Karena nilai = 75 dan kondisi `75 >= 70` bernilai `true`, maka blok di dalam `if` dieksekusi dan mencetak "Lulus".'
    },
    {
      id: 'alpro-4-3',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint nilai = 60;\nif (nilai >= 70) {\n    std::cout << "Lulus";\n}\nstd::cout << " Selesai";\n```\nApa output yang ditampilkan di layar?',
      options: [
        'Lulus Selesai',
        'Lulus',
        ' Selesai',
        'Tidak ada output'
      ],
      correctAnswer: 2,
      explanation: 'Kondisi `60 >= 70` bernilai `false`, sehingga blok `if` dilewati. Namun baris `std::cout << " Selesai";` berada di luar blok `if`, sehingga tetap dieksekusi secara berurutan.'
    },
    {
      id: 'alpro-4-4',
      question: 'Kapan blok kode di dalam klausul `else` akan dieksekusi pada struktur `if - else`?',
      options: [
        'Setiap saat program pertama kali dijalankan.',
        'Hanya ketika kondisi pada pernyataan `if` di atasnya bernilai FALSE.',
        'Ketika kondisi pada pernyataan `if` bernilai TRUE.',
        'Hanya jika variabel bertipe string kosong.'
      ],
      correctAnswer: 1,
      explanation: 'Blok `else` bertindak sebagai alternatif cadangan (fallback): ia dieksekusi jika dan hanya jika kondisi `if` sebelumnya tidak terpenuhi (bernilai `false`).'
    },
    {
      id: 'alpro-4-5',
      question: 'Perhatikan kode berikut:\n```cpp\nint skor = 45;\nif (skor >= 65) {\n    std::cout << "Kompeten";\n} else {\n    std::cout << "Remedial";\n}\n```\nApa output dari program tersebut?',
      options: [
        'Kompeten',
        'Remedial',
        'Kompeten Remedial',
        'Error syntax'
      ],
      correctAnswer: 1,
      explanation: 'Karena `45 >= 65` bernilai `false`, maka alur program melompat ke blok `else` dan mencetak "Remedial".'
    },
    {
      id: 'alpro-4-6',
      question: 'Kapan struktur percabangan bertingkat `if - else if - else` digunakan?',
      options: [
        'Ketika hanya ada satu pilihan kondisi di seluruh program.',
        'Ketika terdapat lebih dari dua alternatif kondisi yang saling eksklusif (multi-cabang).',
        'Hanya ketika menghubungkan database ke server web.',
        'Ketika ingin mengulang instruksi tanpa henti.'
      ],
      correctAnswer: 1,
      explanation: 'Struktur `if - else if - else` dirancang untuk menguji serangkaian kondisi bertingkat secara berurutan dari atas ke bawah hingga ditemukan kondisi pertama yang bernilai `true`.'
    },
    {
      id: 'alpro-4-7',
      question: 'Perhatikan potongan kode penentuan grade nilai berikut:\n```cpp\nint nilai = 85;\nif (nilai >= 90) {\n    std::cout << "A";\n} else if (nilai >= 80) {\n    std::cout << "B";\n} else if (nilai >= 70) {\n    std::cout << "C";\n} else {\n    std::cout << "D";\n}\n```\nApa grade yang dicetak untuk nilai 85?',
      options: [
        'A',
        'B',
        'C',
        'B dan C'
      ],
      correctAnswer: 1,
      explanation: 'Pengecekan 1: `85 >= 90` -> false. Pengecekan 2: `85 >= 80` -> true! Program langsung mencetak "B" dan keluar dari seluruh struktur percabangan tanpa mengecek kondisi di bawahnya.'
    },
    {
      id: 'alpro-4-8',
      question: 'Apa akibatnya jika pemrogram lupa menulis kurung kurawal `{ }` pada pernyataan `if` di C++ yang memiliki lebih dari satu baris instruksi?',
      options: [
        'Compiler otomatis memasangkan kurung kurawal untuk seluruh baris.',
        'Hanya baris instruksi pertama persis setelah if yang dianggap bagian dari kondisi if, sedangkan baris berikutnya akan selalu dieksekusi terlepas kondisi true/false.',
        'Program akan selalu menampilkan pesan error runtime.',
        'Semua variabel di bawahnya otomatis bernilai nol.'
      ],
      correctAnswer: 1,
      explanation: 'Ini adalah bug klasik pemula ("dangling statement"). Tanpa kurung kurawal `{ }`, pernyataan `if` hanya mengontrol tepat SATU pernyataan berikutnya. Baris kedua dan seterusnya akan dieksekusi tanpa syarat!'
    },
    {
      id: 'alpro-4-9',
      question: 'Apa yang dimaksud dengan "Nested if" (Percabangan Bersarang)?',
      options: [
        'Struktur `if` yang diletakkan di dalam blok pernyataan `if` atau `else` lainnya.',
        'Dua pernyataan `if` yang ditulis di file yang berbeda.',
        'Pernyataan `if` yang tidak memiliki kondisi boolean.',
        'Pernyataan `if` yang otomatis menjadi perulangan while.'
      ],
      correctAnswer: 0,
      explanation: 'Nested if adalah percabangan bersarang, di mana suatu kondisi hanya akan dicek setelah kondisi pada `if` terluar berhasil dipenuhi (`true`).'
    },
    {
      id: 'alpro-4-10',
      question: 'Perhatikan kode bersarang berikut:\n```cpp\nint umur = 20;\nbool punyaSIM = false;\nif (umur >= 17) {\n    if (punyaSIM) {\n        std::cout << "Boleh Mengemudi";\n    } else {\n        std::cout << "Wajib Buat SIM Dulu";\n    }\n} else {\n    std::cout << "Belum Cukup Umur";\n}\n```\nApa output yang dihasilkan?',
      options: [
        'Boleh Mengemudi',
        'Wajib Buat SIM Dulu',
        'Belum Cukup Umur',
        'Tidak ada output'
      ],
      correctAnswer: 1,
      explanation: 'If terluar: `umur >= 17` (20 >= 17) bernilai `true`. Program masuk ke blok dalam. If dalam: `punyaSIM` bernilai `false`, sehingga melompat ke else dalam dan mencetak "Wajib Buat SIM Dulu".'
    },
    {
      id: 'alpro-4-11',
      question: 'Kode bersarang pada soal sebelumnya dapat disederhanakan tanpa nested if untuk mencetak "Boleh Mengemudi" menggunakan operator logika apa?',
      options: [
        '`if (umur >= 17 || punyaSIM)`',
        '`if (umur >= 17 && punyaSIM)`',
        '`if (umur >= 17 != punyaSIM)`',
        '`if (!umur >= 17)`'
      ],
      correctAnswer: 1,
      explanation: 'Seseorang boleh mengemudi hanya jika usianya sudah cukup (>= 17) DAN ia memiliki SIM. Kedua syarat wajib terpenuhi, sehingga operator logika AND (`&&`) adalah penyederhanaan yang ideal.'
    },
    {
      id: 'alpro-4-12',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint angka = 10;\nif (angka = 0) {\n    std::cout << "Nol";\n} else {\n    std::cout << "Bukan Nol";\n}\n```\nApa yang akan dicetak, dan mengapa?',
      options: [
        '"Nol", karena angka bernilai 0.',
        '"Bukan Nol", karena ekspresi `angka = 0` menetapkan nilai 0 ke variabel angka, dan nilai 0 dievaluasi sebagai boolean false dalam kondisi if.',
        'Error kompilasi karena tanda sama dengan hanya satu.',
        'Program mengalami crash seketika.'
      ],
      correctAnswer: 1,
      explanation: 'Karena menggunakan operator penugasan tunggal `=`, nilai variabel `angka` diubah menjadi 0. Dalam C/C++, angka 0 bermakna `false`, sehingga blok `else` yang dieksekusi dan mencetak "Bukan Nol"!'
    },
    {
      id: 'alpro-4-13',
      question: 'Perhatikan kode berikut:\n```cpp\nint x = 5;\nif (x > 3)\n    if (x > 10)\n        std::cout << "Besar";\nelse\n    std::cout << "Kecil";\n```\nBerdasarkan aturan tata bahasa C++ (dangling else), bagian `else` tersebut berpasangan dengan `if` yang mana?',
      options: [
        'Berpasangan dengan `if (x > 3)` terluar.',
        'Berpasangan dengan `if (x > 10)` terdekat.',
        'Tidak berpasangan dengan if manapun.',
        'Menyebabkan error kompilasi.'
      ],
      correctAnswer: 1,
      explanation: 'Aturan "Dangling Else": jika tidak ada kurung kurawal, klausul `else` selalu berpasangan dengan `if` terdekat sebelumnya (yaitu `if (x > 10)`). Karena `x > 3` true dan `x > 10` false, program mencetak "Kecil".'
    },
    {
      id: 'alpro-4-14',
      question: 'Perhatikan kode berikut:\n```cpp\nint saldo = 50000;\nint tarik = 70000;\nif (tarik <= saldo) {\n    saldo -= tarik;\n    std::cout << "Penarikan Berhasil";\n} else {\n    std::cout << "Saldo Tidak Mencukupi";\n}\n```\nBerapakah sisa saldo akhir setelah kode dijalankan?',
      options: [
        '-20000',
        '50000 (karena penarikan ditolak oleh kondisi percabangan)',
        '70000',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Kondisi `tarik <= saldo` (`70000 <= 50000`) bernilai `false`, sehingga pengurangan `saldo -= tarik` tidak pernah dijalankan. Saldo tetap utuh 50000.'
    },
    {
      id: 'alpro-4-15',
      question: 'Pada struktur `if - else if - else`, apakah wajib menyertakan blok `else` penutup di akhir?',
      options: [
        'Wajib, jika tidak ada else maka compiler akan menolak kode.',
        'Tidak wajib, blok `else` bersifat opsional (jika tidak ada kondisi yang terpenuhi dan tidak ada else, program langsung melanjutkan instruksi berikutnya).',
        'Wajib hanya jika jumlah else if lebih dari 5.',
        'Wajib hanya pada komputer 64-bit.'
      ],
      correctAnswer: 1,
      explanation: 'Blok `else` bersifat opsional. Jika ditiadakan dan tidak ada satupun kondisi `if` maupun `else if` yang bernilai true, maka seluruh struktur tersebut dilewati begitu saja.'
    },
    {
      id: 'alpro-4-16',
      question: 'Perhatikan potongan kode C++:\n```cpp\nint a = 10, b = 20;\nint maks = (a > b) ? a : b;\n```\nOperator apakah `? :` di atas?',
      options: [
        'Operator Aritmatika modulo.',
        'Operator Ternary (Bentuk ringkas percabangan if-else inline).',
        'Operator Pointer memori.',
        'Operator Logika AND.'
      ],
      correctAnswer: 1,
      explanation: 'Operator `? :` disebut operator ternary (kondisional inline): `(kondisi) ? nilai_jika_true : nilai_jika_false`. Kode tersebut ekuivalen dengan mencari nilai terbesar antara a dan b.'
    },
    {
      id: 'alpro-4-17',
      question: 'Perhatikan kode berikut:\n```cpp\nint x = 12;\nif (x % 2 == 0) {\n    std::cout << "Genap";\n} else {\n    std::cout << "Ganjil";\n}\n```\nBagaimana algoritma di atas menentukan bilangan genap atau ganjil?',
      options: [
        'Dengan membagi x dengan 2 lalu melihat hasil pecahannya.',
        'Dengan memeriksa sisa pembagian x dengan 2; jika sisa baginya adalah 0 (`x % 2 == 0`), maka angka tersebut adalah bilangan genap.',
        'Dengan menjumlahkan x dengan 2.',
        'Dengan mengonversi x menjadi karakter string.'
      ],
      correctAnswer: 1,
      explanation: 'Bilangan genap adalah bilangan bulat yang habis dibagi 2 (sisa bagi modulo `% 2` sama dengan nol). Jika bersisa 1, maka bilangan tersebut adalah ganjil.'
    },
    {
      id: 'alpro-4-18',
      question: 'Perhatikan potongan kode:\n```cpp\nbool status = false;\nif (!status) {\n    std::cout << "Offline";\n} else {\n    std::cout << "Online";\n}\n```\nApa yang akan ditampilkan oleh program?',
      options: [
        'Offline',
        'Online',
        'Error logika',
        'Tidak ada output'
      ],
      correctAnswer: 0,
      explanation: 'Variabel `status` bernilai `false`. Karena dinegasikan dengan operator `!` (`!false`), kondisi bernilai `true`, sehingga blok `if` dijalankan dan mencetak "Offline".'
    },
    {
      id: 'alpro-4-19',
      question: 'Perhatikan kode penentuan diskon belanja:\n```cpp\nint total = 120000;\nbool member = false;\nint diskon = 0;\nif (total >= 100000 || member) {\n    diskon = 10;\n}\n```\nBerapakah nilai akhir variabel `diskon`?',
      options: [
        '0',
        '10 (karena total >= 100000 bernilai true meskipun bukan member)',
        '20',
        '5'
      ],
      correctAnswer: 1,
      explanation: 'Operator yang digunakan adalah OR (`||`). Syarat `total >= 100000` (`120000 >= 100000`) sudah terpenuhi (`true`), sehingga kondisi keseluruhan bernilai `true` dan diskon diisi 10.'
    },
    {
      id: 'alpro-4-20',
      question: 'Manakah praktik koding percabangan yang BAIK (Clean Code) ketika menangani banyak kondisi logika?',
      options: [
        'Membuat nested if bersarang hingga 10 tingkat ke dalam agar terlihat rumit.',
        'Menyederhanakan kondisi menggunakan operator boolean yang jelas, atau membuat fungsi validasi terpisah untuk menghindari "Pyramid of Doom".',
        'Tidak pernah menggunakan kurung kurawal sama sekali.',
        'Menghindari komentar penjelasan pada kondisi if.'
      ],
      correctAnswer: 1,
      explanation: 'Sarang percabangan yang terlalu dalam (*deeply nested if*) disebut "Pyramid of Doom" yang membuat kode sulit dibaca dan rawan bug. Praktik terbaik adalah menyederhanakan kondisi dengan operator boolean atau menggunakan *guard clauses*.'
    }
  ],

  perulangan_dasar: [
    {
      id: 'alpro-5-1',
      question: 'Apa tujuan utama dari struktur kontrol perulangan (Looping / Repetition) dalam pemrograman?',
      options: [
        'Mengeksekusi sekumpulan instruksi kode yang sama secara berulang-ulang selama suatu kondisi tertentu masih terpenuhi.',
        'Menghapus baris kode yang salah ketik secara otomatis.',
        'Membagi kapasitas memori RAM menjadi dua bagian.',
        'Membuat jendela antarmuka aplikasi menjadi transparan.'
      ],
      correctAnswer: 0,
      explanation: 'Perulangan memungkinkan komputer mengotomasi tugas berulang (seperti mencetak angka 1 sampai 1000 atau memproses ribuan data) secara efisien tanpa harus mengetik kode yang sama berulang kali.'
    },
    {
      id: 'alpro-5-2',
      question: 'Tiga komponen mutlak apakah yang WAJIB ada dalam setiap struktur perulangan yang terkontrol?',
      options: [
        'Inisialisasi (titik awal), Kondisi Terminasi (syarat berhenti), dan Update/Increment (pengubah nilai).',
        'Nama file, Ekstensi compiler, dan Ukuran monitor.',
        'Keyboard, Mouse, dan CPU clock.',
        'Operator string, Integer overflow, dan Floating point.'
      ],
      correctAnswer: 0,
      explanation: 'Setiap loop yang benar wajib memiliki: (1) Inisialisasi awal variabel loop, (2) Kondisi pengecekan kelanjutan, dan (3) Pembaruan (increment/decrement) nilai variabel agar kondisi terminasi akhirnya tercapai.'
    },
    {
      id: 'alpro-5-3',
      question: 'Apa yang dimaksud dengan perulangan `while` dalam pemrograman?',
      options: [
        'Perulangan tipe entry-controlled di mana kondisi diperiksa di AWAL sebelum blok kode diizinkan berjalan.',
        'Perulangan yang hanya bisa berjalan tepat satu kali saja lalu berhenti.',
        'Perulangan yang tidak memerlukan variabel sama sekali.',
        'Perulangan yang hanya bisa digunakan untuk bilangan pecahan.'
      ],
      correctAnswer: 0,
      explanation: 'Loop `while` adalah entry-controlled loop: kondisi diuji terlebih dahulu di gerbang awal. Jika sejak awal kondisi sudah bernilai `false`, maka blok kode di dalamnya TIDAK AKAN PERNAH dieksekusi sama sekali (0 kali).'
    },
    {
      id: 'alpro-5-4',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint i = 1;\nwhile (i <= 4) {\n    std::cout << i << " ";\n    i++;\n}\n```\nApa output yang dihasilkan oleh program tersebut?',
      options: [
        '1 2 3 4 ',
        '1 2 3 ',
        '1 2 3 4 5 ',
        'Program berjalan tanpa henti'
      ],
      correctAnswer: 0,
      explanation: 'Iterasi 1: cetak 1, i jadi 2. Iterasi 2: cetak 2, i jadi 3. Iterasi 3: cetak 3, i jadi 4. Iterasi 4: cetak 4, i jadi 5. Pada saat i = 5, kondisi `5 <= 4` bernilai false, perulangan berhenti. Output: "1 2 3 4 ".'
    },
    {
      id: 'alpro-5-5',
      question: 'Perhatikan kode berikut:\n```cpp\nint i = 10;\nwhile (i < 5) {\n    std::cout << "Halo";\n    i++;\n}\n```\nBerapa kali kata "Halo" akan dicetak ke layar?',
      options: [
        '10 kali',
        '5 kali',
        '0 kali (tidak dicetak sama sekali)',
        '1 kali'
      ],
      correctAnswer: 2,
      explanation: 'Variabel `i` bernilai 10. Karena kondisi awal `10 < 5` langsung bernilai `false`, maka blok loop `while` langsung dilewati tanpa pernah dijalankan sama sekali (0 kali).'
    },
    {
      id: 'alpro-5-6',
      question: 'Apa yang dimaksud dengan "Infinite Loop" (Perulangan Tak Hingga)?',
      options: [
        'Kondisi di mana perulangan berjalan sangat cepat hingga tidak terlihat di layar.',
        'Situasi galat di mana kondisi terminasi perulangan selalu bernilai TRUE, sehingga program berputar terus tanpa pernah berhenti.',
        'Perulangan yang memiliki batas berhenti hingga 1 miliar iterasi.',
        'Fitur keamanan komputer untuk mencegah pembajakan perangkat lunak.'
      ],
      correctAnswer: 1,
      explanation: 'Infinite Loop adalah bug serius di mana loop tidak memiliki mekanisme untuk mencapai kondisi `false` (misal programmer lupa menuliskan `i++`), menyebabkan program macet, memori penuh, atau prosesor bekerja 100% tanpa henti.'
    },
    {
      id: 'alpro-5-7',
      question: 'Perhatikan potongan kode yang mengandung bug berikut:\n```cpp\nint i = 1;\nwhile (i <= 5) {\n    std::cout << i << " ";\n    // Lupa menuliskan i++;\n}\n```\nApa yang akan terjadi saat kode di atas dieksekusi?',
      options: [
        'Mencetak angka 1 satu kali lalu selesai.',
        'Mencetak angka 1 terus-menerus tanpa henti (Infinite Loop) karena nilai i selamanya bernilai 1.',
        'Compiler menolak kode karena ada baris komentar.',
        'Mencetak angka 1 sampai 5 secara otomatis.'
      ],
      correctAnswer: 1,
      explanation: 'Karena nilai `i` tidak pernah ditambah (`i++`), nilainya akan selamanya 1. Akibatnya kondisi `1 <= 5` selalu bernilai `true`, memicu Infinite Loop yang mencetak angka 1 tanpa batas.'
    },
    {
      id: 'alpro-5-8',
      question: 'Apa perbedaan mendasar antara perulangan `while` dan perulangan `do-while`?',
      options: [
        '`while` memeriksa kondisi di awal; `do-while` memeriksa kondisi di akhir sehingga DIJAMIN dieksekusi minimal 1 kali.',
        '`do-while` memeriksa kondisi di awal; `while` di akhir.',
        '`while` hanya untuk angka genap, sedangkan `do-while` hanya untuk angka ganjil.',
        'Tidak ada perbedaan, keduanya adalah kata kunci sinonim.'
      ],
      correctAnswer: 0,
      explanation: 'Perulangan `do-while` adalah exit-controlled loop. Blok kode dijalankan terlebih dahulu satu kali sebelum kondisi dievaluasi di akhir. Oleh karena itu, loop `do-while` selalu berjalan minimal 1 kali, bahkan jika kondisinya bernilai false sejak awal.'
    },
    {
      id: 'alpro-5-9',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint x = 100;\ndo {\n    std::cout << "Eksekusi";\n} while (x < 10);\n```\nBerapa kali kata "Eksekusi" akan dicetak ke layar?',
      options: [
        '0 kali',
        'Tepat 1 kali (karena blok do dijalankan sebelum pengecekan kondisi di akhir)',
        '10 kali',
        'Infinite loop'
      ],
      correctAnswer: 1,
      explanation: 'Pada `do-while`, blok di dalam `do { ... }` langsung dieksekusi pertama kali, mencetak "Eksekusi". Baru kemudian kondisi `100 < 10` dicek di akhir. Karena bernilai `false`, perulangan langsung berhenti. Total eksekusi tepat 1 kali.'
    },
    {
      id: 'alpro-5-10',
      question: 'Kapan perulangan `do-while` paling ideal digunakan dalam aplikasi nyata?',
      options: [
        'Menghitung jumlah data dalam database yang kosong.',
        'Menampilkan menu interaktif kepada pengguna yang minimal harus tampil satu kali di layar sebelum mengecek pilihan pengguna untuk keluar.',
        'Mencari data pada array yang belum diurutkan.',
        'Mengonversi gambar menjadi format PDF.'
      ],
      correctAnswer: 1,
      explanation: 'Kasus paling umum untuk `do-while` adalah menu interaktif (seperti menu game atau ATM): program wajib menampilkan menu ke layar minimal 1 kali, meminta input pilihan pengguna, lalu mengulang jika pengguna belum memilih opsi "Keluar".'
    },
    {
      id: 'alpro-5-11',
      question: 'Perhatikan potongan kode C++ berikut:\n```cpp\nint total = 0;\nint i = 1;\nwhile (i <= 3) {\n    total += i;\n    i++;\n}\n```\nBerapakah nilai akhir dari variabel `total` dan variabel `i` setelah loop selesai?',
      options: [
        'total = 6, i = 4',
        'total = 3, i = 3',
        'total = 6, i = 3',
        'total = 0, i = 4'
      ],
      correctAnswer: 0,
      explanation: 'Iterasi 1 (i=1): total = 0 + 1 = 1, i jadi 2. Iterasi 2 (i=2): total = 1 + 2 = 3, i jadi 3. Iterasi 3 (i=3): total = 3 + 3 = 6, i jadi 4. Saat i = 4, kondisi `4 <= 3` bernilai false, loop berhenti. Maka `total = 6` dan `i = 4`.'
    },
    {
      id: 'alpro-5-12',
      question: 'Apa fungsi dari pernyataan perintah `break;` di dalam suatu perulangan?',
      options: [
        'Menghentikan jalannya seluruh program komputer secara permanen.',
        'Menghentikan dan keluar dari perulangan seketika itu juga, lalu melanjutkan eksekusi kode setelah loop.',
        'Melompati satu iterasi saat ini dan langsung menuju ke iterasi berikutnya.',
        'Menghapus variabel counter loop dari memori.'
      ],
      correctAnswer: 1,
      explanation: 'Pernyataan `break` memaksa alur program keluar secara mendadak dari blok loop bersangkutan tanpa menyelesaikan iterasi yang tersisa.'
    },
    {
      id: 'alpro-5-13',
      question: 'Perhatikan kode dengan perintah `break` berikut:\n```cpp\nint i = 1;\nwhile (i <= 10) {\n    if (i == 4) {\n        break;\n    }\n    std::cout << i << " ";\n    i++;\n}\n```\nApa output yang dihasilkan?',
      options: [
        '1 2 3 4 5 6 7 8 9 10 ',
        '1 2 3 ',
        '1 2 3 4 ',
        '4 '
      ],
      correctAnswer: 1,
      explanation: 'Ketika i = 1, 2, 3: dicetak "1 2 3 ". Saat i = 4, kondisi `if (i == 4)` bernilai true sehingga perintah `break;` dipanggil. Loop langsung dihentikan sebelum mencetak angka 4. Output: "1 2 3 ".'
    },
    {
      id: 'alpro-5-14',
      question: 'Apa fungsi dari pernyataan perintah `continue;` di dalam suatu perulangan?',
      options: [
        'Menghentikan seluruh perulangan sama persis seperti break.',
        'Melompati sisa instruksi pada iterasi saat ini dan langsung melompat ke evaluasi kondisi iterasi berikutnya.',
        'Mengulangi instruksi dari baris pertama file kode sumber.',
        'Mempercepat kecepatan kipas pendingin prosesor.'
      ],
      correctAnswer: 1,
      explanation: 'Pernyataan `continue` tidak menghentikan seluruh perulangan, melainkan hanya melewati (skip) sisa kode di bawahnya pada putaran saat ini, dan langsung melompat ke putaran/iterasi berikutnya.'
    },
    {
      id: 'alpro-5-15',
      question: 'Perhatikan kode dengan perulangan mundur (decrement) berikut:\n```cpp\nint hitung = 3;\nwhile (hitung > 0) {\n    std::cout << hitung << " ";\n    hitung--;\n}\n```\nApa output dari program tersebut?',
      options: [
        '3 2 1 ',
        '3 2 1 0 ',
        '0 1 2 3 ',
        'Infinite loop'
      ],
      correctAnswer: 0,
      explanation: 'Loop dimulai dari 3, mencetak 3 lalu dikurangi menjadi 2, mencetak 2 lalu dikurangi jadi 1, mencetak 1 lalu dikurangi jadi 0. Pada hitung = 0, kondisi `0 > 0` bernilai false. Output: "3 2 1 ".'
    },
    {
      id: 'alpro-5-16',
      question: 'Bagaimana perulangan `for` konseptual dihubungkan dengan perulangan `while`?',
      options: [
        'Perulangan for adalah bentuk penulisan ringkas dan terpadu dari while, di mana inisialisasi, kondisi, dan update ditulis sekaligus dalam satu baris header: `for (inisialisasi; kondisi; update)`.',
        'for tidak bisa melakukan perhitungan matematika, sedangkan while bisa.',
        'for hanya digunakan pada perulangan tanpa henti (infinite).',
        'Keduanya menggunakan mekanisme perangkat keras yang sama sekali berbeda di motherboard.'
      ],
      correctAnswer: 0,
      explanation: 'Setiap perulangan `for` pada dasarnya dapat diubah menjadi `while` dan sebaliknya. Perulangan `for` merangkum ketiga komponen loop ke dalam satu baris deklarasi yang rapi.'
    },
    {
      id: 'alpro-5-17',
      question: 'Perhatikan potongan kode perulangan bersarang (Nested Loop) sederhana:\n```cpp\nint i = 1;\nwhile (i <= 2) {\n    int j = 1;\n    while (j <= 3) {\n        std::cout << "*";\n        j++;\n    }\n    i++;\n}\n```\nBerapa total simbol tanda bintang `*` yang dicetak ke layar?',
      options: [
        '5 bintang (2 + 3)',
        '6 bintang (2 baris x 3 kolom)',
        '3 bintang',
        '2 bintang'
      ],
      correctAnswer: 1,
      explanation: 'Outer loop berjalan sebanyak 2 kali (i = 1, 2). Untuk setiap putaran outer loop, inner loop berjalan sebanyak 3 kali (j = 1, 2, 3). Total eksekusi bintang adalah $2 \\times 3 = 6$ kali.'
    },
    {
      id: 'alpro-5-18',
      question: 'Perhatikan kode berikut:\n```cpp\nint x = 1;\nwhile (x < 10) {\n    x *= 2;\n}\n```\nBerapakah nilai akhir variabel `x` setelah loop selesai?',
      options: [
        '10',
        '16 (karena 1 -> 2 -> 4 -> 8 -> 16)',
        '8',
        '32'
      ],
      correctAnswer: 1,
      explanation: 'Nilai x berlipat ganda: mula-mula 1. Putaran 1: x = 2 (<10). Putaran 2: x = 4 (<10). Putaran 3: x = 8 (<10). Putaran 4: x = 16. Karena `16 < 10` bernilai false, loop selesai dengan nilai akhir x = 16.'
    },
    {
      id: 'alpro-5-19',
      question: 'Pada perulangan `do-while` di bahasa C/C++, tanda baca apakah yang WAJIB diletakkan di akhir setelah tanda kurung kondisi `while (kondisi)`?',
      options: [
        'Titik dua (:)',
        'Titik koma (;)',
        'Tanda kurung kurawal penutup (})',
        'Tidak memerlukan tanda baca apapun'
      ],
      correctAnswer: 1,
      explanation: 'Sintaks resmi `do-while` diakhiri dengan titik koma: `do { ... } while (kondisi);`. Lupa menuliskan titik koma (;) di akhir akan menghasilkan syntax error saat kompilasi.'
    },
    {
      id: 'alpro-5-20',
      question: 'Manakah tips terbaik untuk menghindari galat Infinite Loop saat membuat perulangan `while`?',
      options: [
        'Jangan pernah membuat kondisi perulangan yang bernilai true.',
        'Pastikan di dalam badan loop selalu ada perintah yang mengubah nilai variabel kondisi menuju ke arah terminasi (misal increment, decrement, atau pembacaan input baru).',
        'Selalu gunakan tipe data float untuk semua variabel counter loop.',
        'Menambahkan jeda waktu sleep 10 detik di setiap baris kode.'
      ],
      correctAnswer: 1,
      explanation: 'Penyebab utama infinite loop adalah kondisi yang tidak pernah berubah menjadi false. Memastikan variabel pengontrol selalu diperbarui (update/progress) menuju kondisi terminasi adalah prinsip utama pencegahan infinite loop.'
    }
  ]
};
