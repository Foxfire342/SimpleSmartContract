var contractABI = [];
var contractAddress = "0x918c8a467A68f309189c7A6EF05BEdcD5c96b330";
var web3 = new Web3("http://localhost:9545");
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
