// // Get DOM elements
// const generateBtn = document.querySelector("#generate");
// const hasilGenerate = document.querySelector(".hasil-generate");
// const hasilGenerateText = document.querySelector("#hasil-generate-txt");

// function generate() {
//     // Get all input values
//     const liturgos1 = document.querySelector(".liturgos-1").value.trim();
//     const liturgos2 = document.querySelector(".liturgos-2").value.trim();
//     const doaPenutup = document.querySelector(".doa-penutup").value.trim();
//     const kidungJemaat = document.querySelector(".kj").value.trim();
//     const laguPersembahan = document.querySelector(".persembahan").value.trim();
//     const tanggal = document.querySelector(".tanggal").value.trim();
//     const jam = document.querySelector(".jam").value.trim();

//     // Create the announcement text
//     const announcement = `**📜 PENGUMUMAN 📜**

// Shalom semua.
// Besok, Minggu ${tanggal}:
// • Jam: ${jam} WITA

// TI Katekisasi —
// - Pembuka/ sapa menyapa & Doa Pembuka: ${liturgos1}
// - Menyanyi (${kidungJemaat}): ${liturgos1}
// - Pembacaan Alkitab: ${liturgos2}
// - Pembacaan SBU Malam: ${liturgos2}
// - Doa Memulai Katekisasi: ${liturgos2}

// Setelah Katekisasi
// - Menyanyi dan Memberi persembahan (${laguPersembahan}): ${doaPenutup}
// - Doa Persembahan sekaligus Doa Penutup: ${doaPenutup}`;

//     // Update both the display and the hidden input
//     hasilGenerate.innerHTML = announcement.replace(/\n/g, '<br>');
//     hasilGenerateText.value = announcement;
// }

// async function copyText() {
//     try {
//         // Get the text content
//         const copyText = document.getElementById("hasil-generate-txt");
        
//         // Try to use the clipboard API first
//         await navigator.clipboard.writeText(copyText.value);
        
//         // Show success message
//         alert("Text sudah di copy ke clipboard");
//     } catch (err) {
//         // Fallback for browsers that don't support clipboard API
//         copyText.select();
//         copyText.setSelectionRange(0, 99999); // For mobile devices
//         document.execCommand('copy');
//         alert("Text sudah di copy ke clipboard");
//     }
// }

// // Event listeners
// generateBtn.addEventListener('click', generate);

// Get DOM elements
const generateBtn = document.querySelector("#generate");
const hasilGenerate = document.querySelector(".hasil-generate");
const hasilGenerateText = document.querySelector("#hasil-generate-txt");

function generate() {
    // Get all input values
    const liturgos1 = document.querySelector(".liturgos-1").value.trim();
    const liturgos2 = document.querySelector(".liturgos-2").value.trim();
    const doaPenutup = document.querySelector(".doa-penutup").value.trim();
    const kidungJemaat = document.querySelector(".kj").value.trim();
    const laguPersembahan = document.querySelector(".persembahan").value.trim();
    const tanggal = document.querySelector(".tanggal").value.trim();
    const jam = document.querySelector(".jam").value.trim();

    // Create the announcement text with proper line breaks
    const announcementLines = [
        "**📜 PENGUMUMAN 📜**",
        "",
        "Shalom semua.",
        `Besok, Minggu ${tanggal}:`,
        `• Jam: ${jam} WITA`,
        "",
        "TI Katekisasi —",
        `- Pembuka/ sapa menyapa & Doa Pembuka: ${liturgos1}`,
        `- Menyanyi (${kidungJemaat}): ${liturgos1}`,
        `- Pembacaan Alkitab: ${liturgos2}`,
        `- Pembacaan SBU Malam: ${liturgos2}`,
        `- Doa Memulai Katekisasi: ${liturgos2}`,
        "",
        "Setelah Katekisasi",
        `- Menyanyi dan Memberi persembahan (${laguPersembahan}): ${doaPenutup}`,
        `- Doa Persembahan sekaligus Doa Penutup: ${doaPenutup}`
    ];

    // Join with newlines for the actual text
    const plainText = announcementLines.join('\n');
    
    // Join with <br> tags for HTML display
    const htmlText = announcementLines.join('<br>');

    // Update both the display and the hidden input
    hasilGenerate.innerHTML = htmlText;
    hasilGenerateText.value = plainText;
}

async function copyText() {
    try {
        const copyText = document.getElementById("hasil-generate-txt");
        await navigator.clipboard.writeText(copyText.value);
        alert("Text sudah di copy ke clipboard");
    } catch (err) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        alert("Text sudah di copy ke clipboard");
    }
}

// Event listeners
generateBtn.addEventListener('click', generate);