
type PersonProps={
    name:{
        first:string,
        last:string
    }
}

const Person = (props:PersonProps) => {
   const {name} = props;
  return (
    <>
     <p>Person first name is <b>{name.first}</b></p>
     <p>Person last name is <b>{name.last}</b></p>

    </>
  )
}

export default Person