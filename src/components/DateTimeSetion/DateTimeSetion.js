import moment from "moment";
import "./DateTimeSetion.scss";

const DATE_START = "8/9/2020";

const DateTimeSection = () => {
  const today = moment();
  const startDay = moment(DATE_START);
  const spendDay = today.diff(startDay, "days");
  return (
    <div className="date-time-section">
      <div className="date-start">
        <h2>We spent {spendDay} days together </h2>
      </div>
    </div>
  );
};

export default DateTimeSection;
