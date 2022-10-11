const sbeTranscripts = require('./transcripts');

class GenerateHomestarText{
    constructor() {
        this.sentences = sbeTranscripts;
    }

    getRandomSentence(){
        let randomInt = Math.floor(Math.random() *  this.sentences.length) + 1;
        let randomSentence = this.sentences[randomInt];
        return randomSentence;
    }

    getOneParagraph(){
        let paragraph = "";
        let minimumCharacterLength = 300;
        let firstSentence = true;
        while (paragraph.length < minimumCharacterLength){
            if(firstSentence){
                paragraph = paragraph.concat(this.getRandomSentence());
                firstSentence = false;
            } else {
                paragraph = paragraph.concat(" " + this.getRandomSentence());
            }
        }
        return paragraph;
    }

    getMultipleParagraphs(numberOfParagraphs){
        let multipleParagraphs = [];
        while (multipleParagraphs.length < numberOfParagraphs){
            multipleParagraphs.push(`${this.getOneParagraph()}`);
        }
        return multipleParagraphs;
    }
}

const homestarIpsum = new GenerateHomestarText();

module.exports = homestarIpsum;

