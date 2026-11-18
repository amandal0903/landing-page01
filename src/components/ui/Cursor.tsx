import React from "react";
import { BrandMarkCursor } from "./BrandMark";

interface CursorProps {
  className: string;
  initialTransform: string;
  human?: {
    initials: string;
    name: string;
  };
}

export function Cursor({ className, initialTransform, human }: CursorProps) {
  return (
    <div
      className={human ? `cur cur-h ${className}` : `cur ${className}`}
      style={{ transform: initialTransform }}
    >
      <svg className="cur-a" viewBox="0 0 18 22" aria-hidden="true">
        <path d="M1.5 1.5v15.6l4.1-3.7 2.8 6.3 2.7-1.2-2.8-6.2h5.6z" />
      </svg>
      {human ? (
        <span className="cur-tag">
          <span className="cur-av">{human.initials}</span>
          {human.name}
        </span>
      ) : (
        <span className="cur-tag">
          <BrandMarkCursor />
          Reflex
        </span>
      )}
    </div>
  );
}
