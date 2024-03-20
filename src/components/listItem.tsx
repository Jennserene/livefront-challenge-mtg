import { ReactNode } from "react"

interface ListItemProps {
  label: string
  value: ReactNode
}

const ListItem = (props: ListItemProps) => {  
  return (
    <li><span>{props.label}</span>: <p>{props.value}</p></li>
  )
}

export default ListItem