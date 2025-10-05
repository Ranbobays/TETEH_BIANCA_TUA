// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 1000)
})

const audio = document.getElementById('music');

    // Coba langsung putar (bisa berhasil di beberapa browser)
    audio.play().catch(() => {
      // Jika gagal autoplay, tunggu interaksi pertama
      document.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });