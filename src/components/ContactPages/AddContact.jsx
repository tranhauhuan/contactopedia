import React from "react";
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }
  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });
    if (response.status == "success") {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };
  render() {
    return (
      <div className=" w-full h-full border-2 border-slate-600 p-1">
        <div className="ml-4 text-white">Add a new Contact</div>

        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className="flex h-14 gap-2 justify-between p-2">
            <input
              className="basis-1/3"
              type="text"
              placeholder="Name..."
              name="contactName"
            />

            <input
              className="basis-1/3"
              type="text"
              placeholder="Email..."
              name="contactEmail"
            />

            <input
              className="basis-1/3"
              type="text"
              placeholder="Phone..."
              name="contactPhone"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            {this.state.errorMessage === undefined ? (
              <div></div>
            ) : (
              <div className="text-red-500">{this.state.errorMessage}</div>
            )}

            {this.state.successMessage === undefined ? (
              <div></div>
            ) : (
              <div className="text-green-500">{this.state.successMessage}</div>
            )}
            <button
              type="submit"
              className="w-[40%] mx-auto p-1 bg-blue-600 text-center"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
