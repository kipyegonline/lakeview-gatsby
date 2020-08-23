import React from "react"
import $ from "jquery"
import Modal from "../../ui/Modal/Modal"
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailError: "",
      phoneError: "",
      msgError: "",
      successMsg: "",
      name: "",
      phone: "",
      email: "",
      message: "",
      recipient: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.form = React.createRef()
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    //get the data

    const { name, phone, message, email } = this.state

    //validate
    //name
    if (name.length <= 0) {
      this.setState({ nameError: "Please enter your name.", name: "" })
    } else {
      this.setState({ nameError: "" })
    }
    //email
    if (email.length < 5 || !email.includes("@")) {
      this.setState({
        emailError: "Please enter your email address.",
        email: "",
      })
    } else {
      this.setState({ emailError: "" })
    }
    //phone
    if (phone.length < 9) {
      this.setState({
        phoneError: "Please enter your phone number.",
        phone: "",
      })
    } else if (Number.isNaN(Number(phone)) == true) {
      this.setState({
        phoneError: "Please enter your phone number without alphabet letters.",
        phone: "",
      })
    } else {
      this.setState({ phoneError: "" })
    }
    //message
    if (message.length <= 5) {
      this.setState({ msgError: "Please enter your message.", message: "" })
    } else {
      this.setState({ msgError: "" })
    }
    setTimeout(
      () =>
        this.setState({
          emailError: "",
          phoneError: "",
          msgError: "",
          nameError: "",
        }),
      5000
    )

    if (
      name.trim().length > 0 &&
      phone.trim().length > 8 &&
      email.trim().length > 0 &&
      message.trim().length >= 5
    ) {
      $("#sendMessageButton").attr("disabled", true)
      const data = {
        name: this.state.name,
        phone: this.state.phone,
        message: this.state.message,
        email: this.state.email,
        recipient: $("#recipient").val(),
        rts: this.props.tracker,
      }
      console.log(data)
      $.ajax({
        url: "./mail/contact_me.php?contact_form=true",
        data,
        type: "POST",
      })
        .then(res => this.setState({ successMsg: res }))
        .catch(err => this.setState({ successMsg: err }))

      //clear state and form inputs
      setTimeout(() => {
        $("#sendMessageButton").attr("disabled", false)

        this.setState({
          successMsg: "",
          name: "",
          phone: "",
          email: "",
          message: "",
          recipient: "",
        })

        document.getElementById("contactForm").reset()
      }, 5000)
    }
  }
  handleClose(e) {
    console.log(e)
  }

  render() {
    const { handleSubmit, handleChange } = this
    const {
      name,
      phone,
      email,
      message,
      msgError,
      nameError,
      successMsg,
      phoneError,
      emailError,
    } = this.state

    return (
      <Modal f={this.handleClose} onClick={this.handleClose}>
        <ContactForm
          nameError={nameError}
          phoneError={phoneError}
          emailError={emailError}
          msgError={msgError}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          successMsg={successMsg}
          mailtrack={this.props.tracker}
        />
      </Modal>
    )
  }
}
export default Form

const ContactForm = ({
  mailtrack,
  handleSubmit,
  nameError,
  emailError,
  phoneError,
  msgError,
  successMsg,
  handleChange,
  disabled,
}) => {
  let res

  return (
    <div className="col-md-8 p-2 mx-auto card">
      <h6 className="text-center text-lg text-uppercase my-0"> Direct Email</h6>

      <form
        id="contactForm"
        name="sentMessage"
        onSubmit={e => handleSubmit(e)}
        noValidate
      >
        <div className="form-group ">
          <label className="text-heading">Recipient</label>
          <input
            type="text"
            ref={input => (res = input)}
            id="recipient"
            readOnly={true}
            className="form-control"
            value={mailtrack}
          />
        </div>

        <div className="form-group ">
          <label className="text-heading">Name</label>:
          <span className=" text-danger"> {nameError}</span>
          <input
            type="text"
            id="name"
            required
            onChange={e => handleChange(e)}
            className="form-control"
            placeholder="Enter your name."
          />
        </div>
        <div className="form-group ">
          <label className="text-heading">Email Address</label>
          <span className="help-block text-danger"> {emailError}</span>
          <input
            type="email"
            id="email"
            required
            onChange={e => handleChange(e)}
            className="form-control"
            placeholder="Enter your email address."
          />
        </div>
        <div className="form-group ">
          <label className="text-heading">Phone Number</label>
          <span className="help-block text-danger"> {phoneError}</span>
          <input
            type="tel"
            id="phone"
            required
            onChange={e => handleChange(e)}
            className="form-control"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group ">
          <label className="text-heading">Message</label>
          <span className="help-block text-danger"> {msgError}</span>
          <textarea
            className="form-control"
            required
            onChange={e => handleChange(e)}
            rows="5"
            id="message"
            placeholder=""
          ></textarea>
        </div>
        <div>
          <p className="text-success">{successMsg} </p>
        </div>
        <div className="form-group">
          <button
            type="submit"
            id="sendMessageButton"
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
