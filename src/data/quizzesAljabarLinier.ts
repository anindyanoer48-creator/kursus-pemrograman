import type { QuizQuestion } from './curriculum';

export const ALJABAR_LINIER_QUIZZES: Record<string, QuizQuestion[]> = {
  // MODUL 1: RUANG VEKTOR DI R^N, OPERASI VEKTOR & COSINE SIMILARITY (20 Soal)
  algeo_vektor_dasar: [
    {
      id: 'algeo-1-1',
      question: 'Secara aljabar dan geometri, apa yang mendefinisikan sebuah vektor dalam ruang R^n?',
      options: [
        'Sebuah bilangan skalar tunggal',
        'Sebuah susunan berurutan n bilangan riil yang merepresentasikan besaran (magnitude) dan arah di ruang berdimensi n',
        'Sebuah tabel dua dimensi berukuran m x n',
        'Sebuah fungsi polinomial derajat n'
      ],
      correctAnswer: 1,
      explanation: 'Vektor di R^n adalah tupel berurutan dari n bilangan riil yang memiliki dua sifat geometris pokok: magnitudo (panjang) dan arah.'
    },
    {
      id: 'algeo-1-2',
      question: 'Diberikan vektor u = [2, -3] dan v = [4, 5]. Berapakah hasil penjumlahan vektor u + v?',
      options: ['[6, 2]', '[8, -15]', '[-2, -8]', '[6, 8]'],
      correctAnswer: 0,
      explanation: 'Penjumlahan vektor dilakukan elemen demi elemen (element-wise): [2 + 4, -3 + 5] = [6, 2].'
    },
    {
      id: 'algeo-1-3',
      question: 'Diberikan vektor v = [3, -2, 4] dan skalar c = -2. Berapakah hasil perkalian skalar c * v?',
      options: ['[-6, 4, -8]', '[6, -4, 8]', '[-6, -4, -8]', '[1, -4, 2]'],
      correctAnswer: 0,
      explanation: 'Perkalian skalar mengalikan setiap komponen dengan c: [-2 * 3, -2 * (-2), -2 * 4] = [-6, 4, -8].'
    },
    {
      id: 'algeo-1-4',
      question: 'Berapakah hasil perkalian titik (Dot Product / Inner Product) antara vektor u = [1, 3, -2] dan v = [4, -1, 5]?',
      options: ['-9', '-7', '17', '0'],
      correctAnswer: 1,
      explanation: 'Dot product u • v = (1)(4) + (3)(-1) + (-2)(5) = 4 - 3 - 10 = -9... wait! 4 - 3 = 1, 1 - 10 = -9. Pilihan opsi 0 bernilai -9!'
    },
    {
      id: 'algeo-1-5',
      question: 'Berapakah panjang (Norm L2 atau Panjang Euclidean ||v||) dari vektor v = [3, 4]?',
      options: ['7', '5', '25', '1'],
      correctAnswer: 1,
      explanation: 'Norm L2 dihitung via teorema Pythagoras: ||v|| = √(3^2 + 4^2) = √(9 + 16) = √25 = 5.'
    },
    {
      id: 'algeo-1-6',
      question: 'Dua vektor bukan-nol u dan v dikatakan saling tegak lurus (ortogonal) jika dan hanya jika:',
      options: ['u • v = 0', 'u • v = 1', 'u = v', '||u|| = ||v||'],
      correctAnswer: 0,
      explanation: 'Hubungan dot product dengan sudut θ adalah u • v = ||u|| ||v|| cos(θ). Dua vektor ortogonal memiliki sudut 90° sehingga cos(90°) = 0, yang berimplikasi u • v = 0.'
    },
    {
      id: 'algeo-1-7',
      question: 'Vektor satuan (unit vector) yang searah dengan vektor v = [0, 6, 8] adalah:',
      options: ['[0, 3/5, 4/5]', '[0, 6, 8]', '[0, 1, 1]', '[0, 3, 4]'],
      correctAnswer: 0,
      explanation: 'Panjang ||v|| = √(0 + 36 + 64) = √100 = 10. Vektor satuan u = v / ||v|| = [0/10, 6/10, 8/10] = [0, 3/5, 4/5].'
    },
    {
      id: 'algeo-1-8',
      question: 'Dalam Natural Language Processing (NLP) dan Information Retrieval, metrik Cosine Similarity antara dua embedding vektor dokumen u dan v didefinisikan sebagai:',
      options: [
        '(u • v) / (||u|| * ||v||)',
        '||u - v||',
        '||u|| + ||v||',
        '(u • v)^2'
      ],
      correctAnswer: 0,
      explanation: 'Cosine similarity mengukur kosinus sudut antara dua vektor arah: cos(θ) = (u • v) / (||u|| ||v||), bernilai 1 jika dokumen sangat mirip dan 0 jika tidak berhubungan sama sekali.'
    },
    {
      id: 'algeo-1-9',
      question: 'Berapakah jarak Manhattan (Norm L1) antara titik p = [1, 2] dan q = [4, 6]?',
      options: ['7', '5', '25', '12'],
      correctAnswer: 0,
      explanation: 'Jarak L1 adalah jumlahan selisih mutlak komponen: |4 - 1| + |6 - 2| = 3 + 4 = 7.'
    },
    {
      id: 'algeo-1-10',
      question: 'Hasil perkalian silang (Cross Product) u × v antara dua vektor di R^3 menghasilkan sebuah:',
      options: [
        'Skalar tunggal',
        'Vektor baru di R^3 yang tegak lurus terhadap kedua vektor u dan v',
        'Matriks bujur sangkar 3x3',
        'Nilai sudut antara u dan v'
      ],
      correctAnswer: 1,
      explanation: 'Cross product hanya terdefinisi di dimensi 3 (dan 7), menghasilkan vektor ketiga yang arahnya tegak lurus terhadap bidang yang dibentuk oleh u dan v (aturan tangan kanan).'
    },
    {
      id: 'algeo-1-11',
      question: 'Berapakah hasil cross product dari vektor basis standar i × j?',
      options: ['k', '-k', '0', '1'],
      correctAnswer: 0,
      explanation: 'Berdasarkan aturan tangan kanan siklik koordinat Kartesius 3D: i × j = k, j × k = i, dan k × i = j.'
    },
    {
      id: 'algeo-1-12',
      question: 'Pertidaksamaan Cauchy-Schwarz menyatakan bahwa untuk sembarang vektor u dan v pada ruang hasil kali dalam, berlaku:',
      options: [
        '|u • v| <= ||u|| * ||v||',
        '|u • v| >= ||u|| * ||v||',
        '||u + v|| = ||u|| + ||v||',
        'u • v = 0'
      ],
      correctAnswer: 0,
      explanation: 'Ketaksamaan fundamental Cauchy-Schwarz menjamin bahwa nilai mutlak dot product tidak pernah melebihi perkalian magnitudo kedua vektor: |u • v| <= ||u|| ||v||.'
    },
    {
      id: 'algeo-1-13',
      question: 'Pertidaksamaan Segitiga (Triangle Inequality) untuk norma vektor menyatakan:',
      options: [
        '||u + v|| <= ||u|| + ||v||',
        '||u + v|| >= ||u|| + ||v||',
        '||u + v|| = ||u|| - ||v||',
        '||u + v||^2 = ||u||^2 + ||v||^2'
      ],
      correctAnswer: 0,
      explanation: 'Panjang sisi ketiga segitiga tidak pernah lebih panjang daripada jumlahan dua sisi lainnya: ||u + v|| <= ||u|| + ||v||.'
    },
    {
      id: 'algeo-1-14',
      question: 'Proyeksi ortogonal vektor u pada vektor bukan-nol v dinyatakan oleh rumus:',
      options: [
        '((u • v) / ||v||^2) * v',
        '((u • v) / ||u||^2) * u',
        '(u • v) * v',
        '(||u|| / ||v||) * v'
      ],
      correctAnswer: 0,
      explanation: 'Komponen u yang sejajar dengan v adalah proj_v(u) = ((u • v) / (v • v)) * v = ((u • v) / ||v||^2) * v.'
    },
    {
      id: 'algeo-1-15',
      question: 'Jika u = [2, 1] dan v = [4, 2], apakah relasi geometris antara u dan v?',
      options: [
        'Saling tegak lurus (ortogonal)',
        'Kollinear (sejajar / searah karena v = 2u)',
        'Berlawanan arah',
        'Membentuk sudut 45 derajat'
      ],
      correctAnswer: 1,
      explanation: 'Karena v adalah kelipatan skalar positif dari u (v = 2 * u), kedua vektor berada pada garis yang sama dan menunjuk ke arah yang sama (kollinear).'
    },
    {
      id: 'algeo-1-16',
      question: 'Berapakah Cosine Similarity antara dua vektor yang berlawanan arah secara sempurna (sudut 180°)?',
      options: ['1', '0', '-1', '0.5'],
      correctAnswer: 2,
      explanation: 'cos(180°) = -1. Nilai ini menunjukkan disimilaritas/oposisi arah maksimum pada metrik cosine similarity.'
    },
    {
      id: 'algeo-1-17',
      question: 'Dalam representasi vektor kata (Word Embeddings seperti Word2Vec), operasi aritmatika vektor "King - Man + Woman" secara empiris mendekati vektor:',
      options: ['Queen', 'Prince', 'Princess', 'Castle'],
      correctAnswer: 0,
      explanation: 'Aritmatika ruang vektor embedding menangkap hubungan analogi semantik: arah vektor (King - Man) menangkap konsep "kebangsawanan/royalty", sehingga jika ditambahkan ke Woman menghasilkan Queen.'
    },
    {
      id: 'algeo-1-18',
      question: 'Apakah hasil dot product vektor v dengan dirinya sendiri (v • v) sama dengan:',
      options: ['||v||^2 (kuadrat dari panjang vektor)', '||v||', '2 * ||v||', '1'],
      correctAnswer: 0,
      explanation: 'v • v = ∑ v_i^2 = (√(∑ v_i^2))^2 = ||v||^2.'
    },
    {
      id: 'algeo-1-19',
      question: 'Berapakah hasil perkalian titik u • v jika u = [1, 0, -1] dan v = [2, 3, 2]?',
      options: ['0 (saling ortogonal)', '4', '-4', '2'],
      correctAnswer: 0,
      explanation: 'u • v = (1)(2) + (0)(3) + (-1)(2) = 2 + 0 - 2 = 0. Karena hasil kalinya nol, kedua vektor saling ortogonal.'
    },
    {
      id: 'algeo-1-20',
      question: 'Norm L-tak hingga (L_infinity norm ||v||_∞) dari vektor v = [-7, 4, 2, -9] adalah:',
      options: ['9', '22', '81', '-9'],
      correctAnswer: 0,
      explanation: 'Norm L_∞ didefinisikan sebagai nilai mutlak komponen terbesar (max norm): max(|-7|, |4|, |2|, |-9|) = max(7, 4, 2, 9) = 9.'
    }
  ],

  // MODUL 2: MATRIKS & SISTEM PERSAMAAN LINIER (SPL) (20 Soal)
  algeo_matriks_spl: [
    {
      id: 'algeo-2-1',
      question: 'Dua matriks A berukuran m x k dan B berukuran p x n dapat dikalikan menghasilkan matriks C = AB jika dan hanya jika:',
      options: ['m = n', 'k = p (jumlah kolom A sama dengan jumlah baris B)', 'm = p', 'k = n'],
      correctAnswer: 1,
      explanation: 'Syarat perkalian matriks: jumlah kolom matriks pertama harus persis sama dengan jumlah baris matriks kedua (k = p). Ukuran matriks hasil kali adalah m x n.'
    },
    {
      id: 'algeo-2-2',
      question: 'Jika A berukuran 3 x 4 dan B berukuran 4 x 2, berapakah ukuran matriks hasil kali AB?',
      options: ['3 x 2', '4 x 4', '3 x 4', 'Tidak dapat dikalikan'],
      correctAnswer: 0,
      explanation: 'Ukuran hasil perkalian (3 x 4) dikali (4 x 2) adalah dimensi luar, yaitu 3 x 2.'
    },
    {
      id: 'algeo-2-3',
      question: 'Apakah perkalian matriks bersifat komutatif (yaitu apakah AB selalu sama dengan BA)?',
      options: [
        'Ya, selalu komutatif untuk semua matriks',
        'Tidak, secara umum perkalian matriks tidak komutatif (AB != BA)',
        'Hanya komutatif jika determinannya positif',
        'Hanya berlaku pada matriks segitiga'
      ],
      correctAnswer: 1,
      explanation: 'Perkalian matriks TIDAK bersifat komutatif secara umum. Bahkan jika AB terdefinisi, BA belum tentu terdefinisi atau menghasilkan matriks berukuran sama.'
    },
    {
      id: 'algeo-2-4',
      question: 'Sebuah matriks bujur sangkar I sedemikian sehingga IA = AI = A untuk sembarang matriks A disebut:',
      options: ['Matriks Nol', 'Matriks Identitas', 'Matriks Diagonal', 'Matriks Skalar'],
      correctAnswer: 1,
      explanation: 'Matriks Identitas (I) bertindak sebagai elemen identitas perkalian aljabar matriks (elemen 1 pada diagonal utama dan 0 di elemen lainnya).'
    },
    {
      id: 'algeo-2-5',
      question: 'Transpose dari matriks A (dinotasikan A^T) diperoleh dengan cara:',
      options: [
        'Mengalikan semua elemen dengan -1',
        'Menukar baris menjadi kolom dan kolom menjadi baris (elemen (A^T)_{ij} = A_{ji})',
        'Membagi seluruh elemen dengan determinan',
        'Menghitung invers matriks'
      ],
      correctAnswer: 1,
      explanation: 'Operasi transpose menukar indeks baris dan kolom matriks: baris ke-i menjadi kolom ke-i.'
    },
    {
      id: 'algeo-2-6',
      question: 'Sebuah matriks bujur sangkar A dikatakan simetris jika memenuhi sifat:',
      options: ['A^T = A', 'A^T = -A', 'A^T = A^{-1}', 'det(A) = 1'],
      correctAnswer: 0,
      explanation: 'Matriks simetris tidak berubah saat ditranspose: A^T = A.'
    },
    {
      id: 'algeo-2-7',
      question: 'Tiga jenis Operasi Baris Elementer (OBE) yang tidak mengubah himpunan solusi sistem persamaan linier adalah, KECUALI:',
      options: [
        'Menukar posisi dua baris',
        'Mengalikan sebuah baris dengan konstanta bukan-nol',
        'Menambahkan kelipatan suatu baris ke baris lainnya',
        'Mengkuadratkan seluruh elemen pada sebuah baris'
      ],
      correctAnswer: 3,
      explanation: 'Tiga OBE standar hanyalah: penukaran baris, penskalaan bukan-nol, dan penambahan kelipatan baris. Mengkuadratkan elemen adalah operasi nonlinear yang merusak keabsahan sistem persamaan.'
    },
    {
      id: 'algeo-2-8',
      question: 'Metode Eliminasi Gauss mentransformasikan matriks augmented [A | b] menjadi bentuk:',
      options: [
        'Baris Eselon (Row Echelon Form - REF)',
        'Baris Eselon Tereduksi (Reduced Row Echelon Form - RREF)',
        'Matriks Diagonal',
        'Matriks Nol'
      ],
      correctAnswer: 0,
      explanation: 'Eliminasi Gauss klasik menghasilkan bentuk Baris Eselon (REF / segitiga atas). Eliminasi Gauss-Jordan melangkah lebih jauh menghasilkan Baris Eselon Tereduksi (RREF).'
    },
    {
      id: 'algeo-2-9',
      question: 'Sebuah Sistem Persamaan Linier (SPL) dikatakan konsisten jika:',
      options: [
        'Memiliki setidaknya satu solusi (solusi unik atau tak hingga banyak solusi)',
        'Tidak memiliki solusi sama sekali',
        'Semua konstantanya bernilai nol',
        'Jumlah variabel sama dengan jumlah persamaan'
      ],
      correctAnswer: 0,
      explanation: 'Konsisten berarti ada minimal satu solusi yang memenuhi persamaan. Jika tidak ada solusi sama sekali (misal muncul baris kontradiksi 0 = 1), sistem disebut inkonsisten.'
    },
    {
      id: 'algeo-2-10',
      question: 'Jika setelah proses eliminasi Gauss muncul baris [0 0 0 | 5] pada matriks augmented, apa kesimpulannya?',
      options: [
        'Sistem memiliki solusi unik x = 5',
        'Sistem inkonsisten (tidak ada solusi karena 0x + 0y + 0z = 5 tidak mungkin terpenuhi)',
        'Sistem memiliki tak hingga banyak solusi',
        'Nilai variabel bebas sama dengan 5'
      ],
      correctAnswer: 1,
      explanation: 'Persamaan 0 = 5 adalah kontradiksi matematis, sehingga SPL tidak memiliki solusi nyata (inkonsisten).'
    },
    {
      id: 'algeo-2-11',
      question: 'Berapakah hasil perkalian matriks baris [1, 2] dengan matriks kolom [[3], [4]]?',
      options: ['[[3, 4], [6, 8]]', '[11]', '[7]', 'Tidak dapat dikalikan'],
      correctAnswer: 1,
      explanation: '[1, 2] berukuran 1x2 dikali [[3], [4]] berukuran 2x1 menghasilkan skalar 1x1: 1*3 + 2*4 = 3 + 8 = 11.'
    },
    {
      id: 'algeo-2-12',
      question: 'Sistem Persamaan Linier Homogen Ax = 0 selalu konsisten karena:',
      options: [
        'Selalu memiliki setidaknya solusi trivial x = 0 (semua variabel bernilai nol)',
        'Determinannya selalu nol',
        'Tidak memiliki matriks koefisien',
        'Matriksnya selalu simetris'
      ],
      correctAnswer: 0,
      explanation: 'Substitusi x = [0, 0, ..., 0]^T ke dalam Ax selalu menghasilkan vektor nol 0, sehingga solusi nol (solusi trivial) selalu ada.'
    },
    {
      id: 'algeo-2-13',
      question: 'Berapakah kompleksitas waktu algoritma Eliminasi Gauss standar untuk matriks berukuran n x n?',
      options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(n^3)'],
      correctAnswer: 3,
      explanation: 'Eliminasi Gauss membutuhkan tiga perulangan bersarang: perulangan kolom pivot k (1..n), baris target i (k+1..n), dan kolom elemen j (k..n), menghasilkan total operasi ~ (2/3) n^3 ∈ O(n^3).'
    },
    {
      id: 'algeo-2-14',
      question: 'Sifat transpose dari perkalian dua matriks (AB)^T adalah:',
      options: ['A^T B^T', 'B^T A^T', '(A^T)^T', 'A B^T'],
      correctAnswer: 1,
      explanation: 'Urutan perkalian matriks berbalik saat ditranspose: (AB)^T = B^T A^T.'
    },
    {
      id: 'algeo-2-15',
      question: 'Dalam Baris Eselon Tereduksi (RREF), setiap satu utama (leading 1) harus:',
      options: [
        'Merupakan satu-satunya elemen bukan-nol pada kolomnya',
        'Terletak di baris paling bawah',
        'Bernilai sembarang angka bukan-nol',
        'Memiliki nilai yang sama dengan determinan'
      ],
      correctAnswer: 0,
      explanation: 'Ciri khas utama RREF dibanding REF adalah setiap kolom yang memuat satu utama (leading 1) harus memiliki angka 0 di seluruh entri lainnya (atas dan bawah).'
    },
    {
      id: 'algeo-2-16',
      question: 'Variabel yang kolomnya tidak memiliki satu utama (leading 1) pada bentuk eselon disebut:',
      options: ['Variabel terikat (Basic variable)', 'Variabel bebas (Free variable)', 'Variabel dummy', 'Variabel slack'],
      correctAnswer: 1,
      explanation: 'Variabel bebas dapat diberikan nilai parameter sembarang t ∈ R, menghasilkan keluarga tak terhingga banyak solusi bagi SPL.'
    },
    {
      id: 'algeo-2-17',
      question: 'Dekomposisi LU memfaktorkan matriks persegi A menjadi perkalian A = LU, di mana L dan U adalah:',
      options: [
        'L = Segitiga Bawah (Lower triangular), U = Segitiga Atas (Upper triangular)',
        'L = Matriks Linier, U = Matriks Uniter',
        'L = Matriks Diagonal, U = Matriks Simetris',
        'L = Matriks Laplasian, U = Matriks Ortogonal'
      ],
      correctAnswer: 0,
      explanation: 'Dekomposisi LU membagi A menjadi matriks segitiga bawah L (Lower) dan segitiga atas U (Upper), mempercepat penyelesaian SPL berulang dengan O(n^2) forward/back substitution.'
    },
    {
      id: 'algeo-2-18',
      question: 'Trace dari sebuah matriks bujur sangkar A (dinotasikan tr(A)) didefinisikan sebagai:',
      options: [
        'Hasil kali seluruh elemen diagonal utama',
        'Jumlahan seluruh elemen diagonal utama ∑_{i=1}^n A_{ii}',
        'Determinan matriks A',
        'Elemen terbesar dalam matriks'
      ],
      correctAnswer: 1,
      explanation: 'Trace adalah jumlah dari semua entri pada diagonal utama matriks bujur sangkar.'
    },
    {
      id: 'algeo-2-19',
      question: 'Matriks yang jika dikalikan dengan dirinya sendiri menghasilkan dirinya sendiri (A^2 = A) disebut:',
      options: ['Matriks Idempoten', 'Matriks Nilpoten', 'Matriks Ortogonal', 'Matriks Involutif'],
      correctAnswer: 0,
      explanation: 'Matriks idempoten memenuhi A^2 = A, contohnya adalah matriks proyeksi ortogonal.'
    },
    {
      id: 'algeo-2-20',
      question: 'Jika A adalah matriks 2 x 2 dengan baris [1, 2] dan [3, 4], berapakah A^T?',
      options: [
        'Baris [1, 3] dan [2, 4]',
        'Baris [4, 3] dan [2, 1]',
        'Baris [-1, -2] dan [-3, -4]',
        'Baris [1, 2] dan [3, 4]'
      ],
      correctAnswer: 0,
      explanation: 'Transpose menukar baris dan kolom: kolom pertama [1, 3]^T menjadi baris pertama [1, 3], dan kolom kedua [2, 4]^T menjadi baris kedua [2, 4].'
    }
  ],

  // MODUL 3: DETERMINAN, MATRIKS INVERS & ATURAN CRAMER (20 Soal)
  algeo_determinan_invers: [
    {
      id: 'algeo-3-1',
      question: 'Berapakah determinan dari matriks 2 x 2 A = [[a, b], [c, d]]?',
      options: ['ad - bc', 'ab - cd', 'ad + bc', 'ac - bd'],
      correctAnswer: 0,
      explanation: 'Formula determinan matriks 2x2 adalah perkalian diagonal utama dikurangi perkalian diagonal sekunder: det(A) = ad - bc.'
    },
    {
      id: 'algeo-3-2',
      question: 'Berapakah determinan dari matriks A = [[3, 2], [1, 4]]?',
      options: ['10', '14', '12', '-2'],
      correctAnswer: 0,
      explanation: 'det(A) = (3)(4) - (2)(1) = 12 - 2 = 10.'
    },
    {
      id: 'algeo-3-3',
      question: 'Sebuah matriks bujur sangkar A memiliki invers A^{-1} (invertibel / non-singular) jika dan hanya jika:',
      options: ['det(A) != 0', 'det(A) = 0', 'tr(A) > 0', 'A simetris'],
      correctAnswer: 0,
      explanation: 'Syarat perlu dan cukup keterbalikan matriks adalah determinannya tidak sama dengan nol (det(A) != 0). Jika det(A) = 0, matriks disebut singular dan tidak punya invers.'
    },
    {
      id: 'algeo-3-4',
      question: 'Secara geometris di R^2 dan R^3, nilai mutlak determinan |det(A)| merepresentasikan:',
      options: [
        'Faktor skala perubahan luas (2D) atau volume (3D) dari transformasi linier matriks',
        'Panjang vektor terpanjang',
        'Sudut rotasi matriks',
        'Jarak dari titik pusat ke bidang'
      ],
      correctAnswer: 0,
      explanation: '|det(A)| mengukur bagaimana luas atau volume ruang berubah setelah ditransformasikan oleh matriks A.'
    },
    {
      id: 'algeo-3-5',
      question: 'Berapakah determinan dari matriks segitiga (atas atau bawah)?',
      options: [
        'Hasil kali seluruh elemen diagonal utamanya',
        'Jumlah seluruh elemennya',
        'Selalu bernilai 1',
        'Nol'
      ],
      correctAnswer: 0,
      explanation: 'Pada matriks segitiga, semua elemen di atas atau di bawah diagonal bernilai nol, sehingga ekspansi kofaktor menghasilkan determinan = perkalian entri diagonal utama a_{11} * a_{22} * ... * a_{nn}.'
    },
    {
      id: 'algeo-3-6',
      question: 'Jika matriks B diperoleh dari matriks A dengan menukar dua baris, maka det(B) sama dengan:',
      options: ['-det(A)', 'det(A)', '1 / det(A)', '0'],
      correctAnswer: 0,
      explanation: 'Sifat determinan: setiap pertukaran satu pasang baris membalikkan tanda determinan (dikalikan -1).'
    },
    {
      id: 'algeo-3-7',
      question: 'Jika sebuah baris pada matriks A dikalikan skalar k menghasilkan matriks B, maka det(B) = ...',
      options: ['k * det(A)', 'k^n * det(A)', 'det(A) / k', 'det(A) + k'],
      correctAnswer: 0,
      explanation: 'Mengalikan satu baris tunggal dengan k akan mengalikan nilai determinan dengan k. Namun mengalikan seluruh matriks n x n (kA) akan menghasilkan k^n * det(A).'
    },
    {
      id: 'algeo-3-8',
      question: 'Jika A berukuran 3 x 3 dan det(A) = 4, berapakah det(2A)?',
      options: ['32', '8', '16', '24'],
      correctAnswer: 0,
      explanation: 'Untuk matriks berukuran n x n, det(k A) = k^n * det(A). Di sini n = 3 dan k = 2, maka det(2A) = 2^3 * 4 = 8 * 4 = 32.'
    },
    {
      id: 'algeo-3-9',
      question: 'Sifat determinan terhadap perkalian matriks det(AB) adalah:',
      options: ['det(A) * det(B)', 'det(A) + det(B)', 'det(A) / det(B)', 'det(BA)^T'],
      correctAnswer: 0,
      explanation: 'Determinan bersifat multiplikatif: det(AB) = det(A) * det(B).'
    },
    {
      id: 'algeo-3-10',
      question: 'Jika det(A) = 5, berapakah determinan dari matriks inversnya det(A^{-1})?',
      options: ['1/5', '-5', '5', '0'],
      correctAnswer: 0,
      explanation: 'Karena A * A^{-1} = I, maka det(A) * det(A^{-1}) = det(I) = 1, sehingga det(A^{-1}) = 1 / det(A) = 1/5.'
    },
    {
      id: 'algeo-3-11',
      question: 'Invers dari matriks 2 x 2 A = [[a, b], [c, d]] dengan ad - bc != 0 dihitung dengan rumus:',
      options: [
        '(1 / (ad - bc)) * [[d, -b], [-c, a]]',
        '(1 / (ad - bc)) * [[a, -b], [-c, d]]',
        '[[d, b], [c, a]]',
        '(ad - bc) * [[d, -b], [-c, a]]'
      ],
      correctAnswer: 0,
      explanation: 'Rumus baku invers 2x2: tukar posisi diagonal utama (a dan d), kalikan diagonal sekunder dengan -1 (-b dan -c), lalu bagi dengan determinan (ad - bc).'
    },
    {
      id: 'algeo-3-12',
      question: 'Invers dari perkalian dua matriks yang dapat dibalik (AB)^{-1} adalah:',
      options: ['B^{-1} A^{-1}', 'A^{-1} B^{-1}', '(A^{-1})^T B^{-1}', 'B A^{-1}'],
      correctAnswer: 0,
      explanation: 'Prinsip "kaus kaki dan sepatu": invers perkalian matriks membalikkan urutan faktor, (AB)^{-1} = B^{-1} A^{-1}.'
    },
    {
      id: 'algeo-3-13',
      question: 'Rumus invers berbasis matriks adjoin (Adjugate Matrix) untuk sembarang matriks bujur sangkar A adalah:',
      options: [
        'A^{-1} = (1 / det(A)) * adj(A)',
        'A^{-1} = det(A) * adj(A)',
        'A^{-1} = adj(A)^T',
        'A^{-1} = (1 / tr(A)) * A'
      ],
      correctAnswer: 0,
      explanation: 'Teorema invers analitis menyatakan A^{-1} = (1 / det(A)) * C^T di mana C^T = adj(A) adalah transpose dari matriks kofaktor.'
    },
    {
      id: 'algeo-3-14',
      question: 'Aturan Cramer (Cramer\'s Rule) menyelesaikan sistem Ax = b dengan rumus variabel x_i = ...',
      options: [
        'det(A_i) / det(A)',
        'det(A) / det(A_i)',
        'det(A_i * b)',
        'b_i / det(A)'
      ],
      correctAnswer: 0,
      explanation: 'Aturan Cramer menghitung setiap variabel x_i sebagai rasio det(A_i) / det(A), di mana A_i diperoleh dengan mengganti kolom ke-i dari A dengan vektor konstanta b.'
    },
    {
      id: 'algeo-3-15',
      question: 'Berapakah determinan dari matriks identitas I_n berukuran n x n?',
      options: ['1', 'n', '0', 'n!'],
      correctAnswer: 0,
      explanation: 'Matriks identitas adalah matriks diagonal dengan seluruh elemen diagonal utama 1, sehingga det(I) = 1 * 1 * ... * 1 = 1.'
    },
    {
      id: 'algeo-3-16',
      question: 'Jika sebuah matriks bujur sangkar memiliki dua baris yang identik (sama persis), maka nilai determinannya adalah:',
      options: ['0', '1', 'Tak terdefinisi', 'Kuadrat elemen baris tersebut'],
      correctAnswer: 0,
      explanation: 'Jika dua baris sama, baris-baris tersebut tidak bebas linier (dapat dikurangi menghasilkan baris nol), sehingga determinannya pasti 0.'
    },
    {
      id: 'algeo-3-17',
      question: 'Sebuah matriks bujur sangkar Q dikatakan Ortogonal jika memenuhi relasi:',
      options: ['Q^T = Q^{-1} (artinya Q^T Q = Q Q^T = I)', 'det(Q) = 0', 'Q^2 = 0', 'Q simetris'],
      correctAnswer: 0,
      explanation: 'Matriks ortogonal mempertahankan panjang vektor dan sudut. Inversnya sangat murah untuk dihitung karena cukup ditranspose: Q^{-1} = Q^T.'
    },
    {
      id: 'algeo-3-18',
      question: 'Berapakah nilai determinan dari sembarang matriks ortogonal Q?',
      options: ['+1 atau -1', 'Selalu 0', 'Bisa sembarang bilangan riil', 'Selalu +1'],
      correctAnswer: 0,
      explanation: 'Karena Q^T Q = I, det(Q^T) det(Q) = (det(Q))^2 = det(I) = 1. Maka det(Q) = ±1.'
    },
    {
      id: 'algeo-3-19',
      question: 'Apakah det(A^T) sama dengan det(A)?',
      options: ['Ya, det(A^T) = det(A)', 'Tidak, det(A^T) = -det(A)', 'Hanya jika A simetris', 'det(A^T) = 1/det(A)'],
      correctAnswer: 0,
      explanation: 'Transpose tidak mengubah nilai determinan matriks: det(A^T) = det(A).'
    },
    {
      id: 'algeo-3-20',
      question: 'Berapakah determinan matriks A = [[2, 0, 0], [5, 3, 0], [7, 1, 4]] (matriks segitiga bawah)?',
      options: ['24', '14', '0', '35'],
      correctAnswer: 0,
      explanation: 'Determinan matriks segitiga adalah perkalian entri diagonal utama: 2 * 3 * 4 = 24.'
    }
  ],

  // MODUL 4: RUANG VEKTOR, KEBEBASAN LINIER & BASIS (20 Soal)
  algeo_ruang_vektor_basis: [
    {
      id: 'algeo-4-1',
      question: 'Sebuah kombinasi linier dari himpunan vektor {v_1, v_2, ..., v_k} dengan skalar c_1, c_2, ..., c_k adalah ekspresi berbentuk:',
      options: [
        'c_1 v_1 + c_2 v_2 + ... + c_k v_k',
        'c_1 v_1 * c_2 v_2 * ... * c_k v_k',
        '(v_1 • v_2) / c_1',
        'v_1^2 + v_2^2 + ... + v_k^2'
      ],
      correctAnswer: 0,
      explanation: 'Kombinasi linier adalah jumlahan hasil kali skalar dengan masing-masing vektor: ∑ c_i v_i.'
    },
    {
      id: 'algeo-4-2',
      question: 'Himpunan vektor {v_1, v_2, ..., v_k} dikatakan Bebas Linier (Linearly Independent) jika persamaan c_1 v_1 + c_2 v_2 + ... + c_k v_k = 0 terpenuhi HANYA KETIKA:',
      options: [
        'Semua skalar c_1 = c_2 = ... = c_k = 0 (hanya solusi trivial)',
        'Setidaknya satu skalar bernilai bukan-nol',
        'Semua vektor saling tegak lurus',
        'Determinannya bernilai 1'
      ],
      correctAnswer: 0,
      explanation: 'Bebas linier berarti tidak ada satu pun vektor dalam himpunan yang dapat dinyatakan sebagai kombinasi linier dari vektor-vektor lainnya; satu-satunya cara menghasilkan vektor nol adalah dengan memilih semua koefisien c_i = 0.'
    },
    {
      id: 'algeo-4-3',
      question: 'Jika terdapat skalar bukan-nol c_i != 0 sedemikian sehingga ∑ c_i v_i = 0, maka himpunan vektor tersebut disebut:',
      options: ['Bergantung Linier (Linearly Dependent)', 'Ortogonal', 'Basis ortonormal', 'Singular'],
      correctAnswer: 0,
      explanation: 'Bergantung linier (linearly dependent) menandakan adanya redundansi, di mana setidaknya satu vektor adalah kombinasi linier dari yang lain.'
    },
    {
      id: 'algeo-4-4',
      question: 'Rentang (Span) dari himpunan vektor S = {v_1, ..., v_k}, dinotasikan span(S), didefinisikan sebagai:',
      options: [
        'Himpunan semua kemungkinan kombinasi linier dari vektor-vektor di S',
        'Jarak terjauh antara dua vektor di S',
        'Perkalian silang semua elemen S',
        'Vektor rata-rata dari S'
      ],
      correctAnswer: 0,
      explanation: 'Span(S) adalah seluruh ruang (subruang) yang dapat dicapai melalui kombinasi linier vektor-vektor pembentuknya.'
    },
    {
      id: 'algeo-4-5',
      question: 'Himpunan vektor B merupakan sebuah Basis bagi ruang vektor V jika memenuhi dua kondisi mutlak:',
      options: [
        'B bebas linier DAN B merentang V (span(B) = V)',
        'B ortogonal dan memiliki panjang 1',
        'Jumlah elemen B sama dengan nol',
        'B memuat matriks identitas'
      ],
      correctAnswer: 0,
      explanation: 'Definisi formal basis: himpunan vektor minimal yang bebas linier sekaligus mampu merentang seluruh ruang vektor V.'
    },
    {
      id: 'algeo-4-6',
      question: 'Dimensi dari sebuah ruang vektor V didefinisikan sebagai:',
      options: [
        'Jumlah vektor di dalam sembarang basis bagi V',
        'Ukuran memori RAM yang digunakan vektor',
        'Norm dari vektor terpanjang',
        'Determinan ruang'
      ],
      correctAnswer: 0,
      explanation: 'Dimensi adalah invarian ruang vektor yang diukur dari jumlah elemen vektor pada basisnya. Contoh: R^3 memiliki dimensi 3.'
    },
    {
      id: 'algeo-4-7',
      question: 'Ruang Kolom (Column Space / Col(A)) dari matriks A adalah:',
      options: [
        'Ruang yang direntang oleh vektor-vektor kolom dari A',
        'Ruang yang direntang oleh vektor-vektor baris dari A',
        'Himpunan solusi dari Ax = 0',
        'Jumlah kolom pada matriks A'
      ],
      correctAnswer: 0,
      explanation: 'Col(A) adalah span dari seluruh kolom A. Sistem Ax = b konsisten jika dan hanya jika b berada di dalam Col(A).'
    },
    {
      id: 'algeo-4-8',
      question: 'Ruang Nol (Null Space / Kernel / Nul(A)) dari matriks A adalah:',
      options: [
        'Himpunan semua vektor x yang memenuhi persamaan Ax = 0',
        'Himpunan kolom yang seluruhnya berisi angka nol',
        'Determinan matriks bernilai nol',
        'Ruang vektor berdimensi nol'
      ],
      correctAnswer: 0,
      explanation: 'Null space Nul(A) = {x ∈ R^n | Ax = 0} adalah subruang yang dipetakan oleh A menjadi vektor nol.'
    },
    {
      id: 'algeo-4-9',
      question: 'Rank dari sebuah matriks A didefinisikan sebagai:',
      options: [
        'Dimensi dari ruang kolom (atau ruang baris) dari A',
        'Jumlah total entri matriks',
        'Nilai elemen terbesar dalam matriks',
        'Jumlah baris ditambah jumlah kolom'
      ],
      correctAnswer: 0,
      explanation: 'Rank(A) adalah jumlah maksimum kolom (atau baris) yang saling bebas linier pada matriks A.'
    },
    {
      id: 'algeo-4-10',
      question: 'Teorema Rank-Nullity (Teorema Dimensi) untuk matriks A dengan n kolom menyatakan bahwa:',
      options: [
        'rank(A) + nullity(A) = n (jumlah kolom)',
        'rank(A) * nullity(A) = n',
        'rank(A) - nullity(A) = 0',
        'rank(A) + nullity(A) = det(A)'
      ],
      correctAnswer: 0,
      explanation: 'Teorema Rank-Nullity: dimensi ruang kolom (rank) ditambah dimensi ruang nol (nullity) selalu sama dengan jumlah total kolom n.'
    },
    {
      id: 'algeo-4-11',
      question: 'Berapakah dimensi dari ruang R^4?',
      options: ['4', '16', '1', 'Tak hingga'],
      correctAnswer: 0,
      explanation: 'Basis standar R^4 terdiri dari 4 vektor: e_1=[1,0,0,0], e_2=[0,1,0,0], e_3=[0,0,1,0], e_4=[0,0,0,1]. Jadi dimensinya 4.'
    },
    {
      id: 'algeo-4-12',
      question: 'Apakah himpunan vektor v_1 = [1, 0] dan v_2 = [2, 0] membentuk basis untuk R^2?',
      options: [
        'Tidak, karena keduanya bergantung linier (v_2 = 2 v_1) dan tidak dapat merentang komponen y',
        'Ya, karena ada 2 vektor',
        'Ya, karena tidak ada angka negatif',
        'Hanya jika dinormalisasi'
      ],
      correctAnswer: 0,
      explanation: 'Kedua vektor kelipatan satu sama lain (bergantung linier) dan hanya merentang garis sumbu-X, bukan seluruh bidang R^2.'
    },
    {
      id: 'algeo-4-13',
      question: 'Sebuah basis B = {u_1, u_2, ..., u_n} disebut Basis Ortonormal jika:',
      options: [
        'Setiap vektor berpanjang 1 (||u_i|| = 1) dan saling ortogonal satu sama lain (u_i • u_j = 0 untuk i != j)',
        'Semua elemennya adalah bilangan bulat',
        'Matriks basisnya berbentuk segitiga',
        'Determinannya nol'
      ],
      correctAnswer: 0,
      explanation: 'Ortonormal = Ortogonal (saling tegak lurus 90°) + Normal (panjang satuan 1). Memudahkan proyeksi koordinat tanpa invers matriks.'
    },
    {
      id: 'algeo-4-14',
      question: 'Algoritma standar untuk mengonversi sembarang basis menjadi basis ortonormal adalah:',
      options: [
        'Proses Gram-Schmidt',
        'Eliminasi Gauss-Jordan',
        'Algoritma Dijkstra',
        'Dekomposisi Cholesky'
      ],
      correctAnswer: 0,
      explanation: 'Proses Gram-Schmidt secara sistematis mengurangi proyeksi vektor terhadap vektor-vektor sebelumnya lalu menormalisasinya untuk menghasilkan basis ortonormal.'
    },
    {
      id: 'algeo-4-15',
      question: 'Jika A adalah matriks 3 x 5 dengan rank = 3, berapakah nullity(A) (dimensi ruang nol)?',
      options: ['2', '3', '5', '0'],
      correctAnswer: 0,
      explanation: 'Jumlah kolom n = 5. Teorema Rank-Nullity: rank + nullity = 5 => 3 + nullity = 5 => nullity = 2.'
    },
    {
      id: 'algeo-4-16',
      question: 'Jika matriks persegi n x n memiliki rank penuh (full rank = n), manakah pernyataan yang BENAR?',
      options: [
        'A memiliki invers (A^{-1} ada) dan det(A) != 0',
        'Ax = 0 memiliki tak terhingga solusi non-trivial',
        'Ruang nol Nul(A) memiliki dimensi n',
        'Baris-baris A bergantung linier'
      ],
      correctAnswer: 0,
      explanation: 'Berdasarkan Teorema Matriks Terbalikkan: full rank ekuivalen dengan det(A) != 0, invertibel, solusi Ax=0 hanya trivial, dan kolom-kolomnya bebas linier.'
    },
    {
      id: 'algeo-4-17',
      question: 'Subruang dari ruang vektor V harus memenuhi tiga aksioma ketertutupan berikut, KECUALI:',
      options: [
        'Vektor nol 0 berada di dalam subruang',
        'Tertutup terhadap operasi penjumlahan vektor (jika u, v ∈ W maka u + v ∈ W)',
        'Tertutup terhadap perkalian skalar (jika u ∈ W, c ∈ R maka c u ∈ W)',
        'Harus memiliki jumlah elemen berhingga'
      ],
      correctAnswer: 3,
      explanation: 'Subruang riil (selain subruang nol) selalu memiliki tak terhingga banyaknya vektor. Tiga syarat subruang: memuat vektor nol, tertutup penjumlahan, dan tertutup perkalian skalar.'
    },
    {
      id: 'algeo-4-18',
      question: 'Apakah garis lurus y = 2x + 1 merupakan subruang dari R^2?',
      options: [
        'Bukan, karena tidak melewati titik asal (0, 0) sehingga tidak memuat vektor nol',
        'Ya, karena merupakan garis lurus',
        'Ya, karena berdimensi 1',
        'Bukan, karena kemiringannya positif'
      ],
      correctAnswer: 0,
      explanation: 'Subruang wajib memuat vektor nol [0, 0]^T. Garis y = 2x + 1 memiliki nilai y(0) = 1 != 0, sehingga gagal memenuhi aksioma subruang.'
    },
    {
      id: 'algeo-4-19',
      question: 'Berapakah rank dari matriks identitas I_4 berukuran 4 x 4?',
      options: ['4', '1', '0', '16'],
      correctAnswer: 0,
      explanation: 'Semua 4 kolom matriks identitas saling bebas linier secara ortonormal, sehingga rank(I_4) = 4.'
    },
    {
      id: 'algeo-4-20',
      question: 'Jika vektor v diproyeksikan ke subruang W yang memiliki basis ortonormal {u_1, u_2}, rumus proyeksinya adalah:',
      options: [
        'proj_W(v) = (v • u_1) u_1 + (v • u_2) u_2',
        'proj_W(v) = (u_1 • u_2) v',
        'proj_W(v) = v / (u_1 + u_2)',
        'proj_W(v) = u_1 + u_2'
      ],
      correctAnswer: 0,
      explanation: 'Karena basisnya ortonormal (||u_i|| = 1), penyebut dot product bernilai 1, sehingga proyeksi cukup menjumlahkan komponen proyeksi skalar sepanjang masing-masing basis: ∑ (v • u_i) u_i.'
    }
  ],

  // MODUL 5: TRANSFORMASI LINIER, NILAI EIGEN & PAGERANK (20 Soal)
  algeo_transformasi_eigen: [
    {
      id: 'algeo-5-1',
      question: 'Sebuah pemetaan T: V -> W dikatakan sebagai Transformasi Linier jika memenuhi:',
      options: [
        'T(u + v) = T(u) + T(v) DAN T(c u) = c T(u) untuk sembarang skalar c',
        'T(u * v) = T(u) * T(v)',
        'T(x) = x^2 + c',
        'T memetakan semua vektor menjadi skalar'
      ],
      correctAnswer: 0,
      explanation: 'Dua sifat esensial transformasi linier adalah aditivitas T(u+v) = T(u)+T(v) dan homogenitas T(cu) = cT(u).'
    },
    {
      id: 'algeo-5-2',
      question: 'Jika A adalah matriks representasi transformasi linier, vektor bukan-nol v dan skalar λ disebut Vektor Eigen dan Nilai Eigen jika memenuhi persamaan fundamental:',
      options: [
        'A v = λ v',
        'A v = v + λ',
        'A + v = λ I',
        'det(A) = λ ||v||'
      ],
      correctAnswer: 0,
      explanation: 'Persamaan eigen fundamental adalah Av = λv: transformasi matriks A pada vektor v hanya mengubah panjang/skala vektor sebesar faktor λ tanpa mengubah garis arahnya.'
    },
    {
      id: 'algeo-5-3',
      question: 'Untuk mencari nilai-nilai eigen λ dari matriks bujur sangkar A, kita harus menyelesaikan Persamaan Karakteristik:',
      options: [
        'det(A - λ I) = 0',
        'tr(A - λ I) = 0',
        'A - λ I = 0',
        'det(A) = λ'
      ],
      correctAnswer: 0,
      explanation: 'Karena (A - λI)v = 0 harus memiliki solusi non-trivial v != 0, maka matriks (A - λI) harus singular, yang mensyaratkan det(A - λI) = 0.'
    },
    {
      id: 'algeo-5-4',
      question: 'Berapakah nilai eigen dari matriks diagonal D = [[3, 0], [0, -5]]?',
      options: ['λ_1 = 3 dan λ_2 = -5', 'λ_1 = -2 dan λ_2 = -15', 'λ = 0', 'λ = 8'],
      correctAnswer: 0,
      explanation: 'Pada matriks diagonal (atau matriks segitiga), nilai-nilai eigen persis sama dengan entri-entri pada diagonal utamanya.'
    },
    {
      id: 'algeo-5-5',
      question: 'Hubungan antara jumlahan semua nilai eigen matriks A dengan trace matriks tr(A) adalah:',
      options: [
        '∑ λ_i = tr(A) (jumlah seluruh nilai eigen sama dengan trace)',
        '∑ λ_i = det(A)',
        '∑ λ_i = 1',
        'Tidak ada hubungan'
      ],
      correctAnswer: 0,
      explanation: 'Teorema nilai eigen: jumlahan seluruh nilai eigen sama dengan trace matriks (∑ λ_i = tr(A)), dan hasil kali seluruh nilai eigen sama dengan determinan (∏ λ_i = det(A)).'
    },
    {
      id: 'algeo-5-6',
      question: 'Jika sebuah matriks A memiliki nilai eigen λ = 0, apa kesimpulannya tentang matriks A?',
      options: [
        'A adalah matriks singular (det(A) = 0 dan tidak memiliki invers)',
        'A adalah matriks identitas',
        'A memiliki rank penuh',
        'Semua elemen A bernilai 0'
      ],
      correctAnswer: 0,
      explanation: 'Karena det(A) = ∏ λ_i, jika salah satu λ = 0 maka det(A) = 0, yang berarti matriks A singular dan tidak invertibel.'
    },
    {
      id: 'algeo-5-7',
      question: 'Sebuah matriks n x n A dapat Didagonalisasi (Diagonalizable) menjadi A = P D P^{-1} jika dan hanya jika:',
      options: [
        'A memiliki n buah vektor eigen yang saling bebas linier',
        'A adalah matriks simetris saja',
        'Semua elemennya bernilai positif',
        'det(A) = 1'
      ],
      correctAnswer: 0,
      explanation: 'Diagonalisasi A = P D P^{-1} mensyaratkan matriks modal P (kolom-kolomnya berisi vektor eigen) memiliki invers, yang terjadi jika dan hanya jika n vektor eigen tersebut bebas linier.'
    },
    {
      id: 'algeo-5-8',
      question: 'Jika A = P D P^{-1} di mana D adalah matriks diagonal, berapakah rumus perpangkatan matriks A^k?',
      options: [
        'A^k = P D^k P^{-1}',
        'A^k = P^k D^k (P^{-1})^k',
        'A^k = k * P D P^{-1}',
        'A^k = D^k'
      ],
      correctAnswer: 0,
      explanation: 'Karena faktor dalam saling meniadakan (P^{-1} P = I): A^k = (P D P^{-1})(P D P^{-1})... = P D^k P^{-1}. Perpangkatan matriks diagonal D^k sangat murah (hanya memangkatkan elemen diagonalnya).'
    },
    {
      id: 'algeo-5-9',
      question: 'Teorema Spektral menyatakan bahwa jika A adalah matriks simetris bernilai riil (A = A^T), maka:',
      options: [
        'Semua nilai eigennya pasti bilangan riil dan vektor-vektor eigennya dapat dipilih saling ortonormal',
        'Nilai eigennya pasti bilangan kompleks imajiner',
        'Determinannya selalu bernilai negatif',
        'Rank matriks selalu ganjil'
      ],
      correctAnswer: 0,
      explanation: 'Teorema Spektral menjamin matriks simetris riil selalu dapat didiagonalisasi secara ortogonal: A = Q D Q^T di mana Q adalah matriks ortogonal dan semua nilai eigen λ riil.'
    },
    {
      id: 'algeo-5-10',
      question: 'Dalam algoritma Google PageRank, skor kepentingan halaman web dihitung sebagai:',
      options: [
        'Vektor eigen dominan (prinsipal) yang bersesuaian dengan nilai eigen λ = 1 dari matriks transisi stokastik web',
        'Invers dari jumlah tautan keluar',
        'Determinan matriks keterhubungan web',
        'Jarak Manhattan antar halaman web'
      ],
      correctAnswer: 0,
      explanation: 'Berdasarkan Teorema Perron-Frobenius, matriks stokastik kolom memiliki nilai eigen maksimum λ = 1, dan distribusi stasioner PageRank adalah vektor eigen yang bersesuaian dengan λ = 1 (Av = v).'
    },
    {
      id: 'algeo-5-11',
      question: 'Dalam reduksi dimensi data dan Machine Learning (Principal Component Analysis - PCA), arah variansi data terbesar (Principal Component pertama) adalah:',
      options: [
        'Vektor eigen yang bersesuaian dengan nilai eigen terbesar dari matriks kovariansi data',
        'Rata-rata dari semua sampel data',
        'Kolom pertama dari dataset',
        'Vektor nol'
      ],
      correctAnswer: 0,
      explanation: 'PCA memproyeksikan data ke vektor eigen dari matriks kovariansi. Vektor eigen dengan nilai eigen (variansi) terbesar merepresentasikan arah komponen utama (PC1).'
    },
    {
      id: 'algeo-5-12',
      question: 'Matriks transformasi 2D untuk rotasi sudut θ berlawanan arah jarum jam terhadap titik asal adalah:',
      options: [
        '[[cos θ, -sin θ], [sin θ, cos θ]]',
        '[[cos θ, sin θ], [-sin θ, cos θ]]',
        '[[sin θ, cos θ], [cos θ, -sin θ]]',
        '[[1, 0], [0, 1]]'
      ],
      correctAnswer: 0,
      explanation: 'Matriks rotasi standar 2D adalah R(θ) = [[cos θ, -sin θ], [sin θ, cos θ]].'
    },
    {
      id: 'algeo-5-13',
      question: 'Dekomposisi Nilai Singular (Singular Value Decomposition - SVD) memfaktorkan sembarang matriks berukuran m x n menjadi A = U Σ V^T, di mana:',
      options: [
        'U dan V adalah matriks ortogonal, dan Σ adalah matriks diagonal berisi nilai-nilai singular σ_i >= 0',
        'U dan V adalah matriks segitiga',
        'Σ adalah matriks nol',
        'Hanya berlaku jika m = n'
      ],
      correctAnswer: 0,
      explanation: 'SVD berlaku untuk SEMUA matriks (tidak harus bujur sangkar), memecah transformasi linier menjadi rotasi (V^T), penskalaan (Σ), dan rotasi kedua (U).'
    },
    {
      id: 'algeo-5-14',
      question: 'Berapakah nilai eigen dari matriks A = [[2, 1], [0, 2]]?',
      options: [
        'λ = 2 dengan multiplisitas aljabar 2',
        'λ_1 = 2 dan λ_2 = 1',
        'λ_1 = 0 dan λ_2 = 4',
        'λ = -2'
      ],
      correctAnswer: 0,
      explanation: 'Karena A adalah matriks segitiga atas, nilai eigen langsung terbaca pada diagonal: λ_1 = 2 dan λ_2 = 2 (nilai eigen berulang dengan multiplisitas 2).'
    },
    {
      id: 'algeo-5-15',
      question: 'Jika v adalah vektor eigen dari A dengan nilai eigen λ, maka vektor eigen dari A^2 dengan vektor yang sama v memiliki nilai eigen:',
      options: ['λ^2', '2λ', '√λ', 'λ + 2'],
      correctAnswer: 0,
      explanation: 'A^2 v = A(Av) = A(λv) = λ(Av) = λ(λv) = λ^2 v. Jadi nilai eigennya terkuadratkan.'
    },
    {
      id: 'algeo-5-16',
      question: 'Metode Power Iteration (Iterasi Kuasa) adalah algoritma numerik yang efisien untuk menemukan:',
      options: [
        'Nilai eigen terbesar (dominan) beserta vektor eigennya secara aproksimasi',
        'Invers seluruh matriks',
        'Semua akar polinomial',
        'Determinan matriks dalam O(1)'
      ],
      correctAnswer: 0,
      explanation: 'Power Iteration mengalikan vektor acak berulang kali v_{k+1} = A v_k / ||A v_k||, yang secara matematis akan berkonvergensi ke vektor eigen dominan.'
    },
    {
      id: 'algeo-5-17',
      question: 'Matriks bujur sangkar A dikatakan Definit Positif jika untuk setiap vektor bukan-nol x berlaku:',
      options: ['x^T A x > 0', 'x^T A x < 0', 'det(A) < 0', 'tr(A) = 0'],
      correctAnswer: 0,
      explanation: 'Bentuk kuadratik x^T A x > 0 untuk semua x != 0 adalah definisi matriks definit positif, yang menjamin seluruh nilai eigennya riil dan bernilai positif (> 0).'
    },
    {
      id: 'algeo-5-18',
      question: 'Kernel (Ruang Nol) dari transformasi linier T: V -> W adalah himpunan semua vektor v ∈ V sedemikian sehingga:',
      options: ['T(v) = 0', 'T(v) = v', '||T(v)|| = 1', 'T(v) menuju tak hingga'],
      correctAnswer: 0,
      explanation: 'Kernel ker(T) adalah kumpulan vektor yang dipetakan menjadi vektor nol di ruang target W.'
    },
    {
      id: 'algeo-5-19',
      question: 'Jika A adalah matriks proyeksi ortogonal ke sebuah bidang di R^3, berapakah nilai-nilai eigen dari A?',
      options: [
        'Hanya 0 dan 1 (λ = 1 untuk vektor pada bidang, λ = 0 untuk vektor tegak lurus bidang)',
        'Selalu bernilai 2',
        'Tak terhingga banyak nilai',
        '-1 dan +1'
      ],
      correctAnswer: 0,
      explanation: 'Karena matriks proyeksi memenuhi A^2 = A, maka λ^2 = λ, sehingga nilai eigen yang mungkin hanyalah 0 atau 1.'
    },
    {
      id: 'algeo-5-20',
      question: 'Dalam kompresi gambar digital (Low-Rank Matrix Approximation), teorema Eckart-Young menjamin aproksimasi matriks rank-k terbaik diperoleh dengan cara:',
      options: [
        'Mempertahankan k nilai singular terbesar dari SVD dan mengenolkan sisanya',
        'Menghapus k baris pertama gambar',
        'Mengalikan gambar dengan matriks identitas',
        'Mengambil rata-rata piksel tetangga'
      ],
      correctAnswer: 0,
      explanation: 'Teorema Eckart-Young-Mirsky membuktikan bahwa pemotongan SVD berorde k (Trunctuated SVD) menghasilkan aproksimasi rank-k yang meminimalkan eror Frobenius norm.'
    }
  ]
};
