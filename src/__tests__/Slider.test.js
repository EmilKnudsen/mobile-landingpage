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

  it("shows a users comment", async function() {
    mockedAxios.get.mockResolvedValue(response);

    act(function() {
      render(<Slider />);
    });

    await(function() {
      var text = screen.getByText(/sarah udoma/i);
      expect(text).toBeInTheDocument();
    });
  });
});
