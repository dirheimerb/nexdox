export interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {}

export default function ArrowIcon(props: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 6"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}
