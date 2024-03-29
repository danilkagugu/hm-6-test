import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ user, onDelete }) => {
  return (
    <ul className={css.listEl}>
      {user.map((item) => (
        <li className={css.itemList} key={item.id}>
          <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
