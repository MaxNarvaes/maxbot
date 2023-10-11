const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var argTeams = [
    { ID: Team.BLUE, shortName: "boca", longName: "Club Atlético Boca Juniors", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
    { ID: Team.RED, shortName: "rvp", longName: "Club Atlético River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF5000 }] },
    { ID: Team.RED, shortName: "ind", longName: "Club Atlético Independiente", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "elp", longName: "Estudiantes de La Plata", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0008], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "casla", longName: "Club Atletico San Lorenzo de Almagro", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xC20000, 0x151575, 0xA10005], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "hur", longName: "Huracan", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0xF2F2F2], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "tall", longName: "Talleres", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x030354, 0xFFFFFF, 0x030354], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "bel", longName: "Belgrano", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x3D8BFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "new", longName: "Newell's old boys", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.RED, shortName: "col", longName: "Colon", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x9C0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.RED, shortName: "un", longName: "Union", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "vel", longName: "Club Atletico Velez Sarsfield", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x1228B8, 0xFFFFFF], avatarColor: 0x080606 }] },
    { ID: Team.BLUE, shortName: "god", longName: "Godoy Cruz", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x0000AB, 0xFFFFFF, 0x0000AB], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "def", longName: "Defensa y Justicia", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xF7FF00, 0xF7FF00, 0xF7FF00], avatarColor: 0x19F700 }] },
    { ID: Team.BLUE, shortName: "ajr", longName: "Argentinos Jr", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x0ADEFF, 0xFFFFFF, 0x0ADEFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "lan", longName: "Lanus", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x8A0707, 0x8A0707, 0x8A0707], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "cc", longName: "Central Cordoba", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x000000, 0xFAF5F5, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "rac", longName: "Racing", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x077FE8, 0xE8E8E8, 0x077FE8], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "atl", longName: "Atletico Tucuman", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x9CFFFC, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "barr", longName: "Barracas Central", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "inst", longName: "Instituto", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xCC1212, 0xFFFFFF, 0xCC1212], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "sar", longName: "Sarmiento", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x004A0C, 0x004A0C, 0x004A0C], avatarColor: 0xFFBFC3 }] },
    { ID: Team.RED, shortName: "plat", longName: "Platense", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x382420, 0xFFFFFF], avatarColor: 0x7A4F46 }] },
    { ID: Team.BLUE, shortName: "tig", longName: "Tigre", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x0841FF, 0xFF0000, 0x0841FF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "ban", longName: "Banfield", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x06300F, 0xFFFFFF, 0x06300F], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "glp", longName: "Gimnasia de la Plata", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x00172B, 0xF2F2F2], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Argentina", uniform: [{ angle: 40, mainColor: [0x006FFF, 0xFF0000, 0x006FFF], avatarColor: 0xFFFFFF }] },
];


let currentTeams = [];

/* vote system */
var votingPlayers = new Set();
var banVotesCount = {}; //dictionary
var votekickTimeout = 60000;
/* pause vote system */
var pauseVotingPlayers = new Set();
var pauseVoteCount = 0; //dictionary    
var pauseState = false;
var votePauseTimeout = 30000;

var bgColor = "3D3D3D";

/* COMMANDS */
/* VARIABLES */
var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 30;
var maxAFKDuration = 20;
var AFKCooldown = 5;
var adminCommandTimeout = true;
const token = "thr1.AAAAAGTLV-T5JcL2AkgrXg.wSrqbN3Ar20";
var goalDictionary = {};
/* ROOM */
const roomNumber = 0;
const roomName = "JUEGAN TODOS CON ♿ (" + (roomNumber + 1) + ")";
//const roomName = "JUEGAN TODOS CON ♿ 2";
const maxPlayers = 23;
const roomPublic = true;
const geo = [{ "lat": -22.9201, "lon": -43.3307, "code": "ar" }];
const roomPassword = '';

const excludedRows = ["player_name", "view_mode", "geo", "avatar", "player_auth_key", "extrapolation", "_grecaptcha", "chat_height", "banList", "chat_bg_mode"];
//const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, geo: geo[0] });
//"[\"3138362E3139302E3132382E313630\", \"3135322E3137322E3134342E323132\", \"3230302E32352E35302E313334 \"]"
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
var gameConfig = {
    token: token,
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
}
//getPlayerIpObject: function(id) {return D.vb.get(id);},
console.log(gameConfig);
var room = HBInit(gameConfig);
if (room != null) {
    console.log("room initialized " + roomName);
}

/* setTimeout(() => {
    printNews();
}, 120000);

function printNews() {
    room.sendAnnouncement("  Reactivamos el comando !admin <mensaje>, comando sin mensaje sera ignorado  ", null, 0x9250FD)
    room.sendAnnouncement("   ", null, 0x8466FD)
    room.sendAnnouncement("   ", null, 0x7B73FD);
} */

const scoreLimitClassic = 0;
const scoreLimitBig = 0;
const timeLimitClassic = 10;
const timeLimitBig = 10;

//lag management 
var laggyGameCycles = 0;

//variables globales q agregue
var commandTimeout = 0;
var afkCounter = 0;
var voiceChatLink = ['https://discord.com/channels/1122229514647371846/1122229516547412171', 'https://discord.com/channels/1122229514647371846/1122229516547412172'];

var initializing = false;

var animatingGk = false;

room.setTeamsLock(true);
if (roomPassword != '') {
    room.setPassword(roomPassword);
}


let Colors = {
    Vermelho: 0xFA5646,
    Laranja: 0xFF5E3B,
    Verde: 0x7DFA89,
    Azul: 0x05C5FF,
    Amrelo: 0xFFFF17,
    Cinza: 0xCCCCCC,
    Branco: 0xFFFFFF,
    Azulclaro: 0x6ECAFF,
    Azulescuro: 0x426AD6
}

const Negrito = 'bold';
const Normal = 'normal';
const resetarAvatarEm = 3;

//var adminPassword = roomArgs['adminPassword'] != null ? roomArgs['adminPassword'] : 10000 + getRandomInt(90000);
var adminPassword = 6666;
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const UNIFORME_OFICIAL = 0;
const gravityMode = '"bCoef": 0.8, "damping": 0.994, "gravity": [0,0.04],';
const normalMode = '"bCoef": 0.4,';

const powerKickStr = '6.4';
const normalKickStr = '4.9';

