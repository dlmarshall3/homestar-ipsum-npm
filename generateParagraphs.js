const homestarIpsum = require('./index');
const args = process.argv[2];

if(isNaN(args) || !args){
    console.log(`Hey, crap for brains. Try giving me a number next time. You know what those are, right?`);
} else {
    console.log(homestarIpsum.getMultipleParagraphs(args));
}
