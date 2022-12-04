export default class EntryAPI {
    static getAllEntries() {
        const entry = JSON.parse(localStorage.getItem("entryapp-entry") || "[]");

        return entry.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveEntry(entryToSave) {
        const entry = EntryAPI.getAllEntries();
        const existing = entry.find(entry => entry.id == entryToSave.id);

        if (existing) {
            existing.title = entryToSave.title;
            existing.body = entryToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            entryToSave.id = Math.floor(Math.random() * 1000000);
            entryToSave.updated = new Date().toISOString();
            entry.push(entryToSave);
        }

        localStorage.setItem("entryapp-entry", JSON.stringify(entry));
    }

    static deleteEntry(id) {
        const entry = EntryAPI.getAllEntries();
        const newEntry = entry.filter(entry => entry.id != id);

        localStorage.setItem("entryapp-entry", JSON.stringify(newEntry));
    }
}