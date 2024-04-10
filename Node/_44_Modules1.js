
const slam = () => {
    console.log("Slam Bro")
}

const slamName = (name) => {
    console.log("Asslam-u-alaikum " + name)
}

// module.exports use krny sy hm is rakhy program ko PC k kisi or program ya project me use kr skty he ↓ 
// 2 function ya program 1 sath export krny k liya {} ka use kre ↓ 

// module.exports = slam;
module.exports = {slam, slamName};


// second page me is program ko access krny k liya is syntax ko likhe (Check [_44_Modules.js] page) ↓

// const slam = require("./_44 Modules")
// slam()