import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }
  return (
    <>
      <div className='App'>
        <NavBar setFormOpen={handleCreateFormOpen} />
        <Container className='main'>
          <EventDashboard
            formOpen={formOpen}
            setFormOpen={setFormOpen}
            selectEvent={handleSelectEvent}
            selectedEvent={selectedEvent}
          />
        </Container>
      </div>
    </>
  );
}

export default App;
