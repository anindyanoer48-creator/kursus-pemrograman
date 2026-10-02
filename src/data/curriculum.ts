import { MODULE_QUIZZES } from './quizzes';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SectionContent {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  content: string; // rich markdown with KaTeX markers or formatted sections
  codeSnippet?: {
    language: string;
    code: string;
    explanation: string;
  };
  keyTakeaways: string[];
}

export interface ModuleData {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  iconName: string;
  sections: SectionContent[];
  quiz: QuizQuestion[];
}

export const MODULES: ModuleData[] = [
  {
    id: 'fondasi',
    number: 1,
    title: 'Fondasi Analisis Algoritma',
    shortDesc: 'Pahami mengapa analisis kompleksitas dibutuhkan, konsep ukuran input (n), operasi dasar, serta skenario best/worst/average case.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-pengantar',
        title: '1.1 Mengapa Kita Menganalisis Kompleksitas?',
        summary: 'Mengapa waktu stopwatch bukan ukuran yang valid dan bagaimana mengukur efisiensi secara objektif terlepas dari perangkat keras.',
        readTime: '6 menit',
        keyTakeaways: [
          'Waktu eksekusi riil (detik/milidetik) dipengaruhi spesifikasi prosesor, compiler, OS, dan beban sistem, sehingga tidak objektif.',
          'Analisis kompleksitas mengukur pertumbuhan jumlah operasi terhadap ukuran input (n).',
          'Terdapat dua dimensi utama: Kompleksitas Waktu (Time Complexity) dan Kompleksitas Ruang/Memori (Space Complexity).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Contoh: Menghitung jumlah elemen 1 sampai n
// Cara A: Pendekatan Iteratif
long long hitungA(int n) {
    long long sum = 0;              // 1 kali
    for (int i = 1; i <= n; i++) {   // n kali loop
        sum += i;                   // operasi dasar dilakukan n kali
    }
    return sum;
}

// Cara B: Pendekatan Rumus Tertutup (Gauss)
long long hitungB(int n) {
    return (long long)n * (n + 1) / 2; // 1 kali operasi perkalian & pembagian!
}`,
          explanation: 'Pada Cara A, jika n bernilai 1.000.000.000, prosesor butuh 1 miliar iterasi. Pada Cara B, berapapun besarnya n, operasinya selesai dalam waktu konstan O(1).'
        },
        content: `### Mengapa Mengukur Waktu dengan Stopwatch Sering Menyesatkan?
Ketika seorang insinyur ingin mengetahui performa kodenya, dorongan pertama seringkali adalah mencatat waktu nyata:
\`\`\`cpp
auto start = std::chrono::high_resolution_clock::now();
jalankanAlgoritma();
auto finish = std::chrono::high_resolution_clock::now();
\`\`\`
Meskipun pengujian empiris (*benchmarking*) ini berguna untuk tuning sistem spesifik, metode ini **gagal total** dijadikan ukuran ilmiah efisiensi algoritma karena variabel-variabel pengganggu berikut:

1. **Kecepatan Clock & Arsitektur CPU**:
   * Prosesor server dengan clock 4.5 GHz akan menjalankan algoritma yang buruk lebih cepat daripada smartwatch hemat daya dengan clock 1.0 GHz yang menjalankan algoritma efisien.
   * Fitur seperti *Dynamic Voltage and Frequency Scaling* (Intel Turbo Boost / AMD Precision Boost) mengubah kecepatan clock secara dinamis setiap milidetik tergantung suhu chip.
2. **Hierarki Cache Memori (L1, L2, L3 vs RAM)**:
   * Mengakses data di L1 Cache hanya membutuhkan waktu sekitar 1 nanodetik (4 siklus clock).
   * Terjadinya *Cache Miss* yang memaksa CPU mengambil data ke RAM utama membutuhkan waktu 50 s.d. 100 nanodetik (~200 siklus clock).
3. **Multitasking Sistem Operasi (OS Scheduling)**:
   * Thread program Anda sewaktu-waktu dapat di-preempt (dihentikan sementara) oleh OS scheduler untuk memberi jalan pada background service, update antivirus, atau driver input.
4. **Optimasi Kompilator (Compiler Flags)**:
   * Kompilator modern seperti GCC atau Clang dengan flag \`-O3\` dapat melakukan *loop unrolling*, *vectorization SIMD*, dan *constant folding* yang merombak total instruksi biner.
5. **Garbage Collection (GC Pauses)**:
   * Pada bahasa seperti Java, Python, Go, atau JavaScript, runtime sewaktu-waktu membekukan thread eksekusi (*Stop-The-World pause*) untuk membersihkan memori.

---

### Solusi Ilmiah: Menghitung Frekuensi Operasi Dasar
Ilmuwan komputer membutuhkan ukuran yang **independen dari perangkat keras, bahasa pemrograman, dan lingkungan operasi**.
Solusinya adalah menghitung **jumlah operasi dasar (Basic Operation) sebagai fungsi matematis terhadap ukuran input $n$**, dinotasikan sebagai $T(n)$.

### Perbandingan Laju Pertumbuhan pada CPU 1 GHz ($10^9$ Operasi per Detik)
Tabel berikut menunjukkan seberapa dramatis perbedaan kelas kompleksitas waktu ketika ukuran masukan $n$ meningkat:

| Kompleksitas | $n = 10$ | $n = 50$ | $n = 1.000$ | $n = 1.000.000$ ($10^6$) |
| :--- | :--- | :--- | :--- | :--- |
| **$O(1)$** | 1 ns | 1 ns | 1 ns | 1 ns (Instan) |
| **$O(\\log_2 n)$** | 3.3 ns | 5.6 ns | 10 ns | 20 ns (Instan) |
| **$O(n)$** | 10 ns | 50 ns | 1 $\\mu$s | 1 ms (Sangat Cepat) |
| **$O(n \\log_2 n)$** | 33 ns | 282 ns | 10 $\\mu$s | 20 ms (Responsif) |
| **$O(n^2)$** | 100 ns | 2.5 $\\mu$s | 1 ms | **16.7 Menit** |
| **$O(n^3)$** | 1 $\\mu$s | 125 $\\mu$s | 1 Detik | **31.7 Tahun!** |
| **$O(2^n)$** | 1 $\\mu$s | **35.7 Hari** | **$10^{290}$ Abad!** | Mustahil dihitung |
| **$O(n!)$** | 3.6 ms | **$10^{51}$ Abad!** | Mustahil dihitung | Melebihi usia galaksi |

> Perhatikan lompatan dari $O(n \\log n)$ ke $O(n^2)$ saat $n = 1.000.000$: dari **20 milidetik** menjadi **16.7 menit**. Lompatan inilah yang menentukan apakah sebuah sistem berskala besar mampu bertahan atau tumbang.

---

### Dua Dimensi: Time Complexity vs Space Complexity
1. **Kompleksitas Waktu (Time Complexity)**:
   * Mengukur seberapa cepat waktu komputasi tumbuh seiring membesarnya ukuran masukan data $n$.
2. **Kompleksitas Ruang (Space Complexity)**:
   * Mengukur seberapa banyak memori yang dialokasikan oleh algoritma.
   * **Total Space Complexity** = Memory Masukan (Input Space) + Memori Tambahan Sementara (Auxiliary Space).
   * **Auxiliary Space**: Memori di luar input masukan yang dialokasikan selama eksekusi (seperti variabel lokal, alokasi array pembantu, dan *stack frames* pemanggilan rekursif).`
      },
      {
        id: '1-2-input-dan-basic-operation',
        title: '1.2 Ukuran Masukan (n) & Operasi Dasar (Basic Operation)',
        summary: 'Menentukan parameter ukuran input yang tepat dan mengidentifikasi operasi paling krusial yang menentukan performa.',
        readTime: '7 menit',
        keyTakeaways: [
          'Ukuran masukan (n) adalah parameter kuantitatif yang merepresentasikan skala data.',
          'Operasi dasar (basic operation) adalah operasi dalam algoritma yang paling banyak dieksekusi atau paling memakan waktu.',
          'Total waktu eksekusi T(n) proporsional terhadap frekuensi eksekusi operasi dasar: T(n) ≈ c_op × C(n).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Mencari elemen maksimum dalam array berukuran n
int cariMaksimum(int arr[], int n) {
    int maxVal = arr[0];
    
    // Operasi dasar: Perbandingan (arr[i] > maxVal)
    // Loop berjalan dari i = 1 sampai n - 1 (sebanyak n - 1 kali)
    for (int i = 1; i < n; i++) {
        if (arr[i] > maxVal) { // <-- BASIC OPERATION
            maxVal = arr[i];
        }
    }
    return maxVal;
}`,
          explanation: 'Ukuran masukan n adalah panjang array. Operasi dasarnya adalah perbandingan elemen. Operasi ini dieksekusi tepat C(n) = n - 1 kali.'
        },
        content: `### 1. Apa itu Ukuran Masukan (Input Size $n$)?
Menentukan parameter masukan yang merefleksikan skala persoalan secara akurat adalah langkah awal analisis algoritma:

* **Struktur Data Larik (Array / List / String)**:
  $n$ adalah banyak elemen atau panjang string ($n = \\text{length}$).
* **Matriks Dua Dimensi**:
  Jika matriks berukuran $n \\times n$ (persegi), $n$ adalah dimensi baris/kolom. Jika matriks berukuran $r \\times c$, ukurannya ditentukan oleh total sel $N = r \\cdot c$.
* **Struktur Data Graf**:
  Graf direpresentasikan oleh dua parameter berbeda:
  1. Jumlah Simpul (Vertex): $|V|$
  2. Jumlah Busur (Edge): $|E|$
  Contoh: Algoritma penelusuran Breadth-First Search (BFS) memiliki kompleksitas $\\Theta(|V| + |E|)$.
* **Teori Bilangan & Kriptografi (PENTING)**:
  Jika algoritma menerima masukan sebuah bilangan bulat besar $N$ (misalnya kunci RSA 2048-bit), **ukuran masukan $n$ BUKAN nilai $N$**, melainkan **panjang representasi biner (jumlah bit)**:
  $$b = \\lfloor \\log_2 N \\rfloor + 1$$
  *Wawasan Krusial*: Algoritma uji prima naif yang memeriksa pembagi sampai $\\sqrt{N}$ sering disangka berjalan dalam waktu sublinear $O(\\sqrt{N})$. Padahal, dinyatakan dalam ukuran input bit $b$, kompleksitasnya adalah:
  $$O(\\sqrt{N}) = O(\\sqrt{2^b}) = O((2^b)^{1/2}) = O(2^{b/2})$$
  Ini adalah algoritma **eksponensial** terhadap ukuran input bit (*pseudo-polynomial time*)!

---

### 2. Apa itu Operasi Dasar (Basic Operation)?
Sebuah algoritma terdiri dari beragam instruksi mesin: inisialisasi variabel counter, pengecekan kondisi perulangan, increment indeks, perbandingan nilai, dan alokasi memori.

Teori komputasi membuktikan bahwa kita tidak perlu menjumlahkan seluruh instruksi mikro tersebut. Waktu total eksekusi $T(n)$ berbanding lurus dengan **frekuensi eksekusi operasi yang terletak di perulangan terdalam (*innermost loop*)**:

$$T(n) \\approx c_{op} \\cdot C(n)$$

di mana:
* $c_{op}$ adalah konstanta waktu fisik untuk mengeksekusi 1 kali operasi dasar pada hardware tertentu.
* $C(n)$ adalah berapa kali operasi dasar tersebut dieksekusi untuk masukan berukuran $n$.

### Tabel Operasi Dasar pada Algoritma Klasik

| Algoritma | Operasi Dasar | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Linear Search** | Perbandingan kesetaraan (\`arr[i] == target\`) | Berada di loop terdalam dan menentukan apakah pencarian selesai |
| **Binary Search** | Perbandingan nilai tengah (\`arr[mid] < target\`) | Membagi ruang pencarian menjadi setengah pada setiap langkah |
| **Bubble / Selection Sort** | Perbandingan dua elemen (\`arr[j] > arr[j+1]\`) | Dieksekusi pada setiap pasangan elemen dalam nested loop |
| **Perkalian Matriks** | Operasi perkalian angka (\`A[i][k] * B[k][j]\`) | Operasi aritmatika floating point di innermost loop 3 tingkat |
| **Faktorial Rekursif** | Operasi perkalian integer (\`n * fact(n-1)\`) | Dijalankan pada setiap tahap pengembalian fungsi rekursif |`
      },
      {
        id: '1-3-tiga-skenario-analisis',
        title: '1.3 Tiga Skenario: Best-Case, Worst-Case, & Average-Case',
        summary: 'Pahami perbedaan ketika performa algoritma tidak hanya bergantung pada ukuran n, tetapi juga susunan data masukan.',
        readTime: '8 menit',
        keyTakeaways: [
          'Best-Case T_min(n): Performa algoritma pada susunan data masukan yang paling menguntungkan.',
          'Worst-Case T_max(n): Jaminan batas atas terburuk algoritma. Ini adalah analisis paling penting dalam ilmu komputer.',
          'Average-Case T_avg(n): Ekspektasi rata-rata jumlah operasi dengan memperhitungkan distribusi probabilitas kemunculan data.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Algoritma Sequential Search (Pencarian Berurutan)
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) { // Operasi dasar: perbandingan
            return i; // Ditemukan di indeks i
        }
    }
    return -1; // Tidak ditemukan
}`,
          explanation: 'Best-case: target berada di arr[0] (1 kali cek). Worst-case: target di arr[n-1] atau tidak ada (n kali cek). Average-case: target di tengah-tengah (rata-rata (n+1)/2 kali cek).'
        },
        content: `### Mengapa Dibutuhkan Kasus Analisis yang Berbeda?
Pada algoritma seperti perkalian matriks, jumlah perkalian yang dilakukan selalu persis sama terlepas dari berapa pun nilai angka di dalam matriks. Namun pada algoritma pencarian atau pengurutan, jumlah langkah sangat dipengaruhi oleh **bagaimana data tersusun (*input sensitivity*)**.

Oleh karena itu, ilmuwan komputer membagi analisis menjadi tiga skenario formal:

---

### 1. Best-Case Analysis ($T_{min}(n)$)
Adalah jumlah operasi dasar paling sedikit di antara seluruh kemungkinan masukan berukuran $n$:
* Pada **Sequential Search**: Terjadi jika elemen yang dicari berada di indeks paling awal (\`arr[0]\`).
  $$C_{best}(n) = 1 \\implies \\Theta(1)$$
* Pada **Insertion Sort**: Terjadi jika array masukan sudah terurut rapi dari kecil ke besar. Setiap elemen hanya dibandingkan 1 kali dengan elemen sebelumnya.
  $$C_{best}(n) = n - 1 \\implies \\Theta(n)$$
* *Catatan Kritis*: Best-case jarang dijadikan tolok ukur desain perangkat lunak karena memberi rasa aman palsu (*false sense of security*). Mengasumsikan kondisi terbaik hampir selalu berujung kegagalan sistem pada beban produksi.

---

### 2. Worst-Case Analysis ($T_{max}(n)$)
Adalah batas atas operasi dasar paling banyak di antara seluruh kemungkinan masukan berukuran $n$:
* Pada **Sequential Search**: Terjadi jika target berada di posisi terakhir (\`arr[n-1]\`) atau **sama sekali tidak ada** dalam array.
  $$C_{worst}(n) = n \\implies \\Theta(n)$$
* Pada **Insertion Sort**: Terjadi jika array masukan terurut terbalik (descending). Setiap elemen harus digeser melewati seluruh elemen sebelumnya.
  $$C_{worst}(n) = \\sum_{i=1}^{n-1} i = \\frac{n(n-1)}{2} \\implies \\Theta(n^2)$$
* **Mengapa Worst-Case Menjadi Standar Acuan Industri?**
  1. **Jaminan Mutlak (Upper Bound Guarantee)**: Algoritma dijamin 100% tidak akan pernah berjalan lebih lambat dari nilai ini.
  2. **Misi Kritis & Keselamatan Jiwa**: Pada sistem navigasi pesawat terbang, perangkat medis pacu jantung, atau transaksi bursa efek, waktu tanggap terburuk menentukan kegagalan fatal.
  3. **Keamanan Siber (Anti DoS)**: Penyerang siber sengaja menyusun data terburuk untuk memicu *Algorithmic Complexity Attack* (misal mengirimkan string yang memicu backtracking eksponensial pada regex parser).

---

### 3. Average-Case Analysis ($T_{avg}(n)$)
Adalah nilai ekspektasi statistik matematis dari jumlah operasi dasar dengan memperhitungkan distribusi probabilitas kemunculan input.

#### Penurunan Matematis Rata-rata Sequential Search:
Misalkan:
* Probabilitas target ditemukan di dalam array adalah $p$ ($0 \\le p \\le 1$).
* Jika elemen ada, elemen tersebut memiliki probabilitas seragam yang sama untuk berada di setiap indeks $1, 2, \\dots, n$, yaitu masing-masing sebesar $\\frac{p}{n}$.
* Probabilitas elemen **tidak ada** adalah $(1 - p)$, yang membutuhkan tepat $n$ kali perbandingan.

Ekspektasi matematisnya adalah:
$$C_{avg}(n) = \\sum_{i=1}^{n} \\left( i \\cdot \\frac{p}{n} \\right) + n \\cdot (1 - p)$$
Keluarkan faktor $\\frac{p}{n}$:
$$C_{avg}(n) = \\frac{p}{n} \\sum_{i=1}^{n} i + n(1 - p)$$
Gunakan rumus Gauss $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$:
$$C_{avg}(n) = \\frac{p}{n} \\cdot \\frac{n(n+1)}{2} + n(1 - p) = \\frac{p(n+1)}{2} + n(1 - p)$$

**Kasus Khusus**:
1. Jika target **pasti ada** ($p = 1$):
   $$C_{avg}(n) = \\frac{1(n+1)}{2} + n(0) = \\frac{n + 1}{2} \\approx \\frac{n}{2}$$
2. Jika kemungkinan ada sebesar 50% ($p = 0.5$):
   $$C_{avg}(n) = \\frac{0.5(n+1)}{2} + 0.5n = \\frac{n+1}{4} + \\frac{2n}{4} = \\frac{3n + 1}{4} \\approx 0.75n$$

Secara asimptotik, konstanta pecahan $1/2$ atau $3/4$ diabaikan, sehingga Average-Case Sequential Search tetap berada di kelas linear $\\Theta(n)$.`
      },
      {
        id: '1-4-detail-krusial',
        title: '1.4 Detail Krusial: Jebakan Konstanta, Amortized Analysis Dasar, dan Miskonsepsi Big-O vs Worst-Case',
        summary: 'Pahami jebakan-jebakan teoretis yang sering diabaikan: konstanta tersembunyi berukuran besar, perbedaan mendasar antara skenario masukan dan notasi asimptotik, serta cara kerja analisis teramortisasi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Big-O BUKAN sinonim dari Worst-Case: Big-O adalah batas matematis atas untuk skenario APAPUN (bisa ada Big-O untuk Best-Case!).',
          'Konstanta tersembunyi (c) & ambang n0: algoritma 1000n (O(n)) kalah cepat dibanding 0.01n² (O(n²)) untuk n < 100.000.',
          'Analisis Teramortisasi (Amortized Analysis) mengukur rata-rata biaya per operasi dalam deretan operasi panjang (contoh: dynamic array std::vector/list).',
          'Auxiliary Space hanya mengukur memori ekstra sementara, bukan memori input data asli.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Jebakan Konstanta: Kapan O(n²) mengalahkan O(n log n)?
// Algoritma A (Quick Sort): c1 * n log n (misal c1 = 3)
// Algoritma B (Insertion Sort): c2 * n^2 (misal c2 = 0.5)

// Pada n kecil (n <= 16):
// Insertion Sort: 0.5 * 16^2 = 128 operasi
// Quick Sort: 3 * 16 * 4 = 192 operasi + overhead rekursi!
// Karena itulah std::sort (Introsort) beralih ke Insertion Sort jika n <= 16.`,
          explanation: 'Meskipun O(n log n) superior secara asimptotik untuk n menuju tak hingga, pada n kecil konstanta overhead membuat algoritma kuadratik lebih gesit.'
        },
        content: `### 1. Miskonsepsi Fatal: Mengapa Big-O Bukan Sinonim Worst-Case?
Ini adalah salah satu kesalahan konseptual paling umum di kalangan mahasiswa dan insinyur pemula.
* **Worst-Case** adalah **keadaan susunan data masukan di dunia nyata** (misalnya array terurut terbalik).
* **Big-O** adalah **notasi kalkulus batas matematis atas (*upper bound*)** terhadap suatu fungsi.

Artinya, **setiap skenario masukan dapat dianalisis menggunakan Big-O, Big-Omega, maupun Big-Theta**:
* "Kasus terbaik (Best-Case) Linear Search adalah $O(1)$ dan $\\Theta(1)$." $\\implies$ **Benar 100%**.
* "Kasus terburuk (Worst-Case) Linear Search adalah $O(n)$ dan $\\Theta(n)$." $\\implies$ **Benar 100%**.
* "Kasus terburuk (Worst-Case) Linear Search adalah $O(n^2)$." $\\implies$ **Juga Benar secara matematis** (karena $n \\le n^2$), meskipun tidak ketat.

---

### 2. Jebakan Konstanta Tersembunyi ($c$) & Titik Potong Asimptotik ($n_0$)
Dalam notasi asimptotik, konstanta pengali diabaikan. Namun dalam rekayasa sistem nyata, konstanta ini menentukan hidup dan mati performa.

Bandingkan dua algoritma berikut:
* Algoritma $A$: $T_A(n) = 1.000 \\cdot n$ (berorde $O(n)$)
* Algoritma $B$: $T_B(n) = 0.01 \\cdot n^2$ (berorde $O(n^2)$)

Kapan Algoritma $A$ mulai mengalahkan Algoritma $B$?
$$1.000 n = 0.01 n^2 \\iff n = \\frac{1.000}{0.01} = 100.000$$

* Untuk masukan data **$n < 100.000$**, Algoritma $B$ yang berorde kuadratik $O(n^2)$ **jauh lebih cepat** dibanding Algoritma $A$ yang linear!
* Jika aplikasi Anda dirancang hanya memproses maksimal 10.000 rekaman, memilih Algoritma $A$ semata-mata karena label "Big-O linear" adalah keputusan arsitektur yang keliru.

---

### 3. Pengantar Analisis Teramortisasi (Amortized Analysis)
Dalam analisis worst-case standar, sebuah operasi dinilai buruk jika ia memiliki satu kejadian lambat. Namun dalam rangkaian operasi yang berulang, kejadian lambat tersebut mungkin **membayar lunas** efisiensi operasi-operasi berikutnya.

#### Tiga Metode Standar Analisis Teramortisasi:
1. **Metode Agregat (Aggregate Method)**: Menghitung total biaya worst-case dari urutan $n$ operasi $T_{total}(n)$, lalu membaginya rata: $T_{amortized} = \\frac{T_{total}(n)}{n}$.
2. **Metode Akuntansi (Accounting / Banker's Method)**: Menetapkan tarif buatan (kredit) pada operasi murah; surplus kredit disimpan di "bank" untuk membiayai operasi mahal di masa depan.
3. **Metode Potensial (Potential Method $\\Phi$)**: Menggunakan fungsi potensial fisika $\\Phi(D)$ yang merefleksikan energi tersimpan dalam struktur data.

#### Studi Kasus Klasik: Dynamic Array (\`std::vector\`, \`ArrayList\`, \`list\`)
Ketika array dinamis kehabisan kapasitas, array harus melakukan **ekspansi penggandaan (doubling strategy)**:
1. Alokasi blok memori baru berukuran $2 \\times$ ukuran lama.
2. Salin seluruh $n$ elemen lama ke blok baru $\\implies$ memakan waktu $O(n)$!
3. Hapus memori lama dan masukkan elemen baru.

Sekilas operasi \`push_back\` tampak lambat karena worst-case adalah $O(n)$. Tetapi mari hitung total biaya dari $n$ kali append berturut-turut menggunakan **Metode Agregat**:
* Operasi penyalinan elemen lama hanya terjadi pada ukuran perpangkatan dua:
  $$\\text{Biaya Salin} = 1 + 2 + 4 + 8 + 16 + \\dots + 2^{\\lfloor \\log_2 n \\rfloor}$$
* Berdasarkan deret geometri, jumlahan ini dijamin:
  $$\\sum_{i=0}^{\\lfloor \\log_2 n \\rfloor} 2^i < 2n$$
* Ditambah $n$ kali operasi penyisipan elemen baru bernilai 1:
  $$\\text{Total Biaya } n \\text{ Operasi} < 2n + n = 3n$$
* **Biaya Teramortisasi per Operasi**:
  $$\\text{Amortized Cost} = \\frac{3n}{n} = 3 = O(1)$$

Kesimpulan: Penambahan elemen ke array dinamis dijamin berbiaya **konstan teramortisasi $O(1)$**!`
      }
    ],
    quiz: MODULE_QUIZZES.fondasi
  },
  {
    id: 'asimptotik',
    number: 2,
    title: 'Notasi Asimptotik & Orde Pertumbuhan',
    shortDesc: 'Pelajari definisi matematis Big-O, Big-Omega, Big-Theta, hierarki laju pertumbuhan, serta aturan penyederhanaan aljabar asimptotik.',
    iconName: 'TrendingUp',
    sections: [
      {
        id: '2-1-definisi-formal',
        title: '2.1 Definisi Formal Big-O, Big-Omega, & Big-Theta',
        summary: 'Memahami definisi kalkulus batas atas (Big-O), batas bawah (Big-Omega), dan batas ketat (Big-Theta) dengan pembuktian c dan n0.',
        readTime: '9 menit',
        keyTakeaways: [
          'Big-O (O): Batas atas asimptotik (f(n) <= c * g(n) untuk semua n >= n0).',
          'Big-Omega (Ω): Batas bawah asimptotik (f(n) >= c * g(n) untuk semua n >= n0).',
          'Big-Theta (Θ): Batas ketat asimptotik (c1 * g(n) <= f(n) <= c2 * g(n) untuk semua n >= n0).',
          'Teorema Kunci: f(n) = Θ(g(n)) jika dan hanya jika f(n) = O(g(n)) DAN f(n) = Ω(g(n)).'
        ],
        content: `### Mengapa Menggunakan Notasi Asimptotik?
Dalam analisis algoritma, kita tertarik pada perilaku fungsi ketika ukuran masukan **$n$ menjadi sangat besar menuju tak hingga ($n \\to \\infty$)**.
Pada skala asimptotik ini:
1. Konstanta pengali tidak relevan (perbedaan $2n$ vs $5n$ tidak mengubah fakta bahwa keduanya tumbuh linear).
2. Suku bertaraf rendah (*lower-order terms*) dapat diabaikan. Contoh pada fungsi $f(n) = n^2 + 100n$:
   * Saat $n = 10$: $n^2 = 100$, sedangkan $100n = 1.000$ (suku $100n$ mendominasi).
   * Saat $n = 1.000.000$: $n^2 = 10^{12}$, sedangkan $100n = 10^8$ (suku $n^2$ menyumbang $99.99\%$ nilai total).

---

### 1. Notasi Big-O ($O$) — Batas Atas Asimptotik (Asymptotic Upper Bound)
> **Definisi Formal**:
> Kita menulis $f(n) = O(g(n))$ jika terdapat dua konstanta positif $c > 0$ dan $n_0 \\ge 1$ sedemikian sehingga:
> $$0 \\le f(n) \\le c \\cdot g(n), \\quad \\forall n \\ge n_0$$

Pasangan konstanta $(c, n_0)$ disebut sebagai **saksi (*witness*)** pembuktian.

#### Prosedur Pembuktian Formal:
Buktikan bahwa $f(n) = 3n^2 + 5n + 7 = O(n^2)$.
* *Strategi*: Gantikan setiap suku derajat rendah dengan suku derajat tertinggi ($n^2$) untuk $n \\ge 1$:
  Untuk setiap $n \\ge 1$:
  $$5n \\le 5n^2$$
  $$7 \\le 7n^2$$
* Jumlahkan pertidaksamaan:
  $$3n^2 + 5n + 7 \\le 3n^2 + 5n^2 + 7n^2 = (3 + 5 + 7)n^2 = 15n^2$$
* Kita menemukan saksi: $c = 15$ dan $n_0 = 1$.
* Terbukti bahwa untuk semua $n \\ge 1$, $3n^2 + 5n + 7 \\le 15n^2$. Maka $3n^2 + 5n + 7 \\in O(n^2)$. $\\blacksquare$

---

### 2. Notasi Big-Omega ($\\Omega$) — Batas Bawah Asimptotik (Asymptotic Lower Bound)
> **Definisi Formal**:
> Kita menulis $f(n) = \\Omega(g(n))$ jika terdapat dua konstanta positif $c > 0$ dan $n_0 \\ge 1$ sedemikian sehingga:
> $$0 \\le c \\cdot g(n) \\le f(n), \\quad \\forall n \\ge n_0$$

#### Prosedur Pembuktian Formal:
Buktikan bahwa $f(n) = 5n^2 - 3n = \\Omega(n^2)$.
* *Strategi*: Kurangi suku derajat tinggi dengan suku pengurang yang terkontrol:
  Kita ingin $5n^2 - 3n \\ge c \\cdot n^2$.
  Perhatikan bahwa untuk $n \\ge 2$:
  $$3n \\le \\frac{3}{2} n^2 = 1.5 n^2$$
* Maka:
  $$5n^2 - 3n \\ge 5n^2 - 1.5n^2 = 3.5n^2$$
* Pilih $c = 3.5$ dan $n_0 = 2$.
* Terbukti bahwa untuk semua $n \\ge 2$, $5n^2 - 3n \\ge 3.5n^2$. Maka $5n^2 - 3n \\in \\Omega(n^2)$. $\\blacksquare$

---

### 3. Notasi Big-Theta ($\\Theta$) — Batas Ketat Asimptotik (Tight Bound)
> **Definisi Formal**:
> Kita menulis $f(n) = \\Theta(g(n))$ jika terdapat tiga konstanta positif $c_1, c_2 > 0$ dan $n_0 \\ge 1$ sedemikian sehingga:
> $$0 \\le c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n), \\quad \\forall n \\ge n_0$$

Fungsi $f(n)$ diapit di antara kurva batas bawah $c_1 g(n)$ dan kurva batas atas $c_2 g(n)$.

#### Teorema Kesetaraan Mutlak:
$$f(n) = \\Theta(g(n)) \\iff f(n) = O(g(n)) \\quad \\text{DAN} \\quad f(n) = \\Omega(g(n))$$`
      },
      {
        id: '2-2-hierarki-orde',
        title: '2.2 Hierarki & Urutan Orde Pertumbuhan',
        summary: 'Perbandingan laju pertumbuhan dari yang paling cepat (O(1)) hingga paling lambat/bencana (O(n!)).',
        readTime: '8 menit',
        keyTakeaways: [
          'Hierarki standar: O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2^n) < O(n!).',
          'Algoritma dengan kompleksitas eksponensial (2^n) dan faktorial (n!) tidak dapat dijalankan pada n berukuran sedang (n > 50).',
          'Algoritma logaritmik (log n) sangat efisien; untuk n = 1.000.000.000, log2(n) hanya sekitar 30 operasi.'
        ],
        content: `### Tangga Hierarki Kelas Kompleksitas
Berikut adalah urutan standar laju pertumbuhan fungsi dari yang paling efisien hingga yang paling tidak praktis:

| Notasi | Nama Kelas | Contoh Algoritma | Nilai saat $n = 10^6$ (1 Juta) |
| :--- | :--- | :--- | :--- |
| $\\Theta(1)$ | **Konstan** | Akses array by index, Push/Pop stack | 1 operasi |
| $\\Theta(\\log \\log n)$ | **Ganda Logaritmik** | Interpolation Search (uniform), Operasi Van Emde Boas | $\\approx 5$ operasi |
| $\\Theta(\\log n)$ | **Logaritmik** | Binary Search, Lookup pada Red-Black Tree | $\\approx 20$ operasi |
| $\\Theta(\\sqrt{n})$ | **Sub-linear (Akar)** | Primality Test naif, Baby-step Giant-step | $1.000$ operasi |
| $\\Theta(n)$ | **Linear** | Linear Search, Mencari nilai Min/Max, Count | $1.000.000$ operasi |
| $\\Theta(n \\log n)$ | **Linearithmik** | Merge Sort, Heap Sort, Quick Sort (average) | $\\approx 20.000.000$ operasi |
| $\\Theta(n^2)$ | **Kuadratik** | Bubble Sort, Selection Sort, Insertion Sort | $10^{12}$ (1 Triliun operasi) |
| $\\Theta(n^3)$ | **Kubik** | Perkalian matriks standar, Floyd-Warshall | $10^{18}$ operasi |
| $\\Theta(2^n)$ | **Eksponensial** | Subset Generation, Naive Tower of Hanoi | Mustahil dihitung |
| $\\Theta(n!)$ | **Faktorial** | Permutasi semua rute TSP Brute Force | Mustahil dihitung |

---

### Batas Traktabilitas (P vs NP-Hard)
Dalam teori komputasi:
* Algoritma dengan kompleksitas **polinomial** ($O(n^c)$ untuk suatu konstanta $c$) dikategorikan sebagai **Tractable (Dapat Dikerjakan secara Praktis)**.
* Algoritma dengan kompleksitas **super-polinomial / eksponensial** ($O(2^n)$, $O(n!)$) dikategorikan sebagai **Intractable (Tidak Praktis)** untuk ukuran data riil.

Sebagai ilustrasi praktis: jika $n = 60$, algoritma kuadratik $O(n^2)$ hanya memakan $3.600$ operasi mikrodetik. Namun algoritma eksponensial $O(2^n)$ membutuhkan $2^{60} \\approx 1.15 \\times 10^{18}$ operasi, yang pada prosesor 1 GHz menelan waktu **36.5 tahun tanpa henti**!`
      },
      {
        id: '2-3-aturan-aljabar-asimptotik',
        title: '2.3 Aturan Operasi & Limit Asimptotik',
        summary: 'Aturan penjumlahan, perkalian, eliminasi konstanta, serta penggunaan limit untuk membandingkan dua fungsi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Aturan Penjumlahan: O(f(n)) + O(g(n)) = O(max(f(n), g(n))). Ambil suku dengan pertumbuhan paling tinggi.',
          'Aturan Perkalian: O(f(n)) * O(g(n)) = O(f(n) * g(n)). Berlaku pada loop bersarang.',
          'Uji Limit: Lim (n->inf) f(n)/g(n) menentukan relasi asimptotik secara presisi tanpa mencari konstanta manual.'
        ],
        content: `### 1. Aturan Penjumlahan (Sum Rule)
Jika suatu program terdiri dari dua blok instruksi berurutan:
* Blok pertama memiliki waktu berjalan $T_1(n) = O(f(n))$
* Blok kedua memiliki waktu berjalan $T_2(n) = O(g(n))$
Maka total waktu eksekusi kedua blok berurutan ditentukan oleh suku yang bertumbuh paling cepat:

$$T_1(n) + T_2(n) = O(\\max(f(n), g(n)))$$

*Contoh Nyata*:
Jika sebuah modul membaca input $n$ data ($O(n)$) lalu mengurutkannya dengan Insertion Sort ($O(n^2)$) dan mencetak elemen terkecil ($O(1)$):
$$T(n) = O(n) + O(n^2) + O(1) = O(\\max(n, n^2, 1)) = O(n^2)$$

---

### 2. Aturan Perkalian (Product Rule)
Jika suatu operasi atau blok instruksi diulang di dalam sebuah struktur perulangan:
* Loop luar berulang sebanyak $O(f(n))$ kali
* Di setiap iterasi loop luar, dijalankan loop dalam sebanyak $O(g(n))$ kali
Maka total frekuensi operasi adalah hasil kali kedua fungsi:

$$T(n) = O(f(n)) \\times O(g(n)) = O(f(n) \\times g(n))$$

*Contoh*: Loop luar $n$ kali dan loop dalam $\\log_2 n$ kali $\\implies O(n \\log n)$.

---

### 3. Sifat Aljabar Relasi Asimptotik (Asymptotic Relational Properties)
Sama seperti relasi perbandingan bilangan real ($\le, \ge, =$):
1. **Refleksivitas (Reflexivity)**:
   * $f(n) = O(f(n))$
   * $f(n) = \\Omega(f(n))$
   * $f(n) = \\Theta(f(n))$
2. **Simetri (Symmetry)**:
   * $f(n) = \\Theta(g(n)) \\iff g(n) = \\Theta(f(n))$
3. **Simetri Transpose (Transpose Symmetry)**:
   * $f(n) = O(g(n)) \\iff g(n) = \\Omega(f(n))$
   * $f(n) = o(g(n)) \\iff g(n) = \\omega(f(n))$
4. **Transitivitas (Transitivity)**:
   * $f(n) = O(g(n)) \\land g(n) = O(h(n)) \\implies f(n) = O(h(n))$
   * $f(n) = \\Theta(g(n)) \\land g(n) = \\Theta(h(n)) \\implies f(n) = \\Theta(h(n))$

---

### 4. Metode Uji Limit Rasio (Ratio Limit Test) & Aturan L'Hôpital
Metode formal paling elegan dan pasti untuk membandingkan laju pertumbuhan dua fungsi $f(n)$ dan $g(n)$ adalah menghitung nilai limit rasionya saat $n \\to \\infty$:

$$L = \\lim_{n \\to \\infty} \\frac{f(n)}{g(n)}$$

| Nilai Limit $L$ | Makna Pertumbuhan | Kesimpulan Formal |
| :--- | :--- | :--- |
| **$L = 0$** | $f(n)$ tumbuh strictly lebih lambat dari $g(n)$ | $f(n) = O(g(n))$ dan $f(n) = o(g(n))$ |
| **$0 < L < \\infty$** | $f(n)$ dan $g(n)$ tumbuh dengan laju yang setara | $f(n) = \\Theta(g(n))$ |
| **$L = \\infty$** | $f(n)$ tumbuh strictly lebih cepat dari $g(n)$ | $f(n) = \\Omega(g(n))$ dan $f(n) = \\omega(g(n))$ |
| **Tidak Ada Limit** | Terjadi osilasi (misal $n(1 + \\sin n)$) | Uji limit gagal, gunakan definisi $(c, n_0)$ |

#### Teorema Aturan L'Hôpital:
Jika saat menghitung limit diperoleh bentuk tak tentu $\\left[\\frac{\\infty}{\\infty}\\right]$ atau $\\left[\\frac{0}{0}\\right]$, turunkan pembilang dan penyebut secara terpisah terhadap variabel $n$:
$$\\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} = \\lim_{n \\to \\infty} \\frac{f'(n)}{g'(n)}$$

#### Studi Kasus Pembuktian Limit 1: Buktikan $\\ln n = o(\\sqrt{n})$
Bandingkan $f(n) = \\ln n$ dengan $g(n) = \\sqrt{n} = n^{1/2}$:
$$L = \\lim_{n \\to \\infty} \\frac{\\ln n}{n^{1/2}} \\quad \\left[\\frac{\\infty}{\\infty}\\right]$$
Turunkan kedua fungsi:
* $f'(n) = \\frac{d}{dn}(\\ln n) = \\frac{1}{n}$
* $g'(n) = \\frac{d}{dn}(n^{1/2}) = \\frac{1}{2} n^{-1/2} = \\frac{1}{2\\sqrt{n}}$

Substitusikan ke limit:
$$L = \\lim_{n \\to \\infty} \\frac{1/n}{1/(2\\sqrt{n})} = \\lim_{n \\to \\infty} \\frac{2\\sqrt{n}}{n} = \\lim_{n \\to \\infty} \\frac{2}{\\sqrt{n}} = \\frac{2}{\\infty} = 0$$
*Kesimpulan*: Karena $L = 0$, terbukti secara kalkulus bahwa $\\mathbf{\\ln n = o(\\sqrt{n})}$ dan $\\mathbf{\\ln n = O(\\sqrt{n})}$. Logaritma selalu kalah dari fungsi akar!

#### Studi Kasus Pembuktian Limit 2: Buktikan $n^2 = o(2^n)$
Bandingkan $f(n) = n^2$ dengan $g(n) = 2^n$:
$$L = \\lim_{n \\to \\infty} \\frac{n^2}{2^n} \\quad \\left[\\frac{\\infty}{\\infty}\\right]$$
Terapkan L'Hôpital (ingat turunan $a^x$ adalah $a^x \\ln a$):
$$L = \\lim_{n \\to \\infty} \\frac{2n}{2^n \\ln 2} \\quad \\left[\\frac{\\infty}{\\infty}\\right]$$
Terapkan L'Hôpital untuk kedua kalinya:
$$L = \\lim_{n \\to \\infty} \\frac{2}{2^n (\\ln 2)^2} = \\frac{2}{\\infty} = 0$$
*Kesimpulan*: $n^2 = o(2^n)$. Berapa kali pun polinomial diturunkan, ia akhirnya menjadi konstanta, sedangkan eksponensial tetap eksponensial.`
      },
      {
        id: '2-4-detail-krusial',
        title: '2.4 Detail Krusial: Notasi Little-o, Little-omega, Basis Logaritma di Eksponen, dan Batas Polinomial vs Eksponensial',
        summary: 'Kupas tuntas detail notasi asimptotik tingkat lanjut: batasan ketat vs longgar (o dan ω), kapan basis logaritma tidak boleh diabaikan, dan pembuktian mengapa polinomial selalu kalah dari eksponensial.',
        readTime: '9 menit',
        keyTakeaways: [
          'Notasi Little-o (o): Batas atas yang strictly lebih lambat (lim f(n)/g(n) = 0), tidak mengizinkan laju pertumbuhan yang sama.',
          'Notasi Little-omega (ω): Batas bawah yang strictly lebih cepat (lim f(n)/g(n) = ∞).',
          'Basis logaritma TIDAK BOLEH diabaikan jika berada di eksponen: 2^(log₂ n) = n, sedangkan 2^(log₄ n) = √n ≠ n.',
          'Pembuktian Limit Polinomial vs Eksponensial: lim (n^k / c^n) = 0 untuk sembarang k > 0 dan c > 1.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Contoh Kasus Basis Logaritma pada Eksponen:
// Misalkan T1(n) = 2^(log2(n))  => T1(n) = n          => O(n)
// Misalkan T2(n) = 2^(log4(n))  => T2(n) = n^(log4(2)) => n^0.5 = O(sqrt(n))
// Kelas kompleksitasnya sangat berbeda drastis!`,
          explanation: 'Perubahan basis pada eksponen mengubah derajat polinomial hasil secara fundamental.'
        },
        content: `### 1. Perbedaan Notasi Formal: Big-O vs Little-o ($o$), Big-Omega vs Little-omega ($\\omega$)
Hubungan kelima notasi asimptotik dapat dianalogikan dengan relasi perbandingan matematika:
* $f(n) = O(g(n)) \\iff f(n) \\le g(n)$ (secara asimptotik)
* $f(n) = o(g(n)) \\iff f(n) < g(n)$ (secara ketat lebih kecil; $\\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} = 0$)
* $f(n) = \\Omega(g(n)) \\iff f(n) \\ge g(n)$ (secara asimptotik)
* $f(n) = \\omega(g(n)) \\iff f(n) > g(n)$ (secara ketat lebih besar; $\\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} = \\infty$)
* $f(n) = \\Theta(g(n)) \\iff f(n) = g(n)$ (secara asimptotik; $0 < \\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} < \\infty$)

*Contoh*:
* $2n = O(n)$ $\\implies$ **Benar**, tetapi $2n = o(n)$ $\\implies$ **Salah** (karena rasionya $2 \\ne 0$).
* $2n = o(n^2)$ $\\implies$ **Benar** (karena $\\lim \\frac{2n}{n^2} = \\lim \\frac{2}{n} = 0$).

### 2. Bahaya Mengabaikan Basis Logaritma pada Eksponen
Aturan bahwa "basis logaritma dapat diabaikan" **HANYA BERLAKU** jika logaritma bertindak sebagai faktor pengali skalar biasa:
$$\\log_2 n = \\frac{\\ln n}{\\ln 2} \\implies \\Theta(\\log n)$$
Namun jika berada di **posisi pangkat (eksponen)**, basis tidak boleh diabaikan!
$$2^{\\log_2 n} = n$$
$$2^{\\log_3 n} = n^{\\log_3 2} \\approx n^{0.631} \\ne n$$
$$2^{\\log_4 n} = n^{\\log_4 2} = n^{0.5} = \\sqrt{n} \\ne n$$

### 3. Polinomial vs Eksponensial: Pertarungan Asimptotik
Buktikan bahwa polinomial derajat berapa pun (misal $n^{1000}$) pasti akan disalip oleh fungsi eksponensial dengan basis sekecil apapun di atas 1 (misal $1.001^n$):
$$\\lim_{n \\to \\infty} \\frac{n^{1000}}{1.001^n}$$
Menerapkan Aturan L'Hôpital sebanyak 1000 kali berturut-turut:
$$\\lim_{n \\to \\infty} \\frac{1000!}{(1.001)^n \\cdot (\\ln 1.001)^{1000}} = \\frac{\\text{konstanta}}{\\infty} = 0$$
Artinya untuk $n$ yang sangat besar, $n^{1000} = o(1.001^n)$. Eksponensial selalu menang mutlak atas polinomial.

---

### 4. Jebakan & Salah Kaprah Fatal yang Sering Muncul di Ujian / Interview

#### Jebakan A: Membuang Konstanta pada Eksponen
Pada fungsi polinomial, konstanta pengali bisa dibuang: $O(5n^2) = O(n^2)$.
Namun **PADA EKSPONEN, KONSTANTA TIDAK BOLEH DIBUANG!**
$$2^{2n} = (2^2)^n = 4^n$$
Apakah $2^{2n} = O(2^n)$?
Mari uji limit rasionya:
$$\\lim_{n \\to \\infty} \\frac{2^{2n}}{2^n} = \\lim_{n \\to \\infty} 2^{2n - n} = \\lim_{n \\to \\infty} 2^n = \\infty$$
Karena limitnya $\\infty$, maka **$2^{2n} \\ne O(2^n)$**. Faktanya, $2^{2n} = \\omega(2^n)$! $4^n$ tumbuh jauh lebih dahsyat daripada $2^n$.

#### Jebakan B: Implikasi Eksponensial Tidak Berlaku
Jika $f(n) = O(g(n))$, apakah otomatis $2^{f(n)} = O(2^{g(n)})$?
**TIDAK BERLAKU!**
*Contoh Pembantah (Counterexample)*:
Pilih $f(n) = 2n$ dan $g(n) = n$.
Jelas bahwa $2n = O(n)$ (terbukti karena perbandingannya linear).
Namun ketika dipangkatkan:
$2^{f(n)} = 2^{2n} = 4^n$
$2^{g(n)} = 2^n$
Seperti yang telah dibuktikan pada Jebakan A, $4^n \\ne O(2^n)$!

#### Jebakan C: Big-O BUKAN Sinonim Worst-Case
Banyak mahasiswa keliru menganggap bahwa "Big-O artinya Worst Case, dan Big-Omega artinya Best Case".
**Ini adalah kekeliruan fatal!**
* **Best/Worst/Average Case** adalah **fungsi waktu** yang diukur berdasarkan konfigurasi data masukan: $T_{best}(n)$, $T_{worst}(n)$, $T_{avg}(n)$.
* **Big-O, Big-Omega, Big-Theta** adalah **alat ukur matematis (notasi batas)** yang bisa dikenakan ke FUNGSI MANAPUN.
* Contoh yang benar:
  * "Worst-case Insertion Sort adalah $\\Theta(n^2)$" (batas ketat untuk skenario terburuk).
  * "Best-case Insertion Sort adalah $\\Theta(n)$" (batas ketat untuk skenario terbaik).
  * "Best-case Linear Search adalah $O(1)$".
  * "Worst-case Linear Search adalah $\\Omega(n)$".`
      }
    ],
    quiz: MODULE_QUIZZES.asimptotik
  },
  {
    id: 'matematika',
    number: 3,
    title: 'Matematika Pendukung Analisis Algoritma',
    shortDesc: 'Kuasai rumus-rumus esensial: manipulasi notasi Sigma, deret aritmatika, deret kuadrat, sifat-sifat logaritma, serta eksponen.',
    iconName: 'Calculator',
    sections: [
      {
        id: '3-1-notasi-sigma',
        title: '3.1 Manipulasi Notasi Sigma (∑) & Deret Populer',
        summary: 'Kunci mutlak untuk menganalisis perulangan (loop): menghitung batas sigma dan membuktikan rumus deret.',
        readTime: '9 menit',
        keyTakeaways: [
          'Sigma mewakili akumulasi eksekusi loop dari indeks batas bawah (l) ke batas atas (u).',
          'Formula jumlah 1 dari l ke u: ∑_{i=l}^u 1 = u - l + 1.',
          'Deret Aritmatika (Gauss): ∑_{i=1}^n i = n(n+1)/2 = Θ(n²).',
          'Deret Kuadrat: ∑_{i=1}^n i² = n(n+1)(2n+1)/6 = Θ(n³).'
        ],
        content: `### Mengapa Notasi Sigma ($\\sum$) Begitu Penting?
Setiap kali Anda melihat perulangan \`for\` atau \`while\` pada algoritma iteratif, cara formal untuk menghitung frekuensi operasi dasarnya adalah dengan **notasi Sigma (penjumlahan)**.

Bentuk umum:
$$\\sum_{i = l}^{u} c$$
artinya indeks perulangan $i$ mulai dari $l$ (lower bound) sampai $u$ (upper bound), dan pada setiap iterasi ditambahkan nilai $c$.

---

### 1. Sifat-Sifat Linearitas Notasi Sigma
1. **Faktorisasi Konstanta**:
   $$\\sum_{i=l}^{u} c \\cdot a_i = c \\sum_{i=l}^{u} a_i$$
2. **Penjumlahan/Pengurangan Dua Suku**:
   $$\\sum_{i=l}^{u} (a_i \\pm b_i) = \\sum_{i=l}^{u} a_i \\pm \\sum_{i=l}^{u} b_i$$
3. **Pemisahan Rentang Penjumlahan**:
   $$\\sum_{i=l}^{u} a_i = \\sum_{i=l}^{m} a_i + \\sum_{i=m+1}^{u} a_i, \\quad (l \\le m < u)$$

---

### 2. Rumus-Rumus Deret Fundamental yang Wajib Dihafal

#### Rumus A: Penjumlahan Konstanta 1 (Jumlah Iterasi Loop Sederhana)
$$\\sum_{i=l}^{u} 1 = u - l + 1$$
*Contoh*: Loop \`for (int i = 0; i < n; i++)\` berjalan dari $i = 0$ sampai $n-1$:
$$\\sum_{i=0}^{n-1} 1 = (n - 1) - 0 + 1 = n$$

#### Rumus B: Deret Aritmatika (Penjumlahan Bilangan Bulat 1 s/d n)
$$\\sum_{i=1}^{n} i = 1 + 2 + 3 + \\dots + n = \\frac{n(n + 1)}{2} = \\frac{n^2 + n}{2} \\in \\Theta(n^2)$$
*Penerapan*: Nested loop segitiga (triangular), seperti pada Bubble Sort dan Selection Sort!

#### Rumus C: Deret Kuadrat
$$\\sum_{i=1}^{n} i^2 = 1^2 + 2^2 + \\dots + n^2 = \\frac{n(n + 1)(2n + 1)}{6} = \\frac{2n^3 + 3n^2 + n}{6} \\in \\Theta(n^3)$$

#### Rumus D: Deret Geometri Hingga
Untuk rasio $r \\ne 1$:
$$\\sum_{i=0}^{k} r^i = 1 + r + r^2 + \\dots + r^k = \\frac{r^{k+1} - 1}{r - 1}$$
*Penerapan*: Menghitung total node pada pohon rekursi pohon biner ($r = 2$):
$$\\sum_{i=0}^{k} 2^i = \\frac{2^{k+1} - 1}{2 - 1} = 2^{k+1} - 1 \\in \\Theta(2^k)$$

#### Rumus E: Deret Pangkat Tiga (Sum of Cubes)
$$\\sum_{i=1}^{n} i^3 = 1^3 + 2^3 + \\dots + n^3 = \\left(\\frac{n(n + 1)}{2}\\right)^2 = \\frac{n^2 (n+1)^2}{4} \\in \\Theta(n^4)$$
*Identitas Menakjubkan Nicomachus*: Jumlahan pangkat 3 tepat sama dengan kuadrat dari jumlahan pangkat 1: $\\sum i^3 = (\\sum i)^2$!

---

### 3. Teknik Lanjutan Manipulasi Sigma

#### A. Pergeseran Indeks (Index Shifting)
Seringkali indeks loop dimulai dari angka yang tidak biasa (misal $i = 3$). Lakukan substitusi variabel untuk mengembalikannya ke bentuk baku:
$$\\sum_{i=l}^{u} f(i) = \\sum_{j=0}^{u - l} f(j + l)$$
*Contoh*: Menghitung $\\sum_{i=3}^{n} (i - 2)$:
Misalkan $j = i - 3 \\implies i = j + 3$. Saat $i = 3 \\to j = 0$. Saat $i = n \\to j = n - 3$.
$$\\sum_{j=0}^{n-3} ((j + 3) - 2) = \\sum_{j=0}^{n-3} (j + 1) = \\sum_{k=1}^{n-2} k = \\frac{(n-2)(n-1)}{2}$$

#### B. Jumlahan Teleskopik (Telescoping Sum)
Jika suku di dalam sigma dapat diuraikan menjadi selisih dua elemen berurutan $(a_i - a_{i-1})$, semua suku tengah saling meniadakan (*cancel out*):
$$\\sum_{i=1}^{n} (a_i - a_{i-1}) = (a_1 - a_0) + (a_2 - a_1) + \\dots + (a_n - a_{n-1}) = a_n - a_0$$
*Contoh*: Analisis pembatalan fraksi:
$$\\sum_{i=1}^{n} \\frac{1}{i(i+1)} = \\sum_{i=1}^{n} \\left( \\frac{1}{i} - \\frac{1}{i+1} \\right) = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1} \\in \\Theta(1)$$

#### C. Deret Aritmatika-Geometri: Analisis Pembuatan Binary Heap $O(n)$
Mengapa pembuatan Binary Heap (*Build-Heap*) dari array acak membutuhkan waktu linear $O(n)$, padahal banyak orang menduga $O(n \\log n)$?
Tinggi heap adalah $h = \\lfloor \\log_2 n \\rfloor$. Node pada ketinggian $h$ berjumlah maksimal $\\lceil n / 2^{h+1} \\rceil$ dan membutuhkan operasi sift-down sebanyak $O(h)$:
$$T(n) = \\sum_{h=0}^{\\lfloor \\log_2 n \\rfloor} \\left\\lceil \\frac{n}{2^{h+1}} \\right\\rceil O(h) \\le c \\cdot n \\sum_{h=0}^{\\infty} \\frac{h}{2^h}$$
Untuk menghitung deret $\\sum_{h=0}^{\\infty} \\frac{h}{2^h}$, gunakan turunan deret geometri:
$$\\sum_{h=0}^{\\infty} x^h = \\frac{1}{1-x}$$
Diferensialkan kedua sisi terhadap $x$:
$$\\sum_{h=1}^{\\infty} h x^{h-1} = \\frac{1}{(1-x)^2}$$
Kalikan kedua sisi dengan $x$:
$$\\sum_{h=0}^{\\infty} h x^h = \\frac{x}{(1-x)^2}$$
Substitusikan nilai rasio $x = 1/2$:
$$\\sum_{h=0}^{\\infty} \\frac{h}{2^h} = \\frac{1/2}{(1 - 1/2)^2} = \\frac{1/2}{1/4} = 2$$
Maka total waktu:
$$T(n) \\le c \\cdot n \\cdot (2) = 2c \\cdot n \\in \\mathbf{\\Theta(n)}$$
Inilah bukti formal mengapa algoritma Heapify array berjalan dalam waktu linear!`
      },
      {
        id: '3-2-logaritma',
        title: '3.2 Logaritma & Sifat Krusial untuk Algoritma',
        summary: 'Memahami mengapa logaritma muncul saat masalah dibagi dua dan sifat-sifat yang dipakai dalam Teorema Master.',
        readTime: '8 menit',
        keyTakeaways: [
          'Logaritma log_b(n) adalah kebalikan eksponensial: b^y = n <=> y = log_b(n).',
          'Jika perulangan membagi ukuran masalah dengan b pada setiap langkah (i = i / b), jumlah langkahnya adalah floor(log_b(n)).',
          'Sifat sakti Teorema Master: a^(log_b n) = n^(log_b a).',
          'Basis logaritma tidak mengubah kelas asimptotik: log_2(n) = Θ(log_10(n)) = Θ(ln(n)).'
        ],
        content: `### Mengapa Logaritma Selalu Muncul dalam Algoritma?
Logaritma merupakan ukuran seberapa sering kita dapat **membagi sebuah bilangan dengan basis tertentu sebelum mencapai 1**.

Bayangkan Anda memiliki $n = 16$ dan membaginya dengan 2 secara berulang:
$$16 \\to 8 \\to 4 \\to 2 \\to 1 \\quad \\text{(Total 4 kali pembagian)}$$
Karena $2^4 = 16$, maka $\\log_2(16) = 4$.

Secara umum, jika sebuah masalah berukuran $n$ dibagi menjadi pecahan $\\frac{n}{b}$ pada setiap tahapan, proses ini akan berhenti dalam:
$$k = \\lfloor \\log_b n \\rfloor \\text{ langkah}$$

---

### Sifat-Sifat Logaritma yang Sering Digunakan

1. **Perubahan Basis (Change of Base) & Bukti Formal**:
   $$\\log_b n = \\frac{\\log_a n}{\\log_a b} = \\left( \\frac{1}{\\log_a b} \\right) \\log_a n$$
   *Bukti Formal*:
   Misalkan $y = \\log_b n$. Berdasarkan definisi logaritma:
   $$b^y = n$$
   Ambil logaritma basis $a$ pada kedua sisi:
   $$\\log_a(b^y) = \\log_a n$$
   Gunakan sifat eksponen logaritma:
   $$y \\cdot \\log_a b = \\log_a n \\implies y = \\frac{\\log_a n}{\\log_a b}$$
   Substitusikan kembali $y = \\log_b n$, terbukti! $\\blacksquare$

   *Konsekuensi untuk Analisis Kompleksitas*:
   Karena $\\frac{1}{\\log_a b}$ adalah konstanta pengali skalar tetap:
   $$\\log_2 n = \\Theta(\\log_{10} n) = \\Theta(\\ln n)$$
   *Inilah alasan mengapa dalam notasi Big-O, kita selalu menulis $O(\\log n)$ tanpa perlu mencantumkan basisnya!*

2. **Sifat Pangkat dan Perkalian**:
   * $\\log(x \\cdot y) = \\log x + \\log y$
   * $\\log(x / y) = \\log x - \\log y$
   * $\\log(x^k) = k \\cdot \\log x$
   * $\\log(\\sqrt{n}) = \\log(n^{1/2}) = \\frac{1}{2} \\log n = \\Theta(\\log n)$

3. **Sifat Penukaran Basis & Eksponen (Kunci Teorema Master)**:
   $$a^{\\log_b n} = n^{\\log_b a}$$
   *Bukti Singkat*:
   Ambil logaritma basis $b$ pada kedua sisi:
   $$\\log_b(a^{\\log_b n}) = (\\log_b n) \\cdot (\\log_b a)$$
   $$\\log_b(n^{\\log_b a}) = (\\log_b a) \\cdot (\\log_b n)$$
   Kedua ekspresi bernilai persis sama! $\\blacksquare$

   *Contoh Penting*:
   * $2^{\\log_2 n} = n^{\\log_2 2} = n^1 = n$
   * $4^{\\log_2 n} = (2^2)^{\\log_2 n} = (2^{\\log_2 n})^2 = n^2$
   * $3^{\\log_2 n} = n^{\\log_2 3} \\approx n^{1.585}$ (muncul pada perkalian Karatsuba!)`
      },
      {
        id: '3-3-floor-ceiling',
        title: '3.3 Fungsi Tangga: Floor (⌊ ⌋) & Ceiling (⌈ ⌉)',
        summary: 'Menangani pembagian bilangan bulat, pencegahan integer overflow, dan invarian asimptotik pada partisi ganjil/genap.',
        readTime: '6 menit',
        keyTakeaways: [
          'Floor ⌊x⌋: Bilangan bulat terbesar <= x; Ceiling ⌈x⌉: Bilangan bulat terkecil >= x.',
          'Pencegahan Overflow: Gunakan mid = low + (high - low) / 2 alih-alih (low + high) / 2.',
          'Identitas Nested Floor: ⌊⌊x/a⌋ / b⌋ = ⌊x / (ab)⌋.',
          'Invarian Asimptotik: Perbedaan ±1 pada T(⌊n/2⌋) dan T(⌈n/2⌉) tidak mempengaruhi orde Θ(g(n)).'
        ],
        content: `### Definisi Formal
* **Floor (Lantai) $\\lfloor x \\rfloor$**: Bilangan bulat terbesar yang lebih kecil atau sama dengan $x$.
  * $\\lfloor 3.8 \\rfloor = 3$, $\\lfloor 7.1 \\rfloor = 7$, $\\lfloor -2.4 \\rfloor = -3$.
* **Ceiling (Langit-langit) $\\lceil x \\rceil$**: Bilangan bulat terkecil yang lebih besar atau sama dengan $x$.
  * $\\lceil 3.2 \\rceil = 4$, $\\lceil 7.9 \\rceil = 8$, $\\lceil -2.4 \\rceil = -2$.

---

### Pelajaran Penting: Bug Integer Overflow pada Binary Search
Dalam implementasi bahasa C/C++, Java, atau Go:
\`\`\`cpp
// BAHAYA BUG: Dapat overflow jika low + high > 2^31 - 1 (2.147.483.647)
int mid = (low + high) / 2;

// CARA AMAN STANDAR INDUSTRI:
int mid = low + (high - low) / 2;
\`\`\`
*Catatan Sejarah*: Bug \`(low + high) / 2\` pernah bersemayam di Java Standard Library (\`java.util.Arrays\`) selama lebih dari 9 tahun sebelum akhirnya diperbaiki oleh Joshua Bloch pada tahun 2006!

---

### Sifat Aljabar Fungsi Tangga untuk Analisis Rekursif
1. **Identitas Pembagian Bersarang**:
   $$\\left\\lfloor \\frac{\\lfloor x/a \\rfloor}{b} \\right\\rfloor = \\left\\lfloor \\frac{x}{a \\cdot b} \\right\\rfloor$$
   Ini menjamin bahwa membagi array secara rekursif berkali-kali setara dengan membagi langsung dengan $a^k$.
2. **Pertidaksamaan Pengapit**:
   $$x - 1 < \\lfloor x \\rfloor \\le x \\le \\lceil x \\rceil < x + 1$$
3. **Mengapa Floor/Ceiling Diabaikan dalam Analisis Kompleksitas?**
   Ketika menganalisis rekurensi seperti Merge Sort:
   $$T(n) = T(\\lfloor n/2 \\rfloor) + T(\\lceil n/2 \\rceil) + cn$$
   Kita membuktikan batas atas dengan mengasumsikan $n$ adalah bilangan pangkat dua ($n = 2^k$), sehingga $\\lfloor n/2 \\rfloor = \\lceil n/2 \\rceil = n/2$. Teorema domain extension membuktikan bahwa batas yang didapat untuk $n = 2^k$ berlaku untuk seluruh bilangan asli $n$ karena $T(n)$ adalah fungsi yang monoton tak-turun.`
      },
      {
        id: '3-4-detail-krusial',
        title: '3.4 Detail Krusial: Deret Harmonik H_n, Pendekatan Integral untuk Penjumlahan, dan Formula Stirling log(n!)',
        summary: 'Pelajari deret harmonik yang sering muncul pada nested loop fraksional, pendekatan jumlahan menggunakan integral tentu, serta estimasi faktorial Stirling.',
        readTime: '8 menit',
        keyTakeaways: [
          'Deret Harmonik H_n = ∑ (1/k) = ln n + γ + O(1/n) = Θ(log n).',
          'Aproksimasi Integral: ∫ f(x)dx mengapit jumlahan diskrit ∑ f(i) untuk fungsi monoton naik/turun.',
          'Formula Stirling: log(n!) = Θ(n log n). Membuktikan batas bawah teoretis sorting berbasis perbandingan (Ω(n log n)).',
          'Telescoping Sum: ∑ (a_i - a_{i-1}) = a_n - a_0.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Loop Harmonik: Sering disangka O(n^2), padahal O(n log n)!
int count = 0;
for (int i = 1; i <= n; i++) {
    // Loop dalam melangkah kelipatan i: j = i, 2i, 3i, ... <= n
    // Berjalan sebanyak n / i kali
    for (int j = i; j <= n; j += i) {
        count++; // Operasi Dasar
    }
}
// Total iterasi = n/1 + n/2 + n/3 + ... + n/n = n * H_n = O(n log n)`,
          explanation: 'Loop penapisan bilangan prima (Sieve of Eratosthenes) dan nested loop kelipatan menghasilkan deret harmonik.'
        },
        content: `### 1. Deret Harmonik $H_n$ dan Kemunculannya dalam Kode
Deret harmonik adalah jumlahan dari kebalikan bilangan bulat:
$$H_n = \\sum_{k=1}^n \\frac{1}{k} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\dots + \\frac{1}{n}$$
Deret ini divergen lambat dan terbukti sangat dekat dengan integral $\\int_1^n \\frac{1}{x} dx = \\ln n$:
$$H_n = \\ln n + \\gamma + O(1/n) \\in \\Theta(\\log n)$$
di mana $\\gamma \\approx 0.57721566...$ adalah konstanta Euler-Mascheroni.

Setiap kali Anda melihat kode di mana loop dalam berjalan sebanyak $\\frac{n}{i}$ kali:
$$\\sum_{i=1}^n \\frac{n}{i} = n \\sum_{i=1}^n \\frac{1}{i} = n \\cdot H_n = \\Theta(n \\log n)$$

#### Kasus Spesial: Sieve of Eratosthenes (Penapisan Bilangan Prima)
Pada algoritma penapisan prima (Sieve of Eratosthenes), loop dalam hanya dieksekusi jika $i$ adalah bilangan prima $p$:
$$T(n) = \\sum_{p \\le n, p \\text{ prima}} \\frac{n}{p} = n \\sum_{p \\le n} \\frac{1}{p}$$
Berdasarkan **Teorema Kedua Mertens (Mertens' Second Theorem)**:
$$\\sum_{p \\le n, p \\text{ prima}} \\frac{1}{p} = \\ln(\\ln n) + M + O(1/\\log n)$$
di mana $M \\approx 0.261497$ adalah konstanta Meissel-Mertens.
Maka kompleksitas penapisan prima Eratosthenes adalah:
$$T(n) \\in \\mathbf{\\Theta(n \\log \\log n)}$$
Sebuah kompleksitas yang hampir linear sempurna!

---

### 2. Menaksir Jumlahan dengan Integral (Approximating Sums by Integrals)
Jika suatu deret $\\sum_{i=1}^n f(i)$ sulit dicari rumus aljabar tertutupnya, gunakan kalkulus integral.
Untuk fungsi $f(x)$ yang kontinu dan monoton naik:
$$\\int_{0}^n f(x) dx \\le \\sum_{i=1}^n f(i) \\le \\int_{1}^{n+1} f(x) dx$$

*Contoh*: Menghitung $\\sum_{i=1}^n i^k$:
$$\\int_0^n x^k dx = \\frac{n^{k+1}}{k+1} \\implies \\sum_{i=1}^n i^k = \\Theta(n^{k+1})$$

---

### 3. Formula Stirling dan Batas Bawah Teoretis $\\Omega(n \\log n)$
Berapa kompleksitas dari $\\log(n!)$?
Berdasarkan pendekatan Stirling:
$$n! \\approx \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$$
Mengambil logaritma natural dari kedua sisi:
$$\\ln(n!) = \\ln(\\sqrt{2\\pi n}) + n \\ln\\left(\\frac{n}{e}\\right)$$
$$\\ln(n!) = \\frac{1}{2}\\ln(2\\pi n) + n \\ln n - n = \\Theta(n \\log n)$$

**Mengapa ini menjadi Teorema Paling Sakral dalam Ilmu Komputer?**
Dalam pohon keputusan (*decision tree*) pengurutan $n$ elemen berbasis perbandingan (Comparison-based Sorting seperti Quick Sort, Merge Sort, Heap Sort):
1. Setiap daun merepresentasikan 1 susunan permutasi unik dari elemen array. Total daun adalah $n!$.
2. Pohon keputusan adalah pohon biner (karena setiap perbandingan \`arr[i] < arr[j]\` hanya memiliki 2 cabang: Ya atau Tidak).
3. Pohon biner dengan $L = n!$ daun memiliki tinggi minimum $h$:
   $$2^h \\ge n! \\iff h \\ge \\log_2(n!)$$
4. Substitusikan formula Stirling:
   $$h \\ge \\log_2(n!) = \\Omega(n \\log n)$$
Ini membuktikan secara matematis bahwa **mustahil ada algoritma sorting berbasis perbandingan yang dapat berjalan lebih cepat dari $\\Omega(n \\log n)$ pada skenario terburuk**! Siapapun yang mengklaim menemukan sorting perbandingan $O(n)$ melanggar hukum matematika dasar ini.`
      }
    ],
    quiz: MODULE_QUIZZES.matematika
  },
  {
    id: 'iteratif',
    number: 4,
    title: 'Tata Cara & Rumus Analisis Algoritma Iteratif',
    shortDesc: 'Panduan langkah demi langkah membedah algoritma berbasis loop, menyusun model Sigma, dan membuktikan 6 pola loop iteratif populer.',
    iconName: 'Repeat',
    sections: [
      {
        id: '4-1-kerangka-langkah',
        title: '4.1 Kerangka Kerja Sistematis Analisis Algoritma Non-Rekursif',
        summary: 'Metode 6 langkah standar industri (Levitin & Cormen) untuk menganalisis kompleksitas algoritma iteratif apapun.',
        readTime: '8 menit',
        keyTakeaways: [
          'Langkah 1: Tentukan parameter ukuran input (n).',
          'Langkah 2: Temukan operasi dasar (basic operation) pada loop terdalam.',
          'Langkah 3: Evaluasi apakah frekuensi operasi tergantung susunan data (butuh Best/Worst case?).',
          'Langkah 4: Tuliskan persamaan matematis menggunakan notasi Sigma ∑.',
          'Langkah 5: Selesaikan persamaan Sigma menggunakan rumus aljabar baku.',
          'Langkah 6: Simpulkan kelas efisiensi asimptotik (Big-Theta).'
        ],
        content: `### 6 Langkah Baku Analisis Algoritma Iteratif
Para akademisi dan perekayasa perangkat lunak menggunakan kerangka terstandarisasi (Levitin & Cormen) untuk menganalisis algoritma perulangan:

\`\`\`
[1. Tentukan n] ➔ [2. Cari Basic Op] ➔ [3. Cek Best/Worst?] ➔ [4. Susun Notasi ∑] ➔ [5. Hitung Nilai ∑] ➔ [6. Simpulkan Θ]
\`\`\`

| No | Tahap Analisis | Pertanyaan Kunci & Tindakan | Contoh pada Array Max |
| :--- | :--- | :--- | :--- |
| **1** | **Parameter $n$** | Variabel apa yang merepresentasikan beban masukan? | $n = \\text{arr.length}$ |
| **2** | **Operasi Dasar** | Instruksi apa di innermost loop yang mendominasi waktu? | Perbandingan \`arr[i] > maxVal\` |
| **3** | **Sensitivitas Data** | Apakah frekuensi operasi berubah tergantung susunan input? | Tidak, loop selalu jalan $n-1$ kali |
| **4** | **Model Sigma** | Terjemahkan rentang loop ke notasi $\\sum$ | $C(n) = \\sum_{i=1}^{n-1} 1$ |
| **5** | **Evaluasi Aljabar** | Gunakan rumus deret baku untuk eliminasi $\\sum$ | $(n - 1) - 1 + 1 = n - 1$ |
| **6** | **Kelas Asimptotik** | Ambil orde pertumbuhan tertinggi tanpa konstanta | $C(n) = n - 1 \\implies \\mathbf{\\Theta(n)}$ |

1. **Langkah 1: Menentukan parameter ukuran input ($n$)**: Identifikasi ukuran skalar (panjang array, simpul graf $|V|$, atau dimensi matriks).
2. **Langkah 2: Mengidentifikasi Operasi Dasar (Basic Operation)**: Cari operasi pada loop terdalam yang menentukan mayoritas siklus CPU.
3. **Langkah 3: Memeriksa Ketergantungan Data**: Jika ada terminasi dini (\`break\`, \`return\`), pisahkan analisis menjadi Best, Worst, dan Average case.
4. **Langkah 4: Menyusun Model Notasi Sigma ($\\sum$)**: Batas bawah dan atas loop menjadi indeks sigma.
5. **Langkah 5: Menyelesaikan Notasi Sigma**: Gunakan sifat linearitas dan rumus deret aritmatika/geometri.
6. **Langkah 6: Menyimpulkan Kelas Asimptotik**: Nyatakan dalam batas ketat $\\Theta(g(n))$.`
      },
      {
        id: '4-2-pola-1-dan-2',
        title: '4.2 Pola 1 & 2: Loop Linear vs Loop Logaritmik',
        summary: 'Membedah perbedaan mendasar antara perulangan increment penjumlahan (i++) dengan perkalian (i *= 2).',
        readTime: '8 menit',
        keyTakeaways: [
          'Loop Linear (i += c): Nilai bertambah secara konstan -> Berjalan n/c kali -> Kompleksitas O(n).',
          'Loop Logaritmik (i *= c): Nilai berlipat secara eksponensial -> Berjalan log_c(n) kali -> Kompleksitas O(log n).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// POLA 1: Loop Linear Tunggal
int polaLinear(int n) {
    int total = 0;
    for (int i = 0; i < n; i++) { // i += 1
        total += i; // Operasi dasar
    }
    return total;
}

// POLA 2: Loop Logaritmik Tunggal
void polaLogaritmik(int n) {
    // i berlipat ganda: 1, 2, 4, 8, 16, ..., 2^k
    for (int i = 1; i < n; i *= 2) {
        cout << i << " "; // Operasi dasar
    }
}`,
          explanation: 'Pola 1 berjalan n kali. Pola 2 berjalan k kali di mana 2^k < n sehingga k = floor(log2(n)).'
        },
        content: `### Bedah Matematis Pola 1: Loop Linear Tunggal
* **Kode**: \`for (int i = 0; i < n; i += k)\`
* **Formulasi Sigma**:
  $$C(n) = \\sum_{j=0}^{\\lceil n/k \\rceil - 1} 1 = \\left\\lceil \\frac{n}{k} \\right\\rceil$$
* **Kesimpulan**: Karena $k$ adalah konstanta, $C(n) = \\frac{1}{k} n \\in \\mathbf{\\Theta(n)}$.

---

### Bedah Matematis Pola 2: Loop Logaritmik Tunggal (Perkalian & Pembagian)

#### Kasus A (Perkalian): \`for (int i = 1; i < n; i *= 2)\`
* **Tabel Pelacakan Jejak Iterasi (Iteration Tracing Table)**:

| Iterasi ke-$k$ | Nilai Variabel $i$ | Syarat Lanjut ($i < n$) |
| :--- | :--- | :--- |
| $k = 0$ | $1 = 2^0$ | $2^0 < n$ |
| $k = 1$ | $2 = 2^1$ | $2^1 < n$ |
| $k = 2$ | $4 = 2^2$ | $2^2 < n$ |
| $k = 3$ | $8 = 2^3$ | $2^3 < n$ |
| $k = m$ | $2^m$ | $2^m < n$ |

* **Kondisi Berhenti**:
  Perulangan berhenti ketika nilai $i \\ge n$, yaitu saat $2^m \\ge n \\iff m = \\lceil \\log_2 n \\rceil$.
* **Total Iterasi**:
  $$C(n) = \\lfloor \\log_2 n \\rfloor + 1 \\in \\mathbf{\\Theta(\\log n)}$$

#### Kasus B (Pembagian): \`for (int i = n; i > 0; i /= 2)\`
Nilai $i$ melompat ke bawah: $n, \\lfloor n/2 \\rfloor, \\lfloor n/4 \\rfloor, \\dots, 1$.
Jumlah langkah membagi $n$ dengan 2 hingga mencapai 0 adalah $\\lfloor \\log_2 n \\rfloor + 1$.
Kompleksitasnya **identik secara asimptotik**: $\\mathbf{\\Theta(\\log n)}$.

> **Aturan Emas**:
> Kapan pun Anda melihat variabel loop **dikalikan** (\`i *= b\`) atau **dibagi** (\`i /= b\`), kompleksitas loop tersebut adalah $\\mathbf{\\Theta(\\log_b n)}$.`
      },
      {
        id: '4-3-pola-3-dan-4',
        title: '4.3 Pola 3 & 4: Nested Loop Independen vs Dependen (Segitiga)',
        summary: 'Perbedaan krusial antara nested loop persegi n x n dengan nested loop segitiga (Bubble & Selection Sort).',
        readTime: '9 menit',
        keyTakeaways: [
          'Nested Loop Independen: Batas loop dalam tidak bergantung pada variabel i luar -> C(n) = n * n = Θ(n²).',
          'Nested Loop Dependen (Segitiga): Batas loop dalam bergantung pada i -> C(n) = ∑ i = n(n-1)/2 = Θ(n²).',
          'Meskipun loop segitiga hanya menjalankan setengah operasi dari loop persegi, kelas asimptotiknya tetap sama-sama Θ(n²).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// POLA 3: Nested Loop Independen (Persegi)
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // Operasi dasar dieksekusi n x n kali
        matrix[i][j] = 0;
    }
}

// POLA 4: Nested Loop Dependen (Segitiga) - Contoh Selection Sort
for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
        // Loop dalam berjalan (n - 1 - i) kali
        if (arr[j] < arr[i]) {
            swap(arr[i], arr[j]);
        }
    }
}`,
          explanation: 'Pada Pola 3: j selalu berjalan n kali. Pada Pola 4: ketika i=0, j berjalan n-1 kali; ketika i=n-2, j berjalan 1 kali.'
        },
        content: `### Bedah Matematis Pola 3: Nested Loop Independen
Karena batas loop dalam ($j$) tidak memiliki variabel $i$, kedua sigma dapat dipisahkan secara independen:

$$C(n) = \\sum_{i=0}^{n-1} \\sum_{j=0}^{n-1} 1 = \\sum_{i=0}^{n-1} n = n \\sum_{i=0}^{n-1} 1 = n \\cdot n = n^2 \\in \\Theta(n^2)$$

---

### Bedah Matematis Pola 4: Nested Loop Dependen (Segitiga / Triangular)
Pada algoritma seperti Selection Sort atau Bubble Sort:
* Loop luar: $i$ dari $0$ sampai $n-2$.
* Loop dalam: $j$ dari $i+1$ sampai $n-1$.

Formulasi model matematis:
$$C(n) = \\sum_{i=0}^{n-2} \\sum_{j=i+1}^{n-1} 1$$

Selesaikan sigma dalam terlebih dahulu menggunakan rumus $\\sum_{j=l}^u 1 = u - l + 1$:
$$\\sum_{j=i+1}^{n-1} 1 = (n - 1) - (i + 1) + 1 = n - 1 - i$$

Substitusikan kembali ke sigma luar:
$$C(n) = \\sum_{i=0}^{n-2} (n - 1 - i)$$

Ekspansikan deret penjumlahan:
* Untuk $i = 0$: $n - 1$
* Untuk $i = 1$: $n - 2$
* $\\dots$
* Untuk $i = n - 2$: $1$

Jumlah ini adalah pembalikan deret bilangan $1 + 2 + \\dots + (n-1)$:
$$C(n) = \\sum_{k=1}^{n-1} k = \\frac{(n-1)((n-1) + 1)}{2} = \\frac{(n-1)n}{2} = \\frac{n^2 - n}{2}$$

**Kesimpulan**:
$$C(n) = \\frac{1}{2}n^2 - \\frac{1}{2}n \\in \\Theta(n^2)$$

*Wawasan Penting*: Konstanta $\\frac{1}{2}$ menunjukkan bahwa loop segitiga menjalankan operasi 50% lebih sedikit daripada loop persegi, namun secara asimptotik laju pertumbuhannya tetap merupakan fungsi kuadratik $\\Theta(n^2)$.`
      },
      {
        id: '4-4-pola-5-dan-6',
        title: '4.4 Pola 5 & 6: Nested Loop Campuran (n log n) & Kubik (n³)',
        summary: 'Menganalisis kombinasi loop linear x logaritmik dan tiga tingkat loop pada perkalian matriks.',
        readTime: '8 menit',
        keyTakeaways: [
          'Pola Campuran: Loop luar berjalan n kali dan loop dalam berjalan log n kali -> Total = n * log n = Θ(n log n).',
          'Pola Tiga Tingkat (Perkalian Matriks): Tiga nested loop independen berukuran n -> Total = n * n * n = Θ(n³).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// POLA 5: Linearithmic Loop (n log n)
for (int i = 1; i <= n; i++) {
    // Loop dalam logaritmik
    for (int j = 1; j <= n; j *= 2) {
        // Operasi dasar dipanggil log2(n) kali untuk setiap i
        proses(i, j);
    }
}

// POLA 6: Perkalian Matriks Persegi n x n (Kubik)
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        C[i][j] = 0;
        for (int k = 0; k < n; k++) {
            // Operasi dasar: perkalian dan penjumlahan
            C[i][j] += A[i][k] * B[k][j];
        }
    }
}`,
          explanation: 'Pola 5 menghasilkan n * log2(n) operasi. Pola 6 menghasilkan n * n * n = n^3 operasi perkalian.'
        },
        content: `### Bedah Matematis Pola 5: Linearithmic ($n \\log n$)
* Loop luar: $i$ dari $1$ sampai $n$ (sebanyak $n$ kali).
* Loop dalam: $j$ mulai dari $1$ dan berlipat ganda ($j *= 2$) sampai $\\le n$. Jumlah iterasi dalam adalah $\\lfloor \\log_2 n \\rfloor + 1$.

Formulasi:
$$C(n) = \\sum_{i=1}^{n} (\\lfloor \\log_2 n \\rfloor + 1) = n \\cdot (\\lfloor \\log_2 n \\rfloor + 1) \\in \\mathbf{\\Theta(n \\log n)}$$

---

### Bedah Matematis Pola 6: Tiga Tingkat Loop (Perkalian Matriks)

#### Kasus Matriks Persegi ($n \\times n$):
$$C(n) = \\sum_{i=0}^{n-1} \\sum_{j=0}^{n-1} \\sum_{k=0}^{n-1} 1 = n \\cdot n \\cdot n = n^3 \\in \\mathbf{\\Theta(n^3)}$$
Untuk matriks berukuran $1000 \\times 1000$, algoritma ini membutuhkan $1000^3 = 1.000.000.000$ (1 miliar) operasi perkalian!

#### Kasus Matriks Persegi Panjang ($n \\times m$ dikalikan $m \\times p$):
Jika matriks $A$ berukuran $n \\times m$ dan matriks $B$ berukuran $m \\times p$:
$$C(n, m, p) = \\sum_{i=0}^{n-1} \\sum_{j=0}^{p-1} \\sum_{k=0}^{m-1} 1 = n \\cdot p \\cdot m \\in \\mathbf{\\Theta(n \\cdot m \\cdot p)}$$

*Wawasan Lanjutan*:
Apakah perkalian matriks persegi bisa lebih cepat dari $O(n^3)$?
**YA!** Algoritma **Strassen (1969)** membagi matriks menjadi sub-matriks $2 \\times 2$ dan menghitung perkalian hanya dengan 7 rekursi alih-alih 8:
$$T(n) = 7T(n/2) + O(n^2) \\implies O(n^{\\log_2 7}) \\approx \\mathbf{O(n^{2.807})}$$`
      },
      {
        id: '4-5-detail-krusial',
        title: '4.5 Detail Krusial: Loop Berakar Θ(√n), Jebakan Loop Geometri, dan Efek Cache Locality pada Hardware',
        summary: 'Eksplorasi pola loop non-standar: loop terminasi kuadratik, jebakan loop bersarang geometri O(n), serta pengaruh spatial cache locality terhadap performa nyata.',
        readTime: '9 menit',
        keyTakeaways: [
          'Loop while (i * i <= n) berjalan tepat ⌊√n⌋ kali, menghasilkan kelas efisiensi Θ(√n).',
          'Jebakan Loop Geometri: for (int i=1; i<=n; i*=2) for (int j=0; j<i; j++) berjalan dalam O(n), BUKAN O(n log n)!',
          'Loop Harmonik: for (int i=1; i<=n; i++) for (int j=i; j<=n; j+=i) menghasilkan O(n log n).',
          'Spatial Locality: Melintasi matriks secara row-major jauh lebih kencang daripada column-major karena efisiensi cache CPU L1/L2/L3.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// JEBAKAN UMUM: Terlihat O(n log n) tapi sebenarnya O(n)!
int hitungGeometri(int n) {
    int total = 0;
    // Loop luar: i = 1, 2, 4, 8, ..., 2^k <= n
    for (int i = 1; i <= n; i *= 2) {
        // Loop dalam: berjalan tepat i kali
        for (int j = 0; j < i; j++) {
            total++;
        }
    }
    return total;
}
// Total iterasi = 1 + 2 + 4 + 8 + ... + 2^k = 2^(k+1) - 1 <= 2n - 1 = O(n)`,
          explanation: 'Jumlah deret geometri 1 + 2 + 4 + ... + n bernilai 2n - 1, sehingga kompleksitasnya linear O(n).'
        },
        content: `### 1. Loop dengan Kondisi Terminasi Kuadratik $\\Theta(\\sqrt{n})$
Perhatikan struktur:
\`\`\`cpp
for (int i = 1; i * i <= n; i++) {
    // Operasi dasar
}
\`\`\`
Syarat loop berjalan: $i^2 \\le n \\iff i \\le \\sqrt{n}$.
Karena $i$ bertambah konstan $+1$ pada setiap langkah, nilai $i$ berjalan dari $1, 2, 3, \\dots, \\lfloor \\sqrt{n} \\rfloor$.
Jumlah eksekusi adalah:
$$C(n) = \\lfloor \\sqrt{n} \\rfloor \\in \\mathbf{\\Theta(\\sqrt{n})}$$
Pola ini merupakan fondasi algoritma keprimaan (*Trial Division*) dan faktorisasi prima.

---

### 2. Jebakan Menipu: Loop Bersarang dengan Pola Geometri $\\Theta(n)$
Banyak programmer pemula melihat dua loop bersarang (satu logaritmik dan satu linear) lalu langsung menyimpulkan $O(n \\log n)$.
Perhatikan kode berikut:
\`\`\`cpp
for (int i = 1; i <= n; i *= 2) {
    for (int j = 0; j < i; j++) {
        proses();
    }
}
\`\`\`
Mari kita ekspansi jumlah langkah sesungguhnya:
* Saat $i = 1$: loop dalam jalan 1 kali
* Saat $i = 2$: loop dalam jalan 2 kali
* Saat $i = 4$: loop dalam jalan 4 kali
* Saat $i = 2^k$: loop dalam jalan $2^k$ kali (di mana $2^k \\le n$)

Total operasi adalah penjumlahan deret geometri:
$$C(n) = \\sum_{m=0}^{\\lfloor \\log_2 n \\rfloor} 2^m = 2^{\\lfloor \\log_2 n \\rfloor + 1} - 1 < 2 \\cdot n - 1 \\in \\mathbf{\\Theta(n)}$$
**Kompleksitasnya adalah LINEAR $\\Theta(n)$!** BUKAN $n \\log n$!

---

### 3. Pengaruh Nyata Akses Memori: Row-Major vs Column-Major (Spatial Cache Locality)
Mengapa dua loop matriks dengan rumus Big-Theta sama persis $\\Theta(n^2)$ bisa memiliki kecepatan eksekusi wall-clock time berbeda hingga 10x lipat?
\`\`\`cpp
// Versi A: Row-Major (Ramah Cache CPU)
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        sum += matrix[i][j]; // Elemen bersebelahan di RAM di-load sekaligus ke Cache Line (64 bytes)

// Versi B: Column-Major (Musuh Cache CPU - Stride n)
for (int j = 0; j < n; j++)
    for (int i = 0; i < n; i++)
        sum += matrix[i][j]; // Setiap akses melompat n elemen, memicu Cache Miss beruntun!
\`\`\`
Secara teoritis keduanya adalah $\\Theta(n^2)$ operasi dasar. Namun Versi A menghasilkan **Cache Hit $\\approx 98\\%$**, sedangkan Versi B memicu **Cache Thrashing** yang memaksa CPU menunggu akses DRAM yang 200 kali lebih lambat!

---

### 4. Analisis Ruang Memori Iteratif (In-Place vs Out-of-Place)
* **Algoritma In-Place**: Mengurutkan atau memproses data langsung di dalam memori struktur data masukan tanpa membuat alokasi array pendukung baru.
  * *Contoh*: Bubble Sort, Selection Sort, Insertion Sort, Heap Sort.
  * *Auxiliary Space*: $\\mathbf{O(1)}$ (hanya membutuhkan beberapa variabel pointer/skalar seperti \`temp\`, \`i\`, \`j\`).
* **Algoritma Out-of-Place**: Memerlukan alokasi buffer array baru yang berukuran proporsional terhadap ukuran masukan $n$.
  * *Contoh*: Merge Sort (membutuhkan array bantu ukuran $n$ saat proses merge $\\implies O(n)$ Auxiliary Space), Counting Sort ($O(n + k)$ Space).`
      }
    ],
    quiz: MODULE_QUIZZES.iteratif
  },
  {
    id: 'rekursif',
    number: 5,
    title: 'Tata Cara & Rumus Analisis Algoritma Rekursif',
    shortDesc: 'Kuasai 4 metode analisis relasi rekurensi: Substitusi Mundur (Unrolling), Pohon Rekursi, Teorema Master, dan Induksi Matematika.',
    iconName: 'GitFork',
    sections: [
      {
        id: '5-1-kerangka-rekursif',
        title: '5.1 Kerangka Kerja Sistematis & Relasi Rekurensi',
        summary: 'Cara membangun persamaan rekursif T(n) dari basis (base case) dan langkah pembagian (divide & combine).',
        readTime: '8 menit',
        keyTakeaways: [
          'Algoritma rekursif memecah masalah menjadi submasalah berukuran lebih kecil dari dirinya sendiri.',
          'Relasi rekurensi mengekspresikan T(n) dalam suku T(k) dengan k < n.',
          'Bentuk umum relasi rekurensi: T(n) = a T(n/b) + f(n) atau T(n) = a T(n - c) + f(n).',
          'Harus selalu menyertakan Kondisi Basis (Base Case), misal T(1) = c.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Menghitung Faktorial secara Rekursif
long long faktorial(int n) {
    if (n <= 1) { // <-- KONDISI BASIS: 1 kali perbandingan
        return 1;
    }
    // <-- LANGKAH REKURSIF: 1 panggilan faktorial(n-1) + 1 operasi perkalian
    return n * faktorial(n - 1);
}`,
          explanation: 'Relasi rekurensi: T(n) = T(n-1) + 1 untuk n > 1, dengan kondisi basis T(1) = 1.'
        },
        content: `### Mengapa Algoritma Rekursif Memerlukan Metode Analisis Berbeda?
Pada algoritma iteratif, kita dapat langsung menghitung perulangan dengan notasi Sigma. Namun pada fungsi rekursif, suatu fungsi **memanggil dirinya sendiri**, sehingga waktu eksekusi $T(n)$ bergantung pada waktu eksekusi sub-fungsi berukuran lebih kecil seperti $T(n-1)$ atau $T(n/2)$.

Persamaan yang menghubungkan suatu fungsi dengan nilai fungsi itu sendiri pada masukan yang lebih kecil disebut **Relasi Rekurensi (Recurrence Relation)**.

---

### Anatomi Relasi Rekurensi
Sebuah relasi rekurensi terdiri dari dua bagian mutlak:
1. **Kasus Basis (Base Case)**:
   $$T(n_0) = c$$
   Biaya komputasi ketika masalah sudah cukup kecil sehingga dapat langsung diselesaikan tanpa pemanggilan rekursif (misal saat $n=0$ atau $n=1$).
2. **Langkah Rekursif (Recursive Step)**:
   $$T(n) = a \\cdot T(g(n)) + f(n)$$
   di mana:
   * $a$ = jumlah sub-masalah rekursif yang dipanggil.
   * $g(n)$ = ukuran dari setiap sub-masalah (biasanya $n-1$, $n-c$, atau $n/b$).
   * $f(n)$ = biaya melakukan pembagian masalah (*divide*) dan penggabungan solusi (*combine*) di luar pemanggilan rekursif.

---

### Call Stack & Anatomi Alokasi Memori (Activation Record)
Mengapa fungsi rekursif mengonsumsi memori tambahan (*Auxiliary Space*) meskipun kita tidak membuat array baru?
Setiap kali fungsi memanggil dirinya sendiri, CPU mengalokasikan sebuah **Stack Frame (Activation Record)** di memori Call Stack:
1. **Return Address**: Alamat instruksi program yang harus dilanjutkan setelah pemanggilan anak selesai.
2. **Parameter Fungsi**: Salinan nilai argumen (misal nilai $n$).
3. **Variabel Lokal**: Variabel yang dideklarasikan di dalam blok fungsi.
4. **Frame Pointer (RBP/EBP)**: Pointer ke stack frame pemanggil.

\`\`\`
[Memori Tinggi] ──────────────────────────
                Stack Frame faktorial(4)
                Stack Frame faktorial(3)
                Stack Frame faktorial(2)
                Stack Frame faktorial(1) <- Top of Stack
                ... Ruang Bebas ...
                Heap (Alokasi malloc / new)
                Data Segment (Global Vars)
[Memori Rendah] Text / Code Segment (Instruksi Mesin)
\`\`\`
*Peringatan Stack Overflow*:
Call Stack memiliki kapasitas terbatas (standar Linux $\\approx 8$ MB, Windows $\\approx 1$ MB). Jika rekursi berlanjut hingga kedalaman $100.000$ tingkat tanpa basis yang tercapai, program akan mengalami **Crash Fatal (Stack Overflow Exception)**!`
      },
      {
        id: '5-2-substitusi-mundur',
        title: '5.2 Metode 1: Substitusi Mundur (Backward Substitution / Unrolling)',
        summary: 'Metode ekspansi berulang untuk menemukan pola ke-k dan menyelesaikan relasi rekurensi subtraktif dan multiplikatif hingga ke basis.',
        readTime: '11 menit',
        keyTakeaways: [
          'Langkah 1: Tuliskan persamaan awal T(n).',
          'Langkah 2: Substitusikan T(n-1) atau T(n/b) berulang kali (unrolling) hingga pola ke-k terlihat.',
          'Langkah 3: Tuliskan formula umum dalam suku variabel k.',
          'Langkah 4: Tentukan nilai k yang membuat parameter mencapai kondisi basis (misal n - k = 1 atau n/2^k = 1).',
          'Langkah 5: Gantikan k ke formula umum dan sederhanakan.'
        ],
        content: `### Prosedur Standar Substitusi Mundur
Metode ini sangat ampuh untuk rekurensi dengan pola pengurangan ukuran ($T(n) = a T(n-c) + f(n)$) maupun pembagian sederhana.

---

### Studi Kasus 1: Algoritma Faktorial ($T(n) = T(n-1) + 1$)
* Basis: $T(1) = 1$.
* **Ekspansi 1**: $T(n) = [T(n-2) + 1] + 1 = T(n-2) + 2$
* **Ekspansi 2**: $T(n) = [T(n-3) + 1] + 2 = T(n-3) + 3$
* **Pola ke-$k$**: $T(n) = T(n - k) + k$
* **Mencapai basis**: $n - k = 1 \\iff k = n - 1$
* **Substitusi**: $T(n) = T(1) + (n - 1) = 1 + n - 1 = n \\in \\mathbf{\\Theta(n)}$

---

### Studi Kasus 2: Menara Hanoi ($T(n) = 2T(n-1) + 1$)
* Basis: $T(1) = 1$.
* **Ekspansi 1**: $T(n) = 2[2T(n-2) + 1] + 1 = 2^2 T(n-2) + 2 + 1$
* **Ekspansi 2**: $T(n) = 2^2[2T(n-3) + 1] + 2 + 1 = 2^3 T(n-3) + 2^2 + 2^1 + 2^0$
* **Pola ke-$k$**: $T(n) = 2^k T(n - k) + \\sum_{i=0}^{k-1} 2^i$
* **Mencapai basis**: $n - k = 1 \\iff k = n - 1$
* **Substitusi**: $T(n) = 2^{n-1} T(1) + \\sum_{i=0}^{n-2} 2^i = 2^{n-1} + (2^{n-1} - 1) = 2 \\cdot 2^{n-1} - 1 = 2^n - 1 \\in \\mathbf{\\Theta(2^n)}$

---

### Studi Kasus 3: Binary Search Melalui Unrolling ($T(n) = T(n/2) + 1$)
* Basis: $T(1) = 1$.
* **Ekspansi 1**: $T(n) = [T(n/4) + 1] + 1 = T(n/4) + 2$
* **Ekspansi 2**: $T(n) = [T(n/8) + 1] + 2 = T(n/8) + 3$
* **Pola ke-$k$**: $T(n) = T\\left(\\frac{n}{2^k}\\right) + k$
* **Mencapai basis**: $\\frac{n}{2^k} = 1 \\iff 2^k = n \\iff k = \\log_2 n$
* **Substitusi**: $T(n) = T(1) + \\log_2 n = 1 + \\log_2 n \\in \\mathbf{\\Theta(\\log n)}$

---

### Studi Kasus 4: Merge Sort Melalui Unrolling ($T(n) = 2T(n/2) + n$)
* Basis: $T(1) = 1$.
* **Ekspansi 1**:
  $$T(n) = 2\\left[2T\\left(\\frac{n}{4}\\right) + \\frac{n}{2}\\right] + n = 4T\\left(\\frac{n}{4}\\right) + n + n = 4T\\left(\\frac{n}{4}\\right) + 2n$$
* **Ekspansi 2**:
  $$T(n) = 4\\left[2T\\left(\\frac{n}{8}\\right) + \\frac{n}{4}\\right] + 2n = 8T\\left(\\frac{n}{8}\\right) + n + 2n = 8T\\left(\\frac{n}{8}\\right) + 3n$$
* **Pola ke-$k$**:
  $$T(n) = 2^k T\\left(\\frac{n}{2^k}\\right) + k \\cdot n$$
* **Mencapai basis**: $\\frac{n}{2^k} = 1 \\iff 2^k = n \\iff k = \\log_2 n$
* **Substitusi nilai $k = \\log_2 n$**:
  $$T(n) = 2^{\\log_2 n} T(1) + (\\log_2 n) \\cdot n = n \\cdot (1) + n \\log_2 n = n \\log_2 n + n \\in \\mathbf{\\Theta(n \\log n)}$$
Inilah bukti aljabar paling jernih mengapa Merge Sort selalu menghasilkan kompleksitas $\\Theta(n \\log n)$!`
      },
      {
        id: '5-3-teorema-master',
        title: '5.3 Metode 2: Teorema Master (Master Theorem)',
        summary: 'Metode rumus cepat standar untuk memecahkan relasi divide-and-conquer T(n) = aT(n/b) + f(n).',
        readTime: '12 menit',
        keyTakeaways: [
          'Bentuk standar Teorema Master: T(n) = a T(n/b) + f(n) dengan a >= 1 dan b > 1.',
          'Nilai Kritis: Hitung n^(log_b a) dan bandingkan dengan f(n).',
          'Kasus 1 (Pekerjaan Daun Mendominasi): f(n) = O(n^(log_b a - ε)) -> T(n) = Θ(n^(log_b a)).',
          'Kasus 2 (Pekerjaan Merata di Setiap Level): f(n) = Θ(n^(log_b a) * log^k n) -> T(n) = Θ(n^(log_b a) * log^(k+1) n).',
          'Kasus 3 (Pekerjaan Akar Mendominasi): f(n) = Ω(n^(log_b a + ε)) dan a*f(n/b) <= c*f(n) -> T(n) = Θ(f(n)).'
        ],
        content: `### Rumus Sakti Divide and Conquer
Teorema Master (Cormen et al.) adalah alat paling praktis dalam analisis algoritma karena mengubah perhitungan deret yang rumit menjadi perbandingan aljabar sederhana.

Bentuk umum:
$$T(n) = a \\cdot T\\left(\\frac{n}{b}\\right) + f(n)$$
* $a \\ge 1$: Jumlah sub-masalah di setiap pemanggilan rekursif.
* $b > 1$: Faktor pembagi ukuran masukan.
* $f(n)$: Biaya komputasi di luar pemanggilan rekursif (misal membagi dan menggabungkan data).

---

### Kunci Utama: Nilai Kritis $\\mathbf{n^{\\log_b a}}$
Nilai $n^{\\log_b a}$ merepresentasikan **total biaya pekerjaan pada seluruh daun (leaves) pohon rekursi**.
Teorema Master bekerja dengan membandingkan pertumbuhan $f(n)$ (pekerjaan di akar) terhadap $n^{\\log_b a}$ (pekerjaan di daun):

---

#### Kasus 1: Pekerjaan di Daun Mendominasi
Jika $f(n) = O(n^{\\log_b a - \\epsilon})$ untuk suatu konstanta $\\epsilon > 0$:
$$T(n) = \\Theta(n^{\\log_b a})$$
*Intuisi*: Biaya di daun jauh lebih besar daripada biaya membagi/menggabungkan di akar.

*Contoh Kasus 1*:
$$T(n) = 8T(n/2) + 1000n^2$$
* $a = 8, b = 2, f(n) = 1000n^2$
* Nilai kritis: $n^{\\log_2 8} = n^3$
* Bandingkan: $f(n) = 1000n^2$ tumbuh lebih lambat dari $n^3$ (karena pangkat $2 < 3$, ada $\\epsilon = 1$).
* **Solusi**: $$T(n) = \\Theta(n^3)$$

---

#### Kasus 2: Pekerjaan Terdistribusi Merata
Jika $f(n) = \\Theta(n^{\\log_b a} \\cdot \\log^k n)$ dengan $k \\ge 0$:
$$T(n) = \\Theta(n^{\\log_b a} \\cdot \\log^{k+1} n)$$
*(Biasanya $k = 0$, sehingga jika $f(n) = \\Theta(n^{\\log_b a})$, maka $T(n) = \\Theta(n^{\\log_b a} \\log n)$).*

*Contoh Kasus 2 (Merge Sort)*:
$$T(n) = 2T(n/2) + n$$
* $a = 2, b = 2, f(n) = n$
* Nilai kritis: $n^{\\log_2 2} = n^1 = n$
* Karena $f(n) = \\Theta(n)$, ini cocok persis dengan Kasus 2 dengan $k = 0$.
* **Solusi**: $$T(n) = \\Theta(n \\log n)$$

*Contoh Kasus 2 (Binary Search)*:
$$T(n) = T(n/2) + 1$$
* $a = 1, b = 2, f(n) = 1 = n^0$
* Nilai kritis: $n^{\\log_2 1} = n^0 = 1$
* Karena $f(n) = \\Theta(1)$, Kasus 2 dengan $k = 0$.
* **Solusi**: $$T(n) = \\Theta(1 \\cdot \\log^1 n) = \\Theta(\\log n)$$

---

#### Kasus 3: Pekerjaan di Akar Mendominasi
Jika $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ untuk suatu konstanta $\\epsilon > 0$, dan memenuhi **Kondisi Regularitas**:
$$a \\cdot f\\left(\\frac{n}{b}\\right) \\le c \\cdot f(n), \\quad \\text{untuk suatu konstanta } c < 1$$
Maka:
$$T(n) = \\Theta(f(n))$$

*Contoh Kasus 3*:
$$T(n) = 3T(n/4) + n^2$$
* $a = 3, b = 4, f(n) = n^2$
* Nilai kritis: $n^{\\log_4 3} \\approx n^{0.793}$
* Karena $n^2$ tumbuh jauh lebih cepat daripada $n^{0.793}$ (ada $\\epsilon \\approx 1.2 > 0$).
* Uji regularitas: $3(n/4)^2 = \\frac{3}{16} n^2 \\le c \\cdot n^2$ (terpenuhi dengan $c = 3/16 < 1$).
* **Solusi**: $$T(n) = \\Theta(n^2)$$

---

### Teorema Master yang Diperluas (Extended Master Theorem)
Ketika $f(n)$ mengandung faktor logaritma $\\log^k n$, Teorema Master diperluas sebagai berikut:
1. **Jika $f(n) = O(n^{\\log_b a - \\epsilon})$**:
   $$T(n) = \\Theta(n^{\\log_b a})$$
2. **Jika $f(n) = \\Theta(n^{\\log_b a} \\cdot \\log^k n)$**:
   * Jika $k > -1$: $T(n) = \\Theta(n^{\\log_b a} \\cdot \\log^{k+1} n)$
   * Jika $k = -1$ ($f(n) = \\frac{n^{\\log_b a}}{\\log n}$): $T(n) = \\Theta(n^{\\log_b a} \\cdot \\log(\\log n))$
   * Jika $k < -1$: $T(n) = \\Theta(n^{\\log_b a})$
3. **Jika $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$** dan memenuhi kondisi regularitas:
   $$T(n) = \\Theta(f(n))$$

---

### Kapan Teorema Master TIDAK BISA Digunakan?
1. Jika $a$ bukan konstanta (misal $T(n) = n T(n/2) + n$).
2. Jika pembagian bukan fraksional (misal $T(n) = T(n-1) + 1$ $\\to$ gunakan substitusi mundur).
3. Jika perbedaan antara $f(n)$ dan $n^{\\log_b a}$ bukan polinomial (misal gap logaritmik $\\frac{n}{\\log n}$ tanpa extended theorem).
4. Jika rasio sub-masalah tidak seragam (misal $T(n) = T(n/3) + T(2n/3) + n$ $\\to$ gunakan metode Pohon Rekursi atau Teorema Akra-Bazzi).`
      },
      {
        id: '5-4-pohon-rekursi',
        title: '5.4 Metode 3: Pohon Rekursi (Recursion Tree Method)',
        summary: 'Visualisasi struktural pohon pemanggilan untuk menghitung biaya tiap level, rasio deret geometri, dan pembuktian Merge Sort serta Karatsuba.',
        readTime: '10 menit',
        keyTakeaways: [
          'Pohon rekursi memvisualisasikan pemanggilan fungsi sebagai simpul pohon bertingkat.',
          'Biaya Level i = (Jumlah Node di Level i) x (Biaya per Node di Level i).',
          'Tinggi pohon h = log_b(n); total daun = a^h = n^(log_b a).',
          'Jika rasio biaya antar level r < 1 (akar mendominasi), r = 1 (biaya rata), r > 1 (daun mendominasi).'
        ],
        content: `### Mengapa Menggunakan Pohon Rekursi?
Pohon rekursi memberikan **intuisi visual yang sangat kuat** tentang bagaimana algoritma mendistribusikan beban komputasi. Ini juga merupakan cara terbaik untuk membedah mengapa Teorema Master bekerja serta menyelesaikan relasi yang tidak seimbang.

---

### Anatomi Pohon Rekursi untuk $T(n) = a T(n/b) + f(n)$

\`\`\`
Level 0 (Akar):            f(n)                        --> Total Level 0: f(n)
                         /      \\
Level 1:          f(n/b)   ...   f(n/b)                --> Total Level 1: a * f(n/b)
                  /    \\         /    \\
Level 2:      f(n/b²) ...       ... f(n/b²)            --> Total Level 2: a² * f(n/b²)
                ...                 ...
Level h (Daun): T(1) T(1) ...        ... T(1)          --> Total Daun: a^h * T(1) = Θ(n^(log_b a))
\`\`\`

1. **Kedalaman / Tinggi Pohon ($h$)**:
   Ukuran masalah di level $i$ adalah $\\frac{n}{b^i}$. Pohon berhenti saat ukuran mencapai 1:
   $$\\frac{n}{b^h} = 1 \\iff b^h = n \\iff h = \\log_b n$$

2. **Jumlah Daun pada Level Terakhir ($h$)**:
   $$\\text{Jumlah daun} = a^h = a^{\\log_b n} = n^{\\log_b a}$$

3. **Total Pekerjaan**:
   $$T(n) = \\sum_{i=0}^{h-1} (\\text{Biaya Level } i) + (\\text{Biaya Daun})$$

---

### Studi Kasus 1: Merge Sort ($T(n) = 2T(n/2) + cn$) — Rasio $r = 1$
* **Level 0**: $1 \\times cn = cn$.
* **Level 1**: $2 \\times c(n/2) = cn$.
* **Level 2**: $4 \\times c(n/4) = cn$.
* **Pola Level**: Biaya setiap level **konstan $cn$** (rasio per level $r = 1$).
* **Tinggi pohon**: $h = \\log_2 n$.
* **Total Keseluruhan**:
  $$T(n) = \\sum_{i=0}^{\\log_2 n} cn = cn \\cdot (\\log_2 n + 1) \\in \\mathbf{\\Theta(n \\log n)}$$

---

### Studi Kasus 2: Perkalian Karatsuba ($T(n) = 3T(n/2) + cn$) — Rasio $r > 1$
Pada perkalian integer besar Karatsuba:
* **Level 0**: $cn$.
* **Level 1**: $3 \\times c(n/2) = \\frac{3}{2} cn$.
* **Level 2**: $9 \\times c(n/4) = \\left(\\frac{3}{2}\\right)^2 cn$.
* **Pola Level**: Total biaya level membentuk deret geometri dengan rasio $r = 3/2 = 1.5 > 1$!
* Karena rasio $r > 1$, jumlahan total **didominasi oleh level daun**:
  $$\\text{Total Daun} = 3^{\\log_2 n} = n^{\\log_2 3} \\approx n^{1.585}$$
* Total pekerjaan:
  $$T(n) = cn \\sum_{i=0}^{\\log_2 n - 1} \\left(\\frac{3}{2}\\right)^i + \\Theta(n^{\\log_2 3}) = \\mathbf{\\Theta(n^{\\log_2 3})} \\approx \\mathbf{O(n^{1.585})}$$
Karatsuba berhasil memangkas kompleksitas perkalian dari kuadratik $O(n^2)$ menjadi $O(n^{1.585})$!`
      },
      {
        id: '5-5-induksi-matematika',
        title: '5.5 Metode 4: Induksi Matematika (Guess and Verify)',
        summary: 'Metode pembuktian formal dengan menebak batas asimptotik dan membuktikannya lewat basis dan langkah induksi.',
        readTime: '7 menit',
        keyTakeaways: [
          'Langkah 1: Tebak bentuk solusi asimptotik (misal T(n) <= c * n log n).',
          'Langkah 2: Buktikan kondisi basis untuk nilai n kecil.',
          'Langkah 3: Asumsikan pernyataan benar untuk T(k) dengan k < n (Hipotesis Induksi).',
          'Langkah 4: Buktikan bahwa pernyataan benar untuk T(n) dan tentukan konstanta c yang valid.'
        ],
        content: `### Kapan Induksi Matematika Digunakan?
Ketika relasi rekurensi tidak memiliki bentuk baku Teorema Master, kita dapat membuat **tebakan terdidik (educated guess)** tentang orde pertumbuhannya, lalu memvalidasi tebakan tersebut secara formal menggunakan Induksi Matematika.

---

### Contoh Pembuktian Formal
Buktikan bahwa solusi dari $T(n) = 2T(\\lfloor n/2 \\rfloor) + n$ adalah $O(n \\log_2 n)$.

* **Tebakan**: $T(n) \\le c \\cdot n \\log_2 n$ untuk suatu konstanta $c > 0$ dan $n \\ge n_0$.
* **Hipotesis Induksi**:
  Asumsikan tebakan benar untuk ukuran yang lebih kecil, yaitu:
  $$T(\\lfloor n/2 \\rfloor) \\le c \\cdot \\lfloor n/2 \\rfloor \\log_2(\\lfloor n/2 \\rfloor)$$
* **Langkah Induksi untuk $T(n)$**:
  Substitusikan hipotesis ke persamaan awal:
  $$T(n) = 2T(\\lfloor n/2 \\rfloor) + n$$
  $$T(n) \\le 2 \\left( c \\frac{n}{2} \\log_2\\left(\\frac{n}{2}\\right) \\right) + n$$
  $$T(n) \\le c \\cdot n (\\log_2 n - \\log_2 2) + n$$
  Karena $\\log_2 2 = 1$:
  $$T(n) \\le c \\cdot n \\log_2 n - c \\cdot n + n$$
  $$T(n) \\le c \\cdot n \\log_2 n - (c - 1)n$$
* Agar $T(n) \\le c \\cdot n \\log_2 n$, kita hanya perlu memastikan bahwa:
  $$-(c - 1)n \\le 0 \\iff c - 1 \\ge 0 \\iff c \\ge 1$$
* Dengan memilih sembarang konstanta $c \\ge 1$ dan $n_0 = 2$, langkah induksi terbukti valid!
* **Kesimpulan**: Terbukti secara formal bahwa $T(n) \\in O(n \\log n)$. $\\blacksquare$

---

### Trik Krusial Induksi: Mengurangi Suku Orde Rendah (Subtracting a Lower-Order Term)
Seringkali saat mencoba membuktikan batas atas dengan induksi, sisa konstanta membuat pertidaksamaan gagal.
*Contoh Kasus*: Buktikan $T(n) = 2T(n/2) + 1$ adalah $O(n)$.
* *Tebakan Naif*: Asumsikan $T(n) \\le c \\cdot n$.
* *Langkah Induksi*:
  $$T(n) = 2(c(n/2)) + 1 = cn + 1$$
  Kita ingin $cn + 1 \\le cn$, namun ini **MUSTAHIL** karena $1 \\le 0$ selalu salah! Tebakan naif gagal.
* *Solusi Jenius (Kurangi Suku Orde Rendah)*:
  Ubah tebakan menjadi lebih ketat: **$T(n) \\le cn - d$** untuk konstanta $d > 0$.
* *Langkah Induksi Baru*:
  $$T(n) = 2\\left( c\\frac{n}{2} - d \\right) + 1 = cn - 2d + 1 = cn - d - (d - 1)$$
  Agar $cn - d - (d - 1) \\le cn - d$, kita hanya perlu:
  $$-(d - 1) \\le 0 \\iff d - 1 \\ge 0 \\iff d \\ge 1$$
* Pilih $d = 1$ dan $c \\ge 2$. Pertidaksamaan terbukti sempurna!
* Inilah teknik standar yang diajarkan di MIT dan Stanford untuk menaklukkan kegagalan induksi rekursif!`
      },
      {
        id: '5-6-detail-krusial',
        title: '5.6 Detail Krusial: Kompleksitas Ruang Call Stack, "Gap" Teorema Master, Relasi Tak Seimbang, dan Bahaya Redundansi Fibonacci',
        summary: 'Pahami aspek-aspek terdalam dari algoritma rekursif: konsumsi memori stack frame, batas limit Teorema Master di mana teorema standar gagal, rekursi tidak seimbang, dan optimasi Tail Recursion (TCO).',
        readTime: '10 menit',
        keyTakeaways: [
          'Setiap pemanggilan fungsi rekursif mengalokasikan stack frame di RAM; kedalaman pohon h menentukan Auxiliary Space.',
          'Teorema Master standar GAGAL jika perbedaan f(n) dan n^(log_b a) bukan polinomial (misal T(n) = 2T(n/2) + n/log n).',
          'Pohon Rekursi Tak Seimbang T(n) = T(n/3) + T(2n/3) + cn memiliki daun terpendek log_3 n dan terpanjang log_{1.5} n, total Θ(n log n).',
          'Bencana Fibonacci Naif: T(n) = T(n-1) + T(n-2) menghasilkan Θ(φ^n) dengan φ = 1.618 akibat overlapping subproblems.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Tail Recursion vs Non-Tail Recursion
// Versi Non-Tail: Butuh O(n) call stack karena ada operasi (* n) yang tertunda
long long faktorial(int n) {
    if (n <= 1) return 1;
    return n * faktorial(n - 1); // Tertunda operasi perkalian
}

// Versi Tail-Recursive: Operasi rekursif murni di posisi ekor
long long faktorialTail(int n, long long acc = 1) {
    if (n <= 1) return acc;
    return faktorialTail(n - 1, acc * n); // Compiler dapat mengoptimasi ke O(1) space!
}`,
          explanation: 'Tail Call Optimization (TCO) menghapus alokasi frame stack baru dengan me-reuse frame yang sedang aktif.'
        },
        content: `### 1. Kompleksitas Ruang Call Stack (Call Stack Overhead)
Ketika Anda menulis fungsi rekursif, sistem operasi tidak hanya mengeksekusi kode, tetapi juga menyimpan state pemanggilan:
* Alamat kembali (*return address*).
* Parameter fungsi ($n$).
* Variabel lokal.

Semua ini disimpan dalam **Call Stack Frame**.
$$\\text{Auxiliary Space Rekursif} = O(\\text{Kedalaman Maksimum Pohon Rekursi } h)$$
* Pada faktorial atau linear search rekursif: kedalaman $h = n \\implies O(n)$ Space. Jika $n = 1.000.000$, program akan mengalami **Stack Overflow Crash**!
* Pada Merge Sort: kedalaman $h = \\log_2 n \\implies O(\\log n)$ Stack Space.

---

### 2. Celah Teorema Master (The Master Theorem Gap)
Perhatikan relasi berikut:
$$T(n) = 2T(n/2) + \\frac{n}{\\log n}$$
Mari kita uji dengan Teorema Master:
* $a = 2, b = 2 \\implies n^{\\log_b a} = n^{\\log_2 2} = n^1 = n$.
* $f(n) = \\frac{n}{\\log n}$.
* Perhatikan bahwa $\\frac{n}{\\log n}$ secara asimptotik lebih kecil dari $n$.
* **APAKAH KASUS 1 BERLAKU?**
  Syarat Kasus 1: $f(n) = O(n^{\\log_b a - \\epsilon})$ untuk suatu konstanta $\\epsilon > 0$.
  Apakah ada $\\epsilon > 0$ sedemikian sehingga $\\frac{n}{\\log n} \\le n^{1 - \\epsilon}$?
  **TIDAK ADA!** Karena $\\frac{n}{\\log n}$ lebih besar daripada $n^{0.9999}$ untuk $n$ besar.
* Perbedaannya **bukan polinomial**, melainkan logaritmik!
* **Kesimpulan**: Teorema Master standar **GAGAL TOTAL** pada kasus ini!
* Solusinya harus dihitung menggunakan **Pohon Rekursi**:
  Pada level $i$, biayanya adalah $\\frac{n}{\\log(n / 2^i)}$. Jumlahan totalnya menghasilkan solusi $T(n) = \\mathbf{\\Theta(n \\log \\log n)}$.

---

### 3. Pohon Rekursi Tak Seimbang (Unbalanced Divide-and-Conquer)
Perhatikan relasi:
$$T(n) = T(n/3) + T(2n/3) + cn$$
* Pada akar: biaya $= cn$.
* Pada level 1: biaya $= c(n/3) + c(2n/3) = cn$.
* Pada level 2: biaya $= c(n/9) + c(2n/9) + c(2n/9) + c(4n/9) = cn$.
* Di setiap level biaya penjumlahan sub-masalah **selalu konstan $cn$**!
* Kapan daun pertama tercapai? Pada cabang terkiri $(n/3)^k = 1 \\implies k = \\log_3 n$.
* Kapan daun terakhir tercapai? Pada cabang terkanan $(2/3)^k n = 1 \\implies k = \\log_{3/2} n$.
* Total biaya diapit antara $cn \\log_3 n$ dan $cn \\log_{1.5} n$.
* Karena keduanya bertumbuh sebanding dengan $n \\log n$, solusinya adalah **$T(n) = \\mathbf{\\Theta(n \\log n)}$**!

---

### 4. Bencana Pohon Rekursi Fibonacci Naif & Rasio Emas $\\phi \\approx 1.618$
Perhatikan relasi Fibonacci naif:
$$T(n) = T(n - 1) + T(n - 2) + c$$
* **Persamaan Karakteristik Homogen**:
  $$r^2 - r - 1 = 0$$
* Dengan rumus abc kuadratik:
  $$r = \\frac{1 \\pm \\sqrt{1 - 4(1)(-1)}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}$$
* Akar positifnya adalah bilangan **Rasio Emas (Golden Ratio)**:
  $$\\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.6180339887...$$
* Berdasarkan Formula Binet, jumlah pemanggilan fungsi bertumbuh eksponensial murni:
  $$T(n) = \\mathbf{\\Theta(\\phi^n)} = \\mathbf{\\Theta(1.618^n)}$$
* **Mengapa Bencana Ini Terjadi?**
  Terjadi tumpang tindih submasalah yang parah (*overlapping subproblems*):
  Untuk menghitung \`fib(5)\`, komputer menghitung \`fib(3)\` sebanyak 2 kali, \`fib(2)\` sebanyak 3 kali, dan \`fib(1)\` sebanyak 5 kali!
  Pada $n = 50$, jumlah operasi mencapai $1.618^{50} \\approx 2.8 \\times 10^{10}$ operasi!
  Dengan menyimpan hasil perhitungan (Dynamic Programming / Memoization), pohon bercabang dua tersebut diratakan menjadi rantai linear sederhana berorde **$\\mathbf{\\Theta(n)}$**.`
      }
    ],
    quiz: MODULE_QUIZZES.rekursif
  }
];

export interface CaseStudy {
  id: string;
  type: 'iteratif' | 'rekursif';
  title: string;
  problemDesc: string;
  code: string;
  language: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    mathFormula?: string;
  }[];
  finalComplexity: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-bubble-sort',
    type: 'iteratif',
    title: 'Studi Kasus 1: Bubble Sort (Iteratif Segitiga)',
    problemDesc: 'Analisis kompleksitas worst-case dari algoritma Bubble Sort standar terhadap array berukuran n.',
    language: 'cpp',
    code: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // OPERASI DASAR
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,
    finalComplexity: 'Θ(n²)',
    steps: [
      {
        stepNumber: 1,
        title: 'Tentukan Parameter Ukuran Input',
        description: 'Parameter masukan adalah n, yaitu jumlah elemen dalam array yang akan diurutkan.'
      },
      {
        stepNumber: 2,
        title: 'Identifikasi Operasi Dasar',
        description: 'Operasi dasar adalah perbandingan dua elemen bersebelahan: if (arr[j] > arr[j + 1]). Operasi ini berada di dalam loop terdalam.'
      },
      {
        stepNumber: 3,
        title: 'Susun Model Notasi Sigma',
        description: 'Loop luar berjalan dari i = 0 sampai n - 2. Loop dalam berjalan dari j = 0 sampai n - 2 - i.',
        mathFormula: 'C(n) = \\sum_{i=0}^{n-2} \\sum_{j=0}^{n-2-i} 1'
      },
      {
        stepNumber: 4,
        title: 'Selesaikan Sigma Dalam',
        description: 'Gunakan rumus batas ∑_{j=l}^u 1 = u - l + 1: (n - 2 - i) - 0 + 1 = n - 1 - i.',
        mathFormula: 'C(n) = \\sum_{i=0}^{n-2} (n - 1 - i)'
      },
      {
        stepNumber: 5,
        title: 'Ekspansi Deret Aritmatika',
        description: 'Deret ini setara dengan menjumlahkan bilangan bulat dari 1 sampai n - 1: (n-1) + (n-2) + ... + 1.',
        mathFormula: 'C(n) = \\frac{(n-1)n}{2} = \\frac{n^2 - n}{2}'
      },
      {
        stepNumber: 6,
        title: 'Kesimpulan Asimptotik',
        description: 'Suku dominan adalah n²/2. Mengabaikan konstanta 1/2 dan suku -n/2 menghasilkan kelas efisiensi kuadratik.',
        mathFormula: 'C(n) \\in \\Theta(n^2)'
      }
    ]
  },
  {
    id: 'case-binary-search-iter',
    type: 'iteratif',
    title: 'Studi Kasus 2: Binary Search (Iteratif Logaritmik)',
    problemDesc: 'Analisis kompleksitas worst-case algoritma Binary Search iteratif pada array terurut.',
    language: 'cpp',
    code: `int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid; // Operasi dasar
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
    finalComplexity: 'Θ(log n)',
    steps: [
      {
        stepNumber: 1,
        title: 'Tentukan Parameter Ukuran Input',
        description: 'Parameter ukuran input adalah n, yaitu rentang elemen yang dicari.'
      },
      {
        stepNumber: 2,
        title: 'Identifikasi Operasi Dasar',
        description: 'Operasi dasar adalah perbandingan nilai tengah arr[mid] dengan target.'
      },
      {
        stepNumber: 3,
        title: 'Analisis Perubahan Rentang Pencarian',
        description: 'Di setiap iterasi while loop, ukuran rentang pencarian dipotong menjadi setengahnya: n -> n/2 -> n/4 -> ... -> n / (2^k).'
      },
      {
        stepNumber: 4,
        title: 'Kondisi Worst-Case & Berhenti',
        description: 'Worst-case terjadi ketika target tidak ada. Loop berhenti saat rentang tersisa 1 elemen (n / 2^k <= 1).',
        mathFormula: '\\frac{n}{2^k} = 1 \\iff 2^k = n \\iff k = \\log_2 n'
      },
      {
        stepNumber: 5,
        title: 'Kesimpulan Asimptotik',
        description: 'Jumlah perbandingan maksimal adalah k + 1 = floor(log2 n) + 1.',
        mathFormula: 'T(n) \\in \\Theta(\\log n)'
      }
    ]
  },
  {
    id: 'case-merge-sort-rec',
    type: 'rekursif',
    title: 'Studi Kasus 3: Merge Sort (Rekursif Divide & Conquer)',
    problemDesc: 'Analisis kompleksitas Merge Sort menggunakan Teorema Master dan Pohon Rekursi.',
    language: 'cpp',
    code: `void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);       // T(n/2)
        mergeSort(arr, m + 1, r);   // T(n/2)
        merge(arr, l, m, r);        // Menggabungkan: O(n)
    }
}`,
    finalComplexity: 'Θ(n log n)',
    steps: [
      {
        stepNumber: 1,
        title: 'Bentuk Relasi Rekurensi',
        description: 'Array dibagi 2 bagian sama besar (2 kali pemanggilan rekursif berukuran n/2), dan prosedur merge membutuhkan waktu linear O(n) untuk menggabungkan dua sub-array terurut.',
        mathFormula: 'T(n) = 2T(n/2) + c \\cdot n, \\quad \\text{dengan basis } T(1) = 1'
      },
      {
        stepNumber: 2,
        title: 'Identifikasi Parameter Teorema Master',
        description: 'Bandingkan dengan bentuk standar T(n) = a T(n/b) + f(n): a = 2, b = 2, dan f(n) = c*n.',
        mathFormula: 'a = 2, \\quad b = 2, \\quad f(n) = \\Theta(n^1)'
      },
      {
        stepNumber: 3,
        title: 'Hitung Nilai Kritis',
        description: 'Hitung n^(log_b a):',
        mathFormula: 'n^{\\log_2 2} = n^1 = n'
      },
      {
        stepNumber: 4,
        title: 'Pilih Kasus Teorema Master yang Cocok',
        description: 'Karena f(n) = Θ(n) dan n^(log_b a) = n, laju pertumbuhannya persis sama! Ini adalah Kasus 2 dengan k = 0.',
        mathFormula: 'f(n) = \\Theta(n^{\\log_b a} \\cdot \\log^0 n) = \\Theta(n)'
      },
      {
        stepNumber: 5,
        title: 'Kesimpulan Akhir',
        description: 'Berdasarkan Kasus 2 Teorema Master, kalikan dengan log n:',
        mathFormula: 'T(n) = \\Theta(n^{\\log_b a} \\log^{0+1} n) = \\Theta(n \\log n)'
      }
    ]
  },
  {
    id: 'case-hanoi-rec',
    type: 'rekursif',
    title: 'Studi Kasus 4: Menara Hanoi (Rekursif Eksponensial)',
    problemDesc: 'Analisis pemindahan n piringan pada teka-teki Menara Hanoi menggunakan metode Substitusi Mundur.',
    language: 'cpp',
    code: `void hanoi(int n, char dari, char ke, char bantu) {
    if (n == 1) {
        cout << "Pindahkan piringan 1 dari " << dari << " ke " << ke << endl;
        return;
    }
    hanoi(n - 1, dari, bantu, ke); // Panggilan 1
    cout << "Pindahkan piringan " << n << " dari " << dari << " ke " << ke << endl;
    hanoi(n - 1, bantu, ke, dari); // Panggilan 2
}`,
    finalComplexity: 'Θ(2^n)',
    steps: [
      {
        stepNumber: 1,
        title: 'Bentuk Relasi Rekurensi',
        description: 'Untuk memindahkan n piringan: pindahkan n-1 piringan ke tiang bantu (T(n-1)), pindahkan piringan terbesar ke tujuan (1 langkah), lalu pindahkan n-1 piringan dari tiang bantu ke tujuan (T(n-1)).',
        mathFormula: 'T(n) = 2T(n-1) + 1, \\quad \\text{dengan } T(1) = 1'
      },
      {
        stepNumber: 2,
        title: 'Ekspansi Iteratif (Substitusi Mundur)',
        description: 'T(n) = 2[2T(n-2) + 1] + 1 = 4T(n-2) + 2 + 1 = 2^2 T(n-2) + 2^1 + 2^0.',
        mathFormula: 'T(n) = 2^2 T(n-2) + 2 + 1'
      },
      {
        stepNumber: 3,
        title: 'Temukan Pola Umum ke-k',
        description: 'Setelah k kali ekspansi berulang:',
        mathFormula: 'T(n) = 2^k T(n-k) + \\sum_{i=0}^{k-1} 2^i'
      },
      {
        stepNumber: 4,
        title: 'Tentukan Kondisi Basis',
        description: 'Basis tercapai ketika n - k = 1 <=> k = n - 1. Substitusikan k = n - 1:',
        mathFormula: 'T(n) = 2^{n-1} T(1) + \\sum_{i=0}^{n-2} 2^i'
      },
      {
        stepNumber: 5,
        title: 'Gunakan Rumus Deret Geometri',
        description: 'Jumlah deret geometri ∑_{i=0}^{n-2} 2^i = 2^(n-1) - 1. Maka T(n) = 2^(n-1) + 2^(n-1) - 1 = 2 * 2^(n-1) - 1 = 2^n - 1.',
        mathFormula: 'T(n) = 2^n - 1'
      },
      {
        stepNumber: 6,
        title: 'Kesimpulan Asimptotik',
        description: 'Karena konstanta -1 dapat diabaikan pada n besar, kompleksitasnya adalah eksponensial.',
        mathFormula: 'T(n) \\in \\Theta(2^n)'
      }
    ]
  },
  {
    id: 'case-fibonacci-comparison',
    type: 'rekursif',
    title: 'Studi Kasus 5: Fibonacci Rekursif Naif vs Fibonacci Iteratif',
    problemDesc: 'Perbandingan dramatis antara pendekatan rekursif naif O(2^n) dengan iteratif O(n).',
    language: 'cpp',
    code: `// Versi Rekursif Naif: BENCANA EKSPONENSIAL O(2^n)
