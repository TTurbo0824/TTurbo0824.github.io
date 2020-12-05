let button, input;
let splitted;
let emojiE, emojiN;
let emojiList;
let textInput = document.querySelector("#text-input").value;

async function fetchEmoji() {
    let response = await fetch("https://a2z-new-api.glitch.me/");
    // let response = await fetch("emoji_extended.json");
    // let response = await fetch("emoji.json");

    emojiList = await response.json();
    emojiN = Object.values(emojiList);
    emojiE = Object.keys(emojiList);
}

fetchEmoji();

document.querySelector("#emoji").onclick = () => {
    console.log("button clicked");
    let textInput = document.querySelector("#text-input").value;
    emojiN = Object.values(emojiList);
    emojiE = Object.keys(emojiList);
    emoji(textInput);
};

document.querySelector("#clearButton").onclick = () => {
    console.log("clear button clicked");
    document.getElementById("sentence").innerHTML = "";
};

function emoji(text) {
    // console.log(newInput);

    let words = text.toLowerCase();
    words = words.replace(/\n/g, " ")
    let ar = [];

    var apos = ["'s", "'m", "'ve", "'ll", "'d", ",", ".", "\"", ":", ";",
        "@", "$", "^", "(", ")", "{", "}", "]", "[", "<", ">", "~", "`"
    ];
    for (var j = 0; j < apos.length; j++) {
        if (words.includes(apos[j])) {
            words = words.replace(apos[j], "");
        }
    }

    if (parseInt(words) == Number(words)) {
        splitted = words.split("");
    } else if (
        words.indexOf("?") != -1 ||
        words.indexOf("!") != -1 ||
        words.indexOf("&") != -1 ||
        words.indexOf("#") != -1 ||
        words.indexOf("*") != -1
    ) {
        splitted = words.split(/(\W)/);
    } else {
        splitted = words.split(" ");
    }

    for (var i = 0; i < splitted.length; i++) {
        if (
            splitted.includes("hot") &&
            splitted.indexOf("dog") - splitted.indexOf("hot") == 1
        ) {
            splitRule("hot", "dog");
        } else if (splitted.indexOf("cream") - splitted.indexOf("ice") == 1) {
            splitRule("ice", "cream");
        } else if (
            splitted.includes("computer") &&
            splitted.indexOf("mouse") - splitted.indexOf("computer") == 1
        ) {
            splitRule("computer", "mouse");
        } else if (
            splitted.includes("fountain") &&
            splitted.indexOf("pen") - splitted.indexOf("fountain") == 1
        ) {
            splitRule("fountain", "pen");
        } else if (
            splitted.includes("new") &&
            splitted.indexOf("year") - splitted.indexOf("new") == 1
        ) {
            splitRule("new", "year");
        } else if (
            splitted.includes("polar") &&
            splitted.indexOf("bear") - splitted.indexOf("polar") == 1
        ) {
            splitRule("polar", "bear");
        } else if (
            splitted.includes("black") &&
            splitted.indexOf("cat") - splitted.indexOf("black") == 1
        ) {
            splitRule("black", "cat");
        } else if (
            splitted.includes("united") &&
            splitted.indexOf("states") - splitted.indexOf("united") == 1
        ) {
            splitRule("united", "states");
        } else if (
            splitted.includes("new") &&
            splitted.indexOf("york") - splitted.indexOf("new") == 1
        ) {
            splitRule("new", "york");
        } else if (
            splitted.includes("south") &&
            splitted.indexOf("korea") - splitted.indexOf("south") == 1
        ) {
            splitRule("south", "korea");
        } else if (
            splitted.includes("no") &&
            splitted.indexOf("smoking") - splitted.indexOf("no") == 1
        ) {
            splitRule("no", "smoking");
        } else if (splitted[i].indexOf("t") - splitted[i].indexOf("'") != 1) {
            splitted[i] = splitted[i].replace("'", "")
        }
        ar.push(getEmoji(splitted[i]));
    }

    // if (splitted.length == 1 && ["hot dog", "ice cream"].includes(splitted[0])) {
    //   ar.splice(0, 1);
    // }

    // console.log(splitted);
    // let getSent = document.querySelector(".sentence");

    let newSentence = ar.join(" ");
    // text(newSentence, 120, 150);
    let para = document.createElement("P");
    para.innerText = newSentence;
    document.getElementById("sentence").appendChild(para);
}

function splitRule(firstWord, secondWord) {
    splitted[splitted.indexOf(firstWord)] = firstWord + " " + secondWord;
    splitted.splice(splitted.indexOf(secondWord), 1);
}

