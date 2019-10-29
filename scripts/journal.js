/*
    Define the keys and value for a JavaScript object that
    represents a entry about what you learned today
*/
const journalEntry1 = {
    "date": "10/10/2019",
    "concepts": "JS Objects",
    "entry": "Today, we learned about looping through JS objects using a 'for in' loop. When you loop through an object, it will output the key and the value.",
    "mood": "Happy"
}

const journalEntry2 = {
    "date": "10/28/2019",
    "concepts": "ES6 Modules",
    "entry": "Today, we learned about using ES6 Modules to cut down on the amount of script tags being linked in the index.html.",
    "mood": "Happy"
}

const journalEntry3 = {
    "date": "10/28/2019",
    "concepts": "Factory Functions",
    "entry": "Today, we learned that factory functions are functions that return an object.",
    "mood": "Happy"
}



const journalEntries = [

]



const newJournalEntry = () => {
    const date = document.getElementById("journalDate").value
    const subject = document.getElementById("conceptsCovered").value
    const journalEntry = document.getElementById("textarea").value
    const mood = document.getElementById("mood").value
    let entry = {
        "date": date,
        "concepts": subject,
        "entry": `${journalEntry}`,
        "mood": `${mood}`
    }
    journalEntries.push(entry)
    console.log(journalEntries)

}

document.getElementById("submitButton").addEventListener("click", newJournalEntry)


journalEntries.push(journalEntry1, journalEntry2, journalEntry3)



/*
   Purpose: To create, and return, a string template that
   represents a single entry object as HTML

   Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a entry
    return `
    <section>
    <h1>${journalEntries.concepts}</h1>
    <p>${journalEntries.entry}</p>
    <p>${journalEntries.mood}</p>
    <p>${journalEntries.date}</p>
    </section>
    `
}



/*
    Purpose: To render all journal entries to the DOM

   Arguments: entries (array of objects)
*/


const renderJournalEntries = (entries) => {
    const entryLog = document.getElementsByClassName("entryLog").
        for(let i = 0; i < entries.length; i++) {
        entryLog += entries[i]
    }
}

// Invoke the render function
renderJournalEntries(journalEntries)