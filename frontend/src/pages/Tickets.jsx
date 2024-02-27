import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function Tickets() {
  const { tickets } = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (!tickets) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton />
      <h1>Tickets</h1>
    </>
  );
}

export default Tickets;
