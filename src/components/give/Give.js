import React from "react"
import mpesa from "../../images/assets/img/PAYBILL.jpg"
import Coop from "../../images/assets/img/bankAccount.jpg"

const Give = () => {
  return (
    <div
      className="modal fade"
      id="giveModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-center" id="exampleModalLabel">
              Give
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <GiveLakeview />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-block"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
const GiveLakeview = () => (
  <div className="container">
    <div className="row">
      <div className=" col-md-12 bg-faded p-2 my-2">
        <hr className="divider" />
        <h3 className="text-center text-lg text-uppercase my-0  ">
          Deposit Financial gifts
        </h3>
        <hr className="divider" />
        <h6 className="text-center">
          You are welcome to partner wth us in christ's service by depositing
          your financial gifts in the following church accounts.
        </h6>
      </div>{" "}
      {/*Top row*/}
      <div className="row">
        <div className="col-md-6">
          <h5 className="text-centre">CO-OPERATIVE BANK </h5>
          <hr className="divider" />

          <img
            className="img-fluid mb-1 mb-lg-0"
            src={Coop}
            alt="Bank of Africa"
          />
        </div>
        <div className="col-md-6">
          <h5 className="text-centre">M-PESA PAYBILL </h5>
          <hr className="divider" />
          <img className="img-fluid img-thumbnail" src={mpesa} alt="PAYBILL" />
        </div>
      </div>
      {/*middle row*/}
      <div className="row">
        <div className=" col-md-12 p-2">
          <blockquote>
            <h4>
              Leviticus 27:30{" "}
              <q>
                {" "}
                All the tithe of land, whether of the seed of the land or of the
                fruit of trees, is lord's, it is holy to the Lord{" "}
              </q>
            </h4>
          </blockquote>
        </div>
      </div>
      {/*row*/}
    </div>
  </div>
)

export default Give
