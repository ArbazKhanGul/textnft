import Image from "next/image";
import { motion } from "framer-motion"
import {MdOutlineCreate} from "react-icons/md"
import {BsShare} from "react-icons/bs";
import {MdOutlineSell} from "react-icons/md"
import {AiOutlineQrcode} from "react-icons/ai"
import {FaRegCopyright} from "react-icons/fa"
import WorkComp from "./workBox";

import {memo} from "react";
const Work=()=>{
  const contVar={
    hidden:{
      x:"-100%",
      opacity: 0
    },
    visible:{
      x:0,
      opacity: 1,
      transition:{
        // delay: 0.1,
        duration:0.6
      }
    }
    }
    
    const right={
      hidden:{
        x:"100%",
        opacity: 0
      },
      visible:{
        x:0,
        opacity: 1,
        transition:{
          // delay: 0.2,
          duration:0.6
        }
      }
      }
return (<>
<div className="mainwork back_grad_work py-[1rem] md:pb-[5rem] md:pt-[2rem] overflow-x-hidden px-[1rem] sm:px-[2rem] md:px-[4rem]" >
  <div className="mainwork-content">
{/* <div className=" h-fit  overflow-x-hidden xl:h-fit work mt-[2.5rem] flex flex-col lg:flex-row py-[2.5rem] lg:py-[7rem] px-[2.5rem] lg:px-[5rem] items-center justify-between"> */}
<div className="text-[2.5rem]   flex justify-center font-['Inconsolata'] font-bold sm:text-[3rem] md:text-[3.6rem] ">
  <div className="w-fit flex bord-bottomf"> 
    <div className="text-[white] w-fit whitespace-nowrap"> Main Features</div>
    <div className=""></div>
    <div className="inline-block color-[#f5f6fa] w-[3.5rem] h-[3.2rem] sm:w-[3.2rem] md:w-[4rem] mt-[0.6rem] ml-[0.5rem] sm:h-[3.2rem] md:h-[4rem] rounded-full relative">
      <Image
        className="rounded-full"
        src={`/features1.png`}
        layout="fill"
      />
    </div>  
  </div>
</div>
<div className="flex justify-around flex-wrap ">
  
  
  





<WorkComp title="Create NFT" text="You can easily create nft of your digital assets like image,video ,text and audio" icon={"create.png"} dir={"left"}/>
<WorkComp title="Buy" text="You can easily buy  any nft and can again sell nft at higher price after buying it" icon={"buy.png"} dir={"left"}/>
<WorkComp title="Share" text="You can easily share nft on social media platform like facebook twitter and whatsapp" icon={"share.png"} dir={"left"}/>
<WorkComp title="Sell" text="You can easily sell any nft that you and at any price you want" icon={"offer.png"} dir={"left"}/>

<WorkComp title="Create Copy" text="You can create copy of orginal nft but this copy always refer to original nft" icon={"copy.png"} dir={"right"}/>

<WorkComp title="Qr code" text="You can generate qr code of any nft or profile and can used this code for advertisement" icon={"qr.png"} dir={"right"}/>
<WorkComp title="Buy BNB" text="You can easily buy bnb from our platform using credit card and use these bnb for buying nfts" icon={"bnb.png"} dir={"right"}/>

<WorkComp title="100% Secure" text="This platform is 100% secure no person can use other person content" icon={"lucky.png"} dir={"right"}/>



    


 </div>
    </div>

</div>
</>)

}

export default memo(Work);