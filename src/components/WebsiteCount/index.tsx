import React, { useEffect, useState } from 'react'
import { jsonp } from 'src/utils/jsonp'

interface BusuanziData {
  page_pv: number
  site_pv: number
  site_uv: number
  version: number
}

export default function WebsiteCount(): JSX.Element {
  const [pagePV, setPagePV] = useState<number>(0)
  const [siteUV, setSiteUV] = useState<number>(0)
  const [sitePV, setSitePV] = useState<number>(0)

  const loadData = async () => {
    const data = await jsonp.get<BusuanziData>('//busuanzi.ibruce.info/busuanzi', {
      callbackParam: 'jsonpCallback',
    })
    if (data) {
      setPagePV(data.page_pv)
      setSiteUV(data.site_uv)
      setSitePV(data.site_pv)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <span id="busuanzi_container_site_pv">本站总访问量{sitePV}次（所有页面的总访问次数）</span>
      <br />
      <span id="busuanzi_container_site_uv">本站访客数{siteUV}人次</span>
      <br />
      <span id="busuanzi_container_page_pv">本文总阅读量{pagePV}次</span>
    </div>
  )
}
