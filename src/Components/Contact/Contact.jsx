import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
      <div className={css.contactInfo}>
        <div className={css.name}>
          <IoPersonSharp className={css.iconPerson} />
          <p>{name}</p>
        </div>
        <div className={css.number}>
          <FaPhoneAlt className={css.iconPhone} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btnDelete}
        type="sumbit"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
