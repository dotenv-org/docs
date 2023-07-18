export function Video(props) {
  return (
    <video controls poster={props.poster} className="w-full aspect-video">
      <source src={props.mp4} type="video/mp4" />
      <source src={props.webm} type="video/webm" />
      Download the <a href={props.mp4}>mp4</a> <a href={props.webm}>webm</a> video.
    </video>
  )
}
