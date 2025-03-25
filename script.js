//creating a promise

//const statusRef = document.querySelector('status')
function getVideo(subscriptionStatus){
 return new Promise((resolve, reject) => {
    if (subscriptionStatus === 'VIP') {
        resolve ("show video");
    }
        else if (subscriptionStatus === 'FREE'){
            resolve ("show trailer");
        }
        else {
            reject("no video");
        }
    })
 }

async function main(){
   const status = await getsubscriptionStatus(); //waits for promise to resolve
   statusRef.innerHTML = status;
   console.log(getVideo(status))
//call getVideo with the subscriptionStatus and log results

}

 main() //call it


 // Create a function called 'getVideo'
 // Accept a parameter called 'subscritionStatus'
 //Return an new Promise inside of the function that:
 // -if "VIP" resolve ("show video")
 // -if "FREE" resolve ("show trailer")
 // -otherwise reject ("no video")
 // Console.log theresult of getVideo() in main()

