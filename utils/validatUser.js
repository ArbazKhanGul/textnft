import { addAddress } from "../slice/metamask";
import { ethers } from "ethers";



export default async function validateUser(user,address, dispatch, router, setLoading,page) {


  if (window?.ethereum) {
    try {
      if (address == undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const SignerAddress = await signer.getAddress();
        const chainId = await provider.getNetwork();

        if (chainId.chainId == process.env.chainId) {
          let checkSumAddress = ethers.utils.getAddress(SignerAddress);
          dispatch(addAddress(checkSumAddress));
          return;
        }
      }
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 28 ~ load ~ inside error printing the checking");
    }
  }


  //check page
  if (page == "main") {

      setLoading(true);
      return;

  } else {

    if (user?.address != address || !user || !address) {
      router.push("/");
      return;
    }
  }
  setLoading(true);
}
