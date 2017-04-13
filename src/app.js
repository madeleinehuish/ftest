import React from "react";
import ReactDOM from "react-dom";

const carBrands = [
  "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Dodge", "Ferrari",
  "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Mazda", "Mercedez-Benz",
  "Mitsubishi", "Nissan", "Peugeot", "Porsche", "SAAB", "Subaru", "Suzuki", "Toyota",
  "Volkswagen", "Volvo"
];

/**
 * EXERCISE
 *
 * Create a Typeahead Input
 * ------------------------
 *
 * General guidelines: Use default browser styles. Focus on functionality.
 *
 * Requirements:
 *   1. As the user types in the input, a list of options should appear below
 *      it. The list should contain items from the `list` prop that *start* with
 *      the user entered value (case insensitive).
 *   2. Every new character typed should filter the list.
 *   3. List should only appear when input is not empty. Whitespace only is
 *      considered empty.
 *   4. Clicking on a list item should populate the input with the selected
 *      value and hide the list.
 */

class Typeahead extends React.Component {
}

ReactDOM.render(
  <Typeahead list={carBrands} />,
  document.getElementById("root")
);
