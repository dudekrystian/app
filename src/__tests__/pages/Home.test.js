import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("page HOME renders succesfully", () => {
  render(<Home />);

  // ARRAGNE

  const myElement = screen.getByText(
    "Better design for your digital products."
  ); // ACTION

  expect(myElement).toBeInTheDocument(); // ASSERT
});

// it("should have content text", () => {
//   render(<Home />);

//   // ARRAGNE

//   const myElement = screen.getByText(
//     "Turning your Idea into Reality. We bring together the teams from the global tech industry."
//   ); // ACTION

//   expect(myElement).toBeInTheDocument(); // ASSERT
// });