const physicsMode = {
    normal : {
        name : "normal",
        ballMode: normalMode,
        kickStr: normalKickStr
    },
    gravity: {
        name : "gravity",
        ballMode: gravityMode,
        kickStr: normalKickStr
    },
    power : {
        name : "power",
        ballMode: normalMode,
        kickStr: powerKickStr
    }
};
var reloadStadium = false;
var currentPhysicsMode = physicsMode.normal;

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var trainingMap = '{"name":"namajunas practice (training) [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","canBeStored":true,"kickOffReset":"full","width":850,"height":668,"spawnDistance":350,"bg":{"type":"","width":653,"height":320,"kickOffRadius":0,"cornerRadius":0,"color":"(bgcolor)"},"vertexes":[{"x":-651,"y":320,"cMask":["ball","wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":10},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"252525","vis":false,"curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":-1},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":-336,"cMask":["wall"],"cGroup":["c1"],"trait":"kickOffBarrier","color":"252525","vis":false,"curve":20},{"x":-650,"y":-200,"bCoef":1,"cMask":["blue"],"cGroup":["blue"],"curve":0,"vis":false,"color":"252525"},{"x":-650,"y":200,"bCoef":1,"cMask":["blue","red"],"cGroup":["blue","red"],"curve":0,"vis":false,"radius":2,"color":"252525"},{"x":750,"y":200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false},{"x":750,"y":-200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false,"color":"252525"},{"x":-658.8,"y":320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-10},{"x":-658.8,"y":100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":-10},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-658.8,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":10},{"x":-658.8,"y":-100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":10},{"x":755,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-40},{"x":755,"y":-119,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.6,"bias":-40},{"x":755,"y":122,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":0.01,"bias":-40},{"x":755,"y":320,"trait":"ballArea","vis":false,"color":"252525","curve":0,"bias":-40},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":true,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"FFFFFF","vis":true,"radius":4.5,"invMass":6.0e-6},{"x":0,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":true,"bias":-5,"curve":0},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-651,"y":-123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":7,"curve":-40,"color":"252525","invMass":1.0e-6},{"x":-572,"y":-123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-651,"y":123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":3,"invMass":1.0e-5,"curve":-40,"color":"252525"},{"x":-572,"y":123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-436,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"color":"252525"},{"x":0,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":2},{"x":750,"y":320,"bCoef":1,"cMask":["red","blue","wall","ball"],"cGroup":["wall"],"trait":"ballArea","bias":10,"color":"252525","curve":0},{"x":750,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10,"color":"252525"},{"x":750,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":20},{"x":31,"y":-557,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3,"vis":true},{"x":0,"y":-544,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":0,"y":-423,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"curve":-60,"color":"252525"},{"x":199,"y":-451,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":302,"y":-488,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":197,"y":-419,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":138,"y":-519,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":-715,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-701,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-715,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":-701,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":830,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-670,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-670,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":280.8333333333333,"y":-23.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.3333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.8333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":323,"y":-26,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":50,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":325.5,"y":-26.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":325.66666666666663,"y":-25.66666666666663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319.33333333333337,"y":5.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":352.66666666666663,"y":6.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":30,"color":"2E2E2E"},{"x":323.33333333333337,"y":10.166666666666686,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":319.6666666666667,"y":5.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":351.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":356.66666666666663,"y":19.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":352.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":-651,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"color":"252525"},{"x":0,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"curve":0,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"252525"},{"x":-35,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-20},{"x":-650,"y":-611,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":-10},{"x":-650,"y":-611,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-30},{"x":-748.5,"y":-320,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":20},{"x":-648.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-650,"y":-320,"cMask":["wall"],"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":10},{"x":750,"y":-320,"cMask":["wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":10},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-651,"y":320,"cMask":["wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":-10},{"x":750,"y":320,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":-10,"color":"252525","curve":0},{"x":750,"y":-320,"trait":"ballArea","curve":0},{"x":750,"y":320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"bias":-10},{"x":750,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10},{"x":7,"y":320,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5,"curve":0},{"x":7,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"curve":0,"color":"252525","vis":false},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":55,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2},{"x":0,"y":-336.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":false,"bias":2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":2,"color":"252525"},{"x":195,"y":-378,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":373,"y":-462.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":371.5,"y":-543,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":194.5,"y":-612,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":380,"y":-320,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":1},{"x":380,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":false,"curve":0},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":true,"bias":-5},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-332,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"color":"252525"},{"x":-400,"y":-320,"bCoef":0.1,"cMask":["blue"],"cGroup":["blue"],"trait":"kickOffBarrier"},{"x":-280,"y":-320,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"kickOffBarrier"},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":270.1260754171482,"y":-175.08817212714803,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":-50,"vis":false,"bias":0},{"x":370.9962562492123,"y":-218.96534864189977,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":276.9070936057916,"y":-159.49914418037446,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":50,"vis":false,"bias":0},{"x":377.7772744378558,"y":-203.37632069512622,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":235.51633140103326,"y":-176.93631149932702,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":-50,"vis":false,"color":"2E2E2E","bias":18},{"x":254.4632939869488,"y":-133.3787334127539,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":50,"vis":false,"color":"2E2E2E","bias":18},{"x":496.5,"y":-288.5,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":532.5,"y":-250,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":149.5,"y":-126,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":163,"y":-123,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154.5,"y":-113,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136,"y":-121.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":149.5,"y":-118.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141,"y":-108.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141.5,"y":257,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":152,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136.5,"y":268,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":143.5,"y":158.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154,"y":171.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":138.5,"y":169.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":629,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":631,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":624,"y":-75,"cMask":["wall"],"cGroup":["wall"]},{"x":624,"y":75,"cMask":["wall"],"cGroup":["wall"]},{"x":-1,"y":223,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":750,"y":224,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":747,"y":122,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":2,"y":123,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":680,"y":65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":680,"y":-65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":171,"y":197,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":212,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":154.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":169.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":191.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":206.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":152.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":167.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":195.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":210.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":150.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":165.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":296,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":171,"y":311,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":252,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":267,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":288.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":303.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":250,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":265,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":292.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":307.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":246.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":261.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":16,"y":272,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":281,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":16,"y":292,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":1,"y":282,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":181,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":192,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":0,"y":182,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":-340,"y":-518,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-340,"y":-444,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-110,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-531]},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-531]},{"x":-110,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-431]},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-431]},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-20,"y":-320,"bCoef":1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-20,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-88,"y":-320,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-88,"y":-641,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-594,"y":-322,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5},{"x":-594,"y":-643,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":5},{"x":-109,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-87,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-109,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-87,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-571,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-571,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-340,"y":-582,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":-340,"y":-382,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":170,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"},{"x":170,"y":663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":2,"v1":3,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":4,"v1":5,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":14,"v1":6,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":13,"v1":5,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":12,"v1":1,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":11,"v1":2,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":15,"v1":16,"vis":false,"color":"ffffff","trait":"ballArea","bias":-10,"x":-658.8},{"v0":17,"v1":18,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":19,"v1":20,"vis":false,"color":"ffffff","trait":"ballArea","bias":10,"x":-658.8,"y":-320},{"v0":21,"v1":22,"vis":false,"color":"ffffff","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":23,"v1":24,"curve":0,"vis":false,"color":"252525","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":27,"v1":28,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":0},{"v0":29,"v1":30,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier"},{"v0":31,"v1":32,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"radius":0.05},{"v0":33,"v1":34,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"x":750},{"v0":35,"v1":36,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":37,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":36,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":41,"v1":42,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":40,"v1":43,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":44,"v1":45,"curve":145,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea"},{"v0":0,"v1":48,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":10},{"v0":7,"v1":50,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":20,"x":750},{"v0":47,"v1":50,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":51,"v1":52,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":53,"v1":54,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":52,"v1":53,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":2},{"v0":56,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":58,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":56,"curve":-140,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":58,"curve":-180,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":60,"v1":61,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":-150,"y":150},{"v0":62,"v1":63,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":150,"y":-150},{"v0":7,"v1":64,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":65,"v1":66,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-670},{"v0":65,"v1":67,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":-85},{"v0":67,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-620},{"v0":66,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":85},{"v0":69,"v1":70,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":71,"v1":72,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":73,"v1":74,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":75,"v1":76,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":75,"v1":77,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":78,"v1":79,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":80,"v1":81,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":83,"curve":30,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":79,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":85,"v1":84,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":86,"v1":87,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":180},{"v0":87,"v1":88,"curve":-160,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":89,"v1":90,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":166.66666666666669},{"v0":0,"v1":91,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10},{"v0":27,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"x":0},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":30},{"v0":97,"v1":30,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10},{"v0":30,"v1":7,"curve":0,"vis":true,"color":"252525","cMask":["ball"],"bias":-1},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-30},{"v0":100,"v1":101,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":103,"v1":102,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":10},{"v0":105,"v1":104,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"bias":10},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10,"y":320},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":92,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":109,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10,"x":750},{"v0":111,"v1":112,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"x":20},{"v0":113,"v1":114,"curve":-180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":2,"x":514},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":-2,"x":514},{"v0":120,"v1":119,"curve":50.545030732114945,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-2},{"v0":122,"v1":123,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":124,"v1":125,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":47,"v1":121,"curve":50.545030732114945,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":119,"v1":10,"curve":14.794713706848997,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":127,"v1":126,"curve":0,"vis":false,"color":"0D0D0D","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0,"x":380},{"v0":130,"v1":129,"curve":45.93532925828217,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":55,"v1":131,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":5},{"v0":51,"v1":129,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-5},{"v0":131,"v1":128,"curve":62.190372743895615,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":134,"v1":135,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":136,"v1":137,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":138,"v1":139,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":140,"v1":141,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":142,"v1":143,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-75},{"v0":144,"v1":145,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-58},{"v0":146,"v1":147,"vis":false,"color":"2E2E2E","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":18},{"v0":146,"v1":142,"curve":41.993762397652105,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":147,"v1":144,"curve":-28.076285755567678,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":142,"v1":144,"curve":-63.60183201071682,"vis":false,"color":"1AF0E9","bCoef":-4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":148,"v1":149,"vis":false,"color":"1AF0E9","bCoef":0.85,"cMask":["ball"],"bias":-5},{"v0":150,"v1":151,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":162,"v1":163,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":80},{"v0":164,"v1":165,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":-80},{"v0":166,"v1":167,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":173,"v1":172,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":680},{"v0":173,"v1":165,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":163,"v1":172,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":174,"v1":175,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":175,"v1":174,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":176,"v1":177,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":177,"v1":176,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":178,"v1":179,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":179,"v1":178,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":180,"v1":181,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":181,"v1":180,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":182,"v1":183,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":183,"v1":182,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":184,"v1":185,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":185,"v1":184,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":186,"v1":187,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":187,"v1":186,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":188,"v1":189,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":189,"v1":188,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":190,"v1":191,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":191,"v1":190,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":192,"v1":193,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":193,"v1":192,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":194,"v1":195,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":195,"v1":194,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":196,"v1":197,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":197,"v1":196,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":201,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":202,"v1":203,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":204,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":205,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":206,"v1":207,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":207,"v1":206,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"y":-100},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"y":100},{"v0":212,"v1":213,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":221,"v1":220,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":223,"v1":222,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":225,"v1":224,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":5,"x":-20},{"v0":226,"v1":227,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":228,"v1":229,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":230,"v1":231,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":232,"v1":233,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":234,"v1":235,"vis":true,"color":"D4D4D4","bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier"},{"v0":236,"v1":237,"curve":0,"vis":true,"color":"545454","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":170}],"goals":[],"discs":[{"radius":7,"invMass":0,"pos":[-650,98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,0],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[-650,-98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,-137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":5.0e-5,"pos":[-207,5],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.958,"x":-80},{"radius":0,"invMass":0,"pos":[-149,3],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[-217,-219],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-245,-210],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":0,"invMass":0,"pos":[-217,225],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-248,212],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":7,"invMass":8.0e-6,"pos":[214.5,-144.5],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":0,"pos":[32,-558],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":8,"invMass":0,"pos":[32,-408],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":6,"invMass":8.0e-6,"pos":[72,-467],"color":"ffffff","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":1,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-456,-284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,-252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-456,284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-108,-143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,-141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":0,"invMass":0,"pos":[-108,143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":25,"invMass":1.0e-41,"pos":[-646,-3],"color":"252525","bCoef":2,"cMask":["kick","red","blue","c3"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-5]},{"radius":8,"invMass":8.0e-6,"pos":[-327,464],"color":"252525","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":15,"invMass":1.0e-26,"pos":[-473,406],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[-2,0]},{"radius":15,"invMass":1.0e-26,"pos":[-208,546],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[2,0]},{"radius":9,"invMass":1.2e-5,"pos":[-340,-483],"color":"252525","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.992,"speed":[0,0],"_data":{"mirror":[]}},{"radius":7,"invMass":1.0e-41,"pos":[643,439],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,1]},{"radius":7,"invMass":1.0e-41,"pos":[643,509],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-1]},{"radius":6,"invMass":1.2e-5,"pos":[389,481],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0.05,"invMass":6.0e-6,"pos":[661,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,447],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,455],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,463],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[661,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,471],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,479],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,487],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,495],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,502],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,423.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,521.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[430,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[505,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[579,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[447,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":7,"invMass":0,"pos":[514.5,-628],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[576,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[447,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[576,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[516,-290],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[516,-290],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[248,-156.5],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[248,-156.5],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[724.5,265.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[718.5,254.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[707.5,247.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[693.5,248.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[686.5,257.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[683.5,268.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[687.5,278.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[696.5,285.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[708.5,287.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[722.5,176.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[716.5,165.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[705.5,158.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[691.5,159.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[684.5,168.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[681.5,179.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[685.5,189.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[694.5,196.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[706.5,198.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":0,"invMass":0,"pos":[705,268],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":0,"invMass":0,"pos":[701.5,179],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":7.3,"invMass":3.0e-5,"pos":[474,176],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[431,176],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":7.3,"invMass":3.0e-5,"pos":[474,266],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[430,266],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":3.9e-5,"pos":[39,271],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":8,"invMass":3.9e-5,"pos":[39,288],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":0,"invMass":0,"pos":[39,239],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,322],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":0,"pos":[625,-79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[625,79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea","curve":180},{"radius":7,"invMass":8.0e-6,"pos":[108,-109],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":7,"invMass":8.0e-6,"pos":[36,-83],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":3.9e-5,"pos":[39,188],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":8,"invMass":3.9e-5,"pos":[39,171],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":0,"invMass":0,"pos":[39,222],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,139],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":10,"invMass":2.2e-5,"pos":[150,420],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,475],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,530],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-110,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-531},{"radius":0,"invMass":0,"pos":[-110,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-431},{"radius":0,"invMass":0,"pos":[-570,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-531},{"radius":0,"invMass":0,"pos":[-570,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-431},{"radius":14.3,"invMass":4.0e-6,"pos":[677,-258],"color":"5689e5","bCoef":0.5,"cMask":["red","blue","ball"],"cGroup":["ball"],"damping":0.96},{"radius":6,"invMass":0,"pos":[723,-287],"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"cGroup":["ball"],"damping":0.99,"x":-80}],"joints":[{"d0":1,"d1":2,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":2,"d1":3,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":3,"d1":4,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":4,"d1":5,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":5,"d1":6,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":6,"d1":7,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":24,"d1":25,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":-180},{"d0":26,"d1":27,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":27,"d1":28,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":28,"d1":29,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":25,"d1":26,"strength":"rigid","color":"000000","length":null,"radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":25,"d1":30,"strength":"rigid","color":"000000","length":null,"radius":3},{"d0":5,"d1":31,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":-0.5},{"d0":32,"d1":33,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-80,0],"x":-80},{"d0":34,"d1":35,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-148,-222]},{"d0":36,"d1":37,"strength":11,"color":"transparent","length":null,"pos":[-148,222]},{"d0":42,"d1":43,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":44,"d1":45,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":46,"d1":47,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":48,"d1":49,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":55,"d1":56,"_length":5,"strength":1.0e+38,"color":"252525","length":5},{"d0":55,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":60,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":60,"d1":61,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":61,"d1":62,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":62,"d1":65,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":65,"d1":69,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":69,"d1":70,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":70,"d1":71,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":71,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":3},{"d0":56,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":75,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":74,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":39,"d1":40,"strength":"rigid","color":"252525","length":null},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":97,"d1":98,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":98,"d1":99,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":99,"d1":100,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":100,"d1":101,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":101,"d1":102,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":102,"d1":103,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":103,"d1":104,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":104,"d1":105,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":89,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":89,"d1":90,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":90,"d1":91,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":91,"d1":92,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":92,"d1":93,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":93,"d1":94,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":94,"d1":95,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":95,"d1":96,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":89,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":90,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":91,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":92,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":93,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":94,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":95,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":96,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":97,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":98,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":99,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":100,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":101,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":102,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":103,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":104,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":105,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":88,"d1":96,"strength":0,"color":"590000","length":null},{"d0":97,"d1":105,"strength":0,"color":"002033","length":null},{"d0":108,"d1":109,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":110,"d1":111,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":112,"d1":114,"strength":"rigid","color":"transparent","length":null},{"d0":113,"d1":115,"strength":"rigid","color":"transparent","length":null},{"d0":121,"d1":123,"strength":"rigid","color":"transparent","length":null},{"d0":120,"d1":122,"strength":"rigid","color":"transparent","length":null},{"d0":127,"d1":128,"strength":"rigid","color":"590000","length":null,"x":-110},{"d0":129,"d1":130,"strength":"rigid","color":"002033","length":null,"x":-570},{"d0":131,"d1":132,"_length":-1,"strength":190,"color":"transparent","length":-1}],"planes":[{"normal":[0,-1],"dist":-666,"cMask":["ball","red","blue"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-666,"canvas_rect":[-850,-668,850,680],"a":[-850,666],"b":[850,666]}}},{"normal":[0,1],"dist":-644,"bCoef":1,"_data":{"extremes":{"normal":[0,1],"dist":-644,"canvas_rect":[-850,-668,850,680],"a":[-850,-644],"b":[850,-644]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[1,0],"dist":-750,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-750,"canvas_rect":[-850,-668,850,680],"a":[-750,-668],"b":[-750,680]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.0001,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[0,1],"dist":-651,"bCoef":10000,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,1],"dist":-651,"canvas_rect":[-850,-668,850,680],"a":[-850,-651],"b":[850,-651]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0.01,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":700000,"invMass":4.0e-6},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":8.0e-6,"color":"46D0D9","damping":0.99,"cMask":["all"],"cGroup":["ball"]},"redSpawnPoints":[],"blueSpawnPoints":[],"cameraFollow":"player"}';
var v2Map = '{"name":"1v0 JueganTodosCon♿ by yudooraay","width":480,"height":230,"bg":{"kickOffRadius":60,"color":"(bgcolor)"},"vertexes":[{"x":-401.4,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":401.4,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":401.4,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-401.4,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","curve":-25},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":-400,"y":60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-400,"y":-60,"cMask":[],"cGroup":[],"color":"ffffff","_data":{"mirror":{}}},{"x":400,"y":-60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":230,"cMask":[],"cGroup":[]},{"x":0,"y":-230,"cMask":[],"cGroup":[]},{"x":436.4,"y":-60,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":436.4,"y":60,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":-436.4,"y":-60,"cMask":[],"cGroup":[],"color":"ff5757","_data":{"mirror":{}}},{"x":-436.4,"y":60,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":400,"y":-135,"cMask":["wall"],"cGroup":["wall"]},{"x":400,"y":135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-400,"y":-135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-400,"y":135,"cMask":["wall"],"cGroup":["wall"]},{"x":-400,"y":-201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":-201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-400,"y":201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":435,"y":-61.4,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":435,"y":61.4,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":-435,"y":-61.4,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":-435,"y":61.4,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":-400,"y":135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":400,"y":-135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-30.49574412560598,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.225744192549385,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-29.385572964295505,"y":11.82733702882454,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.9534495932522264,"y":-36.61868876145756,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.6504213886715848,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":6.0530904528388545,"y":-42.19416593284727,"cMask":["wall"],"cGroup":["wall"]},{"x":9.213884376094837,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":7.498352938744155,"y":-19.90999456216308,"cMask":["wall"],"cGroup":["wall"]},{"x":32.37355878032905,"y":-19.48111170282541,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.648909332852618,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.88706713899205,"y":11.076589941476266,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.95618860360607,"y":-39.87068068446313,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.63382976048286,"y":13.078582174404994,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.2017063894395839,"y":-35.36744361587711,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.400004171065547,"y":11.430223270178539,"cMask":["wall"],"cGroup":["wall"]},{"x":1.3351474045583704,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-29.78268672294149,"y":14.210019580700477,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.0475351473175762,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":8.03865924606881,"y":-41.79705217420128,"cMask":["wall"],"cGroup":["wall"]},{"x":11.199453169324793,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":9.230000522006785,"y":-41.3999384155553,"cMask":["wall"],"cGroup":["wall"]},{"x":12.390794445262767,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":7.895466697390145,"y":-17.924425768933126,"cMask":["wall"],"cGroup":["wall"]},{"x":32.770672538975035,"y":-17.495542909595454,"cMask":["wall"],"cGroup":["wall"]},{"x":26.157492648859613,"y":-9.557304802163955,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":6.0530904528388545,"y":-39.01725586367934,"cMask":["wall"],"cGroup":["wall"]},{"x":6.0530904528388545,"y":-36.23745955315741,"cMask":["wall"],"cGroup":["wall"],"curve":40},{"x":6.267638660242912,"y":-40.95752011604665,"cMask":["wall"],"cGroup":["wall"]},{"x":11.43618807004007,"y":-41.76763634022751,"cMask":["wall"],"cGroup":["wall"]},{"x":14.596981993296051,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":16.803169541329336,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"],"curve":100},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.241158667607152,"y":12.256219888162216,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.93691559917268,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.93691559917268,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.504495036164265,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.7426528423037,"y":11.505472800813942,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.489415463794508,"y":13.50746503374267,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.255589874377193,"y":11.859106129516215,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.63827242625314,"y":14.638902440038153,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.347181182469853,"y":14.794113611755678,"cMask":["wall"],"cGroup":["wall"]},{"x":0.08494218857342739,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-36.625009112472256,"y":14.794113611755678,"cMask":["wall"],"cGroup":["wall"]},{"x":0.08494218857342739,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.9389853771129153,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.53710114067082,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.26710120761422,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-34.42692997936034,"y":11.82733702882454,"cMask":["wall"],"cGroup":["wall"]},{"x":-7.994806608317065,"y":-36.61868876145756,"cMask":["wall"],"cGroup":["wall"]},{"x":-5.691778403736421,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-42.19416593284727,"cMask":["wall"],"cGroup":["wall"]},{"x":4.172527361030001,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":2.4569959236793193,"y":-19.90999456216308,"cMask":["wall"],"cGroup":["wall"]},{"x":27.332201765264212,"y":-19.48111170282541,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.39268684398247,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.39268684398247,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.690266347917458,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.928424154056884,"y":11.076589941476266,"cMask":["wall"],"cGroup":["wall"]},{"x":-9.496300783013611,"y":-37.369435848805836,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.6751867755477,"y":13.078582174404994,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.24306340450442,"y":-35.36744361587711,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.44136118613038,"y":11.430223270178539,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.4662096105064655,"y":44.26359902222289,"cMask":["wall"],"cGroup":["wall"]},{"x":-34.824043738006324,"y":14.210019580700477,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.088892162382413,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":6.158096154259958,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":4.188643506941949,"y":-41.3999384155553,"cMask":["wall"],"cGroup":["wall"]},{"x":7.349437430197931,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":16.618204412799088,"y":-6.384431798484341,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-39.01725586367934,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-36.23745955315741,"cMask":["wall"],"cGroup":["wall"]},{"x":1.2262816451780751,"y":-40.95752011604665,"cMask":["wall"],"cGroup":["wall"]},{"x":76.06531847662362,"y":5.373919180151752,"cMask":["wall"],"cGroup":["wall"]},{"x":-38.904706590432156,"y":36.59554052466808,"cMask":["wall"],"cGroup":["wall"]},{"x":6.394831054975233,"y":-41.76763634022751,"cMask":["wall"],"cGroup":["wall"]},{"x":9.555624978231215,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":20.479537121527038,"y":-5.177135158803448,"cMask":["wall"],"cGroup":["wall"],"curve":40},{"x":11.761812526264498,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.282515682671985,"y":12.256219888162216,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.97827261423751,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.97827261423751,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.545852051229105,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.530772478859348,"y":13.50746503374267,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.956414826491409,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-36.71549396780166,"y":15.786228105529924,"cMask":["wall"],"cGroup":["wall"]},{"x":-7.980342392177752,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":73.36000000000001,"y":14.999999999999993,"cMask":["wall"],"cGroup":["wall"]},{"x":17.85388437609484,"y":11.889679842071128,"cMask":["wall"],"cGroup":["wall"]},{"x":-13.546115623905168,"y":11.729679842071128,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.786115623905165,"y":-37.63032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":13.173884376094843,"y":-62.47032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":-14.546115623905168,"y":-20.510320157928877,"cMask":["wall"],"cGroup":["wall"]},{"x":14.61388437609484,"y":-19.43032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":31.88870037609485,"y":43.560463842071144,"cMask":["wall"],"cGroup":["wall"]},{"x":35.66783637609485,"y":36.00219184207114,"cMask":["wall"],"cGroup":["wall"]},{"x":49.52466837609486,"y":19.625935842071133,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.05805162390518,"y":-5.568304157928877,"cMask":["wall"],"cGroup":["wall"]},{"x":-14.720643623905174,"y":-43.35966415792889,"cMask":["wall"],"cGroup":["wall"],"curve":100},{"x":-26.176441869660323,"y":-55.9610582998654,"cMask":["wall"],"cGroup":["wall"],"curve":150},{"x":12.917588079798541,"y":-35.63920904681777,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":19.399069561280022,"y":-22.676246083854803,"cMask":["wall"],"cGroup":["wall"]},{"x":19.399069561280026,"y":-42.12069052829925,"cMask":["wall"],"cGroup":["wall"],"curve":-30},{"x":36.065736227946694,"y":-11.565134972743689,"cMask":["wall"],"cGroup":["wall"],"curve":-30},{"x":41.62129178350225,"y":-14.342912750521467,"cMask":["wall"],"cGroup":["wall"]},{"x":41.62129178350225,"y":-0.45402386163257624,"cMask":["wall"],"cGroup":["wall"]},{"x":23.102773264983732,"y":4.1756057679970535,"cMask":["wall"],"cGroup":["wall"]},{"x":11.065736227946688,"y":-7.861431269039985,"cMask":["wall"],"cGroup":["wall"]},{"x":50.88055104276151,"y":-18.972542380151097,"cMask":["wall"],"cGroup":["wall"]},{"x":39.7694399316504,"y":-6.009579417188133,"cMask":["wall"],"cGroup":["wall"]},{"x":52.732402894613365,"y":-10.639209046817763,"cMask":["wall"],"cGroup":["wall"]},{"x":33.287958450168915,"y":2.323753916145202,"cMask":["wall"],"cGroup":["wall"]},{"x":19.711484376094845,"y":-50.40472015792889,"cMask":["wall"],"cGroup":["wall"]},{"x":15.045884376094838,"y":-65.5679201579289,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":4.548284376094836,"y":-57.403120157928896,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":-2.4501156239051656,"y":-68.0671201579289,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":11.664000000000003,"y":-76.98240000000003,"cMask":["wall"],"cGroup":["wall"]},{"x":-19.04684544000001,"y":-82.98982656000004,"cMask":["wall"],"cGroup":["wall"]},{"x":-19.04684544000001,"y":-95.23422720000005,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.3604889600000007,"y":-92.51324928000004,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.162933760000003,"y":-102.03667200000005,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.333333333333332,"y":-57.407407407407405,"cMask":["wall"],"cGroup":["wall"]},{"x":-11.798880850682393,"y":-45.49454081654052,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.361166394067506,"y":-53.76607256566649,"cMask":["wall"],"cGroup":["wall"]},{"x":-5.444665576270024,"y":-48.321406989396465,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":5,"v1":6,"color":"ffffff","bCoef":0,"cMask":[],"cGroup":[]},{"v0":4,"v1":7,"color":"ffffff","bCoef":0,"cMask":[],"cGroup":[]},{"v0":6,"v1":13,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":7,"v1":12,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":6,"v1":7,"curve":184.38617118115926,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":7,"v1":6,"curve":180,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":14,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":26,"v1":27,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":15,"v1":11,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":8,"v1":17,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10,"y":60},{"v0":29,"v1":28,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":16,"v1":9,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10,"y":-60,"_data":{"mirror":{},"arc":{"a":[-436.4,-60],"b":[-400,-60],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":9,"v1":8,"color":"C5C5C5","bCoef":0,"cMask":[]},{"v0":10,"v1":11,"color":"C5C5C5","bCoef":0,"cMask":[]},{"v0":0,"v1":1,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":23,"v1":10,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":11,"v1":24,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":2,"v1":3,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":25,"v1":8,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":9,"v1":22,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":20,"v1":30,"curve":180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-400,-135],"b":[-400,135],"curve":180,"radius":135,"center":[-400,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":19,"v1":31,"curve":180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[400,135],"b":[400,-135],"curve":180,"radius":135,"center":[400,0],"from":1.5707963267948966,"to":-1.5707963267948966}}},{"v0":127,"v1":128,"curve":31.3421829040189,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":128,"v1":129,"curve":26.906441761479194,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":129,"curve":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":131,"v1":132,"curve":-38.011968392073626,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":127,"v1":134,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":134,"v1":135,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":136,"v1":133,"curve":-203.64297668121446,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":62,"v1":115,"curve":40,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":142,"curve":-30,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":139,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":139,"v1":62,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":115,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":115,"v1":107,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":107,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":147,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":149,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":149,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":149,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":6,"curve":-25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":153,"v1":154,"curve":-25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":158,"v1":159,"curve":25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":160,"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":160,"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":110,"v1":161,"curve":40,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":162,"v1":163,"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":162,"v1":163,"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-230,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-230,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-302.01030643660437,-230],"b":[302.01030643660437,-230]}}},{"normal":[0,-1],"dist":-230,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-230,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-302.01030643660437,230],"b":[302.01030643660437,230]}}},{"normal":[1,0],"dist":-480,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-480,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-480,-124.2618434354544],"b":[-480,124.2618434354544]}}},{"normal":[-1,0],"dist":-480,"bCoef":0,"_data":{"extremes":{"normal":[-1,0],"dist":-480,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[480,-124.2618434354544],"b":[480,124.2618434354544]}}}],"goals":[{"p0":[-407.9,60],"p1":[-407.9,-60],"team":"red"},{"p0":[407.9,60],"p1":[407.9,-60],"team":"blue"}],"discs":[{"radius":8,"invMass":0,"pos":[-400,-60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[-400,60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[400,-60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[400,60],"color":"ffffff","_data":{"mirror":{}}}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":8,"invMass":1.55,"pos":[0,0],"color":"FFFFFF","bCoef":0.412,"cGroup":["ball","kick","score"],"cMask":["all"],"damping":0.99,"gravity":[0,0]},"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":170,"kickOffReset":"partial"}';
var v3Map = '{"name":"3v2 JueganTodosCon♿ by yudooraay","width":755,"height":339,"spawnDistance":310,"bg":{"width":665,"height":290,"kickOffRadius":80,"color":"(bgcolor)"},"vertexes":[{"x":-665,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":-665,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":33,"_data":{"mirror":{}}},{"x":-665,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":-33,"_data":{"mirror":{}}},{"x":-665,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":-33,"_data":{"mirror":{}}},{"x":665,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":33,"_data":{"mirror":{}}},{"x":665,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"ee3141","_data":{"mirror":{}}},{"x":2.332799999999999,"y":-80,"trait":"line","color":"ee3141","_data":{"mirror":{}}},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"x":-693,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"ee3141","curve":-33,"_data":{"mirror":{}}},{"x":693,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"3b90e5","curve":33,"_data":{"mirror":{}}},{"x":-693,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"ee3141","curve":-33,"_data":{"mirror":{}}},{"x":693,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"3b90e5","curve":33,"_data":{"mirror":{}}},{"x":-665,"y":-215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-500,"y":-50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":-215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":500,"y":-50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-665,"y":215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-500,"y":50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":500,"y":50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":290,"bCoef":1,"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":-290,"bCoef":1,"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":290,"bCoef":0,"trait":"line","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":-290,"bCoef":0,"trait":"line","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":80,"trait":"kickOffBarrier","color":"409df9","_data":{"mirror":{}}},{"x":2.332799999999999,"y":-80,"trait":"kickOffBarrier","color":"409df9","_data":{"mirror":{}}},{"x":674,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":674,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-674,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":-674,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"x":-674,"y":80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":-674,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"x":674,"y":80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":674,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":28.18209024000001,"y":44.89613568000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-31.67942400000002,"y":2.7209779200000015,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":30.903068160000014,"y":36.73320192000002,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":45.86844672000002,"y":19.04684544000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":8.732800000000001,"y":14.960000000000003,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":-20.427200000000006,"y":12.800000000000002,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-21.427200000000006,"y":-34.56000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-19.267200000000006,"y":-60.48000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-31.147200000000012,"y":-58.320000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-20.815348148148153,"y":-14.814814814814817,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":7.888355555555555,"y":-14.814814814814817,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-12.482014814814818,"y":-43.518518518518526,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-25.444977777777783,"y":-44.44444444444445,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-19.889422222222226,"y":-50.92592592592593,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.332799999999999,"y":-32.00000000000001,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":11.3328,"y":-2.0000000000000004,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":18.332800000000002,"y":-35.00000000000001,"_data":{"mirror":{}},"curve":-30},{"cMask":["wall"],"cGroup":["wall"],"x":25.332800000000002,"y":-3.000000000000001,"_data":{"mirror":{}},"curve":-30},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":0,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":36.332800000000006,"y":-3.000000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":38.332800000000006,"y":8.000000000000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":9.000000000000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-1.667200000000002,"y":-32.00000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":19.332800000000002,"y":-57.000000000000014,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":17.332800000000002,"y":-44.00000000000001,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":-63.000000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.332799999999999,"y":-49.000000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":9.3328,"y":-83.00000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":9.3328,"y":-70.00000000000001,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":33,"vis":true,"color":"3b90e5","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-33,"vis":true,"color":"3b90e5","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-585,"_data":{"mirror":{},"arc":{"a":[-693,-80],"b":[-693,80],"curve":-33,"radius":281.6749217666305,"center":[-422.92452619270034,0],"from":2.853613327010729,"to":-2.853613327010729}}},{"v0":13,"v1":15,"curve":33,"vis":true,"color":"409df9","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585,"_data":{"mirror":{},"arc":{"a":[693,-80],"b":[693,80],"curve":33,"radius":281.6749217666305,"center":[422.92452619270034,0],"from":-0.2879793265790644,"to":0.2879793265790644}}},{"v0":16,"v1":17,"curve":90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[-665,-215],"b":[-500,-50],"curve":90,"radius":165,"center":[-665,-50.000000000000014],"from":-1.5707963267948966,"to":8.612639221334548e-17}}},{"v0":18,"v1":19,"curve":-90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[665,-215],"b":[500,-50],"curve":-90,"radius":165,"center":[665,-50.000000000000014],"from":3.141592653589793,"to":-1.5707963267948966}}},{"v0":20,"v1":21,"curve":-90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[-665,215],"b":[-500,50],"curve":-90,"radius":165,"center":[-665,50.000000000000014],"from":-8.612639221334548e-17,"to":1.5707963267948966}}},{"v0":22,"v1":23,"curve":90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[665,215],"b":[500,50],"curve":90,"radius":165,"center":[665,50.000000000000014],"from":1.5707963267948966,"to":-3.141592653589793}}},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"5E5E5E","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[-500,-50],"b":[-500,50],"curve":0}}},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"5E5E5E","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[500,-50],"b":[500,50],"curve":0}}},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665,"_data":{"mirror":{},"arc":{"a":[-665,80],"b":[-665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665,"_data":{"mirror":{},"arc":{"a":[665,80],"b":[665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665,"_data":{"mirror":{},"arc":{"a":[-665,-80],"b":[-665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665,"_data":{"mirror":{},"arc":{"a":[665,-80],"b":[665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290,"_data":{"mirror":{},"arc":{"a":[-665,290],"b":[665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290,"_data":{"mirror":{},"arc":{"a":[-665,-290],"b":[665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[0,290],"b":[0,-290],"curve":0}}},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"ee3141","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[2.332799999999999,-80],"b":[0,80],"curve":-180,"radius":80.00850260416077,"center":[1.1663999999999994,0],"from":1.585375293805343,"to":-1.5562173597844504}}},{"v0":29,"v1":28,"curve":180,"vis":true,"color":"409df9","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[2.332799999999999,-80],"b":[0,80],"curve":180,"radius":80.00850260416077,"center":[1.1663999999999994,0],"from":-1.5562173597844504,"to":1.585375293805343}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"dd807e","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"90c1dd","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614,"_data":{"mirror":{},"arc":{"a":[-674,-80],"b":[-674,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614,"_data":{"mirror":{},"arc":{"a":[-674,80],"b":[-674,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614,"_data":{"mirror":{},"arc":{"a":[674,80],"b":[674,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":38,"v1":39,"_data":{"mirror":{},"arc":{"a":[28.18209024000001,44.89613568000002],"b":[-31.67942400000002,2.7209779200000015],"curve":200,"radius":37.17815339117805,"center":[-5.466975994361987,29.086156833287987],"from":0.43923716981713595,"to":-2.3532896333737927}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":40,"v1":41,"_data":{"mirror":{},"arc":{"a":[30.903068160000014,36.73320192000002],"b":[45.86844672000002,19.04684544000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":40,"v1":42,"_data":{"mirror":{},"arc":{"a":[30.903068160000014,36.73320192000002],"b":[8.732800000000001,14.960000000000003],"curve":10,"radius":178.2670491097763,"center":[144.252352452092,-100.85706135752233],"from":2.2598924317814926,"to":2.4344253569809253}},"curve":10},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":42,"v1":43,"_data":{"mirror":{},"arc":{"a":[8.732800000000001,14.960000000000003],"b":[-20.427200000000006,12.800000000000002],"curve":20,"radius":84.19290934557034,"center":[0.27778436518712546,-68.80728893002623],"from":1.470202439253404,"to":1.81926828965227}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":43,"v1":44,"_data":{"mirror":{},"arc":{"a":[-20.427200000000006,12.800000000000002],"b":[-21.427200000000006,-34.56000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45,"_data":{"mirror":{},"arc":{"a":[-21.427200000000006,-34.56000000000001],"b":[-19.267200000000006,-60.48000000000001],"curve":200,"radius":13.205544031632405,"center":[-22.632397669981717,-47.710433139165154],"from":1.4794046334839046,"to":-1.3131221697070221}}},{"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":46,"_data":{"mirror":{},"arc":{"a":[-21.427200000000006,-34.56000000000001],"b":[-31.147200000000012,-58.320000000000014],"curve":-200,"radius":13.033664114305546,"center":[-24.19243546918344,-47.296949126243156],"from":-2.1336479701667965,"to":1.3570105338218639}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":48,"_data":{"mirror":{},"arc":{"a":[-20.815348148148153,-14.814814814814817],"b":[7.888355555555555,-14.814814814814817],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":73.45814507805194,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":50,"_data":{"mirror":{},"arc":{"a":[-12.482014814814818,-43.518518518518526],"b":[-25.444977777777783,-44.44444444444445],"curve":73.45814507805194,"radius":10.865632476088674,"center":[-18.3430411162187,-52.66785400256789],"from":1.0010605445703504,"to":2.283147038590023}}},{"curve":158.6506298839627,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":51,"_data":{"mirror":{},"arc":{"a":[-19.267200000000006,-60.48000000000001],"b":[-19.889422222222226,-50.92592592592593],"curve":158.6506298839627,"radius":4.8714589828446,"center":[-20.47875582261475,-55.761605663975764],"from":-1.31945339276626,"to":1.449522459071798}}},{"curve":-188.01886046326905,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":51,"_data":{"mirror":{},"arc":{"a":[-19.267200000000006,-60.48000000000001],"b":[-19.889422222222226,-50.92592592592593],"curve":-188.01886046326905,"radius":4.798902133126818,"center":[-19.91314418109645,-55.72476942743713],"from":1.5658531012766443,"to":-1.435784034971106}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53,"_data":{"mirror":{},"arc":{"a":[4.332799999999999,-32.00000000000001],"b":[11.3328,-2.0000000000000004],"curve":30,"radius":59.51231987061895,"center":[-48.14796211353318,-3.937822173508927],"from":-0.49103132107614467,"to":0.032567454522154045}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55,"_data":{"mirror":{},"arc":{"a":[18.332800000000002,-35.00000000000001],"b":[25.332800000000002,-3.000000000000001],"curve":-30,"radius":63.281043895635975,"center":[81.54561292110206,-32.06217782649108],"from":2.6644355660929055,"to":-3.095150965488382}},"curve":-30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,0],"b":[36.332800000000006,-3.000000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":57,"v1":58,"_data":{"mirror":{},"arc":{"a":[36.332800000000006,-3.000000000000001],"b":[38.332800000000006,8.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59,"_data":{"mirror":{},"arc":{"a":[38.332800000000006,8.000000000000002],"b":[-0.667200000000002,9.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":59,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,0],"b":[-0.667200000000002,9.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":54,"_data":{"mirror":{},"arc":{"a":[4.332799999999999,-32.00000000000001],"b":[18.332800000000002,-35.00000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":61,"v1":62,"_data":{"mirror":{},"arc":{"a":[19.332800000000002,-57.000000000000014],"b":[17.332800000000002,-44.00000000000001],"curve":-40,"radius":19.22832133521707,"center":[36.19140322645506,-47.75252258054539],"from":2.9451761315861926,"to":-2.639877474795662}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":63,"v1":64,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,-63.000000000000014],"b":[4.332799999999999,-49.000000000000014],"curve":-40,"radius":21.732738608268402,"center":[21.065141936182354,-62.86869354863657],"from":2.449502862770224,"to":-3.1355507436116308}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":65,"v1":66,"_data":{"mirror":{},"arc":{"a":[9.3328,-83.00000000000001],"b":[9.3328,-70.00000000000001],"curve":-40,"radius":19.00472860106007,"center":[27.191403226455044,-76.50000000000001],"from":2.792526803190927,"to":-2.792526803190927}}}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"radius":8,"pos":[-665,80],"color":"ff2151","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[-665,-80],"color":"ff2151","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[665,80],"color":"59c7f6","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[665,-80],"color":"59c7f6","trait":"goalPost","_data":{"mirror":{}}}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-290,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,-290],"b":[554.9475388613221,-290]}}},{"normal":[0,-1],"dist":-290,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-290,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,290],"b":[554.9475388613221,290]}}},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-339,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,-339],"b":[554.9475388613221,-339]}}},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-339,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,339],"b":[554.9475388613221,339]}}},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-755,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-755,-249.1751200979976],"b":[-755,249.1751200979976]}}},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-755,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[755,-249.1751200979976],"b":[755,249.1751200979976]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7,"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.6,"color":"ffda13","bCoef":0.5,"cMask":["all"],"damping":0.99,"invMass":1,"gravity":[0,0],"cGroup":["ball"]},"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","redSpawnPoints":[],"blueSpawnPoints":[],"kickOffReset":"partial","joints":[]}';
var v4Map = '{"name":"4v4 JueganTodosCon♿ by yudooraay","width":765,"height":350,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":150,"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"kickOffReset":"full","bg":{"color":"(bgcolor)","height":320,"width":700},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-701,"y":-320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":701,"y":-320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":-701,"y":320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":701,"y":320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":700,"y":85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10,"curve":0},{"x":700,"y":321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":-700,"y":-321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":-85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":700,"y":-321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":700,"y":-85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10,"curve":0},{"x":-740,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":-700,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ff0000","curve":0},{"x":-740,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff","curve":-45},{"x":-700,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ff0000","curve":-45},{"x":-740,"y":-86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff"},{"x":-740,"y":86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff"},{"x":740,"y":-86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":740,"y":86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":740,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff","curve":0},{"x":700,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ff0000","curve":0},{"x":740,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":700,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ff0000","curve":0},{"x":-700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":-700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-400,"y":-318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":-400,"y":318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":-318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":-85,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"525252"},{"x":400,"y":85,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"525252"},{"x":-400,"y":-85,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"525252"},{"x":-400,"y":85,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"525252"},{"x":-698.5,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-624,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-698.5,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-624,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-625,"y":-151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":-625,"y":151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":625,"y":-151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":625,"y":151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":624,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":698.5,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":624,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":698.5,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-500,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":-500,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":500,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":500,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"curve":0},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"ff0000","curve":0},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ff0000","curve":0},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":0},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"ff0000","_data":{"mirror":{}}},{"x":-700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-698,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-698,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":698,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":698,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":0,"y":-320,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":80,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":-81,"cMask":["redKO","blueKO"],"cGroup":["wall"],"curve":180,"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":81,"cMask":["redKO","blueKO"],"cGroup":["wall"],"curve":180,"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":0,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":20.470983608716665,"y":39.611153448830635,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.529016391283335,"y":-4.388846551169369,"cMask":["wall"],"cGroup":["wall"]},{"x":20.522417439827223,"y":30.558833260364814,"cMask":["wall"],"cGroup":["wall"]},{"x":32.10257582685563,"y":18.512167860590353,"cMask":["wall"],"cGroup":["wall"]},{"x":4.645772619423838,"y":16.26985292200176,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":-21.640911459383403,"y":14.05201881307832,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":-13.204664299517763,"y":-32.17549078825307,"cMask":["wall"],"cGroup":["wall"],"curve":-200,"_data":{"mirror":{}}},{"x":-15.527358634354556,"y":-13.24112178021643,"cMask":["wall"],"cGroup":["wall"]},{"x":5.906111873190042,"y":-13.24112178021643,"cMask":["wall"],"cGroup":["wall"]},{"x":-17.77754174724471,"y":-37.153008013895686,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-18.51338633311901,"y":-47.3177508647442,"cMask":["wall"],"cGroup":["wall"],"curve":-200,"_data":{"mirror":{}}},{"x":-10.035362398561112,"y":-32.54158221956905,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":4.649886366748092,"y":-26.82649000270091,"cMask":["wall"],"cGroup":["wall"]},{"x":7.800734501163589,"y":-4.140383434909147,"cMask":["wall"],"cGroup":["wall"]},{"x":16.623109277527078,"y":-27.456659629584017,"cMask":["wall"],"cGroup":["wall"]},{"x":19.773957411942575,"y":-3.5102138080260428,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.802658036498514,"y":-3.5102138080260428,"cMask":["wall"],"cGroup":["wall"]},{"x":28.596332188306036,"y":-2.249874554259833,"cMask":["wall"],"cGroup":["wall"]},{"x":28.596332188306064,"y":6.572500222103631,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.281979528966076,"y":4.681991341454317,"cMask":["wall"],"cGroup":["wall"]},{"x":17.883448531293283,"y":-46.36174843607715,"cMask":["wall"],"cGroup":["wall"]},{"x":15.992939650643962,"y":-37.53937365971369,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.0216402751998714,"y":-53.923783958674406,"cMask":["wall"],"cGroup":["wall"]},{"x":4.019716739864975,"y":-45.73157880919405,"cMask":["wall"],"cGroup":["wall"]},{"x":13.472261143111552,"y":-63.376328361920976,"cMask":["wall"],"cGroup":["wall"]},{"x":10.951582635579115,"y":-56.44446246620682,"cMask":["wall"],"cGroup":["wall"]},{"cMask":["wall"],"cGroup":["wall"],"x":-11.235214364984317,"y":-47.3240847494794,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-12.710908702668801,"y":-41.08248057037684,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"y":-320},{"v0":2,"v1":3,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"y":320},{"v0":4,"v1":5,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"x":-700},{"v0":6,"v1":7,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"x":700},{"v0":8,"v1":9,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"x":-700},{"v0":10,"v1":11,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"x":700},{"v0":12,"v1":13,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"y":-85},{"v0":14,"v1":15,"curve":-2.8482139919315306,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"y":85},{"v0":16,"v1":17,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"x":-735},{"v0":18,"v1":19,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"x":735},{"v0":20,"v1":21,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10},{"v0":22,"v1":23,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"y":70},{"v0":24,"v1":25,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-700},{"v0":26,"v1":27,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":700},{"v0":28,"v1":29,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":30,"v1":31,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":32,"v1":33,"curve":-120,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":34,"v1":35,"curve":120,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":36,"v1":37,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":-150},{"v0":38,"v1":39,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":150},{"v0":40,"v1":41,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-625},{"v0":42,"v1":43,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":625},{"v0":44,"v1":45,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":-150},{"v0":46,"v1":47,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":150},{"v0":48,"v1":49,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":49,"v1":48,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":48,"v1":49,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":50,"v1":51,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":51,"v1":50,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":50,"v1":51,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":52,"v1":53,"curve":0,"vis":false,"color":"a3a3a3","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"a3a3a3","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":56,"v1":57,"curve":180,"vis":false,"color":"ff0000","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":58,"v1":59,"curve":180,"vis":false,"color":"ff0000","cMask":["red","blue"],"cGroup":["redKO"],"x":0,"_data":{"mirror":{},"arc":{"a":[0,-80],"b":[0,80],"curve":180,"radius":80,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":60,"v1":61,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-700},{"v0":66,"v1":67,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":700},{"v0":68,"v1":69,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":70,"v1":71,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":72,"v1":73,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":73,"v1":72,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":74,"v1":75,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":75,"v1":74,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":74,"v1":75,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":72,"v1":73,"color":"ff0000","cMask":["redKO","blueKO"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[0,-81],"b":[0,81],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":76,"v1":77,"curve":204.53180351851952,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":78,"v1":79,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":78,"v1":80,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":80,"v1":81,"curve":30,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":81,"v1":82,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":83,"v1":84,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":86,"curve":-200,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-13.204664299517763,-32.17549078825307],"b":[-18.51338633311901,-47.3177508647442],"curve":-200,"radius":8.146711604964487,"center":[-14.524030816123378,-40.21465629030134],"from":-2.0825294150096703,"to":1.4081290889789895}}},{"v0":82,"v1":86,"curve":200,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-13.204664299517763,-32.17549078825307],"b":[-18.51338633311901,-47.3177508647442],"curve":200,"radius":8.146711604964487,"center":[-17.194019816513393,-39.27858536269593],"from":1.0590632385801229,"to":-1.7334635646108039}}},{"v0":87,"v1":85,"curve":40,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":88,"v1":89,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":91,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":88,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":93,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":93,"v1":94,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":94,"v1":95,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":95,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":96,"v1":97,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":99,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"v0":100,"v1":101,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"curve":210,"vis":false,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":210,"radius":3.319965282865041,"center":[-11.13684513419393,-44.00557710689925],"from":-1.6004302600947362,"to":2.064761169093358}}},{"curve":-210,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":-210,"radius":3.319965282865041,"center":[-12.809277933459189,-44.40098821295699],"from":1.5411623934950571,"to":-1.0768314844964348}}},{"curve":210,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":210,"radius":3.319965282865041,"center":[-11.13684513419393,-44.00557710689925],"from":-1.6004302600947362,"to":2.064761169093358}}}],"goals":[{"p0":[-705,85],"p1":[-705,-85],"team":"red","color":"ff0000"},{"p0":[705,-85],"p1":[705,85],"team":"blue","curve":0,"color":"ff0000"}],"discs":[{"radius":7,"invMass":0,"pos":[-700,-85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":7,"invMass":0,"pos":[-700,85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":7,"invMass":0,"pos":[700,-85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"],"curve":0},{"radius":7,"invMass":0,"pos":[700,85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"],"curve":0}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-416.00704106652125,-350],"b":[416.00704106652125,-350]}}},{"normal":[0,-1],"dist":-350,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-416.00704106652125,350],"b":[416.00704106652125,350]}}},{"normal":[-1,0],"dist":-770,"_data":{"extremes":{"normal":[-1,0],"dist":-770,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[770,-189.09410957569148],"b":[770,189.09410957569148]}}},{"normal":[1,0],"dist":-770,"_data":{"extremes":{"normal":[1,0],"dist":-770,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-770,-189.09410957569148],"b":[-770,189.09410957569148]}}}],"joints":[],"playerPhysics":{"radius":15,"bCoef":0,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.11,"gravity":[0,0],"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":(kickStr),"kickback":0},"ballPhysics":{"radius":6.2,"cMask":["all"],"damping":0.99,"invMass":1.5,"color":"ffffff","cGroup":["ball"],(ballMode)}}';
var v6Map = '{"name":"6v6 JueganTodosCon♿ by yudooraay","width":1080,"height":532,"bg":{"type":"hockey","width":950,"height":460,"kickOffRadius":6,"cornerRadius":0, "color":"(bgColor)"},"vertexes":[{"x":-950,"y":460,"cMask":["ball"],"_data":{"mirror":{}}},{"x":-950,"y":90,"cMask":["ball"],"_data":{"mirror":{}}},{"x":-950,"y":-90,"cMask":["ball"]},{"x":-950,"y":-460,"cMask":["ball"]},{"x":950,"y":456,"cMask":["ball"]},{"x":950,"y":90,"cMask":["ball"]},{"x":950,"y":-90,"cMask":["ball"]},{"x":950,"y":-456,"cMask":["ball"]},{"x":0,"y":508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0,"cMask":[]},{"x":0,"y":-508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-995,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":995,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":-995,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":995,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":951,"y":460,"cMask":["ball"]},{"x":951,"y":-460,"cMask":["ball"]},{"x":0,"y":460,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":-460,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":958,"y":-90,"cMask":["ball"]},{"x":958,"y":-456,"cMask":["ball"]},{"x":-958,"y":-90,"cMask":["ball"]},{"x":-958,"y":-456,"cMask":["ball"]},{"x":-958,"y":90,"cMask":["ball"]},{"x":-958,"y":456,"cMask":["ball"]},{"x":958,"y":90,"cMask":["ball"]},{"x":958,"y":456,"cMask":["ball"]},{"x":0,"y":-9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":-9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":324.62551819445,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.35340467604,"y":4.2212921610516,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":1.7712285482462,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":6.6713557738571,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":-0.67883506455928,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":0.54619674184346,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":5.4463239674544,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":-1.2913509677606,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":7.2838716770584,"bCoef":0.1,"cMask":[]},{"x":-950,"y":432.90041943973,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-926.21802170761,"y":460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-433.32499678239,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-925.43621788149,"y":-460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":-433.36622514797,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":927.73220749769,"y":-460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":434.55334331787,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":925.51401132381,"y":460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":-319.66892509968,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[]},{"x":-635.82253673536,"y":-2.314063297901,"bCoef":0.1,"cMask":[]},{"x":-635.83851134042,"y":0.13595112921681,"bCoef":0.1,"cMask":[]},{"x":-635.80656213031,"y":-4.764077725019,"bCoef":0.1,"cMask":[]},{"x":-635.85448594547,"y":2.5859655563347,"bCoef":0.1,"cMask":[]},{"x":-635.84649864294,"y":1.3609583427757,"bCoef":0.1,"cMask":[]},{"x":-635.81454943284,"y":-3.53907051146,"bCoef":0.1,"cMask":[]},{"x":-635.85847959673,"y":3.1984691631142,"bCoef":0.1,"cMask":[]},{"x":-635.80256847905,"y":-5.3765813317984,"bCoef":0.1,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":-0.077614373673782,"y":-2.4626457981722,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.10499941090626,"y":2.3835365851378,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.050229336441873,"y":-7.3088281814824,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.13238444813857,"y":7.2297189684479,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.11869192952281,"y":4.8066277767929,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.063921855057799,"y":-4.8857369898273,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.13923070744664,"y":8.4412645642754,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.043383077133171,"y":-8.5203737773099,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.77952848346911,"y":1.5373542018278,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":2.7521434462366,"y":3.3835365851378,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.80691352070102,"y":-3.3088281814824,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":1.7247584090043,"y":2.2297189684479,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":2.73845092762,"y":5.8066277767929,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.79322100208503,"y":-0.88573698982727,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":1.7179121496962,"y":3.4412645642754,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.81375978000966,"y":-4.5203737773099,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"cMask":["wall"],"cGroup":["wall"],"x":47.49694864588799,"y":55.64749057228801,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-32.984651354112025,"y":-21.33490942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":49.82974864588801,"y":43.98349057228799,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":70.82494864588801,"y":25.321090572288,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":20.669748645888042,"y":14.823490572287994,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":-16.655051354111997,"y":15.98989057228799,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-21.32065135411198,"y":-59.82610942771203,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-18.987851354112017,"y":-28.333309427712024,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":14.837748645887991,"y":-29.49970942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-22.48705135411199,"y":-91.31890942771204,"_data":{"mirror":{}},"curve":-180},{"cMask":["wall"],"cGroup":["wall"],"x":-28.319051354111984,"y":-88.98610942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-11.989451354112013,"y":-66.82450942771203,"_data":{"mirror":{}},"curve":60},{"cMask":["wall"],"cGroup":["wall"],"x":-28.319051354111984,"y":-70.32370942771203,"_data":{"mirror":{}},"curve":60},{"cMask":["wall"],"cGroup":["wall"],"x":-15.488651354111987,"y":-90.15250942771203,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-21.32065135411198,"y":-78.48850942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-11.989451354112013,"y":-79.65490942771204,"_data":{"mirror":{}},"curve":-180},{"cMask":["wall"],"cGroup":["wall"],"x":12.504948645888028,"y":-53.99410942771203,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":18.33694864588802,"y":-15.502909427712012,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":27.668148645888046,"y":-57.493309427712035,"_data":{"mirror":{}},"curve":-20},{"cMask":["wall"],"cGroup":["wall"],"x":33.50014864588804,"y":-15.502909427712012,"_data":{"mirror":{}},"curve":-20},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":-13.17010942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":47.49694864588805,"y":-14.336509427712016,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":48.66334864588806,"y":0.8266905722879869,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":0.8266905722879869,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":33.50014864588804,"y":-93.65170942771203,"_data":{"mirror":{}},"color":"4F424B"},{"cMask":["wall"],"cGroup":["wall"],"x":16.004148645888,"y":-84.32050942771204,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.340148645888014,"y":-101.81650942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":25.335348645888025,"y":-94.81810942771205,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":24.168948645888015,"y":-78.48850942771205,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":4.340148645888014,"y":-115.81330942771206,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":12.504948645888028,"y":-104.14930942771204,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":2.007348645887994,"y":-91.31890942771204,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":-78.48850942771205,"_data":{"mirror":{}},"curve":-40}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":9,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":11,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":12,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":6,"v1":13,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":1,"v1":14,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":5,"v1":15,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":12,"v1":14,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":13,"v1":15,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":1,"v1":0,"color":"FFFFFF","cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[-950,90],"b":[-950,460],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":5,"v1":4,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":3,"color":"FFFFFF","cMask":["ball"]},{"v0":6,"v1":7,"color":"FFFFFF","cMask":["ball"]},{"v0":0,"v1":16,"color":"FFFFFF","cMask":["ball"]},{"v0":3,"v1":17,"color":"FFFFFF","cMask":["ball"]},{"v0":18,"v1":19,"color":"FFFFFF","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[0,460],"b":[0,-460],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":9,"v1":10,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":21,"v1":20,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":2,"v1":1,"color":"FFFFFF","bCoef":0,"cMask":[]},{"v0":6,"v1":5,"color":"FFFFFF","bCoef":0,"cMask":[]},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":24,"v1":25,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":31,"v1":30,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17,"_data":{"mirror":{},"arc":{"a":[0,9],"b":[0,-9],"curve":180,"radius":9,"center":[0,0],"from":1.5707963267948966,"to":-1.5707963267948966}}},{"v0":32,"v1":33,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17,"_data":{"mirror":{},"arc":{"a":[0,-9],"b":[0,9],"curve":180,"radius":9,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":34,"v1":35,"color":"545454","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[634.21528583524,-109.20953737271],"b":[634.21528583524,114.16613046747],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":37,"v1":36,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[950,324.62551819445],"b":[634.21528583524,114.16613046747],"curve":89.99999999999999,"radius":268.3403991039501,"center":[897.3373367811101,61.503467248579994],"from":1.3732609811282943,"to":2.9440573079231904}}},{"v0":40,"v1":39,"curve":-179.99999999985,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-1.3091137582980271e-12},{"v0":39,"v1":40,"curve":-179.99999999989004,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-9.59837594750953e-13},{"v0":42,"v1":41,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":41,"v1":42,"curve":-179.99999999999002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-8.720229739557994e-14},{"v0":44,"v1":43,"curve":-179.99999999994003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-5.235199460732664e-13},{"v0":43,"v1":44,"curve":-179.99999999999002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-8.720229739557994e-14},{"v0":46,"v1":45,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":45,"v1":46,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":47,"v1":48,"curve":91.636910923379,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859154628,"_data":{"mirror":{},"arc":{"a":[-950,432.90041943973],"b":[-926.21802170761,460],"curve":91.636910923379,"radius":25.13828405341675,"center":[-951.2771169006963,458.0062414253218],"from":-1.5199707846560215,"to":0.07939502731369887}}},{"v0":50,"v1":49,"curve":91.636910923384,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859153781,"_data":{"mirror":{},"arc":{"a":[-925.43621788149,-460],"b":[-950,-433.32499678239],"curve":91.636910923384,"radius":25.28256767956208,"center":[-950.6799062788779,-458.598420688216],"from":-0.055465023042897375,"to":1.5439007889269152}}},{"v0":51,"v1":52,"curve":91.636910923386,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859153441,"_data":{"mirror":{},"arc":{"a":[950,-433.36622514797],"b":[927.73220749769,-460],"curve":91.636910923386,"radius":24.204762555022047,"center":[951.8078675853928,-457.50337794482414],"from":1.6455565205696998,"to":-3.0382629746400465}}},{"v0":54,"v1":53,"curve":91.636910923367,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859156665,"_data":{"mirror":{},"arc":{"a":[925.51401132381,460],"b":[950,434.55334331787],"curve":91.636910923367,"radius":24.621751509309323,"center":[950.1219303877309,459.1747929170858],"from":3.1080710070689648,"to":-1.5757484881411106}}},{"v0":38,"v1":55,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[634.21528583524,-109.20953737271],"b":[950,-319.66892509968],"curve":89.99999999999999,"radius":268.3403991039462,"center":[897.337336781105,-56.546874153815],"from":-2.944057307923168,"to":-1.3732609811282719}}},{"v0":56,"v1":57,"color":"545454","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[-635.67083595539,111.16613046747],"b":[-635.67083595539,-112.20953737271],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":60,"v1":59,"curve":-179.95850096528002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.00036214741196362337},{"v0":59,"v1":60,"curve":-179.95850096552002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474098692984},{"v0":62,"v1":61,"curve":-179.95850096539,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474110039465},{"v0":61,"v1":62,"curve":-179.95850096543003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.00036214741065467026},{"v0":64,"v1":63,"curve":-179.95850096540002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474109164609},{"v0":63,"v1":64,"curve":-179.95850096542003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474107419338},{"v0":66,"v1":65,"curve":-179.95850096542003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474107419338},{"v0":65,"v1":66,"curve":-179.95850096540002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474109164609},{"v0":69,"v1":68,"curve":179.83332296199,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325761397712,"_data":{"mirror":{},"arc":{"a":[-0.10499941090626,2.3835365851378],"b":[-0.077614373673782,-2.4626457981722],"curve":179.83332296199,"radius":2.4231324417770312,"center":[-0.08778242721665591,-0.03953469030282234],"from":1.577901645621793,"to":-1.566600071068867}}},{"v0":68,"v1":69,"curve":179.8333229623,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.001454532573434374,"_data":{"mirror":{},"arc":{"a":[-0.077614373673782,-2.4626457981722],"b":[-0.10499941090626,2.3835365851378],"curve":179.8333229623,"radius":2.4231324417770215,"center":[-0.09483135735658221,-0.03957452273153943],"from":-1.5636910079708084,"to":1.5749925825237343}}},{"v0":71,"v1":70,"curve":179.83332296215,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325747435517,"_data":{"mirror":{},"arc":{"a":[-0.13238444813857,7.2297189684479],"b":[-0.050229336441873,-7.3088281814824],"curve":179.83332296215,"radius":7.269397325331227,"center":[-0.08073349708104605,-0.03949485787417924],"from":1.57790164562024,"to":-1.5666000710674155}}},{"v0":70,"v1":71,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[-0.050229336441873,-7.3088281814824],"b":[-0.13238444813857,7.2297189684479],"curve":179.8333229621,"radius":7.269397325331232,"center":[-0.10188028750275692,-0.039614355160339884],"from":-1.5636910079690913,"to":1.5749925825219155}}},{"v0":73,"v1":72,"curve":179.83332296204,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325757034527,"_data":{"mirror":{},"arc":{"a":[-0.063921855057799,-4.8857369898273],"b":[-0.11869192952281,4.8066277767929],"curve":179.83332296204,"radius":4.846264883554159,"center":[-0.09835582243401074,-0.03959443894593792],"from":-1.5636910079686188,"to":1.574992582521556}}},{"v0":72,"v1":73,"curve":179.83332296211,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325750926065,"_data":{"mirror":{},"arc":{"a":[-0.11869192952281,4.8066277767929],"b":[-0.063921855057799,-4.8857369898273],"curve":179.83332296211,"radius":4.846264883554155,"center":[-0.08425796214861424,-0.039514774088473245],"from":1.5779016456207584,"to":-1.5666000710678214}}},{"v0":75,"v1":74,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[-0.043383077133171,-8.5203737773099],"b":[-0.13923070744664,8.4412645642754],"curve":179.8333229621,"radius":8.480963546219746,"center":[-0.10364252003829548,-0.03962431326752348],"from":-1.5636910079690016,"to":1.5749925825219033}}},{"v0":74,"v1":75,"curve":179.83332296208,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325753543975,"_data":{"mirror":{},"arc":{"a":[-0.13923070744664,8.4412645642754],"b":[-0.043383077133171,-8.5203737773099],"curve":179.83332296208,"radius":8.480963546219748,"center":[-0.07897126454036356,-0.03948489976696926],"from":1.5779016456209276,"to":-1.566600071068026}}},{"v0":77,"v1":76,"curve":179.83332296199,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325761397712,"_data":{"mirror":{},"arc":{"a":[2.7521434462366,3.3835365851378],"b":[0.77952848346911,1.5373542018278],"curve":179.83332296199,"radius":1.3508899499297102,"center":[1.7671786310618869,2.4590107771210135],"from":0.7537568266522571,"to":-2.3907448900383304}}},{"v0":76,"v1":77,"curve":179.8333229623,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.001454532573434374,"_data":{"mirror":{},"arc":{"a":[0.77952848346911,1.5373542018278],"b":[2.7521434462366,3.3835365851378],"curve":179.8333229623,"radius":1.350889949929705,"center":[1.764493298646294,2.4618800098419467],"from":-2.3878358269402127,"to":0.7508477635541396}}},{"v0":79,"v1":78,"curve":179.83332296215,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325747435517,"_data":{"mirror":{},"arc":{"a":[1.7247584090043,2.2297189684479],"b":[0.80691352070102,-3.3088281814824],"curve":179.83332296215,"radius":2.80704517475199,"center":[1.2698639634756796,-0.5402221241615257],"from":1.4080239558978236,"to":-1.7364777607898199}}},{"v0":78,"v1":79,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[0.80691352070102,-3.3088281814824],"b":[1.7247584090043,2.2297189684479],"curve":179.8333229621,"radius":2.807045174751992,"center":[1.2618079662283528,-0.5388870888727606],"from":-1.7335686976915048,"to":1.4051148927995085}}},{"v0":81,"v1":80,"curve":179.83332296204,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325757034527,"_data":{"mirror":{},"arc":{"a":[0.79322100208503,-0.88573698982727],"b":[2.73845092762,5.8066277767929],"curve":179.83332296204,"radius":3.4846724521131596,"center":[1.7609688335717575,2.4618600936297734],"from":-1.8522116549062244,"to":1.2864719355837022}}},{"v0":80,"v1":81,"curve":179.83332296211,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325750926065,"_data":{"mirror":{},"arc":{"a":[2.73845092762,5.8066277767929],"b":[0.79322100208503,-0.88573698982727],"curve":179.83332296211,"radius":3.484672452113157,"center":[1.7707030961312535,2.4590306933364436],"from":1.2893809986829656,"to":-1.8551207180054876}}},{"v0":83,"v1":82,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[0.81375978000966,-4.5203737773099],"b":[1.7179121496962,3.4412645642754],"curve":179.8333229621,"radius":4.006410875910358,"center":[1.2600457336932362,-0.5388970469799467],"from":-1.6824209474048868,"to":1.4562626430861425}}},{"v0":82,"v1":83,"curve":179.83332296208,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325753543975,"_data":{"mirror":{},"arc":{"a":[1.7179121496962,3.4412645642754],"b":[0.81375978000966,-4.5203737773099],"curve":179.83332296208,"radius":4.006410875910359,"center":[1.2716261960132296,-0.5402121660546223],"from":1.4591717061850586,"to":-1.685330010503803}}},{"v0":86,"v1":87,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[-635.67083595539,111.16613046747],"b":[-950,321.62551819445],"curve":89.99999999999999,"radius":267.4845577331509,"center":[-898.065111841185,59.231242308655],"from":0.19540141146073078,"to":1.7661977382556275}}},{"v0":89,"v1":88,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[-950,-322.66892509968],"b":[-635.67083595539,-112.20953737271],"curve":89.99999999999999,"radius":267.48455773314697,"center":[-898.0651118411799,-60.27464921388997],"from":-1.7661977382556497,"to":-0.19540141146075288}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":90,"v1":91,"_data":{"mirror":{},"arc":{"a":[47.49694864588799,55.64749057228801],"b":[-32.984651354112025,-21.33490942771202],"curve":200,"radius":56.54471685995944,"center":[0.46911156604232573,24.251829337581178],"from":0.5886466728712967,"to":-2.2038801303196314}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":92,"v1":93,"_data":{"mirror":{},"arc":{"a":[49.82974864588801,43.98349057228799],"b":[70.82494864588801,25.321090572288],"curve":30,"radius":54.266933529330686,"center":[95.15186114147471,73.82986712982304],"from":-2.5592380552757716,"to":-2.035639279677473}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":92,"v1":94,"_data":{"mirror":{},"arc":{"a":[49.82974864588801,43.98349057228799],"b":[20.669748645888042,14.823490572287994],"curve":10,"radius":236.5791752713133,"center":[201.89991122014837,-137.24667200197223],"from":2.268928027592629,"to":2.4434609527920617}},"curve":10},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":94,"v1":95,"_data":{"mirror":{},"arc":{"a":[20.669748645888042,14.823490572287994],"b":[-16.655051354111997,15.98989057228799],"curve":30,"radius":72.14117596700908,"center":[-0.16918338508613973,-54.24233441888551],"from":1.2777571055654793,"to":1.801355881163778}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":95,"v1":96,"_data":{"mirror":{},"arc":{"a":[-16.655051354111997,15.98989057228799],"b":[-21.32065135411198,-59.82610942771203],"curve":20,"radius":218.71643655723577,"center":[195.99909986395622,-35.14807565651617],"from":2.9055987725075947,"to":-3.028520684273126}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":97,"v1":98,"_data":{"mirror":{},"arc":{"a":[-18.987851354112017,-28.333309427712024],"b":[14.837748645887991,-29.49970942771202],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":96,"v1":99,"_data":{"mirror":{},"arc":{"a":[-21.32065135411198,-59.82610942771203],"b":[-22.48705135411199,-91.31890942771204],"curve":200,"radius":16.00027645054401,"center":[-24.68036652313977,-75.46967553256286],"from":1.3592432857215326,"to":-1.4332835174693932}}},{"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":96,"v1":100,"_data":{"mirror":{},"arc":{"a":[-21.32065135411198,-59.82610942771203],"b":[-28.319051354111984,-88.98610942771205],"curve":-200,"radius":15.225332510142962,"center":[-22.249003975382557,-75.0231127986071],"from":-1.9808742327151931,"to":1.5097842712734666}}},{"curve":60,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":101,"v1":102,"_data":{"mirror":{},"arc":{"a":[-11.989451354112013,-66.82450942771203],"b":[-28.319051354111984,-70.32370942771203],"curve":60,"radius":16.700306488205516,"center":[-17.12385526118949,-82.71595786135038],"from":1.2582908844193448,"to":2.3054884356159424}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":103,"v1":104,"_data":{"mirror":{},"arc":{"a":[-15.488651354111987,-90.15250942771203],"b":[-21.32065135411198,-78.48850942771205],"curve":200,"radius":6.6209615048679975,"center":[-17.37631240262021,-83.80633995196615],"from":-1.2816816429935245,"to":2.208976860995137}}},{"curve":-180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":99,"v1":105,"_data":{"mirror":{},"arc":{"a":[-22.48705135411199,-91.31890942771204],"b":[-11.989451354112013,-79.65490942771204],"curve":-180,"radius":7.846153544253381,"center":[-17.238251354112002,-85.48690942771205],"from":0.8379812250083918,"to":-2.3036114285814024}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":106,"v1":107,"_data":{"mirror":{},"arc":{"a":[12.504948645888028,-53.99410942771203],"b":[18.33694864588802,-15.502909427712012],"curve":20,"radius":112.09593936456947,"center":[-93.72627274174661,-18.211051641706803],"from":-0.3249043532065673,"to":0.024161497192298688}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":108,"v1":109,"_data":{"mirror":{},"arc":{"a":[27.668148645888046,-57.493309427712035],"b":[33.50014864588804,-15.502909427712012],"curve":-20,"radius":122.06711886787193,"center":[149.65384470512586,-53.03556721371724],"from":2.829053704732841,"to":-3.1050657520478797}},"curve":-20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":110,"v1":111,"_data":{"mirror":{},"arc":{"a":[7.839348645887988,-13.17010942771202],"b":[47.49694864588805,-14.336509427712016],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":111,"v1":112,"_data":{"mirror":{},"arc":{"a":[47.49694864588805,-14.336509427712016],"b":[48.66334864588806,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":112,"v1":113,"_data":{"mirror":{},"arc":{"a":[48.66334864588806,0.8266905722879869],"b":[7.839348645887988,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":110,"v1":113,"_data":{"mirror":{},"arc":{"a":[7.839348645887988,-13.17010942771202],"b":[7.839348645887988,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":106,"v1":108,"_data":{"mirror":{},"arc":{"a":[12.504948645888028,-53.99410942771203],"b":[27.668148645888046,-57.493309427712035],"curve":30,"radius":30.06292863462352,"center":[26.616144738810547,-27.448793025047795],"from":-2.059394562647932,"to":-1.5357957870496328}},"curve":30},{"curve":-40,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":117,"v1":118,"_data":{"mirror":{},"arc":{"a":[25.335348645888025,-94.81810942771205],"b":[24.168948645888015,-78.48850942771205],"curve":-40,"radius":23.93309935589575,"center":[47.18475228025112,-85.0509805966861],"from":2.863834267976218,"to":-2.7212193384056365}}},{"curve":-20,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":119,"v1":120,"_data":{"mirror":{},"arc":{"a":[4.340148645888014,-115.81330942771206],"b":[12.504948645888028,-104.14930942771204],"curve":-20,"radius":40.9958994718067,"center":[41.497464217898546,-133.13375032811942],"from":2.3563337640011515,"to":2.7053996144000174}}},{"curve":-40,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":121,"v1":122,"_data":{"mirror":{},"arc":{"a":[2.007348645887994,-91.31890942771204],"b":[7.839348645887988,-78.48850942771205],"curve":-40,"radius":20.60355961283373,"center":[22.548965787173277,-92.91535358284172],"from":2.3658993100640515,"to":3.0640310108617834}}}],"planes":[{"normal":[0,1],"dist":-456,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-456,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,-456],"b":[500.2489671314588,-456]}}},{"normal":[0,-1],"dist":-456,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-456,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,456],"b":[500.2489671314588,456]}}},{"normal":[0,1],"dist":-508,"bCoef":0.2,"_data":{"extremes":{"normal":[0,1],"dist":-508,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,-508],"b":[500.2489671314588,-508]}}},{"normal":[0,-1],"dist":-508,"bCoef":0.2,"_data":{"extremes":{"normal":[0,-1],"dist":-508,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,508],"b":[500.2489671314588,508]}}},{"normal":[1,0],"dist":-1002,"bCoef":0.2,"_data":{"extremes":{"normal":[1,0],"dist":-1002,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-1002,-246.41893566105193],"b":[-1002,246.41893566105193]}}},{"normal":[-1,0],"dist":-1002,"bCoef":0.2,"_data":{"extremes":{"normal":[-1,0],"dist":-1002,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[1002,-246.41893566105193],"b":[1002,246.41893566105193]}}}],"goals":[{"p0":[-957.4,-90],"p1":[-957.4,90],"team":"red"},{"p0":[957.4,90],"p1":[957.4,-90],"team":"blue"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"invMass":1.5,(ballMode)},{"radius":7,"invMass":0,"pos":[-950,90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[-950,-90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[950,90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[950,-90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":3,"invMass":0,"pos":[-950,460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-950,-460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[950,-460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[950,460],"color":"FFCC00","bCoef":0.1,"cMask":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09, "kickStrength":(kickStr)},"ballPhysics":"disc0","spawnDistance":310,"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
var v7Map = '{"name":"7v6 Sindicato del hax","width":1275,"height":635,"bg":{"type":"","color":"(bgcolor)"},"vertexes":[{"x":-1200,"y":-600,"cMask":["ball"],"cGroup":["ball"],"color":"22ffff"},{"x":1200,"y":-600,"cMask":["ball"],"cGroup":["ball"],"color":"ff22ff"},{"x":-1200,"y":600,"cMask":["ball"],"cGroup":["ball"],"color":"ff22ff"},{"x":1200,"y":600,"cMask":["ball"],"cGroup":["ball"],"color":"ff22ff"},{"x":-1200,"y":-105,"cMask":["ball"],"cGroup":["ball"],"color":"22ffff"},{"x":1200,"y":-105,"cMask":["ball"],"cGroup":["ball"],"color":"ff22ff"},{"x":1200,"y":105,"cMask":["ball"],"cGroup":["ball"],"color":"ff22ff"},{"x":-1200,"y":105,"cMask":["ball"],"cGroup":["ball"],"color":"22ffff"},{"x":-1250,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1250,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1250,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1250,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-120,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":120,"cMask":["redKO","blueKO"],"cGroup":["wall"],"color":"ffffff"},{"x":0,"y":600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":840,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-840,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-840,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":840,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-840,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1543.25,"y":644,"cMask":[],"cGroup":[]},{"x":1543.25,"y":154,"cMask":[],"cGroup":[]},{"x":0,"y":-635,"cMask":[],"cGroup":[]},{"x":0,"y":635,"cMask":[],"cGroup":[]},{"x":-1202,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1202,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1202,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1201,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1200,"y":-105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1200,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1200,"y":105,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1198.5,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-840,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1198.5,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":840,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1198.5,"y":-400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1198.5,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":840,"y":400,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1170,"y":-600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1200,"y":-570,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1200,"y":570,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-1170,"y":600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":570,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1170,"y":600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1170,"y":-600,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":1200,"y":-570,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-4,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":4,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":-945,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":-940,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":1198.5,"y":-160,"cMask":["wall"],"color":"ffffff"},{"x":1050,"y":-160,"cMask":["wall"],"color":"ffffff"},{"x":1050,"y":160,"cMask":["wall"],"color":"ffffff"},{"x":1198.5,"y":160,"cMask":["wall"],"color":"ffffff"},{"x":-1198.5,"y":-160,"cMask":["wall"],"color":"ffffff"},{"x":-1050,"y":-160,"cMask":["wall"],"color":"ffffff"},{"x":-1050,"y":160,"cMask":["wall"],"color":"ffffff"},{"x":-1198.5,"y":160,"cMask":["wall"],"color":"ffffff"},{"x":-1202,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":-1202,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":1202,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":1202,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":1200,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":1200,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":-1200,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":-1200,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":-840,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":-840,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":840,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":840,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":1202,"y":-105,"cMask":["wall"],"color":"ffffff"},{"x":1202,"y":105,"cMask":["wall"],"color":"ffffff"},{"x":0,"y":-120,"bCoef":0.4,"cMask":["redKO","blueKO"],"cGroup":["wall"]},{"x":-2,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":4,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":-2,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":4,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":-2,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":4,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":6.141472806338562,"y":5.141472806338564,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":940,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":945,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":940,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":945,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":940,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":945,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":940,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":945,"y":0,"cMask":["wall"],"color":"ffffff"},{"x":-48.48782653440003,"y":0,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":39.67185807360002,"y":58.77312307200003,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":46.273255257047076,"y":49.70090379460611,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":68.55297075118085,"y":23.993539762913297,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":18.852066956574735,"y":18.852066956574735,"cMask":["wall"],"cGroup":["wall"],"curve":30,"color":"22ffff","_data":{"mirror":{}}},{"x":-27.42118830047234,"y":13.71059415023617,"cMask":["wall"],"cGroup":["wall"],"curve":30,"_data":{"mirror":{}}},{"x":-29.37950876123138,"y":11.507777497497607,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","curve":-20,"_data":{"mirror":{}}},{"x":-32.56266110681091,"y":-54.84237660094467,"cMask":["wall"],"cGroup":["wall"],"curve":-20,"color":"22ffff","_data":{"mirror":{}}},{"x":-30.84883683803138,"y":-82.26356490141701,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}}},{"x":-27.42118830047234,"y":-82.26356490141701,"cMask":["wall"],"cGroup":["wall"],"curve":-80,"color":"22ffff","_data":{"mirror":{}}},{"x":-34.276485375590426,"y":-30.84883683803138,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"_data":{"mirror":{}}},{"x":13.71059415023617,"y":-30.84883683803138,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"_data":{"mirror":{}}},{"x":12.631519610634248,"y":-58.396975084339246,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"22ffff","_data":{"mirror":{}}},{"x":16.059168148193294,"y":-12.123719827292172,"cMask":["wall"],"cGroup":["wall"],"curve":30,"color":"22ffff","_data":{"mirror":{}}},{"x":32.5626611068109,"y":-63.41149794484228,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"22ffff","_data":{"mirror":{}}},{"x":39.41795818192899,"y":-11.996769881456649,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":51.41472806338564,"y":-15.42441841901569,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":1.7138242687795213,"y":-11.996769881456649,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":54.84237660094468,"y":3.4276485375590426,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":44.55943098826754,"y":-15.424418419015694,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":71.98061928873989,"y":-13.836753936975354,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":73.6944435575194,"y":-2.6338162965388725,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":53.12855233216516,"y":-6.061464834097915,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":-22.279715494133775,"y":-59.983849407283245,"cMask":["wall"],"curve":50,"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":-34.276485375590426,"y":-66.83914648240133,"cMask":["wall"],"curve":50,"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":-25.70736403169282,"y":-68.55297075118085,"cMask":["wall"],"color":"22ffff","_data":{"mirror":{}},"cGroup":["wall"]},{"x":25.70736403169282,"y":-82.26356490141701,"cMask":["wall"],"cGroup":["wall"],"color":"ff22ff","_data":{"mirror":{}}},{"x":25.70736403169282,"y":-101.11563185799176,"cMask":["wall"],"cGroup":["wall"],"color":"ff22ff","_data":{"mirror":{}}},{"x":6.855297075118085,"y":-94.26033478287367,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":-5.141472806338563,"y":-107.97092893310983,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":10.282945612677127,"y":-121.68152308334601,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":8.569121343897606,"y":-138.81976577114122,"cMask":["wall"],"cGroup":["wall"],"color":"22ffff","_data":{"mirror":{}}},{"x":27.421188300472334,"y":-138.8197657711412,"cMask":["wall"],"cGroup":["wall"],"curve":50,"_data":{"mirror":{}}},{"x":30.848836838031374,"y":-164.527129802834,"cMask":["wall"],"cGroup":["wall"],"curve":50,"_data":{"mirror":{}}},{"x":-33.79454576640001,"y":-22.03992115200001,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.85588961280001,"y":-18.162608844800005,"cMask":["wall"],"cGroup":["wall"],"curve":-20,"_data":{"mirror":{}}},{"x":-32.32521768960001,"y":-1.4693280768000005,"cMask":["wall"],"cGroup":["wall"],"curve":-20,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"color":"22ffff","cMask":["ball"],"cGroup":["ball"],"bias":-7},{"v0":2,"v1":3,"color":"ff22ff","cMask":["ball"],"cGroup":["ball"],"bias":7},{"v0":0,"v1":4,"color":"22ffff","cMask":["ball"],"cGroup":["ball"],"bias":7},{"v0":1,"v1":5,"curve":0.34191801557104434,"color":"ff22ff","cMask":["ball"],"cGroup":["ball"],"bias":-7},{"v0":3,"v1":6,"color":"ff22ff","cMask":["ball"],"cGroup":["ball"],"bias":7},{"v0":2,"v1":7,"color":"22ffff","cMask":["ball"],"cGroup":["ball"],"bias":-7},{"v0":4,"v1":8,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":7},{"v0":8,"v1":9,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":7},{"v0":9,"v1":7,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":7},{"v0":5,"v1":10,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":-7},{"v0":10,"v1":11,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":-7},{"v0":11,"v1":6,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"bias":-7},{"v0":12,"v1":13,"color":"ffffff","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"ffffff","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"curve":180,"color":"ffffff","cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":14,"v1":13,"curve":180,"color":"ffffff","cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":17,"v1":18,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":16,"v1":19,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":12,"v1":23,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":15,"v1":24,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":28,"v1":32,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":33,"v1":35,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":20,"v1":36,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":37,"v1":38,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":39,"v1":40,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":41,"v1":42,"color":"ffffff","cMask":[],"cGroup":[]},{"v0":43,"v1":44,"curve":89.99999999999999,"color":"ffffff","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":45,"v1":46,"curve":89.99999999999999,"color":"ffffff","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":48,"v1":47,"curve":89.99999999999999,"color":"ffffff","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":50,"v1":49,"curve":89.99999999999999,"color":"ffffff","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":52,"v1":51,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":51,"v1":52,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":51,"v1":52,"color":"ffffff","cMask":["wall"]},{"v0":54,"v1":53,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":53,"v1":54,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":53,"v1":54,"color":"ffffff","cMask":["wall"]},{"v0":55,"v1":56,"color":"ffffff","cMask":["wall"]},{"v0":56,"v1":57,"color":"ffffff","cMask":["wall"]},{"v0":57,"v1":58,"color":"ffffff","cMask":["wall"]},{"v0":59,"v1":60,"color":"ffffff","cMask":["wall"]},{"v0":60,"v1":61,"color":"ffffff","cMask":["wall"]},{"v0":61,"v1":62,"color":"ffffff","cMask":["wall"]},{"v0":67,"v1":68,"color":"ffffff","cMask":["wall"],"x":1200},{"v0":69,"v1":70,"color":"ffffff","cMask":["wall"],"x":-1200},{"v0":71,"v1":72,"curve":150,"color":"ffffff","cMask":["wall"],"curveF":0.2679491924311227},{"v0":73,"v1":74,"curve":150,"color":"ffffff","cMask":["wall"],"curveF":0.2679491924311227},{"v0":77,"v1":14,"color":"ffffff","bCoef":0.4,"cMask":["redKO","blueKO"],"cGroup":["wall"]},{"v0":79,"v1":78,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":78,"v1":79,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":78,"v1":79,"color":"ffffff","cMask":["wall"],"y":0},{"v0":81,"v1":80,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":80,"v1":81,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":80,"v1":81,"color":"ffffff","cMask":["wall"],"y":0},{"v0":83,"v1":82,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":82,"v1":83,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17,"y":0},{"v0":82,"v1":83,"color":"ffffff","cMask":["wall"],"y":0},{"v0":86,"v1":85,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":85,"v1":86,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":85,"v1":86,"color":"ffffff","cMask":["wall"]},{"v0":88,"v1":87,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":87,"v1":88,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":87,"v1":88,"color":"ffffff","cMask":["wall"]},{"v0":90,"v1":89,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":89,"v1":90,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":89,"v1":90,"color":"ffffff","cMask":["wall"]},{"v0":92,"v1":91,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":91,"v1":92,"curve":180,"color":"ffffff","cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":91,"v1":92,"color":"ffffff","cMask":["wall"]},{"v0":93,"v1":94,"curve":-181.17524911957554,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-48.48782653440003,0],"b":[39.67185807360002,58.77312307200003],"curve":-181.17524911957554,"radius":52.98016355378426,"center":[-4.709382883385538,29.838659515478316],"from":0.5777466202137024,"to":-2.5433340667083604}}},{"v0":95,"v1":96,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[46.273255257047076,49.70090379460611],"b":[68.55297075118085,23.993539762913297],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":95,"v1":97,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[46.273255257047076,49.70090379460611],"b":[18.852066956574735,18.852066956574735],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":97,"v1":98,"curve":30,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[18.852066956574735,18.852066956574735],"b":[-27.42118830047234,13.71059415023617],"curve":30,"radius":89.94318099777749,"center":[5.3095581975458295,-70.06573927204623],"from":1.4196541601696429,"to":1.9432529357679418}}},{"v0":99,"v1":100,"curve":20.194125067645682,"color":"22ffff","cMask":["wall"],"cGroup":["wall"]},{"v0":100,"v1":101,"curve":180,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-32.56266110681091,-54.84237660094467],"b":[-30.84883683803138,-82.26356490141701],"curve":180,"radius":13.737346554504432,"center":[-31.705748972421144,-68.55297075118084],"from":1.6332151367908543,"to":-1.508377516798939}}},{"v0":100,"v1":102,"curve":-188.7974107099908,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-32.56266110681091,-54.84237660094467],"b":[-27.42118830047234,-82.26356490141701],"curve":-188.7974107099908,"radius":13.990728796866417,"center":[-28.937263615161935,-68.35522179709089],"from":-1.4622202680689786,"to":1.8329161680603685}}},{"v0":103,"v1":104,"curve":-30,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-34.276485375590426,-30.84883683803138],"b":[13.71059415023617,-30.84883683803138],"curve":-30,"radius":92.70391888436659,"center":[-10.282945612677127,-120.39394628664795],"from":1.3089969389957472,"to":1.8325957145940461}}},{"v0":105,"v1":106,"curve":44.340260573930294,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[12.631519610634248,-58.396975084339246],"b":[16.059168148193294,-12.123719827292172],"curve":44.340260573930294,"radius":61.48011255986426,"center":[-42.43382670837374,-31.05448296783144],"from":-0.4608808067615975,"to":0.3130027314457166}}},{"v0":105,"v1":107,"curve":-30,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[12.631519610634248,-58.396975084339246],"b":[32.5626611068109,-63.41149794484228],"curve":-30,"radius":39.70393858286635,"center":[13.239863313166097,-98.09625287287858],"from":1.0625201496488497,"to":1.5861189252471486}}},{"v0":107,"v1":108,"curve":-30,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[32.5626611068109,-63.41149794484228],"b":[39.41795818192899,-11.996769881456649],"curve":-30,"radius":100.20463236325763,"center":[131.93149833931625,-50.49629240580897],"from":2.74724173349397,"to":-3.0123447980873177}}},{"v0":109,"v1":110,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[51.41472806338564,-15.42441841901569],"b":[1.7138242687795213,-11.996769881456649],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":109,"v1":111,"color":"22ffff","cMask":["wall"]},{"v0":111,"v1":84,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[54.84237660094468,3.4276485375590426],"b":[6.141472806338562,5.141472806338564],"radius":null,"center":[null,null],"from":null,"to":null}},"cGroup":["wall"]},{"v0":112,"v1":113,"curve":0,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[44.55943098826754,-15.424418419015694],"b":[71.98061928873989,-13.836753936975354],"curve":0}},"cGroup":["wall"]},{"v0":113,"v1":114,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[71.98061928873989,-13.836753936975354],"b":[73.6944435575194,-2.6338162965388725],"radius":null,"center":[null,null],"from":null,"to":null}},"cGroup":["wall"]},{"v0":116,"v1":117,"curve":50,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[-22.279715494133775,-59.983849407283245],"b":[-34.276485375590426,-66.83914648240133],"curve":50,"radius":16.347250274134506,"center":[-20.92748442499226,-76.2750759621145],"from":1.6536101280428375,"to":2.5262747540400023}},"cGroup":["wall"]},{"v0":102,"v1":118,"curve":100,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[-27.42118830047234,-82.26356490141701],"b":[-25.70736403169282,-68.55297075118085],"curve":100,"radius":9.01859749411677,"center":[-32.31655341342484,-74.68923317038114],"from":-0.9970196205439272,"to":0.7483096314504034}},"cGroup":["wall"]},{"v0":102,"v1":118,"curve":-100,"color":"22ffff","cMask":["wall"],"_data":{"mirror":{},"arc":{"a":[-27.42118830047234,-82.26356490141701],"b":[-25.70736403169282,-68.55297075118085],"curve":-100,"radius":9.01859749411677,"center":[-20.81199891874031,-76.1273024822167],"from":2.1445730330458677,"to":-2.3932830221393893}},"cGroup":["wall"]},{"v0":119,"v1":120,"curve":50,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[25.70736403169282,-82.26356490141701],"b":[25.70736403169282,-101.11563185799176],"curve":50,"radius":22.303895339172033,"center":[45.921558058834876,-91.68959837970439],"from":2.7052603405912103,"to":-2.7052603405912112}}},{"v0":121,"v1":122,"curve":50,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[6.855297075118085,-94.26033478287367],"b":[-5.141472806338563,-107.97092893310983],"curve":50,"radius":21.55396905885193,"center":[15.55814415412942,-113.97920987526396],"from":1.986430340969586,"to":2.859094966966751}}},{"v0":123,"v1":124,"curve":50,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[10.282945612677127,-121.68152308334601],"b":[8.569121343897606,-138.81976577114122],"curve":50,"radius":20.37739763865243,"center":[27.802573502961952,-132.08829842971107],"from":2.6055916881000485,"to":-2.804928993082373}}},{"v0":125,"v1":126,"curve":50,"color":"ff22ff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[27.421188300472334,-138.8197657711412],"b":[30.848836838031374,-164.527129802834],"curve":50,"radius":30.6835619884074,"center":[56.69982260626372,-147.99813978205268],"from":2.837811872887885,"to":-2.5727088082945366}}},{"v0":128,"v1":99,"curve":-20,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-33.85588961280001,-18.162608844800005],"b":[-29.37950876123138,11.507777497497607],"curve":-20,"radius":86.39930257438633,"center":[52.51686213503732,-16.02082434424421],"from":2.8173187153531845,"to":-3.116800741427536}}},{"v0":100,"v1":129,"curve":-20,"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-32.56266110681091,-54.84237660094467],"b":[-32.32521768960001,-1.4693280768000005],"curve":-20,"radius":153.68308899635352,"center":[118.90286047807231,-28.829156606480367],"from":2.9626110064726463,"to":-2.9715084503080744}}},{"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"v0":110,"v1":84,"_data":{"mirror":{},"arc":{"a":[1.7138242687795213,-11.996769881456649],"b":[6.141472806338562,5.141472806338564],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"22ffff","cMask":["wall"],"cGroup":["wall"],"v0":114,"v1":115,"_data":{"mirror":{},"arc":{"a":[73.6944435575194,-2.6338162965388725],"b":[53.12855233216516,-6.061464834097915],"radius":null,"center":[null,null],"from":null,"to":null}}}],"planes":[{"normal":[0,1],"dist":-635,"_data":{"extremes":{"normal":[0,1],"dist":-635,"canvas_rect":[-1275,-635,1543,644],"a":[-1275,-635],"b":[1543,-635]}}},{"normal":[0,-1],"dist":-635,"_data":{"extremes":{"normal":[0,-1],"dist":-635,"canvas_rect":[-1275,-635,1543,644],"a":[-1275,635],"b":[1543,635]}}},{"normal":[1,0],"dist":-1275,"_data":{"extremes":{"normal":[1,0],"dist":-1275,"canvas_rect":[-1275,-635,1543,644],"a":[-1275,-635],"b":[-1275,644]}}},{"normal":[-1,0],"dist":-1275,"_data":{"extremes":{"normal":[-1,0],"dist":-1275,"canvas_rect":[-1275,-635,1543,644],"a":[1275,-635],"b":[1275,644]}}}],"goals":[{"p0":[-1200.25,109],"p1":[-1200.25,-101],"team":"red","color":"ffffff"},{"p0":[1200.25,105],"p1":[1200.25,-105],"team":"blue","color":"ffffff"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"invMass":1.5,(ballMode)},{"radius":6,"invMass":0,"pos":[-1200,-105],"color":"1255a3"},{"radius":6,"invMass":0,"pos":[1200,-105],"color":"1255a3"},{"radius":6,"invMass":0,"pos":[-1200,105],"color":"1255a3"},{"radius":6,"invMass":0,"pos":[1200,105],"color":"1255a3"},{"radius":3,"invMass":1.5,"pos":[1200,-600],"color":"ffd700","cMask":["wall"]},{"radius":3,"invMass":1.5,"pos":[-1200,-600],"color":"ffd700","cMask":["wall"]},{"radius":3,"invMass":1.5,"pos":[1200,600],"color":"ffd700","cMask":["wall"]},{"radius":3,"invMass":1.5,"pos":[-1200,600],"color":"ffd700","cMask":["wall"]}],"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":(kickStr)},"ballPhysics":"disc0","spawnDistance":400,"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
var v10Map = '{"name":"10v9 ♿sindicato del hax♿","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[/* 0 */{"x":-1375,"y":115,"trait":"bb","color":"b2011a","cMask":["ball"]},/* 1 */{"x":-1375,"y":-115,"trait":"bb","color":"b2011a","cMask":["ball"]},/* 2 */{"x":-1375,"y":-485,"trait":"v","color":"FFFFFF"},/* 3 */{"x":-1375,"y":485,"trait":"v","color":"FFFFFF"},/* 4 */{"x":0,"y":-185,"trait":"ko","color":"11b7ff"},/* 5 */{"x":0,"y":-800,"trait":"ko"},/* 6 */{"x":0,"y":185,"trait":"ko","color":"11b7ff"},/* 7 */{"x":-1375,"y":-800,"trait":"bb","color":"FFFFFF"},/* 8 */{"x":-1375,"y":800,"trait":"bb","color":"FFFFFF"},/* 9 */{"x":1375,"y":-800,"trait":"bb","color":"FFFFFF"},/* 10 */{"x":1375,"y":-115,"trait":"bb","color":"00008b","cGroup":["ball"]},/* 11 */{"x":1375,"y":115,"trait":"bb","color":"00008b","cGroup":["ball"]},/* 12 */{"x":1375,"y":-485,"trait":"v","color":"FFFFFF"},/* 13 */{"x":1375,"y":485,"trait":"v","color":"FFFFFF"},/* 14 */{"x":0,"y":800,"trait":"ko"},/* 15 */{"x":1375,"y":800,"trait":"bb","color":"FFFFFF"},/* 16 */{"x":-891,"y":-13,"cGroup":["wall"],"cMask":["wall"]},/* 17 */{"x":-891,"y":-3,"cGroup":["wall"],"cMask":["wall"]},/* 18 */{"x":890,"y":-5,"cMask":["wall"],"cGroup":["wall"]},/* 19 */{"x":890,"y":5,"cMask":["wall"],"cGroup":["wall"]},/* 20 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 21 */{"cMask":["wall"],"cGroup":["wall"],"x":-42.5,"y":29},/* 22 */{"cMask":["wall"],"cGroup":["wall"],"x":43.5,"y":30},/* 23 */{"cMask":["wall"],"cGroup":["wall"],"x":86.5,"y":100},/* 24 */{"cMask":["wall"],"cGroup":["wall"],"x":115.5,"y":73},/* 25 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-37},/* 26 */{"cMask":["wall"],"cGroup":["wall"],"x":40.5,"y":-60},/* 27 */{"cMask":["wall"],"cGroup":["wall"],"x":-57.5,"y":-35},/* 28 */{"cMask":["wall"],"cGroup":["wall"],"x":76.5,"y":104},/* 29 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 30 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 31 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 32 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-79.10791561250448},/* 33 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.97184473452512,"y":29.0709040796512},/* 34 */{"cMask":["wall"],"cGroup":["wall"],"x":47.90064311143442,"y":30.045488040841747},/* 35 */{"cMask":["wall"],"cGroup":["wall"],"x":89.40961987520575,"y":95.34261344061139},/* 36 */{"cMask":["wall"],"cGroup":["wall"],"x":116.17316158174788,"y":70.77468610037135},/* 37 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-35.251637358927894},/* 38 */{"cMask":["wall"],"cGroup":["wall"],"x":40.9370095318302,"y":-55.64165242750204},/* 39 */{"cMask":["wall"],"cGroup":["wall"],"x":-54.4263484285878,"y":-33.30246943654669},/* 40 */{"cMask":["wall"],"cGroup":["wall"],"x":74.70055123837233,"y":102.16470116894556},/* 41 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.190043256900026,"y":-148.4050410122741},/* 42 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.08094399571257,"y":-81.10791561250448},/* 43 */{"cMask":["wall"],"cGroup":["wall"],"x":-38.190043256900026,"y":-147.4050410122741},/* 44 */{"cMask":["wall"],"cGroup":["wall"],"x":52.5,"y":-34},/* 45 */{"cMask":["wall"],"cGroup":["wall"],"x":78.5,"y":-49},/* 46 */{"cMask":["wall"],"cGroup":["wall"],"x":46.5,"y":-45},/* 47 */{"cMask":["wall"],"cGroup":["wall"],"x":70.5,"y":-59,"color":"ffffff"},/* 48 */{"cMask":["wall"],"cGroup":["wall"],"x":19.5,"y":-88},/* 49 */{"cMask":["wall"],"cGroup":["wall"],"x":49.5,"y":-48},/* 50 */{"cMask":["wall"],"cGroup":["wall"],"x":33.5,"y":-103},/* 51 */{"cMask":["wall"],"cGroup":["wall"],"x":66.5,"y":-58},/* 52 */{"cMask":["wall"],"cGroup":["wall"],"x":31.5,"y":-125,"color":"505050"},/* 53 */{"cMask":["wall"],"cGroup":["wall"],"x":26.5,"y":-137,"color":"505050"},/* 54 */{"cMask":["wall"],"cGroup":["wall"],"x":28.5,"y":-151,"color":"505050"},/* 55 */{"cMask":["wall"],"cGroup":["wall"],"x":29.5,"y":-169,"color":"505050"},/* 56 */{"cMask":["wall"],"cGroup":["wall"],"x":13.5,"y":-123,"color":"505050"},/* 57 */{"cMask":["wall"],"cGroup":["wall"],"x":5.5,"y":-135,"color":"505050"},/* 58 */{"cMask":["wall"],"cGroup":["wall"],"x":8.5,"y":-157,"color":"505050"},/* 59 */{"cMask":["wall"],"cGroup":["wall"],"x":12.5,"y":-176,"color":"505050"},/* 60 */{"cMask":["wall"],"cGroup":["wall"],"x":-6.5,"y":-158,"color":"505050"},/* 61 */{"cMask":["wall"],"cGroup":["wall"],"x":-10.5,"y":-183,"color":"505050"},/* 62 */{"cMask":["wall"],"cGroup":["wall"],"x":30.5,"y":-199,"color":"505050"},/* 63 */{"cMask":["wall"],"cGroup":["wall"],"x":37.5,"y":-232,"color":"505050"},/* 64 */{"cMask":["wall"],"cGroup":["wall"],"x":11.5,"y":-210,"color":"505050"},/* 65 */{"cMask":["wall"],"cGroup":["wall"],"x":6.5,"y":-257,"color":"505050"},/* 66 */{"cMask":["wall"],"cGroup":["wall"],"x":83.5,"y":-71,"color":"ffffff"},/* 67 */{"cMask":["wall"],"cGroup":["wall"],"x":75.5,"y":-56,"color":"ffffff"},/* 68 */{"cMask":["wall"],"cGroup":["wall"],"x":90.5,"y":-69,"color":"ffffff"},/* 69 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 70 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 71 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 72 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 73 */{"cMask":["wall"],"cGroup":["wall"],"x":-9.5,"y":-97},/* 74 */{"cMask":["wall"],"cGroup":["wall"],"x":-32.5,"y":-108},/* 75 */{"trait":"v","x":-1435,"y":-116,"cMask":["ball"]},/* 76 */{"x":-1435,"y":115,"cMask":["ball"]},/* 77 */{"trait":"v","x":1435,"y":-115,"cGroup":["ball"]},/* 78 */{"trait":"v","x":1435,"y":115,"cGroup":["ball"]}],"segments":[{"v0":1,"v1":0,"trait":"nc","color":"b2011a"},{"v0":3,"v1":2,"trait":"nc","curve":-180,"color":"FFFFFF","x":-1375},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"ff1115","curve":180},{"v0":4,"v1":6,"trait":"ko","vis":false},{"v0":7,"v1":1,"trait":"bb","x":-1375,"color":"FFFFFF"},{"v0":0,"v1":8,"trait":"bb","x":-1375,"color":"FFFFFF"},{"v0":9,"v1":7,"trait":"bb","y":-800,"color":"FFFFFF"},{"v0":11,"v1":10,"trait":"nc","color":"00008b"},{"v0":12,"v1":13,"trait":"nc","curve":-180,"color":"FFFFFF","x":1375},{"v0":6,"v1":14,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"11b7ff","curve":180},{"v0":6,"v1":14,"trait":"ko","vis":false},{"v0":15,"v1":11,"trait":"bb","x":1375,"color":"FFFFFF"},{"v0":10,"v1":9,"trait":"bb","x":1375,"color":"FFFFFF"},{"v0":8,"v1":15,"trait":"bb","y":800,"color":"FFFFFF"},{"v0":16,"v1":17,"curve":-180,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":180,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":110,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":-110,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":200.77771563093836,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":-180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":-110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":0,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":20,"v1":21},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":21,"v1":22},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":23},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":23,"v1":24},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":25,"v1":26,"curve":-35.13002937458595},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":27,"v1":28,"curve":-205.33386491629776},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":20,"v1":29,"curve":-183.8478819691025},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":30,"v1":31,"curve":173.88551652918804},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":33,"curve":-23.901187801606472},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":33,"v1":34},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":35},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":35,"v1":36},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":37,"v1":38,"curve":-35.5091927036537},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":39,"v1":40,"curve":-207.01754667045108},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":41,"curve":-184.00698891107533},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":42,"v1":43,"curve":173.70106103798304},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":46},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":47},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":46},{"curve":19.4007838878916,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":48,"v1":49},{"curve":-30.31978069668057,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":51},{"curve":121.41727565803163,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":48},{"curve":61.059411799868286,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53},{"curve":-84.79487559500053,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55},{"curve":84.54737801218732,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57},{"curve":2.4377504702625763,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59},{"curve":36.86989764584401,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":60,"v1":61},{"curve":49.55028113766386,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":62,"v1":63},{"curve":52.60804874942499,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":64,"v1":65},{"cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":66,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":67,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":68,"v1":66,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":69,"v1":70,"curve":197.59482141998248,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":71,"v1":72,"curve":-186.3596602397281,"color":"ffffff"},{"curve":129.3076481161066,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":73,"v1":74},{"color":"ffffff","trait":"v","v0":1,"v1":75},{"color":"ffffff","v0":75,"v1":76},{"color":"ffffff","v0":76,"v1":0},{"color":"ffffff","trait":"v","v0":10,"v1":77,"cGroup":["ball"]},{"color":"ffffff","trait":"v","v0":1,"v1":75,"cMask":["ball"]},{"color":"ffffff","trait":"v","v0":11,"v1":78,"cGroup":["ball"]},{"color":"ffffff","trait":"v","v0":0,"v1":76,"cMask":["ball"]},{"color":"ffffff","v0":77,"v1":78,"cGroup":["ball"]},{"color":"ffffff","v0":75,"v1":76,"cMask":["ball"]}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"invMass":1.5,(ballMode)},{"radius":6,"invMass":0,"pos":[-1375,-115],"color":"b2011a","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[1375,-115],"color":"00008b","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[-1375,115],"color":"b2011a","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[1375,115],"color":"00008b","cGroup":["ball"],"bCoef":0.5}],"goals":[{"team":"red","p0":[-1380,-115],"p1":[-1380,115]},{"team":"blue","p0":[1380,-115],"p1":[1380,115]},{"team":"red","p0":[-1381,-116],"p1":[-1380,113]}],"planes":[{"normal":[0,1],"dist":-835,"trait":"pb"},{"normal":[0,-1],"dist":-835,"trait":"pb"},{"normal":[1,0],"dist":-1475,"trait":"pb"},{"normal":[-1,0],"dist":-1470,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":1475,"height":835,"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":(kickStr)},"redSpawnPoints":[[-350,-100],[-350,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[350,100],[350,-100],[300,0],[500,0],[700,0]],"canBeStored":true,"spawnDistance":700}';


