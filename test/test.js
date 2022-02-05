//Dependencies
const IIT = require("../index")

//Main
void async function Main(){
    const result = await IIT.check("193.122.15.219")

    console.log(result)
}()