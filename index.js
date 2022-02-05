//Dependencies
const Axios = require("axios")

//Main
async function check(ip){
    var response = await Axios({
        method: "GET",
        url: "https://raw.githubusercontent.com/SecOps-Institute/Tor-IP-Addresses/master/tor-nodes.lst"
    })

    response = response.data

    if(response.indexOf(ip) !== -1){
        return true
    }else{
        return false
    }
}

//Main
module.exports = {
    check
}