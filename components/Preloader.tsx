'use client';

import { useEffect, useState } from 'react';

const MINIMUM_DISPLAY_MS = 1100;
const MAXIMUM_DISPLAY_MS = 8000;
const FADE_DURATION_MS = 400;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const startedAt = Date.now();
    let completed = false;
    let readyTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    const dismiss = () => {
      if (completed) return;
      completed = true;
      setVisible(false);
      removeTimer = setTimeout(() => setMounted(false), FADE_DURATION_MS);
    };

    const dismissWhenReady = () => {
      if (completed || readyTimer) return;
      const remaining = Math.max(0, MINIMUM_DISPLAY_MS - (Date.now() - startedAt));
      readyTimer = setTimeout(dismiss, remaining);
    };

    const fallbackTimer = setTimeout(dismiss, MAXIMUM_DISPLAY_MS);
    if (document.readyState !== 'loading') {
      dismissWhenReady();
    } else {
      document.addEventListener('DOMContentLoaded', dismissWhenReady, { once: true });
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (readyTimer) clearTimeout(readyTimer);
      if (removeTimer) clearTimeout(removeTimer);
      document.removeEventListener('DOMContentLoaded', dismissWhenReady);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`site-preloader${visible ? '' : ' site-preloader--exiting'}`}
      role="status"
      aria-label="Loading Dangi Solar Solutions"
      aria-hidden={!visible}
    >
      <div className="site-preloader__content">
        <div className="wordmark" role="img" aria-label="Dangi Solar Solutions">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>Dangi <b>Solar</b><small>SOLUTIONS</small></span>
        </div>
        <div className="site-preloader__progress" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
