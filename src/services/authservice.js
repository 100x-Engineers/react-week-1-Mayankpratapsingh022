const BASE_URL = "http://localhost:3000"

export const userLogin =  async (email,password) =>  {
    try{

   
 const result =   await  fetch(`${BASE_URL}/login`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:email,
                password:password
            })
         })

         // const jsonResponse = await result.json();
         // console.log("jsonn",jsonResponse);
     
      
 
        return result;


   
   
  }catch(error){
     console.log(error);
  } 
}