//intentamos
function roomUpNotification() {
    if (typeof window.HBInit === 'function') {
        var hrefs = document.querySelector("body iframe").contentDocument.querySelector("body div#roomlink a").text;
        //console.logg(hrefs);
        var roomDcWebhook = "https://discord.com/api/webhooks/1124426109551919197/KIQvCcC6PgQbWDnNbtdNW3rLwd9M04kxRlT1a366jMwQnAs0iulWw5Zda_4Q4JcbcK3d";
        sendAnnouncementToDiscord("@everyone Esta arriba el server " + roomName + ": " + hrefs, roomDcWebhook);
    }
}
/* setTimeout(() => {
    roomUpNotification();
}, 20000); */


/* OPTIONS */

var afkLimit = 30;
var drawTimeLimit = Infinity;
var maxTeamSize = 12; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */


var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6, ROLE: 7 };

// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'
const StatColumns = { GAMES: 0, WINS: 1, DRAWS: 2, LOSES: 3, WINRATE: 4, GOALS: 5, ASSISTS: 6, GK: 7, VI: 8, CP: 9, ROLE: 10, NICK: 11 }
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
// "\"[\\\"3138362E3139302E3132382E313630\\\",\\\"3135322E3137322E3134342E323132\\\", \\\"3230302E32352E35302E313334\\\", \"3139302E3133382E3133352E36\", \"3139302E3132332E38352E313230 \"]"
var banList = ["3138312E33312E3138302E313034", "3139302E3132332E38352E313230", "3139302E3133382E3133352E36", "3139302E3132332E38352E313230", "3135322E3137322E3134342E323132", "3139302E332E35302E3939", "3138312E36372E34332E313830", "3138312E36372E34332E313830"];

