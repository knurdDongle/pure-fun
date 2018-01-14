/**
 * 
 * Get the values differing when comparing two arrays
 */
export default (a, b) => [...new Set(a.filter(i => !new Set(b).has(i)))];