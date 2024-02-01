import React, { useEffect, useState ,useRef} from 'react'
import UserProfileBanner from '../../Componets/UserProfileBanner'
import Steps from '../../Componets/Steps'
import Profile from '../../assets/profile.png'
import Cookies from 'universal-cookie';
import {useParams, useNavigate} from 'react-router-dom';
import axios  from 'axios';
function EditProfile() {
  const cookies = new Cookies();
  const userId = useParams().id;
  const navigate = useNavigate();
  const[image,setImage] = useState();
  const fileInputRef = useRef(null);
  
const [file,setfile] = useState()
  const [userInfo,setUserInfo] = useState({
     name:'',
     bio:"",
     location:"",
     website:"",
     username:"",
     profilePicUrl:false,
  });




  const GetUserInfo = async () => {
  
    const response =  await  fetch(`http://localhost:3000/CurrentUserProfile/${userId}`);
  
   const data = await response.json().then((result) => {

    return result
  
  
  });

  console.log(data)
  setUserInfo({
    ...userInfo,
    name:data.UserDisplayName,
    bio:data.Bio,
    website:data.Website,
    location:data.location,
    username:data.UserName,
    profilePicUrl:data.profilePicUrl,

  })
    

  }

  useEffect(()=>{
GetUserInfo();
console.log("user data changed")
  },[])
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (e) => {
  //   // Update the state with the selected file
  //   setSelectedFile(e.target.files[0]);
  // };

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', selectedFile);

  //     fetch('http://localhost:3000/upload', {
  //       method: 'POST',
  //       body: {
  //         formData,
  //         userId:userId,

  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         // Handle the response from the server
  //         console.log('File uploaded successfully:', data);
  //       })
  //       .catch(error => {
  //         // Handle errors
  //         console.error('Error uploading file:', error);
  //       });
  //   } else {
  //     console.error('No file selected.');
  //   }


  // };

// const submitImage= async(e) =>{
// e.preventDefault();
// const formData = new FormData();
// formData.append("image",image);
// const result = await axios.post(`http://localhost:3000/upload`,formData,{
//   headers:{"Content-Type":"multipart/form-data"},
// }

// )
// }



// const submitImage = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("image", image); // Replace 'image' with the actual variable containing the image file

//   try {
//     const response = await fetch('http://localhost:3000/upload', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Image upload failed');
//     }

//     const result = await response.json(); // Assuming the server returns JSON, adjust accordingly

//     console.log(result); // You can handle the result as needed
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     // Handle error as needed
//   }
// };

const openFileInput = () => {
  // Trigger click event on the file input
  fileInputRef.current.click();
};



const upload = ()=> {
  const formData = new FormData()
  formData.append('userId', userId);
  formData.append('file',file)
    axios.post('http://localhost:3000/upload',formData).then(
      response => {
 
        console.log('Response:', response.data);
      }
    ).catch(er => console.log("server is running"))

}



// const onInputChange = (e)=>{
// setImage(e.target.files[0]);
// console.log(e.target.files[0]);

// }


const updateUserInfo =  async ()=>{
  const response =  await  fetch(`http://localhost:3000/EditUserProfile`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      "displayName":userInfo.name,
           bio:userInfo.bio,
           location:userInfo.location,
           webiste:userInfo.website,
           username:userInfo.username,
           user_id:cookies.get('user_id'),
           
   })
 }) 

//  handleUpload();
  navigate(`/UserProfile/${userId}`)
 
}


useEffect(()=> { GetUserInfo()

},[])


useEffect(()=>{
upload();
},[file]);


  return (
    <div className='bg-black w-full h-screen relative '>
       
     

       <Steps hidetitle='hidden' onClickFunction={updateUserInfo} Editprofile='Edit Profile' Xbuttondirect={`/UserProfile/${userId}`} hidebutton='display' buttontext='Save' buttonstyle='button-white'  className="z-10 absolute" />
   
   <div className='z-0 absolute' >
      <section className="flex flex-row w-screen   gap-5 px-5 py-5  ">


    <UserProfileBanner hide='display'/>



</section>

<section className="px-5 w-full relative bg-black  ">
  {/* <form action='http://localhost:3000/upload' method='POST' encType='multipart/form-data' > */}

<button  onClick={openFileInput}   className=' cursor-pointer' ><img src={userInfo.profilePicUrl?userInfo.profilePicUrl:Profile} className="w-4.25rem h-4.25rem shrink-0 rounded-full object-cover border-4 border-black absolute -top-12 translate-x-3 translate-y-0 bottom-5  " /></button>

<input id="upload-avatar" accept='image/*' type='file' className='invisible hidden' name='' onChange={(e)=> setfile(e.target.files[0])}    ref={fileInputRef} />
  



{/* </form> */}


   <div className='overflow-y-auto '>
   <div className='py-10'>
<fieldset className="flex w-full my-2  pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
  <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue "> <div className="flex inline-flex py-0 px-1 ">Name</div></legend>
  <input className=" w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-base not-italic font-normal leading-normal   " type="text" value={userInfo.name} onChange={(e)=>{setUserInfo({
    ...userInfo,
    name:e.target.value,
  })}} placeholder="Name" />
</fieldset>
<fieldset className="flex w-full my-2  pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
  <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue "> <div className="flex inline-flex py-0 px-1 ">Username</div></legend>
  <input className=" w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-base not-italic font-normal leading-normal   " placeholder="Username" type="text" value={userInfo.username} onChange={(e)=>{setUserInfo({
    ...userInfo,
    username:e.target.value,
  })}} />
</fieldset>


<div>
  <fieldset className="flex w-full my-2   pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
    <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue "> <div className="flex inline-flex py-0 px-1 ">Bio</div></legend>
    <textarea className=" w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-base not-italic font-normal leading-normal resize-none" type="text" cols={30} rows={3} placeholder="Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations"  value={userInfo.bio} onChange={(e)=>{setUserInfo({
    ...userInfo,
    bio:e.target.value,
  })}}  />
    {/* <img class="w-6 h-6 hidden"  src="../../public/images/successtick.svg" alt=""> */}
  </fieldset>
  {/* location field  */}
  <fieldset className="flex w-full  my-2  pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
    <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue "> <div className="flex inline-flex py-0 px-1 ">Location </div></legend>
    <input className=" w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-base not-italic font-normal leading-normal   " type="text" placeholder="Location"  value={userInfo.location} onChange={(e)=>{setUserInfo({
    ...userInfo,
    location:e.target.value,
  })}} />
    {/*   
   <img class="w-6 h-6 hidden"  src="../../public/images/successtick.svg" alt=""> */}
  </fieldset>
  {/* Website */}
  <fieldset className="flex w-full  pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
    <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue "> <div className="flex inline-flex py-0 px-1 ">Website</div></legend>
    <input className=" w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-base not-italic font-normal leading-normal   " type="text" placeholder="Website"  value={userInfo.website} onChange={(e)=>{setUserInfo({
    ...userInfo,
    website:e.target.value,
  })}} />
    {/*   
   <img class="w-6 h-6 hidden"  src="../../public/images/successtick.svg" alt=""> */}
  </fieldset>
</div>

</div>
</div>

    </section>

    </div> 
    </div>
  )
}

export default EditProfile