/**
 * Format seconds to time duration
 * @param {number} s number of seconds
 * @returns {string} formatted duration string
 * @example 218.41 -> '3:38'
 */
export const formatDuration = (s) => {
  const minutes = Math.floor(s / 60);
  const totalMinutes = minutes > 59 ? 59 : minutes;
  const seconds = Math.floor(s % 60);
  const hours = s > 3600 ? Math.floor(s / 3600) : '';
  return `${hours && hours + ':'}${totalMinutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};
