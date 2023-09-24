/* VARIABLES */
var teams = [
    { ID: 2, shortName: "boca", longName: "Club Atlético Boca Juniors", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
    { ID: 3, shortName: "rvp", longName: "Club Atlético River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF5000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF5000 }] },
];
/* Pass Combo counting */
var passTimeout = false;
var passCombo = 0;
/* constants */
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, DONATOR: 1, VIP: 2, ADMIN_TEMP: 3, ADMIN_PERM: 4, MASTER: 5 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };
const Mode = { NORMAL: 0, CAPS: 1 };

/* game mode */
var gameMode = Mode.NORMAL;

/* OPTIONS */

var drawTimeLimit = Infinity;
var teamSize = 12;
var maxAdmins = Infinity;
var disableBans = false;
var debugMode = true;
var afkLimit = debugMode ? Infinity : 12;

var defaultSlowMode = 0.5;
var chooseModeSlowMode = 1;
var slowMode = defaultSlowMode;
var SMSet = new Set();

var hideClaimMessage = true;
var mentionPlayersUnpause = true;
/* ROOM */

const roomNumber = 1;
const roomName = "JUEGAN TODOS CON ♿ (" + (roomNumber + 1) + (debugMode ? " prueba" : "") + ")";
const maxPlayers = 12;
const roomPublic = true; //debugMode ? false : true;
const token = ""; // Insert token here

var roomWebhook = 'https://discord.com/api/webhooks/1124426109551919197/KIQvCcC6PgQbWDnNbtdNW3rLwd9M04kxRlT1a366jMwQnAs0iulWw5Zda_4Q4JcbcK3d'; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
var gameWebhook = 'https://discord.com/api/webhooks/1122709779811401770/rIJqN26CqkkJhij-do122dzzdC2chwArJ_3mzBejfEBz5EQQoAiSjPuEN4mzTAC3vovt'; // this webhook is used to send the summary of the games ; it should be in a public discord channel
var fetchRecordingVariable = true;
var timeLimit = 10;
var scoreLimit = 0;

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

var room = HBInit(gameConfig);

var trainingMap = '{"name":"namajunas practice (training) [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","canBeStored":true,"kickOffReset":"full","width":850,"height":668,"spawnDistance":350,"bg":{"type":"","width":653,"height":320,"kickOffRadius":0,"cornerRadius":0,"color":"(bgcolor)"},"vertexes":[{"x":-651,"y":320,"cMask":["ball","wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":10},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"252525","vis":false,"curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":-1},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":80,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":0,"y":-336,"cMask":["wall"],"cGroup":["c1"],"trait":"kickOffBarrier","color":"252525","vis":false,"curve":20},{"x":-650,"y":-200,"bCoef":1,"cMask":["blue"],"cGroup":["blue"],"curve":0,"vis":false,"color":"252525"},{"x":-650,"y":200,"bCoef":1,"cMask":["blue","red"],"cGroup":["blue","red"],"curve":0,"vis":false,"radius":2,"color":"252525"},{"x":750,"y":200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false},{"x":750,"y":-200,"bCoef":1,"cMask":["red"],"cGroup":["red"],"curve":0,"vis":false,"color":"252525"},{"x":-658.8,"y":320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-10},{"x":-658.8,"y":100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":-10},{"x":750,"y":320,"trait":"ballArea","vis":true,"color":"252525","curve":0},{"x":750,"y":100,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"radius":4.5,"invMass":6.0e-6},{"x":-658.8,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":10},{"x":-658.8,"y":-100,"bCoef":0.1,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6,"bias":10},{"x":755,"y":-320,"trait":"ballArea","vis":false,"color":"ffffff","curve":0,"bias":-40},{"x":755,"y":-119,"trait":"ballArea","vis":false,"color":"FFFFFF","radius":4.6,"bias":-40},{"x":755,"y":122,"trait":"ballArea","vis":false,"color":"252525","curve":0,"radius":0.01,"bias":-40},{"x":755,"y":320,"trait":"ballArea","vis":false,"color":"252525","curve":0,"bias":-40},{"x":-650,"y":100,"bCoef":1.0e-27,"trait":"ballArea","vis":true,"color":"FFFFFF","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["blue"],"cGroup":["blue"],"trait":"ballArea","color":"FFFFFF","vis":true,"radius":4.5,"invMass":6.0e-6},{"x":0,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":true,"bias":-5,"curve":0},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":true},{"x":0,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-650,"y":-100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-650,"y":100,"bCoef":1.0e-27,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":-100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":750,"y":100,"bCoef":0.1,"cMask":["wall"],"cGroup":["wall"],"color":"252525","radius":4.5,"invMass":6.0e-6},{"x":-651,"y":-123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":7,"curve":-40,"color":"252525","invMass":1.0e-6},{"x":-572,"y":-123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-651,"y":123,"bCoef":-0.5,"cGroup":["c0"],"trait":"kickOffBarrier","radius":3,"invMass":1.0e-5,"curve":-40,"color":"252525"},{"x":-572,"y":123,"bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-650,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":213,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"252525"},{"x":-436,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-436,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":145,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"color":"252525"},{"x":0,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":2},{"x":750,"y":320,"bCoef":1,"cMask":["red","blue","wall","ball"],"cGroup":["wall"],"trait":"ballArea","bias":10,"color":"252525","curve":0},{"x":750,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10,"color":"252525"},{"x":750,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":20},{"x":31,"y":-557,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3,"vis":true},{"x":0,"y":-544,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":0,"y":-423,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":3},{"x":33,"y":-410,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"curve":-60,"color":"252525"},{"x":199,"y":-451,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":302,"y":-488,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":197,"y":-419,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":138,"y":-519,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"x":-715,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-701,"y":150,"cMask":["ball"],"trait":"ballArea","bias":-150},{"x":-715,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":-701,"y":-150,"cMask":["ball"],"trait":"ballArea","bias":150},{"x":830,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-670,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-670,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":-85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":-620,"y":85,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea"},{"x":280.8333333333333,"y":-23.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.3333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":279.8333333333333,"y":-22.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":292.8333333333333,"y":13.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":40,"color":"2E2E2E"},{"x":323,"y":-26,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":50,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":325.5,"y":-26.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":323,"y":10.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":325.66666666666663,"y":-25.66666666666663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319,"y":-21.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-180,"color":"2E2E2E"},{"x":319.33333333333337,"y":5.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":352.66666666666663,"y":6.833333333333314,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":30,"color":"2E2E2E"},{"x":323.33333333333337,"y":10.166666666666686,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":319.6666666666667,"y":5.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-190,"color":"2E2E2E"},{"x":351.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":356.66666666666663,"y":19.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":352.66666666666674,"y":-15.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-10,"color":"2E2E2E"},{"x":351.66666666666674,"y":18.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","curve":-160,"color":"2E2E2E"},{"x":-651,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"color":"252525"},{"x":0,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"curve":0,"color":"252525"},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"252525"},{"x":-35,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-20},{"x":-650,"y":-611,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":30},{"x":-650,"y":-320,"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":-10},{"x":-650,"y":-611,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","vis":true,"bias":-30},{"x":-650,"y":-641,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","color":"252525","bias":-30},{"x":-748.5,"y":-320,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":20},{"x":-648.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-650,"y":-320,"cMask":["wall"],"trait":"ballArea","color":"252525","vis":true,"curve":0,"bias":10},{"x":750,"y":-320,"cMask":["wall"],"trait":"ballArea","curve":0,"vis":false,"color":"252525","bias":10},{"x":0,"y":-320,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":10},{"x":-651,"y":320,"cMask":["wall"],"trait":"ballArea","vis":true,"color":"252525","curve":0,"bias":-10},{"x":750,"y":320,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":-10,"color":"252525","curve":0},{"x":750,"y":-320,"trait":"ballArea","curve":0},{"x":750,"y":320,"cMask":["ball","wall"],"trait":"ballArea","curve":0,"bias":-10},{"x":750,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10},{"x":7,"y":320,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5,"curve":0},{"x":7,"y":664.3,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"curve":0,"color":"252525","vis":false},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c1"],"curve":-180,"bias":2},{"x":523.0103134593124,"y":-628.0436457603902,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":506.01065450337177,"y":-628.1513276144995,"bCoef":0,"cMask":["c3"],"cGroup":["c3"],"curve":180,"bias":-2},{"x":55,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2},{"x":0,"y":-336.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":false,"bias":2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":-2,"color":"252525"},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":2,"color":"252525"},{"x":195,"y":-378,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":373,"y":-462.5,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":371.5,"y":-543,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":194.5,"y":-612,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":2,"color":"252525"},{"x":380,"y":-320,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":false,"bias":1},{"x":380,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":false,"curve":0},{"x":340,"y":-345,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":20,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":true,"bias":-5},{"x":340,"y":-640,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"vis":true,"bias":2,"color":"252525"},{"x":57,"y":-332,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","vis":true,"bias":5,"color":"252525"},{"x":-400,"y":-320,"bCoef":0.1,"cMask":["blue"],"cGroup":["blue"],"trait":"kickOffBarrier"},{"x":-280,"y":-320,"bCoef":0.1,"cMask":["red"],"cGroup":["red"],"trait":"kickOffBarrier"},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-1},{"x":2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":-2,"y":320,"bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5,"curve":0},{"x":-2,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["blueKO"],"trait":"kickOffBarrier","color":"252525","vis":false},{"x":270.1260754171482,"y":-175.08817212714803,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":-50,"vis":false,"bias":0},{"x":370.9962562492123,"y":-218.96534864189977,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":276.9070936057916,"y":-159.49914418037446,"bCoef":-4,"cMask":["ball"],"cGroup":["c0"],"curve":50,"vis":false,"bias":0},{"x":377.7772744378558,"y":-203.37632069512622,"bCoef":0.5,"cMask":["ball"],"cGroup":["c0"],"vis":false},{"x":235.51633140103326,"y":-176.93631149932702,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":-50,"vis":false,"color":"2E2E2E","bias":18},{"x":254.4632939869488,"y":-133.3787334127539,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"curve":50,"vis":false,"color":"2E2E2E","bias":18},{"x":496.5,"y":-288.5,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":532.5,"y":-250,"bCoef":0.85,"cMask":["ball"],"vis":false,"bias":-5},{"x":149.5,"y":-126,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":163,"y":-123,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154.5,"y":-113,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136,"y":-121.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":149.5,"y":-118.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141,"y":-108.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":141.5,"y":257,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":152,"y":270,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":136.5,"y":268,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":143.5,"y":158.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":154,"y":171.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":138.5,"y":169.5,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"x":629,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":631,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"x":660,"y":-80,"bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":624,"y":-75,"cMask":["wall"],"cGroup":["wall"]},{"x":624,"y":75,"cMask":["wall"],"cGroup":["wall"]},{"x":-1,"y":223,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":750,"y":224,"bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"x":747,"y":122,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":2,"y":123,"bCoef":1,"cMask":["wall"],"trait":"ballArea","curve":0},{"x":680,"y":65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":680,"y":-65,"bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"curve":-80},{"x":171,"y":197,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":212,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":154.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":196,"y":169.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":191.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":240,"y":206.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":152.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":270,"y":167.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":195.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":300,"y":210.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":150.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":325,"y":165.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"002033","curve":180},{"x":171,"y":296,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":171,"y":311,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":252,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":198,"y":267,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":288.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":242,"y":303.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":250,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":272,"y":265,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":292.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":300,"y":307.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":246.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":325,"y":261.5,"bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"vis":true,"bias":0,"color":"590000","curve":180},{"x":16,"y":272,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":281,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":16,"y":292,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":1,"y":282,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":172,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":29,"y":181,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":15,"y":192,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":0,"y":182,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"2E2E2E"},{"x":-340,"y":-518,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-340,"y":-444,"bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","color":"D4D4D4","bias":0},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"color":"D4D4D4"},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"color":"D4D4D4"},{"x":-110,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-110,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-531]},{"x":-570,"y":-582,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-531,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-531]},{"x":-110,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-110,-431]},{"x":-110,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-570,"y":-431,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4","pos":[-570,-431]},{"x":-570,"y":-382,"bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"color":"D4D4D4"},{"x":-20,"y":-320,"bCoef":1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-20,"y":-641,"bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-88,"y":-320,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":-5},{"x":-88,"y":-641,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":-5},{"x":-594,"y":-322,"bCoef":0.1,"cMask":["wall"],"trait":"kickOffBarrier","color":"252525","vis":false,"bias":5},{"x":-594,"y":-643,"bCoef":0.1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","curve":0,"color":"252525","vis":false,"bias":5},{"x":-109,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-87,"y":-420,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-109,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-87,"y":-540,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-571,"y":-548,"bCoef":0.1,"cMask":["wall"],"bias":-5},{"x":-593,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-571,"y":-419,"bCoef":0.1,"cMask":["wall"],"bias":5},{"x":-340,"y":-582,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":-340,"y":-382,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier","color":"D4D4D4"},{"x":170,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"},{"x":170,"y":663,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","color":"545454"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":2,"v1":3,"vis":true,"color":"252525","trait":"ballArea","x":-650},{"v0":4,"v1":5,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":6,"v1":7,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":14,"v1":6,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":13,"v1":5,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["red"],"cGroup":["red"],"x":750},{"v0":12,"v1":1,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":11,"v1":2,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["blue"],"cGroup":["blue"],"x":-650},{"v0":15,"v1":16,"vis":false,"color":"ffffff","trait":"ballArea","bias":-10,"x":-658.8},{"v0":17,"v1":18,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":19,"v1":20,"vis":false,"color":"ffffff","trait":"ballArea","bias":10,"x":-658.8,"y":-320},{"v0":21,"v1":22,"vis":false,"color":"ffffff","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":23,"v1":24,"curve":0,"vis":false,"color":"252525","trait":"ballArea","bias":-40,"x":755,"y":-320},{"v0":27,"v1":28,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":0},{"v0":29,"v1":30,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier"},{"v0":31,"v1":32,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"radius":0.05},{"v0":33,"v1":34,"curve":0,"vis":true,"color":"252525","bCoef":0,"cMask":["wall"],"cGroup":["wall"],"x":750},{"v0":35,"v1":36,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":37,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":36,"v1":38,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":41,"v1":42,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":40,"v1":43,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":44,"v1":45,"curve":145,"vis":true,"color":"252525","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea"},{"v0":0,"v1":48,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":10},{"v0":7,"v1":50,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":20,"x":750},{"v0":47,"v1":50,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"v0":51,"v1":52,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":53,"v1":54,"curve":-90,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":3},{"v0":52,"v1":53,"vis":true,"color":"252525","bCoef":0.9,"cMask":["ball","wall"],"trait":"ballArea","bias":2},{"v0":56,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":58,"v1":57,"curve":-10,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":56,"curve":-140,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":59,"v1":58,"curve":-180,"vis":true,"color":"576C46","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea"},{"v0":60,"v1":61,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":-150,"y":150},{"v0":62,"v1":63,"vis":false,"color":"ffffff","cMask":["ball"],"trait":"ballArea","bias":150,"y":-150},{"v0":7,"v1":64,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":65,"v1":66,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-670},{"v0":65,"v1":67,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":-85},{"v0":67,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","x":-620},{"v0":66,"v1":68,"vis":false,"bCoef":0.5,"cMask":["wall"],"cGroup":["c3"],"trait":"ballArea","y":85},{"v0":69,"v1":70,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":71,"v1":72,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":73,"v1":74,"curve":40,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":90},{"v0":75,"v1":76,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":75,"v1":77,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":78,"v1":79,"curve":50,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":130},{"v0":80,"v1":81,"curve":-180,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":83,"curve":30,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":82,"v1":79,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":85,"v1":84,"curve":-190,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":86,"v1":87,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":180},{"v0":87,"v1":88,"curve":-160,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":89,"v1":90,"curve":-10,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":166.66666666666669},{"v0":0,"v1":91,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10},{"v0":27,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"x":0},{"v0":91,"v1":92,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":95,"v1":96,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":30},{"v0":97,"v1":30,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-10},{"v0":30,"v1":7,"curve":0,"vis":true,"color":"252525","cMask":["ball"],"bias":-1},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-30},{"v0":100,"v1":101,"vis":false,"color":"DBD2C1","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-320},{"v0":103,"v1":102,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":10},{"v0":105,"v1":104,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"bias":10},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10,"y":320},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"252525","trait":"ballArea","x":750},{"v0":92,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":10,"y":664.3},{"v0":109,"v1":110,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-10,"x":750},{"v0":111,"v1":112,"curve":0,"vis":false,"color":"252525","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"x":20},{"v0":113,"v1":114,"curve":-180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":2,"x":514},{"v0":115,"v1":116,"curve":180,"vis":true,"color":"ff0000","bCoef":0,"cMask":["wall"],"cGroup":["c1"],"bias":-2,"x":514},{"v0":120,"v1":119,"curve":50.545030732114945,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-2},{"v0":122,"v1":123,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":124,"v1":125,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":47,"v1":121,"curve":50.545030732114945,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":119,"v1":10,"curve":14.794713706848997,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0},{"v0":127,"v1":126,"curve":0,"vis":false,"color":"0D0D0D","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":0,"x":380},{"v0":130,"v1":129,"curve":45.93532925828217,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":55,"v1":131,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":5},{"v0":51,"v1":129,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":-5},{"v0":131,"v1":128,"curve":62.190372743895615,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"cGroup":["c1"],"trait":"ballArea","bias":2},{"v0":134,"v1":135,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":136,"v1":137,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":138,"v1":139,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":2},{"v0":140,"v1":141,"vis":false,"color":"252525","bCoef":1,"cMask":["ball"],"trait":"kickOffBarrier","x":-2},{"v0":142,"v1":143,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-75},{"v0":144,"v1":145,"vis":false,"color":"1AF0E9","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":0,"y":-58},{"v0":146,"v1":147,"vis":false,"color":"2E2E2E","bCoef":0.5,"cMask":["ball"],"cGroup":["wall"],"bias":18},{"v0":146,"v1":142,"curve":41.993762397652105,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":147,"v1":144,"curve":-28.076285755567678,"vis":false,"color":"1AF0E9","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":142,"v1":144,"curve":-63.60183201071682,"vis":false,"color":"1AF0E9","bCoef":-4,"cMask":["ball"],"cGroup":["wall"],"bias":0},{"v0":148,"v1":149,"vis":false,"color":"1AF0E9","bCoef":0.85,"cMask":["ball"],"bias":-5},{"v0":150,"v1":151,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":153,"v1":154,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":156,"v1":157,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":157,"v1":158,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":159,"v1":160,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":160,"v1":161,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":162,"v1":163,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":80},{"v0":164,"v1":165,"vis":true,"color":"252525","bCoef":0.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"y":-80},{"v0":166,"v1":167,"curve":0,"vis":true,"color":"252525","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-10},{"v0":173,"v1":172,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":680},{"v0":173,"v1":165,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":163,"v1":172,"curve":-80,"vis":true,"color":"252525","bCoef":1.5,"cMask":["ball","wall"],"trait":"ballArea","bias":0},{"v0":174,"v1":175,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":175,"v1":174,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":176,"v1":177,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":177,"v1":176,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":196},{"v0":178,"v1":179,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":179,"v1":178,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":240},{"v0":180,"v1":181,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":181,"v1":180,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":270},{"v0":182,"v1":183,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":183,"v1":182,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":184,"v1":185,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":185,"v1":184,"curve":180,"vis":true,"color":"002033","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":186,"v1":187,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":187,"v1":186,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":171},{"v0":188,"v1":189,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":189,"v1":188,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":198},{"v0":190,"v1":191,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":191,"v1":190,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":242},{"v0":192,"v1":193,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":193,"v1":192,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":272},{"v0":194,"v1":195,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":195,"v1":194,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":300},{"v0":196,"v1":197,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":197,"v1":196,"curve":180,"vis":true,"color":"590000","bCoef":0.4,"cMask":["red","blue","ball"],"cGroup":["wall"],"bias":0,"x":325},{"v0":198,"v1":199,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":200,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":199,"v1":201,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":202,"v1":203,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":204,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":203,"v1":205,"curve":0,"vis":true,"color":"2E2E2E","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier"},{"v0":206,"v1":207,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":207,"v1":206,"curve":180,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["wall"],"cGroup":["c0"],"trait":"ballArea","bias":0},{"v0":208,"v1":209,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":-5,"y":-100},{"v0":210,"v1":211,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":5,"y":100},{"v0":212,"v1":213,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":214,"v1":215,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":216,"v1":217,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-110},{"v0":218,"v1":219,"curve":0,"vis":true,"color":"D4D4D4","bCoef":1,"cMask":["ball","wall"],"trait":"ballArea","bias":0,"x":-570},{"v0":221,"v1":220,"vis":false,"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":223,"v1":222,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":-5,"x":-20},{"v0":225,"v1":224,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"trait":"ballArea","bias":5,"x":-20},{"v0":226,"v1":227,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":228,"v1":229,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":230,"v1":231,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":-5,"y":-540},{"v0":232,"v1":233,"vis":false,"color":"252525","bCoef":0.1,"cMask":["wall"],"bias":5,"y":-420},{"v0":234,"v1":235,"vis":true,"color":"D4D4D4","bCoef":0.1,"cMask":["red","blue"],"cGroup":["wall"],"trait":"kickOffBarrier"},{"v0":236,"v1":237,"curve":0,"vis":true,"color":"545454","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","x":170}],"goals":[],"discs":[{"radius":7,"invMass":0,"pos":[-650,98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,0],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-10],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-20],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-30],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-40],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-50],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-60],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-70],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-80],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-90],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-690,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea","y":-180},{"radius":4.5,"invMass":6.0e-6,"pos":[-680,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-670,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":4.5,"invMass":6.0e-6,"pos":[-660,-98],"color":"000000","bCoef":0.1,"cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[-650,-98],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,-137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":5.5,"invMass":0,"pos":[-723,137],"color":"000000","cMask":["ball"],"trait":"ballArea"},{"radius":8,"invMass":5.0e-5,"pos":[-207,5],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.958,"x":-80},{"radius":0,"invMass":0,"pos":[-149,3],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[-217,-219],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-245,-210],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":0,"invMass":0,"pos":[-217,225],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-248,212],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.96,"x":-80},{"radius":7,"invMass":8.0e-6,"pos":[214.5,-144.5],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":0,"pos":[32,-558],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":8,"invMass":0,"pos":[32,-408],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96},{"radius":6,"invMass":8.0e-6,"pos":[72,-467],"color":"ffffff","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":1,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-456,-284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,-252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-456,284],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":5.0e-5,"pos":[-469,252],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.945,"x":-80},{"radius":0,"invMass":0,"pos":[-108,-143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,-141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":0,"invMass":0,"pos":[-108,143],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":-80},{"radius":8,"invMass":5.0e-5,"pos":[-154,141],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.964,"x":-80},{"radius":25,"invMass":1.0e-41,"pos":[-646,-3],"color":"252525","bCoef":2,"cMask":["kick","red","blue","c3"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-5]},{"radius":8,"invMass":8.0e-6,"pos":[-327,464],"color":"252525","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":15,"invMass":1.0e-26,"pos":[-473,406],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[-2,0]},{"radius":15,"invMass":1.0e-26,"pos":[-208,546],"color":"205F63","bCoef":1,"cMask":["all"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[2,0]},{"radius":9,"invMass":1.2e-5,"pos":[-340,-483],"color":"252525","bCoef":1,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.992,"speed":[0,0],"_data":{"mirror":[]}},{"radius":7,"invMass":1.0e-41,"pos":[643,439],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,1]},{"radius":7,"invMass":1.0e-41,"pos":[643,509],"color":"252525","bCoef":1,"cMask":["kick","red","blue","c3","wall"],"cGroup":["wall"],"trait":"ballArea","damping":1,"speed":[0,-1]},{"radius":6,"invMass":1.2e-5,"pos":[389,481],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0.05,"invMass":6.0e-6,"pos":[661,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,447],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,455],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,463],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[661,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,471],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,439],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[653,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,479],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,487],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,495],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[677,502],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":0.05,"invMass":6.0e-6,"pos":[669,509],"color":"000000","bCoef":3,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,423.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":4,"invMass":0,"pos":[693,521.5],"color":"000000","bCoef":1,"cMask":["wall"],"trait":"ballArea"},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[430,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[505,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":8.0e-6,"pos":[579,-423],"color":"1AF0E9","bCoef":0.5,"cMask":["all","c1"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[447,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":7,"invMass":0,"pos":[514.5,-628],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":0,"pos":[576,-630],"color":"transparent","bCoef":0.1,"cMask":["red","blue"],"cGroup":["c0"],"trait":"kickOffBarrier","damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[447,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":6.082762530298219,"invMass":1.0e+57,"pos":[576,-630],"color":"ff0000","bCoef":-1000,"cMask":["wall"],"cGroup":["c1"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[516,-290],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[516,-290],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":18,"invMass":0,"pos":[248,-156.5],"color":"ffffff","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":14,"invMass":0,"pos":[248,-156.5],"color":"e56e56","cMask":["ball"],"cGroup":["c0"],"damping":0.99,"speed":[0,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[724.5,265.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[718.5,254.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[707.5,247.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[693.5,248.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[686.5,257.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[683.5,268.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[687.5,278.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[696.5,285.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[708.5,287.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[722.5,176.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[0,4]},{"radius":2.5,"invMass":1.0e-103,"pos":[716.5,165.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[705.5,158.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[691.5,159.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[684.5,168.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[681.5,179.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[685.5,189.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002},{"radius":2.5,"invMass":1.0e-103,"pos":[694.5,196.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":2.719361147327249,"invMass":1.0e-103,"pos":[706.5,198.5],"color":"000000","bCoef":1,"cMask":["ball"],"cGroup":["wall"],"damping":1.002,"speed":[-4,0]},{"radius":0,"invMass":0,"pos":[705,268],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":0,"invMass":0,"pos":[701.5,179],"color":"000000","cMask":["ball"],"cGroup":["c3"],"damping":1.002},{"radius":7.3,"invMass":3.0e-5,"pos":[474,176],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[431,176],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":7.3,"invMass":3.0e-5,"pos":[474,266],"color":"FFCC00","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick","score"],"damping":0.95,"x":-80},{"radius":0,"invMass":0,"pos":[430,266],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":3.9e-5,"pos":[39,271],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":8,"invMass":3.9e-5,"pos":[39,288],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":0,"invMass":0,"pos":[39,239],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,322],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":8,"invMass":0,"pos":[625,-79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea"},{"radius":8,"invMass":0,"pos":[625,79],"color":"000000","cMask":["ball","red","blue"],"trait":"ballArea","curve":180},{"radius":7,"invMass":8.0e-6,"pos":[108,-109],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":7,"invMass":8.0e-6,"pos":[36,-83],"color":"1AF0E9","bCoef":0.5,"cMask":["all"],"cGroup":["ball","kick"],"damping":0.99,"speed":[0,0]},{"radius":8,"invMass":3.9e-5,"pos":[39,188],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,-1]},{"radius":8,"invMass":3.9e-5,"pos":[39,171],"color":"252525","bCoef":0.4,"cMask":["all"],"cGroup":["ball"],"trait":"ballArea","damping":0.92,"speed":[0,0],"gravity":[0,1]},{"radius":0,"invMass":0,"pos":[39,222],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":0,"invMass":0,"pos":[39,139],"color":"transparent","bCoef":0.5,"cMask":["all"],"cGroup":["c0"],"damping":0.99,"x":150},{"radius":10,"invMass":2.2e-5,"pos":[150,420],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,475],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":10,"invMass":2.2e-5,"pos":[150,530],"color":"457760","bCoef":0.5,"cMask":["all"],"cGroup":["wall","kick"],"damping":0.99,"speed":[0,0]},{"radius":0,"invMass":0,"pos":[-110,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-531},{"radius":0,"invMass":0,"pos":[-110,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-110,"y":-431},{"radius":0,"invMass":0,"pos":[-570,-531],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-531},{"radius":0,"invMass":0,"pos":[-570,-431],"color":"252525","bCoef":1,"cMask":["wall"],"trait":"ballArea","damping":0.96,"x":-570,"y":-431},{"radius":14.3,"invMass":4.0e-6,"pos":[677,-258],"color":"5689e5","bCoef":0.5,"cMask":["red","blue","ball"],"cGroup":["ball"],"damping":0.96},{"radius":6,"invMass":0,"pos":[723,-287],"color":"ffffff","bCoef":0.5,"cMask":["red","blue"],"cGroup":["ball"],"damping":0.99,"x":-80}],"joints":[{"d0":1,"d1":2,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":2,"d1":3,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":3,"d1":4,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":4,"d1":5,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":5,"d1":6,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":180},{"d0":6,"d1":7,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":24,"d1":25,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1,"y":-180},{"d0":26,"d1":27,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":27,"d1":28,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":28,"d1":29,"color":"000000","strenght":"rigid","radius":7,"invMass":1.0e-5,"bCoef":-0.5},{"d0":25,"d1":26,"strength":"rigid","color":"000000","length":null,"radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":25,"d1":30,"strength":"rigid","color":"000000","length":null,"radius":3},{"d0":5,"d1":31,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":-0.5},{"d0":32,"d1":33,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-80,0],"x":-80},{"d0":34,"d1":35,"_length":-1,"strength":11,"color":"transparent","length":-1,"pos":[-148,-222]},{"d0":36,"d1":37,"strength":11,"color":"transparent","length":null,"pos":[-148,222]},{"d0":42,"d1":43,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":44,"d1":45,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":46,"d1":47,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":48,"d1":49,"_length":-1,"strength":11,"color":"transparent","length":-1},{"d0":55,"d1":56,"_length":5,"strength":1.0e+38,"color":"252525","length":5},{"d0":55,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":66,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":58,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":67,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":60,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":60,"d1":61,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":61,"d1":62,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":62,"d1":65,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":65,"d1":69,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":69,"d1":70,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":70,"d1":71,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":71,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":72,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":73,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":64,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":3,"bCoef":3},{"d0":56,"d1":68,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":63,"d1":75,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":59,"d1":74,"strength":"rigid","color":"000000","length":null,"radius":0.05,"bCoef":3},{"d0":39,"d1":40,"strength":"rigid","color":"252525","length":null},{"d0":7,"d1":8,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":8,"d1":9,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":9,"d1":10,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":10,"d1":11,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":11,"d1":12,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":12,"d1":13,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":13,"d1":14,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":14,"d1":15,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":15,"d1":16,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":16,"d1":17,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":17,"d1":18,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":18,"d1":19,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":19,"d1":20,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":20,"d1":21,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":21,"d1":22,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":22,"d1":23,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":23,"d1":24,"color":"000000","strenght":"rigid","radius":4.5,"invMass":6.0e-6,"bCoef":0.1},{"d0":97,"d1":98,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":98,"d1":99,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":99,"d1":100,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":100,"d1":101,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":101,"d1":102,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":102,"d1":103,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":103,"d1":104,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":104,"d1":105,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":89,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":89,"d1":90,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":90,"d1":91,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":91,"d1":92,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":92,"d1":93,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":93,"d1":94,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":94,"d1":95,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":95,"d1":96,"strength":"rigid","color":"000000","length":null,"invMass":6.0e-6,"cMask":["ball"],"bCoef":1,"damping":1.002},{"d0":88,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":89,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":90,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":91,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":92,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":93,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":94,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":95,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":96,"d1":106,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":97,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":98,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":99,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":100,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":101,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":102,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":103,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":104,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":105,"d1":107,"strength":"rigid","color":"transparent","length":null,"bCoef":1,"damping":1.002},{"d0":88,"d1":96,"strength":0,"color":"590000","length":null},{"d0":97,"d1":105,"strength":0,"color":"002033","length":null},{"d0":108,"d1":109,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":110,"d1":111,"_length":-1,"strength":20,"color":"transparent","length":-1},{"d0":112,"d1":114,"strength":"rigid","color":"transparent","length":null},{"d0":113,"d1":115,"strength":"rigid","color":"transparent","length":null},{"d0":121,"d1":123,"strength":"rigid","color":"transparent","length":null},{"d0":120,"d1":122,"strength":"rigid","color":"transparent","length":null},{"d0":127,"d1":128,"strength":"rigid","color":"590000","length":null,"x":-110},{"d0":129,"d1":130,"strength":"rigid","color":"002033","length":null,"x":-570},{"d0":131,"d1":132,"_length":-1,"strength":190,"color":"transparent","length":-1}],"planes":[{"normal":[0,-1],"dist":-666,"cMask":["ball","red","blue"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-666,"canvas_rect":[-850,-668,850,680],"a":[-850,666],"b":[850,666]}}},{"normal":[0,1],"dist":-644,"bCoef":1,"_data":{"extremes":{"normal":[0,1],"dist":-644,"canvas_rect":[-850,-668,850,680],"a":[-850,-644],"b":[850,-644]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[1,0],"dist":-750,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-750,"canvas_rect":[-850,-668,850,680],"a":[-750,-668],"b":[-750,680]}}},{"normal":[0,-1],"dist":-680,"bCoef":0.0001,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,-1],"dist":-680,"canvas_rect":[-850,-668,850,680],"a":[-850,680],"b":[850,680]}}},{"normal":[0,1],"dist":-651,"bCoef":10000,"cMask":["wall"],"cGroup":["red"],"_data":{"extremes":{"normal":[0,1],"dist":-651,"canvas_rect":[-850,-668,850,680],"a":[-850,-651],"b":[850,-651]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0.01,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":700000,"invMass":4.0e-6},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":8.0e-6,"color":"46D0D9","damping":0.99,"cMask":["all"],"cGroup":["ball"]},"redSpawnPoints":[],"blueSpawnPoints":[],"cameraFollow":"player"}';
var v2Map = '{"name":"MORTAL KOMBAT 1V1 Navi [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":170,"bg":{"type":"none","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0,"color":"(bgcolor)"},"vertexes":[{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":-2,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea"},{"x":370,"y":-169.9999999999999,"trait":"ballArea"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"]},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"]},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea"},{"x":0,"y":-75,"cMask":["wall"],"curve":-180},{"x":0,"y":-75,"cMask":["wall"],"curve":180},{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF5000"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF5000"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":-372.8571428571429,"y":-64,"trait":"goalNet"},{"x":-392.8571428571429,"y":-44,"trait":"goalNet"},{"x":-392.8571428571429,"y":44,"trait":"goalNet"},{"x":-372.8571428571429,"y":64,"trait":"goalNet"},{"x":375.7142857142857,"y":-63.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":-43.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":44.714285714285715,"trait":"goalNet"},{"x":375.7142857142857,"y":64.71428571428572,"trait":"goalNet"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea","color":"FF5000"},{"x":370,"y":-169.9999999999999,"trait":"ballArea","color":"FF5000"},{"x":-369.9999999999999,"y":-69.28571428571426,"cMask":["wall"],"color":"FF5000"},{"x":-370,"y":68.57142857142864,"trait":"ballArea","color":"FF5000"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"],"color":"FF5000"},{"x":370.71428571428555,"y":68.57142857142864,"trait":"ballArea","color":"FF5000"},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"],"color":"FF5000"},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea","color":"FF5000"},{"x":370,"y":-68.57142857142853,"cMask":["wall"],"color":"FF5000"},{"x":-38.56108597285067,"y":63.99547511312217,"cMask":["wall"],"color":"FFAA50"},{"x":-26.03167420814479,"y":49.39819004524885,"cMask":["wall"],"color":"FFAA50"},{"x":-34.41176470588235,"y":42.35294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":-34.99999999999999,"y":35.29411764705882,"cMask":["wall"],"color":"FFAA50"},{"x":-47.941176470588225,"y":44.11764705882352,"cMask":["wall"],"color":"FFAA50"},{"x":-39.99999999999999,"y":23.235294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":-44.271493212669675,"y":16.14932126696833,"cMask":["wall"],"color":"FFAA50"},{"x":-55.73755656108597,"y":0.0497737556561102,"cMask":["wall"],"color":"FFAA50"},{"x":-63.93212669683257,"y":1.5837104072398194,"cMask":["wall"],"color":"FFAA50"},{"x":-55.294117647058826,"y":-22.058823529411782,"cMask":["wall"],"color":"FFAA50"},{"x":-55.366515837104075,"y":-33.31674208144796,"cMask":["wall"],"color":"FFAA50"},{"x":-53.52941176470588,"y":-37.78280542986426,"cMask":["wall"],"color":"FFAA50"},{"x":-55.076923076923066,"y":-47.28959276018099,"cMask":["wall"],"color":"FFAA50"},{"x":-47.69295410471881,"y":-41.051497522085754,"cMask":["wall"],"color":"FFAA50"},{"x":-27.481146304675715,"y":-61.57875457875458,"cMask":["wall"],"color":"FFAA50"},{"x":-13.39862098685628,"y":-64.97478991596638,"cMask":["wall"],"color":"FFAA50"},{"x":-13.01917690152984,"y":-72.79271708683473,"cMask":["wall"],"color":"FFAA50"},{"x":6.470588235294117,"y":-61.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":17.352941176470587,"y":-57.35294117647058,"cMask":["wall"],"color":"FFAA50"},{"x":18.235294117647058,"y":-65,"cMask":["wall"],"color":"FFAA50"},{"x":25.294117647058822,"y":-52.94117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":41.17647058823529,"y":-42.94117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":43.37535014005602,"y":-36.4873949579832,"cMask":["wall"],"color":"FFAA50"},{"x":34.11764705882353,"y":-34.11764705882353,"cMask":["wall"],"color":"FFAA50"},{"x":56.764705882352935,"y":-20.588235294117645,"cMask":["wall"],"color":"FFAA50"},{"x":69.99999999999999,"y":-19.41176470588235,"cMask":["wall"],"color":"FFAA50"},{"x":68.23529411764706,"y":-10.588235294117647,"cMask":["wall"],"color":"FFAA50"},{"x":67.67226890756301,"y":-1.6078431372549016,"cMask":["wall"],"color":"FFAA50"},{"x":56.764705882352935,"y":-5.88235294117647,"cMask":["wall"],"color":"FFAA50"},{"x":61.764705882352935,"y":10.294117647058822,"cMask":["wall"],"color":"FFAA50"},{"x":71.40056022408963,"y":8.0812324929972,"cMask":["wall"],"color":"FFAA50"},{"x":65.30252100840335,"y":20.991596638655455,"cMask":["wall"],"color":"FFAA50"},{"x":42.94117647058823,"y":-5.294117647058823,"cMask":["wall"],"color":"FFAA50"},{"x":33.66968325791856,"y":-3.642533936651579,"cMask":["wall"],"color":"FFAA50"},{"x":1.723981900452487,"y":-25.746606334841623,"cMask":["wall"],"curve":0,"color":"FFAA50"},{"x":48.03145873734108,"y":-18.12303382891618,"cMask":["wall"],"color":"FFAA50"},{"x":39.03232062055591,"y":-15.20060331825038,"cMask":["wall"],"curve":-80,"color":"FFAA50"},{"x":43.796164619694025,"y":-19.829347123464775,"cMask":["wall"],"curve":-80,"color":"FFAA50"},{"x":24.031784571239378,"y":-32.667034543648604,"cMask":["wall"],"color":"FFAA50"},{"x":0.5882352941176463,"y":-17.941176470588236,"cMask":["wall"],"color":"FFAA50"},{"x":-8.348615498449012,"y":-15.156464327385526,"cMask":["wall"],"color":"FFAA50"},{"x":-21.010074276444975,"y":-35.85950083952305,"cMask":["wall"],"color":"FFAA50"},{"x":-26.147776183644186,"y":-9.404591104734578,"cMask":["wall"],"curve":100,"color":"FFAA50"},{"x":9.999999999999998,"y":12.941176470588234,"cMask":["wall"],"color":"FFAA50"},{"x":45.724533715925396,"y":45.566714490674315,"cMask":["wall"],"color":"FFAA50"},{"x":36.642754662840744,"y":63.27116212338595,"cMask":["wall"],"color":"FFAA50"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":-22.63348416289592,"y":-18.092373910164437,"cMask":["wall"],"curve":100,"color":"FFAA50"},{"x":4.666666666666669,"y":-75.33333333333333,"cMask":["wall"],"color":"FFAA50"},{"x":-54.76923076923078,"y":-7.692307692307693,"cMask":["wall"],"color":"FFAA50"},{"x":33.84615384615384,"y":-11.999999999999998,"cMask":["wall"],"curve":0,"color":"FFAA50"},{"x":-1.1428571428571428,"y":170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA50"},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":-180},{"x":-1.1428571428571428,"y":-170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA50"},{"x":0,"y":-75.48780487804879,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":180},{"x":0,"y":-75.5,"cMask":["wall"],"curve":180},{"x":-377.0967741935484,"y":67.92626728110605,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":-377.74193548387086,"y":169.28571428571428,"cMask":["ball"],"color":"FF5000","vis":false},{"x":-376.45161290322585,"y":-170.13824884792612,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":-376.45161290322574,"y":-69.42396313364048,"cMask":["ball"],"color":"FF5000","vis":false},{"x":377.09677419354796,"y":-170.1382488479261,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":376.45161290322545,"y":-68.77880184331786,"cMask":["ball"],"color":"FF5000","vis":false},{"x":377.7419354838706,"y":69.21658986175122,"cMask":["ball"],"trait":"ballArea","color":"FF5000","vis":false},{"x":377.7419354838707,"y":169.93087557603684,"cMask":["ball"],"color":"FF5000","vis":false},{"x":13.95713579370991,"y":-44.50263380383389,"cMask":["wall"],"color":"FF5000"},{"x":26.154085115975512,"y":-38.43848991729908,"cMask":["wall"],"color":"FF5000"},{"x":16.492060376938966,"y":-49.255617397388356,"cMask":["wall"],"color":"FF5000"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":13.146067415730343,"y":-47.75280898876405,"cMask":["wall"]},{"x":20.000000000000014,"y":-40.78651685393259,"cMask":["wall"]},{"x":14.606741573033716,"y":-49.77528089887642,"cMask":["wall"]},{"x":20.337078651685417,"y":-40.89887640449439,"cMask":["wall"]},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA50"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA50"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.63157829422025,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.6441451618553,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":-3.495798319327733,"y":-168.6926308985133,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-2.3529411764705896,"y":-77.03757863370492,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.69650937297996,"y":-168.3080155138979,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":2.8393665158371033,"y":-76.65296324908954,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.7417582417582422,"y":168.10439560439562,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":1.1703296703296708,"y":75.96153846153845,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-3.1577392456789446,"y":168.34424871610804,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-3.8296703296703303,"y":75.76923076923076,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-373.2835820895522,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":374.4776119402985,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-369.4029850746269,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":370.5970149253731,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-367.910447761194,"y":68.57142857142861,"cMask":["wall"],"trait":"ballArea","color":"FF9E00","_data":{"mirror":[]}},{"x":-367.9104477611939,"y":169.28571428571425,"cMask":["wall"],"color":"FF9E00"},{"x":-372.98507462686564,"y":68.57142857142864,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149235,"y":172.86780383795306,"cMask":["wall"],"color":"FF9E00"},{"x":-367.01492537313436,"y":-169.10447761194018,"trait":"ballArea","color":"FF9E00"},{"x":-367.01492537313425,"y":-68.39019189765456,"cMask":["wall"],"color":"FF9E00","_data":{"mirror":[]}},{"x":-372.3880597014926,"y":-173.28358208955214,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149247,"y":-68.9872068230277,"cMask":["wall"],"color":"FF9E00"},{"x":-370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":-373.5820895522388,"y":-172.686567164179,"trait":"ballArea","color":"FF9E00"},{"x":374.77611940298505,"y":-171.7910447761193,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731342,"y":-168.68869936034102,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731343,"y":-67.97441364605538,"cMask":["wall"],"color":"FF9E00"},{"x":372.68656716417894,"y":-172.5692963752664,"trait":"ballArea","color":"FF9E00"},{"x":372.68656716417905,"y":-68.27292110874194,"cMask":["wall"],"color":"FF9E00"},{"x":368.32622601279303,"y":68.86993603411523,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":368.32622601279314,"y":169.58422174840086,"cMask":["wall"],"color":"FF9E00"},{"x":373.40085287846466,"y":67.97441364605555,"trait":"ballArea","color":"FF9E00"},{"x":373.1023454157782,"y":172.27078891258,"cMask":["wall"],"color":"FF9E00"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":19,"v1":20,"trait":"ballArea"},{"v0":21,"v1":22,"trait":"ballArea"},{"v0":23,"v1":24,"trait":"ballArea"},{"v0":25,"v1":26,"trait":"ballArea"},{"v0":27,"v1":28,"curve":-90,"trait":"goalNet"},{"v0":28,"v1":29,"trait":"goalNet"},{"v0":29,"v1":30,"curve":-90,"trait":"goalNet"},{"v0":31,"v1":32,"curve":90,"trait":"goalNet"},{"v0":32,"v1":33,"trait":"goalNet"},{"v0":33,"v1":34,"curve":90,"trait":"goalNet"},{"v0":19,"v1":23,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":35,"v1":36,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":35,"v1":37,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":38,"v1":39,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":40,"v1":41,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":42,"v1":43,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":44,"v1":45,"curve":-155.44777141900283,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":45,"v1":46,"curve":50.03378695619983,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":46,"v1":47,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":47,"v1":48,"curve":94.51217054681895,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":48,"v1":49,"curve":-75.41720962197125,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":49,"v1":50,"curve":-59.275498614371116,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":50,"v1":51,"curve":65.58698629288317,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":51,"v1":52,"curve":63.008533438408115,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":54,"v1":55,"curve":23.495200109276738,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":55,"v1":56,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":56,"v1":57,"curve":-108.0128766703783,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":57,"v1":58,"curve":-39.25999444475261,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":58,"v1":59,"curve":44.544384918009584,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":59,"v1":60,"curve":107.24642943099013,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":60,"v1":61,"curve":-71.24742438186682,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":62,"v1":63,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":63,"v1":64,"curve":-48.07111394448096,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":64,"v1":65,"curve":-29.88850295569818,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":65,"v1":66,"curve":93.37473663338619,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":66,"v1":67,"curve":61.8434037445923,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":67,"v1":68,"curve":-9.335597271376578,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":68,"v1":69,"curve":-57.152577289116614,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":69,"v1":70,"curve":101.03595621152891,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":70,"v1":71,"curve":82.49348207936853,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":71,"v1":72,"curve":-73.3486993391458,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":73,"curve":-43.26319753693733,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":73,"v1":74,"curve":-133.251835589027,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":73,"v1":75,"curve":-84.43637364222394,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":76,"curve":52.386560062169245,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":76,"v1":77,"curve":-47.247391337930516,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":72,"v1":79,"curve":-35.28901235703227,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":79,"v1":80,"curve":59.58103275424326,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":80,"v1":81,"curve":-135.14395296629627,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":81,"v1":82,"curve":27.120488024514685,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":82,"v1":78,"curve":-59.489762593884514,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":77,"v1":83,"curve":-44.59362506110965,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":83,"v1":84,"curve":51.130481096194515,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":84,"v1":85,"curve":96.83054830735131,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":86,"v1":87,"curve":-62.892308337442714,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":87,"v1":88,"curve":90.99230516982212,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":88,"v1":89,"curve":34.470380401245706,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":86,"v1":93,"curve":56.11663910286783,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":93,"v1":85,"curve":64.59984442416254,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":62,"v1":94,"curve":77.78830864056546,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":61,"v1":94,"curve":89.08744104758328,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":52,"v1":95,"curve":-66.7724618489055,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":95,"v1":53,"curve":-11.092021067743413,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":53,"v1":54,"curve":2.296622806461533,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":78,"v1":96,"curve":58.17566246787586,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":96,"v1":72,"curve":-8.59760042468219,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":97,"v1":98,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":101,"v1":102,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":102,"v1":98,"curve":-180,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":104,"v1":103,"curve":180,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":105,"v1":106,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":107,"v1":108,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":109,"v1":110,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":111,"v1":112,"vis":false,"color":"FF5000","cMask":["ball"]},{"v0":113,"v1":114,"curve":-34.80540826271246,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":114,"v1":115,"curve":16.831513080620265,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":115,"v1":113,"curve":-183.27866143936012,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":119,"v1":120,"curve":0,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":121,"v1":122,"curve":0,"vis":true,"color":"FF5000","cMask":["wall"]},{"v0":123,"v1":124,"curve":-34.80540826271246,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":124,"v1":125,"curve":16.831513080620265,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":125,"v1":123,"curve":-183.27866143936012,"vis":true,"color":"FFAA50","cMask":["wall"]},{"v0":127,"v1":126,"curve":-180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":130,"v1":131,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":132,"v1":133,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":134,"v1":135,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":136,"v1":137,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":138,"v1":139,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":140,"v1":141,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":143,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":144,"v1":145,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":146,"v1":147,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":148,"v1":149,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":150,"v1":151,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":152,"v1":153,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":154,"v1":155,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":156,"v1":157,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":158,"v1":159,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":160,"v1":161,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":147,"color":"FFFFFF","cMask":["wall"],"_data":{"mirror":[],"arc":{"a":[-367.910447761194,68.57142857142861],"b":[-367.01492537313425,-68.39019189765456],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":155,"v1":158,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red","_data":{"mirror":[]}},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":5,"pos":[-368.06451612903226,64.64516129032258],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[-368.06451612903226,-63.35483870967742],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,64],"color":"FF5000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,-64],"color":"FF5000","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,-170],"b":[889,-170]}}},{"normal":[0,-1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,170],"b":[889,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,-200],"b":[889,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,200],"b":[889,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[-420,-420],"b":[-420,420]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[420,-420],"b":[420,420]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","canBeStored":true,"kickOffReset":"partial","playerPhysics":{"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.1,"gravity":[0,0],"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"cMask":["all"],"damping":0.99,"invMass":1.5,"gravity":[0,0],"color":"FFFFFF","cGroup":["ball"]}}';
var v3Map = '{"name":"3v3 Futsal | Champions League by Namajunas VOL 3 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":648,"height":270,"bg":{"type":"","color":"(bgcolor)"},"vertexes":[{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":-550,"y":-80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":550,"y":-80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":-550,"y":80,"cMask":["ball"],"color":"D82B2B","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED","_data":{"mirror":[]}},{"x":-550,"y":-80,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":-80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":550,"y":-80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":550,"y":80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":-325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":-325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":-325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":-400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":79,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"2674C5"},{"x":-592,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":556,"y":-82,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":-592,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":-36.33260832977,"y":-69.619595273771,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-73.821461001685,"y":-27.330632717964,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.014361966537,"y":-54.244550695595,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.567788655896,"y":-39.579912744961,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-27.401905204993,"y":-55.974842894447,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.297436994888,"y":-45.699472272904,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-51.291668342567,"y":-25.483550876345,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-63.952037024452,"y":-3.2227163265885,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-78.895794055559,"y":0.32417480054631,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.967322788025,"y":-4.65870951332,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-29.751401391465,"y":-2.6644781656408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.8263783052,"y":12.497432119268,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-42.579241521635,"y":29.856547074011,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.106141245534,"y":17.104852702161,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.894087183041,"y":32.276923958182,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.356170964318,"y":10.650350277649,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-26.356801780968,"y":44.267529896973,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-36.378517274838,"y":52.147864537104,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-58.005090955371,"y":51.60994831838,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-32.527166164471,"y":65.4323331171,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-14.488127495522,"y":76.174616209625,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-16.928826321916,"y":61.433832500673,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":6.9659557761919,"y":58.957631800408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-13.341291310333,"y":51.229465626872,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-2.7461577238685,"y":30.876555695364,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.435218979552,"y":63.4687077328,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":22.589636521506,"y":70.400160549363,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":5.5248205788828,"y":79.275039858045,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":41.344223828575,"y":42.968648295232,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":38.999869652681,"y":61.976890729974,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.008861779209,"y":56.522074984591,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.919785164602,"y":27.390630394901,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":60.068328222308,"y":34.398228969783,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.01646035409,"y":46.373531926884,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":68.928027599344,"y":29.734984570796,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":78.31548222399,"y":9.7321974675032,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":69.65875616911,"y":13.28924956575,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":64.462737561977,"y":-8.245998424817,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.780234233423,"y":14.928216074637,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":35.503783381106,"y":15.597978817731,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":62.732445363125,"y":-26.858455186361,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":77.00129764056,"y":-17.379674871749,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.305863455719,"y":-39.331030477738,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":53.877887996667,"y":-56.497333081438,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.590107328654,"y":-48.708324131272,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.278154602466,"y":-57.192559777334,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":43.79018771559,"y":-38.909903901781,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":32.154846615592,"y":-28.467061831954,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":51.772009016798,"y":-29.441284558281,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":8.5138426951989,"y":-58.532208313565,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.5832688652041,"y":-42.456918078959,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.656415856378,"y":-57.659472248316,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.240308240956,"y":-66.158887826024,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-23.849872067281,"y":-75.333208157404,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0.13623572079257,"y":-72.075474031812,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":27.699717549337,"y":-72.735075803794,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":13.557692835738,"y":-67.325922903394,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-5.8464583222451,"y":-11.427709842133,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.2586099897905,"y":5.6269451293777,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.822135576265,"y":10.680956241028,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":20.849306401585,"y":-4.242478847855,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.015384298223,"y":-19.196396850074,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0,"y":239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false},{"x":0,"y":-270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false}],"segments":[{"v0":6,"v1":7,"color":"D5E0ED","cMask":["ball"],"bias":30,"_data":{"mirror":[],"arc":{"a":[-550,80],"b":[-550,240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":8,"v1":9,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":10,"v1":11,"color":"D5E0ED","cMask":["ball"]},{"v0":12,"v1":13,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":14,"v1":15,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":16,"v1":17,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":18,"v1":19,"color":"D5E0ED","cMask":["ball"]},{"v0":20,"v1":21,"color":"666666","bCoef":0.1,"cMask":[],"_data":{"mirror":[],"arc":{"a":[-550,-80],"b":[-550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":22,"v1":23,"color":"666666","bCoef":0.1,"cMask":["c0"],"strength":0.1,"_length":9,"_data":{"mirror":[],"arc":{"a":[550,-80],"b":[550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":24,"v1":25,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325,"_data":{"mirror":[],"arc":{"a":[-325,-238.5],"b":[-325,238.5],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":26,"v1":27,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":28,"v1":29,"curve":-120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":30,"v1":31,"curve":120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325},{"v0":32,"v1":33,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":33,"v1":32,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":32,"v1":33,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":34,"v1":35,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":35,"v1":34,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":34,"v1":35,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"2674C5","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":592,"radius":3.5},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","y":79,"strength":0.1,"_length":9},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","y":-81,"x":549,"strength":0.1,"_length":9},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9},{"v0":46,"v1":47,"curve":0,"vis":false,"color":"D82B2B","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":-592,"radius":3.5},{"v0":48,"v1":49,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":50,"v1":51,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":50,"v1":52,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":51,"v1":53,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":52,"v1":54,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":55,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":55,"v1":56,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":53,"curve":-25.58879878153,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":57,"curve":-22.118592734133,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":57,"v1":58,"curve":-29.626928237609,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":59,"curve":-8.7974107099911,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":59,"v1":60,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":61,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":61,"v1":62,"curve":-23.690782919169,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":63,"curve":6.3596602397285,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":63,"v1":64,"curve":-9.7585475660135,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":64,"v1":65,"curve":26.464535213028,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":58,"v1":65,"curve":-18.492225491127,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":66,"curve":-21.380476552998,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":67,"curve":-7.5955767419349,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":67,"v1":68,"curve":32.559346404261,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":68,"v1":69,"curve":-24.830195108546,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":69,"v1":70,"curve":-24.732085694618,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":70,"v1":71,"curve":27.41392200816,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":71,"v1":72,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":73,"curve":3.8183048659928,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":73,"v1":74,"curve":21.545295296441,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":66,"curve":4.0746613936398,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":75,"curve":-22.61986494804,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":76,"curve":-38.02475667701,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":76,"v1":77,"curve":17.640759104042,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":75,"v1":78,"curve":-19.050603759689,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":79,"curve":25.573402898373,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":79,"v1":80,"curve":-26.199686164533,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":81,"curve":-4.7900110337447,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":82,"curve":-12.808705452768,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":82,"v1":83,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":83,"v1":84,"curve":-19.564814063615,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":84,"v1":85,"curve":-23.127465433213,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":85,"v1":86,"curve":47.924977949156,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":86,"v1":87,"curve":-25.654246845845,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":88,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":88,"v1":89,"curve":20.078509574305,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":81,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":90,"curve":-15.453235238194,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":90,"v1":91,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":91,"v1":92,"curve":-25.787488089764,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":92,"v1":93,"curve":-29.104815395383,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":93,"v1":94,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":94,"v1":95,"curve":-31.369727296019,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":96,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":96,"v1":97,"curve":-5.4526219878125,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":98,"curve":-10.38885781547,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":98,"v1":87,"curve":13.958142285095,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":99,"curve":-3.3943123792006,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":99,"v1":100,"curve":-24.781713321362,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":101,"curve":23.251797286617,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":101,"v1":54,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":102,"curve":34.432147175581,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":102,"v1":103,"curve":-25.63473646559,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":103,"v1":104,"curve":11.055080303312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":104,"v1":105,"curve":33.290076429352,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":105,"v1":106,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":106,"v1":95,"curve":13.163889310356,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":107,"curve":-5.9896134344567,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":107,"v1":60,"curve":-10.52479079919,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":108,"curve":-12.68038349182,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":108,"v1":74,"curve":-20.383003700055,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":109,"curve":19.642197209326,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":109,"v1":89,"curve":-2.7409020355992,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":110,"curve":0.15913530748199,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":110,"v1":97,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":111,"curve":-8.8161746788795,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":111,"v1":100,"curve":19.352654077974,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":80,"v1":77,"curve":35.810257640434,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":112,"v1":113,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":-180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":114,"v1":115,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":112,"v1":116,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":117,"v1":115,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,-240],"b":[832,-240]}}},{"normal":[0,-1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,240],"b":[832,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,-270],"b":[832,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,270],"b":[832,270]}}},{"normal":[1,0],"dist":-659.1467764060357,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-659.1467764060357,"canvas_rect":[-832,-316,832,316],"a":[-659.1467764060357,-316],"b":[-659.1467764060357,316]}}},{"normal":[-1,0],"dist":-661.1467764060358,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-661.1467764060358,"canvas_rect":[-832,-316,832,316],"a":[661.1467764060358,-316],"b":[661.1467764060358,316]}}},{"normal":[1,0],"dist":-657.8600823045267,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-657.8600823045267,"canvas_rect":[-832,-316,832,316],"a":[-657.8600823045267,-316],"b":[-657.8600823045267,316]}}},{"normal":[-1,0],"dist":-661.0041152263375,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-661.0041152263375,"canvas_rect":[-832,-316,832,316],"a":[661.0041152263375,-316],"b":[661.0041152263375,316]}}}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red","color":"D82B2B","radius":3.5},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue","color":"2674C5","cMask":["ball","red","blue"],"strength":0.1,"_length":9}],"discs":[{"radius":6.25,"invMass":0,"pos":[-550,80],"color":"D82B2B","_length":9,"_data":{"mirror":[]},"_selected":true},{"radius":6,"invMass":0,"pos":[-550,-80],"color":"D82B2B","_length":9},{"radius":6,"invMass":0,"pos":[550,80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,-85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,-80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,-80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":6,"invMass":0,"pos":[550,-80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,-80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,0],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,-80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,0],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,-80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,-80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,-80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,-80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9,"_data":{"mirror":[]}},{"radius":3.5,"invMass":0,"pos":[606,-90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,-95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[606,90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,-95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,-90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,-85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickStrength":4.545,"kickback":0},"ballPhysics":{"radius":5.8,"bCoef":0.412,"invMass":1.5,"color":"ffbf00","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":350,"joints":[{"d0":3,"d1":4,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":4,"d1":5,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":5,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":26,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":25,"d1":26,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":24,"d1":25,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":23,"d1":24,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":22,"d1":23,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":21,"d1":22,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":20,"d1":21,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":19,"d1":20,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":18,"d1":19,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":17,"d1":18,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":16,"d1":17,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":15,"d1":16,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":14,"d1":15,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":13,"d1":14,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":12,"d1":13,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":12,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":10,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":10,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":8,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":8,"d1":9,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":1,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9},{"d0":47,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":46,"d1":47,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":44,"d1":46,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":43,"d1":44,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":42,"d1":43,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":41,"d1":42,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":40,"d1":41,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":39,"d1":40,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":38,"d1":39,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":37,"d1":38,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":36,"d1":37,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":35,"d1":36,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":34,"d1":35,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":33,"d1":34,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":32,"d1":33,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":31,"d1":32,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":30,"d1":31,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":30,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":45,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":45,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":2,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9}],"traits":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v4Map = '{"name":"UZY Futsal Power 4v4 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[{"x":-700,"y":85,"trait":"v"},{"x":-700,"y":-85,"trait":"v"},{"x":-700,"y":-285,"trait":"v"},{"x":-700,"y":285,"trait":"v"},{"x":0,"y":-85,"trait":"ko"},{"x":0,"y":-320,"trait":"ko"},{"x":0,"y":85,"trait":"ko"},{"x":0,"y":-380,"trait":"v"},{"x":-700,"y":-320,"trait":"v"},{"x":-700,"y":320,"trait":"v"},{"x":700,"y":-320,"trait":"v"},{"x":700,"y":-85,"trait":"v"},{"x":700,"y":85,"trait":"v"},{"x":700,"y":-285,"trait":"v"},{"x":700,"y":285,"trait":"v"},{"x":0,"y":320,"trait":"ko"},{"x":0,"y":380,"trait":"v"},{"x":700,"y":320,"trait":"v"}],"segments":[{"v0":1,"v1":0,"trait":"nc"},{"v0":3,"v1":2,"trait":"nc","curve":-180},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"E56E56","curve":180},{"v0":4,"v1":7,"trait":"ko","vis":false},{"v0":8,"v1":1,"trait":"bb"},{"v0":0,"v1":9,"trait":"bb"},{"v0":10,"v1":8,"trait":"bb"},{"v0":12,"v1":11,"trait":"nc"},{"v0":13,"v1":14,"trait":"nc","curve":-180},{"v0":6,"v1":15,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"5689E5","curve":180},{"v0":6,"v1":16,"trait":"ko","vis":false},{"v0":17,"v1":12,"trait":"bb"},{"v0":11,"v1":10,"trait":"bb"},{"v0":9,"v1":17,"trait":"bb"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score","c0"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-700,-85],"color":"E56E56"},{"trait":"gp","pos":[-700,85],"color":"E56E56"},{"trait":"gp","pos":[700,85],"color":"5689E5"},{"trait":"gp","pos":[700,-85],"color":"5689E5"},{"trait":"nd1","pos":[-712.53,-81.55]},{"trait":"nd1","pos":[-724.1,-78.37]},{"trait":"nd1","pos":[-735.67,-75.18]},{"trait":"nd1","pos":[-747.24,-72],"invMass":0},{"trait":"nd1","pos":[-747.24,-60]},{"trait":"nd1","pos":[-747.24,-48]},{"trait":"nd1","pos":[-747.24,-36]},{"trait":"nd1","pos":[-747.24,-24]},{"trait":"nd1","pos":[-747.24,-12]},{"trait":"nd1","pos":[-747.24,0]},{"trait":"nd1","pos":[-747.24,12]},{"trait":"nd1","pos":[-747.24,24]},{"trait":"nd1","pos":[-747.24,36]},{"trait":"nd1","pos":[-747.24,48]},{"trait":"nd1","pos":[-747.24,60]},{"trait":"nd1","pos":[-747.24,72],"invMass":0},{"trait":"nd1","pos":[-735.67,75.18]},{"trait":"nd1","pos":[-724.1,78.37]},{"trait":"nd1","pos":[-712.53,81.55]},{"trait":"nd2","pos":[712.53,-81.55]},{"trait":"nd2","pos":[724.1,-78.37]},{"trait":"nd2","pos":[735.67,-75.18]},{"trait":"nd2","pos":[747.24,-72],"invMass":0},{"trait":"nd2","pos":[747.24,-60]},{"trait":"nd2","pos":[747.24,-48]},{"trait":"nd2","pos":[747.24,-36]},{"trait":"nd2","pos":[747.24,-24]},{"trait":"nd2","pos":[747.24,-12]},{"trait":"nd2","pos":[747.24,0]},{"trait":"nd2","pos":[747.24,12]},{"trait":"nd2","pos":[747.24,24]},{"trait":"nd2","pos":[747.24,36]},{"trait":"nd2","pos":[747.24,48]},{"trait":"nd2","pos":[747.24,60]},{"trait":"nd2","pos":[747.24,72],"invMass":0},{"trait":"nd2","pos":[735.67,75.18]},{"trait":"nd2","pos":[724.1,78.37]},{"trait":"nd2","pos":[712.53,81.55]}],"goals":[{"p0":[-706.25,-85],"p1":[-706.25,85],"team":"red"},{"p0":[706.25,85],"p1":[706.25,-85],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-380,"trait":"pb"},{"normal":[0,-1],"dist":-380,"trait":"pb"},{"normal":[1,0],"dist":-800,"trait":"pb"},{"normal":[-1,0],"dist":-800,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":99,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cGroup":["c1","ball"],"cMask":["c0","red","blue"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cGroup":["c1","ball"],"cMask":["c0","red","blue"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":800,"height":380,"playerPhysics":{"bCoef":0,"acceleration":0.125,"kickingAcceleration":0.09,"kickStrength":6.4},"redSpawnPoints":[[-150,-100],[-150,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[150,100],[150,-100],[300,0],[500,0],[700,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":2,"d1":23,"trait":"nj"},{"d0":4,"d1":24,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":30,"d1":29,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":3,"d1":42,"trait":"nj"}],"canBeStored":true}';
var v6Map = '{"name":"UZY Futsal 5v5 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","bg":{"type":"", "color: "(bgcolor)"},"ballPhysics":"disc0","vertexes":[{"x":-800,"y":95,"trait":"v"},{"x":-800,"y":-95,"trait":"v"},{"x":-440,"y":-370,"trait":"v"},{"x":-440,"y":370,"trait":"v"},{"x":0,"y":-95,"trait":"ko"},{"x":0,"y":-370,"trait":"ko"},{"x":0,"y":95,"trait":"ko"},{"x":0,"y":-430,"trait":"v"},{"x":800,"y":-95,"trait":"v"},{"x":800,"y":95,"trait":"v"},{"x":440,"y":-370,"trait":"v"},{"x":440,"y":370,"trait":"v"},{"x":0,"y":370,"trait":"ko"},{"x":0,"y":430,"trait":"v"},{"x":-800,"y":-370,"trait":"v"},{"x":-800,"y":370,"trait":"v"},{"x":800,"y":-370,"trait":"v"},{"x":800,"y":370,"trait":"v"}],"segments":[{"v0":1,"v1":0,"trait":"nc"},{"v0":2,"v1":3,"trait":"nc"},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"E56E56","curve":180},{"v0":4,"v1":7,"trait":"ko","vis":false},{"v0":9,"v1":8,"trait":"nc"},{"v0":11,"v1":10,"trait":"nc"},{"v0":6,"v1":12,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"5689E5","curve":180},{"v0":6,"v1":13,"trait":"ko","vis":false},{"v0":14,"v1":1,"trait":"bb"},{"v0":0,"v1":15,"trait":"bb"},{"v0":16,"v1":14,"trait":"bb"},{"v0":17,"v1":9,"trait":"bb"},{"v0":8,"v1":16,"trait":"bb"},{"v0":15,"v1":17,"trait":"bb"}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-800,-95],"color":"E56E56"},{"trait":"gp","pos":[-800,95],"color":"E56E56"},{"trait":"gp","pos":[800,95],"color":"5689E5"},{"trait":"gp","pos":[800,-95],"color":"5689E5"},{"trait":"nd1","pos":[-810.51,-91.76]},{"trait":"nd1","pos":[-820.07,-88.82]},{"trait":"nd1","pos":[-829.63,-85.88]},{"trait":"nd1","pos":[-839.19,-82.94]},{"trait":"nd1","pos":[-848.74,-80],"invMass":0},{"trait":"nd1","pos":[-848.74,-70]},{"trait":"nd1","pos":[-848.74,-60]},{"trait":"nd1","pos":[-848.74,-50]},{"trait":"nd1","pos":[-848.74,-40]},{"trait":"nd1","pos":[-848.74,-30]},{"trait":"nd1","pos":[-848.74,-20]},{"trait":"nd1","pos":[-848.74,-10]},{"trait":"nd1","pos":[-848.74,0]},{"trait":"nd1","pos":[-848.74,10]},{"trait":"nd1","pos":[-848.74,20]},{"trait":"nd1","pos":[-848.74,30]},{"trait":"nd1","pos":[-848.74,40]},{"trait":"nd1","pos":[-848.74,50]},{"trait":"nd1","pos":[-848.74,60]},{"trait":"nd1","pos":[-848.74,70]},{"trait":"nd1","pos":[-848.74,80],"invMass":0},{"trait":"nd1","pos":[-839.19,82.94]},{"trait":"nd1","pos":[-829.63,85.88]},{"trait":"nd1","pos":[-820.07,88.82]},{"trait":"nd1","pos":[-810.51,91.76]},{"trait":"nd2","pos":[810.51,-91.76]},{"trait":"nd2","pos":[820.07,-88.82]},{"trait":"nd2","pos":[829.63,-85.88]},{"trait":"nd2","pos":[839.19,-82.94]},{"trait":"nd2","pos":[848.74,-80],"invMass":0},{"trait":"nd2","pos":[848.74,-70]},{"trait":"nd2","pos":[848.74,-60]},{"trait":"nd2","pos":[848.74,-50]},{"trait":"nd2","pos":[848.74,-40]},{"trait":"nd2","pos":[848.74,-30]},{"trait":"nd2","pos":[848.74,-20]},{"trait":"nd2","pos":[848.74,-10]},{"trait":"nd2","pos":[848.74,0]},{"trait":"nd2","pos":[848.74,10]},{"trait":"nd2","pos":[848.74,20]},{"trait":"nd2","pos":[848.74,30]},{"trait":"nd2","pos":[848.74,40]},{"trait":"nd2","pos":[848.74,50]},{"trait":"nd2","pos":[848.74,60]},{"trait":"nd2","pos":[848.74,70]},{"trait":"nd2","pos":[848.74,80],"invMass":0},{"trait":"nd2","pos":[839.19,82.94]},{"trait":"nd2","pos":[829.63,85.88]},{"trait":"nd2","pos":[820.07,88.82]},{"trait":"nd2","pos":[810.51,91.76]}],"goals":[{"p0":[-806.25,-95],"p1":[-806.25,95],"team":"red"},{"p0":[806.25,95],"p1":[806.25,-95],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-430,"trait":"pb"},{"normal":[0,-1],"dist":-430,"trait":"pb"},{"normal":[1,0],"dist":-900,"trait":"pb"},{"normal":[-1,0],"dist":-900,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":3.5,"damping":0.99,"cMask":["ball"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":3.5,"damping":0.99,"cMask":["ball"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"transparent"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":900,"height":430,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-150,-100],[-150,100],[-300,0],[-500,0],[-800,0]],"blueSpawnPoints":[[150,100],[150,-100],[300,0],[500,0],[800,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":24,"d1":23,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":2,"d1":29,"trait":"nj"},{"d0":4,"d1":30,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":43,"d1":42,"trait":"nj"},{"d0":44,"d1":43,"trait":"nj"},{"d0":45,"d1":44,"trait":"nj"},{"d0":46,"d1":45,"trait":"nj"},{"d0":47,"d1":46,"trait":"nj"},{"d0":48,"d1":47,"trait":"nj"},{"d0":49,"d1":48,"trait":"nj"},{"d0":50,"d1":49,"trait":"nj"},{"d0":51,"d1":50,"trait":"nj"},{"d0":52,"d1":51,"trait":"nj"},{"d0":53,"d1":52,"trait":"nj"},{"d0":54,"d1":53,"trait":"nj"},{"d0":3,"d1":54,"trait":"nj"}],"canBeStored":true}';
var v7Map = '{"name":"sindicato hax 7v6 normal","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[/* 0 */{"x":-1175,"y":110,"trait":"bb","color":"FFFFFF"},/* 1 */{"x":-1175,"y":-110,"trait":"bb","color":"FFFFFF","curve":0},/* 2 */{"x":-1175,"y":-385,"trait":"v","color":"FFFFFF"},/* 3 */{"x":-1175,"y":385,"trait":"v","color":"FFFFFF"},/* 4 */{"x":0,"y":-185,"trait":"ko","color":"11b7ff"},/* 5 */{"x":0,"y":-600,"trait":"ko"},/* 6 */{"x":0,"y":185,"trait":"ko","color":"11b7ff"},/* 7 */{"x":0,"y":-635,"trait":"v"},/* 8 */{"x":-1175,"y":-600,"trait":"bb","color":"FFFFFF","curve":0},/* 9 */{"x":-1175,"y":600,"trait":"bb","color":"FFFFFF"},/* 10 */{"x":1175,"y":-600,"trait":"bb","color":"FFFFFF"},/* 11 */{"x":1175,"y":-110,"trait":"bb","color":"FFFFFF"},/* 12 */{"x":1175,"y":110,"trait":"bb","color":"FFFFFF"},/* 13 */{"x":1175,"y":-385,"trait":"v","color":"FFFFFF"},/* 14 */{"x":1175,"y":385,"trait":"v","color":"FFFFFF"},/* 15 */{"x":0,"y":600,"trait":"ko"},/* 16 */{"x":0,"y":635,"trait":"v"},/* 17 */{"x":1175,"y":600,"trait":"bb","color":"FFFFFF"},/* 18 */{"x":-790,"y":-7,"cGroup":["wall"],"cMask":["wall"]},/* 19 */{"x":-790,"y":3,"cGroup":["wall"],"cMask":["wall"]},/* 20 */{"x":791,"y":-7,"cMask":["wall"],"cGroup":["wall"]},/* 21 */{"x":791,"y":3,"cMask":["wall"],"cGroup":["wall"]},/* 22 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 23 */{"cMask":["wall"],"cGroup":["wall"],"x":-42.5,"y":29},/* 24 */{"cMask":["wall"],"cGroup":["wall"],"x":43.5,"y":30},/* 25 */{"cMask":["wall"],"cGroup":["wall"],"x":86.5,"y":100},/* 26 */{"cMask":["wall"],"cGroup":["wall"],"x":115.5,"y":73},/* 27 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-37},/* 28 */{"cMask":["wall"],"cGroup":["wall"],"x":40.5,"y":-60},/* 29 */{"cMask":["wall"],"cGroup":["wall"],"x":-57.5,"y":-35},/* 30 */{"cMask":["wall"],"cGroup":["wall"],"x":76.5,"y":104},/* 31 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 32 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 33 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 34 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-79.10791561250448},/* 35 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.97184473452512,"y":29.0709040796512},/* 36 */{"cMask":["wall"],"cGroup":["wall"],"x":47.90064311143442,"y":30.045488040841747},/* 37 */{"cMask":["wall"],"cGroup":["wall"],"x":89.40961987520575,"y":95.34261344061139},/* 38 */{"cMask":["wall"],"cGroup":["wall"],"x":116.17316158174788,"y":70.77468610037135},/* 39 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-35.251637358927894},/* 40 */{"cMask":["wall"],"cGroup":["wall"],"x":40.9370095318302,"y":-55.64165242750204},/* 41 */{"cMask":["wall"],"cGroup":["wall"],"x":-54.4263484285878,"y":-33.30246943654669},/* 42 */{"cMask":["wall"],"cGroup":["wall"],"x":74.70055123837233,"y":102.16470116894556},/* 43 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.190043256900026,"y":-148.4050410122741},/* 44 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.08094399571257,"y":-81.10791561250448},/* 45 */{"cMask":["wall"],"cGroup":["wall"],"x":-38.190043256900026,"y":-147.4050410122741},/* 46 */{"cMask":["wall"],"cGroup":["wall"],"x":52.5,"y":-34},/* 47 */{"cMask":["wall"],"cGroup":["wall"],"x":78.5,"y":-49},/* 48 */{"cMask":["wall"],"cGroup":["wall"],"x":46.5,"y":-45},/* 49 */{"cMask":["wall"],"cGroup":["wall"],"x":70.5,"y":-59,"color":"ffffff"},/* 50 */{"cMask":["wall"],"cGroup":["wall"],"x":19.5,"y":-88},/* 51 */{"cMask":["wall"],"cGroup":["wall"],"x":49.5,"y":-48},/* 52 */{"cMask":["wall"],"cGroup":["wall"],"x":33.5,"y":-103},/* 53 */{"cMask":["wall"],"cGroup":["wall"],"x":66.5,"y":-58},/* 54 */{"cMask":["wall"],"cGroup":["wall"],"x":31.5,"y":-125,"color":"505050"},/* 55 */{"cMask":["wall"],"cGroup":["wall"],"x":26.5,"y":-137,"color":"505050"},/* 56 */{"cMask":["wall"],"cGroup":["wall"],"x":28.5,"y":-151,"color":"505050"},/* 57 */{"cMask":["wall"],"cGroup":["wall"],"x":29.5,"y":-169,"color":"505050"},/* 58 */{"cMask":["wall"],"cGroup":["wall"],"x":13.5,"y":-123,"color":"505050"},/* 59 */{"cMask":["wall"],"cGroup":["wall"],"x":5.5,"y":-135,"color":"505050"},/* 60 */{"cMask":["wall"],"cGroup":["wall"],"x":8.5,"y":-157,"color":"505050"},/* 61 */{"cMask":["wall"],"cGroup":["wall"],"x":12.5,"y":-176,"color":"505050"},/* 62 */{"cMask":["wall"],"cGroup":["wall"],"x":-6.5,"y":-158,"color":"505050"},/* 63 */{"cMask":["wall"],"cGroup":["wall"],"x":-10.5,"y":-183,"color":"505050"},/* 64 */{"cMask":["wall"],"cGroup":["wall"],"x":30.5,"y":-199,"color":"505050"},/* 65 */{"cMask":["wall"],"cGroup":["wall"],"x":37.5,"y":-232,"color":"505050"},/* 66 */{"cMask":["wall"],"cGroup":["wall"],"x":11.5,"y":-210,"color":"505050"},/* 67 */{"cMask":["wall"],"cGroup":["wall"],"x":6.5,"y":-257,"color":"505050"},/* 68 */{"cMask":["wall"],"cGroup":["wall"],"x":83.5,"y":-71,"color":"ffffff"},/* 69 */{"cMask":["wall"],"cGroup":["wall"],"x":75.5,"y":-56,"color":"ffffff"},/* 70 */{"cMask":["wall"],"cGroup":["wall"],"x":90.5,"y":-69,"color":"ffffff"},/* 71 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 72 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 73 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 74 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 75 */{"cMask":["wall"],"cGroup":["wall"],"x":-9.5,"y":-97},/* 76 */{"cMask":["wall"],"cGroup":["wall"],"x":-32.5,"y":-108}],"segments":[{"v0":1,"v1":0,"trait":"nc","x":-1175},{"v0":3,"v1":2,"trait":"nc","curve":-180,"color":"FFFFFF"},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"ff1115","curve":180},{"v0":4,"v1":6,"trait":"ko","vis":false},{"v0":8,"v1":1,"trait":"bb","x":-1175,"color":"FFFFFF","curve":0},{"v0":0,"v1":9,"trait":"bb","x":-1175,"color":"FFFFFF"},{"v0":10,"v1":8,"trait":"bb","y":-600,"color":"FFFFFF"},{"v0":12,"v1":11,"trait":"nc","x":1175},{"v0":13,"v1":14,"trait":"nc","curve":-180,"color":"FFFFFF","x":1175},{"v0":6,"v1":15,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"11b7ff","curve":180},{"v0":6,"v1":15,"trait":"ko","vis":false},{"v0":17,"v1":12,"trait":"bb","x":1175,"color":"FFFFFF"},{"v0":11,"v1":10,"trait":"bb","x":1175,"color":"FFFFFF"},{"v0":9,"v1":17,"trait":"bb","y":600,"color":"FFFFFF"},{"v0":18,"v1":19,"curve":-180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":-110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":18,"v1":19,"curve":0,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":20,"v1":21,"curve":-180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":-110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":20,"v1":21,"curve":0,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":23},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":23,"v1":24},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":24,"v1":25},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":25,"v1":26},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":27,"v1":28,"curve":-35.13002937458595},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":29,"v1":30,"curve":-205.33386491629776},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":31,"curve":-183.8478819691025},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":32,"v1":33,"curve":173.88551652918804},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":35,"curve":-23.901187801606472},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":35,"v1":36},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":36,"v1":37},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":37,"v1":38},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":39,"v1":40,"curve":-35.5091927036537},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":41,"v1":42,"curve":-207.01754667045108},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":43,"curve":-184.00698891107533},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":44,"v1":45,"curve":173.70106103798304},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":46,"v1":47},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":46,"v1":48},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":47,"v1":49},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":48},{"curve":19.4007838878916,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":50,"v1":51},{"curve":-30.31978069668057,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":53},{"curve":121.41727565803163,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":52,"v1":50},{"curve":61.059411799868286,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":54,"v1":55},{"curve":-84.79487559500053,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":56,"v1":57},{"curve":84.54737801218732,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":58,"v1":59},{"curve":2.4377504702625763,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":60,"v1":61},{"curve":36.86989764584401,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":62,"v1":63},{"curve":49.55028113766386,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":64,"v1":65},{"curve":52.60804874942499,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":66,"v1":67},{"cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":69,"v1":70,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":70,"v1":68,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":71,"v1":72,"curve":197.59482141998248,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":73,"v1":74,"curve":-186.3596602397281,"color":"ffffff"},{"curve":129.3076481161066,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":75,"v1":76}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-1174,-107],"color":"E56E56"},{"trait":"gp","pos":[-1174,113],"color":"E56E56"},{"trait":"gp","pos":[1177,110],"color":"5689E5","p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"gp","pos":[1177,-110],"color":"5689E5","p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd1","pos":[-1184.51,-103.76],"invMass":2.5},{"trait":"nd1","pos":[-1194.0700000000002,-100.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1203.63,-97.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1213.19,-94.94],"invMass":2.5},{"trait":"nd1","pos":[-1222.74,-77],"invMass":0},{"trait":"nd1","pos":[-1222.74,-67],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-57],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-47],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-37],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-27],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-17],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,-7],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,3],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,13],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,23],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,33],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,43],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,53],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,63],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,73],"invMass":4.5,"damping":0.96},{"trait":"nd1","pos":[-1222.74,83],"invMass":0},{"trait":"nd1","pos":[-1212.19,98.94],"invMass":2.5},{"trait":"nd1","pos":[-1202.63,103.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1192.0700000000002,107.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1184.51,112.76],"invMass":2.5},{"trait":"nd2","pos":[1187.51,-106.76],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1197.0700000000002,-103.82],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1206.63,-100.88],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1216.19,-97.94],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-95],"invMass":0,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-68],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-58],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-48],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-38],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-28],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-18],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,-8],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,2],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,12],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,22],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,32],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,42],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,52],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,62],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1225.74,72],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,95],"invMass":0,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1217.19,98.94],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1207.63,101.88],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1198.0700000000002,104.82],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1188.51,107.76],"invMass":2.5,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd1","pos":[-1220.74,92],"invMass":0},{"trait":"nd1","pos":[-1219.74,-88],"invMass":0},{"trait":"nd2","pos":[1226.74,83],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,-75],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]},{"trait":"nd2","pos":[1226.74,-86],"invMass":4.5,"damping":0.96,"p0":[1181.25,110],"p1":[1181.25,-110]}],"goals":[{"p0":[-1179.25,-107],"p1":[-1179.25,113],"team":"red"},{"p0":[1181.25,110],"p1":[1181.25,-110],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-635,"trait":"pb"},{"normal":[0,-1],"dist":-680,"trait":"pb"},{"normal":[1,0],"dist":-1275,"trait":"pb"},{"normal":[-1,0],"dist":-1275,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":1275,"height":635,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-250,-100],[-250,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[250,100],[250,-100],[300,0],[500,0],[700,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":24,"d1":23,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":2,"d1":29,"trait":"nj"},{"d0":4,"d1":30,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":43,"d1":42,"trait":"nj"},{"d0":44,"d1":43,"trait":"nj"},{"d0":45,"d1":44,"trait":"nj"},{"d0":46,"d1":45,"trait":"nj"},{"d0":47,"d1":46,"trait":"nj"},{"d0":48,"d1":47,"trait":"nj"},{"d0":49,"d1":48,"trait":"nj"},{"d0":50,"d1":49,"trait":"nj"},{"d0":51,"d1":50,"trait":"nj"},{"d0":52,"d1":51,"trait":"nj"},{"d0":53,"d1":52,"trait":"nj"},{"d0":54,"d1":53,"trait":"nj"},{"d0":3,"d1":54,"trait":"nj"}],"canBeStored":true,"spawnDistance":700}';
var v10Map = '{"name":"sindicato hax 10v9 normal","bg":{"type":"","color":"(bgcolor)"},"ballPhysics":"disc0","vertexes":[/* 0 */{"x":-1300,"y":100,"trait":"bb","color":"FFFFFF"},/* 1 */{"x":-1300,"y":-100,"trait":"bb","color":"FFFFFF"},/* 2 */{"x":-1300,"y":-485,"trait":"v","color":"FFFFFF"},/* 3 */{"x":-1300,"y":485,"trait":"v","color":"FFFFFF"},/* 4 */{"x":0,"y":-185,"trait":"ko","color":"11b7ff"},/* 5 */{"x":0,"y":-720,"trait":"ko"},/* 6 */{"x":0,"y":185,"trait":"ko","color":"11b7ff"},/* 7 */{"x":-1300,"y":-720,"trait":"bb","color":"FFFFFF"},/* 8 */{"x":-1300,"y":720,"trait":"bb","color":"FFFFFF"},/* 9 */{"x":1300,"y":-720,"trait":"bb","color":"FFFFFF"},/* 10 */{"x":1300,"y":-102,"trait":"bb","color":"FFFFFF"},/* 11 */{"x":1300,"y":102,"trait":"bb","color":"FFFFFF"},/* 12 */{"x":1300,"y":-485,"trait":"v","color":"FFFFFF"},/* 13 */{"x":1300,"y":485,"trait":"v","color":"FFFFFF"},/* 14 */{"x":0,"y":720,"trait":"ko"},/* 15 */{"x":0,"y":780,"trait":"v"},/* 16 */{"x":1300,"y":720,"trait":"bb","color":"FFFFFF"},/* 17 */{"x":-814,"y":-13,"cGroup":["wall"],"cMask":["wall"]},/* 18 */{"x":-814,"y":-3,"cGroup":["wall"],"cMask":["wall"]},/* 19 */{"x":816,"y":-4,"cMask":["wall"],"cGroup":["wall"]},/* 20 */{"x":816,"y":6,"cMask":["wall"],"cGroup":["wall"]},/* 21 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 22 */{"cMask":["wall"],"cGroup":["wall"],"x":-42.5,"y":29},/* 23 */{"cMask":["wall"],"cGroup":["wall"],"x":43.5,"y":30},/* 24 */{"cMask":["wall"],"cGroup":["wall"],"x":86.5,"y":100},/* 25 */{"cMask":["wall"],"cGroup":["wall"],"x":115.5,"y":73},/* 26 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-37},/* 27 */{"cMask":["wall"],"cGroup":["wall"],"x":40.5,"y":-60},/* 28 */{"cMask":["wall"],"cGroup":["wall"],"x":-57.5,"y":-35},/* 29 */{"cMask":["wall"],"cGroup":["wall"],"x":76.5,"y":104},/* 30 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 31 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.5,"y":-82},/* 32 */{"cMask":["wall"],"cGroup":["wall"],"x":-36.5,"y":-149},/* 33 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-79.10791561250448},/* 34 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.97184473452512,"y":29.0709040796512},/* 35 */{"cMask":["wall"],"cGroup":["wall"],"x":47.90064311143442,"y":30.045488040841747},/* 36 */{"cMask":["wall"],"cGroup":["wall"],"x":89.40961987520575,"y":95.34261344061139},/* 37 */{"cMask":["wall"],"cGroup":["wall"],"x":116.17316158174788,"y":70.77468610037135},/* 38 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.08094399571257,"y":-35.251637358927894},/* 39 */{"cMask":["wall"],"cGroup":["wall"],"x":40.9370095318302,"y":-55.64165242750204},/* 40 */{"cMask":["wall"],"cGroup":["wall"],"x":-54.4263484285878,"y":-33.30246943654669},/* 41 */{"cMask":["wall"],"cGroup":["wall"],"x":74.70055123837233,"y":102.16470116894556},/* 42 */{"cMask":["wall"],"cGroup":["wall"],"x":-37.190043256900026,"y":-148.4050410122741},/* 43 */{"cMask":["wall"],"cGroup":["wall"],"x":-39.08094399571257,"y":-81.10791561250448},/* 44 */{"cMask":["wall"],"cGroup":["wall"],"x":-38.190043256900026,"y":-147.4050410122741},/* 45 */{"cMask":["wall"],"cGroup":["wall"],"x":52.5,"y":-34},/* 46 */{"cMask":["wall"],"cGroup":["wall"],"x":78.5,"y":-49},/* 47 */{"cMask":["wall"],"cGroup":["wall"],"x":46.5,"y":-45},/* 48 */{"cMask":["wall"],"cGroup":["wall"],"x":70.5,"y":-59,"color":"ffffff"},/* 49 */{"cMask":["wall"],"cGroup":["wall"],"x":19.5,"y":-88},/* 50 */{"cMask":["wall"],"cGroup":["wall"],"x":49.5,"y":-48},/* 51 */{"cMask":["wall"],"cGroup":["wall"],"x":33.5,"y":-103},/* 52 */{"cMask":["wall"],"cGroup":["wall"],"x":66.5,"y":-58},/* 53 */{"cMask":["wall"],"cGroup":["wall"],"x":31.5,"y":-125,"color":"505050"},/* 54 */{"cMask":["wall"],"cGroup":["wall"],"x":26.5,"y":-137,"color":"505050"},/* 55 */{"cMask":["wall"],"cGroup":["wall"],"x":28.5,"y":-151,"color":"505050"},/* 56 */{"cMask":["wall"],"cGroup":["wall"],"x":29.5,"y":-169,"color":"505050"},/* 57 */{"cMask":["wall"],"cGroup":["wall"],"x":13.5,"y":-123,"color":"505050"},/* 58 */{"cMask":["wall"],"cGroup":["wall"],"x":5.5,"y":-135,"color":"505050"},/* 59 */{"cMask":["wall"],"cGroup":["wall"],"x":8.5,"y":-157,"color":"505050"},/* 60 */{"cMask":["wall"],"cGroup":["wall"],"x":12.5,"y":-176,"color":"505050"},/* 61 */{"cMask":["wall"],"cGroup":["wall"],"x":-6.5,"y":-158,"color":"505050"},/* 62 */{"cMask":["wall"],"cGroup":["wall"],"x":-10.5,"y":-183,"color":"505050"},/* 63 */{"cMask":["wall"],"cGroup":["wall"],"x":30.5,"y":-199,"color":"505050"},/* 64 */{"cMask":["wall"],"cGroup":["wall"],"x":37.5,"y":-232,"color":"505050"},/* 65 */{"cMask":["wall"],"cGroup":["wall"],"x":11.5,"y":-210,"color":"505050"},/* 66 */{"cMask":["wall"],"cGroup":["wall"],"x":6.5,"y":-257,"color":"505050"},/* 67 */{"cMask":["wall"],"cGroup":["wall"],"x":83.5,"y":-71,"color":"ffffff"},/* 68 */{"cMask":["wall"],"cGroup":["wall"],"x":75.5,"y":-56,"color":"ffffff"},/* 69 */{"cMask":["wall"],"cGroup":["wall"],"x":90.5,"y":-69,"color":"ffffff"},/* 70 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 71 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 72 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-133,"color":"ffffff"},/* 73 */{"cMask":["wall"],"cGroup":["wall"],"x":-30.5,"y":-121,"color":"ffffff"},/* 74 */{"cMask":["wall"],"cGroup":["wall"],"x":-9.5,"y":-97},/* 75 */{"cMask":["wall"],"cGroup":["wall"],"x":-32.5,"y":-108}],"segments":[{"v0":1,"v1":0,"trait":"nc"},{"v0":3,"v1":2,"trait":"nc","curve":-180,"color":"FFFFFF"},{"v0":4,"v1":5,"trait":"nc"},{"v0":6,"v1":4,"trait":"ko","cGroup":["blueKO"],"color":"ff1115","curve":180},{"v0":4,"v1":6,"trait":"ko","vis":false},{"v0":7,"v1":1,"trait":"bb","x":-1300,"color":"FFFFFF"},{"v0":0,"v1":8,"trait":"bb","x":-1300,"color":"FFFFFF"},{"v0":9,"v1":7,"trait":"bb","y":-720,"color":"FFFFFF"},{"v0":11,"v1":10,"trait":"nc"},{"v0":12,"v1":13,"trait":"nc","curve":-180,"color":"FFFFFF"},{"v0":6,"v1":14,"trait":"nc"},{"v0":4,"v1":6,"trait":"ko","cGroup":["redKO"],"color":"11b7ff","curve":180},{"v0":6,"v1":14,"trait":"ko","vis":false},{"v0":16,"v1":11,"trait":"bb","x":1300,"color":"FFFFFF"},{"v0":10,"v1":9,"trait":"bb","x":1300,"color":"FFFFFF"},{"v0":8,"v1":16,"trait":"bb","y":720,"color":"FFFFFF"},{"v0":17,"v1":18,"curve":-180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":17,"v1":18,"curve":180,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":17,"v1":18,"curve":110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":17,"v1":18,"curve":-110,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":17,"v1":18,"curve":0,"color":"ffffff","x":0,"cGroup":["wall"],"cMask":["wall"]},{"v0":19,"v1":20,"curve":-180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":19,"v1":20,"curve":180,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":19,"v1":20,"curve":110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":19,"v1":20,"curve":-110,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"v0":19,"v1":20,"curve":0,"color":"ffffff","x":0,"cMask":["wall"],"cGroup":["wall"]},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":21,"v1":22},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":22,"v1":23},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":23,"v1":24},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":24,"v1":25},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":26,"v1":27,"curve":-35.13002937458595},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":28,"v1":29,"curve":-205.33386491629776},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":21,"v1":30,"curve":-183.8478819691025},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":31,"v1":32,"curve":173.88551652918804},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":33,"v1":34,"curve":-23.901187801606472},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":34,"v1":35},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":35,"v1":36},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":36,"v1":37},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":38,"v1":39,"curve":-35.5091927036537},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":40,"v1":41,"curve":-207.01754667045108},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":33,"v1":42,"curve":-184.00698891107533},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":43,"v1":44,"curve":173.70106103798304},{"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":46},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":45,"v1":47},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":46,"v1":48},{"curve":-10.778623519946818,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":48,"v1":47},{"curve":19.4007838878916,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":49,"v1":50},{"curve":-30.31978069668057,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":51,"v1":52},{"curve":121.41727565803163,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":51,"v1":49},{"curve":61.059411799868286,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":53,"v1":54},{"curve":-84.79487559500053,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":55,"v1":56},{"curve":84.54737801218732,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":57,"v1":58},{"curve":2.4377504702625763,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":59,"v1":60},{"curve":36.86989764584401,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":61,"v1":62},{"curve":49.55028113766386,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":63,"v1":64},{"curve":52.60804874942499,"color":"505050","cMask":["wall"],"cGroup":["wall"],"v0":65,"v1":66},{"cMask":["wall"],"cGroup":["wall"],"v0":48,"v1":67,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":68,"v1":69,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":69,"v1":67,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":70,"v1":71,"curve":197.59482141998248,"color":"ffffff"},{"cMask":["wall"],"cGroup":["wall"],"v0":72,"v1":73,"curve":-186.3596602397281,"color":"ffffff"},{"curve":129.3076481161066,"color":"ffffff","cMask":["wall"],"cGroup":["wall"],"v0":74,"v1":75}],"discs":[{"pos":[0,0],"cGroup":["ball","kick","score"],"color":"FFCC00","radius":6.25,"bCoef":0.4,"invMass":1.5},{"trait":"gp","pos":[-1301,-98],"color":"E56E56"},{"trait":"gp","pos":[-1301,92],"color":"E56E56"},{"trait":"gp","pos":[1301,96],"color":"5689E5"},{"trait":"gp","pos":[1301,-94],"color":"5689E5"},{"trait":"nd1","pos":[-1311.51,-94.76],"invMass":2.5},{"trait":"nd1","pos":[-1321.0700000000002,-91.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1330.63,-88.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1340.19,-85.94],"invMass":2.5},{"trait":"nd1","pos":[-1349.74,-83],"invMass":0},{"trait":"nd1","pos":[-1349.74,-73],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-63],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-53],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-43],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-33],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-23],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-13],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,-3],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,7],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,17],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,27],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,37],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,47],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,57],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,67],"invMass":1.5},{"trait":"nd1","pos":[-1349.74,77],"invMass":0},{"trait":"nd1","pos":[-1340.19,79.94],"invMass":2.5},{"trait":"nd1","pos":[-1330.63,82.88],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1321.0700000000002,85.82],"bCoef":0.1,"invMass":2.5},{"trait":"nd1","pos":[-1311.51,88.76],"invMass":2.5},{"trait":"nd2","pos":[1311.51,-90.76],"invMass":2.5},{"trait":"nd2","pos":[1321.0700000000002,-87.82],"invMass":2.5},{"trait":"nd2","pos":[1330.63,-84.88],"invMass":2.5},{"trait":"nd2","pos":[1340.19,-81.94],"invMass":2.5},{"trait":"nd2","pos":[1349.74,-79],"invMass":0},{"trait":"nd2","pos":[1349.74,-69],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-59],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-49],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-39],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-29],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-19],"invMass":1.5},{"trait":"nd2","pos":[1349.74,-9],"invMass":1.5},{"trait":"nd2","pos":[1349.74,1],"invMass":1.5},{"trait":"nd2","pos":[1349.74,11],"invMass":1.5},{"trait":"nd2","pos":[1349.74,21],"invMass":1.5},{"trait":"nd2","pos":[1349.74,31],"invMass":1.5},{"trait":"nd2","pos":[1349.74,41],"invMass":1.5},{"trait":"nd2","pos":[1349.74,51],"invMass":1.5},{"trait":"nd2","pos":[1349.74,61],"invMass":1.5},{"trait":"nd2","pos":[1349.74,71],"invMass":1.5},{"trait":"nd2","pos":[1349.74,81],"invMass":0},{"trait":"nd2","pos":[1340.19,83.94],"invMass":2.5},{"trait":"nd2","pos":[1330.63,86.88],"invMass":2.5},{"trait":"nd2","pos":[1321.0700000000002,89.82],"invMass":2.5},{"trait":"nd2","pos":[1311.51,92.76],"invMass":2.5}],"goals":[{"p0":[-1305.25,-105],"p1":[-1305.25,99],"team":"red"},{"p0":[1305.25,103],"p1":[1305.25,-101],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-780,"trait":"pb"},{"normal":[0,-1],"dist":-780,"trait":"pb"},{"normal":[1,0],"dist":-1400,"trait":"pb"},{"normal":[-1,0],"dist":-1400,"trait":"pb"}],"traits":{"v":{"cMask":[]},"bb":{"cMask":["ball"],"bias":10,"color":"1E252A"},"pb":{"bCoef":0.1,"cMask":["all"]},"nc":{"cMask":[],"color":"737573"},"gp":{"radius":5,"invMass":0},"nd1":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"E56E56"},"nd2":{"bCoef":0,"invMass":2,"damping":0.97,"cMask":["all"],"radius":4,"color":"5689E5"},"nj":{"strength":"rigid","color":"737573"},"ko":{"bCoef":0,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"width":1400,"height":780,"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.875},"redSpawnPoints":[[-350,-100],[-350,100],[-300,0],[-500,0],[-700,0]],"blueSpawnPoints":[[350,100],[350,-100],[300,0],[500,0],[700,0]],"joints":[{"d0":1,"d1":5,"trait":"nj"},{"d0":6,"d1":5,"trait":"nj"},{"d0":7,"d1":6,"trait":"nj"},{"d0":8,"d1":7,"trait":"nj"},{"d0":9,"d1":8,"trait":"nj"},{"d0":10,"d1":9,"trait":"nj"},{"d0":11,"d1":10,"trait":"nj"},{"d0":12,"d1":11,"trait":"nj"},{"d0":13,"d1":12,"trait":"nj"},{"d0":14,"d1":13,"trait":"nj"},{"d0":15,"d1":14,"trait":"nj"},{"d0":16,"d1":15,"trait":"nj"},{"d0":17,"d1":16,"trait":"nj"},{"d0":18,"d1":17,"trait":"nj"},{"d0":19,"d1":18,"trait":"nj"},{"d0":20,"d1":19,"trait":"nj"},{"d0":21,"d1":20,"trait":"nj"},{"d0":22,"d1":21,"trait":"nj"},{"d0":23,"d1":22,"trait":"nj"},{"d0":24,"d1":23,"trait":"nj"},{"d0":25,"d1":24,"trait":"nj"},{"d0":26,"d1":25,"trait":"nj"},{"d0":27,"d1":26,"trait":"nj"},{"d0":28,"d1":27,"trait":"nj"},{"d0":29,"d1":28,"trait":"nj"},{"d0":2,"d1":29,"trait":"nj"},{"d0":4,"d1":30,"trait":"nj"},{"d0":31,"d1":30,"trait":"nj"},{"d0":32,"d1":31,"trait":"nj"},{"d0":33,"d1":32,"trait":"nj"},{"d0":34,"d1":33,"trait":"nj"},{"d0":35,"d1":34,"trait":"nj"},{"d0":36,"d1":35,"trait":"nj"},{"d0":37,"d1":36,"trait":"nj"},{"d0":38,"d1":37,"trait":"nj"},{"d0":39,"d1":38,"trait":"nj"},{"d0":40,"d1":39,"trait":"nj"},{"d0":41,"d1":40,"trait":"nj"},{"d0":42,"d1":41,"trait":"nj"},{"d0":43,"d1":42,"trait":"nj"},{"d0":44,"d1":43,"trait":"nj"},{"d0":45,"d1":44,"trait":"nj"},{"d0":46,"d1":45,"trait":"nj"},{"d0":47,"d1":46,"trait":"nj"},{"d0":48,"d1":47,"trait":"nj"},{"d0":49,"d1":48,"trait":"nj"},{"d0":50,"d1":49,"trait":"nj"},{"d0":51,"d1":50,"trait":"nj"},{"d0":52,"d1":51,"trait":"nj"},{"d0":53,"d1":52,"trait":"nj"},{"d0":54,"d1":53,"trait":"nj"},{"d0":3,"d1":54,"trait":"nj"}],"canBeStored":true,"spawnDistance":700}';
var currentMap = 'training';
var bigMapObj = JSON.parse(trainingMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var masterPassword = 10000 + getRandomInt(90000);
var roomPassword = '';

/* OBJECTS */

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class MutePlayer {
    constructor(name, id, auth) {
        this.id = MutePlayer.incrementId();
        this.name = name;
        this.playerId = id;
        this.auth = auth;
        this.unmuteTimeout = null;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    setDuration(minutes) {
        this.unmuteTimeout = setTimeout(() => {
            room.sendAnnouncement(
                `You have been unmuted.`,
                this.playerId,
                announcementColor,
                "bold",
                HaxNotification.CHAT
            );
            this.remove();
        }, minutes * 60 * 1000);
        muteArray.add(this);
    }

    remove() {
        this.unmuteTimeout = null;
        muteArray.removeById(this.id);
    }
}

class MuteList {
    constructor() {
        this.list = [];
    }

    add(mutePlayer) {
        this.list.push(mutePlayer);
        return mutePlayer;
    }

    getById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByPlayerId(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.playerId === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    removeById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    removeByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

class HaxStatistics {
    constructor(playerName = '') {
        this.playerName = playerName;
        this.games = 0;
        this.wins = 0;
        this.winrate = '0.00%';
        this.playtime = 0;
        this.goals = 0;
        this.assists = 0;
        this.gk = 0;
        this.gap = 0;
        this.ownGoals = 0;
    }
}

/* PLAYERS */

var gameState = State.STOP;
var playSituation = Situation.STOP;
var goldenGoal = false;

var playersAll = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];

var teamRedStats = [];
var teamBlueStats = [];

var banList = [];

/* STATS */

var possession = [0, 0];
var actionZoneHalf = [0, 0];
var lastWinner = Team.SPECTATORS;
var streak = 0;

/* AUTH */

var authArray = [];
var adminList = [
    ['xou8ZBCmXz8FDyPgVo-jRF5TrDo5dIyjROf8K9KaT6U', 'Puntinho 😭'],
    ['UJQpqJy1lfOCxMjyd0stY8GLFsgFpUN6lNJFnP3Xgpc', 'Panceta'],
    ['7zFMipzyVNOpzPipeoEyInNJkZ0ROyfbGLpslSs93iM', 'Milanga'],
    ['Kx8Jz21ekKV8qlYnrJ0wlZ8vAYFPoiMJabQ9dms8rks', 'bd'],
    ['-tbqVZgvgvxDGXWVJ6Qo1IyzmR5EyZYORsLzN-EF378', 'K̷D̷B̷ |Tino'],
    ['5zPDVwl6IuqmhW4kMbK17zVgkMnVIIXhJ-3khPA3hKQ', 'hesar'],
    ['uLwfYxwgiWchJjGGxvtmydoyQHm3qaFx3skZ_1bgBFw', 'ad'],
    ['9Y7e_VE8L9G4Kc4t_MxZN6ZiBgBsHJMWd2UXGMbe508', '🦔𝓔𝓻𝓲𝔃𝓸🦔'],
    ['60I1xTPhaQckTI7A0SHsYEvVSKOfBadExacbUq21Xpo', '『𝓓𝓨𝓑𝓐𝓛𝓐』💎⭐⭐⭐ '],
    ['yL0CM5i6TN1NqwnjpYktaOdbjLylpIk3Ec6DzwT3PeE', '✓ ***///jeneix/// ***  ✓'],
    ['Z71-PQIFIqUGqDW3rsr1hpC5w0kDZGSoixBTD6IKX5w', 'Julian | SAC | MCI'],
    ['Oo3S8h1-fQMFOwGAoI_GydaT1MnSfB1TZJr9vGqzqYk', '𝐌𝐀𝐓𝐄'],
    ['7MQDG-3zSOY_yl_2T-X6DmZXdoaeXo45_5Vy-w2BWG8', 'Roberto Carlos'],
];
var masterList = [
    'a6S_JJUw1JmRV42QyC-OsI8ekLOrdqVgZrl40NuyF50',
    // 'INSERT_MASTER_AUTH_HERE_2'
];

/* COMMANDS */

var commands = {
    help: {
        aliases: ['commands'],
        roles: Role.PLAYER,
        desc: `
	Este comando muestra todos los comandos disponibles. Tambien sirve para ver la descripcion de un comando.
Ejemplo: \'!help bb\' va a mostrar la descripcion del comando \'!bb\' .`,
        function: helpCommand,
    },
    claim: {
        aliases: [],
        roles: Role.PLAYER,
        desc: false,
        function: masterCommand,
    },
    afk: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando te hace ir AFK.
    Tiene limmitaciones: 1 minuto minimo de AFK, 5 minutos maximo y 10 minutos de cooldown.`,
        function: afkCommand,
    },
    afks: {
        aliases: ['afklist'],
        roles: Role.PLAYER,
        desc: `
        Lista de AFK.`,
        function: afkListCommand,
    },
    bb: {
        aliases: ['bye', 'gn', 'cya'],
        roles: Role.PLAYER,
        desc: `
	Salir del host.`,
        function: leaveCommand,
    },
    me: {
        aliases: ['stat', 'stats'],
        roles: Role.PLAYER,
        desc: `
        Muestra tus stats.`,
        function: globalStatsCommand,
    },
    rename: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command allows you to rename yourself for the leaderboard.`,
        function: renameCommand,
    },
    games: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most games in the room.`,
        function: statsLeaderboardCommand,
    },
    wins: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most wins in the room.`,
        function: statsLeaderboardCommand,
    },
    goals: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most goals in the room.`,
        function: statsLeaderboardCommand,
    },
    assists: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most assists in the room.`,
        function: statsLeaderboardCommand,
    },
    cs: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most CS in the room.`,
        function: statsLeaderboardCommand,
    },
    playtime: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        This command shows the top 5 players with the most time played in the room.`,
        function: statsLeaderboardCommand,
    },
    training: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command loads the classic training stadium.`,
        function: stadiumCommand,
    },
    v2: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 2v2.`,
        function: stadiumCommand,
    },
    v3: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 3v3.`,
        function: stadiumCommand,
    },
    v4: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 4v4.`,
        function: stadiumCommand,
    },
    v6: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 6v6.`,
        function: stadiumCommand,
    },
    v7: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 7v7.`,
        function: stadiumCommand,
    },
    v10: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        Carga mapa de 10v10.`,
        function: stadiumCommand,
    },
    rr: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command restarts the game.`,
        function: restartCommand,
    },
    rrs: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command swaps the teams and restarts the game.`,
        function: restartSwapCommand,
    },
    swap: {
        aliases: ['s'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command swaps the teams when the game is stopped.`,
        function: swapCommand,
    },
    kickred: {
        aliases: ['kickr'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the red team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickblue: {
        aliases: ['kickb'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the blue team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    kickspec: {
        aliases: ['kicks'],
        roles: Role.ADMIN_TEMP,
        desc: `
    This command kicks all the players from the spectators team, including the player that entered the command. You can give as an argument the reason of the kick.`,
        function: kickTeamCommand,
    },
    mute: {
        aliases: ['m'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to mute a player. He won't be able to talk for a certain duration, and can be unmuted at any time by admins.
    It takes 2 arguments:
    Argument 1: #<id> where <id> is the id of the player targeted. This won't work if the player is an admin.
    Argument 2 (optional): <duration> where <duration> is the duration of the mute in minutes. If no value is provided, the mute lasts for the default duration, ${muteDuration} minutes.
    Example: !mute #3 20 will mute the player with id 3 for 20 minutes.`,
        function: muteCommand,
    },
    unmute: {
        aliases: ['um'],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command allows to unmute someone.
    It takes 1 argument:
    Argument 1: #<id> where <id> is the id of the muted player.
    OR
    Argument 1: <number> where <number> is the number associated with the mute given by the 'muteList' command.
    Example: !unmute #300 will unmute the player with id 300,
             !unmute 8 will unmute the n°8 player according to the 'muteList' command.`,
        function: unmuteCommand,
    },
    mutes: {
        aliases: [],
        roles: Role.ADMIN_TEMP,
        desc: `
        This command shows the list of muted players.`,
        function: muteListCommand,
    },
    clearbans: {
        aliases: [],
        roles: Role.MASTER,
        desc: `
	This command unbans everyone. It also can unban one player in particular, by adding his ID as an argument.`,
        function: clearbansCommand,
    },
    bans: {
        aliases: ['banlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that were banned and their IDs.`,
        function: banListCommand,
    },
    admins: {
        aliases: ['adminlist'],
        roles: Role.MASTER,
        desc: `
    This command shows all the players that are permanent admins.`,
        function: adminListCommand,
    },
    setadmin: {
        aliases: ['admin'],
        roles: Role.MASTER,
        desc: `
    This command allows to set someone as admin. He will be able to connect as admin, and can be removed at any time by masters.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
Example: !setadmin #3 will give admin to the player with id 3.`,
        function: setAdminCommand,
    },
    removeadmin: {
        aliases: ['unadmin'],
        roles: Role.MASTER,
        desc: `
	This command allows to remove someone as admin.
It takes 1 argument:
Argument 1: #<id> where <id> is the id of the player targeted.
OR
Argument 1: <number> where <number> is the number associated with the admin given by the 'admins' command.
Example: !removeadmin #300 will remove admin to the player with id 300,
         !removeadmin 2 will remove the admin n°2 according to the 'admins' command.`,
        function: removeAdminCommand,
    },
    password: {
        aliases: ['pw'],
        roles: Role.MASTER,
        desc: `
        This command allows to add a password to the room.
    It takes 1 argument:
    Argument 1: <password> where <password> is the password you want for the room.
    
    To remove the room password, simply enter '!password'.`,
        function: passwordCommand,
    },
    hc: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando ya saben que hace.`,
        function: printHumiliateCommand,
    },
    mtm: {
        aliases: ["mtm", "meteme"],
        roles: Role.PLAYER,
        desc: `
        Este comando te mete a la cancha si quedaste spec despues de iniciar la partida.`,
        function: mtmCommand,
    },
    ksk: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        Este comando Cambia las camisas de los equipos.`,
        function: kskCommand,
    },
    memide: {
        aliases: [],
        roles: Role.PLAYER,
        desc: `
        .`,
        function: meMideCommand,
    },
};

/* GAME */

var lastTouches = Array(2).fill(null);
var lastTeamTouched;

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

const welcomeColor = 0xc4ff65;
const announcementColor = 0xffefd6;
const infoColor = 0xbebebe;
const privateMessageColor = 0xffc933;
const redColor = 0xff4c4c;
const blueColor = 0x62cbff;
const warningColor = 0xffa135;
const errorColor = 0xa40000;
const successColor = 0x75ff75;
const defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkStadiumVariable = true;
var endGameVariable = false;
var cancelGameVariable = false;
var kickFetchVariable = false;

var chooseMode = false;
var timeOutCap;
var capLeft = false;
var redCaptainChoice = '';
var blueCaptainChoice = '';
var chooseTime = 20;

var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 0;
var maxAFKDuration = 30;
var AFKCooldown = 0;

var muteArray = new MuteList();
var muteDuration = 5;

var removingPlayers = false;
var insertingPlayers = false;

var stopTimeout;
var startTimeout;
var unpauseTimeout;
var removingTimeout;
var insertingTimeout;

var emptyPlayer = {
    id: 0,
};
stadiumCommand(emptyPlayer, "!training");

var game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    // returns a random number between 0 and max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getHoursStats(time) {
    return Math.floor(time / 3600);
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesStats(time) {
    return Math.floor(time / 60) - getHoursStats(time) * 60;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - getMinutesReport(t) * 60);
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getTimeStats(time) {
    if (getHoursStats(time) > 0) {
        return `${getHoursStats(time)}h${getMinutesStats(time)}m`;
    } else {
        return `${getMinutesStats(time)}m`;
    }
}

function getCurrentTotalGoals() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    if(gameMode = Mode.CAPS){
        return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
    } else if (gameMode = Mode.NORMAL){
        return `${getDate()}-${roomNumber}.hbr2`;
    }
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamRed;
    if (team == Team.BLUE) return teamBlue;
    if (includeAFK) {
        return playersAll.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamSpec;
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
    var color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    var msgArray = message.split(/ +/);
    var playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') == msgArray[0].substring(2)
    );
    if (playerTargetIndex == -1) {
        room.sendAnnouncement(
            `Invalid player, make sure the name you entered is correct.`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var playerTarget = playersAll[playerTargetIndex];
    if (player.id == playerTarget.id) {
        room.sendAnnouncement(
            `You can't send a PM to yourself!`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }
    var messageFrom = `📝 [PM with ${playerTarget.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    var messageTo = `📝 [PM with ${player.name}] ${player.name}: ${msgArray.slice(1).join(' ')}`

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* PHYSICS FUNCTIONS */

function calculateStadiumVariables() {
    if (checkStadiumVariable && teamRed.length + teamBlue.length > 0) {
        checkStadiumVariable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(touchArray, index, goals) {
    if (touchArray != null && touchArray.length >= index + 1) {
        var obj = touchArray[index];
        if (obj != null && obj.goal != null && obj.goal == goals) return obj;
    }
    return null;
}

/* BUTTONS */

function topButton() {
    if (teamSpec.length > 0) {
        if (gameMode == Mode.CAPS) {
            if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                room.setPlayerTeam(teamSpec[1].id, Team.BLUE);
            } else if (teamRed.length < teamBlue.length)
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            else {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            }
        } else if (gameMode == Mode.NORMAL) {
            console.log("normal top btn");
            for (let i = 0; i < teamSpec.length; i++) {
                if (teamRed.length < teamBlue.length)
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                else
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
            }
        }

    }
}

function randomButton() {
    if (teamSpec.length > 0) {
        if (gameMode == Mode.CAPS) {
            if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                teamSpec = teamSpec.filter((spec) => spec.id != teamSpec[r].id);
                room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
            } else if (teamRed.length < teamBlue.length)
                room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
            else
                room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
        } else if (gameMode == Mode.NORMAL) {
            for (let i = 0; i < teamSpec.length; i++) {
                if (teamRed.length < teamBlue.length)
                    room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
                else
                    room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
            }
        }
    }
}

function blueToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamBlue.length; i++) {
        room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamRed.length; i++) {
        room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    if (gameMode == Mode.CAPS) {
        for (let i = 0; i < Math.max(teamRed.length, teamBlue.length); i++) {
            if (Math.max(teamRed.length, teamBlue.length) - teamRed.length - i > 0)
                room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
            else if (Math.max(teamRed.length, teamBlue.length) - teamBlue.length - i > 0)
                room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
            else break;
        }
        for (let i = 0; i < Math.min(teamRed.length, teamBlue.length); i++) {
            room.setPlayerTeam(
                teamBlue[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
                Team.SPECTATORS
            );
            room.setPlayerTeam(
                teamRed[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
                Team.SPECTATORS
            );
        }
    } else if (gameMode == Mode.NORMAL) {
        for (let i = 0; i < players.length; i++) {
            room.setPlayerTeam(
                players[i].id,
                Team.SPECTATORS
            );
        }
    }
}

function swapButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */
var humiliateCommandTimeout = new Set();
const humilliatingVerbs = [" le robo el novio a ", " le meo la cara a ", " le hizo aplaudir las nalgas a ", " le hizo un brrr en la cola a ", " le toco el culo a ", " le ficho el bulto a ", " se caso con ", " embarazo a ", " fue embarazado por ", " le dio unos besitos a ", " se cago a trompadas con ", " chapo con ", " mecho uno con ", " reforzo amistad con ", " sale con el papa de ", " rechazo los avances sexuales no solicitados de ", " le pidio plata y nunca se la devolvio a ", " le dio un arrimon a ", " sale con la prima de ", " se unto en aceite y se le tiro encima a ", " se puso en tanga y le bailo a ", " y el admin salieron de travas y lo encontraron a ", " es un comilon como ", " piensa que el mejor jugador es ", " dice que el mas burro es "];
function printHumiliateCommand(player, message) {
    if (!humiliateCommandTimeout.has(player.id)) {
        var verbIndex = getRandomInt(humilliatingVerbs.length);
        updateTeams();
        victim = playersAll[getRandomInt(playersAll.length)];
        room.sendAnnouncement("「🤖」MAXBOT: " + player.name + humilliatingVerbs[verbIndex] + victim.name, null, 0xEAC274);
        humiliateCommandTimeout.add(player.id)
        setTimeout(() => {
            humiliateCommandTimeout.delete(player.id)
        }, 30000);
    }
}

function mtmCommand(player, message) {
    if (!AFKSet.has(player.id) && player.team == Team.SPECTATORS) {
        balanceTeams();
    }
}

var meMideCommandTimeout = new Set();
function meMideCommand(player) {
    if (!meMideCommandTimeout.has(player.id)) {
        room.sendAnnouncement("「🤖」MAXBOT: A " + player.name + " le mide " + getRandomInt(50) + " CM.", null, 0xEAC274);
        meMideCommandTimeout.add(player.id);
        setTimeout(() => {
            meMideCommandTimeout.delete(player.id);
        }, 10000);
    }
}

function kskCommand() {
    room.setTeamColors(
        Team.RED,
        teams[1].angle,
        teams[1].uniform[0].avatarColor,
        teams[1].uniform[0].mainColor);

    room.setTeamColors(
        Team.BLUE,
        teams[0].angle,
        teams[0].uniform[0].avatarColor,
        teams[0].uniform[0].mainColor);
}

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, 'Adios amigo!', false);
}

function helpCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        var commandString = 'Player commands :';
        for (const [key, value] of Object.entries(commands)) {
            if (value.desc && value.roles == Role.PLAYER) commandString += ` !${key},`;
        }
        commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        if (getRole(player) >= Role.ADMIN_TEMP) {
            commandString += `Admin commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.ADMIN_TEMP) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':')
                commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        if (getRole(player) >= Role.MASTER) {
            commandString += `Master commands :`;
            for (const [key, value] of Object.entries(commands)) {
                if (value.desc && value.roles == Role.MASTER) commandString += ` !${key},`;
            }
            if (commandString.slice(commandString.length - 1) == ':') commandString += ` None,`;
            commandString = commandString.substring(0, commandString.length - 1) + '.\n';
        }
        commandString += "\nTo get information on a specific command, type ''!help <command name>'.";
        room.sendAnnouncement(
            commandString,
            player.id,
            infoColor,
            'bold',
            HaxNotification.CHAT
        );
    } else if (msgArray.length >= 1) {
        var commandName = getCommand(msgArray[0].toLowerCase());
        if (commandName != false && commands[commandName].desc != false)
            room.sendAnnouncement(
                `\'${commandName}\' command :\n${commands[commandName].desc}`,
                player.id,
                infoColor,
                'bold',
                HaxNotification.CHAT
            );
        else
            room.sendAnnouncement(
                `The command you tried to get information on does not exist. To check all available commands, type \'!help\'`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
    }
}

function globalStatsCommand(player, message) {
    var stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    var statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        statsString,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function renameCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (localStorage.getItem(authArray[player.id][0])) {
        var stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
        if (msgArray.length == 0) {
            stats.playerName = player.name;
        } else {
            stats.playerName = msgArray.join(' ');
        }
        localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
        room.sendAnnouncement(
            `You successfully renamed yourself ${stats.playerName} !`,
            player.id,
            successColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            `You haven't played a game in this room yet !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function statsLeaderboardCommand(player, message) {
    var key = message.split(/ +/)[0].substring(1).toLowerCase();
    printRankings(key, player.id);
}

function afkCommand(player, message) {
    if (AFKSet.has(player.id)) {
        if (AFKMinSet.has(player.id)) {
            room.sendAnnouncement(
                `There is a minimum of ${minAFKDuration} minute of AFK time. Don't abuse the command !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            AFKSet.delete(player.id);
            room.sendAnnouncement(
                `🌅 ${player.name} is not AFK anymore !`,
                null,
                announcementColor,
                'bold',
                null
            );
            updateTeams();
            handlePlayersJoin();
        }
    } else {
        if (AFKCooldownSet.has(player.id)) {
            room.sendAnnouncement(
                `You can only go AFK every ${AFKCooldown} minutes. Don't abuse the command !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
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
                    minAFKDuration * 60 * 1000,
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
            room.sendAnnouncement(
                `😴 ${player.name} is now AFK !`,
                null,
                announcementColor,
                'bold',
                null
            );
            updateTeams();
            handlePlayersLeave();
        }
    }
}

function afkListCommand(player, message) {
    if (AFKSet.size == 0) {
        room.sendAnnouncement(
            "😴 There's nobody in the AFK list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return;
    }
    var cstm = '😴 AFK list : ';
    AFKSet.forEach((_, value) => {
        var p = room.getPlayer(value);
        if (p != null) cstm += p.name + `, `;
    });
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(cstm, player.id, announcementColor, 'bold', null);
}

function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        masterList = localStorage.getItem("master_list") != null ? JSON.parse(localStorage.getItem("master_list")) : masterList;
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            localStorage.setItem("master_list", JSON.stringify(masterList));
            room.sendAnnouncement(
                `${player.name} is now a room master !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `You are a master already !`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* ADMIN COMMANDS */

function restartCommand(player, message) {
    cancelGameVariable = true;
    instantRestart();
}

function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '✔️ Equipos intercambiados !',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `Please stop the game before swapping.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    var msgArray = message.split(/ +/);
    var reasonString = `Equipo kickeado por ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function chooseField() {
    console.log("choosing field");
    var newMap = chooseMap();
    console.log(newMap);
    if (newMap != null) {
        console.log("tiene q parar la cancha");
        room.stopGame();
        gameState = State.STOP
        setTimeout(() => {
            console.log("iniciar sala");
            room.startGame();
        }, 3000);
        gameState = State.PLAY
        stadiumCommand(emptyPlayer, newMap);
    }
}

function chooseMap() {
    if (playersAll.length == 1) {
        if (currentMap != "training") {
            return "!training";
        }
        return null;
    } else if (playersAll.length < 5) {
        if (currentMap != "v2") {
            return "!v2";
        }
        return null;
    } else if (playersAll.length <= 6) {
        if (currentMap != "v3") {
            console.log("v3");
            return "!v3";
        }
        return null;
    } else if (playersAll.length <= 10) {
        if (currentMap != "v4") {

            return "!v4";
        }
        return null;
    } else if (playersAll.length <= 12) {
        if (currentMap != "v6") {

            return "!v6";
        }
        return null;
    } else if (playersAll.length <= 14) {
        if (currentMap != "v7") {

            return "!v7";
        }
        return null;

    } else if (playersAll.length <= 18) {
        if (currentMap != "v10") {

            return "!v10";
        }
        return null;
    }
    return null;
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

function getBgColor() {
    var hour = new Date().getHours();
    //la dif entre hora actual y mediodia se lo resto a mediodia
    if (hour > 12) {
        hour = 12 - (hour - 12);
    }
    return hslToHex(75, 8, hour + 10).toString(16);
}

function stadiumCommand(player, message) {
    var msgArray = message.split(/ +/);
    console.log("mesage dentro de comando " + message);
    if (gameState == State.STOP) {
        if (['!v2'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v2Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v2';
        } else if (['!v3'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v3Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v3';
        } else if (['!v4'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v4Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v4';
        } else if (['!v6'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v6Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v6';
        } else if (['!v7'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v7Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v7';
        } else if (['!v10'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(v10Map.replace("(bgcolor)", getBgColor()));
            currentMap = 'v10';
        } else if (['!training'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(trainingMap);
            currentMap = 'training';
        } else {
            room.sendAnnouncement(
                `Estadio no existe!`,
                null,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }

    } else {
        room.sendAnnouncement(
            `Please stop the game before using this command.`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerMute = room.getPlayer(parseInt(msgArray[0]));
                var minutesMute = muteDuration;
                if (msgArray.length > 1 && parseInt(msgArray[1]) > 0) {
                    minutesMute = parseInt(msgArray[1]);
                }
                if (!playerMute.admin) {
                    var muteObj = new MutePlayer(playerMute.name, playerMute.id, authArray[playerMute.id][0]);
                    muteObj.setDuration(minutesMute);
                    room.sendAnnouncement(
                        `${playerMute.name} has been muted for ${minutesMute} minutes.`,
                        null,
                        announcementColor,
                        'bold',
                        null
                    );
                } else {
                    room.sendAnnouncement(
                        `You can't mute an admin.`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help mute" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help mute" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help mute" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function unmuteCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerUnmute = room.getPlayer(parseInt(msgArray[0]));
                if (muteArray.getByPlayerId(playerUnmute.id) != null) {
                    var muteObj = muteArray.getByPlayerId(playerUnmute.id);
                    muteObj.remove()
                    room.sendAnnouncement(
                        `${playerUnmute.name} has been unmuted !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `This player isn't muted !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help unmute" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) > 0 && muteArray.getById(parseInt(msgArray[0])) != null) {
            var playerUnmute = muteArray.getById(parseInt(msgArray[0]));
            playerUnmute.remove();
            room.sendAnnouncement(
                `${playerUnmute.name} has been unmuted !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help unmute" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help unmute" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function muteListCommand(player, message) {
    if (muteArray.list.length == 0) {
        room.sendAnnouncement(
            "🔇 There's nobody in the mute list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '🔇 Mute list : ';
    for (let mute of muteArray.list) {
        cstm += mute.name + `[${mute.id}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length == 0) {
        room.clearBans();
        room.sendAnnouncement(
            '✔️ Bans cleared !',
            null,
            announcementColor,
            'bold',
            null
        );
        banList = [];
    } else if (msgArray.length == 1) {
        if (parseInt(msgArray[0]) > 0) {
            var ID = parseInt(msgArray[0]);
            room.clearBan(ID);
            if (banList.length != banList.filter((p) => p[1] != ID).length) {
                room.sendAnnouncement(
                    `✔️ ${banList.filter((p) => p[1] == ID)[0][0]} has been unbanned from the room !`,
                    null,
                    announcementColor,
                    'bold',
                    null
                );
            } else {
                room.sendAnnouncement(
                    `The ID you entered doesn't have a ban associated to. Enter "!help clearbans" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
            banList = banList.filter((p) => p[1] != ID);
        } else {
            room.sendAnnouncement(
                `Invalid ID entered. Enter "!help clearbans" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help clearbans" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function banListCommand(player, message) {
    if (banList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the ban list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Ban list : ';
    for (let ban of banList) {
        cstm += ban[0] + `[${ban[1]}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function adminListCommand(player, message) {
    if (adminList.length == 0) {
        room.sendAnnouncement(
            "📢 There's nobody in the admin list.",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return false;
    }
    var cstm = '📢 Lista de admins : ';
    for (let i = 0; i < adminList.length; i++) {
        cstm += adminList[i][1] + `[${i}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        announcementColor,
        'bold',
        null
    );
}

function setAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));
                adminList = localStorage.getItem("admin_list") != null ? JSON.parse(localStorage.getItem("admin_list")) : adminList;
                masterList = localStorage.getItem("master_list") != null ? JSON.parse(localStorage.getItem("master_list")) : masterList;
                if (!adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    if (!masterList.includes(authArray[playerAdmin.id][0])) {
                        room.setPlayerAdmin(playerAdmin.id, true);
                        adminList.push([authArray[playerAdmin.id][0], playerAdmin.name]);
                        localStorage.setItem("admin_list", JSON.stringify(adminList));
                        room.sendAnnouncement(
                            `${playerAdmin.name} es ahora un admin !`,
                            null,
                            announcementColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    } else {
                        room.sendAnnouncement(
                            `Este jugador ya tiene privilegios!`,
                            player.id,
                            errorColor,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                } else {
                    room.sendAnnouncement(
                        `Este jugador es ya un admin permanente!`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `No existe jugador con este id.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help setadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help setadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function removeAdminCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray[0].length > 0 && msgArray[0][0] == '#') {
            msgArray[0] = msgArray[0].substring(1, msgArray[0].length);
            if (room.getPlayer(parseInt(msgArray[0])) != null) {
                var playerAdmin = room.getPlayer(parseInt(msgArray[0]));

                if (adminList.map((a) => a[0]).includes(authArray[playerAdmin.id][0])) {
                    room.setPlayerAdmin(playerAdmin.id, false);
                    adminList = adminList.filter((a) => a[0] != authArray[playerAdmin.id][0]);
                    room.sendAnnouncement(
                        `${playerAdmin.name} is not a room admin anymore !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.sendAnnouncement(
                        `This player isn't a permanent admin !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else {
                room.sendAnnouncement(
                    `There is no player with such ID in the room. Enter "!help removeadmin" for more information.`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        } else if (msgArray[0].length > 0 && parseInt(msgArray[0]) < adminList.length) {
            var index = parseInt(msgArray[0]);
            var playerAdmin = adminList[index];
            if (playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]) != -1) {
                // check if there is the removed admin in the room
                var indexRem = playersAll.findIndex((p) => authArray[p.id][0] == playerAdmin[0]);
                room.setPlayerAdmin(playersAll[indexRem].id, false);
            }
            adminList.splice(index);
            room.sendAnnouncement(
                `${playerAdmin[1]} is not a room admin anymore !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Incorrect format for your argument. Enter "!help removeadmin" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `Wrong number of arguments. Enter "!help removeadmin" for more information.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function passwordCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (msgArray.length > 0) {
        if (msgArray.length == 1 && msgArray[0] == '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        roomPassword = msgArray.join(' ');
        room.setPassword(roomPassword);
        room.sendAnnouncement(
            `The room password has been set to ${roomPassword}`,
            player.id,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        if (roomPassword != '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `The room password has been removed.`,
                player.id,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `The room currently does not have a password. Enter "!help password" for more information.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                    chooseField();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ First goal wins !',
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 3000);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    if (gameMode == Mode.CAPS) {
        if (players.length >= 2 * teamSize - 1) activateChooseMode();
    }

    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;
    var winString = "";
    if (winner == Team.RED) {
        winString = "✨ Gana el equipo Rojo! " + scores.red + "-" + scores.blue + "]";
        if (gameMode == Mode.CAPS) {
            streak++;
            winString += `! Current streak: ${streak}`
            room.sendAnnouncement(
                winString,
                null,
                redColor,
                'bold',
                HaxNotification.CHAT
            );
        }

    } else if (winner == Team.BLUE) {
        winString = "✨ Gana el equipo Azul! [" + scores.blue + "-" + scores.red + "]";

        if (gameMode == Mode.CAPS) {
            streak = 1;
            winString += `Current streak: ${streak}`;
        }

        room.sendAnnouncement(
            winString,
            null,
            blueColor,
            'bold',
            HaxNotification.CHAT
        );
    } else {
        streak = 0;
        room.sendAnnouncement(
            '💤 Draw limit reached !',
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;
    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `🔴 ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% 🔵`;
    let CSString = getCSString(scores);
    room.sendAnnouncement(
        `📊 Posesion: 🔴 ${possessionString}\n` +
        `📊 Zona de accion: 🔴 ${actionString}\n` +
        `${CSString}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.NONE
    );
    updateStats();
    room.sendAnnouncement("El partido fue grabado y enviado a discord: " + `${getDate()}-${roomNumber + 1}.hbr2`, null, infoColor, 'bold');
}

/* CHOOSING FUNCTIONS */

function activateChooseMode() {
    chooseMode = true;
    slowMode = chooseModeSlowMode;
    room.sendAnnouncement(
        `🐢 Slow mode changed to choose mode duration of: ${chooseModeSlowMode}s.`,
        null,
        announcementColor,
        'bold',
        HaxNotification.CHAT
    );
}

function deactivateChooseMode() {
    chooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != defaultSlowMode) {
        slowMode = defaultSlowMode;
        room.sendAnnouncement(
            `🐢 Modo lento activado para que elijan jugadores: ${defaultSlowMode} segundos.`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    redCaptainChoice = '';
    blueCaptainChoice = '';
}

function getSpecList(player) {
    if (player == null) return null;
    var cstm = 'Jugadores : ';
    for (let i = 0; i < teamSpec.length; i++) {
        cstm += teamSpec[i].name + `[${i + 1}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) {
        captain = teamRed[0];
    } else if (teamBlue.length < teamRed.length && teamBlue.length != 0) {
        captain = teamBlue[0];
    }
    if (captain != null) {
        room.sendAnnouncement(
            "Para elegir un jugador escribi su numero de la lista o escribi 'primero', 'cualquiera' o 'ultimo'.",
            captain.id,
            infoColor,
            'bold',
            HaxNotification.MENTION
        );
        timeOutCap = setTimeout(
            (player) => {
                room.sendAnnouncement(
                    `Apurate ${player.name}, quedan ${Number.parseInt(String(chooseTime / 2))} segundos para elegir!`,
                    player.id,
                    warningColor,
                    'bold',
                    HaxNotification.MENTION
                );
                timeOutCap = setTimeout(
                    (player) => {
                        room.kickPlayer(
                            player.id,
                            "No elegiste a tiempo!",
                            false
                        );
                    },
                    chooseTime * 500,
                    captain
                );
            },
            chooseTime * 1000,
            captain
        );
    }
    if (teamRed.length != 0 && teamBlue.length != 0) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
}

function chooseModeFunction(player, message) {
    var msgArray = message.split(/ +/);
    if (player.id == teamRed[0].id || player.id == teamBlue[0].id) {
        if (teamRed.length <= teamBlue.length && player.id == teamRed[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                redCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                redCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
                redCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.RED
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
        if (teamRed.length > teamBlue.length && player.id == teamBlue[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                blueCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(
                    teamSpec[getRandomInt(teamSpec.length)].id,
                    Team.BLUE
                );
                blueCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
                blueCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.BLUE
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
    }
}

function checkCaptainLeave(player) {
    if (
        (teamRed.findIndex((red) => red.id == player.id) == 0 || teamBlue.findIndex((blue) => blue.id == player.id) == 0) &&
        chooseMode
    ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
}

function slowModeFunction(player, message) {
    if (!player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
                (number) => {
                    SMSet.delete(number);
                },
                slowMode * 1000,
                player.id
            );
        } else {
            return true;
        }
    }
    return false;
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    playersAll = room.getPlayerList();
    players = playersAll.filter((p) => !AFKSet.has(p.id));
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    return (
        !!masterList.find((a) => a == authArray[player.id][0]) * Role.MASTER +
        !!adminList.find((a) => a[0] == authArray[player.id][0]) * Role.ADMIN_PERM +
        player.admin * Role.ADMIN_TEMP
    );
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team, true).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Ghost kick', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        if (pComp.inactivityTicks == 60 * ((2 / 3) * afkLimit)) {
            room.sendAnnouncement(
                `⛔ ${player.name}, si no te moves en los proximos ${Math.floor(afkLimit / 3)} segundos te vas a ir kickeado !`,
                player.id,
                warningColor,
                'bold',
                HaxNotification.MENTION
            );
            return;
        }
        if (pComp.inactivityTicks >= 60 * afkLimit) {
            pComp.inactivityTicks = 0;
            if (game.scores.time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !chooseMode ? instantRestart() : room.stopGame();
                }, 10);
            }
            room.kickPlayer(player.id, 'AFK', false);
        }
    }
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState === State.PLAY && players.length > 1) {
        for (let player of teamRed) {
            handleActivityPlayer(player);
        }
        for (let player of teamBlue) {
            handleActivityPlayer(player);
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        var playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        // player gets in red team
        var redLineupAuth = game.playerComp[player.team]?.map((p) => p.auth);
        var ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
        var playerLineup = game.playerComp[player.team][ind];
        if (playerLineup?.timeEntry?.includes(game.scores.time)) {
            // gets subbed off then in at the exact same time -> no sub
            if (game.scores.time == 0) {
                game.playerComp[player.team].splice(ind, 1);
            } else {
                playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
            }
        } else {
            playerLineup.timeExit.push(game.scores.time);
        }
    }
}

/* TEAM BALANCE FUNCTIONS */
function balanceTeams() {
    if (!chooseMode) {
        var playerDiff = Math.abs(teamRed.length - teamBlue.length);
        if (players.length == 0) {
            room.stopGame();
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
            
        } else if (players.length == 1) {
            console.log("1 player");
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!training`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
            return;
        } else if (players.length == 2) {
            console.log("2 player");
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!v2`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
            room.setPlayerTeam(players[1].id, Team.BLUE);
            return;
        } else if (playerDiff == teamSpec.length && teamSpec.length > 0) {
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < playerDiff; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < playerDiff; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
                }
            }
        } else if (playerDiff > teamSpec.length) {
            /*             if (players.length == teamSize * 2 - 1) {
                            console.log("no entiendo esta condicion");
                            teamRedStats = [];
                            teamBlueStats = [];
                        } */
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < teamSpec.length; i++) {
                    room.setPlayerTeam(
                        teamSpec[teamSpec.length - 1 - i].id,
                        Team.BLUE
                    );
                }
            } else {
                for (var i = 0; i < teamSpec.length; i++) {
                    room.setPlayerTeam(
                        teamSpec[teamSpec.length - 1 - i].id,
                        Team.RED
                    );
                }
            }
        } else if (playerDiff > 0 && playerDiff < teamSpec.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamSpec.length >= 1 && teamRed.length == teamBlue.length && teamRed.length < teamSize) {
            topButton();
        }
    }
}

function handlePlayersJoin() {
    if (chooseMode) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
    /*     if (players.length < 3) {
            instantRestart();
        } */
    balanceTeams();
    //chooseField();
}

function handlePlayersLeave() {
    /* if (gameState != State.STOP) {
        var scores = room.getScores();
    } */
    if (Mode.CAPS) {
        if (chooseMode) {
            if (teamRed.length == 0 || teamBlue.length == 0) {
                room.setPlayerTeam(teamSpec[0].id, teamRed.length == 0 ? Team.RED : Team.BLUE);
                return;
            }
            if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
                deactivateChooseMode();
                resumeGame();
                var b = teamSpec.length;
                if (teamRed.length > teamBlue.length) {
                    for (var i = 0; i < b; i++) {
                        clearTimeout(insertingTimeout);
                        insertingPlayers = true;
                        setTimeout(() => {
                            room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                        }, 5 * i);
                    }
                    insertingTimeout = setTimeout(() => {
                        insertingPlayers = false;
                    }, 5 * b);
                } else {
                    for (var i = 0; i < b; i++) {
                        clearTimeout(insertingTimeout);
                        insertingPlayers = true;
                        setTimeout(() => {
                            room.setPlayerTeam(teamSpec[0].id, Team.RED);
                        }, 5 * i);
                    }
                    insertingTimeout = setTimeout(() => {
                        insertingPlayers = false;
                    }, 5 * b);
                }
                return;
            }
            /* if (streak == 0 && gameState == State.STOP) {
                if (Math.abs(teamRed.length - teamBlue.length) == 2) {
                    var teamIn = teamRed.length > teamBlue.length ? teamRed : teamBlue;
                    room.setPlayerTeam(teamIn[teamIn.length - 1].id, Team.SPECTATORS)
                }
            } */
            if (teamRed.length == teamBlue.length && teamSpec.length < 2) {
                deactivateChooseMode();
                resumeGame();
                return;
            }

            if (capLeft) {
                choosePlayer();
            } else {
                getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
            }
        }
    }
    if(Math.abs(teamRed.length - teamBlue.length) > 1){
        balanceTeams();
    }
}

function handlePlayersTeamChange(byPlayer) {
    if (chooseMode && !removingPlayers && byPlayer == null) {
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        } else if (
            (teamRed.length == teamSize && teamBlue.length == teamSize) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2)
        ) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamRed.length <= teamBlue.length && redCaptainChoice != '') {
            if (redCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            } else if (redCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
            }
            return;
        } else if (teamBlue.length < teamRed.length && blueCaptainChoice != '') {
            if (blueCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            } else if (blueCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
            }
            return;
        } else {
            choosePlayer();
        }
    }
}

function handlePlayersStopNormal(byPlayer) {
    if (byPlayer == null && endGameVariable) {
        chooseMode = false;
        resetButton();
        clearTimeout(insertingTimeout);
        insertingPlayers = true;
        for (var i = 0; i < players.length; i++) {
            setTimeout(() => {
                randomButton();
            }, 200 * i);
        }
        insertingTimeout = setTimeout(() => {
            insertingPlayers = false;
        }, 200 * teamSize);
        startTimeout = setTimeout(() => {
            room.startGame();
        }, 3000);
    }
}

function handlePlayersStop(byPlayer) {
    if (byPlayer == null && endGameVariable) {
        if (chooseMode) {
            if (players.length == 2 * teamSize) {
                chooseMode = false;
                resetButton();
                for (var i = 0; i < teamSize; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        randomButton();
                    }, 200 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200 * teamSize);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 10);
                } else {
                    resetButton();
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 300);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    swapButton();
                }
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 200);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                    }, 500);
                }, 500);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 2000);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200);
                setTimeout(() => {
                    topButton();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 1500);
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                        setTimeout(() => {
                            randomButton();
                        }, 500);
                    }, 500);
                }, 500);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev?.position.x < current.position.x) ? prev : current
        } else {
            return (prev?.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev?.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length == 0) {
        return "🥅 No CS";
    } else if (playersCS.length == 1) {
        return `🧤🧤🧤 GG Valla invicta soy el ${playersCS[0]}! 🧤🧤🧤 \n`;
    } else {
        return `🥅 ${playersCS[0]} and ${playersCS[1]} had a CS.`;
    }
}

/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    let playerArray = [];
    for (let player of players) {
        if (player.position == null) {
            updateTeams();
        } else {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouching = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouching.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouching.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouching,
                        game.scores.time,
                        getCurrentTotalGoals(),
                        ballPosition
                    )
                );

                if (lastTouches[0]?.player?.team == playerTouching.team) {
                    if (passTimeout) {
                        passCombo++;
                        if (passCombo > 1) {
                            room.setPlayerAvatar(lastTouches[0].player.id, "X" + passCombo);
                            room.setPlayerAvatar(lastTouches[1].player.id, "X" + passCombo);
                            setTimeout((id1, id2) => {
                                room.setPlayerAvatar(id1, null);
                                room.setPlayerAvatar(id2, null);
                            }, 1000, lastTouches[0].player.id, lastTouches[1].player.id);
                        }
                        setTimeout(() => {
                            passTimeout = true;
                        }, 500);
                    }
                    passTimeout = false;
                } else {
                    if (passCombo > 0) {
                        room.setPlayerAvatar(lastTouches[0].player.id, "😅");
                        setTimeout((id) => {
                            room.setPlayerAvatar(id, null);
                        }, 500, lastTouches[0].player.id);
                    }
                    passCombo = 0;
                }


                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getCurrentTotalGoals()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getCurrentTotalGoals()
                );
            }
        }
        lastTeamTouched = playerTouching.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function calcutaleGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
        handleGK();
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

const goalPhrase = [" Golardo de  ", " Golazo de ", " Anota el jugador "]; // Goal phrases
const assistPhrase = [" Con gran asistencia de ", " Con pase del trolo de "]; // Phrases of assists
const ownGoalPhrase = [" Gol en contra del payaso ", " En contra del barrilete cosmico de "]; // Goal against phrases

function getGoalString(team) {
    var goalString = "";
    var scores = game.scores;
    var goalAttribution = getGoalAttribution(team);
    console.log(goalAttribution);
    var scorer = goalAttribution[0];
    var assist = goalAttribution[1];
    if (scorer != null) {
        if (scorer.team == team) {
            goalString = goalActions(scorer, goalString);

            if (assist != null && assist.team == team) {
                goalString = assistActions(assist, goalString);
                game.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                game.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } else {
            goalString = ownGoalActions(scorer, goalString);
            game.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `⚽ Gol del ${team == Team.RED ? 'red!' : 'blue!'}`;
        game.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;

    function ownGoalActions(scorer, goalString) {
        var fraseautogol = ownGoalPhrase[(Math.random() * ownGoalPhrase.length) | 0];
        goalString = "🤡 " + fraseautogol + scorer.name + "🤡 \n";
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
        room.setPlayerAvatar(scorer.id, "🤡");
        setTimeout(() => {
            room.setPlayerAvatar(scorer.id, null);
        }, 3000);
        return goalString;
    }

    function assistActions(goalAssist, goalString) {
        room.setPlayerAvatar(goalAssist.id, "👟");
        setTimeout(() => {
            room.setPlayerAvatar(goalAssist.id, null);
        }, 3000);
        var fraseasis = assistPhrase[(Math.random() * assistPhrase.length) | 0]
        goalString += "👟 " + fraseasis + assist.name + "👟 \n";
        return goalString;
    }

    function goalActions(scorer, string) {
        room.setPlayerAvatar(scorer.id, "⚽");
        setTimeout(() => {
            room.setPlayerAvatar(scorer.id, null);
        }, 3000);
        var frasegol = goalPhrase[(Math.random() * goalPhrase.length) | 0]
        string += "⚽ " + frasegol + scorer.name + "! ⚽ \n";

        if (ballSpeed.toPrecision(4) > 100) {
            room.setPlayerAvatar(scorer.id, "💥");
            setTimeout(() => {
                room.setPlayerAvatar(scorer.id, null);
            }, 3000);
            string += "💥💥💥 " + scorer.name + " REVENTO EL ARCO, LA PELOTA IBA A " + ballSpeed.toPrecision(4) + "km/h! 💥💥💥 \n";
        }
        return string;
    }
}

/* ROOM STATS FUNCTIONS */

function updatePlayerStats(player, team) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    stats.games++;
    if (lastWinner == team) stats.wins++;
    stats.winrate = ((100 * stats.wins) / (stats.games || 1)).toFixed(1) + `%`;
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    // falta agrgar partidos como gk
    stats.gap += getCSPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
}

function updateStats() {
    if (
        /* players.length >= 2 * teamSize &&
        (
            game.scores.time >= (5 / 6) * game.scores.timeLimit ||
            game.scores.red == game.scores.scoreLimit ||
            game.scores.blue == game.scores.scoreLimit
        ) &&
        teamRedStats.length >= teamSize && teamBlueStats.length >= teamSize */
        debugMode == false
    ) {
        for (let player of teamRedStats) {
            updatePlayerStats(player, Team.RED);
        }
        for (let player of teamBlueStats) {
            updatePlayerStats(player, Team.BLUE);
        }
    }
    room.sendAnnouncement("Estadisticas guardadas", null, infoColor, 'bold');
}

function printRankings(statKey, id = 0) {
    var leaderboard = [];
    statKey = statKey == "cs" ? "CS" : statKey;
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.length == 43)
            leaderboard.push([
                JSON.parse(localStorage.getItem(key)).playerName,
                JSON.parse(localStorage.getItem(key))[statKey],
            ]);
    }

    leaderboard.sort(function (a, b) { return b[1] - a[1]; });
    var rankingString = `${statKey.charAt(0).toUpperCase() + statKey.slice(1)}> `;
    for (let i = 0; i < 5; i++) {
        let playerName = leaderboard[i][0];
        let playerStat = leaderboard[i][1];
        if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
        rankingString += `#${i + 1} ${playerName} : ${playerStat}, `;
    }
    rankingString = rankingString.substring(0, rankingString.length - 2);
    room.sendAnnouncement(
        rankingString,
        id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

/* GET STATS FUNCTIONS */

function getGamePlayerStats(player) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    stats.gap += getCSPlayer(pComp);
    return stats;
}

function getGametimePlayer(pComp) {
    if (pComp == null) return 0;
    var timePlayer = 0;
    for (let j = 0; j < pComp.timeEntry.length; j++) {
        if (pComp.timeExit.length < j + 1) {
            timePlayer += game.scores.time - pComp.timeEntry[j];
        } else {
            timePlayer += pComp.timeExit[j] - pComp.timeEntry[j];
        }
    }
    return Math.floor(timePlayer);
}

function getGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team === pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getOwnGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team !== pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getAssistsPlayer(pComp) {
    if (pComp == null) return 0;
    var assistPlayer = 0;
    for (let goal of game.goals) {
        if (goal.assist != null) {
            if (authArray[goal.assist.id][0] == pComp.auth) {
                assistPlayer++;
            }
        }
    }
    return assistPlayer;
}

function getGKPlayer(pComp) {
    if (pComp == null) return 0;
    let GKRed = getGK(Team.RED);
    if (pComp.auth == GKRed?.auth) {
        return Team.RED;
    }
    let GKBlue = getGK(Team.BLUE);
    if (pComp.auth == GKBlue?.auth) {
        return Team.BLUE;
    }
    return Team.SPECTATORS;
}

function getCSPlayer(pComp) {
    if (pComp == null || game.scores == null) return 0;
    if (getGKPlayer(pComp) == Team.RED && game.scores.blue == 0) {
        return 1;
    } else if (getGKPlayer(pComp) == Team.BLUE && game.scores.red == 0) {
        return 1;
    }
    return 0;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        let playerCS = getGK(team)?.player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* PRINT FUNCTIONS */

function printPlayerStats(stats) {
    let statsString = '';
    for (let [key, value] of Object.entries(stats)) {
        if (key == 'playerName') statsString += `${value}: `;
        else {
            if (key == 'playtime') value = getTimeStats(value);
            let reCamelCase = /([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g;
            let statName = key.replaceAll(reCamelCase, ' $1').trim();
            statsString += `${statName.charAt(0).toUpperCase() + statName.slice(1)}: ${value}, `;
        }
    }
    statsString = statsString.substring(0, statsString.length - 2);
    return statsString;
}

/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    var fieldGametimeRed = {
        name: '🔴        **Stats Rojo**',
        value: '⌛ __**Teimpo de juego:**__\n\n',
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **Stats Azul**',
        value: '⌛ __**Tiempo de juego:**__\n\n',
        inline: true,
    };
    var redTeamTimes = game.playerComp[0].map((p) => [p.player, getGametimePlayer(p)]);
    var blueTeamTimes = game.playerComp[1].map((p) => [p.player, getGametimePlayer(p)]);

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += `\n${blueTeamTimes.length - redTeamTimes.length > 0 ? '\n'.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += `\n${redTeamTimes.length - blueTeamTimes.length > 0 ? '\n'.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    var fieldReportRed = {
        name: '🔴        **Stats Rojo**',
        value: '📊 __**Stats jugador:**__\n\n',
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **Stats Azul**',
        value: '📊 __**Stats jugador:**__\n\n',
        inline: true,
    };
    var goals = [[], []];
    for (let i = 0; i < game.goals.length; i++) {
        goals[game.goals[i].team - 1].push([game.goals[i].striker, game.goals[i].assist]);
    }
    var redActions = actionReportCountTeam(goals, Team.RED);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != Team.RED ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }
    var blueActions = actionReportCountTeam(goals, Team.BLUE);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != Team.BLUE ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}\n`;
        }
    }

    fieldReportRed.value += `\n${blueActions.length - redActions.length > 0 ? '\n'.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `\n${redActions.length - blueActions.length > 0 ? '\n'.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    var logChannel = gameWebhook;
    var fields = [
        {
            name: '🔴        **Stats de Rojo**',
            value: '=====================\n\n',
            inline: true,
        },
        {
            name: '🔵       **Stats de Azul**',
            value: '=====================\n\n',
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](game);
        fields[0].value += fieldsReport[0].value + '\n\n';
        fields[1].value += fieldsReport[1].value + '\n\n';
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (game.scores.red > game.scores.blue) * 1 + (game.scores.blue > game.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `📝 Reporte del partido #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win == 1 ? '**Rojo** ' : 'Rojo ') + game.scores.red +
                    ' - ' +
                    game.scores.blue + (win == 2 ? ' **Azul**' : ' Azul') +
                    '\n```c\nPosesion: ' + possRString + '% - ' + possBString + '%' +
                    '\nZona de accion: ' + zoneRString + '% - ' + zoneBString + '%\n```\n\n',
                color: 9567999,
                fields: fields,
                footer: {
                    text: `Recording: ${getRecordingName(game)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };
    if (logChannel != '') {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
        room.sendAnnouncement("El partido fue grabado y enviado a discord: " + getRecordingName(game), null, 0xFDC43A, 'bold');
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

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


    authArray[player.id] = [player.auth, player.conn];
    /*     if (roomWebhook != '') {
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] ➡️ JOIN (${playersAll.length + 1}/${maxPlayers})\n**` +
                        `${player.name}** [${authArray[player.id][0]}] {${authArray[player.id][1]}}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
        } */

    checkSameAuth();
    updateTeams();
    //updateAdmins();

    masterList = localStorage.getItem("master_list") != null ? JSON.parse(localStorage.getItem("master_list")) : masterList;
    adminList = localStorage.getItem("admin_list") != null ? JSON.parse(localStorage.getItem("admin_list")) : adminList;

    if (masterList.findIndex((auth) => auth == player.auth) != -1) {
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.map((a) => a[0]).findIndex((auth) => auth == player.auth) != -1) {
        room.sendAnnouncement(
            `Admin ${player.name} has connected to the room !`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(player.id, true);
    }


    handlePlayersJoin();

    function checkSameAuth() {
        var sameAuthCheck = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
        if (sameAuthCheck.length > 0 && !debugMode) {
            var oldPlayerArray = playersAll.filter((p) => p.id != player.id && authArray[p.id][0] == player.auth);
            for (let oldPlayer of oldPlayerArray) {
                ghostKickHandle(oldPlayer, player);
            }
        }
    }
};

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    if (AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(
            `${changedPlayer.name} esta AFK !`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
    updateTeams();
    if (gameState != State.STOP) {
        changedPlayer.team == Team.RED ? teamRedStats.push(changedPlayer) : teamBlueStats.push(changedPlayer);
    }
    handleActivityPlayerTeamChange(changedPlayer);
    if (Mode.CAPS) {
        handlePlayersTeamChange(byPlayer);
    }
};

room.onPlayerLeave = function (player) {
    //handleLineupChangeLeave(player);
    if (Mode.CAPS) {
        checkCaptainLeave(player);
    }

    updateTeams();
    //updateAdmins();
    handlePlayersLeave();
    //chooseField();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if (roomWebhook != '') {
        var stringContent = `[${getDate()}] ⛔ ${ban ? 'BAN' : 'KICK'} (${playersAll.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} was ${ban ? 'banned' : 'kicked'}` +
            `${byPlayer != null ? ' by **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.ADMIN_TEMP)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }
    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_TEMP) {
        room.sendAnnouncement(
            'You are not allowed to kick/ban players !',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }
    if (ban) banList.push([kickedPlayer.name, kickedPlayer.id]);
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    if (gameState !== State.STOP && player.team != Team.SPECTATORS) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
    let msgArray = message.split(/ +/);
    if (!hideClaimMessage || msgArray[0] != '!claim') {
        if (roomWebhook != '' && false)
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}] 💬 CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
    }
    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) commands[command].function(player, message);
        else
            room.sendAnnouncement(
                `El comando que ingresaste no existe para vos.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }

    //dejar bonito
    var role = getRole(player);
    if (role > Role.PLAYER) {

        if (role == Role.MASTER) {
            room.sendAnnouncement("「👨‍💻」" + player.name + ": " + message + "", null, 0x00FF00, 'bold');
            return false;
        } else if (role == Role.DONATOR) {
            room.sendAnnouncement("「💸」" + player.name + ": " + message + "", null, 0xEAC274, 'bold');
            return false;
        } else if (role == Role.VIP) {
            room.sendAnnouncement("「👑」" + player.name + ": " + message + "", null, 0xEAC274, 'bold');
            return false;
        }
        else {
            room.sendAnnouncement("「🟨」" + player.name + ": " + message + "", null, 0xEAC274, 'bold');
            return false;
        }
    }

    if (player.team == Team.BLUE) {
        room.sendAnnouncement("「🟦」" + player.name + ": " + message, null, 0x89cff0);
    } else if (player.team == Team.RED) {
        room.sendAnnouncement("「🟥」" + player.name + ": " + message, null, 0xe38d7d);
    } else {
        room.sendAnnouncement("「⬜」" + player.name + ": " + message, null, 0xFFFFFF);
    }


    if (chooseMode && teamRed.length * teamBlue.length != 0) {
        var choosingMessageCheck = chooseModeFunction(player, message);
        if (choosingMessageCheck) return false;
    }
    if (slowMode > 0) {
        var filter = slowModeFunction(player, message);
        if (filter) return false;
    }
    if (!player.admin && muteArray.getByAuth(authArray[player.id][0]) != null) {
        room.sendAnnouncement(
            `Estas muteado pa!`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }
    return false;
};

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getCurrentTotalGoals(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getCurrentTotalGoals()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getCurrentTotalGoals()
            );
        }
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameVariable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    teamRedStats = [];
    teamBlueStats = [];
    if (teamRed.length == teamSize && teamBlue.length == teamSize) {
        for (var i = 0; i < teamSize; i++) {
            teamRedStats.push(teamRed[i]);
            teamBlueStats.push(teamBlue[i]);
        }
    }
    calculateStadiumVariables();
};

room.onGameStop = function (byPlayer) {
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (!cancelGameVariable && game.playerComp[0].length + game.playerComp[1].length > 0
        && (game.scores.timeLimit != 0 && game.scores.red != game.scores.blue || endGameVariable)) {
        fetchSummaryEmbed(game);
        if (fetchRecordingVariable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    cancelGameVariable = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    //esto
    if (gameMode == Mode.CAPS) {
        handlePlayersStop(byPlayer);
    } else if (gameMode = Mode.NORMAL) {
        handlePlayersStopNormal(byPlayer);
    }

    handleActivityStop();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game paused by ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game paused !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);
    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `Game unpaused by ${byPlayer.name} !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `Game unpaused !`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    if (Mode.CAPS) {
        if (
            (teamRed.length == teamSize && teamBlue.length == teamSize && chooseMode) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2 && chooseMode)
        ) {
            deactivateChooseMode();
        }
    }
};

room.onTeamGoal = function (team) {
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    for (let player of teamRed) {
        var playerComp = getPlayerComp(player);
        team == Team.RED ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    for (let player of teamBlue) {
        var playerComp = getPlayerComp(player);
        team == Team.BLUE ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );
    /* if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${goalString}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    } */
    if ((Math.abs(scores.red - scores.blue) >= 5 || scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
            chooseField();
        }, 1000);
    }
};

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

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
    if (gameMode == Mode.NORMAL) {
        balanceTeams();

        const scores = room.getScores();
        game.scores = scores;
        if (Math.abs(scores.red - scores.blue) > 1) //primer gol
            //o un timeout para ver cuando resetear
            console.log("dif de mas de 1 gol");
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
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nmasterPassword : ${masterPassword}`);
    if (roomWebhook != '' && !debugMode) {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] 🔗 LINK ${url}\nmasterPassword : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `It is not allowed to change the kickrate limit. It must stay at "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    calcutaleGameStats();
    handleActivity();
};