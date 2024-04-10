// Second method
// ES6 modules

// is method me function k start me "export" likh de ↓ 
export const slam2 = () => {
    console.log("Slam Brother")
}

export const slamName2 = (name) => {
    console.log("Asslam-u-alaikum " + name)
}


const sufyan = () => {
    console.log("Kesy he aap log!")
}

// "default" use krny sy ma sufyan() ko directly second page me use kr skta hu (Without destructoring) ↓ 
export default sufyan;