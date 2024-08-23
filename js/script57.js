const events = [
  {
    eventId: 1,
    eventName: 'Tech Conference',
    startDate: '2024-08-01',
    endDate: '2024-08-06',
    attendees: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ],
  },
  {
    eventId: 2,
    eventName: 'Music Festival',
    startDate: '2024-08-05',
    endDate: '2024-08-11',
    attendees: [
      { name: 'Charlie', email: 'charlie@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ],
  },
  {
    eventId: 3,
    eventName: 'Art Expo',
    startDate: '2024-08-10',
    endDate: '2024-08-12',
    attendees: [
      { name: 'David', email: 'david@example.com' },
      { name: 'Eve', email: 'eve@example.com' },
    ],
  },
  {
    eventId: 4,
    eventName: 'Developer Meetup',
    startDate: '2024-08-15',
    endDate: '2024-08-16',
    attendees: [
      { name: 'Frank', email: 'frank@example.com' },
      { name: 'Alice', email: 'alice@example.com' },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////

function isEventOverlaped(){
  const overlapped = [];
  for(let i = 0; i < events.length - 1; i++){
    if(events[i].endDate > events[i + 1].startDate){
       overlapped.push([events[i].eventName, events[i + 1].eventName])
    }
  }
  return overlapped;
  //console.log(overlapped);
}



const result = isEventOverlaped();
console.log(result);

//////////////////////////////////////////////////////////////////////////////////

const uniqueAttendees = new Set();
events.forEach(event => {
  event.attendees.forEach(attendee => uniqueAttendees.add(attendee.email));
});
const totalUniqueAttendees = uniqueAttendees.size;
console.log(totalUniqueAttendees);

/////////////////////////////////////////////////////////////////////////////////

const attendeeEmail = 'alice@example.com'; // Email to find events for

const eventsByAttendee = events.filter(event => event.attendees.some(attendee => attendee.email == attendeeEmail)).map(e => e.eventName);

console.log(eventsByAttendee);

/////////////////////////////////////////////////////////////////////////////////

const scheduleSummary = events.reduce((acc, event) => {
  const { startDate, endDate, eventName } = event;
  let currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    //console.log(currentDate);
    const dateStr = currentDate.toISOString().split('T')[0];
    console.log(dateStr)
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(eventName);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return acc;
}, {});

console.log(scheduleSummary);


