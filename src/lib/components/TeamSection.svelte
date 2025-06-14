<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let scrollY = 0;
  
  const teamMembers = [
  {
    name: '이호준',
    role: 'CEO & Lead Developer',
    specialty: '시스템 아키텍처 설계',
    description: '20여년의 경험으로 다져진 직관과 깊이로 기술의 방향을 결정합니다. 단순히 코드를 작성하는 것을 넘어, 비즈니스의 성공과 직결되는 가장 안정적이고 효율적인 시스템을 설계하는 일에 가장 큰 보람을 느낍니다.',
    skills: ['Architecture', 'AI Agent', 'Full-Stack', 'Strategy'],
    avatar: '👨‍💻',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: '최수진',
    role: 'Principal Scientist',
    specialty: '데이터 기반 시스템 분석',
    description: '살아있는 세포라는 작은 우주 속에서 보이지 않는 단백질의 움직임을 추적하고, 그 의미를 데이터로 증명해냈습니다. 이러한 정교한 분석력과 시스템적 사고는 이제 비즈니스라는 또 다른 유기체 속에서 숨겨진 기회와 리스크를 발견하는 데 사용됩니다. 데이터의 소음을 걷어내고, 가장 명쾌한 의사결정의 근거를 제시합니다.',
    skills: ['System Analysis', 'Data Interpretation', 'Hypothesis Testing', 'R&D'],
    avatar: '👩‍🔬',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    name: 'Aiden Lee',
    role: 'Mobile Developer',
    specialty: '최고의 사용자 경험 설계',
    description: '사용자의 손안에서 가장 쾌적하고 직관적인 경험을 만드는 데 집중합니다. 수많은 앱들 속에서 사용자가 기꺼이 시간을 할애하고 다시 찾게 되는 앱, 그것이 그의 유일한 목표입니다.',
    skills: ['Swift', 'Kotlin', 'Declarative UI', 'User Experience'],
    avatar: '👨‍📱',
    gradient: 'from-cyan-500 to-blue-500'
  }
];
  
  onMount(() => {
    mounted = true;
    
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section id="team" class="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <!-- 배경 장식 -->
  <div class="absolute inset-0 opacity-30">
    <div class="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <!-- 섹션 헤더 -->
    <div class="text-center mb-20">
      <div 
        class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.1s; animation-fill-mode: both;"
      >
        <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
        Axient를 만드는 사람들
      </div>
      
      <h2 
        class="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.2s; animation-fill-mode: both;"
      >
        열정적인 <span class="gradient-text">크리에이터들</span>
      </h2>
      
      <p 
        class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        class:animate-slide-up={mounted}
        style="animation-delay: 0.3s; animation-fill-mode: both;"
      >
        각자의 전문 분야에서 최고의 실력을 갖춘 팀원들이 모여 하나의 비전을 향해 나아갑니다.
      </p>
    </div>
    
    <!-- 팀원 카드들 -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each teamMembers as member, index}
        <div 
          class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 card-hover"
          class:animate-slide-up={mounted}
          style="animation-delay: {0.4 + index * 0.1}s; animation-fill-mode: both;"
        >
          <!-- 배경 그라데이션 -->
          <div class="absolute inset-0 bg-gradient-to-br {member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          
          <!-- 카드 헤더 -->
          <div class="relative p-8 pb-6">
            <!-- 아바타 -->
            <div class="w-20 h-20 bg-gradient-to-br {member.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              {member.avatar}
            </div>
            
            <!-- 이름과 역할 -->
            <div class="text-center mb-4">
              <h3 class="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p class="text-sm font-medium text-gray-500 mb-1">{member.role}</p>
              <p class="text-xs text-gray-400 code-font">{member.specialty}</p>
            </div>
            
            <!-- 구분선 -->
            <div class="w-16 h-1 bg-gradient-to-r {member.gradient} rounded-full mx-auto mb-4"></div>
          </div>
          
          <!-- 카드 본문 -->
          <div class="relative px-8 pb-8">
            <!-- 설명 -->
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              {member.description}
            </p>
            
            <!-- 스킬 태그들 -->
            <div class="flex flex-wrap gap-2">
              {#each member.skills as skill}
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-gray-200 transition-colors duration-300">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
          
          <!-- 호버 효과 -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br {member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        </div>
      {/each}
    </div>
    
    <!-- 팀 통계 -->
    <div 
      class="mt-24 grid md:grid-cols-4 gap-8 text-center"
      class:animate-slide-up={mounted}
      style="animation-delay: 1.0s; animation-fill-mode: both;"
    >
      <div class="p-6">
        <div class="text-4xl font-black text-gray-900 mb-2">{teamMembers.length}</div>
        <div class="text-gray-600">전문가</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-gray-900 mb-2">15+</div>
        <div class="text-gray-600">팀 평균 경력 (년)</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-gray-900 mb-2">100+</div>
        <div class="text-gray-600">성공 프로젝트</div>
      </div>
      <div class="p-6">
        <div class="text-4xl font-black text-gray-900 mb-2">24/7</div>
        <div class="text-gray-600">협업 시간</div>
      </div>
    </div>
    
    <!-- 채용 정보 -->
    <div 
      class="mt-20 text-center"
      class:animate-slide-up={mounted}
      style="animation-delay: 1.2s; animation-fill-mode: both;"
    >
      <div class="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-gray-100">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">함께 성장할 동료를 찾습니다</h3>
        <p class="text-gray-600 mb-6 leading-relaxed">          
          Axient와 함께 기술로 더 나은 미래를 만들어갈 열정적인 인재를 기다립니다.
        </p>
        <a 
          href="https://www.linkedin.com/company/axiom-orient" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          커리어 기회 확인하기
        </a>
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
