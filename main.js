// const wordList = require('./words.js'); // Pre EMCMA6
import { wordList } from './words.js';

const wordMap = new Map(Object.entries(wordList));

function isWordInMap(str) {
	if (wordMap.has(str)) {
		return wordMap.get(str);
	} else return str;
}

function hasUpperCase(str) {
	return str.toLowerCase() != str;
}

function whereUpperCase(str) {
	let letterArray = [];
	let capLetterCount = 0;
	let index = 0;
	[...str].forEach(letter => {
		if (letter === letter.toLowerCase()) {
			// letter is lowercase, mark with -1
			letterArray.push(-1);
		} else {
			// letter is uppercase
			letterArray.push(index);
			capLetterCount++;
		}
		index++;
	});
	// if the capLetterCount is equal to word length, ALL letters were capitalized, so mark it with ALL
	if (capLetterCount === str.length) {
		letterArray.push('ALL');
	}
	return letterArray;
}

function respell(str) {
	let strArray = str.split(/(?=[.\s]|\b)/);
	// console.log(strArray);

	// set a marker for words that are capitalized
	const UCwords = strArray.map(word => {
		if (/\b/.test(word)) return hasUpperCase(word);
		else return false;
	});

	// show WHERE upper case letter is... is it first letter, all letters? just some letters?
	let capLetters = [];
	for (let i = 0; i < UCwords.length; i++) {
		if (UCwords[i]) {
			capLetters.push(whereUpperCase(strArray[i]));
		} else {
			capLetters.push([null]);
		}
	}

	// convert all words to lowercase
	const lcWords = strArray.map(word => {
		if (word.length > 1) return word.toLowerCase(); // note that A and I do not get changed to lowercase
		else return word;
	});

	// temporarily remove word endings, es, ed, s ???, ing, ier(hungrier), iest, ied (stupified)
	// Logic: If it has a word ending, AND the word is not found in the wordMap, then take off the ending, and check wordMap again

	// now respell words
	const respellStr = lcWords.map(word => {
		if (word.length > 1) return isWordInMap(word);
		else return word;
	});

	// put endings back on ... except ing needs to become een, ier = eer, iest = eest, ied = iid,

	// recapitalize words that need it

	// rejoin words into string and return
	const newStr = respellStr.join('');
	return newStr;
}

let text = 'This is a test string. It has tricky words like queen, done, city, sight, fox, phonics, blithe, and site. If it works, then it worked. A An ACA';
let newText = respell(text);
console.log(text + '\n' + newText);