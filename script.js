// tombol Dark/Light mode
const darkBtn = document.getElementById('darkBtn')
const lightBtn = document.getElementById('lightBtn')
lightBtn.style.display = "none";
function setDarkMode(isDark) {
  if(isDark) {
      lightBtn.style.display = "block"
      darkBtn.style.display = "none"
  } else {
      lightBtn.style.display = "none"
      darkBtn.style.display = "block"
  }

  document.body.classList.toggle("dark-mode");
}
// end-tombol Dark/Light mode


// Deadline
const formInput = document.querySelector('.form-input');
const kirim = document.getElementById('kirim');

const formOutput = document.querySelector('.form-output');
formOutput.style.display = 'none';
const reload = document.getElementById('reload');
reload.onclick = function() {
  document.location.reload();
}

kirim.onclick = function() {
    const a = document.getElementById('teksInput').value; //value = isi input
    const b = document.getElementById('teksOutput').value = a;

    formInput.style.display = "none";
    formOutput.style.display = "block";

    // 22 Mar, 2022 15:17:25
    // atur waktu deadline
    const waktuDeadline = new Date(b).getTime();

    // Metode setInterval() memanggil fungsi pada interval tertentu (dalam milidetik)
    const x = setInterval(function() {

    // waktu dan tanggal sekarang
    const waktuSekarang = new Date().getTime();
    // console.log(waktuSekarang);
      
    // jarak antara waktu deadline dengan sekarang
      const jarak = waktuDeadline - waktuSekarang;

    // kalkulasi perhitungan , 1detik = 1000milidetik
    const detik = 1000;
    const menit = 60 * 1000;
    const jam = 60 * 60 * 1000;
    const hari = 24 * 60 * 60 * 1000;

    // Metode Math.floor() membulatkan angka ke BAWAH ke bilangan bulat kebawah, dan mengembalikan hasilnya. % = modulus/sisa bagi
    const hariDeadline = Math.floor(jarak/hari);
    const jamDeadline = Math.floor((jarak%hari)/jam);
    const menitDeadline = Math.floor((jarak%jam)/menit);
    const detikDeadline = Math.floor((jarak%menit)/detik);

    // menampilkan hasilnya pada id=demo , mencetak tulisan menggunakan innerHTML
    document.querySelector('#demo').innerHTML = hariDeadline + "hari " + jamDeadline + "jam " + menitDeadline + "menit " + detikDeadline + "detik"; 

    // jika waktu deadline sudah habis, maka tampilkan
      if (jarak < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "WAKTU HABIS";
      }
    }, 1000)

}
// end-deadline