long long fibRec(int n) {
    if (n <= 1) return n;
    return fibRec(n - 1) + fibRec(n - 2); // Pohon rekursi bercabang dua tanpa memoisasi
}

// Versi Iteratif: LINEAR CEPAT O(n)
long long fibIter(int n) {
    if (n <= 1) return n;
    long long prev2 = 0, prev1 = 1, current;
    for (int i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return current;
}`,
    finalComplexity: 'Rekursif Naif: Θ(2^n) vs Iteratif: Θ(n)',
    steps: [
      {
        stepNumber: 1,
        title: 'Analisis Rekursif Naif',
        description: 'Relasi rekursif: T(n) = T(n-1) + T(n-2) + c. Pohon pemanggilan membentuk pohon biner penuh di mana sub-masalah yang sama dihitung berulang-ulang ratusan juta kali (overlapping subproblems).',
        mathFormula: 'T(n) > 2 T(n-2) \\implies T(n) \\in \\Omega(2^{n/2}) = \\Omega((\\sqrt{2})^n) \\approx O(1.618^n)'
      },
      {
        stepNumber: 2,
        title: 'Dampak Nyata',
        description: 'Untuk menghitung fibRec(50), versi rekursif naif membutuhkan lebih dari 2.000.000.000.000 (2 triliun) pemanggilan fungsi dan butuh berhari-hari!'
      },
      {
        stepNumber: 3,
        title: 'Analisis Versi Iteratif',
        description: 'Versi iteratif hanya menggunakan satu for-loop sederhana dari i = 2 sampai n. Jumlah operasi penjumlahan adalah n - 1 kali.',
        mathFormula: 'C(n) = \\sum_{i=2}^{n} 1 = n - 2 + 1 = n - 1 \\in \\Theta(n)'
      },
      {
        stepNumber: 4,
        title: 'Kesimpulan Pelajaran',
        description: 'Algoritma rekursif harus dianalisis dengan hati-hati. Jika ada tumpang tindih submasalah (overlapping subproblems), pendekatan iteratif atau dynamic programming (memoisasi) jauh lebih unggul.'
      }
    ]
  }
];

export interface FormulaCheatsheetItem {
  category: string;
  name: string;
  formula: string;
  notes: string;
}

export const CHEATSHEET_DATA: FormulaCheatsheetItem[] = [
  {
    category: 'Asimptotik',
    name: 'Definisi Big-O (Batas Atas)',
    formula: '0 \\le f(n) \\le c \\cdot g(n), \\quad \\forall n \\ge n_0',
    notes: 'Jaminan batas paling buruk (upper bound). c > 0, n0 >= 1.'
  },
  {
    category: 'Asimptotik',
    name: 'Definisi Big-Omega (Batas Bawah)',
    formula: '0 \\le c \\cdot g(n) \\le f(n), \\quad \\forall n \\ge n_0',
    notes: 'Jaminan performa minimal terbaik (lower bound).'
  },
  {
    category: 'Asimptotik',
    name: 'Definisi Big-Theta (Batas Ketat)',
    formula: 'c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n), \\quad \\forall n \\ge n_0',
    notes: 'f(n) = Θ(g(n)) <=> f(n) = O(g(n)) AND f(n) = Ω(g(n)).'
  },
  {
    category: 'Asimptotik',
    name: 'Hierarki Pertumbuhan',
    formula: '1 < \\log n < \\sqrt{n} < n < n \\log n < n^2 < n^3 < 2^n < n!',
    notes: 'Urutan efisiensi dari tercepat ke paling lambat.'
  },
  {
    category: 'Sigma',
    name: 'Batas Konstan 1',
    formula: '\\sum_{i=l}^{u} 1 = u - l + 1',
    notes: 'Jumlah perulangan dari indeks l sampai u.'
  },
  {
    category: 'Sigma',
    name: 'Deret Aritmatika (Gauss)',
    formula: '\\sum_{i=1}^{n} i = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2} \\in \\Theta(n^2)',
    notes: 'Kunci analisis nested loop segitiga (Selection/Bubble sort).'
  },
  {
    category: 'Sigma',
    name: 'Deret Kuadrat',
    formula: '\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6} \\in \\Theta(n^3)',
    notes: 'Penjumlahan kuadrat n bilangan asli pertama.'
  },
  {
    category: 'Sigma',
    name: 'Deret Geometri',
    formula: '\\sum_{i=0}^{k} r^i = \\frac{r^{k+1} - 1}{r - 1} \\quad (r \\ne 1)',
    notes: 'Menghitung total node pada pohon rekursi.'
  },
  {
    category: 'Logaritma',
    name: 'Identitas Pertukaran Basis (Master Theorem Key)',
    formula: 'a^{\\log_b n} = n^{\\log_b a}',
    notes: 'Digunakan untuk menghitung jumlah total pekerjaan di tingkat daun.'
  },
  {
    category: 'Logaritma',
    name: 'Perubahan Basis',
    formula: '\\log_b n = \\frac{\\log_a n}{\\log_a b} \\implies \\log_2 n = \\Theta(\\log_{10} n)',
    notes: 'Membuktikan bahwa basis logaritma tidak merubah kelas asimptotik.'
  },
  {
    category: 'Master Theorem',
    name: 'Bentuk Umum',
    formula: 'T(n) = a T(n/b) + f(n), \\quad a \\ge 1, b > 1',
    notes: 'Nilai kritis pembanding: n^(log_b a).'
  },
  {
    category: 'Master Theorem',
    name: 'Kasus 1: Daun Mendominasi',
    formula: 'f(n) = O(n^{\\log_b a - \\epsilon}) \\implies T(n) = \\Theta(n^{\\log_b a})',
    notes: 'Pekerjaan di daun lebih berat daripada di akar.'
  },
  {
    category: 'Master Theorem',
    name: 'Kasus 2: Beban Terbagi Rata',
    formula: 'f(n) = \\Theta(n^{\\log_b a} \\log^k n) \\implies T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)',
    notes: 'Contoh: Merge sort (a=2, b=2, k=0 -> Θ(n log n)).'
  },
  {
    category: 'Master Theorem',
    name: 'Kasus 3: Akar Mendominasi',
    formula: 'f(n) = \\Omega(n^{\\log_b a + \\epsilon}) \\implies T(n) = \\Theta(f(n))',
    notes: 'Pekerjaan di akar lebih berat (butuh syarat keteraturan a*f(n/b) <= c*f(n)).'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Linear Search',
    formula: 'Best: \\Theta(1), \\quad Worst: \\Theta(n), \\quad Avg: \\Theta(n)',
    notes: 'Pencarian berurutan pada array acak.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Binary Search',
    formula: 'Best: \\Theta(1), \\quad Worst: \\Theta(\\log n), \\quad Avg: \\Theta(\\log n)',
    notes: 'Hanya bisa dilakukan pada array terurut.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Merge Sort',
    formula: 'Best: \\Theta(n \\log n), \\quad Worst: \\Theta(n \\log n), \\quad Avg: \\Theta(n \\log n)',
    notes: 'Stabil, performa konsisten di semua skenario.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Perkalian Matriks Naif',
    formula: 'T(n) = \\sum_{i=1}^n \\sum_{j=1}^n \\sum_{k=1}^n 1 = n^3 \\in \\Theta(n^3)',
    notes: 'Tiga nested loop untuk matriks n x n.'
  }
];

import type { CourseId } from './courses';
import {
  DASAR_PEMROGRAMAN_MODULES,
  DASAR_PEMROGRAMAN_CHEATSHEET
} from './curriculumDasarPemrograman';
import {
  ALPRO_PEMULA_MODULES,
  ALPRO_PEMULA_CHEATSHEET
} from './curriculumAlproPemula';
import {
  KALKULUS_MODULES,
  KALKULUS_CHEATSHEET
} from './curriculumKalkulus';
import {
  ALJABAR_LINIER_MODULES,
  ALJABAR_LINIER_CHEATSHEET
} from './curriculumAljabarLinier';
import {
  MATEMATIKA_DISKRIT_MODULES,
  MATEMATIKA_DISKRIT_CHEATSHEET
} from './curriculumMatematikaDiskrit';
import {
  WEB_FRAMEWORK_MODULES,
  WEB_FRAMEWORK_CHEATSHEET
} from './curriculumWebFramework';
import {
  RPL_MODULES,
  RPL_CHEATSHEET
} from './curriculumRPL';
import {
  SISTEM_OPERASI_MODULES,
  SISTEM_OPERASI_CHEATSHEET
} from './curriculumSistemOperasi';
import {
  OOP_MODULES,
  OOP_CHEATSHEET
} from './curriculumOOP';

export const getModulesForCourse = (courseId: CourseId): ModuleData[] => {
  if (courseId === 'dasar_pemrograman') {
    return DASAR_PEMROGRAMAN_MODULES;
  }
  if (courseId === 'algoritma_pemrograman') {
    return ALPRO_PEMULA_MODULES;
  }
  if (courseId === 'kalkulus') {
    return KALKULUS_MODULES;
  }
  if (courseId === 'aljabar_linier') {
    return ALJABAR_LINIER_MODULES;
  }
  if (courseId === 'matematika_diskrit') {
    return MATEMATIKA_DISKRIT_MODULES;
  }
  if (courseId === 'web_framework') {
    return WEB_FRAMEWORK_MODULES;
  }
  if (courseId === 'rekayasa_perangkat_lunak') {
    return RPL_MODULES;
  }
  if (courseId === 'sistem_operasi') {
    return SISTEM_OPERASI_MODULES;
  }
  if (courseId === 'pemrograman_berorientasi_objek') {
    return OOP_MODULES;
  }
  return MODULES;
};

export const getCheatsheetForCourse = (
  courseId: CourseId
): FormulaCheatsheetItem[] => {
  if (courseId === 'dasar_pemrograman') {
    return DASAR_PEMROGRAMAN_CHEATSHEET;
  }
  if (courseId === 'algoritma_pemrograman') {
    return ALPRO_PEMULA_CHEATSHEET;
  }
  if (courseId === 'kalkulus') {
    return KALKULUS_CHEATSHEET;
  }
  if (courseId === 'aljabar_linier') {
    return ALJABAR_LINIER_CHEATSHEET;
  }
  if (courseId === 'matematika_diskrit') {
    return MATEMATIKA_DISKRIT_CHEATSHEET;
  }
  if (courseId === 'web_framework') {
    return WEB_FRAMEWORK_CHEATSHEET;
  }
  if (courseId === 'rekayasa_perangkat_lunak') {
    return RPL_CHEATSHEET;
  }
  if (courseId === 'sistem_operasi') {
    return SISTEM_OPERASI_CHEATSHEET;
  }
  if (courseId === 'pemrograman_berorientasi_objek') {
    return OOP_CHEATSHEET;
  }
  return CHEATSHEET_DATA;
};


