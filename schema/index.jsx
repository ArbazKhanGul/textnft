import * as Yup from "yup";
export const SignUpSchema=Yup.object({
collectionName:Yup.string().trim().required("Please enter collection name ").min(2,"Minimum character should be 2").max(25,"Maximum character should be 20"),
authorName:Yup.string().trim().required("Please enter author name ").min(2,"Minimum character should be 2").max(25,"Maximum character should be 25"),
email:Yup.string().trim().required("Please enter email address").email("Please enter valid email address"),
description:Yup.string().trim().required("Please enter description ").min(10,"Minimum character should be 10").max(200,"Maximum character should be 200"),
walletAddress:Yup.string().trim().required("Please connect to metamask"),
profile:Yup.string().trim().required("Please select profile image"),
cover:Yup.string().trim().required("Please select Cover image"),

})