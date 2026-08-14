import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const updateTarget = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = docHeight > 0 ? window.scrollY / docHeight : 0;
    };

    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const next = current + (target - current) * 0.18;
      currentRef.current = next;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, next))})`;
      }
      if (Math.abs(target - next) > 0.0005) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = 0;
      }
    };

    const onScroll = () => {
      updateTarget();
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    updateTarget();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full w-full origin-left will-change-transform"
        style={{ backgroundColor: '#c9a84c', transform: 'scaleX(0)' }}
      />
    </div>
  );
}