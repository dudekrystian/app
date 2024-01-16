import { render, screen } from "@testing-library/react";
import Contact from "@/app/contact/page";

it("page CONTACT renders succesfully", () => {
  render(<Contact />);

  // ARRAGNE

  const myElement = screen.getByText("Let's Keep in Touch"); // ACTION

  expect(myElement).toBeInTheDocument(); // ASSERT
});
