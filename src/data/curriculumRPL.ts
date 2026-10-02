import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { RPL_QUIZZES } from './quizzesRPL';

export const RPL_MODULES: ModuleData[] = [
  {
    id: 'rpl_sdlc_agile',
    number: 1,
    title: 'Siklus Hidup Perangkat Lunak (SDLC), Waterfall vs Agile & Scrum',
    shortDesc:
      'Fondasi rekayasa proses perangkat lunak: model Waterfall linier, Spiral berbasis risiko, V-Model, nilai-nilai Agile Manifesto, upacara dan artefak Scrum, serta estimasi kapasitas tim.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-model-proses-sdlc',
        title: '1.1 Spektrum Model Proses Rekayasa (Waterfall, Spiral, V-Model)',
        summary:
          'Mempelajari bagaimana tahapan pengembangan perangkat lunak dikelola dari analisis kebutuhan hingga pemeliharaan jangka panjang.',
        readTime: '8 menit',
        keyTakeaways: [
          'Waterfall cocok untuk proyek dengan regulasi ketat dan persyaratan yang sudah matang dan tidak berubah.',
          'V-Model memperluas Waterfall dengan memetakan setiap tahap perancangan secara simetris dengan fase pengujian yang relevan.',
          'Spiral Model (Boehm) mengintegrasikan pendekatan iteratif dengan analisis risiko formal di setiap putaran siklusnya.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Perbandingan Model Proses Klasik vs Iteratif
| Parameter | Waterfall | V-Model | Spiral | Scrum (Agile) |
| :--- | :--- | :--- | :--- | :--- |
| **Fleksibilitas Kebutuhan** | Sangat Kaku | Kaku | Moderat | Sangat Adaptif |
| **Manajemen Risiko** | Rendah / Akhir | Sedang | Sangat Tinggi (Fokus Inti) | Berkelanjutan per Sprint |
| **Keterlibatan Klien** | Awal & Akhir saja | Awal & Verifikasi | Di setiap siklus | Konstan setiap 2 minggu |
| **Waktu Rilis Pertama** | Bulan/Tahun | Bulan/Tahun | Bertahap | Tiap Akhir Sprint |`,
          explanation:
            'Tabel perbandingan trade-off model proses SDLC linier kaku vs model adaptif berulang.'
        },
        content: `### 1. Masalah "Krisis Perangkat Lunak" (Software Crisis)
Pada dekade 1960-an, proyek perangkat lunak sering mengalami kegagalan katastropik: biaya membengkak miliaran rupiah, jadwal molor bertahun-tahun, dan sistem penuh bug yang membahayakan nyawa.
**Rekayasa Perangkat Lunak (Software Engineering)** lahir untuk mengubah seni pengodean liar menjadi disiplin rekayasa sistematis yang terukur dan dapat diprediksi.

---

### 2. Waterfall vs Spiral vs V-Model
1. **Model Waterfall (Royce, 1970)**: Alur air terjun bertahap: Analisis $\\to$ Desain $\\to$ Implementasi $\\to$ Verifikasi $\\to$ Pemeliharaan.
   *Kelemahan*: Pengguna baru melihat sistem di akhir siklus. Jika ada salah paham kebutuhan di awal, biaya perbaikan berlipat ganda ratusan kali.
2. **Model Spiral (Barry Boehm, 1986)**: Menambahkan dimensi analisis risiko formal di setiap kuadran. Jika risiko teknologi terlalu tinggi, proyek dapat dihentikan sedini mungkin.
3. **V-Model**: Mengaitkan perancangan arsitektur tingkat tinggi langsung dengan Integration Testing, dan analisis kebutuhan pengguna langsung dengan Acceptance Testing.`
      },
      {
        id: '1-2-agile-manifesto-scrum',
        title: '1.2 Filosofi Agile Manifesto & Kerangka Kerja Scrum',
        summary:
          'Mengapa pendekatan empiris mengalahkan rencana kaku dan bagaimana peran Scrum (PO, SM, Dev) serta Timeboxed Events bekerja harmonis.',
        readTime: '9 menit',
        keyTakeaways: [
          'Agile bukan metodologi langkah-demi-langkah, melainkan pola pikir (mindset) berbasis 4 nilai dan 12 prinsip adaptabilitas.',
          'Scrum adalah kerangka kerja tangkas paling populer: bekerja dalam wadah waktu (time-box) berulang 1-4 minggu yang disebut Sprint.',
          'Tiga peran inti: Product Owner (memaksimalkan nilai bisnis produk), Scrum Master (servant-leader fasilitator proses), dan Tim Pengembang (lintas-fungsi dan otonom).',
          'Empat upacara resmi Scrum: Sprint Planning, Daily Scrum (15 menit), Sprint Review, dan Sprint Retrospective.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `## Empat Nilai Inti Agile Manifesto (2001)
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

Walaupun elemen di sebelah kanan bernilai, kami lebih menghargai elemen di sebelah kiri!`,
          explanation:
            'Prinsip panduan utama Agile Manifesto yang menitikberatkan kolaborasi manusia dan software fungsional.'
        },
        content: `### 1. Fondasi Empirisme Scrum
Scrum dibangun di atas tiga pilar kontrol proses empiris:
1. **Transparansi (Transparency)**: Aspek proses yang signifikan harus terlihat jelas oleh mereka yang bertanggung jawab atas hasilnya.
2. **Inspeksi (Inspection)**: Artefak dan kemajuan Scrum harus sering diperiksa untuk mendeteksi deviasi yang tidak diinginkan.
3. **Adaptasi (Adaptation)**: Jika ada proses yang menyimpang di luar batas yang dapat diterima, penyesuaian harus segera dilakukan.

---

### 2. Anatomi Upacara Scrum (Scrum Events)
- **Sprint Planning**: Menentukan "Apa yang akan dibangun" (Sprint Goal) dan "Bagaimana cara membangunnya".
- **Daily Scrum (15 Menit)**: Sinkronisasi harian tim pengembang: apa yang selesai kemarin, rencana hari ini, dan blocker.
- **Sprint Review**: Demo kenaikan produk nyata kepada Product Owner dan pemangku kepentingan.
- **Sprint Retrospective**: Refleksi internal tim untuk terus memperbaiki kualitas dan cara kerja (Continuous Improvement).`
      },
      {
        id: '1-3-backlog-estimasi-velocity',
        title: '1.3 Manajemen Backlog, Kriteria INVEST & Estimasi Kapasitas Tim',
        summary:
          'Menulis User Story berkualitas, teknik estimasi Planning Poker dengan Fibonacci modifikasi, dan memprediksi tanggal rilis via Velocity tim.',
        readTime: '8 menit',
        keyTakeaways: [
          'Format standar User Story: As a [Role], I want [Feature], so that [Business Benefit].',
          'Kriteria INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.',
          'Story Points mengukur kompleksitas dan ketidakpastian relatif, bukan jam kerja absolut.',
          'Velocity adalah rata-rata Story Points yang tuntas memenuhi Definition of Done (DoD) per sprint.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Perhitungan Prediksi Rilis Berdasarkan Velocity Tim
interface ReleasePrediction {
  totalBacklogPoints: number;
  averageVelocity: number; // Story points per sprint
  sprintsNeeded: number;
}

function calculateReleaseEstimate(totalPoints: number, velocityHistory: number[]): ReleasePrediction {
  const avgVelocity = velocityHistory.reduce((a, b) => a + b, 0) / velocityHistory.length;
  const sprints = Math.ceil(totalPoints / avgVelocity);
  return {
    totalBacklogPoints: totalPoints,
    averageVelocity: avgVelocity,
    sprintsNeeded: sprints
  };
}

// Contoh: 120 points backlog tersisa, velocity tim stabil di 30 points/sprint
// Hasil: Butuh tepat 4 sprint (8 minggu) menuju rilis produksi.`,
          explanation:
            'Algoritma peramalan sprint rilis berbasis riwayat velocity empiris tim pengembang.'
        },
        content: `### 1. Definition of Done (DoD) vs Acceptance Criteria
- **Acceptance Criteria**: Syarat bisnis unik spesifik untuk SATU User Story tertentu (misal: "Kata sandi harus mengandung minimal 8 karakter dan 1 angka").
- **Definition of Done (DoD)**: Standar mutu universal yang berlaku untuk SEMUA User Story tanpa kecuali (misal: Unit test coverage minimal 80%, code review disetujui 2 senior engineer, lolos uji staging tanpa warning).

---

### 2. Mengapa Menggunakan Deret Fibonacci untuk Estimasi?
Deret: $1, 2, 3, 5, 8, 13, 20, 40, 100$.
Prinsip psikologis Weber-Fechner menyatakan bahwa persepsi manusia terhadap perbedaan proporsional dengan besaran skala. Membedakan tugas 1 poin vs 2 poin sangat mudah, namun memperdebatkan tugas 20 poin vs 21 poin tidak ada artinya. Jika tugas di atas 13 poin, tugas tersebut harus dipecah (*split story*) menjadi sub-tugas yang lebih kecil.`
      }
    ],
    quiz: RPL_QUIZZES['rpl_sdlc_agile']
  },
  {
    id: 'rpl_pemodelan_uml',
    number: 2,
    title: 'Pemodelan Kebutuhan Sistem & Diagram UML Standar',
    shortDesc:
      'Bahasa visual universal perancangan perangkat lunak: Use Case Diagram fungsional, Class Diagram struktural dengan relasi inheritance/agregasi/komposisi, serta Sequence Diagram interaksi temporal.',
    iconName: 'Code',
    sections: [
      {
        id: '2-1-use-case-modeling',
        title: '2.1 Use Case Diagram & Analisis Kebutuhan Sistem',
        summary:
          'Memetakan batasan sistem, mendefinisikan interaksi aktor luar, dan menguasai perbedaan relasi <<include>> vs <<extend>>.',
        readTime: '8 menit',
        keyTakeaways: [
          'Aktor adalah entitas eksternal (manusia, sensor hardware, atau sistem backend bank) yang berinteraksi dengan sistem.',
          'Relasi <<include>>: Perilaku yang wajib dijalankan sebagai bagian dari use case dasar.',
          'Relasi <<extend>>: Perilaku opsional yang disisipkan hanya jika kondisi tertentu terpenuhi pada extension point.',
          'Kebutuhan Non-Fungsional (SLA, keamanan, konkurensi) mendefinisikan batasan kualitas tempat use case beroperasi.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Contoh Skenario Use Case
[Sistem E-Commerce]
- Aktor: Pembeli, Sistem Gateway Pembayaran
- Use Case: Checkout Belanja
    ├── <<include>> Validasi Stok Barang (Wajib)
    ├── <<include>> Hitung Ongkos Kirim (Wajib)
    └── <<extend>> Terapkan Kupon Promo Diskon (Opsional, jika kupon valid)`,
          explanation:
            'Struktur dekomposisi kasus penggunaan Use Case dengan relasi wajib <<include>> dan opsional <<extend>>.'
        },
        content: `### 1. Mengapa Perlu Diagram Use Case?
Use Case Diagram menyajikan pandangan helikopter (*bird's eye view*) mengenai kapabilitas sistem bagi pemangku kepentingan non-teknis. Diagram ini mencegah miskomunikasi antara manajer produk dan arsitek teknis sebelum baris kode pertama ditulis.

---

### 2. Kesalahan Umum Use Case:
- Menjadikan Use Case sebagai flowchart langkah per langkah (contoh anti-pattern: use case "Klik Tombol Submit").
- Mengabaikan aktor eksternal sistem (misal: server SMTP email atau gateway pembayaran pihak ketiga).`
      },
      {
        id: '2-2-class-diagram-relasi',
        title: '2.2 Class Diagram Struktural & Semantik Relasi Objek',
        summary:
          'Menyusun cetak biru statis objek: visibilitas member (+, -, #), kardinalitas multiplisitas, asosiasi, agregasi longgar, dan komposisi ketat.',
        readTime: '9 menit',
        keyTakeaways: [
          'Visibilitas: + (Public), - (Private), # (Protected), ~ (Package).',
          'Pewarisan (Generalization): Panah dengan kepala segitiga berongga tertutup menunjuk ke superclass.',
          'Agregasi (Hollow Diamond): Hubungan kepemilikan lemah (part-of) di mana bagian dapat tetap hidup mandiri jika induk musnah.',
          'Komposisi (Filled Diamond): Hubungan kepemilikan kuat eksklusif; bagian musnah seketika saat induk dihancurkan.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Implementasi Kode dari Class Diagram Relasi
// 1. Komposisi: Room milik House (Jika House hancur, Room musnah)
class Room {
  constructor(public name: string) {}
}
class House {
  private rooms: Room[] = [];
  constructor() {
    this.rooms.push(new Room("Kamar Utama")); // Diciptakan & dimiliki penuh oleh House
  }
}

// 2. Agregasi: Mahasiswa & Jurusan (Mahasiswa tetap ada meski Jurusan dibubarkan)
class Student {
  constructor(public id: string, public name: string) {}
}
class Department {
  private students: Student[] = [];
  addStudent(s: Student) { // Disuntikkan dari luar
    this.students.push(s);
  }
}`,
          explanation:
            'Implementasi OOP dari diagram relasi Komposisi (kepemilikan mutlak) dan Agregasi (asosiasi independen).'
        },
        content: `### 1. Anatomi Kelas UML
Kotak kelas UML dibagi menjadi 3 kompartemen horizontal:
1. **Nama Kelas**: Ditulis tebal di paling atas (atau miring untuk *Abstract Class*).
2. **Atribut (Variabel)**: \`[visibilitas] [nama]: [tipe] = [nilai default]\`.
3. **Operasi (Metode)**: \`[visibilitas] [nama]([param]): [tipe pengembalian]\`.

---

### 2. Multiplisitas (Multiplicity)
- \`1\`: Tepat satu instance.
- \`0..1\`: Opsional (nol atau satu).
- \`*\` atau \`0..*\`: Nol hingga tak terbatas.
- \`1..*\`: Satu hingga banyak (minimal ada 1).`
      },
      {
        id: '2-3-sequence-activity-diagram',
        title: '2.3 Sequence Diagram & Activity Diagram Alur Logika',
        summary:
          'Memodelkan kronologi pertukaran pesan antar lifeline objek dan pemodelan proses bisnis paralel dengan fork-join.',
        readTime: '8 menit',
        keyTakeaways: [
          'Sequence Diagram memetakan interaksi kronologis vertikal dari atas ke bawah antar lifeline objek.',
          'Pesan sinkronis digambarkan dengan panah segitiga padat; pesan asinkronis digambarkan dengan panah garis terbuka.',
          'Activity Diagram memodelkan alur kerja dengan nodus keputusan (decision), konkurensi (fork/join), dan partisi penanggung jawab (swimlanes).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Alur Transaksi pada Sequence Diagram:
User -> ClientUI: klikBayar()
ClientUI -> PaymentService: prosesTransaksi(token, amount) [Sync Arrow]
PaymentService -> BankAPI: potongSaldo() [Sync Arrow]
BankAPI --> PaymentService: statusSukses (Return Dash Arrow)
PaymentService -> NotificationQueue: kirimEmailReceipt() [Async Open Stick Arrow]
PaymentService --> ClientUI: konfirmasiBerhasil`,
          explanation:
            'Alur kronologis pertukaran pesan sinkronis dan asinkronis antar komponen pada Sequence Diagram.'
        },
        content: `### 1. Focus of Control (Activation Bar)
Pada Sequence Diagram, kotak persegi sempit pada lifeline menunjukkan objek sedang mengeksekusi instruksi CPU secara aktif. Jika objek hanya menunggu respons dari sistem lain, lifeline digambarkan berupa garis putus-putus kosong.

---

### 2. Fork dan Join pada Activity Diagram
- **Fork Node**: Satu panah masuk dipecah menjadi dua atau lebih panah keluar paralel yang dieksekusi simultan di thread/server berbeda.
- **Join Node**: Menunggu seluruh cabang paralel selesai secara mutlak sebelum melanjutkan ke aktivitas berikutnya (sinkronisasi penghalang / barrier sync).`
      }
    ],
    quiz: RPL_QUIZZES['rpl_pemodelan_uml']
  },
  {
    id: 'rpl_prinsip_pola_desain',
    number: 3,
    title: 'Prinsip SOLID & Design Patterns GoF Esensial',
    shortDesc:
      'Kaidah arsitektur kode bersih: 5 prinsip SOLID Robert C. Martin, pola Creational (Singleton, Factory, Builder), Structural (Adapter, Decorator, Facade), dan Behavioral (Observer, Strategy).',
    iconName: 'Layers',
    sections: [
      {
        id: '3-1-prinsip-solid',
        title: '3.1 Lima Prinsip Desain Berorientasi Objek (SOLID)',
        summary:
          'Mencegah kode rapuh dan kaku dengan SRP, OCP, LSP, ISP, dan DIP.',
        readTime: '9 menit',
        keyTakeaways: [
          'S - Single Responsibility: Kelas hanya boleh memiliki satu alasan untuk berubah.',
          'O - Open/Closed: Terbuka untuk penambahan fitur baru, tertutup untuk pengubahan kode yang sudah stabil.',
          'L - Liskov Substitution: Objek turunan harus dapat menggantikan induknya tanpa merusak kebenaran sistem.',
          'I - Interface Segregation: Pecah interface gemuk menjadi interface kecil yang fokus pada kebutuhan klien.',
          'D - Dependency Inversion: Modul tingkat tinggi bergantung pada kontrak abstraksi, bukan implementasi konkret.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Contoh Penerapan DIP & OCP:
// Kontrak Abstraksi
interface PaymentGateway {
  charge(amount: number): boolean;
}

// Implementasi Konkret A (Dapat ditambah tanpa mengubah CheckoutService)
class MidtransPayment implements PaymentGateway {
  charge(amount: number): boolean { return true; }
}

// Logika Bisnis Tingkat Tinggi (Tidak bergantung pada vendor spesifik!)
class CheckoutService {
  constructor(private gateway: PaymentGateway) {} // Dependency Injection

  processOrder(total: number) {
    return this.gateway.charge(total);
  }
}`,
          explanation:
            'Penerapan Dependency Inversion Principle (DIP) dan Open/Closed Principle (OCP) menggunakan abstraksi interface.'
        },
        content: `### 1. Tanda-Tanda Desain Kode Buruk (Rotting Design)
- **Rigidity**: Setiap perubahan kecil memaksa perombakan beruntun di seluruh aplikasi.
- **Fragility**: Perbaikan pada satu modul menyebabkan modul lain yang tidak berhubungan tiba-tiba rusak.
- **Immobility**: Kode sulit dipakai ulang di modul lain karena terlalu banyak keterikatan implisit.

---

### 2. Pelanggaran Klasik Liskov (Square-Rectangle Problem)
Secara geometri, bujursangkar adalah persegi panjang. Namun dalam kode OOP:
Jika \`Square\` mewarisi \`Rectangle\`, mengubah properti \`setWidth(10)\` pada bujursangkar otomatis mengubah panjangnya menjadi 10. Jika kode klien menghitung luas berdasarkan asumsi lebar dan tinggi independen, logika matematika akan rusak!`
      },
      {
        id: '3-2-creational-structural-patterns',
        title: '3.2 Pola Desain Creational & Structural Esensial',
        summary:
          'Menguasai pembuatan objek yang fleksibel dan penggabungan struktur kelas tanpa merusak enkapsulasi.',
        readTime: '9 menit',
        keyTakeaways: [
          'Singleton menjamin satu instance tunggal di memori, tetapi waspadai masalah tight coupling dan pengujian unit.',
          'Factory Method mendelegasikan pembuatan objek konkret ke subclass.',
          'Builder memecah konstruksi objek kompleks menjadi langkah bertahap yang bersih.',
          'Adapter menyatukan interface yang tidak cocok; Decorator menambahkan tanggung jawab runtime secara dinamis; Facade membungkus subsistem rumit dengan satu gerbang sederhana.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Pola Builder: Membangun konfigurasi request kompleks
class RequestBuilder {
  private method: string = 'GET';
  private headers: Record<string, string> = {};
  private body?: any;

  setMethod(m: 'GET' | 'POST' | 'PUT') { this.method = m; return this; }
  setHeader(k: string, v: string) { this.headers[k] = v; return this; }
  setBody(b: any) { this.body = b; return this; }
  build() { return { method: this.method, headers: this.headers, body: this.body }; }
}

const req = new RequestBuilder()
  .setMethod('POST')
  .setHeader('Authorization', 'Bearer token_xyz')
  .setBody({ user: 'Rama' })
  .build();`,
          explanation:
            'Pola Builder menyusun konfigurasi objek kompleks secara bertahap dan menghindari telescoping constructor.'
        },
        content: `### 1. Pola Adapter: Jembatan Warisan Sistem
Bayangkan Anda memiliki modul pelaporan lama yang menerima XML, sedangkan library analitik baru hanya mengekspor JSON. Pola Adapter membungkus library JSON dan menerjemahkan outputnya ke XML tanpa perlu memodifikasi library analitik pihak ketiga tersebut.`
      },
      {
        id: '3-3-behavioral-patterns',
        title: '3.3 Pola Desain Behavioral & Dependency Injection',
        summary:
          'Mendistribusikan tanggung jawab interaksi antar objek dengan Strategy, Observer, Command, dan State.',
        readTime: '8 menit',
        keyTakeaways: [
          'Strategy mengenkapsulasi sekelompok algoritma menjadi objek terpisah yang dapat dipertukarkan saat runtime.',
          'Observer mendasari arsitektur reaktif: notifikasi otomatis dari satu Subject ke banyak Observer.',
          'Command mengubah perintah menjadi objek mandiri dengan metode execute() dan undo().',
          'Favor Composition over Inheritance: Komposisi menjaga batas black-box dan lebih adaptif terhadap evolusi kebutuhan.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Pola Strategy untuk Perhitungan Ongkos Kirim
interface ShippingStrategy {
  calculate(weightKg: number): number;
}
class JNEShipping implements ShippingStrategy {
  calculate(w: number) { return w * 10000; }
}
class InstantMotorShipping implements ShippingStrategy {
  calculate(w: number) { return 25000 + w * 2000; }
}

class DeliveryContext {
  constructor(private strategy: ShippingStrategy) {}
  setStrategy(s: ShippingStrategy) { this.strategy = s; }
  getPrice(weight: number) { return this.strategy.calculate(weight); }
}`,
          explanation:
            'Pola Strategy mengisolasi algoritma pengiriman dan memungkinkan pergantian algoritma dinamis saat runtime.'
        },
        content: `### 1. Pola Command untuk Operasi Undo/Redo
Setiap kali pengguna melakukan aksi (seperti memotong teks atau mengubah warna shape), sebuah objek \`Command\` dibuat dan dimasukkan ke dalam riwayat tumpukan (\`undoStack\`). Saat tombol Ctrl+Z ditekan, aplikasi cukup memanggil metode \`undo()\` pada objek teratas tumpukan.`
      }
    ],
    quiz: RPL_QUIZZES['rpl_prinsip_pola_desain']
  },
  {
    id: 'rpl_pengujian_kualitas',
    number: 4,
    title: 'Pengujian Perangkat Lunak, TDD & Metrik Kualitas Kode',
    shortDesc:
      'Metodologi penjaminan mutu: Piramida Pengujian, siklus Red-Green-Refactor TDD, teknik Black-Box (BVA/Equivalence) vs White-Box, Cyclomatic Complexity, dan Mutation Testing.',
    iconName: 'Award',
    sections: [
      {
        id: '4-1-piramida-tdd',
        title: '4.1 Piramida Pengujian & Test-Driven Development (TDD)',
        summary:
          'Distribusi sehat pengujian perangkat lunak dan disiplin menulis tes sebelum implementasi kode.',
        readTime: '9 menit',
        keyTakeaways: [
          'Piramida Pengujian: Unit Test (dasar terbanyak, cepat, murah) -> Integration Test (menengah) -> E2E Test (puncak, sedikit, lambat).',
          'Siklus TDD: Red (tes gagal karena fitur belum ada) -> Green (tulis kode minimum untuk lolos) -> Refactor (optimasi struktur kode tanpa merusak tes).',
          'Pattern AAA (Arrange, Act, Assert) menyusun badan fungsi tes secara bersih dan terstandarisasi.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Contoh Unit Test dengan Pola Arrange-Act-Assert
describe('KalkulatorDiskon', () => {
  it('harus memberikan diskon 10% jika total belanja >= Rp 100.000', () => {
    // 1. Arrange (Persiapkan data input)
    const kalkulator = new KalkulatorDiskon();
    const totalBelanja = 100000;

    // 2. Act (Jalankan fungsi yang diuji)
    const totalAkhir = kalkulator.hitungTotal(totalBelanja);

    // 3. Assert (Verifikasi hasil keluaran)
    expect(totalAkhir).toBe(90000);
  });
});`,
          explanation:
            'Struktur penulisan Unit Test terstandarisasi dengan pola tiga tahap AAA (Arrange, Act, Assert).'
        },
        content: `### 1. Bahaya Ice Cream Cone Anti-Pattern
Jika tim pengembang tidak menulis unit test dan hanya mengandalkan pengujian manual atau automated UI E2E test di lapisan atas:
- Waktu eksekusi pipeline CI membengkak dari 2 menit menjadi 2 jam.
- Tes rentan gagal palsu (*flaky*) akibat kendala jaringan browser.
- Lokasi akar bug sulit dilacak karena ruang lingkup pengujian terlalu lebar.`
      },
      {
        id: '4-2-blackbox-whitebox-techniques',
        title: '4.2 Teknik Black-Box & White-Box Testing Terapan',
        summary:
          'Merancang test cases yang tajam dengan Boundary Value Analysis (BVA), Equivalence Partitioning, dan Statement/Branch Coverage.',
        readTime: '8 menit',
        keyTakeaways: [
          'Equivalence Partitioning membagi input menjadi partisi representatif (valid vs invalid) guna menghindari redundant testing.',
          'Boundary Value Analysis (BVA) menguji nilai di titik ambang ekstrem (min, min+1, batas, max-1, max) tempat mayoritas bug logika bersarang.',
          'Branch Coverage mengukur apakah setiap cabang kondisi `if-else` (true & false) telah diuji secara menyeluruh.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Contoh Kasus BVA: Usia Pendaftaran SIM (17 s.d. 60 tahun)
Partisi Valid: [17 - 60]
Partisi Tidak Valid: [< 17] dan [> 60]

Titik Uji BVA yang Wajib Dibuat:
1. Usia 16 (Tepat di bawah batas bawah -> Harap Ditolak)
2. Usia 17 (Batas bawah minimum -> Harap Diterima)
3. Usia 18 (Tepat di atas batas bawah -> Harap Diterima)
4. Usia 59 (Tepat di bawah batas atas -> Harap Diterima)
5. Usia 60 (Batas atas maksimum -> Harap Diterima)
6. Usia 61 (Tepat di atas batas atas -> Harap Ditolak)`,
          explanation:
            'Pemetaan kasus uji Boundary Value Analysis (BVA) pada titik ambang ekstrem valid dan invalid.'
        },
        content: `### 1. Verifikasi vs Validasi
- **Verification**: *"Are we building the product right?"* Menguji apakah program mematuhi spesifikasi desain teknis.
- **Validation**: *"Are we building the right product?"* Menguji apakah perangkat lunak memecahkan masalah nyata pengguna di lapangan.`
      },
      {
        id: '4-3-cyclomatic-complexity-mocking',
        title: '4.3 Kompleksitas Siklomatis McCabe & Anatomi Test Doubles',
        summary:
          'Mengukur kompleksitas alur kontrol kode dan mengisolasi dependensi dengan Dummy, Stub, Spy, Mock, dan Fake.',
        readTime: '8 menit',
        keyTakeaways: [
          'Kompleksitas Siklomatis McCabe: M = E - N + 2P (atau Jumlah Titik Keputusan + 1). Semakin tinggi nilainya, semakin rawan bug fungsi tersebut.',
          'Stub menyediakan respons data statis (State Verification); Mock memverifikasi apakah fungsi luar dipanggil dengan parameter yang tepat (Behavior Verification).',
          'Mutation Testing mengevaluasi ketangguhan test suite dengan sengaja merusak kode sumber (menyuntikkan mutant).'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Menggunakan Mock untuk Behavior Verification
const mockEmailSender = {
  sendWelcomeEmail: vi.fn() // Spy / Mock fungsi
};

const userService = new UserService(mockEmailSender);
userService.register('rama@example.com');

// Verifikasi perilaku: Apakah email benar-benar dipanggil tepat 1 kali?
expect(mockEmailSender.sendWelcomeEmail).toHaveBeenCalledTimes(1);
expect(mockEmailSender.sendWelcomeEmail).toHaveBeenCalledWith('rama@example.com');`,
          explanation:
            'Verifikasi perilaku interaksi objek (Behavior Verification) menggunakan mock function.'
        },
        content: `### 1. Klasifikasi Test Doubles (Gerard Meszaros)
1. **Dummy**: Objek kosong hanya untuk mengisi parameter fungsi.
2. **Fake**: Implementasi ringan yang berfungsi (misal: InMemoryDatabase).
3. **Stub**: Jawaban instan siap pakai untuk panggilan pengujian.
4. **Spy**: Stub yang mencatat histori pemanggilan fungsi.
5. **Mock**: Objek dengan ekspektasi perilaku ketat yang diverifikasi pada akhir tes.`
      }
    ],
    quiz: RPL_QUIZZES['rpl_pengujian_kualitas']
  },
  {
    id: 'rpl_arsitektur_devops',
    number: 5,
    title: 'Arsitektur Monolith vs Microservices, CI/CD & DevOps',
    shortDesc:
      'Merancang arsitektur sistem skala besar: dekomposisi Microservices, Teorema CAP, orkestrasi transaksi Saga, kontainerisasi Docker/K8s, otomatisasi CI/CD, dan observabilitas telemetri.',
    iconName: 'Network',
    sections: [
      {
        id: '5-1-monolith-microservices-cap',
        title: '5.1 Monolit vs Microservices & Landasan Teorema CAP',
        summary:
          'Memahami trade-off arsitektur terpusat versus sistem terdistribusi, batas konteks domain (DDD), dan implikasi partisi jaringan.',
        readTime: '9 menit',
        keyTakeaways: [
          'Monolit unggul dalam kemudahan debug lokal dan kesederhanaan deployment awal tanpa overhead jaringan antar servis.',
          'Microservices menawarkan skalabilitas tim mandiri, otonomi teknologi, dan ketahanan partisi dengan basis data independen.',
          'Hukum Conway: Struktur arsitektur sistem adalah cerminan dari struktur komunikasi tim dalam organisasi pengembangnya.',
          'Teorema CAP: Pada sistem terdistribusi saat partisi jaringan (P) terjadi, sistem harus memilih antara Konsistensi Mutlak (CP) atau Ketersediaan Tinggi (AP).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Ringkasan Teorema CAP (Brewer's Theorem)
- C (Consistency): Setiap node membaca data versi terbaru yang sama persis.
- A (Availability): Setiap request yang tidak gagal selalu menerima respons sukses non-error.
- P (Partition Tolerance): Sistem tetap beroperasi meski terjadi kabel jaringan putus antar node.

Kenyataan Fisik Jaringan Komputer: Partisi (P) tak terhindarkan!
Pilihan Anda:
- Sistem CP: Menolak transaksi baru demi konsistensi data (contoh: Database Bank).
- Sistem AP: Menerima transaksi meski data di node lain belum tersinkronisasi (contoh: Media Sosial).`,
          explanation:
            'Ringkasan kompromi Teorema CAP dalam menghadapi partisi jaringan pada sistem terdistribusi.'
        },
        content: `### 1. Database per Service Pattern
Aturan fundamental arsitektur Microservices:
Layanan Pembayaran **TIDAK BOLEH** langsung melakukan query SQL ke tabel database Layanan Pengguna!
Setiap interaksi lintas domain harus melewati kontrak API resmi (REST, gRPC, atau Event Stream) guna menjaga batas enkapsulasi domain (*Bounded Context*).`
      },
      {
        id: '5-2-pola-terdistribusi-ketahanan',
        title: '5.2 Pola Ketahanan Terdistribusi: Gateway, Circuit Breaker & Saga',
        summary:
          'Mencegah kegagalan beruntun (cascading failures) dan mengelola transaksi terdistribusi melintasi berbagai layanan.',
        readTime: '8 menit',
        keyTakeaways: [
          'API Gateway menyediakan gerbang tunggal untuk perutean rute, otentikasi JWT, dan rate limiting.',
          'Circuit Breaker (Open, Half-Open, Closed) memutus sementara pemanggilan ke layanan hilir yang lambat guna mencegah konsumsi thread tak terkontrol.',
          'Pola Saga mengoordinasikan transaksi terdistribusi menggunakan transaksi kompensasi pembatalan jika salah satu tahapan gagal.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Alur Transaksi Terdistribusi dengan Kompensasi Saga:
// Langkah 1: Buat Pesanan (Pending)
// Langkah 2: Potong Saldo Dompet -> GAGAL (Saldo Kurang!)
// Kompensasi Otomatis Dijalankan:
// Batalkan Pesanan (Status: Dibatalkan) dan Kembalikan Stok Barang!`,
          explanation:
            'Alur orkestrasi transaksi terdistribusi Saga dengan kompensasi pembatalan otomatis saat kegagalan.'
        },
        content: `### 1. Cara Kerja Status Circuit Breaker
- **Closed**: Aliran lalu lintas normal. Jika rasio error melebihi ambang batas (misal: 50% request timeout), saklar berpindah ke **Open**.
- **Open**: Semua permintaan langsung ditolak seketika dengan fallback error instan tanpa menyentuh server hilir yang sedang sekarat.
- **Half-Open**: Setelah interval waktu uji coba (misal: 30 detik), izinkan sedikit sampel request lewat. Jika berhasil, kembali ke **Closed**; jika gagal, kembali ke **Open**.`
      },
      {
        id: '5-3-devops-cicd-observability',
        title: '5.3 Otomasi CI/CD, Container Docker & Tiga Pilar Observabilitas',
        summary:
          'Pipeline integrasi berkelanjutan, kontainerisasi ringan, strategi deployment tanpa downtime, dan pemantauan sistem produksi.',
        readTime: '9 menit',
        keyTakeaways: [
          'CI mengotomatiskan build dan test pada setiap commit git; CD mengotomatiskan persiapan rilis ke lingkungan staging/produksi.',
          'Container Docker membungkus aplikasi dan dependensinya menjadi satu citra portabel yang berjalan identik di semua lingkungan.',
          'Strategi Rilis: Blue-Green deployment menawarkan zero downtime dan instant rollback; Canary release menyalurkan sebagian kecil persentase lalu lintas nyata.',
          'Tiga Pilar Observabilitas: Metrics (indikator tren kuantitatif), Logs (rekaman kejadian diskrit berwaktu), dan Distributed Traces (perjalanan request antar servis).'
        ],
        codeSnippet: {
          language: 'yaml',
          code: `# Contoh Pipeline CI Otomatis (.github/workflows/ci.yml)
name: Pipeline CI Produksi
on: [push, pull_request]

jobs:
  test_and_build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Pasang Node.js Runtime
        uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - name: Jalankan Unit & Integration Test
        run: npm test -- --coverage
      - name: Build Aplikasi Produksi
        run: npm run build`,
          explanation:
            'Definisi deklaratif pipeline Continuous Integration otomatis yang memvalidasi tes dan build.'
        },
        content: `### 1. Metrik Kunci Kinerja DevOps (DORA Metrics)
1. **Deployment Frequency**: Seberapa sering kode sukses di-deploy ke produksi.
2. **Lead Time for Changes**: Waktu dari commit kode pertama hingga berjalan di produksi.
3. **Change Failure Rate**: Persentase deployment yang memicu kegagalan di produksi.
4. **Time to Restore Service (MTTR)**: Waktu pemulihan sistem saat insiden produksi terjadi.`
      }
    ],
    quiz: RPL_QUIZZES['rpl_arsitektur_devops']
  }
];

