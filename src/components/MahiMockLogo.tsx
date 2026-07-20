import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

export default function MahiMockLogo({
  showText = true,
  className = "",
}: Props) {
  return (
    <div className={className}>
      {showText ? <h2>MahiMock</h2> : null}
    </div>
  );
}