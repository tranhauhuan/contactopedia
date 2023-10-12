import Contact from "./Contact";

export default function GeneralContact(props) {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact
          contact={contact}
          key={index}
          favouriteClick={props.favouriteClick}
        ></Contact>
      ))}
    </div>
  );
}
