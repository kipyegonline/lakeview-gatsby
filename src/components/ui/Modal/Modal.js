import React from "react"

const Modal = ({ children, id, f }) => (
  <div
    className="modal fade"
    id="AnyModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            Lakeview Africa Gospel Church
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            id={id}
            onClick={f => f}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
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

export default Modal
