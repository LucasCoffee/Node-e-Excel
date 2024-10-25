const fs = require("fs");
const util = require("util");


class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async read(filepach){
        try{
            return await this.reader(filepach, "utf8");
        }catch(err){
            return undefined;
        }
    }

}

module.exports = Reader;

