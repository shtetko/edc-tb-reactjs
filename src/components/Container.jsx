
const Container = (props) => {
  return (
    <div className="container mx-auto p-3">
      {
        props.children
      }
    </div>
  )
}

export default Container;