export const RPL_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'SDLC & Estimasi Agile',
    name: 'Formula Estimasi Kapasitas Velocity',
    formula: '\\text{Kapasitas Sprint} = \\frac{1}{N} \\sum_{i=1}^N \\text{Velocity}_i, \\qquad \\text{Jumlah Sprint} = \\left\\lceil \\frac{\\text{Sisa Backlog}}{\\text{Velocity Rata-rata}} \\right\\rceil',
    notes: 'Digunakan oleh Scrum Master dan PO untuk memprediksi tanggal rilis produk secara objektif.'
  },
  {
    category: 'Prinsip Arsitektur',
    name: 'Aturan SOLID Robert C. Martin',
    formula: '\\text{SRP (1 Alasan)} + \\text{OCP (Ext)} + \\text{LSP (Substitusi)} + \\text{ISP (Kecil)} + \\text{DIP (Abstraksi)}',
    notes: 'Kaidah fundamental desain perangkat lunak berorientasi objek yang bersih dan tahan perubahan.'
  },
  {
    category: 'Kualitas & Pengujian',
    name: 'Formula Kompleksitas Siklomatis McCabe',
    formula: 'M = E - N + 2P \\qquad \\text{atau} \\qquad M = \\pi + 1',
    notes: 'E = Jumlah Edge, N = Simpul Node, P = Komponen terhubung, pi = Titik keputusan kondisional (if/for).'
  },
  {
    category: 'Kualitas & Pengujian',
    name: 'Formula Cakupan Pengujian (Test Coverage)',
    formula: '\\text{Coverage} = \\frac{\\text{Baris Kode/Cabang yang Teruji}}{\\text{Total Baris/Cabang Kode}} \\times 100\\%',
    notes: 'Metrik pelengkap verifikasi, disarankan minimal 80% pada logika bisnis kritis.'
  },
  {
    category: 'Sistem Terdistribusi',
    name: 'Teorema CAP (Brewer)',
    formula: '\\text{Jika } P = \\text{True} \\implies \\text{Pilih antara } C \\; (\\text{Konsistensi}) \\; \\lor \\; A \\; (\\text{Ketersediaan})',
    notes: 'Hukum fisika jaringan: tidak mungkin menjamin konsistensi data instan sekaligus 100% availability saat partisi terjadi.'
  },
  {
    category: 'DevOps & Keandalan (SRE)',
    name: 'Hierarki Service Level & Anggaran Error',
    formula: '\\text{SLI} \\le \\text{SLO} < \\text{SLA}, \\qquad \\text{Error Budget} = 100\\% - \\text{SLO}',
    notes: 'SLI adalah metrik riil; SLO adalah target rekayasa; SLA adalah perjanjian hukum dengan denda finansial.'
  },
  {
    category: 'DevOps & Metrik Rilis',
    name: 'Mean Time to Repair (MTTR)',
    formula: '\\text{MTTR} = \\frac{\\sum \\text{Total Waktu Downtime}}{\\text{Jumlah Insiden Kegagalan}}',
    notes: 'Salah satu dari 4 metrik DORA utama pengukur ketahanan operasional sistem perangkat lunak.'
  }
];
