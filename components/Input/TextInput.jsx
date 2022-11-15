import { Slot } from "@radix-ui/react-slot";

function TextInputRoot({ children }) {
  return (
    <div className="flex items-start gap-3 h-100 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export function TextInputInput(props) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export function TextInputTextArea(props) {
  return (
    <textarea 
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}    
    />
  );
}

export function TextInputIcon({ children }) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  TextArea: TextInputTextArea
};
