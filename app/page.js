'use client'

import Script from 'next/script'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>Hello Worldsss</h1>

      <Script id="yourgpt-chatbot" strategy="afterInteractive">
        {`
          window.YGC_WIDGET_ID = "${process.env.NEXT_PUBLIC_YOURGPT_WIDGET_ID}";
          (function(){
            var script = document.createElement('script');
            script.src = "https://widget.yourgpt.ai/script.js";
            script.id = 'yourgpt-chatbot';
            document.body.appendChild(script);
          })();
        `}
      </Script>
    </main>
  )
}
