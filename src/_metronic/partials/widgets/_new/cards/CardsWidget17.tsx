/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect, useRef } from "react";
import { KTIcon } from "../../../../helpers";
import { getCSSVariableValue } from "../../../../assets/ts/_utils";
import { useThemeMode } from "../../../layout/theme-mode/ThemeModeProvider";
import "./widget.scss";

type Props = {
  className: string;
  chartSize?: number;
  chartLine?: number;
  chartRotate?: number;
};

const CardsWidget17: FC<Props> = ({
  className,
  chartSize = 70,
  chartLine = 11,
  chartRotate = 145,
}) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  useEffect(() => {
    refreshChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    setTimeout(() => {
      initChart(chartSize, chartLine, chartRotate);
    }, 10);
  };

  return (
    <div className={`card card-flush ${className}`}>
      <div className="card-header cardWidget">
        <div className="card-title d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
              69,700
            </span>
          </div>
          <span className="text-gray-500 pt-1 fw-semibold fs-6">
            Projects Earnings in April
          </span>
        </div>
        <div className="cardWidget_footer"></div>
      </div>
    </div>
  );
};

const initChart = function (
  chartSize: number = 70,
  chartLine: number = 11,
  chartRotate: number = 145
) {
  const el = document.getElementById("kt_card_widget_17_chart");
  if (!el) {
    return;
  }
  el.innerHTML = "";

  const options = {
    size: chartSize,
    lineWidth: chartLine,
    rotate: chartRotate,
    //percent:  el.getAttribute('data-kt-percent') ,
  };

  const canvas = document.createElement("canvas");
  const span = document.createElement("span");

  //@ts-ignore
  if (typeof G_vmlCanvasManager !== "undefined") {
    //@ts-ignore
    G_vmlCanvasManager.initElement(canvas);
  }

  const ctx = canvas.getContext("2d");
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx?.translate(options.size / 2, options.size / 2); // change center
  ctx?.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  //imd = ctx.getImageData(0, 0, 240, 240);
  const radius = (options.size - options.lineWidth) / 2;

  const drawCircle = function (
    color: string,
    lineWidth: number,
    percent: number
  ) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    if (!ctx) {
      return;
    }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = "round"; // butt, round or square
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  // Init 2
  drawCircle("#E4E6EF", options.lineWidth, 100 / 100);
  drawCircle(getCSSVariableValue("--bs-primary"), options.lineWidth, 100 / 150);
  drawCircle(getCSSVariableValue("--bs-success"), options.lineWidth, 100 / 250);
};

export { CardsWidget17 };
