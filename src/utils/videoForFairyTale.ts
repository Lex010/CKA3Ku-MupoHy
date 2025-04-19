import createElement from './create-element';

export default function pushistayaPlanetaVideoFunc(container: HTMLElement, videoSrc: string) {
  const wrapper = createElement('div', container, {
    class: 'video-wrapper',
  });

  const video = createElement('video', wrapper, {
    class: 'video-illustration',
    muted: 'true',
    loop: 'true',
    playsinline: 'true',
  });

  createElement('source', video, {
    src: videoSrc,
    type: 'video/mp4',
  });

  createElement('div', wrapper, {
    class: 'video-play-button',
  });

  wrapper.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      wrapper.classList.remove('paused');
    } else {
      video.pause();
      wrapper.classList.add('paused');
    }
  });

  // Изначально показываем кнопку
  wrapper.classList.add('paused');
}
