const article = ["the", "an", "several", "my", "our", "these,", "most", "her", "his", "this", "more", "every", "some", "any", "each", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    let partOne = "the";

const adjective = ["cold", "final", "blue", "red", "greedy", "radiant", "serious", "small", "large", "colorful", "dull", "shiny", "first", "second", "wandering", "sick", "wide", "clever", "opaque", "drunk", "comfortable", "wonderful", "perfect", "irresponsible", "generous", "cracked", "flawed", "imperfect", "purified", "violent", "unpredictable", "restrained", "old", "young", "sinful", "malicious", "precocious", "loose", "principled", "interested", "smooth", "rough", "soft", "hard", "bright", "dark", "light", "heavy", "thin", "thick", "narrow", "wide", "deep", "shallow", "high", "low", "tall", "short", "long", "brief", "quick", "slow", "fast", "lazy", "active", "energetic", "calm", "anxious", "nervous", "confident", "shy", "bold", "timid", "brave", "cowardly", "honest", "dishonest", "loyal", "disloyal", "faithful", "unfaithful"];
    let partTwo = "violent";

const noun = ["tables", "floors", "ceiling", "tablecloth", "manuscript", "cat", "animal", "creature","mountain", "train","map", "sunrise", "sunset", "afternoons","morning", "coffee","homes", "companion", "meal", "project", "rock", "mammoth", "cave", "river", "ocean", "forest", "desert", "island", "valley", "plateau", "cliff", "waterfall", "volcano", "glacier", "canyon", "meadow", "prairie", "savanna", "tundra", "jungle", "rainforest", "swamp", "marsh", "wetland", "balcony", "window", "door", "staircase", "railing", "fence", "gate", "porch", "deck", "terrace", "veranda", "patio", "courtyard", "garden", "yard", "lawn", "field", "meadow", "pasture", "orchard", "vineyard", "storm", "hurricane", "tornado", "earthquake", "volcano", "tsunami", "flood", "drought", "blizzard", "avalanche", "landslide", "wildfire", "eruption", "drink", "food", "meal", "snack", "dessert", "beverage", "fruit", "vegetable", "grain", "protein", "dairy", "spice", "herb", "sauce", "condiment", "utensil", "plate", "bowl", "cup", "glass", "mug", "fork", "knife", "spoon", "report", "friend", "evening", "patient", "desert", "campus", "rose", "flowers", "sun", "moon", "stars", "sky", "clouds", "rain", "snow", "wind", "storm", "thunder", "lightning", "fog", "mist", "haze", "dew", "frost", "ice", "hail", "sleet", "castle", "palace", "temple", "church", "mosque", "synagogue", "shrine", "monument", "statue", "fountain", "bridge", "tower", "lighthouse", "skyscraper", "stadium", "arena", "theater", "cinema", "museum", "gallery", "library", "school", "university", "hospital", "clinic", "pharmacy"];
    let partThree = "violent"

const verb = ["eats", "restrains", "removes", "killed", "scratches", "misses", "steals", "glances", "watches", "observes", "sits", "stands", "walks", "runs", "jumps", "flies", "swims", "dives", "climbs", "falls", "stood", "arranged", "screamed", "shouted", "whispered", "screamed", "yelled", "cried", "laughed", "smiled", "frowned", "gazed", "stared", "found", "lost", "discovered", "created", "destroyed", "built", "tore", "fixed", "repaired", "painted", "drew", "wrote", "read", "listened", "heard", "felt", "touched", "grabbed", "held", "released"];
    let partFour = "balcony"

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function generateSentence() {
    const partOne = getRandom(article);
    const partTwo = getRandom(adjective);
    const partThree = getRandom(noun);
    const partFour = getRandom(verb);
    const partFive = getRandom(article);
    const partSix = getRandom(adjective);
    const partSeven = getRandom(noun);
  
    const sentence = `${partOne} ${partTwo}  ${partThree} ${partFour} ${partFive} ${partSix} ${partSeven}.`;
    document.getElementById("output").textContent = sentence;
  }
  