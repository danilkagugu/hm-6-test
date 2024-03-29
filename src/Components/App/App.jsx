import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import userData from "../DataJson/userData.json";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts-list");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return userData;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts-list", JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  const deleteContact = (delCon) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.id !== delCon);
    });
  };

  const filterContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList user={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
