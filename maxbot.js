const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var argTeams = [
    /*CAMISETAS LIGA ARGENTINA*/
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
    /*CAMISETAS LIGA ESPAÑOLA*/
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
    /*CAMISETAS PREMIER*/
    { ID: Team.RED, shortName: "mutd", longName: "Manchester United", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xEB1515, 0XBA031C, 0xEB1515], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "mci", longName: "Manchester City", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xAAE3FC, 0X5FBFED, 0XAAE3FC], avatarColor: 0x23233B }] },
    { ID: Team.BLUE, shortName: "che", longName: "Chelsea", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x3423CC], avatarColor: 0xF2F2F2 }] },
    { ID: Team.BLUE, shortName: "tot", longName: "Tottenham", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0XFFFFFF], avatarColor: 0x0D1069 }] },
    { ID: Team.RED, shortName: "liv", longName: "Liverpool", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xD92531], avatarColor: 0xE8E8E8 }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Inglaterra", uniform: [{ angle: 180, mainColor: [0xD92531, 0XEBEBEB, 0xD92531], avatarColor: 0xD4D4D4 }] },
    { ID: Team.BLUE, shortName: "brg", longName: "Brighton", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x1D3EE0, 0XEBEBEB, 0x1D3EE0], avatarColor: 0x321FDB }] },
    { ID: Team.RED, shortName: "ast", longName: "Aston Villa", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xA13C4C, 0X2BB5F0, 0xA13C4C], avatarColor: 0xFFFFFF }] },
    /*CAMISETAS SELECCIONES*/
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
    /*CAMISETAS CHAMPIONS/GENERALES*/
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

var bgColor = "304B6E";

