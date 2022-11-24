/*
 * @Author: duanruilong
 * @Date: 2022-07-22 17:25:19
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-10-25 11:34:40
 * @Description:
 */
import React, { useState, useRef } from "react";
import { View, Button } from "@tarojs/components";
import classnames from "classnames";
import "./index.scss";

const typeMap = {
  default: null,
  grey: "y-button-button-grey"
};

/**
 * Button
 * @param className: 样式名
 * @param yType: grey 样式
 */

const YButton = props => {
  const { current } = useRef({ lastClickTime: 0 });
  const {
    disabled,
    className = null,
    children,
    yType = "default",
    ...rest
  } = props;
  const cls = typeMap[yType];
  const [toClick, setToClick] = useState(false);

  const toButton = () => {
    if (!disabled) {
      const timeNow = Date.now();
      if (timeNow - current.lastClickTime < 800) {
        return;
      }
      current.lastClickTime = timeNow;
      rest.onClick && rest.onClick();
      if (!toClick) {
        setToClick(!toClick);
        setTimeout(() => {
          setToClick(false);
        }, 800);
      }
    }
  };

  return (
    <>
      <Button
        {...rest}
        className={classnames(
          "y-button",
          cls,
          className,
          { "y-button-click": toClick },
          { "y-button-disabled": disabled }
        )}
        onClick={() => {
          toButton();
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default YButton;
