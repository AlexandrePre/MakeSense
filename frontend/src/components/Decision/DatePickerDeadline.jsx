import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import NotificationContext from "../../Contexts/NotificationContexts";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerDeadline() {
  const [startDate, setStartDate] = useState(new Date());
  const { setInput, input } = useContext(NotificationContext);
  const onChange = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };
  return (
    <div>
      <DatePicker
        selected={startDate}
        onSelect={(date) => setStartDate(date)}
        onChange={(date) =>
          onChange({
            name: "deadline",
            value: date.toLocaleDateString("fr-CA"),
          })
        }
        dateFormat="MMMM d, yyyy"
        filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
        name="deadline"
        value={input.deadline}
        placeholderText="Click to select a date"
        inline
      />
    </div>
  );
}
export default DatePickerDeadline;
