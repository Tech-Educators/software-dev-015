export default function Hedro({children}) {
    return (
        <div className={`grid gird-cols-3 grid-rows-2 m-8 bg-slate-300`}>
            {children}
        </div>
    )
}