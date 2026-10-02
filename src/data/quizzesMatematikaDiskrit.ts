import type { QuizQuestion } from './curriculum';

export const MATEMATIKA_DISKRIT_QUIZZES: Record<string, QuizQuestion[]> = {
  // MODUL 1: LOGIKA FORMAL, KUANTOR & METODE PEMBUKTIAN (20 Soal)
  matdis_logika_pembuktian: [
    {
      id: 'matdis-1-1',
      question: 'Sebuah proposisi dalam logika matematika didefinisikan sebagai:',
      options: [
        'Kalimat tanya yang membutuhkan jawaban',
        'Kalimat deklaratif yang bernilai benar (True) atau salah (False), tetapi tidak keduanya sekaligus',
        'Kalimat perintah yang harus dieksekusi',
        'Sebuah ekspresi matematika yang memuat variabel bebas'
      ],
      correctAnswer: 1,
      explanation: 'Proposisi adalah kalimat berita/deklaratif yang memiliki nilai kebenaran mutlak: salah atau benar, tanpa ambiguitas.'
    },
    {
      id: 'matdis-1-2',
      question: 'Kapan proposisi implikasi p -> q (jika p maka q) bernilai SALAH (False)?',
      options: [
        'Hanya ketika p bernilai True dan q bernilai False',
        'Ketika p bernilai False dan q bernilai True',
        'Ketika p dan q keduanya bernilai False',
        'Hanya ketika p dan q keduanya bernilai True'
      ],
      correctAnswer: 0,
      explanation: 'Tabel kebenaran implikasi p -> q hanya bernilai False ketika anteseden p benar namun konsekuen q salah (True -> False adalah False).'
    },
    {
      id: 'matdis-1-3',
      question: 'Bentuk kontrapositif (contrapositive) dari pernyataan implikasi p -> q adalah:',
      options: ['~q -> ~p', 'q -> p', '~p -> ~q', 'p ^ ~q'],
      correctAnswer: 0,
      explanation: 'Kontrapositif membalik dan menegasikan kedua sisi: ~q -> ~p. Kontrapositif memiliki nilai kebenaran yang ekuivalen logis (logically equivalent) dengan implikasi aslinya p -> q.'
    },
    {
      id: 'matdis-1-4',
      question: 'Berdasarkan Hukum De Morgan untuk logika proposisi, negasi dari ~(p ^ q) adalah ekuivalen dengan:',
      options: ['~p v ~q', '~p ^ ~q', 'p v q', '~(p v q)'],
      correctAnswer: 0,
      explanation: 'Hukum De Morgan: ~(p ^ q) ≡ ~p v ~q (negasi dari konjungsi adalah disjungsi dari negasi masing-masing).'
    },
    {
      id: 'matdis-1-5',
      question: 'Pernyataan logika majemuk yang selalu bernilai BENAR untuk semua kemungkinan nilai kebenaran komponennya disebut:',
      options: ['Tautologi', 'Kontradiksi', 'Kontinjensi', 'Paradoks'],
      correctAnswer: 0,
      explanation: 'Tautologi adalah proposisi majemuk yang selalu bernilai True pada seluruh baris tabel kebenarannya (contoh: p v ~p).'
    },
    {
      id: 'matdis-1-6',
      question: 'Pernyataan logika yang selalu bernilai SALAH untuk seluruh kemungkinan disebut:',
      options: ['Kontradiksi', 'Tautologi', 'Kontinjensi', 'Aksioma'],
      correctAnswer: 0,
      explanation: 'Kontradiksi selalu bernilai False (contoh: p ^ ~p).'
    },
    {
      id: 'matdis-1-7',
      question: 'Kuantor Universal dinotasikan dengan simbol ∀, yang dibaca:',
      options: ['"Untuk semua" atau "Untuk setiap"', '"Ada setidaknya satu" atau "Terdapat"', '"Tidak ada"', '"Tepat satu"'],
      correctAnswer: 0,
      explanation: 'Simbol ∀ (Universal Quantifier) berarti "untuk semua" (for all / for every) elemen dalam semesta pembicaraan.'
    },
    {
      id: 'matdis-1-8',
      question: 'Negasi dari pernyataan berkuantor universal ~[∀x P(x)] adalah:',
      options: ['∃x ~P(x)', '∀x ~P(x)', '∃x P(x)', '~[∃x P(x)]'],
      correctAnswer: 0,
      explanation: 'Membantah pernyataan "semua x memenuhi P" cukup dengan menunjukkan "ada setidaknya satu x yang TIDAK memenuhi P": ~[∀x P(x)] ≡ ∃x ~P(x).'
    },
    {
      id: 'matdis-1-9',
      question: 'Aturan inferensi Modus Ponens menyatakan bahwa dari premis (p -> q) dan p, kita dapat menarik kesimpulan:',
      options: ['q', '~p', '~q', 'p ^ q'],
      correctAnswer: 0,
      explanation: 'Modus Ponens (kaidah penegasan): Jika premis "p mengimplikasikan q" benar, dan kondisi "p" terjadi, maka kesimpulan "q" pasti benar.'
    },
    {
      id: 'matdis-1-10',
      question: 'Aturan inferensi Modus Tollens menyatakan bahwa dari premis (p -> q) dan ~q, kita dapat menyimpulkan:',
      options: ['~p', 'p', 'q', '~p -> ~q'],
      correctAnswer: 0,
      explanation: 'Modus Tollens (kaidah penolakan): Jika "p -> q" dan kenyataannya "q salah (~q)", maka anteseden pastilah salah ("~p").'
    },
    {
      id: 'matdis-1-11',
      question: 'Dalam Metode Pembuktian dengan Induksi Matematika, dua langkah wajib yang harus dibuktikan adalah:',
      options: [
        'Basis Induksi (Basis Step) dan Langkah Induksi (Inductive Step)',
        'Hipotesis Nol dan Uji Signifikansi',
        'Eliminasi Gauss dan Substitusi Mundur',
        'Kondisi Batas dan Terminasi Loop'
      ],
      correctAnswer: 0,
      explanation: 'Induksi matematika terdiri dari: (1) Basis Induksi (menunjukkan P(n_0) benar), dan (2) Langkah Induksi (menunjukkan jika P(k) benar, maka P(k+1) juga benar).'
    },
    {
      id: 'matdis-1-12',
      question: 'Dalam pembuktian tidak langsung dengan Kontradiksi (Proof by Contradiction), langkah awalnya adalah:',
      options: [
        'Mengasumsikan bahwa pernyataan yang ingin dibuktikan bernilai SALAH, lalu menunjukkan hal ini menuntun ke sebuah kemustahilan matematis (kontradiksi)',
        'Membuktikan semua contoh bilangan satu per satu',
        'Mengasumsikan anteseden salah',
        'Menyederhanakan rumus'
      ],
      correctAnswer: 0,
      explanation: 'Proof by Contradiction (Reductio ad Absurdum) mengasumsikan negasi dari klaim (~P), lalu memperlihatkan bahwa asumsi tersebut menghasilkan kontradiksi logis, membuktikan P harus benar.'
    },
    {
      id: 'matdis-1-13',
      question: 'Pembuktian klasik bahwa √2 adalah bilangan irasional paling elegan diselesaikan menggunakan metode:',
      options: [
        'Pembuktian dengan Kontradiksi (Proof by Contradiction)',
        'Induksi Matematika',
        'Tabel Kebenaran',
        'Algoritma Greedy'
      ],
      correctAnswer: 0,
      explanation: 'Asumsikan √2 rasional (a/b dalam bentuk paling sederhana). Melalui manipulasi aljabar didapat a dan b keduanya bilangan genap, yang mengontradiksi premis bentuk paling sederhana.'
    },
    {
      id: 'matdis-1-14',
      question: 'Jika ingin membuktikan pernyataan "Terdapat bilangan prima genap", metode pembuktian yang paling cepat adalah:',
      options: [
        'Pembuktian Konstruktif dengan Contoh Nyata (Proof by Construction/Example)',
        'Induksi Matematika Kuat',
        'Kontradiksi',
        'Deduksi Silogisme Hipotetis'
      ],
      correctAnswer: 0,
      explanation: 'Untuk klaim eksistensial ∃x, cukup tunjukkan satu contoh nyata yang valid: angka 2 adalah bilangan prima sekaligus genap.'
    },
    {
      id: 'matdis-1-15',
      question: 'Aturan inferensi Silogisme Hipotetis menyatakan: jika (p -> q) dan (q -> r), maka:',
      options: ['p -> r', 'p ^ r', 'r -> p', '~p -> ~r'],
      correctAnswer: 0,
      explanation: 'Silogisme hipotetis adalah sifat transitif dari implikasi: p mengarah ke q, dan q mengarah ke r, maka p mengarah ke r.'
    },
    {
      id: 'matdis-1-16',
      question: 'Kapan proposisi bi-implikasi p <-> q bernilai BENAR?',
      options: [
        'Ketika p dan q memiliki nilai kebenaran yang sama (keduanya True atau keduanya False)',
        'Hanya ketika p dan q keduanya True',
        'Ketika salah satu True dan yang lain False',
        'Selalu bernilai benar'
      ],
      correctAnswer: 0,
      explanation: 'Bi-implikasi p <-> q (jika dan hanya jika) benar jika dan hanya jika p dan q bernilai kebenaran identik.'
    },
    {
      id: 'matdis-1-17',
      question: 'Prinsip Induksi Kuat (Strong Induction) berbeda dari induksi biasa karena pada langkah induktif kita mengasumsikan:',
      options: [
        'P(n) benar untuk SEMUA bilangan bulat dari basis n_0 sampai k (bukan hanya untuk k)',
        'P(k) benar hanya untuk bilangan genap',
        'Tidak memerlukan langkah basis',
        'Pernyataan salah untuk k+1'
      ],
      correctAnswer: 0,
      explanation: 'Induksi kuat memperbolehkan hipotesis induksi yang lebih kaya: mengasumsikan P(n_0), P(n_0+1), ..., P(k) semuanya benar untuk membuktikan P(k+1).'
    },
    {
      id: 'matdis-1-18',
      question: 'Apakah kalimat "x + 5 = 9" merupakan proposisi?',
      options: [
        'Bukan, ini adalah fungsi proposisional / predikat P(x) yang nilai kebenarannya bergantung pada nilai variabel x',
        'Ya, proposisi yang bernilai True',
        'Ya, proposisi yang bernilai False',
        'Ya, karena ada tanda sama dengan'
      ],
      correctAnswer: 0,
      explanation: '"x + 5 = 9" belum memiliki nilai kebenaran pasti sampai nilai x ditentukan. Oleh karena itu, kalimat terbuka ini disebut predikat P(x), bukan proposisi.'
    },
    {
      id: 'matdis-1-19',
      question: 'Dalam verifikasi kebenaran program komputer (Hoare Logic), tripel {P} C {Q} berarti:',
      options: [
        'Jika prakondisi P terpenuhi sebelum program C berjalan dan C berhenti, maka pascakondisi Q dijamin terpenuhi',
        'Program C memiliki kompleksitas O(P * Q)',
        'P dan Q adalah input program',
        'Program C menghasilkan error jika P salah'
      ],
      correctAnswer: 0,
      explanation: 'Hoare Triple {P} C {Q} adalah fondasi metode formal ilmu komputer untuk membuktikan kebenaran algoritma secara matematis.'
    },
    {
      id: 'matdis-1-20',
      question: 'Argumen logika "Jika hujan, jalan basah. Jalan basah, maka hujan." adalah kekeliruan logika (fallacy) yang dinamai:',
      options: [
        'Affirming the Consequent (Menegaskan Konsekuen)',
        'Denying the Antecedent',
        'Modus Ponens',
        'Circular Reasoning'
      ],
      correctAnswer: 0,
      explanation: 'Menyimpulkan p dari (p -> q) dan q adalah cacat logika Affirming the Consequent, karena jalan bisa basah oleh sebab lain (disiram air, pipa bocor).'
    }
  ],

  // MODUL 2: TEORI HIMPUNAN, RELASI & FUNGSI (20 Soal)
  matdis_himpunan_relasi_fungsi: [
    {
      id: 'matdis-2-1',
      question: 'Berapakah jumlah elemen dalam Himpunan Kuasa (Power Set P(S)) dari himpunan S yang memiliki n elemen?',
      options: ['2^n', 'n^2', 'n!', '2n'],
      correctAnswer: 0,
      explanation: 'Setiap elemen memiliki 2 opsi (dimasukkan atau tidak dimasukkan ke dalam subset), sehingga total subset |P(S)| = 2^n.'
    },
    {
      id: 'matdis-2-2',
      question: 'Jika A = {1, 2, 3} dan B = {3, 4, 5}, berapakah selisih simetris (Symmetric Difference A ⊕ B)?',
      options: ['{1, 2, 4, 5}', '{3}', '{1, 2, 3, 4, 5}', '∅ (Himpunan kosong)'],
      correctAnswer: 0,
      explanation: 'Selisih simetris A ⊕ B = (A ∪ B) \\ (A ∩ B), memuat elemen yang berada di A atau B tetapi bukan di kedua-duanya: {1, 2, 4, 5}.'
    },
    {
      id: 'matdis-2-3',
      question: 'Sebuah relasi biner R pada himpunan A dikatakan Refleksif jika:',
      options: [
        'Untuk setiap a ∈ A, berlaku (a, a) ∈ R',
        'Jika (a, b) ∈ R maka (b, a) ∈ R',
        'Jika (a, b) ∈ R dan (b, c) ∈ R maka (a, c) ∈ R',
        '(a, b) ∈ R dan (b, a) ∈ R mengimplikasikan a = b'
      ],
      correctAnswer: 0,
      explanation: 'Refleksif berarti setiap elemen terhubung dengan dirinya sendiri: ∀a ∈ A, (a, a) ∈ R.'
    },
    {
      id: 'matdis-2-4',
      question: 'Sebuah relasi biner R dikatakan Simetris jika memenuhi:',
      options: [
        'Jika (a, b) ∈ R maka (b, a) ∈ R',
        'Untuk setiap a, (a, a) ∈ R',
        'Jika (a, b) ∈ R dan (b, c) ∈ R maka (a, c) ∈ R',
        '(a, a) ∉ R'
      ],
      correctAnswer: 0,
      explanation: 'Simetris: jika ada hubungan dua arah dari a ke b, maka ada hubungan balasan dari b ke a.'
    },
    {
      id: 'matdis-2-5',
      question: 'Sebuah relasi biner R dikatakan Transitif jika memenuhi:',
      options: [
        'Jika (a, b) ∈ R dan (b, c) ∈ R, maka (a, c) ∈ R',
        'Jika (a, b) ∈ R maka (b, a) ∈ R',
        'Untuk setiap a, (a, a) ∈ R',
        'a = b = c'
      ],
      correctAnswer: 0,
      explanation: 'Transitif: hubungan dapat dirangkaikan, dari a ke b lalu b ke c mengimplikasikan adanya lompatan langsung dari a ke c.'
    },
    {
      id: 'matdis-2-6',
      question: 'Sebuah relasi R disebut Relasi Ekuivalensi (Equivalence Relation) jika memenuhi tiga sifat sekaligus:',
      options: [
        'Refleksif, Simetris, dan Transitif',
        'Refleksif, Anti-simetris, dan Transitif',
        'Irrefleksif, Simetris, dan Asimetris',
        'Refleksif dan Invertibel'
      ],
      correctAnswer: 0,
      explanation: 'Relasi ekuivalensi membagi (mempartisi) himpunan menjadi kelas-kelas ekuivalensi yang saling lepas (contoh: relasi kongruensi modulo n: a ≡ b mod n).'
    },
    {
      id: 'matdis-2-7',
      question: 'Sebuah relasi R disebut Pengurutan Parsial (Partial Order / Poset) jika memenuhi tiga sifat:',
      options: [
        'Refleksif, Anti-simetris, dan Transitif',
        'Refleksif, Simetris, dan Transitif',
        'Simetris dan Ekuivalen',
        'Linear dan Bijektif'
      ],
      correctAnswer: 0,
      explanation: 'Poset (Partially Ordered Set) mensyaratkan sifat anti-simetris (bukan simetris) bersama dengan refleksif dan transitif (contoh relasi <= atau himpunan bagian ⊆).'
    },
    {
      id: 'matdis-2-8',
      question: 'Sebuah fungsi f: A -> B disebut Injektif (Satu-ke-Satu / One-to-One) jika:',
      options: [
        'Setiap elemen yang berbeda di A dipetakan ke elemen yang berbeda di B (f(a_1) = f(a_2) mengimplikasikan a_1 = a_2)',
        'Setiap elemen di B merupakan peta dari setidaknya satu elemen di A',
        'Jumlah elemen domain sama dengan kodomain',
        'Fungsi memiliki nilai mutlak'
      ],
      correctAnswer: 0,
      explanation: 'Injektif menjamin tidak ada dua input berbeda yang menghasilkan output yang sama (tidak ada tabrakan / collision pada fungsi hash ideal).'
    },
    {
      id: 'matdis-2-9',
      question: 'Sebuah fungsi f: A -> B disebut Surjektif (Pada / Onto) jika:',
      options: [
        'Setiap elemen di kodomain B merupakan bayangan dari setidaknya satu elemen di domain A (Range = Kodomain)',
        'f(x) selalu positif',
        'f(a) = a untuk semua a',
        'Fungsi tidak memiliki turunan'
      ],
      correctAnswer: 0,
      explanation: 'Surjektif berarti seluruh kodomain B tertutupi oleh hasil pemetaan f, tidak ada elemen B yang menganggur.'
    },
    {
      id: 'matdis-2-10',
      question: 'Sebuah fungsi f: A -> B disebut Bijektif (Korespondensi Satu-ke-Satu) jika:',
      options: [
        'Fungsi tersebut sekaligus Injektif dan Surjektif',
        'Fungsi hanya memetakan bilangan genap',
        'Fungsi memiliki nilai minimum lokal',
        'Kodomain berupa himpunan kosong'
      ],
      correctAnswer: 0,
      explanation: 'Fungsi bijektif memasangkan setiap elemen A tepat dengan satu elemen B, menjamin adanya fungsi balikan/invers f^{-1}: B -> A.'
    },
    {
      id: 'matdis-2-11',
      question: 'Perkalian Kartesius A x B antara himpunan A = {a, b} dan B = {1, 2, 3} memiliki kardinalitas:',
      options: ['6', '5', '8', '9'],
      correctAnswer: 0,
      explanation: '|A x B| = |A| * |B| = 2 * 3 = 6 pasangan terurut (ordered pairs).'
    },
    {
      id: 'matdis-2-12',
      question: 'Dalam arsitektur basis data relasional (RDBMS), sebuah tabel secara matematis didefinisikan sebagai:',
      options: [
        'Sebuah relasi n-ary yang merupakan subset dari perkalian Kartesius domain atribut-atributnya',
        'Sebuah array satu dimensi',
        'Sebuah graf pohon biner seimbang',
        'Sebuah fungsi linear'
      ],
      correctAnswer: 0,
      explanation: 'Model relasional E.F. Codd mendasarkan tabel SQL pada konsep relasi matematika n-ary: subset dari D_1 x D_2 x ... x D_n.'
    },
    {
      id: 'matdis-2-13',
      question: 'Diagram Hasse digunakan dalam matematika diskrit untuk memvisualisasikan:',
      options: [
        'Himpunan terurut parsial (Poset)',
        'Tabel kebenaran proposisi',
        'Aliran data compiler',
        'Pohon ekspresi aritmatika'
      ],
      correctAnswer: 0,
      explanation: 'Diagram Hasse adalah representasi visual dari poset yang menghilangkan panah refleksif dan transitif implisit agar tampil bersih.'
    },
    {
      id: 'matdis-2-14',
      question: 'Jika relasi kongruensi a ≡ b (mod 5) diterapkan pada himpunan bilangan bulat Z, ada berapa banyak kelas ekuivalensi yang dihasilkan?',
      options: ['5 ([0], [1], [2], [3], [4])', 'Tak hingga', '4', '1'],
      correctAnswer: 0,
      explanation: 'Sisa pembagian bilangan bulat oleh 5 hanya ada 5 kemungkinan: 0, 1, 2, 3, 4, membagi Z menjadi 5 partisi kelas modulo.'
    },
    {
      id: 'matdis-2-15',
      question: 'Kardinalitas dari himpunan bilangan bulat Z dan himpunan bilangan rasional Q adalah sama, yaitu tak hingga terhitung (countably infinite) yang dinotasikan:',
      options: ['Aleph-nol (ℵ_0)', 'Kontinuum (c)', 'Tak terdefinisi', 'Omega (Ω)'],
      correctAnswer: 0,
      explanation: 'Georg Cantor membuktikan bahwa Z dan Q dapat dipetakan secara bijektif dengan bilangan asli N, sehingga memiliki kardinalitas ℵ_0 (aleph-0).'
    },
    {
      id: 'matdis-2-16',
      question: 'Sebaliknya, himpunan bilangan riil R bersifat tidak terhitung (uncountable). Argumen apa yang digunakan Cantor untuk membuktikannya?',
      options: [
        'Argumen Diagonal Cantor (Cantor\'s Diagonal Argument)',
        'Induksi Matematika',
        'Uji Integral',
        'Eliminasi Gauss'
      ],
      correctAnswer: 0,
      explanation: 'Cantor membuat daftar desimal sembarang dan mengonstruksi sebuah angka riil baru yang berbeda pada digit diagonal ke-n, membuktikan kontradiksi daftar lengkap.'
    },
    {
      id: 'matdis-2-17',
      question: 'Komposisi fungsi (g ∘ f)(x) didefinisikan sebagai:',
      options: ['g(f(x))', 'f(g(x))', 'f(x) * g(x)', 'g(x) / f(x)'],
      correctAnswer: 0,
      explanation: 'Komposisi (g ∘ f)(x) mengevaluasi f terlebih dahulu, lalu memasukkan hasilnya sebagai argumen fungsi g: g(f(x)).'
    },
    {
      id: 'matdis-2-18',
      question: 'Himpunan A dan B dikatakan Saling Lepas (Disjoint) jika:',
      options: ['A ∩ B = ∅ (irisannya himpunan kosong)', 'A ∪ B = ∅', 'A = B', '|A| = |B|'],
      correctAnswer: 0,
      explanation: 'Dua himpunan disjoint tidak memiliki satu pun anggota bersama, sehingga A ∩ B = ∅.'
    },
    {
      id: 'matdis-2-19',
      question: 'Operasi penutupan transitif (Transitive Closure) dari relasi graf berarah merepresentasikan:',
      options: [
        'Matriks keterjangkauan (Reachability matrix / apakah ada lintasan dari simpul u ke v)',
        'Jumlah simpul tetangga',
        'Derajat keluar simpul',
        'Siklus terpendek'
      ],
      correctAnswer: 0,
      explanation: 'Penutupan transitif menghubungkan simpul u ke v jika ada jalur dengan sembarang panjang langkah, dihitung via Algoritma Warshall.'
    },
    {
      id: 'matdis-2-20',
      question: 'Sebuah fungsi f: A -> B dapat memiliki fungsi invers f^{-1}: B -> A jika dan hanya jika f adalah fungsi:',
      options: ['Bijektif', 'Injektif saja', 'Surjektif saja', 'Konstan'],
      correctAnswer: 0,
      explanation: 'Fungsi invers hanya dapat didefinisikan jika pemetaan bersifat dua arah tanpa ambiguitas, yang mensyaratkan f bijektif.'
    }
  ],

  // MODUL 3: KOMBINATORIKA & PRINSIP SARANG MERPATI (20 Soal)
  matdis_kombinatorika_pigeonhole: [
    {
      id: 'matdis-3-1',
      question: 'Prinsip Penjumlahan (Addition Rule) dalam pencacahan digunakan ketika:',
      options: [
        'Pilihan-pilihan peristiwa bersifat saling lepas (mutually exclusive / disjoint) dan dihubungkan kata "ATAU"',
        'Peristiwa terjadi secara berurutan dan dihubungkan kata "DAN"',
        'Ada pengulangan tak terbatas',
        'Elemen disusun melingkar'
      ],
      correctAnswer: 0,
      explanation: 'Jika tugas A dapat dilakukan dengan m cara dan tugas B dengan n cara, dan keduanya tidak dapat dilakukan bersamaan, total cara memilih A atau B adalah m + n.'
    },
    {
      id: 'matdis-3-2',
      question: 'Prinsip Perkalian (Multiplication Rule) digunakan ketika sebuah prosedur terdiri dari langkah 1 (n_1 cara) DIIKUTI langkah 2 (n_2 cara). Total caranya adalah:',
      options: ['n_1 * n_2', 'n_1 + n_2', 'n_1^{n_2}', '(n_1)!'],
      correctAnswer: 0,
      explanation: 'Untuk urutan langkah bertahap yang independen, total kemungkinan cara adalah hasil kali kemungkinan tiap langkah: n_1 * n_2 * ... * n_k.'
    },
    {
      id: 'matdis-3-3',
      question: 'Berapakah rumus Permutasi P(n, r) untuk memilih dan MENYUSUN r objek dari n objek (urutan diperhatikan)?',
      options: [
        'n! / (n - r)!',
        'n! / (r! * (n - r)!)',
        'n! / r!',
        '(n - r)!'
      ],
      correctAnswer: 0,
      explanation: 'Permutasi memperhitungkan urutan susunan: P(n, r) = n! / (n - r)!.'
    },
    {
      id: 'matdis-3-4',
      question: 'Berapakah rumus Kombinasi C(n, r) untuk MEMILIH r objek dari n objek (urutan TIDAK diperhatikan)?',
      options: [
        'n! / (r! * (n - r)!)',
        'n! / (n - r)!',
        'n! / r!',
        'r! / (n - r)!'
      ],
      correctAnswer: 0,
      explanation: 'Kombinasi mengabaikan urutan: C(n, r) = n! / [r! (n - r)!].'
    },
    {
      id: 'matdis-3-5',
      question: 'Berapakah nilai dari C(5, 2)?',
      options: ['10', '20', '5', '12'],
      correctAnswer: 0,
      explanation: 'C(5, 2) = 5! / (2! * 3!) = (5 * 4) / (2 * 1) = 20 / 2 = 10.'
    },
    {
      id: 'matdis-3-6',
      question: 'Berapakah nilai dari P(5, 2)?',
      options: ['20', '10', '60', '120'],
      correctAnswer: 0,
      explanation: 'P(5, 2) = 5! / (5 - 2)! = 5! / 3! = 5 * 4 = 20.'
    },
    {
      id: 'matdis-3-7',
      question: 'Prinsip Sarang Merpati (Pigeonhole Principle) menyatakan bahwa jika k + 1 merpati dimasukkan ke dalam k sarang, maka:',
      options: [
        'Setidaknya satu sarang harus memuat dua merpati atau lebih',
        'Semua sarang terisi merpati tepat satu',
        'Ada setidaknya satu sarang kosong',
        'Merpati tidak dapat dihitung'
      ],
      correctAnswer: 0,
      explanation: 'Jika jumlah item (n) melebihi jumlah wadah (k), maka menurut Pigeonhole Principle, setidaknya ada satu wadah yang menampung minimal ⌈n/k⌉ item.'
    },
    {
      id: 'matdis-3-8',
      question: 'Berapa jumlah minimum orang yang harus berkumpul dalam satu ruangan untuk menjamin setidaknya ada dua orang yang lahir pada bulan yang sama?',
      options: ['13 orang', '12 orang', '24 orang', '366 orang'],
      correctAnswer: 0,
      explanation: 'Ada 12 bulan dalam setahun (sarang). Menurut Pigeonhole Principle, kita membutuhkan k + 1 = 12 + 1 = 13 orang untuk menjamin tabrakan bulan lahir.'
    },
    {
      id: 'matdis-3-9',
      question: 'Prinsip Inklusi-Eksklusi (PIE) untuk menghitung ukuran gabungan dua himpunan |A ∪ B| adalah:',
      options: [
        '|A| + |B| - |A ∩ B|',
        '|A| + |B| + |A ∩ B|',
        '|A| * |B|',
        '|A| - |B|'
      ],
      correctAnswer: 0,
      explanation: 'Karena elemen yang berada di irisan (A ∩ B) terhitung dua kali saat menjumlahkan |A| + |B|, maka irisannya harus dikurangi satu kali: |A| + |B| - |A ∩ B|.'
    },
    {
      id: 'matdis-3-10',
      question: 'Berapakah koefisien suku x^2 y^3 dalam ekspansi binomial (x + y)^5 berdasarkan Teorema Binomial?',
      options: ['10', '5', '20', '1'],
      correctAnswer: 0,
      explanation: 'Koefisien x^{n-k} y^k adalah C(n, k). Di sini n = 5 dan k = 3: C(5, 3) = C(5, 2) = 10.'
    },
    {
      id: 'matdis-3-11',
      question: 'Berapa banyak string biner dengan panjang 8 bit (1 byte) yang dapat dibentuk?',
      options: ['2^8 = 256', '8^2 = 64', '8! = 40320', '16'],
      correctAnswer: 0,
      explanation: 'Setiap posisi bit memiliki 2 opsi (0 atau 1). Berdasarkan aturan perkalian: 2 * 2 * ... * 2 (8 kali) = 2^8 = 256 kemungkinan.'
    },
    {
      id: 'matdis-3-12',
      question: 'Berapa banyak string biner 8 bit yang memiliki TEPAT 3 angka satu?',
      options: ['C(8, 3) = 56', 'P(8, 3) = 336', '24', '128'],
      correctAnswer: 0,
      explanation: 'Kita memilih 3 posisi dari 8 posisi yang tersedia untuk diisi angka 1: C(8, 3) = (8 * 7 * 6) / (3 * 2 * 1) = 56.'
    },
    {
      id: 'matdis-3-13',
      question: 'Berapa banyak susunan anagram kata "KOMPUTER" (8 huruf berbeda)?',
      options: ['8! = 40.320', '8^8', 'C(8, 2)', '256'],
      correctAnswer: 0,
      explanation: 'Semua 8 huruf berbeda, sehingga total permutasi adalah 8! = 40.320 susunan.'
    },
    {
      id: 'matdis-3-14',
      question: 'Berapa banyak susunan kata berbeda yang dapat dibentuk dari kata "ALGORITMA" (9 huruf, dengan huruf A muncul 2 kali)?',
      options: ['9! / 2! = 181.440', '9! = 362.880', 'C(9, 2)', '9^2'],
      correctAnswer: 0,
      explanation: 'Permutasi dengan elemen berulang: n! / (n_1! n_2! ...). Di sini total 9 huruf dan huruf A berulang 2 kali: 9! / 2! = 362.880 / 2 = 181.440.'
    },
    {
      id: 'matdis-3-15',
      question: 'Prinsip Sarang Merpati Umum (Generalized Pigeonhole Principle): Jika N objek dimasukkan ke k kotak, setidaknya ada satu kotak yang memuat minimal:',
      options: ['⌈N / k⌉ objek', '⌊N / k⌋ objek', 'N - k objek', 'k + 1 objek'],
      correctAnswer: 0,
      explanation: 'Berdasarkan prinsip pembagian pembulatan ke atas (ceiling function): setidaknya satu kotak memuat minimal ⌈N / k⌉ objek.'
    },
    {
      id: 'matdis-3-16',
      question: 'Dalam tabel hash dengan 10 slot memori, jika dimasukkan 21 data kunci, setidaknya ada satu slot yang menampung minimal berapa data (collision)?',
      options: ['⌈21 / 10⌉ = 3 data', '2 data', '1 data', '21 data'],
      correctAnswer: 0,
      explanation: 'Menurut Generalized Pigeonhole Principle: ⌈21 / 10⌉ = ⌈2.1⌉ = 3 data.'
    },
    {
      id: 'matdis-3-17',
      question: 'Identitas Pascal menyatakan hubungan kombinatorika penting:',
      options: [
        'C(n, k) = C(n - 1, k - 1) + C(n - 1, k)',
        'C(n, k) = C(n, k - 1) + C(n, k + 1)',
        'C(n, k) = C(n - 1, k) * 2',
        'C(n, k) = n * C(n - 1, k)'
      ],
      correctAnswer: 0,
      explanation: 'Identitas Pascal adalah aturan pembentuk Segitiga Pascal: setiap angka di baris baru adalah jumlahan dari dua angka tepat di atasnya.'
    },
    {
      id: 'matdis-3-18',
      question: 'Jumlah seluruh koefisien binomial ∑_{k=0}^n C(n, k) sama dengan:',
      options: ['2^n', 'n^2', 'n!', '2n'],
      correctAnswer: 0,
      explanation: 'Substitusi x = 1 dan y = 1 ke dalam rumus binomial (x + y)^n menghasilkan (1 + 1)^n = 2^n.'
    },
    {
      id: 'matdis-3-19',
      question: 'Berapa banyak solusi bilangan bulat tak-negatif (x_1, x_2, x_3 >= 0) dari persamaan x_1 + x_2 + x_3 = 7 menggunakan metode Stars and Bars?',
      options: ['C(7 + 3 - 1, 3 - 1) = C(9, 2) = 36', 'C(7, 3) = 35', '7^3 = 343', '21'],
      correctAnswer: 0,
      explanation: 'Formula Stars and Bars untuk membagi n bintang dengan k variabel adalah C(n + k - 1, k - 1). Di sini n = 7 dan k = 3: C(7 + 3 - 1, 2) = C(9, 2) = 36.'
    },
    {
      id: 'matdis-3-20',
      question: 'Berapa banyak susunan duduk melingkar (Permutasi Siklik) untuk 6 orang mengitari meja bundar?',
      options: ['(6 - 1)! = 5! = 120', '6! = 720', 'C(6, 2) = 15', '36'],
      correctAnswer: 0,
      explanation: 'Permutasi siklik n objek melingkar adalah (n - 1)! karena rotasi posisi dianggap sama: (6 - 1)! = 5! = 120.'
    }
  ],

  // MODUL 4: RELASI REKURENSI & DIVIDE AND CONQUER (20 Soal)
  matdis_rekurensi_generating: [
    {
      id: 'matdis-4-1',
      question: 'Sebuah Relasi Rekurensi mendefinisikan barisan suku a_n sebagai:',
      options: [
        'Fungsi yang melibatkan satu atau lebih suku sebelumnya (a_{n-1}, a_{n-2}, ...)',
        'Polinomial berpangkat konstan',
        'Fungsi trigonometri',
        'Integral tak tentu'
      ],
      correctAnswer: 0,
      explanation: 'Relasi rekurensi mengekspresikan nilai a_n berdasarkan suku-suku pendahulunya, dilengkapi kondisi awal (initial conditions).'
    },
    {
      id: 'matdis-4-2',
      question: 'Kondisi awal (base case) a_0 = 0 dan a_1 = 1 dengan relasi a_n = a_{n-1} + a_{n-2} mendefinisikan barisan terkenal:',
      options: ['Barisan Fibonacci', 'Barisan Lucas', 'Barisan Harmonik', 'Barisan Katalan'],
      correctAnswer: 0,
      explanation: 'Ini adalah definisi klasik barisan Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...'
    },
    {
      id: 'matdis-4-3',
      question: 'Berapakah persamaan karakteristik dari relasi rekurensi linier homogen a_n - 5 a_{n-1} + 6 a_{n-2} = 0?',
      options: ['r^2 - 5r + 6 = 0', 'r^2 + 5r + 6 = 0', 'r - 5 = 0', 'r^2 - 6r + 5 = 0'],
      correctAnswer: 0,
      explanation: 'Ganti a_n dengan r^n: r^n - 5 r^{n-1} + 6 r^{n-2} = 0. Bagi dengan r^{n-2} menghasilkan persamaan kuadratik r^2 - 5r + 6 = 0.'
    },
    {
      id: 'matdis-4-4',
      question: 'Akar-akar dari persamaan karakteristik r^2 - 5r + 6 = 0 adalah:',
      options: ['r_1 = 2 dan r_2 = 3', 'r_1 = -2 dan r_2 = -3', 'r_1 = 1 dan r_2 = 6', 'r = 5'],
      correctAnswer: 0,
      explanation: 'Faktorisasi: (r - 2)(r - 3) = 0 => r_1 = 2 dan r_2 = 3.'
    },
    {
      id: 'matdis-4-5',
      question: 'Bentuk solusi umum dari relasi rekurensi dengan dua akar karakteristik berbeda r_1 != r_2 adalah:',
      options: [
        'a_n = c_1 (r_1)^n + c_2 (r_2)^n',
        'a_n = c_1 r_1 + c_2 r_2',
        'a_n = (r_1 * r_2)^n',
        'a_n = c_1 n (r_1)^n'
      ],
      correctAnswer: 0,
      explanation: 'Jika akar karakteristik riil dan berbeda, solusi umum adalah kombinasi linier eksponensial: a_n = c_1 (r_1)^n + c_2 (r_2)^n.'
    },
    {
      id: 'matdis-4-6',
      question: 'Jika persamaan karakteristik memiliki akar kembar berulang r_1 = r_2 = r, maka bentuk solusi umumnya adalah:',
      options: [
        'a_n = (c_1 + c_2 * n) * r^n',
        'a_n = c_1 r^n',
        'a_n = c_1 r^n + c_2 r^n',
        'a_n = c_1 n^2 r^n'
      ],
      correctAnswer: 0,
      explanation: 'Untuk akar kembar berulang, suku kedua dikalikan dengan n untuk mempertahankan kebebasan linier solusi: a_n = (c_1 + c_2 n) r^n.'
    },
    {
      id: 'matdis-4-7',
      question: 'Berapakah jumlah langkah perpindahan piringan minimum dalam teka-teki Menara Hanoi dengan n piringan (M(n) = 2 M(n-1) + 1)?',
      options: ['2^n - 1', '2^n', 'n^2', 'n!'],
      correctAnswer: 0,
      explanation: 'Menara Hanoi memiliki relasi M(n) = 2 M(n-1) + 1 dengan M(1) = 1. Solusi eksaknya adalah M(n) = 2^n - 1 langkah.'
    },
    {
      id: 'matdis-4-8',
      question: 'Berapakah rasio konvergensi suku Fibonacci berurutan lim_{n -> ∞} (F_{n+1} / F_n)?',
      options: [
        'Golden Ratio (Rasio Emas φ = (1 + √5)/2 ≈ 1.618)',
        'e ≈ 2.718',
        'π ≈ 3.141',
        '2'
      ],
      correctAnswer: 0,
      explanation: 'Akar karakteristik dominan barisan Fibonacci r^2 - r - 1 = 0 adalah r = (1 + √5)/2 = φ, yang merupakan Rasio Emas (Golden Ratio).'
    },
    {
      id: 'matdis-4-9',
      question: 'Relasi rekurensi algoritma Merge Sort T(n) = 2 T(n/2) + O(n) diselesaikan menghasilkan kompleksitas waktu:',
      options: ['Θ(n log n)', 'Θ(n^2)', 'Θ(n)', 'Θ(log n)'],
      correctAnswer: 0,
      explanation: 'Menurut Teorema Master (Kasus 2) dengan a = 2, b = 2, n^{log_b a} = n^1, dan f(n) = n, solusinya adalah Θ(n log n).'
    },
    {
      id: 'matdis-4-10',
      question: 'Relasi rekurensi algoritma Binary Search T(n) = T(n/2) + O(1) diselesaikan menghasilkan kompleksitas waktu:',
      options: ['Θ(log n)', 'Θ(n)', 'Θ(1)', 'Θ(n log n)'],
      correctAnswer: 0,
      explanation: 'Teorema Master Kasus 2 dengan a = 1, b = 2: n^{log_2 1} = n^0 = 1, f(n) = 1, solusinya adalah Θ(log n).'
    },
    {
      id: 'matdis-4-11',
      question: 'Teknik Substitusi Mundur (Backward Substitution / Iterasi) menyelesaikan rekurensi dengan cara:',
      options: [
        'Mengekspansikan relasi ke belakang langkah demi langkah hingga pola deret suku ke-k terlihat dan mencapai kondisi awal',
        'Menghitung determinan matriks',
        'Menggunakan tabel kebenaran',
        'Menebak secara acak'
      ],
      correctAnswer: 0,
      explanation: 'Substitusi mundur membuka a_n = f(a_{n-1}) = f(f(a_{n-2})) secara beruntun sampai muncul pola deret aljabar suku ke-k.'
    },
    {
      id: 'matdis-4-12',
      question: 'Fungsi Pembangkit (Generating Function) dari sebuah barisan a_0, a_1, a_2, ... adalah deret formal berbentuk:',
      options: ['G(x) = ∑_{n=0}^∞ a_n x^n', 'G(x) = ∑ a_n / n', 'G(x) = ∏ a_n x', 'G(x) = a_n^x'],
      correctAnswer: 0,
      explanation: 'Fungsi pembangkit biasa (Ordinary Generating Function) mengkodekan suku barisan sebagai koefisien dari deret pangkat formal G(x) = a_0 + a_1 x + a_2 x^2 + ...'
    },
    {
      id: 'matdis-4-13',
      question: 'Fungsi pembangkit dari barisan konstan 1, 1, 1, 1, ... adalah:',
      options: ['1 / (1 - x)', '1 / (1 + x)', 'e^x', '1 / x'],
      correctAnswer: 0,
      explanation: 'Deret geometri 1 + x + x^2 + x^3 + ... memiliki bentuk tertutup 1 / (1 - x) untuk |x| < 1.'
    },
    {
      id: 'matdis-4-14',
      question: 'Berapakah solusi rekurensi a_n = a_{n-1} + 3 dengan a_0 = 2?',
      options: ['a_n = 3n + 2', 'a_n = 2 * 3^n', 'a_n = 3^n + 2', 'a_n = 2n + 3'],
      correctAnswer: 0,
      explanation: 'Ini adalah deret aritmatika dengan beda 3: a_1 = 2 + 3, a_2 = 2 + 2(3), ..., a_n = 3n + 2.'
    },
    {
      id: 'matdis-4-15',
      question: 'Berapakah solusi rekurensi a_n = 2 a_{n-1} dengan a_0 = 5?',
      options: ['a_n = 5 * 2^n', 'a_n = 2 * 5^n', 'a_n = 10^n', 'a_n = 2n + 5'],
      correctAnswer: 0,
      explanation: 'Ini adalah deret geometri dengan rasio 2: a_n = a_0 * r^n = 5 * 2^n.'
    },
    {
      id: 'matdis-4-16',
      question: 'Dalam relasi rekurensi non-homogen a_n = a_{n-1} + 2 a_{n-2} + f(n), solusi total a_n diperoleh dengan menjumlahkan:',
      options: [
        'Solusi homogen a_n^{(h)} ditambah solusi partikular a_n^{(p)}',
        'Dua solusi homogen',
        'Solusi homogen dikalikan solusi partikular',
        'Nilai awal saja'
      ],
      correctAnswer: 0,
      explanation: 'Sama seperti persamaan diferensial linier: solusi lengkap relasi non-homogen adalah superposisi solusi homogen dan solusi partikular: a_n = a_n^{(h)} + a_n^{(p)}.'
    },
    {
      id: 'matdis-4-17',
      question: 'Bilangan Catalan C_n = (1 / (n+1)) * C(2n, n) muncul dalam berbagai masalah kombinatorika dan rekursi berikut, KECUALI:',
      options: [
        'Jumlah pohon biner berbeda dengan n node internal',
        'Jumlah cara memberi tanda kurung valid pada perkalian n+1 matriks',
        'Jumlah lintasan kisi Dyck yang tidak melewati diagonal',
        'Jumlah permutasi dari n elemen berbeda'
      ],
      correctAnswer: 3,
      explanation: 'Jumlah permutasi dari n elemen adalah n!, bukan Bilangan Catalan. Catalan menghitung struktur pohon biner, kurung valid, dan lintasan Dyck.'
    },
    {
      id: 'matdis-4-18',
      question: 'Derajad (order) dari relasi rekurensi a_n = 3 a_{n-1} - 4 a_{n-3} adalah:',
      options: ['3', '1', '2', '4'],
      correctAnswer: 0,
      explanation: 'Derajat relasi adalah selisih indeks terbesar dan terkecil yang terlibat: n - (n - 3) = 3 (membutuhkan 3 kondisi awal).'
    },
    {
      id: 'matdis-4-19',
      question: 'Mengapa algoritma rekursif naif untuk Fibonacci (tanpa memoisasi/DP) memiliki kompleksitas waktu eksponensial O(2^n)?',
      options: [
        'Karena pohon pemanggilan rekursifnya bercabang dua pada setiap level dan berulang kali menghitung submasalah yang sama secara redundan',
        'Karena menggunakan alokasi dinamis berlebih',
        'Karena ukuran input n tidak berkurang',
        'Karena terjadi infinite loop'
      ],
      correctAnswer: 0,
      explanation: 'Pohon rekursi Fibonacci T(n) = T(n-1) + T(n-2) memiliki 2 cabang di setiap simpul sehingga total node pemanggilan fungsi adalah ~ 2^n.'
    },
    {
      id: 'matdis-4-20',
      question: 'Berapakah nilai suku ke-4 barisan Fibonacci F_4 jika F_0 = 0, F_1 = 1, F_2 = 1, F_3 = 2?',
      options: ['3', '5', '4', '2'],
      correctAnswer: 0,
      explanation: 'F_4 = F_3 + F_2 = 2 + 1 = 3.'
    }
  ],

  // MODUL 5: TEORI GRAF, POHON (TREES) & APLIKASINYA (20 Soal)
  matdis_teori_graf_pohon: [
    {
      id: 'matdis-5-1',
      question: 'Secara formal, sebuah Graf G = (V, E) terdiri dari pasangan dua himpunan:',
      options: [
        'V (Himpunan simpul / vertex) dan E (Himpunan sisi / edge yang menghubungkan pasangan simpul)',
        'V (Variabel) dan E (Ekspresi)',
        'V (Vektor) dan E (Elemen)',
        'V (Nilai) dan E (Eror)'
      ],
      correctAnswer: 0,
      explanation: 'Struktur data graf terdiri dari verteks (titik simpul V) dan edge (garis sisi keterhubungan E).'
    },
    {
      id: 'matdis-5-2',
      question: 'Lemma Jabat Tangan (Handshaking Lemma) menyatakan bahwa pada sembarang graf tak-berarah G, jumlahan derajat seluruh simpul adalah:',
      options: [
        '2 * |E| (dua kali jumlah total sisi)',
        '|E|',
        '|V| * |E|',
        '|V| - 1'
      ],
      correctAnswer: 0,
      explanation: 'Karena setiap satu sisi menghubungkan tepat 2 simpul, sisi tersebut menyumbang tepat 1 derajat pada masing-masing simpul: ∑_{v ∈ V} deg(v) = 2 |E|.'
    },
    {
      id: 'matdis-5-3',
      question: 'Konsekuensi langsung dari Handshaking Lemma adalah pada sembarang graf tak-berarah:',
      options: [
        'Jumlah simpul yang berderajat GANJIL pasti selalu berjumlah GENAP',
        'Semua simpul harus berderajat genap',
        'Jumlah sisi harus berupa bilangan prima',
        'Graf tidak boleh memiliki siklus'
      ],
      correctAnswer: 0,
      explanation: 'Karena total derajat 2|E| selalu genap, maka kontribusi dari simpul-simpul berderajat ganjil harus berjumlah genap agar totalnya tetap genap.'
    },
    {
      id: 'matdis-5-4',
      question: 'Sebuah Lintasan Euler (Eulerian Path) adalah lintasan di dalam graf yang:',
      options: [
        'Melewati SETIAP SISI (edge) di dalam graf tepat satu kali',
        'Mengunjungi setiap simpul (vertex) tepat satu kali',
        'Memiliki bobot terkecil',
        'Menghubungkan simpul terjauh'
      ],
      correctAnswer: 0,
      explanation: 'Lintasan Euler melintasi setiap sisi tepat satu kali. Sirkuit Euler adalah lintasan Euler yang kembali ke simpul awal.'
    },
    {
      id: 'matdis-5-5',
      question: 'Sebuah graf terhubung memiliki Sirkuit Euler jika dan hanya jika:',
      options: [
        'SETIAP SIMPUL di dalam graf memiliki derajat GENAP',
        'Tepat dua simpul berderajat ganjil',
        'Graf tidak memiliki sisi ganda',
        'Jumlah simpul sama dengan jumlah sisi'
      ],
      correctAnswer: 0,
      explanation: 'Teorema Euler (1736): untuk bisa masuk dan keluar dari setiap simpul tanpa mengulang sisi dan kembali ke awal, derajat setiap simpul wajib genap.'
    },
    {
      id: 'matdis-5-6',
      question: 'Masalah Tujuh Jembatan Königsberg tidak memiliki sirkuit maupun lintasan Euler karena:',
      options: [
        'Keempat daratannya (simpul) semuanya memiliki derajat ganjil (3, 3, 3, 5)',
        'Jembatannya terbuat dari kayu',
        'Grafnya tidak terhubung',
        'Graf memiliki terlalu banyak sisi'
      ],
      correctAnswer: 0,
      explanation: 'Königsberg memiliki 4 simpul dan semuanya berderajat ganjil. Syarat lintasan Euler mensyaratkan maksimal hanya ada 0 atau 2 simpul berderajat ganjil.'
    },
    {
      id: 'matdis-5-7',
      question: 'Sebuah Lintasan Hamilton (Hamiltonian Path) adalah lintasan yang:',
      options: [
        'Mengunjungi SETIAP SIMPUL (vertex) di dalam graf tepat satu kali',
        'Melewati setiap sisi tepat satu kali',
        'Memiliki panjang n - 1',
        'Selalu berupa siklus tertutup'
      ],
      correctAnswer: 0,
      explanation: 'Berbeda dengan Euler (fokus pada sisi), Hamilton berfokus pada simpul: mengunjungi setiap simpul tepat satu kali (dasar dari Traveling Salesperson Problem).'
    },
    {
      id: 'matdis-5-8',
      question: 'Sebuah Pohon (Tree) dalam matematika diskrit didefinisikan sebagai graf yang:',
      options: [
        'Terhubung dan tidak memiliki siklus (asiklik)',
        'Memiliki daun yang banyak',
        'Semua simpulnya berderajat 2',
        'Berarah dan berbobot negatif'
      ],
      correctAnswer: 0,
      explanation: 'Definisi pohon: graf sederhana tak-berarah yang terhubung dan tidak memuat siklus (connected acyclic graph).'
    },
    {
      id: 'matdis-5-9',
      question: 'Sebuah pohon dengan n buah simpul (verteks) SELALU memiliki jumlah sisi (edges) tepat sebanyak:',
      options: ['n - 1', 'n', 'n + 1', '2n'],
      correctAnswer: 0,
      explanation: 'Teorema fundamental pohon: pohon dengan n simpul selalu memiliki tepat |E| = n - 1 sisi.'
    },
    {
      id: 'matdis-5-10',
      question: 'Pohon Rentang Minimum (Minimum Spanning Tree - MST) dari graf berbobot adalah subgraf pohon yang merentang seluruh simpul dengan:',
      options: [
        'Total bobot sisi seminimal mungkin',
        'Jumlah sisi paling sedikit',
        'Jumlah daun paling banyak',
        'Diameter terpanjang'
      ],
      correctAnswer: 0,
      explanation: 'MST menghubungkan semua simpul dalam graf dengan jumlahan total bobot sisi terkecil, diselesaikan oleh Algoritma Kruskal atau Prim.'
    },
    {
      id: 'matdis-5-11',
      question: 'Dalam representasi Matriks Ketetanggaan (Adjacency Matrix) A untuk graf n simpul, elemen A_{ij} bernilai 1 jika:',
      options: [
        'Terdapat sisi yang menghubungkan simpul i dan simpul j',
        'Simpul i berjarak 1 dari akar',
        'Derajat simpul i adalah 1',
        'Simpul i sama dengan simpul j'
      ],
      correctAnswer: 0,
      explanation: 'Adjacency matrix berukuran n x n menyimpan 1 jika ada sisi antara simpul i dan j, serta 0 jika tidak terhubung langsung.'
    },
    {
      id: 'matdis-5-12',
      question: 'Jika A adalah matriks ketetanggaan graf, maka entri (A^k)_{ij} pada perpangkatan matriks ke-k merepresentasikan:',
      options: [
        'Banyaknya lintasan berbeda dengan panjang tepat k langkah dari simpul i ke simpul j',
        'Jarak terpendek dari i ke j',
        'Bobot total sisi',
        'Derajat simpul'
      ],
      correctAnswer: 0,
      explanation: 'Sifat elegan matriks graf: nilai (A^k)_{ij} menghitung total variasi jalan berbeda dengan panjang tepat k edge dari simpul i ke simpul j.'
    },
    {
      id: 'matdis-5-13',
      question: 'Sebuah Graf Planar adalah graf yang:',
      options: [
        'Dapat digambar pada bidang datar sedemikian sehingga tidak ada sisi-sisi yang saling berpotongan (bersilangan)',
        'Hanya memiliki 3 simpul',
        'Semua sisinya memiliki panjang yang sama',
        'Tidak memiliki simpul ganjil'
      ],
      correctAnswer: 0,
      explanation: 'Graf planar dapat dibentangkan pada bidang 2D tanpa ada sisi yang bertumpuk/bersilangan di luar simpul ujungnya.'
    },
    {
      id: 'matdis-5-14',
      question: 'Rumus Karakteristik Euler untuk sembarang graf terhubung planar dengan v simpul, e sisi, dan r wilayah (faces/regions) adalah:',
      options: ['v - e + r = 2', 'v + e + r = 2', 'v - e - r = 0', 'v * e = r'],
      correctAnswer: 0,
      explanation: 'Rumus polihedron Euler: v - e + r = 2.'
    },
    {
      id: 'matdis-5-15',
      question: 'Teorema Empat Warna (Four Color Theorem) menyatakan bahwa setiap peta geografis (graf planar) dapat diwarnai sedemikian sehingga:',
      options: [
        'Tidak ada dua wilayah bersebelahan yang memiliki warna sama, cukup menggunakan maksimal 4 warna',
        'Semua wilayah berwarna sama',
        'Dibutuhkan minimal 5 warna',
        'Hanya berlaku untuk benua Amerika'
      ],
      correctAnswer: 0,
      explanation: 'Four Color Theorem dibuktikan dengan bantuan komputer pada tahun 1976 oleh Appel dan Haken: sembarang graf planar dapat diwarnai simpulnya dengan chromatic number χ(G) <= 4.'
    },
    {
      id: 'matdis-5-16',
      question: 'Graf Lengkap K_n dengan n simpul (di mana setiap pasangan simpul terhubung oleh sebuah sisi) memiliki jumlah sisi sebanyak:',
      options: ['n(n - 1) / 2', 'n^2', 'n - 1', 'n!'],
      correctAnswer: 0,
      explanation: 'Setiap pasang simpul dipilih dari n simpul tanpa urutan: C(n, 2) = n(n - 1) / 2.'
    },
    {
      id: 'matdis-5-17',
      question: 'Sebuah Graf Bipartit adalah graf yang himpunan simpulnya dapat dipartisi menjadi dua himpunan saling lepas V_1 dan V_2 sedemikian sehingga:',
      options: [
        'Setiap sisi hanya menghubungkan simpul di V_1 dengan simpul di V_2 (tidak ada sisi di dalam kelompok yang sama)',
        'Semua simpul memiliki 2 sisi',
        'Graf terbelah menjadi 2 komponen',
        'Graf tidak memiliki daun'
      ],
      correctAnswer: 0,
      explanation: 'Graf bipartit hanya membolehkan relasi antar-dua kelompok, tanpa ada relasi intra-kelompok. Cirinya: graf tidak memuat siklus dengan panjang ganjil.'
    },
    {
      id: 'matdis-5-18',
      question: 'Berapakah ketinggian minimum (height) dari pohon biner seimbang dengan n simpul?',
      options: ['⌈log_2 (n + 1)⌉ - 1 ∈ Θ(log n)', 'n / 2', 'n - 1', '√n'],
      correctAnswer: 0,
      explanation: 'Pohon biner seimbang menggandakan kapasitas di tiap level, sehingga tingginya berorde logaritmik O(log n), kunci efisiensi AVL Tree dan Red-Black Tree.'
    },
    {
      id: 'matdis-5-19',
      question: 'Algoritma Breadth-First Search (BFS) menjelajahi graf secara level demi level menggunakan struktur data antrean:',
      options: ['Queue (FIFO)', 'Stack (LIFO)', 'Priority Queue', 'Array statis'],
      correctAnswer: 0,
      explanation: 'BFS menggunakan Queue (First In First Out) untuk memproses simpul-simpul pada kedalaman yang sama sebelum turun ke kedalaman berikutnya.'
    },
    {
      id: 'matdis-5-20',
      question: 'Algoritma Depth-First Search (DFS) menjelajahi graf sedalam mungkin sebelum melakukan penelusuran balik (backtracking) menggunakan struktur data:',
      options: ['Stack (LIFO) atau rekursi call stack', 'Queue (FIFO)', 'Deque', 'Hash Map'],
      correctAnswer: 0,
      explanation: 'DFS menggunakan Stack (Last In First Out) secara eksplisit atau melalui tumpukan fungsi rekursif (call stack) untuk menyusuri satu cabang hingga buntu.'
    }
  ]
};
