// BookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockFormData = { date: "", time: "", guests: 1, occasion: "Birthday" };

const setup = () =>
  render(
    <BookingForm
      formData={mockFormData}
      setFormData={jest.fn()}
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      formErrors={{}}
      setFormErrors={jest.fn()}
      api={null}
    />
  );

test("date input has correct attributes", () => {
  setup();
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toBeRequired();
});

test("time select has correct attributes", () => {
  setup();
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect.tagName).toBe("SELECT");
  expect(timeSelect).toBeRequired();
});

test("guests input has correct attributes", () => {
  setup();
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10"); // adjust if different in your component
});

test("occasion select has correct attributes", () => {
  setup();
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect.tagName).toBe("SELECT");
});
