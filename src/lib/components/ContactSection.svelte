<script>
  import { onMount } from 'svelte';
  
  let mounted = false;
  let form = {
    name: '',
    email: '',
    company: '',
    message: ''
  };
  
  onMount(() => {
    mounted = true;
  });
  
  function handleMailtoSubmit() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('이름, 이메일, 문의 내용은 필수 항목입니다. 모든 필수 항목을 입력해주세요.');
      return;
    }

    const recipientEmail = 'contact@axiomorient.com'; // 수신자 이메일 주소
    const subject = encodeURIComponent(`프로젝트 문의 - ${form.name}`);
    const body = encodeURIComponent(
`다음은 문의하신 내용입니다:

이름: ${form.name}
이메일: ${form.email}
회사명: ${form.company || '정보 없음'}

문의 내용:
${form.message}

--------------------------------------------------
이 메일은 Axient 홈페이지 문의 양식을 통해 발송되었습니다.`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  }
</script>

<section id="contact" class="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  <!-- 배경 장식 -->
  <div class="absolute inset-0 opacity-40">
    <div class="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl"></div>
  </div>
  
  <div class="relative z-10 container mx-auto px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- 섹션 헤더 -->
      <div class="text-center mb-20">
        <div 
          class="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.1s; animation-fill-mode: both;"
        >
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          지금, 함께하세요
        </div>
        
        <h2 
          class="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.2s; animation-fill-mode: both;"
        >
          당신의 아이디어를<br />
          <span class="gradient-text">최고의 기술로 실현하세요</span>
        </h2>
        
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.3s; animation-fill-mode: both;"
        >
          Axient의 전문성과 함께라면, 어떤 아이디어든 성공적인 현실로 구현될 수 있습니다.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- 연락처 정보 -->
        <div 
          class="space-y-8"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.4s; animation-fill-mode: both;"
        >
          <div class="space-y-6">
            <h3 class="text-3xl font-bold text-gray-900 mb-8">연락처 정보</h3>
            
            <!-- 연락처 카드들 -->
            <div class="space-y-4">
              <div class="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-lg">이메일</p>
                    <p class="text-gray-600 code-font">contact@axiomorient.com</p>
                  </div>
                </div>
              </div>
              
              <div class="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-lg">전화</p>
                    <p class="text-gray-600 code-font">***-****-****</p>
                  </div>
                </div>
              </div>
              
              <div class="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div class="flex items-center space-x-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 text-lg">주소</p>
                    <p class="text-gray-600">충북 청주시 흥덕구 오송생명3로 31, 103동 2211호</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 운영 시간 -->
          <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">운영 시간</h4>
            <div class="space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span>평일</span>
                <span class="code-font">09:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>주말 및 공휴일</span>
                <span class="text-red-500">휴무</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 문의 폼 -->
        <div 
          class="relative"
          class:animate-slide-up={mounted}
          style="animation-delay: 0.6s; animation-fill-mode: both;"
        >
          <div class="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <!-- 폼 배경 장식 -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">프로젝트 문의</h3>
              
              <form on:submit|preventDefault class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">이름 *</label>
                    <input 
                      type="text" 
                      id="name" 
                      bind:value={form.name}
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">이메일 *</label>
                    <input 
                      type="email" 
                      id="email" 
                      bind:value={form.email}
                      required
                      class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                </div>
                
                <div>
                  <label for="company" class="block text-sm font-semibold text-gray-900 mb-2">회사명</label>
                  <input 
                    type="text" 
                    id="company" 
                    bind:value={form.company}
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">문의 내용 *</label>
                  <textarea 
                    id="message" 
                    bind:value={form.message}
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                    placeholder="프로젝트에 대한 상세한 내용을 알려주세요"
                  ></textarea>
                </div>
                
                <button 
                  type="button"
                  on:click={handleMailtoSubmit}
                  class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 glow-effect"
                >
                  상담 요청하기
                </button>
              </form>
            </div>
          </div>
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
