import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// Partial将所有属性转化为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<ButtonProps> = props => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href = 'http://www.baidu.com',
    ...restProps
  } = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    "'disabled'": btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
