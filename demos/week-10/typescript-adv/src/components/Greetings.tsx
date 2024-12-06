


type PropsType = { age: number, name: string} 

export default function Greetings({age, name}: PropsType) {
    return (
        <div>
            <p>
                Hello {name}! You are years {age} old 🚗
            </p>
        </div>  
    )
}


// you can type function params and return values aswell.

function returns5(number: number): 5 {
    return (
        5
    )
}

// returns5(5)