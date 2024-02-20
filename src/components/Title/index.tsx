type Props = {
  children: string
}
export default function Title(props: Props) {
  return (
    <>
      <span>{props.children}</span>
    </>
  )
}
