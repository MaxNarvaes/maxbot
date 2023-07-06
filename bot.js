
const permaBanned = ["quiero sexo argentino", "Quiero sexo argentino"];
/* COMMANDS */
/* VARIABLES */
var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 20;
var maxAFKDuration = 10;
var AFKCooldown = 5;

var goalDictionary = {};
/* ROOM */
const roomNumber = 2;
const roomName = "JUEGAN TODOS CON ♿ (" + (roomNumber + 1) + ")";
const maxPlayers = 19;
const roomPublic = true;
const geo = [{ "lat": -22.9201, "lon": -43.3307, "code": "ar" }];
const roomPassword = '';

const excludedRows = ["player_name", "view_mode", "geo", "avatar", "player_auth_key", "extrapolation", "_grecaptcha", "chat_height"];
//const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, geo: geo[0] });

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
}

var room = HBInit(gameConfig);

const scoreLimitClassic = 5;
const scoreLimitBig = 5;
const timeLimitClassic = 10;
const timeLimitBig = 10;

//variables globales q agregue
var commandTimeout = 0;
var afkCounter = 0;
var voiceChatLink = ['https://discord.com/channels/1122229514647371846/1122229516547412171', 'https://discord.com/channels/1122229514647371846/1122229516547412172', ''];

var initializing = false;

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

var adminPassword = 10000 + getRandomInt(90000);
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const UNIFORME_OFICIAL = 0;

