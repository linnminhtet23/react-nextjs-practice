import React,{useState, useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

;
  //useeffect code define the condition where the code should run 
  //contains function and array
  useEffect(()=>{
    setIsLoading(true);
    fetch(
      "https://react-getting-started-d5651-default-rtdb.firebaseio.com/meetups.json"
    ).then((response) => {
      return response.json();
    }).then(data=>{
      const meetups =[];
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    })
  },[]);

  if(isLoading){
    return <section>
      <p>Loading...</p>
    </section>
  }
  return (
    <section>
      <h1>AllMeetups</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetups;
