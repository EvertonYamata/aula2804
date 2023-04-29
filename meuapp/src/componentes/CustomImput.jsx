import styles from './CustomImputFatec.module.css'

function CustomImput(props){
    const{type, value, placeholder} = props
    return(
        <input className={styles.customImput} type={type} value={value} placeholder={placeholder} />
    )
}

export default CustomImput