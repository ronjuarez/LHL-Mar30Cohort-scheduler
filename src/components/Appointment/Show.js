import React from "react";




export default function Show ({
  name, // Added the correct name.
  interviewer,
  onEdit,
  onDelete
}) {
    return(
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        {/* Added the correct prop name */}
        <h2 className="text--regular">{name}</h2> 
        <section className="interviewer">
          <h4 className="text--light">interviewer</h4>
          <h3 className="text--regular">{interviewer.name}</h3>
        </section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <img
            onClick={() => onEdit()}
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
          />
          <img
            onClick={() => onDelete()}
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
          />
        </section>
      </section>
    </main>
    )}