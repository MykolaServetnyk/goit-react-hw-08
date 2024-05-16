import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./oprations";

const contactsSlise = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload)
            }).addCase(addContact.rejected, (state) => {
                state.error = true;
            }).addCase(deleteContact.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id)
                state.loading = false;
            }).addCase(deleteContact.rejected, (state) => {
                state.error = true;
            })
});

export const selectFilteredContacts = createSelector(
    state => state.contacts.items,
    state => state.filters.name,
    (contacts, filterName) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterName.toLowerCase())
        );
    }
);

export const contactsReducer = contactsSlise.reducer;
export const getContacts = (state) => state.contacts;
