import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { MATEMATIKA_DISKRIT_QUIZZES } from './quizzesMatematikaDiskrit';

export const MATEMATIKA_DISKRIT_MODULES: ModuleData[] = [
  {
    id: 'matdis_logika_pembuktian',
    number: 1,
    title: 'Logika Formal, Kuantor & Metode Pembuktian',
    shortDesc:
      'Fondasi penalaran eksak ilmu komputer: proposisi, tabel kebenaran, kuantor universal dan eksistensial, aturan inferensi, serta metode pembuktian formal (induksi matematika & kontradiksi).',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-proposisi-tabel-kebenaran',
        title: '1.1 Logika Proposisi & Tabel Kebenaran Formal',
        summary:
          'Memahami nilai kebenaran mutlak (True/False), operator logika dasar, implikasi, bi-implikasi, tautologi, dan hukum De Morgan.',
        readTime: '8 menit',
        keyTakeaways: [
          'Proposisi adalah kalimat deklaratif yang bernilai tepat True atau False.',
          'Implikasi p -> q hanya bernilai False ketika anteseden p bernilai True dan konsekuen q bernilai False.',
          'Kontrapositif ~q -> ~p memiliki nilai kebenaran yang ekuivalen logis dengan p -> q.',
          'Hukum De Morgan: ~(p ^ q) ≡ ~p v ~q dan ~(p v q) ≡ ~p ^ ~q.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <iomanip>

// Evaluasi tabel kebenaran logika implikasi (p -> q) ≡ (~p || q)
bool implikasi(bool p, bool q) {
    return !p || q;
}

int main() {
    std::cout << "p\\tq\\tp -> q\\n";
    std::cout << "-----------------\\n";
    bool vals[2] = {true, false};
    for (bool p : vals) {
        for (bool q : vals) {
            std::cout << p << "\\t" << q << "\\t" << implikasi(p, q) << "\\n";
        }
    }
    return 0;
}`,
          explanation:
            'Implementasi tabel kebenaran implikasi dalam C++: bernilai false hanya pada baris p=true dan q=false.'
        },
        content: `### 1. Logika sebagai Bahasa Formal Komputer
Sirkuit gerbang logika di dalam prosesor (ALU) dan kondisi percabangan program (\`if-else\`) dibangun di atas aturan **Logika Proposisi**.

Sebuah proposisi adalah pernyataan berita yang nilai kebenarannya hitam-putih:
- $p$: "7 adalah bilangan prima" (Bernilai *True*).
- $q$: "Semua loop berputar tak hingga" (Bernilai *False*).

---

### 2. Implikasi & Kontrapositif
Pernyataan syarat "Jika $p$ maka $q$" dinotasikan $p \\to q$.
Tiga bentuk turunan dari $p \\to q$:
1. **Konvers**: $q \\to p$ (Tidak ekuivalen).
2. **Invers**: $\\sim p \\to \\sim q$ (Tidak ekuivalen).
3. **Kontrapositif**: $\\sim q \\to \\sim p$ (**Ekuivalen mutlak** dengan $p \\to q$).

Jika kita kesulitan membuktikan pernyataan $p \\to q$ secara langsung, membuktikan kontrapositifnya $\\sim q \\to \\sim p$ secara otomatis membuktikan pernyataan aslinya!`
      },
      {
        id: '1-2-kuantor-predikat',
        title: '1.2 Kuantor Universal & Eksistensial dalam Komputasi',
        summary:
          'Mengungkapkan sifat himpunan umum dengan kuantor universal (∀ - untuk semua) dan kuantor eksistensial (∃ - terdapat).',
        readTime: '8 menit',
        keyTakeaways: [
          'Predikat P(x) adalah kalimat terbuka yang menjadi proposisi setelah variabel x disubstitusikan nilai tertentu.',
          'Kuantor Universal ∀x P(x): bernilai True jika P(x) benar untuk SEMUA x di dalam domain.',
          'Kuantor Eksistensial ∃x P(x): bernilai True jika ADA SETIDAKNYA SATU x yang memenuhi P(x).',
          'Aturan Negasi Kuantor: ~[∀x P(x)] ≡ ∃x ~P(x) dan ~[∃x P(x)] ≡ ∀x ~P(x).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <algorithm>

// Meniru kuantor universal (std::all_of) dan eksistensial (std::any_of)
int main() {
    std::vector<int> data = {2, 4, 6, 8, 10};

    // ∀x (x % 2 == 0) : Apakah SEMUA elemen genap?
    bool universalGenap = std::all_of(data.begin(), data.end(), [](int x) { return x % 2 == 0; });

    // ∃x (x > 5) : Apakah ADA elemen yang lebih besar dari 5?
    bool eksistensialLebih5 = std::any_of(data.begin(), data.end(), [](int x) { return x > 5; });

    std::cout << "Kuantor Universal (Semua genap): " << (universalGenap ? "True" : "False") << std::endl;
    std::cout << "Kuantor Eksistensial (Ada > 5) : " << (eksistensialLebih5 ? "True" : "False") << std::endl;
    return 0;
}`,
          explanation:
            'Fungsi std::all_of dan std::any_of di STL C++ adalah wujud komputasional langsung dari kuantor ∀ dan ∃.'
        },
        content: `### 1. Fungsi Proposisional (Predikat)
Pernyataan "$x > 3$" bukan proposisi karena kita belum tahu siapa itu $x$. Pernyataan ini ditulis $P(x)$, sebuah predikat.

---

### 2. Kuantifikasi
1. **Kuantor Universal ($\\forall$)**:
   $$\\forall x \\in \\mathbb{R}, \\; x^2 \\ge 0$$
   Dibaca: "Untuk setiap bilangan riil $x$, kuadratnya selalu lebih besar atau sama dengan nol." (Bernilai True).
2. **Kuantor Eksistensial ($\\exists$)**:
   $$\\exists x \\in \\mathbb{Z}, \\; x + 5 = 2$$
   Dibaca: "Terdapat setidaknya satu bilangan bulat $x$ sedemikian sehingga $x + 5 = 2$." (Bernilai True, yaitu $x = -3$).

**Negasi Kuantor:**
Membantah klaim "semua program bebas bug" ($\\sim [\\forall x \\, P(x)]$) cukup dengan menemukan satu contoh bug nyata ($\\exists x \\, \\sim P(x)$).`
      },
      {
        id: '1-3-metode-pembuktian-induksi',
        title: '1.3 Metode Pembuktian: Kontradiksi & Induksi Matematika',
        summary:
          'Menguasai dua pilar utama teknik pembuktian formal untuk memvalidasi algoritma dan sifat komputasi tanpa celah keraguan.',
        readTime: '9 menit',
        keyTakeaways: [
          'Pembuktian Langsung: Berangkat dari premis P lalu menggunakan aksioma/definisi untuk menyimpulkan Q.',
          'Pembuktian Kontradiksi: Mengasumsikan kebalikan ~P, lalu menunjukkan lahirnya sebuah kemustahilan logis.',
          'Induksi Matematika: Mirip efek domino, membutuhkan Basis Induksi P(n_0) dan Langkah Induksi P(k) -> P(k+1).',
          'Induksi Matematika adalah teknik standar untuk membuktikan kebenaran loop invarian algoritma.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Pembuktian induksi rumus deret: ∑_{i=1}^n i = n(n+1)/2
// Basis n=1: 1 = 1*(2)/2 = 1 (Benar)
// Induksi: Asumsikan benar untuk k, maka untuk k+1:
// ∑_{i=1}^{k+1} i = [k(k+1)/2] + (k+1) = (k+1)[k/2 + 1] = (k+1)(k+2)/2 (Terbukti!)
int main() {
    int n = 100;
    long long jumlahanLoop = 0;
    for (int i = 1; i <= n; i++) jumlahanLoop += i;

    long long formulaGauss = (long long)n * (n + 1) / 2;

    std::cout << "Hasil jumlahan for-loop : " << jumlahanLoop << std::endl;
    std::cout << "Hasil formula Gauss     : " << formulaGauss << std::endl;
    std::cout << "Formula terbukti eksak dengan induksi matematika!\\n";
    return 0;
}`,
          explanation:
            'Memverifikasi rumus jumlah deret Gauss yang telah terbukti secara mutlak lewat induksi matematika.'
        },
        content: `### 1. Pembuktian dengan Kontradiksi (Proof by Contradiction)
Untuk membuktikan bahwa proposisi $P$ benar, kita mengasumsikan bahwa $P$ salah (yakni $\\sim P$ benar).
Kita teruskan penurunan logika sampai tiba pada pernyataan yang mustahil (seperti $0 = 1$ atau $a$ genap sekaligus ganjil). Kemustahilan ini membuktikan bahwa asumsi $\\sim P$ salah, sehingga $P$ haruslah bernilai benar.

---

### 2. Induksi Matematika (Mathematical Induction)
Induksi digunakan untuk membuktikan pernyataan $P(n)$ yang berlaku untuk seluruh bilangan bulat $n \\ge n_0$.
Struktur induksi seperti barisan kartu domino:
1. **Basis Induksi**: Tunjukkan bahwa $P(n_0)$ benar (kartu pertama roboh).
2. **Langkah Induksi**: Tunjukkan bahwa untuk sembarang $k \\ge n_0$, jika $P(k)$ diasumsikan benar (*Hipotesis Induksi*), maka $P(k + 1)$ pasti terbukti benar (jika kartu ke-$k$ roboh, kartu ke-$k+1$ pasti ikut roboh).

Jika kedua langkah terbukti, maka $P(n)$ benar untuk semua $n \\ge n_0$.`
      }
    ],
    quiz: MATEMATIKA_DISKRIT_QUIZZES['matdis_logika_pembuktian']
  },
  {
    id: 'matdis_himpunan_relasi_fungsi',
    number: 2,
    title: 'Teori Himpunan, Relasi Biner & Pemetaan Fungsi',
    shortDesc:
      'Himpunan kuasa, operasi irisan/gabungan/selisih simetris, sifat relasi biner (refleksif, simetris, transitif), relasi ekuivalensi modulo, dan fungsi bijektif.',
    iconName: 'Layers',
    sections: [
      {
        id: '2-1-aljabar-himpunan-power-set',
        title: '2.1 Aljabar Himpunan & Himpunan Kuasa (Power Set)',
        summary:
          'Kardinalitas, himpunan bagian, operasi logika himpunan, dan struktur himpunan kuasa yang mendasari ruang pencarian algoritma.',
        readTime: '8 menit',
        keyTakeaways: [
          'Himpunan Kuasa P(S) memuat semua subset dari S, dengan total elemen |P(S)| = 2^n.',
          'Operasi himpunan: Irisan (A ∩ B), Gabungan (A ∪ B), Komplemen (A\'), dan Selisih Simetris (A ⊕ B).',
          'Kardinalitas tak hingga: Terhitung (Countable ℵ_0 seperti N, Z, Q) vs Tidak Terhitung (Uncountable seperti R).',
          'Argumen Diagonal Cantor membuktikan bahwa bilangan riil tidak terhitung.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Menghasilkan seluruh 2^n subset dari himpunan S menggunakan bit manipulation
void cetakPowerSet(const std::vector<char>& S) {
    int n = S.size();
    int totalSubset = 1 << n; // 2^n

    for (int mask = 0; mask < totalSubset; mask++) {
        std::cout << "{ ";
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                std::cout << S[i] << " ";
            }
        }
        std::cout << "}\\n";
    }
}

int main() {
    std::vector<char> S = {'A', 'B', 'C'};
    std::cout << "Himpunan Kuasa P({A, B, C}) (Total 2^3 = 8):\\n";
    cetakPowerSet(S);
    return 0;
}`,
          explanation:
            'Bit masking biner mencacah semua 2^n kombinasi subset himpunan kuasa secara efisien.'
        },
        content: `### 1. Himpunan dan Kompleksitas Komputasi
Sebuah himpunan adalah koleksi tak berurutan dari objek-objek unik.
Banyak masalah komputasi teoretis (seperti *Subset Sum* dan *Knapsack Problem*) mencari kombinasi terbaik dari anggota himpunan. Ruang pencarian masalah-masalah ini adalah **Himpunan Kuasa** (*Power Set*):
$$|\\mathcal{P}(S)| = 2^{|S|}$$
Karena ukurannya tumbuh secara eksponensial $2^n$, masalah penjelajahan himpunan kuasa termasuk dalam kelas kompleksitas $O(2^n)$ (NP-Hard).`
      },
      {
        id: '2-2-relasi-biner-ekuivalensi',
        title: '2.2 Relasi Biner, Relasi Ekuivalensi & Poset',
        summary:
          'Memahami sifat hubungan matematis (refleksif, simetris, transitif) yang membagi himpunan menjadi kelas partisi atau hierarki pengurutan.',
        readTime: '9 menit',
        keyTakeaways: [
          'Relasi biner R dari A ke B adalah subset dari perkalian Kartesius A x B.',
          'Relasi Ekuivalensi: Refleksif, Simetris, dan Transitif. Membagi himpunan menjadi partisi kelas ekuivalensi (contoh a ≡ b mod n).',
          'Relasi Pengurutan Parsial (Poset): Refleksif, Anti-simetris, dan Transitif (contoh relasi <= atau himpunan bagian ⊆).',
          'Model Basis Data Relasional SQL didasarkan langsung pada teori relasi matematis n-ary.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Memeriksa apakah relasi kongruensi modulo n adalah relasi ekuivalensi
// a ≡ b (mod n) <=> (a - b) % n == 0
bool isKongruen(int a, int b, int n) {
    return (a - b) % n == 0;
}

int main() {
    int n = 5;
    // 1. Refleksif: a ≡ a
    std::cout << "Refleksif (7 ≡ 7 mod 5): " << isKongruen(7, 7, n) << "\\n";
    // 2. Simetris: a ≡ b => b ≡ a
    std::cout << "Simetris (12 ≡ 2 mod 5): " << isKongruen(12, 2, n) 
              << " dan (2 ≡ 12 mod 5): " << isKongruen(2, 12, n) << "\\n";
    // 3. Transitif: a ≡ b dan b ≡ c => a ≡ c
    std::cout << "Transitif (17 ≡ 12 dan 12 ≡ 2 => 17 ≡ 2): " << isKongruen(17, 2, n) << "\\n";
    return 0;
}`,
          explanation:
            'Kongruensi modulo adalah contoh paling fundamental dari relasi ekuivalensi dalam kriptografi dan ilmu komputer.'
        },
        content: `### 1. Sifat-Sifat Relasi Biner
Sebuah relasi $R$ pada himpunan $A$ dikatakan:
1. **Refleksif**: $\\forall a \\in A, \\; (a, a) \\in R$.
2. **Simetris**: Jika $(a, b) \\in R$ maka $(b, a) \\in R$.
3. **Anti-simetris**: Jika $(a, b) \\in R$ dan $(b, a) \\in R$ maka $a = b$.
4. **Transitif**: Jika $(a, b) \\in R$ dan $(b, c) \\in R$ maka $(a, c) \\in R$.

---

### 2. Relasi Ekuivalensi & Partisi
Jika sebuah relasi bersifat **Refleksif, Simetris, dan Transitif**, maka relasi tersebut dinamakan **Relasi Ekuivalensi**.
Teorema Fundamental Ekuivalensi menyatakan bahwa setiap relasi ekuivalensi mempartisi himpunan menjadi kelompok-kelompok kelas ekuivalensi $[a]$ yang saling lepas (*disjoint*) dan tidak tumpang tindih.`
      },
      {
        id: '2-3-pemetaan-fungsi-invers',
        title: '2.3 Pemetaan Fungsi: Injektif, Surjektif & Bijektif',
        summary:
          'Karakteristik fungsi satu-ke-satu, pada, dan korespondensi satu-ke-satu yang menjamin keberadaan fungsi invers.',
        readTime: '8 menit',
        keyTakeaways: [
          'Injektif (One-to-One): Tidak ada dua input berbeda yang memiliki output yang sama (f(a) = f(b) => a = b).',
          'Surjektif (Onto): Setiap elemen di kodomain memiliki prapeta (Range = Kodomain).',
          'Bijektif: Sekaligus Injektif dan Surjektif.',
          'Hanya fungsi Bijektif yang memiliki fungsi invers f^{-1} yang valid.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <unordered_set>

// Memeriksa sifat injektif pemetaan array
bool isInjektif(const std::vector<int>& outputValues) {
    std::unordered_set<int> unik;
    for (int y : outputValues) {
        if (unik.count(y)) return false; // Ada tabrakan (collision)
        unik.insert(y);
    }
    return true;
}

int main() {
    std::vector<int> f1 = {10, 25, 30, 42}; // Semua output unik
    std::vector<int> f2 = {10, 25, 10, 50}; // Output 10 berulang

    std::cout << "f1 Injektif? " << (isInjektif(f1) ? "Ya" : "Tidak") << std::endl;
    std::cout << "f2 Injektif? " << (isInjektif(f2) ? "Ya" : "Tidak (Collision)") << std::endl;
    return 0;
}`,
          explanation:
            'Dalam hashing kriptografi, fungsi hash ideal berupaya sedekat mungkin menjadi fungsi injektif untuk mencegah hash collision.'
        },
        content: `### 1. Klasifikasi Pemetaan Fungsi
Fungsi $f: A \\to B$ adalah aturan khusus yang memetakan setiap elemen di $A$ ke tepat satu elemen di $B$.
1. **Injektif (Satu-ke-Satu)**:
   $$f(x_1) = f(x_2) \\implies x_1 = x_2$$
   Tidak pernah ada "dua panah yang menunjuk ke target yang sama".
2. **Surjektif (Pada / Onto)**:
   $$\\forall y \\in B, \\; \\exists x \\in A \\text{ sedemikian sehingga } f(x) = y$$
   Semua anggota $B$ habis terpasangkan.
3. **Bijektif**:
   Memenuhi kedua sifat di atas. Memungkinkan pemasangan sempurna antara dua himpunan.`
      }
    ],
    quiz: MATEMATIKA_DISKRIT_QUIZZES['matdis_himpunan_relasi_fungsi']
  },
  {
    id: 'matdis_kombinatorika_pigeonhole',
    number: 3,
    title: 'Kombinatorika & Prinsip Sarang Merpati',
    shortDesc:
      'Kaidah pencacahan dasar (penjumlahan & perkalian), permutasi, kombinasi, Teorema Binomial, Prinsip Sarang Merpati (Pigeonhole Principle), dan Inklusi-Eksklusi.',
    iconName: 'Zap',
    sections: [
      {
        id: '3-1-kaidah-pencacahan-dasar',
        title: '3.1 Kaidah Dasar Pencacahan: Aturan Penjumlahan & Perkalian',
        summary:
          'Fondasi menghitung jumlah kemungkinan konfigurasi sistem tanpa harus membuat daftar satu demi satu.',
        readTime: '8 menit',
        keyTakeaways: [
          'Aturan Penjumlahan: Digunakan untuk pilihan yang saling lepas (Event A ATAU Event B) -> m + n.',
          'Aturan Perkalian: Digunakan untuk prosedur sekuensial independen (Langkah 1 DAN Langkah 2) -> m * n.',
          'String biner n bit memiliki 2^n variasi konfigurasi.',
          'Sistem alamat IPv4 32-bit memiliki 2^{32} ≈ 4.29 miliar alamat unik.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menghitung jumlah kombinasi password 4 digit angka (0-9)
// Setiap digit memiliki 10 kemungkinan (aturan perkalian)
int main() {
    long long totalKombinasi = 10 * 10 * 10 * 10; // 10^4 = 10.000
    std::cout << "Total kombinasi PIN 4 digit: " << totalKombinasi << std::endl;
    return 0;
}`,
          explanation:
            'Aplikasi aturan perkalian dalam analisis keamanan kata sandi dan kriptografi.'
        },
        content: `### 1. Prinsip Penjumlahan vs Perkalian
Dalam teori probabilitas dan komputasi:
- **Kaidah Penjumlahan**: Jika suatu pekerjaan dapat dilakukan dengan memilih salah satu dari $m$ cara di jalur A ATAU salah satu dari $n$ cara di jalur B yang terpisah:
  $$\\text{Total} = m + n$$
- **Kaidah Perkalian**: Jika suatu pekerjaan terdiri dari langkah 1 (memiliki $n_1$ opsi) DAN dilanjutkan dengan langkah 2 (memiliki $n_2$ opsi):
  $$\\text{Total} = n_1 \\times n_2 \\times \\dots \\times n_k$$`
      },
      {
        id: '3-2-permutasi-kombinasi-binomial',
        title: '3.2 Permutasi, Kombinasi & Teorema Binomial Newton',
        summary:
          'Membedakan kapan urutan susunan diperhitungkan (permutasi) dan kapan diabaikan (kombinasi) serta ekspansi binomial.',
        readTime: '9 menit',
        keyTakeaways: [
          'Permutasi P(n, r) = n! / (n - r)! (Urutan DIPERHATIKAN).',
          'Kombinasi C(n, r) = n! / [r! (n - r)!] (Urutan TIDAK diperhatikan).',
          'Teorema Binomial: (x + y)^n = ∑_{k=0}^n C(n, k) x^{n-k} y^k.',
          'Identitas Pascal: C(n, k) = C(n - 1, k - 1) + C(n - 1, k).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menghitung C(n, r) secara efisien tanpa overflow faktorial besar
long long kombinasi(int n, int r) {
    if (r < 0 || r > n) return 0;
    if (r == 0 || r == n) return 1;
    if (r > n / 2) r = n - r; // Simetri C(n, r) = C(n, n-r)
    long long res = 1;
    for (int i = 1; i <= r; i++) {
        res = res * (n - i + 1) / i;
    }
    return res;
}

int main() {
    int n = 10, r = 3;
    std::cout << "C(" << n << ", " << r << ") = " << kombinasi(n, r) << std::endl;
    return 0;
}`,
          explanation:
            'Menghitung kombinasi binomial dengan pembagian bertahap untuk mencegah integer overflow.'
        },
        content: `### 1. Permutasi vs Kombinasi
- **Permutasi**: Urutan matters! Misalkan memilih juara 1, 2, dan 3 dari 10 peserta lomba:
  $$P(n, r) = \\frac{n!}{(n - r)!}$$
- **Kombinasi**: Urutan tidak berpengaruh. Misalkan memilih 3 orang panitia dari 10 kandidat:
  $$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}$$

---

### 2. Teorema Binomial
Koefisien kombinasi $\\binom{n}{k}$ adalah koefisien dari ekspansi polinomial:
$$(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k$$
Jika kita mensubstitusikan $x = 1$ dan $y = 1$:
$$\\sum_{k=0}^n \\binom{n}{k} = 2^n$$
Ini memberikan pembuktian kombinatorial elegan bahwa jumlah seluruh subset dari himpunan beranggotakan $n$ adalah tepat $2^n$!`
      },
      {
        id: '3-3-pigeonhole-dan-pie',
        title: '3.3 Prinsip Sarang Merpati & Inklusi-Eksklusi',
        summary:
          'Menjamin keberadaan tabrakan data (collision) via Pigeonhole Principle dan menghitung ukuran gabungan himpunan via PIE.',
        readTime: '8 menit',
        keyTakeaways: [
          'Pigeonhole Principle: Jika k + 1 merpati dimasukkan ke k sarang, minimal satu sarang memuat >= 2 merpati.',
          'Generalized Pigeonhole: N objek di k wadah menjamin ada wadah dengan minimal ⌈N / k⌉ objek.',
          'Di hash table: Jika data > ukuran tabel, pasti terjadi tabrakan (hash collision).',
          'Prinsip Inklusi-Eksklusi (PIE): |A ∪ B| = |A| + |B| - |A ∩ B|.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Menghitung batas minimum muatan slot menurut Generalized Pigeonhole Principle
int minKapasitasPigeonhole(int jumlahData, int jumlahSlot) {
    return std::ceil((double)jumlahData / jumlahSlot);
}

int main() {
    int data = 25;
    int slots = 10;
    std::cout << "Data: " << data << ", Slots: " << slots << "\\n";
    std::cout << "Setidaknya ada satu slot yang menampung minimal: " 
              << minKapasitasPigeonhole(data, slots) << " data.\\n";
    return 0;
}`,
          explanation:
            'Aplikasi Pigeonhole Principle yang menjamin batas kepadatan minimum pada slot memori atau partisi data.'
        },
        content: `### 1. Prinsip Sarang Merpati (Pigeonhole Principle)
Prinsip Dirichlet yang sangat sederhana namun luar biasa ampuh:
> "Jika $k + 1$ ekor merpati terbang menuju $k$ buah sarang, maka setidaknya ada satu sarang yang ditempati oleh dua merpati atau lebih."

**Aplikasi di Ilmu Komputer:**
1. **Hash Collision**: Fungsi hash SHA-256 memetakan string berpanjang tak terbatas menjadi 256 bit. Karena ruang input tak hingga ($> 2^{256}$), Pigeonhole Principle menjamin bahwa tabrakan hash secara matematis pasti ada!
2. **Lossless Compression**: Tidak ada algoritma kompresi tanpa-hilang (*lossless*) yang bisa mengecilkan SEMUA jenis berkas data.

---

### 2. Prinsip Inklusi-Eksklusi (PIE)
Untuk menghindari penghitungan ganda pada elemen yang berada di irisan:
$$|A \\cup B| = |A| + |B| - |A \\cap B|$$
Untuk 3 himpunan:
$$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |A \\cap C| + |B \\cap C|) + |A \\cap B \\cap C|$$`
      }
    ],
    quiz: MATEMATIKA_DISKRIT_QUIZZES['matdis_kombinatorika_pigeonhole']
  },
  {
    id: 'matdis_rekurensi_generating',
    number: 4,
    title: 'Relasi Rekurensi & Analisis Divide-and-Conquer',
    shortDesc:
      'Memodelkan masalah komputasi rekursif, metode akar karakteristik rekurensi linier homogen, substitusi mundur, Teorema Master, dan fungsi pembangkit.',
    iconName: 'Activity',
    sections: [
      {
        id: '4-1-pemodelan-rekurensi',
        title: '4.1 Pemodelan Masalah Algoritmik dengan Relasi Rekurensi',
        summary:
          'Mengonversi algoritma divide-and-conquer dan masalah kombinatorika ke dalam persamaan rekurensi matematis.',
        readTime: '8 menit',
        keyTakeaways: [
          'Relasi rekurensi mendefinisikan suku a_n berdasarkan a_{n-1}, a_{n-2}, dll.',
          'Menara Hanoi: M(n) = 2 M(n-1) + 1 dengan M(1) = 1 -> Solusi: M(n) = 2^n - 1.',
          'Barisan Fibonacci: F_n = F_{n-1} + F_{n-2} dengan F_0 = 0, F_1 = 1.',
          'Kondisi awal (base case) mutlak diperlukan agar rekurensi memiliki solusi unik.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menghitung langkah Menara Hanoi secara rekursif
long long hanoi(int n) {
    if (n == 1) return 1;
    return 2 * hanoi(n - 1) + 1;
}

int main() {
    std::cout << "Langkah Menara Hanoi untuk n=3 : " << hanoi(3) << " (2^3 - 1 = 7)\\n";
    std::cout << "Langkah Menara Hanoi untuk n=10: " << hanoi(10) << " (2^10 - 1 = 1023)\\n";
    return 0;
}`,
          explanation:
            'Menghitung solusi eksak relasi rekurensi Menara Hanoi: M(n) = 2^n - 1.'
        },
        content: `### 1. Bagaimana Rekurensi Lahir dari Masalah Nyata?
Banyak algoritma dirancang secara rekursif: memecah masalah besar berukuran $n$ menjadi submasalah berukuran lebih kecil.
Contoh:
- **Teka-teki Menara Hanoi**: Untuk memindahkan $n$ piringan, kita harus:
  1. Pindahkan $n-1$ piringan ke pasak perantara ($M(n-1)$ langkah).
  2. Pindahkan piringan terbesar ke pasak tujuan ($1$ langkah).
  3. Pindahkan $n-1$ piringan dari perantara ke tujuan ($M(n-1)$ langkah).
  $$M(n) = 2 M(n-1) + 1$$`
      },
      {
        id: '4-2-persamaan-karakteristik',
        title: '4.2 Rekurensi Linier Homogen & Akar Karakteristik',
        summary:
          'Menyelesaikan relasi rekurensi berderajat dua atau lebih menggunakan metode akar polinomial karakteristik aljabar.',
        readTime: '9 menit',
        keyTakeaways: [
          'Bentuk umum derajat 2: a_n + A a_{n-1} + B a_{n-2} = 0.',
          'Persamaan karakteristik: r^2 + A r + B = 0.',
          'Akar riil berbeda r_1 != r_2 -> a_n = c_1 (r_1)^n + c_2 (r_2)^n.',
          'Akar kembar r_1 = r_2 = r -> a_n = (c_1 + c_2 n) r^n.',
          'Konstanta c_1 dan c_2 dihitung melalui kondisi awal a_0 dan a_1.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Rumus Binet Fibonacci berbasis akar karakteristik r^2 - r - 1 = 0
// r1 = (1 + √5)/2, r2 = (1 - √5)/2
// F_n = (r1^n - r2^n) / √5
long long binetFibonacci(int n) {
    double sqrt5 = std::sqrt(5.0);
    double phi = (1.0 + sqrt5) / 2.0;
    double psi = (1.0 - sqrt5) / 2.0;
    return std::round((std::pow(phi, n) - std::pow(psi, n)) / sqrt5);
}

int main() {
    std::cout << "F_10 dihitung langsung dalam O(1) via Rumus Binet: " 
              << binetFibonacci(10) << " (Eksak: 55)\\n";
    return 0;
}`,
          explanation:
            'Akar persamaan karakteristik menghasilkan Rumus Binet untuk menghitung nilai Fibonacci ke-n dalam waktu O(1).'
        },
        content: `### 1. Metode Akar Karakteristik
Diberikan relasi rekurensi linier homogen berkoefisien konstan:
$$a_n - 5 a_{n-1} + 6 a_{n-2} = 0$$
Tebak solusi berbentuk eksponensial $a_n = r^n$:
$$r^n - 5 r^{n-1} + 6 r^{n-2} = 0 \\implies r^2 - 5r + 6 = 0$$
Faktorkan:
$$(r - 2)(r - 3) = 0 \\implies r_1 = 2, \\quad r_2 = 3$$
Maka solusi umum adalah kombinasi linier:
$$a_n = c_1 2^n + c_2 3^n$$`
      },
      {
        id: '4-3-divide-conquer-generating',
        title: '4.3 Rekurensi Divide-and-Conquer & Fungsi Pembangkit',
        summary:
          'Analisis relasi T(n) = a T(n/b) + f(n) pada algoritma efisien dan pengantar fungsi pembangkit deret kuasa.',
        readTime: '9 menit',
        keyTakeaways: [
          'Merge Sort: T(n) = 2 T(n/2) + O(n) -> Solusi Θ(n log n).',
          'Binary Search: T(n) = T(n/2) + O(1) -> Solusi Θ(log n).',
          'Algoritma Strassen (Perkalian Matriks): T(n) = 7 T(n/2) + O(n^2) -> Θ(n^{2.807}).',
          'Fungsi Pembangkit mengkodekan barisan diskrit menjadi deret analitis G(x) = ∑ a_n x^n.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Perbandingan kompleksitas naif O(n^3) vs Strassen O(n^2.807)
int main() {
    double n = 1024.0;
    double opsNaif = std::pow(n, 3.0);
    double opsStrassen = std::pow(n, std::log2(7.0)); // n^2.807

    std::cout << "Matriks 1024 x 1024:\\n";
    std::cout << "Operasi Naif O(n^3)         : " << opsNaif << std::endl;
    std::cout << "Operasi Strassen O(n^2.807) : " << opsStrassen << std::endl;
    std::cout << "Strassen ~ " << (opsNaif / opsStrassen) << "x lebih cepat!\\n";
    return 0;
}`,
          explanation:
            'Mengurangi satu pemanggilan rekursif (dari a=8 menjadi a=7) memangkas kompleksitas eksponen secara signifikan.'
        },
        content: `### 1. Rekurensi Divide-and-Conquer
Banyak algoritma membagi masalah menjadi $a$ submasalah yang masing-masing berukuran $n/b$, ditambah biaya penggabungan $f(n)$:
$$T(n) = a T\\left(\\frac{n}{b}\\right) + f(n)$$

---

### 2. Fungsi Pembangkit (Generating Functions)
Fungsi pembangkit adalah "jembatan ajaib" yang membawa masalah diskrit ke kalkulus kontinu. Barisan suku $a_0, a_1, a_2, \\dots$ dikemas menjadi koefisien deret formal:
$$G(x) = \\sum_{n=0}^{\\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \\dots$$
Operasi pergeseran suku relasi rekurensi dapat diselesaikan melalui persamaan aljabar sederhana terhadap $G(x)$.`
      }
    ],
    quiz: MATEMATIKA_DISKRIT_QUIZZES['matdis_rekurensi_generating']
  },
  {
    id: 'matdis_teori_graf_pohon',
    number: 5,
    title: 'Teori Graf, Pohon (Trees) & Aplikasinya',
    shortDesc:
      'Verteks, edge, derajat simpul, Lemma Jabat Tangan, Sirkuit Euler vs Hamilton, representasi matriks adjacency, struktur pohon (tree), dan algoritma traversal BFS/DFS.',
    iconName: 'Network',
    sections: [
      {
        id: '5-1-definisi-graf-handshaking',
        title: '5.1 Definisi Graf, Derajat & Lemma Jabat Tangan',
        summary:
          'Struktur data graf G=(V, E), graf berarah vs tak berarah, derajat simpul, dan Lemma Jabat Tangan.',
        readTime: '8 menit',
        keyTakeaways: [
          'Graf G = (V, E) terdiri dari himpunan simpul V dan himpunan sisi E.',
          'Lemma Jabat Tangan (Handshaking Lemma): ∑_{v ∈ V} deg(v) = 2 * |E|.',
          'Konsekuensi: Jumlah simpul yang berderajat ganjil SELALU berjumlah genap.',
          'Graf Lengkap K_n memiliki jumlah sisi n(n - 1) / 2.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Verifikasi Handshaking Lemma: Total Derajat = 2 * |E|
int main() {
    // Graf segitiga K3: 3 simpul, 3 sisi. Setiap simpul berderajat 2.
    std::vector<int> derajat = {2, 2, 2};
    int jumlahSisi = 3;

    int totalDerajat = 0;
    for (int d : derajat) totalDerajat += d;

    std::cout << "Total derajat simpul : " << totalDerajat << std::endl;
    std::cout << "2 * Jumlah sisi (2*E): " << 2 * jumlahSisi << std::endl;
    std::cout << "Handshaking Lemma terbukti persis sama!\\n";
    return 0;
}`,
          explanation:
            'Menghitung total derajat pada graf dan memverifikasi kesetaraannya dengan dua kali jumlah sisi.'
        },
        content: `### 1. Mengapa Teori Graf Sangat Fundamental?
Segala sesuatu di era digital dapat dimodelkan sebagai Graf:
- Internet: Komputer/Router adalah *Verteks*, kabel optik/WiFi adalah *Edge*.
- Media Sosial: Akun pengguna adalah *Verteks*, relasi pertemanan/follower adalah *Edge*.
- Peta Navigasi (Google Maps): Persimpangan jalan adalah *Verteks*, ruas jalan adalah *Edge*.

---

### 2. Lemma Jabat Tangan (Handshaking Lemma)
Pada sembarang graf tak-berarah $G = (V, E)$:
$$\\sum_{v \\in V} \\deg(v) = 2 |E|$$
Karena setiap satu sisi $e = \\{u, v\\}$ menyumbang derajat $+1$ ke simpul $u$ dan $+1$ ke simpul $v$, total derajat seluruh simpul pasti sama dengan dua kali jumlah sisi!`
      },
      {
        id: '5-2-euler-vs-hamilton',
        title: '5.2 Lintasan Euler vs Sirkuit Hamilton (Königsberg Problem)',
        summary:
          'Sejarah lahirnya teori graf oleh Leonhard Euler (1736) dan perbandingan mendasar antara sirkuit sisi (Euler) vs simpul (Hamilton).',
        readTime: '9 menit',
        keyTakeaways: [
          'Lintasan Euler: Melewati SETIAP SISI tepat satu kali.',
          'Sirkuit Euler ada jika dan hanya jika SETIAP simpul memiliki derajat GENAP.',
          'Lintasan Euler terbuka ada jika tepat DUA simpul berderajat ganjil.',
          'Lintasan Hamilton: Mengunjungi SETIAP SIMPUL tepat satu kali (masalah NP-Complete / TSP).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Memeriksa apakah sebuah graf memiliki Sirkuit atau Lintasan Euler
void cekEuler(const std::vector<int>& derajat) {
    int ganjil = 0;
    for (int d : derajat) {
        if (d % 2 != 0) ganjil++;
    }

    if (ganjil == 0) {
        std::cout << "Graf memiliki Sirkuit Euler (Semua simpul berderajat genap)\\n";
    } else if (ganjil == 2) {
        std::cout << "Graf memiliki Lintasan Euler terbuka (Tepat 2 simpul ganjil)\\n";
    } else {
        std::cout << "Graf TIDAK memiliki Euler (Simpul ganjil: " << ganjil << ")\\n";
    }
}

int main() {
    // Masalah 7 Jembatan Königsberg: 4 daratan berderajat 3, 3, 3, 5
    std::vector<int> konigsberg = {3, 3, 3, 5};
    std::cout << "Jembatan Königsberg: ";
    cekEuler(konigsberg);
    return 0;
}`,
          explanation:
            'Algoritma sederhana dalam O(|V|) untuk memverifikasi keberadaan lintasan Euler berdasarkan paritas derajat.'
        },
        content: `### 1. Masalah Tujuh Jembatan Königsberg
Pada tahun 1736, warga kota Königsberg memperdebatkan apakah mungkin berjalan-jalan melintasi ketujuh jembatan kota tepat satu kali dan kembali ke titik semula.

Leonhard Euler memodelkan wilayah daratan sebagai simpul dan jembatan sebagai sisi.
Euler membuktikan bahwa:
- Untuk masuk dan keluar dari suatu simpul tanpa mengulang jembatan, setiap kunjungan membutuhkan 2 sisi (satu masuk, satu keluar).
- Oleh karena itu, sirkuit Euler hanya ada jika **setiap simpul berderajat genap**.
Karena di Königsberg semua simpul berderajat ganjil (3, 3, 3, 5), perjalanan tersebut mustahil dilakukan!`
      },
      {
        id: '5-3-struktur-pohon-dan-traversal',
        title: '5.3 Struktur Pohon (Trees), Graf Planar & Algoritma BFS/DFS',
        summary:
          'Definisi pohon sebagai graf terhubung asiklik, formula |E| = |V| - 1, graf planar (v - e + r = 2), dan penjelajahan graf Breadth-First Search & Depth-First Search.',
        readTime: '9 menit',
        keyTakeaways: [
          'Pohon (Tree) adalah graf terhubung yang tidak memuat siklus.',
          'Pohon dengan n simpul selalu memiliki tepat n - 1 sisi.',
          'Karakteristik Graf Planar Euler: v - e + r = 2.',
          'Breadth-First Search (BFS) menggunakan Queue (FIFO) untuk mencari jalur terpendek.',
          'Depth-First Search (DFS) menggunakan Stack / Rekursi untuk penelusuran mendalam.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <queue>

// Implementasi penjelajahan graf Breadth-First Search (BFS)
void bfs(int start, const std::vector<std::vector<int>>& adj) {
    std::vector<bool> dikunjungi(adj.size(), false);
    std::queue<int> q;

    dikunjungi[start] = true;
    q.push(start);

    std::cout << "Urutan Kunjungan BFS: ";
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        std::cout << u << " ";

        for (int v : adj[u]) {
            if (!dikunjungi[v]) {
                dikunjungi[v] = true;
                q.push(v);
            }
        }
    }
    std::cout << std::endl;
}

int main() {
    // Graf 4 simpul berbentuk rantai 0 - 1 - 2 - 3
    std::vector<std::vector<int>> adj = {
        {1},       // Tetangga 0
        {0, 2, 3}, // Tetangga 1
        {1},       // Tetangga 2
        {1}        // Tetangga 3
    };
    bfs(0, adj);
    return 0;
}`,
          explanation:
            'Algoritma BFS mengunjungi tetangga terdekat lapis demi lapis menggunakan struktur antrean (Queue).'
        },
        content: `### 1. Karakteristik Struktur Pohon (Tree)
Sebuah graf $T$ adalah Pohon jika dan hanya jika memenuhi salah satu sifat ekuivalen berikut:
1. $T$ terhubung dan tidak memiliki siklus (*connected acyclic graph*).
2. $T$ memiliki $|E| = |V| - 1$ sisi dan terhubung.
3. Di antara setiap pasang simpul di $T$, terdapat tepat satu lintasan tunggal unik.

---

### 2. Graf Planar & Rumus Euler
Graf planar adalah graf yang dapat digambar pada bidang 2D tanpa sisi-sisi yang bersilangan.
Leonhard Euler merumuskan hubungan antara simpul ($v$), sisi ($e$), dan wilayah muka ($r$):
$$v - e + r = 2$$

Teorema Empat Warna membuktikan bahwa setiap graf planar dapat diwarnai simpulnya sedemikian sehingga simpul bertetangga memiliki warna berbeda hanya dengan maksimal $4$ warna!`
      }
    ],
    quiz: MATEMATIKA_DISKRIT_QUIZZES['matdis_teori_graf_pohon']
  }
];

