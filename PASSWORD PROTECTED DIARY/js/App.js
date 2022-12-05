import EntryView from "./EntryView.js";
import EntryAPI from "./Entryapi.js";

export default class App {
    constructor(root) {
        this.entry = [];
        this.activeEntry = null;
        this.view = new EntryView(root, this._handlers());

        this._refreshEntry();
    }

    _refreshEntry() {
        const entry = EntryAPI.getAllEntries();

        this._setEntry(entry);

        if (entry.length > 0) {
            this._setActiveEntry(entry[0]);
        }
    }

    _setEntry(entry) {
        this.entry = entry;
        this.view.updateEntryList(entry);
        this.view.updateEntryPreviewVisibility(entry.length > 0);
    }

    _setActiveEntry(entry) {
        this.activeEntry = entry;
        this.view.updateActiveEntry(entry);
    }

    _handlers() {
        return {
            onEntrySelect: entryId => {
                const selectedEntry = this.entry.find(entry => entry.id == entryId);
                this._setActiveEntry(selectedEntry);
            },
            onEntryAdd: () => {
                const newEntry = {
                    title: "New Entry",
                    body: "Take Entry..."
                };

                EntryAPI.saveEntry(newEntry);
                this._refreshEntry();
            },
            onEntryEdit: (title, body) => {
                EntryAPI.saveEntry({
                    id: this.activeEntry.id,
                    title,
                    body
                });

                this._refreshEntry();
            },
            onEntryDelete: entryId => {
                EntryAPI.deleteEntry(entryId);
                this._refreshEntry();
            },
        };
    }
}