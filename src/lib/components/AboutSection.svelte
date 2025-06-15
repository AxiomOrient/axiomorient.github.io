<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let scrollY = 0;
  
  const services = [
    {
      icon: '📱',
      title: '모바일 솔루션',
      subtitle: 'iOS & Android',
      description: '사용자 경험을 최우선으로 하는 직관적이고 성능 최적화된 네이티브 애플리케이션을 개발합니다.',
      features: ['Swift/Kotlin', 'SwiftUI/Jetpack Compose', 'Concurrency', 'Modular Architecture'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: '서버 인프라',
      subtitle: 'Cloud & Backend',
      description: '확장 가능하고 안정적인 백엔드 시스템과 클라우드 인프라로 비즈니스 성장을 뒷받침',
      features: ['AWS/Google Cloud', 'Kubernetes', 'VecterDB', 'Rust/Python/Node.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤖',
      title: 'AI Agent',
      subtitle: 'On-Device & LLM',
      description: '최신 LLM 기술을 활용하여 개인화되고 안전한 지능형 에이전트 솔루션을 제공합니다.',
      features: ['GPT Integration',  'On-Device AI', 'RAG Pipelines', 'Transformer Models'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  
  onMount(() => {
    mounted = true;
    
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section id="about" class="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <!-- 배경 장식 -->
  <div class="absolute inset-0 opacity-30">
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-20">
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        우리의 전문 분야
      </div>
      
      <h2 
        class="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        기술로 만드는<br />
        <span class="gradient-text">완벽한 솔루션</span>
      </h2>
      
      <p 
        class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.3s; animation-fill-mode: both;"
      >
        복잡한 비즈니스 요구사항을 우아하고 효율적인 기술 솔루션으로 변환하는 것이 우리의 사명입니다.
      </p>
    </div>
    
    <!-- 서비스 카드들 -->
    <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each services as service, index}
        <div 
          class="group relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100"
          class:animate-slide-up={mounted}
          style="animation-delay: {0.4 + index * 0.1}s; animation-fill-mode: both;"
        >
          <!-- 카드 배경 그라데이션 -->
          <div class="absolute inset-0 bg-gradient-to-br {service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
          
          <!-- 아이콘 -->
          <div class="relative mb-6">
            <div class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <div class="w-16 h-1 bg-gradient-to-r {service.color} rounded-full"></div>
          </div>
          
          <!-- 콘텐츠 -->
          <div class="relative">
            <div class="mb-2">
              <h3 class="text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p class="text-sm font-medium text-gray-500 code-font">{service.subtitle}</p>
            </div>
            
            <p class="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <!-- 기술 스택 -->
            <div class="flex flex-wrap gap-2">
              {#each service.features as feature}
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-gray-200 transition-colors duration-300">
                  {feature}
                </span>
              {/each}
            </div>
          </div>
          
          <!-- 호버 효과 -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br {service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
      {/each}
    </div>
    
    <!-- 통계 섹션 -->
    <div class="mt-24 grid md:grid-cols-3 gap-8 text-center">
      <div 
        class="p-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.8s; animation-fill-mode: both;"
      >
        <div class="text-4xl font-black text-gray-900 mb-2">30+</div>
        <div class="text-gray-600">성공적인 프로젝트</div>
      </div>
      <div 
        class="p-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.9s; animation-fill-mode: both;"
      >
        <div class="text-4xl font-black text-gray-900 mb-2">99%</div>
        <div class="text-gray-600">고객 만족도</div>
      </div>
      <div 
        class="p-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 1.0s; animation-fill-mode: both;"
      >
        <div class="text-4xl font-black text-gray-900 mb-2">Avg. 10x</div>
        <div class="text-gray-600">자동화 효율</div>
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
