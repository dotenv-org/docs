export function Analytics() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <script async src="https://dotenv-umami.pikapod.net/script.js" data-website-id="7e9b3078-4985-4aa6-b36c-009841dc0b98" type="033dd5259caffcf040b78520-text/javascript"></script>
    )
  } else {
    return (
      <>
      </>
    )
  }
}
