import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";

import {
    useEffect, Navbar,  Footer, useState,
    useRouter, validateUser, getServerSideProps, toast, ToastContainer, useSelector,
    useDispatch, selectAddress, addAddress,NFTPortion,Work,TopCollections,Main,selectUser,addUser
} from "../components"
import { fetcherHome } from "../utils/fetcher";
import useValidate from "../utils/useValidate";





export default function Home({userinfo}) {


  const [loading, user, address] = useValidate(userinfo, "main");
  const { data, error,isLoading  } = useSWR("/homepage", fetcherHome);


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading ? (
              <div className="text-[1.6rem] font-['Inconsolata']">
              <ToastContainer pauseOnHover autoClose={5000} />
            </div>
      ) : (
        <>
          <Navbar></Navbar>
          <Main></Main>
          <TopCollections error={error} data={data?.profiles} isLoading={isLoading}></TopCollections>

          <Work></Work>
          <NFTPortion error={error} data={data?.nfts} isLoading={isLoading}></NFTPortion>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export {getServerSideProps}