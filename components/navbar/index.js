import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import { connectWalletLogin } from "../../metamask/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { selectAddress, addAddress } from "../../slice/metamask";
import {ethers} from "ethers"
import { shortText } from "limit-text-js";
import { selectUser} from "../../slice/user";

const Navbar = () => {

  const user = useSelector(selectUser);
  console.log("🚀 ~ file: index.js ~ line 20 ~ Navbar ~ user", user)

  
  const router = useRouter();
  const [showItems, show] = useState(false);
  const address = useSelector(selectAddress);

  console.log("Address ",address);
  const dispatch = useDispatch();

useEffect(() => {

    // if (window?.ethereum?._state?.accounts[0]) {
    // // console.log("🚀 ~ file: index.js ~ line 23 ~ useEffect ~ window?.ethereum?._state?.accounts[0]", window?.ethereum?._state?.accounts[0])
    //   let checkSumAddress=ethers.utils.getAddress(window?.ethereum?._state?.accounts[0])
    //   dispatch(addAddress(checkSumAddress));
    // }

    function handleAccountChanged(accounts) {
      
      if (address) {
        toast.warn("Account Changed or Disconnect", {
          position: "top-center",
        });
        if(!accounts[0])
        {
          dispatch(addAddress(accounts[0]));
          return;
        }
        let checkSumAddress=ethers.utils.getAddress(accounts[0])
        dispatch(addAddress(checkSumAddress));
      }
    }

  async function handleChainChanged(chainId) {
      
      if (chainId == 56) {

        try{
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const SignerAddress = await signer.getAddress();
        let checkSumAddress=ethers.utils.getAddress(SignerAddress)
        dispatch(addAddress(checkSumAddress));
        }
        catch(err){
        }
        // if (window?.ethereum?._state?.accounts[0]) {
        //   let checkSumAddress=ethers.utils.getAddress(window?.ethereum?._state?.accounts[0])
        //   dispatch(addAddress(checkSumAddress));
        // }



      } else {
        dispatch(addAddress(undefined));
        toast.error("Please connect to binance smart chain", {
          position: "top-center",
        });
      }
    }

    window?.ethereum?.on("accountsChanged", handleAccountChanged);

    window?.ethereum?.on("chainChanged", handleChainChanged);

    return () => {
      window?.ethereum?.removeListener("accountsChanged", handleAccountChanged);
      window?.ethereum?.removeListener("chainChanged", handleChainChanged);
    };
  }, [address]);



  return (
    <>
      <div className="navbar flex items-center pl-[0.8rem] pr-[2rem]  sm:pl-[2rem] sm:pr-[3rem] md:pl-[4rem] md:pr-[5rem] md:!pt-[0.2rem] md:!pb-[0.2rem]">
        <div className=" w-[26rem] h-[4.2rem] sm:w-[30rem] sm:h-[5rem]  md:w-[35rem] md:h-[6rem]  relative">
          <Image
            src="/logo.png"
            layout="fill"
          />
        </div>

        <div className="flex-1 items-center flex">
          <AiOutlineMenu
            className="w-[2.7rem] ml-auto h-[2.7rem]  inline-block lg:hidden text-white"
            onClick={() => {
              show((prevState) => {
                return prevState ? false : true;
              });
            }}
          ></AiOutlineMenu>

          <ul className=" ml-auto hidden lg:inline-flex items-center">
            <li className="inline-block links">
              <Link href="/">
                <a className={router.pathname == "/" ? "text-blue-600" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li className="inline-block links">
              <Link href="/nft">
                <a className={router.pathname == "/nft" ? "text-blue-600" : ""}>
                  NFTs
                </a>
              </Link>
            </li>
            <li className="inline-block links ">
              <Link href="/collection">
                <a
                  className={
                    router.pathname == "/collection" ? "text-blue-600" : ""
                  }
                >
                  Collections
                </a>
              </Link>
            </li>

            {!user?(

              <>
              
              
            <li className="inline-block links ">
              <button
                onClick={() => connectWalletLogin(dispatch, address)}
                className="bg-blue-500  hover:bg-blue-700  text-white font-normal text-[1.8rem] sm:font-semibold py-2 px-12  sm:py-2 sm:px-11 rounded-full font-['Inconsolata'] tracking-wider"
              >
                {/* <Link href="/login"> */}
                <a>Login</a>
                {/* </Link> */}
              </button>
            </li>
            <li className="inline-block links">
             
                <Link href="/registration">
                  <a> <button className="bg-blue-500  hover:bg-blue-700  text-white font-normal text-[1.8rem] sm:font-semibold py-2 px-12  sm:py-2 sm:px-11 rounded-full font-['Inconsolata'] tracking-wider">
                        Register
                  </button>
                  </a>
                </Link>

            </li>
            </> ):(
              <> 

      <li className="inline-block links">
              <Link href="/">
                <a className={router.pathname == "/createnft" ? "text-blue-600" : ""}>
                  Create NFT
                </a>
              </Link>
            </li>

           <li className="inline-block links ">
              <Link href="/collection">
                <a
                  className={
                    router.pathname == "/collection" ? "text-blue-600" : ""
                  }
                >
                  Logout
                </a>
              </Link>
            </li>

            <li className="inline-block links">

              {/* <button className="bg-blue-500  hover:bg-blue-700  text-white font-normal text-[1.8rem] sm:font-semibold py-2 px-12  sm:py-2 sm:px-11 rounded-full font-['Inconsolata'] tracking-wider">
                <Link href="/registration">
                  <a>Logout</a>
                </Link>
              </button> */}


              <Link href="/profile">
                <a
                  className={
                    router.pathname == "/profile" ? "text-blue-600" : ""
                  }
                >
              <div className="flex items-center space-x-[0.4rem]">

              <div className=" w-[4.2rem] h-[4.2rem] rounded-full relative">
          <Image
            src={`${process.env.SERVER}/${user.profile}`}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <h2>{shortText(user.authorName, 10, "...")}</h2>
              </div>
              </a>
              </Link>

            </li>
            </>
            )}
          </ul>
        </div>
      </div>

      <div
        className={
          "onclicklist transition-all duration-500 overflow-hidden lg:hidden linear " +
          (!showItems ? "h-0 " : "h-[212px]")
        }
      >
        <ul className={" ml-auto divide-y-[1px] divide-[#454f5a]"}>
          <Link href="/" passHref>
            <a>
              <li
                className={
                  "onlinks py-[0.8rem] pl-[2.5rem] sm:pl-[3.7rem] md:pl-[6rem] " +
                  (router.pathname == "/" ? "text-blue-600" : "text-[#EAE1E1]")
                }
              >
                Home
              </li>
            </a>
          </Link>
          <Link href="/nft">
            <a>
              <li
                className={
                  " onlinks py-[0.7rem] px-[2.5rem] sm:pl-[3.7rem] md:pl-[6rem] " +
                  (router.pathname == "/nft"
                    ? "text-blue-600"
                    : "text-[#EAE1E1]")
                }
              >
                NFTs
              </li>
            </a>
          </Link>

          <Link href="/collection">
            <a>
              <li
                className={
                  " onlinks py-[0.7rem] px-[2.5rem] sm:pl-[3.7rem] md:pl-[6rem] " +
                  (router.pathname == "/collection"
                    ? "text-blue-600"
                    : "text-[#EAE1E1]")
                }
              >
                Collections
              </li>
            </a>
          </Link>

          <Link href="/login">
            <a>
              <li
                className={
                  "onlinks py-[0.7rem] px-[2.5rem] sm:pl-[3.7rem] md:pl-[6rem] " +
                  (router.pathname == "/login"
                    ? "text-blue-600"
                    : "text-[#EAE1E1]")
                }
              >
                Login{" "}
              </li>
            </a>
          </Link>

          <Link href="/registration">
            <a>
              <li
                className={
                  "onlinks py-[0.7rem] px-[2.5rem] sm:pl-[3.7rem] md:pl-[6rem] " +
                  (router.pathname == "/registration"
                    ? "text-blue-600"
                    : "text-[#EAE1E1]")
                }
              >
                Register
              </li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="text-[1.5rem] font-['Inconsolata']">
        <ToastContainer pauseOnHover autoClose={5000} />
      </div>
    </>
  );
};

export default Navbar;
