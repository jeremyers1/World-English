/* To implement: 
all x become ks
no need for q at all. all qu - > kw
no need for c, except in ch. city -> sitee, while caught -> kot 
all g are soft, hard g is j
  Rule, when c or g are followed by e, i, y, they are soft, otherwise hard (and become k or j)
  cat -> kat
  goat -> goot
  face -> faas
  city -> sitee
  cycle -> siikl
  gem -> jem
  gist -> gist
  gym - jim
long vowels get doubled and silent e disappears
  fate = faat while fat is fat
  they're = thaayr
  recede = reseed

    a - rat and ray = rat and raa (all aw sounds, as in raw, get moved to soft o)
    e - met and meet = met and meet
    i - sit and site = sit and siit
    o - rot and rote = rot and root (see below uu for some oo sounds... like root)
    u - rut and rude  = rut and ruud (note that root is now ruud)
    y - only at front of word, as in yellow, otherwise, ii as in my -> mii, or ee as in marry -> maree (based on # of syllables??)

replace ed with d at the end of word... or maybe t? .. missed = mist but saved = saavd ?? and rested -> restid
es at end of word becomes s, unless a new syllable - saves -> saavs, but matches - > machis, and watch out for fastest
delete all silent e at end of the word
initial u as y as in use -> yuus
replace ti as 'sh' as in initial, but not time, maybe it's always iti? but what about citi?
replace ow at end of word with oo
ou as in pouch -> ow
au -> o as in launch -> lonch
aw -> o as in lawn -> lon
oi -> ooy as in soil > sooyl
y at end of word ? sometimes becomes ee -> funny -> funee, but my becomes mii


*/

// How to maintain capitalization in submitted text??? 
function respell(str) {
  // should organize alphabetically? 
  // in some cases, the ORDER in which these are applied will matter... 
  return str
    .replace('bb', 'b')
    .replace('cc', 'k')
    .replace('dd', 'd')
    .replace('ff', 'f')
    .replace('gg', 'g')
    .replace('ii', 'eei' /* ?? for words like skiing, taxiing, grafitiing, but should not conflict with long i -> ii, so maybe iing -> eeing */)
    .replace('ll', 'l')
    .replace('mm', 'm')
    .replace('nn', 'n')
    .replace('pp', 'p')
    .replace('rr', 'r')
    .replace('ss', 's')
    .replace('tt', 't') 
    .replace('vv', 'v')
    .replace('ww', 'w-w')
    .replace('xx', 'x')
    .replace('zz', 'z')
    .replace('qu', 'kw')
    .replace('x', 'ks')
    .replace('ph', 'f')
    .replace('sc', 's')
    .replace('cs', 'ks')
    .replace('ce', 's')
    .replace('ci', 'si')
    .replace('cy', 'sii' /*but end of word should be see as in Darcy*/)
    .replace('ge', 'je')
    .replace('gi', 'ji')
    .replace('gy', 'ji' /* but gynecology -> giinikolujee */)
    .replace('tch', 'ch')
    .replace('ck', 'k')
    .replace('kn', 'n')
    .replace('wh', 'w')
    .replace('mb', 'm')
    .replace('ea', 'ee')
    .replace('ai', 'aa')
    .replace('igh', 'ii')
    .replace('aw', 'o')
    .replace('ight', 'iit')
    .replace('ir', 'er')
    .replace('ur', 'er')
    .replace('kk', 'k-k' /* for words like bookkeeping, but must come after ck and kn rules due to jackknife and knickknack, ck -> k and kn -> n */)
 
}




let text = 'This is a test string. It has tricky words like queen, done, city, sight, fox, phonics, and site.';
let newText = respell(text);
console.log(newText);