/* COMMANDS */
/* VARIABLES */
var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 20;
var maxAFKDuration = 10;
var AFKCooldown = 5;
var adminCommandTimeout = true;
const token = "thr1.AAAAAGZl7HYGNyFtt_2ivQ.kzDy9X_y7i8";
var goalDictionary = {};
/* ROOM */
const roomNumber = 0;
//const roomName = "Prueba";
const roomName = "Yudo´s room";
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
var voiceChatLink = ['https://discord.com/channels/1122229514647371846/1122229516186697757', 'https://discord.com/channels/1122229514647371846/1122229516547412172'];

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
var v2Map = '{"name":"[SDH] x1 Futsal","width":420,"height":200,"spawnDistance":180,"bg":{"type":"none","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0,"color":"304B6E"},"vertexes":[{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":-368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"F80000","_data":{"mirror":{}},"curve":0},{"x":-368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"F80000","_data":{"mirror":{}},"curve":0},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":368,"y":65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"0000F8","_data":{"mirror":{}},"curve":0},{"x":368,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"0000F8","_data":{"mirror":{}},"curve":0},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":0,"y":65,"trait":"kickOffBarrier","color":"D64433"},{"x":0,"y":-65,"trait":"line","color":"D64433"},{"x":-401.5733882030178,"y":-66,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"FFFFFF","_data":{"mirror":{}},"curve":0},{"x":399.71604938271605,"y":-65.85733882030178,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-401.5733882030179,"y":65.28532235939645,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"FFFFFF","_data":{"mirror":{}},"curve":0},{"x":399.511526034079,"y":66.36184416545264,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","_data":{"mirror":{}}},{"x":368,"y":171,"bCoef":1,"trait":"ballArea","color":"002033"},{"x":368,"y":-171,"bCoef":1,"trait":"ballArea","color":"002033"},{"x":0,"y":171,"bCoef":0,"trait":"line","color":"1e204f","curve":0},{"x":0,"y":-171,"bCoef":0,"trait":"line","color":"1e204f","curve":0},{"x":0,"y":65,"trait":"kickOffBarrier","color":"312CC7"},{"x":0,"y":-65,"trait":"kickOffBarrier","color":"312CC7"},{"x":377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":377,"y":65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":377,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":199,"trait":"kickOffBarrier","color":"1e204f"},{"x":0,"y":65,"trait":"line","color":"1e204f","curve":0},{"x":0,"y":-65,"trait":"line","color":"00FFE5","curve":0},{"x":0,"y":-199,"trait":"kickOffBarrier","color":"1e204f"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-377,"y":-65,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-24.742743962091026,"y":-14.18090666733373,"cMask":["wall"],"cGroup":["wall"],"curve":200,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-50.92739276207965,"y":-0.4963237179406974,"cMask":["wall"],"cGroup":["wall"],"curve":200,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-48.640818682266456,"y":-19.386967409451685,"cMask":["wall"],"cGroup":["wall"],"curve":60,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-21.668262973534183,"y":-28.325608711533704,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-47.7320333050601,"y":-19.535522898453024,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-10.504773376700768,"y":-23.070399218105194,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":-16.634192563498743,"y":11.276210290930635,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":-9.635820561223113,"y":-24.01478085201765,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-16.294069670295357,"y":9.779498160471263,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF","_data":{"mirror":{}}},{"x":23.39751042121381,"y":-17.285631033878246,"cMask":["wall"],"cGroup":["wall"],"curve":44.74179792601026,"color":"FFFFFF","_data":{"mirror":{}}},{"x":13.565279763944943,"y":20.271587374636056,"cMask":["wall"],"cGroup":["wall"],"curve":44.74179792601026,"color":"FFFFFF","_data":{"mirror":{}}},{"x":19.824770176555035,"y":4.272276710962132,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":41.71873281856122,"y":10.38729869576187,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":49.58943331059393,"y":-9.452090784404305,"cMask":["wall"],"cGroup":["wall"],"curve":-25.487253841970773,"color":"FFFFFF","_data":{"mirror":{}}},{"x":38.79729157303112,"y":26.77099302054154,"cMask":["wall"],"cGroup":["wall"],"curve":-25.487253841970773,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-54.34570827662441,"y":10.841023058910679,"cMask":["wall"],"cGroup":["wall"],"curve":2,"color":"FFFFFF","_data":{"mirror":{}}},{"x":52.26701005788644,"y":38.66091075151762,"cMask":["wall"],"cGroup":["wall"],"curve":2,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-368.28,"y":-117.72,"cMask":["wall"],"cGroup":["wall"],"curve":190,"vis":true,"color":"002033"},{"x":-367.19999999999993,"y":123.12000000000005,"cMask":["wall"],"cGroup":["wall"],"curve":190,"vis":true,"color":"002033"},{"x":366.1200000000001,"y":-119.88,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"vis":true,"color":"002033"},{"x":367.20000000000016,"y":120.96000000000005,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"vis":true,"color":"002033"},{"x":-51.26004581106287,"y":13.81666306881371,"cMask":["wall"],"cGroup":["wall"],"curve":2,"color":"FFFFFF","_data":{"mirror":{}}},{"x":55.35267252344798,"y":41.63655076142065,"cMask":["wall"],"cGroup":["wall"],"curve":2,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-20.68525188278079,"y":-27.61585600738333,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-46.74902221430676,"y":-18.825770194302663,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-23.0499801671873,"y":-14.45416505393672,"cMask":["wall"],"cGroup":["wall"],"curve":200,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-46.94805488736273,"y":-19.660225796054675,"cMask":["wall"],"cGroup":["wall"],"curve":60,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-23.75973287133769,"y":-13.471153963183355,"cMask":["wall"],"cGroup":["wall"],"curve":200,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-49.94438167132631,"y":0.21342898620967787,"cMask":["wall"],"cGroup":["wall"],"curve":200,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-8.675380388495512,"y":-22.49727570725632,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":-14.804799575293544,"y":11.849333801779522,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":-11.32858435612684,"y":-23.741522465414675,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF","_data":{"mirror":{}}},{"x":-17.98683346519914,"y":10.052756547074239,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF","_data":{"mirror":{}}},{"x":25.576784598187146,"y":-16.335463875352133,"cMask":["wall"],"cGroup":["wall"],"curve":44.74179792601026,"color":"FFFFFF","_data":{"mirror":{}}},{"x":15.744553940918252,"y":21.221754533162184,"cMask":["wall"],"cGroup":["wall"],"curve":44.74179792601026,"color":"FFFFFF","_data":{"mirror":{}}},{"x":48.38874286323016,"y":-8.824742454598734,"cMask":["wall"],"cGroup":["wall"],"curve":-25.487253841970773,"color":"FFFFFF","_data":{"mirror":{}}},{"x":37.59660112566735,"y":27.39834135034711,"cMask":["wall"],"cGroup":["wall"],"curve":-25.487253841970773,"color":"FFFFFF","_data":{"mirror":{}}},{"x":20.807781267308428,"y":4.982029415112535,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}},{"x":42.70174390931459,"y":11.09705139991226,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF","_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"color":"000000","trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"curve":180,"color":"1e204f","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":8,"v1":9,"curve":-180,"color":"1e204f","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":2,"v1":10,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","_data":{"mirror":{},"arc":{"a":[-368,-65],"b":[-401.5733882030178,-66],"curve":0}}},{"v0":6,"v1":11,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","_data":{"mirror":{},"arc":{"a":[368,-65],"b":[399.71604938271605,-65.85733882030178],"curve":0}}},{"v0":1,"v1":12,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","_data":{"mirror":{},"arc":{"a":[-368,65],"b":[-401.5733882030179,65.28532235939645],"curve":0}}},{"v0":5,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["all"],"trait":"goalNet","_data":{"mirror":{},"arc":{"a":[368,65],"b":[399.511526034079,66.36184416545264],"curve":0}}},{"v0":10,"v1":12,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-585,"_data":{"mirror":{},"arc":{"a":[-401.5733882030178,-66],"b":[-401.5733882030179,65.28532235939645],"curve":0}}},{"v0":11,"v1":13,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585,"_data":{"mirror":{},"arc":{"a":[399.71604938271605,-65.85733882030178],"b":[399.511526034079,66.36184416545264],"curve":0}}},{"v0":1,"v1":0,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":5,"v1":4,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":2,"v1":3,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-368},{"v0":6,"v1":7,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":368},{"v0":0,"v1":14,"vis":true,"color":"002033","bCoef":1,"trait":"ballArea","y":171},{"v0":3,"v1":15,"vis":true,"color":"002033","bCoef":1,"trait":"ballArea","y":-171},{"v0":9,"v1":8,"curve":-180,"vis":true,"color":"D64433","bCoef":0,"trait":"line"},{"v0":19,"v1":18,"curve":180,"vis":true,"color":"312CC7","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"F80000","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[-368,-65],"b":[-368,65],"curve":0}}},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"0000F8","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[368,-65],"b":[368,65],"curve":0}}},{"v0":20,"v1":21,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":24,"v1":25,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-330},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":330},{"v0":28,"v1":29,"color":"1e204f","trait":"kickOffBarrier"},{"v0":30,"v1":31,"curve":0,"color":"1e204f","trait":"kickOffBarrier"},{"v0":45,"v1":46,"curve":162.92489034415755,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-24.742743962091026,-14.18090666733373],"b":[-50.92739276207965,-0.4963237179406974],"curve":162.92489034415755,"radius":14.93800285360445,"center":[-38.86224111230099,-9.30405015114344],"from":-0.33256983442102095,"to":2.5110059355352448}}},{"v0":45,"v1":47,"curve":60,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-24.742743962091026,-14.18090666733373],"b":[-48.640818682266456,-19.386967409451685],"curve":60,"radius":24.45855767991461,"center":[-32.18320046585973,-37.48027684760332],"from":1.2616908029358975,"to":2.3088883541324954}}},{"v0":48,"v1":49,"curve":-137.14954146455239,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-21.668262973534183,-28.325608711533704],"b":[-47.7320333050601,-19.535522898453024],"curve":-137.14954146455239,"radius":14.774008795441983,"center":[-32.97551676158807,-18.816805019147466],"from":-3.0929259934553834,"to":-0.6992149272984584}}},{"v0":50,"v1":51,"curve":42.56093573301371,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-10.504773376700768,-23.070399218105194],"b":[-16.634192563498743,11.276210290930635],"curve":42.56093573301371,"radius":48.06560298375162,"center":[-57.66113845443817,-13.765592780205449],"from":-0.19481552731008128,"to":0.5480129339607145}}},{"v0":52,"v1":53,"curve":220.8694076324307,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-9.635820561223113,-24.01478085201765],"b":[-16.294069670295357,9.779498160471263],"curve":220.8694076324307,"radius":18.378521874988436,"center":[-6.669302600788518,-5.877255180089646],"from":-1.7329177941362186,"to":2.121980585979191}}},{"v0":54,"v1":55,"curve":25.829489625481102,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[23.39751042121381,-17.285631033878246],"b":[13.565279763944943,20.271587374636056],"curve":25.829489625481102,"radius":86.85174826818695,"center":[-63.41346624585002,-19.94655330839391],"from":0.030642316200285367,"to":0.4814519542746477}}},{"v0":56,"v1":57,"curve":-12.01801191498893,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[19.824770176555035,4.272276710962132],"b":[41.71873281856122,10.38729869576187],"curve":-12.01801191498893,"radius":108.57306564190922,"center":[59.81810592535719,-96.66653484616843],"from":1.7382804827674903,"to":1.948034360227956}}},{"v0":58,"v1":59,"curve":-6.86787723467787,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[49.58943331059393,-9.452090784404305],"b":[38.79729157303112,26.77099302054154],"curve":-6.86787723467787,"radius":315.50972165465504,"center":[346.02523213520703,98.58587307002682],"from":-2.9119645270355434,"to":-2.7920974566676513}}},{"v0":60,"v1":61,"curve":15.617449941751515,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-54.34570827662441,10.841023058910679],"b":[52.26701005788644,38.66091075151762],"curve":15.617449941751515,"radius":405.481499563992,"center":[-102.46954078075342,413.4566502193305],"from":-1.4518327464381855,"to":-1.179256824189225}}},{"v0":17,"v1":30,"curve":0,"vis":true,"color":"002033","bCoef":0,"trait":"line"},{"v0":29,"v1":16,"curve":0,"vis":true,"color":"002033","trait":"line"},{"v0":62,"v1":63,"curve":190,"vis":true,"color":"002033","cMask":["wall"],"cGroup":["wall"]},{"v0":64,"v1":65,"curve":-190,"vis":true,"color":"002033","cMask":["wall"],"cGroup":["wall"]},{"v0":66,"v1":67,"curve":15.617449941751515,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-51.26004581106287,13.81666306881371],"b":[55.35267252344798,41.63655076142065],"curve":15.617449941751515,"radius":405.481499563992,"center":[-99.38387831519188,416.43229022923356],"from":-1.4518327464381855,"to":-1.179256824189225}}},{"v0":68,"v1":69,"curve":-137.14954146455239,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-20.68525188278079,-27.61585600738333],"b":[-46.74902221430676,-18.825770194302663],"curve":-137.14954146455239,"radius":14.77400879544201,"center":[-31.992505670834706,-18.107052314997084],"from":-3.092925993455382,"to":-0.6992149272984574}}},{"v0":70,"v1":71,"curve":60,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-23.0499801671873,-14.45416505393672],"b":[-46.94805488736273,-19.660225796054675],"curve":60,"radius":24.45855767991461,"center":[-30.490436670955997,-37.75353523420631],"from":1.2616908029358977,"to":2.3088883541324954}}},{"v0":72,"v1":73,"curve":162.92489034415755,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-23.75973287133769,-13.471153963183355],"b":[-49.94438167132631,0.21342898620967787],"curve":162.92489034415755,"radius":14.93800285360445,"center":[-37.879230021547656,-8.594297446993064],"from":-0.33256983442102095,"to":2.5110059355352448}}},{"v0":74,"v1":75,"curve":42.56093573301371,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-8.675380388495512,-22.49727570725632],"b":[-14.804799575293544,11.849333801779522],"curve":42.56093573301371,"radius":48.06560298375166,"center":[-55.831745466232974,-13.192469269356643],"from":-0.19481552731007967,"to":0.5480129339607159}}},{"v0":76,"v1":77,"curve":220.8694076324307,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-11.32858435612684,-23.741522465414675],"b":[-17.98683346519914,10.052756547074239],"curve":220.8694076324307,"radius":18.378521874988444,"center":[-8.362066395692274,-5.60399679348666],"from":-1.7329177941362168,"to":2.1219805859791925}}},{"v0":78,"v1":79,"curve":25.829489625481102,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[25.576784598187146,-16.335463875352133],"b":[15.744553940918252,21.221754533162184],"curve":25.829489625481102,"radius":86.85174826818701,"center":[-61.23419206887674,-18.996386149867856],"from":0.030642316200286044,"to":0.4814519542746484}}},{"v0":80,"v1":81,"curve":-9.480899150260383,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[48.38874286323016,-8.824742454598734],"b":[37.59660112566735,27.39834135034711],"curve":-9.480899150260383,"radius":228.67637813385195,"center":[261.39938286775936,74.35790694584591],"from":-2.9347674449623855,"to":-2.769294538740809}}},{"v0":82,"v1":83,"curve":-12.01801191498893,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[20.807781267308428,4.982029415112535],"b":[42.70174390931459,11.09705139991226],"curve":-12.01801191498893,"radius":108.57306564190908,"center":[60.801117016110496,-95.95678214201789],"from":1.73828048276749,"to":1.9480343602279557}}}],"goals":[{"p0":[-377,-65],"p1":[-377,65],"team":"red","_data":{"mirror":{}}},{"p0":[377,65],"p1":[377,-65],"team":"blue"}],"discs":[{"radius":5,"pos":[-368,65],"color":"FFFFFF","trait":"goalPost","_data":{"mirror":{}}},{"radius":5,"pos":[-368,-65],"color":"FFFFFF","trait":"goalPost","_data":{"mirror":{}}},{"radius":5,"pos":[368,65],"color":"FFFFFF","trait":"goalPost","_data":{"mirror":{}}},{"radius":5,"pos":[368,-65],"color":"FFFFFF","trait":"goalPost","_data":{"mirror":{}}}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-171,"canvas_rect":[-670,-200,670,200],"a":[-670,-171],"b":[670,-171]}}},{"normal":[0,-1],"dist":-171,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-171,"canvas_rect":[-670,-200,670,200],"a":[-670,171],"b":[670,171]}}},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-670,-200,670,200],"a":[-670,-200],"b":[670,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-670,-200,670,200],"a":[-670,200],"b":[670,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[-420,-200],"b":[-420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-670,-200,670,200],"a":[420,-200],"b":[420,200]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.1,"kickingAcceleration":0.1,"kickStrength":5.7,"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6,"color":"03DDFF","bCoef":0.5,"cMask":["all"],"damping":0.99,"invMass":1,"gravity":[0,0],"cGroup":["ball"]},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","canBeStored":true,"kickOffReset":"partial"}';
var v3Map = '{"name":"[SDH] Futsal x3","width":620,"height":270,"spawnDistance":350,"bg":{"type":"none","width":0,"height":0,"kickOffRadius":80,"cornerRadius":0,"color":"304B6E"},"vertexes":[{"x":550,"y":240,"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"trait":"ballArea","color":"FFFFFF"},{"x":0,"y":270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"D64433","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"D64433","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier","color":"FFFFFF"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"FFFFFF","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"002033"},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"FFFFFF"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"FFFFFF"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"FFFFFF"},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"FFFFFF"},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"FFFFFF"},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80],"color":"FFFFFF"},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"FFFFFF"},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"FFFFFF"},{"x":0,"y":-80,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":0,"y":80,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"D64433"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"D64433"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"312CC7"},{"x":550,"y":80,"bCoef":0.1,"trait":"line","color":"312CC7"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line","color":"FFFFFF"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"002033","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"002033","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90,"color":"002033"},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90,"color":"002033"},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"002033","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"002033","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90,"color":"002033"},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90,"color":"002033"},{"x":-556,"y":123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":556,"y":123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":575,"y":123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line","color":"002033"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line","color":"002033"},{"x":381,"y":240,"bCoef":0.1,"trait":"line","color":"002033"},{"x":381,"y":256,"bCoef":0.1,"trait":"line","color":"002033"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line","color":"002033"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line","color":"002033"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90,"color":"002033"},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90,"color":"002033"},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90,"color":"002033"},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90,"color":"002033"},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"002033","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"002033","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"002033","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"002033","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"002033","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"002033","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180,"color":"002033"},{"x":-27.975034916522475,"y":-13.050932020056479,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-63.63382994379498,"y":5.8119006734841605,"cMask":["wall"],"cGroup":["wall"],"curve":162.92489034415755},{"x":-63.18886394650764,"y":-18.137834764237027,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-25.57629318670803,"y":-33.07804035149144,"cMask":["wall"],"cGroup":["wall"],"curve":-137.14954146455239},{"x":-61.89440145932019,"y":-17.764255080926205,"cMask":["wall"],"cGroup":["wall"],"curve":-137.14954146455239},{"x":-20.595973200932463,"y":16.077710248784058,"cMask":["wall"],"cGroup":["wall"],"curve":-42.56093573301371},{"x":-11.077742671275303,"y":-31.54291055224988,"cMask":["wall"],"cGroup":["wall"],"curve":-42.56093573301371},{"x":19.19132172361941,"y":23.953645081609665,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":31.791079019868363,"y":-22.85581155278419,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":28.035652018845894,"y":5.851024917457721,"cMask":["wall"],"cGroup":["wall"]},{"x":52.994663572063814,"y":10.371948553792834,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.318860349726435,"y":16.67787433087608,"cMask":["wall"],"cGroup":["wall"],"curve":-190},{"x":-10.959007194076321,"y":-30.90376392149801,"cMask":["wall"],"cGroup":["wall"],"curve":-190},{"x":42.59938317290809,"y":32.77004683394786,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876},{"x":61.792936672200995,"y":-14.410817954855673,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876},{"x":-24.118541407281327,"y":-31.92064826930263,"cMask":["wall"],"cGroup":["wall"],"curve":-137.14954146455239},{"x":-60.43664967989349,"y":-16.606862998737427,"cMask":["wall"],"cGroup":["wall"],"curve":-137.14954146455239},{"x":-28.426579914842193,"y":-10.63928505678382,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-63.6404089448273,"y":-15.726187800964425,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-27.25145256479584,"y":-12.999892761684322,"cMask":["wall"],"cGroup":["wall"],"curve":60},{"x":-62.9102475920684,"y":5.862939931856317,"cMask":["wall"],"cGroup":["wall"],"curve":162.92489034415755},{"x":-21.047988376100818,"y":17.95663861231293,"cMask":["wall"],"cGroup":["wall"],"curve":-190},{"x":-10.089455259117244,"y":-31.065302227387605,"cMask":["wall"],"cGroup":["wall"],"curve":-190},{"x":-19.327506030072527,"y":15.891828094289593,"cMask":["wall"],"cGroup":["wall"],"curve":-42.56093573301371},{"x":-7.108431957031996,"y":-29.396152750500136,"cMask":["wall"],"cGroup":["wall"],"curve":-42.56093573301371},{"x":18.780733377311265,"y":24.392419324776398,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":33.3842133065541,"y":-22.96631060030157,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":43.99441443970363,"y":30.18686027336858,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876},{"x":61.14223323802608,"y":-15.616262485797932,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876},{"x":27.368090572175078,"y":5.103219241135264,"cMask":["wall"],"cGroup":["wall"]},{"x":56.666495122813075,"y":8.817026079494411,"cMask":["wall"],"cGroup":["wall"]},{"x":-63.735858942086054,"y":22.17311596132953,"cMask":["wall"],"cGroup":["wall"],"curve":15.617449941751515},{"x":64.0239797668024,"y":48.80814108044983,"cMask":["wall"],"cGroup":["wall"],"curve":15.617449941751515},{"x":-64.70038630026767,"y":24.484883119838713,"cMask":["wall"],"cGroup":["wall"],"curve":15.617449941751515},{"x":64.53609296382163,"y":47.45637723725467,"cMask":["wall"],"cGroup":["wall"],"curve":15.617449941751515},{"x":19.286729046922346,"y":22.63256545828773,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":33.890208976165155,"y":-24.726164466790266,"cMask":["wall"],"cGroup":["wall"],"curve":25.829489625481102},{"x":44.86523270900784,"y":31.516188637070243,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876},{"x":64.05878620830069,"y":-15.664676151733289,"cMask":["wall"],"cGroup":["wall"],"curve":33.3962101587876}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"FFFFFF","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"D64433","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"312CC7","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"D64433","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"312CC7","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"002033","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"002033","bCoef":0.1,"trait":"line","x":277.5},{"v0":130,"v1":131,"curve":162.92489034415755,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":130,"v1":132,"curve":60,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":133,"v1":134,"curve":-137.14954146455239,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":135,"v1":136,"curve":-42.56093573301371,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":137,"v1":138,"curve":-33.26950324993037,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":139,"v1":140,"curve":-46.69672909337499,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":142,"curve":-207.23766160671423,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":144,"curve":33.3962101587876,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":145,"v1":146,"curve":-137.14954146455239,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":148,"curve":60,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":149,"v1":150,"curve":162.92489034415755,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":151,"v1":152,"curve":-206.2488162083642,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":153,"v1":154,"curve":-42.56093573301371,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":155,"v1":156,"curve":-33.26950324993037,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":157,"v1":158,"curve":23.652139510354516,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":159,"v1":160,"curve":-27.48499142687554,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":161,"v1":162,"curve":15.617449941751515,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":163,"v1":164,"curve":15.617449941751515,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":165,"v1":166,"curve":-33.26950324993037,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":167,"v1":168,"curve":33.3962101587876,"vis":true,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red","color":"FFFFFF"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue","color":"FFFFFF"}],"discs":[{"radius":6,"pos":[-550,80],"color":"FFFFFF","trait":"goalPost","y":80,"_data":{"mirror":{}}},{"radius":6,"pos":[-550,-80],"color":"FFFFFF","trait":"goalPost","y":-80,"x":-560,"_data":{"mirror":{}}},{"radius":6,"pos":[550,80],"color":"FFFFFF","trait":"goalPost","y":80,"_data":{"mirror":{}}},{"radius":6,"pos":[550,-80],"color":"FFFFFF","trait":"goalPost","y":-80,"_data":{"mirror":{}}},{"radius":3,"invMass":0,"pos":[-550,240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"EFB810","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"EFB810","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-670,-270,670,270],"a":[-670,-240],"b":[670,-240]}}},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-670,-270,670,270],"a":[-670,240],"b":[670,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-670,-270,670,270],"a":[-670,-270],"b":[670,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-670,-270,670,270],"a":[-670,270],"b":[670,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-670,-270,670,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-670,-270,670,270],"a":[620,-270],"b":[620,270]}}},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[1,0],"dist":-620,"canvas_rect":[-670,-270,670,270],"a":[-620,-270],"b":[-620,270]}}},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[-1,0],"dist":-620,"canvas_rect":[-670,-270,670,270],"a":[620,-270],"b":[620,270]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4},"ballPhysics":{"radius":6.55,"color":"03DDFF","bCoef":0.4,"invMass":1.5,"damping":0.99},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
var v4Map = '{"name":"[SDH] Futsal x4","width":900,"height":380,"redSpawnPoints":[[-150,-100],[-150,100],[-380,0],[-600,0],[-770,0]],"blueSpawnPoints":[[150,100],[150,-100],[380,0],[600,0],[770,0]],"bg":{"type":"none","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0,"color":"304B6E"},"vertexes":[{"x":-700,"y":-85,"cMask":[],"color":"002033"},{"x":-700,"y":85,"cMask":[],"color":"002033"},{"x":-710,"y":-85,"cMask":[],"color":"FFFFFF"},{"x":-745,"y":65,"cMask":[],"color":"FFFFFF"},{"x":-745,"y":-65,"cMask":[],"color":"FFFFFF"},{"x":-710,"y":85,"cMask":[],"color":"FFFFFF"},{"x":700,"y":-85,"cMask":[],"color":"002033"},{"x":700,"y":85,"cMask":[],"color":"002033"},{"x":710,"y":-85,"cMask":[],"color":"FFFFFF"},{"x":745,"y":65,"cMask":[],"color":"FFFFFF"},{"x":745,"y":-65,"cMask":[],"color":"FFFFFF"},{"x":710,"y":85,"cMask":[],"color":"FFFFFF"},{"x":-700,"y":-285,"cMask":[],"color":"002033"},{"x":-700,"y":285,"cMask":[],"color":"002033"},{"x":700,"y":285,"cMask":[],"color":"002033"},{"x":700,"y":-285,"cMask":[],"color":"002033"},{"x":0,"y":-320,"cMask":[],"color":"002033"},{"x":0,"y":-100,"cMask":[],"color":"002033"},{"x":0,"y":-350,"cMask":[]},{"x":0,"y":100,"cMask":[],"color":"002033"},{"x":-700,"y":-320,"cMask":[],"color":"002033"},{"x":700,"y":-320,"cMask":[],"color":"002033"},{"x":-700,"y":320,"cMask":[],"color":"002033"},{"x":0,"y":320,"cMask":[],"color":"002033"},{"x":0,"y":350,"cMask":[]},{"x":700,"y":320,"cMask":[],"color":"002033"},{"x":-450,"y":-342,"cMask":[],"color":"002033"},{"x":-450,"y":-297,"cMask":[],"color":"002033"},{"x":-350,"y":-342,"cMask":[],"color":"002033"},{"x":-350,"y":-297,"cMask":[],"color":"002033"},{"x":-250,"y":-342,"cMask":[],"color":"002033"},{"x":-250,"y":-297,"cMask":[],"color":"002033"},{"x":250,"y":-342,"cMask":[],"color":"002033"},{"x":250,"y":-297,"cMask":[],"color":"002033"},{"x":350,"y":-342,"cMask":[],"color":"002033"},{"x":350,"y":-297,"cMask":[],"color":"002033"},{"x":450,"y":-342,"cMask":[],"color":"002033"},{"x":450,"y":-297,"cMask":[],"color":"002033"},{"x":-450,"y":298,"cMask":[],"color":"002033"},{"x":-450,"y":345,"cMask":[],"color":"002033"},{"x":-350,"y":298,"cMask":[],"color":"002033"},{"x":-350,"y":345,"cMask":[],"color":"002033"},{"x":-250,"y":298,"cMask":[],"color":"002033"},{"x":-250,"y":345,"cMask":[],"color":"002033"},{"x":250,"y":298,"cMask":[],"color":"002033"},{"x":250,"y":345,"cMask":[],"color":"002033"},{"x":350,"y":298,"cMask":[],"color":"002033"},{"x":350,"y":345,"cMask":[],"color":"002033"},{"x":450,"y":298,"cMask":[],"color":"002033"},{"x":450,"y":345,"cMask":[],"color":"002033"},{"x":-730,"y":-160,"cMask":[],"color":"002033"},{"x":-675,"y":-160,"cMask":[],"color":"002033"},{"x":-730,"y":160,"cMask":[],"color":"002033"},{"x":-675,"y":160,"cMask":[],"color":"002033"},{"x":675,"y":-160,"cMask":[],"color":"002033"},{"x":730,"y":-160,"cMask":[],"color":"002033"},{"x":675,"y":160,"cMask":[],"color":"002033"},{"x":730,"y":160,"cMask":[],"color":"002033"},{"x":0,"y":-100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"B6B6B8","curve":180},{"x":0,"y":100,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"B6B6B8","curve":180},{"x":0,"y":-100,"bCoef":0.1,"cMask":["wall"],"color":"B6B6B8","curve":180},{"x":0,"y":100,"bCoef":0.1,"cMask":["wall"],"color":"B6B6B8","curve":180},{"x":0,"y":-100,"bCoef":0.1,"cMask":["wall"],"color":"D64433","curve":180},{"x":0,"y":100,"bCoef":0.1,"cMask":["wall"],"color":"D64433","curve":180},{"x":0,"y":-100,"cMask":["red","blue"],"cGroup":["redKO"],"color":"B6B6B8","curve":180},{"x":0,"y":100,"cMask":["red","blue"],"cGroup":["redKO"],"color":"B6B6B8","curve":180},{"x":0,"y":-100,"bCoef":0.1,"cMask":["wall"],"color":"B6B6B8","curve":180},{"x":0,"y":100,"bCoef":0.1,"cMask":["wall"],"color":"B6B6B8","curve":180},{"x":0,"y":-100,"bCoef":0.1,"cMask":["wall"],"color":"312CC7","curve":180},{"x":0,"y":100,"bCoef":0.1,"cMask":["wall"],"color":"312CC7","curve":180},{"x":-30.80767032151622,"y":-20.97365817191765,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-73.0325753445158,"y":-5.303933960534312,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-70.53910290127939,"y":-30.24992281946943,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-27.410035552344084,"y":-45.37098466241538,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"_data":{"mirror":{}}},{"x":-69.6349405753436,"y":-29.70126045103201,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"_data":{"mirror":{}}},{"x":-26.9171961650667,"y":15.469519438847833,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-5.6957750080367155,"y":-42.17475630043705,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":20.70100526586583,"y":27.325335899642464,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":43.019835349252105,"y":-23.734486281504665,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":46.64396877641359,"y":41.05820572053342,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":30,"_data":{"mirror":{}}},{"x":69.85559749718026,"y":-13.013067155644599,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":30,"_data":{"mirror":{}}},{"x":29.581428709592075,"y":4.652100240347658,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":59.43866600775325,"y":12.747782817238638,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-26.9171961650667,"y":15.469519438847833,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"_data":{"mirror":{}}},{"x":-5.6957750080367155,"y":-42.17475630043705,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"_data":{"mirror":{}}},{"x":-81.57117351973272,"y":9.344188261900541,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":10,"_data":{"mirror":{}}},{"x":68.52178488078869,"y":58.69776147790379,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":10,"_data":{"mirror":{}}},{"x":-80.4070737098043,"y":12.922520804833319,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":10,"_data":{"mirror":{}}},{"x":68.81472610339218,"y":58.79145967153676,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":10,"_data":{"mirror":{}}},{"x":-26.46918427803313,"y":-43.48928211379348,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"_data":{"mirror":{}}},{"x":-68.69408930103266,"y":-27.819557902410104,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-190,"_data":{"mirror":{}}},{"x":-30.80767032151622,"y":-18.151104348984795,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-70.53910290127939,"y":-27.427368996536572,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-31.74852159582717,"y":-22.855360720539554,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-73.97342661882676,"y":-7.1856365091562155,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-25.976344890755747,"y":18.29207326178069,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-4.7549237337257635,"y":-39.35220247750419,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-23.15379106782289,"y":15.469519438847833,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"_data":{"mirror":{}}},{"x":-1.9323699107929084,"y":-42.17475630043705,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"_data":{"mirror":{}}},{"x":18.19307210906255,"y":24.973960394884532,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":40.51190219244882,"y":-26.085861786262598,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":30.835395287993716,"y":2.6138400396804142,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":60.692632586154886,"y":10.709522616571395,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":47.58482005072453,"y":43.88075954346629,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":30,"_data":{"mirror":{}}},{"x":73.61900259442406,"y":-14.894769704266503,"bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"curve":30,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"color":"FFCCCC","cMask":[]},{"v0":0,"v1":2,"color":"F5072F","bCoef":0.1,"cMask":["ball"],"bias":3},{"v0":4,"v1":3,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":3,"x":-745},{"v0":5,"v1":1,"color":"F5072F","bCoef":0.1,"cMask":["ball"],"bias":3},{"v0":4,"v1":2,"curve":89.99999999999999,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":-3,"curveF":1.0000000000000002},{"v0":5,"v1":3,"curve":89.99999999999999,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":-3,"curveF":1.0000000000000002},{"v0":7,"v1":6,"color":"CCCCFF","cMask":[]},{"v0":8,"v1":6,"color":"F5072F","bCoef":0.1,"cMask":["ball"],"bias":3},{"v0":9,"v1":10,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":3,"x":745},{"v0":7,"v1":11,"color":"F5072F","bCoef":0.1,"cMask":["ball"],"bias":3},{"v0":8,"v1":10,"curve":89.99999999999999,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":-3,"curveF":1.0000000000000002},{"v0":9,"v1":11,"curve":89.99999999999999,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"bias":-3,"curveF":1.0000000000000002},{"v0":12,"v1":13,"curve":180,"color":"002033","cMask":[],"curveF":6.123233995736766e-17},{"v0":14,"v1":15,"curve":180,"color":"002033","cMask":[],"curveF":6.123233995736766e-17},{"v0":16,"v1":17,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":18,"vis":false,"color":"737573","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":59,"v1":58,"curve":180,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":61,"v1":60,"curve":180,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":63,"v1":62,"curve":180,"color":"D64433","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":21,"v1":20,"curve":-0.0703373509488842,"color":"002033","cMask":["ball"],"bias":99},{"v0":20,"v1":0,"color":"002033","cMask":["ball"],"bias":99},{"v0":1,"v1":22,"color":"002033","cMask":["ball"],"bias":99},{"v0":23,"v1":19,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":23,"v1":24,"vis":false,"color":"737573","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":64,"v1":65,"curve":180,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":66,"v1":67,"curve":180,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":68,"v1":69,"curve":180,"color":"312CC7","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":22,"v1":25,"color":"002033","cMask":["ball"],"bias":99},{"v0":6,"v1":21,"color":"002033","cMask":["ball"],"bias":99},{"v0":25,"v1":7,"color":"002033","cMask":["ball"],"bias":99},{"v0":26,"v1":27,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":28,"v1":29,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":30,"v1":31,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":32,"v1":33,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":34,"v1":35,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":36,"v1":37,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":38,"v1":39,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":40,"v1":41,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":42,"v1":43,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":44,"v1":45,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":46,"v1":47,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":48,"v1":49,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":50,"v1":51,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":52,"v1":53,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":54,"v1":55,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":56,"v1":57,"color":"002033","bCoef":0.1,"cMask":[]},{"v0":70,"v1":71,"curve":163.86629753682143,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-30.80767032151622,-20.97365817191765],"b":[-73.0325753445158,-5.303933960534312],"curve":163.86629753682143,"radius":22.744396464801294,"center":[-53.030564501107996,-16.131081912246373],"from":-0.21455529133868326,"to":2.645451133731524}}},{"v0":70,"v1":72,"curve":40,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-30.80767032151622,-20.97365817191765],"b":[-70.53910290127939,-30.24992281946943],"curve":40,"radius":59.64553488829842,"center":[-37.93022278338095,-80.19239742343504],"from":1.4510960038035043,"to":2.1492277046012362}}},{"v0":73,"v1":74,"curve":-141.95973018248085,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-27.410035552344084,-45.37098466241538],"b":[-69.6349405753436,-29.70126045103201],"curve":-141.95973018248085,"radius":23.81980443565979,"center":[-45.82164855187322,-30.258222171439492],"from":3.118208226322681,"to":-0.6873123839298428}}},{"v0":75,"v1":76,"curve":-30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-26.9171961650667,15.469519438847833],"b":[-5.6957750080367155,-42.17475630043705],"curve":-30,"radius":118.66682797104502,"center":[-123.87216849881233,-52.95232941422111],"from":0.0909474477429679,"to":0.6145462233412667}}},{"v0":77,"v1":78,"curve":-30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[20.70100526586583,27.325335899642464],"b":[43.019835349252105,-23.734486281504665],"curve":-30,"radius":107.65173985513927,"center":[-63.41850499517774,-39.85207910927826],"from":0.15028483357395658,"to":0.6738836091722554}}},{"v0":79,"v1":80,"curve":30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[46.64396877641359,41.05820572053342],"b":[69.85559749718026,-13.013067155644599],"curve":30,"radius":113.67567773432955,"center":[159.14815193870558,57.33605813860751],"from":-2.9979031513209176,"to":-2.474304375722619}}},{"v0":81,"v1":82,"curve":-43.06420221531196,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[29.581428709592075,4.652100240347658],"b":[59.43866600775325,12.747782817238638],"curve":-43.06420221531196,"radius":42.14364884614794,"center":[54.769231313870904,-29.136385047325597],"from":1.4597703046868304,"to":2.21138242308866}}},{"v0":83,"v1":84,"curve":-188.06346043694532,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-26.9171961650667,15.469519438847833],"b":[-5.6957750080367155,-42.17475630043705],"curve":-188.06346043694532,"radius":30.78943074023432,"center":[-14.275005093433348,-12.60474012780857],"from":-1.2884164581172783,"to":1.9939101292015131}}},{"v0":85,"v1":86,"curve":10,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-81.57117351973272,9.344188261900541],"b":[68.52178488078869,58.69776147790379],"curve":10,"radius":906.4173798868862,"center":[-288.5816559130113,891.8061572669733],"from":-1.3403796800803356,"to":-1.1658467548809026}}},{"v0":87,"v1":88,"curve":10,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-80.4070737098043,12.922520804833319],"b":[68.81472610339218,58.79145967153676],"curve":10,"radius":895.5948905504816,"center":[-267.93835896249755,888.6634785266943],"from":-1.3598421875340172,"to":-1.1853092623345844}}},{"v0":89,"v1":90,"curve":-141.95973018248085,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-26.46918427803313,-43.48928211379348],"b":[-68.69408930103266,-27.819557902410104],"curve":-141.95973018248085,"radius":23.819804435659798,"center":[-44.880797277562266,-28.37651962281759],"from":3.118208226322681,"to":-0.6873123839298427}}},{"v0":91,"v1":92,"curve":40,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-30.80767032151622,-18.151104348984795],"b":[-70.53910290127939,-27.427368996536572],"curve":40,"radius":59.64553488829842,"center":[-37.930222783380955,-77.3698436005022],"from":1.4510960038035043,"to":2.1492277046012362}}},{"v0":93,"v1":94,"curve":163.86629753682143,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-31.74852159582717,-22.855360720539554],"b":[-73.97342661882676,-7.1856365091562155],"curve":163.86629753682143,"radius":22.744396464801298,"center":[-53.97141577541895,-18.012784460868257],"from":-0.21455529133868417,"to":2.645451133731525}}},{"v0":95,"v1":96,"curve":-30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-25.976344890755747,18.29207326178069],"b":[-4.7549237337257635,-39.35220247750419],"curve":-30,"radius":118.66682797104501,"center":[-122.93131722450137,-50.129775591288265],"from":0.09094744774296801,"to":0.6145462233412669}}},{"v0":97,"v1":98,"curve":-180,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-23.15379106782289,15.469519438847833],"b":[-1.9323699107929084,-42.17475630043705],"curve":-180,"radius":30.71323510081097,"center":[-12.5430804893079,-13.35261843079461],"from":-1.2180494912527793,"to":1.923543162337014}}},{"v0":99,"v1":100,"curve":-30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[18.19307210906255,24.973960394884532],"b":[40.51190219244882,-26.085861786262598],"curve":-30,"radius":107.65173985513927,"center":[-65.92643815198102,-42.20345461403619],"from":0.1502848335739566,"to":0.6738836091722554}}},{"v0":101,"v1":102,"curve":-43.06420221531196,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[30.835395287993716,2.6138400396804142],"b":[60.692632586154886,10.709522616571395],"curve":-43.06420221531196,"radius":42.14364884614793,"center":[56.02319789227254,-31.174645247992824],"from":1.4597703046868304,"to":2.21138242308866}}},{"v0":103,"v1":104,"curve":30,"color":"FFFFFF","bCoef":0.4,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[47.58482005072453,43.88075954346629],"b":[73.61900259442406,-14.894769704266503],"curve":30,"radius":124.18578191062653,"center":[170.27854201971897,63.073440912904594],"from":-2.9864225735751204,"to":-2.4628237979768217}}}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[-771.6049382716047,-350],"b":[771.6049382716047,-350]}}},{"normal":[-1,0],"dist":-770,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-770,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[770,-325.7887517146776],"b":[770,325.7887517146776]}}},{"normal":[0,-1],"dist":-320,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-320,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[-771.6049382716047,320],"b":[771.6049382716047,320]}}},{"normal":[0,-1],"dist":-350,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[-771.6049382716047,350],"b":[771.6049382716047,350]}}},{"normal":[1,0],"dist":-770,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-770,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[-770,-325.7887517146776],"b":[-770,325.7887517146776]}}},{"normal":[0,1],"dist":-320,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-320,"canvas_rect":[-771.6049382716047,-325.7887517146776,771.6049382716047,325.7887517146776],"a":[-771.6049382716047,-320],"b":[771.6049382716047,-320]}}}],"goals":[{"p0":[-706.25,-85],"p1":[-706.25,85],"team":"red"},{"p0":[706.25,-85],"p1":[706.25,85],"team":"blue"}],"discs":[{"radius":6.45,"invMass":1.5,"pos":[3.2056171003621596,-6.6822307145477104],"color":"03DDFF","bCoef":0.4,"cGroup":["ball","kick","score"],"_data":{"mirror":{}}},{"radius":5.5,"invMass":0,"pos":[-700,-85],"color":"FF0000"},{"radius":5.5,"invMass":0,"pos":[-700,85],"color":"FF0000"},{"radius":5.5,"invMass":0,"pos":[700,-85],"color":"0022FD"},{"radius":5.5,"invMass":0,"pos":[700,85],"color":"0022FD"},{"radius":3,"invMass":0,"pos":[-700,320],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-700,-320],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,-320],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,320],"color":"FFCC00","bCoef":0.1,"cMask":[]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","traits":{},"joints":[],"canBeStored":true}';
var v6Map = '{"name":"[SDH] Futsal x6","canBeStored":true,"width":1265,"height":630,"bg":{"type":"none","cornerRadius":0,"kickOffRadius":0,"color":"304B6E"},"vertexes":[{"x":0,"y":-631,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-1200,"y":-110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-1245,"y":-110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-1245,"y":110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80]},{"x":-1200,"y":110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},{"x":1200,"y":-110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120]},{"x":1245,"y":-110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,-120],"vis":true},{"x":1245,"y":110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,120],"vis":true},{"x":1200,"y":110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120]},{"x":-1200,"y":106.99999999999999,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,80]},{"x":-1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":-1200,"y":-109.99999999999999,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,-80]},{"x":-1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":111.21407456330995,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[1200,120],"color":"002033"},{"x":1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":-107.59736828735457,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[1200,-120]},{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[1200,-120],"color":"ffffff"},{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1200,"y":-110,"bCoef":0,"cMask":["wall"],"trait":"line","color":"F80000","curve":0},{"x":-1200,"y":111,"bCoef":0,"cMask":["wall"],"trait":"line","color":"F80000","curve":0},{"x":1200,"y":-108.99999999999999,"bCoef":0,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,-120],"curve":0},{"x":1200,"y":106,"bCoef":0,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,120],"curve":0},{"x":-1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":-740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":-1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":-740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":0},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":0},{"x":740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-1200,"y":-110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false},{"x":-1245,"y":-110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"vis":true,"_data":{"mirror":{}}},{"x":-1245,"y":110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"vis":true,"_data":{"mirror":{}}},{"x":-1200,"y":110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false},{"x":1200,"y":-110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120],"vis":false},{"x":1245,"y":-110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,-120],"vis":true},{"x":1245,"y":110,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,120],"vis":true},{"x":1200,"y":110,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120],"vis":false},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":630,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},{"x":0,"y":-120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969","curve":180},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":120,"cMask":[],"color":"ffffff"},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":-1,"y":-62,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","curve":180,"color":"FFFFFF"},{"x":-1,"y":58,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","curve":180,"color":"FFFFFF"},{"x":-1,"y":-62,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","color":"FFFFFF","curve":-93.241608812827},{"x":0,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":-1,"y":58,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","color":"FFFFFF","curve":93.241608812827},{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"D64433"},{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180.5,"color":"D64433"},{"x":0,"y":-121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":-9.523422720000006,"y":138.68635648,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":-1,"y":58,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","color":"FFFFFF","curve":93.241608812827},{"x":-1,"y":-62,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"trait":"line","color":"FFFFFF","curve":-93.241608812827},{"x":-1.3604889600000007,"y":-110.11608832,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},{"x":1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-37.15200373475534,"y":-31.762567071617312,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-80.95787512420065,"y":-8.023040665815032,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-79.42457074807658,"y":-35.30082598798492,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-35.596802579849566,"y":-52.97888983590265,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF"},{"x":-79.69337278617672,"y":-36.30670466362076,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF"},{"x":-9.740654867913577,"y":-52.50706875394755,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-26.25352531500306,"y":11.941376392036233,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-9.740654867913577,"y":-52.50706875394755,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF"},{"x":-26.25352531500306,"y":11.941376392036233,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF"},{"x":45.79710460221406,"y":-39.757808990656116,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":29.28423415512458,"y":24.690636155327667,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":86.81668722900713,"y":-30.54150866705261,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":70.3038167819177,"y":33.90693647893117,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":84.28306879499581,"y":4.255808245568545,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":41.189397596812114,"y":-7.188052707899033,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-37.7821733616384,"y":-30.502227817851107,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-81.58804475108371,"y":-6.762701412048827,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-36.52183410787222,"y":-29.87205819096799,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-78.79440112119346,"y":-33.4103171073356,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-33.70629369920022,"y":-52.34872020901955,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF"},{"x":-77.80286390552737,"y":-35.67653503673766,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-180,"color":"FFFFFF"},{"x":-7.850145987264284,"y":-51.246729500181345,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-24.363016434353767,"y":13.201715645802437,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-11.631163748562926,"y":-51.87689912706445,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF"},{"x":-28.14403419565241,"y":12.571546018919335,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":190,"color":"FFFFFF"},{"x":45.166934975330946,"y":-41.01814824442232,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":28.654064528241463,"y":23.430296901561462,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":83.02272954122958,"y":5.51614749933475,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":39.92905834304588,"y":-5.927713454132828,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":84.92617834835784,"y":-29.281169413286406,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":68.41330790126841,"y":35.16727573269738,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},{"x":-93.29688282727886,"y":10.439684704543296,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-20,"color":"FFFFFF"},{"x":92.42281784947085,"y":54.282067467009924,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-20,"color":"FFFFFF"},{"x":-91.58671320039576,"y":11.430532838958769,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"FFFFFF"},{"x":92.42281784947085,"y":52.391558586360574,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"FFFFFF"}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-110},{"v0":3,"v1":4,"curve":0,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-1245},{"v0":4,"v1":5,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":110},{"v0":6,"v1":7,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-110},{"v0":7,"v1":8,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":1245},{"v0":8,"v1":9,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":110},{"v0":10,"v1":11,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1200},{"v0":12,"v1":13,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1200},{"v0":14,"v1":15,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":18,"v1":19,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1200},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-600},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"F80000","bCoef":0,"cMask":["wall"],"trait":"line","x":-1200},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"0000F8","bCoef":0,"cMask":["wall"],"trait":"line","x":1200},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-110},{"v0":55,"v1":56,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-1245,"_data":{"mirror":{},"arc":{"a":[-1245,-110],"b":[-1245,110],"curve":0}}},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":110},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-110},{"v0":59,"v1":60,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":1245},{"v0":60,"v1":61,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":110},{"v0":62,"v1":63,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":64,"v1":65,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":67,"v1":66,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":79,"v1":78,"curve":180.5,"vis":true,"color":"D64433","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":78,"v1":79,"curve":180.5,"vis":true,"color":"312CC7","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":81,"v1":80,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":82,"v1":83,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":88,"v1":89,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":90,"v1":91,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":92,"v1":93,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":98,"v1":99,"curve":180.5,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":100,"curve":51.089981524876045,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":101,"v1":102,"curve":-161.44918755240388,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":103,"v1":104,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":105,"v1":106,"curve":206.60269810527186,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":107,"v1":108,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":109,"v1":110,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":111,"v1":112,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":113,"v1":114,"curve":180.5,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":115,"v1":116,"curve":51.089981524876045,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":117,"v1":118,"curve":-161.44918755240388,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":119,"v1":120,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":121,"v1":122,"curve":206.60269810527186,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":123,"v1":124,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":125,"v1":126,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":127,"v1":128,"curve":30,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":130,"curve":-1.5753273963080028,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]},{"v0":131,"v1":132,"curve":-0.48679213983637626,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-630,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-630,"canvas_rect":[-1265,-631,1265,630],"a":[-1265,-630],"b":[1265,-630]}}},{"normal":[-1,0],"dist":-1265.1,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1265.1,"canvas_rect":[-1265,-631,1265,630],"a":[1265.1,-631],"b":[1265.1,630]}}},{"normal":[0,-1],"dist":-600,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-1265,-631,1265,630],"a":[-1265,600],"b":[1265,600]}}},{"normal":[0,-1],"dist":-630,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-630,"canvas_rect":[-1265,-631,1265,630],"a":[-1265,630],"b":[1265,630]}}},{"normal":[1,0],"dist":-1265.1,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1265.1,"canvas_rect":[-1265,-631,1265,630],"a":[-1265.1,-631],"b":[-1265.1,630]}}},{"normal":[0,1],"dist":-600,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-1265,-631,1265,630],"a":[-1265,-600],"b":[1265,-600]}}}],"goals":[{"p0":[1207.1141964800004,-114.00205056000006],"p1":[1207.1141964800004,122.72302848000005],"team":"blue"},{"p0":[-1207.1141964800006,118.36253952000007],"p1":[-1205.7537075200007,-125.16498432000006],"team":"red"}],"discs":[{"radius":0.01,"invMass":0,"pos":[-1265.1,0],"color":"000000","bCoef":470,"vis":true,"x":-1265.1},{"radius":0.1,"invMass":0,"pos":[1265.1,0],"color":"000000","bCoef":470},{"radius":6,"invMass":0,"pos":[-1200,110],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[-1200,-110],"color":"ffffff","trait":"goalPost","y":-110,"x":-560},{"radius":6,"invMass":0,"pos":[1200,110],"color":"ffffff","trait":"goalPost","y":85},{"radius":6,"invMass":0,"pos":[1200,-110],"color":"ffffff","trait":"goalPost","y":-110,"vis":true},{"radius":4,"pos":[-1203.0014938027887,-602.5017427699202],"color":"F0EA3E","cMask":["wall"]},{"radius":4,"pos":[-1204.0019917370519,603.7055479046774],"color":"F0EA3E","bCoef":1,"cMask":["ball"]},{"radius":4,"pos":[1203.0019917370519,-602.2959458981114],"color":"F0EA3E","bCoef":1,"cMask":["ball"]},{"radius":4,"pos":[1203.0024896713146,602.2072906745976],"color":"F0EA3E","bCoef":1,"cMask":["ball"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":4.9,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"03DDFF","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":320,"traits":{"goalNet":{"vis":true}},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v7Map = '{"name":"[SDH] Futsal x7","canBeStored":true,"width":1265,"height":630,"bg":{"type":"none","color":"304B6E","cornerRadius":0,"kickOffRadius":0},"vertexes":[{"x":0,"y":-631,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-1200,"y":-105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"_data":{"mirror":{}}},{"x":-1245,"y":-105,"bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":true,"_data":{"mirror":{}}},{"x":-1245,"y":105,"bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":true,"_data":{"mirror":{}}},{"x":-1200,"y":105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"_data":{"mirror":{}}},{"x":1200,"y":-105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120],"_data":{"mirror":{}}},{"x":1245,"y":-105,"bCoef":0.2,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,-120],"vis":true,"_data":{"mirror":{}}},{"x":1245,"y":105,"bCoef":0.2,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,120],"vis":true,"_data":{"mirror":{}}},{"x":1200,"y":105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120],"_data":{"mirror":{}}},{"x":-1200,"y":109,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,80],"_data":{"mirror":{}}},{"x":-1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","_data":{"mirror":{}}},{"x":-1200,"y":-103,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[-700,-80],"_data":{"mirror":{}}},{"x":-1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","_data":{"mirror":{}}},{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"002033"},{"x":1200,"y":104.54075449788616,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[1200,120],"color":"002033","_data":{"mirror":{}}},{"x":1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","_data":{"mirror":{}}},{"x":1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","_data":{"mirror":{}}},{"x":1200,"y":-111.74401485771703,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"002033","pos":[1200,-120],"_data":{"mirror":{}}},{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"002033"},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff","_data":{"mirror":{}}},{"x":1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[1200,-120],"color":"ffffff","_data":{"mirror":{}}},{"x":1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-1200,"y":-98,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000","_data":{"mirror":{}},"curve":0},{"x":-1200,"y":107,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"F80000","_data":{"mirror":{}},"curve":0},{"x":1200,"y":-102.06886559373478,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,-120],"_data":{"mirror":{}},"curve":0},{"x":1200,"y":106.13783851271738,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"0000F8","pos":[1200,120],"_data":{"mirror":{}},"curve":0},{"x":-1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":-740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":-1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":-740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":1200,"y":560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":93.241608812827},{"x":1200,"y":-560,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":-93.241608812827},{"x":740,"y":100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":0},{"x":740,"y":-100,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"002033","curve":0},{"x":740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":-4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-740,"y":4,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-1200,"y":-105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false,"_data":{"mirror":{}}},{"x":-1245,"y":-105,"bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,-80],"vis":true,"_data":{"mirror":{}}},{"x":-1245,"y":105,"bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-700,80],"vis":true,"_data":{"mirror":{}}},{"x":-1200,"y":105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false,"_data":{"mirror":{}}},{"x":1200,"y":-105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,-120],"vis":false,"_data":{"mirror":{}}},{"x":1245,"y":-105,"bCoef":0.2,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,-120],"vis":true,"_data":{"mirror":{}}},{"x":1245,"y":105,"bCoef":0.2,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[1200,120],"vis":true,"_data":{"mirror":{}}},{"x":1200,"y":105,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[1200,120],"vis":false,"_data":{"mirror":{}}},{"x":-1265.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-1265.1,0]},{"x":-1265.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[-1265.1,0]},{"x":1265.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[610.1,0]},{"x":1265.1,"y":15,"bCoef":0.5,"cMask":["red","blue"],"trait":"goalPost","vis":false,"pos":[610.1,0]},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":630,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D64433","curve":180},{"x":0,"y":-120,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D64433","curve":180},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"312CC7"},{"x":0,"y":-120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"312CC7"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":120,"cMask":[],"color":"ffffff"},{"x":0,"y":600,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":120,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":-4.050727855197084,"y":-53.990886748902064,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":8.171314912774966,"y":65.38508097734451,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-4.050727855197084,"y":-53.990886748902064,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":0,"y":120,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":8.171314912774966,"y":65.38508097734451,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"D64433"},{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"D64433"},{"x":0,"y":-121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":121,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"002033"},{"x":0,"y":121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":8.171314912774966,"y":65.38508097734451,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":-4.050727855197084,"y":-53.990886748902064,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":-93.241608812827},{"x":0,"y":-121,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"ffffff","curve":93.241608812827},{"x":-1206.5,"y":120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff","_data":{"mirror":{}}},{"x":-1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff","_data":{"mirror":{}}},{"x":-1206.5,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff","_data":{"mirror":{}}},{"x":-1206.5,"y":-120,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff","_data":{"mirror":{}}},{"x":1206.5,"y":113.19416802966246,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[1200,120],"color":"ffffff"},{"x":1206.5,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},{"x":1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-1235,"y":-630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-1235,"y":630,"bCoef":0.5,"cMask":["red","blue"]},{"x":-37.42336096989546,"y":-20.894715886539903,"bCoef":0.1,"cMask":["wall"],"curve":180.5},{"x":-84.3117087328126,"y":1.6723664214815281,"bCoef":0.1,"cMask":["wall"],"curve":180.5},{"x":-83.23296691753993,"y":-31.823521201155216,"bCoef":0.1,"cMask":["wall"]},{"x":-38.285571486984836,"y":-48.95280906879697,"bCoef":0.1,"cMask":["wall"],"curve":-180.5},{"x":-82.49507112594507,"y":-29.67567702313101,"bCoef":0.1,"cMask":["wall"],"curve":-180.5},{"x":-14.411788595094233,"y":-46.91144399755535,"bCoef":0.1,"cMask":["wall"]},{"x":-26.081608180699806,"y":25.65449367873614,"bCoef":0.1,"cMask":["wall"]},{"x":-14.411788595094233,"y":-46.91144399755535,"bCoef":0.1,"cMask":["wall"],"curve":206.60269810527186},{"x":-26.081608180699806,"y":25.65449367873614,"bCoef":0.1,"cMask":["wall"],"curve":206.60269810527186},{"x":43.98897463772347,"y":-37.64821124519655,"bCoef":0.1,"cMask":["wall"]},{"x":32.3191550521179,"y":34.91772643109494,"bCoef":0.1,"cMask":["wall"]},{"x":83.58679085834588,"y":-28.80487521416098,"bCoef":0.1,"cMask":["wall"]},{"x":71.91697127274031,"y":43.76106246213051,"bCoef":0.1,"cMask":["wall"]},{"x":81.16557777725154,"y":13.118941322382609,"bCoef":0.1,"cMask":["wall"]},{"x":42.37170119581414,"y":0.6758038167450051,"bCoef":0.1,"cMask":["wall"]},{"x":-98.09608587173989,"y":25.91648223438822,"bCoef":0.1,"cMask":["wall"]},{"x":93.53235551724285,"y":61.212234215238496,"bCoef":0.1,"cMask":["wall"]},{"x":-96.06525237645877,"y":27.570092187448008,"bCoef":0.1,"cMask":["wall"]},{"x":95.56318901252394,"y":62.865844168298295,"bCoef":0.1,"cMask":["wall"]},{"x":82.38276233959463,"y":-31.473901914861344,"bCoef":0.1,"cMask":["wall"]},{"x":70.71294275398905,"y":41.09203576143015,"bCoef":0.1,"cMask":["wall"]},{"x":82.36960629600281,"y":15.787968023082998,"bCoef":0.1,"cMask":["wall"]},{"x":43.5757297145654,"y":3.344830517445396,"bCoef":0.1,"cMask":["wall"]},{"x":46.846613109534516,"y":-37.010018039777336,"bCoef":0.1,"cMask":["wall"]},{"x":35.17679352392894,"y":35.55591963651416,"bCoef":0.1,"cMask":["wall"]},{"x":-15.332899457179469,"y":-46.81713811200001,"bCoef":0.1,"cMask":["wall"],"curve":206.60269810527186},{"x":-27.002719042785042,"y":25.74879956429148,"bCoef":0.1,"cMask":["wall"],"curve":206.60269810527186},{"x":-13.396371847453661,"y":-46.08463902102545,"bCoef":0.1,"cMask":["wall"]},{"x":-22.39716473235887,"y":25.277270136514783,"bCoef":0.1,"cMask":["wall"]},{"x":-35.298221589058976,"y":-18.319995071394853,"bCoef":0.1,"cMask":["wall"],"curve":180.5},{"x":-82.1865693519761,"y":4.247087236626579,"bCoef":0.1,"cMask":["wall"],"curve":180.5},{"x":-36.219332451144204,"y":-18.225689185839514,"bCoef":0.1,"cMask":["wall"],"curve":180.5},{"x":-82.02893839878868,"y":-29.154494500454827,"bCoef":0.1,"cMask":["wall"]},{"x":-35.872223821635764,"y":-45.92413353537353,"bCoef":0.1,"cMask":["wall"],"curve":-180.5},{"x":-81.4796543783045,"y":-28.848872046601116,"bCoef":0.1,"cMask":["wall"],"curve":-180.5}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-105,"_data":{"mirror":{},"arc":{"a":[-1200,-105],"b":[-1245,-105],"curve":0}}},{"v0":3,"v1":4,"curve":0,"vis":true,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalPost","x":-1245},{"v0":4,"v1":5,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":105,"_data":{"mirror":{},"arc":{"a":[-1245,105],"b":[-1200,105],"curve":0}}},{"v0":6,"v1":7,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-105,"_data":{"mirror":{},"arc":{"a":[1200,-105],"b":[1245,-105],"curve":0}}},{"v0":7,"v1":8,"curve":0,"vis":true,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"trait":"goalNet","x":1245},{"v0":8,"v1":9,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":105,"_data":{"mirror":{},"arc":{"a":[1245,105],"b":[1200,105],"curve":0}}},{"v0":10,"v1":11,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1200,"_data":{"mirror":{},"arc":{"a":[-1200,109],"b":[-1200,600],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":12,"v1":13,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550,"_data":{"mirror":{},"arc":{"a":[-1200,-103],"b":[-1200,-600],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":14,"v1":15,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1200,"_data":{"mirror":{},"arc":{"a":[1200,104.54075449788616],"b":[1200,600],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":18,"v1":19,"vis":true,"color":"002033","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1200,"_data":{"mirror":{},"arc":{"a":[1200,-600],"b":[1200,-111.74401485771703],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"002033","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-600},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5,"_data":{"mirror":{},"arc":{"a":[1206.5,-600],"b":[1206.5,-120],"curve":0}}},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"F80000","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-1200,"_data":{"mirror":{},"arc":{"a":[-1200,-98],"b":[-1200,107],"curve":0}}},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"0000F8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":1200,"_data":{"mirror":{},"arc":{"a":[1200,-102.06886559373478],"b":[1200,106.13783851271738],"curve":0}}},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":740},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-740},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-105,"_data":{"mirror":{},"arc":{"a":[-1200,-105],"b":[-1245,-105],"curve":0}}},{"v0":55,"v1":56,"curve":0,"vis":true,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","x":-1245},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":105,"_data":{"mirror":{},"arc":{"a":[-1245,105],"b":[-1200,105],"curve":0}}},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,-120],"y":-105,"_data":{"mirror":{},"arc":{"a":[1200,-105],"b":[1245,-105],"curve":0}}},{"v0":59,"v1":60,"curve":0,"vis":true,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"trait":"goalNet","x":1245,"_data":{"mirror":{},"arc":{"a":[1245,-105],"b":[1245,105],"curve":0}}},{"v0":60,"v1":61,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[1200,120],"y":105,"_data":{"mirror":{},"arc":{"a":[1245,105],"b":[1200,105],"curve":0}}},{"v0":66,"v1":67,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":68,"v1":69,"curve":180,"color":"D64433","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":71,"v1":70,"curve":180,"color":"312CC7","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":83,"v1":82,"curve":180,"vis":true,"color":"D64433","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":82,"v1":83,"curve":180,"vis":true,"color":"312CC7","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":85,"v1":84,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":86,"v1":87,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":92,"v1":93,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5,"_data":{"mirror":{},"arc":{"a":[-1206.5,120],"b":[-1206.5,600],"curve":0}}},{"v0":94,"v1":95,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5,"_data":{"mirror":{},"arc":{"a":[-1206.5,-600],"b":[-1206.5,-120],"curve":0}}},{"v0":96,"v1":97,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":102,"v1":103,"curve":180.5,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":102,"v1":104,"curve":51.089981524876045,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":105,"v1":106,"curve":-180.5,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":107,"v1":108,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":109,"v1":110,"curve":206.60269810527186,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":111,"v1":112,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":113,"v1":114,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":115,"v1":116,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":117,"v1":118,"curve":-0.48679213983637626,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":119,"v1":120,"curve":-0.48679213983637626,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":121,"v1":122,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":123,"v1":124,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":125,"v1":126,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":127,"v1":128,"curve":206.60269810527186,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":129,"v1":130,"curve":30,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":131,"v1":132,"curve":178.00895218860745,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":133,"v1":134,"curve":51.089981524876045,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]},{"v0":135,"v1":136,"curve":-180.5,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"]}],"planes":[{"normal":[0,1],"dist":-630,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-630,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[-465.1378747103507,-630],"b":[465.1378747103507,-630]}}},{"normal":[-1,0],"dist":-1265.1,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1265.1,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[1265.1,-232.017390468167],"b":[1265.1,231.6496925434948]}}},{"normal":[0,-1],"dist":-600,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[-465.1378747103507,600],"b":[465.1378747103507,600]}}},{"normal":[0,-1],"dist":-630,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-630,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[-465.1378747103507,630],"b":[465.1378747103507,630]}}},{"normal":[1,0],"dist":-1258.244702924882,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1258.244702924882,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[-1258.244702924882,-232.017390468167],"b":[-1258.244702924882,231.6496925434948]}}},{"normal":[0,1],"dist":-600,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-465.1378747103507,-232.017390468167,465.1378747103507,231.6496925434948],"a":[-465.1378747103507,-600],"b":[465.1378747103507,-600]}}}],"goals":[{"p0":[-1207.5,-120],"p1":[-1207.5,120],"team":"red","color":"ffffff"},{"p0":[1207.5,120],"p1":[1207.5,-120],"team":"blue","color":"ffffff","_data":{"mirror":{}}}],"discs":[{"radius":0.01,"invMass":0,"pos":[-1265.1,0],"color":"000000","bCoef":470,"vis":true,"x":-1265.1},{"radius":0.1,"invMass":0,"pos":[1265.1,0],"color":"000000","bCoef":470},{"radius":6,"invMass":0,"pos":[-1200,105],"color":"ffffff","trait":"goalPost","y":85,"_data":{"mirror":{}}},{"radius":6,"invMass":0,"pos":[-1200,-105],"color":"ffffff","trait":"goalPost","y":-110,"x":-560,"_data":{"mirror":{}}},{"radius":6,"invMass":0,"pos":[1200,105],"color":"ffffff","trait":"goalPost","y":85,"_data":{"mirror":{}}},{"radius":6,"invMass":0,"pos":[1200,-105],"color":"ffffff","trait":"goalPost","y":-110,"vis":true,"_data":{"mirror":{}}}],"playerPhysics":{"bCoef":0.1,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":4.9,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"03DDFF","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":320,"traits":{"goalNet":{"vis":true}},"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","redSpawnPoints":[],"blueSpawnPoints":[],"kickOffReset":"partial","joints":[]}';
var v10Map = '{"name":"[SDH] Futsal x10","width":1500,"height":1100,"spawnDistance":350,"bg":{"type":"none","color":"304B6E","width":1200,"height":600,"kickOffRadius":8,"cornerRadius":0},"vertexes":[{"x":-1200,"y":-600,"trait":"ballArea"},{"x":0,"y":600,"trait":"kickOffBarrier"},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-600,"trait":"kickOffBarrier"},{"x":-1200,"y":-120,"trait":"goalNet","curve":0,"color":"F8F8F8","radius":6},{"x":-1255,"y":-120,"trait":"goalNet","curve":0,"color":"F8F8F8","radius":6},{"x":-1255,"y":120,"trait":"goalNet","curve":0,"color":"F8F8F8","radius":6},{"x":-1200,"y":120,"trait":"goalNet","curve":0,"color":"F8F8F8","radius":6},{"x":1200,"y":-120,"trait":"goalNet","curve":0,"color":"F8F8F8"},{"x":1255,"y":-120,"trait":"goalNet","curve":0,"color":"F8F8F8"},{"x":1255,"y":120,"trait":"goalNet","curve":0,"color":"F8F8F8"},{"x":1200,"y":120,"trait":"goalNet","curve":0,"color":"F8F8F8"},{"x":-1200,"y":119.25598514228295,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","radius":6},{"x":-1200,"y":600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1198.9199999999998,"y":-123.08000000000001,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","radius":6},{"x":-1200,"y":-600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033","curve":0},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033","curve":0},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-1199.2649701472037,"y":118.5209552894865,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"radius":6},{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-1200,"y":-116.60000000000001,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"radius":6},{"x":1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-1200,"y":600,"trait":"ballArea"},{"x":-1200,"y":-600,"trait":"ballArea"},{"x":0,"y":600,"trait":"kickOffBarrier","curve":0},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-600,"trait":"kickOffBarrier"},{"x":-1201.470059705593,"y":120.72604484787588,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0,"radius":6},{"x":-1200,"y":600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0},{"x":-1198.8336,"y":-119.49440000000001,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0,"radius":6},{"x":-1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":1200,"y":-116.2962962962963,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-1200,"y":600,"trait":"ballArea"},{"x":-1200,"y":-600,"trait":"ballArea"},{"x":0,"y":600,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":0},{"x":0,"y":220,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":0},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-600,"trait":"kickOffBarrier"},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":600,"bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":1200,"y":-120.92592592592592,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":-600,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033","curve":0},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"002033","curve":0},{"x":0,"y":-220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-1200,"y":600,"trait":"ballArea"},{"x":-1200,"y":-600,"trait":"ballArea"},{"x":0,"y":600,"trait":"kickOffBarrier","vis":false},{"x":0,"y":220,"trait":"kickOffBarrier","color":"D64433","vis":true,"curve":180},{"x":0,"y":-220,"trait":"kickOffBarrier","color":"FFFFFF","vis":true,"curve":0},{"x":0,"y":-600,"trait":"kickOffBarrier","vis":false,"color":"FFFFFF","curve":0},{"x":-1200.7350298527965,"y":119.99101499507941,"bCoef":2,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0,"radius":6},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0},{"x":-1200,"y":-122.99360000000001,"bCoef":2,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0,"radius":6},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","color":"F8F8F8","curve":0},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":1200.925925925926,"y":122.77777777777777,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":1200,"y":600,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":1200.9259259259259,"y":-120,"bCoef":2,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":-1,"y":220,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":800,"y":-147,"bCoef":0,"cMask":[""],"trait":"line","curve":-30},{"x":800,"y":147,"bCoef":0,"cMask":[""],"trait":"line","curve":-30},{"x":-1200,"y":119.99101499507941,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"radius":6},{"x":-1200,"y":600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-1201.4700597055928,"y":118.52095528948651,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"radius":6},{"x":-1200,"y":600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-1200,"y":-600,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-1200,"y":-600,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":1200,"y":-116.2962962962963,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":1196.2962962962963,"y":-118.14814814814815,"bCoef":2,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-1207.6805831970337,"y":120.86216148728262,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","radius":6},{"x":-1207,"y":600,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":-1207,"y":-600,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":-1207,"y":-120.92000000000002,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","radius":6},{"x":1207,"y":-600,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":1209.5720164609054,"y":-118.14814814814815,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":1207.8573388203017,"y":119.00548696844993,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":1207,"y":600,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea"},{"x":800,"y":147,"bCoef":0,"cMask":[""],"trait":"line","curve":-78.04299828129},{"x":1200,"y":424,"bCoef":0,"cMask":[""],"trait":"line","curve":-78.04299828129},{"x":800,"y":-147,"bCoef":0,"cMask":[""],"trait":"line","curve":78.04299828129},{"x":-1200,"y":-120.66080000000002,"bCoef":0,"cMask":[""],"trait":"line","curve":0,"color":"F80000","radius":6},{"x":-1200,"y":118.328,"bCoef":0,"cMask":[""],"trait":"line","curve":0,"color":"F80000","radius":6},{"x":1200,"y":-118.38820301783267,"bCoef":0,"cMask":[""],"trait":"line","curve":0,"color":"0000F8"},{"x":1200,"y":121.33744855967078,"bCoef":0,"cMask":[""],"trait":"line","curve":0,"color":"0000F8"},{"x":0,"y":-220,"bCoef":0,"cMask":[""],"trait":"line","curve":0},{"x":0,"y":220,"bCoef":0,"cMask":[""],"trait":"line","curve":0},{"x":780.5,"y":2.294075784413,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":-0.93062057186233,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":5.5187721406883,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":-4.1553169281376,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":-2.54296875,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":3.9064239625506,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":-4.9614910172065,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":780.5,"y":6.3249462297571,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-1199.469437568,"y":570.45651105348,"bCoef":0.1,"trait":"line","curve":-90},{"x":-1171.6369452865,"y":598.289003335,"bCoef":0.1,"trait":"line","curve":-90},{"x":-1198.469437568,"y":-569.64202712531,"bCoef":0.1,"trait":"line","curve":90},{"x":-1170.6369452865,"y":-597.47451940683,"bCoef":0.1,"trait":"line","curve":90},{"x":1198.1516337209,"y":-571.012459019,"bCoef":0.1,"trait":"line","curve":-90},{"x":1170.3191414394,"y":-598.84495130052,"bCoef":0.1,"trait":"line","curve":-90},{"x":1199.1516337209,"y":569.99970042225,"bCoef":0.1,"trait":"line","curve":90},{"x":1171.3191414394,"y":597.83219270377,"bCoef":0.1,"trait":"line","curve":90},{"x":1200,"y":-424,"bCoef":0,"trait":"line","curve":78.04299828129},{"x":-800,"y":147,"bCoef":0,"cMask":[""],"trait":"line","curve":-30},{"x":-800,"y":-147,"bCoef":0,"cMask":[""],"trait":"line","curve":-30},{"x":-800,"y":-147,"bCoef":0,"cMask":[""],"trait":"line","curve":44.336382176589},{"x":-1200,"y":-424,"bCoef":0,"cMask":[""],"trait":"line","curve":-38.522993982551},{"x":-800,"y":147,"bCoef":0,"cMask":[""],"trait":"line","curve":78.04299828129},{"x":-800,"y":147,"bCoef":0,"cMask":[""],"trait":"line","curve":-90},{"x":-780.5,"y":-2.3590474271794,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":0.86558419244723,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":-5.5836790468059,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":4.0902158120738,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":2.4779000022605,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":-3.9713632369926,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":4.8963737169805,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-780.5,"y":-6.3898369517126,"bCoef":0.1,"trait":"line","curve":180,"color":"FFFFFF"},{"x":-1200,"y":424,"bCoef":0,"trait":"line","curve":78.04299828129},{"x":0,"y":-660,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","vis":false},{"x":0,"y":660,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","vis":false},{"x":116.55811002690805,"y":100.2427054050336,"cMask":["wall"],"color":"002033"},{"x":-74.22135131935954,"y":-23.317501508318728,"cMask":["wall"],"color":"002033"},{"x":129.54213220493526,"y":87.44221703918548,"cMask":["wall"],"color":"002033"},{"x":156.7732252073462,"y":56.46827631446147,"cMask":["wall"],"color":"002033"},{"x":126.31732535259476,"y":85.91823251524022,"cMask":["wall"],"color":"002033"},{"x":44.59879389418239,"y":24.111490084878014,"cMask":["wall"],"color":"002033"},{"x":46.388977804132935,"y":23.95966908278639,"cMask":["wall"],"curve":0,"color":"002033"},{"x":-39.014604812173104,"y":48.61330686461628,"cMask":["wall"],"curve":0,"color":"002033"},{"x":-40.38397530373368,"y":49.325310721287366,"cMask":["wall"],"color":"002033"},{"x":-55.49289260313708,"y":-85.3742942911531,"cMask":["wall"],"color":"002033"},{"x":-48.641656709008714,"y":-31.68204346067533,"cMask":["wall"],"curve":-35.13002937458595,"color":"002033"},{"x":30.876195212525033,"y":-72.45501426844531,"cMask":["wall"],"curve":-35.13002937458595,"color":"002033"},{"x":-67.67162674766462,"y":-163.68811384921963,"cMask":["wall"],"color":"002033"},{"x":-28.304626921488023,"y":-110.89700923404764,"cMask":["wall"],"color":"002033"},{"x":-64.82226209557501,"y":-115.5686120503096,"cMask":["wall"],"color":"002033"},{"x":-57.70126522641044,"y":-148.67337759116594,"cMask":["wall"],"color":"002033"},{"x":-50.46080698641833,"y":-132.89986610097208,"cMask":["wall"],"color":"002033"},{"x":-14.891481005545185,"y":-116.281694666517,"cMask":["wall"],"color":"FF8214"},{"x":-16.282559867203986,"y":-110.42283752244795,"cMask":["wall"],"color":"FF8214"},{"x":-27.997788778086452,"y":-103.7024391228341,"cMask":["wall"],"color":"FF8214"},{"x":-13.595324926623672,"y":-113.43962961400786,"cMask":["wall"],"color":"FF8214"},{"x":-26.088297949888442,"y":-108.3690913804876,"cMask":["wall"],"color":"FF8214"},{"x":-17.156160911108657,"y":-113.88064586361004,"cMask":["wall"],"color":"FF8214"},{"x":-26.741117052629853,"y":-103.49672531611465,"cMask":["wall"],"color":"FF8214"},{"x":9.160286015860152,"y":-124.21088206380621,"cMask":["wall"]},{"x":-13.88956389561838,"y":-111.32927611571775,"cMask":["wall"],"color":"FF8214"},{"x":12.426883031350428,"y":-121.65951231591403,"cMask":["wall"]},{"x":-16.943708722757307,"y":-114.02966135441453,"cMask":["wall"],"color":"FF8214"},{"x":10.672306034203189,"y":-128.09046599204822,"cMask":["wall"]},{"x":-16.2307679090681,"y":-115.34530251767315,"cMask":["wall"],"color":"FF8214"},{"x":8.618129569574194,"y":-125.74086018918969,"cMask":["wall"]},{"x":-13.524796715593311,"y":-114.60904114056639,"cMask":["wall"],"color":"FF8214"},{"x":11.462993605040424,"y":-127.31609665185017,"cMask":["wall"]},{"x":-14.78108397222111,"y":-111.63239932250397,"cMask":["wall"]},{"x":8.228525086628963,"y":-128.6182803021568,"cMask":["wall"]},{"x":11.756363167852953,"y":-120.67395519959219,"cMask":["wall"]},{"x":-12.40883360212041,"y":-114.02927663360727,"cMask":["wall"],"color":"FF8214"},{"x":-8.526754807359554,"y":-116.146800553876,"cMask":["wall"]},{"x":8.247533900930982,"y":-127.89094359062376,"cMask":["wall"],"color":"FF421C"},{"x":12.242617874590316,"y":-120.55307866556801,"cMask":["wall"],"color":"FF421C"},{"x":23.902238828993916,"y":-148.98992964688404,"cMask":["wall"]},{"x":16.833659849198796,"y":-171.2349179137537,"cMask":["wall"]},{"x":32.0612921329905,"y":-130.07425019127544,"cMask":["wall"],"curve":-30},{"x":47.57074724632514,"y":-146.4899434762409,"cMask":["wall"],"curve":-30},{"x":45.98164102143443,"y":-174.29289778365256,"cMask":["wall"]},{"x":52.59169198611289,"y":-201.34859164640307,"cMask":["wall"]},{"x":-50.80165670900871,"y":-27.362043460675327,"cMask":["wall"],"curve":-35.13002937458595,"color":"002033"},{"x":33.03619521252504,"y":-67.0550142684453,"cMask":["wall"],"curve":-35.13002937458595,"color":"002033"},{"x":126.28401945410367,"y":92.58758779644737,"cMask":["wall"],"color":"002033"},{"x":41.278793894182385,"y":26.351490084878023,"cMask":["wall"],"color":"002033"},{"x":124.14213220493525,"y":89.60221703918548,"cMask":["wall"],"color":"002033"},{"x":151.3732252073462,"y":58.628276314461466,"cMask":["wall"],"color":"002033"},{"x":47.388977804132935,"y":25.95966908278639,"cMask":["wall"],"curve":0,"color":"002033"},{"x":-38.014604812173104,"y":50.61330686461628,"cMask":["wall"],"curve":0,"color":"002033"},{"x":-38.38397530373368,"y":51.32531072128737,"cMask":["wall"],"color":"002033"},{"x":-53.49289260313708,"y":-83.37429429115309,"cMask":["wall"],"color":"002033"},{"x":118.55811002690805,"y":102.2427054050336,"cMask":["wall"],"color":"002033"},{"x":-72.22135131935954,"y":-21.317501508318724,"cMask":["wall"],"color":"002033"},{"x":-53.49289260313708,"y":-84.3742942911531,"cMask":["wall"],"color":"002033"},{"x":-65.67162674766462,"y":-162.68811384921963,"cMask":["wall"],"color":"002033"},{"x":-57.49289260313708,"y":-84.3742942911531,"cMask":["wall"],"color":"002033"},{"x":-69.67162674766462,"y":-162.68811384921963,"cMask":["wall"],"color":"002033"},{"x":-17.670581656917008,"y":-111.32927611571775,"cMask":["wall"],"color":"FF8214"},{"x":8.6458652700518,"y":-121.65951231591403,"cMask":["wall"]},{"x":-13.966592426780563,"y":-114.82375225902264,"cMask":["wall"],"color":"FF8214"},{"x":-27.397352775013715,"y":-106.08702782075156,"cMask":["wall"],"color":"FF8214"},{"x":39.646667271398236,"y":-135.32566374863467,"cMask":["wall"],"curve":-30},{"x":55.156122384732875,"y":-151.74135703360014,"cMask":["wall"],"curve":-30},{"x":20.401296457421115,"y":-157.74228557581606,"cMask":["wall"]},{"x":13.332717477625994,"y":-179.9872738426857,"cMask":["wall"]},{"x":47.73211220722083,"y":-185.3792152936331,"cMask":["wall"]},{"x":54.342163171899294,"y":-212.4349091563836,"cMask":["wall"]},{"x":-16.84582377793422,"y":-109.72620441558952,"cMask":["wall"],"color":"FF8214"},{"x":-27.72775142220718,"y":-108.40426602520265,"cMask":["wall"],"color":"FF8214"},{"x":-13.105649798036058,"y":-112.40840631567791,"cMask":["wall"],"color":"FF8214"},{"x":-26.53641014626921,"y":-104.83024219738873,"cMask":["wall"],"color":"FF8214"},{"x":-57.06400974379941,"y":-85.23206000982844,"cMask":["wall"],"color":"002033"},{"x":-69.24274388832694,"y":-163.54587956789499,"cMask":["wall"],"color":"002033"},{"x":-12.344607978805897,"y":-111.81149542706969,"cMask":["wall"],"color":"FF8214"},{"x":-25.775368327039047,"y":-104.2333313087805,"cMask":["wall"],"color":"FF8214"}],"segments":[{"v0":5,"v1":6,"curve":0,"color":"F8F8F8","trait":"goalNet","radius":6,"y":-120},{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","trait":"goalNet","radius":6,"x":-1255},{"v0":7,"v1":8,"curve":0,"color":"F8F8F8","trait":"goalNet","radius":6,"y":120},{"v0":9,"v1":10,"curve":0,"color":"F8F8F8","trait":"goalNet","y":-120},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","trait":"goalNet","x":1255},{"v0":11,"v1":12,"curve":0,"color":"F8F8F8","trait":"goalNet","y":120},{"v0":1,"v1":2,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"trait":"kickOffBarrier"},{"v0":13,"v1":14,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"v0":15,"v1":16,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":-1200},{"v0":21,"v1":22,"curve":0,"vis":true,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","y":-600},{"v0":23,"v1":24,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":25,"v1":26,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":34,"v1":35,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-700},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-1200},{"v0":42,"v1":43,"curve":0,"trait":"kickOffBarrier"},{"v0":44,"v1":45,"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea"},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-1200},{"v0":53,"v1":54,"vis":true,"color":"F8F8F8","bCoef":1.25,"cMask":["ball"],"trait":"ballArea","x":1200},{"v0":57,"v1":58,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":72,"v1":73,"trait":"kickOffBarrier"},{"v0":81,"v1":82,"curve":0,"vis":true,"color":"002033","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":93,"v1":94,"curve":180,"vis":true,"color":"D64433","cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":93,"v1":94,"curve":-180,"vis":true,"color":"312CC7","cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"FFFFFF","trait":"kickOffBarrier"},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"trait":"ballArea","y":600},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":1200},{"v0":111,"v1":112,"curve":-30,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":121,"v1":122,"vis":false,"bCoef":1,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","x":-707},{"v0":123,"v1":124,"vis":false,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","x":-1207},{"v0":125,"v1":126,"vis":false,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","x":1207},{"v0":127,"v1":128,"vis":false,"bCoef":1.5,"cMask":["ball"],"cGroup":["ball"],"trait":"ballArea","x":1207},{"v0":129,"v1":130,"curve":-78.04299828129,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":132,"v1":133,"curve":0,"vis":true,"color":"F80000","bCoef":0,"cMask":[""],"trait":"line","radius":6,"x":-1200},{"v0":134,"v1":135,"curve":0,"vis":true,"color":"0000F8","bCoef":0,"cMask":[""],"trait":"line","x":1200},{"v0":139,"v1":138,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":138,"v1":139,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":141,"v1":140,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":140,"v1":141,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":143,"v1":142,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":142,"v1":143,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":145,"v1":144,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":144,"v1":145,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":780.5},{"v0":147,"v1":146,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":149,"v1":148,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":151,"v1":150,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":153,"v1":152,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":131,"v1":154,"curve":78.04299828129,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":155,"v1":156,"curve":-30,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":157,"v1":158,"curve":-78.04299828129,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":[""],"trait":"line"},{"v0":162,"v1":161,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":161,"v1":162,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":164,"v1":163,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":163,"v1":164,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":166,"v1":165,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":165,"v1":166,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":168,"v1":167,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":167,"v1":168,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0.1,"trait":"line","x":-780.5},{"v0":159,"v1":169,"curve":78.04299828129,"vis":true,"color":"F8F8F8","bCoef":0,"trait":"line"},{"v0":95,"v1":170,"vis":false,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":92,"v1":171,"vis":false,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":172,"v1":173,"curve":207.8139960563378,"color":"002033","cMask":["wall"]},{"v0":174,"v1":175,"color":"002033","cMask":["wall"]},{"v0":176,"v1":177,"color":"002033","cMask":["wall"]},{"v0":178,"v1":179,"curve":0,"color":"002033","cMask":["wall"]},{"v0":180,"v1":181,"color":"002033","cMask":["wall"]},{"v0":182,"v1":183,"curve":-35.38936961355241,"color":"002033","cMask":["wall"]},{"v0":181,"v1":184,"curve":-175.63172619118885,"color":"002033","cMask":["wall"]},{"v0":184,"v1":181,"curve":-175.63172619118785,"color":"002033","cMask":["wall"]},{"v0":185,"v1":186,"curve":129.92301812043758,"color":"002033","cMask":["wall"]},{"v0":187,"v1":188,"curve":-172.79271905659064,"color":"002033","cMask":["wall"]},{"v0":188,"v1":187,"curve":-172.79271905654446,"color":"002033","cMask":["wall"]},{"v0":185,"v1":189,"color":"FF8214","cMask":["wall"]},{"v0":189,"v1":190,"color":"FF8214","cMask":["wall"]},{"v0":190,"v1":191,"curve":27.08640721358802,"color":"FF8214","cMask":["wall"]},{"v0":191,"v1":185,"color":"FF8214","cMask":["wall"]},{"v0":192,"v1":193,"color":"FF8214","cMask":["wall"]},{"v0":194,"v1":195,"curve":-42.44780315689607,"color":"FF8214","cMask":["wall"]},{"v0":194,"v1":196,"color":"CCDBEB","cMask":["wall"]},{"v0":197,"v1":198,"color":"CCDBEB","cMask":["wall"]},{"v0":199,"v1":200,"color":"CCDBEB","cMask":["wall"]},{"v0":201,"v1":202,"color":"CCDBEB","cMask":["wall"]},{"v0":203,"v1":204,"color":"CCDBEB","cMask":["wall"]},{"v0":203,"v1":201,"color":"FF8214","cMask":["wall"]},{"v0":197,"v1":201,"color":"FF8214","cMask":["wall"]},{"v0":197,"v1":201,"color":"FF8214","cMask":["wall"]},{"v0":204,"v1":204,"color":"565D63","cMask":["wall"]},{"v0":206,"v1":207,"color":"565D63","cMask":["wall"]},{"v0":208,"v1":209,"color":"CCDBEB","cMask":["wall"],"x":398},{"v0":210,"v1":211,"color":"FF421C","cMask":["wall"]},{"v0":212,"v1":213,"curve":29.824758819529286,"color":"454D4F","cMask":["wall"]},{"v0":214,"v1":215,"curve":-30.057469175665297,"color":"454D4F","cMask":["wall"]},{"v0":216,"v1":217,"curve":29.732344702855656,"color":"454D4F","cMask":["wall"]},{"v0":218,"v1":219,"curve":-35.38936961355241,"color":"002033","cMask":["wall"]},{"v0":220,"v1":221,"color":"002033","cMask":["wall"]},{"v0":222,"v1":223,"color":"002033","cMask":["wall"]},{"v0":224,"v1":225,"curve":0,"color":"002033","cMask":["wall"]},{"v0":226,"v1":227,"color":"002033","cMask":["wall"]},{"v0":228,"v1":229,"curve":207.8139960563378,"color":"002033","cMask":["wall"]},{"v0":231,"v1":230,"curve":-175.63172619118785,"color":"002033","cMask":["wall"]},{"v0":232,"v1":233,"curve":-175.63172619118885,"color":"002033","cMask":["wall"]},{"v0":234,"v1":235,"color":"CCDBEB","cMask":["wall"]},{"v0":236,"v1":237,"curve":27.08640721358802,"color":"FF8214","cMask":["wall"]},{"v0":238,"v1":239,"curve":-30.057469175665297,"color":"454D4F","cMask":["wall"]},{"v0":240,"v1":241,"curve":29.824758819529286,"color":"454D4F","cMask":["wall"]},{"v0":242,"v1":243,"curve":29.732344702855656,"color":"454D4F","cMask":["wall"]},{"v0":244,"v1":245,"curve":27.08640721358802,"color":"FF8214","cMask":["wall"]},{"v0":246,"v1":247,"curve":-116.1624273758514,"color":"FF8214","cMask":["wall"]},{"v0":248,"v1":249,"curve":-175.63172619118885,"color":"002033","cMask":["wall"]},{"v0":250,"v1":251,"curve":27.08640721358802,"color":"FF8214","cMask":["wall"]}],"goals":[{"p0":[1207.4400000000003,-120.96000000000002],"p1":[1208.5200000000002,117.72000000000003],"team":"blue"},{"p0":[-1207.5,-120],"p1":[-1207.5,120],"team":"red"},{"p0":[1207.5,120],"p1":[1207.5,-120],"team":"blue"},{"p0":[-1203.5019907457913,-118.00099537289556],"p1":[-1203.5019907457913,121.99900462710444],"team":"red"},{"p0":[1207.5,120],"p1":[1207.5,-120],"team":"blue"}],"discs":[{"radius":6,"pos":[-1200,119.97857730560001],"color":"FF0000","trait":"goalPost"},{"radius":6,"pos":[-1200,-119.49440000000001],"color":"FF0000","trait":"goalPost"},{"radius":6,"pos":[1200,120],"color":"0033FF","trait":"goalPost"},{"radius":6,"pos":[1200,-120],"color":"0033FF","trait":"goalPost"},{"radius":6,"pos":[-1200,120],"color":"FF0000","trait":"goalPost"},{"radius":6,"pos":[-1200,-120],"color":"FF0000","trait":"goalPost"},{"radius":6,"pos":[-1200,120],"color":"FF0000","trait":"goalPost"},{"radius":6,"pos":[-1200,-120],"color":"FF0000","trait":"goalPost"},{"radius":6.986114819759679,"pos":[-1200,120],"color":"ffffff","trait":"goalPost"},{"radius":6.986114819759679,"pos":[-1200,-120],"color":"ffffff","trait":"goalPost"},{"radius":6,"pos":[1200,120],"color":"ffffff","trait":"goalPost"},{"radius":6,"pos":[1200,-120],"color":"ffffff","trait":"goalPost"},{"radius":3,"invMass":0,"pos":[-1200,600],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-1200,-600],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[1200,-600],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[1200,600],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":6,"pos":[1200,120],"color":"0033FF","trait":"goalPost"},{"radius":6.986114819759679,"pos":[1200,120],"color":"FFFFFF","trait":"goalPost"},{"radius":6,"pos":[1200,-120],"color":"0033FF","trait":"goalPost"},{"radius":6.986114819759679,"pos":[1200,-120],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-600,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-600],"b":[1500,-600]}}},{"normal":[0,-1],"dist":-600,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,600],"b":[1500,600]}}},{"normal":[0,1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-660],"b":[1500,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,660],"b":[1500,660]}}},{"normal":[1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1330,-1100],"b":[-1330,1100]}}},{"normal":[-1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[1330,-1100],"b":[1330,1100]}}},{"normal":[0,1],"dist":-600,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-600],"b":[1500,-600]}}},{"normal":[0,-1],"dist":-600,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,600],"b":[1500,600]}}},{"normal":[0,1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-660],"b":[1500,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,660],"b":[1500,660]}}},{"normal":[1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1330,-1100],"b":[-1330,1100]}}},{"normal":[-1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[1330,-1100],"b":[1330,1100]}}},{"normal":[0,1],"dist":-600,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-600],"b":[1500,-600]}}},{"normal":[0,-1],"dist":-600,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,600],"b":[1500,600]}}},{"normal":[0,1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-660],"b":[1500,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,660],"b":[1500,660]}}},{"normal":[1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1330,-1100],"b":[-1330,1100]}}},{"normal":[-1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[1330,-1100],"b":[1330,1100]}}},{"normal":[0,1],"dist":-600,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[0,1],"dist":-600,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-600],"b":[1500,-600]}}},{"normal":[0,1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,-660],"b":[1500,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1500,660],"b":[1500,660]}}},{"normal":[1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[-1330,-1100],"b":[-1330,1100]}}},{"normal":[-1,0],"dist":-1330,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1330,"canvas_rect":[-1500,-1100,1500,1100],"a":[1330,-1100],"b":[1330,1100]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.115,"kickingAcceleration":0.083,"kickStrength":5,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.4,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"03DDFF","cMask":["all"],"gravity":[0,0],"cGroup":["ball"]},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","canBeStored":true,"kickOffReset":"partial"}';

//LOGS CHATS (WEBHOOK)

function DiscordLogs(message) {
	var request = new XMLHttpRequest();
	request.open("POST", webhook,);

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
var webhook = "https://discord.com/api/webhooks/1198621247941128282/2UrrN2cVsWTTEmJ9Dv1ZTBd44qEC7g0QVqWRIQkC2p7OZjy3CrvQRQAEhwZLYkwp10Wg";

// END WEBHOOK LOG

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
var banList = ["3138362E31322E3230342E313936", "3138312E32382E3138372E313430", "3138362E35322E36382E323438", "3136372E35392E38342E323233", "3139302E3131332E3138302E3236", "3136372E36322E3132312E3234", "3138312E34372E32312E313331", "3137392E36322E3139352E3734", "3136382E3232372E39382E323431", "3137372E3232322E3130382E313039", "3139302E3132332E38352E313230", "3139302E3131342E3130342E3435", "3139302E3138332E38302E3434", "3139302E3234372E3130352E3632", "3230312E3139302E3233312E3835", "3138312E32382E3138372E313430", "3138312E33312E3138302E313034", "3139302E3132332E38352E313230", "3139302E3133382E3133352E36", "3139302E3132332E38352E313230", "3135322E3137322E3134342E323132", "3139302E332E35302E3939", "3138312E36372E34332E313830", "3138312E36372E34332E313830"];

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
        room.sendAnnouncement("🙋‍♂️⏰ EL EQUIPO " + currentTeams[0].longName + " GANA EL PARTIDO! [" + scores.red + " - " + scores.blue + "]", null, 0x6ECAFF, 'bold');
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🙋‍♂️⏰ EL EQUIPO " + currentTeams[1].longName + " GANA EL PARTIDO! [" + scores.blue + " - " + scores.red + "]", null, 0x6ECAFF, 'bold');
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Tiempo excedido...");
    }
    //room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    if (GKList.length > 1) {
        if (scores.red == 0 && GKList[1]) {
            room.sendAnnouncement("🧤 Y VALLA INVICTA PARA " + GKList[1].name + "! 🧤", null, 0x7DFA89, 'bold');
        } else if (scores.blue == 0 && GKList[0]) {
            room.sendAnnouncement("🧤 Y VALLA INVICTA PARA " + GKList[0].name + "! 🧤", null, 0x7DFA89, 'bold');
        }
    }


    //Object.keys(obj)[0]
    Object.entries(goalDictionary).sort((a, b) => b[1] - a[1]);
    var topGoalScorerId = Object.keys(goalDictionary)[0];
    var topGoals = goalDictionary[topGoalScorerId];
    var topGoalScorer = room.getPlayerList().filter((player) => player.id == topGoalScorerId)[0];
    //⚽
    if (topGoalScorer != undefined && topGoalScorer.name != undefined && scores.red + scores.blue > 0) {
        room.sendAnnouncement("⚽🥅 " + topGoalScorer.name + " FUE EL GOLEADOR DEL PARTIDO CON " + topGoals + " GOLES! ⚽", null, 0xFFFF17, 'bold');
    }

    updateStats();
    sendDiscordWebhook(scores);
    room.sendAnnouncement("🎥 ¡EL PARTIDO FUÉ GRABADO Y SE ENVIÓ A NUESTRO DISCORD!: " + `SINDICATOREPLAY-${getDate()}-${roomNumber + 1}.hbr2`, null, Colors.Branco, 'bold');

}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 3000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
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
                var style = 'normal';
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
        room.sendAnnouncement("✅ Estadisticas guardadas! ✅", null, Colors.Branco, 'normal');
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
    room.sendAnnouncement("🔥 ¡COMIENZA LA FINAL PARALÍMPICA Y LOS EQUIPOS SALEN A LA CANCHA! ♿ ", null, 0x6ECAFF, 'bold');
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
        room.kickPlayer(player.id, "Estás baneado permanentemente.", true);
    }

    let pData = localStorage.getItem(player.auth);
    var playerRole = pData != null ? JSON.parse(pData)[StatColumns.ROLE] : "player";

    if (["master", "head", "admin", "cm", "mod"].includes(playerRole)) {
        room.setPlayerAdmin(player.id, true);
    } else {
        var adminCount = room.getPlayerList().filter((player) => player.id != 0 && player.admin).length;
        slotsAvailable = maxPlayers - (3 - Math.min(3, adminCount));
        if (players.length >= slotsAvailable) {
            room.kickPlayer(player.id, "Slot reservado para staffs y vips!", false); eP.ACT
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
        "IP: " + player.conn + " 🌎" + "\n" +
        "AUTH: " + player.auth + " 💻" + "\n" +
        "FECHA: " + `${getDateInfo()}` + "```", webhook);

    room.sendAnnouncement(
        `♿ ¡BIENVENIDO AL SINDICATO! ${player.name} ♿\n⭐ Utiliza !ayuda para ver los comandos!\n🔹Ingresa a nuestro discord para enterarte nuevas noticias!`,
        player.id,
        0x6ECAFF,
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
                `🌅 ${player.name} no esta mas AFK!`,
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
                        AFKSet.delete(id);
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
            balanceTeams();
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
};

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
        room.sendAnnouncement("「📌」Utiliza !gk para ser el arquero de el equipo!", null, 0xFF5E3B, "bold", 1);
        room.sendAnnouncement("「📌」¡Escribe la 't' al principio de tu mensaje para enviar un mensaje al equipo!", null, 0xFF5E3B, "bold", 1);
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
    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + goalScorer.name + "! | Velocidad: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
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

        room.sendAnnouncement("⚽⚽⚽ " + lastPlayersTouched[0].name + " HIZO UN HAT TRICK!" + (team == Team.RED ? "🔴🔴🔴" : "🔵🔵🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
    } else if (ballSpeed.toPrecision(4) > 100) {
        room.sendAnnouncement("💥💥💥 " + goalScorer.name + " REVENTO EL ARCO, LA PELOTA IBA A " + ballSpeed.toPrecision(4) + "km/h!" + (team == Team.RED ? "🔴🔴🔴" : "🔵🔵🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
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
            room.sendAnnouncement("con " + passCombo + " pases seguidos!", null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
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
                room.sendAnnouncement("👥 " + fraseasis + goalAssist.name + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
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
                    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + goalScorer.name + defenderError + " | Velocidad: " + ballSpeed.toPrecision(4).toString() + " km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
                    game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
                }
            }
        } else if (goalAssist != null && goalAssist.team == team) {
            scoreGoal(goalAssist, team);
        } else {
            var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
            room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + "! | Velocidad: " + ballSpeed.toPrecision(4).toString() + " km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Azulclaro : Colors.Branco), 'normal');
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