export function GuideHeading(props) {
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <h1>{props.h1}</h1>
        </div>
        <div className="flex flex-shrink justify-end gap-2">
          {props.icon}
        </div>
      </div>
      <p className="lead mt-1">{props.lead}</p>
    </>
  )
}
