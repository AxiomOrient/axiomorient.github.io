<script>
  import { onMount } from 'svelte';
  import { typewriter, scrollTo } from '$lib/utils.js';
  
  let heroRef;
  let mounted = false;
  let scrollY = 0;
  
  const words = ['직관적인 솔루션', '최적의 기술', '명쾌한 해답', '새로운 가능성', '혁신적인 접근', '지속 가능한 성장'];
  
  onMount(() => {
    mounted = true;
    
    // 파티클 효과 생성
    createParticles();
    
    // 스크롤 이벤트 리스너
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  function createParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
  }
</script>

<section id="hero" class="relative min-h-screen overflow-hidden">
  <!-- 배경 캔버스 -->
  <canvas id="particles" class="absolute inset-0 z-0"></canvas>
  
  <!-- 그라데이션 오버레이 -->
  <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-95 z-10"></div>
  
  <!-- 메인 콘텐츠 -->
  <div class="relative z-20 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6 lg:px-8 text-center">
      <div class="max-w-6xl mx-auto relative flex flex-col">
        <!-- 상단 라벨 -->
        <div 
          class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium mb-8 self-center"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.1s; animation-fill-mode: both;"
        >
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          직관적인 기술 솔루션
        </div>
        
        <!-- 메인 타이틀 -->
        <h1 
          class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 text-white tracking-tight"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.2s; animation-fill-mode: both;"
        >
          복잡함 너머,<br />
          <span 
            class="gradient-text inline-block floating-animation"
            use:typewriter={{ words, speed: 80, deleteSpeed: 30, delay: 2000 }}></span>
          <span class="typing-cursor"></span>
        </h1>
        
        <!-- 서브 타이틀 -->
        <p 
          class="text-xl md:text-2xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light self-center"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.4s; animation-fill-mode: both;"
        >
          비즈니스의 복잡한 문제를 우아한 기술 솔루션으로 변환합니다.<br />
          <span class="text-white/50">AI Agent, 모바일, 서버 — 당신의 성장을 위한 완벽한 파트너</span>
        </p>
        
        <!-- CTA 버튼들 -->
        <div 
          class="flex flex-col sm:flex-row gap-6 justify-center items-center self-center"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.6s; animation-fill-mode: both;"
        >
          <button 
            on:click={() => scrollTo('#about')}
            class="group relative px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 glow-effect"
          >
            <span class="relative z-10">우리의 접근 방식</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></div>
          </button>
          
          <button 
            on:click={() => scrollTo('#contact')}
            class="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            지금, 함께하세요
          </button>
        </div>
        
        <!-- 스크롤 인디케이터 -->
        <div 
          class="mt-16 text-white/50 hidden md:block self-end"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.8s; animation-fill-mode: both;"
        >
          <button
            type="button"
            aria-label="Scroll to About section"
            class="flex flex-col items-center cursor-pointer bounce-animation focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900/95 rounded-lg"
            on:click={() => scrollTo('#about')}
          >
            <span class="text-sm mb-2 code-font">SCROLL</span>
            <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .animate-slide-up {
    opacity: 0;
    animation: slideUp 1s ease-out forwards;
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
