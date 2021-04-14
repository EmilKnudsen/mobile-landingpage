import mockedAxios from "axios";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import Slider from "../components/Slider";

afterEach(cleanup);
jest.mock("axios");

describe("Slider", function() {
  var response = {
    data: [
          {
            id: 1,
            image: "./images/user1.png",
            name: "Sarah Udoma",
            twitter: "./images/twitter.png",
            content: "I use this app every day and it's a great way to keep up to date with what's going on in football."
          }
        ]
      };

  it("shows a users name", async function() {
    mockedAxios.get.mockResolvedValue(response);

    await act( async() =>render(<Slider />)) 

      var text = screen.getByText(/sarah udoma/i);
      expect(text).toBeInTheDocument();
  });

  it("shows a users comment", async function() {
    mockedAxios.get.mockResolvedValue(response);

    await act( async() =>render(<Slider />)) 

      var text = screen.getByText(/I use this app every day and it's a great way to keep up to date with what's going on in football./i);
      expect(text).toBeInTheDocument();
  });

  it("shows a users image", async function() {
    mockedAxios.get.mockResolvedValue(response);

    await act( async() =>render(<Slider />)) 

      expect(screen.queryByRole(<img/>)&& screen.getByRole(src).toBe("./images/user1.png"))
  });
});
