"use client";

import Script from "next/script";

export default function ConversaTreeWidget() {
  return (
    <Script
      src="https://conversa-tree.vercel.app/loader.js"
      data-api-url="http://13.51.169.186:3009/api"
      data-tree-id="138"
      data-domain="cokestore.com"
    ></Script>
  );
}
