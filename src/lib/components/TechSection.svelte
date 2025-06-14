<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let scrollY = 0;
  
  const techCategories = [
    {
      title: 'Frontend',
      description: '사용자 중심의 현대적이고 반응형 프론트엔드 개발',
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', level: 95, description: '컴포넌트 기반 UI 라이브러리' },
        { name: 'Next.js', level: 92, description: 'React 기반 프로덕션 프레임워크' },
        { name: 'Svelte', level: 90, description: '컴파일 타임 최적화 프레임워크' },
        { name: 'TypeScript', level: 92, description: '타입 안전성을 제공하는 JavaScript' },
        { name: 'Tailwind CSS', level: 88, description: '유틸리티 기반 CSS 프레임워크' }
      ]
    },
    {
      title: 'Backend',
      description: 'Rust기반 고성능 백엔드 및 클라우드 인프라 구축',
      icon: '⚡',
      gradient: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Rust', level: 88, description: '고성능 시스템 프로그래밍 언어' },
        { name: 'Node.js', level: 93, description: 'JavaScript 런타임 환경' },
        { name: 'Python', level: 90, description: '다목적 프로그래밍 언어' },
        { name: 'VectorDB', level: 86, description: 'AI용 고성능 벡터 데이터베이스' },
        { name: 'PostgreSQL', level: 88, description: '강력한 오픈소스 관계형 데이터베이스' }
      ]
    },
    {
      title: 'Mobile',
      description: 'iOS & Android 네이티브 앱 개발. 모듈러 아키텍처 활용',
      icon: '📱',
      gradient: 'from-emerald-500 to-teal-500',
      technologies: [
        { name: 'Swift', level: 85, description: 'Apple 플랫폼 네이티브 개발 언어' },
        { name: 'Kotlin', level: 83, description: 'Android 플랫폼 네이티브 개발 언어' },
        { name: 'SwiftUI', level: 88, description: '선언적 iOS UI 프레임워크' },
        { name: 'Jetpack Compose', level: 88, description: '선언적 Android UI 툴킷' },
        { name: 'Modular Architecture', level: 87, description: '확장성 높은 모바일 앱 설계' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'AWS/GCP 기반 클라우드 인프라 및 DevOps 자동화',
      icon: '☁️',
      gradient: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'AWS', level: 92, description: '아마존 웹 서비스 클라우드 플랫폼' },
        { name: 'Google Cloud', level: 90, description: '구글 클라우드 플랫폼 서비스' },
        { name: 'Kubernetes', level: 85, description: '컨테이너 오케스트레이션 시스템' },
        { name: 'Docker', level: 90, description: '애플리케이션 컨테이너화 플랫폼' },
        { name: 'GitHub Actions', level: 88, description: 'CI/CD 자동화' }
      ]
    },
    {
      title: 'AI & ML',
      description: 'On-Device AI, LLM(GPT, Langchain) 기반 지능형 AI 에이전트 개발',
      icon: '🤖',
      gradient: 'from-violet-500 to-purple-500',
      technologies: [
        { name: 'OpenAI API (GPT)', level: 90, description: 'GPT 모델 기반 LLM 서비스 통합' },
        { name: 'Langchain', level: 87, description: 'LLM 기반 애플리케이션 개발 프레임워크' },
        { name: 'On-Device AI', level: 88, description: '엣지 디바이스용 AI 모델 구현 및 최적화' },
        { name: 'RAG Pipelines', level: 87, description: '검색 증강 생성(RAG) 파이프라인 구축' },
        { name: 'Transformer Models', level: 85, description: '최신 트랜스포머 아키텍처 기반 모델 활용' }
      ]
    },
    {
      title: 'Tools & Others',
      description: '개발 생산성 및 협업 효율을 높이는 필수 도구',
      icon: '🛠️',
      gradient: 'from-gray-500 to-slate-500',
      technologies: [
        { name: 'Git', level: 95, description: '버전 관리 시스템' },
        { name: 'Figma', level: 90, description: '협업 디자인 도구' },
        { name: 'Notion', level: 88, description: '팀 협업 플랫폼' },
        { name: 'Slack', level: 92, description: '팀 커뮤니케이션' },
        { name: 'Docker', level: 90, description: '애플리케이션 컨테이너화 플랫폼' }
      ]
    }
  ];
  
  onMount(() => {
    mounted = true;
    
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section id="tech" class="relative py-32 bg-slate-900 text-white overflow-hidden">
  <!-- 배경 효과 -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-3/4 left-3/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-20">
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium mb-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
        기술 스택
      </div>
      
      <h2 
        class="text-5xl md:text-6xl font-black mb-6 tracking-tight"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        최신 기술로<br />
        <span class="gradient-text">미래를 구축합니다</span>
      </h2>
      
      <p 
        class="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.3s; animation-fill-mode: both;"
      >
        검증된 기술과 혁신적인 도구를 조합하여 최고의 성능과 사용자 경험을 제공합니다.
      </p>
    </div>
    
    <!-- 기술 카테고리들 -->
    <div class="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {#each techCategories as category, categoryIndex}
        <div 
          class="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
          class:animate-slide-up={mounted}
          style="animation-delay: {0.4 + categoryIndex * 0.1}s; animation-fill-mode: both;"
        >
          <!-- 카테고리 헤더 -->
          <div class="flex items-center space-x-4 mb-6">
            <div class="text-4xl">{category.icon}</div>
            <div>
              <h3 class="text-2xl font-bold text-white">{category.title}</h3>
              <p class="text-white/60 text-sm">{category.description}</p>
            </div>
          </div>
          
          <!-- 기술 목록 -->
          <div class="space-y-4">
            {#each category.technologies as tech, techIndex}
              <div class="group/tech">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-white font-medium">{tech.name}</span>
                  <span class="text-white/60 text-sm code-font">{tech.level}%</span>
                </div>
                
                <!-- 프로그레스 바 -->
                <div class="w-full bg-white/10 rounded-full h-2 mb-1">
                  <div 
                    class="bg-gradient-to-r {category.gradient} h-2 rounded-full transition-all duration-1000 ease-out"
                    style="width: {mounted ? tech.level : 0}%; animation-delay: {0.5 + categoryIndex * 0.1 + techIndex * 0.05}s;"
                  ></div>
                </div>
                
                <p class="text-white/50 text-xs">{tech.description}</p>
              </div>
            {/each}
          </div>
          
          <!-- 호버 효과 -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br {category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        </div>
      {/each}
    </div>
    
    <!-- 기술 통계 -->
    <div 
      class="mt-24 grid md:grid-cols-4 gap-8 text-center"
      class:animate-slide-up={mounted}
      style="animation-delay: 1.0s; animation-fill-mode: both;"
    >
      <div class="p-6">
        <div class="text-4xl font-black text-white mb-2">30+</div>
        <div class="text-white/70">기술 스택</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-white mb-2">5+</div>
        <div class="text-white/70">전문 분야</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-white mb-2">100%</div>
        <div class="text-white/70">최신 기술 적용</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-white mb-2">24/7</div>
        <div class="text-white/70">기술 지원</div>
      </div>
    </div>
    
    <!-- 기술 철학 -->
    <div 
      class="mt-20 text-center max-w-4xl mx-auto"
      class:animate-slide-up={mounted}
      style="animation-delay: 1.2s; animation-fill-mode: both;"
    >
      <div class="relative p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
        <h3 class="text-2xl font-bold text-white mb-6">기술 선택 철학</h3>
        <p class="text-white/70 leading-relaxed mb-6">
          우리는 단순히 최신 기술을 쫓지 않습니다. 프로젝트의 목적과 요구사항에 가장 적합한 기술을 선택하여, 
          장기적으로 유지보수가 가능하고 확장성 있는 솔루션을 제공합니다.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-sm">
            성능 최적화
          </span>
          <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-sm">
            확장성
          </span>
          <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-sm">
            유지보수성
          </span>
          <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/80 text-sm">
            보안
          </span>
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
