export default class EntryView {
    constructor(root, { onEntrySelect, onEntryAdd, onEntryEdit, onEntryDelete } = {}) {
        this.root = root;
        this.onEntrySelect = onEntrySelect;
        this.onEntryAdd = onEntryAdd;
        this.onEntryEdit = onEntryEdit;
        this.onEntryDelete = onEntryDelete;
        this.root.innerHTML = `
            <div class="entry__sidebar">
                <button class="add__entry" type="button">Add Entry</button>
                <div class="entry__list"></div>
            </div>
            <div class="entry__preview">
                <input class="entry__title" type="text" placeholder="New Entry...">
                <textarea class="entry__body">Take Entry...</textarea>
            </div>
        `;

        const btnAddEntry = this.root.querySelector(".add__entry");
        const inpTitle = this.root.querySelector(".entry__title");
        const inpBody = this.root.querySelector(".entry__body");

        btnAddEntry.addEventListener("click", () => {
            this.onEntryAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onEntryEdit(updatedTitle, updatedBody);
            });
        });

        this.updateEntryPreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="entry__list-item" data-entry-id="${id}">
                <div class="entry__small-title">${title}</div>
                <div class="entry__small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="entry__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateEntryList(entries) {
        const entryListContainer = this.root.querySelector(".entry__list");

        entryListContainer.innerHTML = "";

        for (const entry of entries) {
            const html = this._createListItemHTML(entry.id, entry.title, entry.body, new Date(entry.updated));

            entryListContainer.insertAdjacentHTML("beforeend", html);
        }

        entryListContainer.querySelectorAll(".entry__list-item").forEach(entryListItem => {
            entryListItem.addEventListener("click", () => {
                this.onEntrySelect(entryListItem.dataset.entryId);
            });

            entryListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this entry?");

                if (doDelete) {
                    this.onEntryDelete(entryListItem.dataset.entryId);
                }
            });
        });
    }

    updateActiveEntry(entry) {
        this.root.querySelector(".entry__title").value = entry.title;
        this.root.querySelector(".entry__body").value = entry.body;

        this.root.querySelectorAll(".entry__list-item").forEach(entryListItem => {
            entryListItem.classList.remove("entry__list-item--selected");
        });

        console.log(entry.id)
        this.root.querySelector(`.entry__list-item[data-entry-id="${entry.id}"]`).classList.add("entry__list-item--selected");
    }

    updateEntryPreviewVisibility(visible) {
        this.root.querySelector(".entry__preview").style.visibility = visible ? "visible" : "hidden";
    }
}