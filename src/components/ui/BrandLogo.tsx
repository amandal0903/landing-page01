import React from "react";

const LOGO_DEV_TOKEN = "pk_MdLdiT0EQ6uFB9FQBG3xcA";

interface BrandLogoProps {
  domain: string;
  alt?: string;
  size?: number;
  className?: string;
}

export function BrandLogo({
  domain,
  alt = "",
  size = 18,
  className = "app-logo",
}: BrandLogoProps) {
  const src = `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&format=webp&retina=true`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
