import { root } from "@lynx-js/react";
import "./index.scss";

const RelativeBottomOf = () => {
  const containerStyle = {
    display: "relative" as const,
  };

  const firstViewStyle = {
    display: "linear" as const,
    relativeId: "1",
    relativeCenter: "vertical" as const,
    backgroundColor: "lightgreen",
    alignItems: "center" as const,
    width: "40%",
  };

  const secondViewStyle = {
    display: "linear" as const,
    relativeBottomOf: "1",
    relativeAlignRight: "parent",
    backgroundColor: "lightblue",
    alignItems: "center" as const,
    width: "40%",
  };

  const thirdViewStyle = {
    relativeBottomOf: "1" as const,
    backgroundColor: "pink",
  };

  const textStyle = {
    fontSize: "35rpx" as const,
    fontWeight: "600" as const,
    textAlign: "center" as const,
  };

  return (
    <view className="container" style={containerStyle}>
      <view style={firstViewStyle}>
        <text style={textStyle}>relative-id: 1;</text>
        <text style={textStyle}>relative-center: vertical</text>
      </view>
      <view style={secondViewStyle}>
        <text style={textStyle}>relative-bottom-of: 1;</text>
        <text style={textStyle}>relative-align-right: parent</text>
      </view>
      <view style={thirdViewStyle}>
        <text style={textStyle}>relative-bottom-of: 1</text>
      </view>
    </view>
  );
};

root.render(<RelativeBottomOf />);