// map to know what is the current map
var currentMap = null;

/* STATS */

var game;
var GKList = [null, null];
var manualGKList = [null, null];
var noGkAnnouncement = true;
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = true; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(trainingMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

const frasesGOL = [" Golardo de  ", " Golazo de ", " rompio el arco el trolo de "]; // Goal phrases
const frasesASS = [" Con gran asistencia de ", " Con pase del trolo de "]; // Phrases of assists
const golcontra = [" Gol en contra del payaso ", " En contra del barrilete cosmico de "]; // Goal against phrases

const goleiro = [" mantiene la valla invicta! ", " es mejor que el dibu ", " no la deja pasar "]; // Goalkeeper phrases

const replaysdiscord = "https://discord.com/api/webhooks/1122709779811401770/rIJqN26CqkkJhij-do122dzzdC2chwArJ_3mzBejfEBz5EQQoAiSjPuEN4mzTAC3vovt";

function getDate() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear(),
        horas = data.getHours().toString().padStart(2, '0'),
        minutos = data.getMinutes().toString().padStart(2, '0');
    segundos = data.getSeconds().toString().padStart(2, '0');
    return `${dia}-${minutos}-${segundos}`;
}

function sendDiscordWebhook(scores) {
    const form = new FormData();
    form.append(
        "file",
        new File([room.stopRecording()],
            `${getDate()}-${roomNumber + 1}.hbr2`,
            { type: "text/plain" }
        )
    );

    const webhook = new XMLHttpRequest();
    webhook.open("POST", replaysdiscord);
    webhook.send(form);
}
/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function sendAnnouncementToDiscord(message, webhook) {

    var request = new XMLHttpRequest();
    request.open("POST", webhook); //sends a log with information about users who connect

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        avatar_url: '',
        username: 'Maxbot',
        content: message
    };

    request.send(JSON.stringify(params));
}

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    var d = d1 * d1 + d2 * d2;
    return Math.sqrt(d);
}

