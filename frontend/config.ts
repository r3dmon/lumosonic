export const getBackendURL = () => {
  if (import.meta.env.VITE_CLIENT_TARGET) {
    return import.meta.env.VITE_CLIENT_TARGET;
  }
  
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    if (hostname === 'lumosonic.nl' || hostname === 'www.lumosonic.nl') {
      return 'https://software-company-landing-d13kjmc82vjnlvs22gi0.api.lp.dev';
    }
    
    if (hostname.includes('lp.dev') || hostname.includes('pages.dev')) {
      return 'https://software-company-landing-d13kjmc82vjnlvs22gi0.api.lp.dev';
    }
  }
  
  return 'http://localhost:4000';
};
