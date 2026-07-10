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
        src="/clickforge-logo.png"
        alt="ClickForge"
        width={500}
        height={500}
        priority={priority}
        className={imageClassName}
      />
    </span>
  );
}
