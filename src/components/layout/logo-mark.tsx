import Image from 'next/image';

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Muhid Hossain logo"
      width={64}
      height={64}
      priority
      className={className}
    />
  );
}
