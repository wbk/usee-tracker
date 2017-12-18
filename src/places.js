// (year, month, day, hours, minutes, seconds, milliseconds);

// NOTE: The argument month is 0-based. This means that January = 0 and December = 11.

const PLACES = [{
    title: 'McCain',
    content: `
    <h1>McCain's Place</h1>
    <p>Come visit us at McCains and blah blah blah</p>
    `,
    when: [2017, 11, 15, 15, 30, 0], // 12/17/2017 15:30:00 Phoenix time
    lat: 33.5085134,
    lng: -112.0338426,
},
{
    title: 'Flake',
    content: `
    <h1>Flake's Place</h1>
    <p>blah blah blah</p>
    `,
    when: [2017, 11, 18, 11, 30, 0],
    lat: 33.5096555,
    lng: -112.036279
},
{
    title: 'Canal',
    content: `
    <h1>Van Down By The River</h1>
    <p>blah blah blah</p>
    `,
    when: [2017, 11, 19, 5, 30, 0],
    lat: 33.523777,
    lng: -112.027521
},
{
    title: 'Hmm',
    content: `
    <h1>dfseqfS</h1>
    <p>blah blah blah</p>
    `,
    when: [2017, 11, 22, 5, 30, 0],
    lat: 33.513777,
    lng: -112.023521
}]

export default PLACES