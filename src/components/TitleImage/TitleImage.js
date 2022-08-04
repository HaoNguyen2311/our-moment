import "./TitleImage.scss";
import avatarMain from "../../access/images/ourImage.jpg";

const TitleImage = () => {
  return (
    <div className="title-and-image">
      <h1>
        When a love is true, there is no ending. I hope we get to celebrate for
        many years to come. Happy anniversary!
      </h1>
      <img src={avatarMain} alt="avatar" />
    </div>
  );
};

export default TitleImage;
