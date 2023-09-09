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
if(room != null) {
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

const scoreLimitClassic = 5;
const scoreLimitBig = 5;
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

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
var trainingMap = '{"name":"namajunas practice (training) [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","canBeStored":true,"kickOffReset":"full","width":850,"height":668,"spawnDistance":350,"bg":{"type":"","width":653,"height":320,"kickOffRadius":0,"cornerRadius":0,"color":"(bgcolor)"},"vertexes":[{"x":-651,"y":320,"cMask":["ball","wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":10},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"252525","vis":false,"curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":-1},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":-336,"cMask":["wall"],"cGroup":["c1"],"trait":"kickOffBarrier","color":"252525","vis":false,"curve":20},{"x":-650,"y":-200,"bCoef":1,"cMask":["blue"],"cGroup":["blue"],"curve":0,"vis":false,"color":"252525"},{"x":-650,"y":200,"bCoef":1,"cMask":["blue","red"],"cGroup":["blue","red"],"curve":0,"vis":false,"radius":2,"color":"252525"},{"x":750,"y":200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false},{"x":750,"y":-200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false,"color":"252525"},{"x":-658.8,"y":320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-10},{"x":-658.8,"y":100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":-10},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-658.8,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":10},{"x":-658.8,"y":-100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":10},{"x":755,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-40},{"x":755,"y":-119,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.6,"bias":-40},{"x":755,"y":122,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":0.01,"bias":-40},{"x":755,"y":320,"trait":"ballArea","vis":false,"color":"252525","curve":0,"bias":-40},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":true,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"FFFFFF","vis":true,"radius":4.5,"invMass":6.0e-6},{"x":0,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":true,"bias":-5,"curve":0},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-651,"y":-123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":7,"curve":-40,"color":"252525","invMass":1.0e-6},{"x":-572,"y":-123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-651,"y":123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":3,"invMass":1.0e-5,"curve":-40,"color":"252525"},{"x":-572,"y":123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-436,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"color":"252525"},{"x":0,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":2},{"x":750,"y":320,"bCoef":1,"cMask":["red","blue","wall","ball"],"cGroup":["wall"],"trait":"ballArea","bias":10,"color":"252525","curve":0},{"x":750,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10,"color":"252525"},{"x":750,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":20},{"x":31,"y":-557,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3,"vis":true},{"x":0,"y":-544,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":0,"y":-423,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"curve":-60,"color":"252525"},{"x":199,"y":-451,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":302,"y":-488,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":197,"y":-419,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":138,"y":-519,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":-715,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-701,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-715,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":-701,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":830,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-670,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-670,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":280.8333333333333,"y":-23.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.3333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.8333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":323,"y":-26,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":50,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":325.5,"y":-26.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":325.66666666666663,"y":-25.66666666666663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319.33333333333337,"y":5.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":352.66666666666663,"y":6.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":30,"color":"2E2E2E"},{"x":323.33333333333337,"y":10.166666666666686,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":319.6666666666667,"y":5.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":351.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":356.66666666666663,"y":19.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":352.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":-651,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"color":"252525"},{"x":0,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"curve":0,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"252525"},{"x":-35,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-20},{"x":-650,"y":-611,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":-10},{"x":-650,"y":-611,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-30},{"x":-748.5,"y":-320,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":20},{"x":-648.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-650,"y":-320,"cMask":["wall"],"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":10},{"x":750,"y":-320,"cMask":["wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":10},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-651,"y":320,"cMask":["wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":-10},{"x":750,"y":320,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":-10,"color":"252525","curve":0},{"x":750,"y":-320,"trait":"ballArea","curve":0},{"x":750,"y":320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"bias":-10},{"x":750,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10},{"x":7,"y":320,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5,"curve":0},{"x":7,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"curve":0,"color":"252525","vis":false},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":55,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2},{"x":0,"y":-336.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":false,"bias":2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":2,"color":"252525"},{"x":195,"y":-378,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":373,"y":-462.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":371.5,"y":-543,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":194.5,"y":-612,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":380,"y":-320,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":1},{"x":380,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":false,"curve":0},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":true,"bias":-5},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-332,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"color":"252525"},{"x":-400,"y":-320,"bCoef":0.1,"cMask":["blue"],"cGroup":["blue"],"trait":"kickOffBarrier"},{"x":-280,"y":-320,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"kickOffBarrier"},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":270.1260754171482,"y":-175.08817212714803,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":-50,"vis":false,"bias":0},{"x":370.9962562492123,"y":-218.96534864189977,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":276.9070936057916,"y":-159.49914418037446,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":50,"vis":false,"bias":0},{"x":377.7772744378558,"y":-203.37632069512622,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":235.51633140103326,"y":-176.93631149932702,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":-50,"vis":false,"color":"2E2E2E","bias":18},{"x":254.4632939869488,"y":-133.3787334127539,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":50,"vis":false,"color":"2E2E2E","bias":18},{"x":496.5,"y":-288.5,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":532.5,"y":-250,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":149.5,"y":-126,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":163,"y":-123,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154.5,"y":-113,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136,"y":-121.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":149.5,"y":-118.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141,"y":-108.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141.5,"y":257,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":152,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136.5,"y":268,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":143.5,"y":158.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154,"y":171.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":138.5,"y":169.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":629,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":631,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":624,"y":-75,"cMask":["wall"],"cGroup":["wall"]},{"x":624,"y":75,"cMask":["wall"],"cGroup":["wall"]},{"x":-1,"y":223,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":750,"y":224,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":747,"y":122,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":2,"y":123,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":680,"y":65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":680,"y":-65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":171,"y":197,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":212,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":154.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":169.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":191.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":206.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":152.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":167.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":195.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":210.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":150.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":165.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":296,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":171,"y":311,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":252,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":267,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":288.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":303.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":250,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":265,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":292.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":307.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":246.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":261.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":16,"y":272,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":281,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":16,"y":292,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":1,"y":282,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":181,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":192,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":0,"y":182,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":-340,"y":-518,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-340,"y":-444,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-110,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-531]},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-531]},{"x":-110,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-431]},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-431]},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-20,"y":-320,"bCoef":1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-20,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-88,"y":-320,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-88,"y":-641,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-594,"y":-322,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5},{"x":-594,"y":-643,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":5},{"x":-109,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-87,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-109,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-87,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-571,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-571,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-340,"y":-582,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":-340,"y":-382,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":170,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"},{"x":170,"y":663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":2,"v1":3,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":4,"v1":5,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":14,"v1":6,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":13,"v1":5,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":12,"v1":1,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":11,"v1":2,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":15,"v1":16,"vis":false,"color":"ffffff","trait":"ballArea","bias":-10,"x":-658.8},{"v0":17,"v1":18,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":19,"v1":20,"vis":false,"color":"ffffff","trait":"ballArea","bias":10,"x":-658.8,"y":-320},{"v0":21,"v1":22,"vis":false,"color":"ffffff","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":23,"v1":24,"curve":0,"vis":false,"color":"252525","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":27,"v1":28,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":0},{"v0":29,"v1":30,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier"},{"v0":31,"v1":32,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"radius":0.05},{"v0":33,"v1":34,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"x":750},{"v0":35,"v1":36,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":37,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":36,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":41,"v1":42,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":40,"v1":43,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":44,"v1":45,"curve":145,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea"},{"v0":0,"v1":48,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":10},{"v0":7,"v1":50,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":20,"x":750},{"v0":47,"v1":50,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":51,"v1":52,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":53,"v1":54,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":52,"v1":53,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":2},{"v0":56,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":58,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":56,"curve":-140,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":58,"curve":-180,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":60,"v1":61,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":-150,"y":150},{"v0":62,"v1":63,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":150,"y":-150},{"v0":7,"v1":64,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":65,"v1":66,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-670},{"v0":65,"v1":67,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":-85},{"v0":67,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-620},{"v0":66,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":85},{"v0":69,"v1":70,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":71,"v1":72,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":73,"v1":74,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":75,"v1":76,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":75,"v1":77,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":78,"v1":79,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":80,"v1":81,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":83,"curve":30,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":79,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":85,"v1":84,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":86,"v1":87,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":180},{"v0":87,"v1":88,"curve":-160,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":89,"v1":90,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":166.66666666666669},{"v0":0,"v1":91,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10},{"v0":27,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"x":0},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":30},{"v0":97,"v1":30,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10},{"v0":30,"v1":7,"curve":0,"vis":true,"color":"252525","cMask":["ball"],"bias":-1},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-30},{"v0":100,"v1":101,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":103,"v1":102,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":10},{"v0":105,"v1":104,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"bias":10},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10,"y":320},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":92,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":109,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10,"x":750},{"v0":111,"v1":112,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"x":20},{"v0":113,"v1":114,"curve":-180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":2,"x":514},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":-2,"x":514},{"v0":120,"v1":119,"curve":50.545030732114945,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-2},{"v0":122,"v1":123,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":124,"v1":125,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":47,"v1":121,"curve":50.545030732114945,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":119,"v1":10,"curve":14.794713706848997,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":127,"v1":126,"curve":0,"vis":false,"color":"0D0D0D","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0,"x":380},{"v0":130,"v1":129,"curve":45.93532925828217,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":55,"v1":131,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":5},{"v0":51,"v1":129,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-5},{"v0":131,"v1":128,"curve":62.190372743895615,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":134,"v1":135,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":136,"v1":137,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":138,"v1":139,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":140,"v1":141,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":142,"v1":143,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-75},{"v0":144,"v1":145,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-58},{"v0":146,"v1":147,"vis":false,"color":"2E2E2E","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":18},{"v0":146,"v1":142,"curve":41.993762397652105,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":147,"v1":144,"curve":-28.076285755567678,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":142,"v1":144,"curve":-63.60183201071682,"vis":false,"color":"1AF0E9","bCoef":-4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":148,"v1":149,"vis":false,"color":"1AF0E9","bCoef":0.85,"cMask":["ball"],"bias":-5},{"v0":150,"v1":151,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":162,"v1":163,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":80},{"v0":164,"v1":165,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":-80},{"v0":166,"v1":167,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":173,"v1":172,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":680},{"v0":173,"v1":165,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":163,"v1":172,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":174,"v1":175,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":175,"v1":174,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":176,"v1":177,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":177,"v1":176,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":178,"v1":179,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":179,"v1":178,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":180,"v1":181,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":181,"v1":180,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":182,"v1":183,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":183,"v1":182,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":184,"v1":185,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":185,"v1":184,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":186,"v1":187,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":187,"v1":186,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":188,"v1":189,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":189,"v1":188,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":190,"v1":191,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":191,"v1":190,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":192,"v1":193,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":193,"v1":192,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":194,"v1":195,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":195,"v1":194,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":196,"v1":197,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":197,"v1":196,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":201,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":202,"v1":203,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":204,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":205,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":206,"v1":207,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":207,"v1":206,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"y":-100},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"y":100},{"v0":212,"v1":213,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":221,"v1":220,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":223,"v1":222,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":225,"v1":224,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":5,"x":-20},{"v0":226,"v1":227,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":228,"v1":229,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":230,"v1":231,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":232,"v1":233,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":234,"v1":235,"vis":true,"color":"D4D4D4","bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier"},{"v0":236,"v1":237,"curve":0,"vis":true,"color":"545454","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":170}],"goals":[],"discs":[{"radius":7,"invMass":0,"pos":[-650,98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,0],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[-650,-98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,-137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":5.0e-5,"pos":[-207,5],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.958,"x":-80},{"radius":0,"invMass":0,"pos":[-149,3],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[-217,-219],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-245,-210],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":0,"invMass":0,"pos":[-217,225],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-248,212],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":7,"invMass":8.0e-6,"pos":[214.5,-144.5],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":0,"pos":[32,-558],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":8,"invMass":0,"pos":[32,-408],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":6,"invMass":8.0e-6,"pos":[72,-467],"color":"ffffff","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":1,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-456,-284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,-252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-456,284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-108,-143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,-141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":0,"invMass":0,"pos":[-108,143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":25,"invMass":1.0e-41,"pos":[-646,-3],"color":"252525","bCoef":2,"cMask":["kick","red","blue","c3"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-5]},{"radius":8,"invMass":8.0e-6,"pos":[-327,464],"color":"252525","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":15,"invMass":1.0e-26,"pos":[-473,406],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[-2,0]},{"radius":15,"invMass":1.0e-26,"pos":[-208,546],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[2,0]},{"radius":9,"invMass":1.2e-5,"pos":[-340,-483],"color":"252525","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.992,"speed":[0,0],"_data":{"mirror":[]}},{"radius":7,"invMass":1.0e-41,"pos":[643,439],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,1]},{"radius":7,"invMass":1.0e-41,"pos":[643,509],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-1]},{"radius":6,"invMass":1.2e-5,"pos":[389,481],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0.05,"invMass":6.0e-6,"pos":[661,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,447],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,455],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,463],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[661,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,471],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,479],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,487],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,495],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,502],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,423.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,521.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[430,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[505,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[579,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[447,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":7,"invMass":0,"pos":[514.5,-628],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[576,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[447,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[576,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[516,-290],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[516,-290],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[248,-156.5],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[248,-156.5],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[724.5,265.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[718.5,254.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[707.5,247.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[693.5,248.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[686.5,257.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[683.5,268.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[687.5,278.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[696.5,285.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[708.5,287.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[722.5,176.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[716.5,165.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[705.5,158.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[691.5,159.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[684.5,168.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[681.5,179.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[685.5,189.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[694.5,196.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[706.5,198.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":0,"invMass":0,"pos":[705,268],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":0,"invMass":0,"pos":[701.5,179],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":7.3,"invMass":3.0e-5,"pos":[474,176],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[431,176],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":7.3,"invMass":3.0e-5,"pos":[474,266],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[430,266],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":3.9e-5,"pos":[39,271],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":8,"invMass":3.9e-5,"pos":[39,288],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":0,"invMass":0,"pos":[39,239],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,322],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":0,"pos":[625,-79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[625,79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea","curve":180},{"radius":7,"invMass":8.0e-6,"pos":[108,-109],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":7,"invMass":8.0e-6,"pos":[36,-83],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":3.9e-5,"pos":[39,188],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":8,"invMass":3.9e-5,"pos":[39,171],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":0,"invMass":0,"pos":[39,222],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,139],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":10,"invMass":2.2e-5,"pos":[150,420],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,475],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,530],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-110,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-531},{"radius":0,"invMass":0,"pos":[-110,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-431},{"radius":0,"invMass":0,"pos":[-570,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-531},{"radius":0,"invMass":0,"pos":[-570,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-431},{"radius":14.3,"invMass":4.0e-6,"pos":[677,-258],"color":"5689e5","bCoef":0.5,"cMask":["red","blue","ball"],"cGroup":["ball"],"damping":0.96},{"radius":6,"invMass":0,"pos":[723,-287],"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"cGroup":["ball"],"damping":0.99,"x":-80}],"joints":[{"d0":1,"d1":2,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":2,"d1":3,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":3,"d1":4,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":4,"d1":5,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":5,"d1":6,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":6,"d1":7,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":24,"d1":25,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":-180},{"d0":26,"d1":27,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":27,"d1":28,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":28,"d1":29,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":25,"d1":26,"strength":"rigid","color":"000000","length":null,"radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":25,"d1":30,"strength":"rigid","color":"000000","length":null,"radius":3},{"d0":5,"d1":31,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":-0.5},{"d0":32,"d1":33,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-80,0],"x":-80},{"d0":34,"d1":35,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-148,-222]},{"d0":36,"d1":37,"strength":11,"color":"transparent","length":null,"pos":[-148,222]},{"d0":42,"d1":43,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":44,"d1":45,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":46,"d1":47,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":48,"d1":49,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":55,"d1":56,"_length":5,"strength":1.0e+38,"color":"252525","length":5},{"d0":55,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":60,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":60,"d1":61,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":61,"d1":62,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":62,"d1":65,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":65,"d1":69,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":69,"d1":70,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":70,"d1":71,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":71,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":3},{"d0":56,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":75,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":74,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":39,"d1":40,"strength":"rigid","color":"252525","length":null},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":97,"d1":98,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":98,"d1":99,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":99,"d1":100,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":100,"d1":101,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":101,"d1":102,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":102,"d1":103,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":103,"d1":104,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":104,"d1":105,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":89,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":89,"d1":90,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":90,"d1":91,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":91,"d1":92,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":92,"d1":93,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":93,"d1":94,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":94,"d1":95,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":95,"d1":96,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":89,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":90,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":91,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":92,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":93,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":94,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":95,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":96,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":97,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":98,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":99,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":100,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":101,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":102,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":103,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":104,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":105,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":88,"d1":96,"strength":0,"color":"590000","length":null},{"d0":97,"d1":105,"strength":0,"color":"002033","length":null},{"d0":108,"d1":109,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":110,"d1":111,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":112,"d1":114,"strength":"rigid","color":"transparent","length":null},{"d0":113,"d1":115,"strength":"rigid","color":"transparent","length":null},{"d0":121,"d1":123,"strength":"rigid","color":"transparent","length":null},{"d0":120,"d1":122,"strength":"rigid","color":"transparent","length":null},{"d0":127,"d1":128,"strength":"rigid","color":"590000","length":null,"x":-110},{"d0":129,"d1":130,"strength":"rigid","color":"002033","length":null,"x":-570},{"d0":131,"d1":132,"_length":-1,"strength":190,"color":"transparent","length":-1}],"planes":[{"normal":[0,-1],"dist":-666,"cMask":["ball","red","blue"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-666,"canvas_rect":[-850,-668,850,680],"a":[-850,666],"b":[850,666]}}},{"normal":[0,1],"dist":-644,"bCoef":1,"_data":{"extremes":{"normal":[0,1],"dist":-644,"canvas_rect":[-850,-668,850,680],"a":[-850,-644],"b":[850,-644]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[1,0],"dist":-750,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-750,"canvas_rect":[-850,-668,850,680],"a":[-750,-668],"b":[-750,680]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.0001,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[0,1],"dist":-651,"bCoef":10000,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,1],"dist":-651,"canvas_rect":[-850,-668,850,680],"a":[-850,-651],"b":[850,-651]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0.01,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":700000,"invMass":4.0e-6},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":8.0e-6,"color":"46D0D9","damping":0.99,"cMask":["all"],"cGroup":["ball"]},"redSpawnPoints":[],"blueSpawnPoints":[],"cameraFollow":"player"}';
var v2Map = '{"name":"MORTAL KOMBAT 1V1 Navi [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":170,"bg":{"type":"none","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0,"color":"(bgcolor)"},"vertexes":[{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":-2,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea"},{"x":370,"y":-169.9999999999999,"trait":"ballArea"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"]},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"]},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea"},{"x":0,"y":-75,"cMask":["wall"],"curve":-180},{"x":0,"y":-75,"cMask":["wall"],"curve":180},{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF5000"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF5000"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":-372.8571428571429,"y":-64,"trait":"goalNet"},{"x":-392.8571428571429,"y":-44,"trait":"goalNet"},{"x":-392.8571428571429,"y":44,"trait":"goalNet"},{"x":-372.8571428571429,"y":64,"trait":"goalNet"},{"x":375.7142857142857,"y":-63.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":-43.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":44.714285714285715,"trait":"goalNet"},{"x":375.7142857142857,"y":64.71428571428572,"trait":"goalNet"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea","color":"FF5000"},{"x":370,"y":-169.9999999999999,"trait":"ballArea","color":"FF5000"},{"x":-369.9999999999999,"y":-69.28571428571426,"cMask":["wall"],"color":"FF5000"},{"x":-370,"y":68.57142857142864,"trait":"ballArea","color":"FF5000"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"],"color":"FF5000"},{"x":370.71428571428555,"y":68.57142857142864,"trait":"ballArea","color":"FF5000"},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"],"color":"FF5000"},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea","color":"FF5000"},{"x":370,"y":-68.57142857142853,"cMask":["wall"],"color":"FF5000"},{"x":-38.56108597285067,"y":63.99547511312217,"cMask":["wall"],"color":"FFAA50"},{"x":-26.03167420814479,"y":49.39819004524885,"cMask":["wall"],"color":"FFAA50"},{"x":-34.41176470588235,"y":42.35294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":-34.99999999999999,"y":35.29411764705882,"cMask":["wall"],"color":"FFAA50"},{"x":-47.941176470588225,"y":44.11764705882352,"cMask":["wall"],"color":"FFAA50"},{"x":-39.99999999999999,"y":23.235294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":-44.271493212669675,"y":16.14932126696833,"cMask":["wall"],"color":"FFAA50"},{"x":-55.73755656108597,"y":0.0497737556561102,"cMask":["wall"],"color":"FFAA50"},{"x":-63.93212669683257,"y":1.5837104072398194,"cMask":["wall"],"color":"FFAA50"},{"x":-55.294117647058826,"y":-22.058823529411782,"cMask":["wall"],"color":"FFAA50"},{"x":-55.366515837104075,"y":-33.31674208144796,"cMask":["wall"],"color":"FFAA50"},{"x":-53.52941176470588,"y":-37.78280542986426,"cMask":["wall"],"color":"FFAA50"},{"x":-55.076923076923066,"y":-47.28959276018099,"cMask":["wall"],"color":"FFAA50"},{"x":-47.69295410471881,"y":-41.051497522085754,"cMask":["wall"],"color":"FFAA50"},{"x":-27.481146304675715,"y":-61.57875457875458,"cMask":["wall"],"color":"FFAA50"},{"x":-13.39862098685628,"y":-64.97478991596638,"cMask":["wall"],"color":"FFAA50"},{"x":-13.01917690152984,"y":-72.79271708683473,"cMask":["wall"],"color":"FFAA50"},{"x":6.470588235294117,"y":-61.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":17.352941176470587,"y":-57.35294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":18.235294117647058,"y":-65,"cMask":["wall"],"color":"FFAA50"},{"x":25.294117647058822,"y":-52.94117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":41.17647058823529,"y":-42.94117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":43.37535014005602,"y":-36.4873949579832,"cMask":["wall"],"color":"FFAA50"},{"x":34.11764705882353,"y":-34.11764705882353,"cMask":["wall"],"color":"FFAA50"},{"x":56.764705882352935,"y":-20.588235294117645,"cMask":["wall"],"color":"FFAA50"},{"x":69.99999999999999,"y":-19.41176470588235,"cMask":["wall"],"color":"FFAA50"},{"x":68.23529411764706,"y":-10.588235294117647,"cMask":["wall"],"color":"FFAA50"},{"x":67.67226890756301,"y":-1.6078431372549016,"cMask":["wall"],"color":"FFAA50"},{"x":56.764705882352935,"y":-5.88235294117647,"cMask":["wall"],"color":"FFAA50"},{"x":61.764705882352935,"y":10.294117647058822,"cMask":["wall"],"color":"FFAA50"},{"x":71.40056022408963,"y":8.0812324929972,"cMask":["wall"],"color":"FFAA50"},{"x":65.30252100840335,"y":20.991596638655455,"cMask":["wall"],"color":"FFAA50"},{"x":42.94117647058823,"y":-5.294117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":33.66968325791856,"y":-3.642533936651579,"cMask":["wall"],"color":"FFAA50"},{"x":1.723981900452487,"y":-25.746606334841623,"cMask":["wall"],"curve":0,"color":"FFAA50"},{"x":48.03145873734108,"y":-18.12303382891618,"cMask":["wall"],"color":"FFAA50"},{"x":39.03232062055591,"y":-15.20060331825038,"cMask":["wall"],"curve":-80,"color":"FFAA50"},{"x":43.796164619694025,"y":-19.829347123464775,"cMask":["wall"],"curve":-80,"color":"FFAA50"},{"x":24.031784571239378,"y":-32.667034543648604,"cMask":["wall"],"color":"FFAA50"},{"x":0.5882352941176463,"y":-17.941176470588236,"cMask":["wall"],"color":"FFAA50"},{"x":-8.348615498449012,"y":-15.156464327385526,"cMask":["wall"],"color":"FFAA50"},{"x":-21.010074276444975,"y":-35.85950083952305,"cMask":["wall"],"color":"FFAA50"},{"x":-26.147776183644186,"y":-9.404591104734578,"cMask":["wall"],"curve":100,"color":"FFAA50"},{"x":9.999999999999998,"y":12.941176470588234,"cMask":["wall"],"color":"FFAA50"},{"x":45.724533715925396,"y":45.566714490674315,"cMask":["wall"],"color":"FFAA50"},{"x":36.642754662840744,"y":63.27116212338595,"cMask":["wall"],"color":"FFAA50"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":-22.63348416289592,"y":-18.092373910164437,"cMask":["wall"],"curve":100,"color":"FFAA50"},{"x":4.666666666666669,"y":-75.33333333333333,"cMask":["wall"],"color":"FFAA50"},{"x":-54.76923076923078,"y":-7.692307692307693,"cMask":["wall"],"color":"FFAA50"},{"x":33.84615384615384,"y":-11.999999999999998,"cMask":["wall"],"curve":0,"color":"FFAA50"},{"x":-1.1428571428571428,"y":170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA50"},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":-180},{"x":-1.1428571428571428,"y":-170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA50"},{"x":0,"y":-75.48780487804879,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":180},{"x":0,"y":-75.5,"cMask":["wall"],"curve":180},{"x":-377.0967741935484,"y":67.92626728110605,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":-377.74193548387086,"y":169.28571428571428,"cMask":["ball"],"color":"FF5000","vis":false},{"x":-376.45161290322585,"y":-170.13824884792612,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":-376.45161290322574,"y":-69.42396313364048,"cMask":["ball"],"color":"FF5000","vis":false},{"x":377.09677419354796,"y":-170.1382488479261,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":376.45161290322545,"y":-68.77880184331786,"cMask":["ball"],"color":"FF5000","vis":false},{"x":377.7419354838706,"y":69.21658986175122,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":377.7419354838707,"y":169.93087557603684,"cMask":["ball"],"color":"FF5000","vis":false},{"x":13.95713579370991,"y":-44.50263380383389,"cMask":["wall"],"color":"FF5000"},{"x":26.154085115975512,"y":-38.43848991729908,"cMask":["wall"],"color":"FF5000"},{"x":16.492060376938966,"y":-49.255617397388356,"cMask":["wall"],"color":"FF5000"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":13.146067415730343,"y":-47.75280898876405,"cMask":["wall"]},{"x":20.000000000000014,"y":-40.78651685393259,"cMask":["wall"]},{"x":14.606741573033716,"y":-49.77528089887642,"cMask":["wall"]},{"x":20.337078651685417,"y":-40.89887640449439,"cMask":["wall"]},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.63157829422025,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.6441451618553,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":-3.495798319327733,"y":-168.6926308985133,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-2.3529411764705896,"y":-77.03757863370492,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.69650937297996,"y":-168.3080155138979,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":2.8393665158371033,"y":-76.65296324908954,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.7417582417582422,"y":168.10439560439562,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":1.1703296703296708,"y":75.96153846153845,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-3.1577392456789446,"y":168.34424871610804,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-3.8296703296703303,"y":75.76923076923076,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-373.2835820895522,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":374.4776119402985,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-369.4029850746269,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":370.5970149253731,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-367.910447761194,"y":68.57142857142861,"cMask":["wall"],"trait":"ballArea","color":"FF9E00","_data":{"mirror":[]}},{"x":-367.9104477611939,"y":169.28571428571425,"cMask":["wall"],"color":"FF9E00"},{"x":-372.98507462686564,"y":68.57142857142864,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149235,"y":172.86780383795306,"cMask":["wall"],"color":"FF9E00"},{"x":-367.01492537313436,"y":-169.10447761194018,"trait":"ballArea","color":"FF9E00"},{"x":-367.01492537313425,"y":-68.39019189765456,"cMask":["wall"],"color":"FF9E00","_data":{"mirror":[]}},{"x":-372.3880597014926,"y":-173.28358208955214,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149247,"y":-68.9872068230277,"cMask":["wall"],"color":"FF9E00"},{"x":-370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":-373.5820895522388,"y":-172.686567164179,"trait":"ballArea","color":"FF9E00"},{"x":374.77611940298505,"y":-171.7910447761193,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731342,"y":-168.68869936034102,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731343,"y":-67.97441364605538,"cMask":["wall"],"color":"FF9E00"},{"x":372.68656716417894,"y":-172.5692963752664,"trait":"ballArea","color":"FF9E00"},{"x":372.68656716417905,"y":-68.27292110874194,"cMask":["wall"],"color":"FF9E00"},{"x":368.32622601279303,"y":68.86993603411523,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":368.32622601279314,"y":169.58422174840086,"cMask":["wall"],"color":"FF9E00"},{"x":373.40085287846466,"y":67.97441364605555,"trait":"ballArea","color":"FF9E00"},{"x":373.1023454157782,"y":172.27078891258,"cMask":["wall"],"color":"FF9E00"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":19,"v1":20,"trait":"ballArea"},{"v0":21,"v1":22,"trait":"ballArea"},{"v0":23,"v1":24,"trait":"ballArea"},{"v0":25,"v1":26,"trait":"ballArea"},{"v0":27,"v1":28,"curve":-90,"trait":"goalNet"},{"v0":28,"v1":29,"trait":"goalNet"},{"v0":29,"v1":30,"curve":-90,"trait":"goalNet"},{"v0":31,"v1":32,"curve":90,"trait":"goalNet"},{"v0":32,"v1":33,"trait":"goalNet"},{"v0":33,"v1":34,"curve":90,"trait":"goalNet"},{"v0":19,"v1":23,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":35,"v1":36,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":35,"v1":37,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":38,"v1":39,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":40,"v1":41,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":42,"v1":43,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":44,"v1":45,"curve":-155.44777141900283,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":45,"v1":46,"curve":50.03378695619983,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":46,"v1":47,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":47,"v1":48,"curve":94.51217054681895,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":48,"v1":49,"curve":-75.41720962197125,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":49,"v1":50,"curve":-59.275498614371116,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":50,"v1":51,"curve":65.58698629288317,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":51,"v1":52,"curve":63.008533438408115,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":54,"v1":55,"curve":23.495200109276738,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":55,"v1":56,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":56,"v1":57,"curve":-108.0128766703783,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":57,"v1":58,"curve":-39.25999444475261,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":58,"v1":59,"curve":44.544384918009584,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":59,"v1":60,"curve":107.24642943099013,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":60,"v1":61,"curve":-71.24742438186682,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":62,"v1":63,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":63,"v1":64,"curve":-48.07111394448096,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":64,"v1":65,"curve":-29.88850295569818,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":65,"v1":66,"curve":93.37473663338619,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":66,"v1":67,"curve":61.8434037445923,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":67,"v1":68,"curve":-9.335597271376578,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":68,"v1":69,"curve":-57.152577289116614,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":69,"v1":70,"curve":101.03595621152891,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":70,"v1":71,"curve":82.49348207936853,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":71,"v1":72,"curve":-73.3486993391458,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":73,"curve":-43.26319753693733,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":73,"v1":74,"curve":-133.251835589027,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":73,"v1":75,"curve":-84.43637364222394,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":76,"curve":52.386560062169245,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":76,"v1":77,"curve":-47.247391337930516,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":79,"curve":-35.28901235703227,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":79,"v1":80,"curve":59.58103275424326,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":80,"v1":81,"curve":-135.14395296629627,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":81,"v1":82,"curve":27.120488024514685,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":82,"v1":78,"curve":-59.489762593884514,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":77,"v1":83,"curve":-44.59362506110965,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":83,"v1":84,"curve":51.130481096194515,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":84,"v1":85,"curve":96.83054830735131,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":86,"v1":87,"curve":-62.892308337442714,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":87,"v1":88,"curve":90.99230516982212,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":88,"v1":89,"curve":34.470380401245706,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":86,"v1":93,"curve":56.11663910286783,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":93,"v1":85,"curve":64.59984442416254,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":62,"v1":94,"curve":77.78830864056546,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":61,"v1":94,"curve":89.08744104758328,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":52,"v1":95,"curve":-66.7724618489055,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":95,"v1":53,"curve":-11.092021067743413,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":53,"v1":54,"curve":2.296622806461533,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":78,"v1":96,"curve":58.17566246787586,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":96,"v1":72,"curve":-8.59760042468219,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":97,"v1":98,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":101,"v1":102,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":102,"v1":98,"curve":-180,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":104,"v1":103,"curve":180,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":105,"v1":106,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":107,"v1":108,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":109,"v1":110,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":111,"v1":112,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":113,"v1":114,"curve":-34.80540826271246,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":114,"v1":115,"curve":16.831513080620265,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":115,"v1":113,"curve":-183.27866143936012,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":119,"v1":120,"curve":0,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":121,"v1":122,"curve":0,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":123,"v1":124,"curve":-34.80540826271246,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":124,"v1":125,"curve":16.831513080620265,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":125,"v1":123,"curve":-183.27866143936012,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":127,"v1":126,"curve":-180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":130,"v1":131,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":132,"v1":133,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":134,"v1":135,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":136,"v1":137,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":138,"v1":139,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":140,"v1":141,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":143,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":144,"v1":145,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":146,"v1":147,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":148,"v1":149,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":150,"v1":151,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":152,"v1":153,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":154,"v1":155,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":156,"v1":157,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":158,"v1":159,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":160,"v1":161,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":147,"color":"FFFFFF","cMask":["wall"],"_data":{"mirror":[],"arc":{"a":[-367.910447761194,68.57142857142861],"b":[-367.01492537313425,-68.39019189765456],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":155,"v1":158,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red","_data":{"mirror":[]}},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":5,"pos":[-368.06451612903226,64.64516129032258],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[-368.06451612903226,-63.35483870967742],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,64],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,-64],"color":"FF5000","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,-170],"b":[889,-170]}}},{"normal":[0,-1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,170],"b":[889,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,-200],"b":[889,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,200],"b":[889,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[-420,-420],"b":[-420,420]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[420,-420],"b":[420,420]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","canBeStored":true,"kickOffReset":"partial","playerPhysics":{"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.1,"gravity":[0,0],"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"cMask":["all"],"damping":0.99,"invMass":1.5,"gravity":[0,0],"color":"FFFFFF","cGroup":["ball"]}}';
var v3Map = '{"name":"3v3 Futsal | Champions League by Namajunas VOL 3 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":648,"height":270,"bg":{"type":"","color":"(bgcolor)"},"vertexes":[{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":-550,"y":-80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":550,"y":-80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":-550,"y":80,"cMask":["ball"],"color":"D82B2B","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED","_data":{"mirror":[]}},{"x":-550,"y":-80,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":-80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":550,"y":-80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":550,"y":80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":-325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":-325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":-325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":-400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":79,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"2674C5"},{"x":-592,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":556,"y":-82,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":-592,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":-36.33260832977,"y":-69.619595273771,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-73.821461001685,"y":-27.330632717964,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.014361966537,"y":-54.244550695595,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.567788655896,"y":-39.579912744961,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-27.401905204993,"y":-55.974842894447,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.297436994888,"y":-45.699472272904,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-51.291668342567,"y":-25.483550876345,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-63.952037024452,"y":-3.2227163265885,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-78.895794055559,"y":0.32417480054631,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.967322788025,"y":-4.65870951332,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-29.751401391465,"y":-2.6644781656408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.8263783052,"y":12.497432119268,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-42.579241521635,"y":29.856547074011,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.106141245534,"y":17.104852702161,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.894087183041,"y":32.276923958182,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.356170964318,"y":10.650350277649,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-26.356801780968,"y":44.267529896973,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-36.378517274838,"y":52.147864537104,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-58.005090955371,"y":51.60994831838,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-32.527166164471,"y":65.4323331171,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-14.488127495522,"y":76.174616209625,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-16.928826321916,"y":61.433832500673,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":6.9659557761919,"y":58.957631800408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-13.341291310333,"y":51.229465626872,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-2.7461577238685,"y":30.876555695364,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.435218979552,"y":63.4687077328,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":22.589636521506,"y":70.400160549363,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":5.5248205788828,"y":79.275039858045,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":41.344223828575,"y":42.968648295232,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":38.999869652681,"y":61.976890729974,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.008861779209,"y":56.522074984591,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.919785164602,"y":27.390630394901,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":60.068328222308,"y":34.398228969783,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.01646035409,"y":46.373531926884,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":68.928027599344,"y":29.734984570796,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":78.31548222399,"y":9.7321974675032,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":69.65875616911,"y":13.28924956575,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":64.462737561977,"y":-8.245998424817,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.780234233423,"y":14.928216074637,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":35.503783381106,"y":15.597978817731,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":62.732445363125,"y":-26.858455186361,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":77.00129764056,"y":-17.379674871749,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.305863455719,"y":-39.331030477738,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":53.877887996667,"y":-56.497333081438,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.590107328654,"y":-48.708324131272,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.278154602466,"y":-57.192559777334,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":43.79018771559,"y":-38.909903901781,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":32.154846615592,"y":-28.467061831954,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":51.772009016798,"y":-29.441284558281,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":8.5138426951989,"y":-58.532208313565,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.5832688652041,"y":-42.456918078959,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.656415856378,"y":-57.659472248316,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.240308240956,"y":-66.158887826024,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-23.849872067281,"y":-75.333208157404,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0.13623572079257,"y":-72.075474031812,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":27.699717549337,"y":-72.735075803794,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":13.557692835738,"y":-67.325922903394,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-5.8464583222451,"y":-11.427709842133,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.2586099897905,"y":5.6269451293777,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.822135576265,"y":10.680956241028,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":20.849306401585,"y":-4.242478847855,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.015384298223,"y":-19.196396850074,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0,"y":239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false},{"x":0,"y":-270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false}],"segments":[{"v0":6,"v1":7,"color":"D5E0ED","cMask":["ball"],"bias":30,"_data":{"mirror":[],"arc":{"a":[-550,80],"b":[-550,240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":8,"v1":9,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":10,"v1":11,"color":"D5E0ED","cMask":["ball"]},{"v0":12,"v1":13,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":14,"v1":15,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":16,"v1":17,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":18,"v1":19,"color":"D5E0ED","cMask":["ball"]},{"v0":20,"v1":21,"color":"666666","bCoef":0.1,"cMask":[],"_data":{"mirror":[],"arc":{"a":[-550,-80],"b":[-550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":22,"v1":23,"color":"666666","bCoef":0.1,"cMask":["c0"],"strength":0.1,"_length":9,"_data":{"mirror":[],"arc":{"a":[550,-80],"b":[550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":24,"v1":25,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325,"_data":{"mirror":[],"arc":{"a":[-325,-238.5],"b":[-325,238.5],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":26,"v1":27,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":28,"v1":29,"curve":-120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":30,"v1":31,"curve":120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325},{"v0":32,"v1":33,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":33,"v1":32,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":32,"v1":33,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":34,"v1":35,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":35,"v1":34,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":34,"v1":35,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"2674C5","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":592,"radius":3.5},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","y":79,"strength":0.1,"_length":9},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","y":-81,"x":549,"strength":0.1,"_length":9},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9},{"v0":46,"v1":47,"curve":0,"vis":false,"color":"D82B2B","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":-592,"radius":3.5},{"v0":48,"v1":49,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":50,"v1":51,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":50,"v1":52,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":51,"v1":53,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":52,"v1":54,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":55,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":55,"v1":56,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":53,"curve":-25.58879878153,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":57,"curve":-22.118592734133,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":57,"v1":58,"curve":-29.626928237609,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":59,"curve":-8.7974107099911,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":59,"v1":60,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":61,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":61,"v1":62,"curve":-23.690782919169,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":63,"curve":6.3596602397285,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":63,"v1":64,"curve":-9.7585475660135,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":64,"v1":65,"curve":26.464535213028,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":58,"v1":65,"curve":-18.492225491127,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":66,"curve":-21.380476552998,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":67,"curve":-7.5955767419349,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":67,"v1":68,"curve":32.559346404261,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":68,"v1":69,"curve":-24.830195108546,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":69,"v1":70,"curve":-24.732085694618,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":70,"v1":71,"curve":27.41392200816,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":71,"v1":72,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":73,"curve":3.8183048659928,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":73,"v1":74,"curve":21.545295296441,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":66,"curve":4.0746613936398,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":75,"curve":-22.61986494804,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":76,"curve":-38.02475667701,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":76,"v1":77,"curve":17.640759104042,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":75,"v1":78,"curve":-19.050603759689,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":79,"curve":25.573402898373,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":79,"v1":80,"curve":-26.199686164533,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":81,"curve":-4.7900110337447,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":82,"curve":-12.808705452768,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":82,"v1":83,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":83,"v1":84,"curve":-19.564814063615,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":84,"v1":85,"curve":-23.127465433213,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":85,"v1":86,"curve":47.924977949156,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":86,"v1":87,"curve":-25.654246845845,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":88,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":88,"v1":89,"curve":20.078509574305,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":81,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":90,"curve":-15.453235238194,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":90,"v1":91,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":91,"v1":92,"curve":-25.787488089764,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":92,"v1":93,"curve":-29.104815395383,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":93,"v1":94,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":94,"v1":95,"curve":-31.369727296019,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":96,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":96,"v1":97,"curve":-5.4526219878125,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":98,"curve":-10.38885781547,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":98,"v1":87,"curve":13.958142285095,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":99,"curve":-3.3943123792006,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":99,"v1":100,"curve":-24.781713321362,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":101,"curve":23.251797286617,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":101,"v1":54,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":102,"curve":34.432147175581,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":102,"v1":103,"curve":-25.63473646559,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":103,"v1":104,"curve":11.055080303312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":104,"v1":105,"curve":33.290076429352,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":105,"v1":106,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":106,"v1":95,"curve":13.163889310356,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":107,"curve":-5.9896134344567,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":107,"v1":60,"curve":-10.52479079919,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":108,"curve":-12.68038349182,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":108,"v1":74,"curve":-20.383003700055,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":109,"curve":19.642197209326,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":109,"v1":89,"curve":-2.7409020355992,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":110,"curve":0.15913530748199,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":110,"v1":97,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":111,"curve":-8.8161746788795,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":111,"v1":100,"curve":19.352654077974,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":80,"v1":77,"curve":35.810257640434,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":112,"v1":113,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":-180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":114,"v1":115,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":112,"v1":116,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":117,"v1":115,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,-240],"b":[832,-240]}}},{"normal":[0,-1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,240],"b":[832,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,-270],"b":[832,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,270],"b":[832,270]}}},{"normal":[1,0],"dist":-659.1467764060357,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-659.1467764060357,"canvas_rect":[-832,-316,832,316],"a":[-659.1467764060357,-316],"b":[-659.1467764060357,316]}}},{"normal":[-1,0],"dist":-661.1467764060358,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-661.1467764060358,"canvas_rect":[-832,-316,832,316],"a":[661.1467764060358,-316],"b":[661.1467764060358,316]}}},{"normal":[1,0],"dist":-657.8600823045267,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-657.8600823045267,"canvas_rect":[-832,-316,832,316],"a":[-657.8600823045267,-316],"b":[-657.8600823045267,316]}}},{"normal":[-1,0],"dist":-661.0041152263375,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-661.0041152263375,"canvas_rect":[-832,-316,832,316],"a":[661.0041152263375,-316],"b":[661.0041152263375,316]}}}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red","color":"D82B2B","radius":3.5},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue","color":"2674C5","cMask":["ball","red","blue"],"strength":0.1,"_length":9}],"discs":[{"radius":6.25,"invMass":0,"pos":[-550,80],"color":"D82B2B","_length":9,"_data":{"mirror":[]},"_selected":true},{"radius":6,"invMass":0,"pos":[-550,-80],"color":"D82B2B","_length":9},{"radius":6,"invMass":0,"pos":[550,80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,-85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,-80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,-80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":6,"invMass":0,"pos":[550,-80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,-80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,0],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,-80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,0],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,-80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,-80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,-80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,-80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9,"_data":{"mirror":[]}},{"radius":3.5,"invMass":0,"pos":[606,-90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,-95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[606,90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,-95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,-90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,-85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickStrength":4.545,"kickback":0},"ballPhysics":{"radius":5.8,"bCoef":0.412,"invMass":1.5,"color":"ffbf00","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":350,"joints":[{"d0":3,"d1":4,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":4,"d1":5,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":5,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":26,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":25,"d1":26,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":24,"d1":25,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":23,"d1":24,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":22,"d1":23,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":21,"d1":22,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":20,"d1":21,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":19,"d1":20,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":18,"d1":19,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":17,"d1":18,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":16,"d1":17,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":15,"d1":16,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":14,"d1":15,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":13,"d1":14,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":12,"d1":13,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":12,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":10,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":10,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":8,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":8,"d1":9,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":1,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9},{"d0":47,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":46,"d1":47,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":44,"d1":46,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":43,"d1":44,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":42,"d1":43,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":41,"d1":42,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":40,"d1":41,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":39,"d1":40,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":38,"d1":39,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":37,"d1":38,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":36,"d1":37,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":35,"d1":36,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":34,"d1":35,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":33,"d1":34,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":32,"d1":33,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":31,"d1":32,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":30,"d1":31,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":30,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":45,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":45,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":2,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9}],"traits":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v4Map = '{"name":"UZY Futsal Power 4v4 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[{"x":-700,"y":85,"trait":"v"},{"x":-700,"y":-85,"trait":"v"},{"x":-700,"y":-285,"trait":"v"},{"x":-700,"y":285,"trait":"v"},{"x":0,"y":-85,"trait":"ko"},{"x":0,"y":-320,"trait":"ko"},{"x":0,"y":85,"trait":"ko"},{"x":0,"y":-380,"trait":"v"},{"x":-700,"y":-320,"trait":"v"},{"x":-700,"y":320,"trait":"v"},{"x":700,"y":-320,"trait":"v"},{"x":700,"y":-85,"trait":"v"},{"x":700,"y":85,"trait":"v"},{"x":700,"y":-285,"trait":"v"},{"x":700,"y":285,"trait":"v"},{"x":0,"y":320,"trait":"ko"},{"x":0,"y":380,"trait":"v"},{"x":700,"y":320,"trait":"v"}],"segments":[{"v0":1,"v1":0,"trait":"nc"},{"v0":3,"v1":2,"trait":"nc","curve":-180},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"E56E56","curve":180},{"v0":4,"v1":7,"trait":"ko","vis":false},{"v0":8,"v1":1,"trait":"bb"},{"v0":0,"v1":9,"trait":"bb"},{"v0":10,"v1":8,"trait":"bb"},{"v0":12,"v1":11,"trait":"nc"},{"v0":13,"v1":14,"trait":"nc","curve":-180},{"v0":6,"v1":15,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"5689E5","curve":180},{"v0":6,"v1":16,"trait":"ko","vis":false},{"v0":17,"v1":12,"trait":"bb"},{"v0":11,"v1":10,"trait":"bb"},{"v0":9,"v1":17,"trait":"bb"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score","c0"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-700,-85],"color":"E56E56"},{"trait":"gp","pos":[-700,85],"color":"E56E56"},{"trait":"gp","pos":[700,85],"color":"5689E5"},{"trait":"gp","pos":[700,-85],"color":"5689E5"},{"trait":"nd1","pos":[-712.53,-81.55]},{"trait":"nd1","pos":[-724.1,-78.37]},{"trait":"nd1","pos":[-735.67,-75.18]},{"trait":"nd1","pos":[-747.24,-72],"invMass":0},{"trait":"nd1","pos":[-747.24,-60]},{"trait":"nd1","pos":[-747.24,-48]},{"trait":"nd1","pos":[-747.24,-36]},{"trait":"nd1","pos":[-747.24,-24]},{"trait":"nd1","pos":[-747.24,-12]},{"trait":"nd1","pos":[-747.24,0]},{"trait":"nd1","pos":[-747.24,12]},{"trait":"nd1","pos":[-747.24,24]},{"trait":"nd1","pos":[-747.24,36]},{"trait":"nd1","pos":[-747.24,48]},{"trait":"nd1","pos":[-747.24,60]},{"trait":"nd1","pos":[-747.24,72],"invMass":0},{"trait":"nd1","pos":[-735.67,75.18]},{"trait":"nd1","pos":[-724.1,78.37]},{"trait":"nd1","pos":[-712.53,81.55]},{"trait":"nd2","pos":[712.53,-81.55]},{"trait":"nd2","pos":[724.1,-78.37]},{"trait":"nd2","pos":[735.67,-75.18]},{"trait":"nd2","pos":[747.24,-72],"invMass":0},{"trait":"nd2","pos":[747.24,-60]},{"trait":"nd2","pos":[747.24,-48]},{"trait":"nd2","pos":[747.24,-36]},{"trait":"nd2","pos":[747.24,-24]},{"trait":"nd2","pos":[747.24,-12]},{"trait":"nd2","pos":[747.24,0]},{"trait":"nd2","pos":[747.24,12]},{"trait":"nd2","pos":[747.24,24]},{"trait":"nd2","pos":[747.24,36]},{"trait":"nd2","pos":[747.24,48]},{"trait":"nd2","pos":[747.24,60]},{"trait":"nd2","pos":[747.24,72],"invMass":0},{"trait":"nd2","pos":[735.67,75.18]},{"trait":"nd2","pos":[724.1,78.37]},{"trait":"nd2","pos":[712.53,81.55]}],"goals":[{"p0":[-706.25,-85],"p1":[-706.25,85],"team":"red"},{"p0":[706.25,85],"p1":[706.25,-85],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-380,"trait":"pb"},{"normal":[0,-1],"dist":-380,"trait":"pb"},{"normal":[1,0],"dist":-800,"trait":"pb"},{"normal":[-1,0],"dist":-800,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":99,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cGroup":["c1","ball"],"cMask":["c0","red","blue"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cGroup":["c1","ball"],"cMask":["c0","red","blue"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":800,"height":380,"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":6.4},"redSpawnPoints":[[-150,-100],[-150,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[150,100],[150,-100],[300,0],[500,0],[700,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":2,"d1":23,"trait":"nj"},{"d0":4,"d1":24,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":30,"d1":29,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":3,"d1":42,"trait":"nj"}],"canBeStored":true}';
var v6Map = '{"name":"UZY Futsal 6v6 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[{"x":-800,"y":95,"trait":"v"},{"x":-800,"y":-95,"trait":"v"},{"x":-440,"y":-370,"trait":"v"},{"x":-440,"y":370,"trait":"v"},{"x":0,"y":-95,"trait":"ko"},{"x":0,"y":-370,"trait":"ko"},{"x":0,"y":95,"trait":"ko"},{"x":0,"y":-430,"trait":"v"},{"x":800,"y":-95,"trait":"v"},{"x":800,"y":95,"trait":"v"},{"x":440,"y":-370,"trait":"v"},{"x":440,"y":370,"trait":"v"},{"x":0,"y":370,"trait":"ko"},{"x":0,"y":430,"trait":"v"},{"x":-800,"y":-370,"trait":"v"},{"x":-800,"y":370,"trait":"v"},{"x":800,"y":-370,"trait":"v"},{"x":800,"y":370,"trait":"v"}],"segments":[{"v0":1,"v1":0,"trait":"nc"},{"v0":2,"v1":3,"trait":"nc"},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"E56E56","curve":180},{"v0":4,"v1":7,"trait":"ko","vis":false},{"v0":9,"v1":8,"trait":"nc"},{"v0":11,"v1":10,"trait":"nc"},{"v0":6,"v1":12,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"5689E5","curve":180},{"v0":6,"v1":13,"trait":"ko","vis":false},{"v0":14,"v1":1,"trait":"bb"},{"v0":0,"v1":15,"trait":"bb"},{"v0":16,"v1":14,"trait":"bb"},{"v0":17,"v1":9,"trait":"bb"},{"v0":8,"v1":16,"trait":"bb"},{"v0":15,"v1":17,"trait":"bb"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-800,-95],"color":"E56E56"},{"trait":"gp","pos":[-800,95],"color":"E56E56"},{"trait":"gp","pos":[800,95],"color":"5689E5"},{"trait":"gp","pos":[800,-95],"color":"5689E5"},{"trait":"nd1","pos":[-810.51,-91.76]},{"trait":"nd1","pos":[-820.07,-88.82]},{"trait":"nd1","pos":[-829.63,-85.88]},{"trait":"nd1","pos":[-839.19,-82.94]},{"trait":"nd1","pos":[-848.74,-80],"invMass":0},{"trait":"nd1","pos":[-848.74,-70]},{"trait":"nd1","pos":[-848.74,-60]},{"trait":"nd1","pos":[-848.74,-50]},{"trait":"nd1","pos":[-848.74,-40]},{"trait":"nd1","pos":[-848.74,-30]},{"trait":"nd1","pos":[-848.74,-20]},{"trait":"nd1","pos":[-848.74,-10]},{"trait":"nd1","pos":[-848.74,0]},{"trait":"nd1","pos":[-848.74,10]},{"trait":"nd1","pos":[-848.74,20]},{"trait":"nd1","pos":[-848.74,30]},{"trait":"nd1","pos":[-848.74,40]},{"trait":"nd1","pos":[-848.74,50]},{"trait":"nd1","pos":[-848.74,60]},{"trait":"nd1","pos":[-848.74,70]},{"trait":"nd1","pos":[-848.74,80],"invMass":0},{"trait":"nd1","pos":[-839.19,82.94]},{"trait":"nd1","pos":[-829.63,85.88]},{"trait":"nd1","pos":[-820.07,88.82]},{"trait":"nd1","pos":[-810.51,91.76]},{"trait":"nd2","pos":[810.51,-91.76]},{"trait":"nd2","pos":[820.07,-88.82]},{"trait":"nd2","pos":[829.63,-85.88]},{"trait":"nd2","pos":[839.19,-82.94]},{"trait":"nd2","pos":[848.74,-80],"invMass":0},{"trait":"nd2","pos":[848.74,-70]},{"trait":"nd2","pos":[848.74,-60]},{"trait":"nd2","pos":[848.74,-50]},{"trait":"nd2","pos":[848.74,-40]},{"trait":"nd2","pos":[848.74,-30]},{"trait":"nd2","pos":[848.74,-20]},{"trait":"nd2","pos":[848.74,-10]},{"trait":"nd2","pos":[848.74,0]},{"trait":"nd2","pos":[848.74,10]},{"trait":"nd2","pos":[848.74,20]},{"trait":"nd2","pos":[848.74,30]},{"trait":"nd2","pos":[848.74,40]},{"trait":"nd2","pos":[848.74,50]},{"trait":"nd2","pos":[848.74,60]},{"trait":"nd2","pos":[848.74,70]},{"trait":"nd2","pos":[848.74,80],"invMass":0},{"trait":"nd2","pos":[839.19,82.94]},{"trait":"nd2","pos":[829.63,85.88]},{"trait":"nd2","pos":[820.07,88.82]},{"trait":"nd2","pos":[810.51,91.76]}],"goals":[{"p0":[-806.25,-95],"p1":[-806.25,95],"team":"red"},{"p0":[806.25,95],"p1":[806.25,-95],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-430,"trait":"pb"},{"normal":[0,-1],"dist":-430,"trait":"pb"},{"normal":[1,0],"dist":-900,"trait":"pb"},{"normal":[-1,0],"dist":-900,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":3.5,"damping":0.99,"cMask":["ball"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":3.5,"damping":0.99,"cMask":["ball"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"transparent"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":900,"height":430,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-150,-100],[-150,100],[-300,0],[-500,0],[-800,0]],"blueSpawnPoints":[[150,100],[150,-100],[300,0],[500,0],[800,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":24,"d1":23,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":2,"d1":29,"trait":"nj"},{"d0":4,"d1":30,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":43,"d1":42,"trait":"nj"},{"d0":44,"d1":43,"trait":"nj"},{"d0":45,"d1":44,"trait":"nj"},{"d0":46,"d1":45,"trait":"nj"},{"d0":47,"d1":46,"trait":"nj"},{"d0":48,"d1":47,"trait":"nj"},{"d0":49,"d1":48,"trait":"nj"},{"d0":50,"d1":49,"trait":"nj"},{"d0":51,"d1":50,"trait":"nj"},{"d0":52,"d1":51,"trait":"nj"},{"d0":53,"d1":52,"trait":"nj"},{"d0":54,"d1":53,"trait":"nj"},{"d0":3,"d1":54,"trait":"nj"}],"canBeStored":true}';
var v7Map = '{"name":"sindicato hax 7v6 normal","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[/* 0 */{"x":-1175,"y":110,"trait":"bb","color":"FFFFFF"},/* 1 */{"x":-1175,"y":-110,"trait":"bb","color":"FFFFFF","curve":0},/* 2 */{"x":-1175,"y":-385,"trait":"v","color":"FFFFFF"},/* 3 */{"x":-1175,"y":385,"trait":"v","color":"FFFFFF"},/* 4 */{"x":0,"y":-185,"trait":"ko","color":"11b7ff"},/* 5 */{"x":0,"y":-600,"trait":"ko"},/* 6 */{"x":0,"y":185,"trait":"ko","color":"11b7ff"},/* 7 */{"x":0,"y":-635,"trait":"v"},/* 8 */{"x":-1175,"y":-600,"trait":"bb","color":"FFFFFF","curve":0},/* 9 */{"x":-1175,"y":600,"trait":"bb","color":"FFFFFF"},/* 10 */{"x":1175,"y":-600,"trait":"bb","color":"FFFFFF"},/* 11 */{"x":1175,"y":-110,"trait":"bb","color":"FFFFFF"},/* 12 */{"x":1175,"y":110,"trait":"bb","color":"FFFFFF"},/* 13 */{"x":1175,"y":-385,"trait":"v","color":"FFFFFF"},/* 14 */{"x":1175,"y":385,"trait":"v","color":"FFFFFF"},/* 15 */{"x":0,"y":600,"trait":"ko"},/* 16 */{"x":0,"y":635,"trait":"v"},/* 17 */{"x":1175,"y":600,"trait":"bb","color":"FFFFFF"},/* 18 */{"x":-790,"y":-7,"cGroup":["wall"],"cMask":["wall"]},/* 19 */{"x":-790,"y":3,"cGroup":["wall"],"cMask":["wall"]},/* 20 */{"x":791,"y":-7,"cMask":["wall"],"cGroup":["wall"]},/* 21 */{"x":791,"y":3,"cMask":["wall"],"cGroup":["wall"]},/* 22 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 23 */{"cMask":["wall"],"cGroup":["wall"],"x":-42.5,"y":29},/* 24 */{"cMask":["wall"],"cGroup":["wall"],"x":43.5,"y":30},/* 25 */{"cMask":["wall"],"cGroup":["wall"],"x":86.5,"y":100},/* 26 */{"cMask":["wall"],"cGroup":["wall"],"x":115.5,"y":73},/* 27 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-37},/* 28 */{"cMask":["wall"],"cGroup":["wall"],"x":40.5,"y":-60},/* 29 */{"cMask":["wall"],"cGroup":["wall"],"x":-57.5,"y":-35},/* 30 */{"cMask":["wall"],"cGroup":["wall"],"x":76.5,"y":104},/* 31 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 32 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 33 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 34 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-79.10791561250448},/* 35 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.97184473452512,"y":29.0709040796512},/* 36 */{"cMask":["wall"],"cGroup":["wall"],"x":47.90064311143442,"y":30.045488040841747},/* 37 */{"cMask":["wall"],"cGroup":["wall"],"x":89.40961987520575,"y":95.34261344061139},/* 38 */{"cMask":["wall"],"cGroup":["wall"],"x":116.17316158174788,"y":70.77468610037135},/* 39 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-35.251637358927894},/* 40 */{"cMask":["wall"],"cGroup":["wall"],"x":40.9370095318302,"y":-55.64165242750204},/* 41 */{"cMask":["wall"],"cGroup":["wall"],"x":-54.4263484285878,"y":-33.30246943654669},/* 42 */{"cMask":["wall"],"cGroup":["wall"],"x":74.70055123837233,"y":102.16470116894556},/* 43 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.190043256900026,"y":-148.4050410122741},/* 44 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.08094399571257,"y":-81.10791561250448},/* 45 */{"cMask":["wall"],"cGroup":["wall"],"x":-38.190043256900026,"y":-147.4050410122741},/* 46 */{"cMask":["wall"],"cGroup":["wall"],"x":52.5,"y":-34},/* 47 */{"cMask":["wall"],"cGroup":["wall"],"x":78.5,"y":-49},/* 48 */{"cMask":["wall"],"cGroup":["wall"],"x":46.5,"y":-45},/* 49 */{"cMask":["wall"],"cGroup":["wall"],"x":70.5,"y":-59,"color":"ffffff"},/* 50 */{"cMask":["wall"],"cGroup":["wall"],"x":19.5,"y":-88},/* 51 */{"cMask":["wall"],"cGroup":["wall"],"x":49.5,"y":-48},/* 52 */{"cMask":["wall"],"cGroup":["wall"],"x":33.5,"y":-103},/* 53 */{"cMask":["wall"],"cGroup":["wall"],"x":66.5,"y":-58},/* 54 */{"cMask":["wall"],"cGroup":["wall"],"x":31.5,"y":-125,"color":"505050"},/* 55 */{"cMask":["wall"],"cGroup":["wall"],"x":26.5,"y":-137,"color":"505050"},/* 56 */{"cMask":["wall"],"cGroup":["wall"],"x":28.5,"y":-151,"color":"505050"},/* 57 */{"cMask":["wall"],"cGroup":["wall"],"x":29.5,"y":-169,"color":"505050"},/* 58 */{"cMask":["wall"],"cGroup":["wall"],"x":13.5,"y":-123,"color":"505050"},/* 59 */{"cMask":["wall"],"cGroup":["wall"],"x":5.5,"y":-135,"color":"505050"},/* 60 */{"cMask":["wall"],"cGroup":["wall"],"x":8.5,"y":-157,"color":"505050"},/* 61 */{"cMask":["wall"],"cGroup":["wall"],"x":12.5,"y":-176,"color":"505050"},/* 62 */{"cMask":["wall"],"cGroup":["wall"],"x":-6.5,"y":-158,"color":"505050"},/* 63 */{"cMask":["wall"],"cGroup":["wall"],"x":-10.5,"y":-183,"color":"505050"},/* 64 */{"cMask":["wall"],"cGroup":["wall"],"x":30.5,"y":-199,"color":"505050"},/* 65 */{"cMask":["wall"],"cGroup":["wall"],"x":37.5,"y":-232,"color":"505050"},/* 66 */{"cMask":["wall"],"cGroup":["wall"],"x":11.5,"y":-210,"color":"505050"},/* 67 */{"cMask":["wall"],"cGroup":["wall"],"x":6.5,"y":-257,"color":"505050"},/* 68 */{"cMask":["wall"],"cGroup":["wall"],"x":83.5,"y":-71,"color":"ffffff"},/* 69 */{"cMask":["wall"],"cGroup":["wall"],"x":75.5,"y":-56,"color":"ffffff"},/* 70 */{"cMask":["wall"],"cGroup":["wall"],"x":90.5,"y":-69,"color":"ffffff"},/* 71 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 72 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 73 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 74 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 75 */{"cMask":["wall"],"cGroup":["wall"],"x":-9.5,"y":-97},/* 76 */{"cMask":["wall"],"cGroup":["wall"],"x":-32.5,"y":-108}],"segments":[{"v0":1,"v1":0,"trait":"nc","x":-1175},{"v0":3,"v1":2,"trait":"nc","curve":-180,"color":"FFFFFF"},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"ff1115","curve":180},{"v0":4,"v1":6,"trait":"ko","vis":false},{"v0":8,"v1":1,"trait":"bb","x":-1175,"color":"FFFFFF","curve":0},{"v0":0,"v1":9,"trait":"bb","x":-1175,"color":"FFFFFF"},{"v0":10,"v1":8,"trait":"bb","y":-600,"color":"FFFFFF"},{"v0":12,"v1":11,"trait":"nc","x":1175},{"v0":13,"v1":14,"trait":"nc","curve":-180,"color":"FFFFFF","x":1175},{"v0":6,"v1":15,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"11b7ff","curve":180},{"v0":6,"v1":15,"trait":"ko","vis":false},{"v0":17,"v1":12,"trait":"bb","x":1175,"color":"FFFFFF"},{"v0":11,"v1":10,"trait":"bb","x":1175,"color":"FFFFFF"},{"v0":9,"v1":17,"trait":"bb","y":600,"color":"FFFFFF"},{"v0":18,"v1":19,"curve":-180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":-110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":0,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":20,"v1":21,"curve":-180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":-110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":0,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":23},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":23,"v1":24},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":24,"v1":25},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":25,"v1":26},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":27,"v1":28,"curve":-35.13002937458595},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":29,"v1":30,"curve":-205.33386491629776},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":31,"curve":-183.8478819691025},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":33,"curve":173.88551652918804},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":35,"curve":-23.901187801606472},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":35,"v1":36},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":36,"v1":37},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":37,"v1":38},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":39,"v1":40,"curve":-35.5091927036537},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":41,"v1":42,"curve":-207.01754667045108},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":43,"curve":-184.00698891107533},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45,"curve":173.70106103798304},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":46,"v1":47},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":46,"v1":48},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":49},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":48},{"curve":19.4007838878916,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":51},{"curve":-30.31978069668057,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53},{"curve":121.41727565803163,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":50},{"curve":61.059411799868286,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55},{"curve":-84.79487559500053,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57},{"curve":84.54737801218732,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59},{"curve":2.4377504702625763,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":60,"v1":61},{"curve":36.86989764584401,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":62,"v1":63},{"curve":49.55028113766386,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":64,"v1":65},{"curve":52.60804874942499,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":66,"v1":67},{"cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":69,"v1":70,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":70,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":71,"v1":72,"curve":197.59482141998248,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":73,"v1":74,"curve":-186.3596602397281,"color":"ffffff"},{"curve":129.3076481161066,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":75,"v1":76}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-1174,-107],"color":"E56E56"},{"trait":"gp","pos":[-1174,113],"color":"E56E56"},{"trait":"gp","pos":[1177,110],"color":"5689E5","p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"gp","pos":[1177,-110],"color":"5689E5","p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd1","pos":[-1184.51,-103.76],"invMass":2.5},{"trait":"nd1","pos":[-1194.0700000000002,-100.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1203.63,-97.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1213.19,-94.94],"invMass":2.5},{"trait":"nd1","pos":[-1222.74,-77],"invMass":0},{"trait":"nd1","pos":[-1222.74,-67],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-57],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-47],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-37],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-27],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-17],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-7],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,3],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,13],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,23],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,33],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,43],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,53],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,63],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,73],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,83],"invMass":0},{"trait":"nd1","pos":[-1212.19,98.94],"invMass":2.5},{"trait":"nd1","pos":[-1202.63,103.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1192.0700000000002,107.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1184.51,112.76],"invMass":2.5},{"trait":"nd2","pos":[1187.51,-106.76],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1197.0700000000002,-103.82],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1206.63,-100.88],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1216.19,-97.94],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-95],"invMass":0,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-68],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-58],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-48],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-38],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-28],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-18],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-8],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,2],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,12],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,22],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,32],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,42],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,52],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,62],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,72],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,95],"invMass":0,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1217.19,98.94],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1207.63,101.88],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1198.0700000000002,104.82],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1188.51,107.76],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd1","pos":[-1220.74,92],"invMass":0},{"trait":"nd1","pos":[-1219.74,-88],"invMass":0},{"trait":"nd2","pos":[1226.74,83],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,-75],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,-86],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]}],"goals":[{"p0":[-1179.25,-107],"p1":[-1179.25,113],"team":"red"},{"p0":[1181.25,110],"p1":[1181.25,-110],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-635,"trait":"pb"},{"normal":[0,-1],"dist":-680,"trait":"pb"},{"normal":[1,0],"dist":-1275,"trait":"pb"},{"normal":[-1,0],"dist":-1275,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":1275,"height":635,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-250,-100],[-250,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[250,100],[250,-100],[300,0],[500,0],[700,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":24,"d1":23,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":2,"d1":29,"trait":"nj"},{"d0":4,"d1":30,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":43,"d1":42,"trait":"nj"},{"d0":44,"d1":43,"trait":"nj"},{"d0":45,"d1":44,"trait":"nj"},{"d0":46,"d1":45,"trait":"nj"},{"d0":47,"d1":46,"trait":"nj"},{"d0":48,"d1":47,"trait":"nj"},{"d0":49,"d1":48,"trait":"nj"},{"d0":50,"d1":49,"trait":"nj"},{"d0":51,"d1":50,"trait":"nj"},{"d0":52,"d1":51,"trait":"nj"},{"d0":53,"d1":52,"trait":"nj"},{"d0":54,"d1":53,"trait":"nj"},{"d0":3,"d1":54,"trait":"nj"}],"canBeStored":true,"spawnDistance":700}';
var v10Map = '{"name":"sindicato hax 10v9 normal","bg":{"type":"","color":"3D3D3D"},"ballPhysics":"disc0","vertexes":[/* 0 */{"x":-1375,"y":115,"trait":"bb","color":"b2011a","cMask":["ball"]},/* 1 */{"x":-1375,"y":-115,"trait":"bb","color":"b2011a","cMask":["ball"]},/* 2 */{"x":-1375,"y":-485,"trait":"v","color":"FFFFFF"},/* 3 */{"x":-1375,"y":485,"trait":"v","color":"FFFFFF"},/* 4 */{"x":0,"y":-185,"trait":"ko","color":"11b7ff"},/* 5 */{"x":0,"y":-800,"trait":"ko"},/* 6 */{"x":0,"y":185,"trait":"ko","color":"11b7ff"},/* 7 */{"x":-1375,"y":-800,"trait":"bb","color":"FFFFFF"},/* 8 */{"x":-1375,"y":800,"trait":"bb","color":"FFFFFF"},/* 9 */{"x":1375,"y":-800,"trait":"bb","color":"FFFFFF"},/* 10 */{"x":1375,"y":-115,"trait":"bb","color":"00008b","cGroup":["ball"]},/* 11 */{"x":1375,"y":115,"trait":"bb","color":"00008b","cGroup":["ball"]},/* 12 */{"x":1375,"y":-485,"trait":"v","color":"FFFFFF"},/* 13 */{"x":1375,"y":485,"trait":"v","color":"FFFFFF"},/* 14 */{"x":0,"y":800,"trait":"ko"},/* 15 */{"x":1375,"y":800,"trait":"bb","color":"FFFFFF"},/* 16 */{"x":-891,"y":-13,"cGroup":["wall"],"cMask":["wall"]},/* 17 */{"x":-891,"y":-3,"cGroup":["wall"],"cMask":["wall"]},/* 18 */{"x":890,"y":-5,"cMask":["wall"],"cGroup":["wall"]},/* 19 */{"x":890,"y":5,"cMask":["wall"],"cGroup":["wall"]},/* 20 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 21 */{"cMask":["wall"],"cGroup":["wall"],"x":-42.5,"y":29},/* 22 */{"cMask":["wall"],"cGroup":["wall"],"x":43.5,"y":30},/* 23 */{"cMask":["wall"],"cGroup":["wall"],"x":86.5,"y":100},/* 24 */{"cMask":["wall"],"cGroup":["wall"],"x":115.5,"y":73},/* 25 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-37},/* 26 */{"cMask":["wall"],"cGroup":["wall"],"x":40.5,"y":-60},/* 27 */{"cMask":["wall"],"cGroup":["wall"],"x":-57.5,"y":-35},/* 28 */{"cMask":["wall"],"cGroup":["wall"],"x":76.5,"y":104},/* 29 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 30 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 31 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 32 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-79.10791561250448},/* 33 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.97184473452512,"y":29.0709040796512},/* 34 */{"cMask":["wall"],"cGroup":["wall"],"x":47.90064311143442,"y":30.045488040841747},/* 35 */{"cMask":["wall"],"cGroup":["wall"],"x":89.40961987520575,"y":95.34261344061139},/* 36 */{"cMask":["wall"],"cGroup":["wall"],"x":116.17316158174788,"y":70.77468610037135},/* 37 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-35.251637358927894},/* 38 */{"cMask":["wall"],"cGroup":["wall"],"x":40.9370095318302,"y":-55.64165242750204},/* 39 */{"cMask":["wall"],"cGroup":["wall"],"x":-54.4263484285878,"y":-33.30246943654669},/* 40 */{"cMask":["wall"],"cGroup":["wall"],"x":74.70055123837233,"y":102.16470116894556},/* 41 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.190043256900026,"y":-148.4050410122741},/* 42 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.08094399571257,"y":-81.10791561250448},/* 43 */{"cMask":["wall"],"cGroup":["wall"],"x":-38.190043256900026,"y":-147.4050410122741},/* 44 */{"cMask":["wall"],"cGroup":["wall"],"x":52.5,"y":-34},/* 45 */{"cMask":["wall"],"cGroup":["wall"],"x":78.5,"y":-49},/* 46 */{"cMask":["wall"],"cGroup":["wall"],"x":46.5,"y":-45},/* 47 */{"cMask":["wall"],"cGroup":["wall"],"x":70.5,"y":-59,"color":"ffffff"},/* 48 */{"cMask":["wall"],"cGroup":["wall"],"x":19.5,"y":-88},/* 49 */{"cMask":["wall"],"cGroup":["wall"],"x":49.5,"y":-48},/* 50 */{"cMask":["wall"],"cGroup":["wall"],"x":33.5,"y":-103},/* 51 */{"cMask":["wall"],"cGroup":["wall"],"x":66.5,"y":-58},/* 52 */{"cMask":["wall"],"cGroup":["wall"],"x":31.5,"y":-125,"color":"505050"},/* 53 */{"cMask":["wall"],"cGroup":["wall"],"x":26.5,"y":-137,"color":"505050"},/* 54 */{"cMask":["wall"],"cGroup":["wall"],"x":28.5,"y":-151,"color":"505050"},/* 55 */{"cMask":["wall"],"cGroup":["wall"],"x":29.5,"y":-169,"color":"505050"},/* 56 */{"cMask":["wall"],"cGroup":["wall"],"x":13.5,"y":-123,"color":"505050"},/* 57 */{"cMask":["wall"],"cGroup":["wall"],"x":5.5,"y":-135,"color":"505050"},/* 58 */{"cMask":["wall"],"cGroup":["wall"],"x":8.5,"y":-157,"color":"505050"},/* 59 */{"cMask":["wall"],"cGroup":["wall"],"x":12.5,"y":-176,"color":"505050"},/* 60 */{"cMask":["wall"],"cGroup":["wall"],"x":-6.5,"y":-158,"color":"505050"},/* 61 */{"cMask":["wall"],"cGroup":["wall"],"x":-10.5,"y":-183,"color":"505050"},/* 62 */{"cMask":["wall"],"cGroup":["wall"],"x":30.5,"y":-199,"color":"505050"},/* 63 */{"cMask":["wall"],"cGroup":["wall"],"x":37.5,"y":-232,"color":"505050"},/* 64 */{"cMask":["wall"],"cGroup":["wall"],"x":11.5,"y":-210,"color":"505050"},/* 65 */{"cMask":["wall"],"cGroup":["wall"],"x":6.5,"y":-257,"color":"505050"},/* 66 */{"cMask":["wall"],"cGroup":["wall"],"x":83.5,"y":-71,"color":"ffffff"},/* 67 */{"cMask":["wall"],"cGroup":["wall"],"x":75.5,"y":-56,"color":"ffffff"},/* 68 */{"cMask":["wall"],"cGroup":["wall"],"x":90.5,"y":-69,"color":"ffffff"},/* 69 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 70 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 71 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 72 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 73 */{"cMask":["wall"],"cGroup":["wall"],"x":-9.5,"y":-97},/* 74 */{"cMask":["wall"],"cGroup":["wall"],"x":-32.5,"y":-108},/* 75 */{"trait":"v","x":-1435,"y":-116,"cMask":["ball"]},/* 76 */{"x":-1435,"y":115,"cMask":["ball"]},/* 77 */{"trait":"v","x":1435,"y":-115,"cGroup":["ball"]},/* 78 */{"trait":"v","x":1435,"y":115,"cGroup":["ball"]}],"segments":[{"v0":1,"v1":0,"trait":"nc","color":"b2011a"},{"v0":3,"v1":2,"trait":"nc","curve":-180,"color":"FFFFFF","x":-1375},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"ff1115","curve":180},{"v0":4,"v1":6,"trait":"ko","vis":false},{"v0":7,"v1":1,"trait":"bb","x":-1375,"color":"FFFFFF"},{"v0":0,"v1":8,"trait":"bb","x":-1375,"color":"FFFFFF"},{"v0":9,"v1":7,"trait":"bb","y":-800,"color":"FFFFFF"},{"v0":11,"v1":10,"trait":"nc","color":"00008b"},{"v0":12,"v1":13,"trait":"nc","curve":-180,"color":"FFFFFF","x":1375},{"v0":6,"v1":14,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"11b7ff","curve":180},{"v0":6,"v1":14,"trait":"ko","vis":false},{"v0":15,"v1":11,"trait":"bb","x":1375,"color":"FFFFFF"},{"v0":10,"v1":9,"trait":"bb","x":1375,"color":"FFFFFF"},{"v0":8,"v1":15,"trait":"bb","y":800,"color":"FFFFFF"},{"v0":16,"v1":17,"curve":-180,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":180,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":110,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":-110,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":16,"v1":17,"curve":200.77771563093836,"color":"ffffff","x":-900,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":-180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":-110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":18,"v1":19,"curve":0,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":20,"v1":21},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":21,"v1":22},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":23},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":23,"v1":24},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":25,"v1":26,"curve":-35.13002937458595},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":27,"v1":28,"curve":-205.33386491629776},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":20,"v1":29,"curve":-183.8478819691025},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":30,"v1":31,"curve":173.88551652918804},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":33,"curve":-23.901187801606472},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":33,"v1":34},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":35},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":35,"v1":36},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":37,"v1":38,"curve":-35.5091927036537},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":39,"v1":40,"curve":-207.01754667045108},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":41,"curve":-184.00698891107533},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":42,"v1":43,"curve":173.70106103798304},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":46},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":47},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":46},{"curve":19.4007838878916,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":48,"v1":49},{"curve":-30.31978069668057,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":51},{"curve":121.41727565803163,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":48},{"curve":61.059411799868286,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53},{"curve":-84.79487559500053,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55},{"curve":84.54737801218732,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57},{"curve":2.4377504702625763,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59},{"curve":36.86989764584401,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":60,"v1":61},{"curve":49.55028113766386,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":62,"v1":63},{"curve":52.60804874942499,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":64,"v1":65},{"cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":66,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":67,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":68,"v1":66,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":69,"v1":70,"curve":197.59482141998248,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":71,"v1":72,"curve":-186.3596602397281,"color":"ffffff"},{"curve":129.3076481161066,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":73,"v1":74},{"color":"ffffff","trait":"v","v0":1,"v1":75},{"color":"ffffff","v0":75,"v1":76},{"color":"ffffff","v0":76,"v1":0},{"color":"ffffff","trait":"v","v0":10,"v1":77,"cGroup":["ball"]},{"color":"ffffff","trait":"v","v0":1,"v1":75,"cMask":["ball"]},{"color":"ffffff","trait":"v","v0":11,"v1":78,"cGroup":["ball"]},{"color":"ffffff","trait":"v","v0":0,"v1":76,"cMask":["ball"]},{"color":"ffffff","v0":77,"v1":78,"cGroup":["ball"]},{"color":"ffffff","v0":75,"v1":76,"cMask":["ball"]}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"damping":0.99,"bCoef":0.35,"invMass":1.5},{"radius":6,"invMass":0,"pos":[-1375,-115],"color":"b2011a","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[1375,-115],"color":"00008b","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[-1375,115],"color":"b2011a","cGroup":["ball"],"bCoef":0.5},{"radius":6,"invMass":0,"pos":[1375,115],"color":"00008b","cGroup":["ball"],"bCoef":0.5}],"goals":[{"team":"red","p0":[-1380,-115],"p1":[-1380,115]},{"team":"blue","p0":[1380,-115],"p1":[1380,115]},{"team":"red","p0":[-1381,-116],"p1":[-1380,113]}],"planes":[{"normal":[0,1],"dist":-835,"trait":"pb"},{"normal":[0,-1],"dist":-835,"trait":"pb"},{"normal":[1,0],"dist":-1475,"trait":"pb"},{"normal":[-1,0],"dist":-1470,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":1475,"height":835,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-350,-100],[-350,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[350,100],[350,-100],[300,0],[500,0],[700,0]],"canBeStored":true,"spawnDistance":700}';


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

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
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
var GKList = ["", ""];
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
        room.sendAnnouncement("🏆 Rojo gana! [" + scores.red + " - " + scores.blue + "]", null, 0xFDC43A, 'bold');
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement("🏆 Azul gana! [" + scores.blue + " - " + scores.red + "]", null, 0xFDC43A, 'bold');
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Timeout reached");
    }
    //room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% | " + (Bposs * 100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    if (GKList.length > 1) {
        if (scores.red == 0) {
            room.sendAnnouncement("🧤🧤🧤 gg valla invicta soy el " + GKList[1].name + "! 🧤🧤🧤", null, 0xFDC43A, 'bold');
        } else if (scores.blue == 0) {
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
    return hslToHex(75, 8, hour + 10).toString(16);
}

function loadMap(map, scoreLim, timeLim) {
    //console.logg("cambiando mapa");
    if (currentMap == map) {
        //console.logg(currentMap.substring(0, 20));
        //console.logg(map.substring(0, 20));
        return;
    }


    room.setCustomStadium(map.replace("(bgcolor)", getBgColor()));
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
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
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
        if (currentMap != v2Map) {
            //console.logg("chose x2");
            return v2Map;
        }
        return null;
    } else if (players.length <= 6) {
        if (currentMap != v3Map) {
            console.log("chose x3");
            return v3Map;
        }
        return null;
    } else if (players.length <= 10) {
        if (currentMap != v4Map) {
            console.log("chose x4");
            return v4Map;
        }
        return null;
    } else if (players.length <= 12) {
        if (currentMap != v6Map) {
            console.log("chose x6");
            return v6Map;
        }
        return null;
    } else if (players.length <= 14) {
        if (currentMap != v7Map) {
            console.log("chose x7");
            return v7Map;
        }
        return null;

    } else if (players.length <= 18) {
        if (currentMap != v10Map) {
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
    //updateTeams();
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
        
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position == null) {
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
            if (teamB[i].position == null) {
                updateTeams();
            }
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
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
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[StatColumns.GK]++;
            game.scores.blue == 0 ? stats[StatColumns.VI]++ : null;
            stats[StatColumns.CP] = (100 * stats[StatColumns.VI] / stats[StatColumns.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
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
            room.setPlayerAvatar(redGkId, null);
            room.setPlayerAvatar(blueGkId, null);
            gkEmojiSet = false;
        } else {
            room.setPlayerAvatar(redGkId, "🧤");
            room.setPlayerAvatar(blueGkId, "🧤");
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
    if (!animatingGk) {
        setGkAvatar(tab[0][1].id, tab[1][1].id);
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
        if ( playerRole != "player") {
            room.setPlayerAdmin(player.id, true);
            /* room.sendAnnouncement((JSON.parse(localStorage.getItem(player.auth))[StatColumns.ROLE] == "master" ? "The Administrator " : "The Administrator ") + player.name + " connected!", null, 0xD81826); */
        } else {
            var adminCount = room.getPlayerList().filter((player) => player.id != 0 && player.admin).length;
            slotsAvailable = maxPlayers - (3 - Math.min(3, adminCount));

            console.log("resta " + slotsAvailable);
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

function printDiscord() {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD);
    room.sendAnnouncement("https://discord.gg/hmhedPyqKt ⬅", null, null);
}

function printVc() {
    var msg = "Entra al voice chat de la sala: " + voiceChatLink[roomNumber];
    room.sendAnnouncement(msg, null, 0x00FF00);
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
    //console.logg("salio " + player.name);
    /* 		if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
                choosePlayer();
                capLeft = true; setTimeout(() => { capLeft = false; }, 10);
            }
            if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
                choosePlayer();
                capLeft = true; setTimeout(() => { capLeft = false; }, 10);
            } */
    var index = handlePlayerExit();
    function handlePlayerExit() {
        setActivity(player, 0);
        players = room.getPlayerList().filter((player) => player.id != 0 && !isAFK(player));
        //console.logg("players on leave");
        //console.logg(players);
        var index = Array.prototype.findIndex.call(players, (x) => x.id === player.id);
        if (player.team == Team.RED) {
            teamR.splice(index, 1);
        } else if (player.team == Team.BLUE) {
            teamB.splice(index, 1);
        } else {
            teamS.splice(index, 1);
        }
        return index;
    }
    //updateRoleOnPlayerOut();
    ////console.logg("elegimos cancha on player leave");
    //chooseField();
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
const humilliatingVerbs = [" le robo el novio a ", " le meo la cara a ", " le hizo aplaudir las nalgas a ", " le hizo un brrr en la cola a ", " le toco el culo a ", " le ficho el bulto a ", " se caso con ", " embarazo a ", " fue embarazado por ", " le dio unos besitos a ", " se cago a trompadas con ", " chapo con ", " mecho uno con ", " reforzo amistad con ", " sale con el papa de ", " rechazo los avances sexuales no solicitados de ", " le pidio plata y nunca se la devolvio a ", " le dio un arrimon a ", " sale con la prima de ", " se unto en aceite y se le tiro encima a ", " se puso en tanga y le bailo a ", " y el admin salieron de travas y lo encontraron a ", " es un comilon como ", " piensa que el mejor jugador es ", " dice que el mas burro es ", " le dio play a la peli xno de enanos y la actriz principal era "];
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
    var emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    var message = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team, true);
    var color = player.team == Team.RED ? Colors.Vermelho : player.team == Team.BLUE ? Colors.Azul : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function getTop5ForStat(column){
    var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.
                    includes(key)) { 
                        var pStats = JSON.parse(localStorage.getItem(key));
                        if(pStats == null || pStats[column] == null || pStats[StatColumns.NICK] == null) {
                            console.log("entro uno null");
                            return null;
                        }
                        tableau.push([pStats[StatColumns.NICK], pStats[column]]); }
            });
        }
        catch(error) {
            console.log(error);
        }

        tableau.sort(function (a, b) { return b[1] - a[1]; });
        return tableau.slice(0, 5);
}

let
    palavras = ["mogolico", "retrasado", "enfermo", "enfermito", "down", "matate", "morite", "suicidate", "mueras", "violado", "http"], //swearing filter

    regex = new RegExp(palavras.join("|"), 'gi');

room.onPlayerChat = function (player, message) {
    message = message.trim();
    if (message == '') {
        return false;
    }

    isMaster = extendedP.filter((p)=>p[eP.ID] == player.id)[eP.ROLE] == "master";

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
                pauseVoteCount ++;

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
    else if (["!rr"].includes(message[0].toLowerCase()) && player.admin) {
        quickRestart();
    }

    else if (["!rt"].includes(message[0].toLowerCase()) && player.admin) {
        rebalanceTeams();
    }

    else if (["!cancha"].includes(message[0].toLowerCase()) && player.admin) {
        chooseField();
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
        console.log("no es player?" + role);
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

var teams = [
    { ID: 2, shortName: "boca", longName: "Club Atlético Boca Juniors", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
    { ID: 3, shortName: "rvp", longName: "Club Atlético River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF5000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF5000 }] },
    { ID: 14, shortName: "fla", longName: "CR Flamengo", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x000000, 0xFF5000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFF5000 }] },
    { ID: 16, shortName: "sao", longName: "São Paulo FC", country: "Brazil", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xE0E0E0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 17, shortName: "cor", longName: "SC Corinthians Paulista", country: "Brazil", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x808080 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x008000 }] },
    { ID: 18, shortName: "pal", longName: "SE Palmeiras", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0xFFFFC0 }, { angle: 0, mainColor: [0xFFFFFF, 0x008000, 0xFFFFFF], avatarColor: 0xFFFFC0 }] },
    { ID: 32, shortName: "mon", longName: "AS Monaco FC", country: "France", uniform: [{ angle: 120, mainColor: [0xFF5000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 33, shortName: "asse", longName: "AS Saint-Étienne", country: "France", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 34, shortName: "lil", longName: "Lille OSC", country: "France", uniform: [{ angle: 90, mainColor: [0xFF5000, 0x000080, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000000], avatarColor: 0x000080 }] },
    { ID: 35, shortName: "ol", longName: "Olympique Lyonnais", country: "France", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF5000, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF5000], avatarColor: 0x0000FF }] },
    { ID: 36, shortName: "mar", longName: "Olympique Marseille", country: "France", uniform: [{ angle: 0, mainColor: [0x00C0FF, 0xFFFFFF, 0x00C0FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404080, 0x202040, 0x00C0FF], avatarColor: 0xFFFFFF }] },
    { ID: 37, shortName: "psg", longName: "Paris Saint Germain FC", country: "France", uniform: [{ angle: 0, mainColor: [0x000080, 0xFFFFFF, 0x000080], avatarColor: 0xFF5000 }, { angle: 0, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0xFF5000 }] },
    { ID: 38, shortName: "lev", longName: "Bayer 04 Leverkusen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF5000, 0x000000, 0xFF5000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0xFF5000 }] },
    { ID: 39, shortName: "bay", longName: "Bayern Munchen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF5000, 0xC00000, 0xFF5000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xC0C000 }] },
    { ID: 40, shortName: "dor", longName: "Borussia Dortmund", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 41, shortName: "sch", longName: "FC Schalke 04", country: "Germany", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0x00FFFF }] },
    { ID: 42, shortName: "lei", longName: "RB Leipzig", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFF5000, 0xFF5000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 43, shortName: "wol", longName: "VfL Wolfsburg", country: "Germany", uniform: [{ angle: 0, mainColor: [0xAAFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 52, shortName: "mil", longName: "AC Milan", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFF5000, 0x000000, 0xFF5000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFEDCBA], avatarColor: 0x800000 }] },
    { ID: 53, shortName: "rom", longName: "AS Roma FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFFC000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 54, shortName: "int", longName: "FC Internazionale Milano", country: "Italy", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 55, shortName: "juv", longName: "Juventus FC", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x404040], avatarColor: 0xFFFF00 }] },
    { ID: 56, shortName: "nap", longName: "SSC Napoli", country: "Italy", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x0080FF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x808000, 0xFFFFFF, 0x808000], avatarColor: 0x000080 }] },
    { ID: 57, shortName: "tor", longName: "Torino FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 45, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
    { ID: 61, shortName: "ajx", longName: "AFC AJAX", country: "Netherlands", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF5000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 70, shortName: "por", longName: "FC Porto", country: "Portugal", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 86, shortName: "bil", longName: "Athletic Bilbao", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF5000, 0xFFFFFF, 0xFF5000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x80FF80], avatarColor: 0x000000 }] },
    { ID: 87, shortName: "atm", longName: "Atlético Madrid", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF5000, 0xFFFFFF, 0xFF5000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0xFF5000, 0xFF5000], avatarColor: 0xFFFFFF }] },
    { ID: 88, shortName: "bar", longName: "FC Barcelona", country: "Spain", uniform: [{ angle: 0, mainColor: [0x041E87, 0xAB0202, 0x041E87], avatarColor: 0xFFED02 }, { angle: 0, mainColor: [0xD4AE15], avatarColor: 0x1E28B0 }] },
    { ID: 89, shortName: "rma", longName: "Real Madrid CF", country: "Spain", uniform: [{ angle: 135, mainColor: [0xFFFFFF, 0x004996, 0xFFFFFF], avatarColor: 0xFCBF00 }, { angle: 90, mainColor: [0x004996], avatarColor: 0xFCBF00 }] },
    { ID: 90, shortName: "sev", longName: "Sevilla FC", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF5000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0xFF5000, 0xFFFFFF, 0xFF5000], avatarColor: 0x000000 }] },
    { ID: 91, shortName: "val", longName: "Valencia CF", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFDF1C, 0xEE3524, 0xFFDF1C], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC00000], avatarColor: 0xFFDF1C }] },
    { ID: 96, shortName: "bjk", longName: "Beşiktaş JK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF5000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 99, shortName: "gs", longName: "Galatasaray SK", country: "Turkey", uniform: [{ angle: 45, mainColor: [0xFDB912, 0xA90432], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFDB912 }] },
    { ID: 102, shortName: "ars", longName: "Arsenal FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF5000, 0xFFFFFF], avatarColor: 0x808000 }, { angle: 0, mainColor: [0xFFFF80], avatarColor: 0x000000 }] },
    { ID: 103, shortName: "che", longName: "Chelsea FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x034694], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 104, shortName: "liv", longName: "Liverpool FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFEDCBA, 0x000000, 0xFEDCBA], avatarColor: 0xFFFFFF }] },
    { ID: 105, shortName: "mu", longName: "Manchester United FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFF5000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0x00C0FF, 0x0080FF, 0x00C0FF], avatarColor: 0xFF5000 }] },
    { ID: 106, shortName: "mc", longName: "Manchester City FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x00C0FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C0FF }] },
    { ID: 107, shortName: "tot", longName: "Tottenham Hotspur FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000080, 0x000080], avatarColor: 0xFF5000 }, { angle: 90, mainColor: [0x000080, 0x000040, 0x000040], avatarColor: 0xFFFFFF }] },
];


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


function randomUniforms() {
    var red = generateRandomInteger(1, 100) % 2 ? generateRandomInteger(0, 10) : Math.abs(generateRandomInteger(350, 359));
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
        chooseRandomColorAmount(redPalette[0], altRedColor));

    /* var randomInts = getRandomIntegers(teams.length - 1);
    while (randomInts[0] == randomInts[1]) {
        randomInts = getRandomIntegers(teams.length - 1);
    }
    var t = [{ int: randomInts[0], teamID: 1 }, { int: randomInts[1], teamID: 2 }];
    t.forEach(x => {
        var index = teams[x.int];
        //console.logg("index " + index);
        //console.logg("x " + x);
        if (index !== -1) {
            //x.teamID - 1
            var team = teams[x.int];
            //console.logg(team);
            room.setTeamColors(
                x.teamID,
                team.uniform[UNIFORME_OFICIAL].angle,
                team.uniform[UNIFORME_OFICIAL].avatarColor,
                team.uniform[UNIFORME_OFICIAL].mainColor);
        }
    }); */
    room.sendAnnouncement("Comienza la final paralimpica y los equipos salen a la cancha!", null, 0x05C5FF, 'bold');
    room.sendAnnouncement("RED", null, hslToHex(red, redSat, redL), 'bold');
    room.sendAnnouncement("🆚", null, 0x05C5FF, null);
    room.sendAnnouncement("BLUE", null, hslToHex(blue, blueSat, blueL), 'bold');

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
    }
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
        allReds = [];
        allBlues = [];
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

    if (goalScorer == null) {
        return;
    }
    if (lastTeamTouched == team && passCombo > 0) {
        room.sendAnnouncement("👥 TREMENDO gol del " + (team == Team.RED ? "RED" : "BLUE") + " con " + passCombo + " pases seguidos!", null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
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
            if (players[i].team == team) room.setPlayerAvatar(players[i].id, "🤣");
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

    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
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
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.red - scores.blue) > 1) //primer gol
        //o un timeout para ver cuando resetear
        var changedField = chooseMap();
    if (changedField == null) {
        return;
    }

    if (game.scores.blue == game.scores.red) {
        for (var i = 0; i < 11; i++) {
            room.sendAnnouncement("🏆 Proximo gol gana y se cambia la cancha!", null, 0xFDC43A);
        }
    } else {
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
    getStats();
    getLastTouchOfTheBall();
    IntervalLoop();
    //uniformsLoop();
}