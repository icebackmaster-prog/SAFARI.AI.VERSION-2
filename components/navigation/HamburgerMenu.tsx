"use client";

interface Props {
  onClick: () => void;
}

export default function HamburgerMenu({
  onClick,
}: Props) {
  return (
    <button
      className="hamburger"
      onClick={onClick}
    >
      ☰
    </button>
  );
}
