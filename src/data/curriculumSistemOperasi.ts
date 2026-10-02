import type { ModuleData, FormulaCheatsheetItem } from './curriculum';
import { SISTEM_OPERASI_QUIZZES } from './quizzesSistemOperasi';

export const SISTEM_OPERASI_MODULES: ModuleData[] = [
  {
    id: 'os_arsitektur_kernel',
    number: 1,
    title: 'Arsitektur Sistem Operasi, Kernel & Mode Dual CPU',
    shortDesc:
      'Fondasi interaksi perangkat keras dan lunak: abstraksi resource manager, perlindungan Dual-Mode (Ring 0 vs Ring 3), mekanisme System Call, tipologi kernel (Monolithic, Microkernel, Hybrid), serta siklus penanganan interupsi.',
    iconName: 'Compass',
    sections: [
      {
        id: '1-1-peran-os-dual-mode',
        title: '1.1 Peran OS, User Mode vs Kernel Mode & System Call',
        summary:
          'Memahami bagaimana sirkuit proteksi CPU mencegah program pengguna merusak sistem operasi melalui pemisahan hak akses ring instruksi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Sistem operasi bertindak sebagai Pengelola Sumber Daya (Resource Manager) dan Mesin Perluasan (Extended Machine).',
          'Dual-Mode Operation: CPU membedakan User Mode (Ring 3, instruksi terbatas) dan Kernel Mode (Ring 0, akses penuh ke hardware).',
          'Instruksi Privileged (seperti mematikan interrupt hardware atau mengubah tabel halaman MMU) memicu trap exception jika dijalankan di User Mode.',
          'System Call adalah gerbang formal bagi aplikasi user untuk meminta layanan OS secara aman via instruksi trap/software interrupt.'
        ],
        codeSnippet: {
          language: 'c',
          code: `// Contoh Pemanggilan System Call Tingkat Rendah dalam Bahasa C (POSIX)
#include <unistd.h>

int main() {
    // System Call write(fd, buffer, count)
    // Berjalan di User Mode -> memicu software interrupt 0x80 atau instruksi syscall
    // CPU beralih ke Kernel Mode -> mengeksekusi sys_write -> kembali ke User Mode
    const char msg[] = "Panggilan System Call Langsung\\n";
    write(1, msg, sizeof(msg) - 1); // 1 = STDOUT_FILENO
    return 0;
}`,
          explanation:
            'Fungsi write() adalah pembungkus (wrapper) system call yang menyiapkan argumen pada register CPU sebelum mengalihkan CPU ke mode berhak istimewa (Ring 0).'
        },
        content: `### 1. Dua Wajah Sistem Operasi
1. **Manajer Sumber Daya (Resource Manager)**: Mengatur pembagian CPU, RAM, disk, dan jaringan di antara proses-proses yang bersaing secara adil (*fairness*) dan optimal.
2. **Mesin Terabstraksi (Extended Machine)**: Menyembunyikan kerumitan sinyal elektrik perangkat keras di balik API yang elegan dan bersih (seperti \`open()\`, \`read()\`, \`write()\`).

---

### 2. Perlindungan Perangkat Keras: Dual Mode
Tanpa perlindungan hardware, program yang memiliki bug loop tak terbatas (*infinite loop*) atau pointer liar (*wild pointer*) dapat menimpa kernel sistem operasi di memori atau mengunci prosesor selamanya.
Oleh karena itu, arsitektur CPU (seperti x86) menyediakan bit mode:
- **Kernel Mode (Ring 0 / Supervisor Mode)**: CPU dapat mengeksekusi semua instruksi mesin dan mengakses seluruh memori fisik.
- **User Mode (Ring 3)**: Eksekusi instruksi istimewa dilarang keras oleh gerbang perangkat keras.`
      },
      {
        id: '1-2-arsitektur-kernel',
        title: '1.2 Tipologi Kernel: Monolithic, Microkernel & Hybrid',
        summary:
          'Membedah perdebatan klasik arsitektur sistem operasi: kecepatan eksekusi monolitik versus keamanan modularitas microkernel.',
        readTime: '9 menit',
        keyTakeaways: [
          'Monolithic Kernel (Linux): Seluruh subsistem (filesystem, network stack, device driver, scheduler) berjalan di satu ruang memori kernel bersama; sangat cepat karena panggilan fungsi langsung.',
          'Microkernel (Mach, QNX, Minix): Hanya menyisakan fungsi minimal (IPC, scheduling, low-level memory) di kernel mode; driver dan filesystem dijalankan sebagai proses independen di user space.',
          'Hybrid Kernel (Windows NT, macOS XNU): Mengadopsi modularitas konseptual microkernel tetapi menjalankan subsistem kritis dalam kernel space demi menekan overhead IPC.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `| Karakteristik | Monolithic Kernel (Linux) | Microkernel (QNX / Minix) |
| :--- | :--- | :--- |
| **Lokasi Driver** | Di dalam Kernel Space | Di dalam User Space (Daemon terpisah) |
| **Komunikasi Antar Modul** | Pemanggilan Fungsi C Langsung (O(1) Overhead) | Pertukaran Pesan IPC (Message Passing via Trap) |
| **Keamanan & Ketahanan** | Bug pada satu driver dapat memicu Kernel Panic | Driver crash dapat di-restart tanpa merusak sistem |
| **Kecepatan / Performa** | Maksimum (Nol Context Switch IPC) | Mengalami degradasi akibat seringnya IPC context switch |`,
          explanation:
            'Perbandingan struktural antara kernel monolitik performa tinggi vs mikrokernel terisolasi modular.'
        },
        content: `### 1. Debat Historis Tanenbaum-Torvalds (1992)
Profesor Andrew Tanenbaum mengkritik Linux yang mengadopsi monolitik sebagai langkah mundur: *"Linux is obsolete because it is a monolithic design."*
Namun, Linus Torvalds membuktikan bahwa pada era awal komputasi, overhead pertukaran pesan (message passing) dan alih konteks (context switching) pada mikrokernel terlalu membebani perangkat keras. Linux mengompensasi kekakuan monolitik dengan teknologi **Loadable Kernel Modules (LKM)**.`
      },
      {
        id: '1-3-interupsi-hardware-booting',
        title: '1.3 Interupsi Hardware, Trap & Urutan Booting Sistem',
        summary:
          'Siklus hidup penyalaan komputer dari BIOS/UEFI, MBR/GPT, Bootloader hingga pengisian Interrupt Vector Table (IVT).',
        readTime: '8 menit',
        keyTakeaways: [
          'Hardware Interrupt adalah sinyal asinkron dari perangkat luar (keyboard, kartu jaringan) yang memaksa CPU menunda eksekusi saat ini dan melompat ke ISR.',
          'Trap (Exception) adalah interupsi sinkron yang dipicu oleh instruksi internal CPU (seperti division by zero, page fault, atau instruksi syscall).',
          'Interrupt Vector Table (IVT / IDT) adalah larik alamat memori penunjuk rutin penanganan interupsi (Interrupt Service Routine).',
          'Urutan Booting: Firmware (UEFI/BIOS POST) -> Bootloader (GRUB) -> Decompress Kernel -> Init/Systemd (PID 1).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Alur Transisi Interupsi Hardware:
1. Keyboard ditekan -> Kontroller keyboard kirim sinyal IRQ ke APIC.
2. APIC kirim sinyal INT ke pin CPU.
3. CPU menyelesaikan instruksi siklus saat ini.
4. CPU menyimpan Program Counter (EIP) dan Flags ke Kernel Stack.
5. CPU membaca nomor interupsi dan mencari alamat di Interrupt Descriptor Table (IDT).
6. CPU mengeksekusi Interrupt Service Routine (ISR) di Kernel Mode.
7. Instruksi IRET (Interrupt Return) merestorasi status register; program pengguna lanjut.`,
          explanation:
            'Urutan tujuh tahap eksekusi pengalihan kendali hardware saat interupsi eksternal tiba di prosesor.'
        },
        content: `### 1. Mengapa Perlu Timer Hardware?
Jika sebuah program pengguna berisi kode:
\`\`\`c
while (1) {} // Loop tak berhingga
\`\`\`
Tanpa timer hardware, program ini akan memonopoli CPU selamanya!
Sistem Operasi mengonfigurasi chip timer hardware (seperti PIT atau HPET) untuk memicu interupsi clock setiap beberapa milidetik. Saat interupsi tiba, kendali CPU direbut kembali oleh penjadwal kernel (Preemptive Multitasking).`
      }
    ],
    quiz: SISTEM_OPERASI_QUIZZES['os_arsitektur_kernel']
  },
  {
    id: 'os_proses_thread_scheduling',
    number: 2,
    title: 'Manajemen Proses, Threads & Penjadwalan CPU',
    shortDesc:
      'Mekanika eksekusi: Process Control Block (PCB), isolasi ruang alamat, siklus hidup fork-exec-wait, optimasi Copy-on-Write, pembandingan proses vs thread, serta algoritma penjadwalan CPU (FCFS, SJF, RR, MLFQ, CFS).',
    iconName: 'Layers',
    sections: [
      {
        id: '2-1-anatomi-proses-fork',
        title: '2.1 Anatomi Proses, PCB, Status & Siklus Fork-Exec',
        summary:
          'Struktur data kernel pengelola proses, status transisi 5 keadaan, dan efisiensi memori Copy-on-Write (CoW).',
        readTime: '9 menit',
        keyTakeaways: [
          'Proses adalah program yang sedang dieksekusi di memori RAM, memiliki ruang alamat virtual terisolasi sendiri.',
          'Process Control Block (PCB / task_struct) menyimpan seluruh metadata identitas proses (PID, register, status, memory map, open file table).',
          'Lima status siklus proses: New -> Ready -> Running -> Waiting/Blocked -> Terminated.',
          'System call `fork()` menduplikasi proses induk; Copy-on-Write (CoW) menunda penyalinan halaman fisik RAM hingga salah satu proses memodifikasinya.'
        ],
        codeSnippet: {
          language: 'c',
          code: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork(); // Mengkloning proses

    if (pid == 0) {
        // Proses Anak: pid == 0
        printf("Saya adalah proses anak (PID: %d)\\n", getpid());
        _exit(0);
    } else {
        // Proses Induk: pid > 0 (berisi PID anak)
        printf("Saya adalah proses induk, menunggu anak selesai...\\n");
        wait(NULL); // Mencegah proses anak menjadi zombie!
        printf("Proses anak telah dipanen (reaped).\\n");
    }
    return 0;
}`,
          explanation:
            'Mekanisme pemanggilan fork() dan wait() untuk mencegah akumulasi proses zombie di tabel PID sistem.'
        },
        content: `### 1. Zombie vs Orphan Process
- **Zombie Process**: Proses yang sudah mati (\`exit\`), tetapi entri PCB-nya masih tersimpan di kernel karena induknya belum membaca kode keluar (\`exit code\`) via \`wait()\`.
- **Orphan Process**: Proses anak yang masih aktif berjalan saat proses induknya mati mendadak. Proses ini otomatis diadopsi oleh proses akar (PID 1 / systemd) yang akan memanennya kelak.`
      },
      {
        id: '2-2-threads-context-switch',
        title: '2.2 Threads vs Proses, Overhead Context Switch & Model Pemetaan',
        summary:
          'Mengapa thread disebut lightweight process, apa yang dibagi bersama, dan model pemetaan thread M:1, 1:1, dan M:N.',
        readTime: '8 menit',
        keyTakeaways: [
          'Thread berbagi ruang alamat memori, heap data, dan berkas terbuka dari proses induk yang sama.',
          'Setiap thread memiliki Program Counter, set register CPU, dan call stack independen tersendiri.',
          'Context switch antar thread dalam proses yang sama jauh lebih murah daripada context switch antar proses karena tidak perlu merombak cache TLB memori.',
          'Model pemetaan 1:1 (seperti Linux NPTL) memetakan setiap thread aplikasi ke satu Kernel Thread, memungkinkan eksekusi paralel sejati di multi-core CPU.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Perbedaan Sumber Daya Antara Proses dan Thread
Ruang Lingkup Proses (Di-share oleh seluruh thread):
├── Ruang Alamat Virtual Memori (Heap, Global Variables)
├── Tabel File Descriptor (Berkas & Soket terbuka)
├── Informasi Izin Keamanan & User ID
└── Signal Handlers

Eksklusif Dimiliki Masing-Masing Thread:
├── Program Counter (EIP/RIP)
├── Set Register CPU (EAX, EBX, SP)
└── Call Stack Lokal (Variabel lokal fungsi & return address)`,
          explanation:
            'Dekomposisi kepemilikan sumber daya bersama di level proses vs register privat di level thread.'
        },
        content: `### 1. Biaya Tersembunyi Context Switch Antar Proses
Ketika CPU berpindah dari Proses A ke Proses B:
1. Menyimpan seluruh register proses A ke PCB A.
2. Memuat register proses B dari PCB B.
3. **Mengganti Page Table Base Register (CR3)**: Ini memaksa seluruh cache TLB (Translation Lookaside Buffer) dibersihkan (*invalidated / flushed*).
4. Akses memori pada instruksi-instruksi pertama proses B menjadi lambat karena harus membaca ulang dari chip RAM utama (*TLB misses*).`
      },
      {
        id: '2-3-algoritma-penjadwalan-cpu',
        title: '2.3 Algoritma Penjadwalan CPU & Evaluasi Kinerja',
        summary:
          'Menganalisis algoritma FCFS, SJF optimal, Round Robin, Multilevel Feedback Queue (MLFQ), dan Linux Completely Fair Scheduler (CFS).',
        readTime: '9 menit',
        keyTakeaways: [
          'Metrik Penjadwalan: Turnaround Time (Waktu Selesai - Waktu Tiba), Waiting Time (Total waktu antre di Ready queue), Response Time.',
          'SJF (Shortest Job First) terbukti secara matematis meminimalkan rata-rata waiting time.',
          'Round Robin (RR) membagi eksekusi CPU dalam potongan waktu tetap (Time Quantum); jika quantum terlalu kecil, overhead context switch mendominasi.',
          'Starvation (proses prioritas rendah tidak pernah jalan) diselesaikan dengan teknik Aging.',
          'Linux CFS menggunakan Red-Black Tree untuk menjadwalkan tugas dengan virtual runtime (vruntime) terkecil.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Perhitungan Metrik Penjadwalan:
Proses  | Arrival Time | Burst Time
P1      | 0            | 6
P2      | 2            | 8
P3      | 4            | 3

Rumus Penting:
Turnaround Time = Completion Time - Arrival Time
Waiting Time    = Turnaround Time - Burst Time`,
          explanation:
            'Tabel profil kedatangan proses beserta rumus kalkulasi metrik waktu tunggu dan turnaround.'
        },
        content: `### 1. Convoy Effect pada Algoritma FCFS
Jika proses pertama yang tiba memiliki burst time 100 ms (CPU bound), lalu diikuti 5 proses pendek yang masing-masing hanya butuh 1 ms (I/O bound):
Kelima proses pendek harus menunggu 100 ms di antrean ready. Perangkat I/O menganggur dan rata-rata waktu tunggu membengkak drastis.`
      }
    ],
    quiz: SISTEM_OPERASI_QUIZZES['os_proses_thread_scheduling']
  },
  {
    id: 'os_sinkronisasi_deadlock',
    number: 3,
    title: 'Sinkronisasi Proses, Race Condition, Semaphor & Deadlock',
    shortDesc:
      'Konkurensi tingkat rendah: anomali Race Condition, solusi Critical Section (Peterson, Mutex, Counting Semaphore), fenomena Priority Inversion, 4 kondisi Coffman, serta penghindaran Deadlock via Algoritma Banker.',
    iconName: 'Code',
    sections: [
      {
        id: '3-1-race-critical-section',
        title: '3.1 Anatomi Race Condition & Tiga Syarat Critical Section',
        summary:
          'Memahami mengapa operasi `counter++` tidak atomik di level bahasa assembly dan kriteria mutlak solusi sinkronisasi.',
        readTime: '8 menit',
        keyTakeaways: [
          'Race Condition: Situasi di mana beberapa proses memanipulasi data bersama secara konkuren, dan hasil akhir bergantung pada urutan eksekusi tak terkendali.',
          'Operasi `x++` dipecah CPU menjadi 3 instruksi mesin: LOAD x ke register, ADD 1 ke register, STORE register ke x.',
          'Tiga syarat mutlak Critical Section: Mutual Exclusion (hanya 1 proses di dalam), Progress (proses luar tidak boleh menghambat proses lain masuk), Bounded Waiting (tidak ada kelaparan abadi).'
        ],
        codeSnippet: {
          language: 'c',
          code: `// Dekonstruksi Assembly dari ekspresi "counter++":
// mov eax, [counter]   ; 1. Load data dari RAM ke register CPU
// add eax, 1           ; 2. Tambahkan nilai 1 di register ALU
// mov [counter], eax   ; 3. Tulis balik hasil dari register ke RAM

// Jika context switch terjadi di antara langkah 1 dan 3, 
// nilai inkrementasi dari thread lain akan hilang tertimpa!`,
          explanation:
            'Tiga instruksi mesin assembly atomik yang rawan disela context switch pemicu race condition.'
        },
        content: `### 1. Solusi Peterson untuk 2 Proses
Solusi klasik perangkat lunak murni menggunakan dua variabel bersama:
\`\`\`c
int turn;
bool flag[2];
\`\`\`
Proses $i$ menyatakan minat masuk (\`flag[i] = true\`) lalu dengan sopan mempersilakan proses lawan (\`turn = j\`). Proses $i$ hanya menunggu jika proses lawan berminat DAN saat itu giliran lawan (\`flag[j] && turn == j\`).`
      },
      {
        id: '3-2-primitif-sinkronisasi-mutex-semaphore',
        title: '3.2 Mutex, Counting Semaphore, Spinlock & Priority Inversion',
        summary:
          'Mekanisme penguncian perangkat lunak & keras (CAS), semaphor Edsger Dijkstra, serta protokol Priority Inheritance.',
        readTime: '9 menit',
        keyTakeaways: [
          'Mutex memiliki kepemilikan biner (ownership): hanya thread yang mengunci yang boleh melepaskan kunci.',
          'Counting Semaphore mengontrol akses ke kumpulan N sumber daya identik melalui operasi atomik wait() [P] dan signal() [V].',
          'Spinlock menggunakan busy-waiting loop (tidak menidurkan thread); optimal jika durasi penguncian sangat pendek pada multiprosesor.',
          'Priority Inversion (insiden Mars Pathfinder 1997) diatasi dengan Protokol Priority Inheritance: menaikkan prioritas pemegang kunci sementara waktu.'
        ],
        codeSnippet: {
          language: 'c',
          code: `// Operasi Klasik Semaphore Edsger Dijkstra:
typedef struct {
    int value;
    struct process_queue *list;
} semaphore;

void wait(semaphore *S) { // Operasi P()
    S->value--;
    if (S->value < 0) {
        // Tambahkan proses ke antrean S->list dan panggil sleep()
    }
}

void signal(semaphore *S) { // Operasi V()
    S->value++;
    if (S->value <= 0) {
        // Ambil proses P dari S->list dan panggil wakeup(P)
    }
}`,
          explanation:
            'Struktur internal semaphor klasik Dijkstra yang menidurkan dan membangunkan proses di antrian antrian.'
        },
        content: `### 1. Hardware Primitives: Compare-and-Swap (CAS)
Sistem modern tidak mengandalkan software flags murni karena optimasi CPU out-of-order execution. CPU modern menyediakan instruksi hardware atomik:
\`\`\`c
int CompareAndSwap(int *word, int expected, int new_val);
\`\`\`
Instruksi ini membaca, membandingkan, dan memperbarui memori dalam 1 siklus bus fisik tanpa bisa disela oleh interupsi apapun.`
      },
      {
        id: '3-3-kondisi-coffman-banker-deadlock',
        title: '3.3 Empat Kondisi Coffman & Penghindaran Deadlock (Banker)',
        summary:
          'Kondisi mutlak kebuntuan sumber daya, analisis Resource-Allocation Graph, dan pembuktian Safe State dengan Algoritma Banker.',
        readTime: '9 menit',
        keyTakeaways: [
          'Deadlock hanya mungkin terjadi jika 4 kondisi Coffman terpenuhi simultan: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
          'Meniadakan Circular Wait: Berikan penomoran ID linier pada seluruh sumber daya dan wajibkan alokasi secara ascending.',
          'Algoritma Banker (Dijkstra): Menguji apakah pemberian alokasi sumber daya mempertahankan status sistem dalam Safe State (selalu memiliki Safe Sequence).',
          'Algoritma Ostrich: Kebanyakan OS komersial (Linux/Windows) memilih mengabaikan deadlock karena biaya deteksi terus-menerus terlalu membebani performa.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Struktur Data Algoritma Banker:
- Available[m]  : Jumlah unit tersedia untuk tiap sumber daya
- Max[n][m]      : Klaim batas maksimum permintaan tiap proses
- Allocation[n][m]: Sumber daya yang saat ini sedang dipegang
- Need[n][m]     : Sisa kebutuhan sumber daya (Need = Max - Allocation)

Sistem berada di SAFE STATE jika terdapat urutan <P1, P2, ..., Pn>
sehingga Need[Pi] <= Available + sum(Allocation[P_sebelumnya])`,
          explanation:
            'Matriks alokasi dan formula penentuan urutan safe sequence pada Algoritma Banker Dijkstra.'
        },
        content: `### 1. Deadlock vs Livelock
- **Deadlock**: Dua atau lebih proses tertidur (*blocked*) permanen menunggu peristiwa yang hanya dapat dipicu oleh proses lain di dalam kelompok macet tersebut.
- **Livelock**: Proses aktif mengubah status internalnya terus-menerus (utilisasi CPU tinggi), namun sistem tidak membuat kemajuan sama sekali (mirip dua orang saling memberi jalan di pintu sempit).`
      }
    ],
    quiz: SISTEM_OPERASI_QUIZZES['os_sinkronisasi_deadlock']
  },
  {
    id: 'os_manajemen_memori',
    number: 4,
    title: 'Manajemen Memori, Paging, Segmentasi & Virtual Memory',
    shortDesc:
      'Arsitektur memori modern: translasi hardware MMU, eliminasi fragmentasi via Paging, akselerasi TLB & Effective Access Time, Virtual Memory, Page Fault handling, serta algoritma penggantian halaman (OPT, FIFO, LRU, Clock).',
    iconName: 'Award',
    sections: [
      {
        id: '4-1-mmu-paging-fragmentasi',
        title: '4.1 Hardware MMU, Konsep Paging & Fragmentasi',
        summary:
          'Bagaimana Memory Management Unit memetakan alamat logika ke frame fisik di RAM serta membedakan fragmentasi internal vs eksternal.',
        readTime: '8 menit',
        keyTakeaways: [
          'Alamat Logika (Virtual) dihasilkan oleh CPU; Alamat Fisik dimuat di bus alamat chip RAM fisik.',
          'MMU (Memory Management Unit) bertugas menerjemahkan alamat logika ke fisik saat runtime.',
          'Paging membagi memori logika menjadi Page (misal 4KB) dan memori fisik menjadi Frame berukuran sama, meniadakan fragmentasi eksternal.',
          'Fragmentasi Internal: Ruang kosong terbuang di dalam halaman terakhir yang dialokasikan karena kebutuhan program tidak bulat sebesar 4KB.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Dekomposisi Alamat Virtual 32-bit (Halaman 4 KB = 2^12 byte):
[ 20-bit Page Number (p) ] [ 12-bit Page Offset (d) ]
- Bit 31 - 12: Indeks ke entri Page Table (Frame Base Address f)
- Bit 11 - 0  : Posisi offset byte di dalam frame (d)
Alamat Fisik = (f << 12) | d`,
          explanation:
            'Pembagian bit alamat virtual menjadi nomor halaman untuk pencarian frame dan offset byte di dalam frame.'
        },
        content: `### 1. Paging vs Segmentasi
- **Paging**: Pembagian fisik berukuran konstan (transparan bagi programmer, dikelola hardware/OS).
- **Segmentasi**: Pembagian logis berukuran bervariasi yang mencerminkan struktur kode programmer (Segmen Kode, Segmen Heap, Segmen Stack, masing-masing dengan batas panjang *limit* dan hak akses r-w-x terpisah).`
      },
      {
        id: '4-2-tlb-effective-access-time',
        title: '4.2 Translation Lookaside Buffer (TLB) & Waktu Akses Efektif',
        summary:
          'Mengatasi kelambatan akses ganda memori menggunakan cache asosiatif TLB dan kalkulasi matematis EAT.',
        readTime: '8 menit',
        keyTakeaways: [
          'Tanpa TLB, setiap akses data membutuhkan 2 kali akses RAM: 1 kali membaca Page Table, 1 kali membaca data aktual.',
          'TLB adalah cache hardware asosiatif di CPU yang menyimpan pasangan pemetaan (Page Number -> Frame Number) terbaru.',
          'Rumus Waktu Akses Efektif (EAT): Hitung probabilitas TLB hit (alpha) versus TLB miss (1 - alpha).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Contoh Perhitungan EAT:
- Waktu pencarian TLB (epsilon) = 1 ns
- Waktu akses memori RAM (m)   = 100 ns
- Rasio TLB Hit (alpha)         = 98% (0.98)

EAT = alpha * (epsilon + m) + (1 - alpha) * (epsilon + 2 * m)
EAT = 0.98 * (1 + 100) + 0.02 * (1 + 200)
EAT = 0.98 * 101 + 0.02 * 201
EAT = 98.98 + 4.02 = 103 ns (Hanya 3% lebih lambat dari akses RAM langsung!)`,
          explanation:
            'Kalkulasi waktu akses efektif memori dengan rasio hit TLB tinggi yang mereduksi overhead tabel halaman.'
        },
        content: `### 1. Hierarki Multi-Level Paging pada Arsitektur 64-bit
Pada x86-64, ruang alamat 48-bit membutuhkan skema 4-Level Paging:
\`\`\`
PML4 (9 bit) -> PDPT (9 bit) -> Page Directory (9 bit) -> Page Table (9 bit) -> Offset (12 bit)
\`\`\`
Struktur pohon ini menghemat RAM karena cabang tabel yang tidak digunakan tidak perlu dialokasikan di memori fisik.`
      },
      {
        id: '4-3-virtual-memory-page-fault-lru',
        title: '4.3 Virtual Memory, Page Fault & Algoritma Penggantian Halaman',
        summary:
          'Siklus demand paging, anomali Belady pada FIFO, efisiensi LRU, algoritma Clock (Second-Chance), serta pencegahan Thrashing.',
        readTime: '9 menit',
        keyTakeaways: [
          'Demand Paging: Halaman program hanya dimuat ke RAM saat pertama kali disentuh oleh CPU (Lazy Loading).',
          'Page Fault Trap: CPU menginterupsi kernel saat mengakses halaman yang bit valid-invalidnya 0 (belum ada di RAM fisik).',
          'Anomali Belady: Pada algoritma FIFO, menambah kapasitas frame RAM justru dapat memperbanyak jumlah page fault.',
          'Algoritma Penggantian: OPT (teoritis terbaik), LRU (terbaik praktis berbasis riwayat lalu), Clock/Second Chance (aproksimasi murah LRU).',
          'Thrashing: Kondisi bencana di mana CPU kehabisan waktu hanya untuk menukar halaman ke disk karena total Working Set melampaui RAM fisik.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Algoritma Clock (Second-Chance):
Pointer melingkar memeriksa halaman:
1. Jika Reference Bit == 1:
   - Ubah Reference Bit menjadi 0 (Beri kesempatan kedua)
   - Geser pointer ke halaman berikutnya
2. Jika Reference Bit == 0:
   - Pilih halaman ini sebagai KORBAN PENGGUSURAN!
   - (Jika Dirty Bit == 1, tulis balik ke disk; jika 0, langsung timpa)
   - Muat halaman baru, geser pointer maju 1 langkah.`,
          explanation:
            'Logika pointer berputar pada algoritma Clock yang memanfaatkan reference bit sebagai aproksimasi efisien dari LRU.'
        },
        content: `### 1. Prinsip Lokalitas Referensi
Virtual memory bekerja luar biasa efisien karena program komputer tidak mengakses memori secara acak merata:
- **Temporal Locality**: Data yang baru diakses akan diakses lagi segera (variabel loop counter).
- **Spatial Locality**: Data yang bersebelahan dengan data saat ini akan segera diakses (larik array berurutan).`
      }
    ],
    quiz: SISTEM_OPERASI_QUIZZES['os_manajemen_memori']
  },
  {
    id: 'os_file_system_io',
    number: 5,
    title: 'Sistem Berkas, Manajemen I/O, RAID & Keamanan Sistem Operasi',
    shortDesc:
      'Penyimpanan persisten dan keandalan sistem: arsitektur Inode Unix, konsistensi Journaling, penjadwalan I/O disk (SCAN/Elevator), konfigurasi RAID (0, 1, 5, 6), isolasi kontainer (Namespaces/Cgroups), serta mitigasi eksploitasi Buffer Overflow.',
    iconName: 'Network',
    sections: [
      {
        id: '5-1-struktur-inode-journaling',
        title: '5.1 Anatomi Sistem Berkas Unix, Inode & Journaling',
        summary:
          'Bagaimana sistem operasi memisahkan nama berkas dari kontennya melalui Inode dan mencegah korupsi data dengan transaksi jurnal.',
        readTime: '8 menit',
        keyTakeaways: [
          'Inode (Index Node) menyimpan seluruh metadata berkas (izin, pemilik, ukuran, timestamp, pointer blok data), KECUALI nama berkas.',
          'Direktori di Unix hanyalah berkas spesial yang berisi tabel pemetaan string nama berkas ke nomor Inode.',
          'Hard Link merujuk langsung ke nomor Inode yang sama; Soft Link (Symlink) adalah berkas baru yang menyimpan string jalur path ke berkas lain.',
          'Journaling File System (ext4, NTFS) mencatat transaksi metadata ke area jurnal sirkular terlebih dahulu, mencegah keharusan full-disk fsck saat listrik padam.'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Struktur Tingkat Pointer Inode Tradisional Unix:
Inode
├── Direct Blocks (12 Pointer langsung ke blok data disk)
├── Single Indirect Pointer (Menunjuk ke 1 blok berisi 1.024 direct pointer)
├── Double Indirect Pointer (Menunjuk ke blok pointer bertingkat dua)
└── Triple Indirect Pointer (Mendukung ukuran berkas hingga skala Terabyte)`,
          explanation:
            'Hierarki penunjuk blok bertingkat Inode yang mendukung efisiensi berkas kecil dan kapasitas raksasa berkas besar.'
        },
        content: `### 1. Apa yang Terjadi Saat Berkas Dihapus (\`rm\`)?
System call \`unlink()\` menurunkan penghitung tautan (*link count*) pada Inode berkas:
- Jika link count masih $\\ge 1$ (misal ada hard link lain), data disk tetap utuh.
- Jika link count mencapai $0$ dan tidak ada proses yang membuka berkas tersebut, blok data ditandai sebagai bebas pada bitmap disk dan Inode dialokasikan ulang.`
      },
      {
        id: '5-2-penjadwalan-io-raid',
        title: '5.2 Penjadwalan Disk I/O & Arsitektur RAID Toleran Kesalahan',
        summary:
          'Mengurangi seek-time disk dengan algoritma Elevator (SCAN) dan arsitektur redundansi array disk RAID 0, 1, 5, dan 6.',
        readTime: '9 menit',
        keyTakeaways: [
          'Komponen latensi disk mekanik: Seek Time (menggerakkan lengan head), Rotational Latency (menunggu sektor berputar), Transfer Time.',
          'Algoritma SCAN (Elevator) melayani permintaan sambil bergerak searah dari satu ujung disk ke ujung lain sebelum berbalik arah.',
          'RAID 0: Striping performa tinggi tanpa redundansi (0 toleransi kesalahan).',
          'RAID 1: Mirroring redundansi penuh 100% (kapasitas efektif 50%).',
          'RAID 5: Striping blok dengan paritas terdistribusi merata (tahan kerusakan 1 disk, minimal 3 disk).',
          'RAID 6: Skema paritas ganda Reed-Solomon (tahan kerusakan simultan 2 disk, minimal 4 disk).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Perhitungan Kapasitas & Toleransi Kesalahan RAID (N = Jumlah Disk, S = Ukuran Disk):
| Tipe RAID | Kapasitas Efektif | Toleransi Kerusakan Disk | Keuntungan Utama |
| :--- | :--- | :--- | :--- |
| **RAID 0** | N * S | 0 Disk (Nol Toleransi) | Throughput I/O Maksimal |
| **RAID 1** | 1 * S (Mirroring) | (N - 1) Disk | Keamanan Data Maksimum |
| **RAID 5** | (N - 1) * S | Tepat 1 Disk Mati | Efisiensi Kapasitas + Toleransi |
| **RAID 6** | (N - 2) * S | Hingga 2 Disk Mati Simultan | Sangat Aman untuk Storage Enterprise |`,
          explanation:
            'Tabel perbandingan kapasitas efektif, biaya paritas, dan ketahanan kegagalan disk pada tingkatan RAID standar.'
        },
        content: `### 1. Paritas XOR pada RAID 5
Blok paritas dihitung menggunakan aljabar Boolean eksklusif:
$$P = D_1 \\oplus D_2 \\oplus D_3$$
Jika Disk 2 terbakar dan rusak total, data aslinya dapat direkonstruksi secara instan dari disk yang tersisa:
$$D_2 = D_1 \\oplus D_3 \\oplus P$$`
      },
      {
        id: '5-3-keamanan-isolasi-kontainer',
        title: '5.3 Keamanan Sistem Operasi: Buffer Overflow, ACL & Isolasi Kontainer',
        summary:
          'Prinsip Least Privilege, eksploitasi memori stack, mitigasi ASLR/NX, serta fondasi kontainerisasi Linux cgroups & namespaces.',
        readTime: '9 menit',
        keyTakeaways: [
          'Izin Tradisional Unix: Tiga triplet oktal (rwx untuk User, Group, Others) ditambah bit spesial SUID/SGID/Sticky bit.',
          'Access Control List (ACL) memberikan kontrol granular untuk banyak user/grup individual pada satu berkas.',
          'Serangan Buffer Overflow menimpa Return Address di stack untuk melompat ke shellcode; dimitigasi dengan Stack Canaries, ASLR, dan NX/W^X bit.',
          'Kontainer Docker dibangun di atas 2 pilar kernel Linux: Namespaces (isolasi apa yang bisa dilihat proses) dan Cgroups (pembatasan kuota CPU/RAM).'
        ],
        codeSnippet: {
          language: 'markdown',
          code: `// Dua Pilar Kernel Linux Penggerak Docker:
1. Linux Namespaces (Isolasi Ruang Pandang):
   - PID Namespace  : Proses merasa memiliki PID 1 sendiri
   - NET Namespace  : Antarmuka jaringan & port IP terisolasi
   - MNT Namespace  : Pohon filesystem akar terpisah
2. Linux Cgroups (Control Groups - Pembatasan Sumber Daya):
   - memory.max     : Batas RAM maksimum (misal: 512 MB)
   - cpu.weight     : Bobot alokasi CPU per proses kontainer`,
          explanation:
            'Pemisahan peran Namespaces untuk isolasi pandangan dan Control Groups untuk pembatasan alokasi fisik hardware.'
        },
        content: `### 1. Mitigasi Memori Modern
- **ASLR (Address Space Layout Randomization)**: Mengacak basis alamat stack, heap, dan pustaka fungsi libc setiap kali aplikasi dimulai, menggagalkan exploit return-to-libc.
- **NX-Bit (No-Execute)**: Memastikan halaman data (stack dan heap) tidak dapat dieksekusi sebagai instruksi kode mesin.`
      }
    ],
    quiz: SISTEM_OPERASI_QUIZZES['os_file_system_io']
  }
];

export const SISTEM_OPERASI_CHEATSHEET: FormulaCheatsheetItem[] = [
  {
    category: 'Manajemen Memori',
    name: 'Waktu Akses Efektif (EAT) TLB',
    formula: '\\text{EAT} = \\alpha (\\epsilon + m) + (1 - \\alpha) (\\epsilon + 2m)',
    notes: 'alpha = rasio TLB hit, epsilon = waktu cari TLB, m = waktu akses RAM fisik.'
  },
  {
    category: 'Manajemen Memori',
    name: 'Dekomposisi Alamat Paging 32-bit (Halaman 4 KB)',
    formula: 'd = 12 \\text{ bit } (2^{12} = 4096 \\text{ byte}), \\qquad p = 32 - 12 = 20 \\text{ bit}',
    notes: 'p = indeks nomor halaman virtual, d = pergeseran offset byte di dalam frame.'
  },
  {
    category: 'Penjadwalan CPU',
    name: 'Metrik Waktu Penjadwalan Proses',
    formula: '\\text{Turnaround} = T_{\\text{selesai}} - T_{\\text{tiba}}, \\qquad \\text{Waiting} = \\text{Turnaround} - T_{\\text{burst}}',
    notes: 'SJF optimal meminimalkan rata-rata waiting time dibanding semua algoritma penjadwalan.'
  },
  {
    category: 'Deadlock & Sinkronisasi',
    name: 'Matriks Sisa Kebutuhan Algoritma Banker',
    formula: '\\text{Need}[i][j] = \\text{Max}[i][j] - \\text{Allocation}[i][j]',
    notes: 'Sistem aman (safe state) jika terdapat urutan proses yang memenuhi Need <= Available.'
  },
  {
    category: 'Sistem Penyimpanan',
    name: 'Kapasitas Larik Paritas RAID 5 & RAID 6',
    formula: '\\text{Kapasitas}_{\\text{RAID 5}} = (N - 1) \\times S, \\qquad \\text{Kapasitas}_{\\text{RAID 6}} = (N - 2) \\times S',
    notes: 'RAID 5 tahan 1 disk mati; RAID 6 tahan 2 disk mati simultan via kode Reed-Solomon.'
  },
  {
    category: 'Sistem Berkas & Izin',
    name: 'Nilai Izin Oktal Unix Standar (UGO)',
    formula: '\\text{Izin} = 4 (r) + 2 (w) + 1 (x) \\implies 754 = \\text{rwx} \\; (U) \\; \\text{r-x} \\; (G) \\; \\text{r--} \\; (O)',
    notes: 'Standar representasi angka izin berkas pada perintah chmod Unix/Linux.'
  },
  {
    category: 'Penyimpanan & Disk',
    name: 'Komponen Total Waktu Akses Disk',
    formula: 'T_{\\text{akses}} = T_{\\text{seek}} + T_{\\text{rotasi}} + T_{\\text{transfer}}',
    notes: 'Seek time adalah komponen waktu paling lambat pada harddisk magnetik mekanik.'
  }
];
