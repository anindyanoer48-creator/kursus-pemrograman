import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { ALPRO_PEMULA_QUIZZES } from './quizzesAlproPemula';

export const ALPRO_PEMULA_MODULES: ModuleData[] = [
  {
    id: 'konsep_alpro',
    number: 1,
    title: 'Pengenalan Algoritma & Glosarium Istilah Penting',
    shortDesc: 'Pahami apa itu algoritma, sifat-sifat komputasi, glosarium istilah programmer (bug, compiler, sintaks), serta perancangan flowchart & pseudocode.',
    iconName: 'Terminal',
    sections: [
      {
        id: '1-1-definisi-algoritma',
        title: '1.1 Apa itu Algoritma vs Program?',
        summary: 'Membedakan konsep algoritma sebagai logika pemecahan masalah dengan program sebagai kode implementasi konkret.',
        readTime: '7 menit',
        keyTakeaways: [
          'Algoritma adalah serangkaian langkah terstruktur, logis, dan berhingga untuk memecahkan suatu masalah atau mencapai tujuan tertentu.',
          'Program adalah implementasi nyata dari algoritma yang ditulis menggunakan sintaks bahasa pemrograman tertentu (seperti C++, Python, atau Java).',
          'Donald Knuth merumuskan 5 sifat mutlak algoritma: Input, Output, Definiteness (jelas/tidak ambigu), Finiteness (berhingga/ada titik henti), dan Effectiveness (langkah sederhana dan efektif).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

// Algoritma sederhana: Menghitung keliling persegi panjang
// Input: panjang (p) dan lebar (l)
// Proses: Keliling = 2 * (p + l)
// Output: Tampilkan nilai keliling ke layar
int main() {
    int panjang = 10;
    int lebar = 5;
    
    int keliling = 2 * (panjang + lebar);
    
    std::cout << "Keliling Persegi Panjang: " << keliling << std::endl;
    return 0;
}`,
          explanation: 'Program C++ minimal yang mengimplementasikan algoritma penghitungan keliling persegi panjang melalui tahapan Input -> Proses -> Output.'
        },
        content: `### 1. Fondasi Berpikir Komputasional (Computational Thinking)
Dalam dunia teknologi, komputer pada hakikatnya adalah mesin kalkulator berkecepatan tinggi yang **patuh secara mutlak** pada setiap instruksi yang kita berikan. Komputer tidak memiliki intuisi atau akal sehat; ia hanya menjalankan urutan perintah secara mekanis.

Oleh karena itu, sebelum menulis kode program, kita membutuhkan **Algoritma**.
> **Definisi:**  
> **Algoritma** adalah urutan langkah-langkah logis, terdefinisi secara pasti (*unambiguous*), dan berhingga (*finite*) yang disusun secara sistematis untuk memecahkan suatu permasalahan atau menghasilkan output yang diinginkan dari sejumlah input yang diberikan.

---

### 2. Lima Sifat Utama Algoritma (Kriteria Donald E. Knuth)
Agar suatu instruksi dapat diakui sebagai algoritma komputer yang valid, instruksi tersebut wajib memenuhi 5 karakteristik berikut:
1. **Input (Masukan)**: Memiliki nol atau lebih data masukan dari luar yang akan diproses.
2. **Output (Keluaran)**: Menghasilkan minimal satu nilai keluaran yang merupakan solusi dari masalah.
3. **Definiteness (Kepastian)**: Setiap langkah harus memiliki makna tunggal, jelas, presisi, dan tidak menimbulkan tafsir ganda (*unambiguous*).
4. **Finiteness (Keterhinggaan)**: Algoritma **harus memiliki kondisi berhenti** setelah memproses sejumlah langkah yang terhingga. Algoritma tidak boleh berjalan selamanya tanpa akhir (*infinite loop*).
5. **Effectiveness (Efektivitas)**: Setiap langkah instruksi harus cukup sederhana sehingga secara prinsipil dapat diselesaikan oleh manusia menggunakan pena dan kertas dalam waktu yang wajar.

---

### 3. Hubungan Algoritma dan Program
Banyak pemula mengira bahwa algoritma dan program adalah hal yang sama. Secara konseptual:
* **Algoritma** = Ide, strategi, dan resep logika pemecahan masalah (bebas dari bahasa komputer apapun).
* **Bahasa Pemrograman** = Alat komunikasi formal dengan aturan tata bahasa baku (*grammar & syntax*) untuk menyampaikan algoritma kepada komputer.
* **Program** = Hasil fisik dari penerjemahan algoritma ke dalam teks kode sumber (*source code*) menggunakan bahasa pemrograman tertentu.`
      },
      {
        id: '1-2-glosarium-istilah',
        title: '1.2 Glosarium Istilah Wajib Pemula (Bug, Compiler, Syntax)',
        summary: 'Menguasai kosakata fundamental dunia pemrograman agar tidak bingung saat membaca dokumentasi dan berdiskusi teknis.',
        readTime: '8 menit',
        keyTakeaways: [
          'Source Code: Teks instruksi yang diketik programmer; Machine Code: Kode biner 0 dan 1 yang dimengerti langsung oleh prosesor.',
          'Compiler menerjemahkan seluruh berkas kode sekaligus sebelum dijalankan; Interpreter menerjemahkan dan mengeksekusi baris demi baris.',
          'Bug adalah kesalahan dalam kode; Debugging adalah proses melacak dan memperbaiki bug tersebut.',
          'Tiga jenis error utama: Syntax Error (salah tata bahasa), Runtime Error (kesalahan operasi saat program berjalan), dan Logic Error (kode jalan tapi hasil salah).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // CONTOH SYNTAX ERROR (Jika titik koma dihilangkan):
    // int x = 10   <-- Syntax error: expected ';' before '}'

    // CONTOH RUNTIME ERROR:
    // int a = 5, b = 0;
    // int c = a / b;  <-- Runtime error: division by zero!

    // CONTOH LOGIC ERROR (Niat menghitung rata-rata dua angka):
    int nilai1 = 80, nilai2 = 90;
    int rataRata = nilai1 + nilai2 / 2; // BUG: Seharusnya (nilai1 + nilai2) / 2
    
    std::cout << "Rata-rata salah: " << rataRata << std::endl; // Output 125, bukan 85!
    return 0;
}`,
          explanation: 'Contoh nyata perbedaan ketiga jenis error dalam koding C++.'
        },
        content: `### Istilah-Istilah Fundamental yang Wajib Dikuasai
Saat baru belajar koding, Anda akan menjumpai banyak istilah teknis. Berikut adalah istilah inti yang harus dipahami sejak awal:

#### 1. Source Code (Kode Sumber)
Teks yang Anda tulis di editor teks menggunakan aturan bahasa pemrograman. Dokumen ini dapat dibaca dan diedit oleh manusia.

#### 2. Machine Code (Bahasa Mesin)
Kumpulan instruksi biner (kombinasi angka 0 dan 1) yang dipahami langsung oleh sirkuit elektronik prosesor (CPU).

#### 3. Compiler vs Interpreter (Penerjemah Bahasa)
Komputer tidak paham bahasa manusia (seperti kata \`if\`, \`while\`, \`print\`). Diperlukan penerjemah:
* **Compiler**: Menerjemahkan **seluruh berkas** source code sekaligus menjadi berkas biner mandiri (*executable* seperti \`.exe\`). Jika ada 1 kesalahan sintaks, kompilasi gagal total. (Contoh: C, C++, Rust, Go).
* **Interpreter**: Membaca, menerjemahkan, dan mengeksekusi perintah **baris demi baris** saat program sedang aktif berjalan. (Contoh: Python, JavaScript, PHP).

#### 4. Bug dan Debugging
* **Bug**: Cacat, kegagalan, atau kesalahan pada kode program yang menyebabkan aplikasi berperilaku tidak semestinya atau berhenti mendadak (*crash*). Istilah ini dipopulerkan oleh Grace Hopper pada tahun 1947 ketika seekor ngengat (*moth*) tersangkut di relay komputer Harvard Mark II.
* **Debugging**: Seni dan proses melacak, menganalisis, dan memperbaiki bug hingga program bekerja sempurna.

#### 5. Tiga Jenis Kesalahan (Errors) dalam Koding
1. **Syntax Error**: Kesalahan tata bahasa (lupa titik koma \`;\`, kurung buka tidak ditutup, salah ketik kata kunci seperti \`whlie\`). Compiler langsung menolak kode di awal.
2. **Runtime Error**: Terjadi saat program sedang berjalan. Sintaks sudah benar, namun komputer diminta melakukan operasi ilegal, misalnya membagi angka dengan nol (*division by zero*) atau kehabisan memori.
3. **Logic Error (Semantic Error)**: Kesalahan paling berbahaya! Program berhasil dikompilasi dan berjalan lancar tanpa crash, namun hasil perhitungannya salah karena alur logika rumus yang ditulis programmer keliru.`
      },
      {
        id: '1-3-flowchart-dan-pseudocode',
        title: '1.3 Representasi Logika: Flowchart & Pseudocode',
        summary: 'Mempelajari simbol standar diagram alir (flowchart) dan teknik penulisan pseudocode yang terstruktur.',
        readTime: '8 menit',
        keyTakeaways: [
          'Flowchart adalah representasi grafis menggunakan simbol geometris standar ANSI untuk memetakan alur program.',
          'Simbol penting: Oval (Terminator: Start/End), Jajar Genjang (Input/Output), Persegi Panjang (Proses/Perhitungan), dan Belah Ketupat (Decision/Percabangan).',
          'Pseudocode adalah deskripsi algoritma menggunakan bahasa manusia sederhana yang terstruktur menyerupai kode asli tanpa kerumitan sintaksis.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// Representasi C++ dari Pseudocode penentuan kelulusan:
// ALGORITMA CekKelulusan
// INPUT: skor
// JIKA skor >= 65 MAKA
//     TAMPILKAN "LULUS"
// LAINNYA
//     TAMPILKAN "REMEDIAL"

#include <iostream>

int main() {
    int skor;
    std::cout << "Masukkan skor ujian: ";
    std::cin >> skor;

    if (skor >= 65) {
        std::cout << "Status: LULUS" << std::endl;
    } else {
        std::cout << "Status: REMEDIAL" << std::endl;
    }

    return 0;
}`,
          explanation: 'Perbandingan langsung antara pseudocode terstruktur dengan implementasi kode C++ nyata.'
        },
        content: `### 1. Diagram Alir (Flowchart)
Flowchart memvisualisasikan bagaimana aliran data dan kendali berpindah dari satu tahap ke tahap berikutnya.

| Bentuk Geometris | Nama Simbol | Arti & Fungsi dalam Program |
| :--- | :--- | :--- |
| **Oval / Kapsul** | Terminator | Titik **START** (Mulai) dan **END** (Selesai). |
| **Jajar Genjang** | Input / Output | Operasi membaca data (Input) atau mencetak data (Output). |
| **Persegi Panjang** | Process | Operasi komputasi internal, inisialisasi, atau perhitungan rumus. |
| **Belah Ketupat** | Decision | Titik evaluasi logika bersyarat (menghasilkan cabang Ya/Tidak). |
| **Panah Alir** | Flowline | Menunjukkan arah aliran eksekusi instruksi selanjutnya. |

---

### 2. Pseudocode (Kode Semu)
Pseudocode tidak memiliki standar sintaks yang kaku seperti compiler, tetapi wajib mematuhi kaidah keterbacaan (*readability*).

**Aturan Penulisan Pseudocode yang Baik**:
1. Gunakan kata kerja aktif kapital: \`INPUT\`, \`BACA\`, \`HITUNG\`, \`TAMPILKAN\`, \`JIKA ... MAKA\`, \`ULANGI\`.
2. Berikan indentasi (spasi menjorok ke dalam) untuk blok keputusan atau perulangan.
3. Hindari sintaks spesifik bahasa tertentu (jangan gunakan kurung kurawal \`{}\` atau titik koma \`;\`).

\`\`\`text
ALGORITMA MenghitungDiskon
DEKLARASI:
    totalBelanja, diskon, bayar: Integer
DESKRIPSI:
    BACA totalBelanja
    JIKA totalBelanja >= 100000 MAKA
        diskon = totalBelanja * 0.10
    LAINNYA
        diskon = 0
    AKHIR-JIKA
    bayar = totalBelanja - diskon
    TAMPILKAN bayar
SELESAI
\`\`\``
      }
    ],
    quiz: ALPRO_PEMULA_QUIZZES.konsep_alpro
  },
  {
    id: 'variabel_tipe_data',
    number: 2,
    title: 'Variabel, Tipe Data & Input/Output Dasar',
    shortDesc: 'Pelajari konsep memori, aturan penamaan variabel, tipe data primitif (int, float, char, bool), operator aritmatika, dan I/O interaktif.',
    iconName: 'Code2',
    sections: [
      {
        id: '2-1-konsep-variabel',
        title: '2.1 Memahami Variabel & Model Memori',
        summary: 'Bagaimana komputer menyimpan data sementara di dalam RAM menggunakan kotak penyimpanan berlabel yang disebut variabel.',
        readTime: '7 menit',
        keyTakeaways: [
          'Variabel adalah nama representasi manusia untuk suatu lokasi alamat memori di RAM yang menyimpan suatu nilai data.',
          'Deklarasi memesan wadah dan tipe data; Inisialisasi memberikan nilai perdana ke dalam wadah tersebut.',
          'Aturan penamaan identifier: hanya boleh huruf, angka, dan underscore; tidak boleh diawali angka; peka huruf besar/kecil (case-sensitive); dan tidak boleh menggunakan kata kunci (reserved words).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // 1. Deklarasi saja (wadah dibuat, isi belum ditentukan / garbage)
    int jumlahSiswa;

    // 2. Inisialisasi (wadah diisi nilai)
    jumlahSiswa = 30;

    // 3. Deklarasi sekaligus inisialisasi (Praktik Terbaik!)
    int kapasitasKelas = 40;

    // 4. Modifikasi nilai variabel
    jumlahSiswa = jumlahSiswa + 2; // Sekarang menjadi 32

    std::cout << "Siswa saat ini: " << jumlahSiswa << std::endl;
    return 0;
}`,
          explanation: 'Demonstrasi deklarasi, inisialisasi, dan pembaruan nilai variabel di C++.'
        },
        content: `### 1. Analogi Kotak Penyimpanan Berlabel
Bayangkan Anda memiliki lemari penyimpanan besar dengan jutaan laci kecil. Di dunia komputer, lemari itu adalah **RAM (Random Access Memory)**, dan setiap laci memiliki alamat fisik (seperti \`0x7ffeefbff5ac\`).
Sangat sulit bagi manusia untuk mengingat alamat angka biner tersebut.

Oleh karena itu, bahasa pemrograman memperkenalkan konsep **Variabel**:
* Kita memberi label nama pada laci tersebut, misalnya \`usia\` atau \`hargaBarang\`.
* Kita menentukan jenis benda apa yang boleh dimasukkan ke laci tersebut (**Tipe Data**).
* Kita dapat memasukkan nilai, mengubah nilainya, atau mengambil nilainya kapan saja sepanjang program berjalan.

---

### 2. Aturan Baku Penamaan Variabel (Naming Conventions)
Dalam semua bahasa pemrograman keluarga C, Java, dan Python, ada aturan ketat penamaan identifier:
1. **Karakter yang Diizinkan**: Huruf alfabet (\`a-z\`, \`A-Z\`), angka (\`0-9\`), dan garis bawah (\`_\`).
2. **Tidak Boleh Diawali Angka**: \`nilai1\` sah, tetapi \`1nilai\` adalah kesalahan sintaks!
3. **Tidak Boleh Mengandung Spasi atau Karakter Khusus**: \`total_gaji\` sah, tetapi \`total gaji\` atau \`total-gaji\` dilarang.
4. **Bersifat Case-Sensitive**: Variabel \`skor\`, \`Skor\`, dan \`SKOR\` adalah 3 variabel yang sepenuhnya berbeda di memori.
5. **Dilarang Menggunakan Reserved Words**: Jangan menamai variabel dengan kata kunci sistem (seperti \`int\`, \`if\`, \`while\`, \`return\`).`
      },
      {
        id: '2-2-tipe-data-primitif',
        title: '2.2 Tipe Data Primitif (int, float, char, bool)',
        summary: 'Mengenal karakteristik, ukuran memori, dan peruntukan masing-masing tipe data dasar pemrograman.',
        readTime: '8 menit',
        keyTakeaways: [
          'int: Digunakan untuk bilangan bulat (tanpa koma desimal), rentang sekitar -2 miliar hingga +2 miliar (4 byte).',
          'float / double: Digunakan untuk bilangan real atau pecahan berkoma.',
          'char: Digunakan untuk menyimpan 1 karakter simbolik menggunakan petik tunggal (\'A\').',
          'bool: Tipe data logika yang hanya dapat bernilai true (1) atau false (0).',
          'string: Kumpulan karakter teks yang diapit oleh petik ganda ("Halo").'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <string>

int main() {
    int umur = 18;                     // Bilangan bulat
    double beratBadan = 62.5;          // Bilangan pecahan
    char inisial = 'A';                // Satu karakter tunggal (petik tunggal)
    bool sudahLulus = true;            // Logika biner (true / false)
    std::string nama = "Budi Santoso"; // Untaian teks (petik ganda)

    std::cout << "Nama: " << nama << " (" << inisial << ")\n";
    std::cout << "Umur: " << umur << " tahun\n";
    std::cout << "Berat: " << beratBadan << " kg\n";
    std::cout << "Status Lulus: " << sudahLulus << "\n";
    return 0;
}`,
          explanation: 'Penggunaan 5 tipe data primitif dan teks paling populer dalam pemrograman.'
        },
        content: `### Karakteristik Tipe Data Primitif
Komputer perlu mengetahui tipe data agar tahu berapa kapasitas byte memori yang harus dialokasikan.

| Tipe Data | Kata Kunci C++ | Ukuran Memori | Contoh Nilai Valid | Keterangan Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| **Integer** | \`int\` | 4 Byte (32-bit) | \`-100\`, \`0\`, \`42\`, \`2026\` | Bilangan bulat tanpa pecahan. |
| **Floating Point** | \`double\` / \`float\` | 8 Byte / 4 Byte | \`3.14\`, \`-0.05\`, \`99.9\` | Bilangan real dengan angka desimal berkoma. |
| **Character** | \`char\` | 1 Byte (8-bit) | \`'A'\`, \`'9'\`, \`'+'\`, \`'\\n'\` | Tepat satu karakter simbol (ASCII). |
| **Boolean** | \`bool\` | 1 Byte | \`true\` atau \`false\` | Status logika kebenaran biner. |
| **String (Teks)** | \`std::string\` | Dinamis | \`"Selamat Datang"\` | Kumpulan untaian karakter kalimat. |

> [!WARNING]
> Jangan tertukar antara petik tunggal dan petik ganda!  
> * Petik tunggal \`'A'\` adalah sebuah **char** (karakter tunggal).  
> * Petik ganda \`"A"\` adalah sebuah **string** (teks yang diakhiri null character).`
      },
      {
        id: '2-3-operator-aritmatika-dan-io',
        title: '2.3 Operator Aritmatika & Interaksi Input/Output',
        summary: 'Mengoperasikan rumus matematika dasar (+, -, *, /, %) serta berinteraksi membaca input pengguna.',
        readTime: '9 menit',
        keyTakeaways: [
          'Operator aritmatika standar: + (tambah), - (kurang), * (kali), / (bagi), dan % (modulo/sisa hasil bagi).',
          'Integer Division: Pembagian antar bilangan bulat di C/C++ selalu membuang pecahan (10 / 4 menghasilkan 2, bukan 2.5).',
          'Operator Modulo (%) hanya bekerja pada bilangan bulat, sangat berguna untuk mendeteksi bilangan genap/ganjil atau pembatasan rotasi siklus.',
          'Shortcuts: x += 5 (tambah nilai x dengan 5), x++ (increment 1 unit), x-- (decrement 1 unit).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int uang, hargaBarang;
    
    std::cout << "Masukkan total uang Anda: ";
    std::cin >> uang;
    
    std::cout << "Masukkan harga barang per unit: ";
    std::cin >> hargaBarang;

    // Pembagian bulat (berapa unit maksimal yang bisa dibeli)
    int jumlahBeli = uang / hargaBarang;

    // Modulo (berapa sisa uang kembalian)
    int sisaUang = uang % hargaBarang;

    std::cout << "Anda dapat membeli: " << jumlahBeli << " unit\n";
    std::cout << "Sisa uang kembalian: Rp " << sisaUang << "\n";
    return 0;
}`,
          explanation: 'Program interaktif memanfaatkan pembagian integer dan operator modulo untuk menghitung kuantitas pembelian dan sisa uang kembalian.'
        },
        content: `### 1. Operator Aritmatika Pemrograman
* **Penjumlahan (\`+\`)**: \`5 + 3 = 8\`
* **Pengurangan (\`-\`)**: \`10 - 4 = 6\`
* **Perkalian (\`*\`)**: \`6 * 7 = 42\`
* **Pembagian (\`/\`)**:
  * Jika kedua angka bulat: \`7 / 2 = 3\` *(angka di belakang koma dibuang!)*
  * Jika salah satu pecahan: \`7.0 / 2 = 3.5\`
* **Modulo (\`%\`)**: Mengambil **sisa hasil bagi** bilangan bulat:
  * \`10 % 3 = 1\` (karena $3 \\times 3 = 9$, sisa 1)
  * \`14 % 7 = 0\` (habis dibagi)

---

### 2. Operator Penugasan Cepat (Compound Assignment)
* \`x += 10;\` $\\iff$ \`x = x + 10;\`
* \`x -= 5;\` $\\iff$ \`x = x - 5;\`
* \`x *= 2;\` $\\iff$ \`x = x * 2;\`
* \`x++;\` $\\iff$ \`x = x + 1;\` (Increment)
* \`x--;\` $\\iff$ \`x = x - 1;\` (Decrement)`
      }
    ],
    quiz: ALPRO_PEMULA_QUIZZES.variabel_tipe_data
  },
  {
    id: 'logika_boolean',
    number: 3,
    title: 'Logika Boolean & Operator Relasional (AND, OR, NOT)',
    shortDesc: 'Kuasai fondasi pemikiran logis komputer: perbandingan relasional (==, !=, <, >), gerbang logika AND (&&), OR (||), NOT (!), serta evaluasi ekspresi majemuk.',
    iconName: 'Split',
    sections: [
      {
        id: '3-1-operator-relasional',
        title: '3.1 Operator Pembanding / Relasional',
        summary: 'Bagaimana komputer membandingkan dua nilai untuk menghasilkan jawaban mutlak: benar (true) atau salah (false).',
        readTime: '7 menit',
        keyTakeaways: [
          'Operator pembanding: == (sama dengan), != (tidak sama dengan), < (kurang dari), <= (kurang dari sama dengan), > (lebih dari), >= (lebih dari sama dengan).',
          'Jebakan paling fatal bagi pemula: tanda = tunggal adalah penugasan nilai; sedangkan tanda == ganda adalah pengujian kesetaraan.',
          'Hasil dari setiap ekspresi perbandingan selalu bertipe boolean (true atau false).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int nilaiA = 15;
    int nilaiB = 20;

    std::cout << std::boolalpha; // Menampilkan true/false alih-alih 1/0
    std::cout << "Apakah A == B? " << (nilaiA == nilaiB) << "\n"; // false
    std::cout << "Apakah A != B? " << (nilaiA != nilaiB) << "\n"; // true
    std::cout << "Apakah A < B?  " << (nilaiA < nilaiB) << "\n";  // true
    std::cout << "Apakah A >= 15? " << (nilaiA >= 15) << "\n"; // true
    return 0;
}`,
          explanation: 'Demonstrasi hasil evaluasi operator relasional pada C++.'
        },
        content: `### Mengapa Logika Pembanding Sangat Penting?
Sebelum program dapat mengambil keputusan (*"apakah user berhak login?"*, *"apakah game over?"*), komputer harus mampu membandingkan nilai saat ini dengan suatu standar acuan.

| Operator | Arti Matematis | Contoh Penggunaan | Hasil Evaluasi |
| :---: | :--- | :---: | :---: |
| \`==\` | Sama dengan | \`5 == 5\` | \`true\` |
| \`!=\` | Tidak sama dengan | \`5 != 3\` | \`true\` |
| \`<\` | Lebih kecil dari | \`4 < 9\` | \`true\` |
| \`<=\` | Lebih kecil atau sama dengan | \`10 <= 10\` | \`true\` |
| \`>\` | Lebih besar dari | \`7 > 12\` | \`false\` |
| \`>=\` | Lebih besar atau sama dengan | \`8 >= 10\` | \`false\` |

> [!CAUTION]
> **Peringatan Penting Pemula!**  
> Jangan pernah menulis \`if (skor = 100)\`!  
> Tanda \`=\` tunggal akan **mengubah nilai \`skor\` menjadi 100**, bukan membandingkannya. Selalu gunakan tanda \`==\` untuk membandingkan kesetaraan.`
      },
      {
        id: '3-2-operator-logika-and-or-not',
        title: '3.2 Gerbang Logika: AND (&&), OR (||), dan NOT (!)',
        summary: 'Menggabungkan beberapa syarat perbandingan sekaligus menjadi satu kesatuan ekspresi logika yang kokoh.',
        readTime: '9 menit',
        keyTakeaways: [
          'AND (&&): Bernilai true HANYA JIKA KEDUA syarat bernilai true. Satu saja salah, maka semuanya salah.',
          'OR (||): Bernilai true JIKA SALAH SATU syarat sudah bernilai true. Hanya bernilai false jika kedua syarat salah.',
          'NOT (!): Membalikkan nilai logika (mengubah true menjadi false, dan sebaliknya).',
          'Short-Circuit Evaluation: Komputer berhenti memeriksa operand kedua jika hasil akhir sudah pasti dari operand pertama.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int umur = 18;
    bool punyaKTP = true;

    // Syarat membuat SIM: Umur >= 17 DAN Memiliki KTP
    bool bolehBuatSIM = (umur >= 17) && punyaKTP;

    // Syarat tiket gratis: Balita (umur < 5) ATAU Lansia (umur >= 65)
    bool tiketGratis = (umur < 5) || (umur >= 65);

    std::cout << std::boolalpha;
    std::cout << "Boleh buat SIM: " << bolehBuatSIM << "\n"; // true
    std::cout << "Dapat tiket gratis: " << tiketGratis << "\n"; // false
    std::cout << "Kebalikan tiket gratis: " << (!tiketGratis) << "\n"; // true
    return 0;
}`,
          explanation: 'Penggunaan operator AND, OR, dan NOT pada skenario dunia nyata.'
        },
        content: `### 1. Tabel Kebenaran (Truth Table)
Dalam kehidupan sehari-hari, kita sering menghadapi syarat ganda:
* *"Boleh ikut lomba jika Mahasiswa Aktif **DAN** IPK $\\ge$ 3.0"*.
* *"Dapat diskon jika Member VIP **ATAU** Belanja $\\ge$ 200 ribu"*.

| A | B | A && B (AND) | A \|\| B (OR) | !A (NOT) |
| :---: | :---: | :---: | :---: | :---: |
| **false** | **false** | false | false | true |
| **false** | **true** | false | true | true |
| **true** | **false** | false | true | false |
| **true** | **true** | **true** | **true** | false |

---

### 2. Cara Kerja Short-Circuit Evaluation
Komputer sangat efisien dalam mengevaluasi boolean dari kiri ke kanan:
* **Pada \`A && B\`**: Jika \`A\` bernilai \`false\`, komputer **tidak akan pernah mengecek \`B\`**, karena apapun nilai B, hasil akhir operasi AND pasti \`false\`.
* **Pada \`A || B\`**: Jika \`A\` bernilai \`true\`, komputer **tidak akan pernah mengecek \`B\`**, karena apapun nilai B, hasil akhir operasi OR pasti \`true\`.`
      },
      {
        id: '3-3-kondisi-rentang-dan-precedence',
        title: '3.3 Kondisi Rentang & Hierarki Precedence Logika',
        summary: 'Teknik merancang batasan rentang nilai numerik serta urutan eksekusi operator agar tidak terjadi bug evaluasi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Di bahasa pemrograman C/C++/Java, rentang tidak boleh ditulis berurutan seperti 10 <= x <= 20; wajib dipisah dengan AND: (x >= 10 && x <= 20).',
          'Urutan prioritas (precedence): Operator tanda kurung () paling tinggi, diikuti operator aritmatika (* / + -), operator relasional (< > ==), lalu NOT (!), AND (&&), dan paling akhir OR (||).',
          'Gunakan selalu tanda kurung () secara eksplisit agar maksud logika Anda transparan dan terbebas dari kesalahan interpretasi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int jam = 14; // Pukul 14:00 (2 siang)

    // JAM KERJA: Buka dari jam 09.00 sampai 17.00
    // BENAR:
    if (jam >= 9 && jam <= 17) {
        std::cout << "Kantor Buka\\n";
    }

    // JEBAKAN FATAL:
    // Menulis jam >= 9 || jam <= 17 akan membuat kantor SELALU BUKA
    // di jam berapa pun (bahkan jam 3 pagi)!
    return 0;
}`,
          explanation: 'Membedakan logika rentang waktu yang benar dengan operator AND vs kesalahan fatal operator OR.'
        },
        content: `### 1. Kesalahan Klasik Pengecekan Rentang (Range Checking)
Banyak pemula matematika menuliskan kondisi di program seperti di lembar ujian:
\`\`\`cpp
// SALAH BESAR di C/C++:
if (13 <= umur <= 19) // JANGAN DILAKUKAN!
\`\`\`
**Mengapa salah?**
Komputer mengevaluasi dari kiri: \`13 <= umur\` menghasilkan boolean (\`true\` / 1 atau \`false\` / 0). Lalu angka 1 atau 0 ini dibandingkan dengan 19: \`1 <= 19\` yang selalu bernilai \`true\`!

**Penulisan yang Benar**:
\`\`\`cpp
if (umur >= 13 && umur <= 19) // Benar dan aman!
\`\`\`

---

### 2. Hierarki Prioritas Operator (Precedence)
1. Tanda Kurung: \`()\` *(selalu dieksekusi pertama)*
2. Unary & Not: \`!\`, \`++\`, \`--\`
3. Aritmatika: \`*\`, \`/\`, \`%\` lalu \`+\`, \`-\`
4. Relasional: \`<\`, \`<=\`, \`>\`, \`>=\` lalu \`==\`, \`!=\`
5. Logika: \`&&\` (AND) lalu \`||\` (OR)
6. Penugasan: \`=\`, \`+=\`, \`-=\``
      }
    ],
    quiz: ALPRO_PEMULA_QUIZZES.logika_boolean
  },
  {
    id: 'percabangan_dasar',
    number: 4,
    title: 'Struktur Kontrol Percabangan (if, if-else, nested if)',
    shortDesc: 'Pelajari mekanisme pengambilan keputusan dalam program: percabangan tunggal (if), ganda (if-else), bertingkat (else-if), percabangan bersarang, serta operator ternary.',
    iconName: 'Compass',
    sections: [
      {
        id: '4-1-percabangan-tunggal-ganda',
        title: '4.1 Percabangan Tunggal (if) & Ganda (if-else)',
        summary: 'Bagaimana membuat komputer mengeksekusi blok kode hanya jika syarat terpenuhi, dan menyediakan opsi cadangan (else).',
        readTime: '7 menit',
        keyTakeaways: [
          'if (kondisi): Blok kode hanya dieksekusi jika kondisi bernilai true.',
          'else: Blok alternatif yang otomatis dieksekusi jika kondisi pada if bernilai false.',
          'Blok kode di dalam if dan else wajib dibungkus dengan kurung kurawal {} jika memuat lebih dari satu baris instruksi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int saldo = 100000;
    int nominalTarik = 40000;

    if (nominalTarik <= saldo) {
        saldo -= nominalTarik;
        std::cout << "Penarikan sukses!\\n";
        std::cout << "Sisa saldo Anda: Rp " << saldo << "\\n";
    } else {
        std::cout << "Transaksi ditolak: Saldo tidak mencukupi!\\n";
    }

    return 0;
}`,
          explanation: 'Percabangan ganda (if-else) pada simulasi mesin ATM perbankan.'
        },
        content: `### 1. Alur Percabangan Tunggal (\`if\`)
Pada percabangan tunggal, kita hanya memberikan perintah bersyarat tanpa alternatif cadangan:
\`\`\`text
JIKA lapar MAKA
    makan()
AKHIR-JIKA
\`\`\`
Jika kondisi \`lapar\` bernilai false, komputer tidak melakukan apa-apa dan langsung melanjutkan ke baris instruksi berikutnya.

---

### 2. Alur Percabangan Ganda (\`if - else\`)
Ketika ada dua skenario yang saling berkebalikan:
\`\`\`text
JIKA nilai >= 65 MAKA
    status = "LULUS"
LAINNYA (else)
    status = "REMEDIAL"
AKHIR-JIKA
\`\`\`
Komputer dijamin **pasti memilih tepat salah satu cabang**: jika bukan cabang \`if\`, maka pasti cabang \`else\`.`
      },
      {
        id: '4-2-percabangan-bertingkat',
        title: '4.2 Percabangan Bertingkat (if - else if - else)',
        summary: 'Menangani multi-skenario keputusan secara berurutan dari atas ke bawah untuk klasifikasi nilai atau kategori.',
        readTime: '8 menit',
        keyTakeaways: [
          'Digunakan saat terdapat lebih dari dua opsi kategori yang saling eksklusif.',
          'Evaluasi dilakukan berurutan: begitu satu kondisi bernilai true, blok tersebut dijalankan dan seluruh sisa cabang di bawahnya langsung dilewati.',
          'Blok else terakhir berfungsi sebagai penampung default jika tidak ada satupun kondisi di atasnya yang cocok.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int skor = 78;
    char grade;

    if (skor >= 85) {
        grade = 'A';
    } else if (skor >= 75) {
        grade = 'B';
    } else if (skor >= 60) {
        grade = 'C';
    } else if (skor >= 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    std::cout << "Skor: " << skor << " -> Grade: " << grade << std::endl;
    return 0;
}`,
          explanation: 'Contoh klasik penentuan grade huruf berdasarkan skor ujian dengan if - else if - else.'
        },
        content: `### Logika Evaluasi Bertingkat
Pada struktur \`if - else if - else\`, urutan penulisan kondisi sangat krusial:
1. Komputer menguji kondisi pertama (\`skor >= 85\`). Jika salah, komputer lanjut ke kondisi kedua.
2. Komputer menguji kondisi kedua (\`skor >= 75\`). Karena 78 $\\ge$ 75 bernilai **true**, komputer langsung menjalankan blok ini (\`grade = 'B'\`).
3. **Penting:** Setelah blok yang cocok selesai dijalankan, komputer **seketika keluar** dari struktur percabangan. Kondisi di bawahnya (\`skor >= 60\`) tidak akan pernah diperiksa lagi.`
      },
      {
        id: '4-3-nested-if-dan-ternary',
        title: '4.3 Percabangan Bersarang (Nested if) & Operator Ternary',
        summary: 'Menempatkan kondisi di dalam kondisi lain, serta penulisan percabangan inline yang ringkas.',
        readTime: '8 menit',
        keyTakeaways: [
          'Nested if adalah pernyataan if yang berada di dalam badan if lain; kondisi kedua hanya diuji jika kondisi pertama sudah lolos.',
          'Hindari sarang kondisi yang terlalu dalam (> 3 tingkat) karena membuat kode sulit dibaca (masalah Pyramid of Doom).',
          'Operator Ternary (? :) adalah cara cepat menuliskan if-else sederhana dalam 1 baris untuk penugasan nilai: hasil = (kondisi) ? nilai_true : nilai_false.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int angka = 14;

    // Operator Ternary ringkas untuk menentukan ganjil/genap
    std::string jenis = (angka % 2 == 0) ? "Genap" : "Ganjil";
    std::cout << angka << " adalah bilangan " << jenis << std::endl;

    // Contoh Nested If
    bool punyaAkun = true;
    bool passwordBenar = true;

    if (punyaAkun) {
        if (passwordBenar) {
            std::cout << "Login Berhasil!\\n";
        } else {
            std::cout << "Password Salah!\\n";
        }
    } else {
        std::cout << "Akun tidak terdaftar.\\n";
    }

    return 0;
}`,
          explanation: 'Demonstrasi penggunaan operator ternary inline dan struktur percabangan bersarang.'
        },
        content: `### 1. Percabangan Bersarang (Nested if)
Seringkali keputusan kedua baru relevan setelah keputusan pertama terpenuhi:
\`\`\`cpp
if (adaInternet) {
    if (kuotaCukup) {
        putarVideoHD();
    } else {
        putarVideoHemat();
    }
} else {
    tampilkanPesanOffline();
}
\`\`\`

---

### 2. Operator Ternary (Inline if-else)
Sintaks resmi operator kondisional ternary:
$$\\text{Variabel} = (\\text{Kondisi}) \\; ? \\; \\text{NilaiJikaTrue} \\; : \\; \\text{NilaiJikaFalse};$$
Contoh:
\`\`\`cpp
int a = 15, b = 25;
int terbesar = (a > b) ? a : b; // menghasilkan 25
\`\`\``
      }
    ],
    quiz: ALPRO_PEMULA_QUIZZES.percabangan_dasar
  },
  {
    id: 'perulangan_dasar',
    number: 5,
    title: 'Struktur Kontrol Perulangan (while & do-while)',
    shortDesc: 'Pahami otomatisasi tugas berulang: perulangan while (cek awal), perulangan do-while (cek akhir), pencegahan infinite loop, serta kontrol break dan continue.',
    iconName: 'Repeat',
    sections: [
      {
        id: '5-1-konsep-looping',
        title: '5.1 Mengapa Perulangan Dibutuhkan?',
        summary: 'Tiga komponen mutlak perulangan: Inisialisasi awal, Kondisi berhenti, dan Pembaruan nilai counter.',
        readTime: '7 menit',
        keyTakeaways: [
          'Perulangan (looping) mengotomasi pengeksekusian blok instruksi berkali-kali tanpa duplikasi kode secara manual.',
          'Tiga pilar mutlak loop: (1) Inisialisasi variabel awal, (2) Kondisi pengecekan bernilai boolean, dan (3) Pembaruan (update/increment) agar loop dapat berhenti.',
          'Jika pilar pembaruan (update) lupa ditulis, program akan mengalami Infinite Loop (macet selamanya).'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    // Tanpa loop: Sangat merepotkan jika ingin mencetak 1000 kali!
    // Dengan loop while:
    int counter = 1;         // 1. Inisialisasi
    while (counter <= 5) {   // 2. Kondisi terminasi
        std::cout << "Putaran ke-" << counter << std::endl;
        counter++;           // 3. Pembaruan (Update)
    }

    std::cout << "Perulangan selesai!" << std::endl;
    return 0;
}`,
          explanation: 'Struktur perulangan dasar dengan 3 pilar utama: inisialisasi, kondisi, dan increment.'
        },
        content: `### Anatomi Sebuah Perulangan
Jika kita ingin mencetak kalimat *"Saya tidak akan terlambat lagi"* sebanyak 100 kali, mengetiknya secara manual 100 kali adalah hal yang sangat tidak efisien dan rawan salah.

Komputer diciptakan untuk melakukan repetisi membosankan dengan kecepatan gigahertz tanpa pernah lelah.

Setiap perulangan yang baik membutuhkan **3 Pilar Mutlak**:
1. **Inisialisasi**: Titik mula variabel pelacak (misal: \`int i = 1;\`).
2. **Kondisi Berhenti (Terminasi)**: Pintu gerbang evaluasi; loop hanya akan lanjut selama kondisi ini bernilai \`true\` (misal: \`i <= 100;\`).
3. **Pembaruan (Increment/Decrement)**: Langkah maju yang mengubah nilai variabel pelacak setiap putaran (misal: \`i++;\`), agar pada akhirnya kondisi berhenti dapat tercapai.`
      },
      {
        id: '5-2-perulangan-while',
        title: '5.2 Perulangan while (Entry-Controlled Loop)',
        summary: 'Mekanisme pengecekan kondisi di awal sebelum blok diizinkan berjalan, dan cara mencegah infinite loop.',
        readTime: '8 menit',
        keyTakeaways: [
          'while (kondisi): Pengecekan dilakukan di awal; jika sejak awal kondisi false, blok tidak pernah dieksekusi sama sekali (0 kali).',
          'Sangat cocok digunakan saat jumlah pengulangan tidak diketahui secara pasti di awal (bergantung pada input dinamis atau kondisi runtime).',
          'Infinite Loop terjadi jika kondisi selalu bernilai true; dapat dicegah dengan memastikan variabel kondisi terus bergerak mendekati titik terminasi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int saldo = 100;
    int minggu = 1;

    // Perulangan menabung: setiap minggu saldo bertambah 50
    // Berhenti saat saldo mencapai minimal 300
    while (saldo < 300) {
        saldo += 50;
        std::cout << "Minggu " << minggu << " -> Saldo: Rp " << saldo << "\\n";
        minggu++;
    }

    std::cout << "Target tabungan tercapai dalam " << (minggu - 1) << " minggu!\\n";
    return 0;
}`,
          explanation: 'Perulangan while untuk simulasi penambahan saldo tabungan berkala hingga target tercapai.'
        },
        content: `### Mekanisme Loop while
Pada perulangan \`while\`, pintu gerbang diperiksa di awal:
\`\`\`cpp
while (kondisi) {
    // Instruksi yang diulang
    // Pembaruan kondisi
}
\`\`\`

**Langkah Eksekusi**:
1. Komputer mengecek \`kondisi\`.
2. Jika bernilai \`true\`, komputer masuk ke dalam badan kurung kurawal \`{}\` dan menjalankan instruksi.
3. Setelah mencapai baris terakhir kurung kurawal penutup \`}\`, komputer melompat kembali ke atas untuk mengecek \`kondisi\` lagi.
4. Begitu \`kondisi\` bernilai \`false\`, komputer langsung melompat keluar dari perulangan.`
      },
      {
        id: '5-3-perulangan-do-while',
        title: '5.3 Perulangan do-while (Exit-Controlled Loop)',
        summary: 'Pengecekan kondisi di akhir yang menjamin eksekusi minimal 1 kali, serta kendali break dan continue.',
        readTime: '9 menit',
        keyTakeaways: [
          'do-while memeriksa kondisi di akhir; DIJAMIN berjalan minimal 1 kali meskipun kondisi awal bernilai false.',
          'Wajib diakhiri dengan titik koma setelah kurung kondisi: do { ... } while (kondisi);',
          'Sangat ideal untuk pembuatan menu aplikasi interaktif atau validasi input data pengguna.',
          'break; menghentikan dan keluar dari loop seketika; continue; melompati sisa iterasi saat ini dan langsung ke iterasi berikutnya.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>

int main() {
    int pilihan;

    // Menu Interaktif dengan do-while (pasti muncul minimal 1 kali)
    do {
        std::cout << "\\n=== MENU UTAMA ===\\n";
        std::cout << "1. Mulai Permainan\\n";
        std::cout << "2. Lihat Pengaturan\\n";
        std::cout << "3. Keluar\\n";
        std::cout << "Pilihan Anda (1-3): ";
        std::cin >> pilihan;

        if (pilihan == 1) {
            std::cout << "Game dimulai!\\n";
        } else if (pilihan == 2) {
            std::cout << "Membuka pengaturan...\\n";
        }
    } while (pilihan != 3); // Ulangi selama pengguna TIDAK memilih angka 3

    std::cout << "Terima kasih telah bermain!\\n";
    return 0;
}`,
          explanation: 'Penerapan do-while untuk menu aplikasi interaktif console yang berhenti saat pengguna memilih menu 3.'
        },
        content: `### 1. Perbedaan Mendasar while vs do-while

| Kriteria | \`while\` Loop | \`do-while\` Loop |
| :--- | :--- | :--- |
| **Titik Evaluasi** | Di AWAL (*Entry-Controlled*) | Di AKHIR (*Exit-Controlled*) |
| **Minimal Eksekusi** | **0 kali** (bisa tidak jalan sama sekali) | **Minimal 1 kali** |
| **Sintaks Akhir** | \`while (kondisi) { }\` | \`do { } while (kondisi);\` *(ada titik koma!)* |
| **Kasus Penggunaan Terbaik** | Iterasi berbasis kondisi dinamis umum. | Menu pilihan interaktif dan validasi input. |

---

### 2. Pernyataan Kendali: \`break\` dan \`continue\`
* **\`break;\`**: Menghentikan perulangan secara paksa seketika itu juga dan langsung keluar dari blok loop.
* **\`continue;\`**: Melewati baris instruksi yang tersisa di bawahnya pada putaran saat ini, dan langsung melompat ke putaran/iterasi selanjutnya.`
      }
    ],
    quiz: ALPRO_PEMULA_QUIZZES.perulangan_dasar
  }
];

export const ALPRO_PEMULA_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Istilah & Konsep',
    name: 'Algoritma vs Program',
    formula: '\\text{Algoritma (Logika Ide)} \\xrightarrow{\\text{Koding}} \\text{Program (Kode Sumber Biner)}',
    notes: 'Algoritma bersifat independen, program adalah perwujudan konkret dalam bahasa pemrograman.'
  },
  {
    category: 'Istilah & Konsep',
    name: '5 Sifat Algoritma Donald Knuth',
    formula: '\\text{Input}, \\quad \\text{Output}, \\quad \\text{Definiteness}, \\quad \\text{Finiteness}, \\quad \\text{Effectiveness}',
    notes: 'Kriteria mutlak agar urutan langkah sah diakui sebagai algoritma komputer.'
  },
  {
    category: 'Istilah & Konsep',
    name: 'Klasifikasi Error Pemrograman',
    formula: '\\text{Syntax Error (Tata Bahasa)} \\; | \\; \\text{Runtime Error (Crash Operasi)} \\; | \\; \\text{Logic Error (Hasil Salah)}',
    notes: 'Logic error adalah yang paling berbahaya karena program tetap berjalan tanpa crash namun output salah.'
  },
  {
    category: 'Flowchart',
    name: 'Simbol Standar Diagram Alir (ANSI)',
    formula: '\\text{Oval: Terminator} \\; | \\; \\text{JajarGenjang: I/O} \\; | \\; \\text{Persegi: Proses} \\; | \\; \\text{BelahKetupat: Decision}',
    notes: 'Simbol geometris baku pemetaan alur algoritma.'
  },
  {
    category: 'Tipe Data & Memori',
    name: 'Tipe Data Primitif Dasar',
    formula: '\\text{int (Bulat, 4B)}, \\quad \\text{double (Real, 8B)}, \\quad \\text{char (Karakter, 1B)}, \\quad \\text{bool (Logika, 1B)}',
    notes: 'Alokasi memori standar pada arsitektur modern.'
  },
  {
    category: 'Aritmatika',
    name: 'Operator Modulo (Sisa Hasil Bagi)',
    formula: 'a \\pmod b = a - (b \\times \\lfloor a / b \\rfloor), \\quad 17 \\% 5 = 2',
    notes: 'Mendapatkan sisa pembagian bilangan bulat; jika x % 2 == 0 maka x genap.'
  },
  {
    category: 'Logika Boolean',
    name: 'Tabel Kebenaran AND (&&)',
    formula: 'T \\;\\&\\&\\; T = T, \\quad T \\;\\&\\&\\; F = F, \\quad F \\;\\&\\&\\; T = F, \\quad F \\;\\&\\&\\; F = F',
    notes: 'Hanya bernilai true jika seluruh operand bernilai true.'
  },
  {
    category: 'Logika Boolean',
    name: 'Tabel Kebenaran OR (||)',
    formula: 'T \\;\\|\\|\\; T = T, \\quad T \\;\\|\\|\\; F = T, \\quad F \\;\\|\\|\\; T = T, \\quad F \\;\\|\\|\\; F = F',
    notes: 'Bernilai true jika minimal satu operand bernilai true.'
  },
  {
    category: 'Logika Boolean',
    name: 'Pemeriksaan Rentang Nilai yang Benar',
    formula: '\\text{BENAR: } (x \\ge A \\;\\&\\&\\; x \\le B), \\quad \\text{SALAH: } A \\le x \\le B',
    notes: 'Wajib dipisahkan menjadi dua kondisi relasional dengan operator AND di C/C++/Java.'
  },
  {
    category: 'Percabangan',
    name: 'Operator Ternary Ringkas',
    formula: '\\text{hasil} = (\\text{kondisi}) \\; ? \\; \\text{nilaiTrue} \\; : \\; \\text{nilaiFalse}',
    notes: 'Sintaks satu baris untuk if-else inline.'
  },
  {
    category: 'Perulangan',
    name: '3 Pilar Mutlak Loop',
    formula: '\\text{Inisialisasi Awal} \\longrightarrow \\text{Kondisi Terminasi} \\longrightarrow \\text{Pembaruan (Update)}',
    notes: 'Lupa menulis update akan menyebabkan Infinite Loop fatal.'
  },
  {
    category: 'Perulangan',
    name: 'while (Cek Awal) vs do-while (Cek Akhir)',
    formula: '\\text{while: Minimal 0 Kali (Entry-controlled)}, \\quad \\text{do-while: Minimal 1 Kali (Exit-controlled)}',
    notes: 'do-while wajib diakhiri titik koma: do { ... } while (kondisi);'
  }
];
