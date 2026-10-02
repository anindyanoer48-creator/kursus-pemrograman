export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const MODULE_QUIZZES: Record<string, QuizQuestion[]> = {
  fondasi: [
    {
      id: 'quiz-fondasi-1',
      question: 'Mengapa pengukuran waktu eksekusi program menggunakan stopwatch atau timer CPU (wall-clock time) tidak dijadikan standar ilmiah dalam analisis efisiensi algoritma?',
      options: [
        'Karena waktu riil dipengaruhi oleh hardware, clock-rate prosesor, compiler, sistem operasi, dan background tasks.',
        'Karena waktu riil selalu menghasilkan angka yang bernilai negatif pada data masukan berukuran besar.',
        'Karena stopwatch tidak dapat mengukur satuan mikrodetik pada bahasa pemrograman modern.',
        'Karena bahasa pemrograman tingkat tinggi tidak memiliki akses langsung ke register pewaktu prosesor.'
      ],
      correctAnswer: 0,
      explanation: 'Waktu eksekusi riil (wall-clock time) tidak objektif karena bergantung pada variabel eksternal seperti arsitektur CPU, optimasi compiler (-O3), penjadwalan OS, dan beban sistem saat pengujian. Analisis kompleksitas menghitung laju pertumbuhan jumlah operasi terhadap ukuran input (n).'
    },
    {
      id: 'quiz-fondasi-2',
      question: 'Apa definisi dari "Operasi Dasar" (Basic Operation) dalam analisis kompleksitas algoritma?',
      options: [
        'Operasi deklarasi variabel global di awal program.',
        'Operasi yang berada di loop terdalam atau paling sering dieksekusi, yang memberikan kontribusi terbesar terhadap total waktu berjalan.',
        'Operasi input-output seperti printf atau cin.',
        'Operasi pengalokasian memori dinamis malloc/new.'
      ],
      correctAnswer: 1,
      explanation: 'Operasi dasar (basic operation) adalah operasi yang paling mendominasi total waktu berjalan algoritma, biasanya berlokasi pada loop terdalam atau inti fungsi rekursif. Total waktu berbanding lurus dengan jumlah eksekusi operasi dasar ini: T(n) ≈ c_op · C(n).'
    },
    {
      id: 'quiz-fondasi-3',
      question: 'Pada algoritma Sequential Search (Pencarian Linear) untuk mencari elemen x pada array berukuran n, apa kondisi yang menghasilkan Best-Case dan berapa kompleksitasnya?',
      options: [
        'Elemen x berada pada indeks terakhir; O(n)',
        'Elemen x berada pada indeks pertama; O(1)',
        'Elemen x tidak ditemukan di dalam array; O(n)',
        'Array dalam keadaan terurut membesar; O(log n)'
      ],
      correctAnswer: 1,
      explanation: 'Best-case Sequential Search terjadi saat elemen yang dicari langsung ditemukan pada iterasi pertama (indeks ke-0), sehingga loop langsung berhenti setelah 1 perbandingan saja: C_min(n) = 1 = O(1).'
    },
    {
      id: 'quiz-fondasi-4',
      question: 'Manakah pernyataan yang BENAR mengenai hubungan antara Big-O dan Worst-Case?',
      options: [
        'Big-O adalah nama lain dari Worst-Case; keduanya memiliki arti yang persis sama.',
        'Big-O adalah batas atas asimptotik matematis yang dapat diterapkan pada skenario apa pun (Worst, Best, atau Average case).',
        'Worst-Case selalu bernilai O(n²), sedangkan Best-Case selalu bernilai O(1).',
        'Big-O hanya boleh digunakan jika algoritma tidak memiliki percabangan kondisional (if-else).'
      ],
      correctAnswer: 1,
      explanation: 'Miskonsepsi umum adalah menganggap Big-O sama dengan worst-case. Faktanya, Worst-case adalah skenario susunan data masukan terburuk, sedangkan Big-O adalah notasi matematika batas atas. Anda bisa mengatakan: "Best-case Sequential Search adalah O(1)", yang sepenuhnya valid.'
    },
    {
      id: 'quiz-fondasi-5',
      question: 'Apa perbedaan antara Space Complexity (Kompleksitas Ruang) dan Auxiliary Space?',
      options: [
        'Space Complexity hanya mengukur memori cache L1, sedangkan Auxiliary Space mengukur memori RAM.',
        'Space Complexity mencakup total seluruh memori (termasuk input data), sedangkan Auxiliary Space hanya memori ekstra sementara yang dialokasikan oleh algoritma.',
        'Auxiliary Space hanya relevan untuk algoritma iteratif, bukan rekursif.',
        'Tidak ada perbedaan, kedua istilah tersebut merupakan sinonim.'
      ],
      correctAnswer: 1,
      explanation: 'Total Space Complexity = Input Space + Auxiliary Space. Auxiliary Space adalah memori tambahan sementara yang digunakan oleh algoritma (misal variabel lokal, temporary array, atau call stack frames).'
    },
    {
      id: 'quiz-fondasi-6',
      question: 'Mengapa skenario Worst-Case paling sering dijadikan standar utama dalam rekayasa perangkat lunak dan industri?',
      options: [
        'Karena Worst-Case selalu paling mudah dihitung daripada Best-Case.',
        'Karena Worst-Case memberikan garansi batas atas absolut (upper bound guarantee) bahwa algoritma tidak akan pernah berjalan lebih lambat dari nilai tersebut.',
        'Karena data di dunia nyata 100% selalu dalam susunan terburuk.',
        'Karena bahasa pemrograman modern menolak kompilasi jika Worst-Case tidak ditentukan.'
      ],
      correctAnswer: 1,
      explanation: 'Worst-case menjamin toleransi batas waktu maksimum (SLA - Service Level Agreement). Sistem mission-critical (penerbangan, transaksi finansial, kontrol medis) membutuhkan jaminan pasti bahwa sistem tidak akan melebihi batas waktu toleransi terburuk.'
    },
    {
      id: 'quiz-fondasi-7',
      question: 'Algoritma A memiliki kompleksitas waktu 1000n, sedangkan Algoritma B memiliki kompleksitas 0.01n². Untuk masukan n = 50, algoritma mana yang mengeksekusi operasi lebih sedikit?',
      options: [
        'Algoritma A (50.000 operasi) vs Algoritma B (25 operasi); Algoritma B jauh lebih sedikit.',
        'Algoritma A (1.000 operasi) vs Algoritma B (50 operasi); Algoritma B lebih sedikit.',
        'Algoritma A selalu lebih cepat untuk semua nilai n karena berorde linear.',
        'Kedua algoritma melakukan jumlah operasi yang sama persis.'
      ],
      correctAnswer: 0,
      explanation: 'Untuk n = 50: Algoritma A = 1000(50) = 50.000 operasi. Algoritma B = 0.01(50)² = 0.01(2500) = 25 operasi! Di sini algoritma kuadratik B jauh lebih cepat karena n masih di bawah titik potong (n < 100.000). Ini membuktikan pentingnya memahami konstanta tersembunyi untuk ukuran n kecil.'
    },
    {
      id: 'quiz-fondasi-8',
      question: 'Jika ukuran masukan n merepresentasikan sebuah integer berukuran nilai N, berapa ukuran masukan n dalam konteks teori komputasi?',
      options: [
        'Nilai integer N itu sendiri.',
        'Jumlah bit yang dibutuhkan untuk merepresentasikan integer tersebut: b = ⌊log₂ N⌋ + 1.',
        'Selalu berukuran 32 bit atau 64 bit tanpa bergantung nilai N.',
        'N kuadrat.'
      ],
      correctAnswer: 1,
      explanation: 'Dalam analisis kompleksitas formal untuk algoritma bilangan (seperti uji keprimaan atau faktorisasi), ukuran input didefinisikan sebagai panjang representasi bitnya: b = ⌊log₂ N⌋ + 1 bit. Oleh karena itu algoritma O(N) sebenarnya berorde eksponensial terhadap ukuran input bit O(2^b).'
    },
    {
      id: 'quiz-fondasi-9',
      question: 'Pada algoritma pencarian linear terhadap array berukuran n dengan asumsi target x pasti ada di dalam array dan setiap posisi memiliki probabilitas sama (1/n), berapa rata-rata operasi perbandingan C_avg(n)?',
      options: [
        'C_avg(n) = n',
        'C_avg(n) = (n + 1) / 2',
        'C_avg(n) = log₂ n',
        'C_avg(n) = n² / 2'
      ],
      correctAnswer: 1,
      explanation: 'C_avg(n) = ∑_{i=1}^n (1/n) · i = (1/n) · (n(n+1)/2) = (n + 1) / 2. Rata-rata pencarian memeriksa sekitar separuh dari total elemen array, yang tetap berada dalam kelas efisiensi Θ(n).'
    },
    {
      id: 'quiz-fondasi-10',
      question: 'Apa yang dimaksud dengan "Amortized Analysis" (Analisis Teramortisasi)?',
      options: [
        'Menghitung waktu tercepat ketika kode dijalankan pada superkomputer.',
        'Menghitung rata-rata biaya per operasi dalam rangkaian urutan operasi panjang (sequence of operations), di mana operasi mahal jarang terjadi dan ditutupi oleh operasi murah yang sering.',
        'Mengukur konsumsi daya listrik CPU selama program berjalan.',
        'Analisis khusus yang hanya berlaku untuk graf berbobot negatif.'
      ],
      correctAnswer: 1,
      explanation: 'Analisis Teramortisasi menjamin rata-rata kinerja per operasi dalam rangkaian panjang. Contoh klasik adalah dynamic array (std::vector di C++ atau list di Python): sesekali terjadi alokasi ulang berbiaya O(n), tetapi n operasi append lainnya hanya berbiaya O(1), sehingga rata-rata biaya teramortisasi per append adalah O(1).'
    },
    {
      id: 'quiz-fondasi-11',
      question: 'Jika algoritma X memerlukan waktu 0.005 detik untuk n = 100 dan 0.05 detik untuk n = 1.000 pada mesin yang sama, pola pertumbuhan waktu tersebut paling mendekati:',
      options: [
        'Linear Θ(n)',
        'Kuadratik Θ(n²)',
        'Eksponensial Θ(2ⁿ)',
        'Logaritmik Θ(log n)'
      ],
      correctAnswer: 0,
      explanation: 'Ketika n bertambah 10 kali lipat (dari 100 ke 1.000), waktu juga bertambah tepat 10 kali lipat (dari 0.005 detik ke 0.05 detik). Rasio pertambahan waktu = rasio pertambahan input (10x), yang mengindikasikan kompleksitas linear Θ(n).'
    },
    {
      id: 'quiz-fondasi-12',
      question: 'Manakah dari struktur data berikut yang memiliki operasi pencarian elemen (search) bernilai Worst-Case O(1)?',
      options: [
        'Array terurut (Sorted Array)',
        'Hash Table ideal tanpa collision (atau Direct Address Table)',
        'Balanced Binary Search Tree (AVL Tree)',
        'Singly Linked List'
      ],
      correctAnswer: 1,
      explanation: 'Direct Address Table atau Hash Table sempurna tanpa tumbukan (perfect hashing) dapat memetakan kunci langsung ke indeks memori melalui fungsi hash dalam waktu konstan O(1).'
    },
    {
      id: 'quiz-fondasi-13',
      question: 'Jika suatu algoritma memiliki kompleksitas waktu O(n) dan kompleksitas ruang O(1), algoritma tersebut dikategorikan sebagai:',
      options: [
        'In-place algorithm dengan waktu linear.',
        'Out-of-place algorithm dengan waktu logaritmik.',
        'Divide-and-conquer dengan waktu kuadratik.',
        'Algoritma rekursif eksponensial.'
      ],
      correctAnswer: 0,
      explanation: 'Algoritma disebut in-place jika hanya menggunakan jumlah memori pembantu (auxiliary space) konstan O(1) di luar memori input aslinya.'
    },
    {
      id: 'quiz-fondasi-14',
      question: 'Apa akibat jika pengembang hanya menguji algoritma pada Best-Case saat proses audit performa perangkat lunak?',
      options: [
        'Aplikasi akan selalu berjalan optimal di produksi tanpa risiko.',
        'Aplikasi berisiko crash atau mengalami bottleneck parah ketika menerima data tak terduga atau serangan DoS di lingkungan produksi.',
        'Compiler akan menolak menghasilkan file binary executable.',
        'Kompleksitas waktu otomatis berubah menjadi O(1).'
      ],
      correctAnswer: 1,
      explanation: 'Menguji hanya Best-case memberikan ilusi kecepatan yang salah. Di dunia nyata (misal serangan Algorithmic Complexity Attack), pengguna atau penyerang dapat mengirim input skenario terburuk yang menyebabkan CPU 100% dan server hang.'
    },
    {
      id: 'quiz-fondasi-15',
      question: 'Manakah pernyataan yang BENAR mengenai parameter ukuran masukan n pada perkalian matriks dua dimensi berukuran n x n?',
      options: [
        'Ukuran input n adalah jumlah elemen matriks, yaitu n².',
        'Parameter n menyatakan dimensi baris/kolom matriks, sedangkan total elemen masukan adalah 2n².',
        'Ukuran input selalu bernilai n³.',
        'Ukuran input tidak mempengaruhi perkalian matriks.'
      ],
      correctAnswer: 1,
      explanation: 'Dalam literatur algoritma perkalian matriks standar (seperti algoritma O(n³)), n merujuk pada dimensi ordo matriks n x n. Total data masukan dari dua matriks adalah 2n² elemen.'
    },
    {
      id: 'quiz-fondasi-16',
      question: 'Algoritma yang memiliki Average-Case yang baik tetapi Worst-Case yang buruk adalah:',
      options: [
        'Merge Sort (Average O(n log n), Worst O(n log n))',
        'Quick Sort naif (Average O(n log n), Worst O(n²))',
        'Binary Search (Average O(log n), Worst O(log n))',
        'Heap Sort (Average O(n log n), Worst O(n log n))'
      ],
      correctAnswer: 1,
      explanation: 'Quick Sort dengan pemilihan pivot naif (elemen pertama/terakhir) memiliki rata-rata O(n log n) yang sangat cepat di dunia nyata, tetapi jika input sudah terurut, partisi menjadi tidak seimbang dan memburuk menjadi O(n²).'
    },
    {
      id: 'quiz-fondasi-17',
      question: 'Dalam model komputasi RAM (Random Access Machine) standar yang digunakan dalam analisis algoritma, berapa biaya waktu yang diasumsikan untuk satu operasi aritmatika dasar (seperti penambahan atau perbandingan)?',
      options: [
        'O(1) unit waktu (konstan)',
        'O(n) unit waktu',
        'O(log n) unit waktu',
        'Bergantung pada merek monitor yang digunakan'
      ],
      correctAnswer: 0,
      explanation: 'Model RAM mengasumsikan bahwa instruksi dasar (penjumlahan, pengurangan, perbandingan, pengaksesan memori melalui pointer) dieksekusi dalam waktu konstan O(1).'
    },
    {
      id: 'quiz-fondasi-18',
      question: 'Jika fungsi T(n) = 3n² + 40n + 1500, bagian manakah yang mendominasi nilai T(n) saat n mendekati tak hingga (n → ∞)?',
      options: [
        'Konstanta 1500',
        'Suku linear 40n',
        'Suku kuadratik 3n²',
        'Semua suku memiliki kontribusi yang persis sama'
      ],
      correctAnswer: 2,
      explanation: 'Untuk n yang sangat besar (asimptotik), suku berpangkat tertinggi (3n²) mendominasi lebih dari 99% nilai total T(n). Suku derajat rendah dan konstanta menjadi tidak signifikan terhadap laju pertumbuhan.'
    },
    {
      id: 'quiz-fondasi-19',
      question: 'Mengapa operasi swap (penukaran dua elemen) pada Bubble Sort dapat dianggap sebagai operasi dasar selain perbandingan?',
      options: [
        'Karena swap selalu dieksekusi lebih banyak daripada perbandingan.',
        'Karena swap melibatkan 3 kali operasi assignment memori dan mencerminkan jumlah inversi pada array yang belum terurut.',
        'Karena swap tidak membutuhkan memori sementara.',
        'Karena swap dieksekusi di luar loop.'
      ],
      correctAnswer: 1,
      explanation: 'Pada sorting berbasis pertukaran, jumlah swap berbanding lurus dengan jumlah inversi pasangan elemen yang tidak terurut. Pada skenario terburuk (array terbalik), swap dieksekusi sebanyak n(n-1)/2 kali.'
    },
    {
      id: 'quiz-fondasi-20',
      question: 'Sebuah fungsi memiliki dua bagian berurutan: Bagian 1 memproses perulangan O(n log n) dan Bagian 2 memproses perulangan O(n²). Berdasarkan aturan penjumlahan, kompleksitas total fungsi adalah:',
      options: [
        'O(n log n)',
        'O(n³ log n)',
        'O(n²)',
        'O(n² + n log n) yang tidak dapat disederhanakan'
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan Aturan Penjumlahan (Sum Rule): T(n) = O(f(n) + g(n)) = O(max(f(n), g(n))). Karena n² tumbuh lebih cepat daripada n log n, maka total kompleksitasnya adalah O(n²).'
    }
  ],

  asimptotik: [
    {
      id: 'quiz-asimptotik-1',
      question: 'Secara definisi matematika formal, f(n) = O(g(n)) jika dan hanya jika terdapat konstanta positif c dan n₀ sedemikian sehingga:',
      options: [
        'f(n) ≥ c · g(n) untuk semua n ≥ n₀',
        '0 ≤ f(n) ≤ c · g(n) untuk semua n ≥ n₀',
        'f(n) = c · g(n) untuk semua n = n₀',
        'f(n) + g(n) ≤ c untuk semua n < n₀'
      ],
      correctAnswer: 1,
      explanation: 'Definisi formal Big-O: 0 ≤ f(n) ≤ c · g(n), ∀ n ≥ n₀. Artinya fungsi f(n) tidak akan pernah melampaui kelipatan c dari g(n) untuk semua n yang cukup besar (n ≥ n₀).'
    },
    {
      id: 'quiz-asimptotik-2',
      question: 'Apa perbedaan antara notasi Big-O (O) dan Little-o (o)?',
      options: [
        'Big-O adalah batas atas yang longgar (boleh ketat / ≤), sedangkan Little-o adalah batas atas yang strictly strictly strictly lebih lambat (strictly <), di mana lim (f(n)/g(n)) = 0 saat n → ∞.',
        'Big-O digunakan untuk algoritma iteratif, sedangkan Little-o hanya untuk rekursif.',
        'Little-o adalah kebalikan dari Big-O.',
        'Little-o hanya berlaku jika n < 100.'
      ],
      correctAnswer: 0,
      explanation: 'Big-O mengizinkan f(n) bertumbuh pada laju yang sama dengan g(n) (misal 2n = O(n)). Namun Little-o mensyaratkan f(n) tumbuh strictly lebih lambat daripada g(n) (misal 2n = o(n²), tetapi 2n ≠ o(n)), ditandai dengan limit rasio bernilai 0.'
    },
    {
      id: 'quiz-asimptotik-3',
      question: 'Jika f(n) = Ω(g(n)) dan pada saat yang sama f(n) = O(g(n)), maka kesimpulan yang pasti benar adalah:',
      options: [
        'f(n) = o(g(n))',
        'f(n) = Θ(g(n))',
        'f(n) = ω(g(n))',
        'f(n) tidak memiliki relasi asimptotik dengan g(n)'
      ],
      correctAnswer: 1,
      explanation: 'Teorema Big-Theta (Tight Bound): f(n) = Θ(g(n)) ⟺ f(n) = O(g(n)) dan f(n) = Ω(g(n)). Ini membuktikan bahwa g(n) mengapit f(n) dari atas dan dari bawah dengan rasio konstanta positif.'
    },
    {
      id: 'quiz-asimptotik-4',
      question: 'Urutan hierarki orde pertumbuhan asimptotik dari yang paling efisien (paling lambat bertambah) hingga yang paling boros (paling cepat meledak) adalah:',
      options: [
        'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)',
        'O(1) < O(n) < O(log n) < O(n²) < O(n log n) < O(n!) < O(2ⁿ)',
        'O(log n) < O(1) < O(n) < O(n²) < O(n log n) < O(2ⁿ) < O(n!)',
        'O(1) < O(log n) < O(n log n) < O(n) < O(n²) < O(n!) < O(2ⁿ)'
      ],
      correctAnswer: 0,
      explanation: 'Urutan baku: Konstan O(1) < Logaritmik O(log n) < Linear O(n) < Linear-Logaritmik O(n log n) < Kuadratik O(n²) < Eksponensial O(2ⁿ) < Faktorial O(n!).'
    },
    {
      id: 'quiz-asimptotik-5',
      question: 'Mengapa basis logaritma tidak dicantumkan dalam notasi Big-O (misal kita menulis O(log n) bukan O(log₂ n) atau O(log₁₀ n))?',
      options: [
        'Karena semua komputer hanya dapat menghitung logaritma natural (basis e).',
        'Karena rumus perubahan basis log_a(n) = log_b(n) / log_b(a); nilai 1 / log_b(a) hanyalah konstanta pengali skalar yang diabaikan dalam Big-O.',
        'Karena logaritma basis 2 dan basis 10 menghasilkan nilai yang sama untuk n > 1000.',
        'Karena penulisan basis dianggap memakan memori berlebih.'
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan sifat logaritma: log_a n = (1 / log_b a) · log_b n. Karena a dan b adalah basis konstan, 1 / log_b a hanyalah sebuah konstanta c. Dalam notasi asimptotik O(c · g(n)) = O(g(n)), sehingga seluruh basis logaritma setara secara asimptotik.'
    },
    {
      id: 'quiz-asimptotik-6',
      question: 'Namun, kapankah basis logaritma TIDAK BOLEH diabaikan karena menghasilkan kelas pertumbuhan yang berbeda?',
      options: [
        'Ketika logaritma berada di dalam fungsi trigonometri.',
        'Ketika logaritma berada pada eksponen (pangkat), contoh: 2^(log₂ n) = n, sedangkan 2^(log₃ n) = n^(log₃ 2) ≈ n^(0.631) ≠ n.',
        'Ketika nilai n bernilai ganjil.',
        'Ketika logaritma dikalikan dengan nol.'
      ],
      correctAnswer: 1,
      explanation: 'Basis logaritma hanya boleh diabaikan jika menjadi faktor pengali biasa. Jika logaritma berada pada posisi pangkat/eksponen, perubahan basis menghasilkan eksponen polinomial yang berbeda: 2^(log₂ n) = n, sedangkan 2^(log₄ n) = √n = Θ(n^(0.5)) ≠ Θ(n).'
    },
    {
      id: 'quiz-asimptotik-7',
      question: 'Hitung nilai limit lim_{n → ∞} (n¹⁰⁰ / 1.01ⁿ) untuk membandingkan pertumbuhan polinomial vs eksponensial:',
      options: [
        '∞ (tak hingga; polinomial mendominasi eksponensial)',
        '1 (keduanya tumbuh pada laju yang sama)',
        '0 (eksponensial mendominasi polinomial secara mutlak)',
        '100 / 1.01'
      ],
      correctAnswer: 2,
      explanation: 'Melalui penerapan Aturan L\'Hôpital sebanyak 100 kali berturut-turut, turunan pembilang menjadi konstanta (100!), sedangkan penyebut tetap memuat 1.01ⁿ · (ln 1.01)¹⁰⁰ yang terus menuju tak hingga. Maka limitnya adalah 0. Ini membuktikan fungsi eksponensial basis > 1 selalu mendominasi polinomial derajat apapun.'
    },
    {
      id: 'quiz-asimptotik-8',
      question: 'Apakah fungsi f(n) = 2^(n+1) berada dalam kelas efisiensi O(2ⁿ)?',
      options: [
        'Ya, karena 2^(n+1) = 2 · 2ⁿ, dan angka 2 adalah konstanta c sehingga 2^(n+1) ≤ 2 · 2ⁿ memenuhi definisi Big-O.',
        'Tidak, karena ada penambahan +1 pada pangkat yang membuatnya berorde kuadratik.',
        'Tidak, karena eksponen tidak boleh memiliki operasi penjumlahan.',
        'Hanya benar jika n bernilai genap.'
      ],
      correctAnswer: 0,
      explanation: '2^(n+1) = 2¹ · 2ⁿ = 2 · 2ⁿ. Dengan memilih konstanta c = 2 dan n₀ = 1, maka 2^(n+1) ≤ 2 · 2ⁿ terpenuhi untuk semua n ≥ 1. Jadi 2^(n+1) = O(2ⁿ).'
    },
    {
      id: 'quiz-asimptotik-9',
      question: 'Apakah fungsi f(n) = 2^(2n) berada dalam kelas efisiensi O(2ⁿ)?',
      options: [
        'Ya, karena angka 2 pada pangkat dapat diabaikan sebagai konstanta.',
        'Tidak, karena 2^(2n) = (2²)ⁿ = 4ⁿ. Tidak ada konstanta c yang dapat memenuhi 4ⁿ ≤ c · 2ⁿ untuk n menuju tak hingga (karena (4/2)ⁿ = 2ⁿ → ∞).',
        'Ya, karena keduanya berbasis 2.',
        'Bergantung pada compiler bahasa pemrograman.'
      ],
      correctAnswer: 1,
      explanation: '2^(2n) = 4ⁿ. Rasio limit: lim_{n → ∞} (4ⁿ / 2ⁿ) = lim (2ⁿ) = ∞. Karena limitnya tak hingga, 4ⁿ bertumbuh jauh lebih cepat daripada 2ⁿ, sehingga 2^(2n) ≠ O(2ⁿ).'
    },
    {
      id: 'quiz-asimptotik-10',
      question: 'Fungsi f(n) = n · sin(n) tidak dapat diklasifikasikan ke dalam Big-Theta Θ(n) maupun Θ(1). Mengapa?',
      options: [
        'Karena fungsi trigonometri tidak diizinkan dalam ilmu komputer.',
        'Karena nilai sin(n) berosilasi terus-menerus antara -1 dan +1 sehingga f(n) berulang kali menyentuh 0, menggagalkan syarat batas bawah konstan positif c₁ > 0 pada Big-Theta.',
        'Karena nilai n negatif pada sinus.',
        'Karena limit sin(n) saat n → ∞ adalah 1.'
      ],
      correctAnswer: 1,
      explanation: 'Big-Theta membutuhkan c₁ · g(n) ≤ f(n) ≤ c₂ · g(n) untuk SEMUA n ≥ n₀ dengan c₁ > 0. Karena sin(n) bernilai 0 pada interval berkala (dan bernilai negatif), maka f(n) tidak dapat dibatasi dari bawah oleh c₁ · n dengan c₁ positif.'
    },
    {
      id: 'quiz-asimptotik-11',
      question: 'Jika f(n) = O(g(n)), manakah dari pernyataan berikut yang BELUM TENTU benar?',
      options: [
        'g(n) = Ω(f(n))',
        'f(n) bertumbuh tidak lebih cepat daripada g(n)',
        'f(n) = Θ(g(n))',
        'Terdapat konstanta c dan n₀ yang memenuhi f(n) ≤ c · g(n)'
      ],
      correctAnswer: 2,
      explanation: 'f(n) = O(g(n)) adalah batas atas (≤). Contohnya n = O(n²), tetapi n ≠ Θ(n²) karena n tidak bertumbuh pada laju yang sama dengan n².'
    },
    {
      id: 'quiz-asimptotik-12',
      question: 'Berapa kompleksitas asimptotik dari fungsi f(n) = log(n!)?',
      options: [
        'Θ(n)',
        'Θ(n log n)',
        'Θ(n²)',
        'Θ(2ⁿ)'
      ],
      correctAnswer: 1,
      explanation: 'Melalui Aproksimasi Stirling: n! ≈ √(2πn) · (n/e)ⁿ. Dengan menerapkan logaritma: log(n!) = log(√(2πn)) + n log(n/e) = n log n - n log e + O(log n) = Θ(n log n).'
    },
    {
      id: 'quiz-asimptotik-13',
      question: 'Jika lim_{n → ∞} [f(n) / g(n)] = c, di mana c adalah konstanta positif (0 < c < ∞), maka relasi asimptotik antara f(n) dan g(n) adalah:',
      options: [
        'f(n) = o(g(n))',
        'f(n) = ω(g(n))',
        'f(n) = Θ(g(n))',
        'f(n) tidak dapat dibandingkan dengan g(n)'
      ],
      correctAnswer: 2,
      explanation: 'Berdasarkan Limit Ratio Test: Jika nilai limit rasio berada di antara 0 dan tak hingga (0 < c < ∞), maka f(n) dan g(n) memiliki laju pertumbuhan orde yang sama persis: f(n) = Θ(g(n)).'
    },
    {
      id: 'quiz-asimptotik-14',
      question: 'Berapa kelas kompleksitas dari f(n) = 3n³ + 5n² log n + 100n + 7?',
      options: [
        'Θ(n² log n)',
        'Θ(n³)',
        'Θ(n³ log n)',
        'Θ(n⁴)'
      ],
      correctAnswer: 1,
      explanation: 'Suku dengan derajat pertumbuhan tertinggi adalah 3n³ (karena n³ bertumbuh lebih cepat daripada n² log n). Berdasarkan aturan dominasi suku, konstanta pengali 3 diabaikan dan menghasilkan kelas efisiensi Θ(n³).'
    },
    {
      id: 'quiz-asimptotik-15',
      question: 'Manakah di antara fungsi berikut yang bertumbuh PALING LAMBAT saat n → ∞?',
      options: [
        'f₁(n) = 100 log n',
        'f₂(n) = √n',
        'f₃(n) = log² n  (yaitu (log n)²)',
        'f₄(n) = n / log n'
      ],
      correctAnswer: 0,
      explanation: 'Pertumbuhan logaritmik tunggal log n jauh lebih lambat daripada log² n, √n = n^(0.5), maupun n / log n. Konstanta 100 tidak mengubah laju pertumbuhannya yang tetap O(log n).'
    },
    {
      id: 'quiz-asimptotik-16',
      question: 'Apakah pernyataan berikut benar: "Jika algoritma memiliki batas atas O(n²), maka algoritma tersebut juga pasti memiliki batas atas O(n³)"?',
      options: [
        'Benar, karena Big-O adalah batas atas; jika fungsi dibatasi oleh n², fungsi tersebut tentu juga dibatasi oleh fungsi yang tumbuh lebih cepat seperti n³.',
        'Salah, karena setiap algoritma hanya memiliki satu Big-O yang unik.',
        'Salah, karena n³ lebih lambat dari n².',
        'Hanya benar untuk algoritma sorting.'
      ],
      correctAnswer: 0,
      explanation: 'Benar secara definisi matematika formal Big-O. Jika f(n) ≤ c · n², maka f(n) ≤ c · n³ untuk semua n ≥ 1. Namun dalam praktik, kita selalu mencari batas atas yang paling ketat (tightest upper bound).'
    },
    {
      id: 'quiz-asimptotik-17',
      question: 'Apa arti dari notasi f(n) = Big-Omega Ω(g(n)) dalam konteks batas performa?',
      options: [
        'Algoritma dijamin akan selesai dalam waktu maksimal g(n).',
        'Algoritma membutuhkan waktu minimal sebanding dengan g(n) untuk input yang cukup besar; ini adalah batas bawah (lower bound).',
        'Algoritma memiliki performa rata-rata g(n).',
        'Algoritma hanya dapat berjalan di prosesor 64-bit.'
      ],
      correctAnswer: 1,
      explanation: 'Notasi Big-Omega (Ω) menetapkan batas bawah (lower bound). Jika sebuah masalah memiliki batas bawah kompleksitas Ω(n log n) (seperti sorting berbasis perbandingan), artinya mustahil membuat algoritma perbandingan yang berjalan lebih cepat dari n log n pada kasus terburuk.'
    },
    {
      id: 'quiz-asimptotik-18',
      question: 'Jika T₁(n) = O(f(n)) dan T₂(n) = O(g(n)), maka kompleksitas perkalian T₁(n) · T₂(n) adalah:',
      options: [
        'O(f(n) + g(n))',
        'O(f(n) · g(n))',
        'O(max(f(n), g(n)))',
        'O(min(f(n), g(n)))'
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan Aturan Perkalian Asimptotik (Product Rule): Jika f₁(n) = O(g₁(n)) dan f₂(n) = O(g₂(n)), maka f₁(n) · f₂(n) = O(g₁(n) · g₂(n)). Ini adalah prinsip dasar analisis loop bersarang (nested loops).'
    },
    {
      id: 'quiz-asimptotik-19',
      question: 'Berapakah nilai limit lim_{n → ∞} [log(n²) / log(n)]?',
      options: [
        '1',
        '2',
        '∞',
        '0'
      ],
      correctAnswer: 1,
      explanation: 'Berdasarkan sifat logaritma: log(n²) = 2 log n. Maka limitnya adalah lim_{n → ∞} [2 log n / log n] = 2. Hal ini menunjukkan bahwa log(n²) = Θ(log n), yaitu berada dalam kelas efisiensi yang sama persis.'
    },
    {
      id: 'quiz-asimptotik-20',
      question: 'Manakah dari pasangan fungsi berikut yang memiliki hubungan f(n) = Θ(g(n))?',
      options: [
        'f(n) = 2ⁿ  dan  g(n) = 3ⁿ',
        'f(n) = log₂(n)  dan  g(n) = ln(n)',
        'f(n) = n!  dan  g(n) = 2ⁿ',
        'f(n) = n²  dan  g(n) = n² log n'
      ],
      correctAnswer: 1,
      explanation: 'Karena log₂(n) = ln(n) / ln(2) = (1 / 0.693) · ln(n), rasio keduanya adalah konstanta murni c = 1 / ln(2). Maka log₂(n) = Θ(ln n). Pilihan lain memiliki rasio limit 0 atau ∞.'
    }
  ],

  matematika: [
    {
      id: 'quiz-matematika-1',
      question: 'Berapa hasil dari evaluasi jumlahan deret konstan ∑_{i=l}^u 1 (di mana l ≤ u)?',
      options: [
        'u - l',
        'u - l + 1',
        'u + l',
        '(u - l) / 2'
      ],
      correctAnswer: 1,
      explanation: 'Jumlah suku yang dijumlahkan dari batas bawah l hingga batas atas u (inklusif) adalah u - l + 1. Contoh: dari i = 3 sampai i = 7 ada sebanyak 7 - 3 + 1 = 5 suku konstan.'
    },
    {
      id: 'quiz-matematika-2',
      question: 'Berapakah rumus tertutup (closed-form formula) dari deret aritmatika Gauss ∑_{i=1}^n i = 1 + 2 + 3 + ... + n?',
      options: [
        'n(n - 1) / 2',
        'n(n + 1) / 2',
        'n²',
        '2ⁿ - 1'
      ],
      correctAnswer: 1,
      explanation: 'Rumus deret aritmatika Gauss adalah n(n + 1) / 2 = (n² + n) / 2 = Θ(n²). Rumus ini adalah fondasi paling esensial dalam menganalisis loop bersarang segitiga.'
    },
    {
      id: 'quiz-matematika-3',
      question: 'Berapa hasil jumlahan deret kuadrat ∑_{i=1}^n i² = 1² + 2² + 3² + ... + n²?',
      options: [
        'n(n + 1)(2n + 1) / 6 = Θ(n³)',
        'n²(n + 1)² / 4 = Θ(n⁴)',
        'n(n + 1) / 2 = Θ(n²)',
        '2ⁿ = Θ(2ⁿ)'
      ],
      correctAnswer: 0,
      explanation: 'Rumus deret jumlah kuadrat: ∑_{i=1}^n i² = [n(n + 1)(2n + 1)] / 6 = (2n³ + 3n² + n) / 6 = Θ(n³).'
    },
    {
      id: 'quiz-matematika-4',
      question: 'Berapa hasil dari deret geometri hingga ∑_{i=0}^k 2ⁱ = 1 + 2 + 4 + 8 + ... + 2ᵏ?',
      options: [
        '2ᵏ',
        '2^(k+1) - 1',
        '2^(k-1)',
        'k · 2ᵏ'
      ],
      correctAnswer: 1,
      explanation: 'Rumus deret geometri dengan rasio r = 2: ∑_{i=0}^k rⁱ = (r^(k+1) - 1) / (r - 1). Untuk r = 2, penyebutnya adalah 2 - 1 = 1, sehingga hasilnya adalah 2^(k+1) - 1.'
    },
    {
      id: 'quiz-matematika-5',
      question: 'Apa definisi dan nilai asimptotik dari Deret Harmonik H_n = ∑_{k=1}^n (1 / k) = 1 + 1/2 + 1/3 + ... + 1/n?',
      options: [
        'H_n konvergen ke angka 2; Θ(1)',
        'H_n bertumbuh sebanding dengan logaritma natural: H_n = ln n + γ + O(1/n) = Θ(log n)',
        'H_n bertumbuh linear: Θ(n)',
        'H_n bertumbuh kuadratik: Θ(n²)'
      ],
      correctAnswer: 1,
      explanation: 'Deret Harmonik H_n divergen lambat sebanding dengan ln(n). Nilai H_n = ln(n) + γ (konstanta Euler-Mascheroni ≈ 0.5772) = Θ(log n). Deret ini sering muncul saat menganalisis quicksort average case dan algoritma harmonic step.'
    },
    {
      id: 'quiz-matematika-6',
      question: 'Berdasarkan teknik pendekatan penjumlahan dengan integral (Approximation by Integrals) untuk fungsi f(x) yang monoton naik (monotonically increasing), pertidaksamaan yang berlaku adalah:',
      options: [
        '∫_{0}^{n} f(x) dx ≤ ∑_{i=1}^{n} f(i) ≤ ∫_{1}^{n+1} f(x) dx',
        '∑_{i=1}^{n} f(i) = ∫_{0}^{n} f(x) dx',
        '∫_{1}^{n} f(x) dx ≥ ∑_{i=1}^{n} f(i)',
        'Tidak ada kaitan antara deret sigma dan integral'
      ],
      correctAnswer: 0,
      explanation: 'Untuk fungsi kontinu monoton naik f(x), jumlahan Riemann kiri dan kanan mengapit deret: ∫_{0}^{n} f(x) dx ≤ ∑_{i=1}^{n} f(i) ≤ ∫_{1}^{n+1} f(x) dx. Metode ini sangat berguna untuk membuktikan orde deret yang rumit.'
    },
    {
      id: 'quiz-matematika-7',
      question: 'Berapakah identitas penukaran pangkat logaritma penting yang mendasari pembuktian Teorema Master: a^(log_b n) = ...?',
      options: [
        'n^(log_b a)',
        'b^(log_a n)',
        'a · log_b n',
        'n · a'
      ],
      correctAnswer: 0,
      explanation: 'Identitas penukaran: a^(log_b n) = n^(log_b a). Bukti: ambil log_b dari kedua sisi: log_b(a^(log_b n)) = log_b(n) · log_b(a) = log_b(a) · log_b(n) = log_b(n^(log_b a)). Karena nilai logaritma sama, kedua ekspresi identik.'
    },
    {
      id: 'quiz-matematika-8',
      question: 'Berapa nilai dari sifat logaritma: log_b(x · y) dan log_b(x / y)?',
      options: [
        'log_b(x) · log_b(y)  dan  log_b(x) / log_b(y)',
        'log_b(x) + log_b(y)  dan  log_b(x) - log_b(y)',
        'b^(x+y)  dan  b^(x-y)',
        'x · log_b(y)  dan  y · log_b(x)'
      ],
      correctAnswer: 1,
      explanation: 'Sifat perkalian dan pembagian logaritma: log_b(x · y) = log_b(x) + log_b(y), dan log_b(x / y) = log_b(x) - log_b(y).'
    },
    {
      id: 'quiz-matematika-9',
      question: 'Jika n dibagi 2 berulang kali hingga bernilai 1 (n, n/2, n/4, ..., 1), berapa jumlah total langkah pembagian yang dilakukan?',
      options: [
        'n langkah',
        'n / 2 langkah',
        '⌊log₂ n⌋ langkah',
        'n² langkah'
      ],
      correctAnswer: 2,
      explanation: 'Jika kita membagi n dengan 2 sebanyak k kali hingga mencapai 1: n / 2ᵏ = 1 ⟺ 2ᵏ = n ⟺ k = log₂ n. Dengan pembulatan ke bawah untuk integer, jumlah langkah adalah ⌊log₂ n⌋.'
    },
    {
      id: 'quiz-matematika-10',
      question: 'Apa arti dari fungsi Floor ⌊x⌋ dan Ceiling ⌈x⌉?',
      options: [
        'Floor membulatkan ke bilangan bulat terdekat; Ceiling memotong desimal.',
        'Floor ⌊x⌋ adalah bilangan bulat terbesar yang ≤ x; Ceiling ⌈x⌉ adalah bilangan bulat terkecil yang ≥ x.',
        'Floor adalah nilai absolut; Ceiling adalah nilai logaritma.',
        'Keduanya menghasilkan angka desimal pecahan.'
      ],
      correctAnswer: 1,
      explanation: 'Floor ⌊x⌋ (lantai) membulatkan ke bawah: ⌊3.9⌋ = 3, ⌊-2.1⌋ = -3. Ceiling ⌈x⌉ (atap) membulatkan ke atas: ⌈3.1⌉ = 4, ⌈-2.9⌋ = -2.'
    },
    {
      id: 'quiz-matematika-11',
      question: 'Berapakah jumlah digit biner (bit) yang dibutuhkan untuk merepresentasikan bilangan bulat positif n dalam basis 2?',
      options: [
        'n',
        '⌊log₂ n⌋ + 1',
        '2ⁿ',
        'log₁₀ n'
      ],
      correctAnswer: 1,
      explanation: 'Sebuah integer n berada pada rentang 2^(k-1) ≤ n < 2ᵏ. Mengambil log₂ menghasilkan k - 1 ≤ log₂ n < k, sehingga k = ⌊log₂ n⌋ + 1 bit.'
    },
    {
      id: 'quiz-matematika-12',
      question: 'Berapakah hasil dari sifat linearitas notasi sigma: ∑_{i=1}^n (3i + 5)?',
      options: [
        '3(n(n+1)/2) + 5n',
        '3(n(n+1)/2) + 5',
        '8n',
        '15(n(n+1)/2)'
      ],
      correctAnswer: 0,
      explanation: 'Sifat linearitas sigma: ∑ (c · a_i + d) = c · ∑ a_i + ∑ d. Maka ∑_{i=1}^n (3i + 5) = 3 · ∑_{i=1}^n i + ∑_{i=1}^n 5 = 3 · [n(n+1)/2] + 5n.'
    },
    {
      id: 'quiz-matematika-13',
      question: 'Pada pergeseran indeks sigma (Index Shifting), jika jumlahan ∑_{i=2}^{n+1} (i - 1) diubah agar batas bawahnya mulai dari j = 1, bentuk baru yang setara adalah:',
      options: [
        '∑_{j=1}^n j',
        '∑_{j=1}^{n+1} (j + 1)',
        '∑_{j=1}^n (j - 1)',
        '∑_{j=1}^{n-1} j'
      ],
      correctAnswer: 0,
      explanation: 'Misalkan substitusi j = i - 1. Ketika i = 2, j = 1. Ketika i = n + 1, j = n. Suku di dalam sigma menjadi j. Maka jumlahan menjadi ∑_{j=1}^n j.'
    },
    {
      id: 'quiz-matematika-14',
      question: 'Apa yang dimaksud dengan Deret Teleskopik (Telescoping Series)?',
      options: [
        'Deret yang nilainya selalu membesar seiring jarak pandang bintang.',
        'Deret di mana suku-suku perantara saling menghilangkan (cancel out), menyisakan hanya suku pertama dan suku terakhir: ∑_{i=1}^n (a_i - a_{i-1}) = a_n - a_0.',
        'Deret yang tidak memiliki batas atas maupun batas bawah.',
        'Deret yang hanya memuat angka prima.'
      ],
      correctAnswer: 1,
      explanation: 'Pada deret teleskopik, ekspansi: (a₁ - a₀) + (a₂ - a₁) + (a₃ - a₂) + ... + (a_n - a_{n-1}) menyebabkan semua elemen saling membatalkan kecuali -a₀ dan +a_n. Hasilnya instan: a_n - a₀.'
    },
    {
      id: 'quiz-matematika-15',
      question: 'Berapakah nilai dari ∑_{i=0}^∞ (1 / 2ⁱ) = 1 + 1/2 + 1/4 + 1/8 + ... ?',
      options: [
        '1',
        '2',
        '∞ (tak hingga)',
        '1.5'
      ],
      correctAnswer: 1,
      explanation: 'Rumus deret geometri tak hingga dengan |r| < 1 adalah S_∞ = a / (1 - r). Dengan a = 1 dan r = 1/2: S_∞ = 1 / (1 - 1/2) = 1 / (1/2) = 2.'
    },
    {
      id: 'quiz-matematika-16',
      question: 'Sederhanakan ekspresi logaritma: log(aᵇ) dan log(√a):',
      options: [
        'b · log(a)  dan  (1/2) · log(a)',
        'log(a) + b  dan  log(a) - 2',
        'a · log(b)  dan  2 · log(a)',
        'b^(log a)  dan  √(log a)'
      ],
      correctAnswer: 0,
      explanation: 'Sifat pangkat logaritma: log(aᵇ) = b · log(a). Karena √a = a^(1/2), maka log(√a) = log(a^(1/2)) = (1/2) · log(a).'
    },
    {
      id: 'quiz-matematika-17',
      question: 'Jika fungsi rekursif membagi data menjadi 3 bagian yang berukuran sepertiga (n/3), pada kedalaman (level) ke-k, berapa ukuran dari setiap sub-masalah?',
      options: [
        'n - 3k',
        'n / 3ᵏ',
        '3n / k',
        'n / (3 + k)'
      ],
      correctAnswer: 1,
      explanation: 'Pada level 0 ukurannya n. Pada level 1 ukurannya n/3. Pada level 2 ukurannya (n/3)/3 = n/3². Maka pada level k ukuran tiap sub-masalah adalah n/3ᵏ.'
    },
    {
      id: 'quiz-matematika-18',
      question: 'Berapakah hasil dari evaluasi jumlahan: ∑_{i=1}^n (n - i)?',
      options: [
        'n(n - 1) / 2',
        'n(n + 1) / 2',
        'n²',
        '0'
      ],
      correctAnswer: 0,
      explanation: '∑_{i=1}^n (n - i) = (n - 1) + (n - 2) + ... + 1 + 0 = ∑_{j=1}^{n-1} j = [(n - 1)(n)] / 2 = n(n - 1) / 2.'
    },
    {
      id: 'quiz-matematika-19',
      question: 'Berapakah nilai dari rumus kombinatorika C(n, 2) = n! / (2! · (n - 2)!), dan algoritma apa yang sering memunculkan nilai ini?',
      options: [
        'n(n - 1) / 2; sering muncul pada perbandingan pasangan elemen seperti Bubble Sort dan Selection Sort.',
        'n(n + 1) / 2; sering muncul pada Binary Search.',
        'n²; sering muncul pada Merge Sort.',
        '2ⁿ; sering muncul pada Menara Hanoi.'
      ],
      correctAnswer: 0,
      explanation: 'C(n, 2) adalah jumlah cara memilih 2 elemen berbeda dari n elemen tanpa memperhatikan urutan: C(n, 2) = n(n - 1) / 2. Ini merepresentasikan total pasangan yang harus dibandingkan pada algoritma pengurutan kuadratik.'
    },
    {
      id: 'quiz-matematika-20',
      question: 'Jika k = log₂ n, berapakah nilai dari 4ᵏ?',
      options: [
        'n²',
        '2n',
        '4n',
        'n⁴'
      ],
      correctAnswer: 0,
      explanation: '4ᵏ = (2²)ᵏ = (2ᵏ)² = (2^(log₂ n))² = n².'
    }
  ],

  iteratif: [
    {
      id: 'quiz-iteratif-1',
      question: 'Perhatikan kode berikut:\nfor (int i = 0; i < n; i++) {\n    count++;\n}\nBerapa kali operasi count++ dieksekusi dan apa kompleksitasnya?',
      options: [
        'n kali; Θ(n)',
        'n - 1 kali; Θ(n - 1)',
        'n + 1 kali; Θ(n + 1)',
        'n² kali; Θ(n²)'
      ],
      correctAnswer: 0,
      explanation: 'Loop berjalan dari i = 0 hingga n - 1 (inklusif). Jumlah langkah = (n - 1) - 0 + 1 = n kali. Kompleksitasnya adalah Θ(n).'
    },
    {
      id: 'quiz-iteratif-2',
      question: 'Perhatikan kode loop perkalian:\nfor (int i = 1; i < n; i *= 2) {\n    count++;\n}\nBerapa kali count++ dieksekusi?',
      options: [
        'n / 2 kali',
        '⌊log₂ (n - 1)⌋ + 1 kali; Θ(log n)',
        'n kali; Θ(n)',
        '2ⁿ kali; Θ(2ⁿ)'
      ],
      correctAnswer: 1,
      explanation: 'Nilai variabel i mengambil nilai 1, 2, 4, 8, ..., 2ᵏ < n. Banyaknya langkah k memenuhi 2ᵏ < n ⟹ k = ⌊log₂ (n - 1)⌋ + 1. Kompleksitasnya adalah logaritmik Θ(log n).'
    },
    {
      id: 'quiz-iteratif-3',
      question: 'Perhatikan loop bersarang independen berikut:\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        count++;\n    }\n}\nFormulasi notasi sigma dan nilai akhirnya adalah:',
      options: [
        '∑_{i=0}^{n-1} ∑_{j=0}^{n-1} 1 = n · n = n² = Θ(n²)',
        '∑_{i=0}^{n-1} i = n(n-1)/2 = Θ(n²)',
        '∑_{i=0}^{n-1} 1 = n = Θ(n)',
        'n³ = Θ(n³)'
      ],
      correctAnswer: 0,
      explanation: 'Loop luar berulang n kali. Untuk setiap putaran loop luar, loop dalam berulang n kali secara independen. Total operasi: n × n = n² = Θ(n²).'
    },
    {
      id: 'quiz-iteratif-4',
      question: 'Perhatikan loop bersarang segitiga (Bubble/Selection Sort):\nfor (int i = 0; i < n - 1; i++) {\n    for (int j = i + 1; j < n; j++) {\n        count++;\n    }\n}\nBerapa jumlah pasti operasi count++ dieksekusi?',
      options: [
        'n(n - 1) / 2',
        'n(n + 1) / 2',
        'n²',
        '(n - 1)²'
      ],
      correctAnswer: 0,
      explanation: 'Batas dalam loop j berjalan dari i + 1 hingga n - 1 (sebanyak n - 1 - i kali). Jumlahan total: ∑_{i=0}^{n-2} (n - 1 - i) = (n - 1) + (n - 2) + ... + 1 = n(n - 1) / 2 = Θ(n²).'
    },
    {
      id: 'quiz-iteratif-5',
      question: 'Perhatikan loop dengan kondisi kuadratik berikut:\nint i = 1;\nwhile (i * i <= n) {\n    count++;\n    i++;\n}\nBerapa kelas kompleksitas algoritma ini?',
      options: [
        'Θ(n)',
        'Θ(√n)',
        'Θ(log n)',
        'Θ(n²)'
      ],
      correctAnswer: 1,
      explanation: 'Loop berhenti saat i² > n ⟺ i > √n. Karena i bertambah 1 di setiap langkah dari i = 1 hingga ⌊√n⌋, total iterasi adalah tepat ⌊√n⌋ kali, sehingga kompleksitasnya adalah Θ(√n). Pola ini sering digunakan dalam uji keprimaan bilangan (primality test).'
    },
    {
      id: 'quiz-iteratif-6',
      question: 'Perhatikan loop bersarang kombinasi linear dan logaritmik:\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j *= 2) {\n        count++;\n    }\n}\nBerapa kelas kompleksitas waktu algoritma di atas?',
      options: [
        'Θ(n log n)',
        'Θ(n²)',
        'Θ(log n)',
        'Θ(n)'
      ],
      correctAnswer: 0,
      explanation: 'Loop luar berjalan n kali (i = 1 sampai n). Loop dalam melipatgandakan j (j *= 2) sehingga berjalan sekitar log₂ n kali untuk setiap nilai i. Total eksekusi adalah n × log₂ n = Θ(n log n).'
    },
    {
      id: 'quiz-iteratif-7',
      question: 'Perhatikan algoritma perkalian matriks standar:\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < n; j++) {\n        C[i][j] = 0;\n        for (int k = 0; k < n; k++) {\n            C[i][j] += A[i][k] * B[k][j];\n        }\n    }\n}\nBerapa total operasi perkalian A[i][k] * B[k][j] yang dilakukan?',
      options: [
        'n²',
        'n³',
        '3n',
        'n(n + 1) / 2'
      ],
      correctAnswer: 1,
      explanation: 'Terdapat 3 tingkat perulangan bersarang yang saling independen, masing-masing berjalan dari 0 hingga n - 1 (sebanyak n kali). Total operasi perkalian = n × n × n = n³ = Θ(n³).'
    },
    {
      id: 'quiz-iteratif-8',
      question: 'Pada algoritma pencarian elemen di array terurut berukuran n menggunakan Binary Search Iteratif, berapa kali operasi perbandingan nilai tengah (mid) dilakukan pada skenario terburuk (Worst-Case)?',
      options: [
        'n kali',
        '⌊log₂ n⌋ + 1 kali',
        'n / 2 kali',
        '1 kali'
      ],
      correctAnswer: 1,
      explanation: 'Di setiap iterasi, ukuran ruang pencarian dibagi 2 sama besar: n, n/2, n/4, ..., 1. Jumlah pembagian maksimum hingga ruang pencarian tersisa 1 elemen adalah ⌊log₂ n⌋ + 1 = Θ(log n).'
    },
    {
      id: 'quiz-iteratif-9',
      question: 'Perhatikan kode dengan perulangan pembagian berikut:\nwhile (n > 1) {\n    n = n / 3;\n    count++;\n}\nBerapa kompleksitas waktu algoritma ini?',
      options: [
        'Θ(log₃ n) = Θ(log n)',
        'Θ(n / 3)',
        'Θ(3ⁿ)',
        'Θ(n)'
      ],
      correctAnswer: 0,
      explanation: 'Variabel n dibagi 3 pada setiap langkah hingga mencapai 1 atau kurang. Banyaknya iterasi k memenuhi n / 3ᵏ ≤ 1 ⟹ k = ⌈log₃ n⌉ = Θ(log n).'
    },
    {
      id: 'quiz-iteratif-10',
      question: 'Perhatikan kode berikut:\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        count++;\n    }\n}\nBerapa total nilai count pada akhir eksekusi?',
      options: [
        'n²',
        'n(n + 1) / 2',
        'n(n - 1) / 2',
        'n'
      ],
      correctAnswer: 1,
      explanation: 'Loop dalam berjalan sebanyak i kali. Ketika i = 1, j berjalan 1 kali. Ketika i = 2, j berjalan 2 kali, dan seterusnya hingga i = n. Totalnya adalah deret 1 + 2 + 3 + ... + n = n(n + 1) / 2 = Θ(n²).'
    },
    {
      id: 'quiz-iteratif-11',
      question: 'Perhatikan kode dengan increment melompat berikut:\nfor (int i = 0; i < n; i += 5) {\n    count++;\n}\nBerapa kompleksitas asimptotik algoritma ini?',
      options: [
        'Θ(n)',
        'Θ(n / 5) yang berbeda kelas dengan Θ(n)',
        'Θ(5ⁿ)',
        'Θ(log n)'
      ],
      correctAnswer: 0,
      explanation: 'Jumlah iterasi adalah ⌈n / 5⌉. Karena 1/5 adalah konstanta pengali skalar, berdasarkan aturan asimptotik O(c · n) = O(n), kompleksitasnya tetap linear Θ(n).'
    },
    {
      id: 'quiz-iteratif-12',
      question: 'Perhatikan kode dua loop terpisah (tidak bersarang):\nfor (int i = 0; i < n; i++) count++;\nfor (int j = 0; j < m; j++) count++;\nKompleksitas waktu total kode di atas adalah:',
      options: [
        'Θ(n · m)',
        'Θ(n + m)',
        'Θ(max(n, m)) jika n dan m berasal dari input berbeda',
        'Jawaban B dan C benar secara asimptotik'
      ],
      correctAnswer: 3,
      explanation: 'Kedua loop dieksekusi secara berurutan: n kali ditambah m kali. Maka total operasi adalah n + m = Θ(n + m) = Θ(max(n, m)).'
    },
    {
      id: 'quiz-iteratif-13',
      question: 'Perhatikan kode nested loop di mana loop dalam berjalan konstan:\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < 100; j++) {\n        count++;\n    }\n}\nBerapa kelas kompleksitas algoritma ini?',
      options: [
        'Θ(n²)',
        'Θ(100n) = Θ(n)',
        'Θ(100)',
        'Θ(n + 100)'
      ],
      correctAnswer: 1,
      explanation: 'Meskipun bersarang, loop dalam berjalan tepat 100 kali (konstan independen terhadap n). Total operasi adalah 100n kali. Karena 100 adalah konstanta, kompleksitasnya adalah linear Θ(n).'
    },
    {
      id: 'quiz-iteratif-14',
      question: 'Perhatikan potongan kode berikut:\nint i = 1;\nwhile (i < n) {\n    count++;\n    i = i * i + 1; // kuadratik lompat\n}\nBagaimana laju pertumbuhan jumlah iterasi terhadap n?',
      options: [
        'Linear Θ(n)',
        'Logaritmik ganda Θ(log log n)',
        'Eksponensial Θ(2ⁿ)',
        'Kuadratik Θ(n²)'
      ],
      correctAnswer: 1,
      explanation: 'Pada setiap langkah nilai i dikuadratkan: i ≈ 2, 4, 16, 256, 65536, 2^(2^k). Jumlah langkah k memenuhi 2^(2^k) ≈ n ⟹ k ≈ log₂ (log₂ n). Pertumbuhannya sangat lambat, yaitu berorde log-logaritmik Θ(log log n).'
    },
    {
      id: 'quiz-iteratif-15',
      question: 'Pada algoritma Insertion Sort terbalik (Worst-Case dengan array terurut menurun), berapa jumlah pergeseran elemen yang dilakukan untuk array berukuran n?',
      options: [
        'n - 1',
        'n(n - 1) / 2',
        'n log n',
        'n² / 4'
      ],
      correctAnswer: 1,
      explanation: 'Pada kondisi terburuk, elemen ke-i harus bergeser melewati seluruh i - 1 elemen sebelumnya. Total pergeseran adalah ∑_{i=1}^{n-1} i = n(n - 1) / 2 = Θ(n²).'
    },
    {
      id: 'quiz-iteratif-16',
      question: 'Namun, jika array yang diberikan kepada Insertion Sort sudah terurut sempurna dari awal (Best-Case), berapa kompleksitas waktu algoritma tersebut?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n²)',
        'O(1)'
      ],
      correctAnswer: 0,
      explanation: 'Jika array sudah terurut, loop dalam while (j >= 0 && arr[j] > key) langsung gagal pada perbandingan pertama (1 kali cek saja) untuk setiap elemen. Maka loop luar hanya berjalan n - 1 kali, menghasilkan Best-Case linear O(n).'
    },
    {
      id: 'quiz-iteratif-17',
      question: 'Manakah dari 6 langkah kerangka kerja analisis iteratif yang bertugas menentukan apakah kita perlu membagi analisis menjadi Best-Case dan Worst-Case?',
      options: [
        'Langkah 1: Menentukan ukuran input',
        'Langkah 3: Memeriksa apakah jumlah eksekusi operasi dasar bergantung pada susunan/nilai input data selain ukuran n',
        'Langkah 5: Mengubah sigma menjadi bentuk tertutup',
        'Langkah 6: Menuliskan Big-Theta'
      ],
      correctAnswer: 1,
      explanation: 'Langkah 3 kerangka kerja analisis iteratif secara spesifik mengecek ketergantungan pada susunan data. Jika jumlah loop dipengaruhi susunan masukan (seperti ada perintah break, early exit, atau conditional sorting), maka analisis wajib dipisah menjadi Best-Case dan Worst-Case.'
    },
    {
      id: 'quiz-iteratif-18',
      question: 'Perhatikan kode berikut:\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j += i) {\n        count++;\n    }\n}\nBerapa total eksekusi count++ jika disederhanakan secara asimptotik?',
      options: [
        'Θ(n log n)',
        'Θ(n²)',
        'Θ(n)',
        'Θ(n³)'
      ],
      correctAnswer: 0,
      explanation: 'Untuk setiap i, loop dalam berjalan sekitar n / i kali. Total iterasi adalah ∑_{i=1}^n (n / i) = n · ∑_{i=1}^n (1 / i) = n · H_n. Karena deret harmonik H_n = Θ(log n), maka total eksekusinya adalah Θ(n log n).'
    },
    {
      id: 'quiz-iteratif-19',
      question: 'Berapa Auxiliary Space Complexity dari algoritma iteratif Binary Search standar?',
      options: [
        'O(1) konstan (hanya membutuhkan variabel penampung low, high, mid)',
        'O(log n) untuk memori stack',
        'O(n) untuk menyalin array',
        'O(n²)'
      ],
      correctAnswer: 0,
      explanation: 'Berbeda dengan Binary Search versi rekursif yang memakan memori call stack O(log n), Binary Search versi iteratif hanya memerlukan beberapa variabel pointer indeks lokal (low, high, mid) sehingga memori tambahannya murni konstan O(1).'
    },
    {
      id: 'quiz-iteratif-20',
      question: 'Sebuah algoritma iteratif melakukan pemrosesan string dengan menggandakan panjang string s = s + s di dalam loop sebanyak n kali. Berapa kompleksitas waktu total jika operasi penggabungan string (concatenation) berbiaya sebanding dengan panjang string saat itu?',
      options: [
        'O(n)',
        'O(n²)',
        'O(2ⁿ)',
        'O(log n)'
      ],
      correctAnswer: 2,
      explanation: 'Pada langkah ke-i, panjang string adalah 2ⁱ. Biaya konkatenasi pada langkah ke-i adalah 2ⁱ. Total waktu adalah deret geometri: ∑_{i=1}^n 2ⁱ = 2^(n+1) - 2 = Θ(2ⁿ). Operasi ini berorde eksponensial!'
    }
  ],

  rekursif: [
    {
      id: 'quiz-rekursif-1',
      question: 'Apa dua komponen wajib yang harus ada dalam setiap perumusan relasi rekurensi algoritma rekursif?',
      options: [
        'Kondisi Basis (Base Case) yang menghentikan rekursi, dan Persamaan Rekursi (Recursive Step) untuk n > basis.',
        'Loop for dan loop while.',
        'Array dua dimensi dan pointer.',
        'Fungsi main dan fungsi print.'
      ],
      correctAnswer: 0,
      explanation: 'Setiap algoritma rekursif memerlukan kondisi basis (base case) yang mengembalikan nilai langsung tanpa memanggil diri sendiri (mencegah infinite recursion / stack overflow), serta relasi rekurensi untuk ukuran n yang lebih besar.'
    },
    {
      id: 'quiz-rekursif-2',
      question: 'Perhatikan relasi rekurensi faktorial: T(n) = T(n - 1) + 1 untuk n > 1, dengan T(1) = 0. Melalui metode Substitusi Mundur (Backward Substitution), berapa nilai T(n)?',
      options: [
        'T(n) = n - 1 = Θ(n)',
        'T(n) = n² = Θ(n²)',
        'T(n) = log n = Θ(log n)',
        'T(n) = 2ⁿ = Θ(2ⁿ)'
      ],
      correctAnswer: 0,
      explanation: 'T(n) = T(n-1) + 1 = (T(n-2) + 1) + 1 = T(n-k) + k. Rekursi berhenti saat n - k = 1 ⟹ k = n - 1. Maka T(n) = T(1) + (n - 1) = 0 + n - 1 = n - 1 = Θ(n).'
    },
    {
      id: 'quiz-rekursif-3',
      question: 'Berapa Auxiliary Space Complexity (memori tambahan) dari fungsi rekursif faktorial naif di atas?',
      options: [
        'O(1) konstan',
        'O(n) karena membutuhkan n stack frames pada call stack memori hingga mencapai basis',
        'O(n!)',
        'O(log n)'
      ],
      correctAnswer: 1,
      explanation: 'Setiap pemanggilan rekursif membuka stack frame baru di RAM untuk menyimpan parameter n, return address, dan variabel lokal. Karena kedalaman rekursi faktorial adalah n, maka memori call stack yang terpakai adalah O(n).'
    },
    {
      id: 'quiz-rekursif-4',
      question: 'Pada Teorema Master standar T(n) = a T(n/b) + f(n), apa arti matematis dari parameter a, b, dan f(n)?',
      options: [
        'a = jumlah sub-masalah rekursif (a ≥ 1); b = faktor pembagi ukuran masukan (b > 1); f(n) = biaya pekerjaan divide dan combine di luar pemanggilan rekursif.',
        'a = ukuran array; b = waktu eksekusi; f(n) = nilai konstanta compiler.',
        'a = nilai pivot; b = kedalaman pohon; f(n) = memori RAM.',
        'a = batas bawah; b = batas atas; f(n) = fungsi integral.'
      ],
      correctAnswer: 0,
      explanation: 'Bentuk umum divide-and-conquer: a adalah jumlah sub-masalah yang dipecahkan di setiap langkah, b adalah faktor pengecilan ukuran input (tiap submasalah berukuran n/b), dan f(n) adalah biaya membagi masalah dan menggabungkan hasilnya (divide & combine).'
    },
    {
      id: 'quiz-rekursif-5',
      question: 'Pada Teorema Master, nilai kritis penentu kasus adalah eksponen c_crit = log_b(a). Jika f(n) = Θ(n^d), kondisi manakah yang menghasilkan KASUS 1 (Pekerjaan di Daun Mendominasi)?',
      options: [
        'd < log_b a  ⟹  T(n) = Θ(n^(log_b a))',
        'd = log_b a  ⟹  T(n) = Θ(n^d · log n)',
        'd > log_b a  ⟹  T(n) = Θ(n^d)',
        'a = b'
      ],
      correctAnswer: 0,
      explanation: 'Kasus 1 terjadi saat d < log_b(a) (secara polinomial f(n) = O(n^(log_b(a) - ε))). Karena jumlah daun pohon rekursi adalah n^(log_b a), pekerjaan di tingkat daun jauh mendominasi pekerjaan di akar, sehingga solusinya adalah T(n) = Θ(n^(log_b a)).'
    },
    {
      id: 'quiz-rekursif-6',
      question: 'Relasi rekurensi Merge Sort adalah T(n) = 2T(n/2) + cn. Berdasarkan Teorema Master, kasus berapakah ini dan apa solusinya?',
      options: [
        'Kasus 1; Θ(n²)',
        'Kasus 2; karena a = 2, b = 2, log₂ 2 = 1 dan f(n) = cn = Θ(n¹), sehingga d = log_b a ⟹ T(n) = Θ(n log n)',
        'Kasus 3; Θ(n)',
        'Tidak dapat diselesaikan dengan Teorema Master'
      ],
      correctAnswer: 1,
      explanation: 'Nilai a = 2, b = 2, d = 1. log_b(a) = log₂(2) = 1. Karena d = log_b(a) = 1, ini memenuhi Kasus 2 Teorema Master. Solusinya: T(n) = Θ(n^d · log n) = Θ(n log n).'
    },
    {
      id: 'quiz-rekursif-7',
      question: 'Relasi rekurensi Binary Search rekursif adalah T(n) = T(n/2) + 1. Berdasarkan Teorema Master, berapakah kompleksitasnya?',
      options: [
        'a = 1, b = 2, log₂ 1 = 0; f(n) = 1 = n⁰ (d = 0). Karena d = log_b a, maka T(n) = Θ(log n).',
        'Kasus 1; Θ(n)',
        'Kasus 3; Θ(1)',
        'Θ(n log n)'
      ],
      correctAnswer: 0,
      explanation: 'a = 1, b = 2. log₂(1) = 0. f(n) = 1 = Θ(n⁰), sehingga d = 0. Karena d == log_b a (0 == 0), ini Kasus 2 Teorema Master dengan k = 0, menghasilkan T(n) = Θ(n⁰ · log¹ n) = Θ(log n).'
    },
    {
      id: 'quiz-rekursif-8',
      question: 'Relasi perkalian matriks Strassen adalah T(n) = 7T(n/2) + Θ(n²). Berapakah kompleksitas waktu algoritma Strassen?',
      options: [
        'Θ(n³)',
        'Θ(n^(log₂ 7)) ≈ Θ(n^(2.807))',
        'Θ(n² log n)',
        'Θ(7ⁿ)'
      ],
      correctAnswer: 1,
      explanation: 'a = 7, b = 2, f(n) = Θ(n²), d = 2. log_b(a) = log₂(7) ≈ 2.807. Karena d (2) < log_b(a) (2.807), ini memenuhi Kasus 1 Teorema Master. Hasilnya T(n) = Θ(n^(log₂ 7)) ≈ Θ(n^(2.807)), lebih cepat dibanding algoritma standar O(n³).'
    },
    {
      id: 'quiz-rekursif-9',
      question: 'Perhatikan relasi rekurensi Menara Hanoi: H(n) = 2H(n - 1) + 1, dengan H(1) = 1. Melalui substitusi mundur, berapa total langkah pemindahan piringan H(n)?',
      options: [
        'H(n) = 2ⁿ - 1 = Θ(2ⁿ)',
        'H(n) = n² = Θ(n²)',
        'H(n) = n! = Θ(n!)',
        'H(n) = 2n = Θ(n)'
      ],
      correctAnswer: 0,
      explanation: 'H(n) = 2H(n-1) + 1 = 2(2H(n-2) + 1) + 1 = 4H(n-2) + 2 + 1 = 2ᵏ H(n-k) + ∑_{i=0}^{k-1} 2ⁱ. Pada k = n - 1, H(1) = 1, sehingga H(n) = 2^(n-1)(1) + (2^(n-1) - 1) = 2ⁿ - 1 = Θ(2ⁿ).'
    },
    {
      id: 'quiz-rekursif-10',
      question: 'Apa kelemahan utama dari metode Teorema Master standar (kapan Teorema Master "GAGAL" diaplikasikan)?',
      options: [
        'Gagal jika relasi rekurensi memiliki celah non-polinomial antara f(n) dan n^(log_b a), contoh T(n) = 2T(n/2) + n / log n.',
        'Gagal jika nilai a berupa bilangan bulat positif.',
        'Gagal jika algoritma menggunakan bahasa pemrograman Python.',
        'Gagal jika nilai b = 2.'
      ],
      correctAnswer: 0,
      explanation: 'Teorema Master standar memiliki "gap" di mana rasio f(n) dan n^(log_b a) tidak berbeda secara polinomial (polynomially smaller/larger). Pada T(n) = 2T(n/2) + n / log n, n / log n lebih kecil dari n¹ tetapi bukan sebesar faktor n^ε untuk ε > 0 konstan. Kasus ini harus dipecahkan dengan Pohon Rekursi atau Teorema Akra-Bazzi.'
    },
    {
      id: 'quiz-rekursif-11',
      question: 'Pada relasi rekursif tidak seimbang (Unbalanced Recurrence): T(n) = T(n/3) + T(2n/3) + cn, bagaimana karakteristik pohon rekursinya?',
      options: [
        'Pohon memiliki kedalaman daun yang bervariasi: daun terpendek di kedalaman log₃ n dan daun terpanjang di kedalaman log_{3/2} n; total biayanya tetap Θ(n log n).',
        'Pohon tidak dapat digambar karena pecahannya tidak sama.',
        'Pohon langsung runtuh menghasilkan kompleksitas O(1).',
        'Kompleksitasnya menjadi O(n²).'
      ],
      correctAnswer: 0,
      explanation: 'Pada setiap level, jumlah biaya adalah cn (karena n/3 + 2n/3 = n). Daun paling kiri berhenti di kedalaman log₃ n, sedangkan daun paling kanan di kedalaman log_{3/2} n = log_{1.5} n. Karena biaya di setiap level penuh adalah cn, total waktu dibatasi oleh cn log₃ n dan cn log_{1.5} n, yang keduanya adalah Θ(n log n).'
    },
    {
      id: 'quiz-rekursif-12',
      question: 'Mengapa implementasi rekursif naif deret Fibonacci: int fib(int n) { if (n <= 1) return n; return fib(n-1) + fib(n-2); } memiliki kompleksitas waktu eksponensial Θ(1.618ⁿ)?',
      options: [
        'Karena ada pemanggilan rekursif ganda dengan banyak sub-masalah yang tumpang tindih (overlapping subproblems) dihitung berulang-ulang secara redundan.',
        'Karena tipe data integer di C++ tidak mampu menampung bilangan besar.',
        'Karena nilai basisnya salah.',
        'Karena compiler mengubah rekursi menjadi loop faktorial.'
      ],
      correctAnswer: 0,
      explanation: 'Pohon rekursi Fibonacci memecah fib(n) menjadi fib(n-1) dan fib(n-2). Nilai fib(n-2) dihitung ulang berkali-kali secara independen di berbagai cabang pohon tanpa memori (overlapping subproblems), membentuk pohon dengan sekitar 2ⁿ nodes (tepatnya proportional terhadap rasio emas φⁿ = 1.618ⁿ).'
    },
    {
      id: 'quiz-rekursif-13',
      question: 'Bagaimana cara mengubah kompleksitas rekursi Fibonacci naif dari O(1.618ⁿ) menjadi O(n)?',
      options: [
        'Menggunakan teknik Pemrograman Dinamis (Memoization atau Bottom-Up Tabulation) untuk menyimpan hasil sub-masalah yang sudah dihitung.',
        'Mengganti nama fungsi menjadi fibo.',
        'Menggunakan compiler 64-bit.',
        'Mengubah nilai n menjadi bilangan negatif.'
      ],
      correctAnswer: 0,
      explanation: 'Dengan memoization (top-down) atau tabel (bottom-up), setiap nilai fib(i) hanya dihitung tepat satu kali lalu disimpan dalam array berukuran n. Total operasi menjadi linear O(n).'
    },
    {
      id: 'quiz-rekursif-14',
      question: 'Pada Visualizer Pohon Rekursi untuk T(n) = 2T(n/2) + cn, berapa jumlah node sub-masalah pada level kedalaman ke-i, dan berapa ukuran masing-masing sub-masalahnya?',
      options: [
        'Jumlah node = 2ⁱ; ukuran sub-masalah = n / 2ⁱ',
        'Jumlah node = i²; ukuran sub-masalah = n / i',
        'Jumlah node = 2; ukuran sub-masalah = n / 2',
        'Jumlah node = n; ukuran sub-masalah = 1'
      ],
      correctAnswer: 0,
      explanation: 'Pada level i, percabangan bercabang 2 kali di setiap langkah sehingga ada 2ⁱ nodes. Masing-masing node menyelesaikan masalah yang ukurannya terbagi 2 sebanyak i kali, yaitu n / 2ⁱ.'
    },
    {
      id: 'quiz-rekursif-15',
      question: 'Relasi rekurensi T(n) = 3T(n/4) + n². Berdasarkan Teorema Master, kasus berapakah ini dan apa solusinya?',
      options: [
        'Kasus 3; karena a = 3, b = 4, log₄ 3 ≈ 0.793, dan f(n) = n² (d = 2). Karena d > log_b a, pekerjaan di akar mendominasi sehingga T(n) = Θ(n²).',
        'Kasus 1; Θ(n^(0.793))',
        'Kasus 2; Θ(n² log n)',
        'Θ(n³)'
      ],
      correctAnswer: 0,
      explanation: 'a = 3, b = 4, f(n) = n² (d = 2). log_b(a) = log₄(3) ≈ 0.793. Karena d (2) > log_b(a) (0.793), pekerjaan di akar jauh mendominasi daun (Kasus 3). Solusinya adalah T(n) = Θ(f(n)) = Θ(n²).'
    },
    {
      id: 'quiz-rekursif-16',
      question: 'Berapakah Auxiliary Space Complexity dari algoritma Merge Sort rekursif pada array berukuran n?',
      options: [
        'O(1) in-place',
        'O(n) karena membutuhkan temporary array untuk prosedur merge ditambah O(log n) untuk call stack rekursi',
        'O(n log n)',
        'O(n²)'
      ],
      correctAnswer: 1,
      explanation: 'Merge Sort membutuhkan temporary buffer array sebesar O(n) untuk menggabungkan dua subarray terurut, serta kedalaman call stack rekursif sebesar O(log n). Ruang dominan adalah O(n).'
    },
    {
      id: 'quiz-rekursif-17',
      question: 'Perhatikan relasi rekurensi algoritma Decrease-and-Conquer: T(n) = T(n - 1) + n, dengan T(1) = 1. Apa solusi dari relasi ini?',
      options: [
        'T(n) = 1 + 2 + 3 + ... + n = n(n + 1)/2 = Θ(n²)',
        'T(n) = Θ(n)',
        'T(n) = Θ(n log n)',
        'T(n) = Θ(2ⁿ)'
      ],
      correctAnswer: 0,
      explanation: 'T(n) = T(n-1) + n = T(n-2) + (n-1) + n = ... = T(1) + 2 + 3 + ... + n = ∑_{i=1}^n i = n(n+1)/2 = Θ(n²). Ini adalah model rekursi Selection Sort rekursif.'
    },
    {
      id: 'quiz-rekursif-18',
      question: 'Apa yang dimaksud dengan "Tail Recursion" (Rekursi Ekor) dan mengapa fitur Tail Call Optimization (TCO) sangat penting pada compiler?',
      options: [
        'Rekursi yang tidak memiliki kondisi basis.',
        'Pemanggilan rekursif yang berada persis di akhir fungsi tanpa ada komputasi lanjutan setelahnya; TCO memungkinkan compiler mengubah rekursi menjadi loop sehingga Auxiliary Space turun dari O(n) menjadi O(1).',
        'Rekursi yang memanggil fungsi main berulang kali.',
        'Rekursi yang hanya memproses string dari belakang.'
      ],
      correctAnswer: 1,
      explanation: 'Pada Tail Recursion, tidak ada operasi yang tertunda setelah pemanggilan rekursif selesai. Compiler cerdas dapat me-reuse stack frame saat ini (Tail Call Elimination) sehingga tidak menambah kedalaman call stack, mencegah stack overflow dan menghemat memori menjadi O(1).'
    },
    {
      id: 'quiz-rekursif-19',
      question: 'Relasi rekurensi algoritma Karatsuba untuk perkalian bilangan bulat cepat adalah T(n) = 3T(n/2) + O(n). Berapa kompleksitas waktu Karatsuba?',
      options: [
        'Θ(n^(log₂ 3)) ≈ Θ(n^(1.585))',
        'Θ(n²)',
        'Θ(n log n)',
        'Θ(3ⁿ)'
      ],
      correctAnswer: 0,
      explanation: 'a = 3, b = 2, f(n) = O(n¹), d = 1. log_b(a) = log₂(3) ≈ 1.585. Karena d (1) < log_b(a) (1.585), ini adalah Kasus 1 Teorema Master: T(n) = Θ(n^(log₂ 3)) ≈ Θ(n^(1.585)), jauh lebih cepat daripada perkalian naif O(n²).'
    },
    {
      id: 'quiz-rekursif-20',
      question: 'Jika fungsi rekursif mengalami Infinite Recursion (karena lupa menulis base case atau parameter tidak pernah mendekati base case), apa error sistem yang terjadi saat runtime?',
      options: [
        'Syntax Error',
        'Stack Overflow Exception (Memori Call Stack Habis Meluap)',
        'Zero Division Error',
        'Harddisk Full Error'
      ],
      correctAnswer: 1,
      explanation: 'Setiap pemanggilan fungsi mengalokasikan stack frame di area memori call stack OS. Jika rekursi tidak pernah berhenti, tumpukan frame akan melebihi batas alokasi memori stack yang disediakan OS, memicu crash seketika bernama Stack Overflow.'
    }
  ]
};
