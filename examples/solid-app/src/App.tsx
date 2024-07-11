import { Component, createSignal, For } from "solid-js";
import {
  createPetServiceFindPetsByStatus,
  createStoreServicePlaceOrder,
} from "../openapi/queries";
import { Pet } from "../openapi/requests";

export const App: Component = () => {
  const [status, setStatus] = createSignal<Pet["status"]>("available");
  const data = createPetServiceFindPetsByStatus(() => ({
    data: {
      status: status(),
    },
  }));

  const { mutate: orderPet } = createStoreServicePlaceOrder();

  return (
    <>
      <h1>Pet List</h1>
      <ul>
        <For each={data.data} fallback={<>LOADING</>}>
          {(pet) => (
            <li>
              {pet.name}{" "}
              <button
                type="button"
                onClick={() => {
                  orderPet(
                    {
                      requestBody: { petId: 198772, quantity: 10 },
                    },
                    {
                      onSuccess: () => {
                        console.log("success");
                      },
                      onError: (error) => console.error(error),
                    }
                  );
                }}
              >
                Order a pet
              </button>
            </li>
          )}
        </For>
      </ul>
      <select
        onChange={(e) => {
          setStatus(e.target.value as Pet["status"]);
        }}
      >
        <option value={"available"}>available</option>
        <option value={"pending"}>pending</option>
        <option value={"sold"}>sold</option>
      </select>
    </>
  );
};
