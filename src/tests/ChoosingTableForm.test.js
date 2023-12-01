import { render,screen,fireEvent } from "@testing-library/react";
import BookingTableForm from '../Components/BookingTableForms/BookingTableForm';
import { act } from "react-dom/test-utils";

const mockAddReservation = jest.fn();

jest.mock('react-redux', () => ({
  connect: () => (component) => component,
}));

describe('BookingTableForm', () => {
  it('renders without crashing', () => {
    render(<BookingTableForm isOpen onClose={() => {}} addReservation={mockAddReservation} />);
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });

  it('submits the form with valid input', async () => {
   render(<BookingTableForm isOpen onClose={() => {}} addReservation={mockAddReservation} />);
    act(() => {
        fireEvent.input(screen.getByTestId('reservationDate'), { target: { value: '12-01-2023' } });
        fireEvent.input(screen.getByTestId('userName'), { target: { value: 'User Name' } });
        fireEvent.input(screen.getByTestId('phoneNumber'), { target: { value: '1234567890' } });
        fireEvent.input(screen.getByTestId('email'), { target: { value: 'user.name@example.com' } });

        fireEvent.click(screen.getByTestId('reservenow'));
    })

    expect(mockAddReservation).toBeCalled();
    expect(mockAddReservation).toHaveBeenCalledWith(expect.objectContaining({
      reservationDate: '12-01-2023',
      userName: 'User Name',
      phoneNumber: 1234567890,
      emailAddress: 'user.name@example.com',
      reservationId: expect.any(Number),
      reservationTime: expect.any(String),
      chairsNumber:expect.any(Number),
      tableNumber:expect.any(Number)
    }));
    jest.clearAllMocks();
  });

});