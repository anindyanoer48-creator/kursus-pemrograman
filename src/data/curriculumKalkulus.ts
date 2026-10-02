import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { KALKULUS_QUIZZES } from './quizzesKalkulus';

export const KALKULUS_MODULES: ModuleData[] = [
  {
    id: 'kalkulus_fungsi_limit',
    number: 1,
    title: 'Fungsi, Limit & Kontinuitas Komputasional',
    shortDesc:
      'Pahami konsep limit matematis, limit satu sisi, limit di tak hingga untuk mengukur rasio pertumbuhan algoritma, serta kontinuitas dan Teorema Nilai Antara.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-definisi-limit',
        title: '1.1 Intuisi & Perilaku Limit',
        summary:
          'Memahami konsep nilai pendekatan suatu fungsi saat variabel input mendekati titik tertentu tanpa harus menyentuhnya.',
        readTime: '7 menit',
        keyTakeaways: [
          'Limit lim_{x -> c} f(x) = L mendeskripsikan nilai yang dituju f(x) saat x mendekati c dari kedua sisi.',
          'Nilai f(c) tidak disyaratkan harus terdefinisi atau bernilai sama dengan L.',
          'Limit dua sisi ada jika dan hanya jika limit kiri sama dengan limit kanan: lim_{x -> c^-} f(x) = lim_{x -> c^+} f(x) = L.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Aproksimasi numerik limit f(x) = (x^2 - 4) / (x - 2) saat x -> 2
double f(double x) {
    return (x * x - 4.0) / (x - 2.0);
}

int main() {
    double x_target = 2.0;
    double h = 0.1;

    std::cout << "Mendekati x = 2 dari sisi kanan (x + h):\\n";
    for (int i = 0; i < 5; i++) {
        double x = x_target + h;
        std::cout << "x = " << x << " -> f(x) = " << f(x) << std::endl;
        h /= 10.0; // Interval h semakin mengecil mendekati 0
    }
    return 0;
}`,
          explanation:
            'Kode C++ mensimulasikan nilai limit secara komputasional. Saat jarak h menyusut dari 0.1 hingga 0.00001, nilai f(x) secara mulus berkonvergensi ke angka 4.'
        },
        content: `### 1. Mengapa Limit Sangat Krusial dalam Komputasi?
Di dalam matematika murni maupun analisis algoritma, kita sering menjumpai bentuk di mana fungsi tidak dapat dievaluasi secara langsung karena menghasilkan pembagian dengan nol, seperti:
$$f(x) = \\frac{x^2 - 4}{x - 2}$$
Jika kita memasukkan $x = 2$ secara membabi buta, komputer akan mengalami *runtime error* (Division by Zero) atau menghasilkan \`NaN\` (Not a Number) karena bentuk $\\frac{0}{0}$.

Namun, dengan konsep **Limit**, kita tidak peduli apa yang terjadi persis *di* titik $x = 2$, melainkan apa yang terjadi ketika kita melangkah *sedekat mungkin* ke $x = 2$:
$$\\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$

---

### 2. Limit Sepihak (One-Sided Limits)
Suatu limit dua sisi $\\lim_{x \\to c} f(x)$ hanya ada jika nilai pendekatan dari arah kiri ($x \\to c^-$) bernilai tepat sama dengan pendekatan dari arah kanan ($x \\to c^+$):
$$\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = L \\quad \\text{dan} \\quad \\lim_{x \\to c^+} f(x) = L$$
Jika kedua limit sepihak menghasilkan nilai yang berbeda (misalnya pada fungsi tangga atau fungsi nilai mutlak diskontinu), maka limit dua sisi dikatakan **tidak ada** (*does not exist* / DNE).`
      },
      {
        id: '1-2-limit-tak-hingga-asimptotik',
        title: '1.2 Limit di Tak Hingga & Perbandingan Pertumbuhan Algoritma',
        summary:
          'Menggunakan limit rasio lim_{n -> ∞} f(n)/g(n) untuk menentukan relasi Big-O, Big-Omega, dan Big-Theta secara formal.',
        readTime: '8 menit',
        keyTakeaways: [
          'Limit saat x -> ∞ mengukur perilaku jangka panjang (asymptotic behavior) dari suatu sistem.',
          'Rasio limit L = lim_{n -> ∞} f(n)/g(n) memberikan klasifikasi efisiensi algoritma secara absolut.',
          'Jika L = 0 maka f(n) = o(g(n)); jika 0 < L < ∞ maka f(n) = Θ(g(n)); jika L = ∞ maka f(n) = ω(g(n)).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Evaluasi rasio pertumbuhan f(n) = 3n^2 + 5n terhadap g(n) = n^2
double rasioPertumbuhan(double n) {
    double f = 3.0 * n * n + 5.0 * n;
    double g = n * n;
    return f / g;
}

int main() {
    double n = 10.0;
    for (int i = 0; i < 6; i++) {
        std::cout << "n = " << n << " -> Rasio f(n)/g(n) = " << rasioPertumbuhan(n) << std::endl;
        n *= 10.0; // n bertambah secara eksponensial: 10, 100, 1000, ...
    }
    return 0;
}`,
          explanation:
            'Saat n membesar menuju tak hingga (1.000.000), rasio f(n)/g(n) mendekati angka konstan 3.0. Ini membuktikan bahwa f(n) ∈ Θ(n^2).'
        },
        content: `### 1. Analisis Asimptotik Berbasis Limit
Dalam analisis algoritma komputasi, kita tertarik pada waktu kerja $T(n)$ saat ukuran masukan data $n$ membesar tanpa batas ($n \\to \\infty$).

Untuk membandingkan dua fungsi kompleksitas $f(n)$ dan $g(n)$, kalkulus menyediakan **Metode Rasio Limit**:
$$L = \\lim_{n \\to \\infty} \\frac{f(n)}{g(n)}$$

Terdapat 3 kasus hasil:
1. **$L = 0$**: Menunjukkan $g(n)$ tumbuh jauh lebih pesat daripada $f(n)$. Ini berarti:
   $$f(n) \\in o(g(n)) \\implies f(n) \\in O(g(n))$$
2. **$0 < L < \\infty$** (Konstanta positif terhingga): $f(n)$ dan $g(n)$ berada pada kelas pertumbuhan yang sama:
   $$f(n) \\in \\Theta(g(n))$$
3. **$L = \\infty$**: $f(n)$ mendominasi dan tumbuh jauh lebih cepat daripada $g(n)$:
   $$f(n) \\in \\omega(g(n)) \\implies f(n) \\in \\Omega(g(n))$$`
      },
      {
        id: '1-3-kontinuitas-dan-ivt',
        title: '1.3 Kontinuitas & Teorema Nilai Antara (Pencarian Bisection)',
        summary:
          'Memahami sifat mulus fungsi kontinu dan bagaimana Teorema Nilai Antara menjamin konvergensi algoritma pencarian akar Bisection.',
        readTime: '7 menit',
        keyTakeaways: [
          'Fungsi kontinu tidak memiliki lompatan, lubang, maupun asimptot tak hingga pada titik yang ditinjau.',
          'Tiga syarat kontinuitas: (1) f(c) ada, (2) lim_{x->c} f(x) ada, (3) lim_{x->c} f(x) = f(c).',
          'Teorema Nilai Antara (IVT) menyatakan bahwa jika f kontinu pada [a, b] dan f(a)*f(b) < 0, pasti ada c di mana f(c) = 0.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Algoritma Bisection Search berbasis Teorema Nilai Antara (IVT)
// Mencari akar persamaan f(x) = x^3 - x - 2 = 0
double f(double x) {
    return x * x * x - x - 2.0;
}

double bisection(double a, double b, double toleransi) {
    if (f(a) * f(b) >= 0) {
        std::cerr << "IVT tidak berlaku: tanda f(a) dan f(b) harus berlawanan!\\n";
        return -1;
    }
    double c = a;
    while ((b - a) >= toleransi) {
        c = (a + b) / 2.0; // Titik tengah interval
        if (std::abs(f(c)) < 1e-9) break; // Ditemukan akar eksak
        if (f(c) * f(a) < 0) b = c;       // Akar berada di separuh kiri
        else a = c;                      // Akar berada di separuh kanan
    }
    return c;
}

int main() {
    double akar = bisection(1.0, 2.0, 1e-6);
    std::cout << "Akar terhitung f(x)=0 adalah: " << akar << std::endl;
    return 0;
}`,
          explanation:
            'Algoritma Bisection membagi dua interval secara berulang dengan kompleksitas O(log((b-a)/tol)). IVT menjamin keberadaan akar di dalam interval selama f kontinu.'
        },
        content: `### 1. Definisi Kontinuitas
Secara grafis, kurva fungsi kontinu dapat digambar tanpa mengangkat pena dari kertas. Secara formal matematis, $f(x)$ kontinu di titik $x = c$ jika:
1. $f(c)$ terdefinisi di dalam domain fungsi.
2. $\\lim_{x \\to c} f(x)$ ada (limit kiri sama dengan limit kanan).
3. $\\lim_{x \\to c} f(x) = f(c)$.

---

### 2. Teorema Nilai Antara (Intermediate Value Theorem - IVT)
Jika fungsi $f$ kontinu pada interval tertutup $[a, b]$, maka untuk setiap nilai $u$ di antara $f(a)$ dan $f(b)$, **selalu ada setidaknya satu nilai** $c \\in (a, b)$ sedemikian sehingga:
$$f(c) = u$$

**Penerapan Komputasi:**
Bila $f(a)$ bernilai negatif dan $f(b)$ bernilai positif ($f(a) \\cdot f(b) < 0$), maka kurva $f(x)$ pasti memotong sumbu-$X$ (artinya terdapat $c$ sehingga $f(c) = 0$). Sifat inilah yang menjadi dasar algoritma numerik **Bisection Method** untuk mencari akar persamaan nonlinear secara presisi.`
      }
    ],
    quiz: KALKULUS_QUIZZES['kalkulus_fungsi_limit']
  },
  {
    id: 'kalkulus_turunan',
    number: 2,
    title: 'Turunan & Aturan Diferensiasi',
    shortDesc:
      'Pelajari laju perubahan sesaat, tafsiran garis singgung, aturan pangkat, perkalian, pembagian, aturan rantai (Chain Rule), hingga konsep Backpropagation.',
    iconName: 'TrendingUp',
    sections: [
      {
        id: '2-1-definisi-turunan',
        title: '2.1 Definisi Laju Perubahan & Garis Singgung',
        summary:
          'Menghubungkan kemiringan tali busur rata-rata dengan limit selisih Newton untuk mendapatkan laju perubahan sesaat.',
        readTime: '8 menit',
        keyTakeaways: [
          'Turunan f\'(x) mengukur laju perubahan sesaat (instantaneous rate of change) dari f terhadap x.',
          'Secara geometris, f\'(a) adalah gradien (kemiringan m) dari garis singgung kurva pada titik (a, f(a)).',
          'Definisi formal: f\'(x) = lim_{h -> 0} [f(x + h) - f(x)] / h.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Menghitung turunan f(x) = x^3 menggunakan diferensiasi numerik terpusat
// Formula selisih terpusat (Central Difference): f'(x) ≈ (f(x+h) - f(x-h)) / (2h)
double f(double x) { return x * x * x; }

double turunanNumerik(double x, double h) {
    return (f(x + h) - f(x - h)) / (2.0 * h);
}

int main() {
    double x = 2.0;
    double h = 1e-5;
    std::cout << "Turunan analitis f'(2) = 3*(2^2) = 12\\n";
    std::cout << "Turunan numerik terpusat f'(2)  = " << turunanNumerik(x, h) << std::endl;
    return 0;
}`,
          explanation:
            'Metode Central Difference menghasilkan eror orde O(h^2), sangat akurat untuk memeriksa turunan kode machine learning (Gradient Checking).'
        },
        content: `### 1. Dari Kecepatan Rata-Rata ke Kecepatan Sesaat
Bayangkan sebuah objek bergerak dengan posisi $s(t)$. Kecepatan rata-rata antara waktu $t$ dan $t + h$ adalah:
$$v_{\\text{avg}} = \\frac{s(t + h) - s(t)}{h}$$
Ketika kita memperpendek jendela waktu $h$ hingga mendekati nol ($h \\to 0$), kita mendapatkan **kecepatan sesaat**:
$$v(t) = s'(t) = \\lim_{h \\to 0} \\frac{s(t + h) - s(t)}{h}$$

---

### 2. Diferensiabilitas Mengimplikasikan Kontinuitas
Jika suatu fungsi $f(x)$ dapat diturunkan di titik $x = c$, maka fungsi tersebut **pasti kontinu** di $x = c$.
Namun, kebalikannya tidak selalu berlaku! Contoh klasik adalah fungsi nilai mutlak:
$$f(x) = |x|$$
Fungsi ini kontinu di $x = 0$, namun tidak memiliki turunan di $x = 0$ karena memiliki "sudut tajam" (*sharp corner*), di mana kemiringan dari kiri adalah $-1$ sedangkan dari kanan adalah $+1$.`
      },
      {
        id: '2-2-aturan-diferensiasi',
        title: '2.2 Aturan Baku Diferensiasi (Power, Product & Quotient Rule)',
        summary:
          'Menguasai formula turunan baku untuk menghitung turunan fungsi polinomial, eksponensial, dan rasional secara instan.',
        readTime: '8 menit',
        keyTakeaways: [
          'Aturan Pangkat: d/dx [x^n] = n * x^{n-1}.',
          'Aturan Perkalian (Product Rule): (u * v)\' = u\'v + uv\'.',
          'Aturan Pembagian (Quotient Rule): (u / v)\' = (u\'v - uv\') / v^2.',
          'Turunan Fungsi Khusus: d/dx [e^x] = e^x, dan d/dx [ln x] = 1/x.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Struktur fungsi monom a * x^n
struct Monomial {
    double koefisien;
    int pangkat;

    // Turunan aturan pangkat: (a * x^n)' = (a * n) * x^(n - 1)
    Monomial turunkan() const {
        if (pangkat == 0) return {0.0, 0};
        return {koefisien * pangkat, pangkat - 1};
    }
};

int main() {
    Monomial m = {5.0, 4}; // 5 * x^4
    Monomial turunan = m.turunkan(); // 20 * x^3
    std::cout << "Turunan dari " << m.koefisien << "x^" << m.pangkat 
              << " adalah " << turunan.koefisien << "x^" << turunan.pangkat << std::endl;
    return 0;
}`,
          explanation:
            'Implementasi simbolik aturan pangkat kalkulus dalam C++: koefisien dikalikan dengan pangkat lama, lalu eksponen dikurangi satu.'
        },
        content: `### 1. Tabel Aturan Diferensiasi Fundamental
1. **Aturan Pangkat**:
   $$\\frac{d}{dx} [x^n] = n x^{n-1}$$
2. **Aturan Perkalian (Product Rule)**:
   $$\\frac{d}{dx} [u(x) \\cdot v(x)] = u'(x) v(x) + u(x) v'(x)$$
3. **Aturan Pembagian (Quotient Rule)**:
   $$\\frac{d}{dx} \\left[ \\frac{u(x)}{v(x)} \\right] = \\frac{u'(x) v(x) - u(x) v'(x)}{[v(x)]^2}$$
4. **Fungsi Transenden Esensial**:
   $$\\frac{d}{dx} [e^x] = e^x, \\qquad \\frac{d}{dx} [\\ln x] = \\frac{1}{x}$$
   $$\\frac{d}{dx} [\\sin x] = \\cos x, \\qquad \\frac{d}{dx} [\\cos x] = -\\sin x$$`
      },
      {
        id: '2-3-aturan-rantai-backprop',
        title: '2.3 Aturan Rantai (Chain Rule) & Konsep Backpropagation',
        summary:
          'Memahami diferensiasi fungsi bersusun f(g(x)) yang menjadi pilar komputasi gradien pada Deep Learning.',
        readTime: '9 menit',
        keyTakeaways: [
          'Aturan Rantai: Jika y = f(u) dan u = g(x), maka dy/dx = (dy/du) * (du/dx).',
          'Untuk fungsi bersarang berlapis: dy/dx = f\'(g(x)) * g\'(x).',
          'Algoritma Backpropagation pada Jaringan Saraf Tiruan adalah implementasi terbalik dari Chain Rule kalkulus multivariat.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Node komputasi sederhana: y = (w * x + b)^2
// Menghitung gradien dy/dw menggunakan Chain Rule
int main() {
    double x = 3.0;
    double w = 2.0;
    double b = 1.0;

    // Forward pass
    double u = w * x + b; // u = 2 * 3 + 1 = 7
    double y = u * u;     // y = 7^2 = 49

    // Backward pass (Chain Rule)
    double dy_du = 2.0 * u; // d/du [u^2] = 2u = 14
    double du_dw = x;       // d/dw [w*x + b] = x = 3
    double dy_dw = dy_du * du_dw; // 14 * 3 = 42

    std::cout << "Nilai output y = " << y << std::endl;
    std::cout << "Gradien dy/dw (Chain Rule) = " << dy_dw << std::endl;
    return 0;
}`,
          explanation:
            'Perhitungan gradien maju-mundur persis seperti yang dilakukan oleh framework modern (PyTorch, TensorFlow) dengan Automatic Differentiation (autograd).'
        },
        content: `### 1. Mengapa Aturan Rantai Sangat Berpengaruh?
Dalam komputasi dan pemodelan matematis, fungsi hampir selalu tersusun dari fungsi lain (*composite function*), misalnya:
$$y = \\sin(x^2 + 1) \\quad \\text{atau} \\quad L = \\frac{1}{2} (\\hat{y} - y)^2 \\quad \\text{dengan} \\quad \\hat{y} = \\sigma(w x + b)$$

Aturan Rantai (Chain Rule) menyatakan bahwa laju perubahan total adalah hasil kali dari laju perubahan di setiap rantai perantara:
$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

---

### 2. Backpropagation dalam Neural Networks
Jaringan saraf tiruan hanyalah fungsi komposisi raksasa:
$$\\text{Loss} = \\mathcal{L}(f_L(f_{L-1}(\\dots f_1(X; W_1) \\dots ; W_{L-1}); W_L))$$
Algoritma **Backpropagation** memanfaatkan Aturan Rantai untuk mengalirkan kesalahan (error) dari output layer kembali ke layer input secara efisien dalam waktu $O(N)$ per langkah pembaruan bobot.`
      }
    ],
    quiz: KALKULUS_QUIZZES['kalkulus_turunan']
  },
  {
    id: 'kalkulus_lhopital_optimasi',
    number: 3,
    title: 'Aturan L\'Hôpital & Optimasi Titik Ekstrem',
    shortDesc:
      'Gunakan Aturan L\'Hôpital untuk mengurai bentuk tak tentu limit pertumbuhan dan teknik turunan untuk menemukan nilai optimal (maksimum/minimum) fungsi biaya.',
    iconName: 'Zap',
    sections: [
      {
        id: '3-1-aturan-lhopital',
        title: '3.1 Teorema Aturan L\'Hôpital untuk Bentuk Tak Tentu',
        summary:
          'Menyelesaikan limit bertipe 0/0 dan ∞/∞ dengan mendiferensiasikan pembilang dan penyebut secara independen.',
        readTime: '8 menit',
        keyTakeaways: [
          'Aturan L\'Hôpital HANYA berlaku jika bentuk awal menghasilkan 0/0 atau ±∞/±∞.',
          'Formula: lim_{x -> c} [f(x) / g(x)] = lim_{x -> c} [f\'(x) / g\'(x)].',
          'Membuktikan hierarki pertumbuhan: log n < n^k < c^n < n! secara presisi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Membuktikan lim_{n -> ∞} (ln n) / n = 0 secara komputasional
int main() {
    double n = 10.0;
    std::cout << "Mengevaluasi rasio (ln n) / n saat n membesar:\\n";
    for (int i = 0; i < 7; i++) {
        double rasio = std::log(n) / n;
        std::cout << "n = " << n << " -> (ln n)/n = " << rasio << std::endl;
        n *= 10.0;
    }
    std::cout << "Hasil membuktikan limit berkonvergensi ke 0.\\n";
    return 0;
}`,
          explanation:
            'Komputasi numerik mengonfirmasi hasil analitis L\'Hôpital: turunan ln(n) adalah 1/n dan turunan n adalah 1, sehingga lim (1/n)/1 = 0.'
        },
        content: `### 1. Mengapa Bentuk Tak Tentu Muncul?
Ketika menghitung rasio kompleksitas dua algoritma saat $n \\to \\infty$, kita hampir selalu mendapatkan bentuk tak tentu:
$$\\lim_{n \\to \\infty} \\frac{\\ln n}{n} = \\frac{\\infty}{\\infty}$$
Kita tidak bisa menyimpulkan hasilnya tanpa alat bantu matematis yang sahih.

---

### 2. Teorema Aturan L'Hôpital
Jika $\\lim_{x \\to c} f(x) = 0$ dan $\\lim_{x \\to c} g(x) = 0$ (atau keduanya bernilai $\\pm \\infty$), dan $g'(x) \\ne 0$ di dekat $c$, maka:
$$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$

> **Peringatan Penting**: L'Hôpital bukan turunan pecahan (*quotient rule*), melainkan turunan pembilang dibagi turunan penyebut secara terpisah!

**Contoh Pembuktian Efisiensi Binary Search terhadap Linear Search:**
$$\\lim_{n \\to \\infty} \\frac{\\ln n}{n} \\stackrel{\\text{L'H}}{=} \\lim_{n \\to \\infty} \\frac{\\frac{1}{n}}{1} = 0$$
Hasil $0$ membuktikan bahwa algoritma logaritmik $O(\\log n)$ tumbuh tak terhingga kali lebih hemat daripada algoritma linier $O(n)$.`
      },
      {
        id: '3-2-titik-kritis-uji-turunan',
        title: '3.2 Titik Kritis & Uji Turunan (Maksimum, Minimum & Titik Belok)',
        summary:
          'Mengidentifikasi titik stasioner f\'(x)=0 dan menentukan jenis ekstremum menggunakan Uji Turunan Pertama dan Kedua.',
        readTime: '8 menit',
        keyTakeaways: [
          'Titik kritis c terjadi ketika f\'(c) = 0 atau f\'(c) tidak terdefinisi.',
          'Uji Turunan Pertama: Perubahan tanda f\' dari (+) ke (-) menandakan Maksimum; dari (-) ke (+) menandakan Minimum.',
          'Uji Turunan Kedua: Jika f\'(c) = 0 dan f\'\'(c) > 0, kurva cekung ke atas (Minimum); jika f\'\'(c) < 0, kurva cekung ke bawah (Maksimum).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Fungsi biaya kerugian kuadratik: L(w) = 2w^2 - 8w + 11
// Mencari bobot optimal w* dengan turunan analitis: L'(w) = 4w - 8 = 0 => w = 2
double loss(double w) { return 2.0 * w * w - 8.0 * w + 11.0; }
double d_loss(double w) { return 4.0 * w - 8.0; }
double d2_loss() { return 4.0; } // f''(w) = 4 > 0 (konkaf ke atas / minimum mutlak)

int main() {
    double w_opt = 2.0;
    std::cout << "Titik stasioner: w* = " << w_opt << std::endl;
    std::cout << "Nilai loss minimum L(w*) = " << loss(w_opt) << std::endl;
    std::cout << "Uji turunan kedua L''(w*) = " << d2_loss() << " (> 0 -> Terbukti Minimum Lokal/Global)\\n";
    return 0;
}`,
          explanation:
            'Uji turunan kedua memastikan bahwa titik kritis w = 2 adalah dasar cekungan kurva (minimum loss).'
        },
        content: `### 1. Titik Kritis (Critical Points)
Nilai ekstrem suatu fungsi diferensiabel hanya dapat terjadi pada **titik kritis**, yaitu titik di mana gradien garis singgung horizontal ($f'(x) = 0$) atau garis singgung tidak ada (sudut tajam).

---

### 2. Uji Turunan Kedua untuk Kecekungan
- Jika $f''(x) > 0$ pada interval, kurva **cekung ke atas** (*concave up* / tersenyum). Titik kritis di daerah ini pasti merupakan **Minimum Lokal**.
- Jika $f''(x) < 0$ pada interval, kurva **cekung ke bawah** (*concave down* / cemberut). Titik kritis di daerah ini pasti merupakan **Maksimum Lokal**.
- Jika $f''(c) = 0$ dan terjadi pergantian tanda kecekungan, titik tersebut dinamakan **Titik Belok** (*Inflection Point*).`
      },
      {
        id: '3-3-aplikasi-optimasi-komputasi',
        title: '3.3 Penerapan Optimasi pada Masalah Rekayasa & Machine Learning',
        summary:
          'Merumuskan masalah dunia nyata ke dalam model fungsi objektif kalkulus untuk mencari alokasi sumber daya optimal.',
        readTime: '8 menit',
        keyTakeaways: [
          'Langkah optimasi: Tentukan variabel bebas, rumuskan fungsi objektif, tentukan batasan/kendala, cari titik kritis, dan uji titik batas.',
          'Teorema Nilai Ekstrem (EVT): Fungsi kontinu pada interval tertutup [a, b] dijamin memiliki nilai maksimum mutlak dan minimum mutlak.',
          'Dalam Machine Learning, pelatihan model adalah masalah optimasi meminimalkan fungsi kerugian (Loss Function).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <iomanip>

// Optimasi kapasitas: Mencari dimensi persegi panjang dengan keliling 40 m agar luas maksimal
// Keliling 2(p + l) = 40 => l = 20 - p. Luas A(p) = p * (20 - p) = 20p - p^2
// A'(p) = 20 - 2p = 0 => p = 10, l = 10 (Bujur sangkar sempurna)
int main() {
    double keliling = 40.0;
    double p_opt = keliling / 4.0;
    double l_opt = 20.0 - p_opt;
    double luas_maks = p_opt * l_opt;

    std::cout << "Panjang optimal : " << p_opt << " m\\n";
    std::cout << "Lebar optimal   : " << l_opt << " m\\n";
    std::cout << "Luas maksimum   : " << luas_maks << " m^2\\n";
    return 0;
}`,
          explanation:
            'Penyelesaian analitis optimasi klasik yang membuktikan bahwa bujur sangkar memaksimalkan luas untuk keliling tetap.'
        },
        content: `### 1. Prinsip Optimasi Matematika
Hampir seluruh masalah dalam komputasi modern adalah masalah optimasi:
- Bagaimana mengarahkan paket jaringan dengan latensi **minimum**?
- Bagaimana melatih model AI dengan tingkat galat **minimum**?
- Bagaimana mengompresi gambar dengan kualitas visual **maksimum**?

---

### 2. Teorema Nilai Ekstrem (Extreme Value Theorem)
Jika fungsi $f(x)$ kontinu pada interval tertutup $[a, b]$, maka $f$ dijamin pasti mencapai **maksimum mutlak** dan **minimum mutlak** setidaknya pada salah satu dari:
1. Titik kritis interior ($f'(c) = 0$ di dalam $(a, b)$).
2. Titik batas ujung interval ($x = a$ atau $x = b$).`
      }
    ],
    quiz: KALKULUS_QUIZZES['kalkulus_lhopital_optimasi']
  },
  {
    id: 'kalkulus_integral',
    number: 4,
    title: 'Integral Tentu, Teorema Dasar Kalkulus & Batas Deret',
    shortDesc:
      'Pelajari anti-turunan, Teorema Dasar Kalkulus (FTC), teknik substitusi dan integrasi parsial, serta Uji Integral untuk membuktikan batas deret algoritma.',
    iconName: 'Layers',
    sections: [
      {
        id: '4-1-anti-turunan-integral-tentu',
        title: '4.1 Anti-Turunan & Akumulasi Luas Integral Tentu',
        summary:
          'Memahami konsep integrasi sebagai penjumlahan akumulasi irisan tipis tak hingga di bawah kurva (Jumlah Riemann).',
        readTime: '8 menit',
        keyTakeaways: [
          'Integral tak tentu ∫ f(x) dx menghasilkan fungsi keluarga anti-turunan F(x) + C.',
          'Integral tentu ∫_a^b f(x) dx menghasilkan nilai skalar yang merepresentasikan luas bertanda di bawah kurva.',
          'Aturan Pangkat Integrasi: ∫ x^n dx = [x^{n+1} / (n+1)] + C untuk n != -1.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Aproksimasi integral tentu ∫_0^2 x^2 dx menggunakan metode Persegi Panjang Riemann (Midpoint Rule)
// Nilai analitis eksak = [x^3 / 3]_0^2 = 8/3 ≈ 2.666667
double f(double x) { return x * x; }

double integralRiemann(double a, double b, int n_irisan) {
    double dx = (b - a) / n_irisan;
    double total_luas = 0.0;
    for (int i = 0; i < n_irisan; i++) {
        double x_tengah = a + (i + 0.5) * dx;
        total_luas += f(x_tengah) * dx;
    }
    return total_luas;
}

int main() {
    std::cout << "Analitis eksak : 2.666667\\n";
    std::cout << "Riemann (n=1000): " << integralRiemann(0.0, 2.0, 1000) << std::endl;
    return 0;
}`,
          explanation:
            'Metode penjumlahan Riemann numerik membagi interval menjadi 1000 balok kecil persegi panjang, menghasilkan aproksimasi luas yang sangat akurat.'
        },
        content: `### 1. Konsep Akumulasi dan Penjumlahan Riemann
Jika turunan memecah fungsi menjadi laju perubahan mikro, maka **integral** menyatukan kembali irisan-irisan mikro tersebut menjadi akumulasi total:
$$\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x$$

---

### 2. Teorema Dasar Kalkulus (Fundamental Theorem of Calculus - FTC)
Teorema Dasar Kalkulus menjembatani dua cabang utama kalkulus: diferensial dan integral adalah operasi yang saling membalikkan (*inverse operations*):
1. **FTC Bagian 1**:
   $$\\frac{d}{dx} \\left[ \\int_a^x f(t) \\, dt \\right] = f(x)$$
2. **FTC Bagian 2 (Evaluasi Analitis)**:
   $$\\int_a^b f(x) \\, dx = F(b) - F(a), \\quad \\text{di mana } F'(x) = f(x)$$`
      },
      {
        id: '4-2-teknik-integrasi',
        title: '4.2 Teknik Integrasi: Substitusi & Integrasi Parsial',
        summary:
          'Menguasai metode substitusi u untuk membalikkan chain rule dan integrasi parsial untuk membalikkan product rule.',
        readTime: '8 menit',
        keyTakeaways: [
          'Metode Substitusi memetakan ∫ f(g(x)) g\'(x) dx menjadi ∫ f(u) du.',
          'Integrasi Parsial (Integration by Parts): ∫ u dv = uv - ∫ v du.',
          'Aturan pemilihan u pada parsial mengikuti mnemonik LIATE (Logaritma, Invers trig, Aljabar, Trigonometri, Eksponensial).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Demonstrasi integrasi analitis: ∫ x * e^x dx = (x - 1) * e^x + C
// Evaluasi dari x = 0 sampai x = 1: F(1) - F(0) = (0)*e^1 - (-1)*e^0 = 0 - (-1) = 1
double antiTurunan(double x) {
    return (x - 1.0) * std::exp(x);
}

int main() {
    double hasil = antiTurunan(1.0) - antiTurunan(0.0);
    std::cout << "Nilai ∫_0^1 x e^x dx adalah: " << hasil << std::endl;
    return 0;
}`,
          explanation:
            'Evaluasi analitis integral parsial ∫ x e^x dx menghasilkan angka bulat tepat 1.'
        },
        content: `### 1. Metode Substitusi Variabel
Metode ini adalah kebalikan langsung dari Aturan Rantai (*Chain Rule*). Bila kita melihat sebuah fungsi beserta turunan turunannya berada dalam integral:
$$\\int 2x \\, e^{x^2} \\, dx$$
Misalkan $u = x^2$, maka $du = 2x \\, dx$. Integral berubah menjadi bentuk elementer:
$$\\int e^u \\, du = e^u + C = e^{x^2} + C$$

---

### 2. Integrasi Parsial (Integration by Parts)
Ditransformasikan langsung dari aturan turunan perkalian dua fungsi:
$$\\int u \\, dv = u \\cdot v - \\int v \\, du$$

**Contoh Klasik $\\int \\ln(x) \\, dx$:**
- Pilih $u = \\ln x \\implies du = \\frac{1}{x} dx$
- Pilih $dv = dx \\implies v = x$
$$\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - x + C$$`
      },
      {
        id: '4-3-batas-deret-uji-integral',
        title: '4.3 Uji Integral untuk Membatasi Jumlah Deret Algoritma',
        summary:
          'Menggunakan kurva integral kontinu untuk mengapit dan membuktikan batas asimptotik notasi Big-Theta pada deret diskrit algoritma.',
        readTime: '9 menit',
        keyTakeaways: [
          'Jika f(x) positif dan monoton turun, maka: ∫_1^{n+1} f(x) dx <= ∑_{i=1}^n f(i) <= f(1) + ∫_1^n f(x) dx.',
          'Membuktikan deret harmonik ∑_{i=1}^n (1/i) bernilai ln(n) + O(1) ∈ Θ(log n).',
          'Uji integral menjadi jembatan matematis antara deret diskrit ilmu komputer dan kalkulus kontinu.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Perbandingan Deret Harmonik H_n = ∑ 1/i dengan ln(n)
int main() {
    int n = 100000;
    double H_n = 0.0;
    for (int i = 1; i <= n; i++) {
        H_n += 1.0 / i;
    }

    double ln_n = std::log(n);
    double gamma = H_n - ln_n; // Konstanta Euler-Mascheroni (γ ≈ 0.577215)

    std::cout << "Jumlah deret H_" << n << " = " << H_n << std::endl;
    std::cout << "Nilai ln(" << n << ")   = " << ln_n << std::endl;
    std::cout << "Selisih (gamma)  = " << gamma << " (Terbukti H_n ∈ Θ(log n))\\n";
    return 0;
}`,
          explanation:
            'Menghitung jumlah 100.000 suku deret harmonik dan membandingkannya dengan fungsi kontinu ln(n), membuktikan keterikatan asimptotiknya.'
        },
        content: `### 1. Deret Diskrit vs Integral Kontinu
Dalam analisis kompleksitas, kita sering menghadapi penjumlahan berulang $\\sum_{i=1}^n f(i)$ yang sulit diselesaikan secara aljabar eksak.

Karena integral tentu mengukur luas kontinu, jika $f(x)$ adalah fungsi monoton turun tak-negatif untuk $x \\ge 1$, kita dapat **mengapit** penjumlahan deret tersebut di antara dua integral:
$$\\int_1^{n+1} f(x) \\, dx \\le \\sum_{i=1}^n f(i) \\le f(1) + \\int_1^n f(x) \\, dx$$

---

### 2. Pembuktian Batas Deret Harmonik
Pada algoritma seperti Quickselect atau pembagian hashing, deret harmonik muncul:
$$H_n = \\sum_{i=1}^n \\frac{1}{i} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{n}$$
Karena $f(x) = \\frac{1}{x}$, integral batas bawahnya adalah:
$$\\int_1^{n+1} \\frac{1}{x} \\, dx = \\ln(n+1)$$
Dan batas atasnya adalah:
$$1 + \\int_1^n \\frac{1}{x} \\, dx = 1 + \\ln n$$
Oleh karena kedua batas tumbuh seirama dengan $\\ln n$, kita membuktikan secara matematis absolut bahwa:
$$H_n = \\Theta(\\log n)$$`
      }
    ],
    quiz: KALKULUS_QUIZZES['kalkulus_integral']
  },
  {
    id: 'kalkulus_deret_multivariat',
    number: 5,
    title: 'Deret Taylor, Vektor Gradien & Gradient Descent',
    shortDesc:
      'Aproksimasi fungsi nonlinear melalui deret Taylor, turunan parsial multivariat, vektor gradien, dan implementasi algoritma optimasi Gradient Descent.',
    iconName: 'Activity',
    sections: [
      {
        id: '5-1-deret-geometri-taylor',
        title: '5.1 Deret Tak Hingga & Ekspansi Polinomial Taylor',
        summary:
          'Mengaproksimasi fungsi kompleks sembarang menjadi jumlahan polinomial tak hingga yang mudah dievaluasi oleh mesin komputasi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Deret geometri tak hingga konvergen ke S = a / (1 - r) jika |r| < 1.',
          'Deret Taylor berpusat di x = a: f(x) = ∑_{n=0}^∞ [f^{(n)}(a) / n!] (x - a)^n.',
          'Deret Maclaurin adalah deret Taylor dengan pusat a = 0 (contoh: e^x, sin x, cos x).',
          'Sistem komputer modern mengevaluasi fungsi sin, cos, exp menggunakan pemotongan deret Taylor berorde hingga.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Menghitung e^x menggunakan pemotongan Deret Maclaurin: ∑ x^n / n!
double expMaclaurin(double x, int n_terms) {
    double sum = 0.0;
    double term = 1.0; // Suku pertama n=0: x^0 / 0! = 1
    for (int i = 0; i < n_terms; i++) {
        sum += term;
        term *= x / (i + 1); // Rekurensi suku berikutnya: term * (x / (i+1))
    }
    return sum;
}

int main() {
    double x = 1.0; // e^1 ≈ 2.718281828459
    std::cout << "Nilai eksak std::exp(1.0) = " << std::exp(x) << std::endl;
    std::cout << "Aproksimasi Taylor (5 suku) = " << expMaclaurin(x, 5) << std::endl;
    std::cout << "Aproksimasi Taylor (10 suku)= " << expMaclaurin(x, 10) << std::endl;
    return 0;
}`,
          explanation:
            'Dengan hanya 10 suku ekspansi Taylor, nilai e^x sudah memiliki tingkat presisi hingga 10 digit desimal di komputer.'
        },
        content: `### 1. Bagaimana Komputer Menghitung $\\sin(x)$ atau $e^x$?
Prosesor komputer pada dasarnya hanya bisa melakukan operasi aritmatika dasar: penjumlahan, pengurangan, perkalian, dan pembagian. Komputer tidak memiliki "tabel bawaan" untuk $\\sin(0.472)$.

Solusinya adalah **Deret Taylor**: mengubah fungsi matematika mulus menjadi deret suku polinomial:
$$f(x) = f(a) + \\frac{f'(a)}{1!}(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + \\frac{f'''(a)}{3!}(x - a)^3 + \\dots$$

---

### 2. Deret Maclaurin Standar
Jika titik pusat ekspansi dipilih $a = 0$, deret dinamai **Deret Maclaurin**:
$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$$
$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}$$
$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}$$`
      },
      {
        id: '5-2-turunan-parsial-vektor-gradien',
        title: '5.2 Kalkulus Multivariat: Turunan Parsial & Vektor Gradien',
        summary:
          'Memperluas kalkulus ke fungsi banyak variabel dan memahami sifat geometris vektor gradien nabla f.',
        readTime: '8 menit',
        keyTakeaways: [
          'Turunan parsial ∂f/∂x memperlakukan variabel lainnya (y, z) sebagai konstanta tetap.',
          'Vektor gradien ∇f = [∂f/∂x_1, ∂f/∂x_2, ..., ∂f/∂x_d]^T berisi seluruh turunan parsial pertama.',
          'Arah ∇f selalu menunjuk ke arah laju peningkatan nilai tertajam (steepest ascent).',
          'Besarnya ||∇f|| (panjang vektor gradien) menunjukkan seberapa curam kemiringan tersebut.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Fungsi multivariat biaya f(x, y) = x^2 + 3*y^2
// Menghitung vektor gradien ∇f = [2x, 6y]^T
struct Gradien2D {
    double df_dx;
    double df_dy;
};

Gradien2D hitungGradien(double x, double y) {
    return { 2.0 * x, 6.0 * y };
}

int main() {
    double x = 3.0, y = 2.0;
    Gradien2D g = hitungGradien(x, y);
    std::cout << "Titik: (" << x << ", " << y << ")\\n";
    std::cout << "Vektor Gradien ∇f = [" << g.df_dx << ", " << g.df_dy << "]^T\\n";
    double besar_gradien = std::sqrt(g.df_dx * g.df_dx + g.df_dy * g.df_dy);
    std::cout << "Besar kemiringan ||∇f|| = " << besar_gradien << std::endl;
    return 0;
}`,
          explanation:
            'Menghitung vektor gradien pada fungsi dua variabel secara analitis untuk mengarahkan optimasi.'
        },
        content: `### 1. Dari Satu Dimensi ke Dimensi Tinggi
Dalam dunia nyata dan kecerdasan buatan, kita berhadapan dengan jutaan parameter:
$$f(x_1, x_2, \\dots, x_d)$$
Untuk mengetahui pengaruh masing-masing parameter $x_i$ terhadap hasil akhir, kita menggunakan **Turunan Parsial** $\\frac{\\partial f}{\\partial x_i}$, yang dihitung dengan menganggap semua variabel lain bernilai konstan.

---

### 2. Vektor Gradien (Gradient Vector $\\nabla f$)
Jika seluruh turunan parsial dikumpulkan menjadi satu vektor, kita memperoleh **Gradien**:
$$\\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x_1} \\\\ \\frac{\\partial f}{\\partial x_2} \\\\ \\vdots \\\\ \\frac{\\partial f}{\\partial x_d} \\end{bmatrix}$$

**Sifat Geometris Utama:**
1. Vektor gradien $\\nabla f$ selalu tegak lurus (*orthogonal*) terhadap garis kontur ketinggian (*level curve*).
2. Arah $\\nabla f$ adalah arah di mana nilai fungsi melonjak naik paling curam (*direction of steepest ascent*).
3. Arah kebalikannya, $-\\nabla f$, adalah arah di mana fungsi merosot turun paling cepat (*direction of steepest descent*).`
      },
      {
        id: '5-3-algoritma-gradient-descent',
        title: '5.3 Algoritma Optimasi Gradient Descent untuk AI',
        summary:
          'Mengimplementasikan loop optimasi numerik Gradient Descent untuk meminimalkan fungsi kerugian parameter.',
        readTime: '9 menit',
        keyTakeaways: [
          'Aturan pembaruan parameter: w_{t+1} = w_t - η * ∇f(w_t).',
          'η (learning rate) mengatur panjang langkah pergeseran per iterasi.',
          'Jika η terlalu besar, optimasi akan berosilasi dan divergen; jika terlalu kecil, konvergensi lambat.',
          'Gradient Descent berhenti ketika norm gradien ||∇f|| mendekati nol (mencapai dasar lembah minimum).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Algoritma Gradient Descent meminimalkan fungsi f(x) = x^2 - 4x + 7
// f'(x) = 2x - 4. Titik minimum analitis ada di x* = 2 (f(2) = 3)
int main() {
    double x = 10.0;       // Tebakan awal parameter (jauh dari target)
    double eta = 0.1;       // Learning rate
    int max_iterasi = 40;

    std::cout << "Memulai Gradient Descent dari x = " << x << ":\\n";
    for (int t = 1; t <= max_iterasi; t++) {
        double grad = 2.0 * x - 4.0; // Turunan ∇f
        x = x - eta * grad;         // Update rule: w = w - η * ∇f

        if (t % 5 == 0 || t == max_iterasi) {
            std::cout << "Iterasi " << t << " -> x = " << x 
                      << ", Loss f(x) = " << (x * x - 4 * x + 7) << std::endl;
        }
        if (std::abs(grad) < 1e-6) break; // Berhenti jika gradien sudah nol
    }
    std::cout << "Konvergensi tercapai pada x* ≈ " << x << std::endl;
    return 0;
}`,
          explanation:
            'Proses iteratif Gradient Descent secara stabil menuruni lereng hingga mencapai titik stasioner x = 2 di mana gradien nol.'
        },
        content: `### 1. Bagaimana Algoritma AI Belajar?
Di balik kecanggihan model AI modern (seperti LLM, Computer Vision, dan Autonomous Driving), terdapat sebuah algoritma optimasi kalkulus yang sangat elegan: **Gradient Descent**.

Jika kita membayangkan fungsi biaya (*Loss Function*) sebagai sebuah lembah pegunungan berkabut, kita tidak tahu di mana dasar lembah berada. Namun, dengan mengukur kemiringan tanah di bawah kaki kita (gradien $\\nabla f$), kita cukup melangkah ke arah yang paling menurun ($-\\nabla f$).

---

### 2. Aturan Pembaruan Parameter (Parameter Update Rule)
Pada setiap langkah waktu $t$:
$$\\mathbf{w}_{t+1} = \\mathbf{w}_t - \\eta \\nabla f(\\mathbf{w}_t)$$
Di mana:
- $\\mathbf{w}_t$ adalah vektor bobot parameter saat ini.
- $\\eta$ (*learning rate*) adalah ukuran langkah.
- $\\nabla f(\\mathbf{w}_t)$ adalah gradien fungsi loss yang dievaluasi pada bobot saat ini.

Dengan mengulang langkah ini ribuan hingga jutaan kali, parameter model secara otomatis terdorong menuju konfigurasi optimal yang menghasilkan galat terendah.`
      }
    ],
    quiz: KALKULUS_QUIZZES['kalkulus_deret_multivariat']
  }
];

export const KALKULUS_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Limit & Asimptotik',
    name: 'Metode Rasio Limit untuk Kompleksitas',
    formula: 'L = \\lim_{n \\to \\infty} \\frac{f(n)}{g(n)} \\implies \\begin{cases} L = 0 & f \\in o(g) \\\\ 0 < L < \\infty & f \\in \\Theta(g) \\\\ L = \\infty & f \\in \\omega(g) \\end{cases}',
    notes: 'Kriteria formal kalkulus untuk membandingkan laju pertumbuhan algoritma.'
  },
  {
    category: 'Limit & Asimptotik',
    name: 'Limit Fundamental Trigonometri & Euler',
    formula: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\qquad \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2.71828',
    notes: 'Limit standar untuk pembuktian turunan trigonometri dan bunga majemuk kontinu.'
  },
  {
    category: 'Turunan Baku',
    name: 'Aturan Pangkat & Transenden',
    formula: '\\frac{d}{dx}[x^n] = n x^{n-1}, \\quad \\frac{d}{dx}[e^x] = e^x, \\quad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}',
    notes: 'Formula dasar turunan fungsi aljabar dan transenden.'
  },
  {
    category: 'Turunan Baku',
    name: 'Aturan Perkalian, Pembagian & Rantai',
    formula: '(uv)\' = u\'v + uv\', \\quad \\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}, \\quad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}',
    notes: 'Aturan rantai (Chain Rule) adalah pondasi algoritma Backpropagation.'
  },
  {
    category: 'Aturan L\'Hopital & Optimasi',
    name: 'Teorema Aturan L\'Hôpital',
    formula: '\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f\'(x)}{g\'(x)} \\quad \\text{untuk bentuk } \\left[\\frac{0}{0}\\right] \\text{ atau } \\left[\\frac{\\pm\\infty}{\\pm\\infty}\\right]',
    notes: 'Hanya boleh dipakai jika substitusi awal menghasilkan bentuk tak tentu 0/0 atau inf/inf.'
  },
  {
    category: 'Aturan L\'Hopital & Optimasi',
    name: 'Uji Turunan Kedua untuk Ekstremum',
    formula: 'f\'(c) = 0 \\implies \\begin{cases} f\'\'(c) > 0 & \\text{Minimum Lokal} \\\\ f\'\'(c) < 0 & \\text{Maksimum Lokal} \\\\ f\'\'(c) = 0 & \\text{Inconclusive} \\end{cases}',
    notes: 'Menentukan kecekungan kurva pada titik kritis stasioner.'
  },
  {
    category: 'Integral & Batas Deret',
    name: 'Teorema Dasar Kalkulus (FTC)',
    formula: '\\frac{d}{dx}\\left[\\int_a^x f(t) dt\\right] = f(x), \\qquad \\int_a^b f(x) dx = F(b) - F(a)',
    notes: 'Menghubungkan operasi diferensial dan integral sebagai operasi yang saling membalikkan.'
  },
  {
    category: 'Integral & Batas Deret',
    name: 'Rumus Integrasi Parsial',
    formula: '\\int u \\, dv = u \\cdot v - \\int v \\, du',
    notes: 'Membalikkan product rule diferensiasi untuk mengintegralkan perkalian fungsi.'
  },
  {
    category: 'Integral & Batas Deret',
    name: 'Uji Integral untuk Batas Asimptotik Deret',
    formula: '\\int_1^{n+1} f(x) dx \\le \\sum_{i=1}^n f(i) \\le f(1) + \\int_1^n f(x) dx \\implies H_n \\in \\Theta(\\log n)',
    notes: 'Membuktikan batas pertumbuhan jumlah diskrit menggunakan luas integral kontinu.'
  },
  {
    category: 'Deret & Multivariat',
    name: 'Ekspansi Deret Taylor & Maclaurin',
    formula: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n, \\qquad e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}',
    notes: 'Aproksimasi polinomial tak hingga yang digunakan oleh CPU/GPU untuk mengevaluasi fungsi.'
  },
  {
    category: 'Deret & Multivariat',
    name: 'Vektor Gradien & Update Rule Gradient Descent',
    formula: '\\nabla f = \\left[ \\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_d} \\right]^T, \\qquad \\mathbf{w}_{t+1} = \\mathbf{w}_t - \\eta \\nabla f(\\mathbf{w}_t)',
    notes: 'Algoritma optimasi iteratif untuk meminimalkan fungsi loss pada machine learning.'
  }
];
