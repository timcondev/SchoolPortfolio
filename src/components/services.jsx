/*
Services Component
Tim Conway
301495941
September 21st, 2024
 */

export default function Services() {
  return (
    <div className="content">
      <div>
        <h2>Custom Website</h2>
        <h4>
          Allows us to create you a stunning website to help drive traffic to
          you!
        </h4>
        <img src="/website.png" width={400} />
      </div>
      <div>
        <h2>Custom App</h2>
        <h4>
          Create a custom app to drive engagement from your current users and
          incrase user acquistion dramatically!
        </h4>
        <img src="/app.png" width={400} />
      </div>
      <div>
        <h2>Custom Game</h2>
        <h4>
          Using modern engines like Unreal, Unity and Godot, we can tailor the
          game to your needs/timline!
        </h4>
        <img src="/game.png" width={400} />
      </div>
    </div>
  );
}
