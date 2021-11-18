const emojiDict = {
    "grinning face": "😀",
    "grinning face with big eyes": "😃",
    "grinning face with smiling eyes": "😄",
    "beaming face with smiling eyes": "😁",
    "grinning squinting face": "😆",
    "grinning face with sweat": "😅",
    "rolling on the floor laughing": "🤣",
    "face with tears of joy": "😂",
    "slightly smiling face": "🙂",
    "upside-down face": "🙃",
    "winking face": "😉",
    "smiling face with smiling eyes": "😊",
    "smiling face with halo": "😇",
    "smiling face with hearts": "🥰",
    "smiling face with heart-eyes": "😍",
    "star-struck": "🤩",
    "face blowing a kiss": "😘",
    "kissing face": "😗",
    "smiling face": "☺️",
    "kissing face with closed eyes": "😚",
    "kissing face with smiling eyes": "😙",
    "smiling face with tear": "🥲",
    "face savoring food": "😋",
    "face with tongue": "😛",
    "winking face with tongue": "😜",
    "zany face": "🤪",
    "squinting face with tongue": "😝",
    "money-mouth face": "🤑",
    "smiling face with open hands": "🤗",
    "face with hand over mouth": "🤭",
    "shushing face": "🤫",
    "thinking face": "🤔",
    "zipper-mouth face": "🤐",
    "face with raised eyebrow": "🤨",
    "neutral face": "😐",
    "expressionless face": "😑",
    "face without mouth": "😶",
    "face in clouds": "😶‍🌫️",
    "smirking face": "😏",
    "unamused face": "😒",
    "face with rolling eyes": "🙄",
    "grimacing face": "😬",
    "face exhaling": "😮‍💨",
    "lying face": "🤥",
    "relieved face": "😌",
    "pensive face": "😔",
    "sleepy face": "😪",
    "drooling face": "🤤",
    "sleeping face": "😴",
    "face with medical mask": "😷",
    "face with thermometer": "🤒",
    "face with head-bandage": "🤕",
    "nauseated face": "🤢",
    "face vomiting": "🤮",
    "sneezing face": "🤧",
    "hot face": "🥵",
    "cold face": "🥶",
    "woozy face": "🥴",
    "face with crossed-out eyes": "😵",
    "face with spiral eyes": "😵‍💫",
    "exploding head": "🤯",
    "cowboy hat face": "🤠",
    "partying face": "🥳",
    "disguised face": "🥸",
    "smiling face with sunglasses": "😎",
    "nerd face": "🤓",
    "face with monocle": "🧐",
    "confused face": "😕",
    "worried face": "😟",
    "slightly frowning face": "🙁",
    "frowning face": "☹️",
    "face with open mouth": "😮",
    "hushed face": "😯",
    "astonished face": "😲",
    "flushed face": "😳",
    "pleading face": "🥺",
    "frowning face with open mouth": "😦",
    "anguished face": "😧",
    "fearful face": "😨",
    "anxious face with sweat": "😰",
    "sad but relieved face": "😥",
    "crying face": "😢",
    "loudly crying face": "😭",
    "face screaming in fear": "😱",
    "confounded face": "😖",
    "persevering face": "😣",
    "disappointed face": "😞",
    "downcast face with sweat": "😓",
    "weary face": "😩",
    "tired face": "😫",
    "yawning face": "🥱",
    "face with steam from nose": "😤",
    "enraged face": "😡",
    "angry face": "😠",
    "face with symbols on mouth": "🤬",
    "smiling face with horns": "😈",
    "angry face with horns": "👿",
    "skull": "💀",
    "skull and crossbones": "☠️",
    "pile of poo": "💩",
    "clown face": "🤡",
    "ogre": "👹",
    "goblin": "👺",
    "ghost": "👻",
    "alien": "👽",
    "alien monster": "👾",
    "robot": "🤖",
    "grinning cat": "😺",
    "grinning cat with smiling eyes": "😸",
    "cat with tears of joy": "😹",
    "smiling cat with heart-eyes": "😻",
    "cat with wry smile": "😼",
    "kissing cat": "😽",
    "weary cat": "🙀",
    "crying cat": "😿",
    "pouting cat": "😾",
    "kiss mark": "💋",
    "waving hand": "👋",
    "raised back of hand": "🤚",
    "hand with fingers splayed": "🖐️",
    "raised hand": "✋",
    "vulcan salute": "🖖",
    "pinched fingers": "👌",
    "pinching hand": "🤏",
    "victory hand": "✌️",
    "crossed fingers": "🤞",
    "love-you gesture": "🤟",
    "sign of the horns": "🤘",
    "call me hand": "🤙",
    "backhand index pointing left": "👈",
    "backhand index pointing right": "👉",
    "backhand index pointing up": "👆",
    "middle finger": "🖕",
    "backhand index pointing down": "👇",
    "index pointing up": "☝️",
    "thumbs up": "👍",
    "thumbs down": "👎",
    "raised fist": "✊",
    "oncoming fist": "👊",
    "left-facing fist": "🤛",
    "right-facing fist": "🤜",
    "clapping hands": "👏",
    "raising hands": "🙌",
    "open hands": "👐",
    "palms up together": "🤲",
    "handshake": "🤝",
    "folded hands": "🙏",
    "writing hand": "✍️",
    "nail polish": "💅",
    "selfie": "🤳",
    "flexed biceps": "💪",
    "mechanical arm": "🦾",
    "mechanical leg": "🦿",
    "leg": "🦵",
    "foot": "🦶",
    "ear": "👂",
    "ear with hearing aid": "🦻",
    "nose": "👃",
    "brain": "🧠",
    "anatomical heart": "🫀",
    "lungs": "🫁",
    "tooth": "🦷",
    "bone": "🦴",
    "eyes": "👀",
    "eye": "👁️",
    "tongue": "👅",
    "mouth": "👄",
    "baby": "👶",
    "child": "🧒",
    "boy": "👦",
    "girl": "👧",
    "person": "🧑",
    "person: blond hair": "👱",
    "man": "👨",
    "person: beard": "🧔",
    "man: red hair": "👨‍🦰",
    "man: curly hair": "👨‍🦱",
    "man: white hair": "👨‍🦳",
    "man: bald": "👨‍🦲",
    "woman": "👩",
    "woman: red hair": "👩‍🦰",
    "person: red hair": "🧑‍🦰"
}

let memory = {};

class EmojiSearch {
    static getMatches(query) {
        if (memory[query]) return memory[query];
        let oneCharLessMatches = memory[query.substring(0, query.length-1)];
        if (query.length > 1 && oneCharLessMatches.length === 0) {
            memory[query] = [];
            return [];
        }
        let matches = [];
        Object.keys(emojiDict).forEach((key) => {
            if (key.includes(query)) {
                matches.push(emojiDict[key]);
            }
        });
        memory[query] = matches;
        return matches;
    }
}