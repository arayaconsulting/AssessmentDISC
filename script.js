const quizQuestions = [
    { question: "Saat dihadapkan pada keputusan penting, saya cenderung:", options: [{ text: "Mengambil keputusan cepat dan tegas", type: "D" }, { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" }, { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" }, { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }] },
    { question: "Dalam menghadapi konflik, saya biasanya:", options: [{ text: "Menghadapinya secara langsung dan cepat", type: "D" }, { text: "Berusaha mencairkan suasana dengan humor", type: "I" }, { text: "Menenangkan semua orang agar tidak terjadi ketegangan", type: "S" }, { text: "Mengumpulkan fakta sebelum menyimpulkan", type: "C" }] },
    { question: "Ketika bekerja dalam tim, saya cenderung:", options: [{ text: "Mengambil peran pemimpin dan mengarahkan", type: "D" }, { text: "Menjaga semangat tim dan membangun hubungan", type: "I" }, { text: "Menjadi pendengar dan penengah yang baik", type: "S" }, { text: "Menjaga struktur dan memastikan ketepatan", type: "C" }] },
    { question: "Saat menghadapi perubahan, saya biasanya:", options: [{ text: "Segera bertindak dan menyesuaikan diri", type: "D" }, { text: "Menyambut dengan antusias dan semangat baru", type: "I" }, { text: "Membutuhkan waktu untuk merasa nyaman", type: "S" }, { text: "Menganalisis terlebih dahulu dampaknya", type: "C" }] },
    { question: "Gaya komunikasi saya lebih cenderung:", options: [{ text: "Langsung, singkat, dan jelas", type: "D" }, { text: "Ceria, ekspresif, dan spontan", type: "I" }, { text: "Tenang, penuh empati, dan ramah", type: "S" }, { text: "Terstruktur, sopan, dan berbasis data", type: "C" }] },
    { question: "Dalam menghadapi tekanan deadline, saya:", options: [{ text: "Fokus pada hasil dan cepat menyelesaikan tugas", type: "D" }, { text: "Mencari bantuan atau mengajak kolaborasi", type: "I" }, { text: "Menjaga suasana agar tetap tenang dan nyaman", type: "S" }, { text: "Membuat daftar prioritas dan mengikuti langkah kerja", type: "C" }] },
    { question: "Saat menyampaikan ide, saya lebih suka:", options: [{ text: "Menyampaikan inti ide dengan tegas", type: "D" }, { text: "Menceritakan dengan semangat dan antusiasme", type: "I" }, { text: "Menyesuaikan cara bicara agar tidak menyinggung", type: "S" }, { text: "Menyusun data pendukung sebelum berbicara", type: "C" }] },
    { question: "Ketika bertugas di proyek baru, saya:", options: [{ text: "Langsung mulai dan cari tantangan", type: "D" }, { text: "Senang bertemu orang baru dan bekerja kelompok", type: "I" }, { text: "Ingin tahu siapa saja yang akan saya bantu", type: "S" }, { text: "Membaca semua panduan terlebih dahulu", type: "C" }] },
    { question: "Jika ada masalah di tim, saya cenderung:", options: [{ text: "Segera selesaikan dan ambil tindakan", type: "D" }, { text: "Mencairkan suasana agar tidak tegang", type: "I" }, { text: "Mendengarkan semua pihak terlebih dahulu", type: "S" }, { text: "Mencari tahu penyebab pastinya dengan teliti", type: "C" }] },
    { question: "Dalam mengambil keputusan penting, saya:", options: [{ text: "Fokus pada hasil dan objektif", type: "D" }, { text: "Melibatkan orang lain agar lebih dinamis", type: "I" }, { text: "Memastikan semua orang nyaman", type: "S" }, { text: "Berdasarkan data dan pertimbangan matang", type: "C" }] },
    { question: "Dalam menyelesaikan tugas, saya:", options: [{ text: "Suka tantangan dan hasil cepat", type: "D" }, { text: "Butuh suasana menyenangkan", type: "I" }, { text: "Perlu kenyamanan dan ritme stabil", type: "S" }, { text: "Senang membuat checklist dan analisis", type: "C" }] },
    { question: "Saat diskusi tim, saya:", options: [{ text: "Menyampaikan pendapat dengan yakin", type: "D" }, { text: "Antusias dan ekspresif", type: "I" }, { text: "Mendukung dan menenangkan tim", type: "S" }, { text: "Teliti dan hati-hati dalam berpendapat", type: "C" }] },
    { question: "Ketika diberikan kebebasan, saya:", options: [{ text: "Menentukan tujuan dan langsung bekerja", type: "D" }, { text: "Mencari teman kerja dan kolaborasi", type: "I" }, { text: "Menyesuaikan ritme dan membantu tim", type: "S" }, { text: "Membuat rencana dan evaluasi risiko", type: "C" }] },
    { question: "Gaya kerja saya lebih ke arah:", options: [{ text: "Cepat, to the point, dan kompetitif", type: "D" }, { text: "Energik, kreatif, dan spontan", type: "I" }, { text: "Stabil, ramah, dan suportif", type: "S" }, { text: "Teliti, logis, dan sistematis", type: "C" }] },
    { question: "Jika tim dalam kondisi tidak ideal, saya:", options: [{ text: "Tetap fokus dan dorong hasil", type: "D" }, { text: "Menghibur agar semangat kembali", type: "I" }, { text: "Menenangkan agar suasana kondusif", type: "S" }, { text: "Analisis masalah dan cari akar penyebab", type: "C" }] },
    { question: "Saat presentasi, saya:", options: [{ text: "Langsung ke inti pesan dan solusi", type: "D" }, { text: "Gunakan humor dan energi tinggi", type: "I" }, { text: "Jaga suasana nyaman dan terhubung", type: "S" }, { text: "Beri data, grafik, dan penjelasan runtut", type: "C" }] },
    { question: "Jika atasan memberi kritik, saya:", options: [{ text: "Terima dan segera perbaiki", type: "D" }, { text: "Tanyakan sambil tersenyum", type: "I" }, { text: "Pikirkan dulu dan renungkan", type: "S" }, { text: "Catat dan evaluasi", type: "C" }] },
    { question: "Dalam tim, saya dikenal sebagai orang yang:", options: [{ text: "Tegas dan berani ambil keputusan", type: "D" }, { text: "Ceria dan penuh semangat", type: "I" }, { text: "Sabar dan penengah", type: "S" }, { text: "Teliti dan detail", type: "C" }] },
    { question: "Ketika mendapat tugas baru, saya:", options: [{ text: "Ingin segera menyelesaikan sebaik mungkin", type: "D" }, { text: "Cari teman kerja untuk diskusi", type: "I" }, { text: "Lihat bagaimana dampaknya pada orang lain", type: "S" }, { text: "Minta SOP dan instruksi terlebih dahulu", type: "C" }] },
    { question: "Dalam situasi darurat, saya:", options: [{ text: "Langsung bertindak", type: "D" }, { text: "Ajak orang lain bekerja sama", type: "I" }, { text: "Pastikan semua aman secara emosional", type: "S" }, { text: "Pikirkan konsekuensi dan langkah terstruktur", type: "C" }] },
    { question: "Saat bekerja, saya lebih suka:", options: [{ text: "Tujuan yang jelas dan hasil cepat", type: "D" }, { text: "Lingkungan seru dan tidak kaku", type: "I" }, { text: "Ritme tenang dan tidak terburu-buru", type: "S" }, { text: "Struktur kerja yang jelas dan detail", type: "C" }] },
    { question: "Jika harus memilih peran, saya lebih suka:", options: [{ text: "Pemimpin atau pengambil keputusan", type: "D" }, { text: "Presenter atau penghubung tim", type: "I" }, { text: "Pendengar dan penyeimbang", type: "S" }, { text: "Pengelola data dan sistem kerja", type: "C" }] },
    { question: "Saat diberi target tinggi, saya:", options: [{ text: "Tertantang dan siap ngebut", type: "D" }, { text: "Ajukan ide kreatif dan libatkan tim", type: "I" }, { text: "Minta arahan jelas dan waktu stabil", type: "S" }, { text: "Minta acuan data dan strategi jelas", type: "C" }] },
    { question: "Kalau tim tidak kompak, saya akan:", options: [{ text: "Tegur dan ambil alih kendali", type: "D" }, { text: "Bikin games atau candaan", type: "I" }, { text: "Dampingi yang merasa tertekan", type: "S" }, { text: "Identifikasi masalah sistem dan peran", type: "C" }] }
];

