const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var argTeams = [
    //{ ID: Team.RED, shortName: "adm", longName: "Admins", country: "Argentina", uniform: [{ angle: 135, mainColor: [0x4187F2, 0X416EE8, 0x314EDE], avatarColor: 0xFFFFFF }] },
    /* KSKS ADMINS VS USUARIOS EVENTO */
    //{ ID: Team.BLUE, shortName: "usrs", longName: "Usuarios", country: "Argentina", uniform: [{ angle: 135, mainColor: [0xE6FCFF, 0XE8E8E8, 0xD4D4D4], avatarColor: 0XFFB300 }] },
    /*ksks futbol argentino*/
    { ID: Team.BLUE, shortName: "boca", longName: "Boca Juniors", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
    { ID: Team.BLUE, shortName: "rosario", longName: "Rosario Central", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x0007D9, 0xD4CD00, 0x0007D9], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "rvp", longName: "River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF5000 }] },
    { ID: Team.RED, shortName: "ind", longName: "Club Atlético Independiente", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "elp", longName: "Estudiantes de La Plata", country: "Argentina", uniform: [{ angle: 180, mainColor: [0xD40B0B, 0xFFFFFF, 0xD40B0B], avatarColor: 0x878787 }] },
    { ID: Team.BLUE, shortName: "casla", longName: "Club Atletico San Lorenzo de Almagro", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xC20000, 0x151575, 0xA10005], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "hur", longName: "Huracan", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0xF2F2F2], avatarColor: 0xFF0000 }] },
    { ID: Team.BLUE, shortName: "tall", longName: "Talleres", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x030354, 0xFFFFFF, 0x030354], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "bel", longName: "Belgrano", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x3D8BFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "new", longName: "Newell's old boys", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.RED, shortName: "col", longName: "Colon", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x9C0000, 0x000000], avatarColor: 0xF0F0F0 }] },
    { ID: Team.RED, shortName: "un", longName: "Union", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "vel", longName: "Club Atletico Velez Sarsfield", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x1228B8, 0xFFFFFF], avatarColor: 0x080606 }] },
    { ID: Team.BLUE, shortName: "god", longName: "Godoy Cruz", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x0000AB, 0xFFFFFF, 0x0000AB], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "def", longName: "Defensa y Justicia", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xF7FF00, 0xF7FF00, 0xF7FF00], avatarColor: 0x19F700 }] },
    { ID: Team.BLUE, shortName: "ajr", longName: "Argentinos Jr", country: "Argentina", uniform: [{ angle: 45, mainColor: [0xD40B0B, 0xFFFFFF, 0xD40B0B], avatarColor: 0xAB0000 }] },
    { ID: Team.RED, shortName: "lan", longName: "Lanus", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x8A0707, 0x8A0707, 0x8A0707], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "cc", longName: "Central Cordoba", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x000000, 0xFAF5F5, 0x000000], avatarColor: 0x8A0707 }] },
    { ID: Team.BLUE, shortName: "rac", longName: "Racing", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x077FE8, 0xE8E8E8, 0x077FE8], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "atl", longName: "Atletico Tucuman", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x9CFFFC, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "barr", longName: "Barracas Central", country: "Argentina", uniform: [{ angle: 180, mainColor: [0xD40B0B, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "inst", longName: "Instituto", country: "Argentina", uniform: [{ angle: 0, mainColor: [0xCC1212, 0xFFFFFF, 0xCC1212], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "sar", longName: "Sarmiento", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x004A0C, 0x004A0C, 0x004A0C], avatarColor: 0xFFBFC3 }] },
    { ID: Team.RED, shortName: "plat", longName: "Platense", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x382420, 0xFFFFFF], avatarColor: 0x7A4F46 }] },
    { ID: Team.BLUE, shortName: "tig", longName: "Tigre", country: "Argentina", uniform: [{ angle: 90, mainColor: [0x0841FF, 0xFF0000, 0x0841FF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "ban", longName: "Banfield", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x06300F, 0xFFFFFF, 0x06300F], avatarColor: 0x000000 }] },
    { ID: Team.BLUE, shortName: "glp", longName: "Gimnasia de la Plata", country: "Argentina", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x00253B, 0xFFFFFF], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Argentina", uniform: [{ angle: 40, mainColor: [0x006FFF, 0xFF0000, 0x006FFF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "rie", longName: "Deportivo Riestra", country: "Argentina", uniform: [{ angle: 45, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x1C1C1C }] },
    /*ksks liga española*/
    { ID: Team.RED, shortName: "atm", longName: "Atlético de Madrid", country: "España", uniform: [{ angle: 180, mainColor: [0xFF0F1F, 0XFFFFFF, 0xFF0F1F], avatarColor: 0x150B75 }] },
    { ID: Team.BLUE, shortName: "cdv", longName: "Celta de Vigo", country: "España", uniform: [{ angle: 90, mainColor: [0x75AFFA, 0X54A8CC, 0x75AFFA], avatarColor: 0XF5F6FF  }] },
    { ID: Team.RED, shortName: "osa", longName: "Osasuna", country: "España", uniform: [{ angle: 180, mainColor: [0xB5142F, 0X150A7A, 0xB5142F], avatarColor: 0XF5F6FF }] },
    { ID: Team.BLUE, shortName: "bet", longName: "Betis", country: "España", uniform: [{ angle: 180, mainColor: [0x1C8009, 0XFFFFFF, 0x1C8009], avatarColor: 0X000000 }] },
    { ID: Team.BLUE, shortName: "vill", longName: "Villareal", country: "España", uniform: [{ angle: 0, mainColor: [0xD6EB1C], avatarColor: 0X0D2F8C }] },
    { ID: Team.BLUE, shortName: "rm", longName: "Real Madrid", country: "España", uniform: [{ angle: 60, mainColor: [0xFFFFFF, 0X000DC7, 0xFFFFFF], avatarColor: 0XFFEE00 }] },
    { ID: Team.BLUE, shortName: "get", longName: "Getafe", country: "España", uniform: [{ angle: 180, mainColor: [0x000BA6, 0X5DFC72, 0x000BA6], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "ath", longName: "Athletic Club", country: "España", uniform: [{ angle: 180, mainColor: [0xFF0022, 0XFCFCFC, 0xFF0022], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "sev", longName: "Sevilla", country: "España", uniform: [{ angle: 90, mainColor: [0XFFFFFF], avatarColor: 0XFF0000 }] },
    { ID: Team.RED, shortName: "bar", longName: "Barcelona", country: "España", uniform: [{ angle: 0, mainColor: [0XC90000, 0X00437D, 0XC90000], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "val", longName: "Valencia", country: "Italia", uniform: [{ angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x000000 }] },
    /*ksks premier league*/
    { ID: Team.RED, shortName: "mutd", longName: "Manchester United", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xEB1515, 0XBA031C, 0xEB1515], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "mci", longName: "Manchester City", country: "Inglaterra", uniform: [{ angle: 180, mainColor: [0x5CB8E0, 0XFFFFFF, 0x5CB8E0], avatarColor: 0xF2F2F2 }] },
    { ID: Team.BLUE, shortName: "che", longName: "Chelsea", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x3423CC], avatarColor: 0xF2F2F2 }] },
    { ID: Team.BLUE, shortName: "tot", longName: "Tottenham", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0XFFFFFF], avatarColor: 0x0D1069 }] },
    { ID: Team.RED, shortName: "liv", longName: "Liverpool", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xD92531], avatarColor: 0xE8E8E8 }] },
    { ID: Team.BLUE, shortName: "ars", longName: "Arsenal", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xCF0606, 0xFFFFFF, 0xCF0606], avatarColor: 0xB5BA1E }] },
    { ID: Team.BLUE, shortName: "brg", longName: "Brighton", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x1D3EE0, 0XEBEBEB, 0x1D3EE0], avatarColor: 0x321FDB }] },
    { ID: Team.RED, shortName: "ast", longName: "Aston Villa", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0xA13C4C, 0X2BB5F0, 0xA13C4C], avatarColor: 0xFFFFFF }] },
    /*ksks selecciones*/
    { ID: Team.BLUE, shortName: "ale", longName: "Alemania", country: "Alemania", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0XD19D0F }] },
    { ID: Team.RED, shortName: "bra", longName: "Brasil", country: "Brasil", uniform: [{ angle: 60, mainColor: [0xC5FF26, 0x1C1CEB, 0xC5FF26], avatarColor: 0X2CC93C }] },
    { ID: Team.BLUE, shortName: "arg", longName: "Argentina", country: "Argentina", uniform: [{ angle: 90, mainColor: [0X75AADB, 0XFFFFFF, 0x75AADB], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "esp", longName: "España", country: "España", uniform: [{ angle: 90, mainColor: [0XFF0000, 0XEEC900, 0xFF0000], avatarColor: 0X000000 }] },
    { ID: Team.RED, shortName: "por", longName: "Portugal", country: "Portugal", uniform: [{ angle: 300, mainColor: [0x006400, 0X8B0000, 0x8B0000], avatarColor: 0xFFD700 }] },
    { ID: Team.RED, shortName: "hol", longName: "Paises Bajos", country: "Holanda", uniform: [{ angle: 0, mainColor: [0xED6313], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "fr", longName: "Francia", country: "Francia", uniform: [{ angle: 45, mainColor: [0x0F1378, 0x0C0E5C, 0x090B47], avatarColor: 0x73730F }] },
    { ID: Team.BLUE, shortName: "ing", longName: "Inglaterra", country: "Inglaterra", uniform: [{ angle: 45, mainColor: [0xFFFFFF, 0xFFFFFF, 0x34A1E0], avatarColor: 0x1F1F54 }] },
    { ID: Team.BLUE, shortName: "ita", longName: "Italia", country: "Italia", uniform: [{ angle: 223, mainColor: [0x152ECF, 0x1221A8, 0x0D0DD6], avatarColor: 0xEDEBEB }] },
    { ID: Team.BLUE, shortName: "uru", longName: "Uruguay", country: "Uruguay", uniform: [{ angle: 45, mainColor: [0x4392ED, 0x3A7ECC, 0x316CAD], avatarColor: 0x000000 }] },
    { ID: Team.RED, shortName: "mex", longName: "México", country: "Mexico", uniform: [{ angle: 0, mainColor: [0x134F07, 0xFFFFFF, 0xD90000], avatarColor: 0x573131 }] },
    { ID: Team.RED, shortName: "chi", longName: "Chile", country: "Chile", uniform: [{ angle: 0, mainColor: [0XF50000], avatarColor: 0XFFFFFF }] },
    { ID: Team.RED, shortName: "per", longName: "Perú", country: "Peru", uniform: [{ angle: 35, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0X000000 }] },
    /*special ksks*/
    { ID: Team.BLUE, shortName: "psg", longName: "París Saint-Germain", country: "Francia", uniform: [{ angle: 180, mainColor: [0x000080, 0xB22222, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "int", longName: "Inter de Miami", country: "Estados Unidos", uniform: [{ angle: 60, mainColor: [0x000000, 0x121212, 0x000000], avatarColor: 0xFF00F7 }] },
    { ID: Team.BLUE, shortName: "ints", longName: "Inter de Milán", country: "Italia", uniform: [{ angle: 0, mainColor: [0x2519CF, 0x000000, 0x2519CF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "acmi", longName: "A. C. Milan", country: "Italia", uniform: [{ angle: 0, mainColor: [0xEB0000, 0x000000, 0xEB0000], avatarColor: 0x989C27 }] },
    { ID: Team.BLUE, shortName: "fio", longName: "Fiorentina", country: "Italia", uniform: [{ angle: 45, mainColor: [0x8F28B5, 0x671E82, 0x8F28B5], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "rom", longName: "Roma", country: "Italia", uniform: [{ angle: 0, mainColor: [0xC10B31], avatarColor: 0xf5b602 }] },
    { ID: Team.RED, shortName: "lep", longName: "Leipzig", country: "Alemania", uniform: [{ angle: 90, mainColor: [0XFAF9FF, 0xDC002C, 0XFAF9FF], avatarColor: 0xFFFFFF }] },
    { ID: Team.RED, shortName: "lev", longName: "Bayern Leverkusen", country: "Alemania", uniform: [{ angle: 0, mainColor: [0x000000, 0xFD0808, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "bor", longName: "Borussia Dortmund", country: "Alemania", uniform: [{ angle: 0, mainColor: [0xF5FD00, 0x000000, 0xF5FD00], avatarColor: 0x2E2E2E }] },
    { ID: Team.RED, shortName: "bay", longName: "Bayern Munich", country: "Alemania", uniform: [{ angle: 90, mainColor: [0xFF0800, 0xC20003, 0xFF0800], avatarColor: 0xFFFFFF }] },
    { ID: Team.BLUE, shortName: "juv", longName: "Juventus", country: "Italia", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xD6D2D3 }] },
    { ID: Team.RED, shortName: "nap", longName: "Napoli", country: "Italia", uniform: [{ angle: 0, mainColor: [0x429AE8], avatarColor: 0xFFFFFF }] },

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
var minAFKDuration = 30;
var maxAFKDuration = 20;
var AFKCooldown = 5;
var adminCommandTimeout = true;
const token = "thr1.AAAAAGTLV-T5JcL2AkgrXg.wSrqbN3Ar20";
var goalDictionary = {};
/* ROOM */
const roomNumber = 0;
const roomName = "⭐ SINDICATO DEL HAX ⭐ | #JueganTodosCon♿ (" + (roomNumber + 1) + ")";
//const roomName = "⭐ SINDICATO DEL HAX ⭐ | #JueganTodosCon♿ 2";
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
var trainingMap = '{"name":"Sindicato del Hax/Training","width":800,"height":350,"bg":{"width":700,"height":320,"kickOffRadius":100,"color":"404447"},"vertexes":[/* 0 */{"x":701,"y":320,"cMask":["ball"]},/* 1 */{"x":698,"y":-317,"cMask":["ball"]},/* 2 */{"x":699,"y":-204.254477919468,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 3 */{"x":740,"y":-204.254477919468,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 4 */{"x":740,"y":-44.25447791946799,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 5 */{"x":699,"y":-44.25447791946799,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},/* 6 */{"x":-700,"y":205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 7 */{"x":-700,"y":321,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 8 */{"x":-700,"y":-205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 9 */{"x":-700,"y":-319,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 10 */{"x":-700,"y":320,"cMask":["ball"],"color":"00FFDD"},/* 11 */{"x":701,"y":320,"cMask":["ball"],"color":"00FFDD"},/* 12 */{"x":700,"y":-44.25447791946799,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 13 */{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 14 */{"x":700,"y":-317,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 15 */{"x":700,"y":-204.254477919468,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 16 */{"x":698,"y":-317,"bCoef":0,"cMask":["ball"]},/* 17 */{"x":698,"y":-317,"bCoef":0,"cMask":["ball"]},/* 18 */{"x":-701,"y":-320,"cMask":["ball"],"color":"00FFDD"},/* 19 */{"x":698,"y":-320,"cMask":["ball"],"color":"00FFDD"},/* 20 */{"x":-707.5,"y":-320,"cMask":["ball"]},/* 21 */{"x":-707.5,"y":-205,"cMask":["ball"]},/* 22 */{"x":707.5,"y":-319,"cMask":["ball"]},/* 23 */{"x":707.5,"y":-206.254477919468,"cMask":["ball"]},/* 24 */{"x":707.5,"y":-43.25447791946799,"cMask":["ball"]},/* 25 */{"x":707.5,"y":321,"cMask":["ball"]},/* 26 */{"x":-700,"y":110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 27 */{"x":-700,"y":205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 28 */{"x":700,"y":-204.254477919468,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 29 */{"x":700,"y":-44.25447791946799,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 30 */{"x":703,"y":-319,"bCoef":0,"cMask":["ball"]},/* 31 */{"x":703,"y":-206.254477919468,"bCoef":0,"cMask":["ball"]},/* 32 */{"x":703,"y":-43.25447791946799,"bCoef":0,"cMask":["ball"]},/* 33 */{"x":703,"y":321,"bCoef":0,"cMask":["ball"]},/* 34 */{"x":-703,"y":-205,"bCoef":0,"cMask":["ball"]},/* 35 */{"x":-703,"y":-321,"bCoef":0,"cMask":["ball"]},/* 36 */{"x":705,"y":-204.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 37 */{"x":705,"y":-44.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 38 */{"x":715,"y":-204.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 39 */{"x":715,"y":-44.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"curve":80,"vis":false},/* 40 */{"x":699,"y":-214.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 41 */{"x":740,"y":-214.254477919468,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 42 */{"x":740,"y":-34.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 43 */{"x":699,"y":-34.25447791946799,"bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"vis":false},/* 44 */{"x":0,"y":320,"bCoef":1.15,"cMask":["ball"]},/* 45 */{"x":-700,"y":-110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 46 */{"x":-700,"y":110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 47 */{"x":-700,"y":-10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 48 */{"x":0,"y":-10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 49 */{"x":-720,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 50 */{"x":-700,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 51 */{"x":-720,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 52 */{"x":-700,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 53 */{"x":-720,"y":205,"bCoef":2,"cMask":["ball"]},/* 54 */{"x":-720,"y":110,"bCoef":2,"cMask":["ball"]},/* 55 */{"x":0,"y":205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 56 */{"x":0,"y":321,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 57 */{"x":0,"y":-110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 58 */{"x":0,"y":110,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 59 */{"x":0,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 60 */{"x":20,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 61 */{"x":0,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 62 */{"x":20,"y":205,"bCoef":0.5,"cMask":["ball"]},/* 63 */{"x":20,"y":205,"bCoef":2,"cMask":["ball"]},/* 64 */{"x":20,"y":110,"bCoef":2,"cMask":["ball"]},/* 65 */{"x":0,"y":110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 66 */{"x":0,"y":205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 67 */{"x":-707.5,"y":-110,"cMask":["ball"]},/* 68 */{"x":-707.5,"y":110,"cMask":["ball"]},/* 69 */{"x":-703,"y":-110,"cMask":["ball"]},/* 70 */{"x":-703,"y":110,"cMask":["ball"]},/* 71 */{"x":-720,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 72 */{"x":-700,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 73 */{"x":-720,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 74 */{"x":-700,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 75 */{"x":-720,"y":-110,"bCoef":2,"cMask":["ball"]},/* 76 */{"x":-720,"y":-205,"bCoef":2,"cMask":["ball"]},/* 77 */{"x":-700,"y":-205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 78 */{"x":-700,"y":-110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 79 */{"x":0,"y":-205,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 80 */{"x":0,"y":-110,"bCoef":0.1,"cMask":[],"color":"0080ff"},/* 81 */{"x":0,"y":-205,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 82 */{"x":0,"y":-320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 83 */{"x":0,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 84 */{"x":20,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 85 */{"x":0,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 86 */{"x":20,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 87 */{"x":20,"y":-205,"bCoef":2,"cMask":["ball"]},/* 88 */{"x":20,"y":-110,"bCoef":2,"cMask":["ball"]},/* 89 */{"x":-700,"y":10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 90 */{"x":0,"y":10,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 91 */{"x":-707.5,"y":320,"cMask":["ball"]},/* 92 */{"x":-707.5,"y":205,"cMask":["ball"]},/* 93 */{"x":-703,"y":205,"bCoef":0,"cMask":["ball"],"color":"00FFDD"},/* 94 */{"x":-703,"y":320,"bCoef":0,"cMask":["ball"],"color":"00FFDD"},/* 95 */{"x":-700,"y":0,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 96 */{"x":0,"y":0,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 97 */{"x":-700,"y":4,"bCoef":1.15,"cMask":["ball"],"vis":false,"curve":0},/* 98 */{"x":0,"y":4,"bCoef":1.15,"cMask":["ball"],"vis":false,"curve":0},/* 99 */{"x":-700,"y":-4,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 100 */{"x":0,"y":-4,"bCoef":1.15,"cMask":["ball"],"vis":false},/* 101 */{"x":-730,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 102 */{"x":-700,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 103 */{"x":-730,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 104 */{"x":-700,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 105 */{"x":-730,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 106 */{"x":-700,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 107 */{"x":-730,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 108 */{"x":-700,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 109 */{"x":-730,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 110 */{"x":-700,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 111 */{"x":-730,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 112 */{"x":-700,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 113 */{"x":-730,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 114 */{"x":-700,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 115 */{"x":-730,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 116 */{"x":-700,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 117 */{"x":-730,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 118 */{"x":-700,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 119 */{"x":-730,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 120 */{"x":-700,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 121 */{"x":40,"y":-320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 122 */{"x":40,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 123 */{"x":0,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 124 */{"x":35,"y":-100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 125 */{"x":35,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 126 */{"x":0,"y":-105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 127 */{"x":35,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 128 */{"x":0,"y":-102,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 129 */{"x":0,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 130 */{"x":35,"y":-215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 131 */{"x":0,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 132 */{"x":35,"y":-220,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 133 */{"x":0,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 134 */{"x":35,"y":-210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 135 */{"x":29,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 136 */{"x":29,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 137 */{"x":33,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 138 */{"x":33,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 139 */{"x":25,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 140 */{"x":25,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 141 */{"x":34,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 142 */{"x":0,"y":100,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 143 */{"x":35,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 144 */{"x":0,"y":105,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 145 */{"x":0,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 146 */{"x":35,"y":215,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 147 */{"x":0,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 148 */{"x":35,"y":210,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 149 */{"x":40,"y":75,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 150 */{"x":700,"y":75,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 151 */{"x":380,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 152 */{"x":380,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 153 */{"x":360,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 154 */{"x":360,"y":320,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 155 */{"x":40,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 156 */{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"],"color":"00FFDD"},/* 157 */{"x":35,"y":-320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 158 */{"x":35,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 159 */{"x":35,"y":82.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 160 */{"x":700,"y":82.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 161 */{"x":35,"y":83.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 162 */{"x":700,"y":83.5,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 163 */{"x":372.5,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 164 */{"x":372.5,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 165 */{"x":369.5,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 166 */{"x":369.5,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 167 */{"x":367,"y":90,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 168 */{"x":367,"y":320,"bCoef":0.5,"cMask":["ball"],"vis":false},/* 169 */{"x":7.5,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 170 */{"x":7.5,"y":-320,"bCoef":0.5,"cMask":["ball"]},/* 171 */{"x":7.5,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 172 */{"x":7.5,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 173 */{"x":7.5,"y":205,"cMask":["ball"]},/* 174 */{"x":7.5,"y":320,"cMask":["ball"]},/* 175 */{"x":3,"y":320,"bCoef":0,"cMask":["ball"]},/* 176 */{"x":3,"y":205,"bCoef":0,"cMask":["ball"]},/* 177 */{"x":12,"y":-205,"bCoef":0.5,"cMask":["ball"]},/* 178 */{"x":12,"y":-320,"bCoef":0.5,"cMask":["ball"]},/* 179 */{"x":12,"y":110,"bCoef":0,"cMask":["ball"]},/* 180 */{"x":12,"y":-110,"bCoef":0,"cMask":["ball"]},/* 181 */{"x":13,"y":205,"cMask":["ball"]},/* 182 */{"x":13,"y":320,"cMask":["ball"]},/* 183 */{"x":3.5,"y":110,"bCoef":0.5,"cMask":["ball"]},/* 184 */{"x":3.5,"y":-110,"bCoef":0.5,"cMask":["ball"]},/* 185 */{"x":387.7393536000001,"y":-70.74542592000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 186 */{"x":338.7617510400001,"y":-115.64156160000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 187 */{"x":396.1038412800001,"y":-79.21069056000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 188 */{"x":406.78619904000016,"y":-89.79227136000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 189 */{"x":378.1151539200001,"y":-100.47462912000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 190 */{"x":352.3666406400001,"y":-96.59471616000002,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 191 */{"x":340.1222400000001,"y":-151.01427456000005,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 192 */{"x":345.8665267200001,"y":-127.98673920000005,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 193 */{"x":344.7075916800001,"y":-182.20474368000006,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 194 */{"x":332.7729868800002,"y":-181.23989760000003,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 195 */{"x":374.33601792000013,"y":-130.40538624000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 196 */{"x":352.0800000000001,"y":-157.68000000000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 197 */{"x":335.8800000000001,"y":-161.99999999999997,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 198 */{"x":341.2800000000001,"y":-172.80000000000004,"bCoef":0,"cMask":["wall"],"cGroup":["wall"]},/* 199 */{"x":366.8658962962964,"y":-150.49730370370378,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 200 */{"x":375.23520000000013,"y":-161.95680000000007,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 201 */{"x":389.06560000000013,"y":-170.28800000000007,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 202 */{"x":386.25120000000015,"y":-139.96800000000005,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7","_selected":"segment"},/* 203 */{"x":404.74080000000015,"y":-164.46240000000006,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7","_selected":"segment"},/* 204 */{"x":403.3152000000001,"y":-124.80480000000004,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 205 */{"x":434.80800000000016,"y":-125.97120000000004,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 206 */{"x":402.14880000000016,"y":-107.30880000000003,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 207 */{"x":435.9744000000002,"y":-107.30880000000003,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 208 */{"x":417.756977777778,"y":-122.9529481481482,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 209 */{"x":421.496651851852,"y":-106.86382222222227,"cMask":["wall"],"cGroup":["wall"],"color":"0FFFF7"},/* 210 */{"x":-583.3232464896003,"y":-318.84419266560013,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 211 */{"x":-346.76142612480015,"y":-318.84419266560013,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 212 */{"x":-96.97565306880003,"y":-321.7828488192001,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 213 */{"x":-96.68082966921219,"y":-288.27581246373904,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 214 */{"x":97.68798332043269,"y":-320.48513826177043,"cMask":["ball"],"cGroup":["wall"]},/* 215 */{"x":97.8472296692122,"y":-288.27581246373904,"cMask":["ball"],"cGroup":["wall"]},/* 216 */{"x":-97.68798332043269,"y":320.48513826177043,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 217 */{"x":97.68798332043269,"y":320.48513826177043,"cMask":["ball"],"cGroup":["wall"]},/* 218 */{"x":98.26770399215619,"y":288.27581246373904,"cMask":["ball"],"cGroup":["wall"]},/* 219 */{"x":-346.9246848000002,"y":-268.01632512000015,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 220 */{"x":349.6456627200002,"y":-319.7149056000002,"cMask":["ball"],"cGroup":["wall"]},/* 221 */{"x":350.4238848000002,"y":-268.01632512000015,"cMask":["ball"],"cGroup":["wall"]},/* 222 */{"x":-349.6456627200002,"y":319.7149056000002,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"vis":false},/* 223 */{"x":349.6456627200002,"y":319.7149056000002,"cMask":["ball"],"cGroup":["wall"]},/* 224 */{"x":-583.6497638400003,"y":-289.78414848000006,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 225 */{"x":583.6497638400003,"y":-318.3544166400002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 226 */{"x":584.8161638400004,"y":-285.67909232640005,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 227 */{"x":-583.6497638400003,"y":318.3544166400002,"bCoef":5,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF","vis":false},/* 228 */{"x":583.6497638400003,"y":318.3544166400002,"cMask":["ball"],"cGroup":["wall"]},/* 229 */{"x":583.6497638400003,"y":289.78414848000006,"cMask":["ball"],"cGroup":["wall"]},/* 230 */{"x":134.68840704000007,"y":-321.0753945600002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 231 */{"x":134.68840704000007,"y":-285.7026816000002,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},/* 232 */{"x":-692.2478986454244,"y":-22.211162523382598,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 233 */{"x":-12.956511471973181,"y":-20.360232313100713,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 234 */{"x":-690.3969684351424,"y":-309.1053451170745,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]},/* 235 */{"x":-11.105581261691299,"y":-309.1053451170745,"bCoef":5,"cMask":["ball"],"cGroup":["wall"]}],"segments":[{"v0":2,"v1":3,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":3,"v1":4,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":4,"v1":5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":6,"v1":7,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":8,"v1":9,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":10,"v1":11,"color":"00FFDD","cMask":["ball"]},{"v0":12,"v1":13,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":14,"v1":15,"color":"00FFDD","bCoef":1.15,"cMask":["ball"]},{"v0":16,"v1":17,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":18,"v1":19,"color":"00FFDD","cMask":["ball"]},{"v0":20,"v1":21,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":22,"v1":23,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":24,"v1":25,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":26,"v1":27,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":28,"v1":29,"color":"0080ff","bCoef":0.1,"cMask":[]},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":36,"v1":37,"curve":80,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"]},{"v0":38,"v1":39,"curve":80,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"x":715},{"v0":40,"v1":41,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"y":-90},{"v0":42,"v1":43,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["red","blue"],"y":90},{"v0":45,"v1":46,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700},{"v0":47,"v1":48,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700,"y":80},{"v0":49,"v1":50,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750},{"v0":51,"v1":52,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":150},{"v0":53,"v1":54,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":-750,"y":180},{"v0":55,"v1":56,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":57,"v1":58,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":59,"v1":60,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":150},{"v0":61,"v1":62,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750},{"v0":63,"v1":64,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":20,"y":180},{"v0":65,"v1":66,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":67,"v1":68,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":69,"v1":70,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":-703},{"v0":71,"v1":72,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-225},{"v0":73,"v1":74,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":75,"v1":76,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":-750,"y":180},{"v0":77,"v1":78,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":79,"v1":80,"color":"0080ff","bCoef":0.1,"cMask":[],"x":-680},{"v0":81,"v1":82,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":0},{"v0":83,"v1":84,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":85,"v1":86,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-225},{"v0":87,"v1":88,"color":"F8F8F8","bCoef":2,"cMask":["ball"],"x":20,"y":180},{"v0":89,"v1":90,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":-700,"y":80},{"v0":91,"v1":92,"vis":false,"color":"F8F8F8","cMask":["ball"]},{"v0":93,"v1":94,"vis":false,"color":"00FFDD","bCoef":0,"cMask":["ball"]},{"v0":95,"v1":96,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":0},{"v0":97,"v1":98,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":4},{"v0":99,"v1":100,"vis":false,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"x":-700,"y":-4},{"v0":101,"v1":102,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-215},{"v0":103,"v1":104,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-102},{"v0":105,"v1":106,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":100},{"v0":107,"v1":108,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":215},{"v0":109,"v1":110,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":210},{"v0":111,"v1":112,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":105},{"v0":113,"v1":114,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-105},{"v0":115,"v1":116,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-220},{"v0":117,"v1":118,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-210},{"v0":119,"v1":120,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":121,"v1":122,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":40,"y":180},{"v0":123,"v1":124,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-100},{"v0":125,"v1":126,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-105},{"v0":127,"v1":128,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-102},{"v0":129,"v1":130,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-215},{"v0":131,"v1":132,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-220},{"v0":133,"v1":134,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":-210},{"v0":135,"v1":136,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":29,"y":180},{"v0":137,"v1":138,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":33,"y":180},{"v0":139,"v1":140,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":25,"y":180},{"v0":141,"v1":142,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":100},{"v0":143,"v1":144,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":105},{"v0":145,"v1":146,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":215},{"v0":147,"v1":148,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":-750,"y":210},{"v0":149,"v1":150,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"y":75},{"v0":151,"v1":152,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":380},{"v0":153,"v1":154,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"x":360},{"v0":155,"v1":156,"color":"00FFDD","bCoef":1.15,"cMask":["ball"],"y":90},{"v0":157,"v1":158,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":35,"y":180},{"v0":159,"v1":160,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"y":82.5},{"v0":161,"v1":162,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"y":83.5},{"v0":163,"v1":164,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":372.5},{"v0":165,"v1":166,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":369.5},{"v0":167,"v1":168,"vis":false,"color":"F8F8F8","bCoef":0.5,"cMask":["ball"],"x":367},{"v0":169,"v1":170,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":7.5},{"v0":171,"v1":172,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":7.5},{"v0":173,"v1":174,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":7.5},{"v0":175,"v1":176,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"x":3},{"v0":177,"v1":178,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":12},{"v0":179,"v1":180,"vis":false,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"x":12},{"v0":181,"v1":182,"vis":false,"color":"F8F8F8","cMask":["ball"],"x":13},{"v0":183,"v1":184,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["ball"],"x":3.5},{"v0":185,"v1":186,"curve":197.68362912038353,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":187,"v1":188,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":187,"v1":189,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":189,"v1":190,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":190,"v1":191,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":191,"v1":193,"curve":200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":191,"v1":194,"curve":-200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":192,"v1":195,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":196,"v1":197,"curve":100,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":198,"curve":200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":198,"curve":-200,"color":"FFFFFF","bCoef":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":200,"v1":201,"curve":200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":202,"v1":203,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":202,"v1":203,"curve":-200,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"],"_selected":true},{"v0":204,"v1":205,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":206,"v1":207,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":208,"v1":209,"color":"0FFFF7","cMask":["wall"],"cGroup":["wall"]},{"v0":232,"v1":233,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["wall"]},{"v0":234,"v1":235,"vis":false,"color":"FFFFFF","bCoef":5,"cMask":["ball"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-760,"bCoef":0.1},{"normal":[-1,0],"dist":-747,"bCoef":0.1},{"normal":[1,0],"dist":-723.8019847383677,"bCoef":0.1,"cMask":["ball"]},{"normal":[-1,0],"dist":-746,"bCoef":0.1,"cMask":["ball"]},{"normal":[1,0],"dist":-723.9342788028363,"bCoef":0.1,"cMask":["ball"]}],"goals":[],"discs":[{"radius":6.25,"invMass":1.5,"pos":[-350,-165],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"invMass":0,"pos":[-700,110]},{"radius":5,"invMass":0,"pos":[-700,205]},{"radius":5,"invMass":0,"pos":[700,-44.25447791946799]},{"radius":5,"invMass":0,"pos":[700,-204.254477919468]},{"radius":3,"invMass":0,"pos":[-700,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-700,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[700,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":6.25,"invMass":1.5,"pos":[-350,165],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":3,"invMass":0,"pos":[-700,10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,-10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":5,"invMass":0,"pos":[0,110]},{"radius":5,"invMass":0,"pos":[0,205]},{"radius":6,"invMass":0,"pos":[-700,-205]},{"radius":6,"invMass":0,"pos":[-700,-110]},{"radius":6,"invMass":0,"pos":[0,-205]},{"radius":6,"invMass":0,"pos":[0,-110]},{"radius":3,"invMass":0,"pos":[0,320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-700,-10],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[0,-320],"color":"D100FF","bCoef":0.1,"cMask":[]},{"radius":6.25,"invMass":1.5,"pos":[200.05814815429105,204.91825821859942],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[550.4324607012973,204.5070708304177],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-120],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-180],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.25,"invMass":1.5,"pos":[280,-60],"color":"FFB600","bCoef":0.4,"cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":350,"traits":[],"joints":[],"redSpawnPoints":[[0,0],[0,0],[214,-118]],"blueSpawnPoints":[[214,-118]],"canBeStored":true}';
var v2Map = '{"name":"Sindicato del Hax 1v1","width":480,"height":230,"bg":{"kickOffRadius":60,"color":"(bgcolor)"},"vertexes":[{"x":-401.4,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":401.4,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":401.4,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-401.4,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-200,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"color":"ffffff","curve":-25},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":-400,"y":60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-400,"y":-60,"cMask":[],"cGroup":[],"color":"ffffff","_data":{"mirror":{}}},{"x":400,"y":-60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":60,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":0,"y":230,"cMask":[],"cGroup":[]},{"x":0,"y":-230,"cMask":[],"cGroup":[]},{"x":436.4,"y":-60,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":436.4,"y":60,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":-436.4,"y":-60,"cMask":[],"cGroup":[],"color":"ff5757","_data":{"mirror":{}}},{"x":-436.4,"y":60,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":400,"y":-135,"cMask":["wall"],"cGroup":["wall"]},{"x":400,"y":135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-400,"y":-135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-400,"y":135,"cMask":["wall"],"cGroup":["wall"]},{"x":-400,"y":-201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":-201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":400,"y":201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":-400,"y":201.4,"cMask":[],"cGroup":[],"color":"ffffff"},{"x":435,"y":-61.4,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":435,"y":61.4,"cMask":[],"cGroup":[],"color":"5957ff"},{"x":-435,"y":-61.4,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":-435,"y":61.4,"cMask":[],"cGroup":[],"color":"ff5757"},{"x":-400,"y":135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":400,"y":-135,"cMask":["wall"],"cGroup":["wall"],"curve":180,"_data":{"mirror":{}},"color":"FFFFFF"},{"x":-30.49574412560598,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.225744192549385,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-29.385572964295505,"y":11.82733702882454,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.9534495932522264,"y":-36.61868876145756,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.6504213886715848,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":6.0530904528388545,"y":-42.19416593284727,"cMask":["wall"],"cGroup":["wall"]},{"x":9.213884376094837,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":7.498352938744155,"y":-19.90999456216308,"cMask":["wall"],"cGroup":["wall"]},{"x":32.37355878032905,"y":-19.48111170282541,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.648909332852618,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.88706713899205,"y":11.076589941476266,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.95618860360607,"y":-39.87068068446313,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.63382976048286,"y":13.078582174404994,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.2017063894395839,"y":-35.36744361587711,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.400004171065547,"y":11.430223270178539,"cMask":["wall"],"cGroup":["wall"]},{"x":1.3351474045583704,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-29.78268672294149,"y":14.210019580700477,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.0475351473175762,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":8.03865924606881,"y":-41.79705217420128,"cMask":["wall"],"cGroup":["wall"]},{"x":11.199453169324793,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":9.230000522006785,"y":-41.3999384155553,"cMask":["wall"],"cGroup":["wall"]},{"x":12.390794445262767,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":7.895466697390145,"y":-17.924425768933126,"cMask":["wall"],"cGroup":["wall"]},{"x":32.770672538975035,"y":-17.495542909595454,"cMask":["wall"],"cGroup":["wall"]},{"x":26.157492648859613,"y":-9.557304802163955,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":6.0530904528388545,"y":-39.01725586367934,"cMask":["wall"],"cGroup":["wall"]},{"x":6.0530904528388545,"y":-36.23745955315741,"cMask":["wall"],"cGroup":["wall"],"curve":40},{"x":6.267638660242912,"y":-40.95752011604665,"cMask":["wall"],"cGroup":["wall"]},{"x":11.43618807004007,"y":-41.76763634022751,"cMask":["wall"],"cGroup":["wall"]},{"x":14.596981993296051,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":16.803169541329336,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.351329828917628,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"],"curve":100},{"x":-28.081329895861032,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.241158667607152,"y":12.256219888162216,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.93691559917268,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.93691559917268,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-23.504495036164265,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.7426528423037,"y":11.505472800813942,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.489415463794508,"y":13.50746503374267,"cMask":["wall"],"cGroup":["wall"]},{"x":-25.255589874377193,"y":11.859106129516215,"cMask":["wall"],"cGroup":["wall"]},{"x":-27.63827242625314,"y":14.638902440038153,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.347181182469853,"y":14.794113611755678,"cMask":["wall"],"cGroup":["wall"]},{"x":0.08494218857342739,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-36.625009112472256,"y":14.794113611755678,"cMask":["wall"],"cGroup":["wall"]},{"x":0.08494218857342739,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.9389853771129153,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.53710114067082,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.26710120761422,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-34.42692997936034,"y":11.82733702882454,"cMask":["wall"],"cGroup":["wall"]},{"x":-7.994806608317065,"y":-36.61868876145756,"cMask":["wall"],"cGroup":["wall"]},{"x":-5.691778403736421,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-42.19416593284727,"cMask":["wall"],"cGroup":["wall"]},{"x":4.172527361030001,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":2.4569959236793193,"y":-19.90999456216308,"cMask":["wall"],"cGroup":["wall"]},{"x":27.332201765264212,"y":-19.48111170282541,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.39268684398247,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.39268684398247,"y":-43.75263703604564,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.690266347917458,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-35.928424154056884,"y":11.076589941476266,"cMask":["wall"],"cGroup":["wall"]},{"x":-9.496300783013611,"y":-37.369435848805836,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.6751867755477,"y":13.078582174404994,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.24306340450442,"y":-35.36744361587711,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.44136118613038,"y":11.430223270178539,"cMask":["wall"],"cGroup":["wall"]},{"x":-0.4662096105064655,"y":44.26359902222289,"cMask":["wall"],"cGroup":["wall"]},{"x":-34.824043738006324,"y":14.210019580700477,"cMask":["wall"],"cGroup":["wall"]},{"x":-6.088892162382413,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":6.158096154259958,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":4.188643506941949,"y":-41.3999384155553,"cMask":["wall"],"cGroup":["wall"]},{"x":7.349437430197931,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":16.618204412799088,"y":-6.384431798484341,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-39.01725586367934,"cMask":["wall"],"cGroup":["wall"]},{"x":1.011733437774018,"y":-36.23745955315741,"cMask":["wall"],"cGroup":["wall"]},{"x":1.2262816451780751,"y":-40.95752011604665,"cMask":["wall"],"cGroup":["wall"]},{"x":76.06531847662362,"y":5.373919180151752,"cMask":["wall"],"cGroup":["wall"]},{"x":-38.904706590432156,"y":36.59554052466808,"cMask":["wall"],"cGroup":["wall"]},{"x":6.394831054975233,"y":-41.76763634022751,"cMask":["wall"],"cGroup":["wall"]},{"x":9.555624978231215,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":20.479537121527038,"y":-5.177135158803448,"cMask":["wall"],"cGroup":["wall"],"curve":40},{"x":11.761812526264498,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-33.122686910925864,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-32.282515682671985,"y":12.256219888162216,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.97827261423751,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.97827261423751,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-28.545852051229105,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":-30.530772478859348,"y":13.50746503374267,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.956414826491409,"y":-33.651912178526416,"cMask":["wall"],"cGroup":["wall"]},{"x":-36.71549396780166,"y":15.786228105529924,"cMask":["wall"],"cGroup":["wall"]},{"x":-7.980342392177752,"y":48.583599022222884,"cMask":["wall"],"cGroup":["wall"]},{"x":73.36000000000001,"y":14.999999999999993,"cMask":["wall"],"cGroup":["wall"]},{"x":17.85388437609484,"y":11.889679842071128,"cMask":["wall"],"cGroup":["wall"]},{"x":-13.546115623905168,"y":11.729679842071128,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.786115623905165,"y":-37.63032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":13.173884376094843,"y":-62.47032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":-14.546115623905168,"y":-20.510320157928877,"cMask":["wall"],"cGroup":["wall"]},{"x":14.61388437609484,"y":-19.43032015792888,"cMask":["wall"],"cGroup":["wall"]},{"x":31.88870037609485,"y":43.560463842071144,"cMask":["wall"],"cGroup":["wall"]},{"x":35.66783637609485,"y":36.00219184207114,"cMask":["wall"],"cGroup":["wall"]},{"x":49.52466837609486,"y":19.625935842071133,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.05805162390518,"y":-5.568304157928877,"cMask":["wall"],"cGroup":["wall"]},{"x":-14.720643623905174,"y":-43.35966415792889,"cMask":["wall"],"cGroup":["wall"],"curve":100},{"x":-26.176441869660323,"y":-55.9610582998654,"cMask":["wall"],"cGroup":["wall"],"curve":150},{"x":12.917588079798541,"y":-35.63920904681777,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":19.399069561280022,"y":-22.676246083854803,"cMask":["wall"],"cGroup":["wall"]},{"x":19.399069561280026,"y":-42.12069052829925,"cMask":["wall"],"cGroup":["wall"],"curve":-30},{"x":36.065736227946694,"y":-11.565134972743689,"cMask":["wall"],"cGroup":["wall"],"curve":-30},{"x":41.62129178350225,"y":-14.342912750521467,"cMask":["wall"],"cGroup":["wall"]},{"x":41.62129178350225,"y":-0.45402386163257624,"cMask":["wall"],"cGroup":["wall"]},{"x":23.102773264983732,"y":4.1756057679970535,"cMask":["wall"],"cGroup":["wall"]},{"x":11.065736227946688,"y":-7.861431269039985,"cMask":["wall"],"cGroup":["wall"]},{"x":50.88055104276151,"y":-18.972542380151097,"cMask":["wall"],"cGroup":["wall"]},{"x":39.7694399316504,"y":-6.009579417188133,"cMask":["wall"],"cGroup":["wall"]},{"x":52.732402894613365,"y":-10.639209046817763,"cMask":["wall"],"cGroup":["wall"]},{"x":33.287958450168915,"y":2.323753916145202,"cMask":["wall"],"cGroup":["wall"]},{"x":19.711484376094845,"y":-50.40472015792889,"cMask":["wall"],"cGroup":["wall"]},{"x":15.045884376094838,"y":-65.5679201579289,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":4.548284376094836,"y":-57.403120157928896,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":-2.4501156239051656,"y":-68.0671201579289,"cMask":["wall"],"cGroup":["wall"],"curve":-25},{"x":11.664000000000003,"y":-76.98240000000003,"cMask":["wall"],"cGroup":["wall"]},{"x":-19.04684544000001,"y":-82.98982656000004,"cMask":["wall"],"cGroup":["wall"]},{"x":-19.04684544000001,"y":-95.23422720000005,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.3604889600000007,"y":-92.51324928000004,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.162933760000003,"y":-102.03667200000005,"cMask":["wall"],"cGroup":["wall"]},{"x":-8.333333333333332,"y":-57.407407407407405,"cMask":["wall"],"cGroup":["wall"]},{"x":-11.798880850682393,"y":-45.49454081654052,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.361166394067506,"y":-53.76607256566649,"cMask":["wall"],"cGroup":["wall"]},{"x":-5.444665576270024,"y":-48.321406989396465,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":5,"v1":6,"color":"ffffff","bCoef":0,"cMask":[],"cGroup":[]},{"v0":4,"v1":7,"color":"ffffff","bCoef":0,"cMask":[],"cGroup":[]},{"v0":6,"v1":13,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":7,"v1":12,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":6,"v1":7,"curve":184.38617118115926,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":7,"v1":6,"curve":180,"color":"ffffff","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":14,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":26,"v1":27,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":15,"v1":11,"color":"5957ff","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":8,"v1":17,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10,"y":60},{"v0":29,"v1":28,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10},{"v0":16,"v1":9,"color":"ff5757","bCoef":0.1,"cMask":["ball"],"bias":-10,"y":-60,"_data":{"mirror":{},"arc":{"a":[-436.4,-60],"b":[-400,-60],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":9,"v1":8,"color":"C5C5C5","bCoef":0,"cMask":[]},{"v0":10,"v1":11,"color":"C5C5C5","bCoef":0,"cMask":[]},{"v0":0,"v1":1,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":23,"v1":10,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":11,"v1":24,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":2,"v1":3,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":25,"v1":8,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":9,"v1":22,"color":"ffffff","cMask":["ball"],"bias":-10},{"v0":20,"v1":30,"curve":180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-400,-135],"b":[-400,135],"curve":180,"radius":135,"center":[-400,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":19,"v1":31,"curve":180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[400,135],"b":[400,-135],"curve":180,"radius":135,"center":[400,0],"from":1.5707963267948966,"to":-1.5707963267948966}}},{"v0":127,"v1":128,"curve":31.3421829040189,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":128,"v1":129,"curve":26.906441761479194,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":129,"curve":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":131,"v1":132,"curve":-38.011968392073626,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":127,"v1":134,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":134,"v1":135,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":136,"v1":133,"curve":-203.64297668121446,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":62,"v1":115,"curve":40,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":142,"curve":-30,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":139,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":139,"v1":62,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":115,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":115,"v1":107,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":107,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":147,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":149,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":149,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":145,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":144,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":148,"v1":150,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":149,"v1":148,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":6,"curve":-25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":153,"v1":154,"curve":-25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":158,"v1":159,"curve":25,"color":"6B6B6B","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":160,"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":129,"v1":160,"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":110,"v1":161,"curve":40,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":162,"v1":163,"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]},{"v0":162,"v1":163,"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"]}],"planes":[{"normal":[0,1],"dist":-230,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-230,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-302.01030643660437,-230],"b":[302.01030643660437,-230]}}},{"normal":[0,-1],"dist":-230,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-230,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-302.01030643660437,230],"b":[302.01030643660437,230]}}},{"normal":[1,0],"dist":-480,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-480,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[-480,-124.2618434354544],"b":[-480,124.2618434354544]}}},{"normal":[-1,0],"dist":-480,"bCoef":0,"_data":{"extremes":{"normal":[-1,0],"dist":-480,"canvas_rect":[-302.01030643660437,-124.2618434354544,302.01030643660437,124.2618434354544],"a":[480,-124.2618434354544],"b":[480,124.2618434354544]}}}],"goals":[{"p0":[-407.9,60],"p1":[-407.9,-60],"team":"red"},{"p0":[407.9,60],"p1":[407.9,-60],"team":"blue"}],"discs":[{"radius":8,"invMass":0,"pos":[-400,-60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[-400,60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[400,-60],"color":"ffffff","_data":{"mirror":{}}},{"radius":8,"invMass":0,"pos":[400,60],"color":"ffffff","_data":{"mirror":{}}}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":8,"invMass":1.55,"pos":[0,0],"color":"FFFFFF","bCoef":0.412,"cGroup":["ball","kick","score"],"cMask":["all"],"damping":0.99,"gravity":[0,0]},"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":170,"kickOffReset":"partial"}';
var v3Map = '{"name":"Sindicato del Hax x3","width":755,"height":339,"spawnDistance":310,"bg":{"width":665,"height":290,"kickOffRadius":80,"color":"(bgcolor)"},"vertexes":[{"x":-665,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":-665,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":33,"_data":{"mirror":{}}},{"x":-665,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":-33,"_data":{"mirror":{}}},{"x":-665,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":-33,"_data":{"mirror":{}}},{"x":665,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","curve":33,"_data":{"mirror":{}}},{"x":665,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":306,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"ee3141","_data":{"mirror":{}}},{"x":2.332799999999999,"y":-80,"trait":"line","color":"ee3141","_data":{"mirror":{}}},{"x":0,"y":-306,"trait":"kickOffBarrier"},{"x":-693,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"ee3141","curve":-33,"_data":{"mirror":{}}},{"x":693,"y":-80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"3b90e5","curve":33,"_data":{"mirror":{}}},{"x":-693,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"ee3141","curve":-33,"_data":{"mirror":{}}},{"x":693,"y":80,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet","color":"3b90e5","curve":33,"_data":{"mirror":{}}},{"x":-665,"y":-215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-500,"y":-50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":-215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":500,"y":-50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-665,"y":215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":-500,"y":50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":215,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":500,"y":50,"trait":"line","color":"5E5E5E","_data":{"mirror":{}}},{"x":665,"y":290,"bCoef":1,"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":665,"y":-290,"bCoef":1,"trait":"ballArea","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":290,"bCoef":0,"trait":"line","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":-290,"bCoef":0,"trait":"line","color":"FFFFFF","_data":{"mirror":{}}},{"x":0,"y":80,"trait":"kickOffBarrier","color":"409df9","_data":{"mirror":{}}},{"x":2.332799999999999,"y":-80,"trait":"kickOffBarrier","color":"409df9","_data":{"mirror":{}}},{"x":674,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":674,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-674,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":-674,"y":-290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"x":-674,"y":80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":-674,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"x":674,"y":80,"bCoef":1,"cMask":["ball"],"trait":"line","_data":{"mirror":{}}},{"x":674,"y":290,"bCoef":1,"cMask":["ball"],"trait":"ballArea","_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":28.18209024000001,"y":44.89613568000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-31.67942400000002,"y":2.7209779200000015,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":30.903068160000014,"y":36.73320192000002,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":45.86844672000002,"y":19.04684544000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":8.732800000000001,"y":14.960000000000003,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":-20.427200000000006,"y":12.800000000000002,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-21.427200000000006,"y":-34.56000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-19.267200000000006,"y":-60.48000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-31.147200000000012,"y":-58.320000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-20.815348148148153,"y":-14.814814814814817,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":7.888355555555555,"y":-14.814814814814817,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-12.482014814814818,"y":-43.518518518518526,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-25.444977777777783,"y":-44.44444444444445,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-19.889422222222226,"y":-50.92592592592593,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.332799999999999,"y":-32.00000000000001,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":11.3328,"y":-2.0000000000000004,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":18.332800000000002,"y":-35.00000000000001,"_data":{"mirror":{}},"curve":-30},{"cMask":["wall"],"cGroup":["wall"],"x":25.332800000000002,"y":-3.000000000000001,"_data":{"mirror":{}},"curve":-30},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":0,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":36.332800000000006,"y":-3.000000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":38.332800000000006,"y":8.000000000000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":9.000000000000002,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-1.667200000000002,"y":-32.00000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":19.332800000000002,"y":-57.000000000000014,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":17.332800000000002,"y":-44.00000000000001,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":-0.667200000000002,"y":-63.000000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.332799999999999,"y":-49.000000000000014,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":9.3328,"y":-83.00000000000001,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":9.3328,"y":-70.00000000000001,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":6,"v1":13,"curve":33,"vis":true,"color":"3b90e5","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":1,"v1":14,"curve":33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":5,"v1":15,"curve":-33,"vis":true,"color":"3b90e5","bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"v0":12,"v1":14,"curve":-33,"vis":true,"color":"ee3141","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-585,"_data":{"mirror":{},"arc":{"a":[-693,-80],"b":[-693,80],"curve":-33,"radius":281.6749217666305,"center":[-422.92452619270034,0],"from":2.853613327010729,"to":-2.853613327010729}}},{"v0":13,"v1":15,"curve":33,"vis":true,"color":"409df9","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585,"_data":{"mirror":{},"arc":{"a":[693,-80],"b":[693,80],"curve":33,"radius":281.6749217666305,"center":[422.92452619270034,0],"from":-0.2879793265790644,"to":0.2879793265790644}}},{"v0":16,"v1":17,"curve":90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[-665,-215],"b":[-500,-50],"curve":90,"radius":165,"center":[-665,-50.000000000000014],"from":-1.5707963267948966,"to":8.612639221334548e-17}}},{"v0":18,"v1":19,"curve":-90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[665,-215],"b":[500,-50],"curve":-90,"radius":165,"center":[665,-50.000000000000014],"from":3.141592653589793,"to":-1.5707963267948966}}},{"v0":20,"v1":21,"curve":-90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[-665,215],"b":[-500,50],"curve":-90,"radius":165,"center":[-665,50.000000000000014],"from":-8.612639221334548e-17,"to":1.5707963267948966}}},{"v0":22,"v1":23,"curve":90,"color":"5E5E5E","trait":"line","_data":{"mirror":{},"arc":{"a":[665,215],"b":[500,50],"curve":90,"radius":165,"center":[665,50.000000000000014],"from":1.5707963267948966,"to":-3.141592653589793}}},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"5E5E5E","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[-500,-50],"b":[-500,50],"curve":0}}},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"5E5E5E","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[500,-50],"b":[500,50],"curve":0}}},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665,"_data":{"mirror":{},"arc":{"a":[-665,80],"b":[-665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665,"_data":{"mirror":{},"arc":{"a":[665,80],"b":[665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665,"_data":{"mirror":{},"arc":{"a":[-665,-80],"b":[-665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665,"_data":{"mirror":{},"arc":{"a":[665,-80],"b":[665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290,"_data":{"mirror":{},"arc":{"a":[-665,290],"b":[665,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290,"_data":{"mirror":{},"arc":{"a":[-665,-290],"b":[665,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[0,290],"b":[0,-290],"curve":0}}},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"ee3141","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[2.332799999999999,-80],"b":[0,80],"curve":-180,"radius":80.00850260416077,"center":[1.1663999999999994,0],"from":1.585375293805343,"to":-1.5562173597844504}}},{"v0":29,"v1":28,"curve":180,"vis":true,"color":"409df9","bCoef":0,"trait":"line","_data":{"mirror":{},"arc":{"a":[2.332799999999999,-80],"b":[0,80],"curve":180,"radius":80.00850260416077,"center":[1.1663999999999994,0],"from":-1.5562173597844504,"to":1.585375293805343}}},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"dd807e","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"90c1dd","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614,"_data":{"mirror":{},"arc":{"a":[-674,-80],"b":[-674,-290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614,"_data":{"mirror":{},"arc":{"a":[-674,80],"b":[-674,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614,"_data":{"mirror":{},"arc":{"a":[674,80],"b":[674,290],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":38,"v1":39,"_data":{"mirror":{},"arc":{"a":[28.18209024000001,44.89613568000002],"b":[-31.67942400000002,2.7209779200000015],"curve":200,"radius":37.17815339117805,"center":[-5.466975994361987,29.086156833287987],"from":0.43923716981713595,"to":-2.3532896333737927}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":40,"v1":41,"_data":{"mirror":{},"arc":{"a":[30.903068160000014,36.73320192000002],"b":[45.86844672000002,19.04684544000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":40,"v1":42,"_data":{"mirror":{},"arc":{"a":[30.903068160000014,36.73320192000002],"b":[8.732800000000001,14.960000000000003],"curve":10,"radius":178.2670491097763,"center":[144.252352452092,-100.85706135752233],"from":2.2598924317814926,"to":2.4344253569809253}},"curve":10},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":42,"v1":43,"_data":{"mirror":{},"arc":{"a":[8.732800000000001,14.960000000000003],"b":[-20.427200000000006,12.800000000000002],"curve":20,"radius":84.19290934557034,"center":[0.27778436518712546,-68.80728893002623],"from":1.470202439253404,"to":1.81926828965227}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":43,"v1":44,"_data":{"mirror":{},"arc":{"a":[-20.427200000000006,12.800000000000002],"b":[-21.427200000000006,-34.56000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45,"_data":{"mirror":{},"arc":{"a":[-21.427200000000006,-34.56000000000001],"b":[-19.267200000000006,-60.48000000000001],"curve":200,"radius":13.205544031632405,"center":[-22.632397669981717,-47.710433139165154],"from":1.4794046334839046,"to":-1.3131221697070221}}},{"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":46,"_data":{"mirror":{},"arc":{"a":[-21.427200000000006,-34.56000000000001],"b":[-31.147200000000012,-58.320000000000014],"curve":-200,"radius":13.033664114305546,"center":[-24.19243546918344,-47.296949126243156],"from":-2.1336479701667965,"to":1.3570105338218639}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":48,"_data":{"mirror":{},"arc":{"a":[-20.815348148148153,-14.814814814814817],"b":[7.888355555555555,-14.814814814814817],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":73.45814507805194,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":50,"_data":{"mirror":{},"arc":{"a":[-12.482014814814818,-43.518518518518526],"b":[-25.444977777777783,-44.44444444444445],"curve":73.45814507805194,"radius":10.865632476088674,"center":[-18.3430411162187,-52.66785400256789],"from":1.0010605445703504,"to":2.283147038590023}}},{"curve":158.6506298839627,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":51,"_data":{"mirror":{},"arc":{"a":[-19.267200000000006,-60.48000000000001],"b":[-19.889422222222226,-50.92592592592593],"curve":158.6506298839627,"radius":4.8714589828446,"center":[-20.47875582261475,-55.761605663975764],"from":-1.31945339276626,"to":1.449522459071798}}},{"curve":-188.01886046326905,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":51,"_data":{"mirror":{},"arc":{"a":[-19.267200000000006,-60.48000000000001],"b":[-19.889422222222226,-50.92592592592593],"curve":-188.01886046326905,"radius":4.798902133126818,"center":[-19.91314418109645,-55.72476942743713],"from":1.5658531012766443,"to":-1.435784034971106}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53,"_data":{"mirror":{},"arc":{"a":[4.332799999999999,-32.00000000000001],"b":[11.3328,-2.0000000000000004],"curve":30,"radius":59.51231987061895,"center":[-48.14796211353318,-3.937822173508927],"from":-0.49103132107614467,"to":0.032567454522154045}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55,"_data":{"mirror":{},"arc":{"a":[18.332800000000002,-35.00000000000001],"b":[25.332800000000002,-3.000000000000001],"curve":-30,"radius":63.281043895635975,"center":[81.54561292110206,-32.06217782649108],"from":2.6644355660929055,"to":-3.095150965488382}},"curve":-30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,0],"b":[36.332800000000006,-3.000000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":57,"v1":58,"_data":{"mirror":{},"arc":{"a":[36.332800000000006,-3.000000000000001],"b":[38.332800000000006,8.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59,"_data":{"mirror":{},"arc":{"a":[38.332800000000006,8.000000000000002],"b":[-0.667200000000002,9.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":59,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,0],"b":[-0.667200000000002,9.000000000000002],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":54,"_data":{"mirror":{},"arc":{"a":[4.332799999999999,-32.00000000000001],"b":[18.332800000000002,-35.00000000000001],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":61,"v1":62,"_data":{"mirror":{},"arc":{"a":[19.332800000000002,-57.000000000000014],"b":[17.332800000000002,-44.00000000000001],"curve":-40,"radius":19.22832133521707,"center":[36.19140322645506,-47.75252258054539],"from":2.9451761315861926,"to":-2.639877474795662}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":63,"v1":64,"_data":{"mirror":{},"arc":{"a":[-0.667200000000002,-63.000000000000014],"b":[4.332799999999999,-49.000000000000014],"curve":-40,"radius":21.732738608268402,"center":[21.065141936182354,-62.86869354863657],"from":2.449502862770224,"to":-3.1355507436116308}}},{"curve":-40,"color":"595959","cMask":["wall"],"cGroup":["wall"],"v0":65,"v1":66,"_data":{"mirror":{},"arc":{"a":[9.3328,-83.00000000000001],"b":[9.3328,-70.00000000000001],"curve":-40,"radius":19.00472860106007,"center":[27.191403226455044,-76.50000000000001],"from":2.792526803190927,"to":-2.792526803190927}}}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"discs":[{"radius":8,"pos":[-665,80],"color":"ff2151","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[-665,-80],"color":"ff2151","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[665,80],"color":"59c7f6","trait":"goalPost","_data":{"mirror":{}}},{"radius":8,"pos":[665,-80],"color":"59c7f6","trait":"goalPost","_data":{"mirror":{}}}],"planes":[{"normal":[0,1],"dist":-290,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-290,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,-290],"b":[554.9475388613221,-290]}}},{"normal":[0,-1],"dist":-290,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-290,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,290],"b":[554.9475388613221,290]}}},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,1],"dist":-339,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,-339],"b":[554.9475388613221,-339]}}},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[0,-1],"dist":-339,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-554.9475388613221,339],"b":[554.9475388613221,339]}}},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[1,0],"dist":-755,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[-755,-249.1751200979976],"b":[-755,249.1751200979976]}}},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"_data":{"extremes":{"normal":[-1,0],"dist":-755,"canvas_rect":[-554.9475388613221,-249.1751200979976,554.9475388613221,249.1751200979976],"a":[755,-249.1751200979976],"b":[755,249.1751200979976]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7,"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.6,"color":"ffda13","bCoef":0.5,"cMask":["all"],"damping":0.99,"invMass":1,"gravity":[0,0],"cGroup":["ball"]},"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","redSpawnPoints":[],"blueSpawnPoints":[],"kickOffReset":"partial","joints":[]}';
var v4Map = '{"name":"Sindicato del Hax x4","width":765,"height":350,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":150,"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"kickOffReset":"full","bg":{"color":"(bgcolor)","height":320,"width":700},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-701,"y":-320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":701,"y":-320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":-701,"y":320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":701,"y":320,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":700,"y":85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10,"curve":0},{"x":700,"y":321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":-700,"y":-321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":-700,"y":-85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":10},{"x":700,"y":-321,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10},{"x":700,"y":-85,"bCoef":1,"cMask":["ball"],"color":"ff0000","bias":-10,"curve":0},{"x":-740,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":-700,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ff0000","curve":0},{"x":-740,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff","curve":-45},{"x":-700,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ff0000","curve":-45},{"x":-740,"y":-86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff"},{"x":-740,"y":86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff"},{"x":740,"y":-86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":740,"y":86,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":740,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ffffff","curve":0},{"x":700,"y":-85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"color":"ff0000","curve":0},{"x":740,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ffffff","curve":0},{"x":700,"y":85,"bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"color":"ff0000","curve":0},{"x":-700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":-700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-400,"y":-318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":-400,"y":318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":-318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":318.5,"cMask":["wall"],"cGroup":["wall"],"color":"525252"},{"x":400,"y":-85,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"525252"},{"x":400,"y":85,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"525252"},{"x":-400,"y":-85,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"525252"},{"x":-400,"y":85,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"525252"},{"x":-698.5,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-624,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-698.5,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-624,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-625,"y":-151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":-625,"y":151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":625,"y":-151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":625,"y":151,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":624,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":698.5,"y":-150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":624,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":698.5,"y":150,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"ff0000"},{"x":-500,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":-500,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":500,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":500,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"curve":0},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"ff0000","curve":0},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ff0000","curve":0},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":0},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"ff0000","_data":{"mirror":{}}},{"x":-700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-698,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":-698,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":698,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":698,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":-85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":700,"y":85,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000","curve":0},{"x":0,"y":-320,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":80,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"ff0000"},{"x":0,"y":-81,"cMask":["redKO","blueKO"],"cGroup":["wall"],"curve":180,"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":81,"cMask":["redKO","blueKO"],"cGroup":["wall"],"curve":180,"color":"ff0000","_data":{"mirror":{}}},{"x":0,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":0,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"ff0000"},{"x":20.470983608716665,"y":39.611153448830635,"cMask":["wall"],"cGroup":["wall"]},{"x":-26.529016391283335,"y":-4.388846551169369,"cMask":["wall"],"cGroup":["wall"]},{"x":20.522417439827223,"y":30.558833260364814,"cMask":["wall"],"cGroup":["wall"]},{"x":32.10257582685563,"y":18.512167860590353,"cMask":["wall"],"cGroup":["wall"]},{"x":4.645772619423838,"y":16.26985292200176,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":-21.640911459383403,"y":14.05201881307832,"cMask":["wall"],"cGroup":["wall"],"curve":30},{"x":-13.204664299517763,"y":-32.17549078825307,"cMask":["wall"],"cGroup":["wall"],"curve":-200,"_data":{"mirror":{}}},{"x":-15.527358634354556,"y":-13.24112178021643,"cMask":["wall"],"cGroup":["wall"]},{"x":5.906111873190042,"y":-13.24112178021643,"cMask":["wall"],"cGroup":["wall"]},{"x":-17.77754174724471,"y":-37.153008013895686,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":-18.51338633311901,"y":-47.3177508647442,"cMask":["wall"],"cGroup":["wall"],"curve":-200,"_data":{"mirror":{}}},{"x":-10.035362398561112,"y":-32.54158221956905,"cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{}}},{"x":4.649886366748092,"y":-26.82649000270091,"cMask":["wall"],"cGroup":["wall"]},{"x":7.800734501163589,"y":-4.140383434909147,"cMask":["wall"],"cGroup":["wall"]},{"x":16.623109277527078,"y":-27.456659629584017,"cMask":["wall"],"cGroup":["wall"]},{"x":19.773957411942575,"y":-3.5102138080260428,"cMask":["wall"],"cGroup":["wall"]},{"x":-4.802658036498514,"y":-3.5102138080260428,"cMask":["wall"],"cGroup":["wall"]},{"x":28.596332188306036,"y":-2.249874554259833,"cMask":["wall"],"cGroup":["wall"]},{"x":28.596332188306064,"y":6.572500222103631,"cMask":["wall"],"cGroup":["wall"]},{"x":-2.281979528966076,"y":4.681991341454317,"cMask":["wall"],"cGroup":["wall"]},{"x":17.883448531293283,"y":-46.36174843607715,"cMask":["wall"],"cGroup":["wall"]},{"x":15.992939650643962,"y":-37.53937365971369,"cMask":["wall"],"cGroup":["wall"]},{"x":-1.0216402751998714,"y":-53.923783958674406,"cMask":["wall"],"cGroup":["wall"]},{"x":4.019716739864975,"y":-45.73157880919405,"cMask":["wall"],"cGroup":["wall"]},{"x":13.472261143111552,"y":-63.376328361920976,"cMask":["wall"],"cGroup":["wall"]},{"x":10.951582635579115,"y":-56.44446246620682,"cMask":["wall"],"cGroup":["wall"]},{"cMask":["wall"],"cGroup":["wall"],"x":-11.235214364984317,"y":-47.3240847494794,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-12.710908702668801,"y":-41.08248057037684,"_data":{"mirror":{}}}],"segments":[{"v0":0,"v1":1,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"y":-320},{"v0":2,"v1":3,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"y":320},{"v0":4,"v1":5,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"x":-700},{"v0":6,"v1":7,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"x":700},{"v0":8,"v1":9,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":10,"x":-700},{"v0":10,"v1":11,"color":"ff0000","bCoef":1,"cMask":["ball"],"bias":-10,"x":700},{"v0":12,"v1":13,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"y":-85},{"v0":14,"v1":15,"curve":-2.8482139919315306,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"y":85},{"v0":16,"v1":17,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10,"x":-735},{"v0":18,"v1":19,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"x":735},{"v0":20,"v1":21,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":10},{"v0":22,"v1":23,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["ball"],"cGroup":["ball"],"bias":-10,"y":70},{"v0":24,"v1":25,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-700},{"v0":26,"v1":27,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":700},{"v0":28,"v1":29,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":30,"v1":31,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":32,"v1":33,"curve":-120,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":34,"v1":35,"curve":120,"color":"525252","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":36,"v1":37,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":-150},{"v0":38,"v1":39,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":150},{"v0":40,"v1":41,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-625},{"v0":42,"v1":43,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":625},{"v0":44,"v1":45,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":-150},{"v0":46,"v1":47,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"y":150},{"v0":48,"v1":49,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":49,"v1":48,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":48,"v1":49,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-500},{"v0":50,"v1":51,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":51,"v1":50,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":50,"v1":51,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":500},{"v0":52,"v1":53,"curve":0,"vis":false,"color":"a3a3a3","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"a3a3a3","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":56,"v1":57,"curve":180,"vis":false,"color":"ff0000","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":58,"v1":59,"curve":180,"vis":false,"color":"ff0000","cMask":["red","blue"],"cGroup":["redKO"],"x":0,"_data":{"mirror":{},"arc":{"a":[0,-80],"b":[0,80],"curve":180,"radius":80,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":60,"v1":61,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":-700},{"v0":66,"v1":67,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":700},{"v0":68,"v1":69,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":70,"v1":71,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":72,"v1":73,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":73,"v1":72,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":74,"v1":75,"curve":0,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":75,"v1":74,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":74,"v1":75,"curve":180,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":72,"v1":73,"color":"ff0000","cMask":["redKO","blueKO"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[0,-81],"b":[0,81],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":76,"v1":77,"curve":204.53180351851952,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":78,"v1":79,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":78,"v1":80,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":80,"v1":81,"curve":30,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":81,"v1":82,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":83,"v1":84,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":86,"curve":-200,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-13.204664299517763,-32.17549078825307],"b":[-18.51338633311901,-47.3177508647442],"curve":-200,"radius":8.146711604964487,"center":[-14.524030816123378,-40.21465629030134],"from":-2.0825294150096703,"to":1.4081290889789895}}},{"v0":82,"v1":86,"curve":200,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"_data":{"mirror":{},"arc":{"a":[-13.204664299517763,-32.17549078825307],"b":[-18.51338633311901,-47.3177508647442],"curve":200,"radius":8.146711604964487,"center":[-17.194019816513393,-39.27858536269593],"from":1.0590632385801229,"to":-1.7334635646108039}}},{"v0":87,"v1":85,"curve":40,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":88,"v1":89,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":91,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":88,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":93,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":93,"v1":94,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":94,"v1":95,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":95,"color":"ff0000","cMask":["wall"],"cGroup":["wall"]},{"v0":96,"v1":97,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"v0":98,"v1":99,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"v0":100,"v1":101,"curve":30,"color":"5E5E5E","cMask":["wall"],"cGroup":["wall"]},{"curve":210,"vis":false,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":210,"radius":3.319965282865041,"center":[-11.13684513419393,-44.00557710689925],"from":-1.6004302600947362,"to":2.064761169093358}}},{"curve":-210,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":-210,"radius":3.319965282865041,"center":[-12.809277933459189,-44.40098821295699],"from":1.5411623934950571,"to":-1.0768314844964348}}},{"curve":210,"color":"ff0000","cMask":["wall"],"cGroup":["wall"],"v0":102,"v1":103,"_data":{"mirror":{},"arc":{"a":[-11.235214364984317,-47.3240847494794],"b":[-12.710908702668801,-41.08248057037684],"curve":210,"radius":3.319965282865041,"center":[-11.13684513419393,-44.00557710689925],"from":-1.6004302600947362,"to":2.064761169093358}}}],"goals":[{"p0":[-705,85],"p1":[-705,-85],"team":"red","color":"ff0000"},{"p0":[705,-85],"p1":[705,85],"team":"blue","curve":0,"color":"ff0000"}],"discs":[{"radius":7,"invMass":0,"pos":[-700,-85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":7,"invMass":0,"pos":[-700,85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":7,"invMass":0,"pos":[700,-85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"],"curve":0},{"radius":7,"invMass":0,"pos":[700,85],"color":"ffffff","bCoef":1,"cMask":["all"],"cGroup":["all"],"curve":0}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-416.00704106652125,-350],"b":[416.00704106652125,-350]}}},{"normal":[0,-1],"dist":-350,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-416.00704106652125,350],"b":[416.00704106652125,350]}}},{"normal":[-1,0],"dist":-770,"_data":{"extremes":{"normal":[-1,0],"dist":-770,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[770,-189.09410957569148],"b":[770,189.09410957569148]}}},{"normal":[1,0],"dist":-770,"_data":{"extremes":{"normal":[1,0],"dist":-770,"canvas_rect":[-416.00704106652125,-189.09410957569148,416.00704106652125,189.09410957569148],"a":[-770,-189.09410957569148],"b":[-770,189.09410957569148]}}}],"joints":[],"playerPhysics":{"radius":15,"bCoef":0,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.11,"gravity":[0,0],"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":(kickStr),"kickback":0},"ballPhysics":{"radius":6.2,"cMask":["all"],"damping":0.99,"invMass":1.5,"color":"ffffff","cGroup":["ball"],(ballMode)}}';
var v6Map = '{"name":"Sindicato del Hax x6","width":1080,"height":532,"bg":{"type":"hockey","width":950,"height":460,"kickOffRadius":6,"cornerRadius":0, "color":"(bgColor)"},"vertexes":[{"x":-950,"y":460,"cMask":["ball"],"_data":{"mirror":{}}},{"x":-950,"y":90,"cMask":["ball"],"_data":{"mirror":{}}},{"x":-950,"y":-90,"cMask":["ball"]},{"x":-950,"y":-460,"cMask":["ball"]},{"x":950,"y":456,"cMask":["ball"]},{"x":950,"y":90,"cMask":["ball"]},{"x":950,"y":-90,"cMask":["ball"]},{"x":950,"y":-456,"cMask":["ball"]},{"x":0,"y":508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0,"cMask":[]},{"x":0,"y":-508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-995,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":995,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":-995,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":995,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":951,"y":460,"cMask":["ball"]},{"x":951,"y":-460,"cMask":["ball"]},{"x":0,"y":460,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":-460,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":958,"y":-90,"cMask":["ball"]},{"x":958,"y":-456,"cMask":["ball"]},{"x":-958,"y":-90,"cMask":["ball"]},{"x":-958,"y":-456,"cMask":["ball"]},{"x":-958,"y":90,"cMask":["ball"]},{"x":-958,"y":456,"cMask":["ball"]},{"x":958,"y":90,"cMask":["ball"]},{"x":958,"y":456,"cMask":["ball"]},{"x":0,"y":-9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":-9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":0,"y":9,"bCoef":0,"cMask":[],"_data":{"mirror":{}}},{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":114.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":324.62551819445,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.21528583524,"y":-109.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":634.35340467604,"y":4.2212921610516,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":1.7712285482462,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":6.6713557738571,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":-0.67883506455928,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":0.54619674184346,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":5.4463239674544,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":-1.2913509677606,"bCoef":0.1,"cMask":[]},{"x":634.35340467604,"y":7.2838716770584,"bCoef":0.1,"cMask":[]},{"x":-950,"y":432.90041943973,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-926.21802170761,"y":460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-433.32499678239,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-925.43621788149,"y":-460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":-433.36622514797,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":927.73220749769,"y":-460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":434.55334331787,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":925.51401132381,"y":460,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":950,"y":-319.66892509968,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[]},{"x":-635.82253673536,"y":-2.314063297901,"bCoef":0.1,"cMask":[]},{"x":-635.83851134042,"y":0.13595112921681,"bCoef":0.1,"cMask":[]},{"x":-635.80656213031,"y":-4.764077725019,"bCoef":0.1,"cMask":[]},{"x":-635.85448594547,"y":2.5859655563347,"bCoef":0.1,"cMask":[]},{"x":-635.84649864294,"y":1.3609583427757,"bCoef":0.1,"cMask":[]},{"x":-635.81454943284,"y":-3.53907051146,"bCoef":0.1,"cMask":[]},{"x":-635.85847959673,"y":3.1984691631142,"bCoef":0.1,"cMask":[]},{"x":-635.80256847905,"y":-5.3765813317984,"bCoef":0.1,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":-0.077614373673782,"y":-2.4626457981722,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.10499941090626,"y":2.3835365851378,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.050229336441873,"y":-7.3088281814824,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.13238444813857,"y":7.2297189684479,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.11869192952281,"y":4.8066277767929,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.063921855057799,"y":-4.8857369898273,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.13923070744664,"y":8.4412645642754,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-0.043383077133171,"y":-8.5203737773099,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.77952848346911,"y":1.5373542018278,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":2.7521434462366,"y":3.3835365851378,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.80691352070102,"y":-3.3088281814824,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":1.7247584090043,"y":2.2297189684479,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":2.73845092762,"y":5.8066277767929,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.79322100208503,"y":-0.88573698982727,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":1.7179121496962,"y":3.4412645642754,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":0.81375978000966,"y":-4.5203737773099,"bCoef":0.1,"cMask":[],"_data":{"mirror":{}}},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":-635.67083595539,"y":111.16613046747,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-635.67083595539,"y":-112.20953737271,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"x":-950,"y":-322.66892509968,"bCoef":0,"cMask":[],"_data":{"mirror":{}},"color":"545454"},{"cMask":["wall"],"cGroup":["wall"],"x":47.49694864588799,"y":55.64749057228801,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-32.984651354112025,"y":-21.33490942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":49.82974864588801,"y":43.98349057228799,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":70.82494864588801,"y":25.321090572288,"_data":{"mirror":{}},"curve":30},{"cMask":["wall"],"cGroup":["wall"],"x":20.669748645888042,"y":14.823490572287994,"_data":{"mirror":{}},"curve":10},{"cMask":["wall"],"cGroup":["wall"],"x":-16.655051354111997,"y":15.98989057228799,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-21.32065135411198,"y":-59.82610942771203,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":-18.987851354112017,"y":-28.333309427712024,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":14.837748645887991,"y":-29.49970942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-22.48705135411199,"y":-91.31890942771204,"_data":{"mirror":{}},"curve":-180},{"cMask":["wall"],"cGroup":["wall"],"x":-28.319051354111984,"y":-88.98610942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-11.989451354112013,"y":-66.82450942771203,"_data":{"mirror":{}},"curve":60},{"cMask":["wall"],"cGroup":["wall"],"x":-28.319051354111984,"y":-70.32370942771203,"_data":{"mirror":{}},"curve":60},{"cMask":["wall"],"cGroup":["wall"],"x":-15.488651354111987,"y":-90.15250942771203,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-21.32065135411198,"y":-78.48850942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":-11.989451354112013,"y":-79.65490942771204,"_data":{"mirror":{}},"curve":-180},{"cMask":["wall"],"cGroup":["wall"],"x":12.504948645888028,"y":-53.99410942771203,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":18.33694864588802,"y":-15.502909427712012,"_data":{"mirror":{}},"curve":20},{"cMask":["wall"],"cGroup":["wall"],"x":27.668148645888046,"y":-57.493309427712035,"_data":{"mirror":{}},"curve":-20},{"cMask":["wall"],"cGroup":["wall"],"x":33.50014864588804,"y":-15.502909427712012,"_data":{"mirror":{}},"curve":-20},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":-13.17010942771202,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":47.49694864588805,"y":-14.336509427712016,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":48.66334864588806,"y":0.8266905722879869,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":0.8266905722879869,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":33.50014864588804,"y":-93.65170942771203,"_data":{"mirror":{}},"color":"4F424B"},{"cMask":["wall"],"cGroup":["wall"],"x":16.004148645888,"y":-84.32050942771204,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":4.340148645888014,"y":-101.81650942771205,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":25.335348645888025,"y":-94.81810942771205,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":24.168948645888015,"y":-78.48850942771205,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":4.340148645888014,"y":-115.81330942771206,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":12.504948645888028,"y":-104.14930942771204,"_data":{"mirror":{}}},{"cMask":["wall"],"cGroup":["wall"],"x":2.007348645887994,"y":-91.31890942771204,"_data":{"mirror":{}},"curve":-40},{"cMask":["wall"],"cGroup":["wall"],"x":7.839348645887988,"y":-78.48850942771205,"_data":{"mirror":{}},"curve":-40}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"]},{"v0":4,"v1":5,"vis":false,"cMask":["ball"]},{"v0":6,"v1":7,"vis":false,"cMask":["ball"]},{"v0":8,"v1":9,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":9,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":10,"v1":11,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":12,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":6,"v1":13,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":1,"v1":14,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":5,"v1":15,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":12,"v1":14,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":13,"v1":15,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":1,"v1":0,"color":"FFFFFF","cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[-950,90],"b":[-950,460],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":5,"v1":4,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":3,"color":"FFFFFF","cMask":["ball"]},{"v0":6,"v1":7,"color":"FFFFFF","cMask":["ball"]},{"v0":0,"v1":16,"color":"FFFFFF","cMask":["ball"]},{"v0":3,"v1":17,"color":"FFFFFF","cMask":["ball"]},{"v0":18,"v1":19,"color":"FFFFFF","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[0,460],"b":[0,-460],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":9,"v1":10,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":21,"v1":20,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":2,"v1":1,"color":"FFFFFF","bCoef":0,"cMask":[]},{"v0":6,"v1":5,"color":"FFFFFF","bCoef":0,"cMask":[]},{"v0":22,"v1":23,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":24,"v1":25,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":31,"v1":30,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17,"_data":{"mirror":{},"arc":{"a":[0,9],"b":[0,-9],"curve":180,"radius":9,"center":[0,0],"from":1.5707963267948966,"to":-1.5707963267948966}}},{"v0":32,"v1":33,"curve":180,"color":"FFFFFF","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17,"_data":{"mirror":{},"arc":{"a":[0,-9],"b":[0,9],"curve":180,"radius":9,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":34,"v1":35,"color":"545454","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[634.21528583524,-109.20953737271],"b":[634.21528583524,114.16613046747],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":37,"v1":36,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[950,324.62551819445],"b":[634.21528583524,114.16613046747],"curve":89.99999999999999,"radius":268.3403991039501,"center":[897.3373367811101,61.503467248579994],"from":1.3732609811282943,"to":2.9440573079231904}}},{"v0":40,"v1":39,"curve":-179.99999999985,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-1.3091137582980271e-12},{"v0":39,"v1":40,"curve":-179.99999999989004,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-9.59837594750953e-13},{"v0":42,"v1":41,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":41,"v1":42,"curve":-179.99999999999002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-8.720229739557994e-14},{"v0":44,"v1":43,"curve":-179.99999999994003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-5.235199460732664e-13},{"v0":43,"v1":44,"curve":-179.99999999999002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-8.720229739557994e-14},{"v0":46,"v1":45,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":45,"v1":46,"curve":179.99999999999,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":8.732476207549468e-14},{"v0":47,"v1":48,"curve":91.636910923379,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859154628,"_data":{"mirror":{},"arc":{"a":[-950,432.90041943973],"b":[-926.21802170761,460],"curve":91.636910923379,"radius":25.13828405341675,"center":[-951.2771169006963,458.0062414253218],"from":-1.5199707846560215,"to":0.07939502731369887}}},{"v0":50,"v1":49,"curve":91.636910923384,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859153781,"_data":{"mirror":{},"arc":{"a":[-925.43621788149,-460],"b":[-950,-433.32499678239],"curve":91.636910923384,"radius":25.28256767956208,"center":[-950.6799062788779,-458.598420688216],"from":-0.055465023042897375,"to":1.5439007889269152}}},{"v0":51,"v1":52,"curve":91.636910923386,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859153441,"_data":{"mirror":{},"arc":{"a":[950,-433.36622514797],"b":[927.73220749769,-460],"curve":91.636910923386,"radius":24.204762555022047,"center":[951.8078675853928,-457.50337794482414],"from":1.6455565205696998,"to":-3.0382629746400465}}},{"v0":54,"v1":53,"curve":91.636910923367,"color":"545454","bCoef":0.1,"cMask":[],"curveF":0.9718309859156665,"_data":{"mirror":{},"arc":{"a":[925.51401132381,460],"b":[950,434.55334331787],"curve":91.636910923367,"radius":24.621751509309323,"center":[950.1219303877309,459.1747929170858],"from":3.1080710070689648,"to":-1.5757484881411106}}},{"v0":38,"v1":55,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[634.21528583524,-109.20953737271],"b":[950,-319.66892509968],"curve":89.99999999999999,"radius":268.3403991039462,"center":[897.337336781105,-56.546874153815],"from":-2.944057307923168,"to":-1.3732609811282719}}},{"v0":56,"v1":57,"color":"545454","bCoef":0,"cMask":[],"_data":{"mirror":{},"arc":{"a":[-635.67083595539,111.16613046747],"b":[-635.67083595539,-112.20953737271],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":60,"v1":59,"curve":-179.95850096528002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.00036214741196362337},{"v0":59,"v1":60,"curve":-179.95850096552002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474098692984},{"v0":62,"v1":61,"curve":-179.95850096539,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474110039465},{"v0":61,"v1":62,"curve":-179.95850096543003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.00036214741065467026},{"v0":64,"v1":63,"curve":-179.95850096540002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474109164609},{"v0":63,"v1":64,"curve":-179.95850096542003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474107419338},{"v0":66,"v1":65,"curve":-179.95850096542003,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474107419338},{"v0":65,"v1":66,"curve":-179.95850096540002,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":-0.0003621474109164609},{"v0":69,"v1":68,"curve":179.83332296199,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325761397712,"_data":{"mirror":{},"arc":{"a":[-0.10499941090626,2.3835365851378],"b":[-0.077614373673782,-2.4626457981722],"curve":179.83332296199,"radius":2.4231324417770312,"center":[-0.08778242721665591,-0.03953469030282234],"from":1.577901645621793,"to":-1.566600071068867}}},{"v0":68,"v1":69,"curve":179.8333229623,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.001454532573434374,"_data":{"mirror":{},"arc":{"a":[-0.077614373673782,-2.4626457981722],"b":[-0.10499941090626,2.3835365851378],"curve":179.8333229623,"radius":2.4231324417770215,"center":[-0.09483135735658221,-0.03957452273153943],"from":-1.5636910079708084,"to":1.5749925825237343}}},{"v0":71,"v1":70,"curve":179.83332296215,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325747435517,"_data":{"mirror":{},"arc":{"a":[-0.13238444813857,7.2297189684479],"b":[-0.050229336441873,-7.3088281814824],"curve":179.83332296215,"radius":7.269397325331227,"center":[-0.08073349708104605,-0.03949485787417924],"from":1.57790164562024,"to":-1.5666000710674155}}},{"v0":70,"v1":71,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[-0.050229336441873,-7.3088281814824],"b":[-0.13238444813857,7.2297189684479],"curve":179.8333229621,"radius":7.269397325331232,"center":[-0.10188028750275692,-0.039614355160339884],"from":-1.5636910079690913,"to":1.5749925825219155}}},{"v0":73,"v1":72,"curve":179.83332296204,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325757034527,"_data":{"mirror":{},"arc":{"a":[-0.063921855057799,-4.8857369898273],"b":[-0.11869192952281,4.8066277767929],"curve":179.83332296204,"radius":4.846264883554159,"center":[-0.09835582243401074,-0.03959443894593792],"from":-1.5636910079686188,"to":1.574992582521556}}},{"v0":72,"v1":73,"curve":179.83332296211,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325750926065,"_data":{"mirror":{},"arc":{"a":[-0.11869192952281,4.8066277767929],"b":[-0.063921855057799,-4.8857369898273],"curve":179.83332296211,"radius":4.846264883554155,"center":[-0.08425796214861424,-0.039514774088473245],"from":1.5779016456207584,"to":-1.5666000710678214}}},{"v0":75,"v1":74,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[-0.043383077133171,-8.5203737773099],"b":[-0.13923070744664,8.4412645642754],"curve":179.8333229621,"radius":8.480963546219746,"center":[-0.10364252003829548,-0.03962431326752348],"from":-1.5636910079690016,"to":1.5749925825219033}}},{"v0":74,"v1":75,"curve":179.83332296208,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325753543975,"_data":{"mirror":{},"arc":{"a":[-0.13923070744664,8.4412645642754],"b":[-0.043383077133171,-8.5203737773099],"curve":179.83332296208,"radius":8.480963546219748,"center":[-0.07897126454036356,-0.03948489976696926],"from":1.5779016456209276,"to":-1.566600071068026}}},{"v0":77,"v1":76,"curve":179.83332296199,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325761397712,"_data":{"mirror":{},"arc":{"a":[2.7521434462366,3.3835365851378],"b":[0.77952848346911,1.5373542018278],"curve":179.83332296199,"radius":1.3508899499297102,"center":[1.7671786310618869,2.4590107771210135],"from":0.7537568266522571,"to":-2.3907448900383304}}},{"v0":76,"v1":77,"curve":179.8333229623,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.001454532573434374,"_data":{"mirror":{},"arc":{"a":[0.77952848346911,1.5373542018278],"b":[2.7521434462366,3.3835365851378],"curve":179.8333229623,"radius":1.350889949929705,"center":[1.764493298646294,2.4618800098419467],"from":-2.3878358269402127,"to":0.7508477635541396}}},{"v0":79,"v1":78,"curve":179.83332296215,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325747435517,"_data":{"mirror":{},"arc":{"a":[1.7247584090043,2.2297189684479],"b":[0.80691352070102,-3.3088281814824],"curve":179.83332296215,"radius":2.80704517475199,"center":[1.2698639634756796,-0.5402221241615257],"from":1.4080239558978236,"to":-1.7364777607898199}}},{"v0":78,"v1":79,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[0.80691352070102,-3.3088281814824],"b":[1.7247584090043,2.2297189684479],"curve":179.8333229621,"radius":2.807045174751992,"center":[1.2618079662283528,-0.5388870888727606],"from":-1.7335686976915048,"to":1.4051148927995085}}},{"v0":81,"v1":80,"curve":179.83332296204,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325757034527,"_data":{"mirror":{},"arc":{"a":[0.79322100208503,-0.88573698982727],"b":[2.73845092762,5.8066277767929],"curve":179.83332296204,"radius":3.4846724521131596,"center":[1.7609688335717575,2.4618600936297734],"from":-1.8522116549062244,"to":1.2864719355837022}}},{"v0":80,"v1":81,"curve":179.83332296211,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325750926065,"_data":{"mirror":{},"arc":{"a":[2.73845092762,5.8066277767929],"b":[0.79322100208503,-0.88573698982727],"curve":179.83332296211,"radius":3.484672452113157,"center":[1.7707030961312535,2.4590306933364436],"from":1.2893809986829656,"to":-1.8551207180054876}}},{"v0":83,"v1":82,"curve":179.8333229621,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325751798702,"_data":{"mirror":{},"arc":{"a":[0.81375978000966,-4.5203737773099],"b":[1.7179121496962,3.4412645642754],"curve":179.8333229621,"radius":4.006410875910358,"center":[1.2600457336932362,-0.5388970469799467],"from":-1.6824209474048868,"to":1.4562626430861425}}},{"v0":82,"v1":83,"curve":179.83332296208,"color":"F8F8F8","bCoef":0.1,"cMask":[],"curveF":0.0014545325753543975,"_data":{"mirror":{},"arc":{"a":[1.7179121496962,3.4412645642754],"b":[0.81375978000966,-4.5203737773099],"curve":179.83332296208,"radius":4.006410875910359,"center":[1.2716261960132296,-0.5402121660546223],"from":1.4591717061850586,"to":-1.685330010503803}}},{"v0":86,"v1":87,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[-635.67083595539,111.16613046747],"b":[-950,321.62551819445],"curve":89.99999999999999,"radius":267.4845577331509,"center":[-898.065111841185,59.231242308655],"from":0.19540141146073078,"to":1.7661977382556275}}},{"v0":89,"v1":88,"curve":89.99999999999999,"color":"545454","bCoef":0,"cMask":[],"curveF":1.0000000000000002,"_data":{"mirror":{},"arc":{"a":[-950,-322.66892509968],"b":[-635.67083595539,-112.20953737271],"curve":89.99999999999999,"radius":267.48455773314697,"center":[-898.0651118411799,-60.27464921388997],"from":-1.7661977382556497,"to":-0.19540141146075288}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":90,"v1":91,"_data":{"mirror":{},"arc":{"a":[47.49694864588799,55.64749057228801],"b":[-32.984651354112025,-21.33490942771202],"curve":200,"radius":56.54471685995944,"center":[0.46911156604232573,24.251829337581178],"from":0.5886466728712967,"to":-2.2038801303196314}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":92,"v1":93,"_data":{"mirror":{},"arc":{"a":[49.82974864588801,43.98349057228799],"b":[70.82494864588801,25.321090572288],"curve":30,"radius":54.266933529330686,"center":[95.15186114147471,73.82986712982304],"from":-2.5592380552757716,"to":-2.035639279677473}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":92,"v1":94,"_data":{"mirror":{},"arc":{"a":[49.82974864588801,43.98349057228799],"b":[20.669748645888042,14.823490572287994],"curve":10,"radius":236.5791752713133,"center":[201.89991122014837,-137.24667200197223],"from":2.268928027592629,"to":2.4434609527920617}},"curve":10},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":94,"v1":95,"_data":{"mirror":{},"arc":{"a":[20.669748645888042,14.823490572287994],"b":[-16.655051354111997,15.98989057228799],"curve":30,"radius":72.14117596700908,"center":[-0.16918338508613973,-54.24233441888551],"from":1.2777571055654793,"to":1.801355881163778}},"curve":30},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":95,"v1":96,"_data":{"mirror":{},"arc":{"a":[-16.655051354111997,15.98989057228799],"b":[-21.32065135411198,-59.82610942771203],"curve":20,"radius":218.71643655723577,"center":[195.99909986395622,-35.14807565651617],"from":2.9055987725075947,"to":-3.028520684273126}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":97,"v1":98,"_data":{"mirror":{},"arc":{"a":[-18.987851354112017,-28.333309427712024],"b":[14.837748645887991,-29.49970942771202],"radius":null,"center":[null,null],"from":null,"to":null}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":96,"v1":99,"_data":{"mirror":{},"arc":{"a":[-21.32065135411198,-59.82610942771203],"b":[-22.48705135411199,-91.31890942771204],"curve":200,"radius":16.00027645054401,"center":[-24.68036652313977,-75.46967553256286],"from":1.3592432857215326,"to":-1.4332835174693932}}},{"curve":-200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":96,"v1":100,"_data":{"mirror":{},"arc":{"a":[-21.32065135411198,-59.82610942771203],"b":[-28.319051354111984,-88.98610942771205],"curve":-200,"radius":15.225332510142962,"center":[-22.249003975382557,-75.0231127986071],"from":-1.9808742327151931,"to":1.5097842712734666}}},{"curve":60,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":101,"v1":102,"_data":{"mirror":{},"arc":{"a":[-11.989451354112013,-66.82450942771203],"b":[-28.319051354111984,-70.32370942771203],"curve":60,"radius":16.700306488205516,"center":[-17.12385526118949,-82.71595786135038],"from":1.2582908844193448,"to":2.3054884356159424}}},{"curve":200,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":103,"v1":104,"_data":{"mirror":{},"arc":{"a":[-15.488651354111987,-90.15250942771203],"b":[-21.32065135411198,-78.48850942771205],"curve":200,"radius":6.6209615048679975,"center":[-17.37631240262021,-83.80633995196615],"from":-1.2816816429935245,"to":2.208976860995137}}},{"curve":-180,"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":99,"v1":105,"_data":{"mirror":{},"arc":{"a":[-22.48705135411199,-91.31890942771204],"b":[-11.989451354112013,-79.65490942771204],"curve":-180,"radius":7.846153544253381,"center":[-17.238251354112002,-85.48690942771205],"from":0.8379812250083918,"to":-2.3036114285814024}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":106,"v1":107,"_data":{"mirror":{},"arc":{"a":[12.504948645888028,-53.99410942771203],"b":[18.33694864588802,-15.502909427712012],"curve":20,"radius":112.09593936456947,"center":[-93.72627274174661,-18.211051641706803],"from":-0.3249043532065673,"to":0.024161497192298688}},"curve":20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":108,"v1":109,"_data":{"mirror":{},"arc":{"a":[27.668148645888046,-57.493309427712035],"b":[33.50014864588804,-15.502909427712012],"curve":-20,"radius":122.06711886787193,"center":[149.65384470512586,-53.03556721371724],"from":2.829053704732841,"to":-3.1050657520478797}},"curve":-20},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":110,"v1":111,"_data":{"mirror":{},"arc":{"a":[7.839348645887988,-13.17010942771202],"b":[47.49694864588805,-14.336509427712016],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":111,"v1":112,"_data":{"mirror":{},"arc":{"a":[47.49694864588805,-14.336509427712016],"b":[48.66334864588806,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":112,"v1":113,"_data":{"mirror":{},"arc":{"a":[48.66334864588806,0.8266905722879869],"b":[7.839348645887988,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":110,"v1":113,"_data":{"mirror":{},"arc":{"a":[7.839348645887988,-13.17010942771202],"b":[7.839348645887988,0.8266905722879869],"radius":null,"center":[null,null],"from":null,"to":null}}},{"color":"FFFFFF","cMask":["wall"],"cGroup":["wall"],"v0":106,"v1":108,"_data":{"mirror":{},"arc":{"a":[12.504948645888028,-53.99410942771203],"b":[27.668148645888046,-57.493309427712035],"curve":30,"radius":30.06292863462352,"center":[26.616144738810547,-27.448793025047795],"from":-2.059394562647932,"to":-1.5357957870496328}},"curve":30},{"curve":-40,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":117,"v1":118,"_data":{"mirror":{},"arc":{"a":[25.335348645888025,-94.81810942771205],"b":[24.168948645888015,-78.48850942771205],"curve":-40,"radius":23.93309935589575,"center":[47.18475228025112,-85.0509805966861],"from":2.863834267976218,"to":-2.7212193384056365}}},{"curve":-20,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":119,"v1":120,"_data":{"mirror":{},"arc":{"a":[4.340148645888014,-115.81330942771206],"b":[12.504948645888028,-104.14930942771204],"curve":-20,"radius":40.9958994718067,"center":[41.497464217898546,-133.13375032811942],"from":2.3563337640011515,"to":2.7053996144000174}}},{"curve":-40,"color":"4F424B","cMask":["wall"],"cGroup":["wall"],"v0":121,"v1":122,"_data":{"mirror":{},"arc":{"a":[2.007348645887994,-91.31890942771204],"b":[7.839348645887988,-78.48850942771205],"curve":-40,"radius":20.60355961283373,"center":[22.548965787173277,-92.91535358284172],"from":2.3658993100640515,"to":3.0640310108617834}}}],"planes":[{"normal":[0,1],"dist":-456,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-456,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,-456],"b":[500.2489671314588,-456]}}},{"normal":[0,-1],"dist":-456,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-456,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,456],"b":[500.2489671314588,456]}}},{"normal":[0,1],"dist":-508,"bCoef":0.2,"_data":{"extremes":{"normal":[0,1],"dist":-508,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,-508],"b":[500.2489671314588,-508]}}},{"normal":[0,-1],"dist":-508,"bCoef":0.2,"_data":{"extremes":{"normal":[0,-1],"dist":-508,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-500.2489671314588,508],"b":[500.2489671314588,508]}}},{"normal":[1,0],"dist":-1002,"bCoef":0.2,"_data":{"extremes":{"normal":[1,0],"dist":-1002,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[-1002,-246.41893566105193],"b":[-1002,246.41893566105193]}}},{"normal":[-1,0],"dist":-1002,"bCoef":0.2,"_data":{"extremes":{"normal":[-1,0],"dist":-1002,"canvas_rect":[-500.2489671314588,-246.41893566105193,500.2489671314588,246.41893566105193],"a":[1002,-246.41893566105193],"b":[1002,246.41893566105193]}}}],"goals":[{"p0":[-957.4,-90],"p1":[-957.4,90],"team":"red"},{"p0":[957.4,90],"p1":[957.4,-90],"team":"blue"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"invMass":1.5,(ballMode)},{"radius":7,"invMass":0,"pos":[-950,90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[-950,-90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[950,90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":7,"invMass":0,"pos":[950,-90],"color":"6666CC","bCoef":1,"_data":{"mirror":{}}},{"radius":3,"invMass":0,"pos":[-950,460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[-950,-460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[950,-460],"color":"FFCC00","bCoef":0.1,"cMask":[]},{"radius":3,"invMass":0,"pos":[950,460],"color":"FFCC00","bCoef":0.1,"cMask":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09, "kickStrength":(kickStr)},"ballPhysics":"disc0","spawnDistance":310,"traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
var v7Map = '{"name":"Sindicato del Hax X7","height":635,"width":1275,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":450,"kickOffReset":"partial","bg":{"type":"grass","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0,"color":"2a3a40","goalLine":0},"canBeStored":true,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150]],"playerPhysics":{"bCoef":0,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":5.2,"cGroup":[],"gravity":[0,0],"radius":15,"kickback":0},"segments":[{"v0":0,"v1":1,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":2,"v1":3,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":0,"v1":4,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":1,"v1":5,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":3,"v1":6,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":2,"v1":7,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":4,"v1":8,"curve":0,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":8,"v1":9,"curve":-24.331469448392305,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":9,"v1":7,"curve":0,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":5,"v1":10,"curve":0,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":10,"v1":11,"curve":24.331469448392305,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":11,"v1":6,"curve":0,"vis":true,"color":"7d6fff","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":12,"v1":13,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"bias":0},{"v0":14,"v1":15,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"bias":0},{"v0":13,"v1":14,"curve":180,"vis":true,"color":"346DA2","bCoef":1,"cMask":["red","blue"],"cGroup":["redKO"],"bias":0},{"v0":14,"v1":13,"curve":180,"vis":true,"color":"CB3A48","bCoef":1,"cMask":["red","blue"],"cGroup":["blueKO"],"bias":0},{"v0":17,"v1":16,"curve":161.92651649252022,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":16,"v1":17,"curve":180,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":16,"v1":17,"curve":110,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":17,"v1":16,"curve":209.95973618119308,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":19,"v1":20,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0,"x":-787},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":21,"v1":23,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0,"x":-787},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":30,"v1":31,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":32,"v1":33,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":12,"v1":34,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"bias":0},{"v0":15,"v1":35,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"bias":0},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":46,"v1":47,"curve":0,"vis":false,"color":"33EFFF","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":48,"v1":49,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":50,"v1":51,"curve":0,"vis":false,"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":54,"v1":55,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":56,"v1":57,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":58,"v1":59,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":60,"v1":61,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":62,"v1":63,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":66,"v1":67,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":68,"v1":69,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":70,"v1":71,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":72,"v1":73,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":87,"v1":86,"curve":180,"vis":true,"color":"33EFFF","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":86,"v1":87,"curve":180,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":86,"v1":87,"curve":110,"vis":true,"color":"33EFFF","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":87,"v1":86,"curve":110,"vis":true,"color":"33EFFF","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":91,"v1":92,"curve":89.99999999999999,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":93,"v1":94,"curve":89.99999999999999,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":96,"v1":95,"curve":89.99999999999999,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":98,"v1":97,"curve":89.99999999999999,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":99,"v1":100,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":101,"v1":102,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":103,"v1":104,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":105,"v1":106,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":107,"v1":108,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":109,"v1":110,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":111,"v1":112,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":113,"v1":114,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":115,"v1":116,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":117,"v1":118,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":1200},{"v0":119,"v1":120,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":121,"v1":122,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":123,"v1":124,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":125,"v1":126,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":127,"v1":128,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":129,"v1":130,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":131,"v1":132,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":133,"v1":134,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":135,"v1":136,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":137,"v1":138,"color":"B3B6B6","cMask":["wall"],"_comment":"","x":-1200},{"v0":139,"v1":140,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":140,"v1":141,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":141,"v1":142,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":147,"v1":149,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["wall"],"bias":0},{"v0":23,"v1":88,"curve":0,"color":"7d6fff","bCoef":0.5,"cMask":["wall"]},{"v0":151,"v1":150,"curve":199.47600136593647,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":150,"v1":151,"curve":180,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":150,"v1":151,"curve":110,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":151,"v1":150,"curve":110,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":152,"v1":153,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0,"x":-787},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0,"x":-787},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":158,"v1":159,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":[],"cGroup":[],"bias":0},{"v0":161,"v1":162,"curve":0,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["wall"],"bias":0},{"v0":155,"v1":156,"curve":0,"color":"7d6fff","bCoef":0.5,"cMask":["wall"]},{"v0":163,"v1":164,"curve":134.93188677213274,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["wall"],"bias":0},{"v0":167,"v1":168,"curve":134.93188677213274,"vis":true,"color":"7d6fff","bCoef":1,"cMask":["wall"],"bias":0},{"v0":169,"v1":170,"curve":187.03429713735625,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":171,"v1":172,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":171,"v1":173,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":173,"v1":174,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":174,"v1":175,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":176,"v1":177,"curve":180,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":177,"v1":176,"curve":180,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":178,"v1":179,"curve":-58.96770898915353,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":178,"v1":180,"curve":-58.96770898915353,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":181,"v1":171,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":182,"v1":181,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":175,"v1":182,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":183,"v1":184,"curve":67.27717770407865,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":185,"v1":186,"curve":45,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":184,"v1":185,"curve":-7.775819121666147,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":187,"v1":186,"curve":-50,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":188,"v1":189,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":189,"v1":190,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":190,"v1":191,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":191,"v1":188,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":192,"v1":193,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":189,"v1":193,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":194,"v1":193,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":195,"v1":196,"curve":50,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":197,"v1":198,"curve":50,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":199,"v1":200,"curve":48.682179873384705,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":201,"v1":202,"curve":-43.60281897270316,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":203,"v1":204,"curve":50,"vis":true,"color":"B3B6B6","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":205,"v1":206,"curve":180,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":206,"v1":205,"curve":180,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0},{"v0":207,"v1":208,"curve":55.79454206189545,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["wall"],"cGroup":["wall"],"bias":0}],"vertexes":[/* 0 */{"x":-1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 1 */{"x":1200,"y":-600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 2 */{"x":-1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 3 */{"x":1200,"y":600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 4 */{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 5 */{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 6 */{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 7 */{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 8 */{"x":-1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 9 */{"x":-1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 10 */{"x":1252,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":24.331469448392305},/* 11 */{"x":1252,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":24.331469448392305},/* 12 */{"x":0,"y":-600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 13 */{"x":0,"y":-170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"CB3A48"},/* 14 */{"x":0,"y":170,"bCoef":1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"CB3A48"},/* 15 */{"x":0,"y":600,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 16 */{"x":-787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 17 */{"x":-787,"y":5,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 18 */{"x":787,"y":205,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 19 */{"x":-787,"y":-470,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 20 */{"x":-787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 21 */{"x":-787,"y":205,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 22 */{"x":787,"y":-205,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 23 */{"x":-787,"y":470,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 24 */{"x":-1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 25 */{"x":-1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},/* 26 */{"x":1543.25,"y":644,"bCoef":1,"cMask":[],"cGroup":[]},/* 27 */{"x":1543.25,"y":154,"bCoef":1,"cMask":[],"cGroup":[]},/* 28 */{"x":-1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},/* 29 */{"x":-1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},/* 30 */{"x":1206.5,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 31 */{"x":1206.5,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},/* 32 */{"x":1206.5,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},/* 33 */{"x":1206.5,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},/* 34 */{"x":0,"y":-635,"bCoef":1,"cMask":[],"cGroup":[]},/* 35 */{"x":0,"y":635,"bCoef":1,"cMask":[],"cGroup":[]},/* 36 */{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},/* 37 */{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},/* 38 */{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},/* 39 */{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},/* 40 */{"x":1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 41 */{"x":1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 42 */{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[]},/* 43 */{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[]},/* 44 */{"x":-1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 45 */{"x":-1199,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 46 */{"x":-1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 47 */{"x":-1200,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 48 */{"x":1200,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 49 */{"x":1252,"y":-116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 50 */{"x":1200,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 51 */{"x":1252,"y":116.5,"bCoef":1,"cMask":[],"cGroup":[]},/* 52 */{"x":-1200,"y":-110,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 53 */{"x":-1200,"y":110,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 54 */{"x":250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},/* 55 */{"x":250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 56 */{"x":500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},/* 57 */{"x":500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 58 */{"x":800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},/* 59 */{"x":800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 60 */{"x":-250,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},/* 61 */{"x":-250,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 62 */{"x":-500,"y":585,"bCoef":1,"cMask":[],"cGroup":[]},/* 63 */{"x":-500,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 64 */{"x":-800,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},/* 65 */{"x":-800,"y":616,"bCoef":1,"cMask":[],"cGroup":[]},/* 66 */{"x":250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},/* 67 */{"x":250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 68 */{"x":500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},/* 69 */{"x":500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 70 */{"x":800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 71 */{"x":800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 72 */{"x":-250,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},/* 73 */{"x":-250,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 74 */{"x":-500,"y":-585,"bCoef":1,"cMask":[],"cGroup":[]},/* 75 */{"x":-500,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 76 */{"x":-800,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 77 */{"x":-800,"y":-616,"bCoef":1,"cMask":[],"cGroup":[]},/* 78 */{"x":-1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},/* 79 */{"x":-1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},/* 80 */{"x":-1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},/* 81 */{"x":-1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},/* 82 */{"x":1200,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},/* 83 */{"x":1216,"y":-250,"bCoef":1,"cMask":[],"cGroup":[]},/* 84 */{"x":1200,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},/* 85 */{"x":1216,"y":250,"bCoef":1,"cMask":[],"cGroup":[]},/* 86 */{"x":787,"y":-5,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 87 */{"x":787,"y":5,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 88 */{"x":-1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 89 */{"x":1200,"y":-470,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 90 */{"x":1200,"y":470,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 91 */{"x":-1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 92 */{"x":-1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]},/* 93 */{"x":-1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[]},/* 94 */{"x":-1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[]},/* 95 */{"x":1200,"y":570,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 96 */{"x":1170,"y":600,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 97 */{"x":1170,"y":-600,"bCoef":1,"cMask":[],"cGroup":[]},/* 98 */{"x":1200,"y":-570,"bCoef":1,"cMask":[],"cGroup":[]},/* 99 */{"x":1200,"y":-20,"cMask":["wall"],"color":"B3B6B6"},/* 100 */{"x":1200,"y":-41.81819152832031,"cMask":["wall"],"color":"B3B6B6"},/* 101 */{"x":1200,"y":24,"cMask":["wall"],"color":"B3B6B6"},/* 102 */{"x":1200,"y":2.1818084716796875,"cMask":["wall"],"color":"B3B6B6"},/* 103 */{"x":1200,"y":2,"cMask":["wall"],"color":"B3B6B6"},/* 104 */{"x":1200,"y":-19.818191528320312,"cMask":["wall"],"color":"B3B6B6"},/* 105 */{"x":1200,"y":68,"cMask":["wall"],"color":"B3B6B6"},/* 106 */{"x":1200,"y":46.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 107 */{"x":1200,"y":46,"cMask":["wall"],"color":"B3B6B6"},/* 108 */{"x":1200,"y":24.181808471679688,"cMask":["wall"],"color":"B3B6B6"},/* 109 */{"x":1200,"y":90,"cMask":["wall"],"color":"B3B6B6"},/* 110 */{"x":1200,"y":68.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 111 */{"x":1200,"y":-42,"cMask":["wall"],"color":"B3B6B6"},/* 112 */{"x":1200,"y":-66,"cMask":["wall"],"color":"B3B6B6"},/* 113 */{"x":1200,"y":112,"cMask":["wall"],"color":"B3B6B6"},/* 114 */{"x":1200,"y":90.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 115 */{"x":1200,"y":-66,"cMask":["wall"],"color":"B3B6B6"},/* 116 */{"x":1200,"y":-87.81819152832031,"cMask":["wall"],"color":"B3B6B6"},/* 117 */{"x":1200,"y":-88,"cMask":["wall"],"color":"B3B6B6"},/* 118 */{"x":1200,"y":-112,"cMask":["wall"],"color":"B3B6B6"},/* 119 */{"x":-1200,"y":-22,"cMask":["wall"],"color":"B3B6B6"},/* 120 */{"x":-1200,"y":-43.81819152832031,"cMask":["wall"],"color":"B3B6B6"},/* 121 */{"x":-1200,"y":22,"cMask":["wall"],"color":"B3B6B6"},/* 122 */{"x":-1200,"y":0.1818084716796875,"cMask":["wall"],"color":"B3B6B6"},/* 123 */{"x":-1200,"y":0,"cMask":["wall"],"color":"B3B6B6"},/* 124 */{"x":-1200,"y":-21.818191528320312,"cMask":["wall"],"color":"B3B6B6"},/* 125 */{"x":-1200,"y":66,"cMask":["wall"],"color":"B3B6B6"},/* 126 */{"x":-1200,"y":44.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 127 */{"x":-1200,"y":44,"cMask":["wall"],"color":"B3B6B6"},/* 128 */{"x":-1200,"y":22.181808471679688,"cMask":["wall"],"color":"B3B6B6"},/* 129 */{"x":-1200,"y":88,"cMask":["wall"],"color":"B3B6B6"},/* 130 */{"x":-1200,"y":66.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 131 */{"x":-1200,"y":-44,"cMask":["wall"],"color":"B3B6B6"},/* 132 */{"x":-1200,"y":-68,"cMask":["wall"],"color":"B3B6B6"},/* 133 */{"x":-1200,"y":110,"cMask":["wall"],"color":"B3B6B6"},/* 134 */{"x":-1200,"y":88.18180847167969,"cMask":["wall"],"color":"B3B6B6"},/* 135 */{"x":-1200,"y":-68,"cMask":["wall"],"color":"B3B6B6"},/* 136 */{"x":-1200,"y":-89.81819152832031,"cMask":["wall"],"color":"B3B6B6"},/* 137 */{"x":-1200,"y":-90,"cMask":["wall"],"color":"B3B6B6"},/* 138 */{"x":-1200,"y":-114,"cMask":["wall"],"color":"B3B6B6"},/* 139 */{"x":-1198.2646570411805,"y":-202.98618187250156,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 140 */{"x":-1096.8979570598692,"y":-202.0438789570645,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 141 */{"x":-1096.8979570598692,"y":199.30176012701736,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 142 */{"x":-1198.2646570411805,"y":200.6512975887836,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 143 */{"x":-1197.1672417450477,"y":296.83111555269033,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 144 */{"x":-1197.1672417450477,"y":-285.725534290999,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 145 */{"x":1198.652990297005,"y":-290.1166180042713,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 146 */{"x":1197.3324527176183,"y":292.43853514228203,"bCoef":1,"cMask":[],"cGroup":[],"color":"33EFFF"},/* 147 */{"x":-783.1509063307032,"y":-465.8614716115115,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 148 */{"x":-1198.648975605835,"y":-468.37964172833045,"bCoef":1,"cMask":["wall"]},/* 149 */{"x":-1197.3203140097646,"y":-467.8505403682286,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 150 */{"x":787.0034875285754,"y":4.41708250539427,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 151 */{"x":786.996080716338,"y":-5.582914751561979,"bCoef":1,"cMask":[],"cGroup":[],"color":"B3B6B6"},/* 152 */{"x":787.3479042976148,"y":469.4169549538598,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 153 */{"x":787.1516237733235,"y":204.4170276445192,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 154 */{"x":786.8479444715899,"y":-205.58285989068693,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 155 */{"x":786.6516639472986,"y":-470.5827872000275,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 156 */{"x":1199.6515506595917,"y":-470.88868854543233,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff"},/* 157 */{"x":1198.41560945056,"y":203.35830571441687,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 158 */{"x":1093.1800466952525,"y":203.2349769031678,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 159 */{"x":1093.1800466952525,"y":-200.11415717882625,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 160 */{"x":1198.41560945056,"y":-201.53821366532142,"bCoef":1,"cMask":[],"cGroup":[],"color":"7d6fff","curve":0},/* 161 */{"x":783.4957463538699,"y":465.281278651997,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 162 */{"x":1197.6665136903316,"y":466.96357935938823,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 163 */{"x":-783.9723377324856,"y":-179.9538991467726,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 164 */{"x":-783.9723377324856,"y":174.8077244905883,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 165 */{"x":786.7941102314973,"y":187.82596728924307,"bCoef":1},/* 166 */{"x":785.0580607274053,"y":-171.4623130412278,"bCoef":1},/* 167 */{"x":783.4483264271894,"y":182.2217110179278,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 168 */{"x":784.4748931373806,"y":-172.53842733840725,"bCoef":1,"cMask":["wall"],"color":"7d6fff"},/* 169 */{"x":56.187962564608036,"y":112.61530216038405,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 170 */{"x":-61.828468563968045,"y":-22.56288090521602,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 171 */{"x":70.90091499520003,"y":104.39690076160005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 172 */{"x":93.36006830080005,"y":78.15659591680004,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 173 */{"x":37.73521745920002,"y":39.95406592000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 174 */{"x":-38.883489689600026,"y":47.51233792000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 175 */{"x":-49.797634457600026,"y":-80.94805299200004,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"FFFFFF"},/* 176 */{"x":-43.08992000000002,"y":-79.92012800000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 177 */{"x":-48.12876800000002,"y":-134.08774400000007,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 178 */{"x":-44.34963200000002,"y":-29.53164800000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 179 */{"x":14.856832000000006,"y":-34.57049600000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 180 */{"x":16.116544000000005,"y":-29.53164800000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 181 */{"x":32.49280000000002,"y":37.23308800000001,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 182 */{"x":-36.79136000000002,"y":42.27193600000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 183 */{"x":4.779136000000001,"y":-59.76473600000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":45,"color":"FFFFFF"},/* 184 */{"x":16.116544000000005,"y":-14.41510400000001,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":50,"color":"FFFFFF"},/* 185 */{"x":40.05107200000002,"y":-24.492800000000013,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":50,"color":"FFFFFF"},/* 186 */{"x":21.15539200000001,"y":-67.32300800000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":-50,"color":"FFFFFF"},/* 187 */{"x":3.5194240000000008,"y":-59.76473600000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"curve":-50,"color":"FFFFFF"},/* 188 */{"x":7.298560000000003,"y":-9.376256000000005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 189 */{"x":51.38848000000002,"y":-29.53164800000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 190 */{"x":52.64819200000002,"y":-18.19424000000001,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 191 */{"x":21.15539200000001,"y":-4.3374080000000035,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 192 */{"x":47.60934400000002,"y":-25.752512000000017,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 193 */{"x":70.28416000000003,"y":-34.57049600000002,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 194 */{"x":47.60934400000002,"y":-19.45395200000001,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 195 */{"x":24.93452800000001,"y":-88.73811200000004,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 196 */{"x":24.93452800000001,"y":-111.41292800000005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 197 */{"x":11.077696000000007,"y":-77.40070400000005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"],"color":"FFFFFF"},/* 198 */{"x":1,"y":-93.77696000000005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 199 */{"x":23.67481600000001,"y":-126.52947200000006,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 200 */{"x":22.67481600000001,"y":-157.46400000000006,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 201 */{"x":6.038848,"y":-145.42515200000008,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 202 */{"x":-2.5194240000000043,"y":-180.1388160000001,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 203 */{"x":3.519424000000001,"y":-121.49062400000005,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 204 */{"x":-14.116544000000008,"y":-141.64601600000006,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 205 */{"x":-49.000000000000014,"y":-122.00000000000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 206 */{"x":-39.00000000000001,"y":-112.00000000000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 207 */{"x":-23.000000000000007,"y":-95.00000000000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]},/* 208 */{"x":-47.000000000000014,"y":-94.00000000000003,"bCoef":1,"cMask":["wall"],"cGroup":["wall"]}],"goals":[{"p0":[-1206,110],"p1":[-1206,-110],"team":"red"},{"p0":[1206,110],"p1":[1206,-110],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-600,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-635,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-1275,"bCoef":1,"cMask":["all"],"cGroup":["wall"]}],"discs":[{"radius":6,"invMass":0,"pos":[-1200,-110],"color":"CB3A48","bCoef":0.5,"cMask":["all"],"cGroup":["all"],"damping":0.99,"speed":[0,0],"gravity":[0,0],"x":-1200},{"radius":6,"invMass":0,"pos":[1200,-110],"color":"346DA2","bCoef":0.5,"cMask":["all"],"cGroup":["all"],"damping":0.99,"speed":[0,0],"gravity":[0,0],"x":1200},{"radius":6,"invMass":0,"pos":[-1200,110],"color":"CB3A48","bCoef":0.5,"cMask":["all"],"cGroup":["all"],"damping":0.99,"speed":[0,0],"gravity":[0,0],"x":-1200},{"radius":6,"invMass":0,"pos":[1200,110],"color":"346DA2","bCoef":0.5,"cMask":["all"],"cGroup":["all"],"damping":0.99,"speed":[0,0],"gravity":[0,0],"x":1200},{"radius":4,"invMass":1,"pos":[1200,600],"color":"D7D004","bCoef":0.5,"cMask":[],"cGroup":[],"damping":0.99,"speed":[0,0],"gravity":[0,0]},{"radius":4,"invMass":1,"pos":[-1200,600],"color":"D7D004","bCoef":0.5,"cMask":[],"cGroup":[],"damping":0.99,"speed":[0,0],"gravity":[0,0]},{"radius":4,"invMass":1,"pos":[-1200,-600],"color":"D7D004","bCoef":0.5,"cMask":[],"cGroup":[],"damping":0.99,"speed":[0,0],"gravity":[0,0]},{"radius":4,"invMass":1,"pos":[1200,-600],"color":"D7D004","bCoef":0.5,"cMask":[],"cGroup":[],"damping":0.99,"speed":[0,0],"gravity":[0,0]},{"radius":0,"invMass":1,"pos":[-1228,142],"color":"B3B6B6","bCoef":0.5,"cMask":["all"],"cGroup":["all"],"damping":0.99,"speed":[0,0],"gravity":[0,0]}],"joints":[],"ballPhysics":{"speed":[0,0],"gravity":[0,0],"radius":6.25,"bCoef":0.35,"invMass":1.5,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball","kick","score"]},"traits":[],"_version":"v1.00","_memo":""}';
var v10Map = '{"name":"Sindicato del Hax 10v9 v2","width":1475,"height":835,"bg":{"color":"2a3a40"},"vertexes":[/* 0 */{"x":-1397.222963951936,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 1 */{"x":1397.222963951936,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 2 */{"x":-1397.222963951936,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 3 */{"x":1397.222963951936,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 4 */{"x":-1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 5 */{"x":1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 6 */{"x":1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 7 */{"x":-1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 8 */{"x":-1457.769292389853,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 9 */{"x":-1457.769292389853,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 10 */{"x":1457.769292389853,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 11 */{"x":1457.769292389853,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 12 */{"x":0,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 13 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 14 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 15 */{"x":0,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 16 */{"x":-916.3453938584779,"y":-5.821762349799733,"cMask":[],"cGroup":[]},/* 17 */{"x":-916.3453938584779,"y":5.821762349799733,"cMask":[],"cGroup":[]},/* 18 */{"x":916.3453938584779,"y":455.692256341789,"cMask":[],"cGroup":[]},/* 19 */{"x":-916.3453938584779,"y":-460.692256341789,"cMask":[],"cGroup":[]},/* 20 */{"x":-916.3453938584779,"y":455.692256341789,"cMask":[],"cGroup":[]},/* 21 */{"x":916.3453938584779,"y":-460.692256341789,"cMask":[],"cGroup":[]},/* 22 */{"x":-915.678905206942,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 23 */{"x":-1404.7912550066756,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 24 */{"x":-1404.7912550066756,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 25 */{"x":1796.8869492656875,"y":749.8429906542056,"cMask":[],"cGroup":[]},/* 26 */{"x":-1404.7912550066756,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 27 */{"x":-1404.7912550066756,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 28 */{"x":1404.7912550066756,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 29 */{"x":1404.7912550066756,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 30 */{"x":1404.7912550066756,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 31 */{"x":1404.7912550066756,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 32 */{"x":0,"y":-739.363818424566,"cMask":[],"cGroup":[]},/* 33 */{"x":0,"y":739.363818424566,"cMask":[],"cGroup":[]},/* 34 */{"x":-1399.5516688918558,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 35 */{"x":-1399.5516688918558,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 36 */{"x":1399.5516688918558,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 37 */{"x":1399.5516688918558,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 38 */{"x":1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[],"color":"00008b"},/* 39 */{"x":1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[],"color":"00008b"},/* 40 */{"x":-1394.894259012016,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 41 */{"x":-1394.894259012016,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 42 */{"x":-1457.769292389853,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 43 */{"x":-1396.058611481976,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 44 */{"x":-1457.769292389853,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 45 */{"x":-1396.058611481976,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 46 */{"x":1398.3873164218958,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 47 */{"x":1457.769292389853,"y":-135.6470627503338,"cMask":[],"cGroup":[]},/* 48 */{"x":1397.222963951936,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 49 */{"x":1457.769292389853,"y":135.6470627503338,"cMask":[],"cGroup":[]},/* 50 */{"x":1397.222963951936,"y":-80.3403204272363,"cMask":[],"cGroup":[]},/* 51 */{"x":1397.222963951936,"y":-48.90280373831776,"cMask":[],"cGroup":[]},/* 52 */{"x":1397.222963951936,"y":-17.465287049399198,"cMask":[],"cGroup":[]},/* 53 */{"x":1397.222963951936,"y":13.972229639519359,"cMask":[],"cGroup":[]},/* 54 */{"x":1397.222963951936,"y":45.40974632843792,"cMask":[],"cGroup":[]},/* 55 */{"x":1397.222963951936,"y":80.3403204272363,"cMask":[],"cGroup":[]},/* 56 */{"x":-1397.222963951936,"y":-128.07877169559413,"cMask":[],"cGroup":[]},/* 57 */{"x":-1397.222963951936,"y":128.07877169559413,"cMask":[],"cGroup":[]},/* 58 */{"x":-1397.222963951936,"y":-80.3403204272363,"cMask":[],"cGroup":[]},/* 59 */{"x":-1397.222963951936,"y":-48.90280373831776,"cMask":[],"cGroup":[]},/* 60 */{"x":-1397.222963951936,"y":-17.465287049399198,"cMask":[],"cGroup":[]},/* 61 */{"x":-1397.222963951936,"y":13.972229639519359,"cMask":[],"cGroup":[]},/* 62 */{"x":-1397.222963951936,"y":45.40974632843792,"cMask":[],"cGroup":[]},/* 63 */{"x":-1397.222963951936,"y":80.3403204272363,"cMask":[],"cGroup":[]},/* 64 */{"x":916.3453938584779,"y":-5.821762349799733,"cMask":[],"cGroup":[]},/* 65 */{"x":916.3453938584779,"y":5.821762349799733,"cMask":[],"cGroup":[]},/* 66 */{"x":-1397.222963951936,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 67 */{"x":-915.678905206942,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 68 */{"x":-1397.222963951936,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 69 */{"x":915.678905206942,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 70 */{"x":1397.222963951936,"y":-461.5313751668892,"cMask":[],"cGroup":[]},/* 71 */{"x":1397.222963951936,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 72 */{"x":915.678905206942,"y":456.0368696723837,"cMask":[],"cGroup":[]},/* 73 */{"x":-1362.2923898531376,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 74 */{"x":-1397.222963951936,"y":-663.6809078771695,"cMask":[],"cGroup":[]},/* 75 */{"x":-1397.222963951936,"y":663.6809078771695,"cMask":[],"cGroup":[]},/* 76 */{"x":-1362.2923898531376,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 77 */{"x":1397.222963951936,"y":663.6809078771695,"cMask":[],"cGroup":[]},/* 78 */{"x":1362.2923898531376,"y":698.611481975968,"cMask":[],"cGroup":[]},/* 79 */{"x":1362.2923898531376,"y":-698.611481975968,"cMask":[],"cGroup":[]},/* 80 */{"x":1397.222963951936,"y":-663.6809078771695,"cMask":[],"cGroup":[]},/* 81 */{"x":51.2820512820513,"y":-192.30769230769238,"cMask":["wall"]},/* 82 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"00008b"},/* 83 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"00008b"},/* 84 */{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 85 */{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},/* 86 */{"x":-39.5,"y":-82,"cMask":["wall"],"color":"0080ff"},/* 87 */{"x":-42.5,"y":29,"cMask":["wall"],"color":"0080ff"},/* 88 */{"x":43.5,"y":30,"cMask":["wall"],"color":"0080ff"},/* 89 */{"x":86.5,"y":100,"cMask":["wall"],"color":"0080ff"},/* 90 */{"x":115.5,"y":73,"cMask":["wall"],"color":"0080ff"},/* 91 */{"x":-39.5,"y":-37,"cMask":["wall"],"color":"0080ff"},/* 92 */{"x":40.5,"y":-60,"cMask":["wall"],"color":"0080ff"},/* 93 */{"x":-57.5,"y":-35,"cMask":["wall"],"color":"0080ff"},/* 94 */{"x":76.5,"y":104,"cMask":["wall"],"color":"0080ff"},/* 95 */{"x":-36.5,"y":-149,"cMask":["wall"]},/* 96 */{"x":-39.5,"y":-82,"cMask":["wall"],"color":"0080ff"},/* 97 */{"x":-36.5,"y":-149,"cMask":["wall"],"color":"0080ff"},/* 98 */{"x":-37.08094399571257,"y":-79.10791561250448,"cMask":["wall"],"color":"0080ff"},/* 99 */{"x":-39.97184473452512,"y":29.0709040796512,"cMask":["wall"],"color":"0080ff"},/* 100 */{"x":47.90064311143442,"y":30.045488040841747,"cMask":["wall"],"color":"0080ff"},/* 101 */{"x":89.40961987520575,"y":95.34261344061139,"cMask":["wall"],"color":"0080ff"},/* 102 */{"x":116.17316158174788,"y":70.77468610037135,"cMask":["wall"],"color":"0080ff"},/* 103 */{"x":-37.08094399571257,"y":-35.251637358927894,"cMask":["wall"],"color":"0080ff"},/* 104 */{"x":40.9370095318302,"y":-55.64165242750204,"cMask":["wall"],"color":"0080ff"},/* 105 */{"x":-54.4263484285878,"y":-33.30246943654669,"cMask":["wall"],"curve":207,"color":"0080ff"},/* 106 */{"x":74.70055123837233,"y":102.16470116894556,"cMask":["wall"],"curve":207,"color":"0080ff"},/* 107 */{"x":-37.190043256900026,"y":-148.4050410122741,"cMask":["wall"],"color":"0080ff"},/* 108 */{"x":-39.08094399571257,"y":-81.10791561250448,"cMask":["wall"],"color":"0080ff"},/* 109 */{"x":-38.190043256900026,"y":-147.4050410122741,"cMask":["wall"],"color":"0080ff"},/* 110 */{"x":52.5,"y":-34,"cMask":["wall"],"color":"0080ff"},/* 111 */{"x":78.5,"y":-49,"cMask":["wall"],"color":"0080ff"},/* 112 */{"x":46.5,"y":-45,"cMask":["wall"],"color":"0080ff"},/* 113 */{"x":70.5,"y":-59,"cMask":["wall"],"color":"0080ff"},/* 114 */{"x":19.5,"y":-88,"cMask":["wall"],"color":"0080ff"},/* 115 */{"x":49.5,"y":-48,"cMask":["wall"],"color":"0080ff"},/* 116 */{"x":33.5,"y":-103,"cMask":["wall"],"color":"0080ff"},/* 117 */{"x":66.5,"y":-58,"cMask":["wall"],"color":"0080ff"},/* 118 */{"x":31.5,"y":-125,"cMask":["wall"]},/* 119 */{"x":26.5,"y":-137,"cMask":["wall"]},/* 120 */{"x":28.5,"y":-151,"cMask":["wall"]},/* 121 */{"x":29.5,"y":-169,"cMask":["wall"]},/* 122 */{"x":13.5,"y":-123,"cMask":["wall"]},/* 123 */{"x":5.5,"y":-135,"cMask":["wall"]},/* 124 */{"x":8.5,"y":-157,"cMask":["wall"]},/* 125 */{"x":12.5,"y":-176,"cMask":["wall"]},/* 126 */{"x":-6.5,"y":-158,"cMask":["wall"]},/* 127 */{"x":-10.5,"y":-183,"cMask":["wall"]},/* 128 */{"x":30.5,"y":-199,"cMask":["wall"]},/* 129 */{"x":37.5,"y":-232,"cMask":["wall"]},/* 130 */{"x":11.5,"y":-210,"cMask":["wall"]},/* 131 */{"x":6.5,"y":-257,"cMask":["wall"]},/* 132 */{"x":83.5,"y":-71,"cMask":["wall"],"color":"0080ff"},/* 133 */{"x":75.5,"y":-56,"cMask":["wall"],"color":"0080ff"},/* 134 */{"x":90.5,"y":-69,"cMask":["wall"],"color":"0080ff"},/* 135 */{"x":-30.5,"y":-133,"cMask":["wall"],"color":"0080ff"},/* 136 */{"x":-30.5,"y":-121,"cMask":["wall"],"color":"0080ff"},/* 137 */{"x":-30.5,"y":-133,"cMask":["wall"],"color":"0080ff"},/* 138 */{"x":-30.5,"y":-121,"cMask":["wall"],"color":"0080ff"},/* 139 */{"x":-9.5,"y":-97,"cMask":["wall"],"color":"0080ff"},/* 140 */{"x":-35.74,"y":-102.6,"cMask":["wall"],"color":"0080ff"},/* 141 */{"x":-40.42222222222224,"y":-149.1940740740741,"cMask":["wall"],"color":"0080ff"},/* 142 */{"x":-32.400000000000006,"y":-83.16000000000003,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":3,"color":"FFFFFF","cMask":["ball"]},{"v0":0,"v1":4,"color":"FFFFFF","cMask":["ball"]},{"v0":1,"v1":5,"color":"FFFFFF","cMask":["ball"]},{"v0":3,"v1":6,"color":"FFFFFF","cMask":["ball"]},{"v0":2,"v1":7,"color":"FFFFFF","cMask":["ball"]},{"v0":4,"v1":8,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":8,"v1":9,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":9,"v1":7,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":5,"v1":10,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":10,"v1":11,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":11,"v1":6,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"]},{"v0":12,"v1":13,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":14,"v1":13,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":17,"v1":16,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":16,"v1":17,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":16,"v1":17,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":17,"v1":16,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":19,"v1":20,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":18,"v1":21,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":12,"v1":32,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":15,"v1":33,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":38,"v1":39,"color":"00008b","cMask":[],"cGroup":[]},{"v0":42,"v1":43,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":44,"v1":45,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":46,"v1":47,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":48,"v1":49,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":38,"v1":50,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":51,"v1":52,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":53,"v1":54,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":39,"v1":55,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":56,"v1":57,"color":"FF0000","cMask":[],"cGroup":[]},{"v0":56,"v1":58,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":59,"v1":60,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":61,"v1":62,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":57,"v1":63,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":65,"v1":64,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":64,"v1":65,"curve":180,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":6.123233995736766e-17},{"v0":64,"v1":65,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":65,"v1":64,"curve":110,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":0.7002075382097098},{"v0":22,"v1":66,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":67,"v1":68,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":69,"v1":70,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":71,"v1":72,"color":"FFFFFF","cMask":[],"cGroup":[]},{"v0":73,"v1":74,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":75,"v1":76,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":78,"v1":77,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":80,"v1":79,"curve":89.99999999999999,"color":"FFFFFF","cMask":[],"cGroup":[],"curveF":1.0000000000000002},{"v0":82,"v1":83,"curve":180,"color":"00008b","cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":85,"v1":84,"curve":180,"color":"FF0000","cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":86,"v1":87,"color":"0080ff","cMask":["wall"]},{"v0":87,"v1":88,"color":"FFFFFF","cMask":["wall"]},{"v0":88,"v1":89,"color":"0080ff","cMask":["wall"]},{"v0":89,"v1":90,"color":"0080ff","cMask":["wall"]},{"v0":92,"v1":91,"curve":35.13002937458595,"color":"0080ff","cMask":["wall"],"curveF":3.1590909090909083},{"v0":94,"v1":93,"curve":207,"color":"0080ff","cMask":["wall"],"curveF":-0.2247533632286995},{"v0":95,"v1":86,"curve":-176.15211803089753,"color":"FFFFFF","cMask":["wall"],"curveF":-0.03359173126614998},{"v0":96,"v1":97,"curve":173.88551652918804,"color":"0080ff","cMask":["wall"],"curveF":0.05340963280877457},{"v0":99,"v1":98,"curve":23.901187801606472,"color":"0080ff","cMask":["wall"],"curveF":4.72465940386009},{"v0":99,"v1":100,"color":"0080ff","cMask":["wall"]},{"v0":100,"v1":101,"color":"0080ff","cMask":["wall"]},{"v0":101,"v1":102,"color":"0080ff","cMask":["wall"]},{"v0":104,"v1":103,"curve":35.5091927036537,"color":"0080ff","cMask":["wall"],"curveF":3.1231361963627218},{"v0":106,"v1":105,"curve":207,"color":"0080ff","cMask":["wall"],"curveF":-0.2402407143294486,"y":207},{"v0":107,"v1":98,"curve":-175.99301108892467,"color":"0080ff","cMask":["wall"],"curveF":-0.03498183375115038},{"v0":110,"v1":111,"color":"0080ff","cMask":["wall"]},{"v0":112,"v1":110,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":113,"v1":111,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":112,"v1":113,"curve":10.778623519946818,"color":"0080ff","cMask":["wall"],"curveF":10.6},{"v0":114,"v1":115,"curve":19.4007838878916,"color":"0080ff","cMask":["wall"],"curveF":5.8500000000000005},{"v0":117,"v1":116,"curve":30.31978069668057,"color":"0080ff","cMask":["wall"],"curveF":3.6908212560386446},{"v0":116,"v1":114,"curve":121.41727565803161,"color":"0080ff","cMask":["wall"],"curveF":0.5609756097560962},{"v0":118,"v1":119,"curve":61.059411799868286,"color":"505050","cMask":["wall"],"curveF":1.6956521739130415},{"v0":121,"v1":120,"curve":84.79487559500053,"color":"505050","cMask":["wall"],"curveF":1.0952380952380925},{"v0":122,"v1":123,"curve":84.54737801218734,"color":"505050","cMask":["wall"],"curveF":1.1000000000000028},{"v0":124,"v1":125,"color":"505050","cMask":["wall"]},{"v0":126,"v1":127,"curve":36.86989764584401,"color":"505050","cMask":["wall"],"curveF":3.000000000000001},{"v0":128,"v1":129,"curve":49.550281137663866,"color":"505050","cMask":["wall"],"curveF":2.1666666666666656},{"v0":130,"v1":131,"curve":52.608048749424995,"color":"505050","cMask":["wall"],"curveF":2.0229885057471284},{"v0":113,"v1":132,"color":"0080ff","cMask":["wall"]},{"v0":133,"v1":134,"color":"0080ff","cMask":["wall"]},{"v0":134,"v1":132,"color":"0080ff","cMask":["wall"]},{"v0":135,"v1":136,"curve":-162.40517858001755,"color":"0080ff","cMask":["wall"],"curveF":-0.15476190476190782},{"v0":138,"v1":137,"curve":-173.6403397602719,"color":"0080ff","cMask":["wall"],"curveF":-0.05555555555555241},{"v0":139,"v1":140,"curve":129.3076481161066,"color":"0080ff","cMask":["wall"],"curveF":0.4736842105263159},{"v0":108,"v1":141,"curve":-184,"color":"0080ff","cMask":["wall"]}],"planes":[{"normal":[0,1],"dist":-700.2005012531329,"cMask":["ball"]},{"normal":[0,-1],"dist":-702.5806451612904,"cMask":["ball"]},{"normal":[-1,0],"dist":-1459.4347158218127,"bCoef":0.1,"cMask":["ball"]},{"normal":[1,0],"dist":-1455.7788018433182,"bCoef":0.1,"cMask":["ball"]},{"normal":[0,1],"dist":-735.2005012531329},{"normal":[0,-1],"dist":-737.5806451612904},{"normal":[1,0],"dist":-1478.7788018433182},{"normal":[-1,0],"dist":-1482.4347158218127}],"goals":[{"p0":[-1404.2090787716957,-128.07877169559413],"p1":[-1404.2090787716957,128.07877169559413],"team":"red"},{"p0":[1404.2090787716957,128.07877169559413],"p1":[1404.2090787716957,-128.07877169559413],"team":"blue"}],"discs":[{"radius":6.2,"invMass":1.5,"pos":[0,0],"bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,-128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,-128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,128.07877169559413]},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,128.07877169559413]},{"radius":4.657409879839786,"pos":[1397.222963951936,698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[-1397.222963951936,698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[-1397.222963951936,-698.611481975968],"cMask":[],"cGroup":[]},{"radius":4.657409879839786,"pos":[1397.222963951936,-698.611481975968],"cMask":[],"cGroup":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":4.9,"cGroup":["red","blue"]},"ballPhysics":"disc0","spawnDistance":450,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"traits":{},"joints":[],"canBeStored":false}';


//intentamos
function roomUpNotification() {
    if (typeof window.HBInit === 'function') {
        var hrefs = document.querySelector("body iframe").contentDocument.querySelector("body div#roomlink a").text;
        //console.logg(hrefs);
        var roomDcWebhook = "https://discord.com/api/webhooks/1180094271861297193/TyA4pgCxnGFsqCko4imJcTt2ungli0vyZJ6aYDfoXeWwEO_tqMOSq6Hgs_WiUUqdbSpW";
        sendAnnouncementToDiscord("El host está ON ¡Entra ya!" + roomName + ": " + hrefs, roomDcWebhook);
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

const frasesCELEB = [" Topo Giggio!! ", " Perreo!! ", " Baile a lo brazuca!! ", " Ras Tas Tas!! ", " Baile Griddy!! ", " SIUUU!! "]; // Phrases of Celebraciones
const frasesGOL = [" 🔥 ¡PERO QUÉ GOLAZO CLAVO EL HDP DE ! ", " 💥 ¡LE PEGO A FUNDIR Y GOLAZO DE ! ", " ⚽ ¡GOL GOL GOL CANTALO, TENIA QUE APARECER ! ", " 🤩 ¿QUIEN SINO? GOLON DE ", " 👟 ¡LE PEGO DE PUNTIN Y GOLAZO DE ! ", " 🎯 ¡A NO PERO QUE DISTINGUIDO! GOLCITO DE ! "]; // Goal phrases
const frasesASS = [" 🤝 ¡Con asistencia de ! ", " 👌 ¡Con hermosa asistencia de ! ", " 💫 ¡Con preciso pase de ! ", " 👏 ¡Con excelente pase de !"]; // Phrases of assists
const golcontra = [" 🚫 MOMMY, GOL EN CONTRA DEL PAYASO DE ", " ❌ SOS BOLUDO HERMANO? GOL EN CONTRA DE ", " 😖 AUTOGOL DEL TROLO DE ... ", " 😵 UFF! GOLAZO!! EN CONTRA DEL BOLUDO DE "]; // Goal against phrases

const goleiro = [" mantiene la VALLA INVICTA! ", " es mejor que el DIBU! ", " NO DEJA QUE LA BOCHA ENTRE! ", " ESTA EN SU PRIME DE GK! "]; // Goalkeeper phrases

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
        room.sendAnnouncement("🏆 " + currentTeams[0].longName + " gana! [" + scores.red + " - " + scores.blue + "]", null, 0xFDC43A, 'bold');
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 " + currentTeams[1].longName + "gana! [" + scores.blue + " - " + scores.red + "]", null, 0xFDC43A, 'bold');
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Tiempo excedido!");
    }
    //room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    if (GKList.length > 1) {
        if (scores.red == 0 && GKList[1]) {
            room.sendAnnouncement("🧤 gg valla invicta soy el " + GKList[1].name + "! 🧤", null, 0xccc904, 'bold');
        } else if (scores.blue == 0 && GKList[0]) {
            room.sendAnnouncement("🧤 gg valla invicta soy el " + GKList[0].name + "! 🧤", null, 0xccc904, 'bold');
        }
    }


    //Object.keys(obj)[0]
    Object.entries(goalDictionary).sort((a, b) => b[1] - a[1]);
    var topGoalScorerId = Object.keys(goalDictionary)[0];
    var topGoals = goalDictionary[topGoalScorerId];
    var topGoalScorer = room.getPlayerList().filter((player) => player.id == topGoalScorerId)[0];
    //⚽
    if (topGoalScorer != undefined && topGoalScorer.name != undefined && scores.red + scores.blue > 0) {
        room.sendAnnouncement("🥇 " + topGoalScorer.name + " fué el goleador del partido con " + topGoals + " goles! ⚽", null, 0xffffff, 'bold');
    }

    updateStats();
    sendDiscordWebhook(scores);
    room.sendAnnouncement("🎥 ¡EL PARTIDO FUÉ GRABADO Y SE ENVIÓ A NUESTRO DISCORD!: " + `${getDate()}-${roomNumber + 1}.hbr2`, null, Colors.Amrelo, 'small-bold');

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
    room.sendChat("🙋‍♂️ Un modo reclutamiento empezó!");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("🙋‍♂️ El modo reclutamiento finalizo.");
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
    console.log("El mapa está cambiando...");
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

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] Para elegir a un jugador, ingresa el numero de la lista o usa 'top', 'random' o 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(
            function (player) {
                room.sendChat("[PV] Apurate! @" + player.name + ", solo tenes " + Number.parseInt(chooseTime / 2) + " segundos para elegir a alguien!", player.id);
                timeOutCap = setTimeout(
                    function (player) {
                        room.kickPlayer(player.id, "No elegiste en el tiempo!", false);
                    },
                    chooseTime * 500, teamR[0]);
            },
            chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] Para elegir a un jugador, ingresa el numero de la lista o usa 'top', 'random' o 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Apurate! @" + player.name + ", solo tenes " + Number.parseInt(chooseTime / 2) + " segundos para elegir a alguien!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "No elegiste en el tiempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) printSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
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
            }, 10000);
        }

        /* calculateGk();
        findGK(); */
    }

    setGkAvatar(manualGKList[0]?.id, manualGKList[1]?.id);

    function noGkNotification() {
        for (let i = 0; i < manualGKList.length; i++) {
            if (manualGKList[i] == null) {
                var msg = 'Tu equipo no tiene arquero, utiliza !gk para serlo!';
                var correctedTeamIndex = i + 1;
                var emoji = correctedTeamIndex == Team.RED ? '🟥' : '🟦';
                var message = `[${emoji}] [⚠️🧤]: ${msg}`;
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
        room.sendAnnouncement("Estadisticas guardadas", null, Colors.Amrelo, 'small-bold');
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
    room.sendAnnouncement("¡El partido comenzó y los equipos salen a dar la vida por los colores!", null, 0xffffff, 'small-bold');
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
        `♿ ¡Bienvenido ${player.name}, al Sindicato! ♿\n🔸Leé las reglas y juga sin trollear!\n🔹Ingresa a nuestro discord para enterarte nuevas noticias!`,
        player.id,
        0x00fff2,
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
        room.sendAnnouncement(changedPlayer.name + " ahora está AFK! 😴", Colors.Laranja);
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
}, 220000);

setInterval(() => {
    printVc();
}, 380000);

setInterval(() => {
    printRules();
}, 400000);

setInterval(() => {
    printYoutube();
}, 480000);

setInterval(() => {
    printTiktok();
}, 520000);

function printDiscord() {
    room.sendAnnouncement("                                         ████████████████████████████████████████ ", null, 0x7B73FD);
    room.sendAnnouncement("                                         █▄─▄▄▀█▄─▄█─▄▄▄▄█─▄▄▄─█─▄▄─█▄─▄▄▀█▄─▄▄▀█ ", null, 0x9250FD);
    room.sendAnnouncement("                                         ██─██─██─██▄▄▄▄─█─███▀█─██─██─▄─▄██─██─█ ", null, 0x8466FD);
    room.sendAnnouncement("                                         █▄▄▄▄██▄▄▄█▄▄▄▄▄█▄▄▄▄▄█▄▄▄▄█▄▄█▄▄█▄▄▄▄██ ", null, 0x7B73FD);
    room.sendAnnouncement("                                         ████████████████████████████████████████ ", null, 0x9250FD);
    room.sendAnnouncement("                                              📍 Link: ➡ https://discord.gg/KvfgRc7sfG ", null, 0xF6FF43);
}

function printVc() {
    var msg = "TIP: ¿Querés hablar con los pibes? Entra al VC del discord: " + voiceChatLink[roomNumber];
    room.sendAnnouncement(msg, null, 0x00FF00);
}

function printRules() {
    room.sendAnnouncement(" 😮‍💨 ╿ Reglas del host ⬅", null, 0x8466FD);
    room.sendAnnouncement(" #1 Respetar a los jugadores ", null, null);
    room.sendAnnouncement(" #2 Trollear, tosquear al GK o tosquear a jugadores está prohibido! ", null, null);
    room.sendAnnouncement(" #3 No usar el comando !admin al pedo! ", null, null);
    room.sendAnnouncement(" #4 No suplantar identidades para molestar! ", null, null);
    room.sendAnnouncement(" #5 Bardear está permitido, pero no pasarse! ", null, null);
}

function printYoutube() {
    room.sendAnnouncement("                                         ████████████████████████████████████████████ ", null, 0xfc0303);
    room.sendAnnouncement("                                         █▄─█─▄█─▄▄─█▄─██─▄█─▄─▄─█▄─██─▄█▄─▄─▀█▄─▄▄─█ ", null, 0xffffff);
    room.sendAnnouncement("                                         ██▄─▄██─██─██─██─████─████─██─███─▄─▀██─▄█▀█ ", null, 0xffffff);
    room.sendAnnouncement("                                         ██▄▄▄██▄▄▄▄██▄▄▄▄███▄▄▄███▄▄▄▄██▄▄▄▄██▄▄▄▄▄█ ", null, 0xffffff);
    room.sendAnnouncement("                                         ████████████████████████████████████████████ ", null, 0xfc0303);
    room.sendAnnouncement("                                             📍 Link: ➡ https://www.youtube.com/@JueganTodosCon ", null, 0xF6FF43);
}

function printTiktok() {
    room.sendAnnouncement("                                         ██████████████████████████████████ ", null, 0x6d089c);
    room.sendAnnouncement("                                         █─▄─▄─█▄─▄█▄─█─▄█─▄─▄─█─▄▄─█▄─█─▄█ ", null, 0x5b0882);
    room.sendAnnouncement("                                         ███─████─███─▄▀████─███─██─██─▄▀██ ", null, 0x5a0e7d);
    room.sendAnnouncement("                                         ██▄▄▄██▄▄▄█▄▄█▄▄██▄▄▄██▄▄▄▄█▄▄█▄▄█ ", null, 0x5b187a);
    room.sendAnnouncement("                                         ██████████████████████████████████ ", null, 0x53206b);
    room.sendAnnouncement("                                             📍 Link: ➡ https://www.tiktok.com/@juegantodoscon ", null, 0xF6FF43);
}


function afkCommand(player, message) {
    if (AFKSet.has(player.id)) {
        if (AFKMinSet.has(player.id)) {
            room.sendAnnouncement(
                `Espera un minimo de ${minAFKDuration} segundos para volver al partido!`,
                player.id,
                Colors.Vermelho,
                'small-bold',
                null
            );
        } else {
            AFKSet.delete(player.id);
            room.sendAnnouncement(
                `🌅 ${player.name} ya no está AFK!`,
                null,
                Colors.Laranja,
                'small-bold',
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
                'small-bold',
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
                `😴 ${player.name} ahora está AFK!`,
                null,
                Colors.Laranja,
                'small-bold',
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
            room.sendAnnouncement("「👮」" + player.name + ": " + message + "", player.id, 0xEAC274, 'bold');
            return false;
        }
        //cambiar cosito del gk
        if (player.team == Team.BLUE) {
            room.sendAnnouncement("「🔵」" + player.name + ": " + message, player.id, 0x89cff0);
        } else if (player.team == Team.RED) {
            room.sendAnnouncement("「🔴」" + player.name + ": " + message, player.id, 0xe38d7d);
        } else {
            room.sendAnnouncement("「👤」" + player.name + ": " + message, player.id, 0xFFFFFF);
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
        setTimeout(_ => { room.sendAnnouncement(`${player.name} ha limpiado el chat.`, null, 0xe50029, 'semi-bold') }, 1000)
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

    else if (["!youtube", "!yt"].includes(message[0].toLowerCase())) {
        printYoutube(player);
        return;
    }

    else if (["!tiktok", "!tt"].includes(message[0].toLowerCase())) {
        printTiktok(player);
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
        room.sendAnnouncement("[🏆] Tus estadisticas: 🎮 Partidos: " + stats[StatColumns.GAMES] + ", ✅ Ganados: " + stats[StatColumns.WINS] + ", ❌ Perdidos: " + stats[StatColumns.LOSES] + ", % de ganados: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goles: " + stats[StatColumns.GOALS] + ", 👟 Asistencias: " + stats[StatColumns.ASSISTS] + ", 🧤 GK: " + stats[StatColumns.GK] + ", 🥅 Valla invicta: " + stats[StatColumns.VI] + ", 🥅 % VI: " + stats[StatColumns.CP] + "%", player.id, 0x73EC59, "bold");
    }

    else if (["!showme"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];

        room.sendAnnouncement("[🏆] Estadisticas de : " + player.name + "🎮 Partidos: " + stats[StatColumns.GAMES] + ", ✅ Ganados: " + stats[StatColumns.WINS] + ", ❌ Perdidos: " + stats[StatColumns.LOSES] + ", % de ganados: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goles: " + stats[StatColumns.GOALS] + ", 👟 Asistencias: " + stats[StatColumns.ASSISTS] + ", 🧤 GK: " + stats[StatColumns.GK] + ", 🥅 Valla invicta: " + stats[StatColumns.VI] + ", 🥅 % VI: " + stats[StatColumns.CP] + "%", null, 0x73EC59, "bold");
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
        var text = "🥅 Valla invicta:";
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
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es Admin de la sala! 👮");
                    }
                }
            }
        }
    }
    else if (["!setmod"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "mod";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "mod";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es Mod de la sala! 👮");
                    }
                }
            }
        }
    }
    else if (["!sethead"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "head";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "head";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es Head-Admin de la sala! 👮");
                    }
                }
            }
        }
    }
    else if (["!setcommunity"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "community";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "community";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es Community-Manager de la sala! 👮");
                    }
                }
            }
        }
    }
    else if (["!setvip"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "vip";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "vip";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es USUARIO VIP de la sala!");
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
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es STAFF de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "admin";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!removemod"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "mod") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es STAFF de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "mod";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!removecommunity"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "community") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es STAFF de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "community";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!removevip"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "vip") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es USUARIO VIP de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "vip";
                        localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
                        room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
                    }
                }
            }
        }
    }
    else if (["!removehead"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "head") {
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ya no es STAFF de la sala! 👮");
                        stats[StatColumns.ROLE] = "player";
                        getPlayerById(parseInt(message[1]))[eP.ROLE] = "head";
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

    else if (["!ksk"].includes(message[0].toLowerCase())){
        if (!player.admin) {
            room.sendAnnouncement(" ", player.id, Colors.Verde);
            return;
        }
        console.log("entra a ksk")
        randomUniforms();
        commandTimeout = 0;
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
                room.sendAnnouncement("[📜] La lista de bans fué limpiada!");
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
    else if (["!bb", "!bye", "!cya", "!gn", "!nv"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "nos re vimos amigo!", false);
    }
    else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
        printDiscord();
    }
    else if (["!elo"].includes(message[0].toLowerCase()) && localStorage.getItem(getAuth(player))) { // elo definido por vitórias
        //console.logg("entro en comando elo " + player.name);
        message.slice(0, 1);
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        if (stats[StatColumns.WINS] > 499) {
            room.sendAnnouncement("⭐ 「LEYENDA」" + player.name + ": " + msg + "", null, 0xF7FF00)
        } else if (stats[StatColumns.WINS] > 1000) {
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
                room.getPlayerList().forEach((element) => { if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, (player.team == Team.RED ? 16725591 : 3261685), "bold", 0) })
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
            room.sendAnnouncement("「👨🏽‍💻 Manager」" + player.name + ": " + msg + "", null, 0x00FF00, 'bold');
            return false;
        } else if (role == "head") {
            room.sendAnnouncement("「💂🏽‍♂️ Head-Admin」" + player.name + ": " + msg + "", null, 0xEAC274);
            return false;
        } else if (role == "community") {
            room.sendAnnouncement("「🦸🏽‍♂️ Community-Manager」" + player.name + ": " + msg + "", null, 0xFF9100);
            return false;
        } else if (role == "vip") {
            room.sendAnnouncement(" [👑 VIP] " + player.name + ": " + msg + "", null, 0xd733ff);
            return false;
        }
        else if (role == "admin") {
            room.sendAnnouncement("「👨🏽‍✈️ Admin」" + player.name + ": " + msg + "", null, 0xFFFF00);
            return false;
        }
        else if (role == "mod") {
            room.sendAnnouncement("「🔰 Mod」" + player.name + ": " + msg + "", null, 0x6BFFB5);
            return false;
        }
    }

    if (player.team == Team.BLUE) {
        room.sendAnnouncement(" [🔵] " + player.name + ": " + originalMessage, null, 0x89cff0);
    } else if (player.team == Team.RED) {
        room.sendAnnouncement(" [🔴] " + player.name + ": " + originalMessage, null, 0xe38d7d);
    } else {
        room.sendAnnouncement(" [SPEC] " + player.name + ": " + originalMessage, null, 0xFFFFFF);
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
        room.sendAnnouncement("「🎙️」Max el Relator: ¿Qué equipo marcara la diferencia? ¡Esto se pone lindo!", null, 0x00d9ff, "small-bold", 1);
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