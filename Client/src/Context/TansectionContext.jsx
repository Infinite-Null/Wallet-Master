import React, { useEffect, useState } from "react";

import {ethers} from 'ethers'

import {contractABI,contractAddress} from '../utils/costants'


export const TransectionContext=React.createContext();

const {ethereum}=window;

const getEthereumContract=()=>{
    const provider=new ethers.providers.Web3Provider(ethereum);
    const signer=provider.getSigner();
    const transectionContract=new ethers.Contract(contractAddress,contractABI,signer);
    console.log({
        provider,
        signer,
        transectionContract,
    })
}
export const TransectionProvider=(props)=>{
    const [formData,setFormData]=useState({
        addressTo:'',
        amount:'',
        keyword:'',
        message:''
    })

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

            
        } catch (error) {
            console.error(error)
            throw new Error("No Ethereun object.")
        }
    }

    useEffect(()=>{
        checkWalletConnect();
    },[connectedAccount,formData])
    return (
        <TransectionContext.Provider value={{
            connectWallet:connectWallet,
            connectedAccount:connectedAccount,
            formData:formData,
            handleChange:handleChange,
            setFormData:setFormData
        }}>
        {props.children}
        </TransectionContext.Provider>
    )
   
}

