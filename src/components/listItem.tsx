interface ListItemProps {
  label: string
  value: string | number
}

const ListItem = (props: ListItemProps) => {  
  return (
    <li><span>{props.label}</span>: <p>{props.value}</p></li>
  )
}

export default ListItem