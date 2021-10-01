import React, { Fragment } from "react";

export const Foods = ({ match }) => {
  return (
    <Fragment>
      Food Index
      <p>Restaunrat_id: {match.params.restaurantsId}</p>
    </Fragment>
  )
}
