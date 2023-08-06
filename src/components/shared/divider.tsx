const isMediaQuerySmall = typeof window !== `undefined` ? window.matchMedia(`(max-width: 720px)`).matches : false;

export default function Divider(props?: { margin: string; maxWidth: string; color: string; small?: boolean }) {
  const margin = props?.small ? '3.5rem 0 3.5rem 0' : isMediaQuerySmall ? '3.5rem 0 2.5rem 0' : '5.5rem 0 4.5rem 0';

  const finalMargin = props?.margin ?? margin;
  const maxWidth = props?.maxWidth ?? undefined;
  const color = props?.color ?? '#eaeae4';

  return (
    <hr
      style={{
        borderBottom: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderTop: `2px solid ${color}`,
        margin: finalMargin,
        height: '0px',
        maxWidth: maxWidth,
      }}
    />
  );
}
