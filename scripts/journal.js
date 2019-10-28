/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry1 = {
        "Date of Entry": "10/10/2019",
        "Concepts Covered": "JS Objects",
        "Journal Entry": "Today, we learned about looping through JS objects using a 'for in' loop. When you loop through an object, it will output the key and the value.",
        "Mood for the Day": "Happy"
    }
    
    const journalEntry2 = {
        "Date of Entry": "10/28/2019",
        "Concepts Covered": "ES6 Modules",
        "Journal Entry": "Today, we learned about using ES6 Modules to cut down on the amount of script tags being linked in the index.html.",
        "Mood for the Day": "Happy"
    }

    const journalEntry3 = {
        "Date of Entry": "10/28/2019",
        "Concepts Covered": "Factory Functions",
        "Journal Entry": "Today, we learned that factory functions are functions that return an object.",
        "Mood for the Day": "Happy"
    }



const journalEntryArray = []

journalEntryArray.push(journalEntry1, journalEntry2, journalEntry3)

console.log(journalEntryArray)