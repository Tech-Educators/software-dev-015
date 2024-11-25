import PopoverDemo from "@/components/Popover";
import ProgressDemo from "@/components/Progress";
import { WiDayWindy } from "react-icons/wi";


export default function Home() {
  return (
    <div>
      <h2>Radix UI demos</h2>
      <WiDayWindy/>
      <h2>Progress bar</h2>
      <ProgressDemo/>
      <p>Popover button</p>
      <PopoverDemo />
    </div>
  )
}