// (year, month, day, hours, minutes, seconds, milliseconds);

// NOTE: The argument month is 0-based. This means that January = 0 and December = 11.

const PLACES = [{
    title: 'Rep. Andy Biggs',
    content: `
    <h1>Rep. Andy Biggs Office</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 13, 0, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.371360,
    lng: -111.687043,
},
{
    title: 'Rep. David Schweikert',
    content: `
    <h1>Rep. David Schweikert</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 14, 0, 0],
    lat: 33.583187,
    lng: -111.908231
},
{
    title: 'Rep. Kyrsten Sinema',
    content: `
    <h1>Rep. Kyrsten Sinema</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 14, 40, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.481782,
    lng: -111.987422
},
{
    title: 'Sen. Jeff Flake',
    content: `
    <h1>Sen. Jeff Flake</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 15, 10, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.509901,
    lng: -112.033881
},
{
    title: 'Sen. John McCain',
    content: `
    <h1>Sen. John McCain</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 15, 40, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.508636,
    lng: -112.033757
},
{
    title: 'Rep. Gallego',
    content: `
    <h1>Rep. Gallego</h1>
    <p>Postcard Delivery, Visit, <a href="https://www.facebook.com/USEEASU/" target="_blank">Livestream</a></p>
    `,
    when: [2017, 11, 21, 16, 20, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.452871,
    lng: -112.073534
},
{
    title: 'Civic Park',
    content: `
    <h1>Civic Park</h1>
    <p>Candlelit Affirmation Meetup</p>
    `,
    when: [2017, 11, 21, 16, 45, 0], // 12/15/2017 18:30:0 Phoenix time
    lat: 33.453760,
    lng: -112.074549
}]

export default PLACES