/* BUTTONS */

//asigna 1 o 2 specs x orden de llegada
function topBtn() {
    if (teamS.length == 0) {
        //console.logg("llego la lista vacia de specs")
        return;
    }
    else {
        var flipTeam = false;
        //console.logg("top btn called")
        for (var i = 0; i < teamS.length; i++) {
            if (flipTeam) {
                var player = teamS[i];
                var pid = player.id;
                room.setPlayerTeam(pid, Team.RED);
                teamR.push(player);
                //console.logg("+1 red " + player.name);
                flipTeam = false;
            } else {
                var player = teamS[i];
                var pid = player.id;
                room.setPlayerTeam(pid, Team.BLUE);
                teamB.push(player);
                //console.logg("+1 blue " + player.name);
                flipTeam = true;
            }
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        //console.logg("llego la lista vacia de specs")
        return;
    }
    else {
        var flipTeam = false;
        //console.logg("random btn called")
        var specLength = teamS.length;
        for (var i = 0; i < teamS.length; i++) {
            var player = teamS[getRandomInt(teamS.length)];
            var pid = player.id;
            if (flipTeam) {
                room.setPlayerTeam(pid, Team.RED);
                teamR.push(player);
                //console.logg("+1 red " + player.name);
                flipTeam = false;
            } else {
                room.setPlayerTeam(pid, Team.BLUE);
                teamB.push(player);
                //console.logg("+1 blue " + player.name);
                flipTeam = true;
            }
        }
        teamS.splice(0, specLength);
        //console.logg("teamS");
        //console.logg(teamS);

        //console.logg("teamR");
        //console.logg(teamR);

        //console.logg("teamB");
        //console.logg(teamB);
    }
    /* else {
        var playerdiff = Math.abs(teamR.length - teamB.length);
        if (playerDiff > 0) {
            if (teamS.length > 0) {
                for (var i = 0; i <= (playerdiff - teamS.length); i++) {
                    if (teamR.length < teamB.length) {
                        room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
                    } else {
                        room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    }
                }
            }
            return;
        }
    } */
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    //console.logg("resetting teams")
    setTimeout(() => { resettingTeams = false; }, 100);
    var teamRedLength = teamR.length;
    var teamBlueLength = teamB.length;
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        teamS.push(teamR[teamR.length - 1 - i]);

    }
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        teamS.push(teamR[teamR.length - 1 - i]);

    }
    teamR.splice(0, teamRedLength);
    teamB.splice(0, teamBlueLength);
}


