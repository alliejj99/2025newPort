// const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
// const listEl = document.querySelector('.side-scroll-list');

// gsap.to(listEl, {
//   x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.side-scroll',
//     start: 'top top',
//     end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     invalidateOnRefresh: true,
//   },
// });


const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
const listEl = document.querySelector('.side-scroll-list');

function initHorizontalScroll() {
  if (window.innerWidth < 768) {
    // 모바일 환경에서는 기본 동작을 설정하거나 다른 처리
    ScrollTrigger.kill(); // 기존 ScrollTrigger 제거
    gsap.set(listEl, { x: 0 }); // 초기화
  } else {
    // 데스크톱 환경에서는 가로 스크롤 활성화
    gsap.to(listEl, {
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.side-scroll',
        start: 'top top',
        end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }
}

// 초기화 및 리사이즈 이벤트 리스너 추가
initHorizontalScroll();
window.addEventListener('resize', () => {
  initHorizontalScroll();
});
