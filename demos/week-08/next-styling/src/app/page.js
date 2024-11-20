import CoolText from "@/components/CoolText";

export default function Page() {
  return (
    <div className="shadow-2xl bg-amber-300 flex h-1/2 m-11 p-5 w-screen">
      <h2>All about cats</h2>
        <CoolText>
          <h3>Wow look at this! So stylish</h3>
        </CoolText>
      <p className="text-5xl text-sky-400">This is my cool page!</p>
    </div>
  )
}