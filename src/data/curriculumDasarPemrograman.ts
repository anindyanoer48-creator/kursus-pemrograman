import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { DASAR_PEMROGRAMAN_QUIZZES } from './quizzesDasarPemrograman';

export const DASAR_PEMROGRAMAN_MODULES: ModuleData[] = [
  {
    id: 'konsep_dasar',
    number: 1,
    title: 'Arsitektur Komputer, Variabel, Tipe Data & Operator',
    shortDesc: 'Pahami cara kerja CPU & RAM, model memori variabel, tipe data primitif, batas rentang overflow, dan hierarki operator.',
    iconName: 'Cpu',
    sections: [
      {
        id: '1-1-arsitektur-dan-kompilasi',
        title: '1.1 Cara Kerja Komputer, Model von Neumann & Proses Kompilasi',
        summary: 'Memahami bagaimana instruksi program beralih dari teks bahasa tingkat tinggi hingga menjadi pulsa listrik di dalam CPU.',
        readTime: '9 menit',
        keyTakeaways: [
          'Arsitektur von Neumann: Program dan data berbagi ruang memori yang sama (RAM) dan dieksekusi oleh CPU melalui siklus Fetch-Decode-Execute.',
          'CPU terdiri dari ALU (aritmatika & logika), Control Unit (pengatur instruksi), dan Registers (memori super cepat di dalam core).',
          'Compiler menerjemahkan seluruh kode sumber menjadi file biner mesin (machine code) sebelum eksekusi, sedangkan Interpreter menerjemahkan baris demi baris saat runtime.',
          'Tahapan kompilasi C/C++: Preprocessing (#include, #define) -> Compilation (ke assembly) -> Assembly (ke object code .o) -> Linking (ke executable biner).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Fungsi utama: Titik masuk (entry point) seluruh eksekusi program
int main() {
    // std::cout mengalirkan data karakter ke standard output (layar terminal)
    std::cout << "Halo, Dunia Komputasi!" << std::endl;
    
    // Mengembalikan kode status 0 ke sistem operasi menandakan eksekusi sukses
    return 0;
}`,
          explanation: 'Program C++ minimal. Preprocessor menyisipkan header iostream, fungsi main() dieksekusi pertama kali oleh OS, dan return 0 menandakan terminasi normal tanpa error.'
        },
        content: `### 1. Bagaimana Komputer Mengeksekusi Kode Anda?
Secara fisik, prosesor (CPU) adalah miliaran transistor silikon yang bertindak sebagai saklar logika biner: **1 (tegangan tinggi)** dan **0 (tegangan rendah)**.
Komputer modern mengadopsi **Arsitektur von Neumann (1945)** yang terdiri dari 4 blok utama:
1. **CPU (Central Processing Unit)**: Otak komputasi yang mengeksekusi instruksi:
   * **ALU (Arithmetic Logic Unit)**: Melakukan komputasi matematika ($+ - * /$) dan operasi logika boolean.
   * **Control Unit (CU)**: Mengambil instruksi dari memori, menerjemahkannya, dan mengoordinasikan seluruh komponen.
   * **Registers**: Memori internal berkapasitas sangat kecil (64-bit per register) namun memiliki kecepatan akses tertinggi ($\approx 0.3$ nanodetik).
2. **Memori Utama (RAM - Random Access Memory)**: Penyimpan sementara (*volatile*) data dan instruksi yang sedang aktif dikerjakan CPU.
3. **Penyimpanan Sekunder (SSD / HDD)**: Penyimpan permanen (*non-volatile*) file program dan data.
4. **Unit Input / Output (I/O)**: Penghubung dengan dunia luar (keyboard, mouse, layar, jaringan).

---

### 2. Siklus Instruksi Mesin (Instruction Cycle)
Setiap instruksi program dijalankan oleh CPU melalui siklus tak pernah henti:
$$\\text{Fetch} \\longrightarrow \\text{Decode} \\longrightarrow \\text{Execute} \\longrightarrow \\text{Store}$$
* **Fetch**: CU mengambil instruksi biner berikutnya dari RAM berdasarkan alamat yang ditunjuk oleh register *Program Counter (PC)*.
* **Decode**: CU mengurai kode operasi (*Opcode*) untuk mengetahui perintah apa yang diminta (misal: "tambahkan dua angka").
* **Execute**: ALU menjalankan instruksi tersebut pada operand yang ada di register.
* **Store**: Hasil akhir ditulis kembali ke register atau ke alamat memori RAM.

---

### 3. Kompilasi vs Interpretasi (Compiler vs Interpreter)
Bahasa pemrograman manusia tidak dapat dipahami langsung oleh CPU. Diperlukan penerjemah:
* **Bahasa Terkompilasi (Compiled Language - misal: C, C++, Rust, Go)**:
  Seluruh kode sumber diterjemahkan sekaligus oleh Compiler menjadi file instruksi biner mesin (*executable* seperti \`.exe\` di Windows atau biner ELF di Linux).
  * *Keunggulan*: Eksekusi instan dan sangat cepat karena langsung dijalankan perangkat keras tanpa perantara runtime.
* **Bahasa Terinterpretasi (Interpreted Language - misal: Python, JavaScript, Ruby)**:
  Program penerjemah (Interpreter) membaca teks kode sumber baris demi baris, menerjemahkannya saat itu juga, dan langsung menjalankannya saat runtime.
  * *Keunggulan*: Fleksibel dan portabel lintas OS tanpa kompilasi ulang, namun kecepatan eksekusi umumnya $10 \\times - 50 \\times$ lebih lambat.`
      },
      {
        id: '1-2-variabel-dan-tipe-data',
        title: '1.2 Variabel, Tipe Data Primitif, Representasi Memori & Overflow',
        summary: 'Kuasai bagaimana memori RAM menyimpan integer signed/unsigned, floating-point IEEE 754, karakter ASCII, serta bahaya overflow.',
        readTime: '10 menit',
        keyTakeaways: [
          'Variabel adalah nama simbolik untuk sebuah lokasi alamat memori RAM yang memiliki tipe data dan ukuran byte tertentu.',
          'Tipe data primitif integral: bool (1 byte), char (1 byte), short (2 byte), int (4 byte), long long (8 byte).',
          'Representasi integer negatif menggunakan Two\'s Complement: rentang signed n-bit adalah -2^(n-1) hingga +2^(n-1) - 1.',
          'Integer Overflow terjadi saat hasil perhitungan melampaui batas maksimum tipe data, memicu wrap-around atau undefined behavior.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <climits> // Menyediakan konstanta batas INT_MAX, INT_MIN

int main() {
    int umur = 21;                    // 4 byte bertanda (-2.147.483.648 s/d 2.147.483.647)
    unsigned int skor = 4200000000U;  // 4 byte tanpa tanda (0 s/d 4.294.967.295)
    double ipk = 3.92;                // 8 byte floating point (presisi ganda)
    char inisial = 'A';               // 1 byte karakter ASCII (kode desimal 65)
    bool lulus = true;                // 1 byte nilai logika (true = 1, false = 0)

    // Contoh Overflow:
    int batas = INT_MAX; // 2147483647
    std::cout << "Batas Maks: " << batas << std::endl;
    batas = batas + 1;   // Overflow! Berputar menjadi negatif
    std::cout << "Setelah Overflow: " << batas << std::endl; // -2147483648

    return 0;
}`,
          explanation: 'Mendemonstrasikan berbagai tipe data primitif dan fenomena integer overflow saat INT_MAX ditambahkan 1.'
        },
        content: `### 1. Apa Sebenarnya Sebuah Variabel?
Sebuah variabel **bukanlah kotak ajaib**, melainkan sebuah **label alamat memori (*memory address offset*)**.
Ketika Anda menulis:
\`\`\`cpp
int angka = 42;
\`\`\`
Sistem operasi mengalokasikan 4 byte ruang di Call Stack (misalnya pada alamat \`0x7ffeefbff568\`), dan menuliskan representasi biner dari angka 42 ke dalam 32 bit memori tersebut.

---

### 2. Tabel Tipe Data Primitif Standar (Arsitektur Modern 64-bit)

| Tipe Data | Ukuran | Rentang Nilai | Contoh Nilai |
| :--- | :--- | :--- | :--- |
| **bool** | 1 byte | \`true\` (1) atau \`false\` (0) | \`true\` |
| **char** | 1 byte | -128 s/d +127 (atau 0 s/d 255 pada unsigned) | \`'A'\`, \`'9'\`, \`'\\n'\` |
| **short** | 2 byte | -32.768 s/d +32.767 | \`1500\` |
| **int** | 4 byte | -2.147.483.648 s/d +2.147.483.647 ($\approx \\pm 2.14$ miliar) | \`100000\` |
| **unsigned int** | 4 byte | 0 s/d 4.294.967.295 ($\approx 4.29$ miliar) | \`4000000000U\` |
| **long long** | 8 byte | $-9.22 \\times 10^{18}$ s/d $+9.22 \\times 10^{18}$ | \`9000000000000LL\` |
| **float** | 4 byte | $\\approx \\pm 3.4 \\times 10^{38}$ (Presisi 6-7 digit desimal) | \`3.14159f\` |
| **double** | 8 byte | $\\approx \\pm 1.7 \\times 10^{308}$ (Presisi 15-17 digit desimal) | \`2.71828182845\` |

---

### 3. Representasi Two's Complement untuk Bilangan Negatif
Bagaimana komputer menyimpan bilangan bertanda negatif (misalnya -5)?
Komputer menggunakan sistem **Two's Complement (Komplemen Dua)**:
1. Tuliskan representasi biner positifnya ($+5$ dalam 8-bit: \`0000 0101\`).
2. Balikkan seluruh bit (One's complement / NOT): \`1111 1010\`.
3. Tambahkan 1 ke bit paling belakang: \`1111 1011\` (ini adalah representasi $-5$).

*Keunggulan Luar Biasa*:
Sirkuit ALU tidak membutuhkan sirkuit pengurangan terpisah! Operasi $A - B$ dilakukan cukup dengan $A + (\\text{Two's Complement dari } B)$.

---

### 4. Bahaya Fatal: Integer Overflow & Underflow
Setiap tipe data memiliki batas jumlah bit tetap. Jika perhitungan melompat melewati batas:
* Pada **Unsigned Type**: Nilai akan berputar (*wrap around*) modulo $2^{\\text{bits}}$. Misal \`unsigned char x = 255; x++;\` $\\to x = 0$.
* Pada **Signed Type**: Menurut standar C++, signed integer overflow adalah **Undefined Behavior (UB)** yang dapat memicu optimasi compiler yang tidak terduga atau celah keamanan (*security vulnerability*).`
      },
      {
        id: '1-3-operator-dan-precedence',
        title: '1.3 Operator Aritmatika, Relasional, Logika, Bitwise & Hierarki Precedence',
        summary: 'Pelajari seluruh jenis operator, perbedaan pre vs post increment, operator bitwise sakti, serta tangga prioritas evaluasi.',
        readTime: '9 menit',
        keyTakeaways: [
          'Operator Aritmatika: +, -, *, /, % (modulo). Pembagian integer memotong pecahan desimal.',
          'Pre-increment (++x) mengubah nilai sebelum evaluasi ekspresi; Post-increment (x++) mengubah nilai setelah evaluasi ekspresi.',
          'Operator Relasional menghasilkan nilai boolean: ==, !=, <, <=, >, >=.',
          'Operator Bitwise bekerja pada tingkat bit individu: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Left Shift), >> (Right Shift).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int a = 10, b = 3;
    
    std::cout << "Pembagian Integer: " << (a / b) << std::endl; // 3 (bukan 3.33)
    std::cout << "Sisa Bagi (Modulo): " << (a % b) << std::endl;  // 1
    
    // Perbedaan Pre vs Post Increment
    int x = 5;
    int y = x++; // y = 5, x menjadi 6 (Post-increment)
    int z = ++x; // x menjadi 7, z = 7 (Pre-increment)
    
    // Bitwise Shifting:
    int n = 5; // biner: 0000 0101
    std::cout << "n << 1 (Kali 2): " << (n << 1) << std::endl; // 10 (0000 1010)
    std::cout << "n >> 1 (Bagi 2): " << (n >> 1) << std::endl; // 2  (0000 0010)

    return 0;
}`,
          explanation: 'Demonstrasi pemotongan pembagian integer, perbedaan pre/post increment, serta operasi geser bit (shift).'
        },
        content: `### 1. Klasifikasi Operator Pemrograman

#### A. Operator Aritmatika
* Penjumlahan (\`+\`), Pengurangan (\`-\`), Perkalian (\`*\`)
* Pembagian (\`/\`): Jika kedua operand adalah integer, hasilnya adalah **pembagian integer (dibulatkan ke bawah ke arah nol)**:
  $$17 / 5 = 3$$
  Agar menghasilkan desimal $3.4$, minimal salah satu operand harus bertipe floating point: \`17.0 / 5\` atau \`double(17) / 5\`.
* Modulo (\`%\`): Menghasilkan sisa pembagian bilangan bulat: $17 \\% 5 = 2$. *Hanya berlaku untuk tipe integral!*

#### B. Operator Increment & Decrement (\`++\` dan \`--\`)
* **Pre-increment (\`++x\`)**: Nilai $x$ dinaikkan 1 terlebih dahulu, lalu nilai baru tersebut digunakan dalam ekspresi.
* **Post-increment (\`x++\`)**: Nilai lama $x$ digunakan dalam ekspresi saat ini, baru setelah itu nilai $x$ dinaikkan 1.

#### C. Operator Relasional & Logika
* Relasional: \`==\` (sama dengan), \`!=\` (tidak sama), \`<\`, \`<=\`, \`>\`, \`>=\`.
* Logika:
  * \`&&\` (Logical AND): Bernilai true jika kedua belah pihak true.
  * \`||\` (Logical OR): Bernilai true jika minimal salah satu pihak true.
  * \`!\` (Logical NOT): Membalikkan nilai logika (\`!true == false\`).

---

### 2. Operator Bitwise (Manipulasi Tingkat Biner)
Manipulasi bit adalah operasi paling efisien yang dieksekusi dalam 1 clock cycle CPU:
* **AND (\`&\`)**: Menghasilkan 1 hanya jika kedua bit bernilai 1. (Digunakan untuk masking).
* **OR (\`|\`)**: Menghasilkan 1 jika salah satu bit bernilai 1. (Digunakan untuk mengaktifkan flag).
* **XOR (\`^\`)**: Menghasilkan 1 jika kedua bit berbeda. ($1 \\oplus 0 = 1$, $1 \\oplus 1 = 0$).
* **Left Shift (\`x << k\`)**: Menggeser bit ke kiri sebanyak $k$ posisi, setara dengan **mengalikan $x$ dengan $2^k$**.
* **Right Shift (\`x >> k\`)**: Menggeser bit ke kanan sebanyak $k$ posisi, setara dengan **membagi $x$ dengan $2^k$ (floor)**.

---

### 3. Tangga Hierarki Precedence (Urutan Evaluasi)
Ketika ekspresi tidak memiliki kurung, compiler mengevaluasi berdasarkan prioritas tertinggi:
1. Tanda Kurung: \`()\` dan Subscript Array \`[]\`
2. Unary: \`++\`, \`--\`, \`+\`, \`-\`, \`!\`, \`~\`, dereferensi \`*\`, alamat \`&\`
3. Perkalian, Pembagian, Modulo: \`*\`, \`/\`, \`%\`
4. Penjumlahan, Pengurangan: \`+\`, \`-\`
5. Bitwise Shift: \`<<\`, \`>>\`
6. Relasional Perbandingan: \`<\`, \`<=\`, \`>\`, \`>=\`
7. Kesetaraan: \`==\`, \`!=\`
8. Bitwise AND (\`&\`) -> XOR (\`^\`) -> OR (\`|\`)
9. Logika AND (\`&&\`) -> Logika OR (\`||\`)
10. Ternary: \`? :\`
11. Penugasan / Assignment: \`=\`, \`+=\`, \`-=\`, \`*=\`, dll.`
      },
      {
        id: '1-4-type-casting-dan-io',
        title: '1.4 Konversi Tipe Data (Type Casting) & Input/Output Standar',
        summary: 'Memahami konversi tipe implisit dan eksplisit, format input cin/scanf, serta penanganan buffer I/O.',
        readTime: '8 menit',
        keyTakeaways: [
          'Implicit Casting (Type Promotion): Dilakukan otomatis oleh compiler dari tipe presisi kecil ke besar (misal int ke double).',
          'Explicit Casting: Paksaan konversi manual oleh programmer via C-style (tipe)nilai atau C++ static_cast<tipe>(nilai).',
          'Standard Input cin membaca token terpisah spasi/enter; std::getline() membaca satu baris penuh termasuk spasi.',
          'Buffer Flushing: std::endl mencetak newline dan mem-flush buffer I/O, sedangkan \'\\n\' hanya mencetak baris baru.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <string>

int main() {
    int totalNilai = 285;
    int jumlahSiswa = 3;
    
    // Explicit casting untuk mencegah pembagian integer:
    double rataRata = static_cast<double>(totalNilai) / jumlahSiswa;
    std::cout << "Rata-rata: " << rataRata << std::endl; // 95.0
    
    // Karakter ke Integer (ASCII conversion):
    char huruf = 'C';
    int asciiCode = static_cast<int>(huruf);
    std::cout << "Kode ASCII dari " << huruf << " adalah " << asciiCode << std::endl; // 67

    return 0;
}`,
          explanation: 'Menggunakan static_cast untuk mengonversi integer ke double sebelum operasi pembagian agar pecahan desimal tidak terpotong.'
        },
        content: `### 1. Konversi Tipe Data (Type Casting)
Dalam program, kita sering perlu mengubah data dari satu representasi ke representasi lain:

#### A. Konversi Implisit (Type Promotion)
Terjadi otomatis saat tipe berbeda dipertemukan dalam satu operasi. Compiler mempromosikan tipe yang lebih sempit ke tipe yang lebih lebar untuk mencegah hilangnya data (*lossless promotion*):
$$\\text{bool} \\to \\text{char} \\to \\text{int} \\to \\text{long long} \\to \\text{float} \\to \\text{double}$$
Contoh:
\`\`\`cpp
int a = 5;
double b = 2.5;
double hasil = a + b; // a (5) otomatis dipromosikan menjadi 5.0, hasil = 7.5
\`\`\`

#### B. Konversi Eksplisit (Type Casting)
Diperintahkan secara sengaja oleh programmer:
1. **C-Style Cast**: \`(tipe)variabel\` (misal: \`(double)total / count\`). Sederhana namun kurang aman.
2. **C++ \`static_cast<tipe>(variabel)\`**: Cara modern standar industri yang memeriksa validitas konversi saat proses kompilasi.

---

### 2. Mekanisme Input dan Output (I/O)
* **Standard Output (\`std::cout\`)**:
  Mengirim data ke aliran output standar terminal.
  * \`\\n\`: Karakter baris baru murni (sangat cepat untuk competitive programming).
  * \`std::endl\`: Menambahkan baris baru sekaligus memanggil \`flush()\` untuk memaksa data keluar seketika ke hardware layar.
* **Standard Input (\`std::cin\`)**:
  Membaca token dari keyboard yang dipisahkan oleh whitespace (spasi, tab, enter).
  * *Masalah Umum*: Membaca teks berspasi seperti nama lengkap menggunakan \`cin >> nama\` hanya akan menangkap kata pertama!
  * *Solusi*: Gunakan \`std::getline(std::cin, namaLengkap)\` untuk membaca seluruh baris hingga karakter Enter ditekan.`
      },
      {
        id: '1-5-detail-krusial',
        title: '1.5 Detail Krusial: Jebakan Presisi Float, Tabel ASCII & Deklarasi Konstanta',
        summary: 'Pelajari mengapa 0.1 + 0.2 != 0.3 di komputer, cara kerja representasi floating point IEEE 754, dan best practice constexpr.',
        readTime: '9 menit',
        keyTakeaways: [
          'Galat IEEE 754: 0.1 dalam basis 10 menghasilkan pecahan biner berulang tak terhingga 0.0001100110011... sehingga 0.1 + 0.2 = 0.30000000000000004.',
          'Jangan pernah membandingkan dua bilangan desimal dengan operator if (a == b)! Gunakan toleransi epsilon: if (fabs(a - b) < 1e-9).',
          'Tabel ASCII mengikat karakter dengan integer: \'0\' = 48, \'A\' = 65, \'a\' = 97. Trik konversi: char digit = \'7\'; int n = digit - \'0\'; (menghasilkan angka 7).',
          'constexpr (compile-time constant) dievaluasi saat kompilasi tanpa overhead memori saat runtime program.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <cmath>

int main() {
    double a = 0.1 + 0.2;
    double b = 0.3;
    
    // JEBAKAN FATAL:
    if (a == b) {
        std::cout << "Sama!" << std::endl;
    } else {
        std::cout << "BERBEDA! a = " << a << ", b = " << b << std::endl;
        // Output: BERBEDA! Karena a bernilai 0.30000000000000004
    }
    
    // CARA BENAR STANDAR INDUSTRI:
    const double EPSILON = 1e-9;
    if (std::fabs(a - b) < EPSILON) {
        std::cout << "Secara praktis SAMA (dalam batas toleransi epsilon)!" << std::endl;
    }
    
    return 0;
}`,
          explanation: 'Membuktikan ketidakpresisian pecahan desimal dalam biner dan solusi perbandingan menggunakan nilai selisih absolut epsilon.'
        },
        content: `### 1. Mengapa $0.1 + 0.2 \\ne 0.3$ di Komputer?
Pertanyaan ini sering mengejutkan programmer pemula.
Dalam desimal, bilangan seperti $\\frac{1}{3} = 0.333333...$ tidak dapat ditulis tuntas.
Demikian pula dalam sistem biner (basis 2), bilangan desimal $\\frac{1}{10} = 0.1$ menghasilkan deret biner tak terhingga:
$$0.1_{10} = 0.00011001100110011..._2$$
Karena memori float (32-bit) dan double (64-bit) memiliki batasan bit mantissa (standar **IEEE 754**), bit sisanya harus dipotong/dibulatkan.
Akibatnya:
$$0.1 + 0.2 = 0.300000000000000044408920985...$$

> **Aturan Emas Pemrograman**:
> **HARAM** membandingkan nilai floating point secara langsung dengan operator \`==\` atau \`!=\`!
> Selalu bandingkan selisih mutlaknya dengan nilai toleransi (*epsilon*):
> \`\`\`cpp
> if (std::abs(a - b) < 1e-9) // Keduanya dianggap setara
> \`\`\`

---

### 2. Trik Aritmatika Karakter ASCII
Karakter di dalam memori hanyalah angka integer biasa. Urutan alfabet dalam tabel ASCII tersusun berurutan:
* \`'0'\` s/d \`'9'\`: bernilai $48$ s/d $57$.
* \`'A'\` s/d \`'Z'\`: bernilai $65$ s/d $90$.
* \`'a'\` s/d \`'z'\`: bernilai $97$ s/d $122$.

*Penerapan Cerdas*:
1. **Mengubah Karakter Angka ke Nilai Integer**:
   \`\`\`cpp
   char c = '7';
   int nilai = c - '0'; // 55 - 48 = 7
   \`\`\`
2. **Mengubah Huruf Kecil ke Huruf Besar Tanpa Fungsi Bawaan**:
   \`\`\`cpp
   char hurufKecil = 'b';
   char hurufBesar = hurufKecil - ('a' - 'A'); // 'b' - 32 = 'B'
   \`\`\`

---

### 3. Konstanta: \`const\` vs \`constexpr\`
* **\`const\`**: Variabel yang nilainya read-only setelah diinisialisasi. Inisialisasinya bisa terjadi saat runtime (misal \`const int input = bacaDariUser();\`).
* **\`constexpr\` (Compile-time Constant)**: Dijamin dihitung oleh compiler saat kode sedang dikompilasi menjadi biner. Tidak ada alokasi memori RAM dan tidak ada instruksi CPU saat runtime!`
      }
    ],
    quiz: DASAR_PEMROGRAMAN_QUIZZES.konsep_dasar
  },
  {
    id: 'percabangan',
    number: 2,
    title: 'Struktur Kontrol Percabangan (Branching / Selection)',
    shortDesc: 'Kuasai logika pengambilan keputusan alur program: if, if-else ladder, switch-case, operator ternary, dan short-circuit evaluation.',
    iconName: 'GitFork',
    sections: [
      {
        id: '2-1-konsep-logika-dan-flowchart',
        title: '2.1 Logika Boolean & Pengambilan Keputusan Alur',
        summary: 'Memahami bagaimana komputer membuat keputusan berdasarkan kondisi benar (true) atau salah (false).',
        readTime: '8 menit',
        keyTakeaways: [
          'Alur program sekuensial dieksekusi baris per baris; percabangan mengalihkan alur berdasarkan evaluasi ekspresi kondisi boolean.',
          'Tabel kebenaran (truth table) operator logika AND, OR, NOT menjadi dasar pemodelan kondisi bisnis komputasi.',
          'Hukum De Morgan menyederhanakan ekspresi logika kompleks: !(A && B) == !A || !B dan !(A || B) == !A && !B.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int umur = 19;
    bool punyaSIM = true;

    // Logika kombinasi AND (&&): Kedua syarat harus terpenuhi
    if (umur >= 17 && punyaSIM) {
        std::cout << "Diizinkan mengemudi kendaraan." << std::endl;
    } else {
        std::cout << "Belum memenuhi syarat mengemudi." << std::endl;
    }

    return 0;
}`,
          explanation: 'Percabangan dasar menggunakan operator relasional dan logika untuk memverifikasi dua syarat sekaligus.'
        },
        content: `### 1. Mengapa Program Membutuhkan Percabangan?
Tanpa struktur percabangan, sebuah program komputer hanyalah kalkulator pasif yang menjalankan instruksi dari baris 1 sampai baris akhir secara linear membosankan.
Percabangan memberikan program kemampuan untuk **mengambil keputusan mandiri**:
* Jika saldo mencukupi $\\implies$ izinkan penarikan uang.
* Jika password salah $\\implies$ kunci akun pengguna.
* Jika nilai ujian $\\ge 65$ $\\implies$ nyatakan lulus.

---

### 2. Tabel Kebenaran Logika Boolean Dasar

| Kondisi $A$ | Kondisi $B$ | $A$ AND $B$ (\`A && B\`) | $A$ OR $B$ (\`A \|\| B\`) | NOT $A$ (\`!A\`) |
| :---: | :---: | :---: | :---: | :---: |
| **false** (0) | **false** (0) | **false** (0) | **false** (0) | **true** (1) |
| **false** (0) | **true** (1) | **false** (0) | **true** (1) | **true** (1) |
| **true** (1) | **false** (0) | **false** (0) | **true** (1) | **false** (0) |
| **true** (1) | **true** (1) | **true** (1) | **true** (1) | **false** (0) |

---

### 3. Menyederhanakan Logika dengan Hukum De Morgan
Seringkali kode memiliki kondisi negasi yang sulit dibaca programmer lain, misalnya:
\`\`\`cpp
if (!(umur < 18 || statusPelajar == false))
\`\`\`
Berdasarkan **Hukum De Morgan**:
1. Negasi dari OR adalah AND dari masing-masing negasi:
   $$!(A \\lor B) \\iff \\neg A \\land \\neg B$$
2. Negasi dari AND adalah OR dari masing-masing negasi:
   $$!(A \\land B) \\iff \\neg A \\lor \\neg B$$

Dengan menerapkan hukum tersebut, kode rumit di atas dapat disederhanakan menjadi bentuk yang sangat jernih:
\`\`\`cpp
if (umur >= 18 && statusPelajar == true)
\`\`\``
      },
      {
        id: '2-2-if-else-ladder',
        title: '2.2 Percabangan Bertingkat (if-else-if Ladder) & Nested if',
        summary: 'Menangani multi-kondisi saling lepas, struktur bertingkat, dan bahaya dangling else.',
        readTime: '9 menit',
        keyTakeaways: [
          'if-else-if ladder mengevaluasi kondisi secara berurutan dari atas ke bawah; begitu satu kondisi benar, seluruh blok di bawahnya langsung dilewati.',
          'Blok else akhir bertindak sebagai fallback default jika tidak ada satupun kondisi sebelumnya yang terpenuhi.',
          'Nested if (if bersarang) adalah struktur if di dalam if; indentasi dan penggunaan kurung kurawal {} mutlak wajib.',
          'Dangling Else Problem: else tanpa kurung kurawal otomatis dipasangkan dengan if terdekat sebelumnya.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int nilai = 82;
    char grade;

    if (nilai >= 90) {
        grade = 'A';
    } else if (nilai >= 80) { // 82 >= 80 bernilai true!
        grade = 'B';
    } else if (nilai >= 70) {
        grade = 'C';
    } else if (nilai >= 60) {
        grade = 'D';
    } else {
        grade = 'E'; // Nilai < 60
    }

    std::cout << "Predikat Grade: " << grade << std::endl; // Output: B
    return 0;
}`,
          explanation: 'Evaluasi if-else-if ladder dari atas ke bawah. Kondisi kedua cocok, sehingga grade B ditetapkan dan evaluasi di bawahnya langsung dihentikan.'
        },
        content: `### 1. Struktur Rantai if-else-if Ladder
Ketika sebuah persoalan memiliki lebih dari dua kemungkinan kategori yang saling eksklusif (mutually exclusive), gunakan **if-else-if ladder**:
* Evaluasi dimulai dari kondisi paling atas.
* Begitu ditemukan satu kondisi yang bernilai \`true\`, badan blok tersebut dijalankan dan eksekusi **langsung melompat keluar** ke baris setelah penutup seluruh rantai if-else.
* Blok \`else\` terakhir tidak memiliki kondisi penguji; ia dijalankan jika semua kondisi di atasnya bernilai \`false\`.

---

### 2. Bahaya: Dangling Else Problem
Perhatikan kode C/C++ tanpa kurung kurawal berikut:
\`\`\`cpp
int a = 10;
int b = 5;

if (a > 0)
    if (b > 10)
        std::cout << "A";
else
    std::cout << "B";
\`\`\`
Sekilas mata melihat bahwa \`else\` sejajar dengan \`if (a > 0)\`. Namun compiler membaca:
\`else\` **selalu dipasangkan dengan \`if\` terdekat yang belum memiliki pasangan**, yaitu \`if (b > 10)\`!
Karena $a = 10 > 0$ bernilai true namun $b = 5 > 10$ bernilai false, program justru mencetak \`"B"\`!

> **Aturan Keselamatan Software Engineering**:
> **SELALU gunakan kurung kurawal \`{}\`** untuk setiap blok percabangan, meskipun hanya terdiri dari 1 baris kode!`
      },
      {
        id: '2-3-switch-case',
        title: '2.3 Pernyataan switch-case & Fenomena Fallthrough',
        summary: 'Pilihan jamak berbasis nilai diskrit, jump-table assembly, kata kunci break, dan perangkap fallthrough.',
        readTime: '8 menit',
        keyTakeaways: [
          'switch mengevaluasi satu ekspresi bernilai integral (int, char, enum) terhadap sekumpulan nilai konstanta (case).',
          'Pernyataan break wajib disertakan di setiap akhir case untuk melompat keluar dari blok switch.',
          'Ketiadaan break memicu Fallthrough: eksekusi alur bocor terus ke case di bawahnya tanpa memedulikan kecocokan nilai.',
          'Label default dijalankan jika tidak ada nilai case yang cocok.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int kodeMenu = 2;

    switch (kodeMenu) {
        case 1:
            std::cout << "Membuka Menu Materi..." << std::endl;
            break;
        case 2:
            std::cout << "Membuka Menu Kuis Evaluasi..." << std::endl;
            break; // Mencegah fallthrough ke case 3!
        case 3:
            std::cout << "Membuka Menu Sertifikat..." << std::endl;
            break;
        default:
            std::cout << "Kode Menu Tidak Dikenali!" << std::endl;
            break;
    }

    return 0;
}`,
          explanation: 'switch-case mengevaluasi kodeMenu = 2, melompat langsung ke case 2, mencetak teks, lalu break keluar dari switch.'
        },
        content: `### 1. Kapan Menggunakan switch-case?
Gunakan switch-case saat Anda memiliki **satu variabel bilangan bulat atau karakter** yang ingin dicocokkan dengan **banyak nilai konstanta diskrit** (misal kode status HTTP: 200, 404, 500; atau pilihan menu 1, 2, 3).
Compiler sering kali mengompilasi switch-case menjadi **Jump Table** pada kode mesin assembly, sehingga pencarian cabang dilakukan dalam waktu konstan $O(1)$ tanpa perlu menguji kondisi berulang kali!

---

### 2. Jebakan Fallthrough Tanpa \`break\`
Di C/C++, eksekusi case tidak otomatis berhenti di kurung kurawal.
Jika Anda menghilangkan \`break\`:
\`\`\`cpp
int x = 1;
switch (x) {
    case 1: std::cout << "Satu ";
    case 2: std::cout << "Dua ";
    case 3: std::cout << "Tiga ";
}
\`\`\`
Output yang dihasilkan adalah: \`Satu Dua Tiga\`!
Begitu \`case 1\` cocok, CPU terus mengeksekusi instruksi di bawahnya sampai menemukan \`break\` atau akhir switch.
*(Catatan: Kadang fallthrough sengaja dipakai untuk menggabungkan beberapa case, misal \`case 'a': case 'A': prosesHurufA(); break;\`).*`
      },
      {
        id: '2-4-ternary-dan-short-circuit',
        title: '2.4 Operator Kondisional Ternary (?:) & Evaluasi Short-Circuit',
        summary: 'Penyederhanaan ekspresi satu baris dan teknik pengamanan pointer melalui hubungan pendek boolean.',
        readTime: '8 menit',
        keyTakeaways: [
          'Operator Ternary (?:) adalah satu-satunya operator dengan 3 operand: (kondisi) ? nilai_true : nilai_false.',
          'Ternary merupakan sebuah ekspresi yang menghasilkan nilai (dapat langsung di-assign atau dicetak), bukan statement.',
          'Short-Circuit AND: Jika operand kiri false, operand kanan tidak pernah dieksekusi.',
          'Short-Circuit OR: Jika operand kiri true, operand kanan tidak pernah dieksekusi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int nilai = 75;
    // Operator Ternary ringkas menghasilkan nilai string:
    std::string status = (nilai >= 65) ? "LULUS" : "TIDAK LULUS";
    std::cout << "Status: " << status << std::endl; // LULUS

    // Pengamanan Memori via Short-Circuit:
    int* ptr = nullptr; // Pointer kosong
    // Berkat short-circuit, *ptr tidak pernah dievaluasi karena ptr != nullptr sudah false!
    if (ptr != nullptr && *ptr > 0) {
        std::cout << "Nilai positif" << std::endl;
    } else {
        std::cout << "Aman: Terhindar dari Null Pointer Dereference Crash!" << std::endl;
    }

    return 0;
}`,
          explanation: 'Operator ternary menyederhanakan penugasan bersyarat, dan short-circuit evaluation mencegah aplikasi crash saat memeriksa pointer.'
        },
        content: `### 1. Operator Ternary (\`? :\`)
Bentuk umum:
$$\\text{ekspresi\\_kondisi} \\; ? \\; \\text{nilai\\_jika\\_true} \\; : \\; \\text{nilai\\_jika\\_false}$$
Perbedaan mendasar dengan \`if-else\`:
* \`if-else\` adalah sebuah **Statement (pernyataan alur kendali)** yang tidak memiliki nilai kembali.
* \`?:\\ adalah sebuah **Expression (ungkapan evaluasi)** yang menghasilkan nilai kembali, sehingga dapat disisipkan langsung ke dalam penugasan variabel atau argumen fungsi:
\`\`\`cpp
int maxVal = (a > b) ? a : b;
std::cout << "Hasil: " << (isAktif ? "Aktif" : "Non-Aktif");
\`\`\`

---

### 2. Seni Evaluasi Short-Circuit (Hubungan Pendek)
Dua aturan evaluasi runtime CPU:
1. **Pada ekspresi \`A && B\`**: Jika $A$ bernilai **false**, maka $B$ **TIDAK AKAN PERNAH DIEVALUASI**.
2. **Pada ekspresi \`A || B\`**: Jika $A$ bernilai **true**, maka $B$ **TIDAK AKAN PERNAH DIEVALUASI**.

*Manfaat Rekayasa Perangkat Lunak*:
Mencegah eksekusi berbahaya seperti pembagian dengan nol atau dereferensi pointer null:
\`\`\`cpp
if (pembagi != 0 && total / pembagi > 10) { ... } // Aman 100%!
\`\`\``
      },
      {
        id: '2-5-detail-krusial',
        title: '2.5 Detail Krusial: Jebakan Penugasan if(x = 5), Guard Clauses & Clean Code',
        summary: 'Menghindari bug assignment vs equality, meratakan sarang if yang dalam (Arrow Anti-Pattern), dan defensive programming.',
        readTime: '8 menit',
        keyTakeaways: [
          'Jebakan = vs ==: if (x = 5) melakukan assignment dan selalu bernilai true! Gunakan l-value checking atau compiler warning -Wall.',
          'Arrow Anti-Pattern: Kode dengan nested if terlalu dalam (berbentuk segitiga panah >) sangat sulit dibaca dan rawan bug.',
          'Guard Clauses (Early Return): Kembalikan nilai fungsi secepat mungkin jika kondisi invalid ditemukan, menjaga alur utama tetap di level indentasi luar.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Contoh Refactoring Guard Clauses (Clean Code):
bool prosesRegistrasi(int umur, bool bayar) {
    // Guard Clause 1:
    if (umur < 17) {
        std::cout << "Gagal: Umur belum mencukupi." << std::endl;
        return false;
    }
    
    // Guard Clause 2:
    if (!bayar) {
        std::cout << "Gagal: Biaya pendaftaran belum lunas." << std::endl;
        return false;
    }

    // Jalur sukses utama berjalan bersih tanpa sarang nested if:
    std::cout << "Sukses: Akun berhasil diaktifkan!" << std::endl;
    return true;
}

int main() {
    prosesRegistrasi(20, true);
    return 0;
}`,
          explanation: 'Penerapan guard clauses meratakan kode dan mengeliminasi sarang if bertingkat.'
        },
        content: `### 1. Jebakan Maut: \`=\` (Assignment) vs \`==\` (Equality)
Salah satu bug paling terkenal dalam sejarah bahasa C dan C++:
\`\`\`cpp
int status = 0; // 0 artinya offline
if (status = 1) { // TYPO: tanda '=' bukan '=='!
    std::cout << "Pengguna Online";
}
\`\`\`
*Mengapa ini berbahaya?*
1. \`status = 1\` mengubah nilai variabel \`status\` menjadi 1.
2. Ekspresi penugasan tersebut mengembalikan nilai 1.
3. Karena 1 adalah nilai bukan-nol, ia dianggap **true**!
4. Akibatnya blok \`if\` SELALU dijalankan dan data variabel asli telah rusak ter-overwrite!

*Trik Pencegahan ("Yoda Conditions")*:
Beberapa developer senior menulis konstanta di sebelah kiri:
\`\`\`cpp
if (1 == status) // Jika typo '1 = status', compiler akan langsung ERROR!
\`\`\`

---

### 2. Mengatasi Arrow Anti-Pattern dengan Guard Clauses
Ketika Anda melihat kode seperti ini:
\`\`\`cpp
if (cekA) {
    if (cekB) {
        if (cekC) {
            // Logika utama terkubur di dalam!
        }
    }
}
\`\`\`
Bentuk segitiga indentasi ini disebut **Arrow Anti-Pattern** (atau *Pyramid of Doom*).
Gunakan **Guard Clause (Early Return)**: periksa kondisi kegagalan di baris pertama dan langsung panggil \`return\`. Alur utama fungsi akan tetap rapi dan mudah dibaca!`
      }
    ],
    quiz: DASAR_PEMROGRAMAN_QUIZZES.percabangan
  },
  {
    id: 'perulangan',
    number: 3,
    title: 'Struktur Kontrol Perulangan (Looping / Iteration)',
    shortDesc: 'Kuasai konstruksi for, while, do-while, kontrol eksekusi break & continue, serta pencegahan infinite loops dan off-by-one errors.',
    iconName: 'Repeat',
    sections: [
      {
        id: '3-1-anatomi-dan-perbandingan-loop',
        title: '3.1 Anatomi Perulangan & Kapan Memilih for vs while vs do-while',
        summary: 'Pahami 3 komponen dasar loop dan kriteria pemilihan struktur perulangan yang tepat.',
        readTime: '8 menit',
        keyTakeaways: [
          '3 Komponen mutlak loop: Inisialisasi variabel counter, Syarat uji terminasi, dan Update/Increment-Decrement.',
          'for loop paling ideal saat jumlah perulangan sudah diketahui pasti sebelumnya (Counter-Controlled Loop).',
          'while loop paling ideal saat perulangan bergantung pada suatu peristiwa/kondisi yang durasinya dinamis (Event-Controlled Loop).',
          'do-while loop menjamin badan perulangan dieksekusi minimal satu kali sebelum syarat diuji di akhir (Post-test Loop).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // 1. For Loop: Tepat 5 kali
    for (int i = 1; i <= 5; i++) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    // 2. While Loop: Bergantung kondisi dinamis
    int dayaBaterai = 3;
    while (dayaBaterai > 0) {
        std::cout << "Baterai aktif: " << dayaBaterai << std::endl;
        dayaBaterai--;
    }

    // 3. Do-While Loop: Dijamin jalan minimal 1x
    int opsi = 0;
    do {
        std::cout << "Menu ditampilkan minimal 1 kali." << std::endl;
    } while (opsi != 0);

    return 0;
}`,
          explanation: 'Perbandingan sintaks dan perilaku for, while, dan do-while loop.'
        },
        content: `### 1. Tiga Komponen Mutlak Setiap Perulangan
Tanpa ketiga komponen ini, perulangan tidak akan berjalan benar:
1. **Inisialisasi (Initialization)**: Menentukan titik awal counter loop (misal: \`int i = 0\`).
2. **Kondisi Berhenti (Condition / Guard)**: Ekspresi boolean yang menentukan apakah perulangan boleh lanjut ke iterasi berikutnya (misal: \`i < n\`).
3. **Pembaruan (Update / Step)**: Mengubah nilai variabel counter menuju kondisi terminasi (misal: \`i++\` atau \`i += 2\`).

---

### 2. Matriks Keputusan Pemilihan Loop

| Jenis Loop | Jenis Pengujian | Minimal Eksekusi | Kasus Penggunaan Terbaik |
| :--- | :--- | :---: | :--- |
| **for** | Pre-test (Di Awal) | 0 kali | Menelusuri array dari $0$ sampai $n-1$, perhitungan matematika bertahap. |
| **while** | Pre-test (Di Awal) | 0 kali | Membaca aliran data socket jaringan, membaca input file sampai EOF. |
| **do-while** | Post-test (Di Akhir) | **1 kali** | Menampilkan menu interaktif ke pengguna, validasi input ulang jika salah.`
      },
      {
        id: '3-2-kontrol-loop-break-continue',
        title: '3.2 Kontrol Eksekusi: break, continue, dan Bahaya goto',
        summary: 'Mengendalikan ritme perulangan secara presisi, terminasi dini pencarian, dan mengapa goto dihindari.',
        readTime: '8 menit',
        keyTakeaways: [
          'break seketika menghentikan perulangan dan melompat keluar dari blok loop terdekat.',
          'continue menghentikan iterasi saat ini dan langsung melompat ke pembaruan counter untuk iterasi berikutnya.',
          'break sering digunakan untuk optimasi terminasi dini (early exit) saat target pencarian sudah ditemukan.',
          'goto merusak struktur sekuensial dan menghasilkan kode kusut (spaghetti code).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int target = 7;
    int data[6] = {2, 4, 7, 9, 11, 15};

    for (int i = 0; i < 6; i++) {
        if (data[i] == target) {
            std::cout << "Target " << target << " ditemukan di indeks " << i << std::endl;
            break; // Optimasi: Jangan buang waktu menelusuri sisa elemen!
        }
    }

    // Mengabaikan angka genap:
    for (int i = 1; i <= 6; i++) {
        if (i % 2 == 0) continue; // Lewatkan angka genap
        std::cout << "Ganjil: " << i << " ";
    }
    std::cout << std::endl;

    return 0;
}`,
          explanation: 'Penggunaan break untuk early exit pencarian data dan continue untuk menyaring angka ganjil.'
        },
        content: `### 1. Menghentikan Perulangan Dini dengan \`break\`
Bayangkan Anda mencari sebuah nama dalam array berisi 1.000.000 elemen, dan nama tersebut berada di indeks ke-3.
Tanpa \`break\`, perulangan akan terus berjalan sia-sia mengecek 999.996 elemen sisanya!
Dengan menyisipkan \`break\`, loop langsung berhenti seketika saat target ditemukan.

---

### 2. Melewatkan Langkah dengan \`continue\`
\`continue\` berguna saat kita ingin mengabaikan elemen-elemen yang tidak relevan tanpa harus membungkus seluruh sisa kode ke dalam blok \`if\`:
\`\`\`cpp
for (int i = 0; i < totalSiswa; i++) {
    if (nilai[i] < 0) continue; // Data tidak valid, lewati!
    prosesDataSiswa(i);
}
\`\`\``
      },
      {
        id: '3-3-nested-loop-dan-pola',
        title: '3.3 Perulangan Bersarang (Nested Loops) & Matriks Baris-Kolom',
        summary: 'Memahami bagaimana loop luar mengendalikan baris dan loop dalam mengendalikan kolom untuk membentuk pola dan matriks.',
        readTime: '9 menit',
        keyTakeaways: [
          'Nested loop: Loop di dalam loop. Untuk setiap 1 iterasi loop luar, loop dalam berputar penuh dari awal hingga akhir.',
          'Total iterasi nested loop independen berukuran n x m adalah n * m.',
          'Konvensi umum: Loop luar (i) mengendalikan koordinat baris (vertikal), loop dalam (j) mengendalikan koordinat kolom (horizontal).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int tinggi = 4;

    // Mencetak Pola Segitiga Siku-siku
    for (int baris = 1; baris <= tinggi; baris++) {
        // Jumlah bintang di setiap baris sama dengan nomor baris
        for (int kolom = 1; kolom <= baris; kolom++) {
            std::cout << "* ";
        }
        std::cout << std::endl; // Pindah baris baru setelah loop dalam selesai
    }

    return 0;
}`,
          explanation: 'Nested loop untuk mencetak segitiga bintang. Baris 1 mencetak 1 bintang, baris 2 mencetak 2 bintang, hingga baris 4.'
        },
        content: `### 1. Bagaimana Nested Loop Berputar?
Analogi paling mudah memahami loop bersarang adalah **jarum jam**:
* Loop luar adalah **Jarum Menit**.
* Loop dalam adalah **Jarum Detik**.

Jarum menit hanya bergeser 1 kali setelah jarum detik berputar penuh sebanyak 60 kali.
Demikian pula pada nested loop:
\`\`\`cpp
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        std::cout << "(" << i << "," << j << ") ";
    }
}
// Output: (0,0) (0,1) (1,0) (1,1) (2,0) (2,1)
\`\`\`
Total instruksi dijalankan adalah $3 \\times 2 = 6$ kali.`
      },
      {
        id: '3-4-infinite-loop-dan-oboe',
        title: '3.4 Detail Krusial: Jebakan Infinite Loop & Off-by-One Errors (OBOE)',
        summary: 'Mencegah program macet tak terhingga dan menghindari bug tergelincir 1 iterasi yang membahayakan memori.',
        readTime: '8 menit',
        keyTakeaways: [
          'Infinite Loop terjadi ketika kondisi terminasi tidak pernah bernilai false. Penyebab tersering: lupa meng-increment variabel counter.',
          'Off-by-One Error (OBOE) terjadi ketika batas iterasi meleset satu angka (misal i <= n alih-alih i < n untuk array berukuran n).',
          'Loop dengan unsigned integer rawan infinite loop saat decrement: for (unsigned i = 5; i >= 0; i--) tidak pernah berhenti!'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int data[5] = {10, 20, 30, 40, 50}; // Indeks valid: 0, 1, 2, 3, 4

    // KESALAHAN OBOE (Off-By-One Error):
    // for (int i = 0; i <= 5; i++) // Mengakses data[5] -> DI LUAR BATAS!
    
    // CARA BENAR:
    for (int i = 0; i < 5; i++) {
        std::cout << data[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}`,
          explanation: 'Mendemonstrasikan pencegahan off-by-one error dengan menggunakan operator strictly less than (< ukuranArray).'
        },
        content: `### 1. Bahaya Infinite Loop bagi Sistem
Ketika program terjebak dalam *infinite loop*, thread CPU yang menjalankan loop tersebut akan berputar pada kecepatan clock 100% tanpa henti.
Pada server web produksi, ini menyebabkan konsumsi daya memuncak (*CPU starvation*), sistem berhenti merespons (*hanging*), dan layanan tumbang (*crash*).

*Pemicu Umum*:
\`\`\`cpp
int i = 0;
while (i < 10) {
    std::cout << i;
    // LUPA i++; -> i selamanya 0, loop abadi!
}
\`\`\`

---

### 2. Anatomi Off-By-One Errors (OBOE)
"Ada dua hal paling sulit dalam ilmu komputer: *cache invalidation*, *penamaan variabel*, dan *off-by-one errors*."
Perhatikan array berukuran 5 elemen:
\`\`\`cpp
int arr[5] = {1, 2, 3, 4, 5};
\`\`\`
Indeksnya adalah: $0, 1, 2, 3, 4$. Tidak ada indeks $5$!
Jika programmer menulis \`for (int i = 0; i <= 5; i++)\`, pada iterasi ke-6 program akan membaca \`arr[5]\` yang merupakan memori liar. Di bahasa C/C++, hal ini memicu **Undefined Behavior** atau pembajakan memori (*security exploit*).`
      }
    ],
    quiz: DASAR_PEMROGRAMAN_QUIZZES.perulangan
  },
  {
    id: 'fungsi',
    number: 4,
    title: 'Fungsi, Prosedur, Parameter & Scope Variabel',
    shortDesc: 'Pahami dekomposisi modular, function signature, mekanisme Pass by Value vs Reference, scope lokal/global, dan call stack frame.',
    iconName: 'Layers',
    sections: [
      {
        id: '4-1-modularitas-dan-signature',
        title: '4.1 Prinsip Modularitas, Function Prototype & Definisi',
        summary: 'Membangun arsitektur perangkat lunak yang bersih melalui fungsi, prototype, dan return type.',
        readTime: '9 menit',
        keyTakeaways: [
          'Fungsi adalah blok kode modular terisolasi yang menerima input (parameter), melakukan komputasi, dan mengembalikan output (return value).',
          'Function Prototype mendeklarasikan signature fungsi ke compiler sebelum fungsi tersebut dipanggil.',
          'Fungsi yang tidak mengembalikan nilai menggunakan tipe void.',
          'Pernyataan return seketika menghentikan eksekusi fungsi dan menyerahkan kembali kendali ke pemanggil.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// 1. Function Prototype (Deklarasi di atas main)
double hitungLuasPersegiPanjang(double panjang, double lebar);
void cetakGaris(); // Fungsi tanpa return value (prosedur)

int main() {
    cetakGaris();
    double luas = hitungLuasPersegiPanjang(10.5, 4.0);
    std::cout << "Luas: " << luas << " cm2" << std::endl;
    cetakGaris();
    return 0;
}

// 2. Function Definition (Implementasi)
double hitungLuasPersegiPanjang(double panjang, double lebar) {
    return panjang * lebar; // Mengembalikan hasil perkalian
}

void cetakGaris() {
    std::cout << "--------------------------------" << std::endl;
}`,
          explanation: 'Memisahkan prototype fungsi di atas main() dan definisi implementasi di bawah main().'
        },
        content: `### 1. Mengapa Kita Membutuhkan Fungsi?
Tanpa fungsi, seluruh kode program ribuan baris akan menumpuk di dalam fungsi \`main()\`.
Fungsi memberikan 3 pilar rekayasa perangkat lunak:
1. **Reusability (Dapat Digunakan Kembali)**: Tulis sekali, panggil ratusan kali dari berbagai tempat.
2. **Abstraction (Abstraksi)**: Pemanggil tidak perlu tahu kerumitan implementasi internal; cukup ketahui input dan outputnya.
3. **Maintainability (Kemudahan Pemeliharaan)**: Jika ada rumus yang berubah, cukup perbaiki di satu fungsi tersebut tanpa mengubah kode pemanggil.

---

### 2. Anatomi Function Signature
\`\`\`cpp
double hitungVolumeBalok(double panjang, double lebar, double tinggi);
// ^             ^                    ^
// Return Type   Nama Fungsi          Daftar Parameter
\`\`\`
* **Return Type**: Menentukan jenis data yang dihasilkan oleh fungsi (misal: \`int\`, \`double\`, \`std::string\`, atau \`void\` jika tidak mengembalikan apa-apa).
* **Identifier**: Nama unik fungsi yang deskriptif menggunakan format camelCase atau snake_case.
* **Parameter List**: Variabel penampung input yang dikirimkan pemanggil.`
      },
      {
        id: '4-2-pass-by-value-vs-reference',
        title: '4.2 Mekanisme Parameter: Pass by Value vs Pass by Reference (&)',
        summary: 'Kuasai perbedaan fundamental antara menyalin data di Call Stack dengan berbagi alamat memori asli.',
        readTime: '10 menit',
        keyTakeaways: [
          'Pass by Value membuat salinan (duplikat) nilai argumen di stack frame fungsi baru; perubahan tidak mempengaruhi variabel asli.',
          'Pass by Reference (&) membuat alias memori langsung ke variabel asli pemanggil; perubahan parameter langsung mengubah variabel asli.',
          'Pass by const Reference (const Tipe &x) mencegah biaya penyalinan memori objek besar sekaligus menjamin data tidak diubah (read-only).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Pass by Value: x hanya menerima salinan
void kaliDuaValue(int x) {
    x = x * 2;
}

// Pass by Reference (&): y adalah alias langsung ke variabel pemanggil
void kaliDuaRef(int &y) {
    y = y * 2;
}

int main() {
    int angka1 = 10;
    kaliDuaValue(angka1);
    std::cout << "Setelah Value: " << angka1 << std::endl; // Tetap 10!

    int angka2 = 10;
    kaliDuaRef(angka2);
    std::cout << "Setelah Ref:   " << angka2 << std::endl; // Berubah menjadi 20!

    return 0;
}`,
          explanation: 'Pass by value tidak mengubah angka1 asli, sedangkan pass by reference (&) langsung memutasi angka2 asli menjadi 20.'
        },
        content: `### 1. Pass by Value (Penyalinan Nilai)
Secara default, argumen dikirimkan secara **Pass by Value**:
1. CPU mengalokasikan slot memori baru di stack frame fungsi yang dipanggil.
2. Nilai argumen disalin ke slot baru tersebut.
3. Ketika fungsi selesai, slot tersebut dihapus. Variabel asli di fungsi pemanggil tidak pernah tersentuh!

---

### 2. Pass by Reference (\`&\`)
Dengan menambahkan tanda ampersand (\`&\`) pada tipe parameter (misal \`int &ref\`), kita tidak membuat salinan.
Parameter tersebut menjadi **nama alias kedua** untuk alamat memori fisik yang sama persis:
$$\\text{Alamat}(\\text{ref}) \\equiv \\text{Alamat}(\\text{variabel asli})$$
*Kapan Menggunakan Pass by Reference?*
1. Ketika fungsi perlu mengembalikan lebih dari satu nilai (misalnya fungsi \`tukar(int &a, int &b)\`).
2. Ketika melewatkan struktur data berukuran besar (seperti array atau struct ratusan kilobyte) untuk menghemat waktu dan memori CPU.`
      },
      {
        id: '4-3-scope-dan-lifetime',
        title: '4.3 Scope, Lifetime, Variabel Global & Static',
        summary: 'Memahami batas ruang dan waktu hidup variabel di memori, bahaya side effects variabel global, dan keistimewaan static.',
        readTime: '8 menit',
        keyTakeaways: [
          'Scope adalah area kode di mana variabel dapat diakses; Lifetime adalah durasi variabel tetap hidup di memori RAM.',
          'Variabel lokal memiliki Block Scope: lahir saat deklarasi dalam kurung {} dan mati saat alur keluar dari kurung {}.',
          'Variabel global hidup selama program berjalan dan dapat diakses dari mana saja; penggunaannya harus diminimalkan.',
          'Variabel static lokal nilainya tetap bertahan di antara pemanggilan fungsi berulang kali.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

void counterKunjungan() {
    // Variabel static diinisialisasi SEKALI SAJA saat program pertama memanggil fungsi
    static int hitungan = 0;
    int lokalBiasa = 0;

    hitungan++;
    lokalBiasa++;

    std::cout << "Static: " << hitungan << " | Lokal Biasa: " << lokalBiasa << std::endl;
}

int main() {
    counterKunjungan(); // Static: 1 | Lokal: 1
    counterKunjungan(); // Static: 2 | Lokal: 1
    counterKunjungan(); // Static: 3 | Lokal: 1
    return 0;
}`,
          explanation: 'Variabel static mempertahankan nilainya di antara pemanggilan fungsi, sedangkan variabel lokal biasa selalu lahir kembali dari nol.'
        },
        content: `### 1. Scope (Cakupan Wilayah)
* **Local Scope (Cakupan Blok)**:
  Dibatasi oleh sepasang kurung kurawal \`{ ... }\`. Variabel tidak dapat dilihat atau dipanggil dari luar blok tersebut.
* **Global Scope (Cakupan Seluruh File)**:
  Dideklarasikan di luar seluruh fungsi. Dapat dibaca dan dimodifikasi oleh sembarang fungsi.

---

### 2. Bahaya Variabel Global dalam Rekayasa Perangkat Lunak
Mengapa penggunaan variabel global dianggap sebagai *bad practice*?
1. **Hidden Side Effects**: Ketika fungsi A mengubah variabel global tanpa sengaja, fungsi B yang bergantung pada variabel tersebut tiba-tiba menghasilkan output salah.
2. **Sulit Di-debug**: Menemukan baris kode mana di antara ribuan baris yang merusak nilai variabel global adalah mimpi buruk.
3. **Tidak Reentrant / Thread-Unsafe**: Dua thread CPU yang mengakses variabel global yang sama akan memicu tabrakan data (*race condition*).`
      },
      {
        id: '4-4-overloading-dan-callstack',
        title: '4.4 Detail Krusial: Overloading Fungsi, Default Arguments & Struktur Call Stack',
        summary: 'Membuat banyak fungsi dengan nama sama, argumen bawaan, dan proses alokasi stack frame saat fungsi dipanggil.',
        readTime: '9 menit',
        keyTakeaways: [
          'Function Overloading memungkinkan beberapa fungsi berbagi nama yang sama, asalkan tipe atau jumlah parameternya berbeda.',
          'Default Arguments harus selalu berada di urutan paling kanan (trailing parameters) pada daftar parameter.',
          'Call Stack beroperasi secara LIFO: setiap pemanggilan fungsi mendorong Stack Frame baru yang berisi return address dan variabel lokal.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Function Overloading: Nama sama, parameter berbeda
int tambah(int a, int b) {
    return a + b;
}

double tambah(double a, double b) {
    return a + b;
}

int tambah(int a, int b, int c) {
    return a + b + c;
}

int main() {
    std::cout << tambah(5, 10) << std::endl;         // Memanggil versi (int, int) -> 15
    std::cout << tambah(2.5, 3.5) << std::endl;     // Memanggil versi (double, double) -> 6.0
    std::cout << tambah(1, 2, 3) << std::endl;       // Memanggil versi (int, int, int) -> 6
    return 0;
}`,
          explanation: 'Compiler secara otomatis memilih fungsi yang tepat berdasarkan jumlah dan tipe data argumen yang dikirim pemanggil.'
        },
        content: `### 1. Function Overloading
Compiler membedakan fungsi berdasarkan **Function Signature** (kombinasi nama fungsi + tipe dan urutan parameter).
Proses ini disebut *Name Mangling* di tingkat compiler biner.
*(Catatan: Perbedaan Return Type saja TIDAK CUKUP untuk membentuk overloading, karena compiler tidak dapat membedakannya saat fungsi dipanggil tanpa menampung return value).*

---

### 2. Anatomi Call Stack saat Pemanggilan Fungsi
Ketika fungsi \`main()\` memanggil \`hitung()\`:
1. CPU menyimpan alamat instruksi berikutnya (*Return Address*) ke Call Stack.
2. CPU mengalokasikan frame baru untuk argumen dan variabel lokal \`hitung()\`.
3. CPU mengalihkan register *Program Counter (PC)* ke alamat awal fungsi \`hitung()\`.
4. Begitu \`hitung()\` selesai (\`return\`), stack frame-nya di-pop (dihancurkan), dan CPU melompat kembali ke *Return Address* di fungsi \`main()\`.`
      }
    ],
    quiz: DASAR_PEMROGRAMAN_QUIZZES.fungsi
  },
  {
    id: 'struktur_data',
    number: 5,
    title: 'Struktur Data Dasar (Array, String, Struct) & Algoritma Elementer',
    shortDesc: 'Kuasai penyimpanan data majemuk: array 1D/2D, representasi teks string, tipe bentukan struct, serta algoritma pencarian & pengurutan dasar.',
    iconName: 'Database',
    sections: [
      {
        id: '5-1-array-satu-dimensi',
        title: '5.1 Larik Satu Dimensi (1D Array) & Alokasi Memori Bersambung',
        summary: 'Pahami bagaimana array dialokasikan secara contiguous di RAM, rumus kalkulasi offset pointer, dan traversal.',
        readTime: '9 menit',
        keyTakeaways: [
          'Array adalah kumpulan elemen dengan tipe data yang sama yang disimpan secara bersambung (contiguous) di memori.',
          'Akses elemen array bersifat instan O(1) karena alamat memori dihitung langsung: Address(arr[i]) = BaseAddress + (i * sizeof(tipe)).',
          'Pengindeksan berbasis 0 (zero-based): elemen pertama berada pada indeks 0 dan elemen terakhir pada indeks n - 1.',
          'Ukuran array statis bersifat tetap (fixed) dan harus diketahui saat waktu kompilasi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // Deklarasi dan inisialisasi array 5 elemen integer:
    int skor[5] = {85, 90, 78, 92, 88};

    // Traversal (penelusuran) seluruh elemen dengan loop:
    int total = 0;
    for (int i = 0; i < 5; i++) {
        std::cout << "Elemen indeks [" << i << "] = " << skor[i] << std::endl;
        total += skor[i];
    }

    double rataRata = static_cast<double>(total) / 5;
    std::cout << "Rata-rata: " << rataRata << std::endl;

    return 0;
}`,
          explanation: 'Inisialisasi array integer 1 dimensi, mengakses elemen menggunakan indeks basis-0, dan menghitung nilai rata-rata melalui traversal.'
        },
        content: `### 1. Mengapa Menggunakan Array?
Jika Anda harus mengelola nilai dari 100 siswa, mendefinisikan 100 variabel terpisah (\`nilai1, nilai2, ..., nilai100\`) akan membuat program mustahil ditulis dan diulang.
Array memungkinkan kita menyimpan 100 nilai tersebut di bawah satu nama variabel tunggal:
\`\`\`cpp
int nilai[100];
\`\`\`

---

### 2. Rumus Alamat Fisik Array di Memori RAM
Elemen array dijamin tersusun rapat berdampingan tanpa jeda kosong.
Karena setiap \`int\` berukuran 4 byte:
* Jika alamat awal \`nilai[0]\` adalah \`0x1000\`
* Maka alamat \`nilai[1]\` adalah \`0x1004\`
* Alamat \`nilai[2]\` adalah \`0x1008\`
* Alamat elemen ke-$i$ dihitung seketika dengan rumus:
$$\\text{Alamat}(arr[i]) = \\text{Base Address} + (i \\times \\text{sizeof}(T))$$
Inilah alasan ilmiah mengapa pengindeksan array sangat cepat ($O(1)$) dan mengapa indeks dimulai dari 0 (karena offset elemen pertama adalah $0 \\times 4 = 0$).`
      },
      {
        id: '5-2-array-dua-dimensi',
        title: '5.2 Larik Dua Dimensi (2D Array / Matriks) & Row-Major Order',
        summary: 'Memodelkan tabel data baris dan kolom, representasi linear di RAM, dan nested loop traversal.',
        readTime: '9 menit',
        keyTakeaways: [
          'Array 2D merepresentasikan data dalam bentuk tabel baris (row) dan kolom (column): arr[baris][kolom].',
          'Memori RAM fisik selalu berbentuk 1 dimensi linear; C/C++ menyimpan matriks menggunakan aturan Row-Major Order (baris demi baris bersambung).',
          'Traversal array 2D dilakukan menggunakan dua perulangan bersarang (nested loops).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // Matriks 2 Baris x 3 Kolom
    int matriks[2][3] = {
        {1, 2, 3}, // Baris 0
        {4, 5, 6}  // Baris 1
    };

    // Traversal menggunakan nested loop:
    for (int baris = 0; baris < 2; baris++) {
        for (int kolom = 0; kolom < 3; kolom++) {
            std::cout << matriks[baris][kolom] << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}`,
          explanation: 'Matriks 2x3 diinisialisasi dan dicetak ke layar baris demi baris menggunakan nested for loop.'
        },
        content: `### 1. Representasi Matriks Dua Dimensi
Array 2D dideklarasikan dengan format:
\`\`\`cpp
tipe_data namaArray[JUMLAH_BARIS][JUMLAH_KOLOM];
\`\`\`
Total kapasitas memori yang dialokasikan adalah:
$$\\text{Total Elemen} = \\text{JUMLAH\\_BARIS} \\times \\text{JUMLAH\\_KOLOM}$$

---

### 2. Pemetaan Row-Major Order di RAM
Meskipun kita membayangkan matriks sebagai grid 2D, memori fisik RAM adalah pita linear 1D.
Pada **Row-Major Order** (standar C/C++):
* Seluruh elemen Baris 0 disimpan: \`matriks[0][0], matriks[0][1], matriks[0][2]\`
* Tepat setelah itu, elemen Baris 1 disimpan: \`matriks[1][0], matriks[1][1], matriks[1][2]\`

Rumus pemetaan indeks 2D $(i, j)$ ke alamat offset 1D:
$$\\text{Offset} = (i \\times \\text{Total Kolom}) + j$$`
      },
      {
        id: '5-3-karakter-dan-string',
        title: '5.3 Karakter & Pemrosesan Teks (C-Style String vs std::string)',
        summary: 'Pahami null-terminator \\0 pada char[], objek dinamis std::string, dan operasi manipulasi teks.',
        readTime: '9 menit',
        keyTakeaways: [
          'C-Style String adalah array karakter yang diakhiri karakter null terminator \'\\0\' (ASCII 0).',
          'std::string pada C++ mengelola alokasi memori secara dinamis, otomatis, dan aman dari buffer overflow.',
          'Operasi penting string: length(), substr(), find(), append(), dan operator konkatenasi +.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <string>

int main() {
    // C-Style String: butuh 6 byte untuk 5 huruf ("HALO" + '\\0')
    char cstr[] = "HALO"; 
    
    // Modern C++ std::string:
    std::string s1 = "Algoritma";
    std::string s2 = " Pemrograman";
    std::string gabungan = s1 + s2; // Konkatenasi mudah

    std::cout << gabungan << std::endl;
    std::cout << "Panjang string: " << gabungan.length() << " karakter" << std::endl;
    std::cout << "Potongan (substring): " << gabungan.substr(0, 9) << std::endl;

    return 0;
}`,
          explanation: 'Perbandingan C-Style string dengan std::string modern yang memiliki method bawaan length() dan substr().'
        },
        content: `### 1. C-Style String (\`char[]\`) & Rahasia \`\\0\`
Di bahasa C kuno, tidak ada tipe data \`string\`. Teks direpresentasikan sebagai larik karakter:
\`\`\`cpp
char kata[5] = {'B', 'U', 'D', 'I', '\\0'};
\`\`\`
*Mengapa karakter \`'\\0'\` sangat penting?*
Array tidak menyimpan informasi panjangnya. Ketika fungsi seperti \`std::cout << kata\` dijalankan, CPU membaca karakter demi karakter ke depan sampai menemukan byte \`'\\0'\`.
Jika Anda lupa menyertakan \`'\\0'\`, CPU akan terus membaca memori liar di sebelahnya dan mencetak karakter sampah (*garbage text*) sampai terjadi crash!`
      },
      {
        id: '5-4-struct-dan-tipe-bentukan',
        title: '5.4 Tipe Data Bentukan (struct) & Pemodelan Data Komposit',
        summary: 'Membungkus atribut heterogen ke dalam entitas data bermakna, operator titik, dan aligment memori.',
        readTime: '9 menit',
        keyTakeaways: [
          'struct memungkinkan kita membuat tipe data baru yang menggabungkan variabel-variabel dengan tipe berbeda (heterogen).',
          'Anggota (members) struct diakses menggunakan operator titik (.) untuk objek langsung, atau panah (->) untuk pointer.',
          'Memory Padding: Compiler menyisipkan byte kosong agar variabel berada pada batas alamat memori yang efisien bagi CPU.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <string>

// Deklarasi Tipe Data Bentukan
struct Mahasiswa {
    int nim;
    std::string nama;
    double ipk;
};

int main() {
    // Membuat instansiasi objek struct:
    Mahasiswa mhs1;
    mhs1.nim = 10123001;
    mhs1.nama = "Andi Wijaya";
    mhs1.ipk = 3.85;

    std::cout << "Data Mahasiswa:" << std::endl;
    std::cout << "NIM:  " << mhs1.nim << std::endl;
    std::cout << "Nama: " << mhs1.nama << std::endl;
    std::cout << "IPK:  " << mhs1.ipk << std::endl;

    return 0;
}`,
          explanation: 'Mendefinisikan struct Mahasiswa dengan tiga atribut bertipe berbeda dan mengaksesnya menggunakan operator titik (.).'
        },
        content: `### 1. Apa itu \`struct\`?
Dalam dunia nyata, data jarang berdiri sendiri. Sebuah "Mobil" memiliki merk (string), tahun (int), dan harga (double).
\`struct\` (*structure*) adalah sarana di C/C++ untuk membuat model data dunia nyata dengan menggabungkan tipe data heterogen ke dalam satu cetak biru (*blueprint*) terpadu.

---

### 2. Array of Struct (Larik Objek)
Kekuatan terbesar \`struct\` muncul saat dipadukan dengan array:
\`\`\`cpp
Mahasiswa kelas[30]; // Menyimpan 30 mahasiswa sekaligus!
kelas[0].nama = "Budi";
kelas[0].ipk = 3.90;
\`\`\`
Ini menjadi fondasi sebelum mempelajari Object-Oriented Programming (OOP) dengan Class dan Object.`
      },
      {
        id: '5-5-algoritma-dasar-pencarian-pengurutan',
        title: '5.5 Algoritma Elementer: Linear Search, Binary Search & Bubble Sort',
        summary: 'Penerapan praktis array pada algoritma klasik penelusuran data dan pengurutan gelembung.',
        readTime: '10 menit',
        keyTakeaways: [
          'Linear Search menelusuri data satu per satu dari awal; tidak mensyaratkan data terurut, kompleksitas O(n).',
          'Binary Search membagi ruang pencarian menjadi dua pada array terurut; sangat cepat dengan kompleksitas O(log n).',
          'Bubble Sort menukar pasangan elemen bersebelahan yang tidak terurut hingga elemen terbesar terapung ke belakang, kompleksitas O(n²).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Algoritma Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Tukar elemen bersebelahan:
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int data[5] = {64, 25, 12, 22, 11};
    bubbleSort(data, 5);

    std::cout << "Data Terurut: ";
    for (int i = 0; i < 5; i++) {
        std::cout << data[i] << " ";
    }
    std::cout << std::endl; // Output: 11 12 22 25 64
    return 0;
}`,
          explanation: 'Implementasi Bubble Sort klasik yang mengurutkan array acak dari nilai terkecil ke terbesar.'
        },
        content: `### 1. Mengapa Belajar Algoritma Elementer?
Struktur data (Array, Struct) adalah **tempat penyimpanan**, sedangkan algoritma adalah **resep langkah logis** untuk memanipulasi data tersebut.
Tiga algoritma paling fundamental yang wajib dikuasai setiap programmer pemula:

#### A. Linear Search (Pencarian Sekuensial)
* Periksa elemen satu demi satu dari indeks $0$ sampai $n-1$.
* Cocok untuk array acak berukuran kecil.

#### B. Binary Search (Pencarian Bagi Dua)
* Syarat mutlak: Array **HARUS SUDAH TERURUT**.
* Bandingkan target dengan elemen tengah (\`mid\`).
  * Jika target == arr[mid]: selesai!
  * Jika target < arr[mid]: buang separuh kanan.
  * Jika target > arr[mid]: buang separuh kiri.
* Mampu mencari di antara 1.000.000 data hanya dalam maksimal 20 kali perbandingan!

#### C. Bubble Sort (Pengurutan Gelembung)
* Bandingkan setiap pasangan elemen bersebelahan (\`arr[j]\` dan \`arr[j+1]\`).
* Jika elemen kiri lebih besar dari kanan, tukar posisinya.
* Ulangi proses ini sebanyak $n-1$ putaran.`
      }
    ],
    quiz: DASAR_PEMROGRAMAN_QUIZZES.struktur_data
  }
];

export const DASAR_PEMROGRAMAN_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Kompleksitas Standar',
    name: 'Tipe Data Primitif & Ukuran Memori',
    formula: '\\text{bool: 1B}, \\quad \\text{char: 1B}, \\quad \\text{int: 4B}, \\quad \\text{double: 8B}',
    notes: 'Representasi integral memori pada arsitektur modern x86_64.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Rumus Offset Alamat Memori Array 1D',
    formula: '\\text{Address}(arr[i]) = \\text{BaseAddress} + (i \\times \\text{sizeof}(T))',
    notes: 'Menjelaskan mengapa akses elemen array arr[i] membutuhkan waktu O(1).'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Pemetaan Matriks 2D ke Memori 1D (Row-Major)',
    formula: '\\text{Offset}(i, j) = (i \\times \\text{TotalKolom}) + j',
    notes: 'Penyimpanan baris demi baris secara bersambung di RAM pada C/C++.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Operator Ternary Ringkas',
    formula: 'x = (\\text{kondisi}) \\; ? \\; \\text{nilaiTrue} \\; : \\; \\text{nilaiFalse}',
    notes: 'Ekspresi inline untuk penugasan nilai bersyarat.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Hukum De Morgan untuk Logika Boolean',
    formula: '!(\\text{A} \\;\\|\\|\\; \\text{B}) \\iff !\\text{A} \\;\\&\\&\\; !\\text{B}',
    notes: 'Penyederhanaan kondisi logika negasi percabangan.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Komparasi Floating Point Aman (Epsilon)',
    formula: '|a - b| < \\epsilon, \\quad \\epsilon = 10^{-9}',
    notes: 'Mencegah bug ketidakpresisian pecahan biner IEEE 754 pada float/double.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Linear Search vs Binary Search',
    formula: '\\text{Linear: } O(n), \\quad \\text{Binary: } O(\\log n) \\; (\\text{wajib terurut})',
    notes: 'Perbandingan performa pencarian elemen pada array.'
  },
  {
    category: 'Kompleksitas Standar',
    name: 'Bubble Sort Pass by Reference Swap',
    formula: 'T(n) = \\sum_{i=0}^{n-2} (n - 1 - i) = \\frac{n(n-1)}{2} \\in O(n^2)',
    notes: 'Jumlah perbandingan elemen pada pengurutan Bubble Sort.'
  }
];
