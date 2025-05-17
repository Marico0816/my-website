function changeColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightgreen"
      ? "white"
      : "lightgreen";
}

const startInput = document.getElementById("start-date");
const endInput = document.getElementById("end-date");

flatpickr(startInput, {
  dateFormat: "Y-m-d",
  locale: "en",
  onChange: function (selectedDates) {
    endPicker.set("minDate", selectedDates[0]);
  }
});

const endPicker = flatpickr(endInput, {
  dateFormat: "Y-m-d",
  locale: "en"
});
