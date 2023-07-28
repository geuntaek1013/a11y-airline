import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [announcement, setAnnouncement] = useState<string>("");

  const increment = () => {
    const newCount = Math.min(count + 1, 3);
    setCount(newCount);
    setAnnouncement(`성인 승객 추가 ${newCount}`);
  };

  const decrement = () => {
    const newCount = Math.max(count - 1, 1);
    setCount(newCount);
    setAnnouncement(`성인 승객 감소 ${newCount}`);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <fieldset>
        <legend>승객 선택</legend>
        <div className="spinButtonLabel">
          <label htmlFor="passengerCount">성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            aria-label="tooltip"
          >
            ?
            {isTooltipVisible && (
              <span id="tooltip" className="tooltip">
                최대 인원수는 3명까지 가능합니다
              </span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className="spinButton"
          aria-label="성인 탑승자 한명 줄이기"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          aria-label="성인 탑승자 숫자 수정"
          readOnly
          className="spinButtonInput"
          value={count}
          id="passengerCount"
          aria-valuemin={1}
          aria-valuemax={3}
          aria-valuenow={count}
          aria-live="polite"
          aria-atomic="true"
          aria-relevant="text"
        />
        <button
          onClick={increment}
          className="spinButton"
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </button>
      </fieldset>
      <div className="hidden" aria-live="assertive">
        {announcement}
      </div>
    </section>
  );
};

export default SpinButton;
