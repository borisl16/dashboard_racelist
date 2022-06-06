const dataEvent = require('./data_event.json');

let organiserId = Array.from(new Set(dataEvent.map(({
    organiserId
}) => organiserId)));

organiserId.forEach(element => {
    data(dataEvent, element);
});


function data(dataEvent, id) {

    const dataEventId = dataEvent.filter((e) => {
        return e.organiserId === id
    })

//calculation for total profit by organiser Id
    const total = dataEventId.reduce((currentTotal, e) => {
    return e.ticketPrice["value"] + currentTotal
    }, + 0)

//extracting all events + prices
    let eventsDetails = "";
    for(let event of dataEventId) {
        eventsDetails += `${event.eventTitle} [ £${event.ticketPrice.value} ] \n`
    }

    console.log("[Organiser Id]: " + id + '\n')
    console.log("[Events and Prices]: " + '\n' + eventsDetails)
    console.log("[Total]: £" + total + '\n' + '\n')
    console.log("_____________________________________")
};