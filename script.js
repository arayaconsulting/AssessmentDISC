/**
 * ARAYA CONSULTING - 5-MODE DISC ASSESSMENT ENGINE
 * Mode: Umum, Bisnis/HCM, Parenting, Pemuda, & Guru/Pendidik
 * Framework: People Map × Position Map (Role & Contribution Oriented)
 * Sistem: Multi-Mode Auto Detection + Blur Inline + WA Format Admin
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec';
const adminWA = "6285232526003";

// Deteksi 5 Mode (Kebal Huruf Besar/Kecil, Query Param & Hash)
function getActiveMode() {
    const fullUrl = (window.location.search + " " + window.location.hash).toLowerCase();
    
    if (fullUrl.includes('educator') || fullUrl.includes('guru') || fullUrl.includes('pendidik') || fullUrl.includes('dosen')) return 'educator';
    if (fullUrl.includes('parenting') || fullUrl.includes('family') || fullUrl.includes('orangtua')) return 'parenting';
    if (fullUrl.includes('youth') || fullUrl.includes('pemuda') || fullUrl.includes('mahasiswa')) return 'youth';
    if (fullUrl.includes('business') || fullUrl.includes('bisnis') || fullUrl.includes('hcm') || fullUrl.includes('sbs')) return 'business';
    return 'general';
}

// Inisialisasi Tampilan Depan Dinamis Berdasarkan Mode
window.addEventListener('DOMContentLoaded', () => {
    const activeMode = getActiveMode();
    const badgeEl = document.getElementById('mode-badge');
    const subTitleEl = document.getElementById('intro-subtitle');
    const waFloatBtn = document.getElementById('wa-floating-trigger');

    let badgeText = "Mode: Umum & Pengembangan Diri";
    let badgeColor = "#1a2a6c";
    let subTitleText = "Kenali potensi respon perilaku, gaya komunikasi, dan adaptasi kerja terbaik Anda.";

    if (activeMode === 'business') {
        badgeText = "Mode: Bisnis & HCM";
        badgeColor = "#c5a059";
        subTitleText = "Pemetaan respon perilaku kepemimpinan bisnis, ekosistem kerja, dan sinergi tim.";
    } else if (activeMode === 'parenting') {
        badgeText = "Mode: Parenting & Keluarga";
        badgeColor = "#27ae60";
        subTitleText = "Memahami respon perilaku pengasuhan, harmoni keluarga, dan pendekatan anak.";
    } else if (activeMode === 'youth') {
        badgeText = "Mode: Pemuda & Mahasiswa";
        badgeColor = "#e67e22";
        subTitleText = "Eksplorasi potensi diri, gaya belajar, kolaborasi kelompok, dan arah karier masa depan.";
    } else if (activeMode === 'educator') {
        badgeText = "Mode: Guru & Pendidik";
        badgeColor = "#16a085";
        subTitleText = "Menemukan gaya mengajar alami, pendekatan kelas inspiratif, dan manajemen dinamika siswa.";
    }

    if (badgeEl) {
        badgeEl.textContent = badgeText;
        badgeEl.style.background = badgeColor;
        badgeEl.style.color = "#ffffff";
        badgeEl.style.display = "inline-block";
    }

    if (subTitleEl) {
        subTitleEl.textContent = subTitleText;
    }

    // Tombol Floating WA Ditujukan ke Tim Admin
    if (waFloatBtn) {
        waFloatBtn.href = `https://wa.me/${adminWA}?text=${encodeURIComponent("Halo Admin Araya Consulting, saya butuh bantuan mengenai Asesmen DISC.")}`;
    }
});

const quizQuestions = [
    { question: "1. Saat dihadapkan pada keputusan penting, saya cenderung:", options: [{ text: "Mengambil keputusan cepat dan tegas", type: "D" }, { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" }, { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" }, { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }] },
    { question: "2. Dalam menghadapi konflik, saya biasanya:", options: [{ text: "Menghadapinya secara langsung dan cepat", type: "D" }, { text: "Berusaha mencairkan suasana dengan humor", type: "I" }, { text: "Menenangkan semua orang agar tidak terjadi ketegangan", type: "S" }, { text: "Mengumpulkan fakta sebelum menyimpulkan", type: "C" }] },
    { question: "3. Ketika bekerja dalam tim, saya cenderung:", options: [{ text: "Mengambil peran pemimpin dan mengarahkan", type: "D" }, { text: "Menjaga semangat tim dan membangun hubungan", type: "I" }, { text: "Menjadi pendengar dan penengah yang baik", type: "S" }, { text: "Menjaga struktur dan memastikan ketepatan", type: "C" }] },
    { question: "4. Saat menghadapi perubahan, saya biasanya:", options: [{ text: "Segera bertindak dan menyesuaikan diri", type: "D" }, { text: "Menyambut dengan antusias dan semangat baru", type: "I" }, { text: "Membutuhkan waktu untuk merasa nyaman", type: "S" }, { text: "Menganalisis terlebih dahulu dampaknya", type: "C" }] },
    { question: "5. Gaya komunikasi saya lebih cenderung:", options: [{ text: "Langsung, singkat, dan jelas", type: "D" }, { text: "Ceria, ekspresif, dan spontan", type: "I" }, { text: "Tenang, penuh empati, dan ramah", type: "S" }, { text: "Terstruktur, sopan, dan berbasis data", type: "C" }] },
    { question: "6. Dalam menghadapi tekanan deadline, saya:", options: [{ text: "Fokus pada hasil dan cepat menyelesaikan tugas", type: "D" }, { text: "Mencari bantuan atau mengajak kolaborasi", type: "I" }, { text: "Menjaga suasana agar tetap tenang dan nyaman", type: "S" }, { text: "Membuat daftar prioritas dan mengikuti langkah kerja", type: "C" }] },
    { question: "7. Saat menyampaikan ide, saya lebih suka:", options: [{ text: "Menyampaikan inti ide dengan tegas", type: "D" }, { text: "Menceritakan dengan semangat dan antusiasme", type: "I" }, { text: "Menyesuaikan cara bicara agar tidak menyinggung", type: "S" }, { text: "Menyusun data pendukung sebelum berbicara", type: "C" }] },
    { question: "8. Ketika bertugas di proyek baru, saya:", options: [{ text: "Langsung mulai dan cari tantangan", type: "D" }, { text: "Senang bertemu orang baru dan bekerja kelompok", type: "I" }, { text: "Ingin tahu siapa saja yang akan saya bantu", type: "S" }, { text: "Membaca semua panduan terlebih dahulu", type: "C" }] },
    { question: "9. Jika ada masalah di tim, saya cenderung:", options: [{ text: "Segera selesaikan dan ambil tindakan", type: "D" }, { text: "Mencairkan suasana agar tidak tegang", type: "I" }, { text: "Mendengarkan semua pihak terlebih dahulu", type: "S" }, { text: "Mencari tahu penyebab pastinya dengan teliti", type: "C" }] },
    { question: "10. Dalam mengambil keputusan penting, saya:", options: [{ text: "Fokus pada hasil dan objektif", type: "D" }, { text: "Melibatkan orang lain agar lebih dinamis", type: "I" }, { text: "Memastikan semua orang nyaman", type: "S" }, { text: "Berdasarkan data dan pertimbangan matang", type: "C" }] },
    { question: "11. Dalam menyelesaikan tugas, saya:", options: [{ text: "Suka tantangan dan hasil cepat", type: "D" }, { text: "Butuh suasana menyenangkan", type: "I" }, { text: "Perlu kenyamanan dan ritme stabil", type: "S" }, { text: "Senang membuat checklist dan analisis", type: "C" }] },
    { question: "12. Saat diskusi tim, saya:", options: [{ text: "Menyampaikan pendapat dengan yakin", type: "D" }, { text: "Antusias dan ekspresif", type: "I" }, { text: "Mendukung dan menenangkan tim", type: "S" }, { text: "Teliti dan hati-hati dalam berpendapat", type: "C" }] },
    { question: "13. Ketika diberikan kebebasan, saya:", options: [{ text: "Menentukan tujuan dan langsung bekerja", type: "D" }, { text: "Mencari teman kerja dan kolaborasi", type: "I" }, { text: "Menyesuaikan ritme dan membantu tim", type: "S" }, { text: "Membuat rencana dan evaluasi risiko", type: "C" }] },
    { question: "14. Gaya kerja saya lebih ke arah:", options: [{ text: "Cepat, to the point, dan kompetitif", type: "D" }, { text: "Energik, kreatif, dan spontan", type: "I" }, { text: "Stabil, ramah, dan suportif", type: "S" }, { text: "Teliti, logis, dan sistematis", type: "C" }] },
    { question: "15. Jika tim dalam kondisi tidak ideal, saya:", options: [{ text: "Tetap fokus dan dorong hasil", type: "D" }, { text: "Menghibur agar semangat kembali", type: "I" }, { text: "Menenangkan agar suasana kondusif", type: "S" }, { text: "Analisis masalah dan cari akar penyebab", type: "C" }] },
    { question: "16. Saat presentasi, saya:", options: [{ text: "Langsung ke inti pesan dan solusi", type: "D" }, { text: "Gunakan humor dan energi tinggi", type: "I" }, { text: "Jaga suasana nyaman dan terhubung", type: "S" }, { text: "Beri data, grafik, dan penjelasan runtut", type: "C" }] },
    { question: "17. Jika atasan memberi kritik, saya:", options: [{ text: "Terima dan segera perbaiki", type: "D" }, { text: "Tanyakan sambil tersenyum", type: "I" }, { text: "Pikirkan dulu dan renungkan", type: "S" }, { text: "Catat dan evaluasi", type: "C" }] },
    { question: "18. Dalam tim, saya dikenal sebagai orang yang:", options: [{ text: "Tegas dan berani ambil keputusan", type: "D" }, { text: "Ceria dan penuh semangat", type: "I" }, { text: "Sabar dan penengah", type: "S" }, { text: "Teliti dan detail", type: "C" }] },
    { question: "19. Ketika mendapat tugas baru, saya:", options: [{ text: "Ingin segera menyelesaikan sebaik mungkin", type: "D" }, { text: "Cari teman kerja untuk diskusi", type: "I" }, { text: "Lihat bagaimana dampaknya pada orang lain", type: "S" }, { text: "Minta SOP dan instruksi terlebih dahulu", type: "C" }] },
    { question: "20. Dalam situasi darurat, saya:", options: [{ text: "Langsung bertindak", type: "D" }, { text: "Ajak orang lain bekerja sama", type: "I" }, { text: "Pastikan semua aman secara emosional", type: "S" }, { text: "Pikirkan konsekuensi dan langkah terstruktur", type: "C" }] },
    { question: "21. Saat bekerja, saya lebih suka:", options: [{ text: "Tujuan yang jelas dan hasil cepat", type: "D" }, { text: "Lingkungan seru dan tidak kaku", type: "I" }, { text: "Ritme tenang dan tidak terburu-buru", type: "S" }, { text: "Struktur kerja yang jelas dan detail", type: "C" }] },
    { question: "22. Jika harus memilih peran, saya lebih suka:", options: [{ text: "Pemimpin atau pengambil keputusan", type: "D" }, { text: "Presenter atau penghubung tim", type: "I" }, { text: "Pendengar dan penyeimbang", type: "S" }, { text: "Pengelola data dan sistem kerja", type: "C" }] },
    { question: "23. Saat diberi target tinggi, saya:", options: [{ text: "Tertantang dan siap ngebut", type: "D" }, { text: "Ajukan ide kreatif dan libatkan tim", type: "I" }, { text: "Minta arahan jelas dan waktu stabil", type: "S" }, { text: "Minta acuan data dan strategi jelas", type: "C" }] },
    { question: "24. Kalau tim tidak kompak, saya akan:", options: [{ text: "Tegur dan ambil alih kendali", type: "D" }, { text: "Bikin games atau candaan", type: "I" }, { text: "Dampingi yang merasa tertekan", type: "S" }, { text: "Identifikasi masalah sistem dan peran", type: "C" }] }
];

// NARASI 5 MODE DISC LENGKAP & DETAIL
const fullNarratives5Modes = {
    "Dominance": {
        // Mode Umum (Dipertahankan)
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Dalam menghadapi dinamika lingkungan dan tantangan, profil Dominance merespons dengan determinasi tinggi, ketegasan, dan dorongan kuat mengendalikan situasi. Memandang masalah sebagai hal yang harus diselesaikan cepat dengan orientasi hasil konkret.<br><br><b>Kekuatan & Tantangan Respons:</b> Tangguh di bawah tekanan kritis, berani mengambil risiko, dan mandiri. Namun, di bawah tekanan tinggi bisa terkesan mendominasi atau kurang sabar terhadap proses bertahap.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran pengarah inisiatif baru, penentu target, negosiator utama, dan pemecah kebuntuan.<br><br><b>Saran Pengembangan:</b> Latihlah empati mendengar sebelum memutuskan agar ketegasan tidak dirasakan sebagai intimidasi.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Direct & Action-Driven. Cepat mencari solusi tanpa kompromi bertele-tele.<br><br><b>Partner Sinergi:</b> Membutuhkan figur pendukung yang teliti (C) dan penjaga harmoni (S).<br><br><b>Panduan Komunikasi:</b> Bicaralah langsung ke inti masalah, sediakan opsi solusi nyata, dan hargai efisiensi waktu.</div>`,

        // Mode Bisnis & HCM (Dipertahankan)
        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Dominance merespons dinamika bisnis dengan dorongan kuat mencapai bottom-line results. Memandang dinamika pasar sebagai arena ekspansi, efisiensi eksekusi, dan pencapaian target organisasi yang agresif.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul dalam percepatan target (scale-up), negosiasi strategis, dan kepemimpinan krisis. Tantangannya adalah potensi mengabaikan kepatuhan sistem atau kelelahan tim.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Penentu arah visi bisnis, akselerator skala organisasi, restrukturisasi divisi, dan eksekutor lapangan.<br><br><b>Saran Pengembangan:</b> Terapkan komunikasi dua arah dan percayakan sistem delegasi yang terukur kepada jajaran manajerial.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Direct & Fast-Paced. Mendorong pencapaian KPI dengan standar eksekusi tinggi.<br><br><b>Sinergi Tim:</b> Sangat membutuhkan mitra Compliance (kontrol SOP/keuangan) dan Steadiness (retensi staf).<br><br><b>Panduan Komunikasi:</b> Sampaikan arahan to-the-point, fokus solusi objektif, dan tentukan target terukur.</div>`,

        // Mode Parenting (Diperdetail)
        leftParenting: `<b>Karakteristik Pengasuhan & Keteladanan:</b><br>Orang tua tipe Dominance memimpin keluarga dengan arah yang sangat jelas, ketegasan prinsip, dan dorongan kuat agar anak memiliki mental baja sejak dini. Anda secara alami menanamkan nilai kemandirian, keberanian mengambil keputusan, dan tanggung jawab penuh atas konsekuensi tindakan pribadi.<br><br><b>Kekuatan & Tantangan Pengasuhan:</b> Menjadi figur pelindung keluarga yang sigap saat krisis dan sangat tangguh membela anak. Namun saat menghadapi anak yang lamban, rewel, atau menolak arahan, respon alaminya rentan menuntut kepatuhan mutlak secara sepihak dan terjebak adu ego.<br><br><b>Kecenderungan Peran & Kontribusi Keluarga:</b> Pengambil keputusan strategis pendidikan anak, pelatih disiplin praktis, penanam daya juang hidup, dan pembentuk etos kerja keluarga.<br><br><b>Saran Transformasi Pengasuhan:</b> Gantikan instruksi satu arah dengan memberikan opsi pilihan terkontrol agar anak merasa dihargai kemandiriannya. Dengarkan isi hati anak sebelum menetapkan aturan.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Harmony Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan rasa aman bahwa kasih sayang orang tua tidak bersyarat pada piala atau kepatuhan mutlak, melainkan pada penerimaan utuh.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Turunkan dominasi di rumah. Diskusikan batasan keluarga bersama pasangan secara setara agar anak tidak melihat perpecahan otoritas.<br><br><b>Panduan Menegur Anak:</b> Rendahkan intonasi suara, tatap mata anak secara sejajar dengan kehangatan, dan jelaskan alasan rasional di balik setiap konsekuensi.</div>`,

        // Mode Pemuda (Diperdetail)
        leftYouth: `<b>Karakteristik Kepemimpinan & Potensi Diri:</b><br>Pemuda profil Dominance didorong oleh motivasi kuat untuk berprestasi, mandiri, dan menjadi penggerak perubahan di lingkungannya. Memiliki keberanian mendobrak zona nyaman, tangguh bersaing secara sehat, dan selalu terpacu menyelesaikan target konkret tanpa bergantung pada orang lain.<br><br><b>Kekuatan & Tantangan Respons:</b> Memiliki inisiatif tinggi, lugas mengambil keputusan di masa kritis, dan tidak mudah gentar oleh kegagalan. Tantangannya adalah potensi bersikap dominan di kerja kelompok, gengsi mengakui kekurangan, serta kurang sabar terhadap proses rekan.<br><br><b>Arah Kontribusi & Minat Karier:</b> Sangat optimal memegang peran ketua tim proyek, perintis inisiatif wirausaha, bidang Manajemen Bisnis, Hukum/Advokasi, Teknik Industri, dan Eksekutif Operasional.<br><br><b>Saran Self-Leadership:</b> Tumbuhkan kerendahan hati untuk mendengar. Sadari bahwa pencapaian besar dalam karier masa depan dibangun melalui kekuatan kolaborasi tim, bukan kecepatan pribadi semata.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Strategic Insight:</b><br><br><b>Gaya Kolaborasi Tim:</b> Berperan sebagai penggerak akselerasi tugas dan penentu arah taktis saat kelompok mengalami kebuntuan ide atau terdesak deadline.<br><br><b>Ekosistem Tumbuh Ideal:</b> Inkubator bisnis rintisan, kepengurusan dewan pimpinan organisasi, kompetisi studi kasus, atau tim ekspedisi lapangan.<br><br><b>Panduan Komunikasi Interpersonal:</b> Sampaikan masukan secara santun dan konstruktif. Hindari nada memerintah agar relasi jejaring rekan tetap terjaga solid.</div>`,

        // Mode Guru & Pendidik (Diperdetail)
        leftEducator: `<b>Karakteristik & Gaya Mengajar Alami:</b><br>Guru dengan profil Dominance tampil sebagai pendidik yang berwibawa, lugas, tegas, dan memiliki orientasi sangat kuat pada ketuntasan target belajar. Anda mengelola ruang kelas dengan disiplin tinggi, menantang siswa melampaui batas kemampuannya, dan tidak menoleransi sikap bermalas-malasan.<br><br><b>Kekuatan & Tantangan Pedagogis:</b> Sangat piawai mengendalikan ketertiban kelas, menanamkan etos kerja keras siswa, dan cekatan mengatasi dinamika darurat sekolah. Tantangannya adalah gaya instruksi yang terlalu cepat atau tajam dapat membuat siswa pemalu merasa cemas.<br><br><b>Kecenderungan Peran di Sekolah:</b> Koordinator kedisiplinan siswa, penanggung jawab target kelulusan/ujian, ketua panitia kegiatan besar, dan pengambil keputusan strategis.<br><br><b>Saran Transformasi Pembelajaran:</b> Berikan apresiasi pada proses belajar bertahap dan daya juang siswa, bukan hanya terpaku pada angka nilai akhir. Hadirkan ruang dialog yang ramah sebelum memberi sanksi.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Management Insight:</b><br><br><b>Diferensiasi Siswa:</b> Pahami bahwa siswa tipe Steadiness dan Compliance butuh waktu mencerna instruksi; hindari langsung menganggap keraguan mereka sebagai kemalasan.<br><br><b>Disiplin Adaptif:</b> Panggil siswa yang melanggar aturan secara privat (empat mata). Hindari menegur keras di depan umum agar motivasi intrinsik siswa tidak padam.<br><br><b>Sinergi Dewan Guru:</b> Berikan ruang bagi rekan guru lain untuk menyampaikan pandangan dalam rapat kurikulum tanpa memaksakan standar pribadi.</div>`
    },

    "Influence": {
        // Mode Umum (Dipertahankan)
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Influence merespons lingkungan melalui antusiasme, keramahan, dan komunikasi persuasif. Memandang lingkungan sebagai ruang sosial yang dapat digerakkan dengan optimisme dan interaksi terbuka.<br><br><b>Kekuatan & Tantangan Respons:</b> Piawai mencairkan suasana, membangun jejaring luas, dan memotivasi orang lain. Di bawah tekanan, rentan menghindari urusan administratif detail atau inkonsisten.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran komunikasi publik, hubungan relasi, presentasi kreatif, dan penggerak moral kelompok.<br><br><b>Saran Pengembangan:</b> Biasakan mencatat komitmen kerja dan selesaikan satu tugas tuntas sebelum memulai hal baru.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Relational & Expressive. Mencari interaksi suportif dan mencairkan suasana canggung.<br><br><b>Partner Sinergi:</b> Memerlukan figur terstruktur yang disiplin mengawal jadwal dan detail teknis.<br><br><b>Panduan Komunikasi:</b> Sampaikan apresiasi tulus, gunakan nada hangat, lalu pastikan rencana dicatat tertulis.</div>`,

        // Mode Bisnis & HCM (Dipertahankan)
        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Influence menggerakkan bisnis melalui energi antusiasme, promosi kreatif, dan jejaring relasi luas. Sangat kuat dalam membangun daya tarik brand dan budaya kerja positif.<br><br><b>Kekuatan & Tantangan Respons:</b> Unggul dalam negosiasi kemitraan, aktivasi penjualan, dan retensi klien. Tantangannya adalah kedisiplinan alur SOP serta pencatatan data rutin.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Duta brand (PR), business development, penggalangan relasi investor, dan motivator tim promosi.<br><br><b>Saran Pengembangan:</b> Terapkan checklist akuntabilitas tertulis dan gandeng rekan operasional yang teliti mengawal detail.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Inspiratif & People-Centric. Memimpin lewat kedekatan personal dan memupuk antusiasme kerja.<br><br><b>Sinergi Tim:</b> Sangat memerlukan mitra Compliance (audit SOP/keuangan) dan Dominance (penjaga fokus target).<br><br><b>Panduan Komunikasi:</b> Gunakan pendekatan hangat dan komunikatif, tetapi dokumentasikan kesepakatan secara rapi.</div>`,

        // Mode Parenting (Diperdetail)
        leftParenting: `<b>Karakteristik Pengasuhan & Keteladanan:</b><br>Orang tua tipe Influence membawa kehangatan, tawa, optimisme, dan suasana yang sangat ceria ke dalam rumah. Anda memandang pengasuhan sebagai ruang persahabatan, gemar merayakan setiap momen kebersamaan, dan secara alami mahir mengekspresikan rasa sayang serta pelukan hangat kepada anak.<br><br><b>Kekuatan & Tantangan Pengasuhan:</b> Anak merasa sangat nyaman berbagi cerita dan tidak canggung mengekspresikan diri. Namun saat menghadapi rutinitas harian yang monoton atau saat anak tantrum berkepanjangan, Anda rentan bersikap kurang konsisten dalam menegakkan aturan dan suasana hati mudah drop.<br><br><b>Kecenderungan Peran & Kontribusi Keluarga:</b> Pembangun rasa percaya diri anak, pencipta memori emosional positif keluarga, pemotivasi bakat kreatif, dan perekat keakraban sosial anak.<br><br><b>Saran Transformasi Pengasuhan:</b> Buat papan kesepakatan aturan bergambar atau tertulis di rumah. Latihlah ketenangan batin agar tidak merespons kerewelan anak secara impulsif atau terbawa emosi sesaat.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Harmony Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan kehadiran yang fokus dan utuh, bukan hanya perhatian saat suasana hati orang tua sedang bahagia atau senggang.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Libatkan pasangan untuk menjaga ketertiban jadwal belajar anak. Hindari mengubah batasan izin anak secara sepihak tanpa koordinasi.<br><br><b>Panduan Menegur Anak:</b> Dengarkan cerita anak sampai selesai tanpa tergesa memotong, tahan diri dari bereaksi berlebihan, lalu tegakkan konsekuensi secara konsisten.</div>`,

        // Mode Pemuda (Diperdetail)
        leftYouth: `<b>Karakteristik Kepemimpinan & Potensi Diri:</b><br>Pemuda tipe Influence memiliki karisma alami, kecerdasan sosial tinggi, dan kemampuan komunikasi verbal yang sangat memikat. Anda menjadi perekat pergaulan yang cepat membangun jejaring baru, memancarkan energi positif, serta mahir menularkan semangat pada rekan kelompok.<br><br><b>Kekuatan & Tantangan Respons:</b> Unggul dalam presentasi publik, negosiasi kemitraan organisasi, dan mencairkan suasana tegang. Tantangannya adalah godaan mengikuti terlalu banyak kegiatan (FOMO), mudah menunda pengerjaan tugas administratif, serta cepat jenuh pada rutinitas.<br><br><b>Arah Kontribusi & Minat Karier:</b> Sangat berkembang di bidang Ilmu Komunikasi, Hubungan Masyarakat (PR), Pemasaran Kreatif, Penyiaran/Media, Manajemen Acara, dan Diplomasi Publik.<br><br><b>Saran Self-Leadership:</b> Tumbuhkan prinsip menuntaskan apa yang telah dimulai (finisher mindset). Pilih 1-2 kegiatan prioritas utama dan gunakan agenda harian tertulis untuk menjaga konsistensi belajar.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Strategic Insight:</b><br><br><b>Gaya Kolaborasi Tim:</b> Menjadi juru bicara tim, penghubung relasi eksternal kampus/organisasi, dan inisiator ide kreatif yang menghidupkan dinamika kerja tim.<br><br><b>Ekosistem Tumbuh Ideal:</b> Komunitas kreatif, forum public relations kepemudaan, program pertukaran budaya, atau kepanitiaan festival.<br><br><b>Panduan Komunikasi Interpersonal:</b> Susun poin presentasi secara runtut dan berbasis data. Latih kedisiplinan mendengarkan rekan tanpa terburu-buru menyela pembicaraan.</div>`,

        // Mode Guru & Pendidik (Diperdetail)
        leftEducator: `<b>Gaya Mengajar Alami & Pedagogis:</b><br>Guru tipe Influence adalah komunikator kelas yang memikat, energetik, ekspresif, dan penuh humor. Anda mampu mengemas materi yang rumit menjadi sajian cerita atau analogi menarik sehingga siswa antusias belajar dan tidak merasa jenuh di ruang kelas.<br><br><b>Kekuatan & Tantangan Pedagogis:</b> Sangat cepat membangun kedekatan batin dengan siswa dan mampu memantik keberanian siswa yang minder untuk aktif berbicara. Tantangannya adalah alokasi waktu jam pelajaran yang kerap melebar serta keengganan menyelesaikan laporan administratif kurikulum.<br><br><b>Kecenderungan Peran di Sekolah:</b> Penggerak kegiatan kesiswaan/ekskul, pembawa acara resmi sekolah, koordinator hubungan masyarakat (Humas), dan pembina kreativitas seni/bahasa.<br><br><b>Saran Transformasi Pembelajaran:</b> Gunakan pengingat waktu (timer) terstruktur untuk setiap bab pelajaran, serta buat catatan rekapitulasi tugas agar penilaian siswa tetap tertib dan objektif.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Management Insight:</b><br><br><b>Diferensiasi Siswa:</b> Dekati siswa pendiam secara personal di mejanya tanpa langsung memaksa mereka maju ke depan kelas agar rasa percaya dirinya tumbuh aman.<br><br><b>Disiplin Adaptif:</b> Hindari melupakan sanksi pelanggaran yang telah disepakati hanya karena merasa iba, agar siswa tidak meremehkan ketegasan guru.<br><br><b>Sinergi Dewan Guru:</b> Jalin kerja sama dengan rekan guru yang teliti dalam administrasi berkas kurikulum agar dokumen penilaian sekolah selesai tepat waktu.</div>`
    },

    "Steadiness": {
        // Mode Umum (Dipertahankan)
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Steadiness merespons lingkungan dengan mengutamakan kestabilan, ketenangan, dan kesetiaan proses. Memandang lingkungan sebagai ekosistem kerja sama yang membutuhkan rasa aman dan konsistensi.<br><br><b>Kekuatan & Tantangan Respons:</b> Pendengar luar biasa, tekun menjalankan rutinitas, dan handal meredam konflik. Di bawah tekanan perubahan mendadak, cenderung pasif atau lambat mengambil sikap tegas.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran pendukung operasional inti, pemelihara harmoni kelompok, mediator, dan eksekutor prosedur teratur.<br><br><b>Saran Pengembangan:</b> Latihlah ketegasan (asertif) menyuarakan pandangan pribadi dan lebih terbuka pada perubahan baru.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Patient & Accommodating. Menjaga ritme damai dan melindungi lingkungan dari pertengkaran.<br><br><b>Partner Sinergi:</b> Memerlukan figur inisiator yang berani memacu akselerasi dan target baru.<br><br><b>Panduan Komunikasi:</b> Bicaralah dengan ramah, berikan kejelasan alur, dan sediakan waktu pemrosesan informasi.</div>`,

        // Mode Bisnis & HCM (Dipertahankan)
        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Steadiness mengelola ritme bisnis berbasis loyalitas, keandalan operasional, dan kepuasan pelanggan jangka panjang. Menjaga organisasi tetap kokoh melalui stabilitas internal.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul menjaga retensi karyawan dan konsistensi layanan. Tantangannya adalah keraguan saat harus pivot bisnis mendadak atau menegur staf bermasalah.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Penguatan fondasi operasional, pemeliharaan hubungan klien inti, manajemen SDM internal, dan penjaga ritme harian.<br><br><b>Saran Pengembangan:</b> Latih keberanian mengambil keputusan cepat di tengah dinamika pasar dan tegakkan standar kinerja tegas.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> Servant Leadership & Konsisten. Memimpin dengan keteladanan, kesabaran, dan dukungan tim.<br><br><b>Sinergi Tim:</b> Sangat memerlukan mitra Dominance (akselerasi target) dan Influence (ekspansi pasar).<br><br><b>Panduan Komunikasi:</b> Ciptakan komunikasi yang aman secara psikologis dan beri waktu adaptasi sistem baru.</div>`,

        // Mode Parenting (Diperdetail)
        leftParenting: `<b>Karakteristik Pengasuhan & Keteladanan:</b><br>Orang tua tipe Steadiness adalah oase ketenangan, kesabaran, dan kedamaian di dalam rumah tangga. Anda mendidik dengan kelembutan tutur kata, menerima keunikan anak apa adanya, dan senantiasa menjadi tempat bersandar yang sangat aman bagi anak saat mereka menghadapi ketakutan di luar rumah.<br><br><b>Kekuatan & Tantangan Pengasuhan:</b> Suasana rumah terasa sejuk, bebas intimidasi, dan stabil secara emosional. Namun titik kritisnya adalah kecenderungan terlalu membiarkan (permissive), enggan menegur sejak dini karena takut merusak suasana damai, serta menunda pendisiplinan anak.<br><br><b>Kecenderungan Peran & Kontribusi Keluarga:</b> Penjaga keharmonisan batin keluarga, pendengar setia keluh kesah anak, penengah perselisihan antarsaudara, dan pemelihara rutinitas harian yang nyaman.<br><br><b>Saran Transformasi Pengasuhan:</b> Sadari bahwa ketegasan aturan adalah wujud nyata perlindungan orang tua. Latihlah ketegasan menegakkan batasan harian yang disepakati tanpa merasa bersalah pada anak.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Harmony Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan kepastian batasan yang jelas agar merasa memiliki pegangan hidup yang aman dan terarah.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Ambil inisiatif aktif bersama pasangan dalam mendisiplinkan anak agar pasangan tidak merasa berjuang sendirian.<br><br><b>Panduan Menegur Anak:</b> Tatap mata anak dengan hangat namun mantap, sampaikan instruksi dengan kalimat lugas, dan jangan bergeming saat anak merajuk menolak tugas.</div>`,

        // Mode Pemuda (Diperdetail)
        leftYouth: `<b>Karakteristik Kepemimpinan & Potensi Diri:</b><br>Pemuda tipe Steadiness memiliki stabilitas emosi yang matang, loyalitas persahabatan yang kokoh, dan keandalan tinggi dalam mengemban amanah kelompok. Anda adalah tipe rekan yang tekun menuntaskan tugas di balik layar, tidak mudah panik saat terjadi kendala, dan selalu menjaga keutuhan tim.<br><br><b>Kekuatan & Tantangan Respons:</b> Pendengar yang sangat objektif, sabar menghadapi perbedaan karakter, dan tekun dalam rutinitas kerja tim. Tantangannya adalah kecenderungan menunda keputusan (prokrastinasi), pasif menunggu instruksi, dan enggan menolak beban tugas rekan.<br><br><b>Arah Kontribusi & Minat Karier:</b> Sangat berkembang di bidang Ilmu Keguruan/Pendidikan, Psikologi/Konseling, Administrasi Pemerintahan, Pelayanan Medis/Kesehatan, Mediasi Sosial, dan Manajemen SDM Operasional.<br><br><b>Saran Self-Leadership:</b> Latihlah keberanian menyuarakan opini di forum diskusi. Pasang target tenggat waktu mandiri dan ambil inisiatif tindakan awal tanpa harus menunggu perintah rekan lain.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Strategic Insight:</b><br><br><b>Gaya Kolaborasi Tim:</b> Menjadi pilar soliditas tim yang menjaga keharmonisan kelompok, meredam perselisihan rekan, dan setia mengawal kelancaran tugas harian.<br><br><b>Ekosistem Tumbuh Ideal:</b> Lembaga sosial kemasyarakatan, divisi kesekretariatan organisasi, komunitas sukarelawan, atau tim penelitian bersama.<br><br><b>Panduan Komunikasi Interpersonal:</b> Nyatakan pendapat dan batas kesanggupan pribadi secara santun namun tegas saat pembagian beban tugas kelompok dirasa tidak adil.</div>`,

        // Mode Guru & Pendidik (Diperdetail)
        leftEducator: `<b>Gaya Mengajar Alami & Pedagogis:</b><br>Guru tipe Steadiness adalah sosok pendidik yang sabar, teduh, ramah, dan menghadirkan rasa aman yang luar biasa bagi seluruh murid. Anda mengajar dengan ritme yang stabil, penuh perhatian pada anak yang tertinggal, serta sangat telaten mendampingi siswa memahami materi secara bertahap.<br><br><b>Kekuatan & Tantangan Pedagogis:</b> Piawai meredakan ketakutan belajar siswa dan menjadi penengah yang adil saat terjadi konflik antarsiswa. Tantangannya adalah kecenderungan terlalu memaklumi pelanggaran tata tertib dan enggan bersikap tegas sejak dini sehingga kelas mudah kendor.<br><br><b>Kecenderungan Peran di Sekolah:</b> Konselor Bimbingan Konseling (BK), wali kelas teladan, pembina program inklusi/pendampingan khusus, dan penjaga iklim kerukunan guru.<br><br><b>Saran Transformasi Pembelajaran:</b> Bangun kontrak belajar yang jelas sejak pertemuan pertama. Latihlah keberanian menegur pelanggaran tata tertib seketika dengan tenang tanpa keraguan batin.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Management Insight:</b><br><br><b>Diferensiasi Siswa:</b> Berikan saluran peran aktif bagi siswa yang agresif (tipe D) agar energinya tersalur positif membantu ketertiban ruang kelas.<br><br><b>Disiplin Adaptif:</b> Tegur pelanggaran seketika dengan nada bicara rendah namun tegas, tatap mata siswa dengan mantap, dan pastikan sanksi edukatif dijalankan tuntas.<br><br><b>Sinergi Dewan Guru:</b> Jadilah penyeimbang dan penyejuk di ruang dewan guru saat terjadi ketegangan rapat, namun tetap berani menyuarakan aspirasi pengajaran Anda.</div>`
    },

    "Compliance": {
        // Mode Umum (Dipertahankan)
        leftGeneral: `<b>Karakteristik & Respons Perilaku:</b><br>Profil Compliance bertindak berbasis data, logika objektif, dan kepatuhan prosedur. Memandang lingkungan sebagai tatanan yang harus dijalankan dengan presisi, akurasi tinggi, dan standar mutu baku.<br><br><b>Kekuatan & Tantangan Respons:</b> Teliti dalam analisis risiko, sistematis, dan konsisten menjaga standar kualitas. Di bawah tekanan, rentan terjebak analisis berlebih (overthinking) atau terlalu kritis.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran penyusunan SOP, analisa data/keuangan, kontrol mutu (QC), mitigasi risiko, dan audit proses.<br><br><b>Saran Pengembangan:</b> Tingkatkan fleksibilitas terhadap situasi praktis dan bangun komunikasi kerja yang lebih hangat.`,
        rightGeneral: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Personal & Leadership Insight:</b><br><br><b>Respons Tekanan:</b> Systematic & Evidential. Mengumpulkan fakta logis dan memastikan tidak ada celah kesalahan.<br><br><b>Partner Sinergi:</b> Memerlukan figur visioner yang berani mengambil keputusan cepat di saat darurat.<br><br><b>Panduan Komunikasi:</b> Sediakan parameter data yang valid, alur penjelasan runtut, dan hindari instruksi ambigu.</div>`,

        // Mode Bisnis & HCM (Dipertahankan)
        leftBusiness: `<b>Karakteristik & Respons Perilaku:</b><br>Individu Compliance mengelola bisnis berbasis presisi angka, tata kelola sistem yang tertib, dan mitigasi risiko yang ketat. Menjaga bisnis beroperasi secara efisien dengan margin kesalahan minimal.<br><br><b>Kekuatan & Tantangan Respons:</b> Sangat unggul dalam rekayasa SOP, audit keuangan, dan kontrol mutu produk. Tantangannya adalah potensi terjebak analisis terlalu lama sebelum merespons peluang baru.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Perancang sistem kerja & SOP, pengendalian kualitas (QC), manajemen risiko, dan tata kelola keuangan.<br><br><b>Saran Pengembangan:</b> Tingkatkan toleransi terhadap eksperimen pasar awal dan jalin komunikasi luwes dengan divisi kreatif.`,
        rightBusiness: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Business & Leadership Insight:</b><br><br><b>Gaya Kepemimpinan:</b> System-Driven & Metodis. Memimpin berbasis fakta objektif dan parameter kerja terukur.<br><br><b>Sinergi Tim:</b> Sangat membutuhkan mitra Influence (pemasaran/relasi) dan Dominance (terobosan pasar cepat).<br><br><b>Panduan Komunikasi:</b> Sampaikan evaluasi berbasis data indikator objektif tanpa terkesan mencari kesalahan.</div>`,

        // Mode Parenting (Diperdetail)
        leftParenting: `<b>Karakteristik Pengasuhan & Keteladanan:</b><br>Orang tua tipe Compliance mendidik dengan standar moral, tata krama, dan keteraturan hidup yang sangat tinggi. Anda sangat teliti memperhatikan kebutuhan gizi, kesehatan, dan jadwal belajar anak, serta secara konsisten menanamkan prinsip kejujuran, keadilan, dan ketepatan janji di lingkungan keluarga.<br><br><b>Kekuatan & Tantangan Pengasuhan:</b> Sangat terencana dalam menjamin masa depan dan keamanan anak. Namun titik kritisnya adalah kecenderungan cemas berlebih (overparenting), menuntut kesempurnaan perilaku yang membuat anak takut salah, serta sensitif saat rumah tidak tertib.<br><br><b>Kecenderungan Peran & Kontribusi Keluarga:</b> Perancang disiplin jadwal rumah, pengelola anggaran keuangan keluarga yang hemat, penanam adab sopan santun, dan pengawas mutu belajar anak.<br><br><b>Saran Transformasi Pengasuhan:</b> Tanamkan penerimaan bahwa kekeliruan anak adalah bagian wajar dari eksplorasi usia tumbuh kembang. Berikan pujian hangat pada usaha anak tanpa menuntut kesempurnaan instan.`,
        rightParenting: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Parenting & Family Harmony Insight:</b><br><br><b>Kebutuhan Emosional Anak:</b> Anak membutuhkan rasa aman bahwa cinta orang tua bersifat tanpa syarat, bukan hanya diberikan saat anak meraih nilai sempurna.<br><br><b>Sinergi Pasangan (Co-Parenting):</b> Hargai niat baik pasangan meski caranya berbeda dari standar Anda. Hindari mengoreksi gaya pengasuhan pasangan di hadapan anak.<br><br><b>Panduan Menegur Anak:</b> Batasi poin teguran pada masalah saat ini. Sampaikan bimbingan perbaikan dengan kalimat yang ringkas dan nada yang penuh kasih sayang.</div>`,

        // Mode Pemuda (Diperdetail)
        leftYouth: `<b>Karakteristik Kepemimpinan & Potensi Diri:</b><br>Pemuda tipe Compliance memiliki kedalaman intelektual yang tajam, berpikir analitis, teliti, dan bertanggung jawab moral atas mutu karya yang dibuat. Anda memiliki integritas tinggi pada fakta akademis, tertib menata rencana studi, dan tidak mudah tergiur jalan pintas yang tidak beretika.<br><br><b>Kekuatan & Tantangan Respons:</b> Memiliki daya konsentrasi tinggi pada problem rumit dan teliti memitigasi kesalahan laporan. Tantangannya adalah perfeksionisme berlebih yang menunda penyelesaian tugas (analysis paralysis) serta mudah tertekan oleh kritik langsung.<br><br><b>Arah Kontribusi & Minat Karier:</b> Sangat berkembang di bidang Sains Data, Akuntansi/Keuangan, Teknologi Informasi/Software Engineer, Kedokteran/Farmasi, Riset Ilmiah, dan Arsitektur Presisi.<br><br><b>Saran Self-Leadership:</b> Tanamkan prinsip 'progress over perfection': berani mencoba dan mengumpulkan karya tanpa harus menunggu kondisi 100% sempurna. Maklumi bahwa kegagalan kecil adalah data belajar.`,
        rightYouth: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Youth & Career Strategic Insight:</b><br><br><b>Gaya Kolaborasi Tim:</b> Berperan sebagai pengendali mutu teknis dan akurasi data agar seluruh tugas kelompok tersusun secara valid, sistematis, dan bebas dari cacat data.<br><br><b>Ekosistem Tumbuh Ideal:</b> Lembaga riset ilmiah kampus, forum kajian akademis, kompetisi karya tulis ilmiah, atau divisi litbang organisasi.<br><br><b>Panduan Komunikasi Interpersonal:</b> Sampaikan koreksi tugas secara suportif. Pisahkan antara evaluasi teknis karya dengan penilaian terhadap kepribadian rekan tim.</div>`,

        // Mode Guru & Pendidik (Diperdetail)
        leftEducator: `<b>Gaya Mengajar Alami & Pedagogis:</b><br>Guru tipe Compliance mengajar dengan persiapan materi yang sangat matang, runtut, mendalam, dan selalu bersandar pada data rujukan ilmiah yang valid. Anda mendidik siswa untuk berpikir kritis, menjunjung tinggi kejujuran akademis, dan menerapkan standar evaluasi belajar yang adil dan objektif.<br><br><b>Kekuatan & Tantangan Pedagogis:</b> Sangat rapi dalam mengelola administrasi nilai dan andal membedah konsep kurikulum yang rumit. Tantangannya adalah ekspektasi standar yang terlalu kaku dapat membebani siswa serta guru rentan kecewa berat saat hasil ujian kelas menurun.<br><br><b>Kecenderungan Peran di Sekolah:</b> Perancang kisi-kisi dan materi kurikulum sekolah, koordinator pengawas mutu ujian, bendahara operasional, dan pengelola berkas akreditasi sekolah.<br><br><b>Saran Transformasi Pembelajaran:</b> Tanamkan growth mindset bahwa kekeliruan jawaban siswa adalah jembatan penting untuk belajar. Rayakan proses berpikir siswa tanpa menuntut hasil yang instan sempurna.`,
        rightEducator: `<div style="background:rgba(26,42,108,0.03); padding:10px; border-left:4px solid #c5a059;"><b>Teacher & Classroom Management Insight:</b><br><br><b>Diferensiasi Siswa:</b> Berikan ruang gerak bagi siswa tipe Sanguinis yang dinamis; jangan langsung menganggap keaktifan mereka sebagai bentuk ketidaktertiban.<br><br><b>Disiplin Adaptif:</b> Fokuskan teguran pada panduan perbaikan tugas yang konkret, hindari menceramahi daftar kesalahan masa lalu secara terperinci.<br><br><b>Sinergi Dewan Guru:</b> Sumbangkan keahlian analisa presisi Anda untuk menyusun modul ajar bersama tanpa bersikap terlalu kritis terhadap kekurangan rekan kerja.</div>`
    }
};

let currentIdx = 0, userName = "", userPhone = "", scores = { D: 0, I: 0, S: 0, C: 0 }, scoresLeast = { D: 0, I: 0, S: 0, C: 0 }, radarInstance = null;

// Submit Formulir Awal
document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value.trim();
    userPhone = document.getElementById('user-phone').value.trim();
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const q = quizQuestions[currentIdx];
    document.getElementById('question-text').textContent = `(${currentIdx + 1}/24) Pilih Paling & Bukan:`;
    const container = document.getElementById('options-container'); 
    container.innerHTML = '';
    
    q.options.forEach((opt) => {
        const row = document.createElement('div'); 
        row.className = 'option-row';
        row.innerHTML = `<input type="radio" name="most" value="${opt.type}" required> <input type="radio" name="least" value="${opt.type}" required> <span class="option-text">${opt.text}</span>`;
        container.appendChild(row);
    });
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / 24) * 100}%`;
}

// Navigasi Pertanyaan
document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const most = document.querySelector('input[name="most"]:checked').value;
    const least = document.querySelector('input[name="least"]:checked').value;
    
    if (most === least) return alert("Pilihan Paling dan Bukan harus berbeda!");
    
    scores[most]++; 
    scoresLeast[least]++; 
    currentIdx++;
    
    if (currentIdx < 24) {
        showQuestion();
    } else {
        calculateResult();
    }
});

// Perhitungan Skor & Integrasi Database
async function calculateResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    let max = -100, dominant = "D";
    for (let t in scores) { 
        let final = scores[t] - scoresLeast[t]; 
        if (final > max) { max = final; dominant = t; } 
    }
    
    const fullDom = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Compliance" }[dominant];
    
    // Label Mode Aktif
    const activeMode = getActiveMode();
    let modeLabel = "Umum";
    let idPrefix = "ARAYA-DISC-";
    if (activeMode === 'business') { modeLabel = "Bisnis/HCM"; idPrefix = "ARAYA-BIZ-"; }
    else if (activeMode === 'parenting') { modeLabel = "Parenting/Keluarga"; idPrefix = "ARAYA-PAR-"; }
    else if (activeMode === 'youth') { modeLabel = "Pemuda/Mahasiswa"; idPrefix = "ARAYA-YOU-"; }
    else if (activeMode === 'educator') { modeLabel = "Guru/Pendidik"; idPrefix = "ARAYA-EDU-"; }

    const testID = idPrefix + Math.floor(Math.random() * 9000 + 1000);
    
    // Tampilan Sensor Blur Inline & Kunci Seperti Personality Plus
    document.getElementById('result-title').innerHTML = `Hasil: <span id="blurred-personality" style="filter: blur(7px); -webkit-filter: blur(7px); user-select: none; letter-spacing: 2px; background: rgba(26,42,108,0.1); padding: 2px 12px; border-radius: 4px; display: inline-block;">${fullDom}</span> <span style="font-size: 14px; vertical-align: middle; color: #c5a059;">🔒 Terkunci</span>`;
    document.getElementById('result-description').textContent = `Halo ${userName}, peta spektrum kepribadian DISC Anda telah terpetakan. Silakan hubungi Tim Admin Araya Consulting untuk mendapatkan Kode Aktivasi sertifikat resmi Anda.`;
    
    // Format Pesan WhatsApp: Ditujukan ke Admin Profesional
    const waText = encodeURIComponent(`Halo Admin Araya Consulting, saya sudah selesai tes DISC dengan nama *${userName}* (Mode: *${modeLabel}*). Saya ingin membeli kode aktivasi untuk mendownload sertifikat.`);
    document.getElementById('buy-wa').href = `https://wa.me/${adminWA}?text=${waText}`;

    // Kirim Data ke Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            nama: userName, 
            whatsapp: userPhone, 
            hasil: fullDom + ` (${modeLabel})`,
            skorD: scores.D - scoresLeast.D, 
            skorI: scores.I - scoresLeast.I,
            skorS: scores.S - scoresLeast.S, 
            skorC: scores.C - scoresLeast.C,
            id: testID
        })
    });

    // Pemilihan Narasi Berdasarkan Mode Aktif
    let leftNarrative = fullNarratives5Modes[fullDom].leftGeneral;
    let rightNarrative = fullNarratives5Modes[fullDom].rightGeneral;

    if (activeMode === 'business') {
        leftNarrative = fullNarratives5Modes[fullDom].leftBusiness;
        rightNarrative = fullNarratives5Modes[fullDom].rightBusiness;
    } else if (activeMode === 'parenting') {
        leftNarrative = fullNarratives5Modes[fullDom].leftParenting;
        rightNarrative = fullNarratives5Modes[fullDom].rightParenting;
    } else if (activeMode === 'youth') {
        leftNarrative = fullNarratives5Modes[fullDom].leftYouth;
        rightNarrative = fullNarratives5Modes[fullDom].rightYouth;
    } else if (activeMode === 'educator') {
        leftNarrative = fullNarratives5Modes[fullDom].leftEducator;
        rightNarrative = fullNarratives5Modes[fullDom].rightEducator;
    }

    // Render Data Sertifikat
    document.getElementById('cert-user-name').textContent = userName.toUpperCase();
    document.getElementById('cert-phone-val').textContent = userPhone;
    document.getElementById('cert-type').textContent = fullDom;
    document.getElementById('cert-col-left').innerHTML = leftNarrative;
    document.getElementById('cert-col-right').innerHTML = rightNarrative;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID');
    document.getElementById('cert-id').textContent = testID;
}

// Validasi Kode Aktivasi dari Database Spreadsheet
document.getElementById('unlock-button').onclick = async function() {
    const code = document.getElementById('activation-code').value.trim();
    if (!code) return alert("Masukkan kode aktivasi!");
    this.disabled = true; 
    this.textContent = "Memvalidasi...";

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ whatsapp: userPhone, checkCode: code })
        });
        const result = await response.text();

        if (result === "Valid") {
            alert("Akses Dibuka! Sertifikat resmi Anda siap diunduh.");
            
            // Buka sensor blur dan ubah badge menjadi terbuka
            let dominant = "D", max = -100;
            for (let t in scores) { 
                let final = scores[t] - scoresLeast[t]; 
                if (final > max) { max = final; dominant = t; } 
            }
            const fullDom = { D: "Dominance", I: "Influence", S: "Steadiness", C: "Compliance" }[dominant];
            document.getElementById('result-title').innerHTML = `Hasil: <span style="color: #1a2a6c; font-weight: bold;">${fullDom}</span> <span style="font-size: 16px; color: #27ae60;">🔓 Terbuka</span>`;
            
            document.querySelector('.activation-box').classList.add('hidden');
            document.getElementById('download-cert-button').classList.remove('hidden');
        } else { 
            alert("Kode Aktivasi tidak cocok atau belum terdaftar di sistem."); 
        }
    } catch (e) { 
        alert("Terjadi kendala koneksi saat validasi database."); 
    } finally {
        this.disabled = false; 
        this.textContent = "Buka Akses Sertifikat";
    }
};

// Cetak Sertifikat ke PDF
document.getElementById('download-cert-button').onclick = async function() {
    this.disabled = true; 
    this.textContent = "Mencetak PDF...";
    
    const ctx = document.getElementById('radarChart').getContext('2d');
    if (radarInstance) radarInstance.destroy();
    
    radarInstance = new Chart(ctx, {
        type: 'radar',
        data: { 
            labels: ['Dominance', 'Influence', 'Steadiness', 'Compliance'], 
            datasets: [{ 
                data: [
                    scores.D - scoresLeast.D, 
                    scores.I - scoresLeast.I, 
                    scores.S - scoresLeast.S, 
                    scores.C - scoresLeast.C
                ], 
                backgroundColor: 'rgba(26,42,108,0.2)', 
                borderColor: '#1a2a6c', 
                borderWidth: 2 
            }] 
        },
        options: { 
            responsive: false, 
            animation: false, 
            scales: { 
                r: { 
                    suggestedMin: -10, 
                    suggestedMax: 24, 
                    ticks: { display: false } 
                } 
            }, 
            plugins: { legend: { display: false } } 
        }
    });

    await new Promise(r => setTimeout(r, 1000));
    const canvas = await html2canvas(document.getElementById('cert-content'), { scale: 2, useCORS: true });
    const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 297, 210);
    pdf.save(`Sertifikat_DISC_${userName.replace(/\s+/g, '_')}.pdf`);
    
    this.disabled = false; 
    this.textContent = "Unduh Sertifikat (PDF)";
};
