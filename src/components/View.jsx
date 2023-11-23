const View = (props) => {
  return (
    <div className="bg-base-200 min-h-screen">
      { props.children }
    </div>
  )
}

export default View;