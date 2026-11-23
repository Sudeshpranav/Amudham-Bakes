export type Language = 'en' | 'ta';

export type MenuCategory = 'all' | 'cakes' | 'puffs' | 'biscuits' | 'sweets';

export interface BilingualText {
  en: string;
  ta: string;
}

export interface MenuItem {
  id: string;
  category: Exclude<MenuCategory, 'all'>;
  name: BilingualText;
  description: BilingualText;
  portion: BilingualText;
  price: number;
  dietary: BilingualText;
  swatchBg: string;
  swatchAccent: string;
  imageSrc: string;
  imageAlt: BilingualText;
}

export interface GalleryBlock {
  id: string;
  title: BilingualText;
  caption: BilingualText;
  batchTime: BilingualText;
  bgColor: string;
  textColor: string;
  accentColor: string;
  spanClass: string;
  imageSrc: string;
  imageAlt: BilingualText;
}

export const WHATSAPP_NUMBER = '918838340480';

export const UI_COPY = {
  brand: {
    en: 'Amudham Bakes',
    ta: 'அமுதம் பேக்ஸ்',
  },
  nav: {
    menu: { en: 'Menu', ta: 'மெனு' },
    gallery: { en: 'Gallery', ta: 'படங்கள்' },
    about: { en: 'About', ta: 'எங்களைப் பற்றி' },
    visit: { en: 'Visit', ta: 'முகவரி' },
  },
  langToggle: {
    en: 'தமிழ்',
    ta: 'English',
  },
  hero: {
    locationNote: {
      en: 'Mylapore, Chennai · Baking fresh since 2014',
      ta: 'மயிலாப்பூர், சென்னை · 2014 முதல் சுடச்சுட',
    },
    headline: {
      en: 'Warm ovens, honest butter, and Chennai mornings.',
      ta: 'இளஞ்சூடான பேக்கிங், சுத்தமான வெண்ணெய், சென்னை காலைப் பொழுதுகள்.',
    },
    subtext: {
      en: 'From flaky evening masala puffs and spiced tea cakes to melt-in-the-mouth butter biscuits and ghee sweets—handcrafted in small batches every day.',
      ta: 'மொறுமொறுப்பான மாலை மசாலா பஃப்கள், மசாலா டீ கேக்குகள் முதல் வாயில் கரையும் வெண்ணெய் பிஸ்கட் மற்றும் நெய் இனிப்புகள் வரை—தினமும் சிறு அளவில் சுடச்சுட தயாரிக்கப்படுகிறது.',
    },
    primaryCta: {
      en: 'Explore Menu',
      ta: 'மெனுவை பார்க்க',
    },
    secondaryCta: {
      en: 'Order on WhatsApp',
      ta: 'வாட்ஸ்அப்பில் ஆர்டர்',
    },
    highlights: [
      {
        label: { en: 'Morning Oven', ta: 'காலை அடுப்பு' },
        value: { en: '7:00 AM', ta: 'காலை 7:00' },
      },
      {
        label: { en: 'Evening Puffs', ta: 'மாலை பஃப்ஸ்' },
        value: { en: '4:30 PM', ta: 'மாலை 4:30' },
      },
      {
        label: { en: 'Eggless Options', ta: 'முட்டை இல்லாதவை' },
        value: { en: 'Daily Available', ta: 'தினமும் உண்டு' },
      },
      {
        label: { en: 'Fresh Batches', ta: 'சிறு தயாரிப்பு' },
        value: { en: 'Zero Preservatives', ta: 'ரசாயனம் இல்லை' },
      },
    ],
  },
  menuSection: {
    eyebrow: {
      en: 'Daily Bakery Menu · Prices in ₹',
      ta: 'தினசரி பேக்கரி மெனு · விலை ₹',
    },
    title: {
      en: 'Baked Fresh Every Morning',
      ta: 'தினமும் காலையில் சுடச்சுட',
    },
    subtitle: {
      en: 'Tap to add items to your WhatsApp order note, or browse by category.',
      ta: 'வாட்ஸ்அப் ஆர்டரில் சேர்க்க பொருட்களைத் தேர்ந்தெடுக்கவும் அல்லது பிரிவு வாரியாக பார்க்கவும்.',
    },
    categories: {
      all: { en: 'All Items', ta: 'அனைத்தும்' },
      cakes: { en: 'Cakes', ta: 'கேக்குகள்' },
      puffs: { en: 'Puffs', ta: 'பஃப்ஸ்' },
      biscuits: { en: 'Biscuits', ta: 'பிஸ்கட்கள்' },
      sweets: { en: 'Sweets', ta: 'இனிப்புகள்' },
    },
    addBtn: { en: 'Add', ta: 'சேர்' },
    clearOrder: { en: 'Clear selection', ta: 'நீக்கு' },
    selectedSummary: {
      en: 'selected for WhatsApp order',
      ta: 'வாட்ஸ்அப் ஆர்டருக்குத் தேர்வு',
    },
  },
  gallerySection: {
    eyebrow: {
      en: 'From Our Kitchen · Fresh Counter Moments',
      ta: 'எங்கள் சமையலறையிலிருந்து · நேரடி காட்சிகள்',
    },
    title: {
      en: 'A Taste of the Counter',
      ta: 'எங்கள் பேக்கரி காட்சிகள்',
    },
    subtitle: {
      en: 'Freshly baked trays, warm brass coffee tumblers, and small-batch sweets from our Mylapore kitchen.',
      ta: 'மயிலாப்பூர் அடுப்பிலிருந்து சுடச்சுட வரும் தட்டுகள், ஃபில்டர் காபி மற்றும் நெய் இனிப்புகளின் காட்சிகள்.',
    },
  },
  aboutSection: {
    eyebrow: {
      en: 'About the Baker',
      ta: 'பேக்கரைப் பற்றி',
    },
    title: {
      en: 'Meet Meenakshi Sundaram',
      ta: 'மீனாட்சி சுந்தரம் அவர்களைச் சந்திக்கவும்',
    },
    lead: {
      en: '“A good bakery smells like cardamom, toasted butter, and patience.”',
      ta: '“ஒரு நல்ல பேக்கரியில் ஏலக்காய், வெண்ணெய் மற்றும் பொறுமையின் மணம் வீசும்.”',
    },
    story1: {
      en: 'What started in 2014 as a single deck oven behind Kapaleeshwarar Temple has grown into a cherished Mylapore landmark. Meenakshi learned traditional tea-cake craft in Coonoor before bringing South Indian ingredients—palm jaggery, freshly ground cardamom, and farm-churned butter—into classic bakery recipes.',
      ta: '2014-ல் கபாலீஸ்வரர் கோவில் பின்புறம் ஒரு சிறிய அடுப்புடன் தொடங்கிய பயணம் இன்று மயிலாப்பூரின் அன்பான அடையாளமாக வளர்ந்துள்ளது. குன்னூரில் பாரம்பரிய டீ கேக் கலையைக் கற்ற மீனாட்சி, பனை வெல்லம், புதிய ஏலக்காய் மற்றும் பண்ணை வெண்ணெய் போன்ற தென்னிந்தியப் பொருட்களை பேக்கரி உணவுகளில் இணைத்தார்.',
    },
    story2: {
      en: 'Every morning at 5:30 AM, our kitchen lights come on to fold flaky puff pastry dough and bake crisp salt biscuits before the first filter coffee is poured across the street.',
      ta: 'தினமும் அதிகாலை 5:30 மணிக்கு எங்கள் அடுப்படி விளக்குகள் எரியத் தொடங்கும்—தெருவில் முதல் ஃபில்டர் காபி ஆற்றுவதற்கு முன்பே மொறுமொறுப்பான பஃப்ஸ் மற்றும் உப்பு பிஸ்கட்கள் தயாராகிவிடும்.',
    },
    stats: [
      { label: { en: 'Years in Mylapore', ta: 'மயிலாப்பூரில் ஆண்டுகள்' }, value: { en: '12+ Years', ta: '12+ ஆண்டுகள்' } },
      { label: { en: 'Oven Start Time', ta: 'அடுப்பு தொடங்கும் நேரம்' }, value: { en: '5:30 AM', ta: 'காலை 5:30' } },
      { label: { en: 'Daily Batches', ta: 'தினசரி தயாரிப்பு' }, value: { en: '3 Fresh Rounds', ta: '3 முறை சுடச்சுட' } },
    ],
  },
  visitSection: {
    eyebrow: {
      en: 'Hours & Location',
      ta: 'நேரம் மற்றும் முகவரி',
    },
    title: {
      en: 'Visit Amudham Bakes in Mylapore',
      ta: 'மயிலாப்பூர் அமுதம் பேக்ஸ்-க்கு வாருங்கள்',
    },
    hoursTitle: {
      en: 'Opening Hours',
      ta: 'திறந்திருக்கும் நேரம்',
    },
    hoursList: [
      {
        day: { en: 'Monday – Saturday', ta: 'திங்கள் – சனி' },
        time: { en: '7:00 AM – 9:30 PM', ta: 'காலை 7:00 – இரவு 9:30' },
      },
      {
        day: { en: 'Sunday', ta: 'ஞாயிறு' },
        time: { en: '7:30 AM – 8:30 PM', ta: 'காலை 7:30 – இரவு 8:30' },
      },
      {
        day: { en: 'Hot Puff Counter', ta: 'சுடச்சுட பஃப் நேரம்' },
        time: { en: '8:00 AM & 4:30 PM', ta: 'காலை 8:00 & மாலை 4:30' },
      },
    ],
    addressTitle: {
      en: 'Bakery Address',
      ta: 'பேக்கரி முகவரி',
    },
    addressLines: {
      en: ['No. 24, North Mada Street,', 'Near Kapaleeshwarar Temple Tank,', 'Mylapore, Chennai – 600004'],
      ta: ['எண் 24, வடக்கு மாட வீதி,', 'கபாலீஸ்வரர் கோவில் குளம் அருகில்,', 'மயிலாப்பூர், சென்னை – 600004'],
    },
    phoneLabel: { en: 'Phone & WhatsApp', ta: 'தொலைபேசி & வாட்ஸ்அப்' },
    mapBadge: { en: 'Google Map Placeholder', ta: 'கூகுள் மேப் மாதிரிப் படம்' },
    mapDirections: { en: 'Get Directions in Google Maps', ta: 'கூகுள் மேப்ஸில் வழி பார்க்க' },
  },
  whatsapp: {
    floatingLabel: {
      en: 'Order on WhatsApp',
      ta: 'வாட்ஸ்அப்பில் ஆர்டர்',
    },
    defaultMessage: {
      en: 'Vanakkam Amudham Bakes! I would like to place an order from your menu.',
      ta: 'வணக்கம் அமுதம் பேக்ஸ்! உங்கள் மெனுவிலிருந்து ஆர்டர் செய்ய விரும்புகிறேன்.',
    },
    itemOrderPrefix: {
      en: 'Vanakkam Amudham Bakes! I would like to order:',
      ta: 'வணக்கம் அமுதம் பேக்ஸ்! நான் ஆர்டர் செய்ய விரும்பும் பொருட்கள்:',
    },
    itemOrderSuffix: {
      en: 'Please let me know pickup / delivery availability.',
      ta: 'டெலிவரி அல்லது நேரில் வாங்கும் நேரத்தைத் தெரிவிக்கவும்.',
    },
  },
  footer: {
    tagline: {
      en: 'Handcrafted cakes, flaky puffs, butter biscuits & South Indian sweets in Chennai.',
      ta: 'சென்னையில் கைவண்ணத்தில் உருவான கேக்குகள், பஃப்ஸ், வெண்ணெய் பிஸ்கட் & இனிப்புகள்.',
    },
    copyright: {
      en: '© 2026 Amudham Bakes, Mylapore, Chennai.',
      ta: '© 2026 அமுதம் பேக்ஸ், மயிலாப்பூர், சென்னை.',
    },
  },
} as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'plum-tea-cake',
    category: 'cakes',
    name: {
      en: 'Spiced Plum & Nut Tea Cake',
      ta: 'மசாலா பிளம் & நட்ஸ் டீ கேக்',
    },
    description: {
      en: 'Moist, caramel-rich loaf baked with soaked raisins, cashews, nutmeg, and warm cinnamon.',
      ta: 'உலர் திராட்சை, முந்திரி, ஜாதிக்காய் மற்றும் இலவங்கப்பட்டை சேர்த்து சுட்ட மென்மையான டீ கேக்.',
    },
    portion: { en: '250g Loaf', ta: '250 கிராம்' },
    price: 180,
    dietary: { en: 'Eggless available', ta: 'முட்டை இல்லாமலும் உண்டு' },
    swatchBg: '#F4E5D2',
    swatchAccent: '#8C3B1A',
    imageSrc: '/src/assets/images/menu_plum_tea_cake_1795457868148.jpg',
    imageAlt: {
      en: 'Sliced spiced plum and cashew tea cake loaf on butter paper at Amudham Bakes counter',
      ta: 'மசாலா பிளம் மற்றும் முந்திரி டீ கேக் துண்டுகள் வெண்ணெய் தாளில்',
    },
  },
  {
    id: 'butterscotch-cake',
    category: 'cakes',
    name: {
      en: 'Classic Butterscotch Cream Cake',
      ta: 'பட்டர்ஸ்காட்ச் கிரீம் கேக்',
    },
    description: {
      en: 'Three layers of airy vanilla sponge finished with whipped cream and house-made praline crunch.',
      ta: 'மென்மையான வெண்ணிலா ஸ்பாஞ்ச், விப்டு கிரீம் மற்றும் வீட்டுச் சர்க்கரை பிரலைன் தூவப்பட்ட கேக்.',
    },
    portion: { en: '500g Celebration', ta: '500 கிராம்' },
    price: 480,
    dietary: { en: 'Fresh cream', ta: 'பிரெஷ் கிரீம்' },
    swatchBg: '#F7ECD9',
    swatchAccent: '#B45309',
    imageSrc: '/src/assets/images/menu_butterscotch_cake_1795457867784.jpg',
    imageAlt: {
      en: 'Butterscotch cream cake topped with praline crunch on a wooden cake stand',
      ta: 'மரக் கேக் ஸ்டாண்டில் பிரலைன் தூவப்பட்ட பட்டர்ஸ்காட்ச் கிரீம் கேக்',
    },
  },
  {
    id: 'masala-egg-puff',
    category: 'puffs',
    name: {
      en: 'Flaky Masala Egg Puff',
      ta: 'மசாலா முட்டை பஃப்',
    },
    description: {
      en: 'Crisp laminated pastry folded around spiced caramelized onions, curry leaves, and halved boiled egg.',
      ta: 'கறிவேப்பிலை, வதக்கிய வெங்காய மசாலா மற்றும் அவித்த முட்டை வைத்து சுட்ட மொறுமொறுப்பான பஃப்.',
    },
    portion: { en: '1 Piece (Warm)', ta: '1 துண்டு (சூடாக)' },
    price: 35,
    dietary: { en: 'Contains egg', ta: 'முட்டை சேர்த்தது' },
    swatchBg: '#F9E7CA',
    swatchAccent: '#9A3412',
    imageSrc: '/src/assets/images/menu_masala_egg_puff_1795457868734.jpg',
    imageAlt: {
      en: 'Golden flaky masala egg puff halved to show spiced onion filling and boiled egg on a steel tray',
      ta: 'மசாலா முட்டை பஃப் வெங்காய மசாலா மற்றும் முட்டையுடன் வெள்ளித் தட்டில்',
    },
  },
  {
    id: 'onion-veg-puff',
    category: 'puffs',
    name: {
      en: 'Crispy Onion & Potato Veg Puff',
      ta: 'வெங்காயம் & உருளை வெஜ் பஃப்',
    },
    description: {
      en: 'Golden multi-layered pastry stuffed with slow-roasted shallots, potato, fennel, and black pepper.',
      ta: 'சின்ன வெங்காயம், உருளைக்கிழங்கு, சோம்பு மற்றும் மிளகு மசாலா நிரப்பப்பட்ட தங்க நிற வெஜ் பஃப்.',
    },
    portion: { en: '1 Piece (Warm)', ta: '1 துண்டு (சூடாக)' },
    price: 30,
    dietary: { en: '100% Vegetarian', ta: 'சைவம்' },
    swatchBg: '#F3EAD7',
    swatchAccent: '#A16207',
    imageSrc: '/src/assets/images/menu_onion_veg_puff_1795457868277.jpg',
    imageAlt: {
      en: 'Crispy golden triangle and square veg puffs filled with onion and potato masala on parchment paper',
      ta: 'வெங்காயம் மற்றும் உருளை மசாலா நிரப்பப்பட்ட மொறுமொறுப்பான வெஜ் பஃப்ஸ்',
    },
  },
  {
    id: 'madras-salt-biscuits',
    category: 'biscuits',
    name: {
      en: 'Madras Butter & Salt Biscuits',
      ta: 'மெட்ராஸ் வெண்ணெய் & உப்பு பிஸ்கட்',
    },
    description: {
      en: 'Crisp, savoury-sweet tea-time classics baked with cultured butter and a pinch of roasted cumin.',
      ta: 'சீரகம் மற்றும் சுத்தமான வெண்ணெய் சேர்த்து மொறுமொறுப்பாக சுடப்பட்ட பாரம்பரிய உப்பு பிஸ்கட்.',
    },
    portion: { en: '250g Tin Pack', ta: '250 கிராம் பாக்கெட்' },
    price: 120,
    dietary: { en: 'Eggless · Vegetarian', ta: 'முட்டை இல்லாதது' },
    swatchBg: '#EFE5D5',
    swatchAccent: '#78350F',
    imageSrc: '/src/assets/images/menu_salt_biscuits_1795457868147.jpg',
    imageAlt: {
      en: 'Stacked Madras butter and salt biscuits speckled with roasted cumin on a brass plate',
      ta: 'பித்தளைத் தட்டில் அடுக்கப்பட்ட சீரக வெண்ணெய் உப்பு பிஸ்கட்கள்',
    },
  },
  {
    id: 'cardamom-nankhatai',
    category: 'biscuits',
    name: {
      en: 'Green Cardamom Nankhatai',
      ta: 'ஏலக்காய் நான்கடாய் பிஸ்கட்',
    },
    description: {
      en: 'Crumbly chickpea and wheat shortbread cookies perfumed with freshly crushed green cardamom.',
      ta: 'கடலை மாவு, கோதுமை மற்றும் நறுமண ஏலக்காய் சேர்த்து சுட்ட வாயில் கரையும் பிஸ்கட்.',
    },
    portion: { en: '250g Box', ta: '250 கிராம் பெட்டி' },
    price: 150,
    dietary: { en: 'Eggless · Vegetarian', ta: 'முட்டை இல்லாதது' },
    swatchBg: '#F4ECDD',
    swatchAccent: '#654321',
    imageSrc: '/src/assets/images/menu_cardamom_nankhatai_1795457869183.jpg',
    imageAlt: {
      en: 'Cracked-top green cardamom nankhatai shortbread cookies topped with crushed pistachios',
      ta: 'பிஸ்தா தூவப்பட்ட ஏலக்காய் நான்கடாய் பிஸ்கட்கள்',
    },
  },
  {
    id: 'ghee-mysore-pak',
    category: 'sweets',
    name: {
      en: 'Soft Ghee Mysore Pak & Peda Box',
      ta: 'நெய் மைசூர் பாக் & பால் பேடா',
    },
    description: {
      en: 'Melt-in-the-mouth roasted gram flour fudge crafted with pure cow ghee alongside saffron milk pedas.',
      ta: 'சுத்தமான பசு நெய்யில் செய்த மென்மையான மைசூர் பாக் மற்றும் குங்குமப்பூ பால் பேடா தொகுப்பு.',
    },
    portion: { en: '250g Assorted', ta: '250 கிராம் கலவை' },
    price: 210,
    dietary: { en: 'Pure Ghee · Vegetarian', ta: 'சுத்தமான நெய்' },
    swatchBg: '#F8E6BF',
    swatchAccent: '#B45309',
    imageSrc: '/src/assets/images/menu_mysore_pak_peda_1795457869831.jpg',
    imageAlt: {
      en: 'Assorted box of golden ghee Mysore Pak squares and saffron milk pedas with pistachios',
      ta: 'நெய் மைசூர் பாக் மற்றும் குங்குமப்பூ பால் பேடா இனிப்புப் பெட்டி',
    },
  },
  {
    id: 'coconut-macaroons',
    category: 'sweets',
    name: {
      en: 'Toasted Coconut Caramel Macaroons',
      ta: 'தேங்காய் கேரமல் மேக்கரூன்',
    },
    description: {
      en: 'Chewy golden peaks of fresh grated coastal coconut, condensed milk, and caramelized sugar.',
      ta: 'துருவிய தேங்காய் மற்றும் கேரமல் சர்க்கரை சேர்த்து பொன்னிறமாக சுட்ட சுவையான மேக்கரூன்.',
    },
    portion: { en: '6 Pieces Box', ta: '6 துண்டுகள்' },
    price: 110,
    dietary: { en: 'Gluten-free', ta: 'மைதா இல்லாதது' },
    swatchBg: '#F5EAD8',
    swatchAccent: '#9A3412',
    imageSrc: '/src/assets/images/menu_coconut_macaroons_1795457870812.jpg',
    imageAlt: {
      en: 'Golden-toasted conical coconut caramel macaroons lined on parchment paper in a wooden tray',
      ta: 'மரத் தட்டில் பொன்னிறமாக சுடப்பட்ட தேங்காய் கேரமல் மேக்கரூன்கள்',
    },
  },
];

