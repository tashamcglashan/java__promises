//creating a promise

/*const statusRef = document.querySelector('.status')
function getSubscriptionStatus(){
  return new Promise ((resolve, reject) => {     //creates callback
  setTimeout(() => {
    resolve("VIP")
  }, 2000);
});
}
async function main() {
   const status = await getSubscriptionStatus();     //waits for promise to resolve
   statusRef.textContent = status;
}
 main()    //call it
 */
 
 
 // Create a function called 'getVideo'
 // Accept a parameter called 'subscriptionStatus'
 //Return an new Promise inside of the function that:
 // -if "VIP" resolve ("show video")
 // -if "FREE" resolve ("show trailer")
 // -otherwise reject ("no video")
 // Console.log the result of getVideo(status) in main()



 const statusRef = document.querySelector('.status')
//Function to get the subcription status
 function getSubscriptionStatus(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000)
    })
}

 //Function to get the video based on subscription status
 
 function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
      if (subscriptionStatus === "VIP") {
        resolve("show video"); // VIP users see the full video
      } else if (subscriptionStatus === "FREE") {
        resolve("show trailer"); // Free users see a trailer
      } else {
        reject("no video"); // Others see nothing
      }
    });
  }
  
  // Main function to execute
  async function main(){
    const status = await getSubscriptionStatus()
    statusRef.innerText = status
    
    const video = await getVideo(status)
    console.log(video)
  }
   
main()
