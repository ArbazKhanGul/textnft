import Button from "./button"
import IndividualNFT from "./individualnft"
const NFTPortion =()=>{

    let temp=[{nftname:"Home",creator:"arbazkhangul123@gmail.com",owner:"owner@gmail.com",creationdate:"10/9/2202  24:33:12",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work  success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10 /9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10/9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"},{nftname:"NFT name",creator:"creator@gmail.com",owner:"owner@gmail.com",creationdate:"10/9/2002",nfttext:"If you continue work hard success will follow you",price:"0.1BNB"}
]


    return (<div>
        <div className="nft w-fit text-[3.1rem] ml-[2rem] sm:text-[3rem] md:text-[3.7rem] font-['DynaPuff'] mt-[1.2rem] sm:ml-[3.5rem] md:ml-[4rem]">
    Trending NFTs: 
    </div>
    <span className="colgrad text-[1.7rem] font-semibold  mt-[1.2rem] mx-[2.5rem] md:mx-[4rem] block font-['Inconsolata']">(Click on any NFT to see his full detail and buying option)</span>

<div className="flex flex-wrap jt mx-[4rem] mg">


{temp.map((value,index)=>{
            return(<IndividualNFT key={index} index={index} nftname={value.nftname} owner={value.owner} creator={value.creator} price={value.price} creationdate={value.creationdate} nfttext={value.nfttext}></IndividualNFT>)
        })
    }

</div>

<div className="mg flex justify-end my-[1.5rem] font-['Inconsolata']">
<Button></Button>
</div>
    </div>)
}

export default NFTPortion;