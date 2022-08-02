import { HeartFilled } from "@ant-design/icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-section">
      <h2>Nguyễn Hữu Hảo</h2>
      <HeartFilled className="heart-icon" />
      <h2>Trần Hồ Ánh Nguyệt</h2>
    </div>
  );
};

export default Header;
