import { useEffect, useMemo, useState } from 'react';
import {
  Clock,
  Croissant,
  ExternalLink,
  Languages,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
} from 'lucide-react';
import {
  GALLERY_BLOCKS,
  Language,
  MENU_ITEMS,
  MenuCategory,
  UI_COPY,
  WHATSAPP_NUMBER,
} from './data/bakeryData';

const CATEGORY_ORDER: MenuCategory[] = ['all', 'cakes', 'puffs', 'biscuits', 'sweets'];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const nextQty = (prev[id] ?? 0) + delta;
      if (nextQty <= 0) {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const selectedList = useMemo(() => {
    return MENU_ITEMS.filter((item) => (cart[item.id] ?? 0) > 0).map((item) => ({
      item,
      qty: cart[item.id],
    }));
  }, [cart]);

  const totalCount = useMemo(
    () => selectedList.reduce((sum, entry) => sum + entry.qty, 0),
    [selectedList]
  );

  const totalAmount = useMemo(
    () => selectedList.reduce((sum, entry) => sum + entry.item.price * entry.qty, 0),
    [selectedList]
  );

  const whatsappUrl = useMemo(() => {
    if (selectedList.length === 0) {
      const text = encodeURIComponent(UI_COPY.whatsapp.defaultMessage[lang]);
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    }
    const lines = selectedList.map(
      ({ item, qty }) => `• ${qty} x ${item.name[lang]} (₹${item.price * qty})`
    );
    const totalLine = lang === 'en' ? `Total: ₹${totalAmount}` : `மொத்தம்: ₹${totalAmount}`;
    const fullMessage = [
      UI_COPY.whatsapp.itemOrderPrefix[lang],
      ...lines,
      totalLine,
      UI_COPY.whatsapp.itemOrderSuffix[lang],
    ].join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  }, [lang, selectedList, totalAmount]);

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#261811] flex flex-col">
      {/* Top Bar: strict 3-zone contract (Wordmark — Nav Links — 1 Primary Action) */}
      <header className="sticky top-0 z-30 h-13 bg-[#FBF8F3]/95 backdrop-blur-sm border-b border-[#E6DACA]">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#261811] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A3412] rounded"
          >
            {UI_COPY.brand[lang]}
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5C4638]"
          >
            <a
              href="#menu"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {UI_COPY.nav.menu[lang]}
            </a>
            <a
              href="#gallery"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {UI_COPY.nav.gallery[lang]}
            </a>
            <a
              href="#about"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {UI_COPY.nav.about[lang]}
            </a>
            <a
              href="#visit"
              className="hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              {UI_COPY.nav.visit[lang]}
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={lang === 'en' ? 'Switch language to Tamil' : 'Switch language to English'}
              className="inline-flex items-center gap-2 min-h-[38px] px-4 py-1.5 text-sm font-semibold rounded-lg bg-[#261811] text-[#FBF8F3] hover:bg-[#9A3412] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
            >
              <Languages className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{UI_COPY.langToggle[lang]}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-[#E6DACA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-sm font-medium text-[#9A3412] mb-3">
                  {UI_COPY.hero.locationNote[lang]}
                </p>
                <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#261811] leading-[1.12] text-balance max-w-2xl">
                  {UI_COPY.hero.headline[lang]}
                </h1>
                <p className="mt-5 text-base sm:text-lg text-[#5C4638] leading-relaxed max-w-xl">
                  {UI_COPY.hero.subtext[lang]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-[#9A3412] text-white text-sm font-semibold hover:bg-[#7C2D12] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
                  >
                    {UI_COPY.hero.primaryCta[lang]}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 rounded-lg border border-[#D4C3AE] bg-[#FFFFFF] text-[#261811] text-sm font-semibold hover:border-[#9A3412] hover:text-[#9A3412] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#15803D]" aria-hidden="true" />
                    <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                  </a>
                </div>
              </div>

              {/* Warm Editorial Bakery Block Composition */}
              <div className="lg:col-span-5 flex">
                <div className="w-full rounded-2xl bg-[#9A3412] text-[#FFFBF5] p-6 sm:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-full relative overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-[#FDE68A]">
                        {lang === 'en' ? 'Today’s Counter Board' : 'இன்றைய பேக்கரி பலகை'}
                      </p>
                      <p className="font-display text-2xl sm:text-3xl font-semibold mt-1 text-balance">
                        {lang === 'en'
                          ? 'Fresh from Mylapore’s Deck Oven'
                          : 'மயிலாப்பூர் அடுப்பிலிருந்து சுடச்சுட'}
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#FFFFFF]/15 flex items-center justify-center shrink-0">
                      <Croissant className="w-6 h-6 text-[#FEF3C7]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Decorative geometric pastry color strips */}
                  <div className="my-6 grid grid-cols-3 gap-3" aria-hidden="true">
                    <div className="h-16 rounded-lg bg-[#D97706]" />
                    <div className="h-16 rounded-lg bg-[#F59E0B]" />
                    <div className="h-16 rounded-lg bg-[#F3EAD7]" />
                  </div>

                  <div className="pt-4 border-t border-[#FFFFFF]/20 flex items-center justify-between gap-4 text-sm">
                    <span className="text-[#FEF3C7]">
                      {lang === 'en'
                        ? 'Cakes · Puffs · Biscuits · Sweets'
                        : 'கேக் · பஃப்ஸ் · பிஸ்கட் · இனிப்பு'}
                    </span>
                    <span className="font-semibold tabular-nums whitespace-nowrap shrink-0">
                      ₹30 – ₹480
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-column Highlights Strip below Hero */}
            <div className="mt-10 pt-8 border-t border-[#E6DACA] grid grid-cols-2 lg:grid-cols-4 gap-6">
              {UI_COPY.hero.highlights.map((item, idx) => (
                <div key={idx} className="min-w-0">
                  <p className="text-xs font-medium text-[#6B5344]">{item.label[lang]}</p>
                  <p className="mt-1 text-base sm:text-lg font-semibold text-[#261811] tabular-nums">
                    {item.value[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section (8 Items with ₹ prices across cakes, puffs, biscuits, sweets) */}
        <section id="menu" className="py-14 sm:py-16 border-b border-[#E6DACA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-[#9A3412]">{UI_COPY.menuSection.eyebrow[lang]}</p>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#261811] mt-1 text-balance">
                  {UI_COPY.menuSection.title[lang]}
                </h2>
                <p className="text-sm sm:text-base text-[#5C4638] mt-2 max-w-xl">
                  {UI_COPY.menuSection.subtitle[lang]}
                </p>
              </div>

              {/* Interactive Category Filter Buttons */}
              <div
                role="tablist"
                aria-label={lang === 'en' ? 'Filter menu by category' : 'மெனு பிரிவுகள்'}
                className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F3ECE1] rounded-xl border border-[#E6DACA] self-start"
              >
                {CATEGORY_ORDER.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(category)}
                      className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#9A3412] ${
                        isActive
                          ? 'bg-[#FFFFFF] text-[#261811] shadow-xs'
                          : 'text-[#5C4638] hover:text-[#261811]'
                      }`}
                    >
                      {UI_COPY.menuSection.categories[category][lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected WhatsApp Order Summary Banner (appears when user adds items) */}
            {totalCount > 0 && (
              <div className="mt-6 p-4 rounded-xl bg-[#F3ECE1] border border-[#DFCBB3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <ShoppingBag className="w-5 h-5 text-[#9A3412] shrink-0" aria-hidden="true" />
                  <p className="font-medium text-[#261811]">
                    <span className="tabular-nums font-bold">{totalCount}</span>{' '}
                    {UI_COPY.menuSection.selectedSummary[lang]} ·{' '}
                    <span className="tabular-nums font-bold text-[#9A3412]">₹{totalAmount}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="min-h-[40px] px-3 py-1.5 text-xs font-medium text-[#5C4638] hover:text-[#261811] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {UI_COPY.menuSection.clearOrder[lang]}
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 rounded-lg bg-[#15803D] text-white text-xs sm:text-sm font-semibold hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{UI_COPY.whatsapp.floatingLabel[lang]}</span>
                  </a>
                </div>
              </div>
            )}

            {/* Menu Grid with Wide Top 4:3 Food Photography */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7">
              {filteredItems.map((item) => {
                const qty = cart[item.id] ?? 0;
                const isBroken = Boolean(failedImages[item.id]);
                return (
                  <article
                    key={item.id}
                    className="group bg-[#FFFFFF] border border-[#E6DACA] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#C9B39B] transition-colors"
                  >
                    <div>
                      {/* Wide Top Food Photo (4:3) with Graceful Fallback */}
                      <div
                        className="aspect-[4/3] w-full overflow-hidden border-b border-[#E6DACA]"
                        style={{ backgroundColor: item.swatchBg }}
                      >
                        {!isBroken ? (
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt[lang]}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={() => handleImageError(item.id)}
                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6 text-center">
                            <Croissant
                              className="w-8 h-8"
                              style={{ color: item.swatchAccent }}
                              aria-hidden="true"
                            />
                            <span className="font-display text-base font-semibold text-[#261811]">
                              {item.name[lang]}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-5 sm:p-6">
                        {/* Unboxed clean text metadata with separator */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#6B5344]">
                          <span>{UI_COPY.menuSection.categories[item.category][lang]}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.dietary[lang]}</span>
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-semibold text-[#261811] mt-1.5 leading-snug">
                          {item.name[lang]}
                        </h3>

                        <p className="text-sm text-[#5C4638] mt-1.5 leading-relaxed">
                          {item.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 border-t border-[#F3ECE1] flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-xl font-bold text-[#261811] tabular-nums">
                          ₹{item.price}
                        </span>
                        <span className="text-xs text-[#6B5344]">{item.portion[lang]}</span>
                      </div>

                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-lg border border-[#D4C3AE] bg-[#FBF8F3] text-sm font-semibold text-[#261811] hover:bg-[#9A3412] hover:text-white hover:border-[#9A3412] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
                        >
                          <Plus className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{UI_COPY.menuSection.addBtn[lang]}</span>
                        </button>
                      ) : (
                        <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#F3ECE1] border border-[#D4C3AE]">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${item.name[lang]}`}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-9 h-9 rounded-md flex items-center justify-center bg-[#FFFFFF] text-[#261811] hover:bg-[#9A3412] hover:text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-4 h-4" aria-hidden="true" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold tabular-nums text-[#261811]">
                            {qty}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.name[lang]}`}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-9 h-9 rounded-md flex items-center justify-center bg-[#FFFFFF] text-[#261811] hover:bg-[#9A3412] hover:text-white transition-colors cursor-pointer"
                          >
                            <Plus className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Photo Gallery with Real Bakery Counter Photography & Measured Contrast Scrim */}
        <section id="gallery" className="py-14 sm:py-16 bg-[#F3ECE1]/60 border-b border-[#E6DACA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-medium text-[#9A3412]">
              {UI_COPY.gallerySection.eyebrow[lang]}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#261811] mt-1 text-balance">
              {UI_COPY.gallerySection.title[lang]}
            </h2>
            <p className="text-sm sm:text-base text-[#5C4638] mt-2 max-w-xl">
              {UI_COPY.gallerySection.subtitle[lang]}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GALLERY_BLOCKS.map((block) => {
                const isBroken = Boolean(failedImages[block.id]);
                return (
                  <figure
                    key={block.id}
                    className={`${block.spanClass} group relative overflow-hidden rounded-2xl min-h-[250px] sm:min-h-[270px] flex flex-col justify-between border border-black/10`}
                    style={{ backgroundColor: block.bgColor, color: block.textColor }}
                  >
                    {!isBroken && (
                      <>
                        <img
                          src={block.imageSrc}
                          alt={block.imageAlt[lang]}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(block.id)}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/90 via-[#1A0F0A]/40 to-[#1A0F0A]/25"
                          aria-hidden="true"
                        />
                      </>
                    )}

                    <div className="relative z-10 p-6 flex items-center justify-between gap-3">
                      <span className="text-xs font-medium text-[#FEF3C7]">
                        {block.batchTime[lang]}
                      </span>
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0"
                        style={{ backgroundColor: block.accentColor }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="relative z-10 p-6 pt-12">
                      <figcaption className="font-display text-xl sm:text-2xl font-semibold leading-snug text-[#FFFFFF]">
                        {block.title[lang]}
                      </figcaption>
                      <p className="text-sm mt-1.5 text-[#FAF5EE]/90 leading-relaxed max-w-md">
                        {block.caption[lang]}
                      </p>
                    </div>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* About the Baker */}
        <section id="about" className="py-14 sm:py-16 border-b border-[#E6DACA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex">
                <div className="w-full rounded-2xl bg-[#5C2E1B] text-[#FAF5EE] p-7 sm:p-9 flex flex-col justify-between min-h-[260px]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-[#FCD34D]">
                      {UI_COPY.aboutSection.eyebrow[lang]}
                    </span>
                    <span className="text-xs text-[#F5EAD8]/80 tabular-nums">Est. 2014</span>
                  </div>

                  <div className="my-8">
                    <div
                      className="w-20 h-20 rounded-2xl bg-[#D97706] text-[#FFFFFF] flex items-center justify-center font-display text-3xl font-bold"
                      aria-hidden="true"
                    >
                      MS
                    </div>
                    <p className="font-display text-2xl sm:text-3xl font-semibold mt-5 leading-snug text-balance">
                      {UI_COPY.aboutSection.lead[lang]}
                    </p>
                  </div>

                  <p className="text-xs text-[#F5EAD8]/80">
                    {lang === 'en'
                      ? 'Meenakshi Sundaram · Founder & Head Baker'
                      : 'மீனாட்சி சுந்தரம் · நிறுவனர் & தலைமை பேக்கர்'}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-xs font-medium text-[#9A3412]">
                  {UI_COPY.aboutSection.eyebrow[lang]}
                </p>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#261811] mt-1 text-balance">
                  {UI_COPY.aboutSection.title[lang]}
                </h2>
                <p className="mt-4 text-base text-[#4A372B] leading-relaxed">
                  {UI_COPY.aboutSection.story1[lang]}
                </p>
                <p className="mt-4 text-base text-[#4A372B] leading-relaxed">
                  {UI_COPY.aboutSection.story2[lang]}
                </p>

                <div className="mt-8 pt-6 border-t border-[#E6DACA] grid grid-cols-3 gap-4">
                  {UI_COPY.aboutSection.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-lg sm:text-2xl font-bold font-display text-[#9A3412] tabular-nums">
                        {stat.value[lang]}
                      </p>
                      <p className="text-xs text-[#6B5344] mt-1">{stat.label[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Hours & Address with Google Map Placeholder */}
        <section id="visit" className="py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-medium text-[#9A3412]">
              {UI_COPY.visitSection.eyebrow[lang]}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#261811] mt-1 text-balance">
              {UI_COPY.visitSection.title[lang]}
            </h2>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Opening Hours & Address Card */}
              <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E6DACA] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2.5 text-[#9A3412]">
                    <Clock className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-xl font-semibold text-[#261811]">
                      {UI_COPY.visitSection.hoursTitle[lang]}
                    </h3>
                  </div>

                  <dl className="mt-4 divide-y divide-[#F3ECE1]">
                    {UI_COPY.visitSection.hoursList.map((row, idx) => (
                      <div key={idx} className="py-3 flex items-center justify-between gap-4 text-sm">
                        <dt className="text-[#5C4638] font-medium">{row.day[lang]}</dt>
                        <dd className="text-[#261811] font-semibold tabular-nums text-right">
                          {row.time[lang]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="pt-6 border-t border-[#E6DACA]">
                  <div className="flex items-center gap-2.5 text-[#9A3412]">
                    <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-xl font-semibold text-[#261811]">
                      {UI_COPY.visitSection.addressTitle[lang]}
                    </h3>
                  </div>

                  <address className="not-italic mt-3 text-sm sm:text-base text-[#4A372B] leading-relaxed">
                    {UI_COPY.visitSection.addressLines[lang].map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </address>

                  <div className="mt-5 flex items-center gap-2.5 text-sm">
                    <Phone className="w-4 h-4 text-[#9A3412] shrink-0" aria-hidden="true" />
                    <span className="text-[#6B5344]">{UI_COPY.visitSection.phoneLabel[lang]}:</span>
                    <a
                      href="tel:+918838340480"
                      className="font-semibold text-[#261811] hover:text-[#9A3412] tabular-nums underline underline-offset-4"
                    >
                      +91 88383 40480
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="lg:col-span-7 bg-[#EFE7D9] border border-[#D9CBB7] rounded-2xl overflow-hidden flex flex-col justify-between min-h-[340px]">
                <div className="px-5 py-3.5 bg-[#E6DACA]/70 border-b border-[#D9CBB7] flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#5C4638]">
                    {UI_COPY.visitSection.mapBadge[lang]}
                  </span>
                  <span className="text-xs text-[#6B5344] tabular-nums">13.0339° N, 80.2697° E</span>
                </div>

                {/* Clean Stylised Mylapore Street Grid SVG */}
                <div className="relative flex-1 min-h-[230px] p-6 flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 600 280"
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <rect width="600" height="280" fill="#EFE7D9" />
                    {/* Mylapore Temple Tank */}
                    <rect
                      x="250"
                      y="110"
                      width="120"
                      height="95"
                      rx="6"
                      fill="#C6DCE0"
                      stroke="#9ABAC2"
                      strokeWidth="2"
                    />
                    <text
                      x="310"
                      y="162"
                      textAnchor="middle"
                      fill="#3B5D66"
                      fontSize="11"
                      fontWeight="600"
                    >
                      Kapaleeshwarar Tank
                    </text>

                    {/* Surrounding streets */}
                    <path d="M 40 85 H 560" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                    <path d="M 40 225 H 560" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 225 20 V 260" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 395 20 V 260" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
                    <path d="M 100 20 V 260" stroke="#F8F3EA" strokeWidth="8" strokeLinecap="round" />

                    {/* Street Labels */}
                    <text x="115" y="89" fill="#6B5344" fontSize="10" fontWeight="600">
                      North Mada Street
                    </text>
                    <text x="415" y="89" fill="#6B5344" fontSize="10" fontWeight="600">
                      Luz Church Rd
                    </text>
                    <text x="235" y="229" fill="#6B5344" fontSize="10" fontWeight="600">
                      South Mada Street
                    </text>
                  </svg>

                  {/* Bakery Map Pin Card */}
                  <div className="relative z-10 bg-[#FFFFFF] border border-[#D4C3AE] rounded-xl px-4 py-3 shadow-sm flex items-center gap-3 -translate-y-8 -translate-x-6 sm:-translate-x-12">
                    <div className="w-9 h-9 rounded-lg bg-[#9A3412] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-[#261811]">
                        {UI_COPY.brand[lang]}
                      </p>
                      <p className="text-xs text-[#6B5344]">
                        {lang === 'en' ? 'North Mada St, Mylapore' : 'வடக்கு மாட வீதி, மயிலாப்பூர்'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-[#FFFFFF]/80 border-t border-[#D9CBB7] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#5C4638]">
                    {lang === 'en' ? 'Mylapore, Chennai – 600004' : 'மயிலாப்பூர், சென்னை – 600004'}
                  </span>
                  <a
                    href="https://maps.google.com/?q=North+Mada+Street+Mylapore+Chennai+600004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
                  >
                    <span>{UI_COPY.visitSection.mapDirections[lang]}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#261811] text-[#F3ECE1] py-10 pb-24 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold text-[#FFFFFF]">{UI_COPY.brand[lang]}</p>
            <p className="text-sm text-[#D4C3AE] mt-1 max-w-md">{UI_COPY.footer.tagline[lang]}</p>
          </div>
          <div className="text-xs text-[#D4C3AE] sm:text-right">
            <p>{UI_COPY.footer.copyright[lang]}</p>
            <p className="mt-1 tabular-nums">+91 88383 40480</p>
          </div>
        </div>
      </footer>

      {/* Floating Order on WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={UI_COPY.whatsapp.floatingLabel[lang]}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2.5 h-11 px-4 sm:px-5 rounded-full bg-[#15803D] text-white text-sm font-semibold shadow-lg hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span>{UI_COPY.whatsapp.floatingLabel[lang]}</span>
        {totalCount > 0 && (
          <span className="inline-flex items-center justify-center min-w-[22px] h-5 px-1.5 rounded-full bg-[#FFFFFF] text-[#15803D] text-xs font-bold tabular-nums">
            {totalCount}
          </span>
        )}
      </a>
    </div>
  );
}
