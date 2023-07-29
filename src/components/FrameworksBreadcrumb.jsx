export function FrameworksBreadcrumb(props) {
  return (
    <div class="mb-1">
      <h5><a href='/docs#frameworks'>Frameworks</a> {props.framework ? <span>› <a href={props.url}>{props.framework}</a></span> : <span></span>}</h5>
    </div>
  )
}