export const MATEMATIKA_DISKRIT_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Logika & Inferensi',
    name: 'Hukum De Morgan & Implikasi',
    formula: '\\sim(p \\wedge q) \\equiv \\sim p \\vee \\sim q, \\qquad p \\to q \\equiv \\sim p \\vee q \\equiv \\sim q \\to \\sim p',
    notes: 'Kontrapositif ~q -> ~p memiliki nilai kebenaran ekuivalen dengan p -> q.'
  },
  {
    category: 'Logika & Inferensi',
    name: 'Aturan Inferensi Baku',
    formula: '\\text{Modus Ponens: } \\frac{p \\to q, \\; p}{\\therefore q}, \\qquad \\text{Modus Tollens: } \\frac{p \\to q, \\; \\sim q}{\\therefore \\sim p}',
    notes: 'Kaidah penarikan kesimpulan logis dalam pembuktian formal.'
  },
  {
    category: 'Himpunan & Kardinalitas',
    name: 'Kardinalitas Himpunan Kuasa (Power Set)',
    formula: '|\\mathcal{P}(S)| = 2^{|S|}, \\qquad |A \\times B| = |A| \\times |B|',
    notes: 'Jumlah seluruh subset yang mungkin dibentuk dari himpunan berukuran n.'
  },
  {
    category: 'Pencacahan & Kombinatorika',
    name: 'Permutasi & Kombinasi',
    formula: 'P(n, r) = \\frac{n!}{(n - r)!}, \\qquad C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n - r)!}',
    notes: 'Permutasi memperhatikan urutan; kombinasi mengabaikan urutan.'
  },
  {
    category: 'Pencacahan & Kombinatorika',
    name: 'Prinsip Inklusi-Eksklusi & Pigeonhole',
    formula: '|A \\cup B| = |A| + |B| - |A \\cap B|, \\qquad \\text{MinMuatan} = \\left\\lceil \\frac{N}{k} \\right\\rceil',
    notes: 'Mencegah penghitungan ganda dan menjamin batas minimum tabrakan data (collision).'
  },
  {
    category: 'Relasi Rekurensi',
    name: 'Persamaan Karakteristik Homogen',
    formula: 'a_n - A a_{n-1} - B a_{n-2} = 0 \\implies r^2 - Ar - B = 0 \\implies a_n = c_1 r_1^n + c_2 r_2^n',
    notes: 'Metode akar karakteristik untuk relasi rekurensi linier derajat 2.'
  },
  {
    category: 'Teori Graf & Pohon',
    name: 'Lemma Jabat Tangan (Handshaking)',
    formula: '\\sum_{v \\in V} \\deg(v) = 2 |E| \\implies \\text{Jumlah simpul berderajat ganjil selalu genap}',
    notes: 'Jumlahan derajat seluruh simpul graf selalu sama dengan 2 kali jumlah sisi.'
  },
  {
    category: 'Teori Graf & Pohon',
    name: 'Sifat Pohon & Formula Planar Euler',
    formula: '|E| = |V| - 1 \\; (\\text{Pohon}), \\qquad v - e + r = 2 \\; (\\text{Graf Planar Terhubung})',
    notes: 'Hubungan invarian jumlah verteks, sisi, dan region pada graf diskrit.'
  }
];
