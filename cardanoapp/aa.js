//const Web3=require('aion-web3');

Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;

const web3 = new Web3("http://10.10.0.223:8545");

var pw = "Aion123$";
acc='0xa01260cf46fc2ef23c9f95f0380f17c4b7e945df22de503470e5462b28f48973';
web3.eth.defaultAcount='0xa01260cf46fc2ef23c9f95f0380f17c4b7e945df22de503470e5462b28f48973';

var c=web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "uint256"
			},
			{
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "uint256"
			},
			{
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "mul",
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
]);
var conName=c.at('0xa0efc0d277a4296589ecfcc14828e5a67f58f0c247758ed457786f145de7e02a');
 function unlock(){
 web3.personal.unlockAccount(0xa01260cf46fc2ef23c9f95f0380f17c4b7e945df22de503470e5462b28f48973, pw,6000, function(err,res){
	if(err){
		console.log('errr',err);
		}
	else(){
		console.log('succes',res);	
		}
} );


}



function ad(){

var a=document.getElementById('a1').value;
var b=document.getElementById('a2').value;
	conName.add(a,b,function(err,res){
		if(err){
		console.log('errr',err);
		}
	else(){
		console.log('succes',res);	
		}


});
}



