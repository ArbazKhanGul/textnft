
import   {BsFacebook} from "react-icons/bs"
import   {BsInstagram} from "react-icons/bs"
import   {BsTwitter} from "react-icons/bs"
import {memo} from "react";
const Footer=()=>{
    const d = new Date();
    let year = d.getFullYear();
console.log("Render Again")    
    return (<div className="bg-[#0d133b] text-[1.4rem] footertext  text-[white] flex justify-between px-[4rem] py-[2rem] items-center footerdirection ">

        <div>
            <h2 className=" mb-[1rem] font-medium">Digital Assets NFTs</h2>
            <div className="flex justify-between"><BsFacebook className="text-[blue] log bg-[white] rounded-full"></BsFacebook>
            <BsInstagram className="insta log text-[white] "></BsInstagram>
            <BsTwitter className="text-[white] bg-[#00ACEE] p-[3.9px] rounded-[10px] log"></BsTwitter>
            </div>
        </div>
        <div className="text-[1.6rem] font-medium">

            Copyright-{year}
        </div>
        <div className="mb-[0.5rem] flex justify-center flex-col items-center text-[1.6rem] font-medium">
            <div>Contact Us</div>
            <div>{process.env.CONTACT}</div>

        </div>
    </div>)
}

export default memo(Footer);