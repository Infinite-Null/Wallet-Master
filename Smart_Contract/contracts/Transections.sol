//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transections{
    uint256 transectionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp ,string keyword);

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
   
    TransferStruct[] transections; 
    
    function addtoBlockchain(address payable receiver,uint amount, string memory message, string memory keyword) public {
            transectionCount+=1;
            transections.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));

            emit Transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);
    }

    function getAllTransections() public view returns (TransferStruct[] memory){
        return transections;
    }

    function getAllTransectionCount() public view returns(uint256){
      return transectionCount;
    }
}