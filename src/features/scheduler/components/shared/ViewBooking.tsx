import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the type for booking props
interface ViewBookingProps {
  booking: {
    fullname: string;
    contactNo: string;
    members: string;
    time: string;
    date: string;
    table: string;
    reference: string;
    advance: string;
    remarks?: string;
    status: string;
  };
}

const ViewBooking = ({ booking }: ViewBookingProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <p className="text-sm px-2 cursor-pointer mb-1.5">View Booking Details</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-6 rounded-lg shadow-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Booking Details
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Here are the details of your booking. Please review them carefully.
          </DialogDescription>
        </DialogHeader>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-200 pt-4">
          <div>
            <strong className="block text-gray-700">Name</strong>
            <p className="text-gray-900">{booking.fullname}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Contact Number</strong>
            <p className="text-gray-900">{booking.contactNo}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Number of Members</strong>
            <p className="text-gray-900">{booking.members}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Time</strong>
            <p className="text-gray-900">{booking.time}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Date</strong>
            <p className="text-gray-900">{booking.date}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Table</strong>
            <p className="text-gray-900">{booking.table}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Reference</strong>
            <p className="text-gray-900">{booking.reference}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Advance Payment</strong>
            <p className="text-gray-900">${booking.advance}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Remarks</strong>
            <p className="text-gray-900">{booking.remarks || "N/A"}</p>
          </div>
          <div>
            <strong className="block text-gray-700">Status</strong>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                booking.status === "confirmed"
                  ? "bg-green-100 text-green-800"
                  : booking.status === "processing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {booking.status}
            </span>
          </div>
        </section>
        <DialogClose asChild>
          <Button
            variant="outline"
            className="mt-6 w-full text-gray-800 border-gray-300 hover:bg-gray-100"
          >
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ViewBooking;
