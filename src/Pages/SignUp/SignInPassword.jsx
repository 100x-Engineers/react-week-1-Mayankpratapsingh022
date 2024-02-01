
import React, {useContext, useState} from 'react'
import Steps from '../../Componets/Steps'
import Logo from '../../assets/100x.svg'
import HomePageHeader from '../../Componets/HomePageHeader'
import Input from '../../Componets/Input'
import Heading from '../../Componets/Heading'
import Button from '../../Componets/Button'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContextProvider'
import { userLogin } from '../../services/authservice'
import Cookies from "universal-cookie";
const cookies = new Cookies();
function SignInPassword() {
    const { user, setuser } = useContext(UserContext);
    const [password,setpassword] = useState("");
    const navigate = useNavigate();

   const handleLogin = async ()=>{

       try{
      const response = await userLogin(user.email,password);

      // console.log(response.json().then((result)=>{
      //   return result.token;
      // }), "hello");



      const data = await response.json();

      // // Access the token from the response
      const {token} = data;
  

      cookies.set("user_id",token,{sameSite:"strict"});
      if(response.status == "200"){
        
        // await fetch(`http://localhost:3000/cookie`);
        navigate("/home");
      }
    else{
      throw new Error("Invalid Credintials")

    }

    }catch(error){
    console.log(error,'handlelogin error')
    }
   }

//     const response =  async () =>  {
//     try{

   
//       const result =   await  fetch("http://localhost:3000/login",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//                 email:user.email,
//                 password:password
//             })
//          })

//         //  const jsonResponse = response.json();S
//         //  console.log("jsonn",jsonResponse);
//         // const statusCode = response.status;
      
//         return result;
         
   
//   }catch(error){
//      console.log(error);
//   } 
// }
  

// const  loginroute = async () =>{
//     const res = await response();
//    console.log(res.status, "hello")
//   if(res.status == "200"){
//     navigate("/home");
//   }
// else{
//   console.log("invalid credintials")
// }

// }
 

  return (
    <div className="bg-Neutral/1000 w-screen flex flex-col px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">
  <Steps    hidetitle='hidden'/>

  <div className="bg-Neutral/1000 w-screen flex flex-col  px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">

      <main className="flex flex-col p-2 h-screen justify-between w-full   gap-5 self-stretch ">
      <section className="flex w-full flex-col gap-10 px-7">
        <Heading text="Enter your password" />

    
        <Input
          placeholder="Name"
          name="name"
          value={user.email}
          onchange="{handelsetname}"
          type="Text"
          namevalue="Email"
          imghide="hidden"
          
        />
            
            <Input
          placeholder="Password"
          name="name"
          value={password}
          onchange={(value)=> setpassword(value)}
          type="Text"
          namevalue="Password"
          imghide="hidden"
          
        />


   
<p className="text-0.9375rem font-medium leading-normal not-italic font-inter text-neutral-50">
<Link to={"/"}><a className='text-twitter-blue'>Forgot password? </a></Link> 
        </p>

         <Button text='Log in' handleclick={handleLogin} />
       
         <p className="text-0.9375rem font-medium leading-normal not-italic font-inter text-neutral-50">
          Don't have an account? <Link to={"/"}><a className='text-twitter-blue'> Sign Up</a></Link> 
        </p>
    
      </section>
    
      </main>


    </div>
    
    </div>
  )
}

export default SignInPassword