function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */
function normalEndGame(scores) {
    if (scores.red != scores.blue) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 4000);
            scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
            setTimeout(() => {
                chooseField();
            }, 2000);
        }
        return;
    }
}
//esta funcion basicamente controla si el juego termino, si es tiempo extra, muestra mensajes y termina el juego
//usa un flag checkTimeVariable para evitar la ejecucion de ciertas cosas
//asume q nadie va a meter un gol en 1 segundo
function checkTime() {
    const scores = room.getScores();
    game.scores = scores;

    //si el tiempo termino
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        //console.logg("termino el tiempo")
        //si alguien gano
        normalEndGame(scores);
        //tiempo extra
        goldenGoal = true;
        room.sendChat("⏱️ A ver si gana alguien...");
    }
    /* if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ Leaving ends..");
        }
    }// despues de cierto tiempo de gol de oro para el partido && players.length > 2 */
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01) {
        if (checkTimeVariable == false) {
            //console.logg("paso el tiempo de empate")
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            setTimeout(() => { room.stopGame(); }, 2000);
            goldenGoal = false;
        }
    }
}

function resetAnimations() {
    //updateTeams();
    for (let index = 0; index < players.length; index++) {
        room.setPlayerAvatar(players[index].id, null);
    }
}

//calcula posecion muestra mensajes de posecion y arquero y actualiza stats
function endGame(winner) { // handles the end of a game : no stopGame call inside
    //players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null; //setea choosemode a true y slowmode a 2
    resetAnimations();

    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        //| Winning streak: " + streak + " 🏆"
        room.sendAnnouncement("🏆 " + currentTeams[0].longName + " gana! [" + scores.red + " - " + scores.blue + "]", null, 0xFDC43A, 'bold');
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 " + currentTeams[1].longName + "gana! [" + scores.blue + " - " + scores.red + "]", null, 0xFDC43A, 'bold');
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Timeout reached");
    }
    //room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    if (GKList.length > 1) {
        if (scores.red == 0 && GKList[1]) {
            room.sendAnnouncement("🧤🧤🧤 gg valla invicta soy el " + GKList[1].name + "! 🧤🧤🧤", null, 0xFDC43A, 'bold');
        } else if (scores.blue == 0 && GKList[0]) {
            room.sendAnnouncement("🧤🧤🧤 gg valla invicta soy el " + GKList[0].name + "! 🧤🧤🧤", null, 0xFDC43A, 'bold');
        }
    }


    //Object.keys(obj)[0]
    Object.entries(goalDictionary).sort((a, b) => b[1] - a[1]);
    var topGoalScorerId = Object.keys(goalDictionary)[0];
    var topGoals = goalDictionary[topGoalScorerId];
    var topGoalScorer = room.getPlayerList().filter((player) => player.id == topGoalScorerId)[0];
    //⚽
    if (topGoalScorer != undefined && topGoalScorer.name != undefined && scores.red + scores.blue > 0) {
        room.sendAnnouncement("🥇🥇🥇 " + topGoalScorer.name + " fue el maximo goleador con " + topGoals + " goles!🥇🥇🥇", null, 0xFDC43A, 'bold');
    }

    updateStats();
    sendDiscordWebhook(scores);
    room.sendAnnouncement("El partido fue grabado y enviado a discord: " + `${getDate()}-${roomNumber + 1}.hbr2`, null, Colors.Amrelo, 'bold');

}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 3000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendChat("🙋‍♂️ Recruitment mode started!");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("🙋‍♂️ Recruitment mode has ended.");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function getBgColor() {
    var hour = new Date().getHours();
    //la dif entre hora actual y mediodia se lo resto a mediodia
    if (hour > 12) {
        hour = 12 - (hour - 12);
    }
    return hslToHex(75, 40, hour + 5).toString(16);
}

function loadMap(map, scoreLim, timeLim) {
    console.log("cambiando mapa");
    if (currentMap == map && !reloadStadium) {
        //console.logg(currentMap.substring(0, 20));
        //console.logg(map.substring(0, 20));
        return;
    }
    reloadStadium = false;
    var replacedMap = map.replace("(bgcolor)", getBgColor())
    .replace("(ballMode)", currentPhysicsMode.ballMode)
    .replace("(kickStr)", currentPhysicsMode.kickStr);
    room.setCustomStadium(replacedMap);
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
    currentMap = map;
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
    players = room.getPlayerList().filter((player) => player.id != 0 && !isAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    // countAFK
    if (countAFK) {
        ////console.logg("handling activity");
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
        var afkList = room.getPlayerList().filter((player) => player.id != 0 && isAFK(player));
        ////console.logg("lista de afk" + afkList);
        for (var i = 0; i < afkList.length; i++) {
            /* //console.logg("seteando" + afkList[i].name)
            //console.logg(getActivity(afkList[i])); */
            setActivity(afkList[i], getActivity(afkList[i]) + 1);
            /* //console.logg(getActivity(afkList[i])); */
        }
        for (var i = 0; i < extendedP.length; i++) {
            if (extendedP[i][eP.ACT] == 45 && !extendedP[i][eP.AFK]) {
                var isMaster = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(extendedP[i][eP.ID])))) != null &&
                    JSON.parse(localStorage.getItem(getAuth(room.getPlayer(extendedP[i][eP.ID]))))[StatColumns.ROLE] == "master";
                if (isMaster) {
                    extendedP[i][eP.ACT] = 0;
                }
                room.sendAnnouncement("[ROBOT]⛔⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", si no te moves en  " + 5 + " segundos sale kick!⛔⛔", extendedP[i][eP.ID]);
            }
            if (extendedP[i][eP.ACT] > 45 && !extendedP[i][eP.AFK]) {
                extendedP[i][eP.ACT] = 0;
                //console.logg("kicked " + extendedP[i][eP.ID]);
                room.kickPlayer(extendedP[i][eP.ID], "Estabas afk amigo.", false);
            }
        }
    }

}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player?.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function isAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    ////console.logg("extendedp de player " + player.name);
    ////console.logg(extendedP.filter((a) => a[0] == player.id));

    try {
        return extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] != undefined ?
            extendedP.filter((a) => a[0] == player.id)[0][eP.ACT]
            : null;
    } catch (error) {
        return null;
    }
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    var gk = extendedP.filter((a) => a[0] == player.id)[0];
    if (gk != null && gk[eP.GK] != undefined && gk[eP.GK] != null) {
        return gk[eP.GK];
    } else {
        gk[eP.GK] = 0;
        return gk[eP.GK];
    }

}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    /* if (inChooseMode) {
        if (players.length == 6) {
            loadMap(bigMap, scoreLimitBig, timeLimitBig);
        }
        printSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    } */
    //console.logg("balance teams desde update role on plauer in")
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    /* 		if (inChooseMode) {
                if (players.length == 5) {
                    loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
                }
                if (teamR.length == 0 || teamB.length == 0) {
                    teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    return;
                }
                if (Math.abs(teamR.length - teamB.length) == teamS.length) {
                    room.sendChat("🤖 No choices let me handle this situation");
                    deactivateChooseMode();
                    resumeGame();
                    var b = teamS.length;
                    if (teamR.length > teamB.length) {
                        for (var i = 0 ; i < b ; i++) {
                            setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
                        }
                    }
                    else {
                        for (var i = 0 ; i < b ; i++) {
                            setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
                        }
                    }
                    return;
                }
                if (streak == 0 && room.getScores() == null) {
                    if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
                        room.sendChat("🤖 Balancing teams...");
                        teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
                    }
                }
                if (teamR.length == teamB.length && teamS.length < 2) {
                    deactivateChooseMode();
                    resumeGame();
                    return;
                }
                capLeft ? choosePlayer() : printSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
            } */
    balanceTeams();
}

function balanceTeams() {
    //console.logg("top btn desde balance teams");
    topBtn();
    // asigna al equipo q menos pj tiene los specs q falten para equilibrar
    /*if (teamR.length > teamB.length) {
        for (var i = 0; i < playerDiff; i++) {
            room.setPlayerTeam(teamS[i].id, Team.BLUE);
        }
    }
    else {
        for (var i = 0; i < playerDiff; i++) {
            room.setPlayerTeam(teamS[i].id, Team.RED);
        }
    } */
    //}// si hay menos specs q la cantidad q falta
    /*         else if (playerDiff > teamS.length) {
                //si el chabon esta solo
                if (players.length == 1) {
                    quickRestart();
                    loadMap(aloneMap, 0, 0);
                    room.setPlayerTeam(players[0].id, Team.RED);
                    return;
                }// si son 5 cambia el mapa 3v2 -> classic 2v2
                else if (players.length == 5) {
                    quickRestart();
                    loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
                }// si hay un jugador menos del maximo total no se q hace
                if (players.length == maxTeamSize * 2 - 1) {
                    allReds = [];
                    allBlues = [];
                }// si hay mas reds saca playerdiff reds a specs
                if (teamR.length > teamB.length) {
                    for (var i = 0; i < playerDiff; i++) {
                        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                    }
                }
                else {
                    for (var i = 0; i < playerDiff; i++) {
                        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                    }
                }
            }// si playerdif es menor a los spec y los eq tiene dif cant de jug
            else if (playerDiff < teamS.length && teamR.length != teamB.length) {
                room.pauseGame(true);
                activateChooseMode();
                choosePlayer(); 
            }//si hay 2 o mas specs y los eq estan iguales y el red no esta lleno
            else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
                //cambia el mapa si son 2 reds o sea si va a ser 3v3
                if (teamR.length == 2) {
                    quickRestart();
                    loadMap(bigMap, scoreLimitBig, timeLimitBig);
                }
                //asigna 1 o 2 specs por orden de llegada
                topBtn();
            } */

    //manejar cancha
}

function chooseField() {
    //console.logg("choosing field");
    var newMap = chooseMap();
    if (newMap != null) {
        room.stopGame();
        setTimeout(() => { room.startGame(); }, 3000);
        loadMap(newMap, scoreLimitClassic, timeLimitClassic);
        return newMap;
    }
}

function chooseMap() {
    //updateTeams();
    if (players.length < 5) {
        if (currentMap != v2Map || reloadStadium) {
            //console.logg("chose x2");
            return v2Map;
        }
        return null;
    } else if (players.length <= 6) {
        if (currentMap != v3Map || reloadStadium) {
            console.log("chose x3");
            return v3Map;
        }
        return null;
    } else if (players.length <= 10) {
        if (currentMap != v4Map || reloadStadium) {
            console.log("chose x4");
            return v4Map;
        }
        return null;
    } else if (players.length <= 12) {
        if (currentMap != v6Map || reloadStadium) {
            console.log("chose x6");
            return v6Map;
        }
        return null;
    } else if (players.length <= 14) {
        if (currentMap != v7Map || reloadStadium) {
            console.log("chose x7");
            return v7Map;
        }
        return null;

    } else if (players.length > 14) {
        if (currentMap != v10Map || reloadStadium) {
            console.log("chose x10");
            return v10Map;
        }
        return null;
    }
    return null;
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(
            function (player) {
                room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id);
                timeOutCap = setTimeout(
                    function (player) {
                        room.kickPlayer(player.id, "You didn't choose in time!", false);
                    },
                    chooseTime * 500, teamR[0]);
            },
            chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) printSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function printSpecList(player) {
    var cstm = "[PV] Players: ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */
var saveAnimationTimeout = true;
function animateGkSave(p) {
    if (lastPlayersTouched[0].team != p.team) {
        var gk = GKList.filter((player) => player.id == p.id);
        if (gk.length > 0) {
            animatingGk = true;
            if (saveAnimationTimeout) {
                room.setPlayerAvatar(p.id, "EL");
                setTimeout(() => {
                    room.setPlayerAvatar(p.id, "1!");
                    setTimeout(() => {
                        saveAnimationTimeout = true;
                    }, 1000);
                    setTimeout(() => {
                        room.setPlayerAvatar(p.id, null);
                        animatingGk = false;
                    }, 500);
                }, 500);
            }
            saveAnimationTimeout = false;
        }
    }
}

var passCombo = 0;
var passTimeout = true;
function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    if (lastPlayersTouched[0].team == players[i].team) {
                        if (passTimeout) {
                            passCombo++;
                            if (passCombo > 1) {
                                room.setPlayerAvatar(players[i].id, "X" + passCombo);
                                setTimeout((id) => {
                                    room.setPlayerAvatar(id, null);
                                }, 1000, players[i].id);
                            }
                            setTimeout(() => {
                                passTimeout = true;
                            }, 500);
                        }
                        passTimeout = false;
                    } else {
                        if (passCombo > 0) {
                            room.setPlayerAvatar(lastPlayersTouched[0].id, "😅");
                            setTimeout((id) => {
                                room.setPlayerAvatar(id, null);
                            }, 500, lastPlayersTouched[0].id);
                        }
                        passCombo = 0;
                    }


                    if (ballSpeed > 10) {
                        animateGkSave(players[i]);
                    }
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function colorBallSpeed(ballSpeed) {
    //70 para abajo logaritmico
    //100 -> 0 
    //0 -> 70
    var hue = (60 - ballSpeed) > 0 ? Math.round(60 - ballSpeed) : 0;
    var l = (90 - hue) < 50 ? (90 - hue) : 50;
    colorInt = hslToHex(hue, 90, l);
    room.setDiscProperties(0, { color: colorInt });
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;

        colorBallSpeed(ballSpeed);
    }
    if (manualGKList[0] == null || manualGKList[1] == null) {
        if (noGkAnnouncement) {
            noGkAnnouncement = false;
            noGkNotification();
            setTimeout(() => {
                noGkAnnouncement = true;
            }, 10000);
        }

        /* calculateGk();
        findGK(); */
    }

    setGkAvatar(manualGKList[0]?.id, manualGKList[1]?.id);

    function noGkNotification() {
        for (let i = 0; i < manualGKList.length; i++) {
            if (manualGKList[i] == null) {
                var msg = 'Tu equipo no tiene arquero!! ofrecete de arquero con !gk !!';
                var correctedTeamIndex = i + 1;
                var emoji = correctedTeamIndex == Team.RED ? '🟥' : '🟦';
                var message = `[${emoji}] [🤖]: ${msg}`;
                var team = getTeamArray(correctedTeamIndex, true);
                var color = correctedTeamIndex == Team.RED ? Colors.Vermelho : Colors.Azul;
                var style = 'bold';
                var mention = HaxNotification.CHAT;
                sendAnnouncementTeam(message, team, color, style, mention);
            }
        }
    }

    function calculateGk() {
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position == null || teamR[i].position == undefined) {
                updateTeams();
            }
            if (teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position == null || teamB[i].position == undefined) {
                updateTeams();
            }
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    }
}

function updateStats() {
    //&& allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize
    // && (game.scores.time >= (1/3) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit)
    console.log("update stats");
    if (players.length >= 2) {
        var stats;
        //console.logg("inside stats");
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[StatColumns.GAMES]++;
            lastWinner == Team.RED ? stats[StatColumns.WINS]++ : lastWinner == Team.BLUE ? stats[StatColumns.LOSES]++ : stats[StatColumns.DRAWS]++;
            stats[StatColumns.WINRATE] = (100 * stats[StatColumns.WINS] / stats[StatColumns.GAMES]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[StatColumns.GAMES]++;
            lastWinner == Team.BLUE ? stats[StatColumns.WINS]++ : lastWinner == Team.RED ? stats[StatColumns.LOSES]++ : stats[StatColumns.DRAWS]++;
            stats[StatColumns.WINRATE] = (100 * stats[StatColumns.WINS] / stats[StatColumns.GAMES]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[StatColumns.GOALS]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[StatColumns.ASSISTS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0]?.id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[StatColumns.GK]++;
            game.scores.blue == 0 ? stats[StatColumns.VI]++ : null;
            stats[StatColumns.CP] = (100 * stats[StatColumns.VI] / stats[StatColumns.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1]?.id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[StatColumns.GK]++;
            game.scores.red == 0 ? stats[StatColumns.VI]++ : null;
            stats[StatColumns.CP] = (100 * stats[StatColumns.VI] / stats[StatColumns.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
        room.sendAnnouncement("Estadisticas guardadas", null, Colors.Amrelo, 'bold');
    }
}

var gkFlag = true;
var gkEmojiSet = false;

function setGkAvatar(redGkId, blueGkId) {
    if (gkFlag) {
        if (gkEmojiSet) {
            redGkId ? room.setPlayerAvatar(redGkId, null) : null;
            blueGkId ? room.setPlayerAvatar(blueGkId, null) : null;
            gkEmojiSet = false;
        } else {
            redGkId ? room.setPlayerAvatar(redGkId, "🧤") : null;
            blueGkId ? room.setPlayerAvatar(blueGkId, "🧤") : null;
            gkEmojiSet = true;
        }

        setTimeout(() => {
            gkFlag = true;
        }, 600);
    }
    gkFlag = false;
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                room.setPlayerAvatar(tab[0][1].id, null);
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);

            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                room.setPlayerAvatar(tab[1][1].id, null);
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);

            }
        }
    }

    GKList = [tab[0][1], tab[1][1]];
}

/* setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!excludedRows.includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.GAMES])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!excludedRows.includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.WINS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!excludedRows.includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.GOALS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!excludedRows.includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.ASSISTS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!excludedRows.includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000); */

/* EVENTS */
function randomUniforms() {
    console.log("entra a random uniforms");
    currentTeams = [];
    /* var red = generateRandomInteger(1, 100) % 2 ? generateRandomInteger(0, 10) : Math.abs(generateRandomInteger(350, 359));
    var redL = generateRandomInteger(40, 45);
    var redSat = generateRandomInteger(70, 75);
    var redPalette = generatePalette(red, redSat, redL);

    var altRedColor = redPalette[generateRandomInteger(1, redPalette.length - 1)];

    var redAvatarColor = pickBgColor(altRedColor.toString(16));

    var blue = (red + 240) % 360;

    var blueL = generateRandomInteger(40, 45);
    var blueSat = generateRandomInteger(70, 75);

    var bluePalette = generatePalette(blue, blueSat, blueL);


    var altBlueColor = bluePalette[generateRandomInteger(1, redPalette.length - 1)];

    var blueAvatarColor = pickBgColor(altBlueColor.toString(16));

    var redAngle = generateRandomInteger(0, 4) * 45;
    var blueAngle = generateRandomInteger(0, 4) * 45;
    var blueColor = hslToHex(blue, blueSat, blueL);
    //console.logg("blue " + blueColor + " bluesat " + blueSat); 

    //console.logg("red " + redColor + " redsat " + redSat); 
    room.setTeamColors(
        Team.BLUE,
        blueAngle,
        "#000000",
        chooseRandomColorAmount(bluePalette[0], altBlueColor));


    room.setTeamColors(
        Team.RED,
        redAngle,
        "#000000",
        chooseRandomColorAmount(redPalette[0], altRedColor)); */

    var randomIndexes = [generateRandomInteger(0, argTeams.length - 1), generateRandomInteger(0, argTeams.length - 1)];
    while (randomIndexes[0] == randomIndexes[1]) {
        randomIndexes = [generateRandomInteger(0, argTeams.length - 1), generateRandomInteger(0, argTeams.length - 1)];
    }
    var randomTeams = [{ index: randomIndexes[0], teamID: Team.RED }, { index: randomIndexes[1], teamID: Team.BLUE }];
    randomTeams.forEach(team => {
        //x.teamID - 1
        var teamData = argTeams[team.index];
        currentTeams.push(teamData);
        console.log(teamData);
        room.setTeamColors(
            team.teamID,
            teamData.uniform[UNIFORME_OFICIAL].angle,
            teamData.uniform[UNIFORME_OFICIAL].avatarColor,
            teamData.uniform[UNIFORME_OFICIAL].mainColor);

    });
    room.sendAnnouncement("Comienza la final paralimpica y los equipos salen a la cancha!", null, 0x05C5FF, 'bold');
    room.sendAnnouncement(currentTeams[0].longName, null, Colors.Vermelho, 'bold');
    room.sendAnnouncement("🆚", null, 0xFF0000, null);
    room.sendAnnouncement(currentTeams[1].longName, null, Colors.Azul, 'bold');

    function chooseRandomColorAmount(color1, color2) {
        randomShirt = generateRandomInteger(0, 100);
        var colors = []
        if (randomShirt < 55) {
            if (generateRandomInteger(0, 100) > 60) {
                colors.push(color1);
                colors.push(color2);
                colors.push(color1);
            } else {
                colors.push("0xFFFFFF");
                colors.push(color1);
                colors.push("0xFFFFFF");
            }

        } else if (randomShirt < 85) {
            colors.push(color1);
            colors.push(color2);
        } else {
            colors.push(color1);
        }
        return colors;
    }
}

function getAlternateUniform(team) {
    room.setTeamColors(
        x.teamID,
        teams[x.int - 1].uniform[UNIFORME_OFICIAL].angle,
        teams[x.int - 1].uniform[UNIFORME_OFICIAL].avatarColor,
        teams[x.int - 1].uniform[UNIFORME_OFICIAL].mainColor);
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
        const caritas = ["😤", "😏", "🥴", "🤬", "🤪", "😠", "😃", "🧐", "🤷‍♀️", "🤦‍♂️", "🧙‍♂️", "😗", "😙", "😛", "🥱"]
        room.setPlayerAvatar(player.id, caritas[getRandomInt(caritas.length - 1)]);
        setTimeout(() => {
            room.setPlayerAvatar(player.id, null);
        }, 500);
    }
}

/* PLAYER MOVEMENT */
function customBalancePlayer(player) {
    if (teamR.length <= teamB.length) {
        room.setPlayerTeam(player.id, Team.RED);
        teamR.push(player);
    } else {
        room.setPlayerTeam(player.id, Team.BLUE);
        teamB.push(player);
    }
}

room.onPlayerJoin = function (player) {
    var list = JSON.parse(localStorage.getItem("ban_list"));
    if (list) {
        banList = list;
    } else {
        localStorage.setItem("ban_list", JSON.stringify(banList));
    }

    if (banList.includes(player.conn)) {
        room.kickPlayer(player.id, "hablame al discord si queres jugar en paz", true);
    }



    if (localStorage.getItem(player.auth) != null) {
        var playerRole = JSON.parse(localStorage.getItem(player.auth))[StatColumns.ROLE];
        extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false, playerRole]);
        if (playerRole != "player") {
            room.setPlayerAdmin(player.id, true);
            /* room.sendAnnouncement((JSON.parse(localStorage.getItem(player.auth))[StatColumns.ROLE] == "master" ? "The Administrator " : "The Administrator ") + player.name + " connected!", null, 0xD81826); */
        } else {
            var adminCount = room.getPlayerList().filter((player) => player.id != 0 && player.admin).length;
            slotsAvailable = maxPlayers - (3 - Math.min(3, adminCount));
            if (players.length >= slotsAvailable) {
                room.kickPlayer(player.id, "slot reservado para admins!", false); eP.ACT
            }
        }
    } else {
        //const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6, GOALS: 7, ROLE: 8 };
        extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false, "player"]);
    }

    updateTeams();

    //si entro un spec cambia a mapa de entrenamiento
    if (players.length == 1) {
        quickRestart();
        loadMap(trainingMap, 0, 0);
        room.setPlayerTeam(players[0].id, Team.RED);
        randomUniforms();
    }// si la dif de jugadores entre eq es igual a la cantidad de specs, y specs > 0
    //else if (teamS.length > 0 && playerDiff == teamS.length) {
    if (players.length == 2) {//no entiendo bien esta condicion
        quickRestart();
        chooseField();
    }

    //console.logg("custom balance team on player join. id: " + player.id);
    //custom balance
    customBalancePlayer(player);

    //balanceTeams();
    ////console.logg("elegimos cancha on player join");
    //chooseField();
    //updateRoleOnPlayerIn();
    var webhook = "https://discord.com/api/webhooks/1127114730906079252/vFdbCfnppFnVlQWazM1IoRLCSrYWLjFokP3yFRNS8IgRftIrw9vNUkQfjvUWSqrDi1dE";
    sendAnnouncementToDiscord(
        "```" + "[📝] Informacion del jugador ⏰" + "\n" +

        "El jugador **" + player.name + "** entro a la sala: **" + roomName + "**\n" +
        "conn: " + player.conn + " 🌎" +
        "\n" + "auth: " + player.auth + " 💻" + "\n" +
        "Fecha: " + `${getDateInfo()}` + "```", webhook);
    room.sendAnnouncement(
        `👋🏼 Hola ${player.name}! Bienvenido capo!\nJuga sin trollear y mantengamos el bardo al minimo!`,
        player.id,
        0xFFFF00,
        'bold',
    );
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    //console.logg("on player team change" + changedPlayer.name);
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (isAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS && byPlayer != null && byPlayer.admin) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(changedPlayer.name + " Esta AFK! 😴", Colors.Laranja);
        return;
    }

    if (changedPlayer.team != Team.SPECTATORS) {
        (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
    }
    /* if (room.getScores() != null) {
        var scores = room.getScores();
        //&& scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2
        if (changedPlayer.team != Team.SPECTATORS) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    } */
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }

    updateTeams();
    /*     //console.logg("update teams");
        //console.logg("players");
        //console.logg(players);
        //console.logg("red");
        //console.logg(teamR);
        //console.logg("blue");
        //console.logg(teamB);
        //console.logg("specs");
        //console.logg(teamS); */
    /* if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
                }
            }
            return;
        }//equipos llenos o equipos iguales y specs < dif entre teams
        else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        }
        else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        }
        else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        }
        else {
            choosePlayer();
        }
    } */
    //balanceTeams();
    /* //console.logg("elegimos cancha on player team change");
    chooseField(); */
}