const playerRadius = 15;
var ballRadius = 10;
const triggerDistance = playerRadius + ballRadius + 0.01;
var trainingMap = '{"name":"va t [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":465,"height":230,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":150,"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"kickOffReset":"full","bg":{"color":"1C1126","height":200,"width":400},"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"vertexes":[{"x":-401,"y":-200,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":401,"y":-200,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":-401,"y":200,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":401,"y":200,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":-400,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":-400,"y":201,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":400,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":400,"y":201,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":-400,"y":-201,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":-400,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":10,"vis":true},{"x":400,"y":-201,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":400,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"color":"6F5580","bias":-10,"vis":true},{"x":-436,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":-400,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":-436,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":-400,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":-435,"y":-71,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":-435,"y":71,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":435,"y":-71,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":435,"y":71,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":436,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":400,"y":-70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"color":"a3a3a3","curve":0},{"x":436,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":400,"y":70,"bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"color":"a3a3a3","curve":0},{"x":-400,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"ff6666"},{"x":-400,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"ff6666"},{"x":400,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"6666ff"},{"x":400,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"6666ff"},{"x":-200,"y":-198.5,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":-200,"y":198.5,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":200,"y":-198.5,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":200,"y":198.5,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":200,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"291938"},{"x":200,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"291938"},{"x":-200,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"291938"},{"x":-200,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"291938"},{"x":-398.5,"y":-100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":-339,"y":-100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":-398.5,"y":100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":-339,"y":100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":-340,"y":-101,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":-340,"y":101,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":340,"y":-101,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":340,"y":101,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":339,"y":-100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":398.5,"y":-100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":339,"y":100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":398.5,"y":100,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"291938"},{"x":-270,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"291938"},{"x":-270,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"291938"},{"x":270,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"291938"},{"x":270,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"291938"},{"x":0,"y":-230,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"1B2124"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"1B2124"},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"1B2124","vis":false},{"x":0,"y":230,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"1B2124","vis":false},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"0A1524"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"0A1524"},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"0A1524"},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO"],"color":"0A1524"},{"x":-402,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":-402,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":-398,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":-398,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":398,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":398,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":402,"y":-70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":402,"y":70,"cMask":["wall"],"cGroup":["wall"],"color":"1C1126","curve":0},{"x":0,"y":-200,"cMask":["wall"],"cGroup":["wall"],"color":"6F5580"},{"x":0,"y":-80,"cMask":["wall"],"cGroup":["wall"],"color":"6F5580"},{"x":0,"y":80,"cMask":["wall"],"cGroup":["wall"],"color":"6F5580"},{"x":0,"y":200,"cMask":["wall"],"cGroup":["wall"],"color":"6F5580"},{"x":0,"y":-50,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"780E39"},{"x":0,"y":50,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"780E39"},{"x":0,"y":-52,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0,"y":52,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0,"y":-54,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0,"y":54,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0,"y":-62.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-48.5,"y":46.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-1,"y":-62.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":48,"y":47.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":2.5,"y":-62,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-46,"y":47.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-1.5,"y":-64,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-50,"y":45.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-3.5,"y":-61.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":45.5,"y":48.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":1,"y":-63.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":50,"y":46.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0,"y":-52.5,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":-0.5,"y":-51,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":-0.5,"y":-68,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":9.5,"y":-42.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-10.5,"y":-42.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":50,"y":46,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":45,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-45.527376929058995,"y":46.63406015516073,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-49.70028774414059,"y":43.325420487488714,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-44.648630360941844,"y":45.8880134298197,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-47.42027183330078,"y":44.65228094459981,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-28,"y":-2,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":26,"y":-2,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":-28,"y":0,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":26,"y":0,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":-28,"y":2,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":26,"y":2,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":-0.12657136687531934,"y":49.99983979663423,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"780E39"},{"x":-0.1316342215503321,"y":51.999833388499596,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-0.13669707622534488,"y":53.999826980364965,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-0.15821420859414917,"y":62.499799745792785,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":49.613760434956646,"y":-47.8783473047705,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0.8417825873385354,"y":62.502331173130294,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-48.88466946497963,"y":-49.61883129979994,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-2.6569404847571074,"y":61.99347277948267,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":47.11629987246244,"y":-48.88467266904695,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":1.337983844298618,"y":64.00359208069807,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":51.11122420151816,"y":-46.87455336783155,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":3.3443060045077533,"y":61.50866294554137,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-46.382146047810416,"y":-50.61249952738887,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-1.16074243186434,"y":63.49726511438796,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-50.88719448418251,"y":-48.62389735854228,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-0.1328999352190853,"y":52.49983178646594,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":0.37089560375351655,"y":51.00110230623566,"cMask":["wall"],"cGroup":["wall"],"curve":0,"color":"780E39"},{"x":0.32786133901590797,"y":68.0010478370913,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-9.607555223204525,"y":42.475815267432786,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":10.392380695449166,"y":42.52644381418291,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-46.88214444577676,"y":-50.61376524105762,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":46.64148625204171,"y":-48.01993200969935,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":51.09170873671964,"y":-45.918729729786556,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":48.52935836125028,"y":-46.0333674229848,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":47.831349641724486,"y":-47.071591299104476,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":0.5,"y":48.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-12,"y":-92,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":7.5,"y":-56,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":11,"y":-95.5,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":-9,"y":-56,"cMask":["wall"],"cGroup":["wall"],"color":"780E39"},{"x":40,"y":-40.5,"cMask":["wall"],"cGroup":["wall"]},{"x":0.5,"y":48.5,"cMask":["wall"],"cGroup":["wall"]},{"x":48,"y":-32,"cMask":["wall"],"cGroup":["wall"]},{"x":-3,"y":78,"cMask":["wall"],"cGroup":["wall"]},{"x":-48,"y":-35.5,"cMask":["wall"],"cGroup":["wall"]},{"x":4.5,"y":80,"cMask":["wall"],"cGroup":["wall"]},{"x":-39,"y":-41,"cMask":["wall"],"cGroup":["wall"]},{"x":-49.78200501273231,"y":50.11852255317399,"cMask":["wall"],"cGroup":["wall"]},{"x":-40.010226965562275,"y":43.75359099055319,"cMask":["wall"],"cGroup":["wall"]},{"x":-50.799637310494155,"y":38.50110354090832,"cMask":["wall"],"cGroup":["wall"]},{"x":49.411695510547716,"y":51.34051870014655,"cMask":["wall"],"cGroup":["wall"]},{"x":50.82220411173958,"y":39.76422976603798,"cMask":["wall"],"cGroup":["wall"]},{"x":39.86109167513048,"y":44.64828690657323,"cMask":["wall"],"cGroup":["wall"]},{"x":-50.280621254146425,"y":-52.78330665742508,"cMask":["wall"],"cGroup":["wall"]},{"x":-51.368917533454834,"y":-41.17229416029787,"cMask":["wall"],"cGroup":["wall"]},{"x":-40.547749652826404,"y":-46.359039353504855,"cMask":["wall"],"cGroup":["wall"]},{"x":50.4699202348288,"y":-51.46628977968299,"cMask":["wall"],"cGroup":["wall"]},{"x":40.9400241488806,"y":-44.74460244754455,"cMask":["wall"],"cGroup":["wall"]},{"x":51.91616384038706,"y":-39.894410959310626,"cMask":["wall"],"cGroup":["wall"]},{"x":-12,"y":-92,"cMask":["wall"],"cGroup":["wall"]},{"x":7.5,"y":-56,"cMask":["wall"],"cGroup":["wall"]},{"x":11,"y":-95.5,"cMask":["wall"],"cGroup":["wall"]},{"x":-9,"y":-56,"cMask":["wall"],"cGroup":["wall"]},{"x":0,"y":-81,"cMask":["wall"],"cGroup":["wall"],"color":"291938"},{"x":0,"y":81,"cMask":["wall"],"cGroup":["wall"],"color":"291938"}],"segments":[{"v0":0,"v1":1,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"y":-200},{"v0":2,"v1":3,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"y":200},{"v0":4,"v1":5,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"x":-400},{"v0":6,"v1":7,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"x":400},{"v0":8,"v1":9,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10},{"v0":10,"v1":11,"vis":true,"color":"6F5580","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10},{"v0":12,"v1":13,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10},{"v0":14,"v1":15,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10,"y":70},{"v0":16,"v1":17,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10},{"v0":18,"v1":19,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"x":435},{"v0":20,"v1":21,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":10},{"v0":22,"v1":23,"curve":0,"color":"a3a3a3","bCoef":1,"cMask":["c1"],"cGroup":["c0"],"bias":-10,"y":70},{"v0":24,"v1":25,"color":"ff6666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":26,"v1":27,"color":"6666ff","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":28,"v1":29,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":-200},{"v0":30,"v1":31,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":200},{"v0":32,"v1":33,"curve":-120,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":200},{"v0":34,"v1":35,"curve":120,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":-200},{"v0":36,"v1":37,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"y":-100},{"v0":38,"v1":39,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"y":100},{"v0":40,"v1":41,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"]},{"v0":42,"v1":43,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":340},{"v0":44,"v1":45,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"y":-100},{"v0":46,"v1":47,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"y":100},{"v0":48,"v1":49,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":-270},{"v0":49,"v1":48,"curve":180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":-270},{"v0":48,"v1":49,"curve":180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":-270},{"v0":50,"v1":51,"curve":0,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":270},{"v0":51,"v1":50,"curve":180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":270},{"v0":50,"v1":51,"curve":180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":270},{"v0":52,"v1":53,"vis":false,"color":"1B2124","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":54,"v1":55,"vis":false,"color":"1B2124","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":56,"v1":57,"curve":180,"vis":false,"color":"0A1524","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":58,"v1":59,"curve":180,"vis":false,"color":"0A1524","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":60,"v1":61,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"],"x":-402},{"v0":62,"v1":63,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"],"x":-398},{"v0":64,"v1":65,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"],"x":398},{"v0":66,"v1":67,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"],"x":402},{"v0":68,"v1":69,"vis":true,"color":"6F5580","cMask":["wall"],"cGroup":["wall"]},{"v0":70,"v1":71,"vis":true,"color":"6F5580","cMask":["wall"],"cGroup":["wall"]},{"v0":72,"v1":73,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":73,"v1":72,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":74,"v1":75,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":75,"v1":74,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":76,"v1":77,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":77,"v1":76,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":78,"v1":79,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":80,"v1":81,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":82,"v1":83,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":84,"v1":85,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":86,"v1":87,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":88,"v1":89,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":90,"v1":91,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":90,"v1":91,"curve":-180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":91,"v1":90,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":92,"v1":93,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":92,"v1":94,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":101,"v1":102,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"y":-2},{"v0":103,"v1":104,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"y":0},{"v0":105,"v1":106,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"y":2},{"v0":110,"v1":111,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":112,"v1":113,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":114,"v1":115,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":116,"v1":117,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":118,"v1":119,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":120,"v1":121,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":122,"v1":123,"curve":180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":122,"v1":123,"curve":-180,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":123,"v1":122,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"],"x":80},{"v0":124,"v1":125,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":124,"v1":126,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":128,"v1":129,"curve":0,"color":"780E39","cMask":["wall"],"cGroup":["wall"]},{"v0":137,"v1":138,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":139,"v1":140,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":141,"v1":142,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":143,"v1":138,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":145,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":144,"v1":146,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":148,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":147,"v1":149,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":152,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":153,"v1":154,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":153,"v1":155,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":158,"v1":159,"curve":0,"color":"1C1126","cMask":["wall"],"cGroup":["wall"]},{"v0":160,"v1":161,"curve":-180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":0},{"v0":161,"v1":160,"curve":-180,"color":"291938","cMask":["wall"],"cGroup":["wall"],"x":0}],"goals":[],"discs":[{"radius":5,"invMass":0,"pos":[-400,-70],"color":"a3a3a3","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":5,"invMass":0,"pos":[-400,70],"color":"a3a3a3","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":5,"invMass":0,"pos":[400,-70],"color":"a3a3a3","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":5,"invMass":0,"pos":[400,70],"color":"a3a3a3","bCoef":1,"cMask":["all"],"cGroup":["all"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"780E39","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"780E39","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"780E39","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"780E39","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"780E39","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"bebebe","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"bebebe","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"bebebe","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"bebebe","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]},{"radius":5.8,"invMass":1.5,"pos":[0,0],"color":"bebebe","bCoef":0.443,"cMask":["red","blue","wall","c0"],"cGroup":["ball","kick","c1"]}],"planes":[{"normal":[0,1],"dist":-230,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,1],"dist":-230,"canvas_rect":[-796,-230,797,230],"a":[-796,-230],"b":[797,-230]}}},{"normal":[0,-1],"dist":-230,"cMask":["red","blue"],"_data":{"extremes":{"normal":[0,-1],"dist":-230,"canvas_rect":[-796,-230,797,230],"a":[-796,230],"b":[797,230]}}}],"joints":[],"playerPhysics":{"radius":15,"bCoef":0,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.11,"gravity":[0,0],"kickingAcceleration":0.083,"kickingDamping":0.96,"kickStrength":4.3,"kickback":0},"ballPhysics":{"radius":1.0e-67,"bCoef":1.0e-67,"cMask":["all"],"damping":1.0e-67,"invMass":1.0e-67,"gravity":[0,1.0e-67],"color":"bebebe","cGroup":["ball"]}}';
var v2Map = '{"name":"MORTAL KOMBAT 1V1 Navi [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":420,"height":200,"spawnDistance":170,"bg":{"type":"none","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0,"color":"2B0000"},"vertexes":[{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":-2,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea"},{"x":370,"y":-169.9999999999999,"trait":"ballArea"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"]},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"]},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea"},{"x":0,"y":-75,"cMask":["wall"],"curve":-180},{"x":0,"y":-75,"cMask":["wall"],"curve":180},{"x":-370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF0000"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"cMask":["wall"],"trait":"ballArea","color":"FF0000"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":-372.8571428571429,"y":-64,"trait":"goalNet"},{"x":-392.8571428571429,"y":-44,"trait":"goalNet"},{"x":-392.8571428571429,"y":44,"trait":"goalNet"},{"x":-372.8571428571429,"y":64,"trait":"goalNet"},{"x":375.7142857142857,"y":-63.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":-43.285714285714285,"trait":"goalNet"},{"x":395.7142857142857,"y":44.714285714285715,"trait":"goalNet"},{"x":375.7142857142857,"y":64.71428571428572,"trait":"goalNet"},{"x":-370,"y":-169.9999999999999,"trait":"ballArea","color":"FF0000"},{"x":370,"y":-169.9999999999999,"trait":"ballArea","color":"FF0000"},{"x":-369.9999999999999,"y":-69.28571428571426,"cMask":["wall"],"color":"FF0000"},{"x":-370,"y":68.57142857142864,"trait":"ballArea","color":"FF0000"},{"x":-369.9999999999999,"y":169.28571428571428,"cMask":["wall"],"color":"FF0000"},{"x":370.71428571428555,"y":68.57142857142864,"trait":"ballArea","color":"FF0000"},{"x":370.71428571428567,"y":169.28571428571428,"cMask":["wall"],"color":"FF0000"},{"x":369.9999999999999,"y":-169.28571428571416,"trait":"ballArea","color":"FF0000"},{"x":370,"y":-68.57142857142853,"cMask":["wall"],"color":"FF0000"},{"x":-38.56108597285067,"y":63.99547511312217,"cMask":["wall"],"color":"FFAA00"},{"x":-26.03167420814479,"y":49.39819004524885,"cMask":["wall"],"color":"FFAA00"},{"x":-34.41176470588235,"y":42.35294117647058,"cMask":["wall"],"color":"FFAA00"},{"x":-34.99999999999999,"y":35.29411764705882,"cMask":["wall"],"color":"FFAA00"},{"x":-47.941176470588225,"y":44.11764705882352,"cMask":["wall"],"color":"FFAA00"},{"x":-39.99999999999999,"y":23.235294117647058,"cMask":["wall"],"color":"FFAA00"},{"x":-44.271493212669675,"y":16.14932126696833,"cMask":["wall"],"color":"FFAA00"},{"x":-55.73755656108597,"y":0.0497737556561102,"cMask":["wall"],"color":"FFAA00"},{"x":-63.93212669683257,"y":1.5837104072398194,"cMask":["wall"],"color":"FFAA00"},{"x":-55.294117647058826,"y":-22.058823529411782,"cMask":["wall"],"color":"FFAA00"},{"x":-55.366515837104075,"y":-33.31674208144796,"cMask":["wall"],"color":"FFAA00"},{"x":-53.52941176470588,"y":-37.78280542986426,"cMask":["wall"],"color":"FFAA00"},{"x":-55.076923076923066,"y":-47.28959276018099,"cMask":["wall"],"color":"FFAA00"},{"x":-47.69295410471881,"y":-41.051497522085754,"cMask":["wall"],"color":"FFAA00"},{"x":-27.481146304675715,"y":-61.57875457875458,"cMask":["wall"],"color":"FFAA00"},{"x":-13.39862098685628,"y":-64.97478991596638,"cMask":["wall"],"color":"FFAA00"},{"x":-13.01917690152984,"y":-72.79271708683473,"cMask":["wall"],"color":"FFAA00"},{"x":6.470588235294117,"y":-61.17647058823529,"cMask":["wall"],"color":"FFAA00"},{"x":17.352941176470587,"y":-57.35294117647058,"cMask":["wall"],"color":"FFAA00"},{"x":18.235294117647058,"y":-65,"cMask":["wall"],"color":"FFAA00"},{"x":25.294117647058822,"y":-52.94117647058823,"cMask":["wall"],"color":"FFAA00"},{"x":41.17647058823529,"y":-42.94117647058823,"cMask":["wall"],"color":"FFAA00"},{"x":43.37535014005602,"y":-36.4873949579832,"cMask":["wall"],"color":"FFAA00"},{"x":34.11764705882353,"y":-34.11764705882353,"cMask":["wall"],"color":"FFAA00"},{"x":56.764705882352935,"y":-20.588235294117645,"cMask":["wall"],"color":"FFAA00"},{"x":69.99999999999999,"y":-19.41176470588235,"cMask":["wall"],"color":"FFAA00"},{"x":68.23529411764706,"y":-10.588235294117647,"cMask":["wall"],"color":"FFAA00"},{"x":67.67226890756301,"y":-1.6078431372549016,"cMask":["wall"],"color":"FFAA00"},{"x":56.764705882352935,"y":-5.88235294117647,"cMask":["wall"],"color":"FFAA00"},{"x":61.764705882352935,"y":10.294117647058822,"cMask":["wall"],"color":"FFAA00"},{"x":71.40056022408963,"y":8.0812324929972,"cMask":["wall"],"color":"FFAA00"},{"x":65.30252100840335,"y":20.991596638655455,"cMask":["wall"],"color":"FFAA00"},{"x":42.94117647058823,"y":-5.294117647058823,"cMask":["wall"],"color":"FFAA00"},{"x":33.66968325791856,"y":-3.642533936651579,"cMask":["wall"],"color":"FFAA00"},{"x":1.723981900452487,"y":-25.746606334841623,"cMask":["wall"],"curve":0,"color":"FFAA00"},{"x":48.03145873734108,"y":-18.12303382891618,"cMask":["wall"],"color":"FFAA00"},{"x":39.03232062055591,"y":-15.20060331825038,"cMask":["wall"],"curve":-80,"color":"FFAA00"},{"x":43.796164619694025,"y":-19.829347123464775,"cMask":["wall"],"curve":-80,"color":"FFAA00"},{"x":24.031784571239378,"y":-32.667034543648604,"cMask":["wall"],"color":"FFAA00"},{"x":0.5882352941176463,"y":-17.941176470588236,"cMask":["wall"],"color":"FFAA00"},{"x":-8.348615498449012,"y":-15.156464327385526,"cMask":["wall"],"color":"FFAA00"},{"x":-21.010074276444975,"y":-35.85950083952305,"cMask":["wall"],"color":"FFAA00"},{"x":-26.147776183644186,"y":-9.404591104734578,"cMask":["wall"],"curve":100,"color":"FFAA00"},{"x":9.999999999999998,"y":12.941176470588234,"cMask":["wall"],"color":"FFAA00"},{"x":45.724533715925396,"y":45.566714490674315,"cMask":["wall"],"color":"FFAA00"},{"x":36.642754662840744,"y":63.27116212338595,"cMask":["wall"],"color":"FFAA00"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA00"},{"x":-22.63348416289592,"y":-18.092373910164437,"cMask":["wall"],"curve":100,"color":"FFAA00"},{"x":4.666666666666669,"y":-75.33333333333333,"cMask":["wall"],"color":"FFAA00"},{"x":-54.76923076923078,"y":-7.692307692307693,"cMask":["wall"],"color":"FFAA00"},{"x":33.84615384615384,"y":-11.999999999999998,"cMask":["wall"],"curve":0,"color":"FFAA00"},{"x":-1.1428571428571428,"y":170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA00"},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":180},{"x":-1.7142857142857142,"y":-75,"cMask":["wall"],"curve":-180},{"x":-1.1428571428571428,"y":-170.14285714285717,"cMask":["wall"],"trait":"kickOffBarrier","color":"FFAA00"},{"x":0,"y":-75.48780487804879,"cMask":["wall"],"curve":-180},{"x":-1.7142857142857142,"y":75,"cMask":["wall"],"curve":180},{"x":0,"y":-75.5,"cMask":["wall"],"curve":180},{"x":-377.0967741935484,"y":67.92626728110605,"cMask":["ball"],"trait":"ballArea","color":"FF0000","vis":false},{"x":-377.74193548387086,"y":169.28571428571428,"cMask":["ball"],"color":"FF0000","vis":false},{"x":-376.45161290322585,"y":-170.13824884792612,"cMask":["ball"],"trait":"ballArea","color":"FF0000","vis":false},{"x":-376.45161290322574,"y":-69.42396313364048,"cMask":["ball"],"color":"FF0000","vis":false},{"x":377.09677419354796,"y":-170.1382488479261,"cMask":["ball"],"trait":"ballArea","color":"FF0000","vis":false},{"x":376.45161290322545,"y":-68.77880184331786,"cMask":["ball"],"color":"FF0000","vis":false},{"x":377.7419354838706,"y":69.21658986175122,"cMask":["ball"],"trait":"ballArea","color":"FF0000","vis":false},{"x":377.7419354838707,"y":169.93087557603684,"cMask":["ball"],"color":"FF0000","vis":false},{"x":13.95713579370991,"y":-44.50263380383389,"cMask":["wall"],"color":"FF0000"},{"x":26.154085115975512,"y":-38.43848991729908,"cMask":["wall"],"color":"FF0000"},{"x":16.492060376938966,"y":-49.255617397388356,"cMask":["wall"],"color":"FF0000"},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA00"},{"x":13.146067415730343,"y":-47.75280898876405,"cMask":["wall"]},{"x":20.000000000000014,"y":-40.78651685393259,"cMask":["wall"]},{"x":14.606741573033716,"y":-49.77528089887642,"cMask":["wall"]},{"x":20.337078651685417,"y":-40.89887640449439,"cMask":["wall"]},{"x":12.941176470588234,"y":-42.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":29.117647058823525,"y":-37.35294117647059,"cMask":["wall"],"color":"FFAA00"},{"x":17.64705882352941,"y":-51.17647058823529,"cMask":["wall"],"color":"FFAA00"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.63157829422025,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-1.727209444419084,"y":77.44356832249962,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":0.03933309171025545,"y":-77.6441451618553,"cMask":["wall"],"curve":180,"color":"FF9E00"},{"x":-3.495798319327733,"y":-168.6926308985133,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-2.3529411764705896,"y":-77.03757863370492,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.69650937297996,"y":-168.3080155138979,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":2.8393665158371033,"y":-76.65296324908954,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":1.7417582417582422,"y":168.10439560439562,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":1.1703296703296708,"y":75.96153846153845,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-3.1577392456789446,"y":168.34424871610804,"cMask":["wall"],"trait":"kickOffBarrier","color":"FF9E00"},{"x":-3.8296703296703303,"y":75.76923076923076,"cMask":["wall"],"curve":-180,"color":"FF9E00"},{"x":-373.2835820895522,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":374.4776119402985,"y":172.38805970149255,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-369.4029850746269,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":370.5970149253731,"y":167.61194029850748,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":-367.910447761194,"y":68.57142857142861,"cMask":["wall"],"trait":"ballArea","color":"FF9E00","_data":{"mirror":[]}},{"x":-367.9104477611939,"y":169.28571428571425,"cMask":["wall"],"color":"FF9E00"},{"x":-372.98507462686564,"y":68.57142857142864,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149235,"y":172.86780383795306,"cMask":["wall"],"color":"FF9E00"},{"x":-367.01492537313436,"y":-169.10447761194018,"trait":"ballArea","color":"FF9E00"},{"x":-367.01492537313425,"y":-68.39019189765456,"cMask":["wall"],"color":"FF9E00","_data":{"mirror":[]}},{"x":-372.3880597014926,"y":-173.28358208955214,"trait":"ballArea","color":"FF9E00"},{"x":-372.38805970149247,"y":-68.9872068230277,"cMask":["wall"],"color":"FF9E00"},{"x":-370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":370,"y":-167.31343283582078,"trait":"ballArea","color":"FF9E00"},{"x":-373.5820895522388,"y":-172.686567164179,"trait":"ballArea","color":"FF9E00"},{"x":374.77611940298505,"y":-171.7910447761193,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731342,"y":-168.68869936034102,"trait":"ballArea","color":"FF9E00"},{"x":367.0149253731343,"y":-67.97441364605538,"cMask":["wall"],"color":"FF9E00"},{"x":372.68656716417894,"y":-172.5692963752664,"trait":"ballArea","color":"FF9E00"},{"x":372.68656716417905,"y":-68.27292110874194,"cMask":["wall"],"color":"FF9E00"},{"x":368.32622601279303,"y":68.86993603411523,"cMask":["wall"],"trait":"ballArea","color":"FF9E00"},{"x":368.32622601279314,"y":169.58422174840086,"cMask":["wall"],"color":"FF9E00"},{"x":373.40085287846466,"y":67.97441364605555,"trait":"ballArea","color":"FF9E00"},{"x":373.1023454157782,"y":172.27078891258,"cMask":["wall"],"color":"FF9E00"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":19,"v1":20,"trait":"ballArea"},{"v0":21,"v1":22,"trait":"ballArea"},{"v0":23,"v1":24,"trait":"ballArea"},{"v0":25,"v1":26,"trait":"ballArea"},{"v0":27,"v1":28,"curve":-90,"trait":"goalNet"},{"v0":28,"v1":29,"trait":"goalNet"},{"v0":29,"v1":30,"curve":-90,"trait":"goalNet"},{"v0":31,"v1":32,"curve":90,"trait":"goalNet"},{"v0":32,"v1":33,"trait":"goalNet"},{"v0":33,"v1":34,"curve":90,"trait":"goalNet"},{"v0":19,"v1":23,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":35,"v1":36,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":35,"v1":37,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":38,"v1":39,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":40,"v1":41,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":42,"v1":43,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":44,"v1":45,"curve":-155.44777141900283,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":45,"v1":46,"curve":50.03378695619983,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":46,"v1":47,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":47,"v1":48,"curve":94.51217054681895,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":48,"v1":49,"curve":-75.41720962197125,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":49,"v1":50,"curve":-59.275498614371116,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":50,"v1":51,"curve":65.58698629288317,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":51,"v1":52,"curve":63.008533438408115,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":54,"v1":55,"curve":23.495200109276738,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":55,"v1":56,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":56,"v1":57,"curve":-108.0128766703783,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":57,"v1":58,"curve":-39.25999444475261,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":58,"v1":59,"curve":44.544384918009584,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":59,"v1":60,"curve":107.24642943099013,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":60,"v1":61,"curve":-71.24742438186682,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":62,"v1":63,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":63,"v1":64,"curve":-48.07111394448096,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":64,"v1":65,"curve":-29.88850295569818,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":65,"v1":66,"curve":93.37473663338619,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":66,"v1":67,"curve":61.8434037445923,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":67,"v1":68,"curve":-9.335597271376578,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":68,"v1":69,"curve":-57.152577289116614,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":69,"v1":70,"curve":101.03595621152891,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":70,"v1":71,"curve":82.49348207936853,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":71,"v1":72,"curve":-73.3486993391458,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":72,"v1":73,"curve":-43.26319753693733,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":73,"v1":74,"curve":-133.251835589027,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":73,"v1":75,"curve":-84.43637364222394,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":72,"v1":76,"curve":52.386560062169245,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":76,"v1":77,"curve":-47.247391337930516,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":72,"v1":79,"curve":-35.28901235703227,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":79,"v1":80,"curve":59.58103275424326,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":80,"v1":81,"curve":-135.14395296629627,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":81,"v1":82,"curve":27.120488024514685,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":82,"v1":78,"curve":-59.489762593884514,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":77,"v1":83,"curve":-44.59362506110965,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":83,"v1":84,"curve":51.130481096194515,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":84,"v1":85,"curve":96.83054830735131,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":86,"v1":87,"curve":-62.892308337442714,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":87,"v1":88,"curve":90.99230516982212,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":88,"v1":89,"curve":34.470380401245706,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":86,"v1":93,"curve":56.11663910286783,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":93,"v1":85,"curve":64.59984442416254,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":62,"v1":94,"curve":77.78830864056546,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":61,"v1":94,"curve":89.08744104758328,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":52,"v1":95,"curve":-66.7724618489055,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":95,"v1":53,"curve":-11.092021067743413,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":53,"v1":54,"curve":2.296622806461533,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":78,"v1":96,"curve":58.17566246787586,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":96,"v1":72,"curve":-8.59760042468219,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":97,"v1":98,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":101,"v1":102,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":102,"v1":98,"curve":-180,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":104,"v1":103,"curve":180,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":105,"v1":106,"vis":false,"color":"FF0000","cMask":["ball"]},{"v0":107,"v1":108,"vis":false,"color":"FF0000","cMask":["ball"]},{"v0":109,"v1":110,"vis":false,"color":"FF0000","cMask":["ball"]},{"v0":111,"v1":112,"vis":false,"color":"FF0000","cMask":["ball"]},{"v0":113,"v1":114,"curve":-34.80540826271246,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":114,"v1":115,"curve":16.831513080620265,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":115,"v1":113,"curve":-183.27866143936012,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":119,"v1":120,"curve":0,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":121,"v1":122,"curve":0,"vis":true,"color":"FF0000","cMask":["wall"]},{"v0":123,"v1":124,"curve":-34.80540826271246,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":124,"v1":125,"curve":16.831513080620265,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":125,"v1":123,"curve":-183.27866143936012,"vis":true,"color":"FFAA00","cMask":["wall"]},{"v0":127,"v1":126,"curve":-180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":130,"v1":131,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":132,"v1":133,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":134,"v1":135,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":136,"v1":137,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":138,"v1":139,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":140,"v1":141,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":143,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":144,"v1":145,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":146,"v1":147,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":148,"v1":149,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":150,"v1":151,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":152,"v1":153,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":154,"v1":155,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":156,"v1":157,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":158,"v1":159,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":160,"v1":161,"vis":true,"color":"FF9E00","cMask":["wall"]},{"v0":142,"v1":147,"color":"FFFFFF","cMask":["wall"],"_data":{"mirror":[],"arc":{"a":[-367.910447761194,68.57142857142861],"b":[-367.01492537313425,-68.39019189765456],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":155,"v1":158,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-370,64],"p1":[-370,-64],"team":"red","_data":{"mirror":[]}},{"p0":[370,64],"p1":[370,-64],"team":"blue"}],"discs":[{"radius":5,"pos":[-368.06451612903226,64.64516129032258],"color":"FF0000","trait":"goalPost"},{"radius":5,"pos":[-368.06451612903226,-63.35483870967742],"color":"FF0000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,64],"color":"FF0000","trait":"goalPost"},{"radius":5,"pos":[368.7096774193548,-64],"color":"FF0000","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,-170],"b":[889,-170]}}},{"normal":[0,-1],"dist":-170,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-170,"canvas_rect":[-888,-420,889,420],"a":[-888,170],"b":[889,170]}}},{"normal":[0,1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,-200],"b":[889,-200]}}},{"normal":[0,-1],"dist":-200,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-888,-420,889,420],"a":[-888,200],"b":[889,200]}}},{"normal":[1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[-420,-420],"b":[-420,420]}}},{"normal":[-1,0],"dist":-420,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-420,"canvas_rect":[-888,-420,889,420],"a":[420,-420],"b":[420,420]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","canBeStored":true,"kickOffReset":"partial","playerPhysics":{"radius":15,"bCoef":0.5,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"acceleration":0.1,"gravity":[0,0],"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.4,"cMask":["all"],"damping":0.99,"invMass":1.5,"gravity":[0,0],"color":"FFFFFF","cGroup":["ball"]}}';
var v3Map = '{"name":"3v3 Futsal | Champions League by Namajunas VOL 3 [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":648,"height":270,"bg":{"type":"","color":"484848"},"vertexes":[{"x":550,"y":240,"cMask":["ball"]},{"x":550,"y":-240,"cMask":["ball"]},{"x":-550,"y":-80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":80,"bCoef":0.1,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":550,"y":-80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":80,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":-550,"y":80,"cMask":["ball"],"color":"D82B2B","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED","_data":{"mirror":[]}},{"x":-550,"y":-80,"cMask":["ball"],"color":"D82B2B","_length":9},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-80,"cMask":["ball","red","blue"],"color":"2674C5","strength":0.1,"_length":9},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"]},{"x":-550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":550,"y":-240,"cMask":["ball"],"color":"D5E0ED"},{"x":-550,"y":-80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":-550,"y":80,"bCoef":0.1,"cMask":[],"color":"666666","_length":9,"_data":{"mirror":[]}},{"x":550,"y":-80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":550,"y":80,"bCoef":0.1,"cMask":["c0"],"color":"666666","strength":0.1,"_length":9,"_data":{"mirror":[]}},{"x":-325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":-325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666","_data":{"mirror":[]}},{"x":325,"y":-238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":238.5,"cMask":["wall"],"cGroup":["wall"],"color":"666666"},{"x":325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":-120,"color":"666666"},{"x":-325,"y":-70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-325,"y":70,"cMask":["wall"],"cGroup":["wall"],"curve":120,"color":"666666"},{"x":-400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":-400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":400,"y":-2.5,"cMask":["wall"],"cGroup":["wall"],"curve":180,"color":"666666"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":79,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":549,"y":-81,"bCoef":0,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"2674C5"},{"x":-592,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":556,"y":-82,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9,"color":"2674C5"},{"x":592,"y":-82,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"2674C5"},{"x":-592,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","vis":false,"curve":0,"damping":0.96,"strength":0.1,"_length":9,"radius":3.5,"color":"D82B2B"},{"x":-592,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9,"radius":3.5,"color":"D82B2B"},{"x":-550,"y":-80,"bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"color":"D82B2B"},{"x":-36.33260832977,"y":-69.619595273771,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-73.821461001685,"y":-27.330632717964,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.014361966537,"y":-54.244550695595,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.567788655896,"y":-39.579912744961,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-27.401905204993,"y":-55.974842894447,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.297436994888,"y":-45.699472272904,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-51.291668342567,"y":-25.483550876345,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-63.952037024452,"y":-3.2227163265885,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-78.895794055559,"y":0.32417480054631,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-49.967322788025,"y":-4.65870951332,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-29.751401391465,"y":-2.6644781656408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-46.8263783052,"y":12.497432119268,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-42.579241521635,"y":29.856547074011,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-59.106141245534,"y":17.104852702161,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.894087183041,"y":32.276923958182,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-69.356170964318,"y":10.650350277649,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-26.356801780968,"y":44.267529896973,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-36.378517274838,"y":52.147864537104,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-58.005090955371,"y":51.60994831838,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-32.527166164471,"y":65.4323331171,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-14.488127495522,"y":76.174616209625,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":-24.732085694618,"color":"666666"},{"x":-16.928826321916,"y":61.433832500673,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":6.9659557761919,"y":58.957631800408,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-13.341291310333,"y":51.229465626872,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-2.7461577238685,"y":30.876555695364,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.435218979552,"y":63.4687077328,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":22.589636521506,"y":70.400160549363,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":5.5248205788828,"y":79.275039858045,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":41.344223828575,"y":42.968648295232,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":38.999869652681,"y":61.976890729974,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.008861779209,"y":56.522074984591,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.919785164602,"y":27.390630394901,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","curve":0,"color":"666666"},{"x":60.068328222308,"y":34.398228969783,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.01646035409,"y":46.373531926884,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":68.928027599344,"y":29.734984570796,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":78.31548222399,"y":9.7321974675032,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":69.65875616911,"y":13.28924956575,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":64.462737561977,"y":-8.245998424817,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":56.780234233423,"y":14.928216074637,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":35.503783381106,"y":15.597978817731,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":62.732445363125,"y":-26.858455186361,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":77.00129764056,"y":-17.379674871749,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":63.305863455719,"y":-39.331030477738,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":53.877887996667,"y":-56.497333081438,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":49.590107328654,"y":-48.708324131272,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":28.278154602466,"y":-57.192559777334,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":43.79018771559,"y":-38.909903901781,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":32.154846615592,"y":-28.467061831954,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":51.772009016798,"y":-29.441284558281,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":8.5138426951989,"y":-58.532208313565,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.5832688652041,"y":-42.456918078959,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.656415856378,"y":-57.659472248316,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-11.240308240956,"y":-66.158887826024,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-23.849872067281,"y":-75.333208157404,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0.13623572079257,"y":-72.075474031812,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":27.699717549337,"y":-72.735075803794,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":13.557692835738,"y":-67.325922903394,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-5.8464583222451,"y":-11.427709842133,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":-3.2586099897905,"y":5.6269451293777,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.822135576265,"y":10.680956241028,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":20.849306401585,"y":-4.242478847855,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":11.015384298223,"y":-19.196396850074,"bCoef":0.5,"cMask":["wall"],"trait":"goalPost","color":"666666"},{"x":0,"y":239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666"},{"x":0,"y":-239,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"666666","vis":false},{"x":0,"y":270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false},{"x":0,"y":-270,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false}],"segments":[{"v0":6,"v1":7,"color":"D5E0ED","cMask":["ball"],"bias":30,"_data":{"mirror":[],"arc":{"a":[-550,80],"b":[-550,240],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":8,"v1":9,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":10,"v1":11,"color":"D5E0ED","cMask":["ball"]},{"v0":12,"v1":13,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":14,"v1":15,"color":"D5E0ED","cMask":["ball"],"bias":-30},{"v0":16,"v1":17,"color":"F8F8F8","bCoef":0,"cMask":["ball"]},{"v0":18,"v1":19,"color":"D5E0ED","cMask":["ball"]},{"v0":20,"v1":21,"color":"666666","bCoef":0.1,"cMask":[],"_data":{"mirror":[],"arc":{"a":[-550,-80],"b":[-550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":22,"v1":23,"color":"666666","bCoef":0.1,"cMask":["c0"],"strength":0.1,"_length":9,"_data":{"mirror":[],"arc":{"a":[550,-80],"b":[550,80],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":24,"v1":25,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325,"_data":{"mirror":[],"arc":{"a":[-325,-238.5],"b":[-325,238.5],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":26,"v1":27,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":28,"v1":29,"curve":-120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":325},{"v0":30,"v1":31,"curve":120,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-325},{"v0":32,"v1":33,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":33,"v1":32,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":32,"v1":33,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":-400},{"v0":34,"v1":35,"curve":0,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":35,"v1":34,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":34,"v1":35,"curve":180,"color":"666666","cMask":["wall"],"cGroup":["wall"],"x":400},{"v0":36,"v1":37,"curve":0,"vis":false,"color":"2674C5","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":592,"radius":3.5},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","y":79,"strength":0.1,"_length":9},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"cGroup":["wall"],"trait":"goalNet","y":-81,"x":549,"strength":0.1,"_length":9},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"2674C5","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","strength":0.1,"_length":9},{"v0":46,"v1":47,"curve":0,"vis":false,"color":"D82B2B","bCoef":0,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","damping":0.96,"strength":0.1,"_length":9,"x":-592,"radius":3.5},{"v0":48,"v1":49,"curve":0,"vis":false,"color":"D82B2B","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"trait":"goalNet","_length":9},{"v0":50,"v1":51,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":50,"v1":52,"curve":-41.972087823846,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":51,"v1":53,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":52,"v1":54,"curve":39.307648116107,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":55,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":55,"v1":56,"curve":-7.6706381942666,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":53,"curve":-25.58879878153,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":57,"curve":-22.118592734133,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":57,"v1":58,"curve":-29.626928237609,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":56,"v1":59,"curve":-8.7974107099911,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":59,"v1":60,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":61,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":61,"v1":62,"curve":-23.690782919169,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":63,"curve":6.3596602397285,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":63,"v1":64,"curve":-9.7585475660135,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":64,"v1":65,"curve":26.464535213028,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":58,"v1":65,"curve":-18.492225491127,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":66,"curve":-21.380476552998,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":62,"v1":67,"curve":-7.5955767419349,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":67,"v1":68,"curve":32.559346404261,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":68,"v1":69,"curve":-24.830195108546,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":69,"v1":70,"curve":-24.732085694618,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":70,"v1":71,"curve":27.41392200816,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":71,"v1":72,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":73,"curve":3.8183048659928,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":73,"v1":74,"curve":21.545295296441,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":66,"curve":4.0746613936398,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":75,"curve":-22.61986494804,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":72,"v1":76,"curve":-38.02475667701,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":76,"v1":77,"curve":17.640759104042,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":75,"v1":78,"curve":-19.050603759689,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":79,"curve":25.573402898373,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":79,"v1":80,"curve":-26.199686164533,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":81,"curve":-4.7900110337447,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":78,"v1":82,"curve":-12.808705452768,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":82,"v1":83,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":83,"v1":84,"curve":-19.564814063615,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":84,"v1":85,"curve":-23.127465433213,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":85,"v1":86,"curve":47.924977949156,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":86,"v1":87,"curve":-25.654246845845,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":88,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":88,"v1":89,"curve":20.078509574305,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":81,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":87,"v1":90,"curve":-15.453235238194,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":90,"v1":91,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":91,"v1":92,"curve":-25.787488089764,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":92,"v1":93,"curve":-29.104815395383,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":93,"v1":94,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":94,"v1":95,"curve":-31.369727296019,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":96,"curve":16.260204708312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":96,"v1":97,"curve":-5.4526219878125,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":98,"curve":-10.38885781547,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":98,"v1":87,"curve":13.958142285095,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":95,"v1":99,"curve":-3.3943123792006,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":99,"v1":100,"curve":-24.781713321362,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":101,"curve":23.251797286617,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":101,"v1":54,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":54,"v1":102,"curve":34.432147175581,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":102,"v1":103,"curve":-25.63473646559,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":103,"v1":104,"curve":11.055080303312,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":104,"v1":105,"curve":33.290076429352,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":105,"v1":106,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":106,"v1":95,"curve":13.163889310356,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":100,"v1":107,"curve":-5.9896134344567,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":107,"v1":60,"curve":-10.52479079919,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":60,"v1":108,"curve":-12.68038349182,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":108,"v1":74,"curve":-20.383003700055,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":74,"v1":109,"curve":19.642197209326,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":109,"v1":89,"curve":-2.7409020355992,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":89,"v1":110,"curve":0.15913530748199,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":110,"v1":97,"curve":0,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":97,"v1":111,"curve":-8.8161746788795,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":111,"v1":100,"curve":19.352654077974,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":80,"v1":77,"curve":35.810257640434,"color":"666666","bCoef":0.5,"cMask":["wall"],"trait":"goalPost"},{"v0":112,"v1":113,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":113,"v1":114,"curve":-180,"color":"666666","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":114,"v1":115,"color":"666666","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":112,"v1":116,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":117,"v1":115,"vis":false,"color":"272727","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0}],"planes":[{"normal":[0,1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,-240],"b":[832,-240]}}},{"normal":[0,-1],"dist":-240,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-240,"canvas_rect":[-832,-316,832,316],"a":[-832,240],"b":[832,240]}}},{"normal":[0,1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,-270],"b":[832,-270]}}},{"normal":[0,-1],"dist":-270,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-270,"canvas_rect":[-832,-316,832,316],"a":[-832,270],"b":[832,270]}}},{"normal":[1,0],"dist":-659.1467764060357,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-659.1467764060357,"canvas_rect":[-832,-316,832,316],"a":[-659.1467764060357,-316],"b":[-659.1467764060357,316]}}},{"normal":[-1,0],"dist":-661.1467764060358,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-661.1467764060358,"canvas_rect":[-832,-316,832,316],"a":[661.1467764060358,-316],"b":[661.1467764060358,316]}}},{"normal":[1,0],"dist":-657.8600823045267,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-657.8600823045267,"canvas_rect":[-832,-316,832,316],"a":[-657.8600823045267,-316],"b":[-657.8600823045267,316]}}},{"normal":[-1,0],"dist":-661.0041152263375,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-661.0041152263375,"canvas_rect":[-832,-316,832,316],"a":[661.0041152263375,-316],"b":[661.0041152263375,316]}}}],"goals":[{"p0":[-556.3,-80],"p1":[-556.3,80],"team":"red","color":"D82B2B","radius":3.5},{"p0":[556.3,80],"p1":[556.3,-80],"team":"blue","color":"2674C5","cMask":["ball","red","blue"],"strength":0.1,"_length":9}],"discs":[{"radius":6.25,"invMass":0,"pos":[-550,80],"color":"D82B2B","_length":9,"_data":{"mirror":[]},"_selected":true},{"radius":6,"invMass":0,"pos":[-550,-80],"color":"D82B2B","_length":9},{"radius":6,"invMass":0,"pos":[550,80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,-85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[572,-80],"color":"2674C5","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[562,-80],"color":"093c70","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":6,"invMass":0,"pos":[550,-80],"color":"2674C5","strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,-80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,-10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,0],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,10],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,20],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,30],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,40],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,50],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,60],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[592,70],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[592,-80],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[582,80],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,-10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,0],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,10],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,20],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,30],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,40],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,50],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,60],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":4.5,"pos":[-592,70],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-592,-80],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-572,-80],"color":"D82B2B","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-582,-80],"color":"910f15","bCoef":0.1,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,-80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":2.5,"pos":[-562,80],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9,"_data":{"mirror":[]}},{"radius":3.5,"invMass":0,"pos":[606,-90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,-95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[599,85],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[606,90],"color":"2674C5","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[613,95],"color":"093c70","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-613,-95],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-606,-90],"color":"D82B2B","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9},{"radius":3.5,"invMass":0,"pos":[-599,-85],"color":"910f15","bCoef":0,"cMask":["ball","red","blue"],"damping":0.96,"strength":0.1,"_length":9}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickStrength":4.545,"kickback":0},"ballPhysics":{"radius":5.8,"bCoef":0.412,"invMass":1.5,"color":"ffbf00","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"spawnDistance":350,"joints":[{"d0":3,"d1":4,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":4,"d1":5,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":5,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":26,"d1":28,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":25,"d1":26,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":24,"d1":25,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":23,"d1":24,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":22,"d1":23,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":21,"d1":22,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":20,"d1":21,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":19,"d1":20,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":18,"d1":19,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":17,"d1":18,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":16,"d1":17,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":15,"d1":16,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":14,"d1":15,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":13,"d1":14,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":12,"d1":13,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":12,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5,"invMass":4.5},{"d0":11,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":10,"d1":27,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":10,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":3.5},{"d0":7,"d1":8,"_length":9,"strength":0.1,"color":"2674C5","length":9,"radius":4},{"d0":8,"d1":9,"_length":9,"strength":0.1,"color":"2674C5","length":9},{"d0":1,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9},{"d0":47,"d1":51,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":46,"d1":47,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":44,"d1":46,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":43,"d1":44,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":42,"d1":43,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":41,"d1":42,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":40,"d1":41,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":39,"d1":40,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":38,"d1":39,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":37,"d1":38,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":36,"d1":37,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":35,"d1":36,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":34,"d1":35,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":33,"d1":34,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":32,"d1":33,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":31,"d1":32,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":30,"d1":31,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":30,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5,"invMass":4.5},{"d0":29,"d1":45,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":45,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":49,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":48,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9,"radius":3.5},{"d0":2,"d1":50,"_length":9,"strength":0.1,"color":"D82B2B","length":9}],"traits":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';
var v4Map = '{"name":"FUTSAL QATAR 2022 4x4 by ALMOHADA from HaxMaps","width":850,"height":350,"spawnDistance":120,"bg":{"type":"hockey","height":0,"width":0,"color":"718C5A"},"canBeStored":true,"vertexes":[{"x":-700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":91,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":-701,"y":320,"trait":"linha","color":"111129"},{"x":701,"y":320,"trait":"linha","color":"111129"},{"x":700,"y":321,"trait":"linha","color":"ECE1FF"},{"x":700,"y":90,"trait":"linha","pos":[550,80],"color":"ECE1FF"},{"x":700,"y":-90,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-321,"trait":"linha","color":"ECE1FF"},{"x":701,"y":-320,"trait":"linha","color":"111129"},{"x":-701,"y":-320,"trait":"linha","color":"111129"},{"x":-700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":-700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","pos":[550,80],"color":"ECE1FF","bias":10},{"x":751,"y":90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":750,"y":-91,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":751,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":700,"y":-90,"bCoef":1.3,"cMask":["ball"],"trait":"rede","color":"ECE1FF","bias":10},{"x":1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"F1C40F"},{"x":1,"y":320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F1C40F","vis":false},{"x":-698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-90,"trait":"parede","bias":40},{"x":698,"y":-318,"trait":"parede","bias":40,"color":"969EA8"},{"x":-698,"y":-318,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":-90,"trait":"parede","bias":40,"color":"ECE1FF"},{"x":-698,"y":91,"trait":"parede","bias":40},{"x":-698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":318,"trait":"parede","bias":40,"color":"111129"},{"x":698,"y":90,"trait":"parede","pos":[550,80],"bias":49},{"x":0,"y":-350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":350,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":318.5,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":false,"color":"969EA8"},{"x":0,"y":-90,"trait":"linha","color":"F2F2F2"},{"x":0,"y":90,"trait":"linha","color":"F2F2F2"},{"x":460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-700,"y":305,"trait":"linha","color":"ECE1FF"},{"x":-685,"y":320,"trait":"linha","color":"ECE1FF"},{"x":700,"y":-305,"trait":"linha","color":"ECE1FF"},{"x":685,"y":-320,"trait":"linha","color":"ECE1FF"},{"x":-698,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":-96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-756.25,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-698,"y":96.25,"bCoef":0,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":756.25,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":698,"y":-96.25,"bCoef":0.1,"cMask":["ball"],"trait":"rede2","bias":20},{"x":-601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":601.5,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":600,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":698,"y":-150,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":-318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-400,"y":318.5,"trait":"linha","curve":0,"color":"ECE1FF"},{"x":-700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":-90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":700,"y":90,"trait":"linha","curve":0,"color":"AAB7B8"},{"x":-400,"y":-90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":-400,"y":90,"trait":"linha","curve":90,"color":"ECE1FF"},{"x":400,"y":-90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":400,"y":90,"trait":"linha","curve":-90,"color":"ECE1FF"},{"x":-460,"y":-3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":3.125,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":2,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-460,"y":-4,"trait":"linha","curve":180,"color":"ECE1FF"},{"x":-1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":-1,"y":320,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","vis":false},{"x":-1,"y":-320,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"D4AC0D","vis":false},{"x":-1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":180,"color":"D4AC0D"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":-90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":1,"y":90,"cMask":["red","blue"],"cGroup":["redKO"],"curve":177,"color":"F1C40F"},{"x":-701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":320,"trait":"linha","color":"ECE1FF","curve":0},{"x":701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-701,"y":-320,"trait":"linha","color":"ECE1FF","curve":0},{"x":-750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":-750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000","bias":0},{"x":750,"y":-91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-51,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-31,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":71,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":91.5,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":29,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":49,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":-11,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":750,"y":9,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3","bias":0},{"x":-735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":-750.8333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"D60000"},{"x":749.3333333333333,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":749.3333333333333,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":735,"y":-90,"bCoef":1.3,"cMask":["wall"],"trait":"rede","color":"247BE3"},{"x":-700,"y":-318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":-700,"y":318.5,"trait":"linha","curve":-90,"color":"717171"},{"x":700,"y":-318.5,"trait":"linha","curve":90,"color":"717171"},{"x":700,"y":318.5,"trait":"linha","curve":90,"color":"717171"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":183,"color":"B7950B"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-183,"color":"9A7D0A"},{"x":17.295238095238094,"y":36.16743655553608,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":21.551373210999365,"y":48.12766794079051,"cMask":["wall"],"cGroup":["wall"],"color":"FBE37D"},{"x":0.5660714285714286,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15.383333333333333,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.102478214627542,"y":51,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":2,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F1C40F"},{"x":-21.74086163608197,"y":48.27370507261451,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":21.54954361725646,"y":47.909936501464415,"cMask":["wall"],"cGroup":["wall"],"curve":-63,"color":"F1C40F"},{"x":17.295238095238094,"y":36.16380975024047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":27.810714285714283,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":0},{"x":-12.854335266350585,"y":-12.785992361468388,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":20.646695734237582,"y":18.72353377237919,"cMask":["wall"],"cGroup":["wall"],"curve":-5,"color":"F1C40F"},{"x":-20.7,"y":-1,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"D4AC0D"},{"x":4.295238095238094,"y":22.66018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":9,"color":"FBE37D"},{"x":-16.830123078763606,"y":27.74832340614142,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":-6.164304831809051,"y":12.851915399576606,"cMask":["wall"],"cGroup":["wall"],"curve":-7,"color":"D4AC0D"},{"x":2.372740790737518,"y":1.4573444487073814,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":10.485495563396794,"y":-9.06267393956184,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"F1C40F"},{"x":-25.722619047619045,"y":60.40119047619047,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"D4AC0D"},{"x":-15.397863070978943,"y":45.452173924909616,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":45.47190021098944,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.408806827001182,"y":44.1498084355034,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":44.16953472158321,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.419750583023422,"y":42.847442946097196,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":42.86716923217701,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":186,"color":"B7950B"},{"x":2,"y":-8.774172542149264,"cMask":["wall"],"cGroup":["wall"],"curve":-186,"color":"9A7D0A"},{"x":0.2642600740769898,"y":11.850186460422716,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":12.569655515726534,"y":23.407815279689217,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":-15.261486141718102,"y":-6.9025175039976805,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-8.295361950462208,"y":0.22459110903362767,"cMask":["wall"],"cGroup":["wall"],"curve":20,"color":"D4AC0D"},{"x":-13.906089320814594,"y":-60.899200244591924,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-0.9390786571882304,"y":-45.174752338000204,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":16.09441099435831,"y":-60.71580033398497,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":13.64746395714984,"y":-43.71098723477586,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":19.975892420101196,"y":-36.21768810523994,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":-5.205509720938451,"y":-33.803447422514985,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":1.2021182442966682,"y":-23.54296828697071,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-4.928111606234725,"y":-19.820494317872292,"cMask":["wall"],"cGroup":["wall"],"color":"F4D03F"},{"x":-5.493193725093485,"y":-10.017139340254602,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":15.219214152997544,"y":-25.355698049863857,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F"},{"x":22.011512086907548,"y":-15.764513541219038,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F"},{"x":-27.191417131645604,"y":-40.97260383420401,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-12.6148625342372,"y":-44.21612804371298,"cMask":["wall"],"cGroup":["wall"],"curve":40,"color":"F4D03F"},{"x":-17.767192914900857,"y":-24.800406793140944,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D","curve":40},{"x":-25.056487561941317,"y":-26.61925393006127,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-15.3869193149567,"y":46.75453941431583,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":46.77426570039565,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-15.375975558934456,"y":48.056904903722035,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"F1C40F"},{"x":15.383333333333333,"y":48.07663118980186,"cMask":["wall"],"cGroup":["wall"],"curve":-35,"color":"FBE37D"},{"x":-16.007125457791304,"y":48.791666295546165,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"F1C40F"},{"x":15.383333333333333,"y":48.5219780284246,"cMask":["wall"],"cGroup":["wall"],"curve":-36,"color":"FBE37D"},{"x":-27.4,"y":-33.136689888661664,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"C8A510"},{"x":-15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":10,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":-185,"color":"D4AC0D"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":-187,"color":"D4AC0D"},{"x":-16.325330104189707,"y":36.45395417388959,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-21.8033987623963,"y":51.104939144912876,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":24.491789091335683,"y":-18.29674412536515,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":14.428613802880756,"y":12.533708897020562,"cMask":["wall"],"cGroup":["wall"],"color":"F7DC6F","curve":-6},{"x":-1.6535977641211121,"y":26.62280891272379,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":9.841760996090423,"y":36.96311178650215,"cMask":["wall"],"cGroup":["wall"],"curve":25,"color":"F1C40F"},{"x":-12.175163916413917,"y":31.046867620871236,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":-9.905765263704826,"y":41.23125159715103,"cMask":["wall"],"cGroup":["wall"],"curve":-7},{"x":0.5660714285714286,"y":69.17913445283055,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":27.810714285714283,"y":59.44523809523809,"cMask":["wall"],"cGroup":["wall"],"curve":-30,"color":"F4D03F"},{"x":21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-21,"y":48,"cMask":["wall"],"cGroup":["wall"],"color":"F1C40F","curve":65},{"x":-16.738643391619767,"y":38.63489537244617,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-25.722619047619045,"y":61.357142857142854,"cMask":["wall"],"cGroup":["wall"],"color":"D4AC0D"},{"x":-6.2,"y":12,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":16.795238095238094,"y":34.16018294494485,"cMask":["wall"],"cGroup":["wall"],"curve":-2,"color":"F1C40F"},{"x":31.2,"y":-33.6,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":15,"y":52,"cMask":["wall"],"cGroup":["wall"],"curve":-10,"color":"F4D03F"},{"x":1.0440476190476193,"y":-64.29568957030348,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":2,"y":-8.556441102823165,"cMask":["wall"],"cGroup":["wall"],"curve":187,"color":"F1C40F"},{"x":1.0440476190476193,"y":-65.7845238095238,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":2,"y":-10,"cMask":["wall"],"cGroup":["wall"],"curve":185,"color":"F1C40F"},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-18.730521195897836,"y":349.07897229416335,"cMask":["wall"]},{"x":-34.411129288610425,"y":339.66523966511943,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-29.05677530573297,"y":343.3488741721366,"cMask":["wall"]},{"x":-22.172605899176233,"y":330.2515070360754,"cMask":["wall"]},{"x":-8.977947869942483,"y":329.84221431307355,"cMask":["wall"]},{"x":-15.862117276499191,"y":340.4838251111232,"cMask":["wall"]},{"x":-8.977947869942483,"y":342.12099600313087,"cMask":["wall"]},{"x":-8.977947869942483,"y":335.1630197120984,"cMask":["wall"]},{"x":-2.476232319305552,"y":324.93070163705056,"cMask":["wall"]},{"x":-2.8586861752253867,"y":338.8466542191156,"cMask":["wall"]},{"x":-5.15340931074428,"y":329.84221431307355,"cMask":["wall"]},{"x":5.555298655010631,"y":330.2515070360754,"cMask":["wall"]},{"x":-2.8586861752253867,"y":337.4141296886089,"cMask":["wall"]},{"x":0.009717744173258325,"y":342.12099600313087,"cMask":["wall"]},{"x":17.41136818852499,"y":342.12099600313087,"cMask":["wall"]},{"x":23.339402955282225,"y":330.66079975907735,"cMask":["wall"]},{"x":16.45523354872546,"y":341.302410557127,"cMask":["wall"]},{"x":23.339402955282225,"y":342.9395814491347,"cMask":["wall"]},{"x":23.339402955282225,"y":335.9816051581022,"cMask":["wall"]},{"x":27.92884922632001,"y":329.4329215900716,"cMask":["wall"]},{"x":27.737622298360137,"y":343.7581668951385,"cMask":["wall"]},{"x":33.66565706511733,"y":329.84221431307355,"cMask":["wall"]},{"x":27.92884922632001,"y":336.39089788110414,"cMask":["wall"]}],"segments":[{"v0":0,"v1":1,"color":"ECE1FF","trait":"linha","x":-700},{"v0":2,"v1":3,"color":"ECE1FF","trait":"linha","x":-700},{"v0":6,"v1":7,"color":"ECE1FF","trait":"linha","x":700},{"v0":8,"v1":9,"color":"ECE1FF","trait":"linha","x":700},{"v0":12,"v1":13,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":14,"v1":15,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":-750},{"v0":16,"v1":17,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":18,"v1":19,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":80},{"v0":20,"v1":21,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"x":750},{"v0":22,"v1":23,"color":"ECE1FF","bCoef":1.3,"cMask":["ball"],"trait":"rede","bias":10,"y":-90},{"v0":24,"v1":25,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":25,"v1":26,"curve":180,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":26,"v1":25,"curve":180,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":26,"v1":27,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":1},{"v0":28,"v1":29,"curve":0,"color":"ECE1FF","trait":"linha","y":-150},{"v0":30,"v1":31,"curve":0,"color":"ECE1FF","trait":"linha","y":150},{"v0":32,"v1":33,"color":"969EA8","trait":"parede","bias":40,"x":698},{"v0":33,"v1":34,"color":"969EA8","trait":"parede","bias":40,"y":-318},{"v0":34,"v1":35,"color":"ECE1FF","trait":"parede","bias":40,"x":-698},{"v0":36,"v1":37,"color":"969EA8","trait":"parede","bias":40,"x":-698},{"v0":37,"v1":38,"color":"111129","trait":"parede","bias":40,"y":318},{"v0":38,"v1":39,"color":"969EA8","trait":"parede","bias":49,"x":698},{"v0":40,"v1":41,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":42,"v1":43,"vis":false,"color":"969EA8","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":0},{"v0":46,"v1":47,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":47,"v1":46,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":48,"v1":49,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":49,"v1":48,"curve":180,"color":"ECE1FF","trait":"linha","x":460},{"v0":51,"v1":52,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":53,"v1":54,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":55,"v1":56,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":57,"v1":58,"curve":90,"color":"ECE1FF","trait":"linha"},{"v0":59,"v1":60,"bCoef":0,"trait":"rede2","bias":20,"y":-86.25},{"v0":60,"v1":61,"bCoef":0,"trait":"rede2","bias":40,"x":-606.25},{"v0":61,"v1":62,"bCoef":0,"trait":"rede2","bias":20,"y":86.25},{"v0":63,"v1":64,"trait":"rede2","bias":20,"y":86.25},{"v0":64,"v1":65,"trait":"rede2","bias":40,"x":606.25},{"v0":65,"v1":66,"trait":"rede2","bias":20,"y":-86.25},{"v0":67,"v1":68,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-601.5},{"v0":69,"v1":70,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":601.5},{"v0":71,"v1":72,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":73,"v1":74,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":75,"v1":76,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":571.5},{"v0":77,"v1":78,"curve":0,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":79,"v1":80,"curve":0,"color":"AAB7B8","trait":"linha","y":150},{"v0":81,"v1":82,"curve":0,"color":"AAB7B8","trait":"linha","y":150,"x":700},{"v0":83,"v1":84,"curve":90,"color":"ECE1FF","trait":"linha","y":150,"x":-400},{"v0":85,"v1":86,"curve":-90,"color":"ECE1FF","trait":"linha","y":150,"x":400},{"v0":87,"v1":88,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":88,"v1":87,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":89,"v1":90,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":90,"v1":89,"curve":180,"color":"ECE1FF","trait":"linha","x":-460},{"v0":92,"v1":93,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":94,"v1":95,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["redKO","blueKO"],"x":-1},{"v0":97,"v1":96,"curve":177,"color":"D4AC0D","cMask":["red","blue"],"cGroup":["blueKO"],"x":0},{"v0":98,"v1":99,"curve":177,"color":"F1C40F","cMask":["red","blue"],"cGroup":["redKO"],"x":0},{"v0":100,"v1":101,"curve":0,"color":"ECE1FF","trait":"linha","y":320},{"v0":102,"v1":103,"curve":0,"color":"ECE1FF","trait":"linha","y":-320},{"v0":104,"v1":105,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":106,"v1":107,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":108,"v1":109,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":110,"v1":111,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":112,"v1":113,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-750},{"v0":114,"v1":115,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":116,"v1":117,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":118,"v1":119,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":120,"v1":121,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":122,"v1":123,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":750},{"v0":124,"v1":125,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":126,"v1":127,"vis":true,"color":"D60000","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":128,"v1":129,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":90},{"v0":130,"v1":131,"vis":true,"color":"247BE3","bCoef":1.3,"cMask":["wall"],"trait":"rede","bias":0,"x":-490,"y":-90},{"v0":132,"v1":133,"curve":-90,"color":"717171","trait":"linha","y":150,"x":-700},{"v0":134,"v1":135,"curve":90,"color":"717171","trait":"linha","y":150,"x":700},{"v0":138,"v1":139,"color":"FBE37D","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":140,"v1":141,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":142,"v1":143,"curve":-10,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":146,"v1":147,"curve":0,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"],"y":87},{"v0":148,"v1":149,"curve":-5,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":150,"v1":151,"curve":9,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":152,"v1":153,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":154,"v1":155,"curve":9.971862000782721,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":156,"v1":157,"curve":-30.255631412293944,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":158,"v1":159,"curve":-35.344670176935146,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":66},{"v0":160,"v1":161,"curve":-35.34467017693518,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":63},{"v0":162,"v1":163,"curve":-35.34467017693502,"color":"1E8449","cMask":["wall"],"cGroup":["wall"],"y":60},{"v0":166,"v1":167,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":168,"v1":169,"curve":20,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":170,"v1":171,"curve":19.980617854376742,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":172,"v1":173,"curve":19.825378294386724,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":173,"v1":174,"curve":20.095207626974666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":171,"v1":175,"curve":19.83082240294392,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":175,"v1":176,"curve":19.870013082058666,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":176,"v1":177,"curve":20.056605062337646,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":177,"v1":178,"curve":19.824043161727953,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":174,"v1":179,"curve":19.87890896829948,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":179,"v1":180,"curve":19.968942406277453,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":181,"v1":182,"curve":40.25099341278321,"vis":true,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":182,"v1":183,"curve":39.6593065347139,"vis":true,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":183,"v1":184,"curve":30.257096492338828,"vis":true,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":185,"v1":186,"curve":-35.34467017693512,"color":"239B56","cMask":["wall"],"cGroup":["wall"],"y":69},{"v0":187,"v1":188,"curve":-35.34467017693499,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":72},{"v0":189,"v1":190,"curve":-36,"color":"28B463","cMask":["wall"],"cGroup":["wall"],"y":75},{"v0":191,"v1":192,"curve":10,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":193,"v1":194,"curve":-185,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":195,"v1":196,"curve":-187,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":197,"v1":198,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":199,"v1":200,"curve":-6,"color":"F7DC6F","cMask":["wall"],"cGroup":["wall"]},{"v0":201,"v1":202,"curve":25,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":203,"v1":204,"curve":-7,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":205,"v1":206,"curve":-30.255631412293944,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"],"y":110},{"v0":207,"v1":208,"curve":65,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"y":48},{"v0":209,"v1":210,"curve":0,"color":"D4AC0D","cMask":["wall"],"cGroup":["wall"]},{"v0":211,"v1":212,"curve":-2,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"]},{"v0":213,"v1":214,"curve":-10,"color":"F4D03F","cMask":["wall"],"cGroup":["wall"]},{"v0":215,"v1":216,"curve":187,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":217,"v1":218,"curve":185,"color":"F1C40F","cMask":["wall"],"cGroup":["wall"],"x":-245},{"v0":219,"v1":220,"curve":3.3354726766396428,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":221,"v1":222,"curve":180.34830935060117,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":223,"v1":224,"curve":-112.01006530416386,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":226,"curve":-164.5409479979574,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":225,"v1":227,"curve":6.249175943120465,"color":"FFFFFF","cMask":["wall"]},{"v0":226,"v1":228,"curve":-123.41048974700357,"color":"FFFFFF","cMask":["wall"]},{"v0":229,"v1":230,"curve":-5.0801638679967285,"color":"FFFFFF","cMask":["wall"]},{"v0":231,"v1":232,"curve":-5.832108701461828,"color":"FFFFFF","cMask":["wall"]},{"v0":233,"v1":234,"curve":-107.1578018849103,"color":"FFFFFF","cMask":["wall"]},{"v0":234,"v1":235,"curve":-9.567778429804825,"color":"FFFFFF","cMask":["wall"]},{"v0":236,"v1":237,"curve":-164.54094799796243,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"cGroup":["redKO","blueKO"]},{"v0":236,"v1":238,"curve":6.249175943120352,"color":"FFFFFF","cMask":["wall"]},{"v0":237,"v1":239,"curve":-123.41048974700553,"color":"FFFFFF","cMask":["wall"]},{"v0":240,"v1":241,"color":"FFFFFF","cMask":["wall"]},{"v0":242,"v1":243,"curve":-70.6842360982381,"color":"FFFFFF","cMask":["wall"]}],"goals":[{"p0":[-708.25,-90],"p1":[-708.25,90],"team":"red"},{"p0":[708.25,90],"p1":[708.25,-90],"team":"blue"}],"discs":[{"radius":6.25,"invMass":1.5,"pos":[0,0],"color":"ffffff","bCoef":0.4,"cGroup":["ball","kick","score"]},{"radius":5,"pos":[-700,90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[-700,-90],"color":"D60000","trait":"traveRed"},{"radius":5,"pos":[700,90],"color":"247BE3","trait":"traveBlue"},{"radius":5,"pos":[700,-90],"color":"247BE3","trait":"traveBlue"},{"pos":[-700,320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[-700,-320],"color":"969EA8","trait":"bandeiraRed"},{"pos":[700,320],"color":"969EA8","trait":"bandeiraBlue"},{"pos":[700,-320],"color":"969EA8","trait":"bandeiraBlue"}],"planes":[{"normal":[0,1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,-350],"b":[850,-350]}}},{"normal":[1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[-780,-350],"b":[-780,350]}}},{"normal":[0,-1],"dist":-350,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-850,-350,850,350],"a":[-850,350],"b":[850,350]}}},{"normal":[-1,0],"dist":-780,"cMask":["red","blue","ball"],"color":"969EA8","_data":{"extremes":{"normal":[-1,0],"dist":-780,"canvas_rect":[-850,-350,850,350],"a":[780,-350],"b":[780,350]}}}],"traits":{"rede":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"color":"F2F2F2"},"rede2":{"vis":false,"bCoef":0.1,"cMask":["ball"],"color":"F2F2F2"},"parede":{"vis":false,"bCoef":1,"cMask":["ball"],"bias":10},"traveRed":{"radius":6,"invMass":0,"bCoef":0.5,"color":"E18977"},"traveBlue":{"radius":6,"invMass":0,"bCoef":0.5,"color":"85ACF3"},"bandeiraRed":{"radius":3,"color":"E18977","cMask":[""]},"bandeiraBlue":{"radius":3,"color":"85ACF3","cMask":[""]},"linha":{"cMask":[""],"color":"F2F2F2"},"hb":{"cMask":[""],"color":"F2F2F2"}},"ballPhysics":"disc0","playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.95},"joints":[],"redSpawnPoints":[[-530,0],[-135,90],[-135,-90],[-285,0],[-765,0]],"blueSpawnPoints":[[530,0],[135,90],[135,-90],[285,0],[765,0]]}';
var v6Map = '{"name":"Futsal x5 [Briancic] [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":1080,"height":532,"bg":{"type":"grass","kickOffRadius":6,"color":"474747"},"vertexes":[{"x":-950,"y":460,"cMask":["ball"]},{"x":-950,"y":90,"cMask":["blue","ball"]},{"x":-950,"y":-90,"cMask":["blue","ball"]},{"x":-950,"y":-460,"cMask":["ball"]},{"x":950,"y":456,"cMask":["ball"]},{"x":950,"y":90,"cMask":["red","ball"]},{"x":950,"y":-90,"cMask":["red","ball"]},{"x":950,"y":-456,"cMask":["ball"]},{"x":0,"y":508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0,"cMask":[]},{"x":0,"y":-508,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-990,"y":-90,"bCoef":0.1,"cMask":["blue","ball"]},{"x":990,"y":-90,"bCoef":0.1,"cMask":["red","ball"]},{"x":-990,"y":90,"bCoef":0.1,"cMask":["blue","ball"]},{"x":990,"y":90,"bCoef":0.1,"cMask":["red","ball"]},{"x":951,"y":460,"cMask":["ball"]},{"x":951,"y":-460,"cMask":["ball"]},{"x":0,"y":460,"bCoef":0,"cMask":[]},{"x":0,"y":-460,"bCoef":0,"cMask":[]},{"x":0,"y":150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":958,"y":-90,"cMask":["ball"]},{"x":958,"y":-460,"cMask":["ball"]},{"x":-958,"y":-90,"cMask":["ball"]},{"x":-958,"y":-460,"cMask":["ball"]},{"x":-958,"y":90,"cMask":["ball"]},{"x":-958,"y":460,"cMask":["ball"]},{"x":958,"y":90,"cMask":["ball"]},{"x":958,"y":460,"cMask":["ball"]},{"x":-450,"y":450,"bCoef":0,"cMask":[]},{"x":-450,"y":470,"bCoef":0,"cMask":[]},{"x":-250,"y":450,"bCoef":0,"cMask":[]},{"x":-250,"y":470,"bCoef":0,"cMask":[]},{"x":975,"y":190,"bCoef":0.1,"cMask":[]},{"x":955,"y":190,"bCoef":0.1,"cMask":[]},{"x":975,"y":-190,"bCoef":0.1,"cMask":[]},{"x":955,"y":-190,"bCoef":0.1,"cMask":[]},{"x":-975,"y":-190,"bCoef":0.1,"cMask":[]},{"x":-955,"y":-190,"bCoef":0.1,"cMask":[]},{"x":-975,"y":190,"bCoef":0.1,"cMask":[]},{"x":-955,"y":190,"bCoef":0.1,"cMask":[]},{"x":-950,"y":440,"bCoef":0.1,"cMask":[]},{"x":-930,"y":460,"bCoef":0.1,"cMask":[]},{"x":-950,"y":-440,"bCoef":0.1,"cMask":[]},{"x":-930,"y":-460,"bCoef":0.1,"cMask":[]},{"x":950,"y":-440,"bCoef":0.1,"cMask":[]},{"x":930,"y":-460,"bCoef":0.1,"cMask":[]},{"x":950,"y":440,"bCoef":0.1,"cMask":[]},{"x":930,"y":460,"bCoef":0.1,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":-950,"y":321.62551819445,"bCoef":0,"cMask":[]},{"x":950,"y":-320,"bCoef":0,"cMask":[]},{"x":820,"y":-320,"bCoef":0,"cMask":[]},{"x":665,"y":-235,"bCoef":0,"cMask":[]},{"x":635,"y":-135,"bCoef":0,"cMask":[]},{"x":635,"y":140,"bCoef":0,"cMask":[]},{"x":665,"y":235,"bCoef":0,"cMask":[]},{"x":820,"y":320,"bCoef":0,"cMask":[]},{"x":950,"y":320,"bCoef":0,"cMask":[]},{"x":-950,"y":-320,"bCoef":0,"cMask":[]},{"x":-820,"y":-320,"bCoef":0,"cMask":[]},{"x":-665,"y":-235,"bCoef":0,"cMask":[]},{"x":-635,"y":-135,"bCoef":0,"cMask":[]},{"x":-635,"y":135,"bCoef":0,"cMask":[]},{"x":-665,"y":235,"bCoef":0,"cMask":[]},{"x":-820,"y":320,"bCoef":0,"cMask":[]},{"x":-950,"y":320,"bCoef":0,"cMask":[]},{"x":0,"y":-1.5,"bCoef":0,"cMask":[]},{"x":0,"y":1.5,"bCoef":0,"cMask":[]},{"x":0,"y":-3,"bCoef":0,"cMask":[]},{"x":0,"y":3,"bCoef":0,"cMask":[]},{"x":0,"y":-4.5,"bCoef":0,"cMask":[]},{"x":0,"y":4.5,"bCoef":0,"cMask":[]},{"x":0,"y":-1.5,"bCoef":0,"cMask":[]},{"x":0,"y":1.5,"bCoef":0,"cMask":[]},{"x":0,"y":-3,"bCoef":0,"cMask":[]},{"x":0,"y":3,"bCoef":0,"cMask":[]},{"x":0,"y":-4.5,"bCoef":0,"cMask":[]},{"x":0,"y":4.5,"bCoef":0,"cMask":[]},{"x":635,"y":-1.5,"bCoef":0,"cMask":[]},{"x":635,"y":1.5,"bCoef":0,"cMask":[]},{"x":635,"y":-3,"bCoef":0,"cMask":[]},{"x":635,"y":3,"bCoef":0,"cMask":[]},{"x":635,"y":-4.5,"bCoef":0,"cMask":[]},{"x":635,"y":4.5,"bCoef":0,"cMask":[]},{"x":635,"y":-1.5,"bCoef":0,"cMask":[]},{"x":635,"y":1.5,"bCoef":0,"cMask":[]},{"x":635,"y":-3,"bCoef":0,"cMask":[]},{"x":635,"y":3,"bCoef":0,"cMask":[]},{"x":635,"y":-4.5,"bCoef":0,"cMask":[]},{"x":635,"y":4.5,"bCoef":0,"cMask":[]},{"x":490,"y":-1.5,"bCoef":0,"cMask":[]},{"x":490,"y":1.5,"bCoef":0,"cMask":[]},{"x":490,"y":-3,"bCoef":0,"cMask":[]},{"x":490,"y":3,"bCoef":0,"cMask":[]},{"x":490,"y":-4.5,"bCoef":0,"cMask":[]},{"x":490,"y":4.5,"bCoef":0,"cMask":[]},{"x":490,"y":-1.5,"bCoef":0,"cMask":[]},{"x":490,"y":1.5,"bCoef":0,"cMask":[]},{"x":490,"y":-3,"bCoef":0,"cMask":[]},{"x":490,"y":3,"bCoef":0,"cMask":[]},{"x":490,"y":-4.5,"bCoef":0,"cMask":[]},{"x":490,"y":4.5,"bCoef":0,"cMask":[]},{"x":490,"y":221.5,"bCoef":0,"cMask":[]},{"x":490,"y":220,"bCoef":0,"cMask":[]},{"x":490,"y":221.5,"bCoef":0,"cMask":[]},{"x":490,"y":220,"bCoef":0,"cMask":[]},{"x":490,"y":-221.5,"bCoef":0,"cMask":[]},{"x":490,"y":-220,"bCoef":0,"cMask":[]},{"x":490,"y":-221.5,"bCoef":0,"cMask":[]},{"x":490,"y":-220,"bCoef":0,"cMask":[]},{"x":-490,"y":-1.5,"bCoef":0,"cMask":[]},{"x":-490,"y":1.5,"bCoef":0,"cMask":[]},{"x":-490,"y":-3,"bCoef":0,"cMask":[]},{"x":-490,"y":3,"bCoef":0,"cMask":[]},{"x":-490,"y":-4.5,"bCoef":0,"cMask":[]},{"x":-490,"y":4.5,"bCoef":0,"cMask":[]},{"x":-490,"y":-1.5,"bCoef":0,"cMask":[]},{"x":-490,"y":1.5,"bCoef":0,"cMask":[]},{"x":-490,"y":-3,"bCoef":0,"cMask":[]},{"x":-490,"y":3,"bCoef":0,"cMask":[]},{"x":-490,"y":-4.5,"bCoef":0,"cMask":[]},{"x":-490,"y":4.5,"bCoef":0,"cMask":[]},{"x":-490,"y":221.5,"bCoef":0,"cMask":[]},{"x":-490,"y":220,"bCoef":0,"cMask":[]},{"x":-490,"y":221.5,"bCoef":0,"cMask":[]},{"x":-490,"y":220,"bCoef":0,"cMask":[]},{"x":-490,"y":-221.5,"bCoef":0,"cMask":[]},{"x":-490,"y":-220,"bCoef":0,"cMask":[]},{"x":-490,"y":-221.5,"bCoef":0,"cMask":[]},{"x":-490,"y":-220,"bCoef":0,"cMask":[]},{"x":-635,"y":-1.5,"bCoef":0,"cMask":[]},{"x":-635,"y":1.5,"bCoef":0,"cMask":[]},{"x":-635,"y":-3,"bCoef":0,"cMask":[]},{"x":-635,"y":3,"bCoef":0,"cMask":[]},{"x":-635,"y":-4.5,"bCoef":0,"cMask":[]},{"x":-635,"y":4.5,"bCoef":0,"cMask":[]},{"x":-635,"y":-1.5,"bCoef":0,"cMask":[]},{"x":-635,"y":1.5,"bCoef":0,"cMask":[]},{"x":-635,"y":-3,"bCoef":0,"cMask":[]},{"x":-635,"y":3,"bCoef":0,"cMask":[]},{"x":-635,"y":-4.5,"bCoef":0,"cMask":[]},{"x":-635,"y":4.5,"bCoef":0,"cMask":[]},{"x":-950,"y":-10,"bCoef":0,"cMask":[]},{"x":-950,"y":10,"bCoef":0,"cMask":[]},{"x":950,"y":-10,"bCoef":0,"cMask":[]},{"x":950,"y":10,"bCoef":0,"cMask":[]},{"x":-950,"y":-30,"bCoef":0,"cMask":[]},{"x":-950,"y":-50,"bCoef":0,"cMask":[]},{"x":-950,"y":-90,"bCoef":0,"cMask":[]},{"x":-950,"y":-70,"bCoef":0,"cMask":[]},{"x":-950,"y":50,"bCoef":0,"cMask":[]},{"x":-950,"y":30,"bCoef":0,"cMask":[]},{"x":-950,"y":70,"bCoef":0,"cMask":[]},{"x":-950,"y":90,"bCoef":0,"cMask":[]},{"x":950,"y":-30,"bCoef":0,"cMask":[]},{"x":950,"y":-50,"bCoef":0,"cMask":[]},{"x":950,"y":-90,"bCoef":0,"cMask":[]},{"x":950,"y":-70,"bCoef":0,"cMask":[]},{"x":950,"y":50,"bCoef":0,"cMask":[]},{"x":950,"y":30,"bCoef":0,"cMask":[]},{"x":950,"y":70,"bCoef":0,"cMask":[]},{"x":950,"y":90,"bCoef":0,"cMask":[]},{"x":250,"y":450,"bCoef":0,"cMask":[]},{"x":250,"y":470,"bCoef":0,"cMask":[]},{"x":450,"y":450,"bCoef":0,"cMask":[]},{"x":450,"y":470,"bCoef":0,"cMask":[]},{"x":-250,"y":-450,"bCoef":0,"cMask":[]},{"x":-250,"y":-470,"bCoef":0,"cMask":[]},{"x":-450,"y":-450,"bCoef":0,"cMask":[]},{"x":-450,"y":-470,"bCoef":0,"cMask":[]},{"x":450,"y":-450,"bCoef":0,"cMask":[]},{"x":450,"y":-470,"bCoef":0,"cMask":[]},{"x":250,"y":-450,"bCoef":0,"cMask":[]},{"x":250,"y":-470,"bCoef":0,"cMask":[]}],"segments":[{"v0":0,"v1":1,"vis":false,"cMask":["ball"]},{"v0":2,"v1":3,"vis":false,"cMask":["ball"],"color":"B2B2B2"},{"v0":4,"v1":5,"vis":false,"cMask":["ball"],"color":"B2B2B2"},{"v0":6,"v1":7,"vis":false,"cMask":["ball"],"color":"B2B2B2"},{"v0":8,"v1":9,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":9,"v1":10,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":10,"v1":9,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"]},{"v0":10,"v1":11,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":12,"bCoef":0.1,"cMask":["blue","ball"],"color":"F4F4F4"},{"v0":6,"v1":13,"bCoef":0.1,"cMask":["red","ball"],"color":"F4F4F4"},{"v0":1,"v1":14,"bCoef":0.1,"cMask":["blue","ball"],"color":"F4F4F4"},{"v0":5,"v1":15,"bCoef":0.1,"cMask":["red","ball"],"color":"F4F4F4"},{"v0":12,"v1":14,"bCoef":0.1,"cMask":["blue","ball"],"color":"F4F4F4"},{"v0":13,"v1":15,"bCoef":0.1,"cMask":["red","ball"],"color":"F4F4F4"},{"v0":1,"v1":0,"cMask":["ball"],"color":"B2B2B2"},{"v0":5,"v1":4,"cMask":["ball"],"color":"B2B2B2"},{"v0":2,"v1":3,"cMask":["ball"],"color":"B2B2B2"},{"v0":6,"v1":7,"cMask":["ball"],"color":"B2B2B2"},{"v0":0,"v1":16,"cMask":["ball"],"color":"B2B2B2"},{"v0":3,"v1":17,"cMask":["ball"],"color":"B2B2B2"},{"v0":18,"v1":19,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":9,"v1":10,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":21,"v1":20,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":2,"v1":1,"bCoef":0,"cMask":[],"color":"A00000"},{"v0":6,"v1":5,"bCoef":0,"cMask":[],"color":"59E"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":30,"v1":31,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":32,"v1":33,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":34,"v1":35,"bCoef":0.1,"cMask":[],"color":"B2B2B2"},{"v0":36,"v1":37,"bCoef":0.1,"cMask":[],"color":"B2B2B2"},{"v0":38,"v1":39,"bCoef":0.1,"cMask":[],"color":"B2B2B2"},{"v0":40,"v1":41,"bCoef":0.1,"cMask":[],"color":"B2B2B2"},{"v0":42,"v1":43,"bCoef":0.1,"curve":110,"curveF":0.7002075382097098,"cMask":[],"color":"B2B2B2"},{"v0":45,"v1":44,"bCoef":0.1,"curve":110,"curveF":0.7002075382097098,"cMask":[],"color":"B2B2B2"},{"v0":46,"v1":47,"bCoef":0.1,"curve":110,"curveF":0.7002075382097098,"cMask":[],"color":"B2B2B2"},{"v0":49,"v1":48,"bCoef":0.1,"curve":110,"curveF":0.7002075382097098,"cMask":[],"color":"B2B2B2"},{"v0":52,"v1":53,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":54,"v1":53,"bCoef":0,"curve":52.529593363569504,"curveF":2.0264799224175936,"cMask":[],"color":"B2B2B2"},{"v0":55,"v1":54,"bCoef":0,"curve":30.600738665584572,"curveF":3.6552917793944424,"cMask":[],"color":"B2B2B2"},{"v0":56,"v1":55,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":57,"v1":56,"bCoef":0,"curve":30.600738665584572,"curveF":3.6552917793944424,"cMask":[],"color":"B2B2B2"},{"v0":58,"v1":57,"bCoef":0,"curve":52.529593363569504,"curveF":2.0264799224175936,"cMask":[],"color":"B2B2B2"},{"v0":59,"v1":58,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":60,"v1":61,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":61,"v1":62,"bCoef":0,"curve":52.529593363569504,"curveF":2.0264799224175936,"cMask":[],"color":"B2B2B2"},{"v0":62,"v1":63,"bCoef":0,"curve":30.600738665584572,"curveF":3.6552917793944424,"cMask":[],"color":"B2B2B2"},{"v0":64,"v1":63,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":64,"v1":65,"bCoef":0,"curve":30.600738665584572,"curveF":3.6552917793944424,"cMask":[],"color":"B2B2B2"},{"v0":65,"v1":66,"bCoef":0,"curve":52.529593363569504,"curveF":2.0264799224175936,"cMask":[],"color":"B2B2B2"},{"v0":67,"v1":66,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":68,"v1":69,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":70,"v1":71,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":72,"v1":73,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":75,"v1":74,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":77,"v1":76,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":79,"v1":78,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":80,"v1":81,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":82,"v1":83,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":84,"v1":85,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":87,"v1":86,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":89,"v1":88,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":91,"v1":90,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":92,"v1":93,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":94,"v1":95,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":96,"v1":97,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":99,"v1":98,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":101,"v1":100,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":103,"v1":102,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":104,"v1":105,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":107,"v1":106,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":109,"v1":108,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":110,"v1":111,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":112,"v1":113,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":114,"v1":115,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":116,"v1":117,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":119,"v1":118,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":121,"v1":120,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":123,"v1":122,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":124,"v1":125,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":127,"v1":126,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":129,"v1":128,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":130,"v1":131,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":132,"v1":133,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":134,"v1":135,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":136,"v1":137,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":139,"v1":138,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":141,"v1":140,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":143,"v1":142,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"B2B2B2"},{"v0":144,"v1":145,"bCoef":0,"cMask":[],"color":"CC0000"},{"v0":146,"v1":147,"bCoef":0,"cMask":[],"color":"CC"},{"v0":148,"v1":149,"bCoef":0,"cMask":[],"color":"CC0000"},{"v0":150,"v1":151,"bCoef":0,"cMask":[],"color":"CC0000"},{"v0":152,"v1":153,"bCoef":0,"cMask":[],"color":"CC0000"},{"v0":154,"v1":155,"bCoef":0,"cMask":[],"color":"CC0000"},{"v0":156,"v1":157,"bCoef":0,"cMask":[],"color":"CC"},{"v0":158,"v1":159,"bCoef":0,"cMask":[],"color":"CC"},{"v0":160,"v1":161,"bCoef":0,"cMask":[],"color":"CC"},{"v0":162,"v1":163,"bCoef":0,"cMask":[],"color":"CC"},{"v0":164,"v1":165,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":166,"v1":167,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":168,"v1":169,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":170,"v1":171,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":172,"v1":173,"bCoef":0,"cMask":[],"color":"B2B2B2"},{"v0":174,"v1":175,"bCoef":0,"cMask":[],"color":"B2B2B2"}],"planes":[{"normal":[0,1],"dist":-460,"cMask":["ball"]},{"normal":[0,-1],"dist":-460,"cMask":["ball"]},{"normal":[0,1],"dist":-508,"bCoef":0.2},{"normal":[0,-1],"dist":-508,"bCoef":0.2},{"normal":[1,0],"dist":-1002,"bCoef":0.2},{"normal":[-1,0],"dist":-1002,"bCoef":0.2}],"goals":[{"p0":[-957.4,-90],"p1":[-957.4,90],"team":"red"},{"p0":[957.4,90],"p1":[957.4,-90],"team":"blue"}],"discs":[{"radius":6.4,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-950,90],"radius":5,"bCoef":1,"invMass":0,"color":"8E0000"},{"pos":[-950,-90],"radius":5,"bCoef":1,"invMass":0,"color":"8E0000"},{"pos":[950,90],"radius":5,"bCoef":1,"invMass":0,"color":"8E"},{"pos":[950,-90],"radius":5,"bCoef":1,"invMass":0,"color":"8E"},{"pos":[-950,460],"radius":3.5,"bCoef":0.1,"invMass":0,"color":"FF5454","cMask":[]},{"pos":[-950,-460],"radius":3.5,"bCoef":0.1,"invMass":0,"color":"FF5454","cMask":[]},{"pos":[950,-460],"radius":3.5,"bCoef":0.1,"invMass":0,"color":"5462FF","cMask":[]},{"pos":[950,460],"radius":3.5,"bCoef":0.1,"invMass":0,"color":"5462FF","cMask":[]},{"pos":[990,90],"radius":4,"bCoef":0.1,"invMass":0,"color":"8E","cMask":[]},{"pos":[990,-90],"radius":4,"bCoef":0.1,"invMass":0,"color":"8E","cMask":[]},{"pos":[-990,-90],"radius":4,"bCoef":0.1,"invMass":0,"color":"8E0000","cMask":[]},{"pos":[-990,90],"radius":4,"bCoef":0.1,"invMass":0,"color":"8E0000","cMask":[]}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":310,"canBeStored":true}';
var v7Map = '{"name":"Estadio Futsal x7 Diego Armando Maradona from HaxMaps","width":1275,"height":635,"spawnDistance":450,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"bg":{"type":"hockey"},"vertexes":[{"x":-1200,"y":-600,"trait":"art","color":"b3b6b6"},{"x":1200,"y":-600,"trait":"art","color":"b3b6b6"},{"x":-1200,"y":600,"trait":"art","color":"b3b6b6"},{"x":1200,"y":600,"trait":"art","color":"b3b6b6"},{"x":-1200,"y":-110,"trait":"art","color":"b3b6b6"},{"x":1200,"y":-110,"trait":"art","color":"b3b6b6"},{"x":1200,"y":110,"trait":"art","color":"b3b6b6"},{"x":-1200,"y":110,"trait":"art","color":"b3b6b6"},{"x":-1252,"y":-110,"trait":"art","color":"e0d5d6"},{"x":-1252,"y":110,"trait":"art","color":"e0d5d6"},{"x":1252,"y":-110,"trait":"art","color":"e0d5d6"},{"x":1252,"y":110,"trait":"art","color":"e0d5d6"},{"x":0,"y":-600,"trait":"art","color":"b3b6b6"},{"x":0,"y":-170,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"b3b6b6"},{"x":0,"y":170,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"b3b6b6"},{"x":0,"y":600,"trait":"art","color":"b3b6b6"},{"x":-787,"y":-5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-787,"y":5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":787,"y":205,"trait":"art","curve":-90,"color":"b3b6b6"},{"x":-1075,"y":-470,"trait":"art","color":"b3b6b6","curve":90},{"x":-787,"y":-205,"trait":"art","color":"b3b6b6","curve":90},{"x":-787,"y":205,"trait":"art","color":"b3b6b6","curve":90},{"x":787,"y":-205,"trait":"art","color":"b3b6b6","curve":-90},{"x":-1075,"y":470,"trait":"art","color":"b3b6b6","curve":90},{"x":-1206.5,"y":-600,"trait":"art"},{"x":-1206.5,"y":-110,"trait":"art"},{"x":1543.25,"y":644,"trait":"art"},{"x":1543.25,"y":154,"trait":"art"},{"x":-1206.5,"y":600,"trait":"art"},{"x":-1206.5,"y":110,"trait":"art"},{"x":1206.5,"y":-600,"trait":"art"},{"x":1206.5,"y":-110,"trait":"art"},{"x":1206.5,"y":600,"trait":"art"},{"x":1206.5,"y":110,"trait":"art"},{"x":0,"y":-635,"trait":"art"},{"x":0,"y":635,"trait":"art"},{"x":-1202,"y":-110,"trait":"art"},{"x":-1202,"y":110,"trait":"art"},{"x":1202,"y":-110,"trait":"art"},{"x":1202,"y":110,"trait":"art"},{"x":1200,"y":-110,"trait":"art","color":"007bfd","curve":0},{"x":1200,"y":110,"trait":"art","color":"3bc7fa","curve":0},{"x":-1198,"y":-110,"trait":"art"},{"x":-1198,"y":110,"trait":"art"},{"x":-1252,"y":116.5,"trait":"art"},{"x":-1199,"y":116.5,"trait":"art"},{"x":-1252,"y":-116.5,"trait":"art"},{"x":-1199,"y":-116.5,"trait":"art"},{"x":1201,"y":-116.5,"trait":"art"},{"x":1252,"y":-116.5,"trait":"art"},{"x":1200,"y":116.5,"trait":"art"},{"x":1252,"y":116.5,"trait":"art"},{"x":1200,"y":-69,"trait":"art","color":"007bfd","curve":0},{"x":1200,"y":-42,"trait":"art","color":"007bfd"},{"x":1200,"y":-15,"trait":"art","color":"007bfd"},{"x":1200,"y":12,"trait":"art","color":"007bfd"},{"x":1200,"y":39,"trait":"art","color":"007bfd"},{"x":1200,"y":69,"trait":"art"},{"x":-1200,"y":-110,"trait":"art","color":"ce142e","curve":0},{"x":-1200,"y":110,"trait":"art","color":"ce142e","curve":0},{"x":-1200,"y":-69,"trait":"art","color":"ce142e","curve":0},{"x":-1200,"y":-42,"trait":"art","color":"ce142e"},{"x":-1200,"y":-15,"trait":"art","color":"ce142e"},{"x":-1200,"y":12,"trait":"art","color":"ce142e"},{"x":-1200,"y":39,"trait":"art","color":"ce142e"},{"x":-1200,"y":69,"trait":"art","color":"ce142e"},{"x":250,"y":585,"trait":"art"},{"x":250,"y":616,"trait":"art"},{"x":500,"y":585,"trait":"art"},{"x":500,"y":616,"trait":"art"},{"x":800,"y":600,"trait":"art"},{"x":800,"y":616,"trait":"art"},{"x":-250,"y":585,"trait":"art"},{"x":-250,"y":616,"trait":"art"},{"x":-500,"y":585,"trait":"art"},{"x":-500,"y":616,"trait":"art"},{"x":-800,"y":600,"trait":"art"},{"x":-800,"y":616,"trait":"art"},{"x":250,"y":-585,"trait":"art"},{"x":250,"y":-616,"trait":"art"},{"x":500,"y":-585,"trait":"art"},{"x":500,"y":-616,"trait":"art"},{"x":800,"y":-600,"trait":"art"},{"x":800,"y":-616,"trait":"art"},{"x":-250,"y":-585,"trait":"art"},{"x":-250,"y":-616,"trait":"art"},{"x":-500,"y":-585,"trait":"art"},{"x":-500,"y":-616,"trait":"art"},{"x":-800,"y":-600,"trait":"art"},{"x":-800,"y":-616,"trait":"art"},{"x":-1200,"y":-250,"trait":"art"},{"x":-1216,"y":-250,"trait":"art"},{"x":-1200,"y":250,"trait":"art"},{"x":-1216,"y":250,"trait":"art"},{"x":1200,"y":-250,"trait":"art"},{"x":1216,"y":-250,"trait":"art"},{"x":1200,"y":250,"trait":"art"},{"x":1216,"y":250,"trait":"art"},{"x":787,"y":-5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":787,"y":5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":-5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":-5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":5,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":-300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":610,"y":-305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":-300,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-610,"y":-305,"trait":"art","curve":-110,"color":"b3b6b6"},{"x":-1200,"y":470,"trait":"art"},{"x":-1075,"y":-470,"trait":"art","color":"b3b6b6","curve":90},{"x":-1200,"y":-470,"trait":"art"},{"x":1075,"y":-470,"trait":"art","color":"b3b6b6","curve":-90},{"x":1200,"y":-470,"trait":"art"},{"x":1200,"y":470,"trait":"art","color":"b3b6b6","curve":90},{"x":1075,"y":470,"trait":"art","curve":-90},{"x":-1170,"y":-600,"trait":"art","curve":90},{"x":-1200,"y":-570,"trait":"art","curve":90},{"x":-1200,"y":570,"trait":"art","curve":90},{"x":-1170,"y":600,"trait":"art","curve":90},{"x":1200,"y":570,"trait":"art","curve":-90},{"x":1170,"y":600,"trait":"art","curve":-90},{"x":1170,"y":-600,"trait":"art"},{"x":1200,"y":-570,"trait":"art"},{"trait":"art","x":-64.99609375,"y":123.7578125},{"trait":"art","x":-86.99609375,"y":89.7578125},{"trait":"art","x":-103.99609375,"y":42.7578125},{"trait":"art","x":-107.99609375,"y":23.7578125},{"trait":"art","x":-89.99609375,"y":-15.2421875},{"trait":"art","x":-62.99609375,"y":-51.2421875},{"trait":"art","x":63.00390625,"y":122.7578125,"curve":-10},{"trait":"art","x":82.00390625,"y":61.7578125,"curve":-10},{"trait":"art","x":85.00390625,"y":31.7578125},{"trait":"art","x":-32,"y":84},{"trait":"art","x":15.00390625,"y":67.7578125},{"trait":"art","x":30,"y":87},{"trait":"art","x":48,"y":33.7578125,"curve":-50},{"trait":"art","x":-41.99609375,"y":76.7578125},{"trait":"art","x":-67.99609375,"y":37.7578125},{"trait":"art","x":-69.99609375,"y":16.7578125},{"trait":"art","x":-58.99609375,"y":-11.2421875},{"trait":"art","x":44,"y":22.7578125,"curve":-50},{"trait":"art","x":12,"y":-55.2421875},{"trait":"art","x":-64,"y":156},{"trait":"art","x":-63,"y":134},{"trait":"art","x":-74,"y":110},{"trait":"art","x":-98,"y":63},{"trait":"art","x":-102,"y":5.333343505859375},{"trait":"art","x":-77,"y":-35.666656494140625},{"trait":"art","x":-48,"y":-37.33331298828125},{"trait":"art","x":-6,"y":-74.33331298828125,"curve":202.6198649480404,"color":"B28E26"},{"trait":"art","x":-11,"y":-41.33331298828125,"curve":202.6198649480404,"color":"B28E26"},{"trait":"art","x":-20,"y":-103.031982421875},{"trait":"art","x":25,"y":-108,"color":"B28E26"},{"trait":"art","x":-18,"y":-120.031982421875,"color":"B28E26"},{"trait":"art","x":32,"y":-121.031982421875,"color":"B28E26"},{"trait":"art","x":33,"y":-128.031982421875,"color":"B28E26"},{"trait":"art","x":-16,"y":-147.031982421875,"color":"B28E26"},{"trait":"art","x":-20,"y":-133.031982421875,"color":"B28E26"},{"trait":"art","x":-48,"y":-72.69863891601562},{"trait":"art","x":-34,"y":-64},{"trait":"art","x":17,"y":84.15850830078125,"curve":-80},{"trait":"art","x":81,"y":14.72991943359375,"curve":-10},{"trait":"art","x":-29,"y":75.15850830078125},{"trait":"art","x":-33,"y":62.15850830078125},{"trait":"art","x":-39,"y":50.15850830078125,"curve":-128.5354171242176},{"trait":"art","x":5,"y":-3.27008056640625,"curve":-128.5354171242176},{"trait":"art","x":17,"y":4.72991943359375,"curve":60},{"trait":"art","x":27,"y":44.72991943359375,"curve":20},{"trait":"art","x":22,"y":58.72991943359375},{"trait":"art","x":-60,"y":49,"curve":-70},{"trait":"art","x":-81,"y":83.15850830078125,"curve":70},{"trait":"art","x":-18,"y":-1.698638916015625,"curve":-128.5354171242176},{"trait":"art","x":62,"y":156},{"trait":"art","x":63,"y":122.72991943359375},{"trait":"art","x":48,"y":61},{"trait":"art","x":58,"y":90},{"trait":"art","x":79,"y":73.30136108398438},{"trait":"art","x":33,"y":-54.7421875,"curve":30},{"trait":"art","x":-94,"y":73,"curve":70},{"trait":"art","x":66,"y":43,"curve":-70},{"trait":"art","x":60,"y":58},{"trait":"art","x":66,"y":59},{"trait":"art","x":57,"y":63},{"trait":"art","x":44,"y":55},{"trait":"art","x":84,"y":38,"curve":-70},{"trait":"art","x":29.4285888671875,"y":-63.841522216796875,"curve":20},{"trait":"art","x":30.4285888671875,"y":-85.27008056640625,"curve":20},{"trait":"art","x":-37,"y":-90.69863891601562},{"trait":"art","x":-12,"y":-106.69863891601562,"curve":180},{"trait":"art","x":-8,"y":-100.69863891601562,"curve":180},{"trait":"art","x":-24,"y":-91},{"trait":"art","x":18,"y":-97.66665649414062},{"trait":"art","x":0,"y":-100,"curve":-180},{"trait":"art","x":-1,"y":-92.66665649414062,"curve":-180},{"trait":"art","x":13,"y":-90.66665649414062},{"trait":"art","x":21,"y":-83.66665649414062},{"trait":"art","x":3.66668701171875,"y":-91.33331298828125,"curve":-180},{"trait":"art","x":3.66668701171875,"y":-86.33331298828125,"curve":-180},{"trait":"art","x":-19,"y":-102.66665649414062,"color":"B28E26"},{"trait":"art","x":19.66668701171875,"y":-96.33331298828125},{"trait":"art","x":16.66668701171875,"y":-105.33331298828125},{"trait":"art","x":9.66668701171875,"y":-111.33331298828125},{"trait":"art","x":14.66668701171875,"y":-115.33331298828125},{"trait":"art","x":25.66668701171875,"y":-104.33331298828125,"color":"B28E26"},{"trait":"art","x":27.66668701171875,"y":-90.33331298828125},{"trait":"art","x":-28.3636474609375,"y":-113.71875,"curve":180},{"trait":"art","x":-21.3636474609375,"y":-111.71875,"curve":180},{"trait":"art","x":-28.3636474609375,"y":-95.71875},{"trait":"art","x":-32.0909423828125,"y":-64.446044921875},{"trait":"art","x":-22.0909423828125,"y":-88.446044921875},{"trait":"art","x":15.9090576171875,"y":-77.446044921875},{"trait":"art","x":12.9090576171875,"y":-54.446044921875,"color":"B28E26","curve":5},{"trait":"art","x":7.9090576171875,"y":-83.446044921875,"color":"B28E26","curve":5},{"trait":"art","x":13,"y":-52,"curve":-20},{"trait":"art","x":9,"y":-83.446044921875,"curve":-20},{"trait":"art","x":-28,"y":-64.446044921875,"color":"B28E26"},{"trait":"art","x":-20,"y":-92,"color":"B28E26"},{"trait":"art","x":-38.18182373046875,"y":-60.26422119140625},{"trait":"art","x":-21.18182373046875,"y":-87.26422119140625},{"trait":"art","x":-18,"y":-86,"color":"246C15","curve":55},{"trait":"art","x":2,"y":-86.5,"color":"246C15","curve":55},{"trait":"art","x":-19,"y":-80,"color":"246C15","curve":55},{"trait":"art","x":7,"y":-77,"color":"246C15","curve":55},{"trait":"art","x":25,"y":15,"curve":60},{"trait":"art","x":30,"y":39,"curve":20},{"trait":"art","x":-40,"y":28},{"trait":"art","x":-35,"y":12},{"trait":"art","x":-31,"y":3},{"trait":"art","x":-23,"y":-93},{"trait":"art","x":-22,"y":-84},{"trait":"art","x":26,"y":-51},{"trait":"art","x":34,"y":-52},{"trait":"art","x":20,"y":-45},{"trait":"art","x":18,"y":-46},{"trait":"art","x":16,"y":-51},{"trait":"art","x":29,"y":-58},{"trait":"art","x":14,"y":-55},{"trait":"art","x":33,"y":-57},{"trait":"art","x":14,"y":-52},{"trait":"art","x":28,"y":-47},{"trait":"art","x":19,"y":-46},{"trait":"art","x":26,"y":-48},{"trait":"art","x":24,"y":-55},{"trait":"art","x":30,"y":-57},{"trait":"art","x":-13,"y":72},{"trait":"art","x":-2,"y":72}],"segments":[{"v0":0,"v1":1,"color":"b3b6b6","trait":"parede"},{"v0":2,"v1":3,"color":"b3b6b6","trait":"parede"},{"v0":0,"v1":4,"color":"b3b6b6","trait":"parede"},{"v0":1,"v1":5,"color":"b3b6b6","trait":"parede"},{"v0":3,"v1":6,"color":"b3b6b6","trait":"parede"},{"v0":2,"v1":7,"color":"b3b6b6","trait":"parede"},{"v0":4,"v1":8,"color":"e0d5d6","trait":"gol"},{"v0":8,"v1":9,"color":"e0d5d6","trait":"gol","x":-1252},{"v0":9,"v1":7,"color":"e0d5d6","trait":"gol"},{"v0":5,"v1":10,"color":"e0d5d6","trait":"gol"},{"v0":10,"v1":11,"color":"e0d5d6","trait":"gol","x":1252},{"v0":11,"v1":6,"color":"e0d5d6","trait":"gol"},{"v0":12,"v1":13,"color":"b3b6b6","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"b3b6b6","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"curve":180,"color":"b3b6b6","cMask":["red","blue"],"cGroup":["redKO"]},{"v0":13,"v1":14,"curve":-180,"color":"b3b6b6","cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":16,"v1":17,"curve":-180,"color":"b3b6b6","trait":"art","x":-787},{"v0":16,"v1":17,"curve":180,"color":"b3b6b6","trait":"art","x":-787},{"v0":16,"v1":17,"curve":110,"color":"b3b6b6","trait":"art","x":-787},{"v0":16,"v1":17,"curve":-110,"color":"b3b6b6","trait":"art","x":-787},{"v0":19,"v1":20,"curve":90,"color":"b3b6b6","trait":"art"},{"v0":20,"v1":21,"curve":0,"color":"b3b6b6","trait":"art","x":-787},{"v0":18,"v1":22,"curve":0,"color":"b3b6b6","trait":"art","x":787},{"v0":21,"v1":23,"curve":90,"color":"b3b6b6","trait":"art"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"cMask":["ball"]},{"v0":30,"v1":31,"vis":false,"cMask":["ball"]},{"v0":32,"v1":33,"vis":false,"cMask":["ball"]},{"v0":12,"v1":34,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":15,"v1":35,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":40,"v1":41,"curve":0,"color":"3bc7fa","cMask":[""],"trait":"art","x":1200},{"v0":44,"v1":45,"vis":false,"cMask":["ball"]},{"v0":46,"v1":47,"vis":false,"cMask":["ball"]},{"v0":48,"v1":49,"vis":false,"cMask":["ball"]},{"v0":50,"v1":51,"vis":false,"cMask":["ball"]},{"v0":40,"v1":52,"curve":0,"color":"007bfd","trait":"art","x":1200},{"v0":53,"v1":54,"color":"007bfd","trait":"art","x":1200},{"v0":55,"v1":56,"color":"007bfd","trait":"art","x":1200},{"v0":41,"v1":57,"color":"007bfd","trait":"art","x":1200},{"v0":58,"v1":59,"curve":0,"color":"9b1617","cMask":[""],"trait":"art","x":-1200},{"v0":58,"v1":60,"curve":0,"color":"ce142e","trait":"art","x":-1200},{"v0":61,"v1":62,"color":"ce142e","trait":"art","x":-1200},{"v0":63,"v1":64,"color":"ce142e","trait":"art","x":-1200},{"v0":59,"v1":65,"color":"ce142e","trait":"art","x":-1200},{"v0":66,"v1":67,"color":"b3b6b6","trait":"art"},{"v0":68,"v1":69,"color":"b3b6b6","trait":"art","x":500},{"v0":70,"v1":71,"color":"b3b6b6","trait":"art","x":800},{"v0":72,"v1":73,"color":"b3b6b6","trait":"art","x":-250},{"v0":74,"v1":75,"color":"b3b6b6","trait":"art","x":-500},{"v0":76,"v1":77,"color":"b3b6b6","trait":"art","x":-800},{"v0":78,"v1":79,"color":"b3b6b6","trait":"art"},{"v0":80,"v1":81,"color":"b3b6b6","trait":"art","x":500},{"v0":82,"v1":83,"color":"b3b6b6","trait":"art","x":800},{"v0":84,"v1":85,"color":"b3b6b6","trait":"art","x":-250},{"v0":86,"v1":87,"color":"b3b6b6","trait":"art","x":-500},{"v0":88,"v1":89,"color":"b3b6b6","trait":"art","x":-800},{"v0":90,"v1":91,"color":"b3b6b6","trait":"art"},{"v0":92,"v1":93,"color":"b3b6b6","trait":"art","y":250},{"v0":94,"v1":95,"color":"b3b6b6","trait":"art"},{"v0":96,"v1":97,"color":"b3b6b6","trait":"art","y":250},{"v0":98,"v1":99,"curve":-180,"color":"b3b6b6","trait":"art","x":787},{"v0":98,"v1":99,"curve":180,"color":"b3b6b6","trait":"art","x":787},{"v0":98,"v1":99,"curve":110,"color":"b3b6b6","trait":"art","x":787},{"v0":98,"v1":99,"curve":-110,"color":"b3b6b6","trait":"art","x":787},{"v0":100,"v1":101,"curve":-180,"color":"b3b6b6","trait":"art","x":610},{"v0":100,"v1":101,"curve":180,"color":"b3b6b6","trait":"art","x":610},{"v0":100,"v1":101,"curve":110,"color":"b3b6b6","trait":"art","x":610},{"v0":100,"v1":101,"curve":-110,"color":"b3b6b6","trait":"art","x":610},{"v0":100,"v1":101,"curve":0,"color":"b3b6b6","trait":"art","x":610},{"v0":102,"v1":103,"curve":-180,"color":"b3b6b6","trait":"art","x":-610},{"v0":102,"v1":103,"curve":180,"color":"b3b6b6","trait":"art","x":-610},{"v0":102,"v1":103,"curve":110,"color":"b3b6b6","trait":"art","x":-610},{"v0":102,"v1":103,"curve":-110,"color":"b3b6b6","trait":"art","x":-610},{"v0":102,"v1":103,"curve":0,"color":"b3b6b6","trait":"art","x":-610},{"v0":104,"v1":105,"curve":-180,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":180,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":110,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":-110,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":0,"color":"b3b6b6","trait":"art","y":300,"x":610},{"v0":106,"v1":107,"curve":-180,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":106,"v1":107,"curve":180,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":106,"v1":107,"curve":110,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":106,"v1":107,"curve":-110,"color":"b3b6b6","trait":"art","x":610,"y":300},{"v0":106,"v1":107,"curve":0,"color":"b3b6b6","trait":"art","y":300,"x":610},{"v0":108,"v1":109,"curve":-180,"color":"b3b6b6","trait":"art","x":610,"y":-300},{"v0":108,"v1":109,"curve":180,"color":"b3b6b6","trait":"art","x":610,"y":-300},{"v0":108,"v1":109,"curve":110,"color":"b3b6b6","trait":"art","x":610,"y":-300},{"v0":108,"v1":109,"curve":-110,"color":"b3b6b6","trait":"art","x":610,"y":-300},{"v0":108,"v1":109,"curve":0,"color":"b3b6b6","trait":"art","y":-300,"x":610},{"v0":110,"v1":111,"curve":-180,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":180,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":110,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":-110,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":0,"color":"b3b6b6","trait":"art","y":300,"x":-610},{"v0":112,"v1":113,"curve":-180,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":112,"v1":113,"curve":180,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":112,"v1":113,"curve":110,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":112,"v1":113,"curve":-110,"color":"b3b6b6","trait":"art","x":-610,"y":300},{"v0":112,"v1":113,"curve":0,"color":"b3b6b6","trait":"art","y":300,"x":-610},{"v0":114,"v1":115,"curve":-180,"color":"b3b6b6","trait":"art","x":-610,"y":-300},{"v0":114,"v1":115,"curve":180,"color":"b3b6b6","trait":"art","x":-610,"y":-300},{"v0":114,"v1":115,"curve":110,"color":"b3b6b6","trait":"art","x":-610,"y":-300},{"v0":114,"v1":115,"curve":-110,"color":"b3b6b6","trait":"art","x":-610,"y":-300},{"v0":114,"v1":115,"curve":0,"color":"b3b6b6","trait":"art","y":-300,"x":-610},{"v0":23,"v1":116,"curve":0,"color":"b3b6b6","trait":"art"},{"v0":117,"v1":118,"curve":0,"color":"b3b6b6","trait":"art","y":-470},{"v0":119,"v1":120,"curve":0,"color":"b3b6b6","trait":"art","y":-470},{"v0":119,"v1":22,"curve":-90,"color":"b3b6b6","trait":"art"},{"v0":121,"v1":122,"curve":0,"color":"b3b6b6","trait":"art"},{"v0":18,"v1":122,"curve":-90,"color":"b3b6b6","trait":"art"},{"v0":123,"v1":124,"curve":90,"color":"b3b6b6","trait":"art"},{"v0":125,"v1":126,"curve":90,"color":"b3b6b6","trait":"art"},{"v0":127,"v1":128,"curve":-90,"color":"b3b6b6","trait":"art"},{"v0":129,"v1":130,"curve":-90,"color":"b3b6b6","trait":"art"},{"color":"545A5E","trait":"art","v0":133,"v1":134,"curve":33.03424172020898},{"color":"545A5E","trait":"art","v0":137,"v1":138,"curve":-10},{"color":"545A5E","trait":"art","v0":138,"v1":139},{"color":"545A5E","trait":"art","v0":142,"v1":143,"curve":-18.461829640016273},{"color":"545A5E","trait":"art","v0":140,"v1":144},{"color":"545A5E","trait":"art","v0":144,"v1":145,"curve":-13.097774288664919},{"color":"545A5E","trait":"art","v0":145,"v1":146,"curve":58.754806126949504},{"color":"545A5E","trait":"art","v0":146,"v1":147,"curve":15.103670239902254},{"color":"545A5E","trait":"art","v0":143,"v1":148,"curve":-50},{"color":"545A5E","trait":"art","v0":148,"v1":149},{"color":"545A5E","trait":"art","v0":150,"v1":151},{"color":"545A5E","trait":"art","v0":151,"v1":131},{"color":"545A5E","trait":"art","v0":131,"v1":152},{"color":"545A5E","trait":"art","v0":152,"v1":132},{"color":"545A5E","trait":"art","v0":132,"v1":153},{"color":"545A5E","trait":"art","v0":153,"v1":133},{"curve":16.163660543060686,"color":"545A5E","trait":"art","v0":134,"v1":154},{"curve":16.163660543060686,"color":"545A5E","trait":"art","v0":154,"v1":135},{"color":"545A5E","trait":"art","v0":135,"v1":155},{"color":"545A5E","trait":"art","v0":155,"v1":136},{"color":"545A5E","trait":"art","v0":147,"v1":156,"curve":-6.393600232588921},{"color":"B28E26","trait":"art","v0":157,"v1":158,"curve":-202.6198649480404},{"curve":202.6198649480404,"color":"B28E26","trait":"art","v0":157,"v1":158},{"color":"B28E26","trait":"art","v0":161,"v1":165},{"color":"B28E26","trait":"art","v0":165,"v1":164,"curve":59.780626093070495},{"color":"B28E26","trait":"art","v0":164,"v1":163,"curve":174.610491784953},{"color":"B28E26","trait":"art","v0":163,"v1":162,"curve":30.39928652453581},{"color":"B28E26","trait":"art","v0":162,"v1":160},{"curve":0,"color":"545A5E","trait":"art","v0":136,"v1":166},{"curve":0,"color":"545A5E","trait":"art","v0":156,"v1":167},{"curve":-39.605809775068934,"color":"545A5E","trait":"art","v0":141,"v1":168},{"curve":-105.04553310396913,"color":"545A5E","trait":"art","v0":168,"v1":142},{"color":"545A5E","trait":"art","v0":140,"v1":170},{"curve":-102.45200242884617,"color":"545A5E","trait":"art","v0":140,"v1":168},{"curve":0,"color":"545A5E","trait":"art","v0":170,"v1":171},{"curve":80.2416893688764,"color":"545A5E","trait":"art","v0":171,"v1":172},{"curve":78.35305922400015,"color":"545A5E","trait":"art","v0":173,"v1":174},{"curve":55.58015898408769,"color":"545A5E","trait":"art","v0":175,"v1":176},{"curve":0,"color":"545A5E","trait":"art","v0":176,"v1":141},{"curve":-70,"color":"545A5E","trait":"art","v0":178,"v1":177},{"curve":-48.127338569031984,"color":"545A5E","trait":"art","v0":173,"v1":179},{"color":"545A5E","trait":"art","v0":180,"v1":181,"curve":27.8696702290027},{"curve":-38.961600456558735,"color":"545A5E","trait":"art","v0":182,"v1":183},{"curve":-38.961600456558735,"color":"545A5E","trait":"art","v0":183,"v1":184},{"color":"545A5E","trait":"art","v0":139,"v1":169,"curve":-44.34854757908769},{"color":"545A5E","trait":"art","v0":169,"v1":185,"curve":-10},{"curve":70,"color":"545A5E","trait":"art","v0":178,"v1":186},{"curve":-10,"color":"545A5E","trait":"art","v0":143,"v1":187},{"curve":-154.94238458169707,"color":"545A5E","trait":"art","v0":187,"v1":188},{"curve":-10,"color":"545A5E","trait":"art","v0":188,"v1":138},{"curve":70.72492377413812,"color":"545A5E","trait":"art","v0":189,"v1":190},{"curve":70.72492377413812,"color":"545A5E","trait":"art","v0":190,"v1":191},{"curve":-70,"color":"545A5E","trait":"art","v0":187,"v1":192},{"curve":-50,"color":"545A5E","trait":"art","v0":143,"v1":191},{"curve":30,"color":"545A5E","trait":"art","v0":185,"v1":193},{"curve":20,"color":"545A5E","trait":"art","v0":193,"v1":194},{"color":"545A5E","trait":"art","v0":195,"v1":196},{"color":"545A5E","trait":"art","v0":196,"v1":197,"curve":180},{"color":"545A5E","trait":"art","v0":197,"v1":198},{"curve":0,"color":"545A5E","trait":"art","v0":194,"v1":199},{"curve":0,"color":"545A5E","trait":"art","v0":199,"v1":200},{"curve":-180,"color":"545A5E","trait":"art","v0":200,"v1":201},{"curve":0,"color":"545A5E","trait":"art","v0":201,"v1":202},{"curve":0,"color":"545A5E","trait":"art","v0":202,"v1":203},{"color":"545A5E","trait":"art","v0":204,"v1":205,"curve":-180},{"color":"B28E26","trait":"art","v0":161,"v1":206},{"curve":0,"color":"545A5E","trait":"art","v0":207,"v1":208},{"curve":0,"color":"545A5E","trait":"art","v0":208,"v1":209},{"curve":180,"color":"545A5E","trait":"art","v0":209,"v1":210},{"curve":0,"color":"545A5E","trait":"art","v0":210,"v1":211},{"curve":0,"color":"545A5E","trait":"art","v0":211,"v1":212},{"color":"545A5E","trait":"art","v0":166,"v1":195},{"color":"545A5E","trait":"art","v0":195,"v1":213},{"color":"545A5E","trait":"art","v0":213,"v1":214,"curve":180},{"color":"545A5E","trait":"art","v0":214,"v1":215},{"color":"545A5E","trait":"art","v0":216,"v1":217,"curve":-36.36730631142612},{"color":"545A5E","trait":"art","v0":205,"v1":218},{"color":"B28E26","trait":"art","v0":219,"v1":220,"curve":5},{"color":"545A5E","trait":"art","v0":221,"v1":222,"curve":-20},{"color":"B28E26","trait":"art","v0":223,"v1":224,"curve":-36.36730631142612},{"curve":-36.36730631142612,"color":"545A5E","trait":"art","v0":225,"v1":226},{"color":"246C15","trait":"art","v0":227,"v1":228,"curve":55},{"color":"246C15","trait":"art","v0":229,"v1":230,"curve":55},{"color":"545A5E","trait":"art","v0":174,"v1":231,"curve":60},{"color":"545A5E","trait":"art","v0":231,"v1":232,"curve":66.0183300419215},{"color":"545A5E","trait":"art","v0":232,"v1":175,"curve":84.08705600877737},{"curve":71.05742014253998,"color":"545A5E","trait":"art","v0":172,"v1":233},{"curve":66.93075869271057,"color":"545A5E","trait":"art","v0":233,"v1":234},{"curve":80.2416893688764,"color":"545A5E","trait":"art","v0":234,"v1":235},{"curve":80.2416893688764,"color":"545A5E","trait":"art","v0":235,"v1":179},{"color":"545A5E","trait":"art","v0":236,"v1":237},{"curve":0,"color":"545A5E","trait":"art","v0":238,"v1":239},{"curve":0,"color":"545A5E","trait":"art","v0":240,"v1":241},{"curve":0,"color":"545A5E","trait":"art","v0":241,"v1":242},{"curve":0,"color":"545A5E","trait":"art","v0":243,"v1":244},{"curve":0,"color":"545A5E","trait":"art","v0":245,"v1":246},{"curve":0,"color":"545A5E","trait":"art","v0":238,"v1":247},{"curve":0,"color":"545A5E","trait":"art","v0":247,"v1":240},{"curve":0,"color":"545A5E","trait":"art","v0":248,"v1":249},{"curve":0,"color":"545A5E","trait":"art","v0":250,"v1":251},{"curve":-65.8104858459758,"color":"545A5E","trait":"art","v0":252,"v1":253,"y":72}],"goals":[{"p0":[-1206,110],"p1":[-1206,-110],"team":"red"},{"p0":[1206,110],"p1":[1206,-110],"team":"blue"}],"discs":[{"radius":6,"invMass":0,"pos":[-1200,-110],"color":"b2011a","bCoef":0.5},{"radius":6,"invMass":0,"pos":[1200,-110],"color":"00008b","bCoef":0.5},{"radius":6,"invMass":0,"pos":[-1200,110],"color":"b2011a","bCoef":0.5},{"radius":6,"invMass":0,"pos":[1200,110],"color":"00008b","bCoef":0.5},{"radius":4,"pos":[1200,600],"color":"0054ec","cGroup":[""],"trait":"art"},{"radius":4,"pos":[-1200,600],"color":"ff3455","cGroup":[""],"trait":"art"},{"radius":4,"pos":[-1200,-600],"color":"ff3455","cGroup":[""],"trait":"art"},{"radius":4,"pos":[1200,-600],"color":"0054ec","cGroup":[""],"trait":"art"}],"planes":[{"normal":[0,1],"dist":-600,"bCoef":1,"cMask":["ball"]},{"normal":[0,-1],"dist":-600,"bCoef":1,"cMask":["ball"]},{"normal":[-1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"],"x":1252},{"normal":[1,0],"dist":-1252,"bCoef":0.1,"cMask":["ball"]},{"normal":[0,1],"dist":-635},{"normal":[0,-1],"dist":-635},{"normal":[1,0],"dist":-1275},{"normal":[-1,0],"dist":-1275}],"traits":{"art":{"cGroup":[""],"cMask":[""],"color":"8b8b8b"},"parede":{"cMask":["ball"],"color":"8b8b8b","bCoef":1},"gol":{"cMask":["ball"],"color":"8b8b8b","bCoef":0.1}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5.2,"bCoef":0},"ballPhysics":{"radius":6.25,"bCoef":0.35,"invMass":1.5,"color":"ffd700"},"joints":[],"canBeStored":false}';
var v10Map = '{"name":"Futsal 10v10 Feliz navidad [\u029c\u1d00x\u1d0d\u1d0f\u1d05s.\u1d04\u1d0f\u1d0d]","width":1475,"height":835,"spawnDistance":450,"redSpawnPoints":[[-400,-50],[-400,0],[-400,50],[-400,100],[-400,-100],[-400,150],[-400,-150],[-1200,-450]],"blueSpawnPoints":[[400,-50],[400,0],[400,50],[400,100],[400,-100],[400,150],[400,-150],[1200,450]],"bg":{"type":"grass","color":"3D3D3D","cornerRadius":0,"kickOffRadius":0},"vertexes":[{"x":-1397.222963951936,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1457.769292389853,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1457.769292389853,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1457.769292389853,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1457.769292389853,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":0,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":0,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-916.3453938584779,"y":-5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-916.3453938584779,"y":5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":916.3453938584779,"y":455.692256341789,"trait":"art","curve":-90,"color":"FFFFFF"},{"x":-916.3453938584779,"y":-460.692256341789,"trait":"art","color":"FFFFFF","curve":90},{"x":-916.3453938584779,"y":455.692256341789,"trait":"art","color":"FFFFFF","curve":90},{"x":916.3453938584779,"y":-460.692256341789,"trait":"art","color":"FFFFFF","curve":-90},{"x":-915.678905206942,"y":456.0368696723837,"trait":"art","color":"FFFFFF","curve":90},{"x":-1404.7912550066756,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-1404.7912550066756,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1796.8869492656875,"y":749.8429906542056,"trait":"art","color":"FFFFFF"},{"x":-1404.7912550066756,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-1404.7912550066756,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1404.7912550066756,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":1404.7912550066756,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1404.7912550066756,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":1404.7912550066756,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":0,"y":-739.363818424566,"trait":"art","color":"FFFFFF"},{"x":0,"y":739.363818424566,"trait":"art","color":"FFFFFF"},{"x":-1399.5516688918558,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1399.5516688918558,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1399.5516688918558,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1399.5516688918558,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-128.07877169559413,"trait":"art","color":"FFFFFF","curve":0},{"x":1397.222963951936,"y":128.07877169559413,"trait":"art","color":"FFFFFF","curve":0},{"x":-1394.894259012016,"y":-128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1394.894259012016,"y":128.07877169559413,"trait":"art","color":"FFFFFF"},{"x":-1457.769292389853,"y":135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":-1396.058611481976,"y":135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":-1457.769292389853,"y":-135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":-1396.058611481976,"y":-135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":1398.3873164218958,"y":-135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":1457.769292389853,"y":-135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":1457.769292389853,"y":135.6470627503338,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-80.3403204272363,"trait":"art","color":"FFFFFF","curve":0},{"x":1397.222963951936,"y":-48.90280373831776,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-17.465287049399198,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":13.972229639519359,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":45.40974632843792,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":80.3403204272363,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":-128.07877169559413,"trait":"art","color":"FFFFFF","curve":0},{"x":-1397.222963951936,"y":128.07877169559413,"trait":"art","color":"FFFFFF","curve":0},{"x":-1397.222963951936,"y":-80.3403204272363,"trait":"art","color":"FFFFFF","curve":0},{"x":-1397.222963951936,"y":-48.90280373831776,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":-17.465287049399198,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":13.972229639519359,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":45.40974632843792,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":80.3403204272363,"trait":"art","color":"FFFFFF"},{"x":291.08811748998664,"y":681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":291.08811748998664,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":582.1762349799733,"y":681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":582.1762349799733,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":931.4819759679573,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":931.4819759679573,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-291.08811748998664,"y":681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":-291.08811748998664,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-582.1762349799733,"y":681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":-582.1762349799733,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-931.4819759679573,"y":698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-931.4819759679573,"y":717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":291.08811748998664,"y":-681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":291.08811748998664,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":582.1762349799733,"y":-681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":582.1762349799733,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":931.4819759679573,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":931.4819759679573,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-291.08811748998664,"y":-681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":-291.08811748998664,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-582.1762349799733,"y":-681.1461949265688,"trait":"art","color":"FFFFFF"},{"x":-582.1762349799733,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-931.4819759679573,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":-931.4819759679573,"y":-717.2411214953271,"trait":"art","color":"FFFFFF"},{"x":-1397.222963951936,"y":-291.08811748998664,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":-1415.852603471295,"y":-291.08811748998664,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":-1397.222963951936,"y":291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":-1415.852603471295,"y":291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":1415.852603471295,"y":-291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":1415.852603471295,"y":291.08811748998664,"trait":"art","color":"FFFFFF"},{"x":916.3453938584779,"y":-5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":916.3453938584779,"y":5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":-5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":-5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":5.821762349799733,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":-349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":710.2550066755674,"y":-355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":-349.305740987984,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-710.2550066755674,"y":-355.1275033377837,"trait":"art","curve":-110,"color":"FFFFFF"},{"x":-1397.222963951936,"y":456.0368696723837,"trait":"art","color":"FFFFFF"},{"x":-915.678905206942,"y":-461.5313751668892,"trait":"art","color":"FFFFFF","curve":90},{"x":-1397.222963951936,"y":-461.5313751668892,"trait":"art","color":"FFFFFF"},{"x":915.678905206942,"y":-461.5313751668892,"trait":"art","color":"FFFFFF","curve":-90},{"x":1397.222963951936,"y":-461.5313751668892,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":456.0368696723837,"trait":"art","color":"FFFFFF","curve":90},{"x":915.678905206942,"y":456.0368696723837,"trait":"art","curve":-90,"color":"FFFFFF"},{"x":-1362.2923898531376,"y":-698.611481975968,"trait":"art","curve":90,"color":"FFFFFF"},{"x":-1397.222963951936,"y":-663.6809078771695,"trait":"art","curve":90,"color":"FFFFFF"},{"x":-1397.222963951936,"y":663.6809078771695,"trait":"art","curve":90,"color":"FFFFFF"},{"x":-1362.2923898531376,"y":698.611481975968,"trait":"art","curve":90,"color":"FFFFFF"},{"x":1397.222963951936,"y":663.6809078771695,"trait":"art","curve":-90,"color":"FFFFFF"},{"x":1362.2923898531376,"y":698.611481975968,"trait":"art","curve":-90,"color":"FFFFFF"},{"x":1362.2923898531376,"y":-698.611481975968,"trait":"art","color":"FFFFFF"},{"x":1397.222963951936,"y":-663.6809078771695,"trait":"art","color":"FFFFFF"},{"x":-137.89473684210526,"y":142.10526315789474,"cMask":["wall"],"color":"FFC500"},{"x":-135.78947368421052,"y":-143.1578947368421,"cMask":["wall"],"color":"FFC500"},{"x":-69.74358974358977,"y":-144.10256410256414,"cMask":["wall"],"color":"FFC500"},{"x":53.33333333333335,"y":71.28205128205131,"cMask":["wall"],"color":"FFC500"},{"x":51.2820512820513,"y":-192.30769230769238,"cMask":["wall"],"color":"FFC500"},{"x":-65.64102564102566,"y":185.1282051282052,"cMask":["wall"],"color":"FFC500"},{"x":-65.64102564102566,"y":22.051282051282058,"cMask":["wall"],"color":"FFC500"},{"x":34.87179487179488,"y":195.38461538461544,"cMask":["wall"],"color":"FFC500"},{"x":129.23076923076928,"y":-147.69230769230774,"cMask":["wall"],"color":"FFC500"},{"x":131.79487179487185,"y":147.69230769230774,"cMask":["wall"],"color":"FFC500"},{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":0,"y":-197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":0,"y":197.9399198931909,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"curve":-180,"color":"FFFFFF"},{"x":-850.058128787101,"y":-128.450754852624,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":-916.058128787101,"y":-128.450754852624,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":-848.9592276881999,"y":130.88990448803537,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":-914.9592276881999,"y":130.88990448803537,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":915.8759371469649,"y":-126.25295265482178,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":849.8759371469649,"y":-126.25295265482178,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":916.9748382458662,"y":128.69210229023318,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}},{"x":850.9748382458662,"y":128.69210229023318,"trait":"art","color":"FFFFFF","_data":{"mirror":[]}}],"segments":[{"v0":0,"v1":1,"color":"FFFFFF","trait":"parede"},{"v0":2,"v1":3,"color":"FFFFFF","trait":"parede"},{"v0":0,"v1":4,"color":"FFFFFF","trait":"parede"},{"v0":1,"v1":5,"color":"FFFFFF","trait":"parede"},{"v0":3,"v1":6,"color":"FFFFFF","trait":"parede"},{"v0":2,"v1":7,"color":"FFFFFF","trait":"parede"},{"v0":4,"v1":8,"color":"FFFFFF","trait":"gol"},{"v0":8,"v1":9,"color":"FFFFFF","trait":"gol","x":-1252},{"v0":9,"v1":7,"color":"FFFFFF","trait":"gol"},{"v0":5,"v1":10,"color":"FFFFFF","trait":"gol"},{"v0":10,"v1":11,"color":"FFFFFF","trait":"gol","x":1252},{"v0":11,"v1":6,"color":"FFFFFF","trait":"gol"},{"v0":12,"v1":13,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":13,"v1":14,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO"]},{"v0":13,"v1":14,"curve":-180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":16,"v1":17,"curve":-180,"color":"FFFFFF","trait":"art","x":-787},{"v0":16,"v1":17,"curve":180,"color":"FFFFFF","trait":"art","x":-787},{"v0":16,"v1":17,"curve":110,"color":"FFFFFF","trait":"art","x":-787},{"v0":16,"v1":17,"curve":-110,"color":"FFFFFF","trait":"art","x":-787},{"v0":19,"v1":20,"curve":0,"color":"FFFFFF","trait":"art","x":-787},{"v0":18,"v1":21,"curve":0,"color":"FFFFFF","trait":"art","x":787},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":26,"v1":27,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":28,"v1":29,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":12,"v1":32,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":15,"v1":33,"vis":false,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":38,"v1":39,"curve":0,"color":"FFFFFF","cMask":[""],"trait":"art","x":1200},{"v0":42,"v1":43,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":44,"v1":45,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":46,"v1":47,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":48,"v1":49,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":38,"v1":50,"curve":0,"color":"FFFFFF","trait":"art","x":1200},{"v0":51,"v1":52,"color":"FFFFFF","trait":"art","x":1200},{"v0":53,"v1":54,"color":"FFFFFF","trait":"art","x":1200},{"v0":39,"v1":55,"color":"FFFFFF","trait":"art","x":1200},{"v0":56,"v1":57,"curve":0,"color":"FFFFFF","cMask":[""],"trait":"art","x":-1200},{"v0":56,"v1":58,"curve":0,"color":"FFFFFF","trait":"art","x":-1200},{"v0":59,"v1":60,"color":"FFFFFF","trait":"art","x":-1200},{"v0":61,"v1":62,"color":"FFFFFF","trait":"art","x":-1200},{"v0":57,"v1":63,"color":"FFFFFF","trait":"art","x":-1200},{"v0":64,"v1":65,"color":"FFFFFF","trait":"art"},{"v0":66,"v1":67,"color":"FFFFFF","trait":"art","x":500},{"v0":68,"v1":69,"color":"FFFFFF","trait":"art","x":800},{"v0":70,"v1":71,"color":"FFFFFF","trait":"art","x":-250},{"v0":72,"v1":73,"color":"FFFFFF","trait":"art","x":-500},{"v0":74,"v1":75,"color":"FFFFFF","trait":"art","x":-800},{"v0":76,"v1":77,"color":"FFFFFF","trait":"art"},{"v0":78,"v1":79,"color":"FFFFFF","trait":"art","x":500},{"v0":80,"v1":81,"color":"FFFFFF","trait":"art","x":800},{"v0":82,"v1":83,"color":"FFFFFF","trait":"art","x":-250},{"v0":84,"v1":85,"color":"FFFFFF","trait":"art","x":-500},{"v0":86,"v1":87,"color":"FFFFFF","trait":"art","x":-800},{"v0":88,"v1":89,"color":"FFFFFF","trait":"art","_data":{"mirror":[],"arc":{"a":[-1397.222963951936,-291.08811748998664],"b":[-1415.852603471295,-291.08811748998664],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":90,"v1":91,"color":"FFFFFF","trait":"art","y":250},{"v0":92,"v1":93,"color":"FFFFFF","trait":"art"},{"v0":94,"v1":95,"color":"FFFFFF","trait":"art","y":250},{"v0":96,"v1":97,"curve":-180,"color":"FFFFFF","trait":"art","x":787},{"v0":96,"v1":97,"curve":180,"color":"FFFFFF","trait":"art","x":787},{"v0":96,"v1":97,"curve":110,"color":"FFFFFF","trait":"art","x":787},{"v0":96,"v1":97,"curve":-110,"color":"FFFFFF","trait":"art","x":787},{"v0":98,"v1":99,"curve":-180,"color":"FFFFFF","trait":"art","x":610},{"v0":98,"v1":99,"curve":180,"color":"FFFFFF","trait":"art","x":610},{"v0":98,"v1":99,"curve":110,"color":"FFFFFF","trait":"art","x":610},{"v0":98,"v1":99,"curve":-110,"color":"FFFFFF","trait":"art","x":610},{"v0":98,"v1":99,"curve":0,"color":"FFFFFF","trait":"art","x":610},{"v0":100,"v1":101,"curve":-180,"color":"FFFFFF","trait":"art","x":-610},{"v0":100,"v1":101,"curve":180,"color":"FFFFFF","trait":"art","x":-610},{"v0":100,"v1":101,"curve":110,"color":"FFFFFF","trait":"art","x":-610},{"v0":100,"v1":101,"curve":-110,"color":"FFFFFF","trait":"art","x":-610},{"v0":100,"v1":101,"curve":0,"color":"FFFFFF","trait":"art","x":-610},{"v0":102,"v1":103,"curve":-180,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":102,"v1":103,"curve":180,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":102,"v1":103,"curve":110,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":102,"v1":103,"curve":-110,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":102,"v1":103,"curve":0,"color":"FFFFFF","trait":"art","y":300,"x":610},{"v0":104,"v1":105,"curve":-180,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":180,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":110,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":-110,"color":"FFFFFF","trait":"art","x":610,"y":300},{"v0":104,"v1":105,"curve":0,"color":"FFFFFF","trait":"art","y":300,"x":610},{"v0":106,"v1":107,"curve":-180,"color":"FFFFFF","trait":"art","x":610,"y":-300},{"v0":106,"v1":107,"curve":180,"color":"FFFFFF","trait":"art","x":610,"y":-300},{"v0":106,"v1":107,"curve":110,"color":"FFFFFF","trait":"art","x":610,"y":-300},{"v0":106,"v1":107,"curve":-110,"color":"FFFFFF","trait":"art","x":610,"y":-300},{"v0":106,"v1":107,"curve":0,"color":"FFFFFF","trait":"art","y":-300,"x":610},{"v0":108,"v1":109,"curve":-180,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":108,"v1":109,"curve":180,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":108,"v1":109,"curve":110,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":108,"v1":109,"curve":-110,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":108,"v1":109,"curve":0,"color":"FFFFFF","trait":"art","y":300,"x":-610},{"v0":110,"v1":111,"curve":-180,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":180,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":110,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":-110,"color":"FFFFFF","trait":"art","x":-610,"y":300},{"v0":110,"v1":111,"curve":0,"color":"FFFFFF","trait":"art","y":300,"x":-610},{"v0":112,"v1":113,"curve":-180,"color":"FFFFFF","trait":"art","x":-610,"y":-300},{"v0":112,"v1":113,"curve":180,"color":"FFFFFF","trait":"art","x":-610,"y":-300},{"v0":112,"v1":113,"curve":110,"color":"FFFFFF","trait":"art","x":-610,"y":-300},{"v0":112,"v1":113,"curve":-110,"color":"FFFFFF","trait":"art","x":-610,"y":-300},{"v0":112,"v1":113,"curve":0,"color":"FFFFFF","trait":"art","y":-300,"x":-610},{"v0":22,"v1":114,"curve":0,"color":"FFFFFF","trait":"art"},{"v0":115,"v1":116,"curve":0,"color":"FFFFFF","trait":"art","y":-470},{"v0":117,"v1":118,"curve":0,"color":"FFFFFF","trait":"art","y":-470},{"v0":119,"v1":120,"curve":0,"color":"FFFFFF","trait":"art"},{"v0":121,"v1":122,"curve":90,"color":"FFFFFF","trait":"art"},{"v0":123,"v1":124,"curve":90,"color":"FFFFFF","trait":"art"},{"v0":125,"v1":126,"curve":-90,"color":"FFFFFF","trait":"art"},{"v0":127,"v1":128,"curve":-90,"color":"FFFFFF","trait":"art"},{"v0":129,"v1":130,"color":"FFC500","cMask":["wall"]},{"v0":130,"v1":131,"color":"FFC500","cMask":["wall"]},{"v0":131,"v1":132,"color":"FFC500","cMask":["wall"]},{"v0":132,"v1":133,"color":"FFC500","cMask":["wall"]},{"v0":134,"v1":135,"color":"FFC500","cMask":["wall"]},{"v0":135,"v1":136,"color":"FFC500","cMask":["wall"]},{"v0":137,"v1":138,"color":"FFC500","cMask":["wall"]},{"v0":139,"v1":140,"curve":180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["redKO"]},{"v0":141,"v1":142,"curve":-180,"color":"FFFFFF","cMask":["red","blue"],"cGroup":["blueKO"]},{"v0":143,"v1":144,"color":"FFFFFF","trait":"art","_data":{"mirror":[],"arc":{"a":[-850.058128787101,-128.450754852624],"b":[-916.058128787101,-128.450754852624],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":145,"v1":146,"color":"FFFFFF","trait":"art","_data":{"mirror":[],"arc":{"a":[-848.9592276881999,130.88990448803537],"b":[-914.9592276881999,130.88990448803537],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":147,"v1":148,"color":"FFFFFF","trait":"art","_data":{"mirror":[],"arc":{"a":[915.8759371469649,-126.25295265482178],"b":[849.8759371469649,-126.25295265482178],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":149,"v1":150,"color":"FFFFFF","trait":"art","_data":{"mirror":[],"arc":{"a":[916.9748382458662,128.69210229023318],"b":[850.9748382458662,128.69210229023318],"radius":null,"center":[null,null],"from":null,"to":null}}}],"goals":[{"p0":[-1404.2090787716957,-128.07877169559413],"p1":[-1404.2090787716957,128.07877169559413],"team":"red","color":"FFFFFF"},{"p0":[1404.2090787716957,128.07877169559413],"p1":[1404.2090787716957,-128.07877169559413],"team":"blue","color":"FFFFFF"}],"discs":[{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,-128.07877169559413],"color":"FFFFFF","bCoef":0.5,"_data":{"mirror":[]}},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,-128.07877169559413],"color":"FFFFFF","bCoef":0.5},{"radius":6.986114819759679,"invMass":0,"pos":[-1397.222963951936,128.07877169559413],"color":"FFFFFF","bCoef":0.5},{"radius":6.986114819759679,"invMass":0,"pos":[1397.222963951936,128.07877169559413],"color":"FFFFFF","bCoef":0.5},{"radius":4.657409879839786,"pos":[1397.222963951936,698.611481975968],"color":"FFFFFF","cGroup":[""],"trait":"art"},{"radius":4.657409879839786,"pos":[-1397.222963951936,698.611481975968],"color":"FFFFFF","cGroup":[""],"trait":"art"},{"radius":4.657409879839786,"pos":[-1397.222963951936,-698.611481975968],"color":"FFFFFF","cGroup":[""],"trait":"art"},{"radius":4.657409879839786,"pos":[1397.222963951936,-698.611481975968],"color":"FFFFFF","cGroup":[""],"trait":"art"}],"planes":[{"normal":[0,1],"dist":-700.2005012531329,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-700.2005012531329,"canvas_rect":[-1479,-760,1797,760],"a":[-1479,-700.2005012531329],"b":[1797,-700.2005012531329]}}},{"normal":[0,-1],"dist":-702.5806451612904,"bCoef":1,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-702.5806451612904,"canvas_rect":[-1479,-760,1797,760],"a":[-1479,702.5806451612904],"b":[1797,702.5806451612904]}}},{"normal":[-1,0],"dist":-1459.4347158218127,"bCoef":0.1,"cMask":["ball"],"x":1252,"_data":{"extremes":{"normal":[-1,0],"dist":-1459.4347158218127,"canvas_rect":[-1479,-760,1797,760],"a":[1459.4347158218127,-760],"b":[1459.4347158218127,760]}}},{"normal":[1,0],"dist":-1455.7788018433182,"bCoef":0.1,"cMask":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1455.7788018433182,"canvas_rect":[-1479,-760,1797,760],"a":[-1455.7788018433182,-760],"b":[-1455.7788018433182,760]}}},{"normal":[0,1],"dist":-735.2005012531329,"_data":{"extremes":{"normal":[0,1],"dist":-735.2005012531329,"canvas_rect":[-1479,-760,1797,760],"a":[-1479,-735.2005012531329],"b":[1797,-735.2005012531329]}}},{"normal":[0,-1],"dist":-737.5806451612904,"_data":{"extremes":{"normal":[0,-1],"dist":-737.5806451612904,"canvas_rect":[-1479,-760,1797,760],"a":[-1479,737.5806451612904],"b":[1797,737.5806451612904]}}},{"normal":[1,0],"dist":-1478.7788018433182,"_data":{"extremes":{"normal":[1,0],"dist":-1478.7788018433182,"canvas_rect":[-1479,-760,1797,760],"a":[-1478.7788018433182,-760],"b":[-1478.7788018433182,760]}}},{"normal":[-1,0],"dist":-1482.4347158218127,"_data":{"extremes":{"normal":[-1,0],"dist":-1482.4347158218127,"canvas_rect":[-1479,-760,1797,760],"a":[1482.4347158218127,-760],"b":[1482.4347158218127,760]}}}],"traits":{"art":{"cGroup":[""],"cMask":[""],"color":"8b8b8b"},"parede":{"cMask":["ball"],"color":"8b8b8b","bCoef":1},"gol":{"cMask":["ball"],"color":"8b8b8b","bCoef":0.1}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5.2,"bCoef":0,"radius":15,"invMass":0.5,"damping":0.96,"cGroup":["red","blue"],"gravity":[0,0],"kickingDamping":0.96,"kickback":0},"ballPhysics":{"radius":6.25,"bCoef":0.35,"invMass":1.5,"color":"ffd700","cMask":["all"],"damping":0.99,"gravity":[0,0],"cGroup":["ball"]},"joints":[],"canBeStored":true,"cameraWidth":0,"cameraHeight":0,"maxViewWidth":0,"cameraFollow":"ball","kickOffReset":"partial"}';


