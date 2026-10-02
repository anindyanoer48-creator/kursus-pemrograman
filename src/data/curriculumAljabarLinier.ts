import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { ALJABAR_LINIER_QUIZZES } from './quizzesAljabarLinier';

export const ALJABAR_LINIER_MODULES: ModuleData[] = [
  {
    id: 'algeo_vektor_dasar',
    number: 1,
    title: 'Vektor di R^n, Operasi Dasar & Cosine Similarity',
    shortDesc:
      'Fondasi aljabar vektor: representasi geometris dan numerik, perkalian skalar, dot product, norm L1/L2, ortogonalitas, hingga metrik Cosine Similarity dalam NLP.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-vektor-dan-norm',
        title: '1.1 Vektor di R^n & Pengukuran Panjang (Norm L1 & L2)',
        summary:
          'Memahami representasi vektor sebagai titik koordinat atau panah berarah di ruang n-dimensi serta cara mengukur panjangnya.',
        readTime: '8 menit',
        keyTakeaways: [
          'Vektor di R^n adalah tupel terurut [v_1, v_2, ..., v_n] dengan magnitudo dan arah.',
          'Penjumlahan dan perkalian skalar dilakukan secara elemen demi elemen (element-wise).',
          'Norm Euclidean L2: ||v||_2 = √(∑ v_i^2).',
          'Norm Manhattan L1: ||v||_1 = ∑ |v_i|.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <cmath>

// Menghitung Norm L1 dan Norm L2 dari sebuah vektor
double normL1(const std::vector<double>& v) {
    double sum = 0.0;
    for (double x : v) sum += std::abs(x);
    return sum;
}

double normL2(const std::vector<double>& v) {
    double sumSq = 0.0;
    for (double x : v) sumSq += x * x;
    return std::sqrt(sumSq);
}

int main() {
    std::vector<double> v = {3.0, -4.0};
    std::cout << "Vektor v = [3, -4]\\n";
    std::cout << "Norm Manhattan L1 : " << normL1(v) << " (|3| + |-4| = 7)\\n";
    std::cout << "Norm Euclidean L2 : " << normL2(v) << " (√(3^2 + (-4)^2) = 5)\\n";
    return 0;
}`,
          explanation:
            'Implementasi C++ penghitungan panjang vektor dalam metrik Manhattan dan Euclidean.'
        },
        content: `### 1. Apa Itu Vektor dalam Ilmu Komputer?
Dalam matematika dan komputasi modern, vektor bukan sekadar panah di ruang fisika, melainkan **susunan terurut dari $n$ angka riil**:
$$\\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} \\in \\mathbb{R}^n$$

Vektor digunakan di mana saja:
- **Grafika Komputer**: Posisi 3D $(x, y, z)$, normal permukaan, dan warna RGBA.
- **Machine Learning**: Vektor fitur data (misal: tinggi, berat, umur, pendapatan).
- **Pemrosesan Bahasa Alami (NLP)**: *Word Embedding* yang memetakan makna kata ke dalam ruang 768 dimensi (vektor padat).

---

### 2. Pengukuran Panjang Vektor (Vector Norms)
1. **Norm Euclidean ($L_2$ Norm)**: Mengukur jarak garis lurus terpendek:
   $$\\|\\mathbf{v}\\|_2 = \\sqrt{\\sum_{i=1}^n v_i^2} = \\sqrt{v_1^2 + v_2^2 + \\dots + v_n^2}$$
2. **Norm Manhattan ($L_1$ Norm)**: Mengukur jarak tempuh kisi blok kota:
   $$\\|\\mathbf{v}\\|_1 = \\sum_{i=1}^n |v_i| = |v_1| + |v_2| + \\dots + |v_n|$$`
      },
      {
        id: '1-2-dot-product-cosine-similarity',
        title: '1.2 Perkalian Titik (Dot Product) & Cosine Similarity',
        summary:
          'Mengukur sudut dan keselarasan antar dua vektor data melalui operasi perkalian titik dan metrik kemiripan kosinus.',
        readTime: '8 menit',
        keyTakeaways: [
          'Dot Product: u • v = ∑ u_i * v_i = ||u|| ||v|| cos(θ).',
          'Dua vektor ortogonal (tegak lurus 90°) memiliki u • v = 0.',
          'Cosine Similarity: cos(θ) = (u • v) / (||u|| * ||v||).',
          'Bernilai 1 jika searah sempurna, 0 jika ortogonal tak berelasi, dan -1 jika berlawanan arah.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <cmath>

// Menghitung Cosine Similarity antara dua dokumen vektor
double dotProduct(const std::vector<double>& a, const std::vector<double>& b) {
    double res = 0.0;
    for (size_t i = 0; i < a.size(); i++) res += a[i] * b[i];
    return res;
}

double cosineSimilarity(const std::vector<double>& a, const std::vector<double>& b) {
    double dot = dotProduct(a, b);
    double normA = std::sqrt(dotProduct(a, a));
    double normB = std::sqrt(dotProduct(b, b));
    return dot / (normA * normB);
}

int main() {
    std::vector<double> doc1 = {1.0, 2.0, 0.0}; // kata: [algoritma, koding, cuaca]
    std::vector<double> doc2 = {2.0, 4.0, 0.0}; // topik teknologi serupa
    std::vector<double> doc3 = {0.0, 0.0, 3.0}; // topik cuaca

    std::cout << "Similarity(doc1, doc2) = " << cosineSimilarity(doc1, doc2) << " (Identik searah: 1.0)\\n";
    std::cout << "Similarity(doc1, doc3) = " << cosineSimilarity(doc1, doc3) << " (Ortogonal: 0.0)\\n";
    return 0;
}`,
          explanation:
            'Cosine Similarity mengabaikan perbedaan panjang teks (magnitude) dan hanya berfokus pada orientasi makna kata (arah sudut).'
        },
        content: `### 1. Perkalian Titik (Dot Product)
Operasi *dot product* (hasil kali dalam) antara dua vektor $\\mathbf{u}$ dan $\\mathbf{v}$ berdimensi $n$ didefinisikan sebagai:
$$\\mathbf{u} \\cdot \\mathbf{v} = \\sum_{i=1}^n u_i v_i = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n$$

Secara geometris:
$$\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos(\\theta)$$
Di mana $\\theta$ adalah sudut yang diapit oleh kedua vektor.

---

### 2. Metrik Cosine Similarity
Dalam sistem pencarian (*Search Engine*) dan *Vector Database* (seperti Pinecone, Milvus, Qdrant), kesamaan dua dokumen atau gambar diukur menggunakan:
$$\\text{CosineSimilarity}(\\mathbf{u}, \\mathbf{v}) = \\cos(\\theta) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$$
Karena rentang nilai kosinus berada pada $[-1, 1]$:
- $+1$: Kedua vektor mengarah tepat ke arah yang sama (sangat mirip).
- $0$: Kedua vektor saling tegak lurus (independen/tidak ada hubungan).
- $-1$: Kedua vektor berlawanan arah secara mutlak.`
      },
      {
        id: '1-3-cross-product-proyeksi',
        title: '1.3 Perkalian Silang (Cross Product) & Proyeksi Ortogonal',
        summary:
          'Menghitung vektor tegak lurus di ruang 3D dan teknik memproyeksikan vektor sembarang ke garis atau bidang.',
        readTime: '8 menit',
        keyTakeaways: [
          'Cross Product u × v hanya terdefinisi di dimensi 3, menghasilkan vektor baru yang tegak lurus u dan v.',
          'Panjang ||u × v|| = ||u|| ||v|| sin(θ) merepresentasikan luas jajaran genjang.',
          'Proyeksi vektor u ke v: proj_v(u) = ((u • v) / ||v||^2) * v.',
          'Dekomposisi vektor: u = proj_v(u) + u_tegak_lurus.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Perkalian silang u × v di R^3
struct Vec3 {
    double x, y, z;
    Vec3 cross(const Vec3& o) const {
        return {
            y * o.z - z * o.y,
            z * o.x - x * o.z,
            x * o.y - y * o.x
        };
    }
};

int main() {
    Vec3 i = {1, 0, 0};
    Vec3 j = {0, 1, 0};
    Vec3 k = i.cross(j); // i × j = k = [0, 0, 1]

    std::cout << "i × j = [" << k.x << ", " << k.y << ", " << k.z << "]^T (Vektor basis z)\\n";
    return 0;
}`,
          explanation:
            'Menghitung vektor normal permukaan poligon 3D dalam grafik komputer dan game engine.'
        },
        content: `### 1. Perkalian Silang (Cross Product)
Diberikan $\\mathbf{u} = [u_1, u_2, u_3]$ dan $\\mathbf{v} = [v_1, v_2, v_3]$ di ruang $\\mathbb{R}^3$, perkalian silang dihitung dengan determinan formal:
$$\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix} = \\begin{bmatrix} u_2 v_3 - u_3 v_2 \\\\ u_3 v_1 - u_1 v_3 \\\\ u_1 v_2 - u_2 v_1 \\end{bmatrix}$$
Vektor hasil selalu memenuhi $\\mathbf{u} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$ dan $\\mathbf{v} \\cdot (\\mathbf{u} \\times \\mathbf{v}) = 0$.

---

### 2. Proyeksi Ortogonal
Komponen vektor $\\mathbf{u}$ yang searah garis $\\mathbf{v}$ dinamakan **proyeksi ortogonal**:
$$\\text{proj}_{\\mathbf{v}}(\\mathbf{u}) = \\left( \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\right) \\mathbf{v}$$
Sisa selisih $\\mathbf{u} - \\text{proj}_{\\mathbf{v}}(\\mathbf{u})$ dijamin tegak lurus sempurna terhadap $\\mathbf{v}$, yang menjadi pondasi metode *Linear Regression (Ordinary Least Squares)*.`
      }
    ],
    quiz: ALJABAR_LINIER_QUIZZES['algeo_vektor_dasar']
  },
  {
    id: 'algeo_matriks_spl',
    number: 2,
    title: 'Matriks & Sistem Persamaan Linier (SPL)',
    shortDesc:
      'Operasi aljabar matriks, matriks transpose, representasi SPL Ax = b, serta metode algoritma Eliminasi Gauss dan Gauss-Jordan hingga RREF.',
    iconName: 'Grid',
    sections: [
      {
        id: '2-1-operasi-matriks',
        title: '2.1 Aljabar Matriks, Transpose & Non-Komutativitas',
        summary:
          'Memahami syarat perkalian matriks, sifat asosiatif, distributif, serta fakta bahwa AB != BA secara umum.',
        readTime: '8 menit',
        keyTakeaways: [
          'Perkalian A (m x k) dengan B (k x n) menghasilkan C (m x n) dengan elemen C_{ij} = ∑ A_{ir} B_{rj}.',
          'Perkalian matriks TIDAK bersifat komutatif: AB != BA.',
          'Sifat transpose: (A^T)^T = A, dan (AB)^T = B^T A^T.',
          'Matriks simetris memenuhi A^T = A.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Perkalian dua matriks: C = A * B
std::vector<std::vector<double>> kaliMatriks(
    const std::vector<std::vector<double>>& A,
    const std::vector<std::vector<double>>& B) 
{
    int m = A.size(), k = A[0].size(), n = B[0].size();
    std::vector<std::vector<double>> C(m, std::vector<double>(n, 0.0));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            for (int r = 0; r < k; r++) {
                C[i][j] += A[i][r] * B[r][j];
            }
        }
    }
    return C;
}

int main() {
    std::vector<std::vector<double>> A = {{1, 2}, {3, 4}};
    std::vector<std::vector<double>> B = {{2, 0}, {1, 2}};
    auto C = kaliMatriks(A, B);
    std::cout << "Hasil kali C[0][0] = " << C[0][0] << ", C[0][1] = " << C[0][1] << "\\n";
    return 0;
}`,
          explanation:
            'Algoritma naif perkalian matriks berjalan dengan 3 nested loop berkebutuhan waktu O(m * k * n).'
        },
        content: `### 1. Perkalian Matriks sebagai Komposisi
Jika matriks $A$ mentransformasikan vektor dan matriks $B$ mentransformasikan vektor hasil tersebut, maka efek gabungannya adalah matriks perkalian $AB$.

Ukuran dimensi:
$$A_{m \\times k} \\times B_{k \\times n} = C_{m \\times n}$$
Di mana entri baris ke-$i$ dan kolom ke-$j$ adalah hasil dot product baris $i$ dari $A$ dengan kolom $j$ dari $B$:
$$C_{ij} = \\sum_{r=1}^k A_{ir} B_{rj}$$

---

### 2. Sifat Transpose
Operasi transpose menukar indeks baris dan kolom: $(A^T)_{ij} = A_{ji}$.
Aturan penting pada transpose perkalian adalah pembalikan urutan:
$$(AB)^T = B^T A^T$$`
      },
      {
        id: '2-2-representasi-spl',
        title: '2.2 Sistem Persamaan Linier (SPL) & Matriks Augmented',
        summary:
          'Memodelkan sistem banyak persamaan linier ke dalam bentuk matriks ringkas Ax = b dan klasifikasi konsistensinya.',
        readTime: '8 menit',
        keyTakeaways: [
          'Sistem linier m persamaan dengan n variabel ditulis sebagai matriks tunggal: Ax = b.',
          'Matriks Augmented menggabungkan matriks koefisien dan konstanta: [A | b].',
          'Klasifikasi solusi SPL: (1) Solusi Unik, (2) Tak Hingga Banyak Solusi, (3) Tidak Ada Solusi (Inkonsisten).',
          'Sistem Homogen Ax = 0 selalu konsisten karena memiliki solusi trivial x = 0.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Sistem persamaan:
// 2x + y = 5
//  x + 3y = 5
// Solusi: x = 2, y = 1
int main() {
    std::cout << "Representasi matriks Ax = b:\\n";
    std::cout << "[ 2  1 ] [ x ]   [ 5 ]\\n";
    std::cout << "[ 1  3 ] [ y ] = [ 5 ]\\n";
    std::cout << "Matriks Augmented [A | b]:\\n";
    std::cout << "[ 2  1 | 5 ]\\n";
    std::cout << "[ 1  3 | 5 ]\\n";
    return 0;
}`,
          explanation:
            'Menampilkan visualisasi matematis sistem persamaan linier ke format augmented matrix.'
        },
        content: `### 1. Bentuk Umum Sistem Persamaan Linier
Kumpulan persamaan linier:
$$\\begin{aligned}
a_{11} x_1 + a_{12} x_2 + \\dots + a_{1n} x_n &= b_1 \\\\
a_{21} x_1 + a_{22} x_2 + \\dots + a_{2n} x_n &= b_2 \\\\
&\\vdots \\\\
a_{m1} x_1 + a_{m2} x_2 + \\dots + a_{mn} x_n &= b_m
\\end{aligned}$$
Dapat diringkas menjadi perkalian matriks-vektor elegan:
$$A \\mathbf{x} = \\mathbf{b}$$

---

### 2. Tiga Skenario Solusi Geometris
Di ruang dua atau tiga dimensi, setiap persamaan linier merepresentasikan garis atau bidang.
1. **Solusi Unik**: Garis/bidang berpotongan tepat di satu titik.
2. **Tak Hingga Solusi**: Garis/bidang saling berimpit (ada variabel bebas).
3. **Tidak Ada Solusi (Inkonsisten)**: Garis sejajar dan tidak pernah bertemu, menghasilkan kontradiksi $0 = c$ ($c \\ne 0$).`
      },
      {
        id: '2-3-eliminasi-gauss-jordan',
        title: '2.3 Eliminasi Gauss & Gauss-Jordan (Bentuk Eselon RREF)',
        summary:
          'Menggunakan tiga Operasi Baris Elementer (OBE) untuk mereduksi matriks secara sistematis menuju solusi eksak.',
        readTime: '9 menit',
        keyTakeaways: [
          'Tiga OBE yang valid: Tukar baris (R_i <-> R_j), Skala baris (k * R_i), dan Tambah kelipatan baris (R_i + k * R_j).',
          'Eliminasi Gauss menghasilkan bentuk Baris Eselon (Row Echelon Form - REF).',
          'Eliminasi Gauss-Jordan menghasilkan Baris Eselon Tereduksi (Reduced Row Echelon Form - RREF) yang langsung menunjukkan nilai solusi variabel.',
          'Kompleksitas waktu komputasi eliminasi Gauss adalah O(n^3).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Eliminasi Gauss sederhana untuk sistem 2x2
int main() {
    double A[2][3] = {
        {2.0, 1.0, 5.0},
        {1.0, 3.0, 5.0}
    };

    // Langkah OBE 1: R2 = R2 - (1/2)*R1
    double faktor = A[1][0] / A[0][0];
    for (int j = 0; j < 3; j++) {
        A[1][j] -= faktor * A[0][j];
    }

    // Back-substitution
    double y = A[1][2] / A[1][1];
    double x = (A[0][2] - A[0][1] * y) / A[0][0];

    std::cout << "Solusi terhitung: x = " << x << ", y = " << y << std::endl;
    return 0;
}`,
          explanation:
            'Proses komputasi Operasi Baris Elementer (OBE) yang mengenolkan elemen di bawah pivot lalu melakukan substitusi balik.'
        },
        content: `### 1. Tiga Operasi Baris Elementer (OBE)
Sistem persamaan linier tidak akan berubah himpunan solusinya jika kita melakukan:
1. **$R_i \\leftrightarrow R_j$**: Menukar urutan dua baris.
2. **$k \\cdot R_i$**: Mengalikan seluruh baris dengan konstanta bukan-nol ($k \\ne 0$).
3. **$R_i \\leftarrow R_i + k R_j$**: Menambahkan kelipatan suatu baris ke baris lainnya.

---

### 2. Ciri Khas Bentuk Eselon Baris Tereduksi (RREF)
Sebuah matriks berada dalam bentuk RREF jika:
1. Jika ada baris yang seluruhnya nol, diletakkan di baris paling bawah.
2. Elemen bukan-nol pertama pada setiap baris adalah angka $1$ (*leading 1* / satu utama).
3. Satu utama pada baris bawah terletak lebih ke kanan daripada baris atasnya.
4. Setiap kolom yang memuat satu utama memiliki angka $0$ di seluruh elemen lainnya (atas dan bawah).`
      }
    ],
    quiz: ALJABAR_LINIER_QUIZZES['algeo_matriks_spl']
  },
  {
    id: 'algeo_determinan_invers',
    number: 3,
    title: 'Determinan, Matriks Invers & Aturan Cramer',
    shortDesc:
      'Pahami makna geometris determinan sebagai faktor skala luas/volume, kriteria keterbalikan matriks, matriks adjoint, invers analitis, dan Aturan Cramer.',
    iconName: 'Zap',
    sections: [
      {
        id: '3-1-konsep-determinan',
        title: '3.1 Makna Geometris & Sifat-Sifat Determinan',
        summary:
          'Melihat determinan bukan sekadar rumus aljabar, melainkan pengukuran seberapa banyak matriks meregangkan atau memampatkan ruang.',
        readTime: '8 menit',
        keyTakeaways: [
          'Rumus determinan 2x2: det([[a, b], [c, d]]) = ad - bc.',
          '|det(A)| adalah faktor pengali luas (2D) atau volume (3D) ruang.',
          'Jika det(A) = 0, ruang mengalami keruntuhan dimensi (luas/volume menjadi nol), sehingga matriks tidak dapat dibalik.',
          'Sifat multiplikatif: det(AB) = det(A) * det(B).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menghitung determinan matriks 2x2 dan 3x3
double det2x2(double a, double b, double c, double d) {
    return a * d - b * c;
}

int main() {
    double a = 3, b = 2, c = 1, d = 4;
    double det = det2x2(a, b, c, d);
    std::cout << "Matriks [[3, 2], [1, 4]] memiliki determinan: " << det << std::endl;
    std::cout << "Transformasi ini memperbesar luas area sebesar " << det << " kali lipat.\\n";
    return 0;
}`,
          explanation:
            'Menghitung determinan 2x2 dan menginterpretasikan maknanya sebagai perbesaran area.'
        },
        content: `### 1. Tafsiran Geometris Determinan
Bayangkan kotak bujur sangkar satuan yang dibentuk oleh vektor basis $[1, 0]^T$ dan $[0, 1]^T$ dengan luas $1$.
Setelah ditransformasikan oleh matriks $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$, kotak satuan tersebut berubah menjadi jajaran genjang.

Luas jajaran genjang baru tersebut tepat sama dengan nilai mutlak **Determinan**:
$$\\text{Luas} = |\\det(A)| = |ad - bc|$$

Jika $\\det(A) < 0$, orientasi ruang terbalik (seperti efek cermin).
Jika $\\det(A) = 0$, seluruh bidang 2D terpampatkan menjadi satu garis lurus 1D (luas $0$).

---

### 2. Sifat-Sifat Kunci Determinan
1. $\\det(I) = 1$.
2. $\\det(A^T) = \\det(A)$.
3. $\\det(AB) = \\det(A) \\cdot \\det(B)$.
4. $\\det(A^{-1}) = \\frac{1}{\\det(A)}$.
5. $\\det(k A) = k^n \\det(A)$ untuk matriks berukuran $n \\times n$.
6. Menukar dua baris mengalikan determinan dengan $-1$.`
      },
      {
        id: '3-2-matriks-invers-cramer',
        title: '3.2 Matriks Invers, Adjoint & Aturan Cramer',
        summary:
          'Menghitung invers matriks analitis A^{-1} sedemikian sehingga A * A^{-1} = I dan menyelesaikan SPL dengan rasio determinan.',
        readTime: '8 menit',
        keyTakeaways: [
          'Matriks A invertibel (non-singular) jika dan hanya jika det(A) != 0.',
          'Rumus Invers 2x2: A^{-1} = (1 / (ad - bc)) * [[d, -b], [-c, a]].',
          'Rumus Invers n x n: A^{-1} = (1 / det(A)) * adj(A).',
          'Aturan Cramer: x_i = det(A_i) / det(A).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menghitung invers matriks 2x2
int main() {
    double a = 4, b = 7, c = 2, d = 6;
    double det = a * d - b * c; // 24 - 14 = 10

    if (det == 0) {
        std::cerr << "Matriks singular (tidak punya invers)!\\n";
        return 1;
    }

    double invA[2][2] = {
        { d / det, -b / det },
        { -c / det, a / det }
    };

    std::cout << "Matriks Invers A^{-1}:\\n";
    std::cout << "[ " << invA[0][0] << ", " << invA[0][1] << " ]\\n";
    std::cout << "[ " << invA[1][0] << ", " << invA[1][1] << " ]\\n";
    return 0;
}`,
          explanation:
            'Menghitung invers matriks 2x2 menggunakan formula analitis adjoint.'
        },
        content: `### 1. Konsep Matriks Invers
Matriks invers $A^{-1}$ adalah "pembagian" dalam dunia matriks. Jika kita memiliki persamaan:
$$A \\mathbf{x} = \\mathbf{b}$$
Kalikan kedua ruas dari kiri dengan $A^{-1}$:
$$A^{-1} A \\mathbf{x} = A^{-1} \\mathbf{b} \\implies I \\mathbf{x} = A^{-1} \\mathbf{b} \\implies \\mathbf{x} = A^{-1} \\mathbf{b}$$

---

### 2. Aturan Cramer (Cramer's Rule)
Untuk SPL dengan matriks koefisien bujur sangkar $A$ dan $\\det(A) \\ne 0$, nilai setiap variabel $x_i$ dapat dihitung secara independen:
$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$
Di mana matriks $A_i$ dibentuk dengan mengganti kolom ke-$i$ dari $A$ dengan vektor konstanta $\\mathbf{b}$.`
      },
      {
        id: '3-3-matriks-ortogonal-simetris',
        title: '3.3 Matriks Khusus: Ortogonal, Simetris & Segitiga',
        summary:
          'Karakteristik kelas matriks penting yang memiliki sifat efisiensi tinggi dalam komputasi dan grafika.',
        readTime: '8 menit',
        keyTakeaways: [
          'Matriks Segitiga: Determinan sama dengan perkalian entri diagonal utamanya.',
          'Matriks Ortogonal Q: Memenuhi Q^T = Q^{-1}, sehingga inversnya instan dan mempertahankan panjang vektor.',
          'Determinan matriks ortogonal selalu det(Q) = ±1.',
          'Matriks Simetris A = A^T memiliki semua nilai eigen riil dan vektor eigen saling ortogonal.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Verifikasi sifat matriks rotasi (ortogonal): Q^T * Q = I
int main() {
    double theta = 0.785398; // 45 derajat (π/4 rad)
    double c = std::cos(theta), s = std::sin(theta);

    // Q = [[c, -s], [s, c]]
    // Q^T * Q entri (0,0) = c*c + s*s = 1
    double testIdentitas = c * c + s * s;
    std::cout << "Verifikasi Q^T * Q diagonal (cos^2 + sin^2) = " << testIdentitas << std::endl;
    std::cout << "Terbukti ortogonal: invers matriks rotasi cukup ditranspose!\\n";
    return 0;
}`,
          explanation:
            'Matriks rotasi adalah matriks ortogonal: membalikkan rotasi tidak membutuhkan invers yang mahal, cukup men-transpose matriks.'
        },
        content: `### 1. Matriks Ortogonal ($Q$)
Sebuah matriks bujur sangkar $Q$ disebut ortogonal jika kolom-kolomnya membentuk himpunan ortonormal. Ciri khas utamanya adalah:
$$Q^T Q = Q Q^T = I \\implies Q^{-1} = Q^T$$
Sifat ini sangat dihargai dalam pemrograman grafika 3D dan simulasi fisika karena menghitung transpose $Q^T$ membutuhkan waktu $O(1)$ tanpa proses invers yang rawan eror numerik pembulatan.

---

### 2. Matriks Simetris
Matriks simetris ($A = A^T$) sering muncul sebagai matriks kovariansi data, graf keterhubungan tak-berarah (Adjacency Matrix), dan matriks Hessian pada kalkulus multivariat.`
      }
    ],
    quiz: ALJABAR_LINIER_QUIZZES['algeo_determinan_invers']
  },
  {
    id: 'algeo_ruang_vektor_basis',
    number: 4,
    title: 'Ruang Vektor, Kebebasan Linier & Teorema Rank-Nullity',
    shortDesc:
      'Kombinasi linier, rentang (span), pengujian kebebasan linier, konsep basis dan dimensi, empat subruang matriks fundamental, serta Teorema Rank-Nullity.',
    iconName: 'Boxes',
    sections: [
      {
        id: '4-1-kombinasi-kebebasan-linier',
        title: '4.1 Kombinasi Linier, Rentang (Span) & Kebebasan Linier',
        summary:
          'Mengidentifikasi apakah sekumpulan vektor mengandung informasi redundan atau saling bebas satu sama lain.',
        readTime: '8 menit',
        keyTakeaways: [
          'Kombinasi linier: c_1 v_1 + c_2 v_2 + ... + c_k v_k.',
          'Span(S) adalah himpunan semua kemungkinan kombinasi linier dari vektor-vektor S.',
          'Vektor {v_1, ..., v_k} Bebas Linier jika ∑ c_i v_i = 0 HANYA saat semua c_i = 0.',
          'Jika terdapat c_i != 0 sehingga ∑ c_i v_i = 0, maka himpunan tersebut Bergantung Linier (ada redundansi).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Memeriksa kebebasan linier dua vektor 2D v1=[a, c]^T dan v2=[b, d]^T
// Bebas linier jika determinannya ad - bc != 0
bool isBebasLinier2D(double a, double b, double c, double d) {
    double det = a * d - b * c;
    return det != 0.0;
}

int main() {
    // v1 = [1, 2], v2 = [2, 4] -> Kelipatan (bergantung linier)
    std::cout << "[1, 2] dan [2, 4] bebas linier? " 
              << (isBebasLinier2D(1, 2, 2, 4) ? "Ya" : "Tidak (Redundan)") << std::endl;

    // u1 = [1, 0], u2 = [0, 1] -> Basis standar (bebas linier)
    std::cout << "[1, 0] dan [0, 1] bebas linier? " 
              << (isBebasLinier2D(1, 0, 0, 1) ? "Ya" : "Tidak") << std::endl;
    return 0;
}`,
          explanation:
            'Di dimensi 2, dua vektor bebas linier jika dan hanya jika determinan matriks gabungannya tidak nol.'
        },
        content: `### 1. Konsep Kombinasi Linier & Span
Diberikan sekumpulan vektor $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$, kombinasi linier adalah jumlahan hasil kali dengan skalar:
$$\\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_k \\mathbf{v}_k$$
Himpunan seluruh vektor $\\mathbf{w}$ yang bisa dibentuk disebut **Span** (Rentang).

---

### 2. Kebebasan Linier (Linear Independence)
Himpunan vektor dikatakan **Bebas Linier** jika tidak ada vektor yang menjadi beban informasi ganda (tidak ada yang bisa dinyatakan sebagai kombinasi linier dari yang lain):
$$c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2 + \\dots + c_k \\mathbf{v}_k = \\mathbf{0} \\implies c_1 = c_2 = \\dots = c_k = 0$$`
      },
      {
        id: '4-2-basis-dan-dimensi',
        title: '4.2 Basis, Dimensi & Proses Ortogonalisasi Gram-Schmidt',
        summary:
          'Memahami sistem koordinat minimal bagi ruang vektor dan cara membentuk basis ortonormal menggunakan algoritma Gram-Schmidt.',
        readTime: '9 menit',
        keyTakeaways: [
          'Basis adalah himpunan vektor yang: (1) Bebas linier, dan (2) Merentang seluruh ruang vektor (span(B) = V).',
          'Dimensi adalah jumlah vektor di dalam basis ruang tersebut.',
          'Basis Ortonormal memenuhi ||u_i|| = 1 dan u_i • u_j = 0 untuk i != j.',
          'Proses Gram-Schmidt mengonversi sembarang basis menjadi basis ortonormal.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>
#include <cmath>

// Gram-Schmidt 2D: Dari basis {v1, v2} menghasilkan basis ortonormal {u1, u2}
int main() {
    double v1[2] = {3.0, 0.0};
    double v2[2] = {1.0, 2.0};

    // Langkah 1: u1 = v1 / ||v1||
    double norm1 = std::sqrt(v1[0]*v1[0] + v1[1]*v1[1]);
    double u1[2] = { v1[0] / norm1, v1[1] / norm1 }; // [1, 0]

    // Langkah 2: v2_tegak = v2 - (v2 • u1) u1
    double proj = v2[0] * u1[0] + v2[1] * u1[1]; // 1.0 * 1.0 = 1.0
    double v2_tegak[2] = { v2[0] - proj * u1[0], v2[1] - proj * u1[1] }; // [0, 2]

    // Normalisasi u2 = v2_tegak / ||v2_tegak||
    double norm2 = std::sqrt(v2_tegak[0]*v2_tegak[0] + v2_tegak[1]*v2_tegak[1]);
    double u2[2] = { v2_tegak[0] / norm2, v2_tegak[1] / norm2 }; // [0, 1]

    std::cout << "Basis Ortonormal u1: [" << u1[0] << ", " << u1[1] << "]^T\\n";
    std::cout << "Basis Ortonormal u2: [" << u2[0] << ", " << u2[1] << "]^T\\n";
    return 0;
}`,
          explanation:
            'Algoritma Gram-Schmidt mengurangkan bayangan proyeksi beruntun untuk menghasilkan vektor-vektor yang saling tegak lurus sempurna.'
        },
        content: `### 1. Definisi Basis & Dimensi
**Basis** adalah himpunan "kerangka tulang" yang paling efisien bagi suatu ruang vektor:
1. Tidak ada vektor yang mubazir (bebas linier).
2. Mampu menjangkau setiap sudut ruang (merentang $V$).

Banyaknya vektor di dalam basis disebut **Dimensi** ruang tersebut. Ruang $\\mathbb{R}^n$ selalu berdimensi $n$.

---

### 2. Proses Gram-Schmidt
Diberikan basis $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$, kita dapat membangun basis ortogonal $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\dots, \\mathbf{u}_k\\}$ secara bertahap:
$$\\mathbf{u}_1 = \\mathbf{v}_1$$
$$\\mathbf{u}_2 = \\mathbf{v}_2 - \\text{proj}_{\\mathbf{u}_1}(\\mathbf{v}_2)$$
$$\\mathbf{u}_3 = \\mathbf{v}_3 - \\text{proj}_{\\mathbf{u}_1}(\\mathbf{v}_3) - \\text{proj}_{\\mathbf{u}_2}(\\mathbf{v}_3)$$
Lalu normalisasi setiap vektor $\\mathbf{e}_i = \\frac{\\mathbf{u}_i}{\\|\\mathbf{u}_i\\|}$.`
      },
      {
        id: '4-3-ruang-fundamental-rank-nullity',
        title: '4.3 Empat Subruang Fundamental & Teorema Rank-Nullity',
        summary:
          'Membedah struktur aljabar matriks: Ruang Kolom, Ruang Baris, Ruang Nol, dan Teorema Dimensi Rank-Nullity.',
        readTime: '9 menit',
        keyTakeaways: [
          'Ruang Kolom Col(A): Rentang dari seluruh kolom matriks A.',
          'Ruang Nol Nul(A): Himpunan semua solusi x sedemikian sehingga Ax = 0.',
          'Rank(A) adalah dimensi dari Ruang Kolom.',
          'Teorema Rank-Nullity: rank(A) + nullity(A) = n (jumlah total kolom).',
          'Sistem Ax = b memiliki solusi jika dan hanya jika vektor target b berada di dalam Col(A).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Menunjukkan Teorema Rank-Nullity:
// Matriks A berukuran 3 baris x 4 kolom, memiliki rank = 3
// Berapakah dimensi ruang nol (nullity)?
int main() {
    int total_kolom_n = 4;
    int rank_A = 3;
    int nullity_A = total_kolom_n - rank_A; // 4 - 3 = 1

    std::cout << "Jumlah Kolom (n) = " << total_kolom_n << std::endl;
    std::cout << "Rank(A)          = " << rank_A << std::endl;
    std::cout << "Nullity(A)       = " << nullity_A << " (Teorema Rank-Nullity: rank + nullity = n)\\n";
    return 0;
}`,
          explanation:
            'Teorema Rank-Nullity menghubungkan dimensi ruang kolom dan ruang nol terhadap jumlah variabel bebas dalam SPL.'
        },
        content: `### 1. Empat Subruang Fundamental Matriks
Untuk sembarang matriks $A$ berukuran $m \\times n$:
1. **Ruang Kolom (Column Space $\\text{Col}(A)$)** di $\\mathbb{R}^m$: $\\text{span}(\\text{kolom-kolom } A)$.
2. **Ruang Baris (Row Space $\\text{Row}(A)$)** di $\\mathbb{R}^n$: $\\text{span}(\\text{baris-baris } A)$.
3. **Ruang Nol (Null Space $\\text{Nul}(A)$)** di $\\mathbb{R}^n$: Himpunan $\\{\\mathbf{x} | A\\mathbf{x} = \\mathbf{0}\\}$.
4. **Ruang Nol Kiri (Left Null Space $\\text{Nul}(A^T)$)** di $\\mathbb{R}^m$: $\\{\\mathbf{y} | A^T \\mathbf{y} = \\mathbf{0}\\}$.

---

### 2. Teorema Rank-Nullity (The Rank Theorem)
Teorema mendalam ini menyatakan bahwa jumlah kolom matriks $n$ terdistribusi sempurna antara dimensi output yang dapat dicapai (*rank*) dan dimensi informasi yang terhapus menjadi nol (*nullity*):
$$\\text{rank}(A) + \\text{nullity}(A) = n$$`
      }
    ],
    quiz: ALJABAR_LINIER_QUIZZES['algeo_ruang_vektor_basis']
  },
  {
    id: 'algeo_transformasi_eigen',
    number: 5,
    title: 'Transformasi Linier, Nilai Eigen & Algoritma PageRank',
    shortDesc:
      'Transformasi linier geometris, persamaan karakteristik Av = λv, diagonalisasi matriks, dekomposisi spektral, hingga penerapannya pada PageRank dan PCA.',
    iconName: 'Network',
    sections: [
      {
        id: '5-1-transformasi-linier-geometris',
        title: '5.1 Transformasi Linier Geometris (Rotasi, Skala & Shear)',
        summary:
          'Melihat perkalian matriks-vektor sebagai pemetaan geometris yang mengubah bentuk ruang dengan menjaga garis lurus dan titik asal tetap.',
        readTime: '8 menit',
        keyTakeaways: [
          'Transformasi Linier T memenuhi: T(u + v) = T(u) + T(v) dan T(cu) = c T(u).',
          'Matriks rotasi 2D: R(θ) = [[cos θ, -sin θ], [sin θ, cos θ]].',
          'Matriks penskalaan: S = [[s_x, 0], [0, s_y]].',
          'Setiap transformasi linier sepenuhnya ditentukan oleh bayangan dari vektor-vektor basis standar.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Memutar vektor v=[1, 0]^T sebesar 90 derajat (π/2) menggunakan matriks rotasi
int main() {
    double theta = 1.5707963; // 90 derajat
    double R[2][2] = {
        { std::cos(theta), -std::sin(theta) },
        { std::sin(theta),  std::cos(theta) }
    };

    double x = 1.0, y = 0.0;
    double x_baru = R[0][0] * x + R[0][1] * y; // cos(90)*1 - sin(90)*0 = 0
    double y_baru = R[1][0] * x + R[1][1] * y; // sin(90)*1 + cos(90)*0 = 1

    std::cout << "Vektor awal : [1, 0]^T\\n";
    std::cout << "Setelah diputar 90° : [" << std::round(x_baru) << ", " << std::round(y_baru) << "]^T\\n";
    return 0;
}`,
          explanation:
            'Aplikasi transformasi matriks 2D untuk memutar objek dalam pipeline grafika komputer.'
        },
        content: `### 1. Definisi Transformasi Linier
Sebuah pemetaan $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ disebut linier jika:
1. Garis lurus tetap menjadi garis lurus.
2. Titik asal tetap berada di titik asal: $T(\\mathbf{0}) = \\mathbf{0}$.
3. Mempertahankan operasi aljabar:
   $$T(c \\mathbf{u} + d \\mathbf{v}) = c T(\\mathbf{u}) + d T(\\mathbf{v})$$

---

### 2. Matriks Standar Transformasi
Setiap transformasi linier di $\\mathbb{R}^n$ selalu dapat dinyatakan sebagai perkalian matriks tunggal:
$$T(\\mathbf{x}) = A \\mathbf{x}$$
Kolom-kolom dari matriks $A$ adalah bayangan dari vektor-vektor basis standar $\\mathbf{e}_1, \\mathbf{e}_2, \\dots, \\mathbf{e}_n$.`
      },
      {
        id: '5-2-nilai-dan-vektor-eigen',
        title: '5.2 Nilai Eigen, Vektor Eigen & Persamaan Karakteristik',
        summary:
          'Menemukan vektor-vektor khusus yang arahnya tidak berubah ketika ditransformasikan oleh matriks, melainkan hanya diskalakan.',
        readTime: '9 menit',
        keyTakeaways: [
          'Persamaan Fundamental: A v = λ v (v != 0).',
          'λ adalah Nilai Eigen (skalar), dan v adalah Vektor Eigen yang bersesuaian.',
          'Persamaan Karakteristik: det(A - λ I) = 0.',
          'Jumlah nilai eigen ∑ λ_i = tr(A), dan hasil kali nilai eigen ∏ λ_i = det(A).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

// Mencari nilai eigen matriks 2x2 A = [[4, 2], [1, 3]]
// Persamaan karakteristik: λ^2 - tr(A)λ + det(A) = 0
// tr(A) = 4 + 3 = 7, det(A) = 4*3 - 2*1 = 10
// λ^2 - 7λ + 10 = (λ - 5)(λ - 2) = 0 => λ1 = 5, λ2 = 2
int main() {
    double a = 4, b = 2, c = 1, d = 3;
    double trace = a + d;
    double det = a * d - b * c;
    double diskriminan = trace * trace - 4 * det; // 49 - 40 = 9

    double lambda1 = (trace + std::sqrt(diskriminan)) / 2.0;
    double lambda2 = (trace - std::sqrt(diskriminan)) / 2.0;

    std::cout << "Nilai Eigen λ_1 = " << lambda1 << std::endl;
    std::cout << "Nilai Eigen λ_2 = " << lambda2 << std::endl;
    return 0;
}`,
          explanation:
            'Menghitung nilai eigen matriks 2x2 secara analitis melalui akar-akar persamaan kuadratik karakteristik.'
        },
        content: `### 1. Intuisi Vektor Eigen
Secara umum, ketika matriks $A$ mengalikan sebuah vektor $\\mathbf{x}$, vektor tersebut akan berputar ke arah baru sekaligus berubah panjangnya.

Namun, terdapat vektor-vektor istimewa $\\mathbf{v}$ yang **tidak berputar sama sekali**, garis arahnya tetap sama, hanya panjangnya yang meregang atau menyusut sebesar faktor skalar $\\lambda$:
$$A \\mathbf{v} = \\lambda \\mathbf{v}$$

---

### 2. Menghitung Nilai Eigen
Ubah persamaan ke bentuk homogen:
$$(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$$
Karena $\\mathbf{v} \\ne \\mathbf{0}$, matriks $(A - \\lambda I)$ harus singular:
$$\\det(A - \\lambda I) = 0$$
Ini menghasilkan polinomial derajat $n$ yang dinamai **Persamaan Karakteristik**.`
      },
      {
        id: '5-3-diagonalisasi-pagerank-pca',
        title: '5.3 Diagonalisasi, Algoritma Google PageRank & PCA',
        summary:
          'Menguraikan matriks menjadi bentuk diagonal A = P D P^{-1} dan memahami aplikasinya pada pemeringkatan web PageRank serta reduksi dimensi PCA.',
        readTime: '9 menit',
        keyTakeaways: [
          'Diagonalisasi: A = P D P^{-1}, di mana P berisi vektor-vektor eigen dan D matriks diagonal nilai eigen.',
          'Perpangkatan matriks cepat: A^k = P D^k P^{-1}.',
          'Algoritma Google PageRank memodelkan peselancar web acak dan mencari vektor eigen stasioner dari matriks transisi dengan λ = 1.',
          'Principal Component Analysis (PCA) mereduksi dimensi data dengan memproyeksikannya ke vektor eigen kovariansi terbesar.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <vector>

// Simulasi sederhana Power Iteration untuk mencari vektor eigen dominan (prinsip PageRank)
int main() {
    // Matriks probabilitas transisi Markov web 2 halaman
    double M[2][2] = {
        {0.8, 0.3},
        {0.2, 0.7}
    };

    double r[2] = {0.5, 0.5}; // Tebakan awal skor PageRank
    for (int iter = 0; iter < 20; iter++) {
        double r_baru[2] = {
            M[0][0] * r[0] + M[0][1] * r[1],
            M[1][0] * r[0] + M[1][1] * r[1]
        };
        r[0] = r_baru[0];
        r[1] = r_baru[1];
    }

    std::cout << "Skor PageRank Stasioner (Vektor Eigen λ=1):\\n";
    std::cout << "Halaman 1: " << r[0] << "\\n";
    std::cout << "Halaman 2: " << r[1] << "\\n";
    return 0;
}`,
          explanation:
            'Metode Power Iteration mensimulasikan perpindahan probabilitas hingga mencapai distribusi stasioner PageRank.'
        },
        content: `### 1. Diagonalisasi Matriks
Jika matriks $A$ memiliki $n$ vektor eigen yang bebas linier, kita dapat menyusunnya menjadi kolom-kolom matriks $P$:
$$A = P D P^{-1}$$
Di mana $D = \\text{diag}(\\lambda_1, \\lambda_2, \\dots, \\lambda_n)$.
Sifat ini memungkinkan penghitungan perpangkatan matriks raksasa $A^{1000}$ secara instan karena $(P D P^{-1})^k = P D^k P^{-1}$.

---

### 2. Algoritma Google PageRank
Larry Page dan Sergey Brin merancang algoritma pencarian Google awal berdasarkan dekomposisi eigen. Halaman-halaman web dimodelkan sebagai graf berarah dengan matriks transisi Markov $M$.

Distribusi probabilitas jangka panjang dari peselancar web acak memenuhi persamaan stasioner:
$$M \\mathbf{r} = \\mathbf{r}$$
Yang tidak lain adalah mencari **vektor eigen** $\\mathbf{r}$ yang berasosiasi dengan nilai eigen $\\lambda = 1$. Skor $\\mathbf{r}_i$ menentukan peringkat kepentingan halaman web pada hasil pencarian!`
      }
    ],
    quiz: ALJABAR_LINIER_QUIZZES['algeo_transformasi_eigen']
  }
];

export const ALJABAR_LINIER_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Vektor & Jarak',
    name: 'Norm Euclidean & Manhattan',
    formula: '\\|\\mathbf{v}\\|_2 = \\sqrt{\\sum_{i=1}^n v_i^2}, \\qquad \\|\\mathbf{v}\\|_1 = \\sum_{i=1}^n |v_i|',
    notes: 'Pengukuran panjang vektor dan metrik jarak pada ruang R^n.'
  },
  {
    category: 'Vektor & Jarak',
    name: 'Dot Product & Cosine Similarity',
    formula: '\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos\\theta, \\qquad \\text{CosineSim}(\\mathbf{u}, \\mathbf{v}) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}',
    notes: 'Metrik kesamaan sudut semantik antar embedding teks dalam AI dan NLP.'
  },
  {
    category: 'Matriks & SPL',
    name: 'Sistem Persamaan Linier Matriks',
    formula: 'A\\mathbf{x} = \\mathbf{b} \\implies \\begin{bmatrix} a_{11} & \\dots & a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} & \\dots & a_{mn} \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{bmatrix} = \\begin{bmatrix} b_1 \\\\ \\vdots \\\\ b_m \\end{bmatrix}',
    notes: 'Bentuk kanonik matriks untuk sistem persamaan linier m persamaan n variabel.'
  },
  {
    category: 'Matriks & SPL',
    name: 'Sifat Transpose Perkalian',
    formula: '(AB)^T = B^T A^T, \\qquad (ABC)^T = C^T B^T A^T',
    notes: 'Urutan faktor perkalian matriks berbalik saat dikenakan operasi transpose.'
  },
  {
    category: 'Determinan & Invers',
    name: 'Determinan & Invers Matriks 2x2',
    formula: '\\det(A) = ad - bc, \\qquad A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}',
    notes: 'Invers hanya ada jika det(A) != 0 (matriks non-singular).'
  },
  {
    category: 'Determinan & Invers',
    name: 'Aturan Cramer',
    formula: 'x_i = \\frac{\\det(A_i)}{\\det(A)}',
    notes: 'Menyelesaikan SPL unik menggunakan rasio determinan kolom terganti.'
  },
  {
    category: 'Determinan & Invers',
    name: 'Matriks Ortogonal',
    formula: 'Q^T Q = Q Q^T = I \\implies Q^{-1} = Q^T, \\quad \\det(Q) = \\pm 1',
    notes: 'Matriks rotasi dan refleksi yang menghemat komputasi invers karena cukup ditranspose.'
  },
  {
    category: 'Ruang Vektor & Dimensi',
    name: 'Teorema Rank-Nullity (Dimensi)',
    formula: '\\text{rank}(A) + \\text{nullity}(A) = n \\quad (n = \\text{jumlah kolom})',
    notes: 'Hubungan fundamental antara dimensi ruang kolom dan ruang nol matriks.'
  },
  {
    category: 'Nilai Eigen & Dekomposisi',
    name: 'Persamaan Nilai Eigen & Karakteristik',
    formula: 'A\\mathbf{v} = \\lambda \\mathbf{v} \\iff \\det(A - \\lambda I) = 0',
    notes: 'Mencari nilai eigen skalar lambda dan vektor eigen penunjuk arah invariant.'
  },
  {
    category: 'Nilai Eigen & Dekomposisi',
    name: 'Diagonalisasi & Pangkat Matriks',
    formula: 'A = PDP^{-1} \\implies A^k = P D^k P^{-1}',
    notes: 'Menghitung perpangkatan matriks transisi secara instan pada algoritma Markov dan PageRank.'
  }
];
