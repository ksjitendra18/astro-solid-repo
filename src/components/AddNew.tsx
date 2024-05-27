import { Show, createSignal } from "solid-js";

const AddNew = () => {
  const [add, setAdd] = createSignal(false);
  return (
    <>
      <div class="flex items-center gap-5">
        <h2 class="text-2xl font-bold">Todos</h2>
        <button
          onClick={() => {
            console.log("clicked");
            setAdd((prev) => !prev);
          }}
        >
          Add New
        </button>
      </div>

      <Show when={add()}>
        <input
          type="text"
          placeholder="new todo"
          class="border-2 border-slate-600 px-3 py-2 rounded-md"
        />
        <button>Add</button>
      </Show>
    </>
  );
};

export default AddNew;