//intentamos
function roomUpNotification() {
    if (typeof window.HBInit === 'function') {
        var hrefs = document.querySelector("body iframe").contentDocument.querySelector("body div#roomlink a").text;
        //console.log(hrefs);
        sendAnnouncementToDiscord("@everyone Esta arriba el server " + roomName + ": " + hrefs);
    }
}
setTimeout(() => {
    roomUpNotification();
}, 20000);


/* OPTIONS */

var afkLimit = 30;
var drawTimeLimit = Infinity;
var maxTeamSize = 12; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6, GOALS: 7 };
// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'
const StatColumns = { GAMES: 0, WINS: 1, DRAWS: 2, LOSES: 3, WINRATE: 4, GOALS: 5, ASSISTS: 6, GK: 7, CS: 8, CP: 9, ROLE: 10, NICK: 11 }
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
var banList = []; // Getting track of the bans, so we can unban ppl if we want

// map to know what is the current map
var currentMap = null;

/* STATS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var vcgbsdbf = 7865;
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

function sendAnnouncementToDiscord(message) {

    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1124426109551919197/KIQvCcC6PgQbWDnNbtdNW3rLwd9M04kxRlT1a366jMwQnAs0iulWw5Zda_4Q4JcbcK3d"); //sends a log with information about users who connect

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
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

//asigna 1 o 2 specs x orden de llegada
function topBtn() {
    if (teamS.length == 0) {
        //console.log("llego la lista vacia de specs")
        return;
    }
    else {
        var flipTeam = false;
        //console.log("top btn called")
        for (var i = 0; i < teamS.length; i++) {
            if (flipTeam) {
                var player = teamS[i];
                var pid = player.id;
                room.setPlayerTeam(pid, Team.RED);
                teamR.push(player);
                //console.log("+1 red " + player.name);
                flipTeam = false;
            } else {
                var player = teamS[i];
                var pid = player.id;
                room.setPlayerTeam(pid, Team.BLUE);
                teamB.push(player);
                //console.log("+1 blue " + player.name);
                flipTeam = true;
            }
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        //console.log("llego la lista vacia de specs")
        return;
    }
    else {
        var flipTeam = false;
        //console.log("random btn called")
        var specLength = teamS.length;
        for (var i = 0; i < teamS.length; i++) {
            var player = teamS[getRandomInt(teamS.length)];
            var pid = player.id;
            if (flipTeam) {
                room.setPlayerTeam(pid, Team.RED);
                teamR.push(player);
                //console.log("+1 red " + player.name);
                flipTeam = false;
            } else {
                room.setPlayerTeam(pid, Team.BLUE);
                teamB.push(player);
                //console.log("+1 blue " + player.name);
                flipTeam = true;
            }
        }
        teamS.splice(0, specLength);
        //console.log("teamS");
        //console.log(teamS);

        //console.log("teamR");
        //console.log(teamR);

        //console.log("teamB");
        //console.log(teamB);
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
    //console.log("resetting teams")
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
        //console.log("termino el tiempo")
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
            //console.log("paso el tiempo de empate")
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            setTimeout(() => { room.stopGame(); }, 2000);
            goldenGoal = false;
        }
    }
}

//calcula posecion muestra mensajes de posecion y arquero y actualiza stats
function endGame(winner) { // handles the end of a game : no stopGame call inside
    //players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null; //setea choosemode a true y slowmode a 2
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

    if (scores.red = scores.blue > 0) {
        //Object.keys(obj)[0]
        Object.entries(goalDictionary).sort((a, b) => b[1] - a[1]);
        var topGoalScorerId = Object.keys(goalDictionary)[0];
        var topGoals = goalDictionary[topGoalScorerId];
        var topGoalScorer = room.getPlayerList().filter((player) => player.id == topGoalScorerId)[0];
        //⚽
        room.sendAnnouncement("🥇🥇🥇 " + topGoalScorer.name + " fue el maximo goleador con " + topGoals + " goles!🥇🥇🥇", null, 0xFDC43A, 'bold');
    }

    //updateStats();
    sendDiscordWebhook(scores);
    room.sendAnnouncement("El partido fue grabado y enviado a discord: " + `${getDate()}`, null, Colors.Amrelo, 'bold');

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

function loadMap(map, scoreLim, timeLim) {
    //console.log("cambiando mapa");
    if (currentMap == map) {
        //console.log(currentMap.substring(0, 20));
        //console.log(map.substring(0, 20));
        return;
    }
    room.setCustomStadium(map);
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
        ////console.log("handling activity");
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
        var afkList = room.getPlayerList().filter((player) => player.id != 0 && isAFK(player));
        ////console.log("lista de afk" + afkList);
        for (var i = 0; i < afkList.length; i++) {
            /* //console.log("seteando" + afkList[i].name)
            //console.log(getActivity(afkList[i])); */
            setActivity(afkList[i], getActivity(afkList[i]) + 1);
            /* //console.log(getActivity(afkList[i])); */
        }
        for (var i = 0; i < extendedP.length; i++) {
            if (extendedP[i][eP.ACT] == 45 && !extendedP[i][eP.AFK]) {
                room.sendAnnouncement("[ROBOT]⛔⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", si no te moves en  " + 5 + " segundos sale kick!⛔⛔", extendedP[i][eP.ID]);
            }
            if (extendedP[i][eP.ACT] > 45 && !extendedP[i][eP.AFK]) {
                extendedP[i][eP.ACT] = 0;
                //console.log("kicked " + extendedP[i][eP.ID]);
                room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
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
    ////console.log("extendedp de player " + player.name);
    ////console.log(extendedP.filter((a) => a[0] == player.id));

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
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
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
    //console.log("balance teams desde update role on plauer in")
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
    //console.log("top btn desde balance teams");
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
    //console.log("choosing field");
    var newMap = chooseMap();
    if (newMap != null) {
        room.stopGame();
        setTimeout(() => { room.startGame(); }, 3000);
        loadMap(newMap, scoreLimitClassic, timeLimitClassic);
        return newMap;
    }
}

function chooseMap() {
    if (players.length < 5) {
        if (currentMap != v2Map) {
            //console.log("chose x2");
            return v2Map;
        }
        return null;
    } else if (players.length <= 6) {
        if (currentMap != v3Map) {
            //console.log("chose x3");
            return v3Map;
        }
        return null;
    } else if (players.length <= 10) {
        if (currentMap != v4Map) {
            //console.log("chose x4");
            return v4Map;
        }
        return null;
    } else if (players.length <= 12) {
        if (currentMap != v6Map) {
            //console.log("chose x6");
            return v6Map;
        }
        return null;
    } else if (players.length <= 14) {
        if (currentMap != v7Map) {
            //console.log("chose x7");
            return v7Map;
        }
        return null;

    } else if (players.length <= 18) {
        if (currentMap != v10Map) {
            //console.log("chose x10");
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

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    //updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
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
    //console.log("update stats");
    if (players.length >= 2 && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit)) {
        var stats;
        //console.log("inside stats");
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
            game.scores.blue == 0 ? stats[StatColumns.CS]++ : null;
            stats[StatColumns.CP] = (100 * stats[StatColumns.CS] / stats[StatColumns.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[StatColumns.GK]++;
            game.scores.red == 0 ? stats[StatColumns.CS]++ : null;
            stats[StatColumns.CP] = (100 * stats[StatColumns.CS] / stats[StatColumns.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
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
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */
function customBalancePlayer(player) {
    if (teamR.length <= teamB.length) {
        var pid = player.id;
        room.setPlayerTeam(pid, Team.RED);
        teamR.push(player);
        //console.log("+1 red on join")
    } else {
        var pid = player.id;
        room.setPlayerTeam(pid, Team.BLUE);
        teamB.push(player);
        //console.log("+1 blue on join")
    }
}

room.onPlayerJoin = function (player) {
    if (permaBanned.includes(player.name)) {
        room.kickPlayer(player.id, "hablame al discord si queres jugar en paz", false);
    }
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    //console.log("entro " + player.name);
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
        loadMap(v2Map, scoreLimitClassic, timeLimitClassic);
    }

    //console.log("custom balance team on player join. id: " + player.id);
    //custom balance
    customBalancePlayer(player);

    //balanceTeams();
    ////console.log("elegimos cancha on player join");
    //chooseField();
    //updateRoleOnPlayerIn();
    /*     sendAnnouncementToDiscord(
            "```" + "[📝] Player info, conn, auth and data ⏰" + "\n" +
    
            "The player " + player.name + " came into the room." + "\n" +
            "conn: " + player.conn + " 🌎" +
            "\n" + "auth: " + player.auth + " 💻" + "\n" +
            "Date: " + `${getDateInfo()}` + "```"); */
    /* room.sendAnnouncement(
        `👋🏼 Hello, ${player.name}! Welcome!\nRemember, here we play just for fun!`,
        player.id,
        0xFFFF00,
        'bold',
    ); */
    if (localStorage.getItem(player.auth) != null) {
        if (JSON.parse(localStorage.getItem(player.auth))[StatColumns.ROLE] != "player") {
            room.setPlayerAdmin(player.id, true);
            /* room.sendAnnouncement((JSON.parse(localStorage.getItem(player.auth))[StatColumns.ROLE] == "master" ? "The Administrator " : "The Administrator ") + player.name + " connected!", null, 0xD81826); */
        }
    }
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    //console.log("on player team change" + changedPlayer.name);
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
    /*     //console.log("update teams");
        //console.log("players");
        //console.log(players);
        //console.log("red");
        //console.log(teamR);
        //console.log("blue");
        //console.log(teamB);
        //console.log("specs");
        //console.log(teamS); */
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
    /* //console.log("elegimos cancha on player team change");
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

room.onPlayerLeave = function (player) {
    //console.log("salio " + player.name);
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
        //console.log("players on leave");
        //console.log(players);
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
    ////console.log("elegimos cancha on player leave");
    //chooseField();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    if (kickedPlayer.admin && byPlayer != null && byPlayer.admin) {
        return;
    }
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

let
    palavras = ["mogolico", "retrasado", "enfermo", "enfermito", "down", "matate", "morite", "suicidate", "mueras"], //swearing filter
    regex = new RegExp(palavras.join("|"), 'gi');

room.onPlayerChat = function (player, message) {
    message = message.trim();
    if (message == '') {
        return;
    }
    var adminTag = player.admin ? "ADMIN " : "";
    //console.log(adminTag + player.name + ": " + message);

    if (message.match(regex)) {
        room.sendAnnouncement("No bardees mogolico", player.id);
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
    else if (["!not"].includes(message[0].toLowerCase())) {
        roomUpNotification();
    }

    else if (["!clean"].includes(message[0].toLowerCase())) {
        setTimeout(_ => { room.sendAnnouncement(`${player.name} cleared the chat`, null, 0xFFFFFF, 'italic') }, 1000)
        i = 50
        while (i >= 0) {
            room.sendAnnouncement("", null)
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

    else if (["!ksk"].includes(message[0].toLowerCase())) {
        if (!player.admin && commandTimeout < 61) {
            room.sendAnnouncement("Tenes q esperar 60 segundos para poder tirar !ksk de nuevo spammer ", player.id, 0xFF0000);
            return;
        }
        randomUniforms();
        commandTimeout = 0;
    }
    else if (["!mtm", "mtm"].includes(message[0].toLowerCase())) {
        if (!AFKSet.has(player.id) && player.team == Team.SPECTATORS) {
            customBalancePlayer(player);
        }
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
        //console.log("!afk");
        //console.log("player id" + player.id);
        //console.log(extendedP);
        //console.log("activity" + getActivity(player));
        if (isAFK(player) && getActivity(player) < 20 && player.admin == false) {
            room.sendAnnouncement("Espera 20 segundos para salir de afk", player.id, 0xFF0000);
            return;
        }
        setAFK(player, !isAFK(player));
        //console.log("player en extended p?")
        //console.log(extendedP.filter((p) => p[eP.ID] == player.id));
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
        room.sendAnnouncement("[🏆] Your stats: 🎮 Games: " + stats[StatColumns.GAMES] + ", ✅ Wins: " + stats[StatColumns.WINS] + ", ⭕ Ties: " + stats[StatColumns.DRAWS] + ", ❌ Defeats: " + stats[StatColumns.LOSES] + ", Percentage of wins: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goals: " + stats[StatColumns.GOALS] + ", 👟 Assists: " + stats[StatColumns.ASSISTS] + ", 🤚 GK: " + stats[StatColumns.GK] + ", 🤚 CS: " + stats[StatColumns.CS] + ", 🤚 CS%: " + stats[StatColumns.CP] + "%", player.id, 0x73EC59, "bold");
    }

    else if (["!showme"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[🏆] Stats of " + player.name + ": 🎮 Games: " + stats[StatColumns.GAMES] + ", ✅ Wins: " + stats[StatColumns.WINS] + ", ⭕ Ties: " + stats[StatColumns.DRAWS] + ", ❌ Defeats: " + stats[StatColumns.LOSES] + ", Percentage of wins: " + stats[StatColumns.WINRATE] + "%, ⚽️ Goals: " + stats[StatColumns.GOALS] + ", 👟 Assists: " + stats[StatColumns.ASSISTS] + ", 🤚 GK: " + stats[StatColumns.GK] + ", 🤚 CS: " + stats[StatColumns.CS] + ", 🤚 CS%: " + stats[StatColumns.CP] + "%", null, 0x73EC59, "bold");
    }

    else if (["!games"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.
                    includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.GAMES])]); }
            });
        }
        catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0xFF0000);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("[🏆] 🎮 Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
            tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
            tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
    }

    else if (["!wins"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.
                    includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.WINS]
                    )]);
                }
            });
        }
        catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Not enough games played yet.", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("[🏆] ✅ Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau
        [1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
    }

    else if (["!goals"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.GOALS])]);
                }
            });
        }
        catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("[🏆] ⚽️ Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
        [1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
            [0] + ": " + tableau[4][1], player.id, 0x73EC59);
        return false;
    }

    else if (["!assists"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.
                    includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.ASSISTS]
                    )]);
                }
            });
        }
        catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("[🏆] 👟 Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
            tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
            tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
        return false;
    }

    else if (["!cs"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function (key) {
                if (!excludedRows.
                    includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[StatColumns.NICK]), (JSON.parse(localStorage.getItem(key))[StatColumns.CS]
                    )]);
                }
            });
        }
        catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("[🏆] 🤚 CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
            tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
            tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);
        return false;
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
    else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
        if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[StatColumns.ROLE] == "master") {
            if (message.length >= 2 && message[1][0] == "#") {
                message[1] = message[1].substring(1, message[1].length);
                if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                    var stats;
                    localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
                    if (stats[StatColumns.ROLE] == "player") {
                        stats[StatColumns.ROLE] = "admin";
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
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " has been muted for " + (timeOut / 60000) + " minutes!");
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
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was muted for 3 minutes!");
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
    else if ("!elo".includes(message[0].toLowerCase()) && localStorage.getItem(getAuth(player))) { // elo definido por vitórias
        //console.log("entro en comando elo " + player.name);
        message.slice(0, 1);
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        if (stats[StatColumns.WINS] > 499) {
            room.sendAnnouncement("👑 「MAS CAPITO」:" + player.name + ": " + msg + "", null, 0x7E65FF)
        } else if (stats[StatColumns.WINS] > 199) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o I」:" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 179) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o II」:" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 159) {
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻o III」:" + player.name + ": " + msg + "", null, 0x62AEE3)
        } else if (stats[StatColumns.WINS] > 129) {
            room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 I」:" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 89) {
            room.sendAnnouncement("🥇 「Oro II」:" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 69) {
            room.sendAnnouncement("🥇 「Oro III」:" + player.name + ": " + msg + "", null, 0xEAC274)
        } else if (stats[StatColumns.WINS] > 59) {
            room.sendAnnouncement("🥈 「Plata I」:" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 44) {
            room.sendAnnouncement("🥈 「Plata II」:" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 34) {
            room.sendAnnouncement("🥈 「PLATA III」:" + player.name + ": " + msg + "", null, 0xA2A2A2)
        } else if (stats[StatColumns.WINS] > 24) {
            room.sendAnnouncement("🥉 「BRONCE I」:" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 14) {
            room.sendAnnouncement("🥉 「BRONCE II」:" + player.name + ": " + msg + "", null, 0x72532A)
        } else if (stats[StatColumns.WINS] > 4) {
            room.sendAnnouncement("🥉 「BRONCE III」:" + player.name + ": " + msg + "", null, 0x72532A)
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
    var aPlayer = localStorage.getItem(getAuth(player));
    var role = JSON.parse(aPlayer) != null ? JSON.parse(aPlayer)[StatColumns.ROLE] : null;
    if (aPlayer != null && role != null && role != "player") {
        if (role == "master") {
            room.sendAnnouncement("「👨‍💻」" + player.name + ": " + msg + "", null, 0x00FF00, 'bold');
            return false;
        } else {
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
    { ID: 3, shortName: "rvp", longName: "Club Atlético River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF0000 }] },
    { ID: 14, shortName: "fla", longName: "CR Flamengo", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 16, shortName: "sao", longName: "São Paulo FC", country: "Brazil", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xE0E0E0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 17, shortName: "cor", longName: "SC Corinthians Paulista", country: "Brazil", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x808080 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x008000 }] },
    { ID: 18, shortName: "pal", longName: "SE Palmeiras", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0xFFFFC0 }, { angle: 0, mainColor: [0xFFFFFF, 0x008000, 0xFFFFFF], avatarColor: 0xFFFFC0 }] },
    { ID: 32, shortName: "mon", longName: "AS Monaco FC", country: "France", uniform: [{ angle: 120, mainColor: [0xFF0000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 33, shortName: "asse", longName: "AS Saint-Étienne", country: "France", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 34, shortName: "lil", longName: "Lille OSC", country: "France", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000080, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000000], avatarColor: 0x000080 }] },
    { ID: 35, shortName: "ol", longName: "Olympique Lyonnais", country: "France", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF0000], avatarColor: 0x0000FF }] },
    { ID: 36, shortName: "mar", longName: "Olympique Marseille", country: "France", uniform: [{ angle: 0, mainColor: [0x00C0FF, 0xFFFFFF, 0x00C0FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404080, 0x202040, 0x00C0FF], avatarColor: 0xFFFFFF }] },
    { ID: 37, shortName: "psg", longName: "Paris Saint Germain FC", country: "France", uniform: [{ angle: 0, mainColor: [0x000080, 0xFFFFFF, 0x000080], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 38, shortName: "lev", longName: "Bayer 04 Leverkusen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 39, shortName: "bay", longName: "Bayern Munchen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xC00000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xC0C000 }] },
    { ID: 40, shortName: "dor", longName: "Borussia Dortmund", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 41, shortName: "sch", longName: "FC Schalke 04", country: "Germany", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0x00FFFF }] },
    { ID: 42, shortName: "lei", longName: "RB Leipzig", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFF0000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 43, shortName: "wol", longName: "VfL Wolfsburg", country: "Germany", uniform: [{ angle: 0, mainColor: [0xAAFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 52, shortName: "mil", longName: "AC Milan", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFEDCBA], avatarColor: 0x800000 }] },
    { ID: 53, shortName: "rom", longName: "AS Roma FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFFC000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 54, shortName: "int", longName: "FC Internazionale Milano", country: "Italy", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 55, shortName: "juv", longName: "Juventus FC", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x404040], avatarColor: 0xFFFF00 }] },
    { ID: 56, shortName: "nap", longName: "SSC Napoli", country: "Italy", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x0080FF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x808000, 0xFFFFFF, 0x808000], avatarColor: 0x000080 }] },
    { ID: 57, shortName: "tor", longName: "Torino FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 45, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
    { ID: 61, shortName: "ajx", longName: "AFC AJAX", country: "Netherlands", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 70, shortName: "por", longName: "FC Porto", country: "Portugal", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 86, shortName: "bil", longName: "Athletic Bilbao", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x80FF80], avatarColor: 0x000000 }] },
    { ID: 87, shortName: "atm", longName: "Atlético Madrid", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0xFF0000, 0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: 88, shortName: "bar", longName: "FC Barcelona", country: "Spain", uniform: [{ angle: 0, mainColor: [0x041E87, 0xAB0202, 0x041E87], avatarColor: 0xFFED02 }, { angle: 0, mainColor: [0xD4AE15], avatarColor: 0x1E28B0 }] },
    { ID: 89, shortName: "rma", longName: "Real Madrid CF", country: "Spain", uniform: [{ angle: 135, mainColor: [0xFFFFFF, 0x004996, 0xFFFFFF], avatarColor: 0xFCBF00 }, { angle: 90, mainColor: [0x004996], avatarColor: 0xFCBF00 }] },
    { ID: 90, shortName: "sev", longName: "Sevilla FC", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }] },
    { ID: 91, shortName: "val", longName: "Valencia CF", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFDF1C, 0xEE3524, 0xFFDF1C], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC00000], avatarColor: 0xFFDF1C }] },
    { ID: 96, shortName: "bjk", longName: "Beşiktaş JK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 99, shortName: "gs", longName: "Galatasaray SK", country: "Turkey", uniform: [{ angle: 45, mainColor: [0xFDB912, 0xA90432], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFDB912 }] },
    { ID: 102, shortName: "ars", longName: "Arsenal FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x808000 }, { angle: 0, mainColor: [0xFFFF80], avatarColor: 0x000000 }] },
    { ID: 103, shortName: "che", longName: "Chelsea FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x034694], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 104, shortName: "liv", longName: "Liverpool FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFEDCBA, 0x000000, 0xFEDCBA], avatarColor: 0xFFFFFF }] },
    { ID: 105, shortName: "mu", longName: "Manchester United FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0x00C0FF, 0x0080FF, 0x00C0FF], avatarColor: 0xFF0000 }] },
    { ID: 106, shortName: "mc", longName: "Manchester City FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x00C0FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C0FF }] },
    { ID: 107, shortName: "tot", longName: "Tottenham Hotspur FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000080, 0x000080], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x000080, 0x000040, 0x000040], avatarColor: 0xFFFFFF }] },
];


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
            index !== -1 ? numbers.splice(index, 1) : console.log("Error in deleting random number");
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
    //console.log("color" + color.toString(16));
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        0x000000 : 0xFFFFFF;
}

function randomUniforms() {
    var red = generateRandomInteger(1, 100) % 2 ? generateRandomInteger(0, 10) : Math.abs(generateRandomInteger(350, 359));

    var redL = generateRandomInteger(40, 60);
    var redSat = generateRandomInteger(50, 70);

    /*var altRed = generateRandomInteger(0, 359);
    var altRedColor = hslToHex(altRed,  generateRandomInteger(40, 60), generateRandomInteger(50, 70));
    var redAvatarColor = pickBgColor(altRedColor.toString(16)); */

    var blue = generateRandomInteger(210, 270);

    var blueL = generateRandomInteger(40, 60);
    var blueSat = generateRandomInteger(50, 70);

    /*var altBlue = generateRandomInteger(0, 359);
    var altBlueColor = hslToHex(altBlue, generateRandomInteger(40, 60), generateRandomInteger(50, 70));

    var blueAvatarColor = pickBgColor(altBlueColor.toString(16));

    var redAngle = generateRandomInteger(0, 4) * 45;
    var blueAngle = generateRandomInteger(0, 4) * 45;
    var blueColor = hslToHex(blue, blueSat, blueL);
    /* //console.log("blue " + blueColor + " bluesat " + blueSat); 
    var redColor = hslToHex(red, redSat, redL);
    /* //console.log("red " + redColor + " redsat " + redSat); 
    room.setTeamColors(
        Team.BLUE,
        blueAngle,
        blueAvatarColor,
        [blueColor, altBlueColor, blueColor]);


    room.setTeamColors(
        Team.RED,
        redAngle,
        redAvatarColor,
        [redColor, altRedColor, redColor]); */

    var randomInts = getRandomIntegers(teams.length - 1);
    while (randomInts[0] == randomInts[1]) {
        randomInts = getRandomIntegers(teams.length - 1);
    }
    var t = [{ int: randomInts[0], teamID: 1 }, { int: randomInts[1], teamID: 2 }];
    t.forEach(x => {
        var index = teams[x.int];
        //console.log("index " + index);
        //console.log("x " + x);
        if (index !== -1) {
            //x.teamID - 1
            var team = teams[x.int];
            //console.log(team);
            room.setTeamColors(
                x.teamID,
                team.uniform[UNIFORME_OFICIAL].angle,
                team.uniform[UNIFORME_OFICIAL].avatarColor,
                team.uniform[UNIFORME_OFICIAL].mainColor);
        }
    });
    room.sendAnnouncement("Comienza la final paralimpica y los equipos salen a la cancha!", null, 0x05C5FF, 'bold');
    room.sendAnnouncement(teams[t[0].int].longName, null, hslToHex(red, redSat, redL), 'bold');
    room.sendAnnouncement("🆚", null, 0x05C5FF, null);
    room.sendAnnouncement(teams[t[1].int].longName, null, hslToHex(blue, blueSat, blueL), 'bold');
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
        //console.log("team s " + teamS.length);
        //console.log("team b " + teamB.length);
        //console.log("team r " + teamR.length);
        //console.log("reseteamos equipos");
        resetBtn();
        /* setTimeout(() => {
            //console.log("actualizamos equipos en game stop despues de")
            updateTeams();
        }, 50); */
        //console.log("team s " + teamS.length);
        //console.log("team b " + teamB.length);
        //console.log("team r " + teamR.length);
        //asigna de forma random los equipos
        //console.log("on game stop asigna equipos")

        setTimeout(() => { 
            topBtn(); 
            updateTeams(); 
            randomUniforms();}
        , 3500);
        //console.log("choosing field on game stop")
        chooseField();
        //console.log("team s " + teamS.length);
        //console.log("team b " + teamB.length);
        //console.log("team r " + teamR.length);



        setTimeout(() => { room.startGame(); }, 3000);
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
        //console.log("primera vez deberia entrar aca")
        goalDictionary[goalScorer.id] = 0;
    }
    var scores = room.getScores();
    var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
    room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + goalScorer.name + "! | Velocidad: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, (team == Team.RED ? Colors.Vermelho : Colors.Azul), 'bold');
    game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));

    goalDictionary[goalScorer.id] += 1;
    //console.log(goalDictionary);
    if (goalDictionary[goalScorer.id] > 2) {
        //console.log("hat trick");
        //console.log(goalDictionary);
        room.setPlayerAvatar(goalScorer.id, "1!");
        //console.log("hat trick 1");
        setTimeout(() => {
            room.setPlayerAvatar(goalScorer.id, "2!");
            //console.log("hat trick 2");
            setTimeout(() => {
                room.setPlayerAvatar(goalScorer.id, "3!");
                //console.log("hat trick 3");
                setTimeout(() => {
                    //console.log("hat trick 4");
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
    //console.log("GOL DEL " + team);
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
    if (goalScorer.team == team) {
        //console.log("last touch id " + lastPlayersTouched[0].id);
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
    return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
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
        //console.log("custom balance team on positions reset");
        if (teamR.length < teamB.length) {
            var index = teamB.length - 1;
            var player = teamB[index];
            var pid = player.id;
            room.setPlayerTeam(pid, Team.RED);
            teamR.push(player);
            teamB.splice(index, 1);
            //console.log("-1 blue (" + player.name + ") on postion reset")
            //console.log("+1 red on postion reset")
        } else {
            var index = teamR.length - 1;
            var player = teamR[index]
            var pid = player.id;
            room.setPlayerTeam(pid, Team.BLUE);
            teamR.push(player);
            teamB.splice(index, 1);
            //console.log("-1 blue on postion reset")
            //console.log("+1 red on postion reset")
        }
    }
}

room.onPositionsReset = function () {
    //console.log("position reset last players cleaned")
    countAFK = true;
    lastPlayersTouched = [null, null];

    customBalance();
    updateTeams();
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

function checkAndSetAdmin() {

}

function incrementCommandTimout() {
    commandTimeout++;
}

var handleActivity = true;
function myLoop() {
    if (handleActivity) {
        handleInactivity();

        checkAndSetAdmin();
        incrementCommandTimout();
        setTimeout(function () {
            handleActivity = true;
        }, 1000)
    }
    handleActivity = false;
}

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    myLoop();
}