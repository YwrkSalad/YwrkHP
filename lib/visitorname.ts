const ADJECTIVES: string[] = [
  "amber", "ancient", "arctic", "azure", "bare", "bold", "brave", "bright",
  "brisk", "broad", "bronze", "calm", "clear", "clever", "cold", "cool",
  "coral", "crimson", "crisp", "cyan", "damp", "dark", "dawn", "deep",
  "dense", "dewy", "dim", "distant", "dry", "dull", "dusk", "dusty",
  "eager", "early", "east", "eerie", "elder", "emerald", "empty", "faint",
  "fallen", "fierce", "foggy", "forest", "free", "fresh", "frosted", "gentle",
  "glacial", "glowing", "golden", "grand", "grave", "green", "grey", "grim",
  "hazy", "hidden", "high", "hollow", "icy", "idle", "indigo", "inner",
  "jade", "keen", "late", "light", "lone", "lost", "low", "lunar",
  "mild", "misty", "mossy", "murky", "muted", "narrow", "night", "noble",
  "north", "oak", "ocean", "old", "pale", "pine", "plain", "polar",
  "pure", "quiet", "raw", "red", "remote", "rich", "rigid", "rocky",
  "rose", "rough", "royal", "rugged", "russet", "rust", "sandy", "scarlet",
  "serene", "sharp", "silent", "silver", "slim", "slow", "small", "smoky",
  "snowy", "solar", "south", "sparse", "steel", "still", "stone", "storm",
  "swift", "tall", "teal", "thin", "vast", "violet", "warm", "wild",
];

const NOUNS: string[] = [
  "ash", "aspen", "bay", "beam", "birch", "blade", "bloom", "bluff",
  "bog", "bough", "brook", "brush", "bud", "burrow", "canyon", "cave",
  "cedar", "chalk", "chill", "cliff", "cloud", "cove", "creek", "crest",
  "crop", "dale", "dawn", "dell", "dew", "dune", "dust", "elm",
  "fern", "field", "fjord", "flame", "flint", "flood", "floor", "fog",
  "ford", "forest", "frost", "gale", "gap", "glen", "glow", "gorge",
  "grain", "grove", "gulf", "gust", "haze", "heath", "hill", "hollow",
  "ice", "inlet", "isle", "ivy", "kelp", "knoll", "lake", "larch",
  "lava", "leaf", "ledge", "light", "lime", "log", "marsh", "mead",
  "mesa", "mist", "moon", "moor", "moss", "mud", "oak", "peak",
  "pine", "plain", "pool", "rain", "ravine", "reed", "reef", "ridge",
  "rime", "rise", "river", "rock", "root", "rune", "rush", "sand",
  "sea", "sedge", "shade", "shore", "silt", "sky", "slate", "slope",
  "snow", "soil", "spring", "star", "stem", "stone", "storm", "stream",
  "summit", "swamp", "tide", "timber", "trail", "twig", "vale", "valley",
  "vine", "wave", "weed", "wind", "wood", "yarn", "yield", "zone",
];

const KAOMOJI: string[] = [
  "😀", "😅", "🫠", "🤭", "🤐", "😐", "😑", "🫥",
  "🫨", "🤓", "🫤", "🙁", "😱", "😻", "😺", "🙀",
];

// N = 128 * 128 * 16 = 262144 = 2^18
// M は N と互いに素な奇数（任意の奇数で gcd(M, 2^18) = 1 が成立）
const N = 262144;
// M の各次元への寄与: adj += 43, noun += 67, kaomoji += 11 (いずれも非ゼロかつ互いに異なる)
// M = 43 + 67*128 + 11*16384 = 188843 (奇数 → gcd(M, 2^18) = 1 が保証される)
const M = 188843;

export function indexToName(i: number): string {
  const f = (i * M) % N;
  const adj = ADJECTIVES[f % 128];
  const noun = NOUNS[(f >> 7) % 128];
  const kaomoji = KAOMOJI[f >> 14];
  return `${adj}-${noun}${kaomoji}`;
}
