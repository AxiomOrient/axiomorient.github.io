// 타이핑 애니메이션을 위한 유틸리티 함수
export function typewriter(node, { words, speed = 80, deleteSpeed = 30, delay = 2000 }) {
  let currentWordIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let timeoutId;

  function type() {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      currentText = currentWord.substring(0, currentText.length - 1);
    } else {
      currentText = currentWord.substring(0, currentText.length + 1);
    }
    
    node.textContent = currentText;
    
    let typeSpeed = isDeleting ? deleteSpeed : speed;
    
    if (!isDeleting && currentText === currentWord) {
      typeSpeed = delay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      typeSpeed = 500;
    }
    
    timeoutId = setTimeout(type, typeSpeed);
  }
  
  type();
  
  return {
    destroy() {
      clearTimeout(timeoutId);
    }
  };
}

// 스크롤 애니메이션을 위한 유틸리티
export function scrollTo(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

