/**
 * Pozadinski slojevi: mesh gradijent koji se kreće, zrnasta tekstura i svetlo
 * koje prati miša. Sve troje su čisti CSS — ovde nema nijedne linije logike,
 * pa komponenta ostaje serverska i ne dodaje ništa u JS bundle.
 *
 * Pozicioniranje svetla preuzima MotionRuntime; dok se to ne desi, stoji na
 * (0,0) izvan ekrana i ne smeta.
 */
export default function Aurora() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="spotlight" data-spotlight aria-hidden="true" />
    </>
  )
}
