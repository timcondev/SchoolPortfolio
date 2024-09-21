export default function Project() {
  return (
    <>
      <p>My Projects</p>
      <div>
        <h3>Jersey Duel!</h3>
        <p>
          Allows users to upload any two jerseys then have friends vote on their
          favorite! SaaS upgrades using Stripe.
        </p>
        <img src="/jerseyduel.png" width={400} />
      </div>
      <div>
        <h3>Brainiac</h3>
        <p>
          AI Enhanced notes. Create AI assist notes, then have it create a
          thumbnail to help quickly locate it!
        </p>
        <img src="/brainiac.png" width={400} />
      </div>
      <div>
        <h3>Admin Dashboard</h3>
        <p>
          An Admin Dashboard CRUD app that allows you to create, read, update
          and delete both users and products in a dashboard.
        </p>
        <img src="/dashboard.png" width={400} />
      </div>
    </>
  );
}
