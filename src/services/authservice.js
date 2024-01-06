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

        //  const jsonResponse = await response.json();
        //  console.log("jsonn",jsonResponse);
        // const statusCode = response.status;
      
        return result;
         
   
  }catch(error){
     console.log(error);
  } 
}