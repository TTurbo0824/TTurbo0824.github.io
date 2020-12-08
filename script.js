let button, input;
let splitted;
let emojiE, emojiN;
let emojiList;
let textInput = document.querySelector("#text-input").value;
let sent = document.getElementById("sentence");

async function fetchEmoji() {
    let response = await fetch("https://a2z-emoji-api.glitch.me/");

    emojiList = await response.json();
    emojiN = Object.values(emojiList);
    emojiE = Object.keys(emojiList);
}

fetchEmoji();

document.querySelector("#emoji").onclick = () => {
    let textInput = document.querySelector("#text-input").value;
    emojiN = Object.values(emojiList);
    emojiE = Object.keys(emojiList);
    emoji(textInput);
};

document.querySelector("#copy").onclick = () => {
    var copyText = sent.childNodes[0];
    var textArea = document.createElement("textarea");
    var tooltip = document.getElementById("myTooltip");

    if (typeof copyText == "undefined") {
        tooltip.innerHTML = "Nothing copied";
    } else {
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
        tooltip.innerHTML = "Copied: " + textArea.value;
    }
};

document.querySelector("#clearButton").onclick = () => {
    // console.log("clear button clicked");
    document.getElementById("sentence").innerHTML = "";
};

function emoji(text) {
    // console.log(newInput);
    let words = text.toLowerCase();
    words = words.replace(/\n/g, " ")
    let ar = [];

    if (words.includes("'t")) {
        words = words.replaceAll("'t", " tt");
    }

    var del = ["'s", "'re", "'m", "'ve", "'ll", "'d", ",", ".", "\"", ":", ";",
        "@", "^", "(", ")", "{", "}", "]", "[", "<", ">", "~", "`", "%"
    ];
    for (var j = 0; j < del.length; j++) {
        if (words.includes(del[j])) {
            words = words.replaceAll(del[j], "");
        }
    }
    if (words.includes("'")) {
        words = words.replaceAll("'", "");
    }

    var delWords = ["an", "the", "was", "is", "am", "are", "were", "now", "cause", "because", "due", "since", "will", "may", "might", "thing", "things", "between", "for", "from", "to", "at", "still", "yet", "most", "more", "been", "did", "would", "do", "does", "last", "under", "over", "among", "through", "tho", "there", "let", "so", "very", "real", "really", "badly", "as", "what", "whose", "which", "some", "something", "my", "hers", "hers", "theirs", "another", "already", "again", "which", "take", "takes", "took", "taken", "put", "just"];

    var newDel = [];

    for (var k = 0; k < delWords.length; k++) {
        newDel[k] = new RegExp("\\b(" + delWords[k] + ")\\b", "g");
        if (words.match(delWords[k])) {
            words = words.replaceAll(newDel[k], "");
        }
    }

    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "?", "&", "#", "*", "$"];
    for (var k = 0; k < nums.length; k++) {
        if (words.includes(nums[k])) {
            words = words.replaceAll(nums[k], " " + nums[k] + " ");
        }
    }

    splitted = words.split(" ");
    splitted = splitted.filter(item => item);

    for (var i = 0; i < splitted.length; i++) {
        if (splitted[splitted.indexOf("dog") - 1] == "hot") {
            splitRule("dog");
        } else if (splitted[splitted.indexOf("dogs") - 1] == "hot") {
            splitRule("dogs");
        } else if (splitted[splitted.indexOf("cream") - 1] == "ice") {
            splitRule("cream");
        } else if (splitted[splitted.indexOf("mouse") - 1] == "computer") {
            splitRule("mouse");
        } else if (splitted[splitted.indexOf("pen") - 1] == "fountain") {
            splitRule("pen");
        } else if (splitted[splitted.indexOf("year") - 1] == "new") {
            splitRule("year");
        } else if (splitted[splitted.indexOf("bear") - 1] == "polar") {
            splitRule("bear");
        } else if (splitted[splitted.indexOf("bears") - 1] == "polar") {
            splitRule("bears");
        } else if (splitted[splitted.indexOf("cat") - 1] == "black") {
            splitRule("cat");
        } else if (splitted[splitted.indexOf("cats") - 1] == "black") {
            splitRule("cats");
        } else if (splitted[splitted.indexOf("states") - 1] == "united") {
            splitRule("states");
        } else if (splitted[splitted.indexOf("york") - 1] == "new") {
            splitRule("york");
        } else if (splitted[splitted.indexOf("korea") - 1] == "south") {
            splitRule("korea");
        } else if (splitted[splitted.indexOf("smoking") - 1] == "no") {
            splitRule("smoking");
        } else if (splitted[splitted.indexOf("claus") - 1] == "santa") {
            splitRule("claus");
        } else if (splitted[splitted.indexOf("kong") - 1] == "hong") {
            splitRule("kong");
        } else if (splitted[splitted.indexOf("cake") - 1] == "moon") {
            splitRule("cake");
        } else if (splitted[splitted.indexOf("out") - 1] == "take") {
            splitRule("out");
        } else if (splitted[splitted.indexOf("potato") - 1] == "sweet") {
            splitRule("potato");
        } else if (splitted[splitted.indexOf("potatoes") - 1] == "sweet") {
            splitRule("potatoes");
        } else if (splitted[splitted.indexOf("tea") - 1] == "bubble") {
            splitRule("tea");
        }
        ar.push(getEmoji(splitted[i]));
    }

    var newSentence = ar.join(" ");
    var para = document.createElement("P");

    para.innerText = newSentence;
    sent.insertBefore(para, sent.childNodes[0]);
    console.log("finished processing")
}

