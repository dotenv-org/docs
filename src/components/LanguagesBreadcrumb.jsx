export function LanguagesBreadcrumb(props) {
  return (
    <div className="mb-1">
      <h5><a href='/docs#languages'>Languages</a> {props.language ? <span>› <a href={props.url}>{props.language}</a></span> : <span></span>}</h5>
    </div>
  )
}
