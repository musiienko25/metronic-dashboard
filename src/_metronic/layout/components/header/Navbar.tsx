import clsx from "clsx";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";
import { HeaderUserMenu, Search } from "../../../partials";
import { useLayout } from "../../core";
import "./navbar.scss";

const itemClass = "ms-1 ms-md-4";
const btnClass =
  "btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px";
const userAvatarClass = "symbol-35px";
const btnIconClass = "fs-2";

const Navbar = () => {
  const { config } = useLayout();
  return (
    <div className="app-navbar flex-shrink-0">
      <div className={clsx("app-navbar-item align-items-stretch", itemClass)}>
        <Search />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          className={clsx("cursor-pointer symbol", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <img
            style={{ borderRadius: "50%" }}
            className="navbar_icon"
            src={toAbsoluteUrl("/media/avatars/300-3.jpg")}
            alt=""
          />
        </div>
        <HeaderUserMenu />
      </div>
    </div>
  );
};

export { Navbar };
