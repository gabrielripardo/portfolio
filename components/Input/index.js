import styles from './styles.module.scss'
import { TextInput } from "./TextInput";

export default function Input({ placeholder, children, name, type }) {
    return (
        <TextInput.Root>
            <TextInput.Icon>
                {children}
            </TextInput.Icon>
            <TextInput.Input placeholder={placeholder} name={name} type={type}/>             
        </TextInput.Root>
    )
}