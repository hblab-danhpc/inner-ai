interface LogoImageProps {
  size?: "small" | "medium" | "large" | "xlarge" | number;
  className?: string;
  showAnimation?: boolean;
}

export default function LogoImage({
  size = "medium",
  className = "",
  showAnimation = false
}: LogoImageProps) {
  const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fc601a2ca9a5348a3b9854655ad248f8a%2F44645efc353f4bc8a945522e10315c01?format=webp&width=1200";

  const sizeMap = {
    small: "w-20 sm:w-24",
    medium: "w-32 sm:w-40",
    large: "w-48 sm:w-64",
    xlarge: "w-56 sm:w-80 md:w-96",
  };

  const widthClass = typeof size === "string" ? sizeMap[size] : "";
  const animationClass = showAnimation ? "animate-float" : "";

  return (
    <div className={`flex flex-col items-center ${animationClass} ${className}`}>
      <img
        src={logoUrl}
        alt="INNER.AI Logo"
        className={`object-contain drop-shadow-xl ${typeof size === "string" ? widthClass : ""}`}
        style={typeof size === "number" ? { width: `${size}px`, height: "auto" } : {}}
      />
    </div>
  );
}
