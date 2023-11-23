import { FC } from "react";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../..";
import clsx from "clsx";

type Props = {
  className: string;
};

const TablesWidget10: FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="m-0">
        <div
          className="mb-10"
          style={{
            display: "flex",
            justifyContent: "right",
            marginRight: 40,
            marginTop: 20,
          }}
        >
          <div style={{ maxWidth: 150 }}>
            <select
              className="form-select form-select-solid"
              data-kt-select2="true"
              data-placeholder="Select option"
              data-allow-clear="true"
              defaultValue={"1"}
            >
              <option></option>
              <option value="1">Status</option>
              <option value="2">Pending</option>
              <option value="3">In Process</option>
              <option value="4">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* begin::Header */}

      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}

          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold text-muted">
                <th className="w-25px">
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-9-check"
                    />
                  </div>
                </th>
                <th className="min-w-150px">Authors</th>
                <th className="min-w-140px">Company</th>
                <th className="min-w-120px">Progress</th>
                <th className="min-w-100px text-end">Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-9-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5"></div>
                    <div className="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                      >
                        122323
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                  >
                    march
                  </a>
                </td>
                <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-semibold">
                        google.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="switch" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="pencil" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon iconName="trash" className="fs-3" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-9-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5"></div>
                    <div className="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                      >
                        122323
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                  >
                    march
                  </a>
                </td>
                <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-semibold">
                        google.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="switch" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="pencil" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon iconName="trash" className="fs-3" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-9-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5"></div>
                    <div className="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                      >
                        122323
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                  >
                    march
                  </a>
                </td>
                <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-semibold">
                        google.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="switch" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="pencil" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon iconName="trash" className="fs-3" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-9-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5"></div>
                    <div className="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                      >
                        122323
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                  >
                    march
                  </a>
                </td>
                <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-semibold">
                        google.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="switch" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="pencil" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon iconName="trash" className="fs-3" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input widget-9-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-45px me-5"></div>
                    <div className="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        className="text-gray-900 fw-bold text-hover-primary fs-6"
                      >
                        122323
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    className="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                  >
                    march
                  </a>
                </td>
                <td className="text-end">
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-semibold">
                        google.com
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-end flex-shrink-0">
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="switch" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon iconName="pencil" className="fs-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon iconName="trash" className="fs-3" />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};

export { TablesWidget10 };
