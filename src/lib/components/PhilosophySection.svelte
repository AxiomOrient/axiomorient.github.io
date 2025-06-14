<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let scrollY = 0;
  
  const philosophies = [
    {
      title: '단순함 속의 완벽함',
      subtitle: 'Simplicity in Perfection',
      description: '복잡한 문제를 가장 단순하고 우아한 방법으로 해결합니다. 불필요한 복잡성을 제거하고 본질에 집중하여 사용자가 진정으로 원하는 것을 제공합니다.',
      icon: '✨',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: '혁신을 통한 성장',
      subtitle: 'Growth Through Innovation',
      description: '기존의 방식에 안주하지 않고 끊임없이 새로운 기술과 방법론을 탐구합니다. 혁신은 단순한 변화가 아닌, 더 나은 미래를 만드는 도구입니다.',
      icon: '🚀',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '협력과 신뢰',
      subtitle: 'Collaboration & Trust',
      description: '고객과의 진정한 파트너십을 바탕으로 함께 성장합니다. 투명한 소통과 상호 신뢰를 통해 최고의 결과를 만들어냅니다.',
      icon: '🤝',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: '지속 가능한 기술',
      subtitle: 'Sustainable Technology',
      description: '단기적인 성과보다는 장기적인 가치를 추구합니다. 확장 가능하고 유지보수가 용이한 솔루션으로 지속적인 성장을 지원합니다.',
      icon: '🌱',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];
  
  onMount(() => {
    mounted = true;
    
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section id="philosophy" class="relative py-32 bg-white overflow-hidden">
  <!-- 배경 장식 -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-20">
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <span class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
        우리의 철학
      </div>
      
      <h2 
        class="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        기술을 넘어<br />
        <span class="gradient-text">가치를 창조합니다</span>
      </h2>
      
      <p 
        class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.3s; animation-fill-mode: both;"
      >
        우리는 단순히 코드를 작성하는 것이 아닙니다. <br />사람과 기술이 조화롭게 만나는 지점에서 진정한 가치를 만들어냅니다.
      </p>
    </div>
    
    <!-- 철학 카드들 -->
    <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {#each philosophies as philosophy, index}
        <div 
          class="group relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 card-hover"
          class:animate-slide-up={mounted}
          style="animation-delay: {0.4 + index * 0.1}s; animation-fill-mode: both;"
        >
          <!-- 배경 그라데이션 -->
          <div class="absolute inset-0 bg-gradient-to-br {philosophy.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
          
          <!-- 아이콘과 제목 -->
          <div class="relative mb-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                {philosophy.icon}
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{philosophy.title}</h3>
                <p class="text-sm font-medium text-gray-500 code-font">{philosophy.subtitle}</p>
              </div>
            </div>
            <div class="w-20 h-1 bg-gradient-to-r {philosophy.gradient} rounded-full"></div>
          </div>
          
          <!-- 설명 -->
          <p class="text-gray-600 leading-relaxed relative z-10">
            {philosophy.description}
          </p>
          
          <!-- 호버 효과 -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br {philosophy.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        </div>
      {/each}
    </div>
    
    <!-- 인용구 섹션 -->
    <div 
      class="mt-24 text-center max-w-4xl mx-auto"
      class:animate-slide-up={mounted}
      style="animation-delay: 0.8s; animation-fill-mode: both;"
    >
      <div class="relative p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
        <!-- 인용 부호 -->
        <div class="absolute top-6 left-6 text-6xl text-gray-200 font-serif">"</div>
        <div class="absolute bottom-6 right-6 text-6xl text-gray-200 font-serif">"</div>
        
        <blockquote class="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-6 relative z-10">
          기술은 도구일 뿐입니다. 중요한 것은 그 도구로 무엇을 만들어내느냐입니다.
        </blockquote>
        
        <cite class="text-lg text-gray-600 font-medium">
          — Axient Team
        </cite>
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

