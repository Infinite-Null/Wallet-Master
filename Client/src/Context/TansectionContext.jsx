import React, { useEffect, useState } from "react";

import { ethers } from "ethers";

import {contractABI,contractAddress} from '../utils/costants'


export const TransectionContext=React.createContext();

const {ethereum}=window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    console.log(transactionsContract)
    return transactionsContract;
  };

export const TransectionProvider=(props)=>{
    const [formData,setFormData]=useState({
        addressTo:'',
        amount:'',
        keyword:'',
        message:''
    })
    const [isLoading,setIsLoading]=useState(false)
    const [count,setCount]=useState(localStorage.getItem('count'))
    const handleChange=(e,name)=>{
        setFormData((prev)=>({...prev,[name]:e.target.value}))
    }

    var [connectedAccount,setConnectedAccount]=useState('');
    const checkWalletConnect=async()=>{
        if(!ethereum) return alert("Please install Metamask")

        const accounts=await ethereum.request({method:'eth_accounts'})

        if(accounts.length){
            const account0=accounts[0]
            setConnectedAccount(()=>account0)

            //getAllTransection()
        }else{
            console.log('no account found')
        }
    }
    
    const connectWallet=async()=>{
        try{
            if(!ethereum) return alert("Please install Metamask")

            const accounts=await ethereum.request({method:'eth_requestAccounts'})
            const account0=accounts[0]
            setConnectedAccount(()=>account0)

        }catch(e){
            console.error(e)
            throw new Error("No Ethereun object.")
        }
    }


    const sendTransection=async()=>{
        try {
            if(!ethereum) return alert("Please install Metamask")

            const {
                addressTo,
                amount,
                keyword,
                message
            }=formData

            const transectionContract=createEthereumContract()
            const parsedAmount=ethers.utils.parseEther(amount)

            setIsLoading(()=>true)
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[
                    {
                        from:connectedAccount,
                        to:addressTo,
                        gas:"0x5208",
                        value:parsedAmount._hex,
                    }
                ]
            });

          const transectionHash = await transectionContract.addtoBlockchain(
                addressTo,parsedAmount,message,keyword
            );
            console.log(`Loading - ${transectionHash.hash}`)
            await transectionHash.wait();
            console.log(`Done`)

          setIsLoading(()=>false)
          const transectionCount=await transectionContract.getAllTransectionCount()
          setCount(()=>transectionCount.toNumber())
        } catch (error) {
            console.error(error)
            throw new Error("No Ethereun object.")
        }
    }

    useEffect(()=>{
        checkWalletConnect();
    },[connectedAccount,formData,isLoading,count])
    return (
        <TransectionContext.Provider value={{
            connectWallet:connectWallet,
            connectedAccount:connectedAccount,
            formData:formData,
            handleChange:handleChange,
            setFormData:setFormData,
            sendTransection:sendTransection
        }}>
        {props.children}
        </TransectionContext.Provider>
    )
   
}

