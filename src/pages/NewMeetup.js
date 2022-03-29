import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetUpdata) {
    fetch(
      "https://react-getting-started-d5651-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetUpdata),
        headers:{
          'Content-Type': 'application/json'
        }
      }
    ).then(()=>{history.replace('/')});
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
