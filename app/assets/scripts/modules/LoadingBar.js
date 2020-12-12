import preload from 'preload-js';

class LoadingBar {
  constructor() {
    this.queue = new preload.LoadQueue();
    this.DOMelements = {
      loadingScreen: document.querySelector('.loading-screen'),
      progressBar: document.querySelector('.loading-screen__progress-bar'),
      loadingText: document.querySelector('.loading-screen__text'),
      imageContainer: document.querySelector('.particles'),
    };
    this.setEvents();
    this.loadFiles();
  }
  loadFiles() {
    if (window.innerWidth >= 1024) {
      this.queue.loadFile('../../../assets/images/stars.jpg');
    } else {
      this.updateProgressBar({ progress: 1 });
      this.animateLoadingScreen();
    }
  }
  setEvents() {
    this.queue.addEventListener('progress', this.updateProgressBar.bind(this));
    this.queue.addEventListener(
      'fileload',
      this.addLoadedImageIntoTheDOM.bind(this),
    );
    this.queue.addEventListener(
      'complete',
      this.animateLoadingScreen.bind(this),
    );
  }
  updateProgressBar(e) {
    this.DOMelements.progressBar.style.width = `${e.progress * 100}%`;
  }
  animateLoadingScreen() {
    setTimeout(() => {
      this.DOMelements.loadingText.classList.add(
        'loading-screen__text--is-animated',
      );
      setTimeout(() => {
        this.DOMelements.loadingScreen.classList.add(
          'loading-screen--is-hidden',
        );
      }, 1000);
    }, 500);
  }
  addLoadedImageIntoTheDOM(e) {
    this.loadedImage = e.result;
    this.loadedImage.classList.add('particles__image');
    this.loadedImage.setAttribute('alt', 'star image');
    this.DOMelements.imageContainer.appendChild(this.loadedImage);
  }
}

export default LoadingBar;
