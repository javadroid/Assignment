const DateDisplay = () => {
  const CurrentDate = new Date();
  const Day = CurrentDate.toLocaleDateString("en-US", { weekday: "long" });
  const Month = CurrentDate.toLocaleDateString("en-US", { month: "long" });
  const Year = CurrentDate.toLocaleDateString("en-US", { year: "numeric" });
  return (
    <div className="sm:flex sm:flex-row md:flex font-pop text-gray-500 text-sm mr-3">
      {Day} {Month}, {Year}
    </div>
  );
};

export default DateDisplay;
