import { HandleSubmit } from "@/utils/actions";

export default function ServerComponent() {
  return (
    <div className="server">
      <form action={HandleSubmit}>
        <input name="message" />
        <button>Submit</button>
      </form>
    </div>
  );
}
