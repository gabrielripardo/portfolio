import { TextInput } from "../Input/TextInput";

export default function TextArea({ placeholder, children, name, cols, rows }) {
    return (
        <TextInput.Root>
            <TextInput.Icon>
                {children}
            </TextInput.Icon>
            <TextInput.TextArea placeholder={placeholder} name={name} cols={cols} rows={rows} />             
        </TextInput.Root>
    )
}