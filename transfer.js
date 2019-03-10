// 转账

// 在 key.json 文件里替换成你的公钥和私钥
// 私钥：5JYXp9cSWQizUXLw5K2sGGD8Mr6pHAjpcRk7xrHkY5zaPwXRppP
// 公钥：FO7sGkRxL2AFnqBdUHXKC2LziYeRTzsxYF7FjzFNGe14hV8U5Pi2

// Fibos密钥对生成工具地址：https://fibos.xyz/
// 第一次使用请少量尝试，然后在浏览器查看执行结果确认：http://explorer.fibos.rocks/

var FIBOS = require('./initClient.js');
var client = FIBOS();

// 把EOS@FO转到EOS@EOS，from是FO的账号，to是备注的EOS账号
function transferEOS(from, to, amount){
    var eosaccount = from;
    var value = amount.toFixed(4) + " EOS@eosio";
    var ctx = client.contractSync("eosio.token");
    var memo = to;
    var result = ctx.transferSync(eosaccount, "fiboscouncil", value, memo);
    console.log(result);
}

function transferFO(from, to, amount){
    var account = from;
    var value = amount.toFixed(4) + " FO@eosio";
    var ctx = client.contractSync("eosio.token");
    var memo = "感谢您对chinafibosbp节点的支持~";
    var result = ctx.transferSync(account, to, value, memo);
    console.log(result);
}

// 把 EOS@FO 转到 EOS@EOS，fromaccount 是 FO 的主网账号，toaccount 是EOS主网账号
//transferEOS("fromaccount", "toaccount", 1);

// 把 FO@FO 转到 FO@FO，fromaccount 是 FO 的主网账号，toaccount 是 FO 的主网账号
transferFO("cnblockchain", "xuanyuan1122", 1637);
