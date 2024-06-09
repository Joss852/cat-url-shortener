export default function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={`text-sm mb-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${props.className}`}
    />
  )
}