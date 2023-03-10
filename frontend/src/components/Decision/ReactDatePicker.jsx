import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import NotificationContext from "../../Contexts/NotificationContexts";

import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
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
            name: "date_posted",
            value: date.toLocaleDateString("fr-CA"),
          })
        }
        dateFormat="MMMM d, yyyy"
        filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
        name="date_posted"
        value={input.date_posted}
        placeholderText="Click to select a date"
        inline
      />
    </div>
  );
}
export default ReactDatePicker;
