import React from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email,profation,id } = contact;
  return (
    <tr>
      <td>
        <div className="custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="-input"
          />
          <label className="label"></label>
        </div>
      </td>
      <td>
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{profation}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(id))}
           >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
