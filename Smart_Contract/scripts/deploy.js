const main=async ()=> {
  const Transections=await hre.ethers.getContractFactory("Transections");

  const transections=await Transections.deploy();
  await transections.deployed();

  
  console.log("Success: ",transections.address);
}

const runMain=async ()=>{
  try{
    await main();
    process.exit(0);
  }catch (e){
      console.error(e);
      process.exit(1);
  }
}

runMain();
