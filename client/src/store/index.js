import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#F5A623',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './logo.png',
});

export default state;