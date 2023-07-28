export function Video(props) {
  return (
    <div className="rounded-md p-7 border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-100">
      <video controls poster={props.poster} className="w-full aspect-video rounded-md m-0 shadow-lg">
        <source src={props.mp4} type="video/mp4" />
        <source src={props.webm} type="video/webm" />
        Download the <a href={props.mp4}>mp4</a> <a href={props.webm}>webm</a> video.
      </video>
    </div>
  )
}