const discData = {
    "D": { name: "Dominance", karakter: "Individu dengan profil Dominance tinggi adalah penggerak yang berorientasi pada hasil dan efisiensi. Memiliki motivasi internal kuat untuk menaklukkan tantangan secara mandiri.", kekuatan: "Cepat mengambil keputusan sulit, gigih dalam hambatan, dan berani mengambil risiko besar.", saran: "Fokus pada kecerdasan emosional agar ketegasan tidak dianggap intimidasi oleh tim.", lead: "Pemimpin visioner yang fokus pada target akhir. Efektif dalam krisis.", work: "Eksekutor handal dalam proyek baru dengan otonomi tinggi.", komunikasi: "Bicara langsung ke inti (to-the-point) dan fokus pada hasil akhir solusi." },
    "I": { name: "Influence", karakter: "Pribadi hangat, penuh energi, dan persuasif. Memiliki kemampuan alami membangun antusiasme tim melalui ide-ide kreatif.", kekuatan: "Komunikator hebat, mampu memotivasi orang lain, dan menciptakan atmosfer kerja menyenangkan.", saran: "Tingkatkan disiplin manajemen waktu dan pastikan ide kreatif diikuti rencana aksi konkret.", lead: "Pemimpin inspiratif yang memimpin dengan membangun hubungan personal.", work: "Produktif dalam kolaborasi, presentasi, dan jejaring.", komunikasi: "Gunakan pendekatan hangat dan santai. Berikan ruang bagi mereka untuk berekspresi." },
    "S": { name: "Steadiness", karakter: "Pilar pendukung organisasi yang tenang, stabil, dan setia. Menghargai harmoni, stabilitas, dan konsistensi jangka panjang.", kekuatan: "Sabar, pendengar sangat baik, dan mampu menjaga stabilitas tim di tengah dinamika tinggi.", saran: "Berlatihlah menyuarakan pendapat secara langsung dan lebih terbuka terhadap perubahan.", lead: "Pemimpin melayani (Servant Leader). Menjaga keamanan dan kenyamanan anggota tim.", work: "Pekerja tim loyal yang bagus dalam peran dukungan teknis dan operasional.", komunikasi: "Bicara tenang dan ramah. Berikan waktu untuk memproses informasi tanpa desakan." },
    "C": { name: "Compliance", karakter: "Individu analitis yang mendasarkan keputusan pada data dan fakta. Menghargai struktur, aturan, dan akurasi tinggi.", kekuatan: "Standar akurasi sangat tinggi, detail dalam perencanaan, dan analisis risiko mendalam.", saran: "Jangan terjebak dalam 'analysis paralysis' dan lebih fleksibel terhadap kesalahan kecil.", lead: "Pemimpin berbasis sistem yang memastikan organisasi berjalan di atas jalur prosedur benar.", work: "Ahli manajemen risiko, quality control, dan perencanaan strategis kompleks.", komunikasi: "Sediakan data akurat dan penjelasan logis. Gunakan pendekatan formal terstruktur." }
};

