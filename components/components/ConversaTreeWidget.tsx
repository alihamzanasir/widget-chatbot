"use client";

import Script from "next/script";

export default function ConversaTreeWidget() {   
  return (
    <Script
      src="https://conversa-tree.vercel.app/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-ignore
        if (window.ConversaTree) {
          // @ts-ignore
          window.ConversaTree.init({
    apiUrl: 'https://conversatreeapi.geniusai.biz/api',
    treeId: 70,
            domain: 'techstore.com',
    userId: 'trueuser'
  });
        }
      }}
    />
  );
}
