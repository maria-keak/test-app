export function validator() {
  return {
    validator: (_, value) =>
      value && value.trim()
        ? Promise.resolve()
        : Promise.reject("This field can't be empty"),
  };
}
