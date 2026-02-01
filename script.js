// Data Pertanyaan (24 Pertanyaan Lengkap)
const quizQuestions = [
    { question: "Saat dihadapkan pada keputusan penting, saya cenderung:", options: [{ text: "Mengambil keputusan cepat dan tegas", type: "D" }, { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" }, { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" }, { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }] },
    // (Tambahkan pertanyaan lain di sini seperti kode sebelumnya)
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
        html2canvas: { scale: 2, useCORS: true }, jsPDF: { format: 'a4', orientation: 'landscape' }
    }).save().then(() => el.style.display = 'none');
});
