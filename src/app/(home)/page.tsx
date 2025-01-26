export default function HomePage() {
  return (
    <div className="flex grow flex-col">
      <h1 className="text-cream">hiii</h1>
      <div className="mt-4 flex flex-col space-y-2 text-cream">
        <p>
          hello team, i am very sorry but i could not anything meaningful for
          the backend. the only thing that sort of works is the frontend and
          login which took way too much time
        </p>
        <p>
          you can sign in with an email and there is automatic redirect to the
          appropriate pages
        </p>
        <p>
          under profile, there is signout button and a button to set up your
          profile that only shows up if you are not in the database. it takes
          you to /setup but that currently just has a bunch of dummy options
        </p>
        <p>glhf with the devpost :P</p>
      </div>
    </div>
  );
}