export const GALLERY_BLOCKS: GalleryBlock[] = [
  {
    id: 'golden-puffs',
    title: {
      en: '4:30 PM Puff Tray',
      ta: 'மாலை 4:30 பஃப் தட்டு',
    },
    caption: {
      en: 'Flaky 36-layer pastry straight from the stone deck oven.',
      ta: 'கல் அடுப்பிலிருந்து வரும் 36 அடுக்கு மொறுமொறுப்பான பஃப்ஸ்.',
    },
    batchTime: { en: 'Golden Pastry Crust', ta: 'பொன்னிற மேலோடு' },
    bgColor: '#D97706',
    textColor: '#FFFFFF',
    accentColor: '#FEF3C7',
    spanClass: 'sm:col-span-2',
    imageSrc: '/src/assets/images/gallery_puff_tray_1795457870743.jpg',
    imageAlt: {
      en: 'Freshly baked tray of golden flaky masala puffs on the Amudham Bakes counter',
      ta: 'அமுதம் பேக்ஸ் கவுண்டரில் சுடச்சுட வைக்கப்பட்ட பஃப் தட்டு',
    },
  },
  {
    id: 'mysore-saffron',
    title: {
      en: 'Ghee Mysore Pak',
      ta: 'நெய் மைசூர் பாக்',
    },
    caption: {
      en: 'Warm turmeric-saffron hue with pure cow ghee aroma.',
      ta: 'சுத்தமான நெய் மணத்துடன் மஞ்சள் பொன்னிற மைசூர் பாக்.',
    },
    batchTime: { en: 'Morning Sweet Batch', ta: 'காலை இனிப்பு' },
    bgColor: '#B45309',
    textColor: '#FFFFFF',
    accentColor: '#FDE68A',
    spanClass: 'sm:col-span-1',
    imageSrc: '/src/assets/images/gallery_mysore_pak_1795457870979.jpg',
    imageAlt: {
      en: 'Freshly portioned warm golden ghee Mysore Pak slab in a steel tray',
      ta: 'சூடான நெய் மைசூர் பாக் துண்டுகளாக வெட்டப்படும் காட்சி',
    },
  },
  {
    id: 'dark-plum-loaf',
    title: {
      en: 'Spiced Plum Loaf',
      ta: 'மசாலா பிளம் கேக்',
    },
    caption: {
      en: 'Deep caramelized jaggery crumb with roasted cashews.',
      ta: 'வறுத்த முந்திரி மற்றும் கருப்பட்டி நிற மென் கேக்.',
    },
    batchTime: { en: 'Tea-Time Classic', ta: 'டீ நேர சிறப்பு' },
    bgColor: '#5C2E1B',
    textColor: '#FAF5EE',
    accentColor: '#F59E0B',
    spanClass: 'sm:col-span-1',
    imageSrc: '/src/assets/images/gallery_plum_loaf_1795457872734.jpg',
    imageAlt: {
      en: 'Whole spiced plum and cashew loaves cooling on a wire rack over teakwood',
      ta: 'வறுத்த முந்திரி தூவப்பட்ட பிளம் கேக் லோஃப்கள் ஆறும் காட்சி',
    },
  },
  {
    id: 'butter-biscuit-tin',
    title: {
      en: 'Salt & Cumin Biscuits',
      ta: 'சீரக உப்பு பிஸ்கட்',
    },
    caption: {
      en: 'Crisp oat-cream biscuits packed warm in steel tins.',
      ta: 'எவர்சில்வர் டப்பாக்களில் சுடச்சுட அடைக்கப்பட்ட பிஸ்கட்.',
    },
    batchTime: { en: 'All-Day Counter', ta: 'நாள் முழுவதும்' },
    bgColor: '#78350F',
    textColor: '#FFFFFF',
    accentColor: '#FDE68A',
    spanClass: 'sm:col-span-1',
    imageSrc: '/src/assets/images/gallery_biscuit_tin_1795457873662.jpg',
    imageAlt: {
      en: 'Golden Madras salt and cumin biscuits in a round stainless steel bakery tin',
      ta: 'எவர்சில்வர் டப்பாவில் அடுக்கப்பட்ட சீரக உப்பு பிஸ்கட்கள்',
    },
  },
  {
    id: 'cardamom-cream',
    title: {
      en: 'Cardamom & Pistachio Frosting',
      ta: 'ஏலக்காய் & பிஸ்தா கிரீம்',
    },
    caption: {
      en: 'Lightly whipped cream infused with green Mylapore spices.',
      ta: 'பச்சை ஏலக்காய் மற்றும் பிஸ்தா மணம் கொண்ட மென் கிரீம்.',
    },
    batchTime: { en: 'Celebration Cakes', ta: 'விழா கேக்குகள்' },
    bgColor: '#2E5A36',
    textColor: '#FFFFFF',
    accentColor: '#D9F99D',
    spanClass: 'sm:col-span-1',
    imageSrc: '/src/assets/images/gallery_cardamom_cream_1795457872831.jpg',
    imageAlt: {
      en: 'Celebration cake swirled with ivory cardamom cream, crushed pistachios, and rose petals',
      ta: 'ஏலக்காய் கிரீம், பிஸ்தா மற்றும் ரோஜா இதழ்களால் அலங்கரிக்கப்பட்ட கேக்',
    },
  },
  {
    id: 'filter-coffee-pair',
    title: {
      en: 'Degree Coffee & Cookie Pair',
      ta: 'டிகிரி காபி & பிஸ்கட்',
    },
    caption: {
      en: 'Warm roasted chicory-coffee notes paired with butter shortbread.',
      ta: 'சூடான ஃபில்டர் காபியுடன் இணைந்து சுவைக்க ஏற்ற வெண்ணெய் பிஸ்கட்.',
    },
    batchTime: { en: 'Mylapore Morning', ta: 'மயிலாப்பூர் காலை' },
    bgColor: '#8C3B1A',
    textColor: '#FFFBF5',
    accentColor: '#FCD34D',
    spanClass: 'sm:col-span-2',
    imageSrc: '/src/assets/images/gallery_filter_coffee_1795457876921.jpg',
    imageAlt: {
      en: 'Steaming South Indian filter coffee in brass davara tumbler beside golden butter biscuits',
      ta: 'பித்தளை டவராவில் சூடான ஃபில்டர் காபியும் வெண்ணெய் பிஸ்கட்களும்',
    },
  },
];
