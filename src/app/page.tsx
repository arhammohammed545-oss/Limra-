import { ArrowDownRight, ArrowUpRight, ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import { HeroVilla } from "@/components/hero-villa";

const homes = [
  { id: "01", name: "The Palm Residence", area: "ECR · Chennai", type: "Private villa", price: "₹3.85 Cr", beds: "4 beds", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85" },
  { id: "02", name: "The Courtyard Edit", area: "Indiranagar · Bengaluru", type: "Garden apartment", price: "₹1.62 Cr", beds: "3 beds", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" },
  { id: "03", name: "Casa Verde", area: "Race Course · Coimbatore", type: "Contemporary home", price: "₹2.20 Cr", beds: "4 beds", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="wordmark" href="#">limra<span>.</span></a>
        <div className="nav-links"><a href="#collection">Discover</a><a href="#philosophy">Our approach</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Speak to an advisor <MoveUpRight size={14} /></a>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> A more considered way home</div>
          <h1>Find a place<br />that feels like <em>yours.</em></h1>
          <p>Exceptional homes. Thoughtful guidance. A better way to discover where your next chapter begins.</p>
          <div className="hero-actions"><a className="button button-gold" href="#collection">Explore properties <ArrowUpRight size={16} /></a><a className="quiet-link" href="#philosophy">Discover Limra <ArrowDownRight size={15} /></a></div>
          <div className="hero-meta"><span>01 — 03</span><i /> <span>Spaces to live beautifully</span></div>
        </div>
        <div className="hero-visual"><HeroVilla /></div>
        <div className="hero-side-note">ARCHITECTURE · LIFESTYLE · BELONGING</div>
        <div className="hero-bottom"><span>CURATED HOMES, CONSIDERED LIVING</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip">
        <span>THE LIMRA POINT OF VIEW</span><p>Not just a place to live. A place to <em>become.</em></p><span>EST. 2026</span>
      </section>

      <section className="collection section" id="collection">
        <div className="section-top"><div><div className="eyebrow dark"><span /> THE COLLECTION · 01</div><h2>Places worth<br />coming home to.</h2></div><p>A handpicked collection of homes with character, considered details and room for life to happen.</p></div>
        <div className="home-grid">
          {homes.map((home) => <article className="home-card" key={home.id}>
            <a className="home-image" href="#contact" style={{ backgroundImage: `url(${home.image})` }}><span className="home-number">{home.id}</span><span className="home-arrow"><ArrowUpRight size={18} /></span></a>
            <div className="home-details"><div className="home-type">{home.type} <span>·</span> {home.beds}</div><h3>{home.name}</h3><div className="home-foot"><span><MapPin size={13} /> {home.area}</span><strong>{home.price}</strong></div></div>
          </article>)}
        </div>
        <div className="collection-end"><span>01 / A FEW PLACES TO BEGIN</span><a href="#contact">Find your place <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="philosophy" id="philosophy">
        <div className="philosophy-image" />
        <div className="philosophy-copy"><div className="eyebrow"><span /> A DIFFERENT PERSPECTIVE · 02</div><h2>More than a property.<br /><em>A feeling.</em></h2><p>Finding a home is one of life's most personal decisions. At Limra, we bring clarity to every step — pairing considered spaces with people who will make them their own.</p><p>From the first conversation to the moment you turn the key, discover a property journey shaped around you.</p><a className="quiet-link" href="#contact">The Limra approach <ArrowUpRight size={15} /></a><div className="philosophy-stats"><div><strong>01:01</strong><span>PERSONAL ATTENTION</span></div><div><strong>100%</strong><span>PEOPLE FIRST</span></div></div></div>
      </section>

      <section className="closing" id="contact"><div className="eyebrow"><span /> YOUR NEXT CHAPTER · 03</div><h2>The right home changes<br />how every day <em>feels.</em></h2><p>Tell us what home means to you. Our team will help you explore the possibilities, one thoughtful step at a time.</p><a className="button button-gold" href="mailto:hello@limra.in">Start a conversation <ArrowUpRight size={16} /></a></section>

      <footer className="footer"><div className="footer-main"><div><a className="wordmark" href="#">limra<span>.</span></a><p>Thoughtful spaces. Meaningful beginnings. A considered way to find your place in the world.</p></div><div className="footer-col"><b>EXPLORE</b><a href="#collection">Featured homes</a><a href="#philosophy">Our approach</a><a href="#contact">The experience</a></div><div className="footer-col"><b>GET IN TOUCH</b><a href="mailto:hello@limra.in">hello@limra.in</a><a href="#contact">Speak to an advisor</a></div><a className="back-top" href="#">BACK TO TOP <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 LIMRA. ALL RIGHTS RESERVED.</span><span>MADE FOR THE MOMENTS THAT MATTER.</span></div></footer>
    </main>
  );
}
