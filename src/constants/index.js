// Brand Colors
export const COLORS = {
  jldBlue: '#1e40af',
  jldRed: '#dc2626',
  jldWhite: '#ffffff',
  jldGray: '#6b7280',
  jldLightGray: '#f3f4f6',
  jldDarkGray: '#374151',
};

// Company Information
export const COMPANY_INFO = {
  name: 'JLD Minerals',
  fullName: 'JLD Minerals Private Limited',
  tagline: 'Crafting the Future with Every Layer of Earth',
  description: 'JLD Minerals is a globally trusted ceramic raw material supplier to the tile, sanitaryware, and tableware industry since 1974.',
  
  // Statistics
  stats: {
    experience: 50,
    miningAssets: 30,
    countries: 25,
    employees: 1500,
  },
  
  // Contact Information
  contact: {
    address: 'Industrial Area, Jodhpur, Rajasthan, India - 342001',
    phone: '+91 291 123 4567',
    email: 'info@jldminerals.com',
    website: 'https://jldminerals.com',
  },
  
  // Social Media
  social: {
    linkedin: 'https://linkedin.com/company/jld-minerals',
    twitter: 'https://twitter.com/jldminerals',
    facebook: 'https://facebook.com/jldminerals',
  },
};

// Products
export const PRODUCTS = {
  ballClay: {
    name: 'Ball Clay',
    path: '/products/ball-clay',
    description: 'High-quality ball clay for ceramic applications',
  },
  kaolin: {
    name: 'Kaolin',
    path: '/products/kaolin',
    description: 'Premium kaolin for various industrial uses',
  },
  feldspar: {
    name: 'Feldspar',
    path: '/products/feldspar',
    description: 'Quality feldspar for ceramic and glass industries',
  },
  quartzSilica: {
    name: 'Quartz Silica',
    path: '/products/quartz-silica',
    description: 'Pure quartz silica for specialized applications',
  },
};

// Industries
export const INDUSTRIES = {
  tiles: {
    name: 'Tiles',
    path: '/industries/tiles',
    description: 'Ceramic tiles and flooring solutions',
  },
  sanitaryWare: {
    name: 'Sanitary Ware',
    path: '/industries/sanitary-ware',
    description: 'Bathroom and sanitary ceramic products',
  },
  tableWare: {
    name: 'Table Ware',
    path: '/industries/table-ware',
    description: 'Fine dining and tableware ceramics',
  },
  glazesEngobes: {
    name: 'Glazes & Engobes',
    path: '/industries/glazes-engobes',
    description: 'Specialized glazes and engobe solutions',
  },
  electricalPorcelain: {
    name: 'Electrical Porcelain',
    path: '/industries/electrical-porcelain',
    description: 'Electrical insulation and porcelain products',
  },
  refractory: {
    name: 'Refractory',
    path: '/industries/refractory',
    description: 'High-temperature resistant materials',
  },
};

// Animation configurations
export const ANIMATIONS = {
  // Framer Motion variants
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  
  itemVariants: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  
  // Common transition durations
  transitions: {
    fast: { duration: 0.2 },
    medium: { duration: 0.5 },
    slow: { duration: 0.8 },
  },
};

// Common breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// SEO defaults
export const SEO_DEFAULTS = {
  title: 'JLD Minerals - India\'s Leading Ceramic Raw Material Supplier',
  description: 'JLD Minerals is India\'s largest ceramic raw material supplier and exporter of ball clay, potash feldspar, and custom ceramic inputs.',
  keywords: 'JLD Minerals, ceramic raw materials, ball clay, kaolin, feldspar, quartz silica, mining, India',
  author: 'JLD Minerals',
  robots: 'index, follow',
  language: 'en-US',
  type: 'website',
  image: '/assets/jld-logo.png',
}; 