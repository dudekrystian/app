import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

it("page ABOUT renders succesfully", () => {
  render(<About />);

  // ARRAGNE

  const myElement = screen.getByText(/Mobile/i); // ACTION

  expect(myElement).toBeInTheDocument(); // ASSERT
});
