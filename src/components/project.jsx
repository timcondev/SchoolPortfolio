/*
Project Component
Tim Conway
301495941
September 21st, 2024
 */

export default function Project() {
  return (
    <div className="content">
      <div>
        <h1>Jersey Duel!</h1>
        <h4>
          Allows users to upload any two jerseys then have friends vote on their
          favorite! SaaS upgrades using Stripe.
        </h4>
        <a href="https://github.com/timcondev/JerseyDuel">
          <img src="/jerseyduel.png" width={800} />
        </a>
      </div>
      <br />
      <div>
        <h1>Brainiac!</h1>
        <h4>
          AI Enhanced notes. Create AI assist notes, then have it create a
          thumbnail to help quickly locate it!
        </h4>
        <a href="https://github.com/timcondev/brainiac">
          <img src="/brainiac.png" width={800} />
        </a>
      </div>
      <div>
        <h1>Admin Dashboard</h1>
        <h4>
          An Admin Dashboard CRUD app that allows you to create, read, update
          and delete both users and products in a dashboard.
        </h4>
        <a href="https://github.com/timcondev/DashboardNext14">
          <img src="/dashboard.png" width={800} />
        </a>
      </div>
    </div>
  );
}
