import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { OOP_QUIZZES } from './quizzesOOP';

export const OOP_MODULES: ModuleData[] = [
  {
    id: 'oop_kelas_objek_konstruktor',
    number: 1,
    title: 'Paradigma OOP, Kelas, Objek, Konstruktor & Siklus Hidup Objek',
    shortDesc:
      'Fondasi pemrograman berorientasi objek: perbedaan kelas (blueprint) vs objek (instance), alokasi memori Stack vs Heap, mekanisme konstruktor overloading, delegasi chaining, idiom RAII, dan manajemen memori Garbage Collection.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-kelas-vs-objek-memori',
        title: '1.1 Kelas vs Objek & Alokasi Memori (Stack vs Heap)',
        summary:
          'Memahami bagaimana kelas sebagai tipe data bentukan diubah menjadi objek nyata yang menempati ruang memori saat runtime.',
        readTime: '8 menit',
        keyTakeaways: [
          'Kelas adalah cetak biru (blueprint) abstrak; Objek adalah instansiasi konkret di memori dengan identitas dan status mandiri.',
          'Objek di Stack dialokasikan sangat cepat dengan siklus hidup otomatis sesuai scope; Objek di Heap dialokasikan dinamis dan siklus hidupnya dikelola manual atau oleh Garbage Collector.',
          'Pointer referensi (reference variable) di stack menunjuk ke badan objek nyata di dalam memori heap.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <iostream>
#include <string>

class RekeningBank {
public:
    std::string pemilik;
    double saldo;

    // Konstruktor
    RekeningBank(std::string p, double s) : pemilik(p), saldo(s) {}
};

int main() {
    // 1. Alokasi di Stack (Otomatis dibebaskan saat fungsi main selesai)
    RekeningBank akunStack("Rama", 500000);

    // 2. Alokasi di Heap (Dikelola manual menggunakan pointer)
    RekeningBank* akunHeap = new RekeningBank("Budi", 1000000);

    std::cout << "Akun Heap Pemilik: " << akunHeap->pemilik << "\\n";

    delete akunHeap; // Wajib dibebaskan untuk mencegah memory leak!
    return 0;
}`,
          explanation:
            'Objek akunStack berada di frame memori stack, sedangkan akunHeap berada di memori heap yang dialokasikan secara dinamis.'
        },
        content: `### 1. Pergeseran Paradigma: Prosedural ke Berorientasi Objek
Pada paradigma prosedural, data (struktur struct) dan fungsi (prosedur) terpisah secara independen. Fungsi memanipulasi data yang dilewatkan dari luar.
Pada paradigma berorientasi objek, **Data dan Perilaku (Metode)** disatukan ke dalam satu kesatuan terpadu yang disebut **Objek**. Objek memegang kendali penuh atas integritas datanya sendiri.

---

### 2. Anatomi Alokasi Objek di Memori
\`\`\`
Memori Stack:                       Memori Heap:
┌─────────────────────────┐         ┌─────────────────────────┐
│ akunHeap (Pointer 8B)   │ ──────> │ RekeningBank Instance   │
│ [Alamat: 0x7ffd0001]    │         │ - pemilik: "Budi"       │
│ akunStack (Data Penuh)  │         │ - saldo: 1000000.0      │
│ - pemilik: "Rama"       │         └─────────────────────────┘
│ - saldo: 500000.0       │
└─────────────────────────┘
\`\`\``
      },
      {
        id: '1-2-konstruktor-chaining-invarian',
        title: '1.2 Konstruktor, Overloading, Chaining & Invarian Kelas',
        summary:
          'Menjamin kondisi awal objek selalu sah dengan konstruktor, delegasi konstruktor berantai, dan pemeliharaan aturan invarian.',
        readTime: '8 menit',
        keyTakeaways: [
          'Konstruktor bertugas menginisialisasi atribut objek dan menjamin invarian kelas terpenuhi sejak detik pertama.',
          'Constructor Overloading menyediakan banyak variasi pembuatan objek berdasarkan perbedaan parameter.',
          'Constructor Chaining (this(...)) mendelegasikan inisialisasi antar konstruktor guna mencegah duplikasi kode.',
          'Invarian Kelas adalah aturan integritas (misal: saldo tidak boleh negatif) yang harus selalu benar sebelum dan sesudah setiap metode publik.'
        ],
        codeSnippet: {
          language: 'java',
          code: `public class Produk {
    private String sku;
    private String nama;
    private double harga;

    // Konstruktor Master (Lengkap)
    public Produk(String sku, String nama, double harga) {
        if (harga < 0) throw new IllegalArgumentException("Harga tidak boleh negatif!");
        this.sku = sku;
        this.nama = nama;
        this.harga = harga;
    }

    // Konstruktor Delegasi (Chaining dengan nilai default)
    public Produk(String sku, String nama) {
        this(sku, nama, 0.0); // Memanggil konstruktor master
    }
}`,
          explanation:
            'Dengan Constructor Chaining via this(...), logika validasi invarian harga >= 0 terpusat di satu konstruktor tunggal.'
        },
        content: `### 1. Default Constructor vs User-Defined Constructor
Jika Anda tidak mendeklarasikan konstruktor apapun di dalam kelas, compiler secara otomatis menyediakan konstruktor tanpa parameter (*Default Constructor*).
Namun, jika Anda mendeklarasikan **minimal satu** konstruktor kustom berparameter, compiler **tidak akan lagi** membuat default constructor otomatis. Pengembang harus mendefinisikannya secara eksplisit jika tetap membutuhkannya.`
      },
      {
        id: '1-3-raii-destruktor-gc',
        title: '1.3 Siklus Hidup Objek, RAII C++ & Garbage Collection',
        summary:
          'Mengelola siklus hidup sumber daya: pembersihan deterministik RAII vs otomasi pelacakan grafik Garbage Collector.',
        readTime: '9 menit',
        keyTakeaways: [
          'Idiom RAII (Resource Acquisition Is Initialization) dalam C++: Sumber daya diikat pada masa hidup objek di stack; destruktor pasti dipanggil saat scope berakhir.',
          'Rule of Three (C++): Jika membutuhkan destruktor kustom, Anda wajib mengimplementasikan Copy Constructor dan Copy Assignment Operator.',
          'Garbage Collector (Java/C#) secara otomatis mereklamasi memori dari objek heap yang tidak lagi terjangkau (unreachable) dari GC Roots.',
          'Shallow Copy hanya menyalin pointer; Deep Copy menduplikasi seluruh struktur hierarki objek hingga ke daun terdalam.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `#include <fstream>
#include <string>

// Pola RAII: Handle berkas dijamin tertutup bahkan jika terjadi exception!
class FileHandler {
private:
    std::ofstream file;
public:
    FileHandler(const std::string& filename) {
        file.open(filename); // Akuisisi sumber daya di konstruktor
    }
    void writeData(const std::string& data) {
        file << data;
    }
    ~FileHandler() {
        if (file.is_open()) {
            file.close(); // Pelepasan sumber daya pasti di destruktor!
        }
    }
};`,
          explanation:
            'Saat objek FileHandler keluar dari kurung kurawal fungsi, destruktor ~FileHandler() otomatis dipanggil oleh CPU untuk menutup berkas secara aman.'
        },
        content: `### 1. Bagaimana Garbage Collector Menemukan Objek Mati?
Alih-alih sekadar Reference Counting yang rentan terhadap kebocoran referensi melingkar (*circular references*), Garbage Collector modern menggunakan algoritma **Tracing Garbage Collection (Mark-and-Sweep)**:
1. **Fase Mark**: Memulai penelusuran dari simpul akar (*GC Roots*: variabel lokal di thread stack, variabel statis global). Semua objek yang dapat dijangkau ditandai sebagai *Alive*.
2. **Fase Sweep**: Memindai seluruh heap; blok memori dari objek yang tidak memiliki tanda *Alive* direklamasi kembali ke daftar memori bebas.`
      }
    ],
    quiz: OOP_QUIZZES['oop_kelas_objek_konstruktor']
  },
  {
    id: 'oop_enkapsulasi_hiding',
    number: 2,
    title: 'Enkapsulasi, Information Hiding, Access Modifiers & Immutability',
    shortDesc:
      'Proteksi integritas status internal: prinsip Information Hiding David Parnas, granularitas penentu akses (public, private, protected), perancangan objek Immutable tahan-thread, Law of Demeter, serta pemodelan Rich Domain Model.',
    iconName: 'Layers',
    sections: [
      {
        id: '2-1-enkapsulasi-access-modifiers',
        title: '2.1 Enkapsulasi, Information Hiding & Hak Akses',
        summary:
          'Membungkus data dan metode menjadi satu kesatuan serta menyembunyikan detail perancangan internal di balik kontrak publik yang stabil.',
        readTime: '8 menit',
        keyTakeaways: [
          'Enkapsulasi menyatukan data dan metode serta membatasi akses langsung dari pihak luar.',
          'Information Hiding (David Parnas) melindungi arsitektur: perubahan struktur data internal tidak akan merusak kode pemanggil luar.',
          'Penentu Akses: public (universal), private (hanya kelas sendiri), protected (kelas dan subclass turunan), package/internal (dalam namespace/paket yang sama).',
          'Atribut public adalah code smell berbahaya karena menghilangkan kendali validasi logika bisnis kelas.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `class DompetDigital {
  // Private field native ES2022 (#)
  #saldo: number = 0;

  constructor(saldoAwal: number) {
    if (saldoAwal < 0) throw new Error("Saldo awal tidak boleh minus");
    this.#saldo = saldoAwal;
  }

  // Mutator terkontrol dengan validasi ketat
  public tarikDana(jumlah: number): boolean {
    if (jumlah <= 0 || jumlah > this.#saldo) {
      return false; // Transaksi ditolak secara sah
    }
    this.#saldo -= jumlah;
    return true;
  }

  // Aksesor read-only
  public get saldo(): number {
    return this.#saldo;
  }
}`,
          explanation:
            'Pihak luar tidak dapat menulis dompet.#saldo = -999999 karena engine JavaScript menolak akses langsung ke field privat bertanda #.'
        },
        content: `### 1. Mengapa Atribut Public Merusak Arsitektur?
Jika Anda memiliki:
\`\`\`java
public class User {
    public int usia;
}
\`\`\`
Jika 50 file kode di aplikasi Anda menulis \`user.usia = -5;\`, aplikasi Anda akan mengalami kekacauan data. Lebih buruk lagi, jika suatu hari Anda ingin mengubah cara penyimpanan usia menjadi \`LocalDate tanggalLahir\`, Anda terpaksa merombak 50 file kode yang mengakses field \`usia\` secara langsung!`
      },
      {
        id: '2-2-getter-setter-reference-leak',
        title: '2.2 Getter/Setter Terkontrol & Pencegahan Reference Leak',
        summary:
          'Menghindari jebakan kebocoran referensi pada objek mutable dengan teknik Defensive Copying.',
        readTime: '8 menit',
        keyTakeaways: [
          'Getter dan Setter menyediakan titik inspeksi untuk audit, validasi, dan komputasi dinamis on-the-fly.',
          'Reference Leak: Getter yang mengembalikan pointer objek internal mutable memungkinkan pihak luar mengubah isi objek secara sembunyi-sembunyi.',
          'Defensive Copying: Selalu kembalikan salinan (clone) atau pembungkus read-only dari objek internal mutable.'
        ],
        codeSnippet: {
          language: 'java',
          code: `import java.util.Date;

public final class CatatanAudit {
    private final Date timestamp;

    public CatatanAudit(Date waktu) {
        // Defensive copy pada saat konstruksi!
        this.timestamp = new Date(waktu.getTime());
    }

    public Date getTimestamp() {
        // Defensive copy pada saat getter! (Mencegah Reference Leak)
        return new Date(this.timestamp.getTime());
    }
}`,
          explanation:
            'Jika getter mengembalikan this.timestamp secara langsung, pemanggil luar bisa memanggil .setTime(0) dan merusak catatan waktu audit internal!'
        },
        content: `### 1. Prinsip "Tell, Don't Ask"
Alih-alih meminta data keluar dari objek lalu memanipulasinya di luar:
\`\`\`java
// SALAH (Ask, Then Act):
if (akun.getSaldo() >= 100000) {
    akun.setSaldo(akun.getSaldo() - 100000);
}

// BENAR (Tell):
akun.debit(100000);
\`\`\`
Biarkan objek yang memiliki data yang bertanggung jawab menjalankan operasinya sendiri!`
      },
      {
        id: '2-3-immutability-law-of-demeter',
        title: '2.3 Objek Immutable, Law of Demeter & Rich Domain Model',
        summary:
          'Menciptakan objek tanpa status berubah (thread-safe by design) dan menerapkan aturan Hukum Demeter pada desain domain.',
        readTime: '9 menit',
        keyTakeaways: [
          'Objek Immutable (seperti String) statusnya tidak pernah berubah setelah dibuat; bebas dari race condition tanpa perlu mutex synchronization.',
          'Law of Demeter (Prinsip Pengetahuan Minimal): Hindari pemanggilan berantai getA().getB().getC().action() yang menciptakan kopling kaku.',
          'Anemic Domain Model adalah anti-pattern di mana kelas hanya berisi atribut dan getter/setter kosong tanpa logika bisnis.',
          'Rich Domain Model menyatukan status dan logika validasi bisnis ke dalam entitas domain yang kohesif.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Value Object Immutable: Nilai Uang (Domain-Driven Design)
class Money {
  constructor(public readonly amount: number, public readonly currency: string) {
    Object.freeze(this); // Membekukan mutasi objek runtime
  }

  // Operasi menghasilkan instance BARU, tidak memutasi instance saat ini
  public add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error("Mata uang tidak cocok!");
    }
    return new Money(this.amount + other.amount, this.currency);
  }
}`,
          explanation:
            'Objek Money tidak pernah berubah nilainya. Operasi aritmatika selalu menghasilkan objek Money baru yang aman dibagikan ke banyak thread.'
        },
        content: `### 1. Hukum Demeter (Law of Demeter)
Prinsip ini melarang *"berbicara dengan orang asing"*:
Sebuah metode $M$ dari objek $O$ hanya boleh memanggil metode dari:
1. Objek $O$ itu sendiri.
2. Parameter yang diterima oleh $M$.
3. Objek baru yang diciptakan di dalam $M$.
4. Objek anggota atribut langsung milik $O$.

Hindari *"Train Wrecks"*: \`order.getCustomer().getAddress().getCity().getZipCode()\`. Jika struktur perantara berubah, seluruh baris kode tersebut akan hancur.`
      }
    ],
    quiz: OOP_QUIZZES['oop_enkapsulasi_hiding']
  },
  {
    id: 'oop_pewarisan_komposisi',
    number: 3,
    title: 'Pewarisan (Inheritance), Hierarki Kelas & Komposisi Objek',
    shortDesc:
      'Membangun taksonomi hierarki kelas: relasi IS-A vs HAS-A, siklus inisialisasi super-constructor, mitigasi Diamond Problem pada C++, bahaya Fragile Base Class, serta kaidah arsitektur Favor Composition over Inheritance.',
    iconName: 'Code',
    sections: [
      {
        id: '3-1-relasi-is-a-super-destruktor',
        title: '3.1 Relasi IS-A, Konstruktor Super & Destruktor Virtual',
        summary:
          'Mekanika pewarisan kelas, urutan pemanggilan konstruktor/destruktor, dan pentingnya destruktor virtual pada kelas dasar.',
        readTime: '9 menit',
        keyTakeaways: [
          'Pewarisan memodelkan hubungan taksonomi IS-A (misal: Truk adalah sebuah Kendaraan).',
          'Urutan Konstruksi: Konstruktor induk selesai dieksekusi terlebih dahulu, baru kemudian konstruktor anak.',
          'Urutan Destruksi (C++): Destruktor anak dieksekusi terlebih dahulu (LIFO), baru kemudian destruktor induk.',
          'Jika sebuah kelas dirancang untuk diwarisi polimorfik di C++, destruktornya WAJIB dideklarasikan `virtual` untuk mencegah memory leak saat penghapusan via base pointer.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `class Base {
public:
    Base() { std::cout << "1. Konstruktor Base\\n"; }
    // Destruktor Wajib Virtual!
    virtual ~Base() { std::cout << "4. Destruktor Base\\n"; }
};

class Derived : public Base {
    int* buffer;
public:
    Derived() {
        buffer = new int[100];
        std::cout << "2. Konstruktor Derived\\n";
    }
    ~Derived() override {
        delete[] buffer;
        std::cout << "3. Destruktor Derived (Memori Bersih)\\n";
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // Memanggil ~Derived() lalu ~Base() secara berurutan berkat virtual!
    return 0;
}`,
          explanation:
            'Jika ~Base() tidak virtual, delete ptr hanya akan memanggil ~Base(); destruktor ~Derived() dilewati dan buffer mengalami memory leak!'
        },
        content: `### 1. Inisialisasi Konstruktor Berantai (Super Constructor)
Ketika kelas anak diciptakan:
\`\`\`java
public class Manager extends Employee {
    public Manager(String name, double salary, int teamSize) {
        super(name, salary); // WAJIB berada di baris pertama konstruktor!
        this.teamSize = teamSize;
    }
}
\`\`\`
Kelas anak tidak dapat menginisialisasi atribut privat yang dimilikinya sebelum fondasi kelas induk selesai dibangun secara sah.`
      },
      {
        id: '3-2-diamond-problem-virtual-base',
        title: '3.2 Diamond Problem pada Multiple Inheritance & Virtual Base',
        summary:
          'Mengapa multiple class inheritance memicu ambiguitas jalur pewarisan dan bagaimana C++ menyelesaikannya dengan Pewarisan Virtual.',
        readTime: '8 menit',
        keyTakeaways: [
          'Diamond Problem terjadi ketika kelas D mewarisi B dan C, yang keduanya sama-sama turunan dari kelas A (jalur belah ketupat).',
          'Tanpa virtual inheritance, objek D memiliki 2 salinan terpisah dari sub-objek A, menimbulkan ambiguitas pemanggilan atribut.',
          'Pewarisan Virtual (`virtual public A`) memastikan hanya ada 1 instance tunggal dari kelas A yang dibagi bersama.',
          'Java dan C# melarang multiple class inheritance secara sengaja guna mengeliminasi kerumitan memori Diamond Problem.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `class Device {
public:
    int id;
};

// Gunakan virtual inheritance untuk meniadakan duplikasi di daun hierarki
class Scanner : virtual public Device {};
class Printer : virtual public Device {};

// Copier hanya memiliki TEPAT SATU salinan sub-objek Device di memori
class Copier : public Scanner, public Printer {};

int main() {
    Copier c;
    c.id = 101; // Tidak ambigu! Berkat virtual inheritance
    return 0;
}`,
          explanation:
            'Tanpa kata kunci virtual pada Scanner dan Printer, baris c.id akan memicu compiler error: "request for member id is ambiguous".'
        },
        content: `### 1. Solusi Bersih di Java: Multiple Interface Implementation
Meskipun melarang pewarisan berganda pada kelas implementasi (*Multiple Class Inheritance*), Java mengizinkan sebuah kelas mengimplementasikan banyak antarmuka (*Multiple Interface Realization*):
\`\`\`java
public class Smartphone implements PhoneCall, Camera, InternetBrowser {
    // Memenuhi 3 kontrak peran sekaligus tanpa ambiguitas state memori
}
\`\`\``
      },
      {
        id: '3-3-favor-composition-fragile-base',
        title: '3.3 Favor Composition Over Inheritance & Fragile Base Class',
        summary:
          'Menganalisis mengapa komposisi (HAS-A) lebih unggul dibanding hierarki pewarisan kaku (IS-A) dalam arsitektur perangkat lunak modern.',
        readTime: '9 menit',
        keyTakeaways: [
          'Fragile Base Class: Modifikasi internal pada kelas induk dapat merusak perilaku kelas anak secara tidak sengaja karena tight coupling.',
          'Pewarisan bersifat White-Box Reuse (mengekspos detail implementasi); Komposisi bersifat Black-Box Reuse (hanya berinteraksi lewat antarmuka).',
          'Komposisi memungkinkan perubahan perilaku polimorfik secara dinamis pada saat runtime (misal: mengganti strategi algoritma).',
          'Aturan praktis: Gunakan pewarisan hanya jika relasi IS-A berlaku mutlak seumur hidup dan memenuhi Prinsip Substitusi Liskov (LSP).'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// PENDEKATAN KOMPOSISI LEBIH UNGGUL:
interface FlyingBehavior {
  fly(): void;
}
class JetFlying implements FlyingBehavior {
  fly() { console.log("Terbang supersonik dengan roket jet!"); }
}
class NoFlying implements FlyingBehavior {
  fly() { console.log("Tidak dapat terbang."); }
}

class RobotHero {
  // HAS-A relasi (Perilaku dapat dipertukarkan saat runtime!)
  constructor(private flyer: FlyingBehavior) {}

  setFlyer(newFlyer: FlyingBehavior) {
    this.flyer = newFlyer;
  }
  executeFly() {
    this.flyer.fly();
  }
}`,
          explanation:
            'RobotHero tidak perlu mewarisi kelas JetRobot yang kaku. Perilaku terbangnya dapat diganti seketika saat runtime via komposisi objek.'
        },
        content: `### 1. Tragedi Fragile Base Class (Contoh Kasus Joshua Bloch)
Bayangkan kelas induk \`CustomHashSet\` memiliki metode \`add()\` dan \`addAll()\`, di mana \`addAll()\` memanggil \`add()\` secara internal.
Jika kelas anak meng-override kedua metode tersebut untuk menghitung total elemen yang ditambahkan, pemanggilan \`addAll(3_elemen)\` akan menghitung elemen **dua kali lipat (6 elemen)** karena counter dinaikkan di \`addAll()\` anak DAN di setiap pemanggilan \`add()\` anak!
Inilah bahaya keterikatan implisit pewarisan implementasi.`
      }
    ],
    quiz: OOP_QUIZZES['oop_pewarisan_komposisi']
  },
  {
    id: 'oop_polimorfisme_vtable',
    number: 4,
    title: 'Polimorfisme Statis vs Dinamis & Mekanisme Internal VTable',
    shortDesc:
      'Eksplorasi mendalam polimorfisme: binding waktu kompilasi (overloading/generics) vs waktu runtime (virtual methods), arsitektur memori VTable & VPtr, indirect dispatch call, RTTI downcasting, serta teknik devirtualization compiler.',
    iconName: 'Award',
    sections: [
      {
        id: '4-1-klasifikasi-polimorfisme',
        title: '4.1 Spektrum Polimorfisme: Ad-hoc, Parametrik & Subtyping',
        summary:
          'Klasifikasi teoritis Christopher Strachey: Function Overloading, Generics/Templates, dan Pewarisan Dinamis.',
        readTime: '8 menit',
        keyTakeaways: [
          'Ad-hoc Polymorphism: Function Overloading & Operator Overloading (algoritma berbeda untuk tipe berbeda, diselesaikan saat compile-time).',
          'Parametric Polymorphism: Generics / Templates (algoritma yang sama persis dieksekusi untuk berbagai tipe data dengan jaminan type-safety).',
          'Subtyping (Inclusion Polymorphism): dynamic dispatch di mana referensi kelas dasar mengeksekusi metode spesifik subclass saat runtime.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `// 1. Ad-hoc (Function Overloading - Compile Time)
int tambah(int a, int b) { return a + b; }
std::string tambah(std::string a, std::string b) { return a + b; }

// 2. Parametric (Templates - Compile Time Zero-Overhead)
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// 3. Subtyping (Dynamic Dispatch via Virtual Method - Runtime)
class Hewan {
public:
    virtual void bersuara() = 0; // Pure virtual
};`,
          explanation:
            'Tiga manifestasi polimorfisme dalam C++ yang melayani tujuan arsitektural yang berbeda.'
        },
        content: `### 1. Early Binding vs Late Binding
- **Early Binding (Statis)**: Alamat fungsi di-resolve secara langsung oleh compiler/linker menjadi instruksi \`CALL <alamat_tetap>\`. Sangat cepat dan dapat di-inline langsung ke dalam badan pemanggil.
- **Late Binding (Dinamis)**: Alamat fungsi baru dicari saat program berjalan melalui pointer objek nyata. Memungkinkan penambahan plugin atau kelas baru tanpa mengompilasi ulang modul utama.`
      },
      {
        id: '4-2-anatomi-vtable-vptr',
        title: '4.2 Mekanisme Tingkat Rendah: VTable, VPtr & Dynamic Dispatch',
        summary:
          'Melihat bagaimana prosesor mengeksekusi fungsi virtual melalui Virtual Method Table di segmen memori read-only.',
        readTime: '9 menit',
        keyTakeaways: [
          'VTable (Virtual Table) adalah larik penunjuk fungsi (array of function pointers) statis per-kelas yang dibuat compiler.',
          'VPtr (Virtual Table Pointer) adalah pointer tersembunyi di dalam setiap instance objek yang menunjuk ke VTable kelasnya.',
          'Hanya ada TEPAT SATU tabel VTable di memori per-kelas, terlepas dari ada berapapun juta objek yang diinstansiasi.',
          'Pemanggilan fungsi virtual membutuhkan indirect memory dereference: `call *(vptr[index])`, memiliki sedikit penalti CPU dan cache-miss.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Representasi Memori Objek dengan Fungsi Virtual:
Instance Objek di Heap:
┌─────────────────────────┐
│ vptr (8 byte pointer)   │ ───────┐
│ atribut x: 10           │        │
│ atribut y: 20           │        │
└─────────────────────────┘        │
                                   ▼
VTable Kelas di Memori .rodata:
┌───────────────────────────────────┐
│ Indeks 0: &Derived::suara()       │ ───> Alamat Kode Mesin Derived::suara()
│ Indeks 1: &Derived::~Derived()    │ ───> Alamat Kode Mesin Destruktor
└───────────────────────────────────┘`,
          explanation: 'Ilustrasi tata letak memori objek: pointer vptr menunjuk ke tabel larik function pointer VTable di segmen .rodata.'
        },
        content: `### 1. Masalah Object Slicing
Dalam C++, jika Anda menulis:
\`\`\`cpp
Base b = derivedObj; // Disalin BY VALUE!
b.suara();
\`\`\`
Hanya atribut porsi \`Base\` yang disalin; \`vptr\` diatur kembali ke VTable milik \`Base\`! Akibatnya identitas polimorfik derived terpotong hilang (*sliced*).
Untuk menjaga late binding polimorfik, Anda **WAJIB** menggunakan pointer (\`Base*\`) atau referensi (\`Base&\`).`
      },
      {
        id: '4-3-pure-virtual-rtti-devirtualization',
        title: '4.3 Pure Virtual Function, RTTI & Devirtualization',
        summary:
          'Mendeklarasikan antarmuka murni dengan pure virtual, mekanisme typeid/dynamic_cast, dan optimasi compiler devirtualization.',
        readTime: '8 menit',
        keyTakeaways: [
          'Pure Virtual Function (`virtual void f() = 0;`) menjadikan kelas sebagai Abstract Class yang tidak dapat diinstansiasi.',
          'RTTI (Run-Time Type Information) menanamkan metadata tipe pada VTable, mendukung `dynamic_cast` yang aman pada downcasting hierarki.',
          'Devirtualization: Jika compiler dapat membuktikan tipe objek nyata saat kompilasi (misal ditandai `final`), indirect call via VTable diganti direct call berkecepatan tinggi.'
        ],
        codeSnippet: {
          language: 'cpp',
          code: `class Shape {
public:
    virtual void draw() = 0; // Pure Virtual Function
    virtual ~Shape() = default;
};

class Circle final : public Shape {
public:
    void draw() override {
        // Implementasi konkret
    }
};

void renderFast(Circle& c) {
    // Compiler tahu pasti c bertipe Circle (karena final):
    // DEVIRTUALIZATION dilakukan: VTable di-bypass, fungsi di-inline langsung!
    c.draw();
}`,
          explanation:
            'Kata kunci final memberi petunjuk berharga bagi optimizer compiler untuk memangkas overhead pemanggilan virtual.'
        },
        content: `### 1. Biaya Performa dynamic_cast
\`dynamic_cast<SubClass*>(basePtr)\` melakukan traversal grafik warisan tipe saat runtime. Pada hierarki yang kompleks dan dalam, hal ini memerlukan kalkulasi pencocokan string nama tipe atau tabel offset, sehingga jauh lebih lambat dibanding static cast biasa.`
      }
    ],
    quiz: OOP_QUIZZES['oop_polimorfisme_vtable']
  },
  {
    id: 'oop_abstraksi_interface',
    number: 5,
    title: 'Abstraksi Tingkat Tinggi, Abstract Class & Interface Kontrak',
    shortDesc:
      'Pilar tertinggi desain arsitektur OOP: mereduksi beban kognitif via abstraksi, perbandingan Abstract Class vs Interface murni, prinsip Program to an Interface, Loose Coupling, Dependency Injection, serta pengujian terisolasi menggunakan Test Doubles (Mocking).',
    iconName: 'Network',
    sections: [
      {
        id: '5-1-pilar-abstraksi-kognitif',
        title: '5.1 Pilar Abstraksi & Penaklukan Kompleksitas Sistem',
        summary:
          'Bagaimana abstraksi menyaring detail teknis yang tidak relevan agar arsitek dapat bernalar pada tingkat sistem skala besar.',
        readTime: '8 menit',
        keyTakeaways: [
          'Abstraksi menyembunyikan kompleksitas mikro dan hanya menyajikan karakteristik serta operasi penting bagi pengguna.',
          'Mengatasi batas kognitif manusia: kita tidak dapat mengingat miliaran instruksi CPU, tetapi kita dapat memahami interaksi antarmuka tingkat tinggi.',
          'Abstraksi memisahkan kontrak fungsional ("APA yang dilakukan sistem") dari implementasi teknis ("BAGAIMANA sistem melakukannya").'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Contoh Lapisan Abstraksi Sistem Pembayaran:
Tingkat Abstraksi Tinggi (Kode Bisnis):
paymentProcessor.charge(order.total);

Lapisan Abstraksi Menengah (Adapter Gateway):
http.post("https://api.bank.com/v1/charge", payload);

Lapisan Abstraksi Rendah (OS / Hardware):
Buka soket TCP port 443 -> Handshake TLS -> Kirim paket IP melalui kartu jaringan Ethernet.`,
          explanation: 'Tingkatan spektrum abstraksi dari logika bisnis hingga implementasi jaringan tingkat rendah.'
        },
        content: `### 1. Abstraksi vs Enkapsulasi
- **Enkapsulasi**: Mekanisme pembungkusan data dan penyembunyian status internal (*Information Hiding*) untuk melindungi integritas objek.
- **Abstraksi**: Proses konseptual pemilihan fitur esensial dari suatu entitas (*Interface Design*) untuk menyederhanakan cara interaksi dunia luar dengannya.`
      },
      {
        id: '5-2-abstract-class-vs-interface',
        title: '5.2 Abstract Class vs Interface Kontrak Formal',
        summary:
          'Kapan menggunakan Abstract Class untuk berbagi kode parsial versus Interface untuk mendefinisikan kontrak peran murni.',
        readTime: '9 menit',
        keyTakeaways: [
          'Abstract Class dapat memiliki status field instance dan metode konkret bawaan; hanya mendukung pewarisan tunggal (single inheritance).',
          'Interface adalah kontrak perilaku formal murni tanpa status anggota instance; mendukung implementasi jamak (multiple interfaces).',
          'Gunakan Abstract Class untuk hierarki taksonomi keluarga yang erat dengan kode dasar yang ingin dipakai bersama.',
          'Gunakan Interface untuk mendefinisikan kemampuan atau peran lepas (CAN-DO relasi) lintas hierarki yang tidak berhubungan.'
        ],
        codeSnippet: {
          language: 'java',
          code: `// Interface Kontrak Peran (Bisa diimplementasikan kelas apa saja)
public interface Flyable {
    void fly();
}

// Abstract Class Keluarga Taksonomi (Berbagi kode dan atribut status)
public abstract class Bird {
    protected String species;
    public Bird(String species) { this.species = species; }
    public void layEgg() { System.out.println("Bertelur..."); } // Kode bersama
}

// Elang adalah Burung (IS-A) dan dapat Terbang (CAN-DO)
public class Eagle extends Bird implements Flyable {
    public Eagle() { super("Aquila chrysaetos"); }
    @Override
    public void fly() { System.out.println("Terbang membumbung tinggi."); }
}`,
          explanation: 'Penerapan kelas abstrak Bird untuk kode bersama dan antarmuka Flyable untuk kontrak peran lepas.'
        },
        content: `### 1. Pola Skeletal Implementation
Pustaka profesional (seperti Java Collections Framework) menggabungkan keduanya:
- Antarmuka \`List<E>\` mendefinisikan kontrak API lengkap.
- Kelas abstrak \`AbstractList<E>\` menyediakan implementasi dasar default untuk 80% metode umum.
- Pengembang cukup mewarisi \`AbstractList\` dan hanya perlu mengimplementasikan \`get()\` dan \`size()\`, menghemat penulisan puluhan metode boilerplate!`
      },
      {
        id: '5-3-program-to-interface-di-mocking',
        title: '5.3 Program to an Interface, Loose Coupling & Mock Testing',
        summary:
          'Mewujudkan fleksibilitas ekstrem dengan Dependency Injection dan memudahkan pengujian unit dengan Mocking.',
        readTime: '9 menit',
        keyTakeaways: [
          'Prinsip Gang of Four: "Program to an interface, not an implementation" (deklarasikan variabel acuan dengan tipe interface).',
          'Loose Coupling membebaskan modul dari keterikatan kaku terhadap kelas konkret tertentu.',
          'Dependency Injection (DI) menyuntikkan dependensi dari luar melalui konstruktor antarmuka.',
          'Interface memungkinkan pembuatan Mock Object tiruan saat Unit Test, memutus kebutuhan terhadap server atau database fisik yang nyata.'
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// 1. Kontrak Interface
interface EmailSender {
  send(to: string, message: string): boolean;
}

// 2. Kode Bisnis (Loose Coupling via Interface)
class RegistrationService {
  constructor(private mailer: EmailSender) {} // Dependency Injection

  registerUser(email: string) {
    // Logika simpan user...
    this.mailer.send(email, "Selamat datang di platform kami!");
  }
}

// 3. Unit Test: Menyuntikkan Mock Sender tanpa mengirim email sungguhan!
const mockMailer: EmailSender = {
  send: (to, msg) => true // Mock tiruan di memori
};
const service = new RegistrationService(mockMailer);
service.registerUser("rama@example.com"); // Cepat, terisolasi, deterministik!`,
          explanation: 'Dependency Injection berbasis interface memudahkan isolasi unit test menggunakan mock object.'
        },
        content: `### 1. Structural Typing pada TypeScript & Golang
Pada bahasa dengan *Structural Typing* (atau *Implicit Interfaces*):
Sebuah kelas atau struct tidak perlu menuliskan kata kunci \`implements InterfaceName\` secara eksplisit. Selama bentuk metode dan tanda tangannya cocok (*shape matching*), compiler menganggapnya valid mengimplementasikan interface tersebut. Hal ini memberikan fleksibilitas integrasi yang luar biasa tinggi.`
      }
    ],
    quiz: OOP_QUIZZES['oop_abstraksi_interface']
  }
];

export const OOP_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'VTable & Memory Overhead',
    name: 'Overhead Memori Dynamic Dispatch C++',
    formula: '\\text{Size}(Obj) = \\text{Size}(\\text{Atribut}) + \\text{sizeof}(\\text{vptr}), \\qquad \\text{Ukuran } vptr = 8 \\text{ Byte (64-bit)}',
    notes: 'Setiap objek dari kelas yang memiliki fungsi virtual memuat pointer vptr ke VTable kelas.'
  },
  {
    category: 'Siklus Hidup & RAII',
    name: 'Urutan Konstruksi & Destruksi Hierarki',
    formula: '\\text{Konstruktor}: \\text{Base} \\to \\text{Derived}, \\qquad \\text{Destruktor (LIFO)}: \\text{Derived} \\to \\text{Base}',
    notes: 'Destruktor base class wajib virtual agar penghapusan via base pointer memicu destruktor derived.'
  },
  {
    category: 'Desain & Kopling',
    name: 'Hukum Demeter (Prinsip Pengetahuan Minimal)',
    formula: '\\text{Panggilan Sah: } o.m(), \\; p.m(), \\; (\\text{new } X()).m(), \\; \\text{this}.field.m() \\; \\implies \\text{TIDAK BOLEH: } a.getB().getC().do()',
    notes: 'Mencegah code smell train wrecks dan menjaga batas enkapsulasi struktur objek lain.'
  },
  {
    category: 'Pola Arsitektur',
    name: 'Prinsip Antarmuka Gang of Four (GoF)',
    formula: '\\text{Deklarasikan: } Interface \\; x = \\text{new } ConcreteClass(), \\qquad \\text{Bukan: } ConcreteClass \\; x',
    notes: 'Memaksimalkan substitusi runtime polimorfik dan mempermudah pengujian unit via mock.'
  },
  {
    category: 'Hierarki Pewarisan',
    name: 'Subtyping & Kovarian Nilai Balik',
    formula: 'B \\text{ is subclass of } A \\implies f(): B \\text{ valid meng-override } f(): A',
    notes: 'Covariant return type memungkinkan subclass mengembalikan tipe turunan yang lebih spesifik.'
  },
  {
    category: 'Pola Komposisi',
    name: 'Favor Composition Over Inheritance',
    formula: '\\text{HAS-A } (\\text{Black-Box Reuse via Interface}) \\gg \\text{IS-A } (\\text{White-Box Fragile Base Class})',
    notes: 'Komposisi mempertahankan batas enkapsulasi dan memungkinkan perubahan perilaku dinamis saat runtime.'
  }
];
