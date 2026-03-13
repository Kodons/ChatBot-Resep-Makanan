# 👨‍🍳 ChefBot AI

Sebuah aplikasi *chatbot* cerdas berbasis Artificial Intelligence (AI) multimodal yang dirancang khusus sebagai asisten dapur virtual. ChefBot AI tidak hanya dapat menjawab pertanyaan seputar resep dan tips memasak melalui teks, tetapi juga mampu menganalisis bahan makanan secara visual melalui gambar yang diunggah oleh pengguna. 

Aplikasi ini dibalut dengan antarmuka *dark glassmorphism* yang elegan, responsif untuk berbagai ukuran layar, dan mendukung format Markdown untuk menampilkan langkah-langkah resep yang rapi dan mudah dibaca.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan arsitektur *Client-Server* dengan teknologi modern berikut:

### Frontend
* **React.js** - *Library* utama untuk membangun antarmuka pengguna yang interaktif.
* **Vite** - *Build tool* generasi baru yang sangat cepat untuk pengembangan *frontend*.
* **Tailwind CSS (v4)** - *Framework* CSS *utility-first* untuk menciptakan desain *glassmorphism* dan tata letak yang responsif.
* **React Markdown** - Digunakan untuk me-*render* balasan AI dari format teks biasa menjadi elemen HTML (seperti teks tebal dan *bullet points*).

### Backend
* **Node.js & Express.js** - *Runtime* dan *framework* untuk membangun API *server-side* yang efisien.
* **Multer** - *Middleware* untuk menangani *multipart/form-data*, digunakan khusus untuk mengelola unggahan *file* gambar dan media dari pengguna.

### Layanan AI & Integrasi
* **Google Gemini AI (1.5 Flash)** - Model *Large Language Model* (LLM) multimodal yang sangat cepat. Digunakan sebagai "otak" utama bot untuk memproses teks (NLP) dan menganalisis gambar masakan/bahan makanan secara simultan.