//https://eth-sepolia.g.alchemy.com/v2/mmsTC9DNCs9y9-kK8mWrDwfwysSENPyB

require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity:'0.8.0',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/mmsTC9DNCs9y9-kK8mWrDwfwysSENPyB',
      accounts:['0xbbc7f34c74d69938f379ac4a9a930f37444f7badfba98abb5d9afb2dfb28d96f']
    }
  }
}