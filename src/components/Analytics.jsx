import Script from 'next/script';

export function Analytics() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <>
        <Script
          src="https://dotenv-umami-fd0ec6de187e.herokuapp.com/script.js"
          data-website-id="681d3274-93f4-459b-b6a3-2f6b2d433009"
          strategy="lazyOnload"
        />
      </>
    )
  } else {
    return (
      <>
      </>
    )
  }
}
