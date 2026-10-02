import type { QuizQuestion } from './curriculum';

export const DASAR_PEMROGRAMAN_QUIZZES: Record<string, QuizQuestion[]> = {
  konsep_dasar: [
    {
      id: 'quiz-dasprog-1-1',
      question: 'Dalam arsitektur komputer model von Neumann, komponen apakah yang bertanggung jawab untuk mengeksekusi instruksi aritmatika dan logika dari program?',
      options: [
        'ALU (Arithmetic Logic Unit) di dalam CPU',
        'RAM (Random Access Memory)',
        'Storage Hard Disk / SSD',
        'Bus Data dan Bus Alamat'
      ],
      correctAnswer: 0,
      explanation: 'ALU (Arithmetic Logic Unit) merupakan sirkuit digital di dalam CPU yang bertugas langsung melakukan operasi perhitungan matematika (seperti penjumlahan, pengurangan) dan logika boolean (AND, OR, NOT).'
    },
    {
      id: 'quiz-dasprog-1-2',
      question: 'Apa perbedaan utama antara Compiler dan Interpreter dalam mengeksekusi kode program tingkat tinggi?',
      options: [
        'Compiler menghasilkan file biner (machine code) sekaligus sebelum program dijalankan, sedangkan Interpreter menerjemahkan baris per baris secara langsung saat runtime.',
        'Compiler hanya bisa memproses bahasa assembly, sedangkan Interpreter hanya untuk kode biner.',
        'Compiler mengeksekusi program lebih lambat daripada Interpreter saat runtime.',
        'Interpreter membutuhkan linking manual dengan linker OS sebelum dieksekusi.'
      ],
      correctAnswer: 0,
      explanation: 'Compiler (seperti GCC/Clang) menerjemahkan seluruh kode sumber menjadi file executable biner terlebih dahulu sehingga eksekusinya sangat cepat. Interpreter (seperti Python standar) membaca dan menerjemahkan baris kode satu per satu saat program berjalan.'
    },
    {
      id: 'quiz-dasprog-1-3',
      question: 'Berapa rentang nilai yang dapat ditampung oleh tipe data integer bertanda (signed 8-bit integer / char bertanda)?',
      options: [
        '-128 hingga +127',
        '0 hingga 255',
        '-256 hingga +255',
        '-32768 hingga +32767'
      ],
      correctAnswer: 0,
      explanation: 'Dengan 8 bit bertanda menggunakan representasi two\'s complement, 1 bit digunakan sebagai penanda tanda (+/-) dan 7 bit untuk nilai: rentangnya adalah -2^7 hingga (2^7 - 1), yaitu -128 hingga +127.'
    },
    {
      id: 'quiz-dasprog-1-4',
      question: 'Apa yang terjadi jika variabel unsigned 8-bit bernilai 255 ditambahkan dengan 1 (unsigned integer overflow)?',
      options: [
        'Nilainya akan berputar (wrap-around) kembali menjadi 0.',
        'Program akan langsung crash melempar Segmentation Fault.',
        'Nilainya akan berubah menjadi -128.',
        'Nilai tetap tertahan di 255 sebagai saturasi maksimal.'
      ],
      correctAnswer: 0,
      explanation: 'Pada tipe data unsigned integer, ketika batas kapasitas maksimum (255) terlampaui oleh penambahan 1, modulo 2^8 terjadi sehingga nilainya berputar (wrap around) kembali ke 0.'
    },
    {
      id: 'quiz-dasprog-1-5',
      question: 'Manakah tipe data primitif yang PALING TEPAT digunakan untuk menyimpan status lampu lalu lintas menyala (true/false) dengan efisiensi memori logis?',
      options: [
        'bool (boolean)',
        'double',
        'long long',
        'char array'
      ],
      correctAnswer: 0,
      explanation: 'Tipe data bool dirancang khusus untuk memodelkan kebenaran logika dua keadaan (true atau false).'
    },
    {
      id: 'quiz-dasprog-1-6',
      question: 'Berapakah hasil dari evaluasi ekspresi aritmatika integer di C++: 17 / 5 ?',
      options: [
        '3',
        '3.4',
        '3.0',
        '2'
      ],
      correctAnswer: 0,
      explanation: 'Dalam bahasa bertipe statis seperti C/C++/Java, pembagian antara dua bilangan bulat (integer division) akan memotong (truncate) seluruh angka di belakang koma, sehingga 17 / 5 menghasilkan 3 (bukan 3.4).'
    },
    {
      id: 'quiz-dasprog-1-7',
      question: 'Berapakah hasil dari operasi modulo: 17 % 5 ?',
      options: [
        '2',
        '3',
        '1',
        '0'
      ],
      correctAnswer: 0,
      explanation: 'Operator modulo (%) mengembalikan sisa pembagian bilangan bulat. 17 dibagi 5 adalah 3 dengan sisa 2 (17 = 5 * 3 + 2).'
    },
    {
      id: 'quiz-dasprog-1-8',
      question: 'Perhatikan potongan kode berikut: int a = 5; int b = ++a; Berapakah nilai a dan b setelah baris tersebut?',
      options: [
        'a = 6, b = 6',
        'a = 6, b = 5',
        'a = 5, b = 6',
        'a = 5, b = 5'
      ],
      correctAnswer: 0,
      explanation: 'Pre-increment (++a) menaikkan nilai a terlebih dahulu (menjadi 6), lalu mengembalikan nilai 6 tersebut untuk di-assign ke variabel b. Jadi a = 6 dan b = 6.'
    },
    {
      id: 'quiz-dasprog-1-9',
      question: 'Perhatikan potongan kode berikut: int a = 5; int b = a++; Berapakah nilai a dan b setelah baris tersebut?',
      options: [
        'a = 6, b = 5',
        'a = 6, b = 6',
        'a = 5, b = 6',
        'a = 5, b = 5'
      ],
      correctAnswer: 0,
      explanation: 'Post-increment (a++) mengembalikan nilai lama a (yaitu 5) untuk di-assign ke variabel b, baru setelah itu nilai a dinaikkan menjadi 6. Jadi a = 6 dan b = 5.'
    },
    {
      id: 'quiz-dasprog-1-10',
      question: 'Mengapa membandingkan dua bilangan floating point secara langsung dengan operator kesetaraan (misal: a == 0.3) berbahaya?',
      options: [
        'Karena representasi biner IEEE 754 tidak dapat merepresentasikan sebagian besar pecahan desimal secara eksak, sehingga timbul galat pembulatan (rounding error).',
        'Karena operator == hanya boleh digunakan untuk tipe string.',
        'Karena bilangan float selalu dikonversi menjadi integer nol saat dibandingkan.',
        'Karena CPU mematikan ALU saat operasi floating point berlangsung.'
      ],
      correctAnswer: 0,
      explanation: 'Standar IEEE 754 merepresentasikan floating point dalam basis 2 (pecahan 1/2, 1/4, 1/8, dst). Bilangan desimal seperti 0.1 atau 0.3 menghasilkan pecahan berulang biner tak hingga sehingga memiliki ketidakpresisian mikro. Solusinya adalah membandingkan selisih absolut dengan nilai toleransi epsilon: fabs(a - b) < 1e-9.'
    },
    {
      id: 'quiz-dasprog-1-11',
      question: 'Berapakah nilai dari ekspresi boolean di C++: (5 > 3) && (2 >= 7) ?',
      options: [
        'false (0)',
        'true (1)',
        'Error Kompilasi',
        'Undefined Value'
      ],
      correctAnswer: 0,
      explanation: '5 > 3 bernilai true, namun 2 >= 7 bernilai false. Operator logika AND (&&) membutuhkan KEDUA belah pihak bernilai true untuk menghasilkan true. Karena salah satunya false, hasilnya adalah false.'
    },
    {
      id: 'quiz-dasprog-1-12',
      question: 'Berapakah nilai dari ekspresi boolean: !(4 == 4) || (10 < 20) ?',
      options: [
        'true (1)',
        'false (0)',
        'Error Sintaks',
        'Null'
      ],
      correctAnswer: 0,
      explanation: '!(4 == 4) adalah !true = false. Sedangkan 10 < 20 adalah true. Operator OR (||) bernilai true jika salah satu atau kedua sisi bernilai true. false || true bernilai true.'
    },
    {
      id: 'quiz-dasprog-1-13',
      question: 'Berapakah nilai desimal dari operasi bitwise: 5 & 3 (dalam biner 5 adalah 101 dan 3 adalah 011)?',
      options: [
        '1 (biner 001)',
        '7 (biner 111)',
        '6 (biner 110)',
        '0 (biner 000)'
      ],
      correctAnswer: 0,
      explanation: 'Bitwise AND (&) membandingkan bit demi bit: bit 2 (1 & 0 = 0), bit 1 (0 & 1 = 0), bit 0 (1 & 1 = 1). Hasil biner 001 bernilai 1 dalam desimal.'
    },
    {
      id: 'quiz-dasprog-1-14',
      question: 'Operasi bitwise shift left (a << 1) pada sebuah bilangan bulat positif memiliki efek matematis yang setara dengan apa?',
      options: [
        'Mengalikan bilangan tersebut dengan 2',
        'Membagi bilangan tersebut dengan 2',
        'Menambahkan bilangan tersebut dengan 1',
        'Mengkuadratkan bilangan tersebut'
      ],
      correctAnswer: 0,
      explanation: 'Menggeser seluruh bit ke kiri sebanyak 1 posisi mengalikan bobot setiap posisi bit dengan 2, sehingga a << 1 setara dengan perkalian integer a * 2.'
    },
    {
      id: 'quiz-dasprog-1-15',
      question: 'Manakah urutan hierarki prioritas operator (operator precedence) yang BENAR dari yang paling tinggi ke paling rendah?',
      options: [
        'Tanda Kurung () -> Perkalian/Pembagian (*, /) -> Penjumlahan/Pengurangan (+, -) -> Relasional (<, >) -> Penugasan (=)',
        'Penugasan (=) -> Tanda Kurung () -> Logika (&&) -> Perkalian (*)',
        'Relasional (<) -> Penjumlahan (+) -> Perkalian (*) -> Tanda Kurung ()',
        'Logika (||) -> Relasional (==) -> Perkalian (*) -> Tanda Kurung ()'
      ],
      correctAnswer: 0,
      explanation: 'Tanda kurung () selalu dievaluasi pertama kali, diikuti operator perkalian/pembagian, kemudian penjumlahan/pengurangan, kemudian operator relasional/perbandingan, dan operator penugasan (=) memiliki prioritas paling rendah.'
    },
    {
      id: 'quiz-dasprog-1-16',
      question: 'Berapakah hasil dari evaluasi ekspresi: 4 + 6 * 2 ?',
      options: [
        '16',
        '20',
        '14',
        '12'
      ],
      correctAnswer: 0,
      explanation: 'Berdasarkan aturan precedence, perkalian (6 * 2 = 12) dikerjakan lebih dahulu daripada penjumlahan (4 + 12 = 16).'
    },
    {
      id: 'quiz-dasprog-1-17',
      question: 'Karakter \'A\' dalam tabel standar ASCII direpresentasikan oleh nilai bilangan bulat berapa?',
      options: [
        '65',
        '97',
        '48',
        '0'
      ],
      correctAnswer: 0,
      explanation: 'Dalam tabel ASCII: huruf kapital \'A\' bernilai 65 (hingga \'Z\' = 90), huruf kecil \'a\' bernilai 97 (hingga \'z\' = 122), dan karakter angka \'0\' bernilai 48.'
    },
    {
      id: 'quiz-dasprog-1-18',
      question: 'Apa fungsi dari kata kunci "const" saat mendeklarasikan variabel: const double PI = 3.14159; ?',
      options: [
        'Menjadikan variabel sebagai konstanta read-only yang nilainya tidak dapat diubah lagi setelah inisialisasi.',
        'Membuat variabel tersimpan di memori cache L1 selamanya.',
        'Mengonversi bilangan floating point menjadi integer otomatis.',
        'Mengizinkan variabel diakses dari jaringan internet.'
      ],
      correctAnswer: 0,
      explanation: 'Kata kunci const (constant) memberitahu compiler bahwa nilai variabel tersebut bersifat tetap (immutable/read-only). Jika program mencoba mengubah nilai PI di baris berikutnya, compiler akan melempar error kompilasi.'
    },
    {
      id: 'quiz-dasprog-1-19',
      question: 'Apa istilah untuk konversi tipe data otomatis oleh compiler (misalnya integer 5 otomatis menjadi 5.0 saat dijumlahkan dengan double 2.5)?',
      options: [
        'Implicit Type Casting (Type Coercion / Promotion)',
        'Explicit Type Casting (C-style cast)',
        'Polymorphism',
        'Garbage Collection'
      ],
      correctAnswer: 0,
      explanation: 'Implicit type casting (atau type promotion) adalah konversi tipe data yang dilakukan secara otomatis oleh compiler ke tipe data yang memiliki rentang/presisi lebih lebar tanpa kehilangan informasi.'
    },
    {
      id: 'quiz-dasprog-1-20',
      question: 'Perhatikan kode: double x = 9.85; int y = (int)x; Berapakah nilai y setelah dieksekusi?',
      options: [
        '9',
        '10',
        '9.85',
        '0'
      ],
      correctAnswer: 0,
      explanation: 'Explicit casting (int)x melakukan pemotongan (truncation) desimal ke arah nol, sehingga bagian pecahan .85 dibuang dan variabel y bernilai 9 (bukan pembulatan ke 10).'
    }
  ],

  percabangan: [
    {
      id: 'quiz-dasprog-2-1',
      question: 'Dalam struktur percabangan "if (kondisi)", kapan blok kode di dalam if akan dieksekusi?',
      options: [
        'Hanya jika nilai ekspresi kondisi bernilai true (atau bukan nol)',
        'Hanya jika nilai ekspresi kondisi bernilai false (atau nol)',
        'Selalu dieksekusi tepat satu kali terlepas dari kondisi',
        'Hanya dieksekusi jika memori CPU sedang kosong'
      ],
      correctAnswer: 0,
      explanation: 'Blok instruksi di dalam pernyataan if hanya akan dieksekusi oleh runtime jika ekspresi boolean di dalam tanda kurung dievaluasi dan bernilai true (pada C/C++, nilai integer bukan nol dianggap true).'
    },
    {
      id: 'quiz-dasprog-2-2',
      question: 'Perhatikan kode berikut: int x = 10; if (x = 5) { cout << "Satu"; } else { cout << "Dua"; } Apa output yang tercetak?',
      options: [
        'Satu',
        'Dua',
        'Error Kompilasi',
        'Tidak mencetak apapun'
      ],
      correctAnswer: 0,
      explanation: 'Ini adalah jebakan klasik! Penulisan (x = 5) menggunakan operator penugasan (=) BUKAN operator perbandingan (==). Ekspresi x = 5 menetapkan nilai 5 ke x dan mengembalikan nilai 5. Karena 5 adalah integer bukan nol, kondisi dievaluasi sebagai true, sehingga mencetak "Satu".'
    },
    {
      id: 'quiz-dasprog-2-3',
      question: 'Kapan bagian blok "else" pada konstruksi "if - else" akan dieksekusi?',
      options: [
        'Ketika kondisi pada if bernilai false',
        'Ketika kondisi pada if bernilai true',
        'Bersamaan dengan blok if',
        'Ketika terjadi overflow memori'
      ],
      correctAnswer: 0,
      explanation: 'Blok else bertindak sebagai jalur alternatif default yang hanya dieksekusi ketika kondisi boolean pada if bernilai false.'
    },
    {
      id: 'quiz-dasprog-2-4',
      question: 'Berapakah nilai yang dihasilkan dari ekspresi ternary: int hasil = (score >= 70) ? 100 : 50; jika nilai score = 65?',
      options: [
        '50',
        '100',
        '70',
        '65'
      ],
      correctAnswer: 0,
      explanation: 'Operator ternary mengevaluasi (kondisi) ? nilai_jika_true : nilai_jika_false. Karena 65 >= 70 bernilai false, ekspresi mengambil nilai setelah tanda titik dua (:), yaitu 50.'
    },
    {
      id: 'quiz-dasprog-2-5',
      question: 'Apa yang dimaksud dengan fenomena "Short-Circuit Evaluation" pada operator logika AND (kondisiA && kondisiB)?',
      options: [
        'Jika kondisiA bernilai false, maka kondisiB TIDAK AKAN dievaluasi sama sekali karena hasil akhir sudah pasti false.',
        'Jika kondisiA bernilai true, maka kondisiB langsung dibatalkan.',
        'Kedua kondisi selalu dievaluasi bersamaan secara paralel oleh dua core CPU.',
        'Terjadinya korsleting listrik pada motherboard saat kondisi salah.'
      ],
      correctAnswer: 0,
      explanation: 'Dalam short-circuit evaluation, pada operasi AND (&&), jika operand pertama false, hasil akhir mustahil bernilai true. Oleh karena itu kompiler melewatkan evaluasi operand kedua. Ini sering dimanfaatkan untuk mencegah runtime crash, misal: if (ptr != nullptr && ptr->val > 0).'
    },
    {
      id: 'quiz-dasprog-2-6',
      question: 'Perhatikan kode: int a = 0; if (false && (++a > 0)) {} Berapakah nilai a setelah baris tersebut?',
      options: [
        '0',
        '1',
        'Undefined',
        '-1'
      ],
      correctAnswer: 0,
      explanation: 'Akibat Short-Circuit Evaluation pada operator &&, karena sisi kiri sudah bernilai false, ekspresi (++a > 0) di sisi kanan TIDAK PERNAH DIEKSEKUSI. Akibatnya, nilai a tetap 0.'
    },
    {
      id: 'quiz-dasprog-2-7',
      question: 'Pada operator logika OR (kondisiA || kondisiB), kapan kondisiB TIDAK AKAN dievaluasi?',
      options: [
        'Ketika kondisiA bernilai true',
        'Ketika kondisiA bernilai false',
        'Ketika kondisiA menghasilkan error',
        'KondisiB selalu dievaluasi apapun yang terjadi'
      ],
      correctAnswer: 0,
      explanation: 'Pada operator OR (||), jika operand pertama sudah bernilai true, maka keseluruhan ekspresi sudah pasti true terlepas dari apa pun nilai operand kedua. Oleh karena itu, kondisiB di-short-circuit (dilewati).'
    },
    {
      id: 'quiz-dasprog-2-8',
      question: 'Apa fungsi dari pernyataan "break" di dalam setiap blok "case" pada struktur switch-case?',
      options: [
        'Menghentikan eksekusi struktur switch dan langsung melompat keluar ke baris kode setelah kurung kurawal tutup switch.',
        'Menghapus variabel yang sedang diperiksa dari memori RAM.',
        'Mengulang kembali pemeriksaan switch dari awal case pertama.',
        'Memaksa CPU beralih ke mode hemat daya.'
      ],
      correctAnswer: 0,
      explanation: 'Statement break memerintahkan alur program untuk keluar dari blok switch. Tanpa break, alur program akan bocor dan mengeksekusi case di bawahnya tanpa mempedulikan kondisinya (fallthrough).'
    },
    {
      id: 'quiz-dasprog-2-9',
      question: 'Apa yang terjadi jika Anda lupa menuliskan "break" pada suatu case di dalam switch-case (Fallthrough behavior)?',
      options: [
        'Eksekusi akan terus berlanjut ke pernyataan case berikutnya meskipun nilai case berikutnya tidak cocok.',
        'Program akan berhenti dengan error kompilasi seketika.',
        'Kompiler otomatis menyisipkan nilai default.',
        'Variabel yang diuji akan di-reset menjadi 0.'
      ],
      correctAnswer: 0,
      explanation: 'Ketiadaan statement break memicu perilaku Fallthrough: program akan mengeksekusi semua baris kode di case berikutnya sampai menemukan break atau mencapai akhir blok switch.'
    },
    {
      id: 'quiz-dasprog-2-10',
      question: 'Tipe data apakah yang DIIZINKAN untuk diuji di dalam pernyataan "switch(ekspresi)" pada bahasa C/C++ standar?',
      options: [
        'Tipe data integral (int, char, enum, short, long)',
        'Tipe data floating point (float dan double)',
        'Tipe data objek string bebas (seperti kalimat panjang)',
        'Tipe data pointer ke file'
      ],
      correctAnswer: 0,
      explanation: 'Struktur switch standar di C/C++ dirancang bekerja dengan jump table pada tingkat assembly, sehingga hanya menerima tipe integral (bilangan bulat, karakter, dan enumerasi). Tipe float, double, atau objek dinamis tidak diizinkan.'
    },
    {
      id: 'quiz-dasprog-2-11',
      question: 'Apa kegunaan dari label "default:" pada pernyataan switch-case?',
      options: [
        'Dijalankan jika tidak ada satupun case yang nilainya cocok dengan variabel yang diuji.',
        'Merupakan case yang selalu dieksekusi pertama kali di awal.',
        'Digunakan untuk mendeklarasikan nama fungsi utama program.',
        'Digunakan untuk mengatur nilai awal variabel menjadi nol.'
      ],
      correctAnswer: 0,
      explanation: 'Label default bertindak serupa dengan else pada rantai if-else: ia menjadi tempat penampungan alur jika seluruh case spesifik di atasnya tidak ada yang memenuhi syarat kecocokan.'
    },
    {
      id: 'quiz-dasprog-2-12',
      question: 'Apa yang dimaksud dengan "Dangling Else Problem" dalam pemrograman?',
      options: [
        'Ambiguitas ketika sebuah pernyataan else tidak memiliki tanda kurung kurawal {}, sehingga secara semantik terikat ke if terdekat sebelumnya.',
        'Kondisi ketika else tidak memiliki blok if sama sekali.',
        'Error memori akibat pointer yang menunjuk ke else.',
        'Percabangan yang tidak pernah dieksekusi karena kondisi mustahil.'
      ],
      correctAnswer: 0,
      explanation: 'Dangling else terjadi pada nested if tanpa kurung kurawal {}. Berdasarkan aturan bahasa C/C++/Java, klausul else akan selalu dipasangkan dengan if terdekat yang belum memiliki else, yang sering kali berbeda dari intuisi visual indentasi programmer.'
    },
    {
      id: 'quiz-dasprog-2-13',
      question: 'Perhatikan kode: int val = 85; if (val >= 90) cout << "A"; else if (val >= 80) cout << "B"; else if (val >= 70) cout << "C"; else cout << "D"; Apa outputnya?',
      options: [
        'B',
        'BC',
        'BCD',
        'A'
      ],
      correctAnswer: 0,
      explanation: 'Pada if-else-if ladder, kondisi diuji dari atas ke bawah. Kondisi val >= 90 bernilai false. Kondisi berikutnya val >= 80 (85 >= 80) bernilai true, sehingga mencetak "B" lalu langsung melompat keluar dari seluruh struktur percabangan.'
    },
    {
      id: 'quiz-dasprog-2-14',
      question: 'Apa keuntungan menggunakan "Guard Clauses" (Early Return) dibandingkan percabangan bersarang yang dalam (Deeply Nested If)?',
      options: [
        'Meningkatkan keterbacaan kode (readability) dan mengurangi kompleksitas kognitif (menghindari "Arrow Anti-pattern").',
        'Mempercepat kecepatan clock CPU sebesar 50%.',
        'Mengurangi ukuran memori RAM yang dibutuhkan oleh sistem operasi.',
        'Mencegah kode dari serangan virus komputer.'
      ],
      correctAnswer: 0,
      explanation: 'Guard clause melakukan pengecekan kondisi kegagalan/invalid di awal fungsi dan langsung me-return/keluar, sehingga alur utama fungsi tetap berada pada indentasi rata kiri yang bersih dan mudah dibaca tanpa sarang if bertingkat-tingkat.'
    },
    {
      id: 'quiz-dasprog-2-15',
      question: 'Perhatikan ekspresi logika: !(A || B). Berdasarkan Hukum De Morgan, ekspresi ini ekuivalen dengan bentuk apa?',
      options: [
        '!A && !B',
        '!A || !B',
        'A && B',
        '!A || B'
      ],
      correctAnswer: 0,
      explanation: 'Hukum De Morgan menyatakan bahwa negasi dari disjungsi adalah konjungsi dari negasi-negasinya: !(A || B) == (!A && !B).'
    },
    {
      id: 'quiz-dasprog-2-16',
      question: 'Perhatikan ekspresi logika: !(A && B). Berdasarkan Hukum De Morgan, ekspresi ini ekuivalen dengan apa?',
      options: [
        '!A || !B',
        '!A && !B',
        'A || B',
        '!A && B'
      ],
      correctAnswer: 0,
      explanation: 'Hukum De Morgan menyatakan bahwa negasi dari konjungsi adalah disjungsi dari negasi-negasinya: !(A && B) == (!A || !B).'
    },
    {
      id: 'quiz-dasprog-2-17',
      question: 'Kapan struktur switch-case LEBIH DISARANKAN untuk digunakan daripada rangkaian if-else-if?',
      options: [
        'Ketika kita memeriksa satu variabel integral yang sama terhadap banyak nilai konstanta diskrit yang tetap.',
        'Ketika kita memeriksa rentang nilai kontinu dengan perbandingan kurang dari (<) dan lebih dari (>).',
        'Ketika kondisi melibatkan perbandingan banyak variabel string yang dinamis.',
        'Ketika kondisi menguji bilangan desimal double dengan toleransi epsilon.'
      ],
      correctAnswer: 0,
      explanation: 'Switch-case sangat ideal, rapi, dan cepat saat menguji satu variabel diskrit (seperti kode menu 1, 2, 3 atau status enum) terhadap sekumpulan nilai tetap tertentu.'
    },
    {
      id: 'quiz-dasprog-2-18',
      question: 'Perhatikan potongan kode: int x = 5; if (x > 0); { cout << "Positif"; } Apa peran tanda titik koma (;) tepat setelah if (x > 0)?',
      options: [
        'Menjadi "null statement" yang mengakhiri if seketika, sehingga blok kurung kurawal di bawahnya selalu dieksekusi terlepas dari nilai x.',
        'Memperbaiki sintaks agar kode dapat dikompilasi lebih cepat.',
        'Membuat if menunggu input keyboard dari pengguna.',
        'Memaksa variabel x bernilai negatif.'
      ],
      correctAnswer: 0,
      explanation: 'Titik koma tepat setelah if membentuk pernyataan kosong (null statement). Artinya jika x > 0 bernilai true, ia tidak melakukan apa-apa. Blok kurung { cout << "Positif"; } menjadi blok mandiri terpisah yang selalu dieksekusi!'
    },
    {
      id: 'quiz-dasprog-2-19',
      question: 'Bagaimana cara yang benar untuk memeriksa apakah variabel x berada di dalam rentang inklusif antara 10 dan 20 pada C++?',
      options: [
        'if (x >= 10 && x <= 20)',
        'if (10 <= x <= 20)',
        'if (x >= 10 || x <= 20)',
        'if (x in 10..20)'
      ],
      correctAnswer: 0,
      explanation: 'Ekspresi matematis 10 <= x <= 20 di C++ akan mengevaluasi (10 <= x) menjadi boolean 0 atau 1, lalu membandingkan 0/1 <= 20 yang selalu bernilai true! Cara yang benar adalah memisahkan dua relasi dengan operator logika AND: x >= 10 && x <= 20.'
    },
    {
      id: 'quiz-dasprog-2-20',
      question: 'Berapakah hasil dari evaluasi operator ternary bersarang: int y = (3 > 5) ? 10 : (2 < 4) ? 20 : 30; ?',
      options: [
        '20',
        '10',
        '30',
        'Error Kompilasi'
      ],
      correctAnswer: 0,
      explanation: 'Kondisi pertama (3 > 5) bernilai false, sehingga alur melompat ke bagian setelah titik dua (:), yaitu ekspresi (2 < 4) ? 20 : 30. Karena 2 < 4 bernilai true, hasil akhirnya adalah 20.'
    }
  ],

  perulangan: [
    {
      id: 'quiz-dasprog-3-1',
      question: 'Tiga komponen esensial apa sajakah yang menyusun kepala (header) dari struktur perulangan "for (A; B; C)"?',
      options: [
        'A = Inisialisasi, B = Kondisi Terminasi / Uji Lanjut, C = Pembaruan / Increment-Decrement',
        'A = Deklarasi Fungsi, B = Alokasi Memori, C = Deallokasi Memori',
        'A = Kondisi Masuk, B = Exception Handler, C = Return Type',
        'A = Input Data, B = Sorting Data, C = Output Data'
      ],
      correctAnswer: 0,
      explanation: 'Header for loop terdiri dari: (1) Inisialisasi counter (dieksekusi sekali di awal), (2) Kondisi uji (dievaluasi sebelum setiap iterasi), dan (3) Pembaruan nilai counter (dieksekusi di akhir setiap iterasi).'
    },
    {
      id: 'quiz-dasprog-3-2',
      question: 'Berapa kali perulangan berikut akan berjalan: for (int i = 0; i < 5; i++) { ... } ?',
      options: [
        '5 kali (saat i = 0, 1, 2, 3, 4)',
        '4 kali (saat i = 1, 2, 3, 4)',
        '6 kali (saat i = 0, 1, 2, 3, 4, 5)',
        'Tak hingga kali'
      ],
      correctAnswer: 0,
      explanation: 'Loop dimulai dari i = 0 dan berlanjut selama i < 5. Nilai i yang memenuhi adalah 0, 1, 2, 3, dan 4, tepat sebanyak 5 kali iterasi.'
    },
    {
      id: 'quiz-dasprog-3-3',
      question: 'Apa perbedaan mendasar antara perulangan "while" dengan perulangan "do-while"?',
      options: [
        'while memeriksa kondisi di awal (Pre-test), sedangkan do-while memeriksa kondisi di akhir (Post-test) sehingga dijamin dieksekusi minimal 1 kali.',
        'while hanya untuk tipe integer, sedangkan do-while untuk float.',
        'do-while tidak dapat dihentikan dengan perintah break.',
        'while berjalan lebih lambat karena membutuhkan memori ganda.'
      ],
      correctAnswer: 0,
      explanation: 'Pada while loop, jika kondisi awal sudah bernilai false, badan loop tidak pernah dijalankan sama sekali. Sebaliknya pada do-while, badan loop dieksekusi terlebih dahulu baru kemudian kondisinya diperiksa di akhir, sehingga dijamin berjalan minimal satu kali.'
    },
    {
      id: 'quiz-dasprog-3-4',
      question: 'Perhatikan kode: int x = 10; while (x < 5) { x++; } Berapa kali badan loop while tersebut dieksekusi?',
      options: [
        '0 kali',
        '1 kali',
        '5 kali',
        'Tak hingga kali'
      ],
      correctAnswer: 0,
      explanation: 'Sebelum masuk ke badan loop, kondisi (10 < 5) langsung bernilai false. Oleh karena itu badan loop sama sekali tidak pernah dieksekusi (0 kali).'
    },
    {
      id: 'quiz-dasprog-3-5',
      question: 'Perhatikan kode: int x = 10; do { x++; } while (x < 5); Berapa nilai x setelah blok do-while selesai?',
      options: [
        '11',
        '10',
        '5',
        '15'
      ],
      correctAnswer: 0,
      explanation: 'Badan loop dieksekusi terlebih dahulu: x++ membuat nilai x menjadi 11. Setelah itu kondisi (11 < 5) diperiksa dan bernilai false, sehingga loop berhenti. Nilai akhir x adalah 11.'
    },
    {
      id: 'quiz-dasprog-3-6',
      question: 'Apa efek dari instruksi "continue" di dalam sebuah perulangan?',
      options: [
        'Menghentikan iterasi yang sedang berlangsung saat itu juga dan langsung melompat ke iterasi berikutnya.',
        'Menghentikan seluruh perulangan secara permanen dan keluar dari loop.',
        'Mengulang kembali iterasi yang sama tanpa mengubah counter.',
        'Membuat program keluar dari fungsi main.'
      ],
      correctAnswer: 0,
      explanation: 'Pernyataan continue melompati seluruh sisa baris kode di dalam badan loop untuk iterasi saat ini, lalu langsung menuju langkah update counter untuk memulai iterasi berikutnya.'
    },
    {
      id: 'quiz-dasprog-3-7',
      question: 'Apa yang tercetak dari kode: for (int i = 1; i <= 5; i++) { if (i == 3) continue; cout << i; } ?',
      options: [
        '1245',
        '12',
        '12345',
        '3'
      ],
      correctAnswer: 0,
      explanation: 'Saat i bernilai 3, statement continue dieksekusi sehingga baris cout << i dilewati untuk angka 3. Nilai 1, 2, 4, dan 5 tetap dicetak normal, menghasilkan output "1245".'
    },
    {
      id: 'quiz-dasprog-3-8',
      question: 'Apa yang tercetak dari kode: for (int i = 1; i <= 5; i++) { if (i == 3) break; cout << i; } ?',
      options: [
        '12',
        '1245',
        '123',
        '345'
      ],
      correctAnswer: 0,
      explanation: 'Saat i mencapai 3, statement break menghentikan seluruh perulangan for secara permanen dan langsung melompat keluar. Jadi hanya nilai 1 dan 2 yang sempat tercetak.'
    },
    {
      id: 'quiz-dasprog-3-9',
      question: 'Berapa total eksekusi instruksi cout pada loop bersarang: for(int i=0; i<3; i++) for(int j=0; j<4; j++) cout << "*"; ?',
      options: [
        '12 kali',
        '7 kali',
        '3 kali',
        '4 kali'
      ],
      correctAnswer: 0,
      explanation: 'Loop luar berjalan sebanyak 3 kali (i = 0, 1, 2). Untuk setiap nilai i, loop dalam berjalan sebanyak 4 kali (j = 0, 1, 2, 3). Total eksekusi adalah hasil kali: 3 * 4 = 12 kali.'
    },
    {
      id: 'quiz-dasprog-3-10',
      question: 'Apa yang dimaksud dengan "Infinite Loop" (Perulangan Tak Hingga)?',
      options: [
        'Kondisi perulangan di mana syarat terminasi tidak pernah tercapai (selalu bernilai true) sehingga loop tidak pernah berhenti.',
        'Perulangan yang memiliki jumlah iterasi lebih dari satu juta.',
        'Perulangan yang hanya dijalankan pada superkomputer kuantum.',
        'Perulangan yang di dalamnya memanggil fungsi rekursif tak terbatas.'
      ],
      correctAnswer: 0,
      explanation: 'Infinite loop terjadi ketika kondisi berhenti tidak pernah terpenuhi (misal lupa increment counter: while(i < 10) tanpa i++). Program akan terus berputar menyerap 100% kapasitas core CPU sampai dimatikan secara paksa.'
    },
    {
      id: 'quiz-dasprog-3-11',
      question: 'Manakah penulisan loop tak hingga (infinite loop) yang valid dan lazim digunakan di bahasa C/C++?',
      options: [
        'for (;;) { ... } atau while (true) { ... }',
        'loop (infinite) { ... }',
        'repeat (all) { ... }',
        'until (false) { ... }'
      ],
      correctAnswer: 0,
      explanation: 'Konstruksi for (;;) (for loop dengan tiga parameter kosong) dan while (true) (atau while (1)) adalah idiomatic C/C++ untuk membuat infinite loop yang nantinya dihentikan secara eksplisit via break atau return di dalam badannya.'
    },
    {
      id: 'quiz-dasprog-3-12',
      question: 'Apa yang dimaksud dengan kesalahan logika "Off-by-One Error" (OBOE) pada perulangan array?',
      options: [
        'Kesalahan menentukan batas perulangan sehingga loop berjalan satu kali terlalu banyak atau satu kali terlalu sedikit (misal menggunakan <= alih-alih < pada array).',
        'Kesalahan memasukkan satu huruf typo pada nama variabel.',
        'Kesalahan membagi angka dengan angka 1.',
        'Kesalahan memilih tipe data float alih-alih double.'
      ],
      correctAnswer: 0,
      explanation: 'Off-by-one error adalah salah satu bug paling umum di mana perulangan meleset tepat 1 iterasi (misal array ukuran 5 diakses dari indeks 0 hingga 5 dengan i <= 5, memicu akses di luar batas arr[5]).'
    },
    {
      id: 'quiz-dasprog-3-13',
      question: 'Berapakah nilai variabel count setelah kode berikut selesai: int count = 0; for (int i = 10; i > 0; i -= 2) count++; ?',
      options: [
        '5',
        '10',
        '4',
        '6'
      ],
      correctAnswer: 0,
      explanation: 'Nilai variabel i berkurang 2 pada setiap iterasi: 10, 8, 6, 4, 2. Saat i = 0, kondisi (0 > 0) bernilai false sehingga loop berhenti. Total iterasi tepat 5 kali, maka count = 5.'
    },
    {
      id: 'quiz-dasprog-3-14',
      question: 'Apakah variabel yang dideklarasikan di dalam header for (misal: for (int i = 0; i < 5; i++)) dapat diakses di luar kurung kurawal for pada standar C++ modern?',
      options: [
        'Tidak bisa, karena memiliki scope lokal (block scope) yang hanya hidup di dalam blok perulangan tersebut.',
        'Bisa, karena variabel di dalam for otomatis berstatus global.',
        'Bisa, asalkan tipe datanya adalah unsigned int.',
        'Bisa, jika file program disimpan dengan ekstensi .cpp.'
      ],
      correctAnswer: 0,
      explanation: 'Sejak standar C++98 / C99, variabel yang dideklarasikan di dalam inisialisasi for loop memiliki block scope; variabel tersebut dihancurkan begitu eksekusi loop selesai dan tidak dapat diakses di luarnya.'
    },
    {
      id: 'quiz-dasprog-3-15',
      question: 'Mengapa penggunaan pernyataan "goto" untuk melompat antar baris kode perulangan sangat tidak dianjurkan dalam rekayasa perangkat lunak modern?',
      options: [
        'Karena merusak alur kontrol terstruktur dan menghasilkan "Spaghetti Code" yang sulit dilacak, di-debug, dan dibuktikan kebenarannya.',
        'Karena statement goto dilarang oleh lisensi open source.',
        'Karena instruksi goto membutuhkan daya listrik CPU 10 kali lipat.',
        'Karena goto hanya berfungsi pada arsitektur komputer 32-bit.'
      ],
      correctAnswer: 0,
      explanation: 'Sebagaimana dikemukakan Edsger Dijkstra dalam makalah legendarisnya "Go To Statement Considered Harmful", penggunaan goto yang serampangan membuat alur eksekusi melompat-lompat tak teratur (spaghetti code), menghancurkan modularitas dan menyulitkan pelacakan state memori.'
    },
    {
      id: 'quiz-dasprog-3-16',
      question: 'Perhatikan kode: for (int i = 0; i < 3; i++) { for (int j = 0; j < i; j++) { cout << "*"; } } Berapa banyak bintang yang tercetak?',
      options: [
        '3 bintang',
        '6 bintang',
        '9 bintang',
        '1 bintang'
      ],
      correctAnswer: 0,
      explanation: 'Saat i = 0: loop dalam (j < 0) jalan 0 kali. Saat i = 1: loop dalam (j < 1) jalan 1 kali (*). Saat i = 2: loop dalam (j < 2) jalan 2 kali (**). Total bintang = 0 + 1 + 2 = 3 bintang.'
    },
    {
      id: 'quiz-dasprog-3-17',
      question: 'Manakah jenis perulangan yang PALING COCOK digunakan ketika kita TIDAK TAHU berapa kali iterasi akan berjalan, namun tahu kondisi terminasinya (misal: membaca input sampai user mengetik angka -1)?',
      options: [
        'while loop atau do-while loop',
        'for loop statis berukuran tetap',
        'switch-case statement',
        'rekursi tanpa base-case'
      ],
      correctAnswer: 0,
      explanation: 'While loop dirancang khusus untuk perulangan berbasis kondisi (event-controlled loop), di mana kita mengulang selama suatu syarat terpenuhi tanpa harus mengetahui sebelumnya berapa jumlah total perulangannya.'
    },
    {
      id: 'quiz-dasprog-3-18',
      question: 'Perhatikan kode: int x = 1; while (x < 100) { x *= 2; } Berapakah nilai akhir x saat loop berhenti?',
      options: [
        '128',
        '64',
        '100',
        '256'
      ],
      correctAnswer: 0,
      explanation: 'Nilai x berlipat ganda: 1 -> 2 -> 4 -> 8 -> 16 -> 32 -> 64 -> 128. Saat x mencapai 128, kondisi (128 < 100) bernilai false sehingga perulangan berhenti. Nilai akhir x adalah 128.'
    },
    {
      id: 'quiz-dasprog-3-19',
      question: 'Apa fungsi dari ekspresi koma (comma operator) pada for header, seperti: for (int i = 0, j = 10; i < j; i++, j--)?',
      options: [
        'Mengizinkan beberapa inisialisasi dan beberapa update variabel dijalankan bersamaan dalam satu header loop.',
        'Membagi perulangan menjadi dua thread CPU terpisah.',
        'Menyimpan nilai i dan j ke dalam file CSV.',
        'Membatalkan eksekusi jika nilai i sama dengan j.'
      ],
      correctAnswer: 0,
      explanation: 'Operator koma memungkinkan kita menginisialisasi lebih dari satu variabel (i = 0, j = 10) dan memperbarui keduanya sekaligus (i++, j--) dalam satu baris header loop yang sama.'
    },
    {
      id: 'quiz-dasprog-3-20',
      question: 'Apa yang terjadi pada loop: for (unsigned int i = 5; i >= 0; i--) { cout << i; } ?',
      options: [
        'Terjadi infinite loop karena tipe unsigned int tidak pernah bernilai negatif (setelah 0 akan wrap-around menjadi nilai positif raksasa).',
        'Berjalan normal mencetak 543210 lalu berhenti.',
        'Error kompilasi karena unsigned int tidak boleh didecrement.',
        'Kompiler otomatis menghentikan program saat i mencapai -1.'
      ],
      correctAnswer: 0,
      explanation: 'Ini adalah jebakan fatal tipe data unsigned! Karena unsigned int tidak bisa negatif, kondisi (i >= 0) SELALU bernilai true. Ketika i bernilai 0 dan di-decrement (i--), nilainya berputar (underflow) menjadi 4.294.967.295, menghasilkan loop tak hingga!'
    }
  ],

  fungsi: [
    {
      id: 'quiz-dasprog-4-1',
      question: 'Apa tujuan utama dari prinsip "DRY" (Don\'t Repeat Yourself) dalam perancangan fungsi?',
      options: [
        'Menghindari duplikasi kode dengan membungkus logika yang sering digunakan ke dalam satu fungsi yang dapat dipanggil berulang kali.',
        'Membuat kode program tidak boleh memiliki lebih dari 100 baris.',
        'Menghapus penggunaan variabel lokal dari memori.',
        'Mencegah kode dari kebocoran memori RAM.'
      ],
      correctAnswer: 0,
      explanation: 'Prinsip DRY menekankan bahwa setiap potongan logika atau pengetahuan dalam sistem harus memiliki representasi tunggal, tegas, dan tidak ambigu. Fungsi memungkinkan kita menulis logika sekali dan memakainya berulang kali.'
    },
    {
      id: 'quiz-dasprog-4-2',
      question: 'Apa perbedaan antara Deklarasi Fungsi (Function Prototype) dengan Definisi Fungsi (Function Definition)?',
      options: [
        'Prototype hanya memberitahukan compiler nama fungsi, return type, dan tipe parameter di awal file, sedangkan definisi berisi implementasi badan kodenya yang lengkap.',
        'Prototype adalah kode assembly, sedangkan definisi adalah kode C++.',
        'Prototype dieksekusi di GPU, sedangkan definisi dieksekusi di CPU.',
        'Tidak ada perbedaan, keduanya adalah sinonim yang identik.'
      ],
      correctAnswer: 0,
      explanation: 'Function prototype (deklarasi diakhiri titik koma) memberi tahu compiler tentang spesifikasi antarmuka fungsi sebelum fungsi tersebut dipanggil, sedangkan function definition menyertakan blok kurung kurawal berisi baris instruksi aktualnya.'
    },
    {
      id: 'quiz-dasprog-4-3',
      question: 'Tipe pengembalian (return type) apakah yang digunakan untuk fungsi yang TIDAK mengembalikan nilai apapun (prosedur)?',
      options: [
        'void',
        'null',
        'empty',
        'int'
      ],
      correctAnswer: 0,
      explanation: 'Kata kunci void menandakan bahwa suatu fungsi tidak menghasilkan nilai kembali (return value). Di beberapa bahasa lain fungsi seperti ini sering disebut prosedur.'
    },
    {
      id: 'quiz-dasprog-4-4',
      question: 'Apa yang terjadi pada pemanggilan fungsi dengan mekanisme "Pass by Value"?',
      options: [
        'Fungsi menerima salinan (copy) independen dari nilai argumen, sehingga modifikasi parameter di dalam fungsi TIDAK mempengaruhi variabel asli di pemanggil.',
        'Fungsi menerima alamat memori asli variabel, sehingga perubahan langsung mengubah variabel pemanggil.',
        'Variabel pemanggil otomatis dihapus dari memori RAM.',
        'Nilai variabel dienkripsi sebelum dikirim ke parameter.'
      ],
      correctAnswer: 0,
      explanation: 'Pada Pass by Value, nilai argumen diduplikasi ke dalam alokasi stack frame baru. Segala perubahan pada parameter di dalam fungsi hanya mengubah salinan lokal tersebut dan variabel asli di luar fungsi tetap utuh.'
    },
    {
      id: 'quiz-dasprog-4-5',
      question: 'Bagaimana sintaks deklarasi parameter "Pass by Reference" pada bahasa C++ untuk memungkinkan fungsi mengubah nilai variabel asli pemanggil?',
      options: [
        'void tambahSatu(int &x)',
        'void tambahSatu(int $x)',
        'void tambahSatu(ref int x)',
        'void tambahSatu(int @x)'
      ],
      correctAnswer: 0,
      explanation: 'Tanda ampersand (&) pada tipe parameter C++ (seperti int &x) menandakan bahwa x adalah referensi (alias langsung) ke variabel asli di memori pemanggil, sehingga perubahan nilai x langsung mengubah variabel aslinya.'
    },
    {
      id: 'quiz-dasprog-4-6',
      question: 'Perhatikan kode: void swapVal(int a, int b) { int t = a; a = b; b = t; } int x = 3, y = 7; swapVal(x, y); Berapakah nilai x dan y setelah pemanggilan tersebut?',
      options: [
        'x = 3, y = 7 (nilai tidak berubah)',
        'x = 7, y = 3 (tertukar)',
        'x = 0, y = 0',
        'x = 7, y = 7'
      ],
      correctAnswer: 0,
      explanation: 'Karena parameter a dan b dikirimkan secara Pass by Value (tanpa tanda &), fungsi swapVal hanya menukar salinan lokalnya sendiri. Nilai variabel x dan y di fungsi main tetap tidak berubah: x = 3, y = 7.'
    },
    {
      id: 'quiz-dasprog-4-7',
      question: 'Apa yang dimaksud dengan "Scope" (cakupan) dari sebuah variabel?',
      options: [
        'Wilayah atau bagian dari kode program di mana variabel tersebut dikenali, dapat diakses, dan valid untuk digunakan.',
        'Kecepatan transfer data variabel dari memori ke register.',
        'Kapasitas maksimum bit yang dapat disimpan oleh variabel.',
        'Nama file tempat variabel tersebut pertama kali ditulis.'
      ],
      correctAnswer: 0,
      explanation: 'Scope menentukan visibilitas dan aksesibilitas variabel di dalam kode (seperti Local Scope di dalam kurung kurawal {} atau Global Scope yang dapat diakses di seluruh file).'
    },
    {
      id: 'quiz-dasprog-4-8',
      question: 'Kapan alokasi memori untuk variabel lokal (Local Variable) di dalam fungsi dibuat dan dihancurkan?',
      options: [
        'Dibuat di Call Stack saat fungsi mulai dipanggil, dan otomatis dihancurkan (deallocated) saat fungsi selesai dieksekusi (return).',
        'Dibuat saat komputer dinyalakan, dan dihancurkan saat komputer dimatikan.',
        'Dibuat di hard disk dan tidak pernah dihapus.',
        'Dibuat saat proses kompilasi kode biner berlangsung.'
      ],
      correctAnswer: 0,
      explanation: 'Variabel lokal dialokasikan di dalam stack frame fungsi saat fungsi dipanggil (runtime), dan memorinya otomatis dibebaskan kembali saat alur program keluar dari blok fungsi tersebut.'
    },
    {
      id: 'quiz-dasprog-4-9',
      question: 'Apa bahaya utama dari ketergantungan berlebihan pada Variabel Global (Global Variables)?',
      options: [
        'Dapat dimodifikasi oleh sembarang fungsi dari mana saja tanpa terlacak (side effects), menciptakan coupling ketat dan menyulitkan debugging.',
        'Membuat compiler menolak mengompilasi program.',
        'Membuat program tidak dapat dijalankan di sistem operasi Windows.',
        'Membuat ukuran file program menjadi 10 kali lebih besar.'
      ],
      correctAnswer: 0,
      explanation: 'Variabel global dapat diubah oleh fungsi mana saja secara tersembunyi (hidden side effects). Hal ini merusak prediktabilitas fungsi, menyulitkan unit testing, dan menimbulkan bug race condition pada program multi-threading.'
    },
    {
      id: 'quiz-dasprog-4-10',
      question: 'Apa sifat khusus dari variabel yang dideklarasikan dengan kata kunci "static" di dalam fungsi: void hitung() { static int count = 0; count++; } ?',
      options: [
        'Nilainya tetap bertahan di antara pemanggilan fungsi yang berulang kali, tidak dihancurkan saat fungsi selesai.',
        'Variabel otomatis menjadi konstanta yang nilainya tidak dapat diubah.',
        'Variabel hanya bisa diakses oleh fungsi main saja.',
        'Variabel disimpan di server cloud secara online.'
      ],
      correctAnswer: 0,
      explanation: 'Variabel lokal static dialokasikan di Data Segment memori (bukan di call stack). Nilainya diinisialisasi hanya sekali dan nilainya tetap dipertahankan meskipun pemanggilan fungsi telah selesai, sehingga siap dipakai kembali pada pemanggilan berikutnya.'
    },
    {
      id: 'quiz-dasprog-4-11',
      question: 'Apa yang dimaksud dengan "Function Overloading" di bahasa pemrograman seperti C++ atau Java?',
      options: [
        'Mendefinisikan beberapa fungsi dengan nama yang sama persis, asalkan jumlah atau tipe parameternya berbeda (signature berbeda).',
        'Memanggil fungsi melebihi batas kapasitas memori RAM.',
        'Menulis fungsi yang memiliki lebih dari 10 parameter.',
        'Mengubah fungsi menjadi file library eksternal .dll.'
      ],
      correctAnswer: 0,
      explanation: 'Function overloading mengizinkan dua atau lebih fungsi memiliki nama yang identik (misal: hitungLuas(int sisi) dan hitungLuas(double p, double l)), di mana compiler secara otomatis memilih fungsi yang tepat berdasarkan tipe argumen yang diberikan saat pemanggilan.'
    },
    {
      id: 'quiz-dasprog-4-12',
      question: 'Kapan aturan "Default Argument" (argumen bawaan) dievaluasi pada fungsi C++: void sambut(string nama = "Tamu")?',
      options: [
        'Jika pemanggil memanggil fungsi tanpa menyertakan argumen tersebut: sambut().',
        'Argumen bawaan selalu menggantikan nilai apapun yang dikirim oleh pemanggil.',
        'Hanya digunakan jika komputer mengalami crash.',
        'Hanya digunakan saat program dijalankan di mode administrator.'
      ],
      correctAnswer: 0,
      explanation: 'Default argument menyediakan nilai cadangan otomatis. Jika pemanggil menyertakan argumen sambut("Budi"), maka nama = "Budi". Namun jika dipanggil sambut(), nilai default "Tamu" yang akan digunakan.'
    },
    {
      id: 'quiz-dasprog-4-13',
      question: 'Di posisi manakah parameter dengan default argument HARUS diletakkan dalam daftar parameter fungsi C++?',
      options: [
        'Di urutan paling akhir (paling kanan) dari daftar parameter.',
        'Di urutan paling awal (paling kiri) dari daftar parameter.',
        'Bebas di posisi mana saja di antara parameter.',
        'Harus berada tepat di tengah-tengah.'
      ],
      correctAnswer: 0,
      explanation: 'Berdasarkan aturan C++, semua parameter yang memiliki nilai default harus ditempatkan di posisi paling kanan (trailing parameters) agar pemetaan argumen posisional pemanggil tidak ambigu bagi compiler.'
    },
    {
      id: 'quiz-dasprog-4-14',
      question: 'Apa yang dimaksud dengan "Variable Shadowing" di dalam pemrograman?',
      options: [
        'Kondisi ketika variabel di scope dalam (inner scope) memiliki nama yang sama dengan variabel di scope luar, sehingga menyembunyikan variabel luar tersebut.',
        'Variabel yang nilainya dihapus secara rahasia oleh sistem operasi.',
        'Variabel yang dijadikan salinan bayangan di disk penyimpanan.',
        'Variabel yang dideklarasikan tanpa menentukan tipe datanya.'
      ],
      correctAnswer: 0,
      explanation: 'Variable shadowing terjadi ketika variabel lokal mendeklarasikan nama yang sama dengan variabel global (atau inner block terhadap outer block). Di dalam blok tersebut, variabel lokal akan menutupi (shadow) variabel luar sehingga akses ke variabel luar terhalang.'
    },
    {
      id: 'quiz-dasprog-4-15',
      question: 'Apa peran struktur data "Call Stack" pada saat sebuah fungsi memanggil fungsi lainnya?',
      options: [
        'Menyimpan alamat kembali (return address), parameter, dan variabel lokal untuk setiap pemanggilan fungsi dalam bentuk tumpukan Frame.',
        'Menyimpan source code teks dalam bentuk file zip.',
        'Mengatur kecerahan layar monitor saat fungsi bekerja.',
        'Menghubungkan komputer dengan database jaringan.'
      ],
      correctAnswer: 0,
      explanation: 'Call Stack beroperasi dengan prinsip LIFO (Last-In, First-Out). Setiap kali fungsi dipanggil, stack frame baru di-push ke atas tumpukan untuk menyimpan state fungsi tersebut, dan di-pop begitu fungsi mengembalikan nilai (return).'
    },
    {
      id: 'quiz-dasprog-4-16',
      question: 'Apa yang dimaksud dengan fungsi murni ("Pure Function")?',
      options: [
        'Fungsi yang selalu menghasilkan output yang sama untuk input yang sama, dan TIDAK memiliki efek samping (tidak memodifikasi state global/I/O).',
        'Fungsi yang ditulis murni dalam bahasa assembly tanpa C++.',
        'Fungsi yang tidak memiliki badan instruksi sama sekali.',
        'Fungsi yang hanya boleh dipanggil satu kali selama program hidup.'
      ],
      correctAnswer: 0,
      explanation: 'Pure function adalah konsep penting dalam pemrograman fungsional: keluarannya semata-mata ditentukan oleh argumen masukannya tanpa bergantung atau mengubah status di luar dirinya (deterministic & no side-effects).'
    },
    {
      id: 'quiz-dasprog-4-17',
      question: 'Perhatikan kode: int kaliDua(int n) { return n * 2; cout << "Selesai"; } Kapan baris cout << "Selesai" akan dieksekusi?',
      options: [
        'Tidak pernah dieksekusi sama sekali (Unreachable Code).',
        'Dieksekusi sebelum nilai dikembalikan.',
        'Dieksekusi setelah nilai diterima oleh fungsi pemanggil.',
        'Dieksekusi hanya jika n bernilai nol.'
      ],
      correctAnswer: 0,
      explanation: 'Pernyataan return seketika menghentikan eksekusi fungsi dan menyerahkan kendali kembali ke pemanggil. Seluruh baris kode yang ditulis setelah return dalam blok yang sama menjadi kode yang tak terjangkau (unreachable code).'
    },
    {
      id: 'quiz-dasprog-4-18',
      question: 'Mengapa melewatkan objek besar (seperti struct atau array objek raksasa) secara "Pass by const Reference" (const Tipe &obj) sangat direkomendasikan?',
      options: [
        'Menghindari biaya penyalinan data memori (cepat & efisien) sekaligus menjamin data asli aman dari modifikasi tidak disengaja.',
        'Membuat objek terenkripsi otomatis dengan algoritma RSA.',
        'Membuat objek otomatis disimpan ke database SQLite.',
        'Memperbaiki kerusakan hardware motherboard secara otomatis.'
      ],
      correctAnswer: 0,
      explanation: 'Pass by reference menghindari pembuatan duplikat objek di memori (zero copy cost), sementara kata kunci const memberi jaminan bahwa fungsi yang dipanggil hanya memiliki izin membaca (read-only) dan tidak dapat mengubah isi objek tersebut.'
    },
    {
      id: 'quiz-dasprog-4-19',
      question: 'Apa yang dimaksud dengan fungsi "inline" (kata kunci inline di C++)?',
      options: [
        'Saran kepada compiler untuk menyisipkan badan kode fungsi langsung di lokasi pemanggilannya guna memangkas overhead pemanggilan fungsi.',
        'Fungsi yang hanya boleh ditulis dalam satu baris saja tanpa enter.',
        'Fungsi yang dijalankan secara online melalui web browser.',
        'Fungsi yang tidak boleh memiliki parameter input.'
      ],
      correctAnswer: 0,
      explanation: 'Kata kunci inline menyarankan kompiler untuk menggantikan panggilan fungsi langsung dengan kode instruksi mesin fungsi tersebut (inlining) untuk meniadakan overhead stack frame pemanggilan fungsi-fungsi kecil yang sangat sering dipanggil.'
    },
    {
      id: 'quiz-dasprog-4-20',
      question: 'Apa keluaran dari kode berikut: int f(int x) { return (x <= 1) ? 1 : x * f(x - 1); } cout << f(4); ?',
      options: [
        '24',
        '10',
        '16',
        '4'
      ],
      correctAnswer: 0,
      explanation: 'Ini adalah implementasi rekursif fungsi faktorial: f(4) = 4 * f(3) = 4 * (3 * f(2)) = 4 * 3 * (2 * f(1)) = 4 * 3 * 2 * 1 = 24.'
    }
  ],

  struktur_data: [
    {
      id: 'quiz-dasprog-5-1',
      question: 'Bagaimana karakteristik penataan elemen-elemen dari struktur data Array (Larik) di dalam memori fisik RAM?',
      options: [
        'Disimpan pada blok memori yang berurutan secara bersambung (Contiguous Memory Allocation).',
        'Disimpan tersebar secara acak di berbagai alamat memori yang dihubungkan dengan pointer.',
        'Disimpan di dalam file sementara di hard disk komputer.',
        'Disimpan hanya di register GPU.'
      ],
      correctAnswer: 0,
      explanation: 'Elemen-elemen array dialokasikan secara bersambung (contiguous) di dalam memori RAM, di mana setiap elemen berada tepat bersebelahan dengan elemen berikutnya sesuai ukuran tipe datanya.'
    },
    {
      id: 'quiz-dasprog-5-2',
      question: 'Berapakah indeks awal (basis indeks pertama) untuk mengakses elemen array pada mayoritas bahasa pemrograman modern seperti C++, Java, dan Python?',
      options: [
        'Indeks 0 (Zero-based indexing)',
        'Indeks 1 (One-based indexing)',
        'Indeks -1',
        'Indeks bebas ditentukan sistem operasi'
      ],
      correctAnswer: 0,
      explanation: 'Mayoritas bahasa komputasi mengadopsi 0-based indexing karena indeks array secara matematis merepresentasikan jarak offset dari alamat awal memori pointer array: Address(arr[i]) = BaseAddress + (i * ElementSize).'
    },
    {
      id: 'quiz-dasprog-5-3',
      question: 'Jika dideklarasikan: int nilai[5] = {10, 20, 30, 40, 50}; Berapakah nilai dari elemen nilai[2]?',
      options: [
        '30',
        '20',
        '10',
        '40'
      ],
      correctAnswer: 0,
      explanation: 'Karena indeks dimulai dari 0: nilai[0] = 10, nilai[1] = 20, nilai[2] = 30, nilai[3] = 40, dan nilai[4] = 50. Jadi nilai[2] bernilai 30.'
    },
    {
      id: 'quiz-dasprog-5-4',
      question: 'Apa bahaya yang terjadi jika program mengakses elemen di luar batas ukuran array (misal: int arr[5]; arr[10] = 99;)?',
      options: [
        'Buffer Overflow / Out-of-bounds Access yang memicu Undefined Behavior, kerusakan data variabel lain, atau crash (Segmentation Fault).',
        'Ukuran array otomatis diperbesar menjadi 11 elemen oleh sistem operasi.',
        'Compiler otomatis menghapus data pada indeks 10.',
        'Tidak ada masalah apapun karena memori komputer bersifat tak terbatas.'
      ],
      correctAnswer: 0,
      explanation: 'Bahasa seperti C dan C++ tidak melakukan pemeriksaan batas array secara otomatis saat runtime demi kecepatan maksimal. Menulis ke indeks di luar batas (out-of-bounds) dapat menimpa memori penting lain atau memicu Segmentation Fault seketika.'
    },
    {
      id: 'quiz-dasprog-5-5',
      question: 'Pada array dua dimensi (2D Array / Matriks) berukuran int matriks[3][4], berapa total elemen integer yang dapat ditampung?',
      options: [
        '12 elemen (3 baris x 4 kolom)',
        '7 elemen (3 + 4)',
        '14 elemen',
        '24 elemen'
      ],
      correctAnswer: 0,
      explanation: 'Array 2D dengan dimensi 3 baris dan 4 kolom menampung total 3 * 4 = 12 elemen.'
    },
    {
      id: 'quiz-dasprog-5-6',
      question: 'Bagaimana compiler C/C++ menyimpan elemen-elemen array 2D ke dalam memori linear RAM (Row-Major Order)?',
      options: [
        'Seluruh elemen pada baris ke-0 disimpan berurutan, diikuti seluruh elemen baris ke-1, lalu baris ke-2 (Baris demi Baris).',
        'Seluruh elemen kolom ke-0 disimpan berurutan, diikuti kolom ke-1 (Kolom demi Kolom).',
        'Elemen diagonal disimpan terlebih dahulu baru elemen tepi.',
        'Elemen disimpan terbalik dari baris terakhir ke baris pertama.'
      ],
      correctAnswer: 0,
      explanation: 'Bahasa C dan C++ menggunakan format Row-Major Order di mana data matriks diratakan baris demi baris secara bersambung di dalam memori RAM.'
    },
    {
      id: 'quiz-dasprog-5-7',
      question: 'Karakter khusus apakah yang menjadi penanda akhir (terminator) dari string gaya bahasa C (C-Style String / array of char)?',
      options: [
        'Karakter null terminator \'\\0\' (ASCII nilai 0)',
        'Karakter baris baru \'\\n\'',
        'Karakter spasi \' \'',
        'Karakter titik \'.\''
      ],
      correctAnswer: 0,
      explanation: 'C-style string diakhiri dengan karakter null terminator \'\\0\' (byte bernilai 0). Fungsi seperti strlen() atau printf("%s") menelusuri memori hingga menemukan byte \'\\0\' untuk mengetahui di mana string berakhir.'
    },
    {
      id: 'quiz-dasprog-5-8',
      question: 'Berapa ukuran kapasitas array char minimum yang dibutuhkan untuk menampung teks string "KODING"?',
      options: [
        '7 karakter (6 huruf + 1 karakter null terminator \'\\0\')',
        '6 karakter',
        '5 karakter',
        '8 karakter'
      ],
      correctAnswer: 0,
      explanation: 'Kata "KODING" memiliki 6 huruf alfabet, namun dibutuhkan tambahan 1 byte memori di akhir untuk menyimpan karakter penutup \'\\0\'. Jadi total ukuran array char yang aman adalah minimal 7 byte.'
    },
    {
      id: 'quiz-dasprog-5-9',
      question: 'Apa keunggulan objek string modern (std::string) pada C++ dibandingkan array karakter konvensional (char[])?',
      options: [
        'Mengelola ukuran memori secara dinamis dan otomatis, serta menyediakan metode bawaan yang aman seperti length(), substr(), dan operator concatenation (+).',
        'Hanya bisa menyimpan huruf konsonan saja.',
        'Tidak memerlukan alokasi memori RAM sama sekali.',
        'Menyimpan data string langsung di server internet.'
      ],
      correctAnswer: 0,
      explanation: 'std::string mengimplementasikan pola RAII (Resource Acquisition Is Initialization): ia secara otomatis mengalokasikan dan me-reallocate memori heap saat string bertambah panjang, mencegah buffer overflow yang sering menghantui char[].'
    },
    {
      id: 'quiz-dasprog-5-10',
      question: 'Apa tujuan utama dari fitur "struct" (struktur data bentukan) dalam pemrograman?',
      options: [
        'Mengelompokkan beberapa variabel dengan tipe data yang berbeda-beda (heterogen) ke dalam satu kesatuan entitas data baru yang bermakna.',
        'Membuat program berjalan dua kali lebih cepat.',
        'Mengonversi kode program menjadi file PDF otomatis.',
        'Menghubungkan dua monitor komputer secara bersamaan.'
      ],
      correctAnswer: 0,
      explanation: 'Struktur data struct memungkinkan pembentukan tipe data komposit yang menggabungkan variabel-variabel berbeda jenis (misal struct Mahasiswa yang memiliki string nama, int nim, dan float ipk) ke dalam satu wadah entitas terpadu.'
    },
    {
      id: 'quiz-dasprog-5-11',
      question: 'Operator apakah yang digunakan untuk mengakses anggota (member variable) dari sebuah objek struct biasa: Mahasiswa mhs; ?',
      options: [
        'Operator Titik (.) misal: mhs.nama',
        'Operator Panah (->) misal: mhs->nama',
        'Operator Titik Dua Ganda (::) misal: mhs::nama',
        'Operator Ampersand (&) misal: mhs&nama'
      ],
      correctAnswer: 0,
      explanation: 'Untuk objek struct biasa, kita menggunakan operator titik (.) (dot member access operator) untuk mengakses field atau atribut di dalamnya.'
    },
    {
      id: 'quiz-dasprog-5-12',
      question: 'Kapan operator panah (->) digunakan untuk mengakses anggota struct?',
      options: [
        'Ketika kita mengakses anggota struct melalui sebuah pointer: ptrMhs->nama (ekuivalen dengan (*ptrMhs).nama).',
        'Hanya saat struct berisi bilangan floating point.',
        'Saat struct dideklarasikan di dalam file header .h.',
        'Hanya saat menggunakan perulangan while.'
      ],
      correctAnswer: 0,
      explanation: 'Operator panah (->) adalah singkatan sintaksis praktis (syntactic sugar) untuk melakukan dereferensi pointer struct terlebih dahulu lalu mengakses membernya: ptr->field setara dengan (*ptr).field.'
    },
    {
      id: 'quiz-dasprog-5-13',
      question: 'Apa fenomena "Memory Padding / Structure Alignment" pada compiler saat mengalokasikan struct di memori?',
      options: [
        'Compiler menyisipkan byte kosong (padding) di antara variabel anggota struct agar setiap data berada pada batas alamat memori yang sejajar (kelipatan 4 atau 8 byte) demi efisiensi akses hardware CPU.',
        'Compiler memampatkan data struct agar ukurannya nol byte.',
        'Compiler menduplikasi struct sebanyak dua kali di RAM.',
        'Compiler mengubah seluruh isi struct menjadi string teks.'
      ],
      correctAnswer: 0,
      explanation: 'CPU membaca memori dalam ukuran word (4 atau 8 byte). Untuk memaksimalkan kecepatan transfer bus, compiler menyisipkan byte padding kosong agar anggota data sejajar dengan batas word mesin, sehingga ukuran sizeof(struct) sering kali lebih besar dari sekadar jumlah murni tipe datanya.'
    },
    {
      id: 'quiz-dasprog-5-14',
      question: 'Perhatikan algoritma Linear Search pada array berukuran n: apa strategi pencarian yang dilakukannya?',
      options: [
        'Memeriksa setiap elemen array satu per satu secara berurutan dari indeks 0 hingga indeks terakhir sampai target ditemukan atau seluruh elemen habis diperiksa.',
        'Memotong array menjadi dua bagian di tengah pada setiap langkah.',
        'Mengacak urutan elemen array lalu mengambil elemen pertama.',
        'Menjumlahkan seluruh elemen array dan membaginya dengan n.'
      ],
      correctAnswer: 0,
      explanation: 'Linear Search (Sequential Search) bekerja secara berurutan memeriksa elemen arr[0], arr[1], arr[2], ... hingga arr[n-1]. Algoritma ini sangat sederhana dan tidak mensyaratkan array dalam keadaan terurut.'
    },
    {
      id: 'quiz-dasprog-5-15',
      question: 'Apa syarat MUTLAK agar algoritma Binary Search dapat dijalankan pada sebuah array?',
      options: [
        'Elemen-elemen di dalam array HARUS sudah dalam keadaan terurut (sorted).',
        'Ukuran array harus berupa bilangan genap.',
        'Semua elemen array harus bernilai bilangan positif.',
        'Array harus disimpan di dalam memori GPU.'
      ],
      correctAnswer: 0,
      explanation: 'Binary Search mengandalkan kepastian arah (jika target lebih kecil dari nilai tengah, pasti ada di separuh kiri; jika lebih besar, pasti di kanan). Strategi eliminasi separuh ruang pencarian ini HANYA valid jika data sudah terurut.'
    },
    {
      id: 'quiz-dasprog-5-16',
      question: 'Berapa jumlah perbandingan maksimum yang dibutuhkan oleh Binary Search untuk mencari elemen pada array terurut berukuran 1024 elemen?',
      options: [
        'Sekitar 10 hingga 11 kali perbandingan (log2 1024 = 10)',
        '1024 kali perbandingan',
        '512 kali perbandingan',
        '100 kali perbandingan'
      ],
      correctAnswer: 0,
      explanation: 'Karena Binary Search membagi dua ruang pencarian pada setiap langkah, jumlah perbandingan terburuknya adalah log2(1024) + 1 = 10 + 1 = 11 perbandingan, jauh lebih efisien daripada Linear Search yang butuh 1024 perbandingan.'
    },
    {
      id: 'quiz-dasprog-5-17',
      question: 'Bagaimana mekanisme pertukaran elemen pada algoritma pengurutan dasar "Bubble Sort"?',
      options: [
        'Membandingkan dua elemen yang bersebelahan secara berulang-ulang dan menukarnya jika urutannya salah, sehingga elemen terbesar "mengapung" ke posisi akhir.',
        'Mencari elemen terkecil lalu langsung menukarnya dengan elemen pertama.',
        'Membagi array menjadi dua bagian lalu menggabungkannya kembali.',
        'Memilih elemen pivot acak lalu mempartisi elemen di sekitar pivot.'
      ],
      correctAnswer: 0,
      explanation: 'Bubble Sort menelusuri array dari kiri ke kanan, membandingkan setiap pasangan elemen yang berdampingan (arr[j] dan arr[j+1]). Jika elemen kiri lebih besar, keduanya ditukar. Proses ini diulang hingga tidak ada lagi pertukaran yang terjadi.'
    },
    {
      id: 'quiz-dasprog-5-18',
      question: 'Perhatikan kode inisialisasi: int angka[5] = {1, 2}; Berapakah nilai dari elemen angka[3] dan angka[4] di C++?',
      options: [
        '0 dan 0 (otomatis diinisialisasi ke nilai nol default)',
        'Sampah acak memori (garbage value)',
        '1 dan 2 (didupikasi)',
        'Error kompilasi karena elemen kurang'
      ],
      correctAnswer: 0,
      explanation: 'Dalam aturan inisialisasi agregat C++, jika inisialisasi daftar elemen menyertakan nilai untuk sebagian elemen, maka sisa elemen lainnya yang tidak disebutkan otomatis diisi nilai nol (zero-initialized).'
    },
    {
      id: 'quiz-dasprog-5-19',
      question: 'Bagaimana cara menentukan banyak elemen dari array statis pada C++: int arr[] = {4, 8, 15, 16, 23, 42}; secara otomatis?',
      options: [
        'sizeof(arr) / sizeof(arr[0])',
        'arr.length()',
        'count(arr)',
        'sizeof(arr)'
      ],
      correctAnswer: 0,
      explanation: 'Operator sizeof(arr) mengembalikan total ukuran array dalam byte (misal 6 elemen * 4 byte = 24 byte). Dibagi dengan ukuran satu elemen sizeof(arr[0]) (4 byte), menghasilkan jumlah elemen: 24 / 4 = 6 elemen.'
    },
    {
      id: 'quiz-dasprog-5-20',
      question: 'Apa perbedaan antara Array Statis (alokasi di Stack) dengan Array Dinamis (alokasi via new[] / malloc di Heap)?',
      options: [
        'Array statis memiliki ukuran tetap yang ditentukan saat kompilasi dan memorinya dibebaskan otomatis, sedangkan array dinamis dapat ditentukan ukurannya saat runtime dan wajib dibebaskan manual via delete[].',
        'Array dinamis hanya dapat menyimpan data bertipe string.',
        'Array statis disimpan di kartu grafis, sedangkan array dinamis di RAM.',
        'Tidak ada perbedaan, keduanya identik.'
      ],
      correctAnswer: 0,
      explanation: 'Array statis dialokasikan di stack dengan ukuran konstan saat kompilasi. Array dinamis dialokasikan di heap saat program berjalan (runtime), memungkinkan ukuran fleksibel sesuai input pengguna, namun programmer bertanggung jawab membebaskannya dengan delete[] untuk mencegah memory leak.'
    }
  ]
};