setInterval(() => {
    printDiscord();
}, 120000);

setInterval(() => {
    printVc();
}, 180000);

setInterval(() => {
    printRules();
}, 240000);

function printDiscord() {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD);
    room.sendAnnouncement("https://discord.gg/KvfgRc7sfG ⬅", null, null);
}

function printVc() {
    var msg = "TIP: ¿Querés hablar con los pibes? Entra al VC del discord: " + voiceChatLink[roomNumber];
    room.sendAnnouncement(msg, null, 0x00FF00);
}

function printRules() {
    room.sendAnnouncement(" 😮‍💨 ╿ Reglas del host ⬅", null, 0x8466FD);
    room.sendAnnouncement(" #1 Respetar a los jugadores ", null, null);
    room.sendAnnouncement(" #2 Trollear, tosquear redes o tosquear a jugadores está prohibido! ", null, null);
    room.sendAnnouncement(" #3 No usar el comando !admin de forma imbécil ", null, null);
    room.sendAnnouncement(" #4 No suplantar identidades para molestar ", null, null);
    room.sendAnnouncement(" #5 Bardear está permitido, pero no pasarse de la raya! ", null, null);
}


function afkCommand(player, message) {
    if (AFKSet.has(player.id)) {
        if (AFKMinSet.has(player.id)) {
            room.sendAnnouncement(
                `Espera un minimo de ${minAFKDuration} segundos para volver al partido!`,
                player.id,
                Colors.Vermelho,
                'bold',
                null
            );
        } else {
            AFKSet.delete(player.id);
            room.sendAnnouncement(
                `🌅 ${player.name} no esta mass AFK!`,
                null,
                Colors.Laranja,
                'bold',
                null
            );
            //console.logg("Sacando de afk " + teamS);
            setAFK(player, false);
            updateTeams();
            balanceTeams();
            //console.logg("Sacando de afk updated " + teamS);
            /* handlePlayersJoin(); */
        }
    } else {
        if (AFKCooldownSet.has(player.id)) {
            room.sendAnnouncement(
                `Podes irte AFK una vez cada ${AFKCooldown} minutos!`,
                player.id,
                Colors.Vermelho,
                'bold',
                null
            );
        } else {
            AFKSet.add(player.id);
            if (!player.admin) {
                AFKMinSet.add(player.id);
                AFKCooldownSet.add(player.id);
                setTimeout(
                    (id) => {
                        AFKMinSet.delete(id);
                    },
                    minAFKDuration * 1000,
                    player.id
                );
                setTimeout(
                    (id) => {
                        pid = id;
                        if (AFKSet.has(pid)) {
                            console.log("id en afk " + pid);
                            var p = room.getPlayer(pid);
                            if (p == null) {
                                AFKSet.delete(pid);
                                console.log("habia q kickear a uno pero no estaba?");
                                return;
                            }
                            console.log("player = " + p)
                            var isAdmin = JSON.parse(localStorage.getItem(getAuth(p))) != null &&
                                JSON.parse(localStorage.getItem(getAuth(p)))[StatColumns.ROLE] != "player";
                            if (!isAdmin) {
                                AFKSet.delete(pid);
                                room.kickPlayer(pid, "No podes estar afk mas de 20 minutos amigo.", false);
                                console.log("Kickee a uno por estar afk mucho tiempo");
                            }
                        }
                    },
                    maxAFKDuration * 60 * 1000,
                    player.id
                );
                setTimeout(
                    (id) => {
                        AFKCooldownSet.delete(id);
                    },
                    AFKCooldown * 60 * 1000,
                    player.id
                );
            }
            room.setPlayerTeam(player.id, Team.SPECTATORS);

            setAFK(player, !isAFK(player));

            updateTeams();
            //balanceTeams(); aca capaz es mejor custom balance
            customBalancePlayer(player.id);
            index = manualGKList.findIndex(p => p?.id == player.id);
            if (index != -1) {
                room.setPlayerAvatar(index, "");
                manualGKList[index] = null;
                noGkAnnouncement = true;
            }

            console.log("gk manual list: " + manualGKList[0] + " " + manualGKList[1]);
            room.sendAnnouncement(
                `😴 ${player.name} esta AFK!`,
                null,
                Colors.Laranja,
                'bold',
                null
            );
            //isAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
        }
    }
}

function sendMessageToAdminsCommand(player, originalMessage) {
    var dcWebhook = 'https://discord.com/api/webhooks/1126958366770602127/TQNyGf3wanCMgTbzLdYXi4aFubaqpd1ag3RXCcRAlnvRu5xmO9nzv2fTFG_PNzW1Dxcr';
    sendAnnouncementToDiscord("<@&1122229514735472794> <@&1122229514735472793> \n usuario " + player.name + " pide admin en  sala:  " + (roomNumber + 1) + "\n mensaje: **" + originalMessage + "**", dcWebhook);
}

room.onPlayerLeave = function (player) {
    var index = handlePlayerExit();
    function handlePlayerExit() {
        setActivity(player, 0);
        players = room.getPlayerList().filter((player) => player.id != 0 && !isAFK(player));

        var index = Array.prototype.findIndex.call(players, (x) => x.id === player.id);
        if (player.team == Team.RED) {
            if (manualGKList[0]?.id == player.id) {
                manualGKList[0] = null;
            }
            teamR.splice(index, 1);
        } else if (player.team == Team.BLUE) {
            if (manualGKList[1]?.id == player.id) {
                manualGKList[1] = null;
            }
            teamB.splice(index, 1);
        } else {
            teamS.splice(index, 1);
        }
        return index;
    }
}

function notifyBanToDiscord(player, ep, byPlayer, reason) {
    var name = (player != null && player.name != null) ? player.name : "noname";
    var webhook = "https://discord.com/api/webhooks/1128202273030418493/6OLRtWLHcVGkZHAdRjIy9axIumVldLlrga199AQQeLr2lxVFf0fDMJLNhRohcFCoNSTP";
    sendAnnouncementToDiscord(
        "```" + "[📝] Informacion del ban ⏰" + "\n" +

        "El jugador **" + name + "** fue baneado en la sala **" + (roomNumber + 1) + "** por el admin **" + byPlayer?.name + "**\n" +
        "razon: " + reason + " 📝" +
        "conn: " + ep[eP.CONN] + " 🌎" +
        "\n" + "auth: " + ep[eP.AUTH] + " 💻" + "\n" +
        "Fecha: " + `${getDateInfo()}` + "```", webhook);
}

function getPlayerById(id) {
    return extendedP.filter((a) => a[eP.ID] == id) != null ? extendedP.filter((a) => a[0] == id)[0] : null;;
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    if (kickedPlayer.admin && byPlayer != null && byPlayer.admin) {
        return null;
    }

    if (ban) {
        var playerBanned = getPlayerById(kickedPlayer.id);

        if (byPlayer != null) {
            var isMaster = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(byPlayer.id)))) != null &&
                JSON.parse(localStorage.getItem(getAuth(room.getPlayer(byPlayer.id))))[StatColumns.ROLE] == "master";
            if (isMaster) {
                var list = JSON.parse(localStorage.getItem("ban_list"));
                list.push(playerBanned[eP.CONN]);
                localStorage.setItem("ban_list", JSON.stringify(list));
            } else {
                console.log("no encontro la ban list");
            }
        }

        notifyBanToDiscord(kickedPlayer, playerBanned, byPlayer, reason);
    }
}

var meMideCommandTimeout = new Set();
function printMeMideCommand(player) {
    if (!meMideCommandTimeout.has(player.id)) {
        room.sendAnnouncement("「🤖」MAXBOT: A " + player.name + " le mide " + getRandomInt(50) + " CM.", null, 0xEAC274);
        meMideCommandTimeout.add(player.id);
        setTimeout(() => {
            meMideCommandTimeout.delete(player.id);
        }, 10000);
    }
}

var humiliateCommandTimeout = new Set();
const humilliatingVerbs = [" le robo el novio a ", " le meo la cara a ", " le hizo aplaudir las nalgas a ", " le hizo un brrr en la cola a ", " le toco el culo a ", " le ficho el bulto a ", " se caso con ", " embarazo a ", " fue embarazado por ", " le dio unos besitos a ", " se cago a trompadas con ", " chapo con ", " mecho uno con ", " reforzo amistad con ", " sale con el papa de ", " rechazo los avances sexuales no solicitados de ", " le pidio plata y nunca se la devolvio a ", " le dio un arrimon a ", " sale con la prima de ", " se unto en aceite y se le tiro encima a ", " se puso en tanga y le bailo a ", " y el admin salieron de travas y lo encontraron a ", " es un comilon como ", " piensa que el mejor jugador es ", " dice que el mas burro es ", " le dio play a la peli xno de enanos y la actriz principal era ", " piensa que el mas puto es ", " entró a su casa y vio a su hermana con ", " ya vio el video porno de ", " se creo una cuenta en brazzers con el gmail de ", " esta pidiendo que lo solicite a ", " rompio en llanto cuando vio a su prima con "];
function printHumiliateCommand(player) {
    if (!humiliateCommandTimeout.has(player.id)) {
        var verbIndex = getRandomInt(humilliatingVerbs.length);
        updateTeams();
        victim = players[getRandomInt(players.length)];
        room.sendAnnouncement("「🤖」MAXBOT: " + player.name + humilliatingVerbs[verbIndex] + victim.name, null, 0xEAC274);
        humiliateCommandTimeout.add(player.id)
        setTimeout(() => {
            humiliateCommandTimeout.delete(player.id)
        }, 30000);
    }
}

/* PLAYER ACTIVITY */
function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamR;
    if (team == Team.BLUE) return teamB;
    if (includeAFK) {
        return players.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamS;
}

