function past(h, m, s) {
  let time = 0;
  if (0 <= h && h <= 23) {
    time = time + h * 3600000;
  }
  if (0 <= m && m <= 59) {
    time += m * 60000;
  }

  if (0 <= s && s <= 59) {
    time += s * 1000;
  }
  return time;
}

console.log(past(0, 1, 1));
