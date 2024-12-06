import AllEventsTypes from "@/components/Events";
import Greetings from "@/components/Greetings";

export default function Home() {
  return (
    <div>
      <Greetings age={25} name='Sam' />
      <AllEventsTypes />
    </div>
  )
}
