import deleteCopyRight from "../../utils/deleteCopyright";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
function confirmDelete({ setShowModal,id,setLoader,nftid }) {
  let router=useRouter();
    return (
    <>
    <div className="px-[13px] justify-center items-center flex overflow-x-hidden h-fit fixed inset-0 z-50 outline-none focus:outline-none top-[8rem]">
        <div className="relative  my-6 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">

            <div className="border-0 rounded-[1rem] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="bg-[#1E2346] rounded-t-[1rem] flex items-start justify-between py-5 px-[2rem] border-b border-solid border-slate-200 ">
                    <h3 className="text-[2rem] font-semibold text-[white]">

                        Request CopyRights:

                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {
                            setShowModal(false)
                        }}                  >
                        <AiOutlineClose className="text-[red] text-[2.2rem]"></AiOutlineClose>


                    </button>
                </div>
                {/*body*/}

                    <div className={"relative pb-6 flex-auto"}>
                            <div>
                                <div className="mx-[1.5rem] lg:ml-[1rem] xl:mx-[1.8rem] my-[1rem]">
                                    <h2 className=" text-[#0D1344E5']  text-[1.8rem] font-medium ml-[0.3rem] mb-[0.4rem] tracking-wider">
                                  Are you sure to delete this copyright request ? </h2>
                                </div>


                            </div>

                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="mr-[2rem]  bg-[#1b31c4] hover:bg-[#182ba8]  text-white font-normal text-[1.7rem] sm:font-semibold py-3 px-[3rem] rounded-full  tracking-wider"
                                type="button"
                                onClick={() => deleteCopyRight(id,setLoader,setShowModal,nftid,router)}
                            >
                                Confirm
                            </button>

                    </div>
                    </div>
        </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
  )
}

export default confirmDelete