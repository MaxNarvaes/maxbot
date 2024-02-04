const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var argTeams = [
    /* KSK ACTUAL CAMPEONES TORNEO DEL SINDICATO V1 */
    { ID: Team.BLUE, shortName: "axol", longName: "Axolotl Arboleda FC", country: "Argentina", uniform: [{ angle: 180, mainColor: [0x333333, 0X333333, 0x333333], avatarColor: 0X000000 }] },
    /*ksks futbol argentino*/
    { ID: Team.BLUE, shortName: "boca", longName: "Boca Juniors", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x00366B, 0xF7FF00, 0x003352], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "rosario", longName: "Rosario Central", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xD4CD00, 0x000F57, 0xD4CD00], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "rvp", longName: "River Plate", country: "Argentina", uniform: [{ angle: 40, mainColor: [0xF2F2F2, 0xDE0000, 0xF2F2F2], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "ind", longName: "Independiente", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "elp", longName: "Estudiantes de La Plata", country: "Argentina", uniform: [{ angle: 180, mainColor: [0xD40B0B, 0xFFFFFF, 0xD40B0B], avatarColor: 0x878787 }] },
    { ID: Team.BLUE, shortName: "casla", longName: "San Lorenzo de Almagro", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xC20000, 0x151575, 0xA10005], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "hur", longName: "Huracan", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0xF2F2F2], avatarColor: 0xFF0000 }] },
    { ID: Team.RED, shortName: "tall", longName: "Talleres", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x030354, 0xFFFFFF, 0x030354], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "bel", longName: "Belgrano", country: "Argentina", uniform: [{ angle: 0, mainColor: [0X335ACA, 0x85A6FF, 0x85A6FF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "new", longName: "Newell's old boys", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.BLUE, shortName: "col", longName: "Colon", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x9C0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.RED, shortName: "un", longName: "Union", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "vel", longName: "Club Atletico Velez Sarsfield", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x1228B8, 0xFFFFFF], avatarColor: 0x080606 }] },
    { ID: Team.BLUE, shortName: "god", longName: "Godoy Cruz", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x0000AB, 0xFFFFFF, 0x0000AB], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "def", longName: "Defensa y Justicia", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xF7FF00, 0xF7FF00, 0xF7FF00], avatarColor: 0x19F700 }] },
    { ID: Team.RED, shortName: "ajr", longName: "Argentinos Jr", country: "Argentina", uniform: [{ angle: 180, mainColor: [0xBA271C, 0xF03224, 0xBA271C], avatarColor: 0x2121FF }] },
    { ID: Team.RED, shortName: "lan", longName: "Lanus", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x8A0707, 0x8A0707, 0x8A0707], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "cc", longName: "Central Cordoba", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x000000, 0xFAF5F5, 0x000000], avatarColor: 0x8A0707 }] },
    { ID: Team.BLUE, shortName: "rac", longName: "Racing", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x077FE8, 0xE8E8E8, 0x077FE8], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "atl", longName: "Atletico Tucuman", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x9CFFFC, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "barr", longName: "Barracas Central", country: "Argentina", uniform: [{ angle: 180, mainColor: [0xD40B0B, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "inst", longName: "Instituto", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xCC1212, 0xFFFFFF, 0xCC1212], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "sar", longName: "Sarmiento", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x004A0C, 0x004A0C, 0x004A0C], avatarColor: 0xFFBFC3 }] },
    { ID: Team.RED, shortName: "plat", longName: "Platense", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x562E24, 0xFFFFFF], avatarColor: 0xF1590D }] },
    { ID: Team.BLUE, shortName: "tig", longName: "Tigre", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x0841FF, 0xFF0000, 0x0841FF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "ban", longName: "Banfield", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x06300F, 0xFFFFFF, 0x06300F], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "glp", longName: "Gimnasia de la Plata", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x00253B, 0xFFFFFF], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Argentina", uniform: [{ angle: 40, mainColor: [0x006FFF, 0xFF0000, 0x006FFF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "rie", longName: "Deportivo Riestra", country: "Argentina", uniform: [{ angle: 45, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x1C1C1C }] },
    { ID: Team.RED, shortName: "cha", longName: "Chaco Forever", country: "Argentina", uniform: [{ angle: 180, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF6524 }] },
    { ID: Team.BLUE, shortName: "alma", longName: "Almagro", country: "Argentina", uniform: [{ angle: 180, mainColor: [0x0841FF, 0x000000, 0x0841FF], avatarColor: 0xFFFFFF }] },
    /*ksks liga española*/
    { ID: Team.RED, shortName: "atm", longName: "Atlético de Madrid", country: "España", uniform: [{ angle: 180, mainColor: [0xFF0F1F, 0XFFFFFF, 0xFF0F1F], avatarColor: 0X150B75 }] },
    { ID: Team.BLUE, shortName: "cdv", longName: "Celta de Vigo", country: "España", uniform: [{ angle: 90, mainColor: [0x75AFFA, 0X54A8CC, 0x75AFFA], avatarColor: 0XF5F6FF }] },
    { ID: Team.RED, shortName: "osa", longName: "Osasuna", country: "España", uniform: [{ angle: 180, mainColor: [0xB5142F, 0X150A7A, 0xB5142F], avatarColor: 0XF5F6FF }] },
    { ID: Team.BLUE, shortName: "bet", longName: "Betis", country: "España", uniform: [{ angle: 180, mainColor: [0x1C8009, 0XFFFFFF, 0x1C8009], avatarColor: 0X000000 }] },
    { ID: Team.BLUE, shortName: "vill", longName: "Villareal", country: "España", uniform: [{ angle: 0, mainColor: [0xD6EB1C], avatarColor: 0X0D2F8C }] },
    { ID: Team.BLUE, shortName: "rm", longName: "Real Madrid", country: "España", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0X121D3B }] },
    { ID: Team.BLUE, shortName: "get", longName: "Getafe", country: "España", uniform: [{ angle: 180, mainColor: [0x000BA6, 0X5DFC72, 0x000BA6], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "ath", longName: "Athletic Club", country: "España", uniform: [{ angle: 180, mainColor: [0xFF0022, 0XFCFCFC, 0xFF0022], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "sev", longName: "Sevilla", country: "España", uniform: [{ angle: 60, mainColor: [0XFFFFFF, 0XFFFFFF, 0XFFFFFF], avatarColor: 0XFF0000 }] },
    { ID: Team.RED, shortName: "bar", longName: "Barcelona", country: "España", uniform: [{ angle: 0, mainColor: [0X013C7E, 0XAA0136, 0X013C7E], avatarColor: 0XFFFFFF }] },
    /*ksks premier league*/
    { ID: Team.RED, shortName: "mutd", longName: "Manchester United", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xEB1515, 0XBA031C, 0xEB1515], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "mci", longName: "Manchester City", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xAAE3FC, 0X5FBFED, 0XAAE3FC], avatarColor: 0x23233B }] },
    { ID: Team.BLUE, shortName: "che", longName: "Chelsea", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x3423CC], avatarColor: 0xF2F2F2 }] },
    { ID: Team.BLUE, shortName: "tot", longName: "Tottenham", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0XFFFFFF], avatarColor: 0x0D1069 }] },
    { ID: Team.RED, shortName: "liv", longName: "Liverpool", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xD92531], avatarColor: 0xE8E8E8 }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Inglaterra", uniform: [{ angle: 180, mainColor: [0xD92531, 0XEBEBEB, 0xD92531], avatarColor: 0xD4D4D4 }] },
    { ID: Team.BLUE, shortName: "brg", longName: "Brighton", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x1D3EE0, 0XEBEBEB, 0x1D3EE0], avatarColor: 0x321FDB }] },
    { ID: Team.RED, shortName: "ast", longName: "Aston Villa", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xA13C4C, 0X2BB5F0, 0xA13C4C], avatarColor: 0xFFFFFF }] },
    /*ksks selecciones*/
    { ID: Team.RED, shortName: "ale", longName: "Alemania", country: "Alemania", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0XD19D0F }] },
    { ID: Team.RED, shortName: "bra", longName: "Brasil", country: "Brasil", uniform: [{ angle: 180, mainColor: [0xCCCC33, 0X006600, 0xCCCC33], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "bra2", longName: "Brasil Suplente", country: "Brasil", uniform: [{ angle: 60, mainColor: [0x2930FF, 0X1F24BF, 0x171B91], avatarColor: 0X30FF29 }] },
    { ID: Team.BLUE, shortName: "arg", longName: "Argentina", country: "Argentina", uniform: [{ angle: 90, mainColor: [0X75AADB, 0XFFFFFF, 0x75AADB], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "esp", longName: "España", country: "España", uniform: [{ angle: 90, mainColor: [0XFF0000, 0XEEC900, 0xFF0000], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "por", longName: "Portugal", country: "Portugal", uniform: [{ angle: 300, mainColor: [0x006400, 0X8B0000, 0x8B0000], avatarColor: 0xFFD700 }] },
    { ID: Team.RED, shortName: "hol", longName: "Paises Bajos", country: "Holanda", uniform: [{ angle: 0, mainColor: [0xED6313], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "fr", longName: "Francia", country: "Francia", uniform: [{ angle: 45, mainColor: [0x191069, 0X160E5C, 0x130C52], avatarColor: 0x64691C }] },
    { ID: Team.BLUE, shortName: "ing", longName: "Inglaterra", country: "Inglaterra", uniform: [{ angle: 45, mainColor: [0xFFFFFF, 0xFFFFFF, 0x34A1E0], avatarColor: 0x1F1F54 }] },
    { ID: Team.BLUE, shortName: "ita", longName: "Italia", country: "Italia", uniform: [{ angle: 223, mainColor: [0x152ECF, 0x1221A8, 0x0D0DD6], avatarColor: 0xEDEBEB }] },
    { ID: Team.BLUE, shortName: "uru", longName: "Uruguay", country: "Uruguay", uniform: [{ angle: 45, mainColor: [0x408CE3, 0x3A7ECC, 0x3779C4], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "mex", longName: "México", country: "Mexico", uniform: [{ angle: 0, mainColor: [0x134F07, 0xFFFFFF, 0xD90000], avatarColor: 0x573131 }] },
    { ID: Team.RED, shortName: "chi", longName: "Chile", country: "Chile", uniform: [{ angle: 0, mainColor: [0XF50000], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "per", longName: "Perú", country: "peru", uniform: [{ angle: 35, mainColor: [0XFFFFFF, 0XFF0000, 0XFFFFFF], avatarColor: 0X000000 }] },
    /*nuevas ksks*/
    { ID: Team.BLUE, shortName: "psg", longName: "París Saint-Germain", country: "Francia", uniform: [{ angle: 180, mainColor: [0x000080, 0XB22222, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "int", longName: "Inter de Miami", country: "Estados Unidos", uniform: [{ angle: 60, mainColor: [0x000000, 0X121212, 0x000000], avatarColor: 0xFF00F7 }] },
    { ID: Team.BLUE, shortName: "val", longName: "Valencia", country: "España", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0X000000 }] },
    { ID: Team.BLUE, shortName: "nap", longName: "Napoli", country: "Italia", uniform: [{ angle: 0, mainColor: [0x429AE8], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "rom", longName: "Roma", country: "Italia", uniform: [{ angle: 0, mainColor: [0xC10B31], avatarColor: 0Xf5b602 }] },
    { ID: Team.RED, shortName: "lev", longName: "Bayern Leverkusen", country: "Alemania", uniform: [{ angle: 0, mainColor: [0x000000, 0XFD0808, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "lep", longName: "Leipzig", country: "Alemania", uniform: [{ angle: 90, mainColor: [0xFAF9FF, 0XDC002C, 0xFAF9FF], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "bor", longName: "Borussia Dortmund", country: "Alemania", uniform: [{ angle: 0, mainColor: [0xF5FD00, 0X000000, 0xF5FD00], avatarColor: 0x2E2E2E }] },
    { ID: Team.RED, shortName: "bay", longName: "Bayern Munich", country: "Alemania", uniform: [{ angle: 135, mainColor: [0xF70521, 0XFFFFFF, 0xFFFFFF], avatarColor: 0xAB1227 }] },
    { ID: Team.RED, shortName: "juv", longName: "Juventus", country: "Italia", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0X000000, 0xFFFFFF], avatarColor: 0xFFC71F }] },
    { ID: Team.BLUE, shortName: "fio", longName: "Fiorentina", country: "Italia", uniform: [{ angle: 45, mainColor: [0x8F28B5, 0x671E82, 0x8F28B5], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "naz", longName: "Inter de Milan", country: "Italia", uniform: [{ angle: 0, mainColor: [0x2519CF, 0x000000, 0x2519CF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "mil", longName: "Milan", country: "Italia", uniform: [{ angle: 0, mainColor: [0xEB0000, 0x000000, 0xEB0000], avatarColor: 0x989C27 }] },
    { ID: Team.RED, shortName: "peñ", longName: "Peñarol", country: "Uruguay", uniform: [{ angle: 0, mainColor: [0xF3FF45, 0x000000, 0XFFFF38], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "nac", longName: "Nacional", country: "Uruguay", uniform: [{ angle: 60, mainColor: [0x190AF0, 0xFFFFFF, 0X190AF0], avatarColor: 0xFF0000 }] },
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

var bgColor = "2a3a40";

/* COMMANDS */
/* VARIABLES */
var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 20;
var maxAFKDuration = 10;
var AFKCooldown = 5;
var adminCommandTimeout = true;
const token = "thr1.AAAAAGWcEkfsOLxniXJaLw.k4rldEAy9BA";
var goalDictionary = {};
/* ROOM */
const roomNumber = 0;
//const roomName = "Prueba";
const roomName = "Prueba";
const maxPlayers = 25;
const roomPublic = true;
const geo = [{ "lat": -31.4135, "lon": -64.18105, "code": "ar" }];
const roomPassword = '789345';

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
    geo: geo[0]
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
const scoreLimitBig = 7;
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
var adminPassword = 789345;
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const UNIFORME_OFICIAL = 0;
const gravityMode = '"bCoef": 0.8, "damping": 0.994, "gravity": [0,0.04],';
const normalMode = '"bCoef": 0.4,';

const powerKickStr = '6.4';
const normalKickStr = '4.9';

const physicsMode = {
    normal: {
        name: "normal",
        ballMode: normalMode,
        kickStr: normalKickStr
    },
    gravity: {
        name: "gravity",
        ballMode: gravityMode,
        kickStr: normalKickStr
    },
    power: {
        name: "power",
        ballMode: normalMode,
        kickStr: powerKickStr
    }
};
var reloadStadium = false;
var currentPhysicsMode = physicsMode.normal;

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var trainingMap = '{"name":"♿Sindicato del Hax Entrenamiento♿","width":800,"height":350,"bg":{"width":700,"height":320,"kickOffRadius":100,"color":"404447"},"vertexes":[/* 0 */{"x":701,"y":320,"cMask":["ball"]},/* 1 */{"x":698,"y":-317,"cMask":["ball"]},/* 2 */{"x":699,"y":-204.254477919468,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 3 */{"x":740,"y":-204.254477919468,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 4 */{"x":740,"y":-44.25447791946799,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 5 */{"x":699,"y":-44.25447791946799,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 6 */{"x":-700,"y":205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 7 */{"x":-700,"y":321,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 8 */{"x":-700,"y":-205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 9 */{"x":-700,"y":-319,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 10 */{"x":-700,"y":320,"cMask":["ball"],"color":"00FFDD"},/* 11 */{"x":701,"y":320,"cMask":["ball"],"color":"00FFDD"},/* 12 */{"x":700,"y":-44.25447791946799,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 13 */{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 14 */{"x":700,"y":-317,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 15 */{"x":700,"y":-204.254477919468,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 16 */{"x":698,"y":-317,"bCoef":0,"cMask":["ball"]},/* 17 */{"x":698,"y":-317,"bCoef":0,"cMask":["ball"]},/* 18 */{"x":-701,"y":-320,"cMask":["ball"],"color":"00FFDD"},/* 19 */{"x":698,"y":-320,"cMask":["ball"],"color":"00FFDD"},/* 20 */{"x":-707.5,"y":-320,"cMask":["ball"]},/* 21 */{"x":-707.5,"y":-205,"cMask":["ball"]},/* 22 */{"x":707.5,"y":-319,"cMask":["ball"]},/* 23 */{"x":707.5,"y":-206.254477919468,"cMask":["ball"]},/* 24 */{"x":707.5,"y":-43.25447791946799,"cMask":["ball"]},/* 25 */{"x":707.5,"y":321,"cMask":["ball"]},/* 26 */{"x":-700,"y":110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 27 */{"x":-700,"y":205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 28 */{"x":700,"y":-204.254477919468,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 29 */{"x":700,"y":-44.25447791946799,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 30 */{"x":703,"y":-319,"bCoef":0,"cMask":["ball"]},/* 31 */{"x":703,"y":-206.254477919468,"bCoef":0,"cMask":["ball"]},/* 32 */{"x":703,"y":-43.25447791946799,"bCoef":0,"cMask":["ball"]},/* 33 */{"x":703,"y":321,"bCoef":0,"cMask":["ball"]},/* 34 */{"x":-703,"y":-205,"bCoef":0,"cMask":["ball"]},/* 35 */{"x":-703,"y":-321,"bCoef":0,"cMask":["ball"]},/* 36 */{"x":705,"y":-204.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 37 */{"x":705,"y":-44.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 38 */{"x":715,"y":-204.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 39 */{"x":715,"y":-44.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 40 */{"x":699,"y":-214.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 41 */{"x":740,"y":-214.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 42 */{"x":740,"y":-34.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 43 */{"x":699,"y":-34.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 44 */{"x":0,"y":320,"bCoef":1.15,"cMask":["ball"]},/* 45 */{"x":-700,"y":-110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 46 */{"x":-700,"y":110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 47 */{"x":-700,"y":-10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 48 */{"x":0,"y":-10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 49 */{"x":-720,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 50 */{"x":-700,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 51 */{"x":-720,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 52 */{"x":-700,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 53 */{"x":-720,"y":205,"bCoef":2,"cMask":["ball"]},/* 54 */{"x":-720,"y":110,"bCoef":2,"cMask":["ball"]},/* 55 */{"x":0,"y":205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 56 */{"x":0,"y":321,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 57 */{"x":0,"y":-110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 58 */{"x":0,"y":110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 59 */{"x":0,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 60 */{"x":20,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 61 */{"x":0,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 62 */{"x":20,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 63 */{"x":20,"y":205,"bCoef":2,"cMask":["ball"]},/* 64 */{"x":20,"y":110,"bCoef":2,"cMask":["ball"]},/* 65 */{"x":0,"y":110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 66 */{"x":0,"y":205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 67 */{"x":-707.5,"y":-110,"cMask":["ball"]},/* 68 */{"x":-707.5,"y":110,"cMask":["ball"]},/* 69 */{"x":-703,"y":-110,"cMask":["ball"]},/* 70 */{"x":-703,"y":110,"cMask":["ball"]},/* 71 */{"x":-720,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 72 */{"x":-700,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 73 */{"x":-720,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 74 */{"x":-700,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 75 */{"x":-720,"y":-110,"bCoef":2,"cMask":["ball"]},/* 76 */{"x":-720,"y":-205,"bCoef":2,"cMask":["ball"]},/* 77 */{"x":-700,"y":-205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 78 */{"x":-700,"y":-110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 79 */{"x":0,"y":-205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 80 */{"x":0,"y":-110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 81 */{"x":0,"y":-205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 82 */{"x":0,"y":-320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 83 */{"x":0,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 84 */{"x":20,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 85 */{"x":0,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 86 */{"x":20,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 87 */{"x":20,"y":-205,"bCoef":2,"cMask":["ball"]},/* 88 */{"x":20,"y":-110,"bCoef":2,"cMask":["ball"]},/* 89 */{"x":-700,"y":10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 90 */{"x":0,"y":10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 91 */{"x":-707.5,"y":320,"cMask":["ball"]},/* 92 */{"x":-707.5,"y":205,"cMask":["ball"]},/* 93 */{"x":-703,"y":205,"bCoef":0,"cMask":["ball"],"color":"00FFDD"},/* 94 */{"x":-703,"y":320,"bCoef":0,"cMask":["ball"],"color":"00FFDD"},/* 95 */{"x":-700,"y":0,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 96 */{"x":0,"y":0,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 97 */{"x":-700,"y":4,"bCoef":1.15,"cMask":["ball"],"vis":false,"curve":0},/* 98 */{"x":0,"y":4,"bCoef":1.15,"cMask":["ball"],"vis":false,"curve":0},/* 99 */{"x":-700,"y":-4,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 100 */{"x":0,"y":-4,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 101 */{"x":-730,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 102 */{"x":-700,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 103 */{"x":-730,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 104 */{"x":-700,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 105 */{"x":-730,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 106 */{"x":-700,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 107 */{"x":-730,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 108 */{"x":-700,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 109 */{"x":-730,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 110 */{"x":-700,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 111 */{"x":-730,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 112 */{"x":-700,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 113 */{"x":-730,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 114 */{"x":-700,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 115 */{"x":-730,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 116 */{"x":-700,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 117 */{"x":-730,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 118 */{"x":-700,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 119 */{"x":-730,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 120 */{"x":-700,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 121 */{"x":40,"y":-320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 122 */{"x":40,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 123 */{"x":0,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 124 */{"x":35,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 125 */{"x":35,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 126 */{"x":0,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 127 */{"x":35,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 128 */{"x":0,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 129 */{"x":0,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 130 */{"x":35,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 131 */{"x":0,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 132 */{"x":35,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 133 */{"x":0,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 134 */{"x":35,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 135 */{"x":29,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 136 */{"x":29,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 137 */{"x":33,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 138 */{"x":33,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 139 */{"x":25,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 140 */{"x":25,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 141 */{"x":34,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 142 */{"x":0,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 143 */{"x":35,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 144 */{"x":0,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 145 */{"x":0,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 146 */{"x":35,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 147 */{"x":0,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 148 */{"x":35,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 149 */{"x":40,"y":75,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 150 */{"x":700,"y":75,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 151 */{"x":380,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 152 */{"x":380,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 153 */{"x":360,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 154 */{"x":360,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 155 */{"x":40,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 156 */{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 157 */{"x":35,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 158 */{"x":35,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 159 */{"x":35,"y":82.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 160 */{"x":700,"y":82.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 161 */{"x":35,"y":83.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 162 */{"x":700,"y":83.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 163 */{"x":372.5,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 164 */{"x":372.5,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 165 */{"x":369.5,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 166 */{"x":369.5,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 167 */{"x":367,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 168 */{"x":367,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 169 */{"x":7.5,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 170 */{"x":7.5,"y":-320,"bCoef":0.5,"cMask":["ball"]},/* 171 */{"x":7.5,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 172 */{"x":7.5,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 173 */{"x":7.5,"y":205,"cMask":["ball"]},/* 174 */{"x":7.5,"y":320,"cMask":["ball"]},/* 175 */{"x":3,"y":320,"bCoef":0,"cMask":["ball"]},/* 176 */{"x":3,"y":205,"bCoef":0,"cMask":["ball"]},/* 177 */{"x":12,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 178 */{"x":12,"y":-320,"bCoef":0.5,"cMask":["ball"]},/* 179 */{"x":12,"y":110,"bCoef":0,"cMask":["ball"]},/* 180 */{"x":12,"y":-110,"bCoef":0,"cMask":["ball"]},/* 181 */{"x":13,"y":205,"cMask":["ball"]},/* 182 */{"x":13,"y":320,"cMask":["ball"]},/* 183 */{"x":3.5,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 184 */{"x":3.5,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 185 */{"x":387.7393536000001,"y":-70.74542592000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 186 */{"x":338.7617510400001,"y":-115.64156160000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 187 */{"x":396.1038412800001,"y":-79.21069056000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 188 */{"x":406.78619904000016,"y":-89.79227136000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 189 */{"x":378.1151539200001,"y":-100.47462912000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 190 */{"x":352.3666406400001,"y":-96.59471616000002,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 191 */{"x":340.1222400000001,"y":-151.01427456000005,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 192 */{"x":345.8665267200001,"y":-127.98673920000005,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 193 */{"x":344.7075916800001,"y":-182.20474368000006,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 194 */{"x":332.7729868800002,"y":-181.23989760000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 195 */{"x":374.33601792000013,"y":-130.40538624000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 196 */{"x":352.0800000000001,"y":-157.68000000000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 197 */{"x":335.8800000000001,"y":-161.99999999999997,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 198 */{"x":341.2800000000001,"y":-172.80000000000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 199 */{"x":366.8658962962964,"y":-150.49730370370378,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 200 */{"x":375.23520000000013,"y":-161.95680000000007,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 201 */{"x":389.06560000000013,"y":-170.28800000000007,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 202 */{"x":386.25120000000015,"y":-139.96800000000005,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7","_selected":"segment"},/* 203 */{"x":404.74080000000015,"y":-164.46240000000006,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7","_selected":"segment"},/* 204 */{"x":403.3152000000001,"y":-124.80480000000004,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 205 */{"x":434.80800000000016,"y":-125.97120000000004,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 206 */{"x":402.14880000000016,"y":-107.30880000000003,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 207 */{"x":435.9744000000002,"y":-107.30880000000003,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 208 */{"x":417.756977777778,"y":-122.9529481481482,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 209 */{"x":421.496651851852,"y":-106.86382222222227,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 210 */{"x":-583.3232464896003,"y":-318.84419266560013,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 211 */{"x":-346.76142612480015,"y":-318.84419266560013,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 212 */{"x":-96.97565306880003,"y":-321.7828488192001,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 213 */{"x":-96.68082966921219,"y":-288.27581246373904,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 214 */{"x":97.68798332043269,"y":-320.48513826177043,"cMask":["ball"],"cGroup":["wall"]},/* 215 */{"x":97.8472296692122,"y":-288.27581246373904,"cMask":["ball"],"cGroup":["wall"]},/* 216 */{"x":-97.68798332043269,"y":320.48513826177043,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 217 */{"x":97.68798332043269,"y":320.48513826177043,"cMask":["ball"],"cGroup":["wall"]},/* 218 */{"x":98.26770399215619,"y":288.27581246373904,"cMask":["ball"],"cGroup":["wall"]},/* 219 */{"x":-346.9246848000002,"y":-268.01632512000015,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 220 */{"x":349.6456627200002,"y":-319.7149056000002,"cMask":["ball"],"cGroup":["wall"]},/* 221 */{"x":350.4238848000002,"y":-268.01632512000015,"cMask":["ball"],"cGroup":["wall"]},/* 222 */{"x":-349.6456627200002,"y":319.7149056000002,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 223 */{"x":349.6456627200002,"y":319.7149056000002,"cMask":["ball"],"cGroup":["wall"]},/* 224 */{"x":-583.6497638400003,"y":-289.78414848000006,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 225 */{"x":583.6497638400003,"y":-318.3544166400002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 226 */{"x":584.8161638400004,"y":-285.67909232640005,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 227 */{"x":-583.6497638400003,"y":318.3544166400002,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 228 */{"x":583.6497638400003,"y":318.3544166400002,"cMask":["ball"],"cGroup":["wall"]},/* 229 */{"x":583.6497638400003,"y":289.78414848000006,"cMask":["ball"],"cGroup":["wall"]},/* 230 */{"x":134.68840704000007,"y":-321.0753945600002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 231 */{"x":134.68840704000007,"y":-285.7026816000002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 232 */{"x":-692.2478986454244,"y":-22.211162523382598,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 233 */{"x":-12.956511471973181,"y":-20.360232313100713,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 234 */{"x":-690.3969684351424,"y":-309.1053451170745,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 235 */{"x":-11.105581261691299,"y":-309.1053451170745,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]}],"segments":[{"v0":2,"v1":3,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":3,"v1":4,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":4,"v1":5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":6,"v1":7,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":8,"v1":9,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":10,"v1":11,"color":"00FFDD","cMask":["ball"]},{"v0":12,"v1":13,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":14,"v1":15,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":16,"v1":17,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":18,"v1":19,"color":"00FFDD","cMask":["ball"]},{"v0":20,"v1":21,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":22,"v1":23,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":24,"v1":25,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":26,"v1":27,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":28,"v1":29,"color":"0080ff","bCoef":0.1,"cMask":[]},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":36,"v1":37,"curve":80,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":38,"v1":39,"curve":80,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"x":715},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"y":-90},{"v0":42,"v1":43,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"y":90},{"v0":45,"v1":46,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700},{"v0":47,"v1":48,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700,"y":80},{"v0":49,"v1":50,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750},{"v0":51,"v1":52,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":150},{"v0":53,"v1":54,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":-750,"y":180},{"v0":55,"v1":56,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":57,"v1":58,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":59,"v1":60,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":150},{"v0":61,"v1":62,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750},{"v0":63,"v1":64,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":20,"y":180},{"v0":65,"v1":66,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":67,"v1":68,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":69,"v1":70,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":-703},{"v0":71,"v1":72,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-225},{"v0":73,"v1":74,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":75,"v1":76,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":-750,"y":180},{"v0":77,"v1":78,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":79,"v1":80,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":81,"v1":82,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":83,"v1":84,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":85,"v1":86,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-225},{"v0":87,"v1":88,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":20,"y":180},{"v0":89,"v1":90,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700,"y":80},{"v0":91,"v1":92,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":93,"v1":94,"vis":false,"color":"00FFDD","bCoef":0,"cMask":["ball"]},{"v0":95,"v1":96,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":0},{"v0":97,"v1":98,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":4},{"v0":99,"v1":100,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":-4},{"v0":101,"v1":102,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-215},{"v0":103,"v1":104,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-102},{"v0":105,"v1":106,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":100},{"v0":107,"v1":108,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":215},{"v0":109,"v1":110,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":210},{"v0":111,"v1":112,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":105},{"v0":113,"v1":114,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-105},{"v0":115,"v1":116,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-220},{"v0":117,"v1":118,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-210},{"v0":119,"v1":120,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":121,"v1":122,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":40,"y":180},{"v0":123,"v1":124,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":125,"v1":126,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-105},{"v0":127,"v1":128,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-102},{"v0":129,"v1":130,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-215},{"v0":131,"v1":132,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-220},{"v0":133,"v1":134,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-210},{"v0":135,"v1":136,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":29,"y":180},{"v0":137,"v1":138,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":33,"y":180},{"v0":139,"v1":140,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":25,"y":180},{"v0":141,"v1":142,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":100},{"v0":143,"v1":144,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":105},{"v0":145,"v1":146,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":215},{"v0":147,"v1":148,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":210},{"v0":149,"v1":150,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"y":75},{"v0":151,"v1":152,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":380},{"v0":153,"v1":154,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":360},{"v0":155,"v1":156,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"y":90},{"v0":157,"v1":158,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":35,"y":180},{"v0":159,"v1":160,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"y":82.5},{"v0":161,"v1":162,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"y":83.5},{"v0":163,"v1":164,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":372.5},{"v0":165,"v1":166,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":369.5},{"v0":167,"v1":168,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":367},{"v0":169,"v1":170,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":7.5},{"v0":171,"v1":172,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":7.5},{"v0":173,"v1":174,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":7.5},{"v0":175,"v1":176,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"x":3},{"v0":177,"v1":178,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":12},{"v0":179,"v1":180,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"x":12},{"v0":181,"v1":182,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":13},{"v0":183,"v1":184,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":3.5},{"v0":185,"v1":186,"curve":197.68362912038353,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":187,"v1":188,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":187,"v1":189,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":189,"v1":190,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":190,"v1":191,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":191,"v1":193,"curve":200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":191,"v1":194,"curve":-200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":192,"v1":195,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":196,"v1":197,"curve":100,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":198,"curve":200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":198,"curve":-200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":200,"v1":201,"curve":200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":202,"v1":203,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":202,"v1":203,"curve":-200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"],"_selected":true},{"v0":204,"v1":205,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":206,"v1":207,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":208,"v1":209,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":232,"v1":233,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["wall"]},{"v0":234,"v1":235,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-760,"bCoef":0.1},{"normal":[-1,0],"dist":-747,"bCoef":0.1},{"normal":[1,0],"dist":-723.8019847383677,"bCoef":0.1,"cMask":["ball"]},{"normal":[-1,0],"dist":-746,"bCoef":0.1,"cMask":["ball"]},{"normal":[1,0],"dist":-723.9342788028363,"bCoef":0.1,"cMask":["ball"]}],"goals":[],"discs":[{"radius":6.25,"invMass":1.5,"pos":[-350,-165],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"invMass":0,"pos":[-700,110]},{"radius":5,"invMass":0,"pos":[-700,205]},{"radius":5,"invMass":0,"pos":[700,-44.25447791946799]},{"radius":5,"invMass":0,"pos":[700,-204.254477919468]},{"radius":3,"invMass":0,"pos":[-700,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-700,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":6.25,"invMass":1.5,"pos":[-350,165],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":3,"invMass":0,"pos":[-700,10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,-10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":5,"invMass":0,"pos":[0,110]},{"radius":5,"invMass":0,"pos":[0,205]},{"radius":6,"invMass":0,"pos":[-700,-205]},{"radius":6,"invMass":0,"pos":[-700,-110]},{"radius":6,"invMass":0,"pos":[0,-205]},{"radius":6,"invMass":0,"pos":[0,-110]},{"radius":3,"invMass":0,"pos":[0,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-700,-10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":6.25,"invMass":1.5,"pos":[200.05814815429105,204.91825821859942],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[550.4324607012973,204.5070708304177],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-120],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-180],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-60],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":350,"traits":[],"joints":[],"redSpawnPoints":[[0,0],[0,0],[214,-118]],"blueSpawnPoints":[[214,-118]],"canBeStored":true}';
var v2Map = '{"name":"SINDICATO ONE","width":430,"height":200,"bg":{"type":"","color":"2a3a40","width":0,"height":0},"vertexes":[{"x":0,"y":200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a8b4bd"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a8b4bd"},{"x":0,"y":-200,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-368,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":2,"color":"a3acc2"},{"x":-400,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":-400,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":-368,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":2,"color":"a3acc2"},{"x":368,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":-2,"color":"a3acc2"},{"x":400,"y":-65,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":400,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":368,"y":65,"bCoef":0.1,"cMask":["ball"],"bias":-2,"color":"a3acc2"},{"x":-368,"y":65,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":32},{"x":-368,"y":171.5,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":32},{"x":-368,"y":-65,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":-368,"y":-171.5,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":-368,"y":170,"bCoef":1.3,"cMask":["ball"],"color":"a3acc2"},{"x":368,"y":170,"bCoef":1.3,"cMask":["ball"],"color":"a3acc2"},{"x":368,"y":65,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":368,"y":171.5,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":368,"y":-171.5,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":368,"y":-65,"bCoef":1.1,"cMask":["ball"],"color":"a3acc2","bias":-32},{"x":-368,"y":-170,"cMask":["ball"],"color":"a3acc2"},{"x":368,"y":-170,"cMask":["ball"],"color":"a3acc2"},{"x":0,"y":-170,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a8b4bd"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a8b4bd","curve":0},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":170,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":-366.5,"y":122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":-366.5,"y":-122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":366.5,"y":122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":366.5,"y":-122,"bCoef":0.1,"cMask":[],"color":"a3acc2"},{"x":-368,"y":65,"bCoef":0.1,"cMask":[],"color":"c4c9d4","curve":0},{"x":-368,"y":-65,"bCoef":0.1,"cMask":[],"color":"c4c9d4","curve":0},{"x":368,"y":65,"bCoef":0.1,"cMask":[],"color":"c4c9d4","curve":0},{"x":368,"y":-65,"bCoef":0.1,"cMask":[],"color":"c4c9d4","curve":0},{"x":-400,"y":-66.5,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":-400,"y":66.5,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":400,"y":-66.5,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":400,"y":66.5,"bCoef":0.1,"cMask":["ball"],"bias":0,"color":"a3acc2"},{"x":0,"y":78,"cGroup":["c1"],"color":"c691ff","curve":180},{"x":0,"y":-78,"cGroup":["c1"],"color":"c691ff","curve":180},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},{"x":16.200000000000003,"y":57.24000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":-34.56,"y":2.16,"cMask":["wall"],"cGroup":["wall"]},{"x":23.76,"y":50.76,"cMask":["wall"],"cGroup":["wall"]},{"x":41.04000000000001,"y":37.80000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":5.4,"y":23.76,"cMask":["wall"],"cGroup":["wall"]},{"x":-22.680000000000003,"y":28.080000000000002,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.76,"y":-32.400000000000006,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.76,"y":-6.48,"cMask":["wall"],"cGroup":["wall"]},{"x":2.16,"y":-11.88,"cMask":["wall"],"cGroup":["wall"]},{"x":-24.84,"y":-59.400000000000006,"cMask":["wall"],"cGroup":["wall"]},{"x":0,"y":-31.320000000000007,"cMask":["wall"],"cGroup":["wall"]},{"x":10.8,"y":1.0799999999999983,"cMask":["wall"],"cGroup":["wall"]},{"x":23.76,"y":-5.4,"cMask":["wall"],"cGroup":["wall"]},{"x":14.040000000000001,"y":-37.800000000000004,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.08,"y":7.5600000000000005,"cMask":["wall"],"cGroup":["wall"]},{"x":38.88,"y":-11.88,"cMask":["wall"],"cGroup":["wall"]},{"x":37.8,"y":1.08,"cMask":["wall"],"cGroup":["wall"]},{"x":7.5600000000000005,"y":14.040000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":16.200000000000003,"y":-74.52000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":15.12,"y":-59.4,"cMask":["wall"],"cGroup":["wall"]},{"x":-14.040000000000003,"y":-84.24000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.64,"y":-71.28,"cMask":["wall"],"cGroup":["wall"]},{"x":1.08,"y":-96.12,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.32,"y":-110.16000000000001,"cMask":["wall"],"cGroup":["wall"]},{"x":-12.96,"y":-39.96000000000001,"cMask":["wall"],"cGroup":["wall"],"curve":90},{"x":-26.080000000000002,"y":-40.20000000000001,"cMask":["wall"],"cGroup":["wall"],"curve":90},{"x":-16.200000000000003,"y":-58.32000000000001,"cMask":["wall"],"cGroup":["wall"],"curve":180},{"x":-18.360000000000003,"y":-47.52,"cMask":["wall"],"cGroup":["wall"],"curve":180}],"segments":[{"v0":4,"v1":5,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":2,"y":-65},{"v0":6,"v1":7,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":2,"y":65},{"v0":8,"v1":9,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":-2,"y":-65},{"v0":10,"v1":11,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":-2,"y":65},{"v0":0,"v1":1,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":12,"v1":13,"color":"a3acc2","bCoef":1.1,"cMask":["ball"],"bias":32,"x":-368},{"v0":14,"v1":15,"color":"a3acc2","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":-368},{"v0":16,"v1":17,"color":"a3acc2","cMask":["ball"],"y":170},{"v0":18,"v1":19,"color":"a3acc2","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":368},{"v0":20,"v1":21,"color":"a3acc2","bCoef":1.1,"cMask":["ball"],"bias":-32,"x":368},{"v0":22,"v1":23,"color":"a3acc2","bCoef":2,"cMask":["ball"],"y":-170},{"v0":24,"v1":25,"color":"a8b4bd","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":26,"v1":27,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":29,"v1":28,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[]},{"v0":30,"v1":31,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[]},{"v0":33,"v1":32,"curve":0,"color":"c4c9d4","bCoef":0.1,"cMask":[]},{"v0":35,"v1":34,"curve":0,"color":"c4c9d4","bCoef":0.1,"cMask":[],"x":368},{"v0":36,"v1":37,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":0,"x":-400},{"v0":38,"v1":39,"color":"a3acc2","bCoef":0.1,"cMask":["ball"],"bias":0},{"v0":40,"v1":41,"curve":180,"vis":true,"color":"d0d5e1","cGroup":["c1"]},{"v0":41,"v1":40,"curve":180,"vis":true,"color":"c691ff","cGroup":["c1"]},{"v0":42,"v1":43,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.1232339957368e-17},{"v0":43,"v1":42,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":44,"v1":45,"curve":180,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":46,"v1":47,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":46,"v1":48,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":48,"v1":49,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":49,"v1":50,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":51,"v1":52,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":50,"v1":53,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":53,"v1":50,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":54,"v1":55,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":56,"v1":57,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":54,"v1":57,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":55,"v1":56,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":58,"v1":59,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":59,"v1":60,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":60,"v1":61,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":58,"v1":61,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":60,"v1":60,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":60,"v1":60,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":62,"v1":63,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":64,"v1":65,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":66,"v1":67,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":68,"v1":69,"curve":90,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":70,"v1":71,"curve":180,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":71,"v1":70,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2}],"planes":[{"normal":[0,1],"dist":-170,"bCoef":1.1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-765,-200,765,200],"a":[-765,-170],"b":[765,-170]}}},{"normal":[0,-1],"dist":-170,"bCoef":1.1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-765,-200,765,200],"a":[-765,170],"b":[765,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-765,-200,765,200],"a":[-765,-200],"b":[765,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-765,-200,765,200],"a":[-765,200],"b":[765,200]}}},{"normal":[1,0],"dist":-430,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-430,"canvas_rect":[-765,-200,765,200],"a":[-430,-200],"b":[-430,200]}}},{"normal":[-1,0],"dist":-430,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-430,"canvas_rect":[-765,-200,765,200],"a":[430,-200],"b":[430,200]}}},{"normal":[1,0],"dist":-400,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-400,"canvas_rect":[-765,-200,765,200],"a":[-400,-200],"b":[-400,200]}}},{"normal":[-1,0],"dist":-400,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-400,"canvas_rect":[-765,-200,765,200],"a":[400,-200],"b":[400,200]}}}],"goals":[{"p0":[368,65],"p1":[368,-65],"team":"blue","color":"c4c9d4"},{"p0":[-368,-65],"p1":[-368,65],"team":"red","color":"c4c9d4"}],"discs":[{"radius":4.5,"invMass":0,"pos":[-368,65],"color":"C10B31"},{"radius":4.5,"invMass":0,"pos":[-368,-65],"color":"C10B31"},{"radius":4.5,"invMass":0,"pos":[368,65],"color":"2519CF"},{"radius":4.5,"invMass":0,"pos":[368,-65],"color":"2519CF"}],"playerPhysics":{"bCoef":0.35,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.65},"ballPhysics":{"radius":6.5,"bCoef":0.465,"invMass":1.4,"color":"ffffff"},"spawnDistance":180,"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
var v3Map = '{"name":"SINDICATO THREE","width":648,"height":270,"bg":{"type":"","color":"2a3a40","width":0,"height":0},"vertexes":[/* 0 */{"x":550,"y":240,"cMask":["ball"]},/* 1 */{"x":550,"y":-240,"cMask":["ball"]},/* 2 */{"x":0,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 3 */{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},/* 4 */{"x":0,"y":-80,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"a3acc2"},/* 5 */{"x":0,"y":-270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 6 */{"x":-550,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 7 */{"x":-590,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 8 */{"x":-590,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 9 */{"x":-550,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 10 */{"x":550,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 11 */{"x":590,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 12 */{"x":590,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 13 */{"x":550,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 14 */{"x":-550,"y":80,"cMask":["ball"],"color":"a3acc2"},/* 15 */{"x":-550,"y":240,"cMask":["ball"],"color":"a3acc2"},/* 16 */{"x":-550,"y":-80,"cMask":["ball"],"color":"a3acc2"},/* 17 */{"x":-550,"y":-240,"cMask":["ball"],"color":"a3acc2"},/* 18 */{"x":-550,"y":240,"cMask":["ball"],"color":"a3acc2"},/* 19 */{"x":550,"y":240,"cMask":["ball"],"color":"a3acc2"},/* 20 */{"x":550,"y":80,"cMask":["ball"],"color":"a3acc2"},/* 21 */{"x":550,"y":240,"cMask":["ball"],"color":"a3acc2"},/* 22 */{"x":550,"y":-240,"cMask":["ball"],"color":"a3acc2"},/* 23 */{"x":550,"y":-80,"cMask":["ball"],"color":"a3acc2"},/* 24 */{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},/* 25 */{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},/* 26 */{"x":-550,"y":-240,"cMask":["ball"],"color":"a3acc2"},/* 27 */{"x":550,"y":-240,"cMask":["ball"],"color":"a3acc2"},/* 28 */{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},/* 29 */{"x":0,"y":-82,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"a3acc2"},/* 30 */{"x":0,"y":82,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},/* 31 */{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"a3acc2"},/* 32 */{"x":0,"y":-82,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 33 */{"x":0,"y":82,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 34 */{"x":0,"y":82,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 35 */{"x":0,"y":-82,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 36 */{"x":0,"y":82,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 37 */{"x":0,"y":-82,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 38 */{"x":-557.5,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 39 */{"x":-557.5,"y":240,"bCoef":2,"cMask":["ball"]},/* 40 */{"x":-557.5,"y":-240,"bCoef":2,"cMask":["ball"]},/* 41 */{"x":-557.5,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 42 */{"x":557.5,"y":-240,"bCoef":2,"cMask":["ball"]},/* 43 */{"x":557.5,"y":-80,"bCoef":0.1,"cMask":["ball"]},/* 44 */{"x":557.5,"y":80,"bCoef":0.1,"cMask":["ball"]},/* 45 */{"x":557.5,"y":240,"bCoef":2,"cMask":["ball"]},/* 46 */{"x":0,"y":82,"bCoef":0.1,"cMask":[]},/* 47 */{"x":-550,"y":-80,"bCoef":0.1,"cMask":[]},/* 48 */{"x":-550,"y":80,"bCoef":0.1,"cMask":[]},/* 49 */{"x":550,"y":-80,"bCoef":0.1,"cMask":[]},/* 50 */{"x":550,"y":80,"bCoef":0.1,"cMask":[]},/* 51 */{"x":-548,"y":160,"bCoef":0.1,"cMask":[],"color":"a3acc2"},/* 52 */{"x":-548,"y":-160,"bCoef":0.1,"cMask":[],"color":"a3acc2"},/* 53 */{"x":548,"y":160,"bCoef":0.1,"cMask":[],"color":"a3acc2"},/* 54 */{"x":548,"y":-160,"bCoef":0.1,"cMask":[],"color":"a3acc2"},/* 55 */{"x":480,"y":-2,"bCoef":0.1,"cMask":[]},/* 56 */{"x":480,"y":2,"bCoef":0.1,"cMask":[]},/* 57 */{"x":480,"y":-2,"bCoef":0.1,"cMask":[]},/* 58 */{"x":480,"y":2,"bCoef":0.1,"cMask":[]},/* 59 */{"x":-480,"y":-2,"bCoef":0.1,"cMask":[]},/* 60 */{"x":-480,"y":2,"bCoef":0.1,"cMask":[]},/* 61 */{"x":-480,"y":-2,"bCoef":0.1,"cMask":[]},/* 62 */{"x":-480,"y":2,"bCoef":0.1,"cMask":[]},/* 63 */{"x":16.883911680000004,"y":57.57619188060358,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"f5b602"},/* 64 */{"x":-31.012224000000018,"y":-7.9626350757750455,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"f5b602"},/* 65 */{"x":25.046845440000006,"y":51.05906944000002,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 66 */{"x":38.372712960000015,"y":36.814668800000014,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 67 */{"x":5.006300279396434,"y":25.924456840603572,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 68 */{"x":-19.84929024000001,"y":30.93075712000001,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 69 */{"x":-16.698957038792873,"y":-39.86956282030179,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 70 */{"x":-19.270973499698226,"y":-13.368160981508916,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 71 */{"x":5.572016460905348,"y":-13.722349662112483,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 72 */{"x":-9.860082304526747,"y":-63.299039780521255,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 73 */{"x":-7.288065843621398,"y":-52.153635116598075,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 74 */{"x":-7.288065843621398,"y":-42.72290809327846,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 75 */{"x":-16.718792866941012,"y":-46.98902606310015,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 76 */{"x":2.9999999999999982,"y":-30.720164609053494,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 77 */{"x":9.858710562414263,"y":0.14403292181069993,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 78 */{"x":25.29080932784636,"y":-3.2853223593964334,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 79 */{"x":16.71742112482853,"y":-34.149519890260635,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 80 */{"x":-3.0013717421124824,"y":3.5733882030178314,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 81 */{"x":35.57887517146776,"y":-5.857338820301783,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 82 */{"x":33.00685871056241,"y":6.1454046639231805,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 83 */{"x":11.573388203017831,"y":12.146776406035666,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 84 */{"x":19.289437585733882,"y":-52.153635116598075,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 85 */{"x":23.576131687242796,"y":-64.15637860082305,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 86 */{"x":7.286694101508916,"y":-72.72976680384087,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 87 */{"x":12.860082304526747,"y":-86.5912208504801,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},/* 88 */{"x":14.574759945130314,"y":-101.16598079561042,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":6,"v1":7,"color":"DB7F89","bCoef":0.1,"cMask":["ball"]},{"v0":7,"v1":8,"color":"DB7F89","bCoef":0.1,"cMask":["ball"]},{"v0":8,"v1":9,"color":"DB7F89","bCoef":0.1,"cMask":["ball"]},{"v0":10,"v1":11,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"]},{"v0":11,"v1":12,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"]},{"v0":12,"v1":13,"color":"7FA8DB","bCoef":0.1,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":3,"v1":4,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.1232339957368e-17},{"v0":4,"v1":3,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":4,"v1":5,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"a3acc2","cMask":["ball"]},{"v0":16,"v1":17,"color":"a3acc2","cMask":["ball"]},{"v0":18,"v1":19,"color":"a3acc2","cMask":["ball"]},{"v0":20,"v1":21,"color":"a3acc2","cMask":["ball"]},{"v0":22,"v1":23,"color":"a3acc2","cMask":["ball"]},{"v0":24,"v1":25,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":26,"v1":27,"color":"a3acc2","cMask":["ball"]},{"v0":28,"v1":29,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":30,"v1":31,"color":"a3acc2","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":38,"v1":39,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"]},{"v0":40,"v1":41,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"]},{"v0":42,"v1":43,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"]},{"v0":44,"v1":45,"vis":false,"color":"F8F8F8","bCoef":2,"cMask":["ball"]},{"v0":47,"v1":48,"color":"F8F8F8","bCoef":0.1,"cMask":[]},{"v0":49,"v1":50,"color":"F8F8F8","bCoef":0.1,"cMask":[]},{"v0":52,"v1":51,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":53,"v1":54,"curve":180,"color":"a3acc2","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":56,"v1":55,"curve":180,"color":"686763","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":57,"v1":58,"curve":180,"color":"686763","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":60,"v1":59,"curve":180,"color":"686763","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":61,"v1":62,"curve":180,"color":"686763","bCoef":0.1,"cMask":[],"curveF":6.1232339957368e-17},{"v0":63,"v1":64,"curve":191.60416397318934,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":65,"v1":66,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":65,"v1":67,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":67,"v1":68,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":68,"v1":69,"curve":8.408996688972096,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":70,"v1":71,"curve":-47.13144030282425,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":69,"v1":72,"curve":190,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":72,"v1":69,"curve":190,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":72,"v1":73,"curve":190,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":73,"v1":72,"curve":162.05474677020808,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":74,"v1":75,"curve":40,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":76,"v1":77,"curve":40,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":78,"v1":79,"curve":40,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":76,"v1":79,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":77,"v1":78,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":80,"v1":81,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":81,"v1":82,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":83,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":80,"v1":83,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":84,"v1":85,"curve":-102.68038349182054,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":86,"v1":4,"curve":103.72033743034781,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":87,"v1":88,"curve":40,"color":"f5b602","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"]},{"normal":[0,-1],"dist":-240,"cMask":["ball"]},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1},{"normal":[-1,0],"dist":-644,"bCoef":0.1},{"normal":[1,0],"dist":-642,"bCoef":0.1,"cMask":["ball"]},{"normal":[-1,0],"dist":-643,"bCoef":0.1,"cMask":["ball"]}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red"},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue"}],"discs":[{"radius":5,"invMass":0,"pos":[-550,80],"color":"E4E4E5"},{"radius":5,"invMass":0,"pos":[-550,-80],"color":"E4E4E5"},{"radius":5,"invMass":0,"pos":[550,80],"color":"E4E4E5"},{"radius":5,"invMass":0,"pos":[550,-80],"color":"E4E4E5"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2},"ballPhysics":{"radius":5.8,"bCoef":0.412,"invMass":1.5,"color":"FFF26D"},"spawnDistance":350,"traits":{},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
var v4Map = '{"name":"SINDICATO FOUR","width":780,"height":350,"spawnDistance":350,"bg":{"type":"","color":"2a3a40","width":0,"height":0},"vertexes":[/* 0 */{"x":-700,"y":320,"trait":"ballArea","bias":-15,"color":"a3acc2"},/* 1 */{"x":-700,"y":80,"trait":"ballArea","bias":-15,"color":"a3acc2"},/* 2 */{"x":-700,"y":-80,"trait":"ballArea","bias":-15,"color":"a3acc2"},/* 3 */{"x":-700,"y":-320,"trait":"ballArea","bias":-15,"color":"a3acc2"},/* 4 */{"x":700,"y":320,"trait":"ballArea","bias":15,"color":"a3acc2"},/* 5 */{"x":700,"y":80,"trait":"ballArea","bias":15,"color":"a3acc2"},/* 6 */{"x":700,"y":-80,"trait":"ballArea","bias":15,"color":"a3acc2"},/* 7 */{"x":700,"y":-320,"trait":"ballArea","bias":15,"color":"a3acc2"},/* 8 */{"x":0,"y":320,"trait":"kickOffBarrier","color":"a3acc2"},/* 9 */{"x":0,"y":80,"trait":"kickOffBarrier","color":"a3acc2"},/* 10 */{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"a3acc2"},/* 11 */{"x":0,"y":-320,"trait":"kickOffBarrier","color":"a3acc2"},/* 12 */{"x":-700,"y":-80,"trait":"goalNet","color":"002033"},/* 13 */{"x":-730,"y":-60,"trait":"goalNet","color":"002033"},/* 14 */{"x":-730,"y":60,"trait":"goalNet","color":"002033"},/* 15 */{"x":-700,"y":80,"trait":"goalNet","color":"002033"},/* 16 */{"x":700,"y":-80,"trait":"goalNet","color":"002033"},/* 17 */{"x":730,"y":-60,"trait":"goalNet","color":"002033"},/* 18 */{"x":730,"y":60,"trait":"goalNet","color":"002033"},/* 19 */{"x":700,"y":80,"trait":"goalNet","color":"002033"},/* 20 */{"x":700,"y":-320,"trait":"line","bias":15,"color":"a3acc2"},/* 21 */{"x":-700,"y":-320,"trait":"line","bias":15,"color":"a3acc2"},/* 22 */{"x":700,"y":320,"trait":"line","bias":-15,"color":"a3acc2"},/* 23 */{"x":-700,"y":320,"trait":"line","bias":-15,"color":"a3acc2"},/* 24 */{"x":-700,"y":-80,"trait":"line","color":"00290B"},/* 25 */{"x":-700,"y":80,"trait":"line","color":"00290B"},/* 26 */{"x":700,"y":-80,"trait":"line","color":"00290B"},/* 27 */{"x":700,"y":80,"trait":"line","color":"00290B"},/* 28 */{"x":0,"y":320,"trait":"kickOffBarrier"},/* 29 */{"x":0,"y":350,"trait":"kickOffBarrier"},/* 30 */{"x":0,"y":-320,"trait":"kickOffBarrier"},/* 31 */{"x":0,"y":-350,"trait":"kickOffBarrier"},/* 32 */{"x":-700,"y":275,"trait":"line"},/* 33 */{"x":700,"y":275,"trait":"line"},/* 34 */{"x":700,"y":-275,"trait":"line"},/* 35 */{"x":-690,"y":-320,"trait":"line","color":"007D11"},/* 36 */{"x":-700,"y":-310,"trait":"line","color":"007D11"},/* 37 */{"x":-700,"y":310,"trait":"line","color":"007D11"},/* 38 */{"x":-690,"y":320,"trait":"line","color":"007D11"},/* 39 */{"x":700,"y":310,"trait":"line","color":"007D11"},/* 40 */{"x":690,"y":320,"trait":"line","color":"007D11"},/* 41 */{"x":690,"y":-320,"trait":"line","color":"007D11"},/* 42 */{"x":700,"y":-310,"trait":"line","color":"007D11"},/* 43 */{"x":-700,"y":-80,"trait":"ballArea"},/* 44 */{"x":-700,"y":-320,"trait":"ballArea"},/* 45 */{"x":-700,"y":320,"trait":"ballArea"},/* 46 */{"x":-700,"y":80,"trait":"ballArea"},/* 47 */{"x":700,"y":320,"trait":"ballArea"},/* 48 */{"x":700,"y":80,"trait":"ballArea"},/* 49 */{"x":700,"y":-80,"trait":"ballArea"},/* 50 */{"x":700,"y":-320,"trait":"ballArea"},/* 51 */{"x":-450,"y":-321.59374237060547,"bCoef":-0.5,"cMask":["ball"],"trait":"line","color":"a3a3a3"},/* 52 */{"x":-450,"y":319.40625762939453,"bCoef":-0.5,"cMask":["ball"],"trait":"line","color":"a3a3a3"},/* 53 */{"x":450,"y":-321.59374237060547,"bCoef":-0.5,"cMask":["ball"],"trait":"goalNet","color":"a3a3a3"},/* 54 */{"x":450,"y":319.40625762939453,"bCoef":-0.5,"cMask":["ball"],"trait":"goalNet","color":"a3a3a3"},/* 55 */{"x":-400,"y":-319,"trait":"line","curve":0,"color":"a3acc2"},/* 56 */{"x":-400,"y":318,"trait":"line","curve":0,"color":"a3acc2"},/* 57 */{"x":400,"y":-319,"trait":"line","curve":0,"color":"a3acc2"},/* 58 */{"x":400,"y":318,"trait":"line","curve":0,"color":"a3acc2"},/* 59 */{"x":-700,"y":-130,"trait":"line","curve":0,"color":"a3acc2"},/* 60 */{"x":-595,"y":-130,"trait":"line","curve":50,"color":"a3acc2"},/* 61 */{"x":700,"y":-130,"trait":"line","color":"a3acc2"},/* 62 */{"x":595,"y":-130,"trait":"line","color":"a3acc2"},/* 63 */{"x":-700,"y":130,"trait":"line","color":"a3acc2"},/* 64 */{"x":-595,"y":130,"trait":"line","curve":0,"color":"a3acc2"},/* 65 */{"x":700,"y":130,"trait":"line","color":"a3acc2"},/* 66 */{"x":595,"y":130,"trait":"line","color":"a3acc2"},/* 67 */{"x":-399,"y":-136,"trait":"line","color":"a3acc2"},/* 68 */{"x":-402,"y":130,"trait":"line","color":"a3acc2"},/* 69 */{"x":399,"y":-136,"trait":"line","color":"a3acc2"},/* 70 */{"x":402,"y":130,"trait":"line","color":"a3acc2"},/* 71 */{"x":21.6,"y":54.00000000000002,"cMask":["wall"],"cGroup":["wall"]},/* 72 */{"x":-32.40000000000001,"y":-4.319999999999996,"cMask":["wall"],"cGroup":["wall"]},/* 73 */{"x":30.240000000000006,"y":45.360000000000014,"cMask":["wall"],"cGroup":["wall"]},/* 74 */{"x":44.28000000000001,"y":30.240000000000006,"cMask":["wall"],"cGroup":["wall"]},/* 75 */{"x":11.88,"y":22.680000000000007,"cMask":["wall"],"cGroup":["wall"]},/* 76 */{"x":-15.120000000000005,"y":29.160000000000007,"cMask":["wall"],"cGroup":["wall"]},/* 77 */{"x":-20.520000000000003,"y":-36.720000000000006,"cMask":["wall"],"cGroup":["wall"]},/* 78 */{"x":-19.440000000000005,"y":-4.32,"cMask":["wall"],"cGroup":["wall"]},/* 79 */{"x":7.5600000000000005,"y":-10.800000000000002,"cMask":["wall"],"cGroup":["wall"]},/* 80 */{"x":-16.200000000000003,"y":-64.80000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 81 */{"x":-10.800000000000002,"y":-42.12000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 82 */{"x":-22.680000000000007,"y":-47.52000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 83 */{"x":-8.640000000000002,"y":-60.48000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 84 */{"x":-15.120000000000003,"y":-51.84000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 85 */{"x":5.400000000000001,"y":-34.56000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 86 */{"x":12.960000000000003,"y":5.400000000000002,"cMask":["wall"],"cGroup":["wall"]},/* 87 */{"x":30.240000000000002,"y":0,"cMask":["wall"],"cGroup":["wall"]},/* 88 */{"x":21.600000000000005,"y":-37.80000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 89 */{"x":1.0800000000000003,"y":6.480000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 90 */{"x":42.12000000000001,"y":-2.1600000000000006,"cMask":["wall"],"cGroup":["wall"]},/* 91 */{"x":37.800000000000004,"y":6.480000000000002,"cMask":["wall"],"cGroup":["wall"]},/* 92 */{"x":9.719999999999999,"y":14.040000000000004,"cMask":["wall"],"cGroup":["wall"]},/* 93 */{"x":23.760000000000005,"y":-69.12000000000002,"cMask":["wall"],"cGroup":["wall"]},/* 94 */{"x":19.440000000000005,"y":-54.000000000000014,"cMask":["wall"],"cGroup":["wall"]},/* 95 */{"x":-8.400000000000002,"y":-94.64000000000001,"cMask":["wall"],"cGroup":["wall"]},/* 96 */{"x":9.720000000000002,"y":-117.72000000000003,"cMask":["wall"],"cGroup":["wall"]},/* 97 */{"x":11.880000000000003,"y":-99.36000000000003,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":43,"v1":44,"trait":"ballArea"},{"v0":45,"v1":46,"trait":"ballArea"},{"v0":47,"v1":48,"trait":"ballArea"},{"v0":49,"v1":50,"trait":"ballArea"},{"v0":0,"v1":1,"vis":true,"color":"a3acc2","trait":"ballArea","bias":-15},{"v0":2,"v1":3,"vis":true,"color":"a3acc2","trait":"ballArea","bias":-15},{"v0":4,"v1":5,"vis":true,"color":"a3acc2","trait":"ballArea","bias":15},{"v0":6,"v1":7,"vis":true,"color":"a3acc2","trait":"ballArea","bias":15},{"v0":16,"v1":17,"curve":90,"color":"002033","trait":"goalNet"},{"v0":18,"v1":19,"curve":90,"color":"002033","trait":"goalNet"},{"v0":12,"v1":13,"curve":-90,"color":"002033","trait":"goalNet"},{"v0":14,"v1":15,"curve":-90,"color":"002033","trait":"goalNet"},{"v0":13,"v1":14,"color":"002033","trait":"goalNet"},{"v0":17,"v1":18,"color":"002033","trait":"goalNet"},{"v0":9,"v1":10,"curve":180,"color":"a3acc2","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"color":"a3acc2","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":28,"v1":29,"vis":false,"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":false,"trait":"kickOffBarrier"},{"v0":8,"v1":9,"color":"a3acc2","trait":"kickOffBarrier"},{"v0":10,"v1":11,"color":"a3acc2","trait":"kickOffBarrier"},{"v0":35,"v1":36,"curve":90,"color":"007D11","trait":"line"},{"v0":37,"v1":38,"curve":90,"color":"007D11","trait":"line"},{"v0":39,"v1":40,"curve":-90,"color":"007D11","trait":"line"},{"v0":41,"v1":42,"curve":-90,"color":"007D11","trait":"line"},{"v0":20,"v1":21,"color":"a3acc2","trait":"line","bias":15},{"v0":22,"v1":23,"color":"a3acc2","trait":"line","bias":-15},{"v0":24,"v1":25,"color":"00290B","trait":"line"},{"v0":26,"v1":27,"color":"00290B","trait":"line"},{"v0":55,"v1":56,"curve":0,"color":"a3acc2","trait":"line","x":-400},{"v0":57,"v1":58,"curve":0,"color":"a3acc2","trait":"line","x":400},{"v0":59,"v1":60,"curve":0,"color":"a3acc2","trait":"line"},{"v0":61,"v1":62,"curve":0,"color":"a3acc2","trait":"line"},{"v0":63,"v1":64,"curve":0,"color":"a3acc2","trait":"line"},{"v0":65,"v1":66,"curve":0,"color":"a3acc2","trait":"line"},{"v0":60,"v1":64,"curve":0,"color":"a3acc2","trait":"line"},{"v0":62,"v1":66,"curve":0,"color":"a3acc2","trait":"line"},{"v0":67,"v1":68,"curve":140,"color":"a3acc2","trait":"line"},{"v0":69,"v1":70,"curve":-140,"color":"a3acc2","trait":"line"},{"v0":71,"v1":72,"curve":180,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":73,"v1":74,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":73,"v1":75,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":75,"v1":76,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":76,"v1":77,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":78,"v1":79,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":77,"v1":80,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":80,"v1":77,"curve":172.93541083221805,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":81,"v1":82,"curve":90,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":83,"v1":84,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":84,"v1":83,"curve":190,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":85,"v1":86,"curve":30.922435480883802,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":87,"v1":88,"curve":56.144973871705886,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":85,"v1":88,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":86,"v1":87,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":89,"v1":90,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":90,"v1":91,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":91,"v1":92,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":89,"v1":92,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":93,"v1":94,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":10,"v1":95,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2},{"v0":96,"v1":97,"curve":40,"color":"f5b602","cMask":["wall"],"cGroup":["wall"],"bias":2}],"goals":[{"p0":[-710,-80],"p1":[-710,80],"team":"red"},{"p0":[710,80],"p1":[710,-80],"team":"blue"}],"discs":[{"radius":5.9,"pos":[-700,80],"color":"000203","trait":"goalPost"},{"radius":5.9,"pos":[-700,-80],"color":"000203","trait":"goalPost"},{"radius":5.9,"pos":[700,80],"color":"000203","trait":"goalPost"},{"radius":5.9,"pos":[700,-80],"color":"000203","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-320,"trait":"ballArea"},{"normal":[0,-1],"dist":-320,"trait":"ballArea"},{"normal":[0,1],"dist":-350,"bCoef":0},{"normal":[0,-1],"dist":-350,"bCoef":0},{"normal":[1,0],"dist":-780,"bCoef":0},{"normal":[-1,0],"dist":-780,"bCoef":0}],"traits":{"line":{"cMask":[""],"color":"FFFFFF"},"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"color":"E50808"},"goalNet":{"bCoef":-0.5,"cMask":["ball"]},"kickOffBarrier":{"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"],"color":"FFFFFF"}},"playerPhysics":{"bCoef":0.01,"kickStrength":4.545,"kickingAcceleration":0.09,"acceleration":0.113},"ballPhysics":{"radius":5.9,"bCoef":0.42,"color":"820400","invMass":1.5,"damping":0.99},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}';
var v6Map = '{"name":"SINDICATO SIX","width":1025,"height":490,"spawnDistance":450,"bg":{"color":"2a3a40"},"vertexes":[{"x":-950,"y":460,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":-950,"y":95,"bCoef":1.15,"cMask":["red","blue","ball"],"trait":"ballArea","curve":0,"color":"ff0000"},{"x":-950,"y":-95,"bCoef":1.15,"cMask":["red","blue","ball"],"trait":"ballArea","curve":0,"color":"ff0000"},{"x":-950,"y":-460,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":950,"y":456,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":950,"y":95,"bCoef":1.15,"cMask":["red","blue","ball"],"trait":"ballArea","curve":0,"color":"0000ff"},{"x":950,"y":-95,"bCoef":1.15,"cMask":["red","blue","ball"],"trait":"ballArea","curve":0,"color":"0000ff"},{"x":950,"y":-456,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":495,"trait":"kickOffBarrier"},{"x":0,"y":130,"trait":"kickOffBarrier"},{"x":0,"y":-130,"trait":"line"},{"x":0,"y":-495,"trait":"kickOffBarrier"},{"x":-1000,"y":-95,"bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0},{"x":1000,"y":-95,"bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0},{"x":-1000,"y":95,"bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0},{"x":1000,"y":95,"bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0},{"x":951,"y":460,"bCoef":1,"trait":"ballArea"},{"x":951,"y":-460,"bCoef":1,"trait":"ballArea"},{"x":0,"y":130,"trait":"kickOffBarrier"},{"x":0,"y":-130,"trait":"kickOffBarrier"},{"x":956.75,"y":-101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":956.75,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":-956.75,"y":-101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":-956.75,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":-956.75,"y":101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":-956.75,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":956.75,"y":101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":956.75,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":640,"y":100,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},{"x":850,"y":330,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},{"x":640,"y":-100,"bCoef":0,"cMask":[""],"trait":"line","curve":90},{"x":-450,"y":460,"bCoef":0.1,"trait":"line"},{"x":950,"y":200,"bCoef":0.1,"trait":"line"},{"x":950,"y":-200,"bCoef":0.1,"trait":"line"},{"x":-450,"y":-460,"bCoef":0.1,"trait":"line"},{"x":450,"y":460,"bCoef":0.1,"trait":"line"},{"x":450,"y":-460,"bCoef":0.1,"trait":"line"},{"x":-950,"y":-200,"bCoef":0.1,"trait":"line"},{"x":-950,"y":200,"bCoef":0.1,"trait":"line"},{"x":-950,"y":435,"bCoef":0.1,"trait":"line","curve":-90},{"x":-925,"y":460,"bCoef":0.1,"trait":"line","curve":-90},{"x":-950,"y":-435,"bCoef":0.1,"trait":"line","curve":90},{"x":-925,"y":-460,"bCoef":0.1,"trait":"line","curve":90},{"x":950,"y":-435,"bCoef":0.1,"trait":"line","curve":-90},{"x":925,"y":-460,"bCoef":0.1,"trait":"line","curve":-90},{"x":950,"y":435,"bCoef":0.1,"trait":"line","curve":90},{"x":925,"y":460,"bCoef":0.1,"trait":"line","curve":90},{"x":850,"y":-330,"bCoef":0,"trait":"line","curve":90},{"x":-640,"y":100,"bCoef":0,"cMask":[""],"trait":"line","curve":90},{"x":-850,"y":330,"bCoef":0,"trait":"line","curve":90},{"x":-640,"y":-100,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},{"x":-850,"y":-330,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},{"x":-950,"y":330,"bCoef":0,"trait":"line"},{"x":-950,"y":-330,"bCoef":0,"trait":"line"},{"x":950,"y":330,"bCoef":0,"trait":"line"},{"x":950,"y":-330,"bCoef":0,"trait":"line"},{"x":-640,"y":-4.7,"bCoef":0.1,"trait":"line","curve":180},{"x":-640,"y":4.7,"bCoef":0.1,"trait":"line","curve":180},{"x":640,"y":-4.7,"bCoef":0.1,"trait":"line","curve":180},{"x":640,"y":4.7,"bCoef":0.1,"trait":"line","curve":180},{"x":950,"y":-30,"bCoef":0.1,"trait":"line","color":"0000b0"},{"x":950,"y":30,"bCoef":0.1,"trait":"line","color":"0000b0"},{"x":-950,"y":-30,"cMask":["wall"],"color":"b00000"},{"x":-950,"y":30,"cMask":["wall"],"color":"b00000"},{"x":-1006.5,"y":101.5,"bCoef":1,"cMask":["ball"]},{"x":-1006.5,"y":-101.5,"bCoef":1,"cMask":["ball"]},{"x":1006.5,"y":-101.5,"bCoef":1,"cMask":["ball"]},{"x":1006.5,"y":101.5,"bCoef":1,"cMask":["ball"]},{"x":0,"y":-460,"cMask":["wall"],"vis":true,"color":"ffffff"},{"x":0,"y":-130,"cMask":["wall"],"vis":true,"color":"ffffff"},{"x":0,"y":460,"cMask":["wall"],"vis":true,"color":"ffffff"},{"x":0,"y":130,"cMask":["wall"],"vis":true,"color":"ffffff"},{"x":-957.25,"y":101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":-957.25,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":957.25,"y":101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":957.25,"y":460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":957.25,"y":-101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":957.25,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":-957.25,"y":-101.5,"bCoef":1,"cMask":["ball"],"trait":"line","curve":0},{"x":-957.25,"y":-460,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":54.74834938021254,"y":87.27887792101639,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-49.98298545680249,"y":-20.628576039175655,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":58.74358583549255,"y":75.4140628969161,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":77.00172737895645,"y":58.74358583549255,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":20.63963826652441,"y":32.54712188182695,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-30.16562515876644,"y":41.279276533048815,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-31.753289640806777,"y":-65.0942437636539,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-29.87945739978661,"y":-19.937960676726103,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":14.289368490575637,"y":-24.764460702128737,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-29.371792917746276,"y":-114.31184270690441,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-13.495148097342883,"y":-107.96118477874306,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-18.2581415434639,"y":-92.87837219935984,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-10.319819133262204,"y":-73.0325661738556,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":-35.72245084590763,"y":-79.38322410201695,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":9.018710562414274,"y":-51.61733882030179,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":17.658710562414274,"y":-5.177338820301784,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":43.57871056241428,"y":-11.657338820301785,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":26.298710562414275,"y":-54.85733882030179,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":1.2360493827160586,"y":-1.2693552812071338,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":61.11467764060358,"y":-17.057338820301787,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":55.72702331961591,"y":-3.4293552812071324,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":15.432098765432107,"y":7.71604938271605,"cMask":["wall"],"cGroup":["wall"],"color":"0080ff"},{"x":22.000000000000004,"y":-116.4814814814815,"cMask":["wall"],"cGroup":["wall"],"curve":75},{"x":24.777777777777782,"y":-145.18518518518522,"cMask":["wall"],"cGroup":["wall"],"curve":75},{"x":-3.148148148148149,"y":-139.5925925925926,"cMask":["wall"],"cGroup":["wall"],"curve":90},{"x":-13.333333333333334,"y":-161.81481481481484,"cMask":["wall"],"cGroup":["wall"],"curve":90},{"x":16.740740740740748,"y":-76.14814814814815,"cMask":["wall"],"cGroup":["wall"],"curve":-50},{"x":11.185185185185189,"y":-93.74074074074075,"cMask":["wall"],"cGroup":["wall"],"curve":-50}],"segments":[{"v0":0,"v1":1,"curve":0,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea","x":951},{"v0":6,"v1":7,"trait":"ballArea","x":951},{"v0":8,"v1":9,"trait":"kickOffBarrier","x":0},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier","x":0},{"v0":2,"v1":12,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","x":-1000},{"v0":13,"v1":15,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["red","blue","ball"],"trait":"goalNet","x":1000},{"v0":1,"v1":0,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-950},{"v0":5,"v1":4,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":950},{"v0":2,"v1":3,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-950},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":950},{"v0":0,"v1":16,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":460},{"v0":3,"v1":17,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-460},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":19,"v1":18,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"ff0000","bCoef":0,"trait":"line","x":-950},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"0000ff","bCoef":0,"trait":"line"},{"v0":20,"v1":21,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":956.75},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-956.75},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-956.75},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":956.75},{"v0":28,"v1":29,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":40,"v1":39,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":42,"v1":41,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":44,"v1":43,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":46,"v1":45,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":30,"v1":47,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":48,"v1":49,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":50,"v1":51,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":49,"v1":52,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","y":330},{"v0":51,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","y":-330},{"v0":48,"v1":50,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","x":-640},{"v0":29,"v1":54,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","y":330},{"v0":47,"v1":55,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","y":-330},{"v0":28,"v1":30,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line","x":640},{"v0":56,"v1":57,"curve":120,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-640},{"v0":57,"v1":56,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-640},{"v0":56,"v1":57,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-640},{"v0":57,"v1":56,"curve":120,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-640},{"v0":58,"v1":59,"curve":120,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":640},{"v0":59,"v1":58,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":640},{"v0":58,"v1":59,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":640},{"v0":59,"v1":58,"curve":120,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":640},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"0000b0","bCoef":0.1,"trait":"line","x":950},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"b00000","cMask":["wall"],"x":-950},{"v0":24,"v1":64,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"y":101.5},{"v0":64,"v1":65,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"x":-1006.5},{"v0":65,"v1":22,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"y":-101.5},{"v0":20,"v1":66,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"y":-101.5},{"v0":66,"v1":67,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"x":1006.5},{"v0":67,"v1":26,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"y":101.5},{"v0":68,"v1":69,"vis":true,"color":"ffffff","cMask":["wall"],"x":0},{"v0":70,"v1":71,"vis":true,"color":"ffffff","cMask":["wall"],"x":0},{"v0":72,"v1":73,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-957.25},{"v0":74,"v1":75,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":957.25},{"v0":76,"v1":77,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":957.25},{"v0":78,"v1":79,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-957.25},{"v0":80,"v1":81,"curve":188.84150569912845,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":83,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":84,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":84,"v1":85,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":85,"v1":86,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":87,"v1":88,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":86,"v1":89,"curve":188.84150569912845,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":89,"v1":86,"curve":188.84150569912845,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":91,"curve":190,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":91,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":91,"v1":90,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":93,"curve":50,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":94,"v1":95,"curve":40,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":96,"v1":97,"curve":40,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":94,"v1":97,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":95,"v1":96,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":99,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":99,"v1":100,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":100,"v1":101,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":101,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":102,"v1":103,"curve":75,"color":"505050","cMask":["wall"],"cGroup":["wall"]},{"v0":104,"v1":105,"curve":90,"color":"505050","cMask":["wall"],"cGroup":["wall"]},{"v0":106,"v1":107,"curve":-50,"color":"505050","cMask":["wall"],"cGroup":["wall"]}],"goals":[{"p0":[-958.1,-95],"p1":[-958.1,95],"team":"red"},{"p0":[958.1,95],"p1":[958.1,-95],"team":"blue"}],"discs":[{"radius":5.4,"pos":[-950,95],"color":"ff0000","bCoef":0.55,"trait":"goalPost"},{"radius":5.4,"pos":[-950,-95],"color":"ff0000","bCoef":0.55,"trait":"goalPost"},{"radius":5.4,"pos":[950,95],"color":"0000ff","bCoef":0.55,"trait":"goalPost"},{"radius":5.4,"pos":[950,-95],"color":"0000ff","bCoef":0.55,"trait":"goalPost"},{"radius":3,"invMass":0,"pos":[-950,460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-950,-460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[950,-460],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[950,460],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-460,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-460,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[-515.2564361454026,-460],"b":[515.2564361454026,-460]}}},{"normal":[0,-1],"dist":-460,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-460,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[-515.2564361454026,460],"b":[515.2564361454026,460]}}},{"normal":[0,1],"dist":-495,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-495,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[-515.2564361454026,-495],"b":[515.2564361454026,-495]}}},{"normal":[0,-1],"dist":-495,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-495,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[-515.2564361454026,495],"b":[515.2564361454026,495]}}},{"normal":[1,0],"dist":-1030,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-1030,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[-1030,-247.62323873007213],"b":[-1030,247.62323873007213]}}},{"normal":[-1,0],"dist":-1030,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-1030,"canvas_rect":[-515.2564361454026,-247.62323873007213,515.2564361454026,247.62323873007213],"a":[1030,-247.62323873007213],"b":[1030,247.62323873007213]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"},"rusito":{"color":"444749"},"assad":{"color":"444749"}},"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.9,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.35,"invMass":1.5,"color":"FFCC00","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"canBeStored":false,"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v7Map = '{"name":"SINDICATO SEVEN","canBeStored":false,"width":1265,"height":630,"bg":{"type":"","color":"2a3a40","width":0,"height":0},"vertexes":[{"x":0,"y":-631,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-1200,"y":-120,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-1246.4680448000004,"y":-120.97231104,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-1247.05031168,"y":118.63951104,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},{"x":-1200,"y":120,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},{"x":1200,"y":-120,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120]},{"x":1252.0639999999999,"y":-121.07999999999998,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120]},{"x":1250.1632,"y":121.1664,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120]},{"x":1200,"y":120,"bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120]},{"x":-1200,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,80]},{"x":-1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":-1200,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,-80]},{"x":-1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":1200,"y":120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[1200,120],"color":"ffffff"},{"x":1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":1200,"y":-120,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[1200,-120]},{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},{"x":1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[1200,-120],"color":"ffffff"},{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1200,"y":-120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000"},{"x":-1200,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000"},{"x":1200,"y":-120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,-120]},{"x":1200,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,120]},{"x":-1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":-740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":-1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":-740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":0},{"x":740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"a3acc2","pos":[-700,80],"vis":false},{"x":1200,"y":-120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"a3acc2","pos":[1200,-120],"vis":false},{"x":1200,"y":120,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"a3acc2","pos":[1200,120],"vis":false},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":630,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},{"x":0,"y":-120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":120,"cMask":[],"color":"ffffff"},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"ffffff"},{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"ffffff"},{"x":0,"y":-121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"a3acc2","curve":-93.241608812827},{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"a3acc2","curve":93.241608812827},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"],"color":"a3acc2"},{"x":1235,"y":630,"bCoef":0.5,"cMask":["red","blue"],"color":"a3acc2"},{"x":-1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"],"color":"a3acc2"},{"x":-1235,"y":630,"bCoef":0.5,"cMask":["red","blue"],"color":"a3acc2"},{"x":46,"y":88,"cMask":["wall"],"cGroup":["wall"]},{"x":-46,"y":-20,"cMask":["wall"],"cGroup":["wall"]},{"x":52,"y":82,"cMask":["wall"],"cGroup":["wall"]},{"x":71,"y":66,"cMask":["wall"],"cGroup":["wall"]},{"x":18,"y":47,"cMask":["wall"],"cGroup":["wall"]},{"x":-30,"y":50,"cMask":["wall"],"cGroup":["wall"]},{"x":-37,"y":-59,"cMask":["wall"],"cGroup":["wall"]},{"x":-34,"y":-11,"cMask":["wall"],"cGroup":["wall"]},{"x":4,"y":-11,"cMask":["wall"],"cGroup":["wall"]},{"x":-37,"y":-105,"cMask":["wall"],"cGroup":["wall"]},{"x":-20,"y":-100,"cMask":["wall"],"cGroup":["wall"]},{"x":-29,"y":-87,"cMask":["wall"],"cGroup":["wall"]},{"x":-19,"y":-67,"cMask":["wall"],"cGroup":["wall"]},{"x":-43,"y":-71,"cMask":["wall"],"cGroup":["wall"]},{"x":-5,"y":-32,"cMask":["wall"],"cGroup":["wall"]},{"x":6,"y":8,"cMask":["wall"],"cGroup":["wall"]},{"x":32,"y":-1,"cMask":["wall"],"cGroup":["wall"]},{"x":11,"y":-39,"cMask":["wall"],"cGroup":["wall"]},{"x":-10,"y":14,"cMask":["wall"],"cGroup":["wall"]},{"x":49,"y":-5,"cMask":["wall"],"cGroup":["wall"]},{"x":45,"y":12,"cMask":["wall"],"cGroup":["wall"]},{"x":9,"y":23,"cMask":["wall"],"cGroup":["wall"]},{"x":10,"y":-58,"cMask":["wall"],"cGroup":["wall"],"curve":-90},{"x":8,"y":-79,"cMask":["wall"],"cGroup":["wall"],"curve":-90},{"x":-3,"y":-112,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-13,"y":-135,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":22,"y":-137,"cMask":["wall"],"cGroup":["wall"],"curve":70},{"x":26,"y":-163,"cMask":["wall"],"cGroup":["wall"],"curve":70}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","pos":[-700,-80],"y":-120},{"v0":3,"v1":4,"curve":0.8741505747911814,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","x":-1235},{"v0":4,"v1":5,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","pos":[-700,80],"y":120},{"v0":6,"v1":7,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","pos":[1200,-120],"y":-120},{"v0":7,"v1":8,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","x":1235},{"v0":8,"v1":9,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["wall"],"cGroup":["wall"],"trait":"goalPost","pos":[1200,120],"y":120},{"v0":10,"v1":11,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":12,"v1":13,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":14,"v1":15,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":18,"v1":19,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-600},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"F80000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-550},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"0000F8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":550},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":57,"v1":58,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":59,"v1":60,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":62,"v1":61,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":70,"v1":69,"curve":180.5,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":69,"v1":70,"curve":180.5,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":72,"v1":71,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":73,"v1":74,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":77,"v1":78,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":79,"v1":80,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":81,"v1":82,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":87,"v1":88,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":89,"v1":90,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":89,"v1":91,"curve":-22.619864948040426,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":91,"v1":92,"curve":16.602608746122016,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":93,"curve":2.7710522090277254,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":94,"v1":95,"curve":-24.300337677524873,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":93,"v1":96,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":96,"v1":93,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":97,"v1":98,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":97,"curve":190,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":99,"v1":100,"curve":60,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":101,"v1":102,"curve":40,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":103,"v1":104,"curve":40,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":101,"v1":104,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":105,"v1":106,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":106,"v1":107,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":107,"v1":108,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":108,"v1":105,"color":"0080ff","cMask":["wall"],"cGroup":["wall"]},{"v0":109,"v1":110,"curve":-90,"color":"505050","cMask":["wall"],"cGroup":["wall"]},{"v0":111,"v1":112,"curve":60,"color":"505050","cMask":["wall"],"cGroup":["wall"]},{"v0":113,"v1":114,"curve":70,"color":"505050","cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-630,"bCoef":0.1},{"normal":[0,-1],"dist":-600,"cMask":["ball"]},{"normal":[0,-1],"dist":-630,"bCoef":0.1},{"normal":[0,1],"dist":-600,"cMask":["ball"]}],"goals":[{"p0":[-1207.5,-120],"p1":[-1207.5,120],"team":"red","color":"ffffff"},{"p0":[1207.5,120],"p1":[1207.5,-120],"team":"blue","color":"ffffff"}],"discs":[{"radius":6,"invMass":0,"pos":[-1200,120],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[-1200,-120],"color":"ffffff","trait":"goalPost","y":-110,"x":-560},{"radius":6,"invMass":0,"pos":[1200,120],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[1200,-120],"color":"ffffff","trait":"goalPost","y":-110,"vis":true}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.9,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":320,"traits":{},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v10Map = '{"name":"¡SINDICATO MAP!","width":1475,"height":835,"bg":{"color":"2a3a40"},"vertexes":[/* 0 */{"x":-1397.222963951936,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 1 */{"x":1397.222963951936,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 2 */{"x":-1397.222963951936,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 3 */{"x":1397.222963951936,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 4 */{"x":-1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 5 */{"x":1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 6 */{"x":1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 7 */{"x":-1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 8 */{"x":-1457.769292389853,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 9 */{"x":-1457.769292389853,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 10 */{"x":1457.769292389853,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 11 */{"x":1457.769292389853,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 12 */{"x":0,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 13 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 14 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 15 */{"x":0,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 16 */{"x":-916.3453938584779,"y":-5.821762349799733,"cMask":[],"cGroup":[]},/* 17 */{"x":-916.3453938584779,"y":5.821762349799733,"cMask":[],"cGroup":[]},/* 18 */{"x":916.3453938584779,"y":455.692256341789,"cMask":[],"cGroup":[]},/* 19 */{"x":-916.3453938584779,"y":-460.692256341789,"cMask":[],"cGroup":[]},/* 20 */{"x":-916.3453938584779,"y":455.692256341789,"cMask":[],"cGroup":[]},/* 21 */{"x":916.3453938584779,"y":-460.692256341789,"cMask":[],"cGroup":[]},/* 22 */{"x":-915.678905206942,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 23 */{"x":-1404.7912550066756,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 24 */{"x":-1404.7912550066756,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 25 */{"x":1796.8869492656875,"y":749.8429906542056,"cMask":[],"cGroup":[]},/* 26 */{"x":-1404.7912550066756,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 27 */{"x":-1404.7912550066756,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 28 */{"x":1404.7912550066756,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 29 */{"x":1404.7912550066756,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 30 */{"x":1404.7912550066756,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 31 */{"x":1404.7912550066756,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 32 */{"x":0,"y":-739.363818424566,"cMask":[],"cGroup":[]},/* 33 */{"x":0,"y":739.363818424566,"cMask":[],"cGroup":[]},/* 34 */{"x":-1399.5516688918558,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 35 */{"x":-1399.5516688918558,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 36 */{"x":1399.5516688918558,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 37 */{"x":1399.5516688918558,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 38 */{"x":1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[],"color":"00008b"},/* 39 */{"x":1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[],"color":"00008b"},/* 40 */{"x":-1394.894259012016,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 41 */{"x":-1394.894259012016,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 42 */{"x":-1457.769292389853,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 43 */{"x":-1396.058611481976,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 44 */{"x":-1457.769292389853,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 45 */{"x":-1396.058611481976,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 46 */{"x":1398.3873164218958,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 47 */{"x":1457.769292389853,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 48 */{"x":1397.222963951936,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 49 */{"x":1457.769292389853,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 50 */{"x":1397.222963951936,"y":-80.3403204272363,"cMask":[],"cGroup":[]},/* 51 */{"x":1397.222963951936,"y":-48.90280373831776,"cMask":[],"cGroup":[]},/* 52 */{"x":1397.222963951936,"y":-17.465287049399198,"cMask":[],"cGroup":[]},/* 53 */{"x":1397.222963951936,"y":13.972229639519359,"cMask":[],"cGroup":[]},/* 54 */{"x":1397.222963951936,"y":45.40974632843792,"cMask":[],"cGroup":[]},/* 55 */{"x":1397.222963951936,"y":80.3403204272363,"cMask":[],"cGroup":[]},/* 56 */{"x":-1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 57 */{"x":-1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 58 */{"x":-1397.222963951936,"y":-80.3403204272363,"cMask":[],"cGroup":[]},/* 59 */{"x":-1397.222963951936,"y":-48.90280373831776,"cMask":[],"cGroup":[]},/* 60 */{"x":-1397.222963951936,"y":-17.465287049399198,"cMask":[],"cGroup":[]},/* 61 */{"x":-1397.222963951936,"y":13.972229639519359,"cMask":[],"cGroup":[]},/* 62 */{"x":-1397.222963951936,"y":45.40974632843792,"cMask":[],"cGroup":[]},/* 63 */{"x":-1397.222963951936,"y":80.3403204272363,"cMask":[],"cGroup":[]},/* 64 */{"x":916.3453938584779,"y":-5.821762349799733,"cMask":[],"cGroup":[]},/* 65 */{"x":916.3453938584779,"y":5.821762349799733,"cMask":[],"cGroup":[]},/* 66 */{"x":-1397.222963951936,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 67 */{"x":-915.678905206942,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 68 */{"x":-1397.222963951936,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 69 */{"x":915.678905206942,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 70 */{"x":1397.222963951936,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 71 */{"x":1397.222963951936,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 72 */{"x":915.678905206942,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 73 */{"x":-1362.2923898531376,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 74 */{"x":-1397.222963951936,"y":-663.6809078771695,"cMask":[],"cGroup":[]},/* 75 */{"x":-1397.222963951936,"y":663.6809078771695,"cMask":[],"cGroup":[]},/* 76 */{"x":-1362.2923898531376,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 77 */{"x":1397.222963951936,"y":663.6809078771695,"cMask":[],"cGroup":[]},/* 78 */{"x":1362.2923898531376,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 79 */{"x":1362.2923898531376,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 80 */{"x":1397.222963951936,"y":-663.6809078771695,"cMask":[],"cGroup":[]},/* 81 */{"x":51.2820512820513,"y":-192.30769230769238,"cMask":["wall"]},/* 82 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"00008b"},/* 83 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"00008b"},/* 84 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 85 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 86 */{"x":-39.5,"y":-82,"cMask":["wall"],"color":"0080ff"},/* 87 */{"x":-42.5,"y":29,"cMask":["wall"],"color":"0080ff"},/* 88 */{"x":43.5,"y":30,"cMask":["wall"],"color":"0080ff"},/* 89 */{"x":86.5,"y":100,"cMask":["wall"],"color":"0080ff"},/* 90 */{"x":115.5,"y":73,"cMask":["wall"],"color":"0080ff"},/* 91 */{"x":-39.5,"y":-37,"cMask":["wall"],"color":"0080ff"},/* 92 */{"x":40.5,"y":-60,"cMask":["wall"],"color":"0080ff"},/* 93 */{"x":-57.5,"y":-35,"cMask":["wall"],"color":"0080ff"},/* 94 */{"x":76.5,"y":104,"cMask":["wall"],"color":"0080ff"},/* 95 */{"x":-36.5,"y":-149,"cMask":["wall"]},/* 96 */{"x":-39.5,"y":-82,"cMask":["wall"],"color":"0080ff"},/* 97 */{"x":-36.5,"y":-149,"cMask":["wall"],"color":"0080ff"},/* 98 */{"x":-37.08094399571257,"y":-79.10791561250448,"cMask":["wall"],"color":"0080ff"},/* 99 */{"x":-39.97184473452512,"y":29.0709040796512,"cMask":["wall"],"color":"0080ff"},/* 100 */{"x":47.90064311143442,"y":30.045488040841747,"cMask":["wall"],"color":"0080ff"},/* 101 */{"x":89.40961987520575,"y":95.34261344061139,"cMask":["wall"],"color":"0080ff"},/* 102 */{"x":116.17316158174788,"y":70.77468610037135,"cMask":["wall"],"color":"0080ff"},/* 103 */{"x":-37.08094399571257,"y":-35.251637358927894,"cMask":["wall"],"color":"0080ff"},/* 104 */{"x":40.9370095318302,"y":-55.64165242750204,"cMask":["wall"],"color":"0080ff"},/* 105 */{"x":-54.4263484285878,"y":-33.30246943654669,"cMask":["wall"],"curve":207,"color":"0080ff"},/* 106 */{"x":74.70055123837233,"y":102.16470116894556,"cMask":["wall"],"curve":207,"color":"0080ff"},/* 107 */{"x":-37.190043256900026,"y":-148.4050410122741,"cMask":["wall"],"color":"0080ff"},/* 108 */{"x":-39.08094399571257,"y":-81.10791561250448,"cMask":["wall"],"color":"0080ff"},/* 109 */{"x":-38.190043256900026,"y":-147.4050410122741,"cMask":["wall"],"color":"0080ff"},/* 110 */{"x":52.5,"y":-34,"cMask":["wall"],"color":"0080ff"},/* 111 */{"x":78.5,"y":-49,"cMask":["wall"],"color":"0080ff"},/* 112 */{"x":46.5,"y":-45,"cMask":["wall"],"color":"0080ff"},/* 113 */{"x":70.5,"y":-59,"cMask":["wall"],"color":"0080ff"},/* 114 */{"x":19.5,"y":-88,"cMask":["wall"],"color":"0080ff"},/* 115 */{"x":49.5,"y":-48,"cMask":["wall"],"color":"0080ff"},/* 116 */{"x":33.5,"y":-103,"cMask":["wall"],"color":"0080ff"},/* 117 */{"x":66.5,"y":-58,"cMask":["wall"],"color":"0080ff"},/* 118 */{"x":31.5,"y":-125,"cMask":["wall"]},/* 119 */{"x":26.5,"y":-137,"cMask":["wall"]},/* 120 */{"x":28.5,"y":-151,"cMask":["wall"]},/* 121 */{"x":29.5,"y":-169,"cMask":["wall"]},/* 122 */{"x":13.5,"y":-123,"cMask":["wall"]},/* 123 */{"x":5.5,"y":-135,"cMask":["wall"]},/* 124 */{"x":8.5,"y":-157,"cMask":["wall"]},/* 125 */{"x":12.5,"y":-176,"cMask":["wall"]},/* 126 */{"x":-6.5,"y":-158,"cMask":["wall"]},/* 127 */{"x":-10.5,"y":-183,"cMask":["wall"]},/* 128 */{"x":30.5,"y":-199,"cMask":["wall"]},/* 129 */{"x":37.5,"y":-232,"cMask":["wall"]},/* 130 */{"x":11.5,"y":-210,"cMask":["wall"]},/* 131 */{"x":6.5,"y":-257,"cMask":["wall"]},/* 132 */{"x":83.5,"y":-71,"cMask":["wall"],"color":"0080ff"},/* 133 */{"x":75.5,"y":-56,"cMask":["wall"],"color":"0080ff"},/* 134 */{"x":90.5,"y":-69,"cMask":["wall"],"color":"0080ff"},/* 135 */{"x":-30.5,"y":-133,"cMask":["wall"],"color":"0080ff"},/* 136 */{"x":-30.5,"y":-121,"cMask":["wall"],"color":"0080ff"},/* 137 */{"x":-30.5,"y":-133,"cMask":["wall"],"color":"0080ff"},/* 138 */{"x":-30.5,"y":-121,"cMask":["wall"],"color":"0080ff"},/* 139 */{"x":-9.5,"y":-97,"cMask":["wall"],"color":"0080ff"},/* 140 */{"x":-35.74,"y":-102.6,"cMask":["wall"],"color":"0080ff"},/* 141 */{"x":-40.42222222222224,"y":-149.1940740740741,"cMask":["wall"],"color":"0080ff"},/* 142 */{"x":-32.400000000000006,"y":-83.16000000000003,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":3,"color":"FFFFFF","cMask":["ball"]},{"v0":0,"v1":4,"color":"FFFFFF","cMask":["ball"]},{"v0":1,"v1":5,"color":"FFFFFF","cMask":["ball"]},{"v0":3,"v1":6,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":7,"color":"FFFFFF","cMask":["ball"]},{"v0":4,"v1":8,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":8,"v1":9,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":9,"v1":7,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":5,"v1":10,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":10,"v1":11,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":11,"v1":6,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":12,"v1":13,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":14,"v1":13,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":17,"v1":16,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":16,"v1":17,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":16,"v1":17,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":17,"v1":16,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":19,"v1":20,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":18,"v1":21,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":12,"v1":32,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":15,"v1":33,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":38,"v1":39,"color":"00008b","cMask":[],"cGroup":[]},{"v0":42,"v1":43,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":44,"v1":45,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":46,"v1":47,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":48,"v1":49,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":38,"v1":50,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":51,"v1":52,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":53,"v1":54,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":39,"v1":55,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":56,"v1":57,"color":"FF0000","cMask":[],"cGroup":[]},{"v0":56,"v1":58,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":59,"v1":60,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":61,"v1":62,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":57,"v1":63,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":65,"v1":64,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":64,"v1":65,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":64,"v1":65,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":65,"v1":64,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":22,"v1":66,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":67,"v1":68,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":69,"v1":70,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":71,"v1":72,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":73,"v1":74,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":75,"v1":76,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":78,"v1":77,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":80,"v1":79,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":82,"v1":83,"curve":180,"color":"00008b","cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":85,"v1":84,"curve":180,"color":"FF0000","cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":86,"v1":87,"color":"0080ff","cMask":["wall"]},{"v0":87,"v1":88,"color":"FFFFFF","cMask":["wall"]},{"v0":88,"v1":89,"color":"0080ff","cMask":["wall"]},{"v0":89,"v1":90,"color":"0080ff","cMask":["wall"]},{"v0":92,"v1":91,"curve":35.13002937458595,"color":"0080ff","cMask":["wall"],"curveF":3.1590909090909083},{"v0":94,"v1":93,"curve":207,"color":"0080ff","cMask":["wall"],"curveF":-0.2247533632286995},{"v0":95,"v1":86,"curve":-176.15211803089753,"color":"FFFFFF","cMask":["wall"],"curveF":-0.03359173126614998},{"v0":96,"v1":97,"curve":173.88551652918804,"color":"0080ff","cMask":["wall"],"curveF":0.05340963280877457},{"v0":99,"v1":98,"curve":23.901187801606472,"color":"0080ff","cMask":["wall"],"curveF":4.72465940386009},{"v0":99,"v1":100,"color":"0080ff","cMask":["wall"]},{"v0":100,"v1":101,"color":"0080ff","cMask":["wall"]},{"v0":101,"v1":102,"color":"0080ff","cMask":["wall"]},{"v0":104,"v1":103,"curve":35.5091927036537,"color":"0080ff","cMask":["wall"],"curveF":3.1231361963627218},{"v0":106,"v1":105,"curve":207,"color":"0080ff","cMask":["wall"],"curveF":-0.2402407143294486,"y":207},{"v0":107,"v1":98,"curve":-175.99301108892467,"color":"0080ff","cMask":["wall"],"curveF":-0.03498183375115038},{"v0":110,"v1":111,"color":"0080ff","cMask":["wall"]},{"v0":112,"v1":110,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":113,"v1":111,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":112,"v1":113,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":114,"v1":115,"curve":19.4007838878916,"color":"0080ff","cMask":["wall"],"curveF":5.8500000000000005},{"v0":117,"v1":116,"curve":30.31978069668057,"color":"0080ff","cMask":["wall"],"curveF":3.6908212560386446},{"v0":116,"v1":114,"curve":121.41727565803161,"color":"0080ff","cMask":["wall"],"curveF":0.5609756097560962},{"v0":118,"v1":119,"curve":61.059411799868286,"color":"505050","cMask":["wall"],"curveF":1.6956521739130415},{"v0":121,"v1":120,"curve":84.79487559500053,"color":"505050","cMask":["wall"],"curveF":1.0952380952380925},{"v0":122,"v1":123,"curve":84.54737801218734,"color":"505050","cMask":["wall"],"curveF":1.1000000000000028},{"v0":124,"v1":125,"color":"505050","cMask":["wall"]},{"v0":126,"v1":127,"curve":36.86989764584401,"color":"505050","cMask":["wall"],"curveF":3.000000000000001},{"v0":128,"v1":129,"curve":49.550281137663866,"color":"505050","cMask":["wall"],"curveF":2.1666666666666656},{"v0":130,"v1":131,"curve":52.608048749424995,"color":"505050","cMask":["wall"],"curveF":2.0229885057471284},{"v0":113,"v1":132,"color":"0080ff","cMask":["wall"]},{"v0":133,"v1":134,"color":"0080ff","cMask":["wall"]},{"v0":134,"v1":132,"color":"0080ff","cMask":["wall"]},{"v0":135,"v1":136,"curve":-162.40517858001755,"color":"0080ff","cMask":["wall"],"curveF":-0.15476190476190782},{"v0":138,"v1":137,"curve":-173.6403397602719,"color":"0080ff","cMask":["wall"],"curveF":-0.05555555555555241},{"v0":139,"v1":140,"curve":129.3076481161066,"color":"0080ff","cMask":["wall"],"curveF":0.4736842105263159},{"v0":108,"v1":141,"curve":-184,"color":"0080ff","cMask":["wall"]}],"planes":[{"normal":[0,1],"dist":-700.2005012531329,"cMask":["ball"]},{"normal":[0,-1],"dist":-702.5806451612904,"cMask":["ball"]},{"normal":[-1,0],"dist":-1459.4347158218127,"bCoef":0.1,"cMask":["ball"]},{"normal":[1,0],"dist":-1455.7788018433182,"bCoef":0.1,"cMask":["ball"]},{"normal":[0,1],"dist":-735.2005012531329},{"normal":[0,-1],"dist":-737.5806451612904},{"normal":[1,0],"dist":-1478.7788018433182},{"normal":[-1,0],"dist":-1482.4347158218127}],"goals":[{"p0":[-1404.2090787716957,-128.07877169559413],"p1":[-1404.2090787716957,128.07877169559413],"team":"red"},{"p0":[1404.2090787716957,128.07877169559413],"p1":[1404.2090787716957,-128.07877169559413],"team":"blue"}],"discs":[{"radius":6.2,"invMass":1.5,"pos":[0,0],"bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,-128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,-128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,128.07877169559413]},{"radius":4.657409879839786,"pos":[1397.222963951936,698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[-1397.222963951936,698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[-1397.222963951936,-698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[1397.222963951936,-698.611481975968],"cMask":[],"cGroup":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":4.9,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":450,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"traits":{},"joints":[],"canBeStored":false}';


//intentamos
function roomUpNotification() {
    if (typeof window.HBInit === 'function') {
        var hrefs = document.querySelector("body iframe").contentDocument.querySelector("body div#roomlink a").text;
        //console.logg(hrefs);
        var roomDcWebhook = "https://discord.com/api/webhooks/1180094271861297193/TyA4pgCxnGFsqCko4imJcTt2ungli0vyZJ6aYDfoXeWwEO_tqMOSq6Hgs_WiUUqdbSpW";
        sendAnnouncementToDiscord("El host está ON ¡Entra ya!" + roomName + ": " + hrefs, roomDcWebhook);
    }
}
//LOGS CHATS (WEBHOOK)

function DiscordLogs(message) {
	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1198621247941128282/2UrrN2cVsWTTEmJ9Dv1ZTBd44qEC7g0QVqWRIQkC2p7OZjy3CrvQRQAEhwZLYkwp10Wg")

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: 'Maxbot - CHAT & LOGS',
		avatar_url: '',
		content: message,
		allowed_mentions: {
			parse: []
		}
	}

	request.send(JSON.stringify(params))
}
// END WEBHOOK LOG

// Ips baneadas
var IpBan = [ //IP'S
	"3138312E32382E3138372E313430", //nismanmode
	"3230312E3139302E3233312E3835", //ibai llanos
	"3139302E3234372E3130352E3632", //martu
	"3139302E3138332E38302E3434", //industrial
    "3139302E3131342E3130342E3435", //santi sapi
    "3139302E3132332E38352E313230", //mascarpone
    "3137372E3232322E3130382E313039", //adrian2005
    "3136382E3232372E39382E323431", //liberomcd
    "3137392E36322E3139352E3734", //quiero sexo argentino
    "3138312E34372E32312E313331", //nickinvisible
    "3136372E36322E3132312E3234", //franchescoli
    "3139302E3131332E3138302E3236", //totocaputo
    "3138392E32382E36382E313236", //jurgen klopp(spam user)
    "3139302E3234342E31372E323235", //tinomeado
    "3136372E36322E3132312E3234", //tinomeado2 (lamine yamal)
    "3139302E3133382E3131362E323034" //spamserver (eric)
]

var IpBan2 = [ //AUTH
	"Af3bAHhfsS1dqZhSGITb1chAXRiAIxeImN9sxLRXl3I", //nismanmode
	"e46mKcMyjARpi-p4PJaGx21Zwie1YC-BvleidQI8vjo", //ibai llanos
	"cAyFCREmIvrqpH9irF3DxwDR6cfjGt31MySYTL0Afso", //martu
	"dQYSXm7yNB50n05XjNM4jA7u7IKZxpOuXDgFeyQn58A", //industrial
    "nWZlAt6a4WgIsv6w9AZ4XfoI7a8-JdGqZZueCyckE0Q", //santi sapi
    "uRw2WQ_LzwsStcMT2EsF1NHW8rysY3en7qyr6K0I1AY", //mascarpone
    "I4NxDdw6PBo12IezULOnBoDrsBK8zDkHf2pVHMbCamM", //adrian2005
    "LaZazluJcSC4OkoARhI7tGZSRiXHK38doqiPu-4sgJE", //liberomcd
    "yqOj91XThjKvGCMhWKYa0vUrpJuRG60GbePpDrQYhj8", //quiero sexo argentino
    "Gf_XFCUjmnDManCpZefHg8Jtz0G1Ro4vl5-DjicrezQ", //nickinvisible
    "sl-EYfcjqPIXjw-2kfLW8P-jMcrGO2ymyxMmTTCgQOo", //franchescoli
    "0CE2uWVz1dldMnvppGjKCeiK5cFaY03o8SUkNJaID-0", //totocputo
    "JUHcv_nj-1Mp5ui3s0CF9VKvQ4yNrT1bl7QoLH3FNFY", //jurgen klopp (spamuser)
    "LjDz8FPQ_jdwEwhMKS3DKdm25waLgp4-RyK1q-7H3fg", //tinomeado
    "rK833GVKiJH6NMQD69BxJJf0vpd7fxTHi3Jv-00PpOg", //tinomeado2 (lamineyamal)
    "CtYpuOK1N_y0mWOY1pOzvOBW09XAH9EaAemkJFSY8bY" //spamserver (eric)
]

IpBan.forEach(p => {
    if (player.conn === p) {
        room.kickPlayer(player.id, "Usuario blacklist. Abre ticket en nuestro discord!", true)
        console.log(`${player.name} ha sido baneado de IP correctamente.`)
        return;
    }
})

IpBan2.forEach(p => {
    if (player.auth === p) {
        room.kickPlayer(player.id, "Usuario blacklist. Abre ticket nuestro discord!", true)
        console.log(`${player.name} ha sido baneado por AUTH correctamente.`)
        return;
    }
})

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
var banList = ["3139302E3133382E3131362E323034", "3136372E36322E3132312E3234", "3139302E3234342E31372E323235", "3138392E32382E36382E313236", "3139302E3131332E3138302E3236", "3136372E36322E3132312E3234", "3138312E34372E32312E313331", "3137392E36322E3139352E3734", "3136382E3232372E39382E323431", "3137372E3232322E3130382E313039", "3139302E3132332E38352E313230", "3139302E3131342E3130342E3435", "3139302E3138332E38302E3434", "3139302E3234372E3130352E3632", "3230312E3139302E3233312E3835", "3138312E32382E3138372E313430", "3138312E33312E3138302E313034", "3139302E3132332E38352E313230", "3139302E3133382E3133352E36", "3139302E3132332E38352E313230", "3135322E3137322E3134342E323132", "3139302E332E35302E3939", "3138312E36372E34332E313830", "3138312E36372E34332E313830"];

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

const frasesGOL = [" 🔥 ¡PERO QUÉ GOLAZO CLAVO EL HDP DE ", " 💥 ¡LE PEGO A FUNDIR Y GOLAZO DE ", " ⚽ ¡GOL GOL GOL CANTALO, TENIA QUE APARECER ", " 🤩 ¿QUIEN SINO? GOLON DE ", " 👟 ¡LE PEGO DE PUNTIN Y GOLAZO DE ", " 🎯 ¡A NO PERO QUE DISTINGUIDO! GOLCITO DE "]; // Goal phrases
const frasesASS = [" 🤝 ¡CON ASISTENCIA DE ", " 👌 ¡CON HERMOSA ASISTENCIA DE ", " 💫 ¡CON PRECISO PASE DE ", " 👏 ¡CON EXCELENTE PASE DE "]; // Phrases of assists
const golcontra = [" 🚫 MOMMY, GOL EN CONTRA DEL PAYASO DE ", " ❌ SOS BOLUDO HERMANO? GOL EN CONTRA DE ", " 😖 AUTOGOL DEL TROLO DE ... ", " 😵 UFF! GOLAZO!! EN CONTRA DEL BOLUDO DE "]; // Goal against phrases

const goleiro = [" MANTIENE LA VALLA INVICTA! ", " ES MEJOR QUE EL DIBU! ", " NO DEJA QUE LA BOCHA ENTRE! ", " ESTA EN SU PRIME DE GK! "]; // Goalkeeper phrases

const replaysdiscord = "https://discord.com/api/webhooks/1180089741471911936/Q1vc3ax5AScc38nuxQzqmuWKEvIWqi_hY2xzqTZjjuxeUQXwlLQ_VfX0DS5PChMg4gTO";
const nextgames = "https://discord.com/api/webhooks/1180095216791867454/qJ8TKSaWVSLS0xR19gvKrOhUxPa0dFiCxHlGZAoooRU8wpH1EiELvzZdmAGgcDNRDF6P";

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
            `SINDICATOREPLAY-${getDate()}-${roomNumber + 1}.hbr2`,
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
        room.sendChat("¡⏱️! TIEMPO EXTRA!");
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
        room.sendAnnouncement("🏆 " + currentTeams[0].longName + " 𝔾𝔸ℕ𝔸 𝔼𝕃 ℙ𝔸ℝ𝕋𝕀𝔻𝕆! [" + scores.red + " - " + scores.blue + "]", null, 0xFDC43A, 'bold');
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 " + currentTeams[1].longName + " 𝔾𝔸ℕ𝔸 𝔼𝕃 ℙ𝔸ℝ𝕋𝕀𝔻𝕆! [" + scores.blue + " - " + scores.red + "]", null, 0xFDC43A, 'bold');
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Timeout reached");
    }
    //room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    if (GKList.length > 1) {
        if (scores.red == 0 && GKList[1]) {
            room.sendAnnouncement("🧤 VALLA INVICTA PARA " + GKList[1].name + "! 🧤", null, 0xccc904, 'semi-bold');
        } else if (scores.blue == 0 && GKList[0]) {
            room.sendAnnouncement("🧤 VALLA INVICTA PARA " + GKList[0].name + "! 🧤", null, 0xccc904, 'semi-bold');
        }
    }


    //Object.keys(obj)[0]
    Object.entries(goalDictionary).sort((a, b) => b[1] - a[1]);
    var topGoalScorerId = Object.keys(goalDictionary)[0];
    var topGoals = goalDictionary[topGoalScorerId];
    var topGoalScorer = room.getPlayerList().filter((player) => player.id == topGoalScorerId)[0];
    //⚽
    if (topGoalScorer != undefined && topGoalScorer.name != undefined && scores.red + scores.blue > 0) {
        room.sendAnnouncement("🥇 " + topGoalScorer.name + " FUE EL GOLEADOR DEL PARTIDO CON " + topGoals + " GOLES! ⚽", null, 0xFDC43A, 'semi-bold');
    }

    updateStats();
    sendDiscordWebhook(scores);
    room.sendAnnouncement("🎥 ¡EL PARTIDO FUÉ GRABADO Y SE ENVIÓ A NUESTRO DISCORD!: " + `SINDICATOREPLAY-${getDate()}-${roomNumber + 1}.hbr2`, null, Colors.Amrelo, 'bold');

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
                room.sendAnnouncement("⚠️ CUIDADO! ⚠️ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", si no te moves en  " + 5 + " segundos sale kick!", extendedP[i][eP.ID]);
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

function printSpecList(player) {
    var cstm = "[PV] Jugadores: ";
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
            }, 90000);
        }

        /* calculateGk();
        findGK(); */
    }

    setGkAvatar(manualGKList[0]?.id, manualGKList[1]?.id);

    function noGkNotification() {
        for (let i = 0; i < manualGKList.length; i++) {
            if (manualGKList[i] == null) {
                var msg = 'Al equipo le falta un arquero! Usa el comando !gk para ofrecerte!';
                var correctedTeamIndex = i + 1;
                var emoji = correctedTeamIndex == Team.RED ? '🟥' : '🟦';
                var message = `[${emoji}] [🧤]: ${msg}`;
                var team = getTeamArray(correctedTeamIndex, true);
                var color = correctedTeamIndex == Team.RED ? Colors.Vermelho : Colors.Azul;
                var style = 'italic';
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
        room.sendAnnouncement("Estadisticas guardadas", null, Colors.Amrelo, 'italic');
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
    room.sendAnnouncement("¡COMIENZA EL PARTIDO Y SE ENFRENTAN!", null, 0xffffff, 'bold');
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
        const caritas = ["😤", "😏", "🥴", "🤬", "🤪", "😠", "😃", "🧐", "🤷‍♀️", "🤦‍♂️", "🧙‍♂️", "😗", "😙", "😛", "🥱", "🗿"]
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
    DiscordLogs(`**${player.name} ingreso a la sala!**`);
    var list = JSON.parse(localStorage.getItem("ban_list"));
    if (list) {
        banList = list;
    } else {
        localStorage.setItem("ban_list", JSON.stringify(banList));
    }

    if (banList.includes(player.conn)) {
        room.kickPlayer(player.id, "hablame al discord si queres jugar en paz", true);
    }

    let pData = localStorage.getItem(player.auth);
    var playerRole = pData != null ? JSON.parse(pData)[StatColumns.ROLE] : "player";

    if (["master", "head", "admin", "cm", "mod"].includes(playerRole)) {
        room.setPlayerAdmin(player.id, true);
    } else {
        var adminCount = room.getPlayerList().filter((player) => player.id != 0 && player.admin).length;
        slotsAvailable = maxPlayers - (3 - Math.min(3, adminCount));
        if (players.length >= slotsAvailable) {
            room.kickPlayer(player.id, "slot reservado para admins y vips!", false); eP.ACT
        }
    }

    //const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6, GOALS: 7, ROLE: 8 };
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false, playerRole]);


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
        "ID: " + player.id + " 🪪" + "\n" +
        "IP: " + player.conn + " 🌎" + "\n" +
        "AUTH: " + player.auth + " 💻" + "\n" +
        "FECHA: " + `${getDateInfo()}` + "```", webhook);
    var webhook = "https://discord.com/api/webhooks/1197081529726271579/ABI1IRedsZ529xmvUokoMqhi8fWghJP7LQdf2tKUS107Z0c__JnCHuZ7jrKsqShkRRLx";

    room.sendAnnouncement(
        `♿ ¡BIENVENIDO AL SINDICATO! ${player.name} ♿\n⭐ Utiliza !ayuda para ver los comandos!\n🔹Ingresa a nuestro discord para enterarte nuevas noticias!`,
        player.id,
        0xFFDB3D,
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
        room.sendAnnouncement(changedPlayer.name + " está AFK! 😴", Colors.Laranja);
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
    printRedes();
}, 120000);

setInterval(() => {
    printVc();
}, 550000);

setInterval(() => {
    printRules();
}, 770000);

function printRedes() {
    room.sendAnnouncement("                                                                                                       ", null);
    room.sendAnnouncement("                                         📍 Discord Oficial! ➡ https://discord.gg/KvfgRc7sfG ", null, 0xF6FF43);
    room.sendAnnouncement("                                         📍 Nuestras Redes! ➡ https://linktr.ee/sindicatodelhax ", null, 0xF6FF43);
    room.sendAnnouncement("                                                                                                       ", null);
}

function printVc() {
    var msg = "TIP: ¿Querés hablar con los pibes? Entra al VC del discord: " + voiceChatLink[roomNumber];
    room.sendAnnouncement(msg, null, 0x00FF00);
}

function printRules() {
    room.sendAnnouncement(" 😮‍💨 Ingresa a nuestro discord para ver las reglas de la sala!", null, 0x8466FD);
}


function afkCommand(player, message) {
    if (AFKSet.has(player.id)) {
        if (AFKMinSet.has(player.id)) {
            room.sendAnnouncement(
                `Espera un minimo de ${minAFKDuration} segundos para usar nuevamente el comando!`,
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
            //console.log("Sacando de afk " + teamS);
            setAFK(player, !isAFK(player));
            updateTeams();
            balanceTeams();
            //console.log("Sacando de afk updated " + teamS);
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
    sendAnnouncementToDiscord("<@&1122229514735472794> <@&1148011110939762790> \n 🚨 El usuario " + player.name + " pide un staff en la sala numero:  " + (roomNumber + 1) + "\n 📝 Mensaje del reporte: **" + originalMessage + "**", dcWebhook);
}

room.onPlayerLeave = function (player) {
    DiscordLogs(`**${player.name} se fue de la sala!**`);
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
        return null;ç
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
        room.sendAnnouncement("「🤖」MaxBot: A " + player.name + " le mide " + getRandomInt(50) + " CM.", null, 0xEAC274);
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
        room.sendAnnouncement("「🤖」MaxBot: " + player.name + humilliatingVerbs[verbIndex] + victim.name, null, 0xEAC274);
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

function physicsModeCommand(mode) {
    console.log(mode);
    console.log(currentPhysicsMode.name);
    if (mode != currentPhysicsMode.name) {
        if (mode == physicsMode.normal.name) {
            currentPhysicsMode = physicsMode.normal;
        } else if (mode == physicsMode.gravity.name) {
            currentPhysicsMode = physicsMode.gravity;
        } else if (mode == physicsMode.power.name) {
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
            room.sendAnnouncement("「🤖」MaxBot: " + ePlayer.name + " Ahora es el GK del " + currentTeams[1].longName + ". Para liberar el puesto escribe !gk nuevamente.", null, 0xfcf803, "italic", 1);
        } else if (manualGKList[1].id == player.id) {
            manualGKList[1] = null;
            noGkAnnouncement = true;
            room.setPlayerAvatar(player.id, null);
        } else {
            var gk = room.getPlayer(manualGKList[1].id);
            console.log(ePlayer);
            room.sendAnnouncement("「🤖」MaxBot: " + gk.name +
                " es el GK de tu equipo. Para que libere su puesto debe escribir !gk nuevamente.", player.id, 0xfcf803, "italic", 1);
        }
    } else if (player.team == Team.RED) {
        if (manualGKList[0] == null) {
            manualGKList[0] = player;
            GKList[0] = player;
            room.sendAnnouncement("「🤖」MaxBot: " + ePlayer.name + " Ahora es el GK del " + currentTeams[0].longName + ". Para liberar el puesto escribe !gk nuevamente.", null, 0xfcf803, "italic", 1);
        } else if (manualGKList[0].id == player.id) {
            manualGKList[0] = null;
            noGkAnnouncement = true;
            room.setPlayerAvatar(player.id, null);
        } else {
            var gk = room.getPlayer(manualGKList[0].id);
            console.log(ePlayer);
            room.sendAnnouncement("「🤖」MaxBot: " + gk.name +
                " es el GK de tu equipo. Para que libere su puesto debe escribir !gk nuevamente.", player.id, 0xfcf803, "italic", 1);
        }
    }
}

let
    palavras = ["ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉⨄㐷紪権ਛൽ㔙怅㬆癕⨴琐ḉ≼崪ᙻḻ⨂㈿爇䕦ᴵ灾㸏眮ቡᄸ܍礂海學㰌⬦ ѫ⼕ย⌑ḷ㠕ፃ㤕㌋␢眢砬ⵯ煾Ⱘ縂㉰匊㤀ह稫ᝈⴾㄫ㤒䉊؈ି㔞帱ॹࠚⰯἯ浸ἱᔞ፭ਮ娮ف㤮〕㱳⬗ᅷд甇ᜯ⩿ᤶⱁ戃 椏缁⼐獾⌱മ㈐ᵲ桨ԷᴑĿᑆ㨤ఴ⑸甈⨘Ѳ∯㘴䁔ح฾،ฌ瘪", "ఌ佹砕Ĉ⼈渻䬭॑⬺爂᰾ᜪ䉧ᬯ㍸᜖ᘬ慩㙲Ԑ瀩ञࠣ笋℉", "mogolico", "retrasado", "qqqqqqqqqqqqqqqqqqq", "enfermo", "enfermito", "down", "matate", "morite", "suicidate", "mueras", "http", "cp", "cancer", "ips", "10.0.0.0", "10.255.255.255", "172.16.0.0", "172.31.255.255", "192.168.0.11", "192.168.1.177", "192.168.0.177", "255.255.255.0", "192.168.0.1"], //swearing filter

    regex = new RegExp(palavras.join("|"), 'gi');

room.onPlayerChat = function (player, message) {
    console.log(player.name + ": " + message);
	DiscordLogs(player.name + ": " + message);
    message = message.trim();
    if (message == '') {
        return false;
    }

    isMaster = extendedP.filter((p) => p[eP.ID] == player.id)[eP.ROLE] == "master";

    if (message.match(regex) && !isMaster) {
        if (message.match(regex) && player.admin) {
            //cambiar cosito del gk
            room.sendAnnouncement("「👮」" + player.name + ": " + message + "", player.id, 0xEAC274, 'bold');
            return false;
        }
        //cambiar cosito del gk
        if (player.team == Team.BLUE) {
            room.sendAnnouncement("「🔵」" + player.name + ": " + message, player.id, 0x89cff0);
        } else if (player.team == Team.RED) {
            room.sendAnnouncement("「🔴」" + player.name + ": " + message, player.id, 0xe38d7d);
        } else {
            room.sendAnnouncement("「👤」" + player.name + ": " + message, player.id, 0x8F8F8F);
        }
        return false;
    }

    msg = message;
    originalMessage = message;
    message = message.split(/ +/);

    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!ayuda"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📍] Comandos: !me, !showme, !goles, !asis, !arq, !jugados, !ganados, !redes, !vc, !memide, !hc, !reglas, !afk, !mtm", player.id, 0x366BFF, "bold", 0);
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
        setTimeout(_ => { room.sendAnnouncement(`${player.name} HA LIMPIADO EL CHAT.`, null, 0xe50029, 'semi-bold') }, 1000)
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
    else if (["!ksk"].includes(message[0].toLowerCase()) && player.admin) {
        if (!player.admin && commandTimeout < 121) {
        }
        console.log("entra a ksk")
        randomUniforms();
        commandTimeout = 0;
    }
    else if (["!mtm", "mtm", "meteme"].includes(message[0].toLowerCase())) {
        if (!AFKSet.has(player.id) && player.team == Team.SPECTATORS && activePlay) {
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
        room.sendAnnouncement("📊 ¡TUS STATS!", player.id, 0xF7FF00, "bold");
        room.sendAnnouncement("🎮 Partidos: " + stats[StatColumns.GAMES] + "  ✅ Ganados: " + stats[StatColumns.WINS] + "  ❌ Perdidos: " + stats[StatColumns.LOSES] + "  WINRATE: " + stats[StatColumns.WINRATE] + "% \n⚽️ Goles: " + stats[StatColumns.GOALS] + "  👟 Asistencias: " + stats[StatColumns.ASSISTS] + " \n🧤 Atajadas: " + stats[StatColumns.GK] + "  🥅 Vallas Invictas: " + stats[StatColumns.VI] + "  🥅 VI Por Partido: " + stats[StatColumns.CP] + "%", player.id, 0x73EC59, "bold");
    }

    else if (["!showme"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("📊 ESTAS SON LAS STATS DE " + player.name + ": ", null, 0xF7FF00, "bold");
        room.sendAnnouncement("🎮 Partidos: " + stats[StatColumns.GAMES] + "  ✅ Ganados: " + stats[StatColumns.WINS] + "  ❌ Perdidos: " + stats[StatColumns.LOSES] + "  WINRATE: " + stats[StatColumns.WINRATE] + "% \n⚽️ Goles: " + stats[StatColumns.GOALS] + "  👟 Asistencias: " + stats[StatColumns.ASSISTS] + " \n🧤 Atajadas: " + stats[StatColumns.GK] + "  🥅 Vallas Invictas: " + stats[StatColumns.VI] + "  🥅 VI Por Partido: " + stats[StatColumns.CP] + "%", null, 0x73EC59, "bold");
    }

    else if (["!jugados"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
        var tableau = getTop5ForStat(StatColumns.GAMES);
        var text = "TOP5️⃣ Mas jugados:";
        printTop5(text, tableau);
    }

    else if (["!ganados"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
        var tableau = getTop5ForStat(StatColumns.WINS);
        var text = "TOP5️⃣ Mas ganados:";
        printTop5(text, tableau);
    }

    else if (["!goles"].includes(message[0].toLowerCase())) {
        var tableau = getTop5ForStat(StatColumns.GOALS);
        var text = "TOP5️⃣ Goleadores:";
        printTop5(text, tableau);
    }

    else if (["!asis"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
        var tableau = getTop5ForStat(StatColumns.ASSISTS);
        var text = "TOP5️⃣ Asistidores:";
        printTop5(text, tableau);
    }

    else if (["!arq"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
        var tableau = getTop5ForStat(StatColumns.VI);
        var text = "TOP5️⃣ Mas VI:";
        printTop5(text, tableau);
    }

    else if (["!claim"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[StatColumns.ROLE] != "master") {
                stats[StatColumns.ROLE] = "master";
                room.sendChat(player.name + " ahora es Master de la sala! 🧑‍💻");
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }
    else if (["!setrole"].includes(message[0].toLowerCase())) {
        let isMaster = JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master";
        console.log("master?: " + isMaster);
        console.log("player?: " + player);
        if (localStorage.getItem(getAuth(player)) && isMaster) {
            console.log("messa " + message[1] + message[2]);
            if (message.length >= 3 && ["admin", "mod", "head", "cm", "vip", "svip", "player"].includes(message[1].toLowerCase()) && message[2][0] == "#") {
                console.log("evaluo bien");
                let id = message[2].substring(1, message[2].length);
                let newRole = message[1];
                console.log("rol " + id + " " + newRole)
                if (!Number.isNaN(Number.parseInt(id)) && room.getPlayer(Number.parseInt(id)) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(id)))) ?
                        stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(id))))) :
                        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(id)).name];

                    switch (newRole) {
                        case "admin":
                            stats[StatColumns.ROLE] = "admin";
                            getPlayerById(parseInt(id))[eP.ROLE] = "admin";
                            room.setPlayerAdmin(room.getPlayer(Number.parseInt(id)).id, true);
                            break;
                        case "mod":
                            stats[StatColumns.ROLE] = "mod";
                            getPlayerById(parseInt(id))[eP.ROLE] = "mod";
                            break;
                        case "head":
                            stats[StatColumns.ROLE] = "head";
                            getPlayerById(parseInt(id))[eP.ROLE] = "head";
                            room.setPlayerAdmin(room.getPlayer(Number.parseInt(id)).id, true);
                            break;
                        case "cm":
                            stats[StatColumns.ROLE] = "cm";
                            getPlayerById(parseInt(id))[eP.ROLE] = "cm";
                            break;
                        case "vip":
                            stats[StatColumns.ROLE] = "vip";
                            getPlayerById(parseInt(id))[eP.ROLE] = "vip";
                            break;
                        case "svip":
                            stats[StatColumns.ROLE] = "svip";
                            getPlayerById(parseInt(id))[eP.ROLE] = "svip";
                            break;
                        default:
                            stats[StatColumns.ROLE] = "player";
                            getPlayerById(parseInt(id))[eP.ROLE] = "player";
                            break;
                    }
                    localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(id))), JSON.stringify(stats));
                    room.sendChat(room.getPlayer(Number.parseInt(id)).name + " ahora es " + newRole + " de la sala! 👮");

                }
            }
            room.sendChat("mal formato del comando setrole");
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
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es Admin de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!slowmode"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                slowMode = 2;
                room.sendAnnouncement("2 segundos de modo lento en el chat!");
            }
            else if (message.length == 3) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        slowMode = Number.parseInt(message[1]);
                        room.sendChat(slowMode + " segundos de modo lento!");
                        return false;
                    }
                }
                slowMode = 2;
                room.sendChat("2 segundos de modo lento!");
            }
        }
    }
    else if (["!endslow"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            slowMode != 2 ? room.sendAnnouncement("El modo lento se ha deshabilitado.") : null;
            slowMode = 2;
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
                room.sendAnnouncement("SANCIONES LIMPIADAS POR EL STAFF: " + player.name, null, Colors.Amrelo);
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " AHORA ESTA UNBAN DE LA SALA!");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn", "!nv"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "nos re vimos amigo!", false);
    }
    else if (["!redes", "!discord", "!dc"].includes(message[0].toLowerCase())) {
        printRedes();
    }
    else if (["!elo"].includes(message[0].toLowerCase()) && localStorage.getItem(getAuth(player))) { // elo definido por vitórias
        //console.logg("entro en comando elo " + player.name);
        message.slice(0, 1);
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        if (stats[StatColumns.WINS] > 2000) {
            room.sendAnnouncement("⭐ 「LEYENDA」" + player.name + ": " + msg + "", null, 0xF7FF00)
        } else if (stats[StatColumns.WINS] > 999) {
            room.sendAnnouncement("👑 「MAS CAPITO I」" + player.name + ": " + msg + "", null, 0x7E65FF)
        } else if (stats[StatColumns.WINS] > 699) {
            room.sendAnnouncement("👑 「MAS CAPITO II」" + player.name + ": " + msg + "", null, 0x7E65FF)
        } else if (stats[StatColumns.WINS] > 599) {
            room.sendAnnouncement("👑 「MAS CAPITO III」" + player.name + ": " + msg + "", null, 0x7E65FF)
        } else if (stats[StatColumns.WINS] > 499) {
            room.sendAnnouncement("🏅 「𝗣latino I」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 399) {
            room.sendAnnouncement("🏅 「𝗣latino II」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 299) {
            room.sendAnnouncement("🏅 「𝗣latino III」" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 199) {
            room.sendAnnouncement("🥇 「𝗢𝗿𝗼 I」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 179) {
            room.sendAnnouncement("🥇 「Oro II」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 159) {
            room.sendAnnouncement("🥇 「Oro III」" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 129) {
            room.sendAnnouncement("🥈 「Plata I」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 89) {
            room.sendAnnouncement("🥈 「Plata II」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 69) {
            room.sendAnnouncement("🥈 「Plata III」" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 59) {
            room.sendAnnouncement("🥉 「Bronce I」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 44) {
            room.sendAnnouncement("🥉 「Bronce II」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 34) {
            room.sendAnnouncement("🥉 「Bronce III」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 24) {
            room.sendAnnouncement("🍞 「Ñoqui I」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 14) {
            room.sendAnnouncement("🍞 「Ñoqui II」" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 4) {
            room.sendAnnouncement("🍞 「Ñoqui III」" + player.name + ": " + msg + "", null, 0x72532A)
        } else {
            room.sendAnnouncement("㋡ 「PETE」:" + player.name + ": " + msg + "", null, 0x7aa476)
        }
    } else {
        if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
            if (player.team != 0) {
                room.getPlayerList().forEach((element) => { if (element.team == player.team) room.sendAnnouncement("〔TEAM〕" + player.name + ": " + message.substr(2), element.id, (player.team == Team.RED ? 16725591 : 3261685), "bold", 0) })
                return false;
            }
            else {
                room.sendAnnouncement("No estás en un equipo. Entra al partido con !mtm");
                return false;
            }
        }
    }
    //cambiar cosito del gk
    var role = getPlayerById(player.id) != null ? getPlayerById(player.id)[eP.ROLE] : "player";


    if (role != "player") {
        //console.log("no es player?" + role);
        if (role == "master") {
            room.sendAnnouncement("「𝐌𝐀𝐍𝐀𝐆𝐄𝐑」" + player.name + ": " + msg + "", null, 0x00FF00, "bold");
            return false;
        }
        if (role == "head") {
            room.sendAnnouncement("「𝐉𝐄𝐅𝐄-𝐀𝐃𝐌𝐈𝐍」" + player.name + ": " + msg + "", null, 0xEAC274, "bold");
            return false;
        }
        if (role == "cm") {
            room.sendAnnouncement("「𝐂-𝐌𝐀𝐍𝐀𝐆𝐄𝐑」" + player.name + ": " + msg + "", null, 0xFF9100, "bold");
            return false;
        }
        if (role == "admin") {
            room.sendAnnouncement("「𝐀𝐃𝐌」" + player.name + ": " + msg + "", null, 0xFFFF00);
            return false;
        }
        if (role == "mod") {
            room.sendAnnouncement("「𝐌𝐎𝐃」" + player.name + ": " + msg + "", null, 0x6BFFB5);
            return false;
        }
        if (role == "vip") {
            room.sendAnnouncement(" [💎 𝐕𝐈𝐏] " + player.name + ": " + msg + "", null, 0x3DA7FF);
            return false;
        }
        if (role == "svip") {
            room.sendAnnouncement(" [👑 𝐕𝐈𝐏-𝐒𝐔𝐏𝐑𝐄𝐌𝐎] " + player.name + ": " + msg + "", null, 0xd733ff, "bold");
            return false;
        }
    }

    if (player.team == Team.BLUE) {
        room.sendAnnouncement(" [🔵] " + player.name + ": " + originalMessage, null, 0x89cff0);
    } else if (player.team == Team.RED) {
        room.sendAnnouncement(" [🔴] " + player.name + ": " + originalMessage, null, 0xe38d7d);
    } else {
        room.sendAnnouncement(" [SPECT] " + player.name + ": " + originalMessage, null, 0x8F8F8F);
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
    room.sendAnnouncement("[🏆] " + text + " \n🥇 #1 " + tableau[0][0] + ": " + tableau[0][1] + "\n🥈 #2 " + tableau[1][0] + ": " +
        tableau[1][1] + "\n🥉 #3 " + tableau[2][0] + ": " + tableau[2][1] + "\n#4 " + tableau[3][0] + ": " + tableau[3][1] + "\n#5 " +
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
        room.sendAnnouncement("「📌」Utiliza !gk para ser el arquero de el equipo!", null, 0xeeff00, "bold", 1);
        room.sendAnnouncement("「📌」¡Escribe la 't' al principio de tu mensaje para enviar un mensaje al equipo!", null, 0x5EE7FF, "bold", 1);
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
    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0];
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
        room.sendAnnouncement("Max el Relator🎙: ¿Qué equipo marcara la diferencia? ¡Esto se pone lindo!", null, 0x00d9ff, "bold", 1);
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
    getStats();
    //updateTeams();
    getLastTouchOfTheBall();
    IntervalLoop();
    //uniformsLoop();
}