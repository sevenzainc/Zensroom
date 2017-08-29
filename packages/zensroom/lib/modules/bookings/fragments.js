/*

Fragments on the Bookings collection

http://docs.vulcanjs.org/fragments.html

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment BookingsItemFragment on Booking {
    __typename
    _id
    createdAt
    userId
    user {
      _id
      displayName
      emailHash
      slug
      pageUrl
    }
    roomId
    room {
      pricePerNight
      name
      photos
      pageUrl
    }
    startAt
    endAt
    startAtFormatted
    endAtFormatted
    numberOfGuests
    paidAt
    status
  }  
`);
