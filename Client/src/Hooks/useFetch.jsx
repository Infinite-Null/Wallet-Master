import { useEffect, useState } from "react"

 const useFetch=({keyword})=>{
      const[gifUrl,setGifUrl]=useState("");
      const api_key='AjHxt5HtCdJKPoeQkBiw1xOYvmgG7oyd'
      const fetchGifs=async()=>{
        try {
            const response =await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword.split(' ').join("")}&limit=1`)
            const {data}=await response.json();
            setGifUrl(()=>data[0]?.images?.downsized_medium?.url)
        }catch (error) {
         setGifUrl(()=>"https://dribbble.com/shots/4659605-Bitcoin-Machine-Cryptocurrency-Animated-Illustration") 
        }
      }

      useEffect(()=>{
        if(keyword) fetchGifs()
      },[gifUrl,keyword])

      return gifUrl
}
export default useFetch