let currentIdx = 0;
let userName = "";
let scores = { D: 0, I: 0, S: 0, C: 0 };
let scoresLeast = { D: 0, I: 0, S: 0, C: 0 };
let radarChart = null;

document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value;
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQ();
});

function showQ() {
    if (currentIdx >= quizQuestions.length) return showResult();
    const q = quizQuestions[currentIdx];
    document.getElementById('question-text').textContent = `Pertanyaan ${currentIdx+1}/${quizQuestions.length}`;
    const cont = document.getElementById('options-container');
    cont.innerHTML = `<div class="radio-labels"><span>Paling</span><span>Bukan</span><span>Pernyataan</span></div>`;
    q.options.forEach(opt => {
        const d = document.createElement('div');
        d.className = 'option-row';
        d.innerHTML = `<input type="radio" name="m" value="${opt.type}" required><input type="radio" name="l" value="${opt.type}" required><span class="option-text">${opt.text}</span>`;
        cont.appendChild(d);
    });
    document.getElementById('progress-bar').style.width = `${((currentIdx+1)/quizQuestions.length)*100}%`;
}

document.getElementById('quiz-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const m = document.querySelector('input[name="m"]:checked').value;
    const l = document.querySelector('input[name="l"]:checked').value;
    if (m === l) return alert("Pilihan 'Paling' dan 'Bukan' harus berbeda!");
    scores[m]++; scoresLeast[l]++;
    currentIdx++; showQ();
});

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    let max = -99, dom = "D";
    for(let t in scores) {
        let final = scores[t] - scoresLeast[t];
        if(final > max) { max = final; dom = t; }
    }
    document.getElementById('result-title').textContent = `Profil Dominan: ${discData[dom].name}`;
    
    const ctx = document.getElementById('discRadarChart').getContext('2d');
    if(radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Dominance', 'Influence', 'Steadiness', 'Compliance'],
            datasets: [{
                data: [scores.D, scores.I, scores.S, scores.C],
                backgroundColor: 'rgba(26, 35, 126, 0.1)',
                borderColor: '#1A237E',
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: '#1A237E'
            }]
        },
        options: { scales: { r: { suggestMin: 0, ticks: { display: false } } }, plugins: { legend: { display: false } } }
    });

    document.getElementById('cert-user-name').textContent = userName;
    document.getElementById('cert-type-name').textContent = discData[dom].name;
    document.getElementById('desc-karakteristik').textContent = discData[dom].karakter;
    document.getElementById('desc-kekuatan').textContent = discData[dom].kekuatan;
    document.getElementById('desc-saran').textContent = discData[dom].saran;
    document.getElementById('insight-lead').textContent = discData[dom].lead;
    document.getElementById('insight-work').textContent = discData[dom].work;
    document.getElementById('desc-komunikasi').textContent = discData[dom].komunikasi;
    document.getElementById('cert-id-val').textContent = "ARAYA-DISC-" + Math.floor(10000 + Math.random() * 90000);
}

document.getElementById('download-cert').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    html2pdf().from(el).set({
        margin: 0, filename: `Sertifikat_DISC_${userName}.pdf`,
        html2canvas: { scale: 2 }, jsPDF: { format: 'a4', orientation: 'landscape' }
    }).save().then(() => el.style.display = 'none');
});
