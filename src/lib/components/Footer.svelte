<script>
  import { scrollTo } from '$lib/utils.js';
  import { base } from '$app/paths';
</script>

<footer class="relative bg-slate-900 text-white overflow-hidden">
  <!-- 배경 효과 -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
    </div>
  </div>
  
  <div class="relative z-10">
    <!-- 메인 푸터 콘텐츠 -->
    <div class="container mx-auto px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-4 gap-12">
        <!-- 회사 정보 -->
        <div class="lg:col-span-2">
          <div class="mb-8">
            <h3 class="text-4xl font-black mb-4">
              <span class="gradient-text">Axient</span>
            </h3>
            <p class="text-white/70 text-lg leading-relaxed max-w-md">
              모바일, 서버, AI Agent 분야의 맞춤형 솔루션으로 비즈니스의 성장을 가속화합니다.
              "기술의 본질에 집중하여, 명쾌한 해답을 제시합니다." 이것이 고객과 함께 성공하는 방식입니다.
            </p>
          </div>
          
          <!-- 소셜 미디어 -->
          <div class="flex space-x-4">
            <a href="https://x.com/axiomorient" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/axiom-orient" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/axiom-orient" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <svg class="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 빠른 링크 -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">빠른 링크</h4>
          <ul class="space-y-4">
            <li>
              <button 
                on:click={() => scrollTo('#hero')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                홈
              </button>
            </li>
            <li>
              <button 
                on:click={() => scrollTo('#about')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                솔루션
              </button>
            </li>
            <li>
              <button
                on:click={() => scrollTo('#philosophy')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                우리의 철학
              </button>
            </li>
            <li>
              <button
                on:click={() => scrollTo('#process')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                개발 프로세스
              </button>
            </li>
            <li>
              <button
                on:click={() => scrollTo('#team')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                팀 소개
              </button>
            </li>
            <li>
              <button
                on:click={() => scrollTo('#tech')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                기술 스택
              </button>
            </li>
            <li>
              <button 
                on:click={() => scrollTo('#contact')}
                class="text-white/70 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
              >
                프로젝트 문의
              </button>
            </li>
          </ul>
        </div>
        
        <!-- 연락처 -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-white">연락처</h4>
          <ul class="space-y-4 text-white/70">
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="code-font">contact@axiomorient.com</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="code-font">***-****-****</span>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>충북 청주시 흥덕구<br />오송생명3로 31, 103동 2211호</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 하단 구분선 및 저작권
    <div class="border-t border-white/10">
      <div class="container mx-auto px-6 lg:px-8 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-white/50 text-sm">
            © 2025 Axient. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm text-white/50">
            <a href="{base}/" class="hover:text-white/70 transition-colors duration-200">개인정보처리방침</a>
            <a href="{base}/" class="hover:text-white/70 transition-colors duration-200">이용약관</a>
            <a href="{base}/" class="hover:text-white/70 transition-colors duration-200">쿠키 정책</a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</footer>
