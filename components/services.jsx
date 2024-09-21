/*
Services Component
Tim Conway
301495941
September 21st, 2024
 */

export default function Services() {
  return (
    <>
      <p>Services</p>
      <div>
        <h3>Customer Website</h3>
        <p>
          Allows us to create you a stunning website to help drive traffic to
          you!
        </p>
        <img src="/website.png" width={400} />
      </div>
      <div>
        <h3>Custom App</h3>
        <p>
          Create a custom app to drive engagement from your current users and
          incrase user acquistion dramatically!
        </p>
        <img src="/app.png" width={400} />
      </div>
      <div>
        <h3>Custom Game</h3>
        <p>
          Using modern engines like Unreal, Unity and Godot, we can tailor the
          game to your needs/timline!
        </p>
        <img src="/game.png" width={400} />
      </div>
    </>
  );
}
