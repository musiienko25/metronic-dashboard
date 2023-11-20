import { FC } from "react";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import {
  TablesWidget10,
  CardsWidget17,
} from "../../../_metronic/partials/widgets";
import "./dashboardWrapper.scss";

const DashboardPage: FC = () => (
  <>
    <div className="row g-5 g-xl-10 ">
      <div className="wrapper">
        <CardsWidget17 className="h-md-50 mb-5 mb-xl-10" />
      </div>

      <div className="wrapper">
        <CardsWidget17 className="h-md-50 mb-5 mb-xl-10" />
      </div>
      <div className="wrapper">
        <CardsWidget17 className="h-md-50 mb-5 mb-xl-10" />
      </div>

      <div className="wrapper">
        <CardsWidget17 className="h-md-50 mb-5 mb-xl-10" />
      </div>
    </div>
    <div>
      <div>
        <TablesWidget10 className="card-xxl-stretch mb-5 mb-xl-8" />
      </div>
    </div>
    {/* end::Row */}

    {/* end::Row */}
  </>
);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
