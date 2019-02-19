const Web3=require('web3');

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;

const web3 = new Web3('https://kevm-testnet.iohkdev.io:8546/');

const ABI=web3.eth.contract(

[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setNum",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "num",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
);

const contract = ABI.at('0x3f5c9fc29e820eafcd8efb991f3600ef384c913d');


function add(){
	
var a=document.getElementById('i1').value;
var b=document.getElementById('i2').value;
const c=contract.methods.setNum(123).encodeABI();
console.log(c);

contract.setNum(b, function(err, res){
	if(!err)
	{
	 console.log(res);
	}
}
);

}

 
function show(){

contract.num(function(err, res){

	if(!err)
	{
	 console.log(res);
	}}

);

}
