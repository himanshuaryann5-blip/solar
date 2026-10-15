import type { MetadataRoute } from 'next';
import { pageData } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{const base=(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com').replace(/\/$/,'');const paths=['',...Object.keys(pageData),'solar-savings-calculator','our-projects'];return paths.map(path=>({url:`${base}/${path}`.replace(/\/$/,'')||base,lastModified:new Date(),changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:path==='contact-us'||path==='solar-savings-calculator'?0.9:0.7}));}
