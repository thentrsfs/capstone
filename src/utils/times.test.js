import { updateTimes, initializeTimes } from "./times";

describe("updateTimes reducer", () => {
  let mockApi;

  beforeEach(() => {
    mockApi = {
      fetchAPI: jest.fn(() => ["17:00", "18:00"]),
    };
  });

  test("handles UPDATE_TIMES action", () => {
    const reducer = updateTimes(mockApi);
    const state = [];
    const action = { type: "UPDATE_TIMES", date: "2025-09-23" };

    const result = reducer(state, action);

    expect(mockApi.fetchAPI).toHaveBeenCalledWith(new Date("2025-09-23"));
    expect(result).toEqual(["17:00", "18:00"]);
  });

  test("returns same state for unknown action", () => {
    const reducer = updateTimes(mockApi);
    const state = ["17:00", "18:00"];
    const action = { type: "UNKNOWN" };

    const result = reducer(state, action);

    expect(result).toEqual(state);
  });
});

describe("initializeTimes", () => {
  test("calls fetchAPI with today's date", () => {
    const mockApi = {
      fetchAPI: jest.fn(() => [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ]),
    };

    const init = initializeTimes(mockApi);
    const result = init();

    expect(mockApi.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("returns [] if api is null", () => {
    const init = initializeTimes(null);
    expect(init()).toEqual([]);
  });
});