function getEmoji(name) {
    let a = [];
    let b;
    let c;
    let emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    /*


    "🛸"
    "☄️", "🎇", "🧨"
   

    message
    afraid 
    young
    younger

}

villains
   comfort
story novel book 
    */
    if (name == "" || name.match(/"[^A-Za-z0-9]"/) == false || name == " ") {
        a = [];
    } else if (emojiRegex.test(name) == true) {
        a.push(name);
    } else if (["and", "&"].includes(name)) {
        a = ["&"];
    } else if (
        [
            "no",
            "not",
            "never",
            "cannot",
            "neither",
            "nor",
            "without",
            "absent",
            "wrong",
            "incorrect"
        ].includes(name) ||
        name.includes("'t")
    ) {
        a = ["❌", "🙅"];
    } else if (["correct", "right"].includes(name)) {
        a = ["⭕", "✔️", "🙆"];
    } else if (getPOS("check").includes(name)) {
        a = ["✔️"];
    } else if (["?", "how"].includes(name)) {
        a = ["❓", "❔"];
    } else if (["!"].includes(name)) {
        a = ["❕", "❗"];
    } else if (name == "on") {
        a = ["🔛"];
    } else if (name == "top") {
        a = ["🔝"];
    } else if (name == "back") {
        a = ["🔙"];
    } else if (getPOS("end").includes(name)) {
        a = ["🔚"];
    } else if (name == "soon") {
        a = ["🔜"];
    } else if (name == "much") {
        a = ["💰"];
    } else if (["in", "into"].includes(name)) {
        a = ["📥"];
    } else if (name == "out") {
        a = ["📤"];
    } else if (["story", "stories", "novel", "book", "books"].includes(name) || name.includes("fiction")) {
        a = ["📕", "📖", "📗", "📘", "📙", "📚"];
    } else if (name.includes("hot dog")) {
        a = ["🌭"];
    } else if (name == "ice cream") {
        a = ["🍦", "🍧", "🍨"];
    } else if (name == "polar bear") {
        a = ["🐻‍❄️"];
    } else if (name.includes("black cat")) {
        a = ["🐈‍⬛"];
    } else if (name == "sugar") {
        a = ["🧂"];
    } else if (name == "computer mouse") {
        a = ["🖱️"];
    } else if (name == "new york") {
        a = ["🗽", "🍎"];
    } else if (name == "new year") {
        a = ["🆕🥳", "🆕🥂", "🆕🌃", "🆕🕛", "🆕🎉", "🆕🎊", "🆕🍾", "🆕🧧"];
    } else if (name == "new") {
        a = ["🆕"];
    } else if (
        getPOS("emptying")
        .concat(["empties"])
        .includes(name)
    ) {
        a = ["🈳"];
    } else if (["ice", "cooling"].includes(name)) {
        a = ["🧊"];
    } else if (name == "cool") {
        a = ["🆒", "🧊", "😎"];
    } else if (["hot", "spicy", "spice"].includes(name)) {
        a = ["🔥", "🌶", "🥵", "♨"];
    } else if (["cold", "freezing"].includes(name)) {
        a = ["🤧", "🥶", "😷"];
    } else if (["fun", "funny", "hilarious"].includes(name)) {
        a = ["😝", "😂", "🤣", "🤩"];
    } else if (/^entertain/.test(name) == true || /^interest/.test(name) == true) {
        a = ["😚", "😉", "😆", "😄"];
    } else if (["cutie", "cute", "cuteness", "cutest", "adorable"].includes(name)) {
        a = ["🥺", "🤩", "🐣", "😍", "😻", "🐱"]
    } else if (/^fast/.test(name) == true) {
        a = ["⏩", "🚀", "🚄", "✈️"];
    } else if (/^slow/.test(name) == true) {
        a = ["🦥", "🐢"];
    } else if (name == "spring") {
        a = ["🌱", "🌸", "🐰", "👒"];
    } else if (name == "summer") {
        a = ["😎", "👙", "🎐", "🍉", "☀️"];
    } else if (["fall", "autumn"].includes(name)) {
        a = ["🍂", "🍁", "🎃", "🌰"];
    } else if (name == "winter") {
        a = ["❄️", "☃️", "⛄", "🌲", "🌨️"];
    } else if (getPOS("fall").includes(name)) {
        a = ["🍂", "🍃", ];
    } else if (["sun", "solar"].includes(name)) {
        a = ["🌞", "☀️"];
    } else if (["moon", "moons"].includes(name)) {
        a = ["🌝", "🌙", "🌛", "🎑"];
    } else if (["full", "fully"].includes(name)) {
        a = ["🌝"];
    } else if (["snow", "snows", "snowing", "snowed", "snowy"].includes(name)) {
        a = ["❄️", "☃️", "🌨️"];
    } else if (/^cloud/.test(name) == true) {
        a = ["☁️", "⛅", "🌥️"];
    } else if (getPOS("star").includes(name)) {
        a = ["⭐", "🌟", "🌠", "✴️"];
    } else if (["water"].includes(name) || name == "wet") {
        a = ["💧", "🌊", "🚰", "💦"];
    } else if (getPOS("flow").includes(name)) {
        a = ["🌊 "];
    } else if (getPOS("sky").includes(name)) {
        a = ["🌃", "🏙", "🌄", "🌅", "🌆", "🌇", "🌉"];
    } else if (getPOS("rained").includes(name) || name == ["rainny"]) {
        a = ["🌧️", "🌦️", "⛈️", "☔"];
    } else if (name.includes("weather")) {
        a = ["☀️", "☁️", "⛅", "⛈️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️"];
    } else if (["morning", "dawn", "early"].includes(name)) {
        a = ["🌅", "🌄"];
    } else if (name.includes("afternoon")) {
        a = ["🌆", "🌇"];
    } else if (["everything", "universe"].includes(name)) {
        a = ["🌌"];
    } else if (
        getPOS("hug")
        .concat(getPOS("embraced"))
        .includes(name)
    ) {
        a = ["🫂"];
    } else if (/^evil/.test(name) == true || /^demon/.test(name) == true) {
        a = ["😈", "👿"];
    } else if (
        [
            "an", "the", "was", "is",
            "am", "are", "were", "will", "may", "might", "thing", "things",
            "for", "from", "to", "at", "still", "yet", "been", "did", "would",
            "under", "over", "among", "there",
            "as", "who", "what", "whose", "whom", "which",
            "my", "hers", "hers", "theirs",
            "which", "take", "takes", "took", "taken"
        ].includes(name)
    ) {
        a = [];
    } else if (name == "a") {
        a = ["🅰️"];
    } else if (name == "o") {
        a = ["🅾️"];
    } else if (name == "z") {
        a = ["💤"];
    } else if (["this", "these", "famous"].includes(name)) {
        a = ["💁"];
    } else if (["those", "that"].includes(name)) {
        a = ["👉"];
    } else if (name == "of") {
        a = ["➡️"];
    } else if (name == "off") {
        a = ["📴"];
    } else if (getPOS("bleed").includes(name) || name == "blood") {
        a = ["🩸"];
    } else if (
        ["i", "me", "myself", "you", "your", "yourself"].includes(name) ||
        getPOS("face").concat(getPOS("smile")).includes(name)
    ) {
        a = ["😀", "😃", "😄", "🙂", "😊"];
    } else if (/^grandm/.test(name) == true || name == "ma'am") {
        a = ["👵"];
    } else if (
        name.includes("grandf") ||
        name.includes("grandp") ||
        name == "sir"
    ) {
        a = ["👴"];
    } else if (
        [
            "she", "her",
            "mother", "mom", "mommy",
            "aunt", "aunts", "auntie",
            "sister", "sisters", "sis",
            "gal", "woman", "ms", "mrs"
        ].includes(name)
    ) {
        a = ["👩", "💁‍♀️"];
    } else if (
        [
            "he", "him",
            "father", "dad", "daddy",
            "uncle", "uncles",
            "brother", "brothers", "bro",
            "dude", "guy", "guys", "man", "mr"
        ].includes(name)
    ) {
        a = ["👨", "🧔", "💁‍♂️"];
    } else if (name == "men") {
        a = ["👬", "👨‍👨‍👦‍👦"];
    } else if (name == "women") {
        a = ["👭", "👩‍👩‍👧‍👧"];
    } else if (
        getPOS("boy")
        .concat(getPOS("son"))
        .includes(name)
    ) {
        a = ["👦"];
    } else if (
        getPOS("girl")
        .concat(getPOS("daughter"))
        .includes(name)
    ) {
        a = ["👧"];
    } else if (["young", "younger", "childhood"].includes(name)) {
        a = ["👧", "👦", "🧒"];
    } else if (
        ["bust", "person", "anyone", "personal", "individual", "oneself", "being"].includes(name)
    ) {
        a = ["👤"];
    } else if (
        [
            "we", "us", "they", "them", "families", "people", "group", "groups", "individuals", "crowd",
            "member", "members", "team", "teams", "everyone", "everybody", "household"
        ].includes(name)
    ) {
        a = ["👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👨‍👧‍👦", "👨‍👦‍", "👨‍👧", "👩‍👦", "👩‍👧", "👩‍👧‍👦"];
    } else if (getPOS("gender").includes(name)) {
        a = ["♀", "♂", "⚧️", "🚻", "🚹", "🚺"];
    } else if (getPOS("breast").includes(name)) {
        a = ["🤱"];
    } else if (["hero", "heros", "champion", "protagonist"].includes(name)) {
        a = ["🦸", "🦸‍♂️ ", "🦸‍♀️"];
    } else if (["villains", "villain", "antagonist", "nemesis", "adversary"].includes(name)) {
        a = ["🦹"];
    } else if (getPOS("doctor").concat(getPOS("nurse")).includes(name)) {
        a = ["🧑‍⚕️"];
    } else if (["health", "medical"].includes(name)) {
        a = ["🧑‍⚕️", "🩺", "💉"];
    } else if (name == "tea") {
        a = ["🫖", "🍵", "☕"];
    } else if (name == "coffee") {
        a = ["☕"];
    } else if (["latte", "cappuccino"].includes(name)) {
        a = ["☕🥛"];
    } else if (getPOS("food").includes(name)) {
        a = ["🍞", "🥯", "🥞", "🍖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍳", "🥘", "🥗", "🥫", "🍱", "🍛", "🍜", "🍝", "🍚"];
    } else if (name == "rice") {
        a = ["🍚", "🍘", "🍙", "🌾"];
    } else if (getPOS("cake").includes(name)) {
        a = ["🎂", "🍰", "🧁"];
    } else if (name == "pie") {
        a = ["🥧"];
    } else if (name.includes("pumpkin")) {
        a = ["🎃"];
    } else if (getPOS("smoke").includes(name)) {
        a = ["🚬"];
    } else if (name == "no smoking") {
        a = ["🚭"];
    } else if (getPOS("mouse").includes(name)) {
        a = ["🐭", "🐁", "🐀"];
    } else if (["dog", "puppy", "dogs", "puppies"].includes(name)) {
        a = ["🐶", "🐕", "🦮", "🐕‍🦺", "🐩"];
    } else if (["cat", "cats", "kitty", "kittens", "kitten"].includes(name)) {
        a = ["😺", "😸", "😹", "😻", "😼", "😽", "😿", "😾", "🐱", "🐈", "🐈‍⬛"];
    } else if (getPOS("dragon").includes(name)) {
        a = ["🐲", "🐉"];
    } else if (getPOS("pig").includes(name) || ["hog", "piglet", "swine", "boar", "pork", "piggy"].includes(name)) {
        a = ["🐷", "🐖", "🐽"];
    } else if (["beef", "cow", "cows"].includes(name)) {
        a = ["🐄", "🐮"];
    } else if (getPOS("horse").includes(name)) {
        a = ["🐴", "🐎", "🎠"];
    } else if (["doll", "dolls"].includes(name)) {
        a = ["🧸", "🪆", "🎎"];
    } else if (["suit", "suits"].includes(name)) {
        a = ["🕴️", "🤵"];
    } else if (/^sport/.test(name) == true) {
        a = ["🤺", "🏇", "⛷️", "🏂", "🏄", "🏌️", "🚣", "⛹️", "🏊", "🚴"];
    } else if (
        ["must", "should", "can", "ought"].concat(getPOS("needs")).includes(name)
    ) {
        a = ["💪", "🦾"];
    } else if (
        getPOS("love")
        .concat.apply(getPOS("love"), [getPOS("like"), getPOS("beloved"), getPOS("adore")])
        .includes(name) || ["lovely", "prefer", "preference", "favorite", "hearts", "heart"].includes(name)
    ) {
        a = ["💖", "💗", "💕", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];
    } else if (
        getPOS("hate")
        .concat(getPOS("despise"))
        .includes(name)
    ) {
        a = ["💔", "😡"];
    } else if (
        getPOS("broke")
        .concat.apply(getPOS("broke"), [getPOS("split")])
        .includes(name) ||
        name == "heartbroken"
    ) {
        a = ["💔"];
    } else if (
        ["cage", "cages"].includes(name) ||
        getPOS("captured").includes(name) ||
        /^prison/.test(name) == true
    ) {
        a = ["皿"];
    } else if (
        getPOS("hear")
        .concat(getPOS("listen"))
        .includes(name)
    ) {
        a = ["👂", "🦻"];
    } else if (
        getPOS("tell")
        .concat.apply(getPOS("tell"), [
            getPOS("speak"),
            getPOS("say"),
            getPOS("chat"),
            getPOS("talk")
        ])
        .includes(name)
    ) {
        a = ["🗣️", "👄"];
    } else if (getPOS("call").includes(name)) {
        a = ["📲", "📞", "🤙"];
    } else if (
        getPOS("look")
        .concat.apply(getPOS("look"), [
            getPOS("watch"),
            getPOS("see"),
            getPOS("observe"),
            getPOS("stare")
        ])
        .includes(name)
    ) {
        a = ["👁️", "👀"];
    } else if (getPOS("smell").includes(name)) {
        a = ["👃"];
    } else if (
        getPOS("taste")
        .concat(["tastes"])
        .includes(name)
    ) {
        a = ["👅"];
    } else if (getPOS("head").includes(name)) {
        a = ["👤"];
    } else if (["neck", "necks"].includes(name)) {
        a = ["🧣"];
    } else if (getPOS("tie").includes(name)) {
        a = ["👔"];
    } else if (
        name.includes("invisib") ||
        getPOS("ignore")
        .concat(getPOS("unsee"))
        .includes(name)
    ) {
        a = ["❌👁️"];
    } else if (
        name.includes("lover") ||
        name.includes("partner") ||
        name.includes("marriage") ||
        name.includes("sweetheart") ||
        getPOS("marry").includes(name)
    ) {
        a = ["💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨"];
    } else if (["friend", "friends", "mate", "mates", "pal", "with", "companion", "together"].includes(name) || getPOS("accompany").includes(name)) {
        a = ["🧑‍🤝‍🧑", "👭", "👫", "👬"];
    } else if (name == "red") {
        a = ["❤️", "🍎", "🍓", "🛑", "🧧", "📕", "🔴"];
    } else if (name == "orange") {
        a = ["🍊", "🧡", "🟧", "🟠"];
    } else if (name == "yellow") {
        a = ["🟡", "🟨", "💛", "🍋", "🌼"];
    } else if (name == "green") {
        a = ["🟢", "🟩", "🍀", "🍏", "🌵", "🥬", "💚"];
    } else if (name == "blue") {
        a = ["🔵", "🟦", "🧢", "🥏", "🫐", "💙"];
    } else if (name == "purple") {
        a = ["🟣", "🟪", "🍆", "💜", "🍇"];
    } else if (name == "rainbow") {
        a = ["🏳️‍🌈", "🌈"];
    } else if (["big", "large", "bigger", "larger"].includes(name)) {
        a = ["⬛", "⬜"];
    } else if (["small", "smaller", "tiny"].includes(name)) {
        a = ["▪️", "▫️"];
    } else if (getPOS("apple").includes(name)) {
        a = ["🍎", "🍏"];
    } else if (
        getPOS("eat")
        .concat(getPOS("dine"))
        .includes(name) || ["meal", "meals", "diet", "diets"].includes(name) ||
        name.includes("dinner")
    ) {
        a = ["🍽️", "🍴"];
    } else if (getPOS("cook").includes(name)) {
        a = ["🧑‍🍳"];
    } else if (name.includes("breakfast") || name.includes("brunch")) {
        a = ["🍽️", "🍴", "🥓", "🥞", "🍞", "🍳", "🥛"];
    } else if (name.includes("lunch")) {
        a = ["🍽️", "🍴", "🥪", "🌯", "🧃", "🍱", "🍔"];
    } else if (/^vege/.test(name) == true || name == "vegan" || ["healthier", "healthy"].includes(name)) {
        a = ["🥗", "🥦", "🧅", "🥕", "🥔", "🍅"];
    } else if (name.includes("fruit")) {
        a = ["🥝", "🍓", "🍎", "🍊", "🍑", "🍍", "🍒"];
    } else if (["flowers", "flower"].includes(name)) {
        a = ["💐", "🌹", "🌺", "🌻"];
    } else if (name == "rose") {
        a = ["🌹"];
    } else if (["nut", "nuts"].includes(name)) {
        a = ["🥜", "🌰"];
    } else if (name.includes("seafood")) {
        a = ["🦀", "🦞", "🦐", "🦑", "🦪"];
    } else if (name == "meat") {
        a = ["🍖", "🍗", "🥩", "🥓"];
    } else if (name.includes("pickle") || name.includes("gherkin")) {
        a = ["🥒"];
    } else if (getPOS("bird").includes(name)) {
        a = ["🐓", "🐦", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦩", "🦜"];
    } else if (name.includes("animal") || ["zoo", "zoology"].includes(name)) {
        a = ["🐕", "🐈", "🐒", "🦌", "🐅", "🐎", "🐄", "🐖"];
    } else if (getPOS("dynasour").includes(name)) {
        a = ["🦕", "🦖"];
    } else if (name.includes("fish")) {
        a = ["🐟", "🎣", "🐠", "🐡", "🦈"];
    } else if (name.includes("sweet") || name.includes("dessert")) {
        a = ["🍦", "🍧", "🍨", "🍩", "🍪", "🍰", "🥧"];
    } else if (name == "juice") {
        a = ["🧃"];
    } else if (["alcohol", "alcoholic", "drinks"].includes(name)) {
        a = ["🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃"];
    } else if (name == "cheers") {
        a = ["🍻", "🥂"];
    } else if (["ramen", "noodle", "noodles"].includes(name)) {
        a = ["🍜", "🍲", "🍝"];
    } else if (getPOS("pasta").includes(name)) {
        a = ["🍝"];
    } else if (getPOS("news").includes(name)) {
        a = ["📰", "🗞️", "📺"];
    } else if (getPOS("wings").includes(name)) {
        a = ["🦋", "💸", "🕊️", "🦅"];
    } else if (
        getPOS("win")
        .concat.apply(getPOS("win"), [getPOS("suceed"), getPOS("prized")])
        .includes(name) ||
        getPOS("success").includes(name)
    ) {
        a = ["🏆", "🥇"];
    } else if (name.includes("diamond") || name.includes("jewel")) {
        a = ["💎", "💍"];
    } else if (["river", "rivers", "landscape"].includes(name)) {
        a = ["🏞️"];
    } else if (["sea", "ocean"].includes(name)) {
        a = ["🏝️"];
    } else if (getPOS("light").includes(name)) {
        a = ["🕯️", "💡"];
    } else if (["name", "names"].includes(name)) {
        a = ["📇", "📛"];
    } else if (name.includes("thousand")) {
        a = ["1️⃣0️⃣0️⃣0️⃣"];
    } else if (["game", "games", "gaming"].includes(name)) {
        a = ["🎮", "🎲", "🕹️"];
    } else if (getPOS("grocery").includes(name)) {
        a = ["🛒"];
    } else if (getPOS("box").includes(name)) {
        a = ["📦", "🗳️", "🗃️", "🎁"];
    } else if (["robot", "robots", "bot", "bots"].includes(name) || name.includes("machine")) {
        a = ["🤖"];
    } else if (getPOS("computer").includes(name)) {
        a = ["🖥️", "💻"];
    } else if (
        ["money"].includes(name) ||
        getPOS("price")
        .concat(getPOS("cost"))
        .includes(name) || name == "cash"
    ) {
        a = ["💸", "💴", "💵", "💷"];
    } else if (["problems", "problem", "issue", "issues"].includes(name) || name.includes("trouble")) {
        a = ["⚠️", "😞"];
    } else if (["urgent", "urgency"].includes(name) || name.includes("emergen")) {
        a = ["🚨"];
    } else if (["stress", "stressful", "stressed"].includes(name) || /^pressur/.test(name) == true) {
        a = ["😫", "🤢", "😵", "🤯", "😟"];
    } else if (
        getPOS("buy")
        .concat(getPOS("purchase"))
        .includes(name) ||
        getPOS("shopped").includes(name)
    ) {
        a = ["🛍️", "🛒"];
    } else if (
        ["homework", "hw", "assignment", "assignments", "project", "projects", "readings"].includes(name) || name.includes("research") || getPOS("study").concat(getPOS("read")).includes(name)
    ) {
        a = ["📚", "📓", "📒", "📖", "📑"];
    } else if (/^perform/.test(name) == true || ["theater", "theaters"].includes(name)) {
        a = ["🎭"];
    } else if (["art", "arts"].includes(name)) {
        a = ["🎨", "🎭", "🖋️", "🎼"];
    } else if (/^paint/.test(name) == true) {
        a = ["🎨", "🖼️"];
    } else if (/^"color"/.test(name) == true || getPOS("design").includes(name)) {
        a = ["🎨"];
    } else if (getPOS("draw").includes(name)) {
        a = ["✏️", "🖊️", "🖍️", "〰️"];
    } else if (getPOS("sing").includes(name)) {
        a = ["🗣️🎶", "🗣️🎵", "🎤🎵", "🎤🎶"];
    } else if (
        name.includes("music") ||
        name.includes("concert") ||
        name.includes("recital") || ["song", "songs"].includes(name)
    ) {
        a = ["🎼", "🎵", "🎶", "🎹"];
    } else if (name.includes("piano")) {
        a = ["🎹"];
    } else if (name.includes("movie")) {
        a = ["🎥", "🎞️", "🍿", "🎬"];
    } else if (getPOS("experiment").concat(["chemistry", "biology"]).includes(name) || ["science", "scientific"].includes(name)) {
        a = ["⚗️", "🧪", "🧫", "🔬"];
    } else if (name.includes("christmas")) {
        a = ["👼", "🎅", "🤶", "🎄", "🎁", "🔔", "⛄", "🌟", "🦌", "❄️"];
    } else if (name == "hanukkah") {
        a = ["🥞", "🕍", "🎁", "🕯️", "🛐", "✡️", "🕎", "🇮🇱"];
    } else if (name.includes("thanksgiving")) {
        a = ["🦃", "🍂", "🍽", "🥧", "👨‍👩‍👧‍👦", "🍗"];
    } else if (getPOS("graduate").includes(name) || name == "graduation") {
        a = ["🧑‍🎓", "💐", "🍾", "🏫", "🎉", "🎓"];
    } else if (name.includes("location") || name == "here") {
        a = ["📌"];
    } else if (name.includes("religion") || ["god", "gods"].includes(name)) {
        a = ["⛪", "🕌", "🕍", "🕋", "⛩"];
    } else if (["place", "places", "site", "sites"].includes(name)) {
        a = ["🏟", "🏛", "🏠", "🏢", "🏫", "⛪"];
    } else if (["road", "roads", "street", "streets", "ways", "way"].includes(name)) {
        a = ["🛣️", "🛤️"];
    } else if (
        getPOS("live")
        .concat(getPOS("home"))
        .includes(name)) {
        a = ["🏠"];
    } else if (getPOS("room").concat(["furniture"]).includes(name)) {
        a = ["🛋️", "🪑", "🛏️"];
    } else if (
        ["die", "dies", "dead", "death", "funeral", "funerals"].includes(name)
    ) {
        a = ["⚰️", "⚱️", "💀", "🪦"];
    } else if (
        getPOS("war")
        .concat(getPOS("fight"))
        .includes(name) || getPOS("attack").includes(name)
    ) {
        a = ["🗡️", "⚔️", "🔫", "💣", "☢️", "🔥"];
    } else if (name.includes("dynamite")) {
        a = ["🧨"];
    } else if (/^soul/.test(name) == true || /^spirit/.test(name) == true) {
        a = ["😇"];
    } else if (name.includes("congrat") || getPOS("anniversary").includes(name)) {
        a = ["👏", "🎉", "🎊", "🎆", "🍾", "🥳"];
    } else if (getPOS("clapping").includes(name)) {
        a = ["👏"];
    } else if (getPOS("holiday").includes(name)) {
        a = ["🎄", "🎃", "🎇", "🍀", "🕎", "🏖️"];
    } else if (["vacation", "vacance", "trip", "trips", "traveling"].includes(name) || getPOS("travel").includes(name)) {
        a = ["🌴", "🏖️", "✈️", "⛱️", "🧳", "🗺️"];
    } else if (getPOS("relate").includes(name) || /^relation/.test(name) == true) {
        a = ["🪢", "🪡"];
    } else if (getPOS("day").includes(name)) {
        a = ["☀️", "🌞"];
    } else if (getPOS("night").includes(name) || /^dark/.test(name) == true) {
        a = ["🎑", "🌃", "🌉", "🌌", "🌚"];
    } else if (["player"].includes(name)) {
        a = ["🤽", "🤾", "⛹️", "🏌️", "🤺", "🏇"];
    } else if (
        getPOS("compete")
        .concat(getPOS("rival"))
        .includes(name) || ["rivarly", "competitior", "competitors", "competition", "competitions", "players"]
        .concat(getPOS("opponent"))
        .includes(name)
    ) {
        a = ["🤼"];
    } else if (getPOS("month").includes(name)) {
        a = ["🈷", "🈷️"];
    } else if (getPOS("year").includes(name)) {
        a = ["🗓"];
    } else if (getPOS("date").concat(getPOS("scheduling")).includes(name) || ["schedule", "appointment", "appointments"].includes(name)) {
        a = ["📅"];
    } else if (
        [
            "time", "minute", "minutes", "second", "seconds", "hour", "hours", "when"
        ].includes(name) || ["moment", "moments"].includes(name)
    ) {
        a = ["⌛", "⌚", "⏰", "⏱️", "⏲️", "🕰️"];
    } else if (getPOS("world").includes(name)) {
        a = ["🌍", "🌎", "🌏", "🌐", "🗺️"];
    } else if (/^secret/.test(name) == true) {
        a = ["㊙️", "🤐", "🤫", "🙊", "🔒"];
    } else if (getPOS("wed").includes(name)) {
        a = ["🤵", "👰", "💒", "🔔", "💐", "💍"];
    } else if (["groom", "grooms", "waiter", "waiters"].includes(name)) {
        a = ["🤵"];
    } else if (["brides", "bride"].includes(name)) {
        a = ["👰"];
    } else if (["queen", "queens", "dutchess", "countess"].includes(name)) {
        a = ["👸", "👑"];
    } else if (
        ["king", "kings", "royal", "duke", "earl", "lord", "lords"].includes(name)
    ) {
        a = ["🤴", "👑"];
    } else if (name.includes("author") || name.includes("writer")) {
        a = ["✍️", "🖋️", "⌨️", "📋"];
    } else if (
        [
            "goodbye",
            "hello",
            "bye",
            "farewell",
            "hi",
            "howdy",
            "greeting",
            "greetings"
        ].includes(name)
    ) {
        a = ["👋", "😉"];
    } else if (getPOS("meet").includes(name)) {
        a = ["🤝"];
    } else if (
        ["aware"].concat(getPOS("awake")).includes(name) || ["stunned"].includes(name)
    ) {
        a = ["😳"];
    } else if (
        getPOS("feel")
        .concat(getPOS("regard"))
        .includes(name)
    ) {
        a = ["😌"];
    } else if (
        getPOS("disregard")
        .concat(getPOS("disagree"))
        .includes(name) ||
        name.includes("disagree")
    ) {
        a = ["❌😌"];
    } else if (["glasses"].includes(name)) {
        a = ["👓"];
    } else if (name == "door") {
        a = ["🚪"];
    } else if (["knife", "knives"].includes(name)) {
        a = ["🔪"];
    } else if (getPOS("frees").includes(name)) {
        a = ["🆓"];
    } else if (getPOS("cut").includes(name)) {
        a = ["✂️"];
    } else if (getPOS("sit").includes(name) || ["seats", "seated"].includes(name)) {
        a = ["💺", "🪑"];
    } else if (getPOS("cleaning").includes(name)) {
        a = ["🧹", "🪣", "🧽", "🚿", "🛁"];
    } else if (/^measur/.test(name) == true) {
        a = ["📏", "📐", "🌡️"];
    } else if (name == "sock") {
        a = ["🧦"];
    } else if (
        getPOS("find")
        .concat(getPOS("seek"))
        .includes(name) || getPOS("detect").concat(getPOS("search")).includes(name)
    ) {
        a = ["🔍", "🔎", "🕵️"];
    } else if (getPOS("meditate").includes(name) || ["yoga", "meditation", "mindfulness"].name) {
        a = ["🧘", "🪔", "🕯️"];
    } else if (getPOS("use").includes(name)) {
        a = ["✍️", "🤳"];
    } else if (getPOS("have").includes(name)) {
        a = ["🈶"];
    } else if (getPOS("tag").includes(name)) {
        a = ["🏷️"];
    } else if (getPOS("answer").concat(getPOS("raise")).includes(name) || name.includes("introduc") || name == "hey") {
        a = ["🙋", "✋"];
    } else if (getPOS("appear").includes(name)) {
        a = ["💫", "✨"];
    } else if (getPOS("cover").includes(name)) {
        a = ["🙈", "🤭"];
    } else if (getPOS("fly").includes(name)) {
        a = ["🛫", "🛩️", "🚁", "🚀", "🦋", "🕊️", "🦅"];
    } else if (getPOS("wear").concat(getPOS("outfit")).includes(name) || /^cloth/.test(name) == true) {
        a = ["🧥", "🥼", "👔", "👕", "👖", "🧥", "🧦", "👗", "🩳", "👚"];
    } else if (
        getPOS("faded").includes(name) || ["obscure", "vague", "unclear"].includes(name)
    ) {
        a = ["🌫️"];
    } else if (getPOS("live").includes(name)) {
        a = ["🏠"];
    } else if (getPOS("help").includes(name)) {
        a = ["🆘", "🥺", "🙋"];
    } else if (getPOS("trapped").includes(name)) {
        a = ["🪤"];
    } else if (
        getPOS("step").concat(getPOS("go")).includes(name) ||
        getPOS("come").includes(name)
    ) {
        a = ["🚶"];
    } else if (getPOS("enter").concat(getPOS("run")).includes(name)) {
        a = ["🏃"];
    } else if (
        getPOS("reach")
        .concat(getPOS("challenge"))
        .includes(name)
    ) {
        a = ["🧗"];
    } else if (
        getPOS("regretted").includes(name) ||
        name.includes("headache") ||
        name.includes("migraine")
    ) {
        a = ["🤦"];
    } else if (getPOS("start").includes(name) || getPOS("begin").includes(name)) {
        a = ["🏁", "🎬"];
    } else if (getPOS("play").includes(name) || ["forth", "forward"].includes(name)) {
        a = ["▶️", "⏯️"];
    } else if (
        getPOS("gets")
        .concat.apply(getPOS("gets"), [getPOS("obtain"), getPOS("attain")])
        .includes(name)
    ) {
        a = ["🉐"];
    } else if (/^protect/.test(name) == true) {
        a = ["🛡️"];
    } else if (getPOS("sleep").includes(name) || getPOS("nap").includes(name)) {
        a = ["😴", "💤", "🛌"];
    } else if (
        ["good", "yes", "better", "great", "well", "okay", "ok", "okie", "awesome", "fine", "nice", "glad"].includes(name)
    ) {
        a = ["👍", "👌"];
    } else if (
        ["perfect", "100"].includes(name) ||
        getPOS("pass").includes(name)
    ) {
        a = ["💯"];
    } else if (["bad", "terrible", "boo", "awful", "sucks"].includes(name)) {
        a = ["👎"];
    } else if (/^luck/.test(name) == true) {
        a = ["🍀"];
    } else if (name == "life") {
        a = ["⏳", "🌱", "🫀"];
    } else if (["right", "ahead", "after"].includes(name)) {
        a = ["👉", "➡️", "↪️"];
    } else if (["left", "before", "backward"].includes(name)) {
        a = ["👈", "⬅️", "↩️"];
    } else if (name == "up") {
        a = ["👆", "☝️", "⬆️", "🔼", "⏫", "🆙"];
    } else if (name == "down") {
        a = ["👇", "⬇️", "⤵️", "🔽", "⏬"];
    } else if (
        /^happy/.test(name) == true ||
        getPOS("enjoy").includes(name) || ["joy", "joyful", "merry"].includes(name)
    ) {
        a = ["😀", "😃", "😄", "😁", "😆", "🥰", "😊"];
    } else if (["tear", "sad", "sadness", "sorrow"].includes(name)) {
        a = ["😢", "😭", "😥", "😿"];
    } else if (["fear", "fears", "fearful", "afraid", "anxious", "anxiety"].includes(name)) {
        a = ["🥶", "😨", "😖", "😣"];
    } else if (getPOS("memorize").concat(getPOS("remember")).includes(name) || ["memory", "memories", "remembrance"].includes(name)) {
        a = ["😔", "😌"];
    } else if (["smart", "nerdy", "clever"].includes(name)) {
        a = ["🤓"];
    } else if (getPOS("rise").includes(name) || getPOS("improve").includes(name)) {
        a = ["⤴️", "📈"];
    } else if (
        [
            "outstanding",
            "marvelous",
            "superb",
            "super",
            "excellent",
            "amazing",
            "woderful",
            "magnificent",
            "beautiful",
            "fantastic",
            "fabulous",
            "charming",
            "terrific",
            "best",
            "favorite",
            "favorites"
        ].includes(name)
    ) {
        a = ["✨", "💯", "🌈", "🥰"];
    } else if (getPOS("mail").concat(getPOS("messaging")).includes(name)) {
        a = ["✉️"];
    } else if (name == "texting") {
        a = ["📱"];
    } else if (["word", "words", "text", "texted", "texts"].includes(name)) {
        a = ["📝", "🔠", "🔡", "🔤"];
    } else if (getPOS("numbering").includes(name)) {
        a = ["🔢"];
    } else if (["first", "one", "1"].includes(name)) {
        a = ["1️⃣", "☝️", "👤"];
    } else if (["two", "second"].includes(name)) {
        a = ["2️⃣"];
    } else if (["four", "fourth"].includes(name)) {
        a = ["4️⃣"];
    } else if (["six"].includes(name)) {
        a = ["6️⃣"];
    } else if (["eight", "8"].includes(name)) {
        a = ["8️⃣", "🎱"];
    } else if (name == "0") {
        a = ["0️⃣"];
    } else if (name == "ten") {
        a = ["🔟"];
    } else if (["#", "hashtag", "hashtags"].includes(name)) {
        a = ["#️⃣"];
    } else if (["*", "asterisk"].includes(name)) {
        a = ["*️⃣"];
    } else if (["+"].concat(getPOS("add")).includes(name)) {
        a = ["➕"];
    } else if (["-", ""].includes(name)) {
        a = ["*️⃣"];
    } else if (["*", "asterisk"].includes(name)) {
        a = ["*️⃣"];
    } else if (["justice", "fair"].includes(name) || getPOS("scale").includes(name)) {
        a = ["⚖️", "♎"];
    } else if (["weight", "weighted", "weighing"].includes(name)) {
        a = ["⚖️"];
    } else if (name.includes("weightlifting") || name.includes("bodybuild")) {
        a = ["🏋️"];
    } else if (
        getPOS("scare")
        .concat.apply(getPOS("scare"), [
            ["omg"],
            getPOS("panic"),
            getPOS("shock")
        ])
        .includes(name) ||
        name == "scary"
    ) {
        a = ["😱", "🙀"];
    } else if (["mad", "angry", "furious", "upset"].includes(name)) {
        a = ["😠", "😡", "💢", "😤"];
    } else if (["patient", "patience"].includes(name)) {
        a = ["😐"];
    } else if (["plz", "please", "excuse"].includes(name)) {
        a = ["🙏", "🙋", "🙇", "🥺"];
    } else if (
        getPOS("want")
        .concat.apply(getPOS("want"), [getPOS("wish"), getPOS("hope")])
        .includes(name) || ["hopefully", "hopeful", "wishful"].includes(name)
    ) {
        a = ["🙏", "🥺"];
    } else if (name == "skin") {
        a = ["🏻", "🏼", "🏽", "🏾", "🏿"];
    } else if (
        ["sick", "pain", "painful"].includes(name) ||
        name.includes("hurt")
    ) {
        a = ["😷", "🤒", "🤢", "🤮", "🤧", "🤕"];
    } else if (name.includes("covid") || name.includes("corona")) {
        a = ["🦠", "🏥", "🧼", "😷", "🤒"];
    } else if (["toilet", "bathroom", "restroom", "loo"].includes(name)) {
        a = ["🚽", "🧻", "🚻", "🚾", "🚹", "🚺"];
    } else if (["erotic", "porn", "pornography"].includes(name)) {
        a = ["🔞"];
    } else if (getPOS("code").includes(name)) {
        a = ["⌨️", "💻"];
    } else if (
        getPOS("programmed")
        .concat(["program", "programs"])
        .includes(name)
    ) {
        a = ["💻"];
    } else if (
        ["election", "vote", "votes", "voting", "elected"].includes(name)
    ) {
        a = ["🗳️"];
    } else if (name == "english") {
        a = ["🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇬🇧"];
    } else if (["china", "chinese"].includes(name)) {
        a = ["🇨🇳"];
    } else if (name.includes("japan")) {
        a = ["🗾", "🇯🇵"]
    } else if (
        [
            "america",
            "american",
            "americans",
            "usa",
            "u.s.",
            "states",
            "united states"
        ].includes(name)
    ) {
        a = ["🇺🇸"];
    } else if (name == "south korea") {
        a = ["🇰🇷"];
    } else if (name.includes("korea")) {
        a = ["🇰🇵", "🇰🇷"];
    } else if (name == "itp") {
        a = ["🌈🖥️💎🎶⌨️📱🎨✨🕶️🖱️🎈💻💫🎧⚡💖"];
    } else if (RiTa.isAdverb(name) == true) {
        a = [""];
    } else if (name in emojiList) {
        a.push(emojiN[emojiE.indexOf(name)])
    } else if (name + "s" && (name + "s") in emojiList) {
        a.push(emojiN[emojiE.indexOf(name + "s")])
    } else {
        let newName = new RegExp("\\b(" + name + ")\\b", "g");
        let future = nlp(name);
        let newFuture = future
            .verbs()
            .toFutureTense()
            .out();
        let basic = newFuture.substring(5, newFuture.length);
        let particle = RiTa.getPresentParticiple(basic);
        let newParticle = new RegExp("\\b(" + particle + ")\\b", "g");
        let noun = RiTa.singularize(name);
        let newNoun = new RegExp("\\b(" + noun + ")\\b", "g");
        // console.log(newParticle);

        for (var emoName in emojiList) {
            if (emoName.match(newName) == name) {
                c = (emojiN[emojiE.indexOf(emoName)]);
                break;
            } else if (emoName.match(newParticle) && newFuture.includes("will")) {
                c = (emojiN[emojiE.indexOf(emoName)]);
                break;
            } else if (emoName.match(newNoun)) {
                c = (emojiN[emojiE.indexOf(emoName)]);
                break;
            }
            console.log(c)
        }
    }

    if (typeof c !== 'undefined') {
        a.push(c);
    }

    console.log(name);
    console.log(a);

    let randNum = Math.floor(Math.random() * Math.floor(a.length));
    b = a[randNum];

    return b;
}

function getPOS(text) {
    var pos = [];
    if (RiTa.isVerb(text) == true) {
        var a = nlp(text);
        var futureA = a
            .verbs()
            .toFutureTense()
            .out();
        var aBasic = futureA.substring(5, futureA.length);
        var pastA = a
            .verbs()
            .toPastTense()
            .out();
        var presentA = a
            .verbs()
            .toPresentTense()
            .out();
        pos.push(
            aBasic,
            text,
            presentA,
            pastA,
            RiTa.getPresentParticiple(aBasic),
            RiTa.getPastParticiple(aBasic)
        );
    }
    if (RiTa.isNoun(text) == true) {
        pos.push(text, RiTa.singularize(text), RiTa.pluralize(text));
    }
    return pos;
}