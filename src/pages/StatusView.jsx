import React from 'react'

const StatusView = ({tickets}) => {
  return (
    <div>
    // this is subheader
        <div>
        Backlog    + ...
        </div>
        <div>
        Todo    + ...
        </div>
        <div>
        In Progress    + ...
        </div>
        <div>
        Done    + ...
        </div>D
        <div>
        Cancelled   + ...
        </div>

        {tickets.map}
        {/* <TicketCard props /> */}
    </div>
  )
}

export default StatusView