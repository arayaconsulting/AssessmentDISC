/**
 * ARAYA CONSULTING - DUAL-MODE DISC ASSESSMENT ENGINE
 * Framework: People Map × Position Map (Role & Contribution Oriented)
 * URL: https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVdhm2w6T4oSB77liXaV_cCWkWGZTps-HPPcMfsBDEw4f1Ef9AD_u9uFlH9h3D1oiSzQ/exec';
const adminWA = "6285232526003";

// Deteksi Mode dari URL Parameter (?mode=business atau ?mode=sbs)
const urlParams = new URLSearchParams(window.location.search);
const isBusinessMode = urlParams.get('mode') === 'business' || urlParams.get('mode') === 'sbs';

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

// NARASI 1: MODE BISNIS / PENGUSAHA (SBS CLASS)
const businessNarratives = {
    "Dominance": {
        left: `<b>Karakteristik Dasar:</b><br>Sebagai pengusaha dengan profil Dominance, Anda adalah tipe penggerak visioner yang berfokus penuh pada target akhir (bottom-line results). Anda memiliki determinasi tinggi, menyukai efisiensi, dan berani mengambil risiko besar dalam ekspansi bisnis.<br><br><b>Kekuatan & Tantangan:</b> Sangat unggul dalam kecepatan eksekusi, negosiasi tingkat tinggi, dan mengatasi hambatan pasar. Tantangannya adalah mengendalikan rasa tidak sabar terhadap proses tim dan potensi mengabaikan detail kecil.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran penentu arah visi, akselerator skala bisnis (scale-up), eksekutor restrukturisasi, dan pengambil keputusan strategis di saat krisis.<br><br><b>Saran Pengembangan:</b> Terapkan sistem delegasi terukur dan latih kesabaran mendengarkan masukan tim agar keberanian Anda tetap didukung oleh eksekusi yang solid.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Memimpin Bisnis:</b> Direct & Fast-Paced. Anda memimpin dengan ketegasan dan target tinggi. Sangat tangguh dalam membuka pasar baru dan fase perintisan unit bisnis.<br><br>
                <b>Ekosistem Tim Ideal:</b> Sangat membutuhkan pendamping Compliance untuk kontrol sistem/keuangan dan Steadiness untuk menjaga retensi serta harmoni tim operasional.<br><br>
                <b>Panduan Komunikasi Bisnis:</b> Sampaikan target secara to-the-point, diskusikan opsi solusi nyata, dan berikan kejelasan wewenang kepada jajaran manajer Anda.</div>`
    },
    "Influence": {
        left: `<b>Karakteristik Dasar:</b><br>Sebagai pengusaha dengan profil Influence, kekuatan terbesar Anda terletak pada karisma, antusiasme, dan kemampuan membangun jejaring kemitraan luas. Anda menggerakkan bisnis melalui optimisme dan komunikasi persuasif.<br><br><b>Kekuatan & Tantangan:</b> Sangat unggul dalam promosi, negosiasi kemitraan, penjualan kreatif, dan membangun budaya kerja menyenangkan. Tantangannya adalah menjaga konsistensi pengerjaan SOP serta detail data administratif.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran duta brand (brand ambassador), pengembang kemitraan bisnis (business development), penggalangan relasi investor, dan motivator tim penjualan.<br><br><b>Saran Pengembangan:</b> Terapkan akuntabilitas berbasis checklist dan pastikan setiap gagasan kreatif Anda ditopang oleh tim operasional yang disiplin mengeksekusi detail.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Memimpin Bisnis:</b> Inspiratif & People-Centric. Anda membangun loyalitas melalui keterikatan emosional dan apresiasi terbuka, menciptakan budaya kerja kreatif dan dinamis.<br><br>
                <b>Ekosistem Tim Ideal:</b> Sangat membutuhkan pendamping Compliance untuk menjaga SOP/audit keuangan dan Dominance untuk menjaga fokus penyelesaian target utama.<br><br>
                <b>Panduan Komunikasi Bisnis:</b> Gunakan pendekatan hangat dan komunikatif, tetapi pastikan seluruh kesepakatan bisnis selalu didokumentasikan secara tertulis.</div>`
    },
    "Steadiness": {
        left: `<b>Karakteristik Dasar:</b><br>Sebagai pengusaha dengan profil Steadiness, kekuatan utama Anda adalah ketenangan, loyalitas, dan keandalan dalam menjaga stabilitas organisasi. Anda membangun bisnis jangka panjang dengan fondasi kepercayaan dan proses yang berkelanjutan.<br><br><b>Kekuatan & Tantangan:</b> Sangat unggul dalam menjaga retensi karyawan, membangun relasi pelanggan setia, dan menjaga konsistensi mutu produk. Tantangannya adalah keraguan saat harus melakukan perubahan haluan mendadak.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran penguatan fondasi internal, pengelolaan SDM, penjaga stabilitas operasional, dan pemelihara hubungan pelanggan inti jangka panjang.<br><br><b>Saran Pengembangan:</b> Latihlah keberanian mengeksekusi keputusan cepat di tengah dinamika pasar dan bersikap lebih asertif dalam menegakkan aturan performa tim.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Memimpin Bisnis:</b> Servant Leadership & Stabil. Anda memimpin dengan keteladanan, kesabaran, dan dukungan penuh pada proses kerja. Bisnis Anda umumnya memiliki turnover staf sangat rendah.<br><br>
                <b>Ekosistem Tim Ideal:</b> Sangat membutuhkan figur Dominance untuk memacu pertumbuhan target dan Influence untuk memperluas penetrasi pasar.<br><br>
                <b>Panduan Komunikasi Bisnis:</b> Ciptakan komunikasi yang transparan dan aman secara psikologis, berikan waktu bagi tim untuk beradaptasi terhadap pembaharuan sistem.</div>`
    },
    "Compliance": {
        left: `<b>Karakteristik Dasar:</b><br>Sebagai pengusaha dengan profil Compliance, Anda mengelola bisnis berbasis akurasi data, efisiensi sistem, dan standar kualitas tinggi. Anda memastikan tata kelola dan operasional berjalan dengan presisi dan mitigasi risiko matang.<br><br><b>Kekuatan & Tantangan:</b> Sangat unggul dalam rekayasa SOP, analisis rasio keuangan, kontrol mutu produk, dan audit kerja. Tantangannya adalah potensi terjebak analisis berlebih (*overthinking*) sebelum meluncurkan produk.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran perancang sistem kerja & SOP, pengendalian kualitas (QC), manajemen risiko, tata kelola keuangan, dan restrukturisasi kepatuhan standar bisnis.<br><br><b>Saran Pengembangan:</b> Tingkatkan toleransi terhadap proses eksperimen pasar awal dan bangun komunikasi yang lebih luwes dengan divisi kreatif atau pemasaran.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Business & Leadership Insight:</b><br><br>
                <b>Gaya Memimpin Bisnis:</b> System-Driven & Metodis. Anda memimpin dengan fakta, logika, dan parameter terukur, menjamin bisnis beroperasi efisien dengan margin kesalahan minimal.<br><br>
                <b>Ekosistem Tim Ideal:</b> Sangat membutuhkan figur Influence untuk relasi publik/pemasaran dan Dominance untuk mendobrak peluang pasar baru secara cepat.<br><br>
                <b>Panduan Komunikasi Bisnis:</b> Sampaikan evaluasi berbasis data dan indikator objektif tanpa terkesan kaku, serta berikan apresiasi pada pencapaian tim non-teknis.</div>`
    }
};

// NARASI 2: MODE REGULER / UMUM (PROSES & LINGKUNGAN KERJA)
const generalNarratives = {
    "Dominance": {
        left: `<b>Karakteristik Dasar:</b><br>Individu dengan profil Dominance adalah tipe penggerak yang berfokus kuat pada pencapaian hasil akhir (result-oriented). Anda dikenal mandiri, asertif, dan menyukai tantangan kerja yang membutuhkan solusi cepat.<br><br><b>Kekuatan & Tantangan:</b> Cepat dalam mengambil keputusan dan tangguh mengatasi tekanan. Waspadai kecenderungan kurang sabar terhadap proses atau detail kerja tim.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran yang membutuhkan inisiatif tinggi, kepemimpinan proyek, negosiasi kritis, dan pemecahan hambatan kerja.<br><br><b>Saran Pengembangan:</b> Luangkan waktu untuk mendengarkan masukan tim sebelum menetapkan keputusan akhir.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Personal & Leadership Insight:</b><br><br>
                <b>Gaya Kolaborasi:</b> Cepat, to-the-point, dan berorientasi pada target nyata.<br><br>
                <b>Panduan Komunikasi:</b> Sampaikan inti pesan secara lugas dan sediakan opsi solusi nyata dalam setiap diskusi.</div>`
    },
    "Influence": {
        left: `<b>Karakteristik Dasar:</b><br>Pribadi yang hangat, energik, dan persuasif. Sebagai komunikator alami, Anda mahir membangun hubungan positif dan menginspirasi rekan kerja melalui gagasan-gagasan kreatif.<br><br><b>Kekuatan & Tantangan:</b> Hebat dalam membangun jejaring dan menghidupkan suasana tim. Tantangan terletak pada manajemen waktu dan ketelitian administratif.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran komunikasi publik, fasilitator kolaborasi tim, presentasi ide, dan pembina hubungan kemitraan.<br><br><b>Saran Pengembangan:</b> Tingkatkan kedisiplinan pencatatan detail dan susun rencana tindak lanjut yang terstruktur.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Personal & Leadership Insight:</b><br><br>
                <b>Gaya Kolaborasi:</b> Partisipatif, dinamis, dan membangun suasana kerja antusias.<br><br>
                <b>Panduan Komunikasi:</b> Berikan apresiasi yang tulus dan sediakan ruang terbuka untuk mengekspresikan gagasan.</div>`
    },
    "Steadiness": {
        left: `<b>Karakteristik Dasar:</b><br>Pilar kestabilan yang tenang, setia, dan konsisten. Anda sangat menghargai kerja sama yang harmonis dan dapat diandalkan dalam menjalankan tugas berkelanjutan secara tekun.<br><br><b>Kekuatan & Tantangan:</b> Pendengar yang luar biasa dan penjaga ritme tim. Tantangannya adalah menghadapi perubahan mendadak atau perselisihan terbuka.<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran pendukung operasional inti, penengah konflik, penjaga mutu layanan, dan eksekutor prosedur kerja teratur.<br><br><b>Saran Pengembangan:</b> Latihlah keberanian menyuarakan pandangan pribadi dan bersikap lebih adaptif terhadap perubahan sistemik.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Personal & Leadership Insight:</b><br><br>
                <b>Gaya Kolaborasi:</b> Kooperatif, sabar, dan menjaga suasana kerja tetap kondusif.<br><br>
                <b>Panduan Komunikasi:</b> Berbicaralah dengan tenang dan berikan waktu yang cukup untuk memahami perubahan instruksi kerja.</div>`
    },
    "Compliance": {
        left: `<b>Karakteristik Dasar:</b><br>Individu analitis yang mengutamakan data, logika, dan standar akurasi tinggi. Anda bekerja secara terstruktur, sistematis, dan sangat teliti terhadap kepatuhan prosedur.<br><br><b>Kekuatan & Tantangan:</b> Akurasi sangat tinggi dalam perencanaan teknis dan evaluasi risiko. Tantangannya adalah kehati-hatian berlebih (*over-analyzing*).<br><br><b>Kecenderungan Peran & Kontribusi:</b> Optimal pada peran analisa data, penyusunan standar operasional (SOP), kontrol kualitas (QC), dan audit proses.<br><br><b>Saran Pengembangan:</b> Tingkatkan fleksibilitas terhadap situasi praktis lapangan dan kembangkan komunikasi kerja yang lebih rileks.`,
        right: `<div style="background:rgba(26,42,108,0.03); padding:12px; border-left:4px solid #c5a059;">
                <b>Personal & Leadership Insight:</b><br><br>
                <b>Gaya Kolaborasi:</b> Metodis, objektif, dan mengutamakan ketepatan standar mutu.<br><br>
                <b>Panduan Komunikasi:</b> Sertakan data pendukung yang valid dan susun penjelasan secara sistematis.</div>`
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
    const prefix = isBusinessMode ? "ARAYA-SBS-" : "ARAYA-DISC-";
    const testID = prefix + Math.floor(Math.random() * 9000 + 1000);
    
    document.getElementById('result-title').textContent = `Hasil Analisis: ${fullDom}`;
    document.getElementById('result-description').textContent = isBusinessMode
        ? `Profil kecenderungan kepemimpinan bisnis Anda telah selesai dianalisis. Masukkan kode aktivasi resmi SBS Class Anda.`
        : `Analisis profil kepribadian DISC Anda telah selesai. Masukkan kode aktivasi untuk mengunduh sertifikat resmi.`;
        
    document.getElementById('buy-wa').href = `https://wa.me/${adminWA}?text=Halo%20Mas%20Ali,%20saya%20sudah%20selesai%20tes%20DISC%20(${isBusinessMode ? 'SBS%20Class' : 'Umum'}).%20Mohon%20kode%20aktivasi%20sertifikat.%20ID%20saya:%20${testID}`;

    // Kirim Data ke Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            nama: userName, 
            whatsapp: userPhone, 
            hasil: fullDom + (isBusinessMode ? " (SBS Class)" : " (Umum)"),
            skorD: scores.D - scoresLeast.D, 
            skorI: scores.I - scoresLeast.I,
            skorS: scores.S - scoresLeast.S, 
            skorC: scores.C - scoresLeast.C,
            id: testID
        })
    });

    // Pemilihan Narasi Sesuai Mode Link
    const activeNarratives = isBusinessMode ? businessNarratives : generalNarratives;

    // Render Data Sertifikat
    document.getElementById('cert-user-name').textContent = userName.toUpperCase();
    document.getElementById('cert-phone-val').textContent = userPhone;
    document.getElementById('cert-type').textContent = fullDom;
    document.getElementById('cert-col-left').innerHTML = activeNarratives[fullDom].left;
    document.getElementById('cert-col-right').innerHTML = activeNarratives[fullDom].right;
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
