import { render, screen } from "@testing-library/react";
import Portfolio from "@/app/portfolio/page";

it("page Portfolio renders succesfully", () => {
  render(<Portfolio />);

  // ARRAGNE

  const myElement = screen.getByText(/gallery/i); // ACTION

  expect(myElement).toBeInTheDocument(); // ASSERT
});
