import styles from "./cooltext.module.css"
import lameStyles from "./lametext.module.css"

export default function CoolText({children}) {
    console.log(styles)
    console.log(lameStyles)
    return (
        <div>
            <span className={styles.coolText}>{children}</span>
            <p className={lameStyles.coolText}>Hello</p>
        </div>
    )
}
