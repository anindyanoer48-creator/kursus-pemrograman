import type { QuizQuestion } from './curriculum';

export const KALKULUS_QUIZZES: Record<string, QuizQuestion[]> = {
  // MODUL 1: FUNGSI, LIMIT & KONTINUITAS (20 Soal)
  kalkulus_fungsi_limit: [
    {
      id: 'kalkulus-1-1',
      question: 'Secara intuitif dan formal, apa yang dimaksud dengan pernyataan lim_{x -> c} f(x) = L?',
      options: [
        'Nilai f(c) harus tepat sama dengan L dan terdefinisi di c',
        'Nilai f(x) mendekati L sedekat mungkin saat x mendekati c dari kedua sisi, tanpa harus f(c) = L',
        'Fungsi f(x) memotong sumbu-Y tepat pada koordinat y = L',
        'Turunan pertama dari f(x) pada x = c sama dengan L'
      ],
      correctAnswer: 1,
      explanation: 'Limit meninjau perilaku nilai f(x) saat x mendekati nilai c dari arah kiri dan kanan. Nilai f(c) itu sendiri tidak disyaratkan terdefinisi atau sama dengan L.'
    },
    {
      id: 'kalkulus-1-2',
      question: 'Berapakah nilai dari lim_{x -> 2} (x^2 - 4) / (x - 2)?',
      options: ['0', '2', '4', 'Tidak terdefinisi'],
      correctAnswer: 2,
      explanation: 'Faktorisasi pembilang: (x^2 - 4) = (x - 2)(x + 2). Karena x mendekati 2 namun x != 2, kita eliminasi faktor (x - 2), sehingga lim_{x -> 2} (x + 2) = 2 + 2 = 4.'
    },
    {
      id: 'kalkulus-1-3',
      question: 'Sebuah fungsi f(x) dikatakan kontinu pada titik x = c jika dan hanya jika memenuhi ketiga syarat berikut, KECUALI:',
      options: [
        'f(c) terdefinisi (ada nilainya)',
        'lim_{x -> c} f(x) ada (limit kiri sama dengan limit kanan)',
        'lim_{x -> c} f(x) = f(c)',
        'Turunan f\'(c) bernilai positif'
      ],
      correctAnswer: 3,
      explanation: 'Kontinuitas di c hanya mensyaratkan: (1) f(c) ada, (2) limit di c ada, dan (3) nilai limit sama dengan nilai fungsi f(c). Turunan f\'(c) tidak harus bernilai positif.'
    },
    {
      id: 'kalkulus-1-4',
      question: 'Berapakah nilai limit trigonometri fundamental lim_{x -> 0} (sin x) / x (dengan x dalam radian)?',
      options: ['0', '1', 'Tak Hingga (∞)', '-1'],
      correctAnswer: 1,
      explanation: 'Berdasarkan Teorema Apit (Squeeze Theorem) geometri lingkaran satuan, lim_{x -> 0} (sin x)/x = 1.'
    },
    {
      id: 'kalkulus-1-5',
      question: 'Berapakah nilai dari lim_{x -> ∞} (3x^2 + 5x - 7) / (6x^2 - 2x + 1)?',
      options: ['0', '1/2', '3', '∞'],
      correctAnswer: 1,
      explanation: 'Bagi pembilang dan penyebut dengan derajat tertinggi x^2: lim_{x -> ∞} (3 + 5/x - 7/x^2) / (6 - 2/x + 1/x^2) = 3 / 6 = 1/2.'
    },
    {
      id: 'kalkulus-1-6',
      question: 'Jika lim_{n -> ∞} f(n) / g(n) = 0 untuk fungsi biaya waktu komputasi, apa relasi asimptotik antara f(n) dan g(n)?',
      options: [
        'f(n) tumbuh jauh lebih cepat daripada g(n)',
        'f(n) memiliki kelas kompleksitas yang sama ketat dengan g(n)',
        'f(n) = o(g(n)) (little-o), artinya f(n) tumbuh jauh lebih lambat daripada g(n)',
        'f(n) = Ω(g(n))'
      ],
      correctAnswer: 2,
      explanation: 'Jika rasio f(n)/g(n) mendekati 0 saat n -> ∞, berarti g(n) mendominasi secara mutlak dan f(n) tumbuh jauh lebih lambat, yang dinotasikan f(n) ∈ o(g(n)) atau f(n) ∈ O(g(n)).'
    },
    {
      id: 'kalkulus-1-7',
      question: 'Jika lim_{x -> c^-} f(x) = 3 dan lim_{x -> c^+} f(x) = 5, apakah lim_{x -> c} f(x) ada?',
      options: [
        'Ada, nilainya rata-rata yaitu 4',
        'Ada, nilainya mengikuti limit kanan yaitu 5',
        'Tidak ada, karena limit sepihak kiri dan kanan tidak bernilai sama',
        'Ada, nilainya 15'
      ],
      correctAnswer: 2,
      explanation: 'Syarat mutlak limit dua sisi ada pada x = c adalah limit kiri harus sama persis dengan limit kanan (lim_{x -> c^-} f(x) = lim_{x -> c^+} f(x)).'
    },
    {
      id: 'kalkulus-1-8',
      question: 'Apa arti garis x = a merupakan asimptot tegak (vertical asymptote) dari kurva y = f(x)?',
      options: [
        'f(a) = 0',
        'lim_{x -> a^+} f(x) = ±∞ atau lim_{x -> a^-} f(x) = ±∞',
        'lim_{x -> ∞} f(x) = a',
        'Turunan kedua f\'\'(a) = 0'
      ],
      correctAnswer: 1,
      explanation: 'Asimptot tegak x = a terjadi saat nilai f(x) meledak menuju +∞ atau -∞ ketika x mendekati a dari sisi kiri maupun kanan.'
    },
    {
      id: 'kalkulus-1-9',
      question: 'Berapakah nilai dari lim_{x -> 0} (1 - cos x) / x?',
      options: ['0', '1', '1/2', '∞'],
      correctAnswer: 0,
      explanation: 'Kalikan dengan konjugat (1 + cos x)/(1 + cos x) menghasilkan sin^2(x) / (x(1 + cos x)) = (sin x / x) * (sin x / (1 + cos x)) = 1 * (0 / 2) = 0.'
    },
    {
      id: 'kalkulus-1-10',
      question: 'Apa yang dinyatakan oleh Teorema Nilai Antara (Intermediate Value Theorem - IVT)?',
      options: [
        'Jika f kontinu pada [a, b], maka f pasti terdiferensialkan pada (a, b)',
        'Jika f kontinu pada [a, b] dan u terletak di antara f(a) dan f(b), maka ada c ∈ (a, b) sehingga f(c) = u',
        'Nilai maksimum f pada [a, b] selalu berada di titik ujung',
        'Jika f(a) = f(b), maka turunan f\'(c) pasti nol'
      ],
      correctAnswer: 1,
      explanation: 'Teorema Nilai Antara menjamin bahwa fungsi kontinu melewati semua nilai di antara f(a) dan f(b) tanpa ada loncatan/lubang, dasar dari algoritma Bisection Search.'
    },
    {
      id: 'kalkulus-1-11',
      question: 'Berapakah nilai dari lim_{x -> 3} (x^2 - 9) / (x^2 - 2x - 3)?',
      options: ['3/4', '3/2', '1', '0'],
      correctAnswer: 1,
      explanation: 'Faktorisasi: (x - 3)(x + 3) / ((x - 3)(x + 1)). Coret (x - 3), substitusi x = 3: (3 + 3) / (3 + 1) = 6 / 4 = 3/2.'
    },
    {
      id: 'kalkulus-1-12',
      question: 'Berapakah nilai dari lim_{x -> ∞} (5x^3 - 2) / (2x^4 + 10x)?',
      options: ['5/2', '∞', '0', '1'],
      correctAnswer: 2,
      explanation: 'Derajat penyebut (4) lebih tinggi dari derajat pembilang (3). Saat x -> ∞, pembagian dengan pangkat lebih tinggi membuat nilai limit menuju 0.'
    },
    {
      id: 'kalkulus-1-13',
      question: 'Fungsi tangga lantai (floor function) f(x) = ⌊x⌋ kontinu pada himpunan:',
      options: [
        'Semua bilangan riil R',
        'Hanya bilangan bulat Z',
        'Semua bilangan riil kecuali bilangan bulat (R \\ Z)',
        'Tidak pernah kontinu di mana pun'
      ],
      correctAnswer: 2,
      explanation: 'Floor function memiliki diskontinuitas loncat (jump discontinuity) pada setiap bilangan bulat n, karena limit kiri n - 1 berbeda dengan limit kanan n.'
    },
    {
      id: 'kalkulus-1-14',
      question: 'Jika g(x) <= f(x) <= h(x) untuk semua x di dekat c, dan lim_{x -> c} g(x) = lim_{x -> c} h(x) = L, maka lim_{x -> c} f(x) = L. Teorema ini dikenal sebagai:',
      options: [
        'Teorema Nilai Rata-rata (MVT)',
        'Teorema Apit (Squeeze / Sandwich Theorem)',
        'Teorema Rolle',
        'Teorema Taylor'
      ],
      correctAnswer: 1,
      explanation: 'Ini adalah definisi resmi Teorema Apit (Squeeze Theorem), sangat berguna untuk mencari limit fungsi berosilasi seperti x^2 * sin(1/x) saat x -> 0.'
    },
    {
      id: 'kalkulus-1-15',
      question: 'Berapakah nilai dari lim_{x -> 0} x^2 * sin(1/x)?',
      options: ['Tidak ada karena berosilasi', '1', '0', '∞'],
      correctAnswer: 2,
      explanation: 'Karena -1 <= sin(1/x) <= 1, maka -x^2 <= x^2 sin(1/x) <= x^2. Karena lim_{x -> 0} (-x^2) = lim_{x -> 0} x^2 = 0, menurut Teorema Apit limitnya adalah 0.'
    },
    {
      id: 'kalkulus-1-16',
      question: 'Berapakah nilai dari lim_{n -> ∞} (1 + 1/n)^n?',
      options: ['1', '∞', 'e (konstanta Euler ≈ 2.71828)', '0'],
      correctAnswer: 2,
      explanation: 'Ini adalah definisi fundamental dari bilangan euler e = lim_{n -> ∞} (1 + 1/n)^n.'
    },
    {
      id: 'kalkulus-1-17',
      question: 'Jika lim_{n -> ∞} f(n)/g(n) = c dengan 0 < c < ∞, apa kesimpulan kelas kompleksitas asimptotiknya?',
      options: [
        'f(n) = o(g(n))',
        'f(n) = Θ(g(n)) (keduanya memiliki laju pertumbuhan yang sama)',
        'f(n) = ω(g(n))',
        'f(n) bernilai konstan'
      ],
      correctAnswer: 1,
      explanation: 'Jika rasio limit konvergen ke konstanta positif terbatas c (0 < c < ∞), maka f(n) dan g(n) tumbuh dalam orde yang setara, yaitu f(n) ∈ Θ(g(n)).'
    },
    {
      id: 'kalkulus-1-18',
      question: 'Manakah jenis diskontinuitas di mana limit f(x) ada, namun tidak sama dengan f(c) (atau f(c) tidak terdefinisi)?',
      options: [
        'Diskontinuitas yang dapat dihapus (Removable discontinuity)',
        'Diskontinuitas loncat (Jump discontinuity)',
        'Diskontinuitas esensial/tak hingga (Essential discontinuity)',
        'Diskontinuitas berosilasi'
      ],
      correctAnswer: 0,
      explanation: 'Removable discontinuity terjadi saat limit ada tetapi terdapat "lubang" pada satu titik yang dapat diisi ulang dengan mendefinisikan f(c) = L.'
    },
    {
      id: 'kalkulus-1-19',
      question: 'Berapakah nilai dari lim_{x -> 4} (√x - 2) / (x - 4)?',
      options: ['0', '1/4', '1/2', '4'],
      correctAnswer: 1,
      explanation: 'Kalikan pembilang dan penyebut dengan sekawan (√x + 2): (x - 4) / ((x - 4)(√x + 2)) = 1 / (√x + 2). Pada x = 4: 1 / (2 + 2) = 1/4.'
    },
    {
      id: 'kalkulus-1-20',
      question: 'Dalam komputasi numerik, jika f(x) kontinu pada [a, b] dan f(a) * f(b) < 0, metode apa yang dijamin konvergen menemukan akar berkat IVT?',
      options: [
        'Metode Bisection (Bagi Dua)',
        'Bubble Sort',
        'Metode Runge-Kutta',
        'Metode Simplex'
      ],
      correctAnswer: 0,
      explanation: 'Metode Bisection secara iteratif membagi dua interval [a, b]. Berdasarkan IVT, perubahan tanda f(a)*f(b) < 0 pada fungsi kontinu menjamin adanya minimal satu akar f(c) = 0 di dalam interval tersebut.'
    }
  ],

  // MODUL 2: TURUNAN & ATURAN DIFERENSIASI (20 Soal)
  kalkulus_turunan: [
    {
      id: 'kalkulus-2-1',
      question: 'Secara matematis, turunan pertama f\'(x) didefinisikan sebagai limit dari:',
      options: [
        'lim_{h -> 0} (f(x + h) - f(x)) / h',
        'lim_{h -> 0} (f(x + h) + f(x)) / h',
        'lim_{x -> 0} f(x) / x',
        'lim_{h -> ∞} f(h) / h'
      ],
      correctAnswer: 0,
      explanation: 'Definisi formal turunan adalah limit beda pembagian kemiringan tali busur saat interval h mendekati nol: f\'(x) = lim_{h -> 0} [f(x+h) - f(x)] / h.'
    },
    {
      id: 'kalkulus-2-2',
      question: 'Berdasarkan aturan pangkat (Power Rule), jika f(x) = x^n (n riil), maka turunan pertamanya f\'(x) adalah:',
      options: ['x^{n-1}', 'n * x^{n-1}', 'n * x^n', 'x^{n+1} / (n+1)'],
      correctAnswer: 1,
      explanation: 'Aturan pangkat diferensiasi menyatakan d/dx [x^n] = n * x^{n-1}.'
    },
    {
      id: 'kalkulus-2-3',
      question: 'Jika f(x) = 5x^4 - 3x^2 + 7x - 9, berapakah f\'(x)?',
      options: [
        '20x^3 - 6x + 7',
        '20x^4 - 6x^2 + 7',
        '5x^3 - 3x + 7',
        '20x^3 - 6x'
      ],
      correctAnswer: 0,
      explanation: 'Turunkan suku per suku: d/dx(5x^4) = 20x^3, d/dx(-3x^2) = -6x, d/dx(7x) = 7, d/dx(-9) = 0. Jadi f\'(x) = 20x^3 - 6x + 7.'
    },
    {
      id: 'kalkulus-2-4',
      question: 'Manakah rumus Aturan Perkalian (Product Rule) untuk turunan dari d/dx [u(x) * v(x)]?',
      options: [
        'u\'(x) * v\'(x)',
        'u\'(x) * v(x) + u(x) * v\'(x)',
        'u\'(x) * v(x) - u(x) * v\'(x)',
        '(u\'(x) * v(x) + u(x) * v\'(x)) / v(x)^2'
      ],
      correctAnswer: 1,
      explanation: 'Aturan perkalian menyatakan bahwa turunan dari hasil kali dua fungsi adalah (u\'v + uv\').'
    },
    {
      id: 'kalkulus-2-5',
      question: 'Manakah rumus Aturan Pembagian (Quotient Rule) untuk turunan dari d/dx [u(x) / v(x)]?',
      options: [
        '(u\'v - uv\') / v^2',
        '(u\'v + uv\') / v^2',
        'u\' / v\'',
        '(uv\' - u\'v) / v'
      ],
      correctAnswer: 0,
      explanation: 'Aturan pembagian adalah d/dx [u/v] = (u\'v - uv\') / v^2.'
    },
    {
      id: 'kalkulus-2-6',
      question: 'Jika y = f(g(x)), bagaimana aturan rantai (Chain Rule) menghitung dy/dx?',
      options: [
        'f\'(g(x))',
        'f\'(x) * g\'(x)',
        'f\'(g(x)) * g\'(x)',
        'f\'(g\'(x))'
      ],
      correctAnswer: 2,
      explanation: 'Aturan rantai untuk fungsi komposisi menyatakan dy/dx = f\'(g(x)) * g\'(x), turunan fungsi luar dievaluasi pada fungsi dalam dikalikan turunan fungsi dalam.'
    },
    {
      id: 'kalkulus-2-7',
      question: 'Berapakah turunan pertama dari fungsi f(x) = e^{3x}?',
      options: ['e^{3x}', '3 e^{3x}', '3x e^{3x-1}', '1/3 e^{3x}'],
      correctAnswer: 1,
      explanation: 'Dengan aturan rantai: d/dx(e^u) = e^u * du/dx. Di sini u = 3x sehingga du/dx = 3, maka f\'(x) = 3 e^{3x}.'
    },
    {
      id: 'kalkulus-2-8',
      question: 'Berapakah turunan pertama dari fungsi logaritma natural f(x) = ln(x) untuk x > 0?',
      options: ['1 / x', '1 / (x ln 10)', 'e^x', 'x'],
      correctAnswer: 0,
      explanation: 'Turunan standar dari logaritma natural ln(x) adalah d/dx [ln x] = 1/x.'
    },
    {
      id: 'kalkulus-2-9',
      question: 'Berapakah turunan dari f(x) = sin(x) dan g(x) = cos(x)?',
      options: [
        'f\'(x) = cos(x) dan g\'(x) = -sin(x)',
        'f\'(x) = -cos(x) dan g\'(x) = sin(x)',
        'f\'(x) = cos(x) dan g\'(x) = sin(x)',
        'f\'(x) = -sin(x) dan g\'(x) = -cos(x)'
      ],
      correctAnswer: 0,
      explanation: 'Diferensiasi fungsi trigonometri dasar: d/dx [sin x] = cos x, dan d/dx [cos x] = -sin x.'
    },
    {
      id: 'kalkulus-2-10',
      question: 'Berapakah turunan dari f(x) = (2x + 1)^5 menggunakan aturan rantai?',
      options: [
        '5(2x + 1)^4',
        '10(2x + 1)^4',
        '2(2x + 1)^4',
        '10(2x + 1)^5'
      ],
      correctAnswer: 1,
      explanation: 'Misalkan u = 2x + 1, du/dx = 2. Maka d/dx [u^5] = 5u^4 * du/dx = 5(2x + 1)^4 * 2 = 10(2x + 1)^4.'
    },
    {
      id: 'kalkulus-2-11',
      question: 'Secara geometris, f\'(a) merepresentasikan:',
      options: [
        'Luas daerah di bawah kurva f(x) dari 0 ke a',
        'Gradien/kemiringan garis singgung kurva f(x) tepat pada titik (a, f(a))',
        'Jarak dari titik (a, f(a)) ke titik asal (0,0)',
        'Kelengkungan kurva pada titik a'
      ],
      correctAnswer: 1,
      explanation: 'Turunan pertama f\'(a) adalah nilai kemiringan (gradien m) dari garis singgung kurva pada titik x = a.'
    },
    {
      id: 'kalkulus-2-12',
      question: 'Jika f(x) = ln(x^2 + 1), berapakah f\'(x)?',
      options: [
        '1 / (x^2 + 1)',
        '2x / (x^2 + 1)',
        '2x * (x^2 + 1)',
        '2 / (x^2 + 1)'
      ],
      correctAnswer: 1,
      explanation: 'Dengan aturan rantai: d/dx [ln u] = (1/u) * u\'. Di sini u = x^2 + 1 dan u\' = 2x, sehingga f\'(x) = 2x / (x^2 + 1).'
    },
    {
      id: 'kalkulus-2-13',
      question: 'Jika posisi suatu objek terhadap waktu dinyatakan oleh s(t) = t^3 - 6t^2 + 9t, maka kecepatannya v(t) = s\'(t) bernilai 0 pada saat t = ...',
      options: ['t = 1 dan t = 3', 't = 0 dan t = 2', 't = 2 dan t = 4', 't = 3 saja'],
      correctAnswer: 0,
      explanation: 'v(t) = s\'(t) = 3t^2 - 12t + 9. Faktorkan: 3(t^2 - 4t + 3) = 3(t - 1)(t - 3) = 0, sehingga t = 1 atau t = 3.'
    },
    {
      id: 'kalkulus-2-14',
      question: 'Jika suatu fungsi f terdiferensialkan (memiliki turunan) pada titik x = c, apakah f pasti kontinu pada titik tersebut?',
      options: [
        'Ya, diferensiabilitas selalu mengimplikasikan kontinuitas',
        'Tidak, kontinuitas dan diferensiabilitas tidak saling berhubungan',
        'Hanya jika turunan f\'(c) bernilai 0',
        'Hanya jika f(x) adalah polinomial'
      ],
      correctAnswer: 0,
      explanation: 'Teorema dasar diferensiasi: "Jika f dapat diturunkan di c, maka f pasti kontinu di c". Namun kebalikannya belum tentu benar (contoh f(x) = |x| kontinu di 0 namun tidak punya turunan di 0).'
    },
    {
      id: 'kalkulus-2-15',
      question: 'Mengapa fungsi f(x) = |x| tidak memiliki turunan pada x = 0?',
      options: [
        'Karena f(0) tidak terdefinisi',
        'Karena limit kemiringan dari kiri (-1) tidak sama dengan limit kemiringan dari kanan (+1)',
        'Karena nilainya selalu positif',
        'Karena f(x) diskontinu pada x = 0'
      ],
      correctAnswer: 1,
      explanation: 'Pada x = 0 terdapat sudut tajam (corner). Limit kiri diferensial bernilai -1 sedangkan limit kanan bernilai +1, sehingga limit f\'(0) tidak ada.'
    },
    {
      id: 'kalkulus-2-16',
      question: 'Berapakah turunan kedua f\'\'(x) dari f(x) = x^4 - 2x^3 + x?',
      options: [
        '12x^2 - 12x',
        '4x^3 - 6x^2 + 1',
        '12x^2 - 6x',
        '24x - 12'
      ],
      correctAnswer: 0,
      explanation: 'f\'(x) = 4x^3 - 6x^2 + 1. Turunkan sekali lagi: f\'\'(x) = 12x^2 - 12x.'
    },
    {
      id: 'kalkulus-2-17',
      question: 'Berapakah turunan dari f(x) = x * ln(x)?',
      options: ['1', 'ln(x) + 1', 'ln(x)', '1 / x'],
      correctAnswer: 1,
      explanation: 'Aturan perkalian: (x)\' * ln(x) + x * (ln x)\' = 1 * ln(x) + x * (1/x) = ln(x) + 1.'
    },
    {
      id: 'kalkulus-2-18',
      question: 'Dalam backpropagation jaringan saraf tiruan (neural network), aturan kalkulus apa yang menjadi tulang punggung penghitungan gradien bobot layer demi layer?',
      options: [
        'Aturan Rantai (Chain Rule)',
        'Teorema Sisa Polinomial',
        'Aturan Cramer',
        'Uji Integral'
      ],
      correctAnswer: 0,
      explanation: 'Backpropagation adalah penerapan berantai dari Chain Rule kalkulus multivariat untuk menghitung turunan parsial fungsi loss terhadap setiap bobot parameter pada tiap lapisan jaringan.'
    },
    {
      id: 'kalkulus-2-19',
      question: 'Berapakah turunan dari f(x) = 2^x (eksponensial basis umum a)?',
      options: ['x * 2^{x-1}', '2^x * ln(2)', '2^x / ln(2)', '2^x'],
      correctAnswer: 1,
      explanation: 'Rumus umum d/dx [a^x] = a^x * ln(a). Untuk basis 2, f\'(x) = 2^x * ln(2).'
    },
    {
      id: 'kalkulus-2-20',
      question: 'Jika persamaan garis singgung kurva y = x^2 pada titik (2, 4) dicari, berapakah gradien garis singgung m tersebut?',
      options: ['2', '4', '8', '16'],
      correctAnswer: 1,
      explanation: 'y\' = 2x. Pada titik x = 2, gradien m = y\'(2) = 2(2) = 4.'
    }
  ],

  // MODUL 3: ATURAN L'HÔPITAL & OPTIMASI EKSTREMUM (20 Soal)
  kalkulus_lhopital_optimasi: [
    {
      id: 'kalkulus-3-1',
      question: 'Kapan Teorema Aturan L\'Hôpital dapat diaplikasikan langsung pada evaluasi lim_{x -> c} f(x)/g(x)?',
      options: [
        'Kapan saja untuk semua pecahan aljabar',
        'Hanya saat substitusi langsung menghasilkan bentuk tak tentu 0/0 atau ±∞/±∞',
        'Hanya jika f(x) dan g(x) bernilai konstan',
        'Hanya jika f\'(x) = g\'(x)'
      ],
      correctAnswer: 1,
      explanation: 'Aturan L\'Hôpital mensyaratkan bentuk tak tentu awal berupa 0/0 atau ±∞/±∞ dan f serta g terdiferensialkan di sekitar c.'
    },
    {
      id: 'kalkulus-3-2',
      question: 'Menurut Aturan L\'Hôpital, jika lim f(x)/g(x) bertipe 0/0, maka nilai limit tersebut sama dengan:',
      options: [
        'lim [f\'(x) / g\'(x)]',
        'lim [(f\'(x)*g(x) - f(x)*g\'(x)) / g(x)^2]',
        'lim [f(x) * g(x)]',
        'f(0) / g(0)'
      ],
      correctAnswer: 0,
      explanation: 'Aturan L\'Hôpital menyatakan lim_{x -> c} f(x)/g(x) = lim_{x -> c} f\'(x)/g\'(x), yaitu turunan pembilang dibagi turunan penyebut secara terpisah (bukan quotient rule).'
    },
    {
      id: 'kalkulus-3-3',
      question: 'Berapakah nilai lim_{x -> 0} (e^x - 1) / x menggunakan aturan L\'Hôpital?',
      options: ['0', '1', 'e', '∞'],
      correctAnswer: 1,
      explanation: 'Bentuk 0/0. Turunkan pembilang (e^x) dan penyebut (1): lim_{x -> 0} (e^x / 1) = e^0 / 1 = 1.'
    },
    {
      id: 'kalkulus-3-4',
      question: 'Berapakah nilai lim_{n -> ∞} (ln n) / n dalam perbandingan kompleksitas algoritma?',
      options: ['∞', '1', '0', 'e'],
      correctAnswer: 2,
      explanation: 'Bentuk ∞/∞. L\'Hôpital: turunan ln(n) adalah 1/n, turunan n adalah 1. lim_{n -> ∞} (1/n) / 1 = 0. Ini membuktikan bahwa algoritma O(log n) jauh lebih efisien daripada O(n).'
    },
    {
      id: 'kalkulus-3-5',
      question: 'Titik kritis (critical point) dari fungsi f(x) terjadi pada x = c jika:',
      options: [
        'f(c) = 0',
        'f\'(c) = 0 atau f\'(c) tidak terdefinisi',
        'f\'\'(c) > 0',
        'f(c) menuju tak hingga'
      ],
      correctAnswer: 1,
      explanation: 'Titik kritis adalah titik dalam domain fungsi di mana turunan pertamanya nol (f\'(c) = 0) atau turunan pertamanya tidak ada/tidak terdefinisi.'
    },
    {
      id: 'kalkulus-3-6',
      question: 'Jika c adalah titik kritis dengan f\'(c) = 0, dan f\'\'(c) > 0, maka menurut Uji Turunan Kedua, pada x = c terjadi:',
      options: [
        'Maksimum lokal',
        'Minimum lokal (kurva cekung ke atas / concave up)',
        'Titik belok (inflection point)',
        'Asimptot tegak'
      ],
      correctAnswer: 1,
      explanation: 'Uji turunan kedua: jika f\'(c) = 0 dan f\'\'(c) > 0, kurva melengkung ke atas (seperti mangkuk tersenyum), sehingga x = c adalah titik minimum lokal.'
    },
    {
      id: 'kalkulus-3-7',
      question: 'Jika f\'(c) = 0 dan f\'\'(c) < 0, maka titik x = c adalah:',
      options: [
        'Maksimum lokal',
        'Minimum lokal',
        'Titik belok',
        'Diskontinu'
      ],
      correctAnswer: 0,
      explanation: 'Jika f\'\'(c) < 0, kurva cekung ke bawah (concave down), sehingga puncak x = c adalah titik maksimum lokal.'
    },
    {
      id: 'kalkulus-3-8',
      question: 'Berapakah nilai minimum dari fungsi kuadrat biaya f(x) = x^2 - 6x + 13?',
      options: ['x = 3 dengan nilai minimum 4', 'x = 6 dengan nilai minimum 13', 'x = 3 dengan nilai minimum 0', 'x = -3 dengan nilai minimum 4'],
      correctAnswer: 0,
      explanation: 'f\'(x) = 2x - 6 = 0 => x = 3. f\'\'(x) = 2 > 0 (minimum). Nilai minimum f(3) = 3^2 - 6(3) + 13 = 9 - 18 + 13 = 4.'
    },
    {
      id: 'kalkulus-3-9',
      question: 'Bagaimana cara menyelesaikan limit bentuk tak tentu 0 * ∞ seperti lim_{x -> 0^+} x * ln(x)?',
      options: [
        'Langsung dikalikan menjadi 0',
        'Ubah bentuk perkalian menjadi pecahan f(x) / (1/g(x)) sehingga bertipe 0/0 atau ∞/∞, lalu gunakan L\'Hôpital',
        'Bentuk tersebut tidak dapat diselesaikan',
        'Nilainya selalu tak hingga'
      ],
      correctAnswer: 1,
      explanation: 'Tulis x * ln(x) sebagai ln(x) / (1/x), yang bertipe -∞/∞. Turunan pembilang 1/x, turunan penyebut -1/x^2. Maka lim (1/x)/(-1/x^2) = lim (-x) = 0.'
    },
    {
      id: 'kalkulus-3-10',
      question: 'Berapakah nilai lim_{x -> 0} (sin x - x) / x^3?',
      options: ['0', '-1/6', '1/6', 'Tidak ada'],
      correctAnswer: 1,
      explanation: 'Bentuk 0/0. L\'Hopital ke-1: (cos x - 1) / 3x^2 (masih 0/0). L\'Hopital ke-2: (-sin x) / 6x = (-1/6) * (sin x / x). Saat x -> 0, hasilnya -1/6.'
    },
    {
      id: 'kalkulus-3-11',
      question: 'Sebuah persegi panjang memiliki keliling tetap 40 cm. Berapakah luas maksimum yang dapat dibentuk?',
      options: ['50 cm^2', '100 cm^2', '400 cm^2', '75 cm^2'],
      correctAnswer: 1,
      explanation: 'Keliling 2(p + l) = 40 => l = 20 - p. Luas L(p) = p(20 - p) = 20p - p^2. L\'(p) = 20 - 2p = 0 => p = 10, l = 10 (bujur sangkar). Luas = 10 * 10 = 100 cm^2.'
    },
    {
      id: 'kalkulus-3-12',
      question: 'Jika f\'(x) berganti tanda dari positif (+) ke negatif (-) saat melewati titik kritis c, maka titik c adalah:',
      options: ['Maksimum lokal', 'Minimum lokal', 'Titik belok horizontal', 'Asimptot datar'],
      correctAnswer: 0,
      explanation: 'Berdasarkan Uji Turunan Pertama: jika kurva naik sebelum c dan turun setelah c, maka c adalah puncak (maksimum lokal).'
    },
    {
      id: 'kalkulus-3-13',
      question: 'Apa yang dimaksud dengan titik belok (inflection point) kurva?',
      options: [
        'Titik di mana f(x) = 0',
        'Titik di mana kecekungan kurva (konkavitas) berubah tanda (dari cekung ke atas ke cekung ke bawah atau sebaliknya)',
        'Titik di mana garis singgung tegak lurus sumbu-X',
        'Titik ujung interval'
      ],
      correctAnswer: 1,
      explanation: 'Titik belok adalah titik di mana kurva bertransisi antar konkavitas, ditandai dengan perubahan tanda f\'\'(x) (biasanya f\'\'(c) = 0).'
    },
    {
      id: 'kalkulus-3-14',
      question: 'Berapakah nilai lim_{n -> ∞} n^2 / 2^n?',
      options: ['∞', '1', '0', '1/2'],
      correctAnswer: 2,
      explanation: 'Bentuk ∞/∞. L\'Hopital dua kali: lim 2n / (2^n ln 2) = lim 2 / (2^n (ln 2)^2) = 0. Fungsi eksponensial selalu mendominasi fungsi polinomial.'
    },
    {
      id: 'kalkulus-3-15',
      question: 'Dalam optimasi fungsi multivariat (Machine Learning), titik di mana semua turunan parsial bernilai nol namun bukan merupakan minimum maupun maksimum disebut:',
      options: ['Titik Sadel (Saddle Point)', 'Titik Global Minimum', 'Titik Puncak Global', 'Titik Singulir'],
      correctAnswer: 0,
      explanation: 'Titik sadel (saddle point) adalah titik stasioner di mana kurva melengkung ke atas pada satu arah dan melengkung ke bawah pada arah lainnya (seperti pelana kuda).'
    },
    {
      id: 'kalkulus-3-16',
      question: 'Jika Uji Turunan Kedua menghasilkan f\'\'(c) = 0, apa kesimpulannya?',
      options: [
        'Pasti titik belok',
        'Pasti minimum',
        'Uji tidak memberikan informasi konklusif (inconclusive), harus gunakan uji turunan pertama',
        'Pasti diskontinu'
      ],
      correctAnswer: 2,
      explanation: 'Jika f\'\'(c) = 0, uji turunan kedua gagal (inconclusive). Contoh f(x)=x^4 memiliki f\'\'(0)=0 dan merupakan minimum, sedangkan f(x)=x^3 memiliki f\'\'(0)=0 dan merupakan titik belok.'
    },
    {
      id: 'kalkulus-3-17',
      question: 'Berapakah nilai lim_{x -> ∞} (1 + 2/x)^x?',
      options: ['1', 'e', 'e^2', '2'],
      correctAnswer: 2,
      explanation: 'Gunakan bentuk y = (1 + 2/x)^x => ln y = x ln(1 + 2/x). Dengan L\'Hopital, lim ln y = 2, sehingga y = e^2.'
    },
    {
      id: 'kalkulus-3-18',
      question: 'Teorema Nilai Ekstrem (Extreme Value Theorem) menjamin adanya nilai maksimum dan minimum mutlak jika:',
      options: [
        'Fungsi f kontinu pada interval tertutup [a, b]',
        'Fungsi f terdiferensialkan pada interval terbuka (a, b)',
        'Fungsi f bernilai positif di seluruh domain',
        'Fungsi f adalah fungsi monoton naik'
      ],
      correctAnswer: 0,
      explanation: 'Extreme Value Theorem menyatakan bahwa jika f kontinu pada interval tertutup dan terbatas [a, b], maka f pasti mencapai nilai maksimum global dan minimum global setidaknya satu kali.'
    },
    {
      id: 'kalkulus-3-19',
      question: 'Berapakah turunan dari f(x) = x^x untuk x > 0 menggunakan diferensiasi logaritmik?',
      options: ['x * x^{x-1}', 'x^x * (ln x + 1)', 'x^x * ln x', 'x^x'],
      correctAnswer: 1,
      explanation: 'Misalkan y = x^x => ln y = x ln x. Diferensiasi implisit: y\'/y = 1*ln x + x*(1/x) = ln x + 1. Maka y\' = y(ln x + 1) = x^x (ln x + 1).'
    },
    {
      id: 'kalkulus-3-20',
      question: 'Berapakah nilai limit lim_{x -> 0} (tan x - x) / (x - sin x)?',
      options: ['1', '2', '-2', '0'],
      correctAnswer: 1,
      explanation: 'Gunakan ekspansi Taylor atau L\'Hopital bertingkat: tan x ≈ x + x^3/3, sin x ≈ x - x^3/6. Pembilang ≈ x^3/3, penyebut ≈ x^3/6. Rasionya (1/3)/(1/6) = 2.'
    }
  ],

  // MODUL 4: INTEGRAL TAK TENTU, INTEGRAL TENTU & TDK (20 Soal)
  kalkulus_integral: [
    {
      id: 'kalkulus-4-1',
      question: 'Apa arti dari integral tak tentu ∫ f(x) dx?',
      options: [
        'Luas daerah di bawah kurva f(x)',
        'Keluarga semua fungsi anti-turunan F(x) + C sedemikian sehingga F\'(x) = f(x)',
        'Kemiringan garis singgung fungsi f(x)',
        'Nilai rata-rata fungsi f(x)'
      ],
      correctAnswer: 1,
      explanation: 'Integral tak tentu menghasilkan himpunan anti-turunan umum F(x) + C di mana C adalah konstanta integrasi sembarang.'
    },
    {
      id: 'kalkulus-4-2',
      question: 'Berdasarkan aturan pangkat integral ∫ x^n dx (untuk n != -1), hasilnya adalah:',
      options: [
        'n * x^{n-1} + C',
        '(x^{n+1} / (n+1)) + C',
        'x^n / n + C',
        'x^{n+1} + C'
      ],
      correctAnswer: 1,
      explanation: 'Aturan pangkat integrasi membalik aturan turunan: ∫ x^n dx = [x^{n+1} / (n + 1)] + C untuk n != -1.'
    },
    {
      id: 'kalkulus-4-3',
      question: 'Berapakah hasil dari ∫ (1 / x) dx untuk x != 0?',
      options: ['-1 / x^2 + C', 'ln |x| + C', 'e^x + C', '1 + C'],
      correctAnswer: 1,
      explanation: 'Kasus khusus n = -1 menghasilkan logaritma natural: ∫ (1/x) dx = ln |x| + C.'
    },
    {
      id: 'kalkulus-4-4',
      question: 'Berapakah nilai dari integral tentu ∫_0^3 (2x + 1) dx?',
      options: ['9', '12', '15', '6'],
      correctAnswer: 1,
      explanation: 'Anti-turunan F(x) = x^2 + x. Evaluasi dari 0 ke 3: F(3) - F(0) = (3^2 + 3) - 0 = 9 + 3 = 12.'
    },
    {
      id: 'kalkulus-4-5',
      question: 'Teorema Dasar Kalkulus Bagian 1 (FTC 1) menyatakan bahwa jika g(x) = ∫_a^x f(t) dt, maka g\'(x) adalah:',
      options: ['f(x)', 'f(a)', 'F(x) - F(a)', 'f\'(x)'],
      correctAnswer: 0,
      explanation: 'FTC 1 menghubungkan turunan dan integral sebagai operasi invers: d/dx [∫_a^x f(t) dt] = f(x).'
    },
    {
      id: 'kalkulus-4-6',
      question: 'Berapakah hasil dari ∫ 2x * e^{x^2} dx menggunakan teknik integrasi substitusi?',
      options: ['e^{x^2} + C', '2 e^{x^2} + C', 'x^2 e^{x^2} + C', 'e^x + C'],
      correctAnswer: 0,
      explanation: 'Misalkan u = x^2, du = 2x dx. Maka integral menjadi ∫ e^u du = e^u + C = e^{x^2} + C.'
    },
    {
      id: 'kalkulus-4-7',
      question: 'Rumus teknik Integrasi Parsial (Integration by Parts) diturunkan dari product rule turunan, yaitu:',
      options: [
        '∫ u dv = uv - ∫ v du',
        '∫ u dv = uv + ∫ v du',
        '∫ u dv = u\'v + uv\'',
        '∫ u dv = (uv) / 2'
      ],
      correctAnswer: 0,
      explanation: 'Rumus integrasi parsial standar adalah ∫ u dv = uv - ∫ v du.'
    },
    {
      id: 'kalkulus-4-8',
      question: 'Berapakah hasil dari ∫ x * e^x dx menggunakan integrasi parsial?',
      options: [
        'x e^x - e^x + C = (x - 1)e^x + C',
        'x e^x + e^x + C',
        'x^2 e^x / 2 + C',
        'e^x + C'
      ],
      correctAnswer: 0,
      explanation: 'Pilih u = x (du = dx) dan dv = e^x dx (v = e^x). ∫ u dv = uv - ∫ v du = x e^x - ∫ e^x dx = x e^x - e^x + C.'
    },
    {
      id: 'kalkulus-4-9',
      question: 'Berapakah hasil dari ∫ ln(x) dx?',
      options: ['1/x + C', 'x ln(x) - x + C', 'x ln(x) + x + C', '(ln x)^2 / 2 + C'],
      correctAnswer: 1,
      explanation: 'Parsial dengan u = ln x (du = 1/x dx) dan dv = dx (v = x): ∫ ln x dx = x ln x - ∫ x * (1/x) dx = x ln x - x + C.'
    },
    {
      id: 'kalkulus-4-10',
      question: 'Bagaimana metode integral digunakan untuk membuktikan batas asimptotik penjumlahan deret harmonik H_n = ∑_{i=1}^n (1/i)?',
      options: [
        'Karena f(x) = 1/x monoton turun, ∑_{i=1}^n (1/i) dibatasi oleh ∫_1^n (1/x) dx = ln(n), sehingga H_n ∈ Θ(log n)',
        'Deret harmonik selalu bernilai konstan',
        'Integral 1/x menghasilkan n^2',
        'Tidak ada hubungan antara deret dan integral'
      ],
      correctAnswer: 0,
      explanation: 'Uji integral membandingkan luas persegi panjang deret dengan luas kurva kontinu ∫_1^n (1/x) dx = ln n. Ini membuktikan secara matematis bahwa H_n = ln n + O(1) ∈ Θ(log n).'
    },
    {
      id: 'kalkulus-4-11',
      question: 'Berapakah luas daerah di bawah kurva y = x^2 di atas sumbu-X dari x = 0 sampai x = 2?',
      options: ['4/3', '8/3', '4', '2'],
      correctAnswer: 1,
      explanation: 'Luas = ∫_0^2 x^2 dx = [x^3 / 3]_0^2 = (2^3 / 3) - 0 = 8/3.'
    },
    {
      id: 'kalkulus-4-12',
      question: 'Berapakah nilai dari ∫_0^π sin(x) dx?',
      options: ['0', '1', '2', '-2'],
      correctAnswer: 2,
      explanation: 'Anti-turunan dari sin(x) adalah -cos(x). Evaluasi: -cos(π) - (-cos(0)) = -(-1) - (-1) = 1 + 1 = 2.'
    },
    {
      id: 'kalkulus-4-13',
      question: 'Jika f(x) adalah fungsi ganjil (artinya f(-x) = -f(x)), berapakah nilai dari ∫_{-a}^a f(x) dx?',
      options: ['0', '2 * ∫_0^a f(x) dx', 'a^2', 'f(a) - f(-a)'],
      correctAnswer: 0,
      explanation: 'Pada fungsi ganjil, luas di sebelah kiri sumbu-Y (negatif) saling meniadakan dengan luas di sebelah kanan sumbu-Y (positif), sehingga hasil integrasi simetrisnya selalu 0.'
    },
    {
      id: 'kalkulus-4-14',
      question: 'Berapakah nilai dari integral tak wajar (improper integral) ∫_1^∞ (1 / x^2) dx?',
      options: ['1', '∞ (Divergen)', '0', '1/2'],
      correctAnswer: 0,
      explanation: 'lim_{b -> ∞} [-1/x]_1^b = lim_{b -> ∞} (-1/b - (-1/1)) = 0 + 1 = 1 (konvergen ke 1).'
    },
    {
      id: 'kalkulus-4-15',
      question: 'Integral tak wajar ∫_1^∞ (1 / x^p) dx konvergen jika dan hanya jika:',
      options: ['p > 1', 'p < 1', 'p >= 1', 'p = 0'],
      correctAnswer: 0,
      explanation: 'Uji p-integral menyatakan bahwa ∫_1^∞ 1/x^p dx konvergen jika p > 1 dan divergen jika p <= 1 (seperti kasus p = 1 deret harmonik).'
    },
    {
      id: 'kalkulus-4-16',
      question: 'Berapakah nilai rata-rata (mean value) dari fungsi f(x) = 3x^2 pada interval [0, 2]?',
      options: ['4', '8', '2', '12'],
      correctAnswer: 0,
      explanation: 'f_avg = (1 / (b - a)) * ∫_a^b f(x) dx = (1/2) * ∫_0^2 3x^2 dx = (1/2) * [x^3]_0^2 = (1/2) * 8 = 4.'
    },
    {
      id: 'kalkulus-4-17',
      question: 'Berapakah turunan d/dx [∫_0^{x^2} cos(t) dt] menggunakan FTC 1 dan aturan rantai?',
      options: ['cos(x^2)', '2x * cos(x^2)', '-2x * sin(x^2)', 'cos(x)'],
      correctAnswer: 1,
      explanation: 'Dengan Leibniz Rule / Chain Rule: d/dx [∫_a^{u(x)} f(t) dt] = f(u(x)) * u\'(x) = cos(x^2) * d/dx(x^2) = 2x cos(x^2).'
    },
    {
      id: 'kalkulus-4-18',
      question: 'Berapakah hasil dari ∫ (2x + 3) / (x^2 + 3x + 5) dx?',
      options: [
        'ln |x^2 + 3x + 5| + C',
        '(x^2 + 3x + 5)^2 + C',
        '1 / (x^2 + 3x + 5) + C',
        '2 ln |x| + C'
      ],
      correctAnswer: 0,
      explanation: 'Misalkan u = x^2 + 3x + 5, du = (2x + 3) dx. Integral menjadi ∫ (1/u) du = ln |u| + C = ln |x^2 + 3x + 5| + C.'
    },
    {
      id: 'kalkulus-4-19',
      question: 'Dalam pemrosesan sinyal dan grafika komputer, konvolusi kontinu dua fungsi (f * g)(t) didefinisikan sebagai:',
      options: [
        '∫_{-∞}^∞ f(τ) g(t - τ) dτ',
        '∫_{-∞}^∞ f(t) g(t) dt',
        'f(t) * g(t)',
        'd/dt [f(t) g(t)]'
      ],
      correctAnswer: 0,
      explanation: 'Operasi konvolusi kontinu didefinisikan sebagai integral geser: (f * g)(t) = ∫_{-∞}^∞ f(τ) g(t - τ) dτ.'
    },
    {
      id: 'kalkulus-4-20',
      question: 'Berapakah hasil integrasi ∫ e^{2x} dx?',
      options: ['(1/2) e^{2x} + C', '2 e^{2x} + C', 'e^{2x} + C', 'e^{x^2} + C'],
      correctAnswer: 0,
      explanation: 'Substitusi u = 2x, dx = du/2: ∫ e^{2x} dx = (1/2) e^{2x} + C.'
    }
  ],

  // MODUL 5: DERET TAK HINGGA, DERET TAYLOR & GRADIENT DESCENT (20 Soal)
  kalkulus_deret_multivariat: [
    {
      id: 'kalkulus-5-1',
      question: 'Berapakah jumlah dari deret geometri tak hingga a + ar + ar^2 + ... jika rasio |r| < 1?',
      options: ['a / (1 - r)', 'a / (r - 1)', 'a * r / (1 - r)', '∞'],
      correctAnswer: 0,
      explanation: 'Rumus jumlah deret geometri tak hingga konvergen adalah S_∞ = a / (1 - r) jika |r| < 1.'
    },
    {
      id: 'kalkulus-5-2',
      question: 'Berapakah jumlah dari deret 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...?',
      options: ['2', '1', '4', '∞'],
      correctAnswer: 0,
      explanation: 'Suku pertama a = 1, rasio r = 1/2. Jumlah S = 1 / (1 - 1/2) = 1 / (1/2) = 2.'
    },
    {
      id: 'kalkulus-5-3',
      question: 'Bentuk umum ekspansi Deret Taylor dari f(x) di sekitar titik x = a adalah:',
      options: [
        '∑_{n=0}^∞ [f^{(n)}(a) / n!] * (x - a)^n',
        '∑_{n=0}^∞ f^{(n)}(a) * (x - a)^n',
        '∑_{n=0}^∞ [f(a) / n!] * x^n',
        'f(a) + f\'(a)(x - a)'
      ],
      correctAnswer: 0,
      explanation: 'Deret Taylor merepresentasikan fungsi kontinu mulus sebagai deret polinomial tak hingga: f(x) = ∑ [f^{(n)}(a) / n!] (x - a)^n.'
    },
    {
      id: 'kalkulus-5-4',
      question: 'Deret Maclaurin adalah kasus khusus dari Deret Taylor dengan titik ekspansi a sama dengan:',
      options: ['0', '1', 'e', 'π'],
      correctAnswer: 0,
      explanation: 'Deret Maclaurin adalah Deret Taylor yang diekspansikan berpusat pada a = 0.'
    },
    {
      id: 'kalkulus-5-5',
      question: 'Manakah ekspansi deret Maclaurin dari fungsi eksponensial e^x?',
      options: [
        '1 + x + x^2/2! + x^3/3! + ... = ∑_{n=0}^∞ x^n / n!',
        '1 - x + x^2 - x^3 + ...',
        'x - x^3/3! + x^5/5! - ...',
        '1 - x^2/2! + x^4/4! - ...'
      ],
      correctAnswer: 0,
      explanation: 'Karena semua turunan dari e^x pada x = 0 bernilai 1, deret Maclaurin-nya adalah e^x = ∑_{n=0}^∞ x^n / n!.'
    },
    {
      id: 'kalkulus-5-6',
      question: 'Aproksimasi linier (Taylor orde 1) dari f(x) di sekitar x = a adalah rumus yang sama dengan:',
      options: [
        'Persamaan garis singgung f(x) pada x = a: L(x) = f(a) + f\'(a)(x - a)',
        'Persamaan garis normal kurva',
        'Integral Riemann',
        'Deret Fourier'
      ],
      correctAnswer: 0,
      explanation: 'Polinomial Taylor orde 1 memotong suku pangkat 2 ke atas, menyisakan L(x) = f(a) + f\'(a)(x - a), yang persis merupakan persamaan garis singgung.'
    },
    {
      id: 'kalkulus-5-7',
      question: 'Untuk fungsi dua variabel f(x, y) = 3x^2 y + 2y^3 - 5x, berapakah turunan parsial ∂f/∂x?',
      options: ['6xy - 5', '3x^2 + 6y^2', '6x y^2 - 5', '6x - 5'],
      correctAnswer: 0,
      explanation: 'Saat mencari ∂f/∂x, variabel y dianggap sebagai konstanta: d/dx(3x^2 y) = 6xy, d/dx(2y^3) = 0, d/dx(-5x) = -5. Maka ∂f/∂x = 6xy - 5.'
    },
    {
      id: 'kalkulus-5-8',
      question: 'Untuk fungsi yang sama f(x, y) = 3x^2 y + 2y^3 - 5x, berapakah turunan parsial ∂f/∂y?',
      options: ['3x^2 + 6y^2', '6xy', '6y^2 - 5', '3x^2 + 2y^2'],
      correctAnswer: 0,
      explanation: 'Saat mencari ∂f/∂y, variabel x dianggap sebagai konstanta: d/dy(3x^2 y) = 3x^2, d/dy(2y^3) = 6y^2, d/dy(-5x) = 0. Maka ∂f/∂y = 3x^2 + 6y^2.'
    },
    {
      id: 'kalkulus-5-9',
      question: 'Vektor gradien ∇f (nabla f) dari fungsi skalar f(x, y) didefinisikan sebagai vektor:',
      options: [
        '[∂f/∂x, ∂f/∂y]^T',
        '[∂f/∂y, ∂f/∂x]^T',
        '∂^2 f / ∂x∂y',
        '√((∂f/∂x)^2 + (∂f/∂y)^2)'
      ],
      correctAnswer: 0,
      explanation: 'Gradien ∇f adalah vektor kolom/baris yang berisi seluruh turunan parsial pertama fungsi terhadap tiap variabel inputnya.'
    },
    {
      id: 'kalkulus-5-10',
      question: 'Secara geometris dan fisis, ke arah manakah vektor gradien ∇f selalu menunjuk?',
      options: [
        'Arah laju penurunan tertajam (steepest descent)',
        'Arah laju peningkatan tertajam (steepest ascent)',
        'Arah yang sejajar dengan kurva ketinggian (garis kontur)',
        'Arah acak'
      ],
      correctAnswer: 1,
      explanation: 'Sifat fundamental kalkulus vektor: vektor gradien ∇f selalu menunjuk ke arah di mana nilai fungsi meningkat paling curam (steepest ascent).'
    },
    {
      id: 'kalkulus-5-11',
      question: 'Mengapa algoritma optimasi Gradient Descent menggunakan tanda minus (-), yaitu w_{t+1} = w_t - η ∇f(w_t)?',
      options: [
        'Karena kita ingin meminimalkan nilai fungsi biaya (loss) dengan bergerak ke arah berlawanan dari kenaikan tertajam',
        'Hanya sebuah konvensi agar nilainya positif',
        'Agar nilai gradien tidak melebihi 1',
        'Karena turunan fungsi kuadrat selalu negatif'
      ],
      correctAnswer: 0,
      explanation: 'Karena ∇f menunjuk ke arah kenaikan terbesar, bergerak ke arah sebaliknya (-∇f) akan menurunkan nilai loss secepat mungkin menuju nilai minimum lokal/global.'
    },
    {
      id: 'kalkulus-5-12',
      question: 'Dalam rumus pembaruan parameter Gradient Descent, parameter η (eta) disebut:',
      options: [
        'Learning rate (laju pembelajaran / step size)',
        'Momentum koefisien',
        'Regularisasi bobot',
        'Faktor diskon'
      ],
      correctAnswer: 0,
      explanation: 'η adalah learning rate, faktor pengali yang mengatur seberapa besar langkah pergeseran parameter ke arah anti-gradien pada tiap iterasi.'
    },
    {
      id: 'kalkulus-5-13',
      question: 'Apa dampak yang terjadi jika nilai learning rate η dipilih terlalu besar pada algoritma Gradient Descent?',
      options: [
        'Konvergensi berjalan sangat lambat tapi stabil',
        'Algoritma dapat berosilasi liar, melompati titik minimum, dan bahkan divergen (loss meledak)',
        'Gradien menjadi bernilai nol seketika',
        'Fungsi berubah menjadi linier'
      ],
      correctAnswer: 1,
      explanation: 'Learning rate yang terlalu tinggi (overshooting) membuat langkah terlalu jauh, melompati cekungan minimum, dan menyebabkan nilai loss melonjak tak terkendali.'
    },
    {
      id: 'kalkulus-5-14',
      question: 'Berapakah vektor gradien ∇f dari f(x, y) = x^2 + 4y^2 pada titik (2, 1)?',
      options: ['[4, 8]^T', '[2, 4]^T', '[4, 4]^T', '[8, 2]^T'],
      correctAnswer: 0,
      explanation: '∂f/∂x = 2x, ∂f/∂y = 8y. Pada titik (2, 1): ∂f/∂x = 2(2) = 4, ∂f/∂y = 8(1) = 8. Jadi ∇f = [4, 8]^T.'
    },
    {
      id: 'kalkulus-5-15',
      question: 'Matriks yang memuat seluruh turunan parsial kedua ∂^2 f / ∂x_i ∂x_j dari fungsi multivariat disebut:',
      options: ['Matriks Jacobian', 'Matriks Hessian', 'Matriks Kovariansi', 'Matriks Laplasian'],
      correctAnswer: 1,
      explanation: 'Matriks Hessian H memuat seluruh turunan parsial kedua, digunakan untuk menguji kecekungan multivariat dan konvergensi metode optimasi Newton-Raphson.'
    },
    {
      id: 'kalkulus-5-16',
      question: 'Uji Rasio (Ratio Test) menyatakan bahwa deret ∑ a_n konvergen mutlak jika L = lim_{n -> ∞} |a_{n+1} / a_n| memenuhi:',
      options: ['L < 1', 'L > 1', 'L = 1', 'L = 0 saja'],
      correctAnswer: 0,
      explanation: 'Berdasarkan Uji Rasio d\'Alembert: jika L < 1 maka deret konvergen mutlak; jika L > 1 maka deret divergen; jika L = 1 uji tidak dapat menyimpulkan.'
    },
    {
      id: 'kalkulus-5-17',
      question: 'Apakah deret harmonik ∑_{n=1}^∞ (1 / n) = 1 + 1/2 + 1/3 + 1/4 + ... konvergen atau divergen?',
      options: [
        'Konvergen ke 2',
        'Divergen menuju tak hingga (meskipun suku 1/n mendekati 0)',
        'Konvergen ke ln(2)',
        'Konvergen ke e'
      ],
      correctAnswer: 1,
      explanation: 'Deret harmonik terkenal karena divergen menuju tak hingga, meskipun suku penambahnya (1/n) menuju 0. Ini dibuktikan via uji integral (∫ 1/x dx = ln ∞ = ∞).'
    },
    {
      id: 'kalkulus-5-18',
      question: 'Aproksimasi orde 2 (kuadratik) dari fungsi f di sekitar titik minimum x* menggunakan suku Taylor:',
      options: [
        'f(x) ≈ f(x*) + (1/2) f\'\'(x*)(x - x*)^2  (karena f\'(x*) = 0)',
        'f(x) ≈ f(x*) + f\'(x*)',
        'f(x) ≈ f(x*) * (x - x*)',
        'f(x) ≈ 0'
      ],
      correctAnswer: 0,
      explanation: 'Pada titik minimum x*, f\'(x*) = 0. Sehingga suku deret Taylor menjadi f(x) ≈ f(x*) + 0 + (1/2) f\'\'(x*)(x - x*)^2. Ini menjelaskan mengapa fungsi mulus di dekat minimum berperilaku seperti parabola/kuadratik.'
    },
    {
      id: 'kalkulus-5-19',
      question: 'Turunan berarah (Directional Derivative) D_u f(x) pada arah vektor satuan u dihitung dengan rumus:',
      options: [
        '∇f • u (dot product gradien dengan vektor arah satuan u)',
        '∇f × u (cross product)',
        '||∇f|| * ||u||',
        '∇f + u'
      ],
      correctAnswer: 0,
      explanation: 'Turunan berarah merepresentasikan laju perubahan fungsi sepanjang vektor arah u, dihitung melalui perkalian dot: D_u f = ∇f • u.'
    },
    {
      id: 'kalkulus-5-20',
      question: 'Dalam varian Stochastic Gradient Descent (SGD), bagaimana gradien dihitung pada setiap langkah pembaruan?',
      options: [
        'Dihitung menggunakan rata-rata seluruh dataset sekaligus',
        'Dihitung hanya menggunakan satu sampel acak (atau satu mini-batch kecil), menghemat komputasi dan menghindari memori penuh',
        'Tanpa menggunakan turunan sama sekali',
        'Hanya menghitung turunan kedua'
      ],
      correctAnswer: 1,
      explanation: 'SGD mengestimasi gradien hanya dari 1 sampel atau batch kecil sampel secara acak, sehingga kompleksitas per iterasi O(1) atau O(batch_size) terlepas dari ukuran dataset masif.'
    }
  ]
};
