import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "",
  imageClassName = "h-14 w-auto",
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={className}>
      <Image
        src="/digital-ranjit-logo-white.png"
        alt="Digital Ranjit"
        width={850}
        height={345}
        priority={priority}
        className={imageClassName}
      />
    </span>
  );
}