function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '🟥' : player.team == Team.BLUE ? '🟦' : '⬜';
    var message = `[${emoji}] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team, true);
    var color = player.team == Team.RED ? Colors.Vermelho : player.team == Team.BLUE ? Colors.Azul : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function getTop5ForStat(column) {
    var tableau = [];
    try {
        Object.keys(localStorage).forEach(function (key) {
            if (!excludedRows.includes(key)) {
                var pStats = JSON.parse(localStorage.getItem(key));
                if (pStats == null || pStats[column] == null || pStats[StatColumns.NICK] == null) {
                    console.log("entro uno null" + pStats);
                    return null;
                }
                tableau.push([pStats[StatColumns.NICK], pStats[column]]);
            }
        });
    }
    catch (error) {
        console.log(error);
    }

    tableau.sort(function (a, b) { return b[1] - a[1]; });
    return tableau.slice(0, 5);
}

function physicsModeCommand(mode){
    console.log(mode);
    console.log(currentPhysicsMode.name);
    if(mode != currentPhysicsMode.name) {
        if (mode == physicsMode.normal.name) {
            currentPhysicsMode = physicsMode.normal;
        } else if (mode == physicsMode.gravity.name){
            currentPhysicsMode = physicsMode.gravity;
        } else if (mode == physicsMode.power.name){
            currentPhysicsMode = physicsMode.power;
        }
        reloadStadium = true;
    }
}

function gkCommand(player) {
    var ePlayer = room.getPlayer(player.id);
    if (player.team == Team.BLUE) {
        if (manualGKList[1] == null) {
            manualGKList[1] = player;
            GKList[1] = player;
            room.sendAnnouncement("「🤖」MAXBOT: " + ePlayer.name + " Se ofrecio como gk de " + currentTeams[1].longName + ". Pedile que escriba !gk de nuevo para liberar el puesto", null, 0xEAC274, "bold", 1);
        } else if (manualGKList[1].id == player.id) {
            manualGKList[1] = null;
            noGkAnnouncement = true;
            room.setPlayerAvatar(player.id, null);
        } else {
            var gk = room.getPlayer(manualGKList[1].id);
            console.log(ePlayer);
            room.sendAnnouncement("「🤖」MAXBOT: " + gk.name +
                " es el arquero de tu equipo. Pedile que escriba !gk de nuevo para liberar el puesto", player.id, 0xEAC274, "bold", 1);
        }
    } else if (player.team == Team.RED) {
        if (manualGKList[0] == null) {
            manualGKList[0] = player;
            GKList[0] = player;
            room.sendAnnouncement("「🤖」MAXBOT: " + ePlayer.name + " Se ofrecio como gk de " + currentTeams[0].longName + ". Pedile que escriba !gk de nuevo para liberar el puesto", null, 0xEAC274, "bold", 1);
        } else if (manualGKList[0].id == player.id) {
            manualGKList[0] = null;
            noGkAnnouncement = true;
            room.setPlayerAvatar(player.id, null);
        } else {
            var gk = room.getPlayer(manualGKList[0].id);
            console.log(ePlayer);
            room.sendAnnouncement("「🤖」MAXBOT: " + gk.name +
                " es el arquero de tu equipo. Pedile que escriba !gk de nuevo para liberar el puesto", player.id, 0xEAC274, "bold", 1);
        }
    }
}

let
    palavras = ["mogolico", "retrasado", "enfermo", "enfermito", "down", "matate", "morite", "suicidate", "mueras", "violado", "http", "cp", "cancer"], //swearing filter

    regex = new RegExp(palavras.join("|"), 'gi');

room.onPlayerChat = function (player, message) {
    message = message.trim();
    if (message == '') {
        return false;
    }

    isMaster = extendedP.filter((p) => p[eP.ID] == player.id)[eP.ROLE] == "master";

    if (message.match(regex) && !isMaster) {
        if (message.match(regex) && player.admin) {
            //cambiar cosito del gk
            room.sendAnnouncement("「🟨」" + player.name + ": " + message + "", player.id, 0xEAC274, 'bold');
            return false;
        }
        //cambiar cosito del gk
        if (player.team == Team.BLUE) {
            room.sendAnnouncement("「🟦」" + player.name + ": " + message, player.id, 0x89cff0);
        } else if (player.team == Team.RED) {
            room.sendAnnouncement("「🟥」" + player.name + ": " + message, player.id, 0xe38d7d);
        } else {
            room.sendAnnouncement("「⬜」" + player.name + ": " + message, player.id, 0xFFFFFF);
        }
        return false;
    }

    msg = message;
    originalMessage = message;
    message = message.split(/ +/);

    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendChat("[PV] Player commands: !me, !games, !wins, !goals, !assists, !cs", player.id);
        player.admin ? room.sendChat("[PV] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
    }
    if (["!vote"].includes(message[0].toLowerCase()) && message.length > 1) {
        if (room.getPlayerList().length < 4) {
            room.sendAnnouncement("No se puede votar si hay menos de 4 personas.", player.id, 0xFF0000, "bold", 2);
            return false;
        }
        if (["pausa"].includes(message[1].toLowerCase())) {
            console.log("vote pause");
            var votesRequired = Math.round((room.getPlayerList().length) * 1 / 4);

            var votingP = getPlayerById(player.id);
            if (pauseVotingPlayers.has(votingP[eP.AUTH])) {
                room.sendAnnouncement("「🤖」MAXBOT: No podes votar mas de 1 vez por votacion.", player.id, 0xFF0000, "bold", 2);
                return false;
            }
            pauseVoteCount++;

            if (pauseVoteCount == 1) {
                room.sendAnnouncement("「🤖」MAXBOT: Empezo votacion de " + pauseState ? "despausa " : "pausa \n"
                    + "La votacion dura 60 segundos. \n"
                    + "Se requieren " + votesRequired + " votos.", null, 0xEAC274, "bold", 1);

                setTimeout(() => {
                    room.sendAnnouncement("「🤖」MAXBOT: Termino la votacion de " + pauseState ? "despausa: " : "pausa: " + pauseVoteCount + "/" + votesRequired + " votos.", null, 0xEAC274, "bold", 1);
                    pauseVoteCount = 0;
                    pauseVotingPlayers = new Set();
                }, votePauseTimeout);
            }

            if (pauseVoteCount >= votesRequired) {
                room.sendAnnouncement("「🤖」MAXBOT: Juego " + pauseState ? "despausado: " : "pausado: " + pauseVoteCount + "/" + votesRequired + " votos.", null, 0xEAC274, "bold", 1);
                pauseState = !pauseState;
                room.pauseGame(pauseState);
                pauseVoteCount = 0;
                pauseVotingPlayers = new Set();
            } else {
                room.sendAnnouncement("「🤖」MAXBOT: Voto para pausa: Van " + pauseVoteCount + "/" + votesRequired + " votos.", null, 0xEAC274, "bold", 1);
            }
        }
        if (["ban"].includes(message[1].toLowerCase())) {
            console.log(message);
            if (message.length >= 2 && message[2][0] == "#") {
                message[2] = message[2].substring(1, message[2].length);
                if (message[2] == player.id) {
                    room.sendAnnouncement("No te podes votar a vos mismo.", player.id, 0xFF0000, "bold", 2);
                    return false;
                }
                var votedP = getPlayerById(Number.parseInt(message[2]));
                var votingP = getPlayerById(player.id);
                if (votingPlayers.has(votingP[eP.AUTH])) {
                    room.sendAnnouncement("「🤖」MAXBOT: No podes votar a otro jugador hasta que pase 1 minuto de tu voto anterior.", player.id, 0xFF0000, "bold", 2);
                    return false;
                }

                if (!Number.isNaN(Number.parseInt(message[2])) && votedP != null) {
                    if (banVotesCount[votedP[eP.AUTH]] == null) {
                        banVotesCount[votedP[eP.AUTH]] = 0;
                    }
                    votingPlayers.add(votingP[eP.AUTH]);
                    banVotesCount[votedP[eP.AUTH]]++;
                    console.log(votingPlayers);
                    console.log(banVotesCount);
                    PlayerFound = true;
                    var votesRequired = Math.round((room.getPlayerList().length) * 2 / 3);
                    if (banVotesCount[votedP[eP.AUTH]] == 1) {
                        room.sendAnnouncement("「🤖」MAXBOT: Se esta votando banear a " + room.getPlayer(votedP[eP.ID])?.name + "\n Si se llega a " + votesRequired + " votos en 1 minuto sera baneado \n Para votar escribi: !vote ban #" + votedP[eP.ID], null, 0xEAC274, "bold", 1);
                        console.log("timeout ");
                        setTimeout(function () {
                            console.log("🗳️ Termino la votacion de ban a " + room.getPlayer(votedP[eP.ID])?.name + ": " + banVotesCount[votedP[eP.AUTH]] + "/" + votesRequired + " votos.");
                            room.sendAnnouncement("「🤖」MAXBOT: Termino la votacion de ban a " + room.getPlayer(votedP[eP.ID])?.name + " : " + banVotesCount[votedP[eP.AUTH]] + "/" + votesRequired + " votos.", null, 0xEAC274, "bold", 1);
                            banVotesCount[votedP[eP.AUTH]] = 0;
                            votingPlayers = new Set();
                            console.log(votingPlayers);
                            console.log(banVotesCount);
                        }, votekickTimeout);
                    }
                    if (banVotesCount[votedP[eP.AUTH]] >= votesRequired) {
                        room.kickPlayer(player.id, "「🤖」MAXBOT: Te fuiste baneado amigo!", true);
                    }
                    else {
                        room.sendAnnouncement("「🤖」MAXBOT: Voto para banear a " + room.getPlayer(votedP[eP.ID])?.name + ": Van " + banVotesCount[votedP[eP.AUTH]] + "/" + votesRequired + " votos.", null, 0xEAC274, "bold", 1);
                    }
                } else {
                    players = room.getPlayerList();
                    playersString = "";
                    for (i = 0; i < players.length; i++) {
                        playersString = playersString + players[i].name + ": #" + players[i].id + "\n";
                    }
                    room.sendAnnouncement("「🤖」MAXBOT: No existe el jugador. Aca esta la lista:" + "\n" + playersString, player.id, 0xEAC274, "normal", 1);
                }
            }
        }
    }
    else if (["t"].includes(message[0].toLowerCase())) {
        teamChat(player, originalMessage);
        return false;
    }
    else if (["!not"].includes(message[0].toLowerCase())) {
        roomUpNotification();
    }

    else if (["!clean"].includes(message[0].toLowerCase()) && player.admin) {
        setTimeout(_ => { room.sendAnnouncement(`${player.name} cleared the chat`, null, 0xFFFFFF, 'italic') }, 1000)
        i = 50
        while (i >= 0) {
            room.sendAnnouncement("", null);
            i--
        }
    }
    else if (["!gk"].includes(message[0].toLowerCase())) {
        gkCommand(player);
    }
    else if (["!modo"].includes(message[0].toLowerCase()) && player.admin) {
        physicsModeCommand(message[1]);
    }
    else if (["!rr"].includes(message[0].toLowerCase()) && player.admin) {
        quickRestart();
    }

    else if (["!rt"].includes(message[0].toLowerCase()) && player.admin) {
        rebalanceTeams();
    }

    else if (["!cancha"].includes(message[0].toLowerCase()) && player.admin) {
        chooseField();
    }

    else if (["!reglas"].includes(message[0].toLowerCase())) {
        printRules(player);
        return;
    }

    else if (["!vc"].includes(message[0].toLowerCase())) {
        printVc(player);
        return;
    }

    else if (["!memide"].includes(message[0].toLowerCase())) {
        printMeMideCommand(player);
    }

    else if (["!hc"].includes(message[0].toLowerCase())) {
        printHumiliateCommand(player);
    }

    else if (["!ksk"].includes(message[0].toLowerCase())) {
        if (!player.admin && commandTimeout < 61) {
            room.sendAnnouncement("Tenes q esperar 60 segundos para poder tirar !ksk de nuevo spammer ", player.id, Colors.Vermelho);
            return;
        }
        console.log("entra a ksk")
        randomUniforms();
        commandTimeout = 0;
    }
    else if (["!mtm", "mtm", "meteme"].includes(message[0].toLowerCase())) {
        if (!AFKSet.has(player.id) && player.team == Team.SPECTATORS) {
            customBalancePlayer(player);
        }
    }
    else if (["!admin"].includes(message[0].toLowerCase()) && message.length > 1) {
        if (adminCommandTimeout) {
            sendMessageToAdminsCommand(player, originalMessage);
            setTimeout(() => {
                adminCommandTimeout = true;
            }, 30000);
        } else {
            room.sendAnnouncement("No spamees este comando", player.id, Colors.Vermelho)
            return false;
        }

        adminCommandTimeout = false;
    }
    else if (["!clip"].includes(message[0].toLowerCase()) && player.admin) {
        //agregar timestamp player: time + mensaje opcional q se mande con la partida
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        afkCommand(player, message);
        /* if (players.length != 1 && player.team != Team.SPECTATORS) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        else if (players.length == 1 && !isAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
    
        var ePlayer = extendedP.filter((p) => {
            p[eP.ID] == player.id
        });
        //console.logg("!afk");
        //console.logg("player id" + player.id);
        //console.logg(extendedP);
        //console.logg("activity" + getActivity(player));
        if (isAFK(player) && getActivity(player) < 20 && player.admin == false) {
            room.sendAnnouncement("Espera 20 segundos para salir de afk", player.id, 0xFF5000);
            return;
        }
        setAFK(player, !isAFK(player));
        //console.logg("player en extended p?")
        //console.logg(extendedP.filter((p) => p[eP.ID] == player.id));
        room.sendAnnouncement(player.name + (isAFK(player) ? " esta AFK! 😴" : " dejo de estar AFK!"), null, (isAFK(player) ? 0xFF5E3B :
            0x26DF17));
        isAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn(); */
    }

    /* else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] List of AFK players: ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && isAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] List of AFK players: ") {
            room.sendChat("[PV] There is no one on the AFK list!", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    */
    else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[🏆] Tus estadisticas: 🎮 Partidos: " + stats[StatColumns.GAMES] + ", ✅ Ganados: " + stats[StatColumns.WINS] + ", ❌ Perdidos: " + stats[StatColumns.LOSES] + ", % de ganados: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goles: " + stats[StatColumns.GOALS] + ", 👟 Asistencias: " + stats[StatColumns.ASSISTS] + ", 🤚 GK: " + stats[StatColumns.GK] + ", 🤚 Valla invicta: " + stats[StatColumns.VI] + ", 🤚 % VI: " + stats[StatColumns.CP] + "%", player.id, 0x73EC59, "bold");
    }

    else if (["!showme"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];

        room.sendAnnouncement("[🏆] Estadisticas de : " + player.name + "🎮 Partidos: " + stats[StatColumns.GAMES] + ", ✅ Ganados: " + stats[StatColumns.WINS] + ", ❌ Perdidos: " + stats[StatColumns.LOSES] + ", % de ganados: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goles: " + stats[StatColumns.GOALS] + ", 👟 Asistencias: " + stats[StatColumns.ASSISTS] + ", 🤚 GK: " + stats[StatColumns.GK] + ", 🤚 Valla invicta: " + stats[StatColumns.VI] + ", 🤚 % VI: " + stats[StatColumns.CP] + "%", null, 0x73EC59, "bold");
    }

    else if (["!jugados"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
        var tableau = getTop5ForStat(StatColumns.GAMES);
        var text = "🎮 Partidos jugados:";
        printTop5(text, tableau);
    }

    else if (["!ganados"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
        var tableau = getTop5ForStat(StatColumns.WINS);
        var text = "🎮 Partidos ganados:";
        printTop5(text, tableau);
    }

    else if (["!goles"].includes(message[0].toLowerCase())) {
        var tableau = getTop5ForStat(StatColumns.GOALS);
        var text = "⚽️ Goleadores:";
        printTop5(text, tableau);
    }

    else if (["!asis"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
        var tableau = getTop5ForStat(StatColumns.ASSISTS);
        var text = "👟 Asistencias:";
        printTop5(text, tableau);
    }

    else if (["!arq"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
        var tableau = getTop5ForStat(StatColumns.VI);
        var text = "🤚 Valla invicta:";
        printTop5(text, tableau);
    }

    else if (["!claim"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[StatColumns.ROLE] != "master") {
                stats[StatColumns.ROLE] = "master";
                room.sendChat(player.name + " was promoted to Administrator");
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }
    else if (["!setadmin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "admin";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is now a room admin!");
                    }
                }
            }
        }
    }
    else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "admin") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " no longer a room admin!");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] list of muted: "; //cuando este muteado q se hable a si mismo
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] list of muted: ") {
            room.sendChat("[PV] There is no one on the Muted list!", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                }
                else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " fue muteado por " + (timeOut / 60000) + " minutos!");
                    }
                }
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Fue muteado por 3 minutos!");
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
                room.sendChat("All demutated.");
            }
            else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
                    }
                }
            }
        }
    }
    else if (["!slow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                slowMode = 3;
                room.sendChat("3 seconds of slow mode on!");
            }
            else if (message.length == 3) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        slowMode = Number.parseInt(message[1]);
                        room.sendChat(slowMode + " seconds slow mode on!");
                        return false;
                    }
                }
                slowMode = 2;
                room.sendChat("3 seconds of slow mode on!");
            }
        }
    }
    else if (["!endslow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            slowMode != 0 ? room.sendChat("Slow mode has ended.") : null;
            slowMode = 0;
        }
    }
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] There is no one on the ban list!", player.id);
            return false;
        }
        var cstm = "[PV] Ban list ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("[📜] Ban list has been cleared!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " was unbanned from the room!");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "chau amigo!", false);
    }
    else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
        printDiscord();
    }
    else if (["!elo"].includes(message[0].toLowerCase()) && localStorage.getItem(getAuth(player))) { // elo definido por vitórias
        //console.logg("entro en comando elo " + player.name);
        message.slice(0, 1);
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        if (stats[StatColumns.WINS] > 499) {
            room.sendAnnouncement("👑 「MAS CAPITO」" + player.name + ": " + msg + "", null, 0x7E65FF)
        } else if (stats[StatColumns.WINS] > 199) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o I」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 179) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o II」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 159) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o III」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 129) {
            room.sendAnnouncement("🥇 「𝗢𝗿𝗼 I」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 89) {
            room.sendAnnouncement("🥇 「Oro II」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 69) {
            room.sendAnnouncement("🥇 「Oro III」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 59) {
            room.sendAnnouncement("🥈 「Plata I」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 44) {
            room.sendAnnouncement("🥈 「Plata II」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 34) {
            room.sendAnnouncement("🥈 「PLATA III」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 24) {
            room.sendAnnouncement("🥉 「BRONCE I」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 14) {
            room.sendAnnouncement("🥉 「BRONCE II」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 4) {
            room.sendAnnouncement("🥉 「BRONCE III」" + player.name + ": " + msg + "", null, 0x72532A)
        } else {
            room.sendAnnouncement("㋡ 「PETE」:" + player.name + ": " + msg + "", null, 0x7aa476)
        }
    } else {
        if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
            if (player.team != 0) {
                room.getPlayerList().forEach((element) => { if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, (player.team == Team.RED ? 16725591 : 3261685), "bold", 0) })
                return false;
            }
            else {
                room.sendAnnouncement("You are not on a team.");
                return false;
            }
        }
    }
    //cambiar cosito del gk
    var role = getPlayerById(player.id) != null ? getPlayerById(player.id)[eP.ROLE] : "player";


    if (role != "player") {
        //console.log("no es player?" + role);
        if (role == "master") {
            room.sendAnnouncement("「👨‍💻」" + player.name + ": " + msg + "", null, 0x00FF00, 'bold');
            return false;
        } else if (role == "donator") {
            room.sendAnnouncement("「💸」" + player.name + ": " + msg + "", null, 0xEAC274, 'bold');
            return false;
        } else if (role == "vip") {
            room.sendAnnouncement("「👑」" + player.name + ": " + msg + "", null, 0xEAC274, 'bold');
            return false;
        }
        else {
            room.sendAnnouncement("「🟨」" + player.name + ": " + msg + "", null, 0xEAC274, 'bold');
            return false;
        }
    }

    if (player.team == Team.BLUE) {
        room.sendAnnouncement("「🟦」" + player.name + ": " + originalMessage, null, 0x89cff0);
    } else if (player.team == Team.RED) {
        room.sendAnnouncement("「🟥」" + player.name + ": " + originalMessage, null, 0xe38d7d);
    } else {
        room.sendAnnouncement("「⬜」" + player.name + ": " + originalMessage, null, 0xFFFFFF);
    }

    if (message[0][0] == "!") {
        return false;
    }
    if (getMute(player)) {
        room.sendChat("Tu", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
            }
            else {
                return false;
            }
        }
    }
    return false;
}




function printTop5(text, tableau) {
    room.sendAnnouncement("[🏆] " + text + " \n#1 " + tableau[0][0] + ": " + tableau[0][1] + "\n#2 " + tableau[1][0] + ": " +
        tableau[1][1] + "\n#3 " + tableau[2][0] + ": " + tableau[2][1] + "\n#4 " + tableau[3][0] + ": " + tableau[3][1] + "\n#5 " +
        tableau[4][0] + ": " + tableau[4][1], null, Colors.Amrelo);
}

function getRandomIntegers(length) {
    var randomInts = [0, 0];
    var numbers = [];
    if (!isNaN(length)) {
        for (var n = 1; n <= length; n++) {
            numbers.push(n);
        }
    }
    for (var i = 0; i < randomInts.length; i++) {
        randomInts[i] = numbers[Math.floor(Math.random() * numbers.length)];
        if (i < randomInts.length - 1) {
            var index = numbers.indexOf(randomInts[i]);
            index !== -1 ? numbers.splice(index, 1) : console.logg("Error in deleting random number");
        }
    }
    return randomInts;
}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    var hex = `${f(0)}${f(8)}${f(4)}`;
    return parseInt(hex, 16);
}

function pickBgColor(bgColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    //console.logg("color" + color.toString(16));
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        0x000000 : 0xFFFFFF;
}

function harmonize(h, s, l, start, end, interval) {
    const colors = [];

    for (let i = start; i <= end; i += interval) {
        const h1 = (h + i) % 360
        const c1 = hslToHex(h1, s, l);
        colors.push(c1)
    }

    return colors
}

function generatePalette(h, s, l) {
    var palette = [];
    var color = hslToHex(h, s, l);
    var analogous = harmonize(h, s, l, 30, 90, 30);
    var triad = harmonize(h, s, l, 120, 240, 120);
    palette.push(color);
    palette = palette.concat(triad);
    palette = palette.concat(analogous);
    return palette;
}

var uniformsTimeout = true;
var redHue = 0;
var blueHue = 0;

var redAngle = 0;
var blueAngle = 90;

var redHueAddSign = -1;
var redAngleCounter = 0;
var blueAngleCounter = 0;
var redL = 0;
var blueL = 100;
var lightAddSign = -1;
function twoStripsGrad() {
    if (redL <= 0 || redL >= 100) {
        lightAddSign *= -1;
    }

    redL += 1 * lightAddSign;
    blueL += -1 * lightAddSign;


    if (redHue <= 340 && redHue >= 10) {
        redHueAddSign *= -1;
    }

    if (redHueAddSign == -1 && redHue == 0) {
        redHue = 360;
    }


    redHue = ((redHueAddSign * 4) + redHue) % 360;
    blueHue = (redHue + 240) % 360;

    redAngleCounter += 1;

    if (redAngleCounter % 45 == 0) {
        redAngle = redAngleCounter % 360;
    }


    if (blueAngle == 0) {
        blueAngle = 360;
    }
    blueAngleCounter += -10;
    blueAngle = Math.abs(blueAngle % 45);
    sat = 80;
    ligth = 40;

    var redColor = [hslToHex(redHue, 70, 40), hslToHex((blueHue + 30) % 360, sat, redL), hslToHex(redHue, 70, 40)];

    var blueColor = [hslToHex(blueHue, sat, ligth), hslToHex((redHue + 30) % 360, 70, blueL), hslToHex(blueHue, sat, ligth)];

    room.setTeamColors(
        Team.BLUE,
        redAngle,
        "#000000",
        blueColor);


    room.setTeamColors(
        Team.RED,
        redAngle,
        "#000000",
        redColor
    );
}

function allColorsGrad() {
    redHue = (2 + redHue) % 360;
    blueHue = (2 + redHue + 240) % 360;

    redAngle = (redAngle + 8) % 360;
    if (blueAngle == 0) {
        blueAngle = 360;
    }
    blueAngle = (blueAngle - 4) % 360;
    sat = 80;
    ligth = 40;

    var redColor = [hslToHex(redHue, 70, 30), hslToHex(redHue, 50, 50), hslToHex(redHue, 30, 70)];

    var blueColor = [hslToHex(blueHue, sat, ligth - 10), hslToHex(blueHue + 15, sat, ligth - 10), hslToHex(blueHue + 30, sat, ligth - 10)];

    room.setTeamColors(
        Team.BLUE,
        blueAngle,
        "#000000",
        blueColor);


    room.setTeamColors(
        Team.RED,
        redAngle,
        "#000000",
        redColor
    );
}

function redAndBlueGrad() {
    if (redHue <= 340 && redHue >= 10) {
        redHueAddSign *= -1;
    }

    if (redHueAddSign == -1 && redHue == 0) {
        redHue = 360;
    }


    redHue = ((redHueAddSign * 2) + redHue) % 360;
    blueHue = ((redHueAddSign * 2) + redHue + 240) % 360;

    redAngle = (redAngle + 4) % 360;
    if (blueAngle == 0) {
        blueAngle = 360;
    }
    blueAngle = (blueAngle - 4) % 360;
    sat = 80;
    ligth = 40;

    var redColor = [hslToHex(redHue, sat, ligth), hslToHex(redHue + 7, sat, ligth), hslToHex(redHue + 15, sat, ligth)];

    var blueColor = [hslToHex(blueHue, sat, ligth), hslToHex(blueHue + 15, sat, ligth), hslToHex(blueHue + 30, sat, ligth)];

    room.setTeamColors(
        Team.BLUE,
        blueAngle,
        "#000000",
        blueColor);


    room.setTeamColors(
        Team.RED,
        redAngle,
        "#000000",
        redColor
    );
}

function uniformsLoop() {

    if (uniformsTimeout) {
        twoStripsGrad();
        setTimeout(() => {
            uniformsTimeout = true;
        }, 100);
    }
    uniformsTimeout = false;
}


/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    if (!initializing) {
        initializing = true;
        game = new Game(Date.now(), room.getScores(), []);
        countAFK = true;
        activePlay = false;
        goldenGoal = false;
        endGameVariable = false;
        lastPlayersTouched = [null, null];
        goalDictionary = {};
        distanceCache = new Map();
        Rposs = 0;
        Bposs = 0;
        GKList = [];
        room.setPlayerAvatar(manualGKList[0], "");
        room.setPlayerAvatar(manualGKList[1], "");
        manualGKList = [null, null];
        allReds = [];
        allBlues = [];
        room.sendAnnouncement("「🤖」MAXBOT: Recorda que con !gk sos el arquero de tu equipo!", null, 0xEAC274, "bold", 1);
        /* room.sendAnnouncement("[💬] Use 't' to chat with your team!", null, 0x5EE7FF);
        room.sendAnnouncement("The match is being recorded."); */
        if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
            for (var i = 0; i < maxTeamSize; i++) {
                allReds.push(teamR[i]);
                allBlues.push(teamB[i]);
            }
        }
        //inicializa el cvalor de act y gk a 0 para todos los jugadores
        for (var i = 0; i < extendedP.length; i++) {
            extendedP[i][eP.GK] = 0;
            extendedP[i][eP.ACT] = 0;
            //limpia jugadores que no existen en extendedp
            room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
        }

        room.startRecording();
        //deactivateChooseMode();
        initializing = false;
    }
}

room.onGameStop = function (byPlayer) {
    if (endGameVariable) {
        inChooseMode = false;
        //pasa a todos a spec
        //console.logg("team s " + teamS.length);
        //console.logg("team b " + teamB.length);
        //console.logg("team r " + teamR.length);
        //console.logg("reseteamos equipos");
        resetBtn();
        /* setTimeout(() => {
            //console.logg("actualizamos equipos en game stop despues de")
            updateTeams();
        }, 50); */
        //console.logg("team s " + teamS.length);
        //console.logg("team b " + teamB.length);
        //console.logg("team r " + teamR.length);
        //asigna de forma random los equipos
        //console.logg("on game stop asigna equipos")

        setTimeout(() => {
            topBtn();
            updateTeams();
            randomUniforms();
        }
            , 5500);
        //console.logg("choosing field on game stop")
        chooseField();
        //console.logg("team s " + teamS.length);
        //console.logg("team b " + teamB.length);
        //console.logg("team r " + teamR.length);



        setTimeout(() => { room.startGame(); }, 5000);
        /* if (inChooseMode) {
            //si estan llenos los equpos
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                //pasa a todos a spec
                resetBtn();
                //asigna de forma random los equipos
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => { randomBtn(); }, 400 * i);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else { //aca asigna al equipo ganador al red y al otro lo pasa a spec
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else if (lastWinner == Team.BLUE) {
                    redToSpecBtn();
                    //blueToRedBtn();
                }
                else {
                    resetBtn();
                }
                setTimeout(() => { topBtn(); }, 500);
            }
        }
        else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(teamB[0].id, Team.RED);
                    room.setPlayerTeam(teamR[0].id, Team.BLUE);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 3 || players.length > 2 * maxTeamSize) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    //blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 4) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
            else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                }
                else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => { topBtn(); }, 200);
                activateChooseMode();
            }
            else if (players.length == 6) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
        } */
    }
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
    /* if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    } */
}

function scoreGoal(goalScorer, team) {
    if (goalDictionary[goalScorer.id] == null) {
        //console.logg("primera vez deberia entrar aca")
        goalDictionary[goalScorer.id] = 0;
    }
    var scores = room.getScores();
    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + goalScorer.name + "! | Velocidad: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
    game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));

    goalDictionary[goalScorer.id] += 1;
    //console.logg(goalDictionary);
    if (goalDictionary[goalScorer.id] > 2) {
        //console.logg("hat trick");
        //console.logg(goalDictionary);
        room.setPlayerAvatar(goalScorer.id, "1!");
        //console.logg("hat trick 1");
        setTimeout(() => {
            room.setPlayerAvatar(goalScorer.id, "2!");
            //console.logg("hat trick 2");
            setTimeout(() => {
                room.setPlayerAvatar(goalScorer.id, "3!");
                //console.logg("hat trick 3");
                setTimeout(() => {
                    //console.logg("hat trick 4");
                    room.setPlayerAvatar(goalScorer.id, "💣");
                    setTimeout(() => {
                        room.setPlayerAvatar(goalScorer.id, null);
                    }, 500);
                }, 400);
            }, 400);
        }, 500);

        room.sendAnnouncement("⚽⚽⚽ " + lastPlayersTouched[0].name + " HIZO UN HAT TRICK!" + (team == Team.RED ? "🔴🔴🔴" : "🔵🔵🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
    } else if (ballSpeed.toPrecision(4) > 100) {
        room.sendAnnouncement("💥💥💥 " + goalScorer.name + " REVENTO EL ARCO, LA PELOTA IBA A " + ballSpeed.toPrecision(4) + "km/h!" + (team == Team.RED ? "🔴🔴🔴" : "🔵🔵🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
        room.setPlayerAvatar(goalScorer.id, "💥");
        setTimeout(() => {
            room.setPlayerAvatar(goalScorer.id, null);
        }, 3000);
    }
}

room.onTeamGoal = function (team) {
    let players = room.getPlayerList();
    //console.logg("GOL DEL " + team);
    /* for (let i = 0; i < players.length; i++) {
        if (players[i].team == team) room.setPlayerAvatar(players[i].id, "⚽️");
    }
    setTimeout(() => {
        for (let i = 0; i < players.length; i++) {
            room.setPlayerAvatar(players[i].id, null);
        }
    }, resetarAvatarEm * 2000); */
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    var goalScorer = lastPlayersTouched[0];
    var goalAssist = lastPlayersTouched[1];

    if (goalScorer != null) {
        //room.sendAnnouncement("👥 TREMENDO GOL de " + (team == Team.RED ? currentTeams[0].longName : currentTeams[1].longName) + " !", null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
        if (lastTeamTouched == team && passCombo > 0) {
            room.sendAnnouncement("con " + passCombo + " pases seguidos!", null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
        }
        if (goalScorer.team == team) {
            //console.logg("last touch id " + lastPlayersTouched[0].id);
            room.setPlayerAvatar(goalScorer.id, "⚽");
            setTimeout(() => {
                room.setPlayerAvatar(goalScorer.id, null);
            }, 3000);
            scoreGoal(goalScorer, team);

            if (goalAssist != null && goalAssist.team == team) {
                var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
                var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
                room.sendAnnouncement("👥 " + fraseasis + goalAssist.name + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
                game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));

                room.setPlayerAvatar(goalAssist.id, "👟");
                setTimeout(() => {
                    room.setPlayerAvatar(goalAssist.id, null);
                }, 3000);

            }
            else { //error del defensor
                if (goalAssist != null) {
                    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
                    var defenderError = " y " + goalAssist?.name + " no la pudo parar! ";
                    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + goalScorer.name + defenderError + " | Velocidad: " + ballSpeed.toPrecision(4).toString() + " km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
                    game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
                }
            }
        } else if (goalAssist != null && goalAssist.team == team) {
            scoreGoal(goalAssist, team);
        } else {
            var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
            room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + "! | Velocidad: " + ballSpeed.toPrecision(4).toString() + " km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
            //"🤌🫵"
            for (let i = 0; i < players.length; i++) {
                if (players[i].team == team) {
                    room.setPlayerAvatar(players[i].id, "🤣");
                } else if (players[i].team != Team.SPECTATORS) {
                    room.setPlayerAvatar(players[i].id, players[i].id % 2 == 0 ? "🙄" : "😑");
                }
            }
            setTimeout(() => {
                for (let i = 0; i < players.length; i++) {
                    room.setPlayerAvatar(players[i].id, null);
                }
            }, 3000);
            room.setPlayerAvatar(goalScorer.id, "🤡");
            setTimeout(() => {
                room.setPlayerAvatar(goalScorer.id, null);
            }, 3000);

            game.goals.push(new Goal(scores.time, team, null, null));
        }
    }

    console.log(Math.abs(scores.red - scores.blue));
    if (Math.abs(scores.red - scores.blue) >= 5 || goldenGoal == true) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 3000);
    }
}

function getDatehoras() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        horas = data.getHours().toString().padStart(2, '0'),
        minutos = data.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
}

function getDateInfo() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear(),
        horas = data.getHours().toString().padStart(2, '0'),
        minutos = data.getMinutes().toString().padStart(2, '0');
    segundos = data.getSeconds().toString().padStart(2, '0');
    return `${dia} do ${mes} de ${ano}, a las ${horas}:${minutos}:${segundos}`;
}

function dataehora() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear(),
        horas = data.getHours().toString().padStart(2, '0'),
        minutos = data.getMinutes().toString().padStart(2, '0');
    segundos = data.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes} de ${ano}, ás ${horas}:${minutos} e ${segundos} seconds`;
}

function customBalance() {
    if ((Math.abs(teamR.length - teamB.length) > 1)) {
        //console.logg("custom balance team on positions reset");
        if (teamR.length < teamB.length) {
            var index = teamB.length - 1;
            var player = teamB[index];
            var pid = player.id;
            room.setPlayerTeam(pid, Team.RED);
            teamR.push(player);
            teamB.splice(index, 1);
            //console.logg("-1 blue (" + player.name + ") on postion reset")
            //console.logg("+1 red on postion reset")
        } else {
            var index = teamR.length - 1;
            var player = teamR[index]
            var pid = player.id;
            room.setPlayerTeam(pid, Team.BLUE);
            teamR.push(player);
            teamB.splice(index, 1);
            //console.logg("-1 blue on postion reset")
            //console.logg("+1 red on postion reset")
        }
    }
}

room.onPositionsReset = function () {
    //console.logg("position reset last players cleaned")
    countAFK = true;
    lastPlayersTouched = [null, null];

    customBalance();
    //updateTeams();
    var changedField = chooseMap();
    if (changedField == null) {
        return;
    }

    const scores = room.getScores();
    game.scores = scores;
    if (game.scores.blue == game.scores.red) {
        room.sendAnnouncement("「🤖」MAXBOT: Gol gana y se cambia la cancha!!", null, 0xEAC274, "bold", 1);
    }
    if (Math.abs(scores.red - scores.blue) > 1) {//primer gol
        //o un timeout para ver cuando resetear
        chooseField();
        normalEndGame(scores);
    }
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    /* if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " has been demutated.");
        setMute(changedPlayer, false);
    }
    if (localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("You are not allowed to nominate a player as an admin!", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    } */
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

function incrementCommandTimout() {
    commandTimeout++;
}

checkPingTimeout = true;

var handleActivity = true;
function IntervalLoop() {
    if (handleActivity) {
        handleInactivity();
        incrementCommandTimout();
        setTimeout(function () {
            handleActivity = true;
        }, 1000)
    }
    handleActivity = false;
}

room.onGameTick = function () {
    checkTime();
    //updateTeams();
    getLastTouchOfTheBall();
    getStats();
    IntervalLoop();
    //uniformsLoop();
}