import clsx from "clsx";
import { type IHStackProps } from "./HStack.props.ts";

export const HStack = ({ className, children, ...rest }: IHStackProps) => {
  return (
    <div className={clsx(`flex flex-row`, className)} {...rest}>
      {children}
    </div>
  );
};
