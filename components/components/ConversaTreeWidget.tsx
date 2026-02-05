"use client";

import Script from "next/script";

export default function ConversaTreeWidget() {
  return (
    <Script
      src="https://conversa-tree.vercel.app/loader.js"
      data-api-url="https://conversatree.geniusai.biz/api/proxy"
      data-tree-id="138"
      data-domain="cokestore.com"
    ></Script>
  );  
}
