
type PersonListProps={
   names: {
        first:string,
        last:string
    }[]
}

// const PersonList:React.FC<PersonListProps> = (props:PersonListProps) => {

const PersonList= (props:PersonListProps) => {
  return (
    <>
    {props.names.map((name)=> <h3>{name.first} {name.last}</h3>)}
    </>
  )
}

export default PersonList