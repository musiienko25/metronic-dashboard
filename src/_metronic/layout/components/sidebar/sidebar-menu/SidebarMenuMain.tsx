import { useIntl } from "react-intl";
import "./sidebarmenu.scss";
import home from "../../../../../app/assets/home-3.svg";
import files from "../../../../../app/assets/add-files.svg";
import network from "../../../../../app/assets/it-1.svg";
import question from "../../../../../app/assets/questionnaire-tablet.svg";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <div className="sidebarmenu">
      <div>
        {" "}
        <div className="sidebarmenu_item">
          <div className="sidebarmenu_item_icon">
            <img src={home} alt="home" />
          </div>
          <div className="sidebarmenu_item_text">Menu</div>
        </div>
        <div className="sidebarmenu_item">
          <div className="sidebarmenu_item_icon">
            <img src={files} alt="home" />
          </div>
          <div className="sidebarmenu_item_text">Submit violations</div>
        </div>
        <div className="sidebarmenu_item">
          <div className="sidebarmenu_item_icon">
            <img src={network} alt="home" />
          </div>
          <div className="sidebarmenu_item_text">Whitelist</div>
        </div>
        <div className="sidebarmenu_item">
          <div className="sidebarmenu_item_icon">
            <img src={question} alt="home" />
          </div>
          <div className="sidebarmenu_item_text">Billing</div>
        </div>
      </div>
    </div>
  );
};

export { SidebarMenuMain };
