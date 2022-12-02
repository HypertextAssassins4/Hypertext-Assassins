function addEntry() {
    var entryMonth = prompt("What month is it?")
    var entryDay = prompt("What day of the month is it?")
    var entryYear = prompt("What year is it?")
    var entryCompleteDate = entryMonth+" "+entryDay+", "+entryYear
    var entry = prompt("What would you like to put in the diary today?")
    document.getElementById("entries").innerHTML= entryCompleteDate+"\n"+entry;
}
