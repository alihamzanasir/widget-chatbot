"use client";

import Script from "next/script";

export default function ConversaTreeWidget() {   
  return (
    <Script
      src="https://conversa-tree-8ligyvay5-saifgit903s-projects.vercel.app/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-ignore
        if (window.ConversaTree) {
          // @ts-ignore
          window.ConversaTree.init({
            apiUrl: "/api/proxy",
            treeId: 3,
              domain: "techstore.com",
            userId:"13"
          });
        }
      }}
    />
  );
}
