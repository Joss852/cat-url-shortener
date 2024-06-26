interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  reference: React.RefObject<HTMLInputElement>
}

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      ref={props.reference}
      className={`class="flex h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`}
    />
  )
}
