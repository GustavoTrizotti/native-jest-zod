import { useRootForm } from "@/hooks/useRootForm";
import { renderHook, waitFor } from "@testing-library/react-native";

test("root form verification with valid credentials", async () => {
  const hook = renderHook(() => useRootForm());
  await waitFor(() =>
    expect(
      hook.result.current.onSubmit({
        email: "gustavo@gmail.com",
        name: "gustavo",
      })
    ).toBe(true)
  );
});

test("root form verification with wrong credentials", async () => {
  const hook = renderHook(() => useRootForm());
  await waitFor(() =>
    expect(
      hook.result.current.onSubmit({
        email: "gustavo",
        name: "gustavo",
      })
    ).toBe(false)
  );
});

test("root form verification with small email", async () => {
  const hook = renderHook(() => useRootForm());
  await waitFor(() =>
    expect(
      hook.result.current.onSubmit({
        email: "",
        name: "gustavo",
      })
    ).toBe(false)
  );
});
