import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddContact from "./AddContact";
import RemoveAllContact from "./RemoveAllContact";
import AddRandomContact from "./AddRandomContact";
import FavouriteContact from "./FavouriteContact";
import GeneralContact from "./GeneralContact";
class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmaster.com",
          isFavourite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmaster.com",
          isFavourite: true,
        },
        {
          id: 3,
          name: "Paul show",
          phone: "999-222-1111",
          email: "paul@dotnetmaster.com",
          isFavourite: true,
        },
      ],
    };
  }
  handleAddContact = (newContact) => {
    if (newContact.name == "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavourite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  toggleFavoriteButton = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavourite: !obj.isFavourite };
          }
          return obj;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <Header></Header>
        <div className="mx-auto w-[60%] my-2" style={{ minHeight: "85vh" }}>
          <div className="flex h-10 gap-2  justify-center text-white">
            <div className="basis-1/2 bg-green-600 py-1">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="basis-1/2 bg-red-800 py-1">
              <RemoveAllContact></RemoveAllContact>
            </div>
          </div>

          <div className=" my-6 py-2">
            <AddContact favouriteClick={this.handleAddContact}></AddContact>
          </div>
          <div className=" my-6 py-2 bg-slate-700 px-3 ">
            <div className="text-center text-white text-2xl">Favourites</div>
            <FavouriteContact
              contacts={this.state.contactList.filter(
                (contact) => contact.isFavourite === true
              )}
              favouriteClick={this.toggleFavoriteButton}
            ></FavouriteContact>
          </div>
          <div className="my-6 py-2  bg-slate-700 px-3 ">
            <div className="text-center text-white text-2xl">
              Other contacts
            </div>
            <GeneralContact
              contacts={this.state.contactList.filter(
                (contact) => contact.isFavourite === false
              )}
              favouriteClick={this.toggleFavoriteButton}
            ></GeneralContact>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default ContactIndex;
