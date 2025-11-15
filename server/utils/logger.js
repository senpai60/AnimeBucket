import winston, { info, level } from "winston";

// 2025-02-14 14:32:10 | info: User logged in {"id":123}

const consoleFormat = winston.format.printf(({level,message,timestamps,...meta})=>{
    return `${timestamps} | ${level}: ${message} ${
        Object.keys.name
    }` 

})

// logger (later)!
