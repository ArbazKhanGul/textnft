const Filter=()=>{
    return (<div className="bg-[#EDF2F7] rounded-[1.1rem] mt-[0.7rem] pt-[1rem] ml-[0rem]:im">
        <div className="text-[#FD2121DB] text-center text-[1.2rem] md:text-[1.4rem] px-[1rem]">If you don’t want to use any filter from below simply leave it empty</div>
    <div className="flex flex-wrap md:space-x-[1.5rem] lg:justify-between xl:justify-start lg:space-x-[1rem] xl:space-x-[1.8rem] px-[1.5rem] md:px-[1rem] pb-[1.5rem]">
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] md:ml-[1.5rem] lg:ml-[1rem] xl:ml-[1.8rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter NFT Name"/>
         </div>
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.6rem]" placeholder="Enter owner email address"/>
         </div>
   <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter creator email address"/>
         </div>
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter owner wallet address"/>
         </div>
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter creator wallet address"/>
         </div>
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter lowest price in BNB"/>
         </div>
         <div className="input_bord_grad w-[100%] md:w-[31rem] lg:w-[30rem] xl:w-[27rem] mt-[1.5rem]">
            <input type="text" className="outline-none text-[1.6rem] md:text-[1.7rem] border-none w-[100%] rounded-[1.2rem] p-[0.7rem]" placeholder="Enter highest price in BNB"/>
         </div>
    </div>
    </div>)
}

export default Filter;