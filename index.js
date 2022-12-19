"use strict";

// Dependencies
const Axios = require("axios")

// Main
function check(ip){
    return new Promise(async(resolve)=>{
        var response = await Axios({
            method: "GET",
            url: "https://raw.githubusercontent.com/SecOps-Institute/Tor-IP-Addresses/master/tor-nodes.lst"
        })

        response = response.data

        if(response.match(ip)){
            resolve(true)
        }else{
            resolve(false)
        }
    })
}

module.exports = {
    check
}