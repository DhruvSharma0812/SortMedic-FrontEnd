import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          Aadhar,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAadhar("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Book an Appointment Now</h1>
        <p className="text-center text-xl">Get expert medical consultation today</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Appointment Form</h2>
          <form onSubmit={handleAppointment} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="Aadhar"
                value={Aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <select
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setDoctorFirstName("");
                  setDoctorLastName("");
                }}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
              <select
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                  const [firstName, lastName] = e.target.value.split(" ");
                  setDoctorFirstName(firstName);
                  setDoctorLastName(lastName);
                }}
                className="w-full p-3 border border-gray-300 rounded-md"
                disabled={!department}
              >
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => (
                    <option
                      value={`${doctor.firstName} ${doctor.lastName}`}
                      key={index}
                    >
                      {doctor.firstName} {doctor.lastName}
                    </option>
                  ))}
              </select>
            </div>
            <textarea
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <div className="flex items-center space-x-2">
              <p className="mb-0">Have you visited before?</p>
              <input
                type="checkbox"
                checked={hasVisited}
                onChange={(e) => setHasVisited(e.target.checked)}
                className="w-5 h-5"
              />
            </div>
            <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