function getEmoji(name) {
    let a = [];
    let b;
    let c;
    let emojiRegex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    if (name == "" || name.match(/"[^A-Za-z0-9]"/) == false || name == " ") {
        a = [];
    } else if (emojiRegex.test(name) == true) {
        a.push(name);
    } else if (["and", "&"].includes(name)) {
        a = ["&"];
    } else if (["no", "not", "never", "cannot", "neither", "nor", "without", "absent", "wrong", "incorrect", "impossible", "lack", "lacking", "loss"].includes(name) || ["tt"].includes(name)) {
        a = ["❌", "🙅"];
    } else if (["correct", "accurate"].includes(name)) {
        a = ["⭕", "✔️", "🙆"];
    } else if (getPOS("check").concat(getPOS("finish")).includes(name) || name == "done") {
        a = ["✔️"];
    } else if (["?", "how", "question", "questions"].includes(name)) {
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
    } else if (["much", "dollar", "dollars", "buck", "bucks", "$"].includes(name)) {
        a = ["💰"];
    } else if (["in", "into"].includes(name)) {
        a = ["📥", "📩"];
    } else if (name == "out") {
        a = ["📤"];
    } else if (["thesis", "dissertation", "course", "courses", "class", "classes", "story", "subject", "subjects", "chapter", "chapters", "stories", "novel", "book", "books", "poetic"].includes(name) || name.includes("fiction")) {
        a = ["📕", "📗", "📘", "📙", "📚"];
    } else if (getPOS("paper").concat(["article", "articles", "doc", "document", "documents"]).includes(name)) {
        a = ["📝", "📜", "📄", "📑"];
    } else if (["task", "tasks", "note", "notes"].includes(name)) {
        a = ["📋", "🗒️", "📝"];
    } else if (getPOS("plan").concat.apply(getPOS("plan"), [getPOS("reserve"), getPOS("require")]).includes(name) || ["means", "meant", "meaning", "meanings", "signiture", "requirements", "requirement", "draft", "drafts", "reservation", "reservations", "scenario", "scenarios", "exam", "midterm", "exams"].concat(getPOS("ordering")).includes(name)) {
        a = ["📝"]
    } else if (name.includes("hot dog") || ["hotdog", "hotdogs", "corndog", "corndog"].includes(name)) {
        a = ["🌭"];
    } else if (name == "santa claus") {
        a = ["🎅", "🧑‍🎄", "🤶"];
    } else if (name == "ice cream") {
        a = ["🍦", "🍧", "🍨"];
    } else if (["polar bear", "polar bears"].includes(name)) {
        a = ["🐻‍❄️"];
    } else if (name.includes("black cat")) {
        a = ["🐈‍⬛"];
    } else if (name == "sugar") {
        a = ["🧂"];
    } else if (["computer mouse"].concat(getPOS("clicked")).includes(name)) {
        a = ["🖱️"];
    } else if (name == "new york") {
        a = ["🗽", "🍎"];
    } else if (name == "new year") {
        a = ["🆕🥳", "🆕🥂", "🆕🌃", "🆕🕛", "🆕🎉", "🆕🎊", "🆕🍾", "🆕🧧"];
    } else if (name == "new") {
        a = ["🆕"];
    } else if (getPOS("emptying").concat(["empties"]).includes(name)) {
        a = ["🈳"];
    } else if (["ice", "cooling"].includes(name)) {
        a = ["🧊"];
    } else if (name == "cool") {
        a = ["🆒", "🧊", "😎"];
    } else if (["fancy"].includes(name)) {
        a = ["😎"];
    } else if (["hot", "spicy", "spice"].includes(name)) {
        a = ["🔥", "🌶", "🥵", "♨"];
    } else if (["cold", "freezing"].includes(name)) {
        a = ["🤧", "🥶", "😷"];
    } else if (["fun", "funny", "hilarious", "ha", "haha", "lol"].includes(name)) {
        a = ["😝", "😂", "🤣", "🤩"];
    } else if (/^entertain/.test(name) == true || /^interest/.test(name) == true || ["delight", "delighted", "delightful", "playful"].includes(name)) {
        a = ["😚", "😉", "😆", "😄"];
    } else if (["cutie", "cute", "cuteness", "cutest", "adorable", "aww"].includes(name)) {
        a = ["🥺", "🐣", "😍", "😻", "🥰"]
    } else if (/^fast/.test(name) == true || ["express"].includes(name)) {
        a = ["⏩", "🚀", "🚄", "✈️"];
    } else if (/^slow/.test(name) == true) {
        a = ["🦥", "🐢"];
    } else if (["season", "seasons"].includes(name)) {
        a = ["🌱", "🌸", "👙", "🍉", "🍂", "🍁", "⛄", "🌲"];
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
        a = ["🌝", "🈵"];
    } else if (["snow", "snows", "snowing", "snowed", "snowy"].includes(name)) {
        a = ["❄️", "☃️", "🌨️"];
    } else if (/^cloud/.test(name) == true) {
        a = ["☁️", "⛅", "🌥️"];
    } else if (getPOS("star").includes(name)) {
        a = ["⭐", "🌟", "🌠", "✴️"];
    } else if (["water"].includes(name) || name == "wet") {
        a = ["💧", "🌊", "🚰", "💦"];
    } else if (["drinking", "potable", "drinkable"].includes(name)) {
        a = ["🚰"];
    } else if (getPOS("drying").concat(["dries"]).includes(name)) {
        a = ["🏜️"];
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
    } else if (["everything", "universe", "all"].includes(name)) {
        a = ["🌌"];
    } else if (getPOS("hug").concat(getPOS("embraced")).includes(name)) {
        a = ["🫂"];
    } else if (/^evil/.test(name) == true || /^demon/.test(name) == true) {
        a = ["😈", "👿"];
    } else if (name == "a") {
        a = ["🅰️"];
    } else if (name == "o") {
        a = ["🅾️"];
    } else if (name == "z") {
        a = ["💤"];
    } else if (["this", "these", "famous", "presentation", "presentations", "presented", "ppt"].includes(name)) {
        a = ["💁"];
    } else if (["those", "that", "directions", "direction"].concat(getPOS("direct")).includes(name)) {
        a = ["👉"];
    } else if (["of", "about"].includes(name)) {
        a = ["➡️"];
    } else if (name == "off") {
        a = ["📴"];
    } else if (getPOS("bleed").includes(name) || name == "blood") {
        a = ["🩸"];
    } else if (
        ["i", "im", "me", "myself", "yo", "you", "your", "youre", "yourself"].includes(name) ||
        getPOS("face").concat(getPOS("smile")).includes(name)
    ) {
        a = ["😀", "😃", "😄", "🙂", "😊"];
    } else if (/^grandm/.test(name) == true || name == "maam") {
        a = ["👵"];
    } else if (
        name.includes("grandf") ||
        name.includes("grandp") ||
        name == "sir"
    ) {
        a = ["👴"];
    } else if (["she", "her", "mother", "mom", "mommy", "ma",
            "aunt", "aunts", "auntie", "sister", "sisters", "sis",
            "gal", "woman", "ms", "mrs", "wife", "wives"
        ].includes(name)) {
        a = ["👩", "💁‍♀️"];
    } else if (["he", "him", "father", "dad", "daddy",
            "uncle", "uncles", "brother", "brothers", "bro",
            "dude", "guy", "guys", "man", "mr", "husband", "husbands"
        ].includes(name)) {
        a = ["👨", "🧔", "💁‍♂️"];
    } else if (name == "men") {
        a = ["👬", "👨‍👨‍👦‍👦"];
    } else if (name == "women") {
        a = ["👭", "👩‍👩‍👧‍👧"];
    } else if (getPOS("boy").concat(getPOS("son")).includes(name)) {
        a = ["👦"];
    } else if (getPOS("girl").concat(getPOS("daughter")).includes(name)) {
        a = ["👧"];
    } else if (["young", "younger", "childhood"].includes(name)) {
        a = ["👧", "👦", "🧒"];
    } else if (
        ["shoulders", "bust", "person", "other", "anyone", "someone", "somebody", "personal", "who", "whom", "individual", "oneself", "being"]
        .concat(getPOS("head")).includes(name)) {
        a = ["👤"];
    } else if (
        [
            "we", "us", "they", "them", "families", "people", "group", "groups", "individuals", "crowd",
            "member", "members", "others", "team", "teams", "everyone", "everybody", "household", "public"
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
    } else if (getPOS("teach").concat(getPOS("educate")).includes(name) || ["presenter", "education", "educator", "prof", "professor", "professors"].includes(name)) {
        a = ["🧑‍🏫", "🏫"];
    } else if (["idol", "idols", "celeb", "celebrity", "rock"].includes(name)) {
        a = ["🧑‍🎤"];
    } else if (["city", "cities", "urban", "cityscape", "buildings"].includes(name)) {
        a = ["🌃", "🏙️", "🌆", "🏢", "🏬"];
    } else if (
        ["sick", "pain", "painful", "disease", "diseases", "unwell", "ache", "aches"].includes(name) ||
        name.includes("hurt")
    ) {
        a = ["😷", "🤒", "🤢", "🤮", "🤧", "🤕"];
    } else if (
        getPOS("want")
        .concat.apply(getPOS("want"), [getPOS("wish"), getPOS("hope")])
        .includes(name) || ["desperate", "wanna", "hopefully", "hopeful", "wishful"].includes(name)
    ) {
        a = ["🙏", "🥺"];
    } else if (["health", "medical"].concat(getPOS("healing")).includes(name)) {
        a = ["🧑‍⚕️", "🩺", "💉"];
    } else if (["chai", "tea"].includes(name)) {
        a = ["🫖", "🍵", "🧋"];
    } else if (["coffee", "starbucks", "cafe"].includes(name)) {
        a = ["☕"];
    } else if (["glass", "cup", "cups"].includes(name)) {
        a = ["🥛", "🥃", "🍷", "🍸"];
    } else if (["latte", "cappuccino"].includes(name)) {
        a = ["☕🥛"];
    } else if (getPOS("food").includes(name)) {
        a = ["🍞", "🥯", "🥞", "🍖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍳", "🥘", "🥗", "🍱", "🍛", "🍜", "🍝", "🍚"];
    } else if (name == "rice") {
        a = ["🍚", "🍘", "🍙", "🌾"];
    } else if (getPOS("cake").includes(name)) {
        a = ["🎂", "🍰", "🧁"];
    } else if (name == "pie") {
        a = ["🥧"];
    } else if (name.includes("pumpkin")) {
        a = ["🎃"];
    } else if (getPOS("smoke").concat(["unhealthy"]).includes(name)) {
        a = ["🚬"];
    } else if (name == "no smoking") {
        a = ["🚭"];
    } else if (getPOS("mouse").includes(name)) {
        a = ["🐭", "🐁", "🐀"];
    } else if (["dog", "puppy", "dogs", "puppies"].includes(name)) {
        a = ["🐶", "🐕", "🦮", "🐕‍🦺", "🐩"];
    } else if (["cat", "cats", "kitty", "kittens", "kitten"].includes(name)) {
        a = ["😺", "😸", "😹", "😻", "😼", "😽", "😿", "😾", "🐱", "🐈", "🐈‍⬛"];
    } else if (["lamb", "mutton", "sheep"].includes(name)) {
        a = ["🐑", "🐏"];
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
        ["must", "should", "can", "ought", "strong", "power", "powerful", "respoisible", "responsibility", "responsibilities"].concat(getPOS("needs")).includes(name)
    ) {
        a = ["💪", "🦾"];
    } else if (
        getPOS("love")
        .concat.apply(getPOS("love"), [getPOS("like"), getPOS("beloved"), getPOS("adore")])
        .includes(name) || ["care", "cares", "caring", "lovely", "prefer", "preference", "favorite", "hearts", "heart"].includes(name)
    ) {
        a = ["💖", "💗", "💕", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];
    } else if (
        getPOS("hate")
        .concat(getPOS("despise"))
        .includes(name)
    ) {
        a = ["💔", "😡"];
    } else if (getPOS("broke").concat.apply(getPOS("broke"), [getPOS("split")])
        .includes(name) || name == "heartbroken") {
        a = ["💔"];
    } else if (["money", "payment", "fee", "fees", "rent"].includes(name) || getPOS("price").concat(getPOS("cost")).includes(name) || ["cash"].concat(getPOS("pay")).includes(name)) {
        a = ["💸", "💴", "💵", "💷"];
    } else if (["cage", "cages", "jail"].includes(name) ||
        getPOS("captured").includes(name) || /^prison/.test(name) == true) {
        a = ["皿"];
    } else if (getPOS("make").concat(getPOS("create")).includes(name)) {
        a = ["🪡", "🧶", "🧵"];
    } else if (getPOS("load").concat.apply(getPOS("load"), [getPOS("pogress"), getPOS("pocess"), ["during", "progression"]]).includes(name)) {
        a = ["⏳"];
    } else if (getPOS("moved").concat(getPOS("shake")).includes(name) || ["movement", "movements", "dancing"].includes(name)) {
        a = ["🕺", "💃"];
    } else if (["body", "bodies"].concat(getPOS("stay")).includes(name)) {
        a = ["🧍"];
    } else if (getPOS("hear").concat(getPOS("listen")).includes(name)) {
        a = ["👂", "🦻"];
    } else if (getPOS("tell").concat.apply(getPOS("tell"), [
            ["announcement"],
            getPOS("speak"), getPOS("say"), getPOS("interviewed"), getPOS("announced"), getPOS("chat"), getPOS("talk"), getPOS("report")
        ]).includes(name)) {
        a = ["🗣️", "👄"];
    } else if (name == "mean") {
        a = ["📝", "😏"];
    } else if (getPOS("call").includes(name)) {
        a = ["📲", "📞", "🤙"];
    } else if (getPOS("look").concat.apply(getPOS("look"), [getPOS("watch"), getPOS("see"), getPOS("observe"), getPOS("stare")])
        .includes(name)) {
        a = ["👁️", "👀"];
    } else if (getPOS("smell").includes(name)) {
        a = ["👃"];
    } else if (["hand", "hands"].includes(name)) {
        a = ["👋", "✊", "✌️", "✋", "🤙"];
    } else if (["but"].includes(name)) {
        a = ["✋"];
    } else if (["too"].includes(name)) {
        a = ["✌️"];
    } else if (getPOS("taste").concat(["tastes", "childish", "goofiness", "goofy", "kiddings"]).includes(name) || getPOS("joking").includes(name)) {
        a = ["👅"];
    } else if (["lips", "lip", "chu"].includes(name)) {
        a = ["👄", "💋"];
    } else if (["tooth"].includes(name)) {
        a = ["🦷"];
    } else if (getPOS("opens").includes(name)) {
        a = ["👐", "📖", "📭"];
    } else if (getPOS("close").includes(name)) {
        a = ["📕", "📪"];
    } else if (["flag", "flags"].includes(name)) {
        a = ["🏁", "🚩", "🏴", "🏳️"];
    } else if (["neck", "necks"].includes(name)) {
        a = ["🧣"];
    } else if (getPOS("tie").includes(name)) {
        a = ["👔"];
    } else if (["business"].concat(getPOS("work")).includes(name)) {
        a = ["👔", "👨‍💼", "👩‍💼", "🧑‍💼", "🏢"];
    } else if (getPOS("retired").concat(["retirement"]).includes(name)) {
        a = ["🚶🏢"];
    } else if (getPOS("hire").includes(name)) {
        a = ["🏢🏃"];
    } else if (name.includes("invisib") || getPOS("ignore").concat(getPOS("unsee")).includes(name)) {
        a = ["❌👁️"];
    } else if (["lover", "lovers", "romance", "romantic", "sweetheart", "sweethearts"].includes(name)) {
        a = ["💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨"];
    } else if (["parent", "parents", "partner", "partners", "partnership", "friend", "friends", "friendship", "mate", "mates", "pal", "with", "companion", "together", "roommate", "roommates", "roomie", "roomies"]
        .includes(name) || getPOS("accompany").includes(name)) {
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
    } else if (["small", "smaller", "little", "tiny", "mini"].includes(name)) {
        a = ["▪️", "▫️", "🤏"];
    } else if (getPOS("apple").includes(name)) {
        a = ["🍎", "🍏"];
    } else if (getPOS("eat").concat(getPOS("dine")).includes(name) || ["recipes", "recipe", "meal", "meals", "cuisine", "diet", "diets", "bite", "bites"].includes(name) ||
        name.includes("dinner")) {
        a = ["🍽️", "🍴"];
    } else if (getPOS("cook").includes(name)) {
        a = ["🧑‍🍳", "🍳", "🥘"];
    } else if (name.includes("breakfast") || name.includes("brunch")) {
        a = ["🍽️", "🍴", "🥓", "🥞", "🍞", "🍳", "🥛"];
    } else if (name.includes("lunch")) {
        a = ["🍽️", "🍴", "🥪", "🌯", "🧃", "🥤", "🍱", "🍔"];
    } else if (["burger", "burgers"].includes(name)) {
        a = ["🍔"];
    } else if (/^veget/.test(name) == true || name == "vegan" || ["veggie", "healthier", "healthy"].includes(name)) {
        a = ["🥗", "🥦", "🧅", "🥕", "🍅", "🥒"];
    } else if (/^fruit/.test(name) == true) {
        a = ["🥝", "🍓", "🍎", "🍊", "🍑", "🍍", "🍒"];
    } else if (name == "blueberry") {
        a = ["🫐"];
    } else if (name == "cherry") {
        a = ["🍒"];
    } else if (["nature", "natural"].includes(name)) {
        a = ["🌲", "🌳", "🌿", "🌿", "🏞️"];
    } else if (["flowers", "flower", "florist", "florists"].includes(name)) {
        a = ["💐", "🌹", "🌺", "🌻"];
    } else if (getPOS("blossomed").concat(["blossoms"]).includes(name)) {
        a = ["🌸"];
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
    } else if (name.includes("animal") || ["zoo", "zoology", "creature", "creatures"].includes(name)) {
        a = ["🐕", "🐈", "🐒", "🦌", "🐅", "🐎", "🐄", "🐖"];
    } else if (getPOS("pet").includes(name)) {
        a = ["🐶", "🐕", "🐩", "🐱", "🐈", "🐈‍⬛", "🐹", "🐰"];
    } else if (["dino", "dinosaurs", "dinosaur"].includes(name)) {
        a = ["🦕", "🦖"];
    } else if (name.includes("fish")) {
        a = ["🐟", "🎣", "🐠", "🐡", "🦈"];
    } else if (["sweet potato", "sweet potatoes", "yam"].includes(name)) {
        a = ["🍠"];
    } else if (["sweet"].includes(name) || name.includes("dessert")) {
        a = ["🍦", "🍧", "🍨", "🍩", "🍪", "🍰"];
    } else if (name == "juice") {
        a = ["🧃"];
    } else if (["alcohol", "alcoholic", "drinks", "bar", "bars"].includes(name)) {
        a = ["🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃"];
    } else if (["cocktail", "cocktails", "mixology"].includes(name)) {
        a = ["🍸", "🍹"];
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
        .concat.apply(getPOS("win"), [getPOS("suceed"), getPOS("prized"), ["winner", "winners"]])
        .includes(name) ||
        getPOS("success").includes(name)
    ) {
        a = ["🏆", "🥇"];
    } else if (getPOS("lose").concat(["loser", "failure", "failures"]).includes(name) || getPOS("failed").includes(name)) {
        a = ["🏳️"];
    } else if (["diamond", "diamonds", "expensive", "precious"].includes(name) || /^jewel/.test(name) == true) {
        a = ["💎", "💍"];
    } else if (["river", "rivers", "landscape", "environment", "environments"].includes(name)) {
        a = ["🏞️"];
    } else if (["sea", "ocean"].includes(name)) {
        a = ["🏝️"];
    } else if (getPOS("light").includes(name)) {
        a = ["🕯️", "💡"];
    } else if (["name", "names", "title", "titles", "titled", "license"].includes(name)) {
        a = ["📇", "📛"];
    } else if (name.includes("thousand")) {
        a = ["1️⃣0️⃣0️⃣0️⃣"];
    } else if (["game", "games", "gaming"].includes(name)) {
        a = ["🎮", "🎲", "🕹️"];
    } else if (getPOS("grocery").includes(name)) {
        a = ["🛒"];
    } else if (["present", "presents"].includes(name)) {
        a = ["🎁"];
    } else if (getPOS("box").includes(name)) {
        a = ["📦", "🗳️", "🗃️", "🎁"];
    } else if (["robot", "robots", "bot", "bots", "android", "siri", "alexa", "chatbot", "devices", "device"].includes(name) || name.includes("machine")) {
        a = ["🤖"];
    } else if (getPOS("computer").includes(name)) {
        a = ["🖥️", "💻"];
    } else if (["ldybug", "ldybugs"].includes(name)) {
        a = ["🐞"];
    } else if (/^debug/.test(name) == true) {
        a = ["❌🐛"];
    } else if (["bee", "bees", "pollination", "pollinator"].concat(getPOS("buzzing")).includes(name)) {
        a = ["🐝"];
    } else if (["germ", "germs", "bacteria"].includes(name)) {
        a = ["🦠"];
    } else if (["random", "randomly", "randomized", "randomizes", "randomize", "shuffling"].includes(name)) {
        a = ["🔀"];
    } else if (getPOS("choose").concat(getPOS("select")).includes(name) || ["choice", "choices", "decision", "decisions"].concat(getPOS("decides")).includes(name)) {
        a = ["🔘", "🤔", "🧐"];
    } else if (["infinite", "eternity", "endless", "forever", "mobius"].includes(name)) {
        a = ["♾️"];
    } else if (["problems", "problem", "issue", "issues"].includes(name) || name.includes("trouble")) {
        a = ["⚠️", "😞"];
    } else if (["dangerous", "warning", "warns"].includes(name)) {
        a = ["⚠️"];
    } else if (["urgent", "urgency"].includes(name) || /^emergen/.test(name) == true) {
        a = ["🚨"];
    } else if (["stress", "stressful", "stressed"].includes(name) || /^pressur/.test(name) == true) {
        a = ["😫", "🤢", "😵", "🤯", "😟"];
    } else if (getPOS("gets")
        .concat.apply(getPOS("gets"), [getPOS("obtain"), getPOS("attain")])
        .includes(name)) {
        a = ["🉐"];
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
    } else if (["job", "jobs", "staff", "staffs", "employs", "employer", "employers", "employee", "employees"].concat(getPOS("employing")).includes(name)) {
        a = ["🧑‍💼", "👨‍💼", "👩‍💼"];
    } else if (/^perform/.test(name) == true || ["duality", "theater", "theaters", "character", "characters", "persona"].concat(getPOS("change")).includes(name) ||
        getPOS("act").concat(["stage", "stages", "actor", "actors", "actress", "actresses"]).includes(name)) {
        a = ["🎭"];
    } else if (["art", "arts", "creative", "creativity"].includes(name)) {
        a = ["🎨", "🎭", "🖋️", "🎼"];
    } else if (/^paint/.test(name) == true) {
        a = ["🎨", "🖼️"];
    } else if (/^color/.test(name) == true || getPOS("design").includes(name)) {
        a = ["🎨"];
    } else if (["galleries", "gallery"].includes(name)) {
        a = ["🖼️"];
    } else if (getPOS("draw").includes(name)) {
        a = ["✏️", "🖊️", "🖍️", "〰️"];
    } else if (name == "fountain pen") {
        a = ["🖋️"];
    } else if (getPOS("sing").includes(name)) {
        a = ["🗣️🎶", "🗣️🎵", "🎤🎵", "🎤🎶"];
    } else if (
        ["music", "musician", "musical"].includes(name) || ["carol", "carols", "song", "songs"].concat(getPOS("sounding")).includes(name)) {
        a = ["🎼", "🎵", "🎶"];
    } else if (["piano", "pianist", "pinaists"].includes(name)) {
        a = ["🎹"];
    } else if (name.includes("movie")) {
        a = ["🎥", "🎞️", "🍿", "🎬"];
    } else if (["noise", "noisy", "loud", "loudly", "speaker", "speakers"].includes(name)) {
        a = ["🔊"];
    } else if (getPOS("muted").concat(["silence", "silent", "quiet"]).includes(name)) {
        a = ["🔇", "🤐", "🤫"];
    } else if (["instrument", "instruments", "concert", "concerts", "recital", "recital"].includes(name)) {
        a = ["🎺", "🎻", "🎸", "🪕", "🎷", "🥁", "🎹"];
    } else if (getPOS("experiment").concat(["chemistry", "biology"]).includes(name) || ["science", "scientific"].includes(name)) {
        a = ["⚗️", "🧪", "🧫", "🔬"];
    } else if (name.includes("christmas")) {
        a = ["👼", "🎅", "🤶", "🎄", "🎁", "🔔", "⛄", "🌟", "🦌", "❄️"];
    } else if (["decorations", "decoration", "treat", "treats"].concat(getPOS("decorate")).includes(name)) {
        a = ["🏵", "🎀", "❣️", "🎈", "✨", "🌟", "🪅", "💐"];
    } else if (name == "hanukkah") {
        a = ["🥞", "🕍", "🎁", "🕯️", "🛐", "✡️", "🕎", "🇮🇱"];
    } else if (name.includes("thanksgiving")) {
        a = ["🦃", "🍂", "🍽", "🥧", "👨‍👩‍👧‍👦", "🍗"];
    } else if (getPOS("graduate").includes(name) || name == "graduation") {
        a = ["🧑‍🎓", "💐", "🍾", "🏫", "🎉", "🎓"];
    } else if (["location", "locations", "points", "point", "here", "pins", "pin", "pinned"].includes(name)) {
        a = ["📌", "📍"];
    } else if (name.includes("religion") || ["god", "gods", "religious", "devoted", "faithful"].includes(name)) {
        a = ["⛪", "🕌", "🕍", "🕋", "⛩"];
    } else if (["cross", "crosses"].includes(name)) {
        a = ["✝️", "☦️"];
    } else if (["place", "places", "placed", "placing", "site", "sites", "area", "areas"].includes(name)) {
        a = ["🏟", "🏛", "🏠", "🏢", "🏫", "⛪"];
    } else if (["road", "roads", "street", "streets", "ways", "way"].includes(name)) {
        a = ["🛣️", "🛤️"];
    } else if (getPOS("live").concat(getPOS("home")).includes(name)) {
        a = ["🏠"];
    } else if (getPOS("kill").concat(getPOS("murder")).includes(name)) {
        a = ["☠️"];
    } else if (["market", "markets", "mart", "marts", "deli", "delicatessen"].includes(name)) {
        a = ["🏪"];
    } else if (["castle", "castles", "palace", "palaces"].includes(name)) {
        a = ["🏯", "🏰"];
    } else if (getPOS("room").concat(["furniture"]).includes(name)) {
        a = ["🛋️", "🪑", "🛏️"];
    } else if (["die", "dies", "dead", "death", "funeral", "funerals"].includes(name)) {
        a = ["⚰️", "⚱️", "💀", "🪦"];
    } else if (getPOS("war").concat(getPOS("fight")).includes(name) || getPOS("attack").includes(name)) {
        a = ["🗡️", "⚔️", "🔫", "💣", "☢️", "🔥"];
    } else if (["explosion", "dynamite"].concat(getPOS("exploded")).includes(name)) {
        a = ["☄️", "🎇", "🧨"];
    } else if (/^soul/.test(name) == true || /^spirit/.test(name) == true || ["mind", "minds", "mental"].includes(name)) {
        a = ["😇"];
    } else if (/^congrat/.test(name) == true || getPOS("invite").includes(name) || ["anniversary", "anniversaries", "surprise", "surprises", "partying"].concat(getPOS("celebrate")).includes(name)) {
        a = ["👏", "🎉", "🎊", "🎆", "🍾", "🥳"];
    } else if (["surprised", "surprising", "surprisingly"].includes(name)) {
        a = ["😲", "😳", "🤩"];
    } else if (getPOS("clapping").includes(name)) {
        a = ["👏"];
    } else if (["idea", "tip", "tips", "ideas", "eureka", "solution", "solutions", "solves", "invention", "inventions", "creation", "creations"].concat(getPOS("invent")).includes(name) || getPOS("solving").includes(name)) {
        a = ["💡"];
    } else if (getPOS("holiday").includes(name)) {
        a = ["🎄", "🎃", "🎇", "🍀", "🕎", "🏖️"];
    } else if (["vacation", "vacance", "trip", "trips", "traveling"].includes(name) || getPOS("travel").includes(name)) {
        a = ["🌴", "🏖️", "✈️", "⛱️", "🧳", "🗺️"];
    } else if (getPOS("relate").includes(name) || /^relation/.test(name) == true) {
        a = ["🪢", "🪡"];
    } else if (["long", "tall"].includes(name)) {
        a = ["🪘", "🦒"];
    } else if (["short", "shorts"].includes(name)) {
        a = ["🩳"];
    } else if (["flat", "flats"].includes(name)) {
        a = ["🫓", "🥿"];
    } else if (getPOS("day").includes(name)) {
        a = ["☀️", "🌞"];
    } else if (getPOS("night").includes(name) || ["eve", "late", "tonight"].includes(name) || /^dark/.test(name) == true) {
        a = ["🎑", "🌃", "🌉", "🌌"];
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
    } else if (getPOS("year").includes(name) || ["weeks", "week"].includes(name)) {
        a = ["🗓"];
    } else if (getPOS("date").concat(getPOS("scheduling")).includes(name) || ["today", "tommorow", "yesterday", "schedule", "appointment", "appointments"].includes(name)) {
        a = ["📅"];
    } else if (["weekend", "weekends", "relaxation"].concat(getPOS("relax")).includes(name)) {
        a = ["🧘", "🛀", "🛌", "📚", "☕"];
    } else if (
        [
            "time", "minute", "minutes", "second", "seconds", "hour", "hours", "when"
        ].includes(name) || ["moment", "moments"].includes(name)
    ) {
        a = ["⌛", "⌚", "⏰", "⏱️", "⏲️", "🕰️"];
    } else if (["hobbies", "hobby", "leisure"].includes(name)) {
        a = ["🚵", "🚣", "🏌️", "🎨", "🧶", "🍳", "🎥", "📚"];
    } else if (getPOS("world").concat(["global", "universal"]).includes(name)) {
        a = ["🌍", "🌎", "🌏", "🌐", "🗺️"];
    } else if (["zone", "zones"].includes(name)) {
        a = ["🌐"];
    } else if (/^secret/.test(name) == true || ["password", "password", "confidential", "confidentials", "private"].includes(name)) {
        a = ["㊙️", "🤐", "🤫", "🙊", "🔒"];
    } else if (["key", "keys"].includes(name)) {
        a = ["🔑", "🗝️"];
    } else if (["cosmetic", "cosmetics", "makeup"].includes(name)) {
        a = ["💄"];
    } else if (name == "nail") {
        a = ["💅"];
    } else if (getPOS("wed").concat(getPOS("marry").includes(name)).includes(name) || ["marriage", "marriages"].includes(name)) {
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
    } else if (name.includes("author") || name.includes("writer") || ["poets", "poet"].includes(name)) {
        a = ["🧑✍️", "🧑🖋️"];
    } else if (
        ["goodbye", "hello", "bye", "farewell", "hi", "howdy", "greeting", "greetings", "welcomes"]
        .concat(getPOS("welcomed")).includes(name)) {
        a = ["👋", "😉"];
    } else if (getPOS("meet").includes(name) || name == "meetings") {
        a = ["🤝"];
    } else if (
        getPOS("realize").concat(getPOS("awake")).includes(name) || ["realization", "aware", "stunned"].includes(name)
    ) {
        a = ["😳"];
    } else if (
        getPOS("feel")
        .concat.apply(getPOS("feel"), [getPOS("regard"), getPOS("understand"), getPOS("know")])
        .includes(name) || ["mood", "moods"].includes(name)
    ) {
        a = ["😌"];
    } else if (getPOS("disregard").concat.apply(getPOS("disregard"), [getPOS("disagree"), getPOS("disapprove")]).includes(name) || name.includes("disagree")) {
        a = ["❌😌"];
    } else if (["glasses"].includes(name)) {
        a = ["👓"];
    } else if (name == "door") {
        a = ["🚪"];
    } else if (["knife", "knives"].includes(name)) {
        a = ["🔪"];
    } else if (getPOS("frees").concat(["freely"]).includes(name)) {
        a = ["🆓"];
    } else if (["bring", "bringing", "brought", "brings", "bag", "bags"].includes(name)) {
        a = ["👜", "👝", "🎒", "🛍️"];
    } else if (getPOS("save").concat(["stored"]).includes(name)) {
        a = ["💾", "💿"];
    } else if (getPOS("copy").concat(["paste", "pasted"]).includes(name)) {
        a = ["📋"];
    } else if (getPOS("constructed").concat(["construction"]).includes(name)) {
        a = ["🏗"];
    } else if (getPOS("cut").includes(name)) {
        a = ["✂️"];
    } else if (["magicians", "wizard", "wizards", "sorcerer", "sorcerers", "magician", "magical", "magic"].includes(name)) {
        a = ["🎩", "🔮", "🪄"];
    } else if (["tv"].concat(getPOS("show")).includes(name)) {
        a = ["📺"];
    } else if (["car", "cars", "auto", "motor"].concat(getPOS("drive")).includes(name)) {
        a = ["🚗", "🚘", "🚖"];
    } else if (getPOS("ride").concat(["speed", "speedy"]).includes(name)) {
        a = ["🏇", "🚴", "🚗"];
    } else if (["choo", "train", "trains", "rail", "railroad"].includes(name)) {
        a = ["🚄", "🚅", "🚆"];
    } else if (["subway", "subways"].includes(name)) {
        a = ["🚇"];
    } else if (["delivery", "deliveries"].concat(getPOS("deliver")).includes(name)) {
        a = ["🛵", "🚛", "🚚"];
    } else if (["cycling", "bike", "bikes"].includes(name)) {
        a = ["🚲"];
    } else if (getPOS("prohibit").concat.apply(getPOS("prohibit"), [getPOS("forbid"), getPOS("ban"), getPOS("restrict")]).includes(name) || ["prohibition"].includes(name)) {
        a = ["🚫"];
    } else if (getPOS("block").concat(getPOS("limit")).includes(name)) {
        a = ["🚧"];
    } else if (getPOS("charge").concat(["energy", "energies"]).includes(name)) {
        a = ["🔋", "⛽"];
    } else if (getPOS("request").includes(name)) {
        a = ["🛎️"];
    } else if (["service"].includes(name)) {
        a = ["🐕‍🦺", "🛎️", "🧑‍💼"];
    } else if (getPOS("accept").concat(["acceptable"]).includes(name)) {
        a = ["🉑"];
    } else if (getPOS("sit").includes(name) || ["seats", "seated"].includes(name)) {
        a = ["💺", "🪑"];
    } else if (getPOS("cleaning").includes(name) || ["cleaner"].includes(name)) {
        a = ["🧹", "🪣", "🧽", "🚿", "🛁", "🧼"];
    } else if (getPOS("wash").includes(name)) {
        a = ["🚿", "🛁"];
    } else if (/^measur/.test(name) == true) {
        a = ["📏", "📐", "🌡️"];
    } else if (getPOS("set").concat(getPOS("fix")).includes(name) || getPOS("function").includes(name)) {
        a = ["⚙️"];
    } else if (["tool", "tools"].includes(name)) {
        a = ["🔧", "🪛", "🔨", "🪚", "✂️", "📏"];
    } else if (getPOS("wasting").concat(["wastes", "trash", "trashes"]).includes(name)) {
        a = ["🚮", "🗑️"];
    } else if (getPOS("clip").includes(name)) {
        a = ["📎", "🖇️"];
    } else if (name == "sock") {
        a = ["🧦"];
    } else if (["graph", "graphs", "graphic", "graphics"].includes(name)) {
        a = ["📈", "📉", "📊"]
    } else if (getPOS("find")
        .concat(getPOS("seek"))
        .includes(name) || getPOS("detect").concat.apply(getPOS("detect"), [getPOS("search"), getPOS("focused")]).includes(name) || ["finder"].includes(name)) {
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
    } else if (getPOS("wear").concat(getPOS("outfit")).includes(name) || /^cloth/.test(name) == true || name == "ootd") {
        a = ["🧥", "🥼", "👔", "👕", "👖", "🧥", "🧦", "👗", "🩳", "👚"];
    } else if (["future", "futuristic"].includes(name)) {
        a = ["🔭", "🤖", "🚀"];
    } else if (["shoe", "shoes"].includes(name)) {
        a = ["🩴", "👟", "👞", "🥾", "🥿", "👠", "👡"];
    } else if (["pump", "pumps", "heel", "heels"].includes(name)) {
        a = ["👠", "👡"];
    } else if (
        getPOS("faded").includes(name) || ["air", "obscure", "vague", "unclear"].includes(name)
    ) {
        a = ["🌫️"];
    } else if (getPOS("live").includes(name)) {
        a = ["🏠"];
    } else if (getPOS("help").includes(name)) {
        a = ["🆘", "🥺", "🙋"];
    } else if (getPOS("trapped").includes(name)) {
        a = ["🪤"];
    } else if (getPOS("step").concat(getPOS("go")).includes(name) ||
        getPOS("come").concat.apply(getPOS("come"), [getPOS("visit"), getPOS("strolling"), ["stroller", "strollers"]]).includes(name)) {
        a = ["🚶"];
    } else if (getPOS("enter").concat(getPOS("run")).includes(name) || getPOS("escaped").includes(name)) {
        a = ["🏃"];
    } else if (getPOS("reach")
        .concat(getPOS("challenge"))
        .includes(name)) {
        a = ["🧗"];
    } else if (getPOS("regretted").concat(getPOS("reject")).includes(name) || ["migraine", "headache", "rejection", "rejections"].includes(name)) {
        a = ["🤦"];
    } else if (["peace", "peaceful"].includes(name)) {
        a = ["☮️", "🕊️", "✌️"];
    } else if (["safe", "secure"].includes(name)) {
        a = ["🦺"]
    } else if (getPOS("start").concat(getPOS("begin")).includes(name) || ["ready"].includes(name)) {
        a = ["🏁"];
    } else if (["action", "actions", "director", "directors"].includes(name)) {
        a = ["🎬"];
    } else if (getPOS("turn").includes(name)) {
        a = ["↩️", "↪️"];
    } else if (getPOS("stop").includes(name)) {
        a = ["🛑", "⏹️", "🚷"];
    } else if (getPOS("pause").includes(name)) {
        a = ["⏸️"];
    } else if (getPOS("play").includes(name) || ["next", "forth", "forward"].includes(name)) {
        a = ["▶️", "⏯️"];
    } else if (getPOS("mistaking").concat(["mistakes"]).includes(name)) {
        a = ["🆖"];
    } else if (["status", "state", "condition", "conditions", "signal", "signals"].includes(name)) {
        a = ["📶"];
    } else if (getPOS("repeat").concat(getPOS("switch")).includes(name) || ["around", "constantly", "repeats", "habit", "habits", "habitual"].includes(name)) {
        a = ["🔁", "🔄"];
    } else if (name == "syn") {
        a = ["🔄"];
    } else if (getPOS("keep").concat(getPOS("continue")).includes(name) || ["continuation"].includes(name)) {
        a = ["🔂"];
    } else if (getPOS("ejected").concat(["ejection"]).includes(name))
        a = ["⏏️"];
    else if (getPOS("record").concat(["recordings"]).includes(name)) {
        a = ["⏺️"];
    } else if (getPOS("grab").concat(getPOS("seize")).includes(name)) {
        a = ["🤛", "🤜", "✊"];
    } else if (name == "handed" || getPOS("give").concat.apply(getPOS("give"), [getPOS("receive"), getPOS("offer")]).includes(name)) {
        a = ["🤲"];
    } else if (/^protect/.test(name) == true) {
        a = ["🛡️"];
    } else if (["bored", "boring", "sleepy"].includes(name)) {
        a = ["🥱", "😞"];
    } else if (getPOS("sleep").includes(name) || getPOS("nap").includes(name)) {
        a = ["😴", "💤", "🛌", "🥱"];
    } else if (
        ["good", "simple", "easy", "yes", "yeah", "yep", "better", "alright", "great", "well", "okay", "ok", "okie", "awesome", "fine", "nice", "glad"].includes(name) ||
        /^agree/.test(name) == true) {
        a = ["👍", "👌"];
    } else if (["perfect", "100", "results", "grade", "grades", "score", "scores", "scored", "scoring"].concat(getPOS("resulted")).includes(name) || getPOS("pass").includes(name)) {
        a = ["💯"];
    } else if (["bad", "terrible", "boo", "awful", "sucks"].includes(name)) {
        a = ["👎"];
    } else if (/^luck/.test(name) == true) {
        a = ["🍀"];
    } else if (name == "life") {
        a = ["⏳", "🌱", "🫀"];
    } else if (getPOS("rotate").includes(name) || ["swap", "swapping", "cycle", "cycles", "rotation"].includes(name)) {
        a = ["💞", "💫", "🔄"];
    } else if (["right", "ahead", "after"].includes(name)) {
        a = ["👉", "➡️", "↪️"];
    } else if (["left", "before", "backward", "previous", "past"].includes(name)) {
        a = ["👈", "⬅️", "↩️"];
    } else if (name == "up") {
        a = ["👆", "☝️", "⬆️", "🔼", "⏫", "🆙"];
    } else if (name == "down") {
        a = ["👇", "⬇️", "⤵️", "🔽", "⏬"];
    } else if (
        /^happie/.test(name) == true || getPOS("satisfing").includes(name) ||
        getPOS("enjoy").concat(getPOS("thank")).includes(name) || ["happy", "satisfies", "kind", "joy", "joyful", "merry"].includes(name)
    ) {
        a = ["😃", "😄", "😁", "😆", "🥰", "😊"];
    } else if (getPOS("winking").includes(name) || name == "winks") {
        a = ["😉"];
    } else if (["emoji", "emojis", "emoticon", "emoticons"].includes(name)) {
        a = ["😂", "😭", "🥺", "🤣", "❤️", "✨", "😍", "🙏", "😊", "🥰"];
    } else if (["hungry", "delicious", "starving"].includes(name)) {
        a = ["😋", "🤤"];
    } else if (["tear", "sad", "sadness", "depressing", "lonely", "depressed", "sorrow", "sorry"].concat(getPOS("miss")).includes(name) || getPOS("weep").concat(getPOS("apologize")).includes(name)) {
        a = ["😢", "😭", "😥", "😿"];
    } else if (getPOS("envy").concat(["jealous"]).includes(name)) {
        a = ["😒", "😑", "🥲", "😖"];
    } else if (getPOS("blushing").concat(["ashamed", "shameful", "embarrassment", "embarrassed", "shy", "bashful", "embarrassing"]).includes(name)) {
        a = ["😳"];
    } else if (["fear", "fears", "fearful", "afraid", "anxious", "anxiety"].includes(name)) {
        a = ["😨", "😖", "😣"];
    } else if (["serious", "seriously"].includes(name)) {
        a = ["😐"];
    } else if (["annoying", "annoyed", "difficult", "complicated", "harder", "hardest", "hard", "confusion"].includes(name) || getPOS("confusing").includes(name)) {
        a = ["😩", "😖", "😣", "😓"];
    } else if (getPOS("doubt").includes(name) || ["doubtful", "suspicous", "suspicion", "doubts"].includes(name)) {
        a = ["🤨", "🤔", "🧐"];
    } else if (getPOS("assume").concat(getPOS("guess")).includes(name) || ["assumption", "assumptions"].includes(name)) {
        a = ["🤔", "🧐"];
    } else if (getPOS("memorize").concat(getPOS("remember")).includes(name) || ["memory", "memories", "remembrance"].includes(name)) {
        a = ["😔", "😌"];
    } else if (getPOS("comfort").includes(name) || ["comfortable"].includes(name)) {
        a = ["🛌", "🧸", "😀", "🙂"];
    } else if (["smart", "nerdy", "clever"].includes(name)) {
        a = ["🤓"];
    } else if (getPOS("rise").includes(name) || getPOS("improve").includes(name)) {
        a = ["⤴️", "📈"];
    } else if (["outstanding", "marvelous", "superb", "super", "excellent",
            "amazing", "woderful", "magnificent", "beautiful", "fantastic",
            "fabulous", "charming", "terrific", "best", "favorite", "favorites"
        ].includes(name)) {
        a = ["✨", "💯", "🌈", "🥰"];
    } else if (["pretty", "prettier", "genuine", "handsome", "unique", "authentic"].includes(name)) {
        a = ["✨"];
    } else if (getPOS("mail").concat(getPOS("messaging")).includes(name) || ["letter", "letters", "invitation", "invitations"].includes(name)) {
        a = ["✉️"];
    } else if (name == "typing") {
        a = ["💬"];
    } else if (getPOS("typed").includes(name)) {
        a = ["⌨️"];
    } else if (name == "texting") {
        a = ["📱"];
    } else if (["word", "words", "text", "texted", "texts"].includes(name)) {
        a = ["📝", "🔠", "🔡", "🔤"];
    } else if (["golden", "gold", "first"].includes(name)) {
        a = ["🥇"];
    } else if (["silver", "second"].includes(name)) {
        a = ["🥈"];
    } else if (["bronze", "third"].includes(name)) {
        a = ["🥉"];
    } else if (getPOS("numbering").includes(name)) {
        a = ["🔢"];
    } else if (["one"].includes(name)) {
        a = ["1️⃣", "☝️", "👤"];
    } else if (["1"].includes(name)) {
        a = ["1️⃣"];
    } else if (["two", "second"].includes(name)) {
        a = ["2️⃣"];
    } else if (["four", "fourth"].includes(name)) {
        a = ["4️⃣"];
    } else if (["six"].includes(name)) {
        a = ["6️⃣"];
    } else if (["eight", "8"].includes(name)) {
        a = ["8️⃣"];
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
    } else if (name == "-" || getPOS("remove").concat.apply(getPOS("remove"), [getPOS("delete"), getPOS("erased")]).includes(name)) {
        a = ["➖"];
    } else if (getPOS("multiplied").includes(name)) {
        a = ["✖️"];
    } else if (getPOS("divides").concat(["division", "divisions"]).includes(name)) {
        a = ["➗"];
    } else if (["justice", "fair"].includes(name) || getPOS("scale").includes(name)) {
        a = ["⚖️", "♎"];
    } else if (["weight", "weighted", "weighing"].includes(name)) {
        a = ["⚖️"];
    } else if (["weightlifting", "physical", "heavy", "gym", "gyms", "training"].includes(name) || name.includes("bodybuild")) {
        a = ["🏋️"];
    } else if (["oh"].includes(name)) {
        a = ["😲", "😮", "🅾️"];
    } else if (getPOS("scare").concat.apply(getPOS("scare"), [
            ["omg"], getPOS("panic"), getPOS("shock")
        ]).includes(name) || name == "scary") {
        a = ["🥶", "😱", "🙀"];
    } else if (["mad", "angry", "furious", "upset", "unhappy"].includes(name)) {
        a = ["😠", "😡", "💢", "😤"];
    } else if (["cazy", "isane", "isanity", "caziness"].includes(name)) {
        a = ["🤪", "🤯"];
    } else if (["patient", "patience", "calm"].includes(name)) {
        a = ["😐"];
    } else if (["plz", "please", "excuse"].includes(name)) {
        a = ["🙏", "🙋", "🙇", "🥺"];
    } else if (["huh", "whatever", "what"].includes(name)) {
        a = ["🤷"];
    } else if (name == "skin") {
        a = ["🏻", "🏼", "🏽", "🏾", "🏿"];
    } else if (getPOS("dop").includes(name)) {
        a = ["🩸", "💧", "☔", "💦"];
    } else if (getPOS("isolated").concat(["quarantine", "quarantines", "quarantined", "quarantining"]).includes(name)) {
        a = ["🏝️", "皿"];
    } else if (name.includes("covid") || name.includes("corona")) {
        a = ["🦠", "🏥", "😷", "🤒"];
    } else if (["toilet", "bathroom", "bathrooms", "restroom", "loo"].includes(name)) {
        a = ["🚽", "🧻", "🚻", "🚾", "🚹", "🚺"];
    } else if (["erotic", "porn", "pornography", "pornhub"].includes(name)) {
        a = ["🔞"];
    } else if (name == "bubble tea") {
        a = ["🧋"]
    } else if (["tech", "technology", "technologies"].includes(name)) {
        a = ["💻"];
    } else if (getPOS("programmed").concat(["program", "programs"]).includes(name) ||
        getPOS("code").includes(name)) {
        a = ["⌨️", "💻"];
    } else if (["election", "vote", "votes", "voting", "elected"].includes(name)) {
        a = ["🗳️"];
    } else if (getPOS("pollute").concat(["pollution", "pollutions", "contamination", "contaminated"]).includes(name)) {
        a = ["🏭"];
    } else if (getPOS("reflect").concat(["mirroring", "reflection", "reflections"]).includes(name)) {
        a = ["🪞"];
    } else if (getPOS("parking").concat(["p"]).includes(name)) {
        a = ["🅿️"];
    } else if (["curse", "cursing", "cursed", "pofanity", "offensive", "blasphemous", "aggressive", "swearing", "fuck", "shit"].includes(name)) {
        a = ["🤬"];
    } else if (name == "english") {
        a = ["🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇬🇧"];
    } else if (["china", "chinese"].includes(name)) {
        a = ["🇨🇳"];
    } else if (name.includes("japan")) {
        a = ["🗾", "🇯🇵"];
    } else if (["indian"].includes(name)) {
        a = ["🇮🇳"];
    } else if (["italian"].includes(name)) {
        a = ["🇮🇹"];
    } else if (["french"].includes(name)) {
        a = ["🇫🇷"];
    } else if (["german"].includes(name)) {
        a = ["🇩🇪"];
    } else if (["turkish"].includes(name)) {
        a = ["🇹🇷"];
    } else if (["mexican"].includes(name)) {
        a = ["🇲🇽"];
    } else if (["thai"].includes(name)) {
        a = ["🇹🇭"];
    } else if (["classic", "classics", "history", "historic", "museum", "museums"].includes(name)) {
        a = ["🏛", "🏺"];
    } else if (["greek", "greeks"].includes(name)) {
        a = ["🏛", "🇬🇷", "🏺"];
    } else if (["america", "american", "americans", "usa", "states", "united states"].includes(name)) {
        a = ["🇺🇸"];
    } else if (name == "south korea") {
        a = ["🇰🇷"];
    } else if (name.includes("korea")) {
        a = ["🇰🇵", "🇰🇷"];
    } else if (name == "hong kong") {
        a = ["🇭🇰"];
    } else if (["turkey"].includes(name)) {
        a = ["🦃", "🇹🇷"];
    } else if (["moon cake"].includes(name)) {
        a = ["🥮"];
    } else if (["take out"].includes(name)) {
        a = ["🥡"];
    } else if (name == "itp") {
        a = ["🌈🖥️💎", "🎶📱🌈", "🎨🖱️🕶️", "🎈💻✨", "💫🎧⚡💖"];
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
        }
    }

    if (typeof c !== 'undefined') {
        a.push(c);
    }

    let randNum = Math.floor(Math.random() * Math.floor(a.length));
    b = a[randNum];

    return b;
}

function getPOS(text) {
    var pos = [];
    if (RiTa.isVerb(text) == true) {
        var a = nlp(text);
        var futureA = a.verbs().toFutureTense().out();
        var aBasic = futureA.substring(5, futureA.length);
        var pastA = a.verbs().toPastTense().out();
        var presentA = a.verbs().toPresentTense().out();
        pos.push(aBasic, text, presentA, pastA, RiTa.getPresentParticiple(aBasic), RiTa.getPastParticiple(aBasic));
    }
    if (RiTa.isNoun(text) == true) {
        pos.push(text, RiTa.singularize(text), RiTa.pluralize(text));
    } else {
        pos.push(text)
    }
    return pos;
}

function splitRule(secondWord) {
    var firstWord = splitted[splitted.indexOf(secondWord) - 1];
    splitted[splitted.indexOf(secondWord)] = firstWord + " " + secondWord;
    splitted.splice(splitted.indexOf(firstWord), 1);
}
