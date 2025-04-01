import './style.scss'

const video = document.getElementById('video')

video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play();
});

const title = document.querySelector('.main__title')

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
}

setInterval(() => {
  title.style.color = getRandomColor()
}, 1000)

const audio = document.getElementById('myAudio');
const muteButton = document.getElementById('muteButton');

// 1. Сначала пробуем запустить с muted
audio.play().catch(e => {
  console.log("Автовоспроизведение заблокировано:", e);
});

// 2. Обработчик кнопки
muteButton.addEventListener('click', () => {
  // Первый клик - снимаем muted и включаем звук
  if (audio.paused) {
    audio.muted = false;
    audio.play().catch(e => {
      console.error("Ошибка воспроизведения:", e);
    });
  }

  // Переключаем состояние
  audio.muted = !audio.muted;

  // Обновляем UI
  muteButton.textContent = audio.muted ? '🔇' : '🔊';
  muteButton.classList.toggle('muted', !audio.muted);
});