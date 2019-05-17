import React from "react";
import { shallow } from "enzyme";

import App from "../components/App";
import Header from "../components/Header/Header";

let instance;

beforeEach(() => {
  instance = shallow(<App />);
});

it("should render App Component", () => {
  expect(instance.find(Header).length).toEqual(1);
});
