/* Performans testi için büyükçe JS */
const msg = "CDN perf test";
let s = "";
for (let i = 0; i < 120000; i++) { s += i.toString(); }
console.log(msg, s.length);
