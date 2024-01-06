const BASE_URL = "http://localhost:3000"


export const UserFeed =  async () =>  {

 const response = await fetch("http://localhost:3000/feed");
 const data = response.json();
 console.log(data)
 return data;
   
 

}



// export const UserFeed =  async () =>  {
//     try{

   
//  const result =   await  fetch(`${BASE_URL}/feed`,{
          
    
//          })

//         //  const jsonResponse = await response.json();
//         //  console.log("jsonn",jsonResponse);
//         // const statusCode = response.status;
//       if(result.ok){
//         const feedData = await result.json();
//         console.log(feedData,"feedData");
//       }else{
//         console.error("Error",result.status)
//       }
      
         
   
//   }catch(error){
//      console.log(error);
//   } 
// }