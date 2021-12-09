import Head from 'next/head'

export default function Form() {
  return (
    <>
      <form action="/api/v1/posts" method="post">
        <p>
          First name: <input type="text" name="fname" />
        </p>
        <p>
          Last name: <input type="text" name="lname" />
        </p>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
