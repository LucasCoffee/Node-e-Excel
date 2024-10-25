const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){  
    this.Writer = util.promisify(fs.writeFile);
    }

    async Writers(filename, data){
        try {
            return await this.Writer(filename, data);
        }catch(err){
            return console.log("erro foi aqui");
        }
    }

}

module.exports = Writer