<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import PhilosophySection from '$lib/components/PhilosophySection.svelte';
  import ProcessSection from '$lib/components/ProcessSection.svelte';
  import TeamSection from '$lib/components/TeamSection.svelte';
  import TechSection from '$lib/components/TechSection.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Axient - 혁신적인 기술 솔루션</title>
  <meta name="description" content="복잡한 기술을 우아한 솔루션으로 변환하여 비즈니스의 성장을 지원하는 기술 파트너, Axient입니다." />
  <meta property="og:title" content="Axient - 혁신적인 기술 솔루션" />
  <meta property="og:description" content="모바일, 서버, AI Agent 솔루션으로 당신의 비즈니스를 성장시키세요." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="overflow-x-hidden">
  <HeroSection />
  <AboutSection />
  <PhilosophySection />
  <ProcessSection />
  <TeamSection />
  <TechSection />
  <ContactSection />
  <Footer />
</main>