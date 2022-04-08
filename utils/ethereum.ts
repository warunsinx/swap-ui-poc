export const ethereum = () => (typeof window ? (window as any).ethereum : null);
export const networkVersion = () =>
  ethereum() ? +ethereum().networkVersion : null;
