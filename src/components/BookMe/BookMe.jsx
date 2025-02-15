import React from 'react'
import './BookMe.css'

const BookMe = () => {
  return (
    <>
        <div className="booking-container">
          <iframe
            src="https://hellotosinfaith.mainstackbookings.com"
            title="Mainstack Booking"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>
    </>
  )
}

export default BookMe
