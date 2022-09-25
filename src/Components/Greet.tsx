
type GreetProps={
    name:string,
    messageCount?:number,
    // age?:number,

    isLoggedIn:boolean
}

const Greet = (props:GreetProps) => {
  const {messageCount = 2} = props
  return (
    <>
    {
      props.isLoggedIn? `Welcome to ${props.name} and Your unread message is ${messageCount}`: `Welcome guest`
    }
    
    </>
  )
}

export default Greet