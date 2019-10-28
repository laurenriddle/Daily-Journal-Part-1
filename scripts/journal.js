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



const journalEntriesArray = [
    {
    "Date of Entry": "10/10/2019",
    "Concepts Covered": "JS Objects",
    "Journal Entry": "Today, we learned about looping through JS objects using a 'for in' loop. When you loop through an object, it will output the key and the value.",
    "Mood for the Day": "Happy"
},
{
    "Date of Entry": "10/28/2019",
    "Concepts Covered": "ES6 Modules",
    "Journal Entry": "Today, we learned about using ES6 Modules to cut down on the amount of script tags being linked in the index.html.",
    "Mood for the Day": "Happy"
},
{
    "Date of Entry": "10/28/2019",
    "Concepts Covered": "Factory Functions",
    "Journal Entry": "Today, we learned that factory functions are functions that return an object.",
    "Mood for the Day": "Happy"
}
]

journalEntryArray.push(journalEntry1, journalEntry2, journalEntry3)

console.log(journalEntryArray)

const journalEntries = [
    {
        concept: "Array methods",
        date: "07/24/2018",
        entry: "We learned about array methods, but only forEach made sense",
        mood: "Ok"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) {
    // Create your own HTML structure for a journal entry
    return `

    `
}



/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {

}

// Invoke the render function
renderJournalEntries(journalEntries)