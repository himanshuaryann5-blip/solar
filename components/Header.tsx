'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import { business, nav, wa } from '@/lib/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  return <>
    <div className="announcement"><span>POWERING A CLEANER FUTURE ACROSS HARYANA</span><span className="announcement-right">Thoughtful solar. Built around your needs.</span></div>
    <header className="site-header">
      <div className="header-inner">
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(group => <div className="nav-group" key={group.label}>
            <button className="nav-trigger" onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} aria-expanded={openGroup === group.label}>{group.label}<ChevronDown size={14}/></button>
            {openGroup === group.label && <div className="nav-dropdown">{group.items.map(item => <Link key={item.href} href={item.href} onClick={() => setOpenGroup(null)}>{item.label}<ArrowUpRight size={14}/></Link>)}</div>}
          </div>)}
          <Link href="/solar-savings-calculator">Savings calculator</Link>
        </nav>
        <Link className="wordmark" href="/" aria-label="Dangi Solar Solutions home"><span className="brand-mark"><span/></span><span>Dangi <b>Solar</b><small>SOLUTIONS</small></span></Link>
        <div className="header-actions"><a className="header-phone" href={`tel:${business.phone.replaceAll(' ','')}`}><Phone size={15}/><span>+91 94666 22220</span></a><Link className="button button-small" href="/contact-us">Get free quote <ArrowUpRight size={15}/></Link></div>
        <button className="mobile-menu-button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      {mobileOpen && <div className="mobile-menu">
        {nav.map(group => <div className="mobile-group" key={group.label}><button onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}>{group.label}<ChevronDown size={16}/></button>{openGroup === group.label && group.items.map(item => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}</div>)}
        <Link href="/solar-savings-calculator" onClick={() => setMobileOpen(false)}>Savings calculator</Link><Link href="/contact-us" onClick={() => setMobileOpen(false)}>Get a free quote</Link><a href={wa('Hello Dangi Solar Solutions, I would like to know more about your solar installation services.')} target="_blank" rel="noreferrer">WhatsApp the team</a>
      </div>}
    </header>
  </>;
}
