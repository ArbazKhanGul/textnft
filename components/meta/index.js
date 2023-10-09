

const Meta=({nftData,contentData}) => {
  console.log("🚀 ~ file: index.js:4 ~ Meta ~ nftData", nftData)

    return(
        <>
        <meta property="og:url"  content={`https://dgitalassets.vercel.app/individualnft/${nftData?.tokenURI}`} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="fb:app_id" content="966242223397117" />
        <meta property="og:title" content={nftData?.nftName} />
        <meta property="og:site_name" content="Digital Assets Nfts" />


       {contentData.type=="text" && <>
        <meta property="description"  content={`${nftData?.title}`}/>
        <meta property="og:description"  content={`${nftData?.title}`} /> 
        <meta property="image" content={`https://dgitalassets.vercel.app/social_share.png`} />
        <meta property="og:image"  content={`https://dgitalassets.vercel.app/social_share.png`} />

        </>
       }


       { contentData.type=="image" && <>
        <meta property="description"  content={`${contentData?.description}`}/>
        <meta property="og:description"  content={`${contentData?.description}`} /> 
        <meta property="image" content={`${process.env.ipfsURL}${contentData?.content}`} />
        <meta property="og:image"  content={`${process.env.ipfsURL}${contentData?.content}`} />
        {/* <meta property="og:image:type" content="image/png" /> */}
        </>
       }


       {contentData.type=="video" || contentData.type=="audio" ? <>
       <meta property="description"  content={`${contentData?.decription}`}/>
        <meta property="og:description"  content={`${contentData?.description}`} /> 
        <meta property="image" content={`https://dgitalassets.vercel.app/social_s.png`} />
        <meta property="og:image"  content={`https://dgitalassets.vercel.app/social_s.png`} />
        </>:null
       }







        {/* <meta property="og:image:secure_url" content="https://textnft.vercel.app/new.png" /> */}
        {/* <meta property="og:image:width" content="270" /> */}
        {/* <meta property="og:image:height" content="270" /> */}
        {/* <meta property="image:width" content="467" /> */}
        {/* <meta property="image:height" content="88" /> */}


{/* twitter */}


        <meta
          property="twitter:url"
          content={`https://dgitalassets.vercel.app/individualnft/${nftData?.tokenURI}`}
        />
        <meta property="twitter:title" 
        content={nftData?.nftName} />


      {contentData.type=="text" && <>
        <meta
          property="twitter:description"
          content={nftData?.title}
          key="og-desc"
        />
        <meta
          property="twitter:image"
          itemProp="image"
          content={`https://dgitalassets.vercel.app/background.jpg`}
        />
      </>}



      {contentData.type=="image" && <>
        <meta
          property="twitter:description"
          content={contentData?.description}
          key="og-desc"
        />
        <meta
          property="twitter:image"
          itemProp="image"
          content={`${process.env.ipfsURL}${contentData?.content}`}
        />
        </>}
        {/* <meta name="twitter:card" content="summary_large_image"/> */}
        </>
    )
}

export default Meta;