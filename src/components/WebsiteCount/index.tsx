import React, { useEffect } from 'react';

export default function WebsiteCount(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src= "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
    document.body.appendChild(script);
  }, [])

  return <div>
    <span id="busuanzi_container_site_pv">
      本站总访问量<span id="busuanzi_value_site_pv"></span>次
    </span>
    <br />
    <span id="busuanzi_container_site_uv">
      本站访客数<span id="busuanzi_value_site_uv"></span>人次
    </span>
    <br />
    <span id="busuanzi_container_page_pv">
      本文总阅读量<span id="busuanzi_value_page_pv"></span>次
    </span>
  </div>
}
