function largestAltitude(gain: number[]): number {

  let curr_alt: number = 0;

  let max_alt: number = gain.reduce((max_alt, alt) => {
    curr_alt += alt;
    return Math.max(curr_alt, max_alt);
  }, 0);

  return max_alt;  
};