<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let scrollY = 0;
  
  onMount(() => {
    mounted = true;
    
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- 프로세스 섹션 -->
<section class="relative py-32 bg-slate-900 text-white overflow-hidden">
  <!-- 배경 효과 -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <div class="text-center mb-20">
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium mb-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <span class="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
        우리의 작업 방식
      </div>
      
      <h2 
        class="text-5xl md:text-6xl font-black mb-6 tracking-tight"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        체계적인 <span class="gradient-text">개발 프로세스</span>
      </h2>
      
      <p 
        class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.3s; animation-fill-mode: both;"
      >
        검증된 방법론과 최신 기술을 결합하여 프로젝트의 성공을 보장합니다.
      </p>
    </div>
    
    <!-- 프로세스 단계 -->
    <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {#each [
        { step: '01', title: '분석', desc: '요구사항 분석 및 기술 검토', icon: '🔍' },
        { step: '02', title: '설계', desc: '아키텍처 설계 및 프로토타입', icon: '📐' },
        { step: '03', title: '개발', desc: 'AI 기반, 지능형 개발', icon: '⚡' },
        { step: '04', title: '배포', desc: '테스트 및 운영 환경 배포', icon: '🚀' }
      ] as process, index}
        <div 
          class="relative text-center group"
          class:animate-slide-up={mounted}
          style="animation-delay: {0.4 + index * 0.1}s; animation-fill-mode: both;"
        >
          <!-- 연결선 -->
          {#if index < 3}
            <div class="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
          {/if}
          
          <!-- 단계 카드 -->
          <div class="relative z-10 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white/10 transition-all duration-300">
            <div class="text-4xl mb-4">{process.icon}</div>
            <div class="text-sm font-mono text-white/50 mb-2">{process.step}</div>
            <h3 class="text-xl font-bold mb-2">{process.title}</h3>
            <p class="text-white/70 text-sm">{process.desc}</p>
          </div>
        </div>
      {/each